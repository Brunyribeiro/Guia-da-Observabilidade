"""Demo app para Lab 02 — Logs estruturados e não-estruturados."""

import json
import random
import time
import uuid
import threading
from datetime import datetime, timezone
from flask import Flask

app = Flask(__name__)

USERS = [42, 77, 101, 256, 500]
PRODUCTS = ["Notebook", "Mouse", "Teclado", "Monitor", "Headset"]


def log_structured(level, message, **extra):
    """Emite log estruturado em JSON."""
    entry = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "level": level,
        "service": "order-service",
        "trace_id": extra.pop("trace_id", str(uuid.uuid4())[:8]),
        "message": message,
        **extra,
    }
    print(json.dumps(entry), flush=True)


def log_unstructured(level, message):
    """Emite log não-estruturado (texto livre)."""
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
    print(f"{ts} {level} - {message}", flush=True)


@app.route("/")
def home():
    log_structured("INFO", "Homepage accessed")
    return {"status": "ok"}


@app.route("/order")
def order():
    user_id = random.choice(USERS)
    product = random.choice(PRODUCTS)
    total = round(random.uniform(29.90, 999.90), 2)
    trace_id = str(uuid.uuid4())[:12]

    log_structured("INFO", "Order created", trace_id=trace_id,
                   user_id=user_id, product=product, order_total=total)

    # Simula processamento
    time.sleep(random.uniform(0.05, 0.2))

    if random.random() < 0.2:
        log_structured("ERROR", "Payment failed: timeout after 30s",
                       trace_id=trace_id, user_id=user_id, order_total=total)
        # Log não-estruturado para comparação
        log_unstructured("ERROR",
                         f"Failed to process payment for user {user_id}: timeout after 30s")
        return {"error": "Payment timeout"}, 500

    log_structured("INFO", "Order completed successfully",
                   trace_id=trace_id, user_id=user_id, order_total=total)
    return {"order_id": trace_id, "status": "completed"}


@app.route("/health")
def health():
    return {"status": "healthy"}


def generate_traffic():
    """Simula tráfego de fundo."""
    import urllib.request
    time.sleep(5)
    while True:
        try:
            endpoint = random.choice(["/order", "/order", "/order", "/"])
            urllib.request.urlopen(f"http://localhost:8000{endpoint}")
        except Exception:
            pass
        time.sleep(random.uniform(1.0, 3.0))


if __name__ == "__main__":
    traffic_thread = threading.Thread(target=generate_traffic, daemon=True)
    traffic_thread.start()
    app.run(host="0.0.0.0", port=8000)
