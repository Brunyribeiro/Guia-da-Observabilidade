# 🔭 OTCA — OpenTelemetry Certified Associate (CNCF)

## Visão Geral

| Item | Detalhe |
|---|---|
| **Organização** | CNCF (Cloud Native Computing Foundation) |
| **Nível** | Associate |
| **Custo** | $250 USD |
| **Formato** | Online, supervisionado, múltipla escolha |
| **Duração** | 90 minutos |
| **Questões** | ~60 questões |
| **Aprovação** | 75% |
| **Validade** | 3 anos |
| **Pré-requisito** | Nenhum formal |
| **Status** | ⚠️ Lançamento anunciado pela CNCF (verificar disponibilidade) |

> ⚠️ **Nota**: A OTCA foi anunciada pela CNCF como uma certificação futura. Verifique o site oficial da Linux Foundation para confirmar a data de lançamento e detalhes atualizados do exame.

---

## Domínios Esperados do Exame

| Domínio | Peso Aprox. | Capítulos do Guia |
|---|---|---|
| OTel Concepts & Architecture | 20% | OpenTelemetry |
| Signals: Traces | 20% | Traces, OpenTelemetry |
| Signals: Metrics | 20% | Métricas, OpenTelemetry |
| Signals: Logs | 15% | Logs, OpenTelemetry |
| OTel Collector | 15% | OpenTelemetry |
| Instrumentation | 10% | OpenTelemetry |

---

## O que será cobrado

### 1. Conceitos e Arquitetura OTel (20%)
- O que é OpenTelemetry e seu papel no ecossistema CNCF
- Componentes: API, SDK, Collector, Exporters
- Diferença entre API e SDK
- OTLP (OpenTelemetry Protocol)
- Semantic Conventions
- Context Propagation (W3C Trace Context, B3)
- OTel vs OpenTracing vs OpenCensus (história e unificação)

### 2. Signals: Traces (20%)
- Modelo de dados: Span, Trace, SpanContext
- Atributos de Span: name, kind, status, attributes, events, links
- SpanKind: CLIENT, SERVER, PRODUCER, CONSUMER, INTERNAL
- Span Processors: Simple, Batch
- Samplers: AlwaysOn, AlwaysOff, TraceIdRatioBased, ParentBased
- Context Propagation entre serviços
- Exporters: OTLP, Jaeger, Zipkin

### 3. Signals: Metrics (20%)
- Instrumentos: Counter, UpDownCounter, Histogram, Gauge
- Sync vs Async instruments
- Aggregation: Sum, LastValue, ExplicitBucketHistogram
- Temporality: Cumulative vs Delta
- Views para customização de agregação
- Exporters: OTLP, Prometheus

### 4. Signals: Logs (15%)
- Modelo de dados de logs no OTel
- LogRecord: body, severity, attributes, trace_id, span_id
- Bridges com frameworks de log existentes (Log4j, SLF4J, Python logging)
- Correlação logs ↔ traces via trace_id/span_id
- Status: logs no OTel (verificar estabilidade)

### 5. OTel Collector (15%)
- Arquitetura: Receivers → Processors → Exporters
- Deployment: Agent vs Gateway
- Receivers: OTLP, Prometheus, Jaeger, Zipkin
- Processors: batch, memory_limiter, attributes, filter
- Exporters: OTLP, Prometheus, Loki, Jaeger, Tempo
- Pipelines: traces, metrics, logs
- Health check e observabilidade do próprio Collector

### 6. Instrumentation (10%)
- Auto-instrumentation vs manual instrumentation
- Instrumentação zero-code (Java agent, Python auto-instrumentation)
- Resource attributes: service.name, service.version, deployment.environment
- Baggage: propagação de contexto customizado
- Boas práticas de instrumentação

---

## Mapeamento para este Guia

| Tópico do Exame | Página do Guia | Lab Prático |
|---|---|---|
| Conceitos OTel | [OpenTelemetry](../Observabilidade/OpenTelemetry.md) | Lab 04 |
| Traces | [Traces](../Observabilidade/Traces.md) | Lab 03, 04 |
| Métricas | [Métricas](../Observabilidade/Metricas.md) | Lab 01, 04 |
| Logs | [Logs](../Observabilidade/Logs.md) | Lab 02, 04 |
| Collector | [OpenTelemetry](../Observabilidade/OpenTelemetry.md) | Lab 03, 04 |
| Dashboards/Visualização | [Dashboards](../Observabilidade/Dashboards.md) | Lab 04 |

