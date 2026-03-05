# 📤 TOI — Transfer of Information

## O que é?

**TOI (Transfer of Information)** — também chamado de **Transfer of Operations** ou **Knowledge Transfer** — é o processo formal de **transferir conhecimento operacional** de um time para outro. Acontece quando uma aplicação, serviço ou infraestrutura muda de responsável: do time de desenvolvimento para o time de operações/SRE, de um squad para outro, ou de uma empresa terceirizada para o time interno.

> Sem TOI, o novo time herda um sistema que **não sabe operar**. O resultado? MTTR alto, incidentes evitáveis e dependência eterna do time anterior.

---

## Por que é importante?

| Sem TOI | Com TOI |
|---------|---------|
| Novo time não sabe como o sistema funciona | Arquitetura e decisões documentadas |
| Incidentes sem contexto — MTTR de horas | Runbooks prontos, MTTR previsível |
| Dependência do time anterior para resolver problemas | Autonomia operacional desde o dia 1 |
| On-call começa "no escuro" | Shadow period com acompanhamento |
| Conhecimento preso na cabeça de pessoas | Conhecimento institucionalizado |

---

## Quando acontece?

| Cenário | Exemplo |
|---------|---------|
| **Dev → Ops/SRE** | Time de desenvolvimento entrega um novo microsserviço para o time de SRE operar em produção |
| **Squad → Squad** | Reorganização de squads — serviço muda de dono |
| **Terceiro → Interno** | Sistema operado por consultoria passa para o time interno |
| **Migração** | Sistema legado migrado para nova plataforma, novo time assume |
| **Offboarding** | Pessoa-chave saindo da empresa — transferir conhecimento antes |

---

## O que um TOI deve conter?

### 📋 Checklist de transferência

| Categoria | Itens |
|-----------|-------|
| **Arquitetura** | Diagrama de componentes, dependências, fluxos de dados, integrações |
| **Infraestrutura** | Onde roda (cloud/on-prem), como escala, limites de recursos, custos |
| **Observabilidade** | Dashboards, alertas configurados, métricas-chave, onde ficam os logs |
| **Operação** | Runbooks, procedimentos de deploy, rollback, feature flags |
| **SLOs e SLAs** | Metas definidas, error budgets, compromissos com clientes |
| **Incidentes passados** | Histórico de post-mortems, problemas recorrentes, workarounds conhecidos |
| **Acessos** | Credenciais, permissões necessárias, contas de serviço |
| **Contatos** | Quem sabe o quê no time anterior, stakeholders, dependências externas |
| **Dívida técnica** | Problemas conhecidos, limitações, "gambiarras" que existem e por quê |

---

## Processo de TOI — Passo a passo

```
  Fase 1              Fase 2              Fase 3              Fase 4
┌────────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐
│ Documentar │───▶│  Treinar   │───▶│  Shadow    │───▶│  Handoff   │
│            │    │            │    │  Period    │    │  Oficial   │
└────────────┘    └────────────┘    └────────────┘    └────────────┘
  Time origem       Sessões de        Novo time           Novo time
  prepara docs      conhecimento      acompanha           assume 100%
  e runbooks        com Q&A           operação real       com suporte
```

### Fase 1 — Documentação (1-2 semanas)

O time de origem produz/atualiza toda a documentação do checklist acima.

> **Dica:** Se a documentação não existia, esse é o maior sinal de que o TOI era necessário.

### Fase 2 — Sessões de conhecimento (1-2 semanas)

Sessões gravadas cobrindo:

| Sessão | Conteúdo | Duração sugerida |
|--------|----------|-----------------|
| 1 | Visão geral da arquitetura + demo do sistema | 2h |
| 2 | Infraestrutura, deploy e rollback | 1.5h |
| 3 | Observabilidade: dashboards, alertas, logs | 1.5h |
| 4 | Incidentes comuns + walkthrough dos runbooks | 2h |
| 5 | SLOs, SLAs, error budgets e stakeholders | 1h |
| 6 | Dívida técnica, workarounds e "onde não mexer" | 1h |

> **Grave tudo.** As gravações são referência para quem entrar no time depois.

### Fase 3 — Shadow Period (2-4 semanas)

O novo time **acompanha a operação real** ao lado do time de origem:

