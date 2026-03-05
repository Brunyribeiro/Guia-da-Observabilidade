# 🔎 Post-Mortem

## O que é?

Um **post-mortem** (também chamado de *retrospectiva de incidente* ou *incident review*) é uma análise **estruturada e blameless** (sem culpa) feita **após a resolução de um incidente**. O objetivo não é apontar culpados, mas entender:

- **O que aconteceu?** (timeline)
- **Por que aconteceu?** (causa raiz)
- **Como evitar que aconteça de novo?** (ações)

> *"Post-mortems sem culpa são a base de uma cultura de engenharia saudável. Se as pessoas têm medo de reportar erros, os erros se repetem."*
> — Google SRE Book

---

## Quando fazer um post-mortem?

Nem todo incidente precisa de post-mortem. Defina **gatilhos claros**:

| Gatilho | Exemplo |
|---------|---------|
| **SLO violado** | Error budget do mês consumido em um dia |
| **Impacto ao usuário** | > X% dos usuários afetados por > Y minutos |
| **Severidade alta** | SEV1 ou SEV2 (dependendo da classificação da empresa) |
| **Detecção falhou** | Incidente descoberto por usuário, não por alerta |
| **Repetição** | Mesmo tipo de incidente pela 2ª+ vez |
| **Near-miss significativo** | Quase causou impacto grave |

> **Regra prática:** se o incidente foi interessante o suficiente para alguém perguntar "o que aconteceu?", provavelmente merece um post-mortem.

---

## Cultura Blameless — Por que é essencial

| Com culpa (blame culture) | Sem culpa (blameless) |
|---------------------------|----------------------|
| "Quem fez o deploy errado?" | "O que no processo permitiu que o deploy causasse falha?" |
| Pessoas escondem erros | Pessoas reportam proativamente |
| Ações: "retreinar a pessoa" | Ações: "adicionar guardrails no pipeline" |
| Mesmo erro se repete | Sistema evolui para prevenir |
| Medo de inovar | Segurança psicológica para experimentar |

> **Blameless ≠ Accountless.** Pessoas ainda são responsáveis por suas ações, mas o foco é no **sistema**, não no indivíduo. A pergunta é "como o sistema permitiu que isso acontecesse?" e não "quem causou?".

---

## Estrutura de um post-mortem

### Template completo

```markdown
# Post-Mortem: [Título descritivo do incidente]

**Data do incidente:** YYYY-MM-DD
**Severidade:** SEV1 / SEV2 / SEV3
**Duração:** HH:MM (do início ao fim do impacto)
**Autor(es):** Nomes
**Status:** Rascunho / Em revisão / Finalizado

---

## Resumo executivo
[2-3 frases. O que aconteceu, quanto durou, qual foi o impacto.]

## Impacto
- **Usuários afetados:** X% / N usuários
- **Receita perdida:** R$ X (se aplicável)
- **SLOs impactados:** Quais e quanto do error budget consumiu
- **Duração do impacto:** HH:MM

## Timeline
| Horário (UTC) | Evento |
|---------------|--------|
| 14:00 | Deploy v2.3.1 realizado |
| 14:05 | Alerta: error_rate > 5% no payment-service |
| 14:08 | Incident Commander acionado |
| 14:15 | Causa identificada: query N+1 no novo endpoint |
| 14:20 | Rollback iniciado |
| 14:25 | Rollback completo, error_rate voltou ao normal |
| 14:30 | Incidente declarado resolvido |

## Detecção
- **Como foi detectado?** Alerta automático / Usuário reportou / Monitoramento
- **Tempo até detecção (TTD):** X minutos
- **O alerta era adequado?** Sim / Não — por quê?

## Causa raiz
[Descrição técnica detalhada da causa raiz]

## Análise dos 5 Porquês
1. **Por que** o error_rate subiu? → Timeout nas chamadas ao banco
2. **Por que** deu timeout? → Query N+1 no novo endpoint de relatórios
3. **Por que** a query N+1 passou? → Sem teste de performance no CI
4. **Por que** não tem teste de performance? → Nunca foi priorizado
5. **Por que** nunca foi priorizado? → Sem processo de Production Readiness

## Fatores contribuintes
- [ ] Falta de teste de carga
- [ ] Code review não pegou a query N+1
- [ ] Ambiente de staging não reflete volume real

## O que deu certo
- ✅ Alerta disparou em 5 minutos
- ✅ Rollback automatizado funcionou
- ✅ IC assumiu rapidamente e coordenou bem

## O que deu errado
- ❌ Sem teste de performance no pipeline
- ❌ Staging com 100 registros (prod tem 2M)
- ❌ Runbook do payment-service não cobria esse cenário

## Ações corretivas
| # | Ação | Responsável | Prazo | Prioridade | Ticket |
|---|------|------------|-------|------------|--------|
| 1 | Adicionar teste de carga no CI para endpoints críticos | @eng-team | 2 semanas | P1 | JIRA-123 |
| 2 | Popular staging com volume realista | @platform | 1 semana | P1 | JIRA-124 |
| 3 | Atualizar runbook do payment-service | @sre-team | 3 dias | P2 | JIRA-125 |
| 4 | Implementar query analysis no code review | @eng-team | 1 mês | P2 | JIRA-126 |

## Lições aprendidas
[O que a organização aprendeu com esse incidente]
```