---

## Plano de Estudo — 6 Semanas

### Semana 1: Fundamentos OTel
- [ ] Ler: OpenTelemetry neste guia
- [ ] Estudar: [opentelemetry.io/docs](https://opentelemetry.io/docs/) — Concepts
- [ ] Entender: API vs SDK vs Collector
- [ ] Estudar: OTLP e Semantic Conventions
- [ ] Curso gratuito: **LFS148 — Getting Started with OpenTelemetry**

### Semana 2: Traces em Profundidade
- [ ] Ler: Traces neste guia
- [ ] Estudar: Span model, SpanKind, Status
- [ ] Estudar: Samplers e Span Processors
- [ ] Completar: Lab 03 (Traces com Tempo)
- [ ] Praticar: Context Propagation entre serviços no Lab 03

### Semana 3: Métricas OTel
- [ ] Revisão: Métricas neste guia (tipos no OTel vs Prometheus)
- [ ] Estudar: Sync vs Async instruments
- [ ] Estudar: Temporality (Cumulative vs Delta)
- [ ] Estudar: Views e Aggregation
- [ ] Praticar: instrumentação de métricas no Lab 04

### Semana 4: Logs e Collector
- [ ] Revisão: Logs neste guia
- [ ] Estudar: modelo de dados de logs no OTel
- [ ] Estudar: Collector architecture — Receivers, Processors, Exporters
- [ ] Completar: Lab 04 (Stack Completa com Collector)
- [ ] Praticar: modificar pipeline do Collector no Lab 04

### Semana 5: Instrumentação e Integração
- [ ] Estudar: auto-instrumentation vs manual
- [ ] Estudar: Resource attributes e Baggage
- [ ] Revisar: código dos Labs 03 e 04 (instrumentação Python)
- [ ] Praticar: adicionar custom spans e attributes
- [ ] Estudar: correlação entre os três pilares

### Semana 6: Revisão e Simulado
- [ ] Revisar todas as questões de reflexão (🤔) dos capítulos OTel/Traces/Logs/Métricas
- [ ] Refazer Labs 03 e 04 sem consultar o guia
- [ ] Revisar: Semantic Conventions (lista oficial)
- [ ] Verificar se há simulados/materiais oficiais disponíveis
- [ ] Revisar pontos fracos

---

## Recursos Adicionais

| Recurso | Link |
|---|---|
| Página do Exame | [training.linuxfoundation.org](https://training.linuxfoundation.org/) (verificar disponibilidade) |
| Documentação Oficial | [opentelemetry.io/docs](https://opentelemetry.io/docs/) |
| Semantic Conventions | [opentelemetry.io/docs/specs/semconv](https://opentelemetry.io/docs/specs/semconv/) |
| Curso Gratuito LFS148 | Getting Started with OpenTelemetry (Linux Foundation) |
| OTel Collector Contrib | [github.com/open-telemetry/opentelemetry-collector-contrib](https://github.com/open-telemetry/opentelemetry-collector-contrib) |
| Especificação OTLP | [opentelemetry.io/docs/specs/otlp](https://opentelemetry.io/docs/specs/otlp/) |

---

## Dicas de Preparação

> 💡 O **Lab 04** deste guia é o melhor ambiente para praticar OTel — ele usa Collector com pipelines de traces, métricas e logs.

> 📌 O curso **LFS148** da Linux Foundation é **gratuito** e cobre os conceitos fundamentais exigidos no exame.

> ⚠️ Verifique o status da certificação antes de se inscrever — ela foi anunciada como "coming soon" pela CNCF.

---

## 🤔 Questões para Autoavaliação

1. Qual a diferença entre a API e o SDK do OpenTelemetry?
2. Como funciona o Context Propagation entre serviços?
3. Quais são os tipos de Sampler disponíveis e quando usar cada um?
4. Qual a diferença entre instrumentos Sync e Async para métricas?
5. Como o Collector processa dados na pipeline Receivers → Processors → Exporters?
6. Por que Semantic Conventions são importantes para interoperabilidade?