- Participa do on-call como **shadow** (observa, não age sozinho)
- Resolve incidentes reais com supervisão
- Executa deploys com acompanhamento
- Tira dúvidas em tempo real

> O shadow period acaba quando o novo time resolver **pelo menos 3 incidentes** de forma autônoma.

### Fase 4 — Handoff oficial

- Novo time assume **100% da responsabilidade**
- Time de origem fica disponível por **30 dias** para dúvidas (canal dedicado)
- Após 30 dias, o time de origem é desvinculado

---

## Exemplo prático

**Cenário:** O time "Pagamentos" desenvolveu o `payment-service`. O time de SRE vai assumir a operação.

### Antes do TOI (situação real)

```
SRE: "Caiu um alerta do payment-service, o que eu faço?"
Dev: "Ah, isso acontece às vezes. Reinicia o pod."
SRE: "Qual pod? Tem 12."
Dev: "O que tiver mais memória."
SRE: "E se não resolver?"
Dev: "Me liga." 😬
```

### Depois do TOI

```
[Alerta: payment-service high memory]
        ↓
[Runbook: PSV-003 — Memory Leak Known Issue]
        ↓
  Passo 1: Verificar qual pod (kubectl top pods -n payments)
  Passo 2: Drenar conexões do pod com mais memória
  Passo 3: Restart graceful (kubectl rollout restart)
  Passo 4: Se > 3x na semana, escalar para time Pagamentos (JIRA template)
        ↓
[Resolvido em 8 minutos — sem ligar pra ninguém]
```

---

## Critérios de "Production Readiness"

Muitas empresas usam um **Production Readiness Review (PRR)** como gate antes de aceitar um TOI. O serviço só é aceito se atender critérios mínimos:

| Critério | Requisito mínimo |
|----------|-----------------|
| **Observabilidade** | Dashboard com Golden Signals, alertas configurados, logs estruturados |
| **SLOs** | Pelo menos 1 SLO definido e medido |
| **Runbooks** | Runbook para cada alerta existente |
| **Deploy** | Pipeline automatizado com rollback |
| **Testes** | Cobertura mínima + testes de integração |
| **Documentação** | Arquitetura, dependências, acessos documentados |
| **Capacity** | Limites de recursos definidos, auto-scaling configurado |

> Se o serviço **não passa no PRR**, o TOI é **bloqueado** até que os gaps sejam resolvidos. Isso protege o time receptor.

---

## Ferramentas

| Ferramenta | Uso no TOI |
|------------|-----------|
| **Confluence / Notion** | Documentação centralizada |
| **Loom / Google Meet (gravação)** | Sessões de conhecimento gravadas |
| **Backstage / Port** | Catálogo de serviços com metadados |
| **PagerDuty / OpsGenie** | Transferência de on-call e escalação |
| **Jira / Linear** | Tracking de itens pendentes do TOI |
| **GitHub/GitLab** | Runbooks versionados junto ao código |

---

## Boas práticas

- ✅ Comece a documentar **antes** de saber que haverá TOI — facilita tudo
- ✅ Use um **checklist formal** para garantir que nada foi esquecido
- ✅ **Grave** as sessões de conhecimento — pessoas entram e saem dos times
- ✅ Defina um **período de shadow** proporcional à complexidade do serviço
- ✅ Exija um **Production Readiness Review** antes de aceitar a transferência
- ✅ Mantenha um canal de comunicação com o time anterior por **pelo menos 30 dias**
- ❌ Não aceite TOI de serviço **sem runbooks** — você vai sofrer no primeiro incidente
- ❌ Não faça TOI "verbal" sem documentação — conhecimento se perde em semanas
- ❌ Não pule o shadow period — ler docs não substitui operar na prática

---

## 🤔 Perguntas para reflexão

1. Se a pessoa que mais conhece o sistema sair da empresa amanhã, o time consegue **operar sem ela**? Se não, o que está faltando documentar?
2. Muitas empresas fazem TOI sem **Production Readiness Review** — o time de SRE herda serviços "quebrados". Como implementar um PRR sem criar burocracia que trave entregas?
3. O **shadow period** é frequentemente encurtado por pressão de prazo. Qual o risco de pular essa fase, e como você convenceria a liderança a manter o período completo?
