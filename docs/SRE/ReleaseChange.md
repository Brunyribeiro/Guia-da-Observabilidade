# 🚀 Release & Change Management

## O que é?

**Release & Change Management** é o conjunto de processos que garante que **mudanças em produção** (deploys, configurações, migrações, feature flags) sejam feitas de forma **segura, rastreável e reversível**. Em SRE, mudanças são a **principal causa de incidentes** — Google, Microsoft e AWS reportam que **~70% dos incidentes em produção são causados por mudanças**.

> *"A maioria dos incidentes não é causada por bugs antigos que decidem aparecer — é causada por algo que alguém mudou."*

---

## Por que é crítico para SRE?

| Estatística | Fonte |
|-------------|-------|
| ~70% dos incidentes são causados por mudanças | Google SRE Book |
| Empresas Elite fazem deploy **sob demanda** (várias vezes ao dia) | DORA Metrics |
| O risco não está em mudar — está em mudar **sem controle** | — |

A relação com observabilidade:

```
  [Mudança] ──────▶ [Impacto?] ──────▶ [Detectar] ──────▶ [Reverter]
                        │                   │                  │
                   Observabilidade     Alertas/SLOs        Rollback
                   precisa capturar    precisam pegar      precisa ser
                   o antes/depois      rápido              automatizado
```

---

## Tipos de mudanças

| Tipo | Risco | Exemplo | Processo sugerido |
|------|-------|---------|-------------------|
| **Standard** | 🟢 Baixo | Deploy automatizado via CI/CD de código já testado | Automático, sem aprovação manual |
| **Normal** | 🟡 Médio | Migração de banco, mudança de infra, novo serviço | Change request + revisão + janela |
| **Emergency** | 🔴 Alto | Hotfix para incidente ativo em produção | Fast-track com aprovação do IC, post-mortem depois |

---

## Estratégias de deploy

### Comparativo

| Estratégia | Como funciona | Risco | Rollback | Quando usar |
|-----------|---------------|-------|----------|-------------|
| **Big Bang** | Troca tudo de uma vez | 🔴 Alto | Lento/Manual | Nunca (se possível evitar) |
| **Rolling** | Substitui instâncias gradualmente | 🟡 Médio | Médio | Default para a maioria |
| **Blue/Green** | Dois ambientes, troca o tráfego | 🟢 Baixo | Instantâneo | Mudanças de alto risco |
| **Canary** | Envia % pequeno para a nova versão | 🟢 Baixo | Instantâneo | Mudanças com incerteza |
| **Feature Flag** | Código novo desabilitado por padrão | 🟢 Baixo | Instantâneo | Funcionalidades novas |

### Detalhamento visual

#### Canary Deploy

```
                    Tráfego total: 100%
                         │
              ┌──────────┴──────────┐
              │                     │
         v2.3.0 (95%)          v2.3.1 (5%)    ◄── Fase 1: 5% canary
              │                     │
              │              Métricas OK? ──No──▶ Rollback
              │                     │
              │                    Yes
              │                     │
         v2.3.0 (75%)          v2.3.1 (25%)   ◄── Fase 2: 25%
              │                     │
              │              Métricas OK? ──No──▶ Rollback
              │                     │
              │                    Yes
              │                     │
         v2.3.0 (0%)           v2.3.1 (100%)  ◄── Fase 3: full rollout
```

> **Critérios de promoção canary:** error_rate < 1%, latência p99 < 500ms, sem novos erros nos logs.

#### Blue/Green Deploy

```
        Antes                    Durante                  Depois
  ┌──────────────┐        ┌──────────────┐        ┌──────────────┐
  │   Load       │        │   Load       │        │   Load       │
  │   Balancer   │        │   Balancer   │        │   Balancer   │
  └──────┬───────┘        └──┬────────┬──┘        └──────┬───────┘
         │                   │        │                   │
    ┌────┴────┐         ┌────┴──┐ ┌───┴───┐         ┌────┴────┐
    │  BLUE   │         │ BLUE  │ │ GREEN │         │  GREEN  │
    │ v2.3.0  │         │v2.3.0 │ │v2.3.1 │         │ v2.3.1  │
    │ (ativo) │         │(ativo)│ │(teste)│         │ (ativo) │
    └─────────┘         └───────┘ └───────┘         └─────────┘
```

