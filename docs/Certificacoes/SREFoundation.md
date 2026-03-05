# 🛡️ SRE Foundation — DevOps Institute

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
| **Pré-requisito** | Nenhum formal (recomendado DevOps Foundation) |

---

## Domínios do Exame

| Domínio | Peso Aprox. | Capítulos do Guia |
|---|---|---|
| Princípios e Práticas SRE | 20% | SLI, SLO, SLA, Error Budget |
| Service Level Objectives | 20% | SLI, SLO, SLA |
| Error Budget e Gestão de Risco | 15% | Error Budget, Release e Change |
| Toil e Automação | 10% | TOI, Runbooks |
| Monitoramento e Observabilidade | 15% | Métricas, Golden Signals, Alertas |
| Incident Management | 10% | Incident Management, On-Call |
| Cultura e Organização | 10% | Post-Mortem, TOI |

---

## O que é cobrado

### 1. Princípios SRE (baseado no Google SRE Book)
- O que é SRE e como se relaciona com DevOps
- Embracing Risk: equilíbrio entre velocidade e confiabilidade
- O papel do SRE em uma organização
- Diferença entre SRE e Ops tradicional
- Engenharia de confiabilidade como disciplina

### 2. Service Level Objectives
- **SLI** (Service Level Indicator): métricas que refletem experiência do usuário
- **SLO** (Service Level Objective): meta interna baseada em SLIs
- **SLA** (Service Level Agreement): contrato com consequências
- Escolha de SLIs adequados por tipo de serviço
- Janela de medição (rolling window vs calendar)

### 3. Error Budget
- Conceito: 100% - SLO = Error Budget
- Error Budget como ferramenta de decisão
- Error Budget Policy: regras para quando o budget se esgota
- Equilíbrio entre inovação e confiabilidade
- Burn rate e janelas de alerta

### 4. Toil e Automação
- Definição de Toil (trabalho operacional repetitivo sem valor duradouro)
- Identificação e medição de Toil
- Estratégias para eliminação de Toil
- Automação: runbooks → scripts → auto-remediação
- Meta SRE: ≤50% do tempo em Toil

### 5. Monitoramento e Observabilidade
- Golden Signals: Latência, Tráfego, Erros, Saturação
- Métricas RED e USE
- Alertas: sintoma vs causa, redução de ruído
- Dashboards operacionais vs executivos
- On-Call e rotação de plantão

### 6. Incident Management
- Ciclo de vida de um incidente (detecção → resposta → mitigação → resolução)
- Papéis: Incident Commander, Ops Lead, Communications Lead
- Severidade e priorização (SEV1-SEV4)
- Comunicação durante incidentes
- Escalação e resposta coordenada

### 7. Post-Mortem e Cultura
- Post-mortem blameless (sem culpa)
- Estrutura: timeline, impacto, causa raiz, ações
- Aprendizado organizacional e compartilhamento
- Cultura de blamelessness e segurança psicológica
- Melhoria contínua

---

## Mapeamento para este Guia

| Tópico do Exame | Página do Guia | Lab Prático |
|---|---|---|
| SLI | [SLI](../SRE/SLI.md) | — |
| SLO | [SLO](../SRE/SLO.md) | — |
| SLA | [SLA](../SRE/SLA.md) | — |
| Error Budget | [Error Budget](../SRE/ErrorBudget.md) | — |
| Golden Signals | [Golden Signals](../SRE/GoldenSignals.md) | Lab 01 |
| MTTR | [MTTR](../SRE/MTTR.md) | — |
| Métricas | [Métricas](../Observabilidade/Metricas.md) | Lab 01 |
| Alertas | [Alertas](../Observabilidade/Alertas.md) | Lab 01 |
| Incident Management | [Incident Management](../SRE/IncidentManagement.md) | — |
| On-Call | [On-Call](../SRE/OnCall.md) | — |
| Runbooks | [Runbooks](../SRE/Runbooks.md) | — |
| Post-Mortem | [Post-Mortem](../SRE/PostMortem.md) | — |
| TOI | [TOI](../SRE/TOI.md) | — |
| Release/Change | [Release e Change](../SRE/ReleaseChange.md) | — |

---

## Plano de Estudo — 4 Semanas

### Semana 1: Fundamentos SRE
- [ ] Ler: O que é SRE (capítulo 1 do Google SRE Book — disponível online)
- [ ] Ler: SLI, SLO, SLA neste guia
- [ ] Ler: Error Budget neste guia
- [ ] Praticar: definir SLIs para um serviço fictício
- [ ] Revisar: Questões de reflexão (🤔) dos capítulos

### Semana 2: Monitoramento e Observabilidade
- [ ] Ler: Golden Signals + Métricas
- [ ] Ler: Alertas + Dashboards
- [ ] Completar: Lab 01 (Prometheus + Grafana)
- [ ] Ler: MTTR e suas implicações
- [ ] Praticar: criar alertas baseados em burn rate

### Semana 3: Operações
- [ ] Ler: Incident Management + On-Call
- [ ] Ler: Post-Mortem (praticar escrita de post-mortem fictício)
- [ ] Ler: TOI (identificar toil no seu dia a dia)
- [ ] Ler: Runbooks (escrever um runbook para cenário simples)
- [ ] Ler: Release e Change Management

### Semana 4: Revisão
- [ ] Revisar todas as questões de reflexão (🤔) da seção SRE
- [ ] Releitura do Google SRE Book — capítulos-chave
- [ ] Fazer simulados oficiais (se disponíveis)
- [ ] Praticar: definir Error Budget Policy para um serviço
- [ ] Revisar pontos fracos identificados

---

## Recursos Adicionais

| Recurso | Link |
|---|---|
| Site Oficial | [devopsinstitute.com](https://www.devopsinstitute.com/) |
| Google SRE Book (gratuito) | [sre.google/sre-book](https://sre.google/sre-book/table-of-contents/) |
| Google SRE Workbook (gratuito) | [sre.google/workbook](https://sre.google/workbook/table-of-contents/) |
| Curso Gratuito | LFS162 — Introduction to DevOps and SRE (Linux Foundation) |
| Curso Pago | LFS261 — DevOps and SRE Fundamentals ($299, Linux Foundation) |

---

## 🤔 Questões para Autoavaliação

1. Como SRE difere de operações tradicionais?
2. Qual a relação matemática entre SLO e Error Budget?
3. Por que Post-Mortems devem ser blameless?
4. O que é Toil e por que SREs devem mantê-lo abaixo de 50%?
5. Como os Golden Signals ajudam na detecção de problemas?
