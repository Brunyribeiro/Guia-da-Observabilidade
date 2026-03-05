"""Demo app para Lab 01 — Métricas com Prometheus."""

import random
import time
import threading
from flask import Flask
from prometheus_client import (
    Counter, Gauge, Histogram, generate_latest, CONTENT_TYPE_LATEST
)

app = Flask(__name__)

# --- Métricas ---
REQUEST_COUNT = Counter(
    "http_requests_total",
    "Total HTTP requests",
    ["method", "endpoint", "status"]
)

REQUEST_DURATION = Histogram(
    "http_request_duration_seconds",
    "HTTP request latency in seconds",
    ["endpoint"],
    buckets=[0.01, 0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0]
)

ITEMS_IN_CART = Gauge(
    "app_items_in_cart",
    "Current number of items in shopping carts"
)

ACTIVE_USERS = Gauge(
    "app_active_users",
    "Number of active users"
)


# --- Endpoints ---
@app.route("/")
def home():
    start = time.time()
    time.sleep(random.uniform(0.01, 0.05))
    duration = time.time() - start
    REQUEST_COUNT.labels(method="GET", endpoint="/", status="200").inc()
    REQUEST_DURATION.labels(endpoint="/").observe(duration)
    return {"message": "Hello from demo-app!", "status": "ok"}


@app.route("/checkout")
def checkout():
    start = time.time()
    time.sleep(random.uniform(0.05, 0.3))
    duration = time.time() - start

    # 30% de chance de erro
    if random.random() < 0.3:
        REQUEST_COUNT.labels(method="POST", endpoint="/checkout", status="500").inc()
        REQUEST_DURATION.labels(endpoint="/checkout").observe(duration)
        return {"error": "Payment timeout"}, 500

    REQUEST_COUNT.labels(method="POST", endpoint="/checkout", status="200").inc()
    REQUEST_DURATION.labels(endpoint="/checkout").observe(duration)
    return {"message": "Checkout successful", "order_id": random.randint(1000, 9999)}


@app.route("/slow")
def slow():
    start = time.time()
    time.sleep(random.uniform(0.5, 2.0))  # Latência alta proposital
    duration = time.time() - start
    REQUEST_COUNT.labels(method="GET", endpoint="/slow", status="200").inc()
    REQUEST_DURATION.labels(endpoint="/slow").observe(duration)
    return {"message": "Finally done!", "took_seconds": round(duration, 2)}


@app.route("/metrics")
def metrics():
    return generate_latest(), 200, {"Content-Type": CONTENT_TYPE_LATEST}


# --- Gerador de tráfego automático ---
def generate_traffic():
    """Simula tráfego de fundo para os dashboards não ficarem vazios."""
    import urllib.request
    time.sleep(5)  # Espera a app subir
    while True:
        try:
            endpoints = ["/", "/", "/", "/checkout", "/slow"]
            endpoint = random.choice(endpoints)
            urllib.request.urlopen(f"http://localhost:8000{endpoint}")
        except Exception:
            pass
        ITEMS_IN_CART.set(random.randint(0, 20))
        ACTIVE_USERS.set(random.randint(5, 50))
        time.sleep(random.uniform(0.5, 2.0))


if __name__ == "__main__":
    traffic_thread = threading.Thread(target=generate_traffic, daemon=True)
    traffic_thread.start()
    app.run(host="0.0.0.0", port=8000)
