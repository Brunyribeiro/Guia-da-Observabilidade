# ⏱️ MTTR — Mean Time to Recovery (e outras métricas de incidente)

## O que é?

O tempo médio para **restaurar** um serviço após uma falha. É uma das métricas mais importantes de SRE porque mede a **velocidade de recuperação**, não a ausência de falhas.

> Falhas **vão** acontecer. O que importa é **quão rápido** você se recupera.

---

## As 4 métricas de incidente

| Métrica | Mede o quê | Fórmula |
|---------|-----------|---------|
| **MTTD** (Detect) | Tempo para **detectar** o problema | Início do problema → alerta dispara |
| **MTTA** (Acknowledge) | Tempo para **reconhecer** o alerta | Alerta dispara → alguém responde |
| **MTTR** (Recovery) | Tempo para **resolver** o problema | Início do problema → serviço restaurado |
| **MTBF** (Between Failures) | Tempo **entre** falhas | Fim da falha anterior → início da próxima |

---

## Exemplo prático

```
Timeline de um incidente:

14:00 - Deploy introduz bug (início do problema)
14:25 - Alerta de error rate dispara           ← MTTD = 25min
14:28 - Engenheiro de on-call reconhece        ← MTTA = 3min
14:30 - Investiga logs e traces
14:45 - Identifica o deploy como causa
14:50 - Faz rollback
14:55 - Serviço restaurado                     ← MTTR = 55min

Próxima falha: 20 dias depois                  ← MTBF = 20 dias
```

---

## Decompondo o MTTR

```
MTTR = MTTD + MTTA + MTTI + MTTF
         │       │       │      │
         │       │       │      └─ Time to Fix (aplicar a correção)
         │       │       └──────── Time to Investigate (achar a causa)
         │       └──────────────── Time to Acknowledge (responder)
         └──────────────────────── Time to Detect (perceber o problema)
```

> Para **reduzir** o MTTR, identifique qual etapa é a mais lenta e ataque ela primeiro.

---

## Como melhorar cada etapa

| Etapa | Problema comum | Solução |
|-------|---------------|---------|
| **Detectar** (MTTD) | Alertas mal configurados | Alertas baseados em SLOs, não CPU |
| **Reconhecer** (MTTA) | Ninguém de on-call | Escala de on-call com PagerDuty/OpsGenie |
| **Investigar** (MTTI) | Logs sem contexto | Traces + logs correlacionados |
| **Corrigir** (MTTF) | Deploy demorado | Feature flags, rollback automatizado |

---

## MTTR de referência

| Nível | MTTR típico | Maturidade |
|-------|------------|------------|
| Iniciante | > 4 horas | Sem alertas, descobre por reclamação |
| Intermediário | 1-4 horas | Alertas existem, investigação manual |
| Avançado | 15-60 min | Observabilidade completa, runbooks |
| Elite | < 15 min | Auto-remediação, rollback automático |

> Times de **elite** (ref: DORA metrics) têm MTTR < 1 hora.

---

## Boas práticas

- ✅ Meça cada etapa **separadamente** (MTTD, MTTA, MTTI, MTTF)
- ✅ Faça **postmortem blameless** após incidentes
- ✅ Crie **runbooks** para cenários comuns
- ✅ Pratique **game days** — simule falhas antes que aconteçam
- ❌ Não otimize MTBF ignorando MTTR — é mais barato se recuperar rápido
- ❌ Não culpe pessoas — melhore o sistema

---

## 🤔 Perguntas para reflexão

1. Se seu MTTD é 2 horas mas o MTTF é 5 minutos (rollback), onde você deveria investir mais esforço?
2. É melhor ter um sistema que **falha raramente mas demora horas para recuperar** ou um que **falha mais mas recupera em minutos**?
3. Por que o postmortem deve ser **blameless** (sem culpa)? O que acontece com a cultura do time quando culpamos pessoas?
