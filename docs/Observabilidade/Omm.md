# 🏔️ Observability Maturity Model (OMM)

## O que é?

Um framework para avaliar **onde sua organização está** na jornada de observabilidade e **para onde deveria ir**. Existem diferentes modelos no mercado — os dois mais relevantes são o da **Grafana** e o da **AWS**, e eles se complementam.

| Modelo | Abordagem | Estrutura |
|--------|-----------|-----------|
| [**Grafana**](https://grafana.com/maturity-model/) | Avalia **9 dimensões** independentes em 3 domínios | "Em quais áreas você é forte/fraco?" |
| [**AWS**](https://aws-observability.github.io/observability-best-practices/guides/observability-maturity-model/) | Define **4 estágios** progressivos de evolução | "Em qual fase da jornada você está?" |

> Grafana ajuda a saber **onde** investir. AWS ajuda a saber **qual o próximo passo**. Juntos, dão o mapa completo.

---

## Modelo Grafana — 9 Dimensões em 3 Domínios

O modelo da Grafana avalia ferramentas, pessoas e processos em **9 dimensões** agrupadas em 3 domínios, com **3 níveis** de maturidade por dimensão.

```
              ┌─────────────────────────────────────────┐
              │      3 Domínios × 3 Dimensões cada      │
              └──────────────────┬──────────────────────┘
                                 │
       ┌─────────────────────────┼─────────────────────────┐
       │                         │                         │
 ┌─────┴──────┐           ┌─────┴──────┐           ┌──────┴──────┐
 │   ACCESS   │           │  ANALYZE   │           │  RESPOND &  │
 │  (Acessar) │           │ (Analisar) │           │   PREVENT   │
 ├────────────┤           ├────────────┤           ├─────────────┤
 │ 1.Coverage │           │ 4.Visual.  │           │ 7.SLOs      │
 │ 2.Data Acc.│           │ 5.Correlat.│           │ 8.Incident  │
 │ 3.Data Eff.│           │ 6.RCA      │           │ 9.Obs-Dev   │
 └────────────┘           └────────────┘           └─────────────┘
```

### 🔌 Domínio 1 — Access (Acessar dados)

Como você **coleta, armazena e acessa** seus dados de observabilidade.

| # | Dimensão | Pergunta-chave |
|---|----------|---------------|
| 1 | **Observability Coverage** | Quais componentes você consegue observar? Tem pontos cegos (banco, filas, dependências externas)? |
| 2 | **Observability Data Access** | Como coleta e armazena os dados? Usa padrões abertos (OTel, Prometheus) ou está preso a SDKs proprietários? |
| 3 | **Observability Data Efficiency** | Dados armazenados de forma eficiente? Tem políticas de retenção, cardinalidade e custo? |

### 🔍 Domínio 2 — Analyze (Analisar dados)

Como você **visualiza, correlaciona e diagnostica** usando os dados.

| # | Dimensão | Pergunta-chave |
|---|----------|---------------|
| 4 | **Visualization** | Tem dashboards claros por serviço e por público (engenharia, negócio)? Acesso controlado via RBAC? |
| 5 | **Correlation** | Consegue correlacionar métricas, logs e traces **sem trocar de ferramenta**? |
| 6 | **Root Cause Analysis** | Mede o MTTR? Tem processo para encontrar causa raiz e está buscando melhorar? |

### 🛡️ Domínio 3 — Respond & Prevent (Responder e Prevenir)

Como você **responde a incidentes e previne** que aconteçam.

| # | Dimensão | Pergunta-chave |
|---|----------|---------------|
| 7 | **SLOs and Business Impact** | Tem SLOs definidos? Reporta impacto ao negócio? Usa error budgets? |
| 8 | **Incident Response & Management** | Alertas centralizados? On-call, escalação e runbooks definidos? |
| 9 | **Observability Driven Development** | Observabilidade faz parte do desenvolvimento (shift-left)? Testes de performance existem antes do deploy? |

### Níveis de maturidade (Grafana)

| Nível | Nome | Descrição |
|-------|------|-----------|
| 🔴 | **Reactive** | Estabelecendo competência nas dimensões. Clientes trazem problemas **antes** de você saber. |
| 🟡 | **Proactive** | Competência na maioria e **domínio em algumas**. Sabe de problemas **antes** dos usuários na maioria dos casos. |
| 🟢 | **Systematic** | **Domínio em todas** as dimensões. Observabilidade no SDLC, prevenindo issues antes de chegar em produção. |

> 💡 Cada dimensão é avaliada **independentemente**. Você pode ser Systematic em Coverage mas Reactive em SLOs. O [assessment oficial da Grafana](https://grafana.qualtrics.com/jfe/form/SV_8c829fZFTog9jkW) ajuda nessa avaliação.

---

## Modelo AWS — 4 Estágios Progressivos

O modelo da AWS descreve uma **jornada linear** de evolução, do monitoramento básico até a observabilidade proativa com AIOps.

```
  Stage 1            Stage 2              Stage 3              Stage 4
┌──────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│Foundation│───▶│Intermediate  │───▶│  Advanced    │───▶│  Proactive   │
│Monitoring│    │ Monitoring   │    │Observability │    │Observability │
└──────────┘    └──────────────┘    └──────────────┘    └──────────────┘
  Coletar         Analisar e          Correlacionar        AIOps e
  telemetria      visualizar          e detectar           predição
```

### Stage 1 — Foundational Monitoring (Coletar Telemetria)

O mínimo. Times trabalham em **silos**, cada um com suas ferramentas. Monitoramento básico sem estratégia unificada.

| Aspecto | Estado |
|---------|--------|
| **Dados** | Métricas e logs coletados de forma fragmentada |
| **Ferramentas** | Cada time usa uma diferente, dados em formatos diferentes |
| **Cultura** | Reativo — descobre problemas quando o usuário reclama |
| **Visibilidade** | Pontos cegos em banco, filas, dependências |

> **Para sair daqui:** instrumentar workloads com métricas, logs e traces. Unificar ferramentas. Definir quais são os componentes críticos.

### Stage 2 — Intermediate Monitoring (Análise e Insights)

Coleta unificada, dashboards e alertas existem. Mas MTTR ainda é alto e debug consome muito esforço cognitivo.

| Aspecto | Estado |
|---------|--------|
| **Dados** | Métricas, logs e traces coletados de forma centralizada |
| **Ferramentas** | Dashboards e alertas configurados, priorização por severidade |
| **Cultura** | Alertas existem, mas muitos são ignorados (alert fatigue) |
| **Visibilidade** | Boa para componentes principais, gaps nas dependências |

> **Para sair daqui:** reduzir alert fatigue com alertas acionáveis; construir knowledge graph de dependências; automatizar remediação dos alertas repetitivos.

### Stage 3 — Advanced Observability (Correlação e Anomalia)

A equipe consegue **correlacionar métricas + logs + traces** para achar causa raiz rapidamente. MTTR consistentemente baixo. SLOs verdes.

| Aspecto | Estado |
|---------|--------|
| **Dados** | Correlação entre pilares (métricas ↔ logs ↔ traces) |
| **Ferramentas** | Visão 360° — de um alerta chega na causa raiz em minutos |
| **Cultura** | Proativo — detecta e previne antes do impacto ao usuário |
| **Visibilidade** | Anomaly detection ativo, near real-time alerting |

> **Para sair daqui:** construir knowledge base de incidentes passados; treinar modelos para predizer problemas; integrar observabilidade no SDLC.

### Stage 4 — Proactive Observability (Predição e Auto-remediação)

Dados de observabilidade usados **antes** do problema acontecer. Modelos de ML/GenAI identificam issues proativamente e propõem ou executam correções.

| Aspecto | Estado |
|---------|--------|
| **Dados** | Análise preditiva com modelos treinados em dados históricos |
| **Ferramentas** | AIOps, dashboards dinâmicos gerados automaticamente |
| **Cultura** | Melhoria contínua — insights alimentam engenharia e operações |
| **Visibilidade** | Auto-remediação para cenários conhecidos |

> ⚠️ A AWS reconhece que este estágio está em evolução. Com GenAI se democratizando, capacidades proativas devem se tornar mais comuns.

---

## Mapeamento — Como os modelos se conectam

Os dois modelos olham para a mesma jornada por ângulos diferentes:

| AWS Stage | Grafana (nível típico) | Foco principal |
|-----------|----------------------|----------------|
| **Stage 1** — Foundational | 🔴 Reactive em Access | **Coletar** dados (Coverage, Data Access) |
| **Stage 2** — Intermediate | 🔴→🟡 em Analyze | **Visualizar e alertar** (Visualization, Incident Response) |
| **Stage 3** — Advanced | 🟡→🟢 em Analyze + Respond | **Correlacionar e responder** (Correlation, RCA, SLOs) |
| **Stage 4** — Proactive | 🟢 Systematic | **Predizer e prevenir** (Obs-Driven Dev, RCA avançado) |

```
AWS Stages:    1 ─────────── 2 ─────────── 3 ─────────── 4
               │             │             │             │
Grafana:       │   Access    │  Analyze    │ Respond &   │ Todas em
               │   Reactive  │  Proactive  │ Prevent     │ Systematic
               │             │  Proactive  │ Systematic  │
```

> **Na prática:** use os **estágios da AWS** para entender sua jornada geral, e as **dimensões da Grafana** para saber exatamente onde investir dentro de cada estágio.

---

## Exemplo prático — avaliando uma empresa

**Cenário:** E-commerce com 5 microsserviços, time de 8 engenheiros.

### Avaliação pelas dimensões (Grafana)

| Dimensão | Situação atual | Nível |
|----------|---------------|-------|
| 1. Coverage | Métricas e logs da API principal, mas sem traces. Banco e filas sem observabilidade | 🔴 Reactive |
| 2. Data Access | Logs com `console.log`, métricas só via CloudWatch nativo | 🔴 Reactive |
| 3. Data Efficiency | Sem política de retenção, logs guardados pra sempre, custo crescendo | 🔴 Reactive |
| 4. Visualization | Um dashboard genérico com 30 gráficos misturados | 🔴 Reactive |
| 5. Correlation | Para correlacionar, abre 3 ferramentas e busca por timestamp | 🔴 Reactive |
| 6. Root Cause Analysis | MTTR de ~4 horas, sem processo definido | 🔴 Reactive |
| 7. SLOs | Nenhum SLO. SLA copiado de template sem medição real | 🔴 Reactive |
| 8. Incident Response | Alertas por email, sem on-call, sem runbooks | 🔴 Reactive |
| 9. Obs-Driven Dev | Zero testes de performance. Observabilidade adicionada após incidentes | 🔴 Reactive |

### Avaliação pelo estágio (AWS)

> **Diagnóstico:** entre Stage 1 e Stage 2. Tem dados mas não consegue usar de forma eficiente.

### Plano de ação priorizado

| Prioridade | Ação | Dimensão (Grafana) | Stage alvo (AWS) |
|:---:|------|----------|----------|
| 1️⃣ | Centralizar logs (JSON) + métricas no Grafana | Coverage + Data Access | Stage 1 → 2 |
| 2️⃣ | Criar dashboard por serviço com Golden Signals | Visualization | Stage 2 |
| 3️⃣ | Implementar OpenTelemetry para traces | Coverage + Correlation | Stage 2 |
| 4️⃣ | Definir alertas acionáveis + on-call básico | Incident Response | Stage 2 |
| 5️⃣ | Definir SLOs para os 2 serviços mais críticos | SLOs | Stage 2 → 3 |
| 6️⃣ | Escrever runbooks para os 5 alertas mais comuns | Incident Response | Stage 2 → 3 |
| 7️⃣ | Correlacionar logs ↔ traces ↔ métricas via trace_id | Correlation + RCA | Stage 3 |
| 8️⃣ | Definir retenção e cardinalidade | Data Efficiency | Stage 3 |
| 9️⃣ | Adicionar instrumentação no CI/CD (shift-left) | Obs-Driven Dev | Stage 3 → 4 |

---

## Auto-avaliação rápida

### Por dimensões (Grafana)

| Dimensão | 🔴 Reactive | 🟡 Proactive | 🟢 Systematic |
|----------|:-----------:|:------------:|:-------------:|
| 1. Observability Coverage | ○ | ○ | ○ |
| 2. Data Access | ○ | ○ | ○ |
| 3. Data Efficiency | ○ | ○ | ○ |
| 4. Visualization | ○ | ○ | ○ |
| 5. Correlation | ○ | ○ | ○ |
| 6. Root Cause Analysis | ○ | ○ | ○ |
| 7. SLOs & Business Impact | ○ | ○ | ○ |
| 8. Incident Response | ○ | ○ | ○ |
| 9. Obs-Driven Development | ○ | ○ | ○ |

### Por estágio (AWS)

| Pergunta | Sim = próximo estágio |
|----------|----------------------|
| Você coleta métricas, logs e traces dos componentes críticos? | ✅ = saiu do Stage 1 |
| Tem dashboards, alertas e priorização por severidade? | ✅ = saiu do Stage 2 |
| Consegue correlacionar os 3 pilares e achar causa raiz em minutos? | ✅ = saiu do Stage 3 |
| Usa ML/AI para predizer problemas e tem auto-remediação? | ✅ = Stage 4 |

> 💡 Assessments oficiais: [Grafana](https://grafana.qualtrics.com/jfe/form/SV_8c829fZFTog9jkW) | [AWS (contate seu account team)](https://aws-observability.github.io/observability-best-practices/guides/observability-maturity-model/)

---

## Os pilares conectados na prática

A maturidade real vem de **correlacionar** os pilares (dimensão 5 da Grafana / Stage 3 da AWS):

```
[Alerta dispara] → Métrica: error_rate subiu para 5%
        ↓
[Dashboard] → Qual serviço? → payment-service
        ↓
[Logs filtrados] → trace_id: abc-123, erro: "timeout ao chamar banco"
        ↓
[Trace] → Span do banco externo: 30s de latência
        ↓
[Causa raiz] → Deploy do banco às 14:00 introduziu regressão
```

> No nível **Reactive / Stage 1**, cada passo requer uma ferramenta diferente e horas.
> No nível **Systematic / Stage 3**, tudo está conectado e leva minutos.

---

## Boas práticas

- ✅ Use os **estágios AWS** para planejar a jornada e as **dimensões Grafana** para priorizar
- ✅ Avance **uma dimensão/estágio por vez** — foque onde o impacto é maior
- ✅ Envolva o **time inteiro** na avaliação, não só a liderança
- ✅ Reavalie a maturidade **a cada trimestre**
- ✅ Comece pela dimensão que **mais dói** — geralmente Coverage ou Incident Response
- ✅ A maioria das empresas está entre **Stage 1 e 2** (AWS) — e está tudo bem
- ❌ Não tente pular estágios — a base precisa ser sólida
- ❌ Não compare com Google/Netflix — o contexto é completamente diferente
- ❌ Não compre ferramentas de Stage 4 se seus processos são Stage 1

---

## 🤔 Perguntas para reflexão

1. Olhando as 9 dimensões da Grafana, em qual sua empresa/projeto é **mais fraco**? Por que essa dimensão foi negligenciada?
2. A AWS diz que a maioria das empresas está presa no **Stage 2** sem perceber. O que impede a transição para o Stage 3 (correlação)?
3. A dimensão **Observability Driven Development** (shift-left) propõe instrumentar durante o desenvolvimento. Na prática, por que a maioria dos times só adiciona observabilidade **depois** de um incidente?
4. Se você pudesse melhorar apenas **2 das 9 dimensões** agora, quais escolheria e por quê?
