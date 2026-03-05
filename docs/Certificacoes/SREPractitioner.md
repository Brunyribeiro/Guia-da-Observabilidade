# 🛡️ SRE Practitioner — DevOps Institute

## Visão Geral

| Item | Detalhe |
|---|---|
| **Organização** | DevOps Institute (PeopleCert) |
| **Nível** | Practitioner (Avançado) |
| **Custo** | ~$350 USD |
| **Formato** | Online, supervisionado, múltipla escolha |
| **Duração** | 90 minutos |
| **Questões** | 40 questões |
| **Aprovação** | 65% (26/40) |
| **Validade** | 3 anos |
| **Pré-requisito** | SRE Foundation recomendado |

---

## Domínios do Exame

| Domínio | Peso Aprox. | Capítulos do Guia |
|---|---|---|
| SLO Engineering Avançado | 20% | SLI, SLO, Error Budget |
| Anti-Fragility e Chaos Engineering | 15% | — (conceito avançado) |
| Observability Engineering | 20% | Todos os pilares + OTel + OMM |
| Incident Response Avançado | 15% | Incident Management, On-Call, Post-Mortem |
| Toil Automation e Platform Engineering | 15% | TOI, Runbooks, Release/Change |
| Organizational SRE Adoption | 15% | OMM, Dashboards |

---

## O que é cobrado (nível avançado)

### 1. SLO Engineering Avançado
- SLOs baseados em jornada do usuário (CUJs — Critical User Journeys)
- Multi-window, multi-burn-rate alerting
- Error Budget como contrato entre equipes
- SLO para dependências (cascata de SLOs)
- Revisão periódica e ajuste de SLOs

### 2. Anti-Fragility e Chaos Engineering
- Conceito de anti-fragilidade em sistemas
- Game Days e exercícios de recuperação
- Chaos Engineering: princípios e ferramentas (Chaos Monkey, Litmus)
- Blast radius e experimentos controlados
- Resiliência como propriedade emergente

### 3. Observability Engineering
- Observabilidade como prática de engenharia
- Dados de alta cardinalidade e alta dimensionalidade
- Correlação entre os três pilares na prática
- OpenTelemetry como padrão de instrumentação
- Modelo de Maturidade de Observabilidade (OMM)
- Custo e retenção de dados de observabilidade

### 4. Incident Response Avançado
- Incident Command System (ICS) em escala
- Comunicação estruturada durante crises
- Análise de causa raiz vs contribuição sistêmica
- Post-Mortem como ferramenta de aprendizado organizacional
- Métricas de incidentes: MTTR, MTTD, MTTF
- On-Call sustentável: métricas de saúde do plantão

### 5. Toil Automation e Platform Engineering
- Classificação de Toil por impacto e frequência
- Escalada de automação: documento → script → plataforma
- Internal Developer Platforms (IDPs)
- Self-service e Golden Paths
- ROI de automação e decisão de investimento

### 6. Organizational SRE Adoption
- Modelos de SRE: embedded, centralized, hybrid
- Staffing e career ladder para SREs
- Relação SRE ↔ Product ↔ Development
- Métricas de maturidade organizacional
- Change management para adoção de SRE

---

## Mapeamento para este Guia

| Tópico do Exame | Página do Guia | Lab Prático |
|---|---|---|
| SLI/SLO avançado | [SLI](../SRE/SLI.md), [SLO](../SRE/SLO.md) | — |
| Error Budget | [Error Budget](../SRE/ErrorBudget.md) | — |
| Logs + Métricas + Traces | [Logs](../Observabilidade/Logs.md), [Métricas](../Observabilidade/Metricas.md), [Traces](../Observabilidade/Traces.md) | Labs 01-03 |
| OpenTelemetry | [OpenTelemetry](../Observabilidade/OpenTelemetry.md) | Lab 04 |
| OMM | [OMM](../Observabilidade/Omm.md) | — |
| Incident Management | [Incident Management](../SRE/IncidentManagement.md) | — |
| On-Call | [On-Call](../SRE/OnCall.md) | — |
| Post-Mortem | [Post-Mortem](../SRE/PostMortem.md) | — |
| TOI | [TOI](../SRE/TOI.md) | — |
| Runbooks | [Runbooks](../SRE/Runbooks.md) | — |
| Release/Change | [Release e Change](../SRE/ReleaseChange.md) | — |
| Dashboards | [Dashboards](../Observabilidade/Dashboards.md) | Labs 01-04 |

---

## Plano de Estudo — 6 Semanas

### Semana 1-2: SLO Engineering Avançado
- [ ] Revisão completa: SLI, SLO, SLA, Error Budget neste guia
- [ ] Estudo: Google SRE Workbook — capítulos sobre SLOs
- [ ] Praticar: definir SLOs para CUJs de um e-commerce fictício
- [ ] Estudo: Multi-burn-rate alerting (Google SRE Workbook cap. 5)
- [ ] Praticar: calcular Error Budget consumption rate

### Semana 3: Observability Engineering
- [ ] Revisão completa: Logs, Métricas, Traces, OTel, OMM
- [ ] Completar: Labs 01-04 integralmente
- [ ] Estudo: cardinalidade, retenção e custos
- [ ] Praticar: correlação traces→logs→métricas no Lab 04
- [ ] Leitura complementar: *Observability Engineering* (O'Reilly)

### Semana 4: Chaos Engineering + Anti-Fragility
- [ ] Leitura: *Chaos Engineering* (O'Reilly) — capítulos introdutórios
- [ ] Estudo: princípios de Chaos Engineering (principlesofchaos.org)
- [ ] Conhecer ferramentas: Chaos Monkey, Litmus, Gremlin
- [ ] Praticar: planejar um Game Day fictício
- [ ] Relacionar com: Incident Management e Post-Mortem

### Semana 5: Operações Avançadas
- [ ] Revisão: Incident Management, On-Call, Post-Mortem
- [ ] Estudo: ICS (Incident Command System) em detalhes
- [ ] Revisão: TOI, Runbooks, Release/Change
- [ ] Estudo: Platform Engineering e Golden Paths
- [ ] Praticar: escrever Post-Mortem completo para cenário complexo

### Semana 6: Revisão e Simulado
- [ ] Revisar todas as questões de reflexão (🤔) do guia
- [ ] Estudo: modelos organizacionais de SRE
- [ ] Fazer simulados oficiais
- [ ] Identificar e revisar pontos fracos
- [ ] Revisão final de todos os domínios

---

## Recursos Adicionais

| Recurso | Link |
|---|---|
| Site Oficial | [devopsinstitute.com](https://www.devopsinstitute.com/) |
| Google SRE Book | [sre.google/sre-book](https://sre.google/sre-book/table-of-contents/) |
| Google SRE Workbook | [sre.google/workbook](https://sre.google/workbook/table-of-contents/) |
| Principles of Chaos Engineering | [principlesofchaos.org](https://principlesofchaos.org/) |
| Livro: Observability Engineering | O'Reilly — Charity Majors et al. |
| Livro: Chaos Engineering | O'Reilly — Casey Rosenthal et al. |
| Curso Pago | LFS261 — DevOps and SRE Fundamentals ($299) |

---

## 🤔 Questões para Autoavaliação

1. Como implementar multi-burn-rate alerting para SLOs?
2. Qual a diferença entre resiliência e anti-fragilidade?
3. Como medir o ROI de automação de Toil?
4. Quando é melhor SRE embedded vs centralizado?
5. Como a alta cardinalidade de métricas impacta custos de observabilidade?
