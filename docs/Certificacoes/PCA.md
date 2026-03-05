# 📊 PCA — Prometheus Certified Associate (CNCF)

## Visão Geral

| Item | Detalhe |
|---|---|
| **Organização** | CNCF (Cloud Native Computing Foundation) |
| **Nível** | Associate |
| **Custo** | $250 USD |
| **Formato** | Online, supervisionado, múltipla escolha |
| **Duração** | 90 minutos |
| **Questões** | 60 questões |
| **Aprovação** | 75% (45/60) |
| **Validade** | 3 anos |
| **Pré-requisito** | Nenhum formal |
| **Retake** | 1 retake gratuito incluído |

---

## Domínios do Exame

| Domínio | Peso | Capítulos do Guia |
|---|---|---|
| Observability Concepts | 18% | Observabilidade vs Monitoramento, Métricas |
| Prometheus Fundamentals | 20% | Métricas, OpenTelemetry |
| PromQL | 28% | Métricas (exemplos PromQL) |
| Instrumentation & Exporters | 16% | OpenTelemetry, Métricas |
| Dashboards & Visualization | 8% | Dashboards, Alertas |
| Recording & Alerting Rules | 10% | Alertas |

---

## O que é cobrado

### 1. Observability Concepts (18%)
- Métricas, Logs e Traces — visão geral
- O papel de métricas na observabilidade
- Tipos de métricas: Counter, Gauge, Histogram, Summary
- Cardinalidade e labels
- Push vs Pull model
- Diferença entre monitoramento e observabilidade

### 2. Prometheus Fundamentals (20%)
- Arquitetura do Prometheus (server, pushgateway, exporters, alertmanager)
- Modelo de dados: metric name, labels, timestamp, value
- Scrape config e service discovery
- Armazenamento local (TSDB)
- Remote write e remote read
- Federation
- Prometheus Operator e ServiceMonitor (Kubernetes)

### 3. PromQL (28%) ⭐ Maior peso
- Seletores: `metric_name{label="value"}`
- Tipos de dados: instant vector, range vector, scalar
- Funções de agregação: `sum()`, `avg()`, `count()`, `min()`, `max()`
- Funções de rate: `rate()`, `irate()`, `increase()`
- `histogram_quantile()` para percentis
- Operadores: aritméticos, comparação, lógicos
- Agrupamento: `by`, `without`
- Operações entre vetores: `on`, `ignoring`, `group_left`, `group_right`
- Subqueries

### 4. Instrumentation & Exporters (16%)
- Instrumentação de aplicações (client libraries)
- Convenções de nomenclatura de métricas
- Exporters comuns: node_exporter, blackbox_exporter, mysqld_exporter
- Custom metrics e boas práticas
- Pushgateway: quando usar (batch jobs)
- OpenMetrics format

### 5. Dashboards & Visualization (8%)
- Grafana como ferramenta de visualização
- Tipos de painéis: graph, stat, gauge, table, heatmap
- Variáveis e templates em dashboards
- Boas práticas de dashboard design

### 6. Recording & Alerting Rules (10%)
- Recording rules: pré-computar consultas custosas
- Alerting rules: condição, duração (`for`), labels, annotations
- Alertmanager: routing, grouping, silencing, inhibition
- Severidade e priorização de alertas
- Redução de ruído e alert fatigue

---

## Mapeamento para este Guia

| Tópico do Exame | Página do Guia | Lab Prático |
|---|---|---|
| Conceitos de Observabilidade | [Obs vs Mon](../Observabilidade/ObservabilidadeVsMonitoramento.md) | — |
| Tipos de Métricas | [Métricas](../Observabilidade/Metricas.md) | Lab 01 |
| PromQL | [Métricas](../Observabilidade/Metricas.md) | Lab 01 |
| Golden Signals | [Golden Signals](../SRE/GoldenSignals.md) | Lab 01 |
| Instrumentação | [OpenTelemetry](../Observabilidade/OpenTelemetry.md) | Lab 01, 04 |
| Dashboards | [Dashboards](../Observabilidade/Dashboards.md) | Lab 01, 04 |
| Alertas | [Alertas](../Observabilidade/Alertas.md) | Lab 01 |

