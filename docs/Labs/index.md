# 🧪 Laboratórios Práticos

> Aprenda fazendo. Cada lab é um ambiente completo que sobe com **um único comando**.

---

## Pré-requisitos

| Ferramenta | Versão mínima | Instalação |
|------------|:---:|---|
| **Docker** | 24+ | [docs.docker.com/get-docker](https://docs.docker.com/get-docker/) |
| **Docker Compose** | v2+ | Já vem com Docker Desktop |
| **Git** | 2.x | [git-scm.com](https://git-scm.com/) |

```bash
# Verifique sua instalação
docker --version
docker compose version
```

---

## Roteiro de Labs

Os labs seguem uma **progressão natural** — cada um adiciona uma camada de observabilidade:

```
  Lab 01              Lab 02              Lab 03              Lab 04            Lab 05
┌────────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐
│  Métricas  │───▶│    Logs    │───▶│   Traces   │───▶│   Stack    │───▶│    LGTM    │
│ Prometheus │    │    Loki    │    │   Tempo    │    │  Completa  │    │ All-in-One │
│ + Grafana  │    │ + Promtail │    │ + OTel SDK │    │ OTel + All │    │ 1 container│
└────────────┘    └────────────┘    └────────────┘    └────────────┘    └────────────┘
  ~15 min           ~15 min           ~20 min           ~30 min           ~5 min
```

---

## Labs disponíveis

| # | Lab | O que você aprende | Tempo |
|---|-----|-------------------|:---:|
| 01 | [📊 Métricas com Prometheus + Grafana](lab01-metricas-prometheus-grafana.md) | Instrumentar app, scrape metrics, criar dashboard, PromQL básico | ~15 min |
| 02 | [📄 Logs com Loki + Grafana](lab02-logs-loki.md) | Logs estruturados, Promtail, LogQL, correlação por labels | ~15 min |
| 03 | [🔗 Traces com Tempo + OpenTelemetry](lab03-traces-tempo.md) | Tracing distribuído, spans, propagação de contexto entre serviços | ~20 min |
| 04 | [🔭 Stack Completa — OTel Collector + Grafana LGTM](lab04-otel-stack-completa.md) | Collector como pipeline central, correlação métrica↔log↔trace, deploy markers | ~30 min |
| 05 | [🚀 LGTM All-in-One](lab05-lgtm.md) | Stack completa em 1 container (grafana/otel-lgtm), ideal para dev e demos rápidas | ~5 min |

---

## Como usar

```bash
# 1. Clone o repositório
git clone https://github.com/brunyribeiro/Guia-da-Observabilidade.git
cd Guia-da-Observabilidade

# 2. Escolha um lab
cd labs/lab01

# 3. Suba o ambiente
docker compose up -d

# 4. Acesse o Grafana
# http://localhost:3000 (admin/admin)

# 5. Quando terminar
docker compose down -v
```

---

## Dica

> Faça os labs **na ordem**. O Lab 04 reúne tudo — se você fez os 3 anteriores, vai entender cada peça do quebra-cabeça. O Lab 05 é o bônus: mostra como ter tudo isso em **um único container** para o dia a dia.
