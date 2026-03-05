# 🔗 Lab 03 — Traces com Tempo + OpenTelemetry

## Objetivo

Subir 3 microsserviços que se chamam entre si, instrumentados com OpenTelemetry SDK, enviando traces para o Grafana Tempo. Ao final, você terá:

- ✅ 3 serviços comunicando via HTTP com propagação de contexto
- ✅ OpenTelemetry SDK gerando spans automaticamente
- ✅ Grafana Tempo armazenando e exibindo traces
- ✅ Visualização de trace completo com waterfall view

---

## Arquitetura

```
                         ┌───────────────┐
                    ┌───▶│ inventory-svc │
                    │    │   (Python)    │
┌──────────┐       │    └───────────────┘
│ frontend │───────┤
│ (Python) │  :8000│    ┌───────────────┐       ┌───────────────┐
│          │───────┴───▶│  order-svc    │──────▶│ payment-svc   │
└──────────┘            │   (Python)    │       │   (Python)    │
                        └───────────────┘       └───────────────┘
      │                        │                       │
      └────────────────────────┼───────────────────────┘
                               │
                    ┌──────────┴──────────┐
                    │   OTel Collector    │
                    │   (OTLP receiver)   │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    │   Grafana Tempo     │ :3200
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    │      Grafana        │ :3000
                    └─────────────────────┘
```

---

## Subindo o ambiente

```bash
cd labs/lab03
docker compose up -d
```

| Serviço | URL | Credenciais |
|---------|-----|-------------|
| Frontend | [http://localhost:8000](http://localhost:8000) | — |
| Grafana | [http://localhost:3000](http://localhost:3000) | admin / admin |
| Tempo | [http://localhost:3200/ready](http://localhost:3200/ready) | — |

---

## O que observar

### 1. Gerando traces

Acesse os endpoints do frontend para gerar traces distribuídos:

```bash
# Pedido completo — chama order-svc → payment-svc + inventory-svc
curl http://localhost:8000/order

# Apenas consulta de estoque — chama inventory-svc
curl http://localhost:8000/inventory

# Gerar vários requests
for i in $(seq 1 20); do curl -s http://localhost:8000/order > /dev/null; done
```

### 2. Visualizando traces no Grafana

Abra `http://localhost:3000` → **Explore** → selecione **Tempo** como data source:

1. Em **Search**, selecione `service.name = frontend` e clique em **Run query**
2. Você verá uma lista de traces — clique em um
3. O **waterfall view** mostra cada span:

```
frontend: POST /order                        [=========================] 450ms
  ├─ order-svc: POST /create-order           [==================] 350ms
  │    ├─ payment-svc: POST /process-payment  [==========] 200ms
  │    └─ inventory-svc: POST /reserve        [====] 80ms
  └─ inventory-svc: GET /check               [==] 30ms
```

### 3. Entendendo a propagação de contexto

Observe que **todos os spans** têm o **mesmo trace_id**. Isso acontece porque:

1. O `frontend` cria o trace e gera o `trace_id`
2. Ao chamar `order-svc`, envia o header `traceparent` (W3C Trace Context)
3. O `order-svc` **propaga** o mesmo `trace_id` para `payment-svc` e `inventory-svc`
4. Resultado: uma árvore de spans conectada

### 4. Identificando problemas

O `payment-svc` tem uma latência artificial aleatória (100ms-500ms) e falha em ~10% dos requests. No trace, você verá:

- ⚠️ Spans com **status ERROR** marcados em vermelho
- ⏱️ Spans com **latência alta** visivelmente mais largos
- 🏷️ Atributos no span: `http.status_code`, `error.message`, `user.id`

---

## Exercícios

1. 🔍 Encontre um trace onde o `payment-svc` retornou **erro** — qual foi a mensagem?
2. 🔍 Compare a **latência total** de um trace com sucesso vs um com erro
3. 🔍 Procure um trace pelo `trace_id` — copie um ID de um log (simulando correlação log↔trace)
4. 🔍 Qual serviço é o **gargalo** (span mais lento na maioria dos traces)?

---

## Limpeza

```bash
docker compose down -v
```

---

## Conceitos praticados

| Conceito | Página do guia |
|----------|---------------|
| Spans, trace_id, context propagation | [🔗 Traces](../Observabilidade/Traces.md) |
| W3C Trace Context | [🔗 Traces](../Observabilidade/Traces.md) |
| OpenTelemetry SDK e Collector | [🔭 OpenTelemetry](../Observabilidade/OpenTelemetry.md) |
| MTTR e Root Cause Analysis | [⏱️ MTTR](../SRE/MTTR.md) |
