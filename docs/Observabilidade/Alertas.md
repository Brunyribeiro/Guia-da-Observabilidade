# 🚨 Alertas

## O que são?

Notificações automatizadas que avisam quando algo precisa de atenção humana. Um bom alerta é **acionável** — ele diz o que está errado e o que fazer.

> Alerta bom acorda você às 3h e tem solução. Alerta ruim acorda você às 3h e não era nada.

---

## Anatomia de um bom alerta

| Elemento | Exemplo |
|----------|---------|
| **O quê** | Error rate do checkout acima de 5% |
| **Onde** | Serviço `payment-api`, cluster `prod-east` |
| **Desde quando** | Últimos 10 minutos |
| **Impacto** | ~200 usuários afetados por minuto |
| **Runbook** | Link para o passo-a-passo de resolução |
| **Dashboard** | Link direto para o dashboard relevante |

---

## Tipos de alerta

| Tipo | Quando dispara | Exemplo |
|------|---------------|---------|
| **Threshold** | Métrica cruza um limite fixo | CPU > 90% por 5 min |
| **Anomalia** | Comportamento fora do padrão | Tráfego 3x acima do normal para este horário |
| **SLO-based** | Error budget sendo consumido rápido | Burn rate > 10x por 1h |
| **Ausência** | Algo que deveria acontecer, não aconteceu | Nenhum heartbeat do serviço em 5 min |

---

## Alertas baseados em SLO (Burn Rate)

Em vez de alertar em métricas brutas, alerte com base em **quão rápido o error budget está sendo consumido**:

```
SLO: 99.9% em 30 dias
Error budget total: 43 minutos de downtime

Cenário 1: Error rate sobe para 1%
  → Burn rate = 10x (gastando 10x mais rápido que o permitido)
  → A esse ritmo, o budget acaba em 3 dias
  → 🔴 Alerta CRÍTICO

Cenário 2: Error rate sobe para 0.2%
  → Burn rate = 2x
  → Budget acaba em 15 dias
  → 🟡 Alerta de WARNING (pode esperar horário comercial)
```

---

## Severity (Gravidade)

| Severity | Ação | Exemplo |
|----------|------|---------|
| **P1 - Crítico** | Acorda on-call AGORA | Sistema fora do ar, perda de receita |
| **P2 - Alto** | Resolver nas próximas horas | Degradação significativa de performance |
| **P3 - Médio** | Resolver no próximo dia útil | Um endpoint secundário lento |
| **P4 - Baixo** | Backlog | Warning de disco em 70% |

---

## Alert fatigue — o maior inimigo

| Problema | Consequência |
|----------|-------------|
| Alertas demais | Time ignora todos (efeito "menino que gritava lobo") |
| Alertas não acionáveis | "CPU subiu" — e daí? O que eu faço? |
| Falsos positivos | Perda de confiança no sistema de alertas |
| Sem runbook | On-call não sabe o que fazer às 3h da manhã |

---

## Boas práticas

- ✅ Todo alerta deve ser **acionável** — se não precisa de ação, é dashboard
- ✅ Inclua **runbook** em cada alerta
- ✅ Use **burn rate** em vez de thresholds fixos quando possível
- ✅ Revise alertas regularmente — delete os que ninguém age
- ✅ Agrupe alertas relacionados para evitar flood
- ❌ Não alerte em métricas de **causa** (CPU), alerte em **sintoma** (latência)
- ❌ Não coloque email como canal de alerta crítico (ninguém lê às 3h)

---

## Ferramentas populares

| Ferramenta | Tipo | Destaque |
|------------|------|----------|
| **Grafana Alerting** | Open source | Alertas integrados com dashboards |
| **Prometheus Alertmanager** | Open source | Agrupamento, silenciamento, roteamento |
| **PagerDuty** | SaaS | Escalonamento, on-call, incident management |
| **OpsGenie (Atlassian)** | SaaS | Integração com Jira e Confluence |
| **Datadog Monitors** | SaaS | Alertas + APM + logs unificados |
| **CloudWatch Alarms** | SaaS (AWS) | Nativo AWS, integra com SNS/Lambda |

---

## 🤔 Perguntas para reflexão

1. Seu time recebe 50 alertas por dia e ignora a maioria. Como você resolveria isso?
2. Qual a diferença entre alertar que "CPU está em 95%" vs "latência p99 está acima do SLO"? Qual é mais útil?
3. Faz sentido ter alertas que disparam fora do horário comercial para problemas **P3**?
