# 🚀 Lab 05 — LGTM Stack (All-in-One)

> **Stack completa de observabilidade em um único container.**  
> Loki + Grafana + Tempo + Mimir — tudo pronto em menos de 5 minutos.

---

## O que é o LGTM?

**LGTM** é o acrônimo da stack de observabilidade da Grafana Labs:

| Letra | Ferramenta | Papel |
|:---:|---|---|
| **L** | Loki | Logs |
| **G** | Grafana | Visualização |
| **T** | Tempo | Traces |
| **M** | Mimir | Métricas (compatível com Prometheus) |

A imagem **`grafana/otel-lgtm`** empacota tudo isso + um **OTel Collector** embutido em um único container Docker. Basta enviar telemetria via OTLP e tudo funciona automaticamente — datasources pré-configurados, correlação entre pilares habilitada.

---

## Arquitetura

```
┌──────────────────────────────────────────────────────────┐
│                  grafana/otel-lgtm                       │
│                                                          │
│  ┌────────────┐    ┌───────┐  ┌───────┐  ┌───────────┐  │
│  │    OTel    │───▶│ Mimir │  │ Loki  │  │   Tempo   │  │
│  │ Collector  │───▶│(métr.)│  │(logs) │  │ (traces)  │  │
│  │ :4317/:4318│───▶│       │  │       │  │           │  │
│  └────────────┘    └───┬───┘  └───┬───┘  └─────┬─────┘  │
│                        │         │             │         │
│                   ┌────┴─────────┴─────────────┴────┐    │
│                   │          Grafana :3000           │    │
│                   │  (datasources pré-configurados)  │    │
│                   └─────────────────────────────────┘    │
│                                                          │
└──────────────────────────────────────────────────────────┘
                         ▲
                         │ OTLP (gRPC/HTTP)
                         │
              ┌──────────┴──────────┐
              │     Sua App         │
              │  (OTel SDK Python)  │
              └─────────────────────┘
```

**Portas expostas:**

| Porta | Serviço |
|:---:|---|
| `3000` | Grafana (UI) |
| `4317` | OTLP gRPC (traces, métricas, logs) |
| `4318` | OTLP HTTP (traces, métricas, logs) |

---

## Subindo o Lab

```bash
cd labs/lab05
docker compose up -d
```

Após ~30 segundos, acesse:

