# 💰 Error Budget

## O que é?

A **quantidade tolerável de falhas** dentro de um período, derivada do SLO. É o "orçamento de erros" que transforma confiabilidade em algo **negociável** entre engenharia e produto.

> Se o SLO diz 99.9%, o error budget são os **0.1%** de falhas permitidas.

---

## Como calcular

```
SLO = 99.9% de disponibilidade em 30 dias

Error budget = 100% - 99.9% = 0.1%

Em tempo:
  30 dias × 24h × 60min = 43.200 minutos
  Error budget = 43.200 × 0.001 = 43.2 minutos de downtime permitido

Em requisições (se 10M req/mês):
  Error budget = 10.000.000 × 0.001 = 10.000 erros permitidos
```

---

## Exemplo prático — o poder do error budget

**Cenário:** Time de produto quer lançar feature arriscada vs SRE quer estabilidade.

```
Mês de Março - Error Budget: 43 min de downtime

Semana 1: Deploy quebrou por 10min      → Restante: 33min
Semana 2: Sem incidentes                → Restante: 33min ✅
Semana 3: Lentidão por 15min            → Restante: 18min ⚠️
Semana 4: Produto quer lançar feature X

Pergunta: Temos budget para arriscar?
  → 18min restantes → budget apertado
  → Decisão: Feature X vai para staging com feature flag,
    deploy gradual (canary) para minimizar risco
```

> O error budget transforma "devemos lançar?" de **opinião** em **decisão baseada em dados**.

---

## Políticas de error budget

| Budget | Status | Ação |
|--------|--------|------|
| > 50% restante | 🟢 Saudável | Priorize velocidade de features |
| 20-50% restante | 🟡 Atenção | Reduza risco dos deploys (canary, feature flags) |
| < 20% restante | 🟠 Crítico | Só mudanças de baixo risco |
| 0% (esgotado) | 🔴 Freeze | Pare tudo e foque em confiabilidade |

---

## Error budget + cultura

O error budget cria um **equilíbrio natural**:

```
                    Error Budget
                         │
          ┌──────────────┼──────────────┐
          │              │              │
     Tem budget?    Budget acabou?   Muito budget?
          │              │              │
    Inove, lance    Pare e corrija   Está investindo
    features!       a confiabilidade demais em
                                     estabilidade
```

---

## Boas práticas

- ✅ Defina **políticas claras** para cada nível de budget
- ✅ Torne o error budget **visível** para todos (dashboard público)
- ✅ Use error budget para **negociar** com stakeholders
- ✅ Inclua todos os tipos de impacto (downtime, latência, erros)
- ❌ Não "guarde" budget — ele reseta todo mês
- ❌ Não use error budget para **punir** times

---

## 🤔 Perguntas para reflexão

1. Se no final do mês sobrou 90% do error budget, isso é bom? Ou significa que o time poderia ter sido **mais ousado** com features?
2. O error budget esgotou mas o CEO quer lançar uma feature para um evento amanhã. O que você faz?
3. Como o error budget muda a dinâmica entre times de **produto** e **engenharia**?
