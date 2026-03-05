# 📄 Lab 02 — Logs com Loki + Grafana

## Objetivo

Subir uma aplicação que gera logs estruturados (JSON), coletar com Promtail, armazenar no Loki e consultar no Grafana. Ao final, você terá:

- ✅ App gerando logs estruturados e não-estruturados para comparação
- ✅ Promtail coletando e enviando para Loki
- ✅ Grafana com Explore para queries LogQL
- ✅ Prática com filtros, parsing e agregação

---

## Arquitetura

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│   Demo App   │──────▶│   Promtail   │──────▶│     Loki     │──────▶│   Grafana    │
│  (Python)    │ logs  │  (collector) │       │   (storage)  │ :3100 │              │ :3000
│  stdout/json │       │  labels +    │       │              │       │  Explore     │
│              │       │  pipeline    │       │              │       │  LogQL       │
└──────────────┘       └──────────────┘       └──────────────┘       └──────────────┘
```

---

## Subindo o ambiente

```bash
cd labs/lab02
docker compose up -d
```

| Serviço | URL | Credenciais |
|---------|-----|-------------|
| Demo App | [http://localhost:8000](http://localhost:8000) | — |
| Loki | [http://localhost:3100/ready](http://localhost:3100/ready) | — |
| Grafana | [http://localhost:3000](http://localhost:3000) | admin / admin |

---

## O que observar

### 1. Logs da aplicação

A app gera dois tipos de log propositalmente:

**Estruturado (JSON):**
```json
{"timestamp": "2025-11-15T14:05:32Z", "level": "INFO", "service": "order-service", "trace_id": "abc-123", "message": "Order created", "user_id": 42, "order_total": 159.90}
```

**Não-estruturado (texto):**
```
2025-11-15 14:05:32 ERROR - Failed to process payment for user 42: timeout after 30s
```

### 2. Queries LogQL no Grafana

Abra `http://localhost:3000` → **Explore** → selecione **Loki** como data source:

| Query LogQL | O que mostra |
|-------------|-------------|
| `{job="demo-app"}` | Todos os logs da app |
| `{job="demo-app"} \|= "ERROR"` | Apenas logs com "ERROR" |
| `{job="demo-app"} != "health"` | Logs sem healthcheck |
| `{job="demo-app"} \| json \| level="ERROR"` | Parsing JSON + filtro por level |
| `{job="demo-app"} \| json \| user_id="42"` | Logs de um usuário específico |
| `rate({job="demo-app"} \|= "ERROR" [1m])` | Taxa de erros por minuto |
| `{job="demo-app"} \| json \| order_total > 100` | Pedidos acima de R$100 |

### 3. Comparando estruturado vs não-estruturado

Tente responder: **"Quantos erros o user_id 42 teve nos últimos 5 minutos?"**

- Com log estruturado: `{job="demo-app"} | json | level="ERROR" | user_id="42"` → **1 query**
- Com log não-estruturado: precisa de regex, parsing manual, e torcer para ter a info → **difícil**

> Essa é a diferença prática entre log estruturado e não-estruturado.

---

## Exercícios

1. 🔍 Use LogQL para encontrar todos os logs de **nível ERROR** dos últimos 5 minutos
2. 🔍 Crie um filtro que mostre apenas logs com `order_total > 200`
3. 🔍 Use `rate()` para criar um gráfico de **volume de logs por minuto** por nível (INFO vs ERROR)
4. 🔍 Encontre um `trace_id` nos logs e guarde — você vai usar no Lab 03

---

## Limpeza

```bash
docker compose down -v
```

---

## Conceitos praticados

| Conceito | Página do guia |
|----------|---------------|
| Logs estruturados vs não-estruturados | [📄 Logs](../Observabilidade/Logs.md) |
| Correlation ID / trace_id | [🔗 Traces](../Observabilidade/Traces.md) |
| Níveis de log (INFO, WARN, ERROR) | [📄 Logs](../Observabilidade/Logs.md) |
| Ferramentas (Loki, Promtail) | [🔭 OpenTelemetry](../Observabilidade/OpenTelemetry.md) |