---

## Os 5 Porquês — Técnica de causa raiz

A técnica mais usada em post-mortems. Pergunte "por quê?" repetidamente até chegar na **causa sistêmica**:

```
Problema: Usuários não conseguem fazer pagamento
  │
  ├─ Por quê? → payment-service retornando 500
  │    │
  │    ├─ Por quê? → Timeout na query ao banco
  │    │    │
  │    │    ├─ Por quê? → Query N+1 no endpoint novo
  │    │    │    │
  │    │    │    ├─ Por quê? → Code review não pegou
  │    │    │    │    │
  │    │    │    │    └─ Por quê? → Sem checklist de
  │    │    │    │                   performance no PR
  │    │    │    │
  │    │    │    └─ AÇÃO: Adicionar linter de query no CI
  │    │    │
  │    │    └─ AÇÃO: Popular staging com dados realistas
  │    │
  │    └─ AÇÃO: Adicionar teste de carga para endpoints críticos
  │
  └─ AÇÃO: Atualizar runbook com esse cenário
```

> **Cuidado:** nem sempre são exatamente 5. Pare quando chegar em algo **acionável e sistêmico**.

---

## Exemplo prático — Post-mortem resumido

### Incidente: "Checkout fora do ar por 25 minutos"

**Data:** 2025-11-15 | **SEV:** 2 | **Duração:** 25 min | **Usuários:** ~12.000 afetados

**Resumo:** Deploy da v2.3.1 introduziu query N+1 que causou timeout no banco. Checkout ficou indisponível por 25 minutos até rollback.

**Timeline resumida:**

```
14:00  Deploy v2.3.1
14:05  🚨 Alerta: error_rate 8% (threshold: 1%)
14:08  IC assume, inicia investigação
14:12  Logs mostram: "QueryTimeout after 30s"
14:15  Correlação com deploy → decisão de rollback
14:20  Rollback completo
14:25  Error_rate normalizado → incidente resolvido
```

**Causa raiz:** Novo endpoint `/api/v2/reports` executava 1 query por item do carrinho (N+1). Em produção, carrinhos têm em média 8 itens → 8 queries por request → saturação do connection pool do banco.

**Por que não foi pego antes:** staging tinha 100 produtos (prod tem 2M), e não havia teste de carga no CI.

**Ações (top 3):**
1. ⏰ Teste de carga automatizado no CI (2 semanas)
2. ⏰ Dados realistas no staging (1 semana)
3. ⏰ Query analysis obrigatório no code review (1 mês)

---

## Anti-padrões de post-mortem

