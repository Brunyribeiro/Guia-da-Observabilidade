# 📊 Métricas

## O que são?

Valores numéricos que representam o estado de um sistema ao longo do tempo. Diferente de logs (eventos individuais), métricas são **agregações** — elas mostram tendências e padrões.

---

## Tipos de métricas

| Tipo | O que mede | Exemplo |
|------|-----------|---------|
| **Counter** | Acumulativo, só sobe | Total de requisições recebidas |
| **Gauge** | Valor atual, sobe e desce | Uso de memória em % |
| **Histogram** | Distribuição de valores | Latência de requisições (p50, p95, p99) |
| **Summary** | Similar ao histogram | Quantis calculados no cliente |

---

## Exemplo prático

Imagine que você quer monitorar uma API de pagamentos:

```
# Counter - total de pagamentos processados
payments_total{status="success"} 15234
payments_total{status="failed"} 47

# Gauge - conexões ativas no banco agora
db_connections_active 23

# Histogram - latência do endpoint /pay
http_request_duration_seconds_bucket{le="0.1"} 9800
http_request_duration_seconds_bucket{le="0.5"} 14500
http_request_duration_seconds_bucket{le="1.0"} 15200
```

> O formato acima é **Prometheus exposition format**, o padrão mais usado no mercado.

---

## Percentis — por que a média mente?

| Cenário | Média | p99 |
|---------|-------|-----|
| 1000 requisições: 980 de 100ms + 20 de 10s | **~300ms** | **10s** |

A média diz "~300ms, aceitável", mas 2% dos seus usuários espera **10 segundos**. Por isso usamos percentis:

- **p50** (mediana) → metade das requisições é mais rápida que isso
- **p95** → 95% das requisições é mais rápida
- **p99** → 99% das requisições é mais rápida (revela os piores casos)

---

## Labels/Dimensões

Labels tornam as métricas poderosas. Sem elas, você tem um número. Com elas, pode filtrar e agrupar:

```
# Sem label - só um número
http_requests_total 50000

# Com labels - agora você sabe de onde vem
http_requests_total{service="checkout", method="POST", status="500"} 12
http_requests_total{service="checkout", method="GET", status="200"} 49988
```

> ⚠️ Cuidado com **alta cardinalidade** — se você usar `user_id` como label, terá milhões de séries temporais. Isso **mata** o Prometheus.

---

## Ferramentas populares

| Ferramenta | Tipo | Destaque |
|------------|------|----------|
| **Prometheus** | Open source | Padrão do mercado, pull-based |
| **Grafana** | Open source | Visualização e dashboards |
| **Datadog** | SaaS | Métricas + APM integrados |
| **CloudWatch** | SaaS (AWS) | Nativo na AWS |
| **InfluxDB** | Open source | Time-series database |

---

## Boas práticas

- ✅ Use **RED** para serviços: Rate, Errors, Duration
- ✅ Use **USE** para infraestrutura: Utilization, Saturation, Errors
- ✅ Defina **alertas** baseados em percentis, não médias
- ✅ Nomeie métricas com padrão: `<namespace>_<nome>_<unidade>`
- ❌ Evite labels com alta cardinalidade (user_id, request_id)
- ❌ Não crie métricas que ninguém vai olhar

---

## 🤔 Perguntas para reflexão

1. Se a latência média da sua API é 200ms mas o p99 é 5s, o que isso diz sobre a experiência dos seus usuários?
2. Você criou uma label `user_id` nas suas métricas HTTP. Com 1 milhão de usuários, quantas séries temporais isso gera? Por que isso é um problema?
3. Você tem uma métrica `http_requests_total{endpoint="/api/users"}`. Como descobrir a **taxa** de requisições por segundo se o counter só cresce?