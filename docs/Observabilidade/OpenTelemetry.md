# 🔭 OpenTelemetry (OTel)

## O que é?

Um **padrão aberto** e conjunto de ferramentas para gerar, coletar e exportar dados de telemetria (logs, métricas e traces). É mantido pela CNCF e está se tornando **o padrão da indústria**.

> Antes do OTel, cada ferramenta tinha seu próprio SDK. Mudou de Jaeger para Datadog? Reescreve tudo. Com OTel, você instrumenta **uma vez** e manda para qualquer backend.

---

## O problema que resolve

```
ANTES (vendor lock-in):
  App → SDK Datadog → Datadog
  App → SDK New Relic → New Relic   (código diferente!)
  App → SDK Jaeger → Jaeger         (código diferente!)

DEPOIS (OpenTelemetry):
  App → SDK OTel → Collector → Datadog / Jaeger / Grafana / qualquer um
```

---

## Componentes principais

| Componente | O que faz |
|------------|-----------|
| **API** | Interfaces para instrumentação (o que você usa no código) |
| **SDK** | Implementação da API (processa e exporta) |
| **Collector** | Agente que recebe, processa e exporta telemetria |
| **Exporters** | Enviam dados para backends (Jaeger, Prometheus, etc.) |

---

## Exemplo prático — instrumentação automática

```python
# Python com OpenTelemetry - instrumentação automática
# Instale: pip install opentelemetry-distro opentelemetry-exporter-otlp

# Rode com auto-instrumentação (zero código!):
# opentelemetry-instrument --service_name=meu-servico python app.py

from flask import Flask
app = Flask(__name__)

@app.route("/pay")
def pay():
    # OTel automaticamente cria spans para cada request
    # e propaga o contexto entre serviços
    return {"status": "ok"}
```

```python
# Instrumentação manual (mais controle)
from opentelemetry import trace

tracer = trace.get_tracer("payment-service")

def process_payment(order_id):
    with tracer.start_as_current_span("process_payment") as span:
        span.set_attribute("order.id", order_id)
        span.set_attribute("payment.method", "credit_card")
        # ... lógica de pagamento
        span.add_event("payment_processed")
```

---

## O Collector

O Collector é o **coração** do OTel. Ele desacopla a aplicação do backend:

```yaml
# otel-collector-config.yaml
receivers:
  otlp:
    protocols:
      grpc:
        endpoint: 0.0.0.0:4317
      http:
        endpoint: 0.0.0.0:4318

processors:
  batch:
    timeout: 5s

exporters:
  jaeger:
    endpoint: jaeger:14250
  prometheus:
    endpoint: 0.0.0.0:8889

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [jaeger]
    metrics:
      receivers: [otlp]
      processors: [batch]
      exporters: [prometheus]
```

> Com o Collector, se amanhã você trocar de Jaeger para Tempo, muda **só a config** — zero mudança no código.

---

## Sinais suportados

| Sinal | Status | Descrição |
|-------|--------|-----------|
| **Traces** | ✅ Estável | Rastreamento distribuído |
| **Metrics** | ✅ Estável | Métricas numéricas |
| **Logs** | ✅ Estável | Registros de eventos, correlação com traces |
| **Baggage** | ✅ Estável | Propagação de contexto |
| **Profiling** | 🔄 Em progresso | Profiling contínuo (CPU, memória) |

---

## Boas práticas

- ✅ Comece com **auto-instrumentação** — resultados rápidos, zero código
- ✅ Use o **Collector** em produção — nunca exporte direto do app para o backend
- ✅ Adicione **atributos** relevantes nos spans (user_id, order_id)
- ✅ Defina `service.name` e `service.version` como resource attributes
- ❌ Não crie spans demais — apenas nos pontos que agregam valor
- ❌ Não ignore erros — registre exceções nos spans

---

## 🤔 Perguntas para reflexão

1. Se OpenTelemetry é **vendor-neutral**, por que empresas como Datadog e New Relic contribuem ativamente para o projeto? Qual o incentivo delas?
2. Qual a vantagem de usar o **Collector** em vez de exportar telemetria diretamente da aplicação?
3. Instrumentação **automática** vs **manual** — quando usar cada uma?
