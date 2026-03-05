"""Demo app para Lab 03 — Tracing distribuído com OpenTelemetry.

Cada instância atua como um serviço diferente baseado nas env vars.
"""

import os
import random
import time
import threading

from flask import Flask
import requests as http_client

# --- OpenTelemetry setup ---
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.sdk.resources import Resource
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor

service_name = os.environ.get("OTEL_SERVICE_NAME", "unknown")
otlp_endpoint = os.environ.get("OTEL_EXPORTER_OTLP_ENDPOINT", "http://localhost:4317")

resource = Resource.create({"service.name": service_name})
provider = TracerProvider(resource=resource)
exporter = OTLPSpanExporter(endpoint=otlp_endpoint, insecure=True)
provider.add_span_processor(BatchSpanProcessor(exporter))
trace.set_tracer_provider(provider)

tracer = trace.get_tracer(service_name)

app = Flask(__name__)
FlaskInstrumentor().instrument_app(app)
RequestsInstrumentor().instrument()

port = int(os.environ.get("APP_PORT", "8000"))


# --- Frontend routes ---
@app.route("/order")
def frontend_order():
    order_url = os.environ.get("ORDER_SVC_URL", "http://localhost:8001")
    inventory_url = os.environ.get("INVENTORY_SVC_URL", "http://localhost:8002")

    with tracer.start_as_current_span("check-inventory"):
        inv_resp = http_client.get(f"{inventory_url}/check")

    with tracer.start_as_current_span("create-order"):
        order_resp = http_client.post(f"{order_url}/create-order")

    return {
        "status": "order processed",
        "inventory": inv_resp.json(),
        "order": order_resp.json(),
    }


@app.route("/inventory")
def frontend_inventory():
    inventory_url = os.environ.get("INVENTORY_SVC_URL", "http://localhost:8002")
    with tracer.start_as_current_span("check-inventory"):
        resp = http_client.get(f"{inventory_url}/check")
    return resp.json()


# --- Order service routes ---
@app.route("/create-order", methods=["POST"])
def create_order():
    payment_url = os.environ.get("PAYMENT_SVC_URL", "http://localhost:8003")
    inventory_url = os.environ.get("INVENTORY_SVC_URL", "http://localhost:8002")

    with tracer.start_as_current_span("process-payment"):
        pay_resp = http_client.post(f"{payment_url}/process-payment")

    with tracer.start_as_current_span("reserve-inventory"):
        inv_resp = http_client.post(f"{inventory_url}/reserve")

    time.sleep(random.uniform(0.01, 0.05))

    if pay_resp.status_code != 200:
        return {"status": "failed", "reason": "payment failed"}, 500

    return {"status": "created", "order_id": random.randint(1000, 9999)}


# --- Payment service routes ---
@app.route("/process-payment", methods=["POST"])
def process_payment():
    # Latência artificial variável
    latency = random.uniform(0.1, 0.5)
    time.sleep(latency)

    # 10% de falha
    if random.random() < 0.1:
        current_span = trace.get_current_span()
        current_span.set_attribute("error.message", "Payment gateway timeout")
        current_span.set_attribute("payment.latency_ms", int(latency * 1000))
        return {"status": "error", "message": "Payment gateway timeout"}, 500

    return {"status": "success", "transaction_id": f"txn-{random.randint(10000, 99999)}"}


# --- Inventory service routes ---
@app.route("/check")
def check_inventory():
    time.sleep(random.uniform(0.01, 0.03))
    return {"available": True, "quantity": random.randint(1, 100)}


@app.route("/reserve", methods=["POST"])
def reserve_inventory():
    time.sleep(random.uniform(0.02, 0.08))
    return {"reserved": True, "reservation_id": f"res-{random.randint(100, 999)}"}


@app.route("/health")
def health():
    return {"status": "healthy", "service": service_name}


# --- Auto traffic for frontend ---
def generate_traffic():
    if service_name != "frontend":
        return
    time.sleep(10)
    while True:
        try:
            http_client.get(f"http://localhost:{port}/order")
        except Exception:
            pass
        time.sleep(random.uniform(2.0, 5.0))


if __name__ == "__main__":
    traffic_thread = threading.Thread(target=generate_traffic, daemon=True)
    traffic_thread.start()
    app.run(host="0.0.0.0", port=port)
