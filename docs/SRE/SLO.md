# 🎯 SLO — Service Level Objective

## O que é?

A **meta interna** que você define para um SLI. É o alvo que sua equipe se compromete a atingir. SLO é onde você traça a linha entre "aceitável" e "precisamos agir".

> **SLO = SLI + meta + janela de tempo**

---

## Exemplo prático

| SLI | SLO | Janela |
|-----|-----|--------|
| % de requisições com sucesso | **99.9%** das requisições devem retornar sem erro | 30 dias |
| % de requisições abaixo de 200ms | **95%** das requisições devem responder em < 200ms | 30 dias |
| % de jobs concluídos | **99.5%** dos batch jobs devem completar com sucesso | 7 dias |

---

## Os "noves" e o que eles significam

| SLO | Downtime permitido/mês | Downtime/ano |
|-----|----------------------|--------------|
| 99% | 7h 18min | 3.65 dias |
| 99.9% | 43min | 8.77 horas |
| 99.95% | 21min | 4.38 horas |
| 99.99% | 4min 19s | 52.6 min |
| 99.999% | 26s | 5.26 min |

> Cada "nove" a mais é **exponencialmente** mais caro e difícil de atingir.

---

## SLO e Error Budget

O **error budget** é o quanto você pode falhar e ainda cumprir o SLO:

```
SLO = 99.9% em 30 dias
Total de requisições no mês = 10.000.000

Error budget = 10.000.000 × 0.1% = 10.000 erros permitidos

Semana 1: 2.000 erros → budget restante: 8.000 ✅
Semana 2: 3.000 erros → budget restante: 5.000 ✅
Semana 3: 4.500 erros → budget restante: 500 ⚠️ ALERTA!
Semana 4: Se gastar mais 500 → SLO violado 🔴
```

> Quando o error budget acaba, a equipe **para de lançar features** e foca em confiabilidade.

---

## Como definir um bom SLO?

| Pergunta | Por quê |
|----------|---------|
| O que os **usuários** esperam? | SLO deve refletir a experiência, não o ego da engenharia |
| O que é **alcançável**? | 99.999% é bonito, mas você consegue pagar? |
| O que os **concorrentes** oferecem? | Não precisa ser melhor que todos, precisa ser bom o suficiente |
| Qual o **custo** de cada nove a mais? | Mais noves = mais infra, mais on-call, mais complexidade |

---

## Boas práticas

- ✅ Comece com SLOs **conservadores** e ajuste com dados reais
- ✅ Defina SLOs **com o time de produto**, não só engenharia
- ✅ Use error budgets para **negociar** velocidade vs confiabilidade
- ✅ Revise SLOs **trimestralmente**
- ❌ Não defina SLO de 100% — isso é impossível e paralisante
- ❌ Não copie SLOs de outras empresas — o contexto é diferente

---

## 🤔 Perguntas para reflexão

1. Se seu SLO é 99.9% e seu sistema está rodando a 99.99%, isso é **bom** ou significa que você está **gastando demais** com confiabilidade?
2. Seu error budget acabou na semana 2. O time de produto quer lançar uma feature urgente. O que você faz?
3. Por que um SLO de **100%** é considerado errado, mesmo que pareça o ideal?