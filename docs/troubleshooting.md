# 🔧 Troubleshooting — Guia de Investigação de Incidentes

## O que é?

O processo sistemático de **diagnosticar e resolver** problemas em produção. Não é chute, não é sorte — é **método**.

---

## Fluxo de investigação

```
1. ALERTA DISPARA
   │
   ↓
2. ENTENDA O IMPACTO
   "O que está quebrado? Quem está afetado? Desde quando?"
   │
   ↓
3. OLHE OS GOLDEN SIGNALS
   Dashboard → Latência? Erros? Tráfego? Saturação?
   │
   ↓
4. ISOLE O COMPONENTE
   Qual serviço? Qual endpoint? Qual região?
   │
   ↓
5. INVESTIGUE A CAUSA
   Logs → Traces → Métricas detalhadas
   │
   ↓
6. APLIQUE A CORREÇÃO
   Rollback? Feature flag? Restart? Scale up?
   │
   ↓
7. VERIFIQUE A RECUPERAÇÃO
   Os signals voltaram ao normal?
   │
   ↓
8. POSTMORTEM
   Documente: o que aconteceu, por que, como evitar
```

---

## Exemplo prático — investigando passo a passo

**Alerta:** `error_rate > 5% no serviço checkout por 10 min`

### Passo 1: Entenda o impacto
```
- Dashboard: error rate subiu de 0.1% para 8%
- Serviço: checkout-api
- Início: 14:32
- Usuários afetados: ~500/min não conseguem finalizar compra
```

### Passo 2: O que mudou?
```
Pergunte-se:
  ✅ Houve deploy recente?          → Sim! Deploy às 14:30
  ✅ Mudança de infra?              → Não
  ✅ Tráfego incomum?               → Não
  ✅ Dependência externa com problema? → Verificando...
```

### Passo 3: Busque nos logs
```json
{
  "timestamp": "2026-03-05T14:33:00Z",
  "service": "checkout-api",
  "level": "ERROR",
  "message": "Connection refused: payment-service:8080",
  "trace_id": "xyz-789"
}
```

### Passo 4: Siga o trace
```
checkout-api ████ (50ms)
  └─ payment-service ✗ Connection refused ← AQUI!
```

### Passo 5: Ação
```
Causa: Deploy do payment-service mudou a porta de 8080 para 8081
Ação: Rollback do deploy
Resultado: Error rate voltou a 0.1% em 2 minutos
```

---

## Perguntas-chave para troubleshooting

| Pergunta | Por quê |
|----------|---------|
| **O que mudou?** | 70% dos incidentes são causados por mudanças recentes |
| **Desde quando?** | Correlacione com deploys, horários, eventos |
| **Quem é afetado?** | Todos? Só uma região? Só um tipo de usuário? |
| **O que diz o trace?** | Onde exatamente o tempo/erro está? |
| **Já aconteceu antes?** | Procure incidentes similares no histórico |

---

## Armadilhas comuns

| Armadilha | Problema | Solução |
|-----------|----------|---------|
| Focar na **causa** antes de **mitigar** | Usuários ficam esperando enquanto você investiga | Primeiro restaure o serviço (rollback), depois investigue |
| Tunel vision | Fixar em uma hipótese errada | Siga os dados, não a intuição |
| Muita gente no incidente | Caos, ninguém lidera | Defina um **Incident Commander** |
| Não documentar | O mesmo incidente se repete | Postmortem + runbook obrigatório |

---

## Template de Postmortem

```markdown
# Postmortem — [Título do Incidente]

**Data:** YYYY-MM-DD
**Duração:** X minutos
**Impacto:** Descrição do impacto ao usuário
**Severidade:** P1/P2/P3

## Timeline
- HH:MM - O que aconteceu
- HH:MM - Alerta disparou
- HH:MM - Ação tomada
- HH:MM - Serviço restaurado

## Causa raiz
Descrição técnica da causa.

## O que deu certo
- Alerta disparou em X minutos
- Runbook existia e foi seguido

## O que pode melhorar
- Alerta poderia ter sido mais rápido
- Teste de integração não cobria este cenário

## Action items
- [ ] Adicionar teste para este cenário
- [ ] Melhorar alerta de connection refused
- [ ] Atualizar runbook com novo procedimento
```

---

## Ferramentas úteis para troubleshooting

| Ferramenta | Uso | Destaque |
|------------|-----|----------|
| **Grafana** | Dashboards e correlação | Visualização dos Golden Signals |
| **Loki / Elasticsearch** | Busca de logs | Filtrar por trace_id, service, level |
| **Jaeger / Tempo** | Visualizar traces | Encontrar gargalos entre serviços |
| **PagerDuty / OpsGenie** | Gestão de incidentes | Escalonamento e on-call |
| **Statuspage** | Comunicação externa | Informar usuários sobre incidentes |
| **Slack / Teams** | War room | Canal dedicado para o incidente |

---

## Boas práticas

- ✅ **Mitigue primeiro**, investigue depois — restaure o serviço antes de achar a causa raiz
- ✅ Mantenha um **canal de comunicação** dedicado por incidente
- ✅ Defina um **Incident Commander** — alguém precisa liderar
- ✅ Documente a timeline **durante** o incidente, não depois
- ✅ Faça **postmortem blameless** para cada incidente P1/P2
- ✅ Mantenha **runbooks atualizados** para cenários comuns
- ❌ Não investigue sozinho por horas — peça ajuda cedo
- ❌ Não faça mudanças em produção sem comunicar o time
- ❌ Não pule o postmortem — "não ter tempo" é como o incidente se repete

---

## 🤔 Perguntas para reflexão

1. Seu serviço está fora do ar. Você acha que sabe a causa raiz. Você deveria **investigar mais** para confirmar ou fazer **rollback imediatamente** e investigar depois?
2. Por que "o que mudou?" é quase sempre a primeira pergunta a fazer?
3. Se o postmortem é **blameless**, como você garante que as pessoas **melhorem** sem culpá-las?