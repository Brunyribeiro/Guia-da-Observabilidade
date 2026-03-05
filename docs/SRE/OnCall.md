# 📟 On-Call

## O que é?

Uma escala de plantão onde engenheiros ficam **disponíveis para responder** a incidentes fora do horário comercial. É a linha de frente entre um alerta às 3h da manhã e a recuperação do serviço.

> On-call bem feito: você é acionado raramente e sabe exatamente o que fazer. On-call mal feito: você não dorme e cada alerta é um mistério.

---

## Como funciona uma escala

```
Semana 1:  👩 Maria (primária) / 👨 João (secundária)
Semana 2:  👨 João (primária) / 👩 Ana (secundária)
Semana 3:  👩 Ana (primária) / 👨 Carlos (secundária)
Semana 4:  👨 Carlos (primária) / 👩 Maria (secundária)
                                     ↑
                              Rotação semanal
```

| Papel | Responsabilidade |
|-------|-----------------|
| **Primário** | Primeiro a ser acionado. Responde em < 15 min |
| **Secundário** | Acionado se o primário não responder em X minutos |
| **Escalação** | Se ninguém responde, aciona gerente/líder técnico |

---

## Exemplo prático — fluxo de uma noite de on-call

```
02:47 🔴 Alerta: "payment-service latência p99 > 5s por 10 min"
       │
       ↓
02:47 📱 PagerDuty liga para Maria (primária)
       │
       ↓
02:49 ✅ Maria reconhece (acknowledge)
       │
       ↓
02:50 📋 Maria abre o runbook "payment-service-high-latency"
       │
       ↓
      O runbook diz:
      1. Verificar dashboard → latência só no endpoint /pix
      2. Verificar dependência → API do provedor de PIX está lenta
      3. Ação: ativar circuit breaker para PIX, fallback para boleto
       │
       ↓
02:58 ✅ Circuit breaker ativado, latência normalizada
       │
       ↓
03:00 📝 Maria documenta no canal de incidentes
       │
       ↓
03:05 😴 Maria volta a dormir
       │
       ↓
09:00 ☕ Time revisa o incidente na daily
```

> **18 minutos** do alerta à resolução. O runbook fez a diferença entre 18 minutos e 2 horas.

---

## Expectativas e limites

| Aspecto | Bom | Ruim |
|---------|-----|------|
| **Frequência de acionamento** | 0-2 vezes por semana | Toda noite |
| **Tempo para resolver** | < 30 min (com runbook) | Horas investigando sem contexto |
| **Compensação** | Folga compensatória, adicional | "Faz parte do trabalho" |
| **Rotação** | Semanal, dividida entre o time | Sempre as mesmas 2 pessoas |
| **Após o on-call** | Dia de folga ou horário reduzido | Trabalha normal no dia seguinte |

---

## O que o on-call NÃO é

| Mito | Realidade |
|------|-----------|
| "On-call = acordar toda noite" | Se acontece frequentemente, o **sistema** é o problema, não o on-call |
| "Só sêniors fazem on-call" | Todos devem participar (com treinamento e suporte) |
| "On-call resolve tudo sozinho" | On-call **mitiga**. Correções permanentes são para o horário comercial |
| "Trabalhar de on-call = trabalhar de graça" | Deve haver **compensação** (financeira ou folga) |

---

## Pré-requisitos para um on-call saudável

Antes de colocar alguém de on-call, garanta:

- [ ] **Alertas acionáveis** — sem alert fatigue
- [ ] **Runbooks atualizados** — para os cenários mais comuns
- [ ] **Acesso às ferramentas** — dashboards, logs, deploy, rollback
- [ ] **Treinamento** — shadow on-call por pelo menos 2 rotações
- [ ] **Escalação clara** — quem chamar se não conseguir resolver
- [ ] **Compensação definida** — folga, pagamento extra, etc.

---

## Shadow on-call (treinamento)

Para quem nunca fez on-call:

```
Rotação 1: 👀 Shadow observa → primário resolve, shadow acompanha
Rotação 2: 👀 Shadow lidera → shadow tenta resolver, primário supervisiona
Rotação 3: 🎯 Solo → shadow assume como primário
```

> Nunca coloque alguém de on-call pela primeira vez sem shadow. É receita para burnout e incidentes mal resolvidos.

---

## Ferramentas

| Ferramenta | Uso | Destaque |
|------------|-----|----------|
| **PagerDuty** | Escala e acionamento | Padrão do mercado |
| **OpsGenie** | Escala e acionamento | Integração Atlassian |
| **Grafana OnCall** | Escala e acionamento | Open source |
| **Slack/Teams** | Comunicação | Canal de incidentes |
| **Google Calendar** | Visibilidade da escala | Quem está de on-call hoje? |

---

## Boas práticas

- ✅ **Rotacione** semanalmente entre todos do time
- ✅ Garanta **compensação** por estar de on-call
- ✅ Mantenha **runbooks** como primeira linha de defesa
- ✅ Faça **shadow** antes de colocar alguém solo
- ✅ Se on-call foi acionado à noite, ofereça **folga ou horário flexível** no dia seguinte
- ✅ Revise alertas que acionam on-call — se não é acionável, **delete**
- ❌ Não coloque sempre as mesmas pessoas
- ❌ Não normalize ser acordado toda noite — conserte o sistema
- ❌ Não tenha on-call sem runbook — é tortura

---

## Métricas de saúde do on-call

| Métrica | Saudável | Problemático |
|---------|----------|-------------|
| Acionamentos/semana | 0-2 | > 5 |
| % resolvido com runbook | > 70% | < 30% |
| Tempo médio de resposta | < 15 min | > 30 min |
| Rotação | Todo o time participa | 2-3 pessoas fixas |
| Falsos positivos | < 10% | > 50% |

---

## 🤔 Perguntas para reflexão

1. Seu time tem 4 pessoas e o on-call é acionado **toda noite**. O problema é o on-call ou o sistema? O que você atacaria primeiro?
2. Um júnior entra no time. Quando e como você o colocaria na escala de on-call?
3. Se 60% dos acionamentos são **falsos positivos**, qual o impacto na confiança do time nos alertas?