---

## Plano de Estudo — 6 Semanas

### Semana 1: Conceitos e Arquitetura
- [ ] Ler: Métricas (tipos, cardinalidade, labels)
- [ ] Estudar: Arquitetura Prometheus (docs oficiais)
- [ ] Ler: Observabilidade vs Monitoramento
- [ ] Completar: Lab 01 — subir Prometheus + Grafana
- [ ] Explorar: interface do Prometheus (targets, service discovery)

### Semana 2: PromQL Básico
- [ ] Estudar: seletores, instant vector, range vector
- [ ] Praticar no Lab 01: consultas básicas no Prometheus
- [ ] Funções: `rate()`, `irate()`, `increase()`
- [ ] Funções de agregação: `sum()`, `avg()`, `count()`
- [ ] Exercícios: escrever 10 consultas PromQL no Lab 01

### Semana 3: PromQL Avançado
- [ ] `histogram_quantile()` — calcular P50, P95, P99
- [ ] Operadores e operações entre vetores
- [ ] `by`, `without`, `on`, `ignoring`
- [ ] Subqueries
- [ ] Exercícios: 15+ consultas avançadas no Lab 01

### Semana 4: Instrumentação e Exporters
- [ ] Estudar: client libraries (Python, Go, Java)
- [ ] Revisar: código do Lab 01 (prometheus-client Python)
- [ ] Estudar: node_exporter, blackbox_exporter
- [ ] Ler: convenções de nomenclatura de métricas
- [ ] Praticar: adicionar custom metrics no Lab 01

### Semana 5: Alertas e Recording Rules
- [ ] Ler: Alertas neste guia
- [ ] Estudar: alerting rules syntax
- [ ] Estudar: Alertmanager — routing, grouping, silencing
- [ ] Estudar: recording rules e otimização
- [ ] Praticar: criar alerting rules no Lab 01

### Semana 6: Revisão e Simulado
- [ ] Revisar domínios com menor confiança (especialmente PromQL — 28%)
- [ ] Fazer exercícios no [PromLabs PromQL Cheat Sheet](https://promlabs.com/promql-cheat-sheet/)
- [ ] Revisar: Grafana dashboards e variáveis
- [ ] Simulados: [Prometheus Exam Prep](https://training.linuxfoundation.org/certification/prometheus-certified-associate/)
- [ ] Curso recomendado: LFS241 — Monitoring with Prometheus ($99)

---

## Recursos Adicionais

| Recurso | Link |
|---|---|
| Página do Exame | [training.linuxfoundation.org/certification/prometheus-certified-associate](https://training.linuxfoundation.org/certification/prometheus-certified-associate/) |
| Documentação Oficial | [prometheus.io/docs](https://prometheus.io/docs/introduction/overview/) |
| PromQL Cheat Sheet | [promlabs.com/promql-cheat-sheet](https://promlabs.com/promql-cheat-sheet/) |
| Curso LFS241 | Monitoring Systems and Services with Prometheus ($99) |
| Prometheus Up & Running | Livro O'Reilly — Brian Brazil |
| Awesome Prometheus | [github.com/roaldnefs/awesome-prometheus](https://github.com/roaldnefs/awesome-prometheus) |

---

## Dicas para o Exame

> ⚠️ **PromQL é 28% do exame** — dedique a maior parte do seu tempo de estudo praticando consultas reais no Prometheus. O Lab 01 deste guia é o ambiente ideal para isso.

> 💡 A prova é **múltipla escolha** — pratique eliminar alternativas incorretas além de saber a resposta certa.

> 📌 Você tem **1 retake gratuito** incluído no valor — mas não conte com isso; estude como se tivesse apenas uma chance.

---

## 🤔 Questões para Autoavaliação

1. Qual a diferença entre `rate()` e `irate()` e quando usar cada um?
2. Como calcular o percentil 99 de latência usando `histogram_quantile()`?
3. Qual a diferença entre Counter e Gauge? Dê exemplos de cada.
4. Quando usar Pushgateway vs scrape direto?
5. Como funciona o routing no Alertmanager?
6. O que são recording rules e por que são importantes para performance?