- **Grafana**: [http://localhost:3000](http://localhost:3000) (sem login necessário)

A aplicação já estará gerando tráfego simulado automaticamente.

---

## O que a aplicação faz

Uma API simples com 3 endpoints que demonstra os 3 pilares:

| Endpoint | O que gera |
|---|---|
| `GET /` | Health check — trace simples + log |
| `GET /users` | Busca de usuários — métricas de latência, trace com sub-span de "banco" |
| `POST /orders` | Criação de pedido — trace multi-span, logs estruturados, chance de erro simulado |

Um gerador de tráfego interno chama esses endpoints a cada 2 segundos, então você não precisa fazer nada manualmente.

---

## Exercícios

### Exercício 1 — Explore os 3 pilares

1. Acesse o Grafana em [http://localhost:3000](http://localhost:3000)
2. Vá em **Explore** e selecione o datasource **Tempo**
3. Clique em **Search** e encontre traces da aplicação
4. Abra um trace e observe os spans (waterfall view)
5. Troque para **Loki** e busque logs: `{service_name="lab05-app"}`
6. Troque para **Mimir** e execute: `rate(http_server_request_duration_seconds_count[1m])`

> 🤔 **Reflexão**: Compare este setup com o Lab 04. Quantos containers você usou aqui vs lá?

### Exercício 2 — Correlação entre pilares

1. No Grafana, abra **Explore** com o datasource **Tempo**
2. Encontre um trace do endpoint `/orders`
3. Clique em um span — observe o botão **"Logs for this span"**
4. Clique e veja os logs correlacionados automaticamente via `trace_id`
5. Volte ao trace e observe o link para **métricas** associadas

> 🤔 **Reflexão**: A correlação trace↔log acontece automaticamente aqui. Por que isso funciona sem configuração extra?

### Exercício 3 — Simule e investigue um erro

1. Observe os logs em **Loki**: `{service_name="lab05-app"} |= "ERROR"`
2. Quando um erro aparecer, copie o `trace_id` do log
3. Vá ao **Tempo** e cole o `trace_id` para ver o trace completo
4. Analise: qual span falhou? Qual foi a mensagem de erro?

> 🤔 **Reflexão**: Em produção, esse fluxo (log de erro → trace → identificação do span falho) é exatamente como um SRE investiga incidentes. Como isso se compara ao troubleshooting sem traces?

### Exercício 4 — PromQL/LogQL/TraceQL

Execute estas queries no **Explore**:

**Mimir (PromQL):**
```promql
# Taxa de requisições por endpoint
rate(http_server_request_duration_seconds_count[5m])

# Latência P95
histogram_quantile(0.95, rate(http_server_request_duration_seconds_bucket[5m]))
```

**Loki (LogQL):**
```logql
# Todos os logs da app
{service_name="lab05-app"}

# Apenas erros
{service_name="lab05-app"} |= "ERROR"

# Volume de logs por nível
sum(count_over_time({service_name="lab05-app"}[1m])) by (severity)
```

**Tempo (TraceQL):**
```
# Traces do endpoint /orders
{resource.service.name = "lab05-app" && name = "POST /orders"}

# Traces com erro
{resource.service.name = "lab05-app" && status = error}

# Traces com duração > 500ms
{resource.service.name = "lab05-app" && duration > 500ms}
```

> 🤔 **Reflexão**: TraceQL é a linguagem de query do Tempo, assim como PromQL é do Prometheus e LogQL do Loki. Qual a vantagem de ter linguagens de query dedicadas por pilar?

---

## Limpeza

```bash
docker compose down -v
```

---

## Comparação: Lab 04 vs Lab 05

| Aspecto | Lab 04 (Stack Manual) | Lab 05 (LGTM All-in-One) |
|---|---|---|
| Containers | ~8 | 2 (LGTM + app) |
| Arquivos de config | ~10 | 0 (tudo pré-configurado) |
| Tempo de setup | ~30 min | ~5 min |
| Correlação entre pilares | Config manual (datasources) | Automática |
| Customização | Total (cada peça configurável) | Limitada |
| Uso em produção | ✅ Sim (arquitetura real) | ❌ Não (apenas dev/estudo) |
| Aprendizado | Alto (entende cada peça) | Médio (foco na experiência) |

---

## Quando usar cada abordagem?

| Cenário | Melhor opção |
|---|---|
| Aprender os conceitos | Lab 05 (LGTM) — foco no "o que" |
| Entender a arquitetura | Lab 04 (Manual) — foco no "como" |
| Demo rápida para o time | Lab 05 (LGTM) — sobe em 1 min |
| Ambiente de dev local | Lab 05 (LGTM) — leve e prático |
| Preparação para produção | Lab 04 (Manual) — reflete o real |

---

## Conceitos reforçados neste Lab

| Conceito | Capítulo do Guia |
|---|---|
| Os 3 pilares em ação | [Logs](../Observabilidade/Logs.md), [Métricas](../Observabilidade/Metricas.md), [Traces](../Observabilidade/Traces.md) |
| OTLP como protocolo unificado | [OpenTelemetry](../Observabilidade/OpenTelemetry.md) |
| Correlação entre pilares | [OpenTelemetry](../Observabilidade/OpenTelemetry.md) |
| PromQL, LogQL, TraceQL | [Métricas](../Observabilidade/Metricas.md), [Logs](../Observabilidade/Logs.md), [Traces](../Observabilidade/Traces.md) |
| Stack Grafana (LGTM) | [Dashboards](../Observabilidade/Dashboards.md) |

---

## 🤔 Questões de Reflexão

1. O LGTM all-in-one é prático para desenvolvimento, mas por que **não** é recomendado para produção?
2. A imagem `grafana/otel-lgtm` inclui um OTel Collector embutido. Qual a vantagem de receber tudo via OTLP em vez de protocolos separados?
3. Mimir é o backend de métricas da Grafana Labs, compatível com PromQL. Qual a diferença entre usar Mimir vs Prometheus diretamente?
