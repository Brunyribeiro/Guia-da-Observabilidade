# 🔭 Observability Foundation — DevOps Institute

## Visão Geral

| Item | Detalhe |
|---|---|
| **Organização** | DevOps Institute (PeopleCert) |
| **Nível** | Foundation |
| **Custo** | ~$350 USD |
| **Formato** | Online, supervisionado, múltipla escolha |
| **Duração** | 60 minutos |
| **Questões** | 40 questões |
| **Aprovação** | 65% (26/40) |
| **Validade** | 3 anos |
| **Pré-requisito** | Nenhum formal (recomendado conhecimento básico de DevOps) |

---

## Domínios do Exame

| Domínio | Peso Aprox. | Capítulos do Guia |
|---|---|---|
| Fundamentos de Observabilidade | 20% | Observabilidade vs Monitoramento, OMM |
| Logs | 15% | Logs |
| Métricas | 15% | Métricas, Golden Signals |
| Traces | 15% | Traces |
| Ferramentas e Ecossistema | 15% | OpenTelemetry, Dashboards, Alertas |
| Cultura e Práticas | 10% | SLI, SLO, SLA, Incident Management |
| Automação e Pipelines | 10% | Runbooks, Release e Change Management |

---

## O que é cobrado

### 1. Fundamentos de Observabilidade
- Diferença entre monitoramento e observabilidade
- Os três pilares: Logs, Métricas e Traces
- Modelo de Maturidade de Observabilidade (OMM)
- Cardinalidade e dimensionalidade dos dados
- Observabilidade em sistemas distribuídos

### 2. Logs
- Logs estruturados vs não estruturados
- Níveis de severidade (DEBUG, INFO, WARN, ERROR, FATAL)
- Centralização e agregação de logs
- Correlação de logs com traces (trace_id)

### 3. Métricas
- Tipos: Counter, Gauge, Histogram, Summary
- Golden Signals (Latência, Tráfego, Erros, Saturação)
- RED e USE methods
- Percentis (P50, P95, P99) e sua importância

### 4. Traces
- Conceitos: Span, Trace, Context Propagation
- Distributed Tracing em microserviços
- Sampling strategies (head-based, tail-based)
- Correlação entre traces, logs e métricas

### 5. Ferramentas e Ecossistema
- OpenTelemetry: SDK, Collector, Exporters
- Prometheus, Grafana, Loki, Tempo/Jaeger
- Pipelines de dados de observabilidade
- Dashboards como ferramenta de comunicação

### 6. Cultura e Práticas
- SLI/SLO/SLA e Error Budget
- Blameless culture e post-mortems
- On-Call e Incident Management
- Observability-Driven Development

---

## Mapeamento para este Guia

| Tópico do Exame | Página do Guia | Lab Prático |
|---|---|---|
| Observabilidade vs Monitoramento | [ObservabilidadeVsMonitoramento](../Observabilidade/ObservabilidadeVsMonitoramento.md) | — |
| Logs | [Logs](../Observabilidade/Logs.md) | Lab 02 |
| Métricas | [Métricas](../Observabilidade/Metricas.md) | Lab 01 |
| Traces | [Traces](../Observabilidade/Traces.md) | Lab 03 |
| OpenTelemetry | [OpenTelemetry](../Observabilidade/OpenTelemetry.md) | Lab 04 |
| Dashboards | [Dashboards](../Observabilidade/Dashboards.md) | Lab 01-04 |
| Alertas | [Alertas](../Observabilidade/Alertas.md) | Lab 01 |
| OMM | [OMM](../Observabilidade/Omm.md) | — |
| Golden Signals | [Golden Signals](../SRE/GoldenSignals.md) | Lab 01 |
| SLI/SLO/SLA | [SLI](../SRE/SLI.md), [SLO](../SRE/SLO.md), [SLA](../SRE/SLA.md) | — |
| Incident Management | [Incident Management](../SRE/IncidentManagement.md) | — |
| Post-Mortem | [Post-Mortem](../SRE/PostMortem.md) | — |

---

## Plano de Estudo — 4 Semanas

### Semana 1: Fundamentos
- [ ] Ler: Observabilidade vs Monitoramento
- [ ] Ler: OMM (Grafana + AWS)
- [ ] Ler: Logs (estruturados, níveis, correlação)
- [ ] Completar: Lab 02 (Logs com Loki)
- [ ] Revisar: Questões de reflexão dos capítulos acima

### Semana 2: Métricas e Traces
- [ ] Ler: Métricas (tipos, percentis, cardinalidade)
- [ ] Ler: Golden Signals + RED/USE
- [ ] Completar: Lab 01 (Prometheus + Grafana)
- [ ] Ler: Traces (spans, propagação, sampling)
- [ ] Completar: Lab 03 (Traces com Tempo)

### Semana 3: Ferramentas e Práticas
- [ ] Ler: OpenTelemetry (SDK, Collector, Exporters)
- [ ] Ler: Dashboards + Alertas
- [ ] Completar: Lab 04 (Stack Completa)
- [ ] Ler: SLI/SLO/SLA + Error Budget
- [ ] Ler: Incident Management + Post-Mortem

### Semana 4: Revisão e Simulado
- [ ] Revisar todas as questões de reflexão (🤔)
- [ ] Refazer Labs 01-04 sem consultar o guia
- [ ] Ler: Runbooks + Release/Change Management
- [ ] Fazer simulados oficiais (se disponíveis no site DevOps Institute)
- [ ] Revisar pontos fracos identificados

---

## Recursos Adicionais

| Recurso | Link |
|---|---|
| Site Oficial | [devopsinstitute.com](https://www.devopsinstitute.com/) |
| Curso Preparatório | Disponível via PeopleCert/DevOps Institute |
| Livro Base | *Observability Engineering* — Charity Majors, Liz Fong-Jones, George Miranda |
| Curso Gratuito | LFS148 — Getting Started with OpenTelemetry (Linux Foundation) |

---

## 🤔 Questões para Autoavaliação

1. Qual a diferença fundamental entre monitoramento e observabilidade?
2. Como os três pilares (Logs, Métricas, Traces) se complementam?
3. O que é cardinalidade em métricas e por que ela importa?
4. Como um trace_id permite correlacionar dados entre os três pilares?
5. Qual a relação entre SLO e Error Budget na prática?