| Anti-padrão | Problema | Solução |
|-------------|----------|---------|
| **Blame game** | "O João fez o deploy errado" | Foco no sistema: "o pipeline permitiu deploy sem validação" |
| **Ações vagas** | "Melhorar o monitoramento" | Ser específico: "Adicionar alerta para connection pool > 80%" |
| **Ações sem dono** | Lista de ações sem responsável | Cada ação tem dono, prazo e ticket |
| **Gaveta** | Post-mortem escrito e nunca mais lido | Revisar ações em reunião semanal até conclusão |
| **Copy-paste** | Mesmo template sem reflexão real | Adaptar análise ao contexto específico |
| **Skip** | "Foi só um incidentezinho" | Definir gatilhos claros para quando fazer |

---

## Reunião de post-mortem

| Aspecto | Recomendação |
|---------|-------------|
| **Quando** | 24-72h após o incidente (memória fresca, emoções mais controladas) |
| **Quem** | Todos que participaram do incidente + stakeholders |
| **Duração** | 30-60 minutos |
| **Facilitador** | Alguém que **não participou** do incidente (imparcial) |
| **Pré-requisito** | Rascunho do post-mortem já escrito antes da reunião |
| **Output** | Post-mortem finalizado + ações com donos e prazos |

### Agenda sugerida

| Tempo | Atividade |
|-------|-----------|
| 5 min | Facilitador relembra regras blameless |
| 10 min | Autor apresenta timeline e causa raiz |
| 15 min | Grupo discute: "o que mais poderia ter contribuído?" |
| 10 min | Grupo discute: "o que deu certo?" |
| 15 min | Definir ações corretivas com donos e prazos |
| 5 min | Próximos passos e data de follow-up |

---

## Métricas de post-mortem

| Métrica | O que mede | Meta sugerida |
|---------|-----------|---------------|
| **% de incidentes com post-mortem** | Cobertura | > 90% dos SEV1/SEV2 |
| **Tempo até publicação** | Velocidade | < 5 dias úteis |
| **% de ações concluídas** | Efetividade | > 80% em 30 dias |
| **Taxa de recorrência** | Aprendizado | < 10% do mesmo tipo |
| **Participação** | Engajamento | > 80% dos envolvidos presentes na reunião |

---

## Ferramentas

| Ferramenta | Uso |
|------------|-----|
| **Jeli** | Plataforma dedicada para análise de incidentes |
| **Blameless** | Automação de post-mortems + tracking de ações |
| **FireHydrant** | Gerenciamento de incidentes + post-mortems integrados |
| **Confluence / Notion** | Templates e repositório de post-mortems |
| **Google Docs** | Colaboração em tempo real durante a reunião |
| **PagerDuty** | Integração com timeline de incidentes |

---

## Boas práticas

- ✅ Faça post-mortem de **near-misses** também — quase-incidentes são ouro de aprendizado
- ✅ Publique post-mortems **abertamente** na empresa — transparência gera confiança
- ✅ Cada ação corretiva deve ter **dono, prazo e ticket** — senão não acontece
- ✅ Revise ações pendentes **semanalmente** até conclusão
- ✅ Use a técnica dos **5 Porquês** para ir além do sintoma
- ✅ **Grave** a reunião para quem não pôde participar
- ✅ Celebre o que **deu certo** — reforça comportamentos positivos
- ❌ Não espere mais de **72h** para fazer a reunião — contexto se perde
- ❌ Não aceite ações como "ter mais cuidado" — isso não é uma ação
- ❌ Não pule o post-mortem porque "foi simples" — padrões de incidentes simples revelam problemas sistêmicos

---

## 🤔 Perguntas para reflexão

1. Se sua empresa faz post-mortems mas **menos de 50% das ações são concluídas**, o processo está gerando valor? O que faria para mudar isso?
2. A cultura **blameless** é difícil de implementar em empresas com gestão tradicional. Como você introduziria o conceito sem parecer que "ninguém é responsável por nada"?
3. Grandes empresas como Google e Etsy publicam post-mortems **publicamente**. Quais os benefícios e riscos de fazer isso na sua organização?