> **Vantagem:** rollback é só apontar o load balancer de volta para o Blue. Segundos.

---

## Feature Flags

Feature flags permitem **separar deploy de release**: o código vai para produção **desabilitado** e é habilitado quando estiver pronto.

```python
# Exemplo com feature flag
if feature_flags.is_enabled("new_checkout_flow", user_id=user.id):
    return new_checkout(cart)
else:
    return legacy_checkout(cart)
```

### Ciclo de vida de uma feature flag

| Fase | Estado | Quem controla |
|------|--------|--------------|
| 1. Deploy | Flag criada, **OFF** para todos | Engenharia |
| 2. Teste interno | ON para time interno / beta testers | Engenharia |
| 3. Canary | ON para X% dos usuários | Produto + Engenharia |
| 4. Rollout | ON para 100% | Produto |
| 5. Limpeza | Flag removida, código legado deletado | Engenharia |

> ⚠️ **Dívida técnica:** flags não removidas acumulam complexidade. Defina TTL (time-to-live) para cada flag.

### Ferramentas de Feature Flag

| Ferramenta | Tipo |
|------------|------|
| **LaunchDarkly** | SaaS — líder de mercado |
| **Unleash** | Open source |
| **Flagsmith** | Open source + SaaS |
| **Split.io** | SaaS com experimentação |
| **AWS AppConfig** | Integrado ao ecossistema AWS |
| **ConfigCat** | SaaS simples e acessível |

---

## Change Management Process

### Fluxo para mudanças normais

```
┌─────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ Change  │───▶│  Review  │───▶│ Approve  │───▶│ Execute  │───▶│ Validate │
│ Request │    │  & Risk  │    │          │    │          │    │          │
└─────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
  O que vai       Qual o         Quem           Deploy +        Métricas
  mudar e         risco?         aprova?        observar        OK?
  por quê?        Rollback?                     dashboards      Rollback?
```

### Change Request — Template

| Campo | Descrição |
|-------|-----------|
| **O quê** | Descrição da mudança |
| **Por quê** | Motivação / ticket relacionado |
| **Impacto** | Quais serviços/usuários são afetados |
| **Risco** | Baixo / Médio / Alto + justificativa |
| **Plano de rollback** | Como reverter se der errado |
| **Janela** | Quando será executada |
| **Validação** | Como confirmar que funcionou |
| **Responsável** | Quem executa e quem aprova |

---

## Observabilidade durante mudanças

O momento do deploy é quando a observabilidade é **mais crítica**:

### Deploy markers

Marque deploys nos seus dashboards para correlacionar mudanças com métricas:

```promql
# Anotação no Grafana via API
POST /api/annotations
{
  "text": "Deploy payment-service v2.3.1",
  "tags": ["deploy", "payment-service"],
  "time": 1700000000000
}
```

```
  Error Rate
  5% │                    ┌── Deploy v2.3.1
     │                    │
  3% │                    ▼
     │              ╱─────────╲
  1% │─────────────╱           ╲──────────
     │
  0% └────────────────────────────────────
     14:00      14:05      14:10      14:15
```

> Com deploy markers, fica **óbvio** que o deploy causou o spike. Sem eles, são 30 minutos investigando.

### Checklist de observabilidade pré-deploy

| Verificação | Por quê |
|-------------|---------|
| ✅ Dashboard do serviço aberto | Acompanhar em real-time |
| ✅ Baseline de métricas registrado | Comparar antes/depois |
| ✅ Alertas do serviço ativos | Detectar problemas rápido |
| ✅ Deploy marker configurado | Correlacionar mudança com impacto |
| ✅ Plano de rollback testado | Reverter em minutos, não horas |
| ✅ Canary/blue-green configurado | Limitar blast radius |

---

## Exemplo prático — Change que deu certo

**Cenário:** Migração do banco de dados do `order-service` de PostgreSQL 14 para 16.

### Change Request

```
O quê:     Upgrade PostgreSQL 14 → 16 para order-service
Por quê:   EOL do PG14 em Nov/2025 + performance improvements
Impacto:   order-service (crítico), report-service (leitura)
Risco:     MÉDIO — incompatibilidade de extensões possível
Rollback:  Snapshot do RDS antes do upgrade. Restore em ~15 min.
Janela:    Domingo 02:00-06:00 UTC (menor tráfego)
Validação: Golden Signals estáveis por 30min após upgrade
Aprovação: @sre-lead + @dba-team
```

