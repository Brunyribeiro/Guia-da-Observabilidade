# 📊 Lab 01 — Métricas com Prometheus + Grafana

## Objetivo

Subir uma aplicação Python instrumentada com métricas, coletar com Prometheus e visualizar no Grafana. Ao final, você terá:

- ✅ Uma app expondo `/metrics` com counters, gauges e histograms
- ✅ Prometheus coletando métricas a cada 5s
- ✅ Grafana com dashboard auto-provisionado
- ✅ Prática com queries PromQL

---

## Arquitetura

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│   Demo App   │──────▶│  Prometheus  │──────▶│   Grafana    │
│  (Python)    │ :8000 │              │ :9090 │              │ :3000
│  /metrics    │       │  scrape 5s   │       │  dashboards  │
└──────────────┘       └──────────────┘       └──────────────┘
```

---

## Subindo o ambiente

```bash
cd labs/lab01
docker compose up -d
```

| Serviço | URL | Credenciais |
|---------|-----|-------------|
| Demo App | [http://localhost:8000](http://localhost:8000) | — |
| Prometheus | [http://localhost:9090](http://localhost:9090) | — |
| Grafana | [http://localhost:3000](http://localhost:3000) | admin / admin |

---

## O que observar

### 1. Métricas da aplicação

Acesse `http://localhost:8000/metrics` e veja as métricas expostas:

```promql
# HELP http_requests_total Total HTTP requests
# TYPE http_requests_total counter
http_requests_total{method="GET",endpoint="/",status="200"} 42

# HELP http_request_duration_seconds HTTP request latency
# TYPE http_request_duration_seconds histogram
http_request_duration_seconds_bucket{le="0.1"} 38
http_request_duration_seconds_bucket{le="0.5"} 41
http_request_duration_seconds_bucket{le="1.0"} 42

# HELP app_items_in_cart Current items in shopping cart
# TYPE app_items_in_cart gauge
app_items_in_cart 7
```

### 2. Gerando tráfego

A app gera tráfego simulado automaticamente, mas você pode acessar os endpoints manualmente:

```bash
# Endpoint principal
curl http://localhost:8000/

# Endpoint que às vezes falha (30% de chance)
curl http://localhost:8000/checkout

# Endpoint com latência variável
curl http://localhost:8000/slow
```

### 3. Queries PromQL no Prometheus

Abra `http://localhost:9090` e tente:

| Query | O que mostra |
|-------|-------------|
| `http_requests_total` | Total de requests (counter) |
| `rate(http_requests_total[1m])` | Requests por segundo (último minuto) |
| `rate(http_requests_total{status="500"}[1m])` | Taxa de erros por segundo |
| `histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))` | Latência p99 |
| `app_items_in_cart` | Valor atual do gauge |

### 4. Dashboard no Grafana

Abra `http://localhost:3000` → Dashboards → **Observability Lab 01**. Você verá:

- Request rate por endpoint
- Error rate (%)
- Latência p50/p90/p99
- Items no carrinho (gauge)

---

## Exercícios

1. 🔍 Crie uma query que mostre a **taxa de erro** como porcentagem: `rate(erros) / rate(total) * 100`
2. 🔍 No Grafana, adicione um painel com o **histogram_quantile** para p50, p90 e p99 no mesmo gráfico
3. 🔍 Identifique qual endpoint tem a **maior latência**

---

## Limpeza

```bash
docker compose down -v
```

---

## Conceitos praticados

| Conceito | Página do guia |
|----------|---------------|
| Tipos de métrica (counter, gauge, histogram) | [📊 Métricas](../Observabilidade/Metricas.md) |
| PromQL e percentis | [📏 SLI](../SRE/SLI.md) |
| Golden Signals (latency, traffic, errors) | [🌟 Golden Signals](../SRE/GoldenSignals.md) |
| Design de dashboards | [📈 Dashboards](../Observabilidade/Dashboards.md) |
