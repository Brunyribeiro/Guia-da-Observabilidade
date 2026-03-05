# 🔭 Lab 04 — Stack Completa com OpenTelemetry Collector

## Objetivo

Este lab reúne **tudo**: métricas, logs e traces em uma stack unificada com OpenTelemetry Collector como pipeline central. Ao final, você terá:

- ✅ 3 microsserviços instrumentados com OpenTelemetry
- ✅ OTel Collector recebendo todos os sinais via OTLP
- ✅ Prometheus (métricas) + Loki (logs) + Tempo (traces)
- ✅ Grafana com correlação entre os 3 pilares
- ✅ Experiência completa: de um alerta, chegar na causa raiz

---

## Arquitetura

```
┌─────────────────────────────────────────────────┐
│                  Aplicações                      │
│  ┌──────────┐  ┌──────────┐  ┌───────────────┐ │
│  │ frontend │  │order-svc │  │ payment-svc   │ │
│  │  :8000   │  │          │  │               │ │
│  └─────┬────┘  └────┬─────┘  └──────┬────────┘ │
│        │             │               │          │
│        └─────────────┼───────────────┘          │
│                      │ OTLP (gRPC :4317)        │
└──────────────────────┼──────────────────────────┘
                       │
              ┌────────┴────────┐
              │  OTel Collector │
              │  (gateway)      │
              └──┬─────┬─────┬──┘
                 │     │     │
          ┌──────┘     │     └──────┐
          │            │            │
   ┌──────┴──────┐ ┌───┴───┐ ┌─────┴─────┐
   │ Prometheus  │ │ Loki  │ │   Tempo   │
   │  (métricas) │ │(logs) │ │ (traces)  │
   │  :9090      │ │ :3100 │ │  :3200    │
   └──────┬──────┘ └───┬───┘ └─────┬─────┘
          │            │            │
          └────────────┼────────────┘
                       │
              ┌────────┴────────┐
              │     Grafana     │
              │     :3000       │
              │  Métricas ↔     │
              │  Logs ↔ Traces  │
              └─────────────────┘
```

---

## Subindo o ambiente

```bash
cd labs/lab04
docker compose up -d
```

> ⏱️ Este lab usa mais containers — a primeira vez pode levar 2-3 minutos.

| Serviço | URL | Credenciais |
|---------|-----|-------------|
| Frontend | [http://localhost:8000](http://localhost:8000) | — |
| Grafana | [http://localhost:3000](http://localhost:3000) | admin / admin |
| Prometheus | [http://localhost:9090](http://localhost:9090) | — |

---

## O que observar

### 1. A correlação métrica → log → trace

Este é o exercício mais importante. Simule o fluxo de investigação real:

```
Passo 1: Dashboard mostra error_rate subindo
         ↓
Passo 2: Filtrar métricas por serviço → payment-svc
         ↓
Passo 3: Ir para Logs do payment-svc no mesmo período
         ↓
Passo 4: Encontrar log de erro com trace_id
         ↓
Passo 5: Clicar no trace_id → abre o trace no Tempo
         ↓
Passo 6: Ver waterfall → span com erro mostra a causa raiz
```

### 2. No Grafana — Correlação com Exemplars

1. Abra **Dashboards** → **Observability Lab 04**
2. No painel de latência, clique em um **exemplar** (ponto no gráfico)
3. Ele abre o **trace correspondente** diretamente no Tempo
4. Do trace, clique em um span e veja os **logs associados**

> Isso é observabilidade em ação: **de uma métrica anômala até a linha de log com o erro**, sem trocar de ferramenta.

### 3. OpenTelemetry Collector — Pipeline

O Collector é configurado como **gateway central**:

```yaml
# Resumo do otel-collector-config.yaml
receivers:
  otlp:
    protocols:
      grpc:    # :4317
      http:    # :4318

processors:
  batch:       # Agrupa dados para eficiência

exporters:
  prometheus:  # Métricas → Prometheus
  loki:        # Logs → Loki
  otlp/tempo:  # Traces → Tempo

service:
  pipelines:
    metrics:
      receivers: [otlp]
      processors: [batch]
      exporters: [prometheus]
    logs:
      receivers: [otlp]
      processors: [batch]
      exporters: [loki]
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlp/tempo]
```

### 4. Gerando cenários

```bash
# Tráfego normal
curl http://localhost:8000/order

# Gerar carga para ver métricas
for i in $(seq 1 50); do curl -s http://localhost:8000/order &; done; wait

# Simular problema (endpoint com erro forçado)
curl http://localhost:8000/chaos
```

---

## Exercícios

1. 🔍 **Investigação completa:** A error_rate subiu no dashboard. Siga o fluxo métrica → log → trace e encontre a causa raiz
2. 🔍 **Exemplars:** No painel de latência do Grafana, encontre um exemplar e siga até o trace
3. 🔍 **Collector config:** Abra o `otel-collector-config.yaml` e adicione um processor `filter` para descartar healthcheck spans
4. 🔍 **SLI na prática:** Escreva uma query PromQL que calcule a **disponibilidade** (requests com sucesso / total) dos últimos 5 minutos

---

## Limpeza

```bash
docker compose down -v
```

---

## Conceitos praticados

| Conceito | Página do guia |
|----------|---------------|
| Os 3 pilares correlacionados | [🔍 Observabilidade vs Monitoramento](../Observabilidade/ObservabilidadeVsMonitoramento.md) |
| OpenTelemetry Collector | [🔭 OpenTelemetry](../Observabilidade/OpenTelemetry.md) |
| Golden Signals no dashboard | [🌟 Golden Signals](../SRE/GoldenSignals.md) |
| SLI com PromQL | [📏 SLI](../SRE/SLI.md) |
| Troubleshooting flow | [🔧 Troubleshooting](../troubleshooting.md) |
| Maturidade (Correlation dimension) | [🏔️ OMM](../Observabilidade/Omm.md) |
