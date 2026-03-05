# 📝 SLA — Service Level Agreement

## O que é?

Um **contrato formal** (geralmente com consequências financeiras) entre um provedor de serviço e seu cliente. Se o SLA for violado, há penalidades — como créditos, reembolsos ou multas.

> **SLA = SLO + consequências contratuais**

---

## SLA vs SLO vs SLI

```
SLI → O que você MEDE        (ex: 99.5% de disponibilidade)
SLO → O que você ALMEJA      (ex: meta interna de 99.9%)
SLA → O que você PROMETE      (ex: contrato de 99.5% com multa)
```

| Aspecto | SLI | SLO | SLA |
|---------|-----|-----|-----|
| **O que é** | Métrica | Meta interna | Contrato externo |
| **Quem define** | Engenharia | Engenharia + Produto | Jurídico + Negócio |
| **Consequência se falhar** | Nenhuma | Foco em confiabilidade | Multa/crédito |
| **Público** | Time técnico | Time interno | Cliente |

> 💡 **Regra de ouro:** SLA deve ser **menos restritivo** que o SLO. Se seu SLO é 99.9%, seu SLA deveria ser 99.5%. Assim, quando o SLO quebrar, você tem margem antes do SLA ser violado.

---

## Exemplo prático

**SLA de um provedor de cloud (estilo AWS/Azure):**

| Serviço | SLA | Crédito se violar |
|---------|-----|--------------------|
| Compute (VMs) | 99.99% uptime mensal | 10% se < 99.99%, 30% se < 99.0% |
| Banco de dados | 99.95% uptime mensal | 10% se < 99.95%, 25% se < 99.0% |
| Storage | 99.9% uptime mensal | 10% se < 99.9% |

**Na prática:**
```
Seu banco de dados ficou fora por 2 horas no mês.

Uptime = (720h - 2h) / 720h = 99.72%

SLA prometido: 99.95%
SLA atingido: 99.72% → VIOLADO

Consequência: Provedor dá 10% de crédito na fatura do mês.
```

---

## O que um SLA geralmente define

- 📊 **Métrica** — o que está sendo medido (uptime, latência)
- 🎯 **Meta** — o número prometido (99.9%)
- 📅 **Janela** — período de medição (mensal, trimestral)
- 📏 **Como medir** — de onde vem o dado (monitoramento do provedor? do cliente?)
- 💰 **Penalidade** — o que acontece se quebrar
- 🚫 **Exclusões** — o que NÃO conta (manutenção planejada, força maior)

---

## Boas práticas

- ✅ SLA sempre **abaixo** do SLO interno (margem de segurança)
- ✅ Defina SLA com métricas **mensuráveis e verificáveis**
- ✅ Inclua **exclusões claras** (manutenção programada, etc.)
- ✅ Revise SLAs quando a arquitetura mudar significativamente
- ❌ Não prometa 100% — nenhum sistema é perfeito
- ❌ Não defina SLA sem ter SLI implementado para medir

---

## 🤔 Perguntas para reflexão

1. Se a AWS promete 99.99% de SLA mas sua aplicação tem 99.5% de uptime, é culpa da AWS?
2. Por que o SLA deve ser **menos restritivo** que o SLO? O que acontece se forem iguais?
3. Um cliente reclama que sua API está lenta, mas seu SLA só cobre **disponibilidade** (uptime). Quem está certo?