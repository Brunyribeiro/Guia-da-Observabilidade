"""
Lab 05 — LGTM All-in-One
API simples instrumentada com OpenTelemetry (auto-instrumentation).
Gera métricas, logs e traces enviados via OTLP para grafana/otel-lgtm.
"""

import logging
import random
import threading
import time
import urllib.request

from flask import Flask, jsonify, request
from opentelemetry import trace

# ─── Flask App ───────────────────────────────────────────
app = Flask(__name__)

# ─── Logger (capturado pelo OTel auto-instrumentation) ───
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger("lab05")

# ─── Tracer ──────────────────────────────────────────────
tracer = trace.get_tracer("lab05-app")


# ─── Endpoints ───────────────────────────────────────────

@app.route("/")
def health():
    logger.info("Health check chamado")
    return jsonify({"status": "ok", "service": "lab05-app"})


@app.route("/users")
def get_users():
    """Simula busca de usuários com sub-span de 'consulta ao banco'."""
    with tracer.start_as_current_span("db.query", attributes={"db.system": "postgresql", "db.statement": "SELECT * FROM users"}) as span:
        # Simula latência de banco
        delay = random.uniform(0.01, 0.15)
        time.sleep(delay)
        span.set_attribute("db.rows_returned", random.randint(1, 50))

    users = [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"},
        {"id": 3, "name": "Charlie"},
    ]
    logger.info("Usuários retornados: %d", len(users))
    return jsonify(users)


@app.route("/orders", methods=["POST"])
def create_order():
    """Simula criação de pedido com múltiplos spans e chance de erro."""
    order_id = f"ORD-{random.randint(1000, 9999)}"

    # Span: validação
    with tracer.start_as_current_span("order.validate", attributes={"order.id": order_id}):
        time.sleep(random.uniform(0.005, 0.03))
        logger.info("Pedido %s validado", order_id)

    # Span: processamento de pagamento
    with tracer.start_as_current_span("payment.process", attributes={"order.id": order_id, "payment.method": "credit_card"}) as span:
        time.sleep(random.uniform(0.02, 0.1))

        # 15% de chance de erro no pagamento
        if random.random() < 0.15:
            error_msg = f"Pagamento recusado para pedido {order_id}"
            logger.error(error_msg)
            span.set_status(trace.StatusCode.ERROR, error_msg)
            span.record_exception(Exception(error_msg))
            return jsonify({"error": error_msg, "order_id": order_id}), 500

        logger.info("Pagamento aprovado para pedido %s", order_id)

    # Span: salvar no banco
    with tracer.start_as_current_span("db.insert", attributes={"db.system": "postgresql", "db.statement": f"INSERT INTO orders (id) VALUES ('{order_id}')"}):
        time.sleep(random.uniform(0.01, 0.05))

    logger.info("Pedido %s criado com sucesso", order_id)
    return jsonify({"order_id": order_id, "status": "created"}), 201


# ─── Gerador de tráfego automático ───────────────────────

def traffic_generator():
    """Gera tráfego automático para a API a cada 2 segundos."""
    time.sleep(5)  # Espera a app iniciar
    base = "http://localhost:5000"
    endpoints = [
        ("GET", "/"),
        ("GET", "/users"),
        ("POST", "/orders"),
        ("GET", "/users"),
        ("POST", "/orders"),
    ]
    while True:
        method, path = random.choice(endpoints)
        try:
            req = urllib.request.Request(f"{base}{path}", method=method)
            if method == "POST":
                req.add_header("Content-Type", "application/json")
                req.data = b"{}"
            urllib.request.urlopen(req, timeout=5)
        except Exception:
            pass
        time.sleep(random.uniform(1.5, 3.0))


# ─── Main ────────────────────────────────────────────────

if __name__ == "__main__":
    # Inicia gerador de tráfego em background
    t = threading.Thread(target=traffic_generator, daemon=True)
    t.start()

    app.run(host="0.0.0.0", port=5000)
