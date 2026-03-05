# 🚒 Incident Management (Gestão de Incidentes)

## O que é?

O **processo organizacional** para responder a incidentes em produção. Não é só técnico — envolve comunicação, papéis definidos e coordenação. Troubleshooting é achar o problema; incident management é **coordenar as pessoas** para resolver.

---

## Incidente vs Problema vs Alerta

| Termo | Definição | Exemplo |
|-------|-----------|---------|
| **Alerta** | Notificação automática de que algo pode estar errado | `error_rate > 5%` |
| **Incidente** | Interrupção ou degradação que **afeta usuários** | Checkout fora do ar |
| **Problema** | A causa raiz por trás de um ou mais incidentes | Bug no deploy v2.3.1 |

> Nem todo alerta é incidente. Nem todo incidente tem causa raiz óbvia.

---

## Severidade de incidentes

| Severity | Definição | Resposta | Exemplo |
|----------|-----------|----------|---------|
| **SEV1** | Impacto total, perda de receita | War room imediata, todos acordam | Sistema fora do ar |
| **SEV2** | Degradação significativa | On-call responde em < 30min | Checkout 10x mais lento |
| **SEV3** | Impacto parcial ou menor | Próximo dia útil | Um endpoint secundário com erros |
| **SEV4** | Cosmético / sem impacto ao usuário | Backlog | Logs com warning desnecessário |

---

## Papéis durante um incidente

```
┌─────────────────────────────────────────────────┐
│                  INCIDENTE SEV1                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  👑 Incident Commander (IC)                      │
│  ├─ Coordena tudo, toma decisões                │
│  ├─ NÃO investiga (foca em liderar)             │
│  └─ Define prioridades e delega                 │
│                                                  │
│  🔧 Technical Lead                               │
│  ├─ Investiga a causa raiz                      │
│  ├─ Executa a correção                          │
│  └─ Reporta progresso ao IC                     │
│                                                  │
│  📢 Communications Lead                          │
│  ├─ Atualiza stakeholders e status page         │
│  ├─ Responde perguntas de fora do time          │
│  └─ Mantém o canal de comunicação organizado    │
│                                                  │
│  📝 Scribe (Escriba)                             │
│  ├─ Documenta a timeline em tempo real          │
│  └─ Registra decisões e ações tomadas           │
│                                                  │
└─────────────────────────────────────────────────┘
```

> Em times pequenos, uma pessoa pode acumular papéis. Mas o IC **nunca** deveria estar debugando código — ele precisa ter visão do todo.

---

## Exemplo prático — fluxo de um SEV1

```
14:00 🔴 Alerta: error_rate > 10% no checkout
14:02 📱 PagerDuty aciona on-call (Maria)
14:03 👑 Maria assume como IC, abre canal #inc-checkout-20260305
14:05 📢 Maria posta no canal: "Checkout com error rate 10%, investigando"
14:06 🔧 João (tech lead) começa a investigar traces
14:08 📢 Status page: "Estamos cientes de problemas no checkout"
14:12 🔧 João identifica: deploy v2.3.1 quebrou integração com pagamento
14:14 👑 Maria decide: "Rollback para v2.3.0 agora"
14:16 🔧 João executa rollback
14:20 ✅ Error rate volta a 0.1%
14:22 📢 Status page: "Problema resolvido"
14:25 👑 Maria: "Incidente resolvido. Postmortem amanhã 10h"
```

> Total: **22 minutos** do alerta à resolução. Isso só é possível com papéis claros.

---

## Comunicação durante incidentes

| Para quem | O que comunicar | Quando | Canal |
|-----------|----------------|--------|-------|
| **Time técnico** | Status, hipóteses, ações | A cada 5-10 min | Slack/Teams (canal dedicado) |
| **Stakeholders internos** | Impacto, ETA de resolução | A cada 15-30 min | Slack/Email |
| **Usuários externos** | Status simplificado | Quando confirmar e quando resolver | Status page |
| **Liderança** | Resumo executivo | No início e no fim | Mensagem direta |

> 💡 **Over-communicate** durante incidentes. Silêncio gera ansiedade e perguntas que atrapalham quem está resolvendo.

---

## Ferramentas

| Ferramenta | Uso | Destaque |
|------------|-----|----------|
| **PagerDuty** | Alertas e escalonamento | Automações, on-call schedules |
| **OpsGenie** | Alertas e escalonamento | Integração com Atlassian |
| **Statuspage** | Comunicação externa | Página de status para usuários |
| **Slack / Teams** | War room | Canal dedicado por incidente |
| **Rootly / incident.io** | Gestão completa | Automatiza criação de canais, postmortems |
| **Jira / Linear** | Action items pós-incidente | Tracking das melhorias |

---

## Boas práticas

- ✅ Defina papéis **antes** do incidente acontecer
- ✅ Use **canal dedicado** por incidente (não polua canais gerais)
- ✅ O IC **não debuga** — ele coordena
- ✅ Atualize stakeholders **proativamente** (não espere perguntarem)
- ✅ Faça **postmortem blameless** em até 48h após SEV1/SEV2
- ✅ Pratique com **simulações** (game days)
- ❌ Não deixe todo mundo falar ao mesmo tempo no canal
- ❌ Não comece a investigar sem comunicar que está ciente
- ❌ Não pule o postmortem — "não ter tempo" garante que vai acontecer de novo

---

## 🤔 Perguntas para reflexão

1. Durante um SEV1, o CEO entra no canal e começa a fazer perguntas técnicas. Como o IC deveria lidar com isso?
2. Se todo incidente é SEV1, **nenhum** é SEV1. Como você calibra a severidade no seu time?
3. O postmortem revelou que o problema foi um deploy sem teste. Sem culpar ninguém, **o que você muda no processo**?
