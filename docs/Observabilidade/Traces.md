# 🔗 Traces (Rastreamento Distribuído)

## O que são?

Um trace é o **caminho completo** de uma requisição através de múltiplos serviços. Cada "pedaço" do caminho é um **span**. Juntos, eles mostram exatamente onde o tempo foi gasto.

---

## Anatomia de um Trace

```
Trace ID: abc-123
│
├── Span 1: API Gateway (2ms)
│   ├── Span 2: Auth Service (15ms)
│   └── Span 3: Order Service (150ms)
│       ├── Span 4: Database Query (80ms)  ← gargalo?
│       └── Span 5: Payment Service (45ms)
│           └── Span 6: External API (30ms)
```

> Todos os spans compartilham o mesmo `Trace ID`. Cada span tem um `Span ID` e referencia o `Parent Span ID`.

---

## Conceitos-chave

| Conceito | Descrição |
|----------|-----------|
| **Trace** | A jornada completa da requisição |
| **Span** | Uma operação individual dentro do trace |
| **Trace ID** | Identificador único do trace inteiro |
| **Span ID** | Identificador único de cada span |
| **Parent Span** | O span que originou o span atual |
| **Baggage** | Dados propagados entre serviços no trace |

---

## Context Propagation

Para que o trace funcione entre serviços, o **contexto precisa ser propagado**. Isso geralmente acontece via headers HTTP:

```
# Headers enviados entre serviços
traceparent: 00-abc123-def456-01
tracestate: vendorname=opaqueValue

# Formato W3C Trace Context
# versão-traceId-parentSpanId-flags
```

> Se um serviço **não propaga** o contexto, o trace "quebra" e você perde visibilidade dali em diante.

---

## Exemplo prático

Um usuário reclama: *"O checkout está lento"*

**Sem traces:** Você olha logs de 5 serviços diferentes tentando correlacionar timestamps. Demora horas.

**Com traces:** Você busca pelo trace ID e vê:

```
checkout-api     ████                          (50ms)
inventory-svc       ██                         (20ms)
payment-svc            ████████████████████     (800ms) ← AQUI!
  └─ banco-externo        ██████████████████   (750ms) ← causa raiz
notification-svc                            ██ (10ms)
```

> Em 30 segundos você sabe: o problema é a API do banco externo.

---

## Sampling (Amostragem)

Coletar 100% dos traces é caro. Estratégias de sampling:

| Estratégia | Como funciona | Quando usar |
|-----------|---------------|-------------|
| **Head-based** | Decide no início se coleta | Simples, mas pode perder erros |
| **Tail-based** | Decide no final (vê o resultado) | Captura erros, mas usa mais recursos |
| **Rate-based** | Coleta X% das requisições | Bom para alto volume |

---

## Ferramentas populares

| Ferramenta | Tipo | Destaque |
|------------|------|----------|
| **Jaeger** | Open source | CNCF, bom para Kubernetes |
| **Zipkin** | Open source | Simples e maduro |
| **Tempo (Grafana)** | Open source | Integra com Loki e Prometheus |
| **Datadog APM** | SaaS | Traces + métricas + logs |
| **AWS X-Ray** | SaaS (AWS) | Nativo na AWS |

---

## Boas práticas

- ✅ Use **OpenTelemetry** para instrumentação — padrão do mercado
- ✅ Conecte traces com logs via `trace_id`
- ✅ Configure **sampling** adequado para não gastar demais
- ✅ Instrumente os **pontos de entrada** e **chamadas externas**
- ❌ Não ignore a propagação de contexto entre serviços
- ❌ Não crie spans para operações triviais (ex: cada `if` no código)

---

## 🤔 Perguntas para reflexão

1. Se você usa **head-based sampling** a 10%, e um erro acontece em 0.1% das requisições, qual a chance de você capturar o trace do erro?
2. Em um sistema com 20 microsserviços, se **um deles** não propaga o contexto de trace, o que acontece com a visibilidade?
3. Qual a relação entre o `trace_id` no trace e o `Correlation ID` nos logs? São a mesma coisa?