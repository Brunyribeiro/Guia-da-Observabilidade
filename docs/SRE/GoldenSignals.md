# 🌟 Golden Signals

## O que são?

Quatro métricas fundamentais que o Google definiu no livro SRE para monitorar qualquer sistema. Se você só pudesse olhar **4 coisas**, seriam essas.

---

## Os 4 Golden Signals

| Signal | Mede | Pergunta que responde |
|--------|------|----------------------|
| **Latência** | Tempo de resposta | Quão rápido estou respondendo? |
| **Tráfego** | Volume de requisições | Quanta demanda estou recebendo? |
| **Erros** | Taxa de falhas | Quantas requisições estão falhando? |
| **Saturação** | Quão "cheio" o sistema está | Quão perto estou do limite? |

---

## Exemplo prático — API de e-commerce

```
📊 Dashboard dos Golden Signals (últimos 5 min):

Latência:
  p50: 120ms ✅
  p99: 890ms ✅ (SLO: < 1s)

Tráfego:
  Requisições/s: 2.500 ✅ (normal para este horário)

Erros:
  Error rate: 0.3% ✅ (SLO: < 1%)
  5xx/min: 7

Saturação:
  CPU: 45% ✅
  Conexões DB: 80/100 ⚠️ (quase no limite!)
  Fila de mensagens: 15.000 pendentes ⚠️
```

> A saturação do banco de dados (80/100 conexões) é um sinal de que, se o tráfego subir mais 25%, o sistema vai degradar.

---

## Golden Signals vs RED vs USE

| Framework | Para quê | Métricas |
|-----------|---------|----------|
| **Golden Signals** | Qualquer sistema | Latência, Tráfego, Erros, Saturação |
| **RED** | Serviços/APIs | Rate, Errors, Duration |
| **USE** | Infraestrutura/Recursos | Utilization, Saturation, Errors |

> Na prática: use **RED** para seus serviços + **USE** para a infra que os sustenta. Os Golden Signals são o "guarda-chuva".

---

## Aplicando por tipo de sistema

| Sistema | Latência | Tráfego | Erros | Saturação |
|---------|----------|---------|-------|-----------|
| **API REST** | Tempo de resposta | Req/s | 5xx rate | Threads, conexões |
| **Fila** | Tempo na fila | Msgs/s | Msgs com falha | Tamanho da fila |
| **Banco de dados** | Tempo da query | Queries/s | Queries com erro | Conexões, disco |
| **Batch job** | Tempo de execução | Jobs/hora | Jobs falhando | Jobs pendentes |

---

## Boas práticas

- ✅ Monte um **dashboard** com os 4 signals para cada serviço crítico
- ✅ Meça latência em **percentis** (p50, p95, p99), não média
- ✅ Diferencie erros do **cliente** (4xx) de erros do **servidor** (5xx)
- ✅ Defina **limites de saturação** antes de atingi-los
- ❌ Não ignore saturação — é o sinal que **previne** incidentes
- ❌ Não trate todos os erros igual — 404 não é o mesmo que 500

---

## 🤔 Perguntas para reflexão

1. Se a latência está normal, os erros estão zero, mas a saturação está em 95% — você deveria se preocupar? Por quê?
2. Qual a diferença entre uma taxa de erro de 0.1% com 100 req/s vs 0.1% com 100.000 req/s?
3. Em um sistema de filas, o que seria equivalente a "latência"? E "tráfego"?