### Execução com observabilidade

```
02:00  📋 Baseline registrado: latency p99=120ms, error_rate=0.1%
02:05  📸 Snapshot RDS criado
02:10  🔄 Upgrade iniciado
02:35  ✅ Upgrade completo
02:36  🔍 Validação: queries de smoke test passando
02:40  📊 Métricas: latency p99=115ms ✅ error_rate=0.1% ✅
03:10  ✅ 30 min estável — change declarada sucesso
03:15  📝 Snapshot mantido por 48h como safety net
```

> **Por que deu certo:** janela de baixo tráfego, snapshot antes, critérios de validação definidos, rollback testado previamente.

---

## Relação com DORA Metrics

As **4 métricas DORA** medem a performance de entrega de software:

| Métrica | O que mede | Elite | Low |
|---------|-----------|-------|-----|
| **Deployment Frequency** | Frequência de deploys | Sob demanda (várias/dia) | < 1x por mês |
| **Lead Time for Changes** | Tempo do commit ao deploy | < 1 hora | > 6 meses |
| **Change Failure Rate** | % de deploys que causam falha | < 5% | > 30% |
| **Time to Restore** | Tempo para restaurar serviço | < 1 hora | > 6 meses |

> **Insight chave:** times Elite fazem deploy **mais frequentemente** E causam **menos falhas**. Deploys pequenos e frequentes são mais seguros que deploys grandes e raros.

```
  Risco por deploy
  ▲
  │  ╲
  │    ╲
  │      ╲
  │        ╲
  │          ╲─────────────
  │
  └──────────────────────────▶
   Raro/Grande    Frequente/Pequeno
                  (DORA Elite)
```

---

## Boas práticas

- ✅ Trate **todo deploy como uma mudança** — mesmo os "simples"
- ✅ Use **canary ou blue/green** por padrão — big bang só em último caso
- ✅ Coloque **deploy markers** nos dashboards — correlação instantânea
- ✅ Tenha **rollback automatizado** e testado — se nunca testou, não funciona
- ✅ Defina **critérios de sucesso** antes do deploy — não depois
- ✅ Feature flags para separar **deploy de release** — deploy ≠ ativar para usuário
- ✅ Faça deploys em **janelas de baixo tráfego** para mudanças de alto risco
- ✅ Monitore métricas por **pelo menos 30 minutos** após cada deploy
- ✅ Meça suas **DORA metrics** — elas provam se seu processo está melhorando
- ❌ Não faça deploy na **sexta à tarde** — problema clássico de on-call
- ❌ Não acumule mudanças em **deploys gigantes** — quanto maior, mais risco
- ❌ Não confie em "testei no staging" — staging ≠ produção
- ❌ Não ignore **feature flags velhas** — limpe dentro de 30 dias após rollout completo

---

## Ferramentas

| Ferramenta | Uso |
|------------|-----|
| **Argo Rollouts** | Canary e blue/green para Kubernetes |
| **Spinnaker** | Plataforma de deploy multi-cloud |
| **Flux / ArgoCD** | GitOps — deploy declarativo via Git |
| **GitHub Actions / GitLab CI** | CI/CD pipelines |
| **LaunchDarkly / Unleash** | Feature flags |
| **Backstage** | Catálogo de serviços + deploys |
| **Sleuth / LinearB** | DORA metrics tracking |
| **ServiceNow / Jira SM** | Change management formal (ITIL) |

---

## 🤔 Perguntas para reflexão

1. Se **70% dos incidentes são causados por mudanças**, por que muitas empresas investem mais em monitoramento do que em **controle de mudanças**? O que deveria mudar?
2. O conceito de **deploy ≠ release** (via feature flags) parece simples, mas muitos times resistem. Qual o custo real de manter feature flags vs. o custo de rollbacks de emergência?
3. As DORA metrics mostram que times Elite fazem deploy **mais frequentemente** e com **menos falhas**. Isso contradiz a intuição de que "menos deploys = menos risco". Como você explicaria isso para um gestor conservador?
