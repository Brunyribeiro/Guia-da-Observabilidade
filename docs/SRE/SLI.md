# 📏 SLI — Service Level Indicator

## O que é?

Uma **métrica quantitativa** que mede um aspecto específico do nível de serviço. É o **número real** que você observa. SLI é o "termômetro" — ele mede, não promete.

> Fórmula geral: **SLI = (eventos bons / eventos totais) × 100%**

---

## Exemplos de SLIs

| Serviço | SLI | Como medir |
|---------|-----|-----------|
| API REST | % de requisições com status < 500 | `requests_success / requests_total` |
| API REST | % de requisições abaixo de 300ms | `requests_under_300ms / requests_total` |
| Fila de mensagens | % de mensagens processadas em < 5s | `messages_fast / messages_total` |
| Página web | % de carregamentos em < 2s | `page_loads_fast / page_loads_total` |
| Batch job | % de execuções concluídas com sucesso | `runs_success / runs_total` |

---

## Exemplo prático

```
# Nas últimas 24h:
# - 1.000.000 requisições totais
# - 995.000 retornaram status 2xx ou 3xx
# - 5.000 retornaram status 5xx

SLI de disponibilidade = 995.000 / 1.000.000 = 99.5%

# - 970.000 responderam em menos de 200ms

SLI de latência = 970.000 / 1.000.000 = 97.0%
```

> O SLI é um **fato observado**, não uma meta. A meta é o SLO.

---

## Na prática — medindo SLIs com PromQL

Se você usa Prometheus, os SLIs são calculados com queries:

```promql
# SLI de disponibilidade (% de requests sem erro 5xx nos últimos 30 dias)
sum(rate(http_requests_total{status!~"5.."}[30d]))
/
sum(rate(http_requests_total[30d]))

# SLI de latência (% de requests abaixo de 300ms nos últimos 30 dias)
sum(rate(http_request_duration_seconds_bucket{le="0.3"}[30d]))
/
sum(rate(http_request_duration_seconds_count[30d]))

# SLI de disponibilidade nas últimas 5 min (para alertas)
1 - (
  sum(rate(http_requests_total{status=~"5.."}[5m]))
  /
  sum(rate(http_requests_total[5m]))
)
```

> 💡 A query de 5 minutos é usada para **alertas em tempo real**. A de 30 dias é para **verificar o SLO**.

---

## Tipos comuns de SLI

| Tipo | O que mede | Para quem importa |
|------|-----------|-------------------|
| **Disponibilidade** | O serviço respondeu? | Todos |
| **Latência** | Quão rápido respondeu? | Usuário final |
| **Throughput** | Quantas requisições suporta? | Engenharia |
| **Correção** | A resposta estava correta? | Negócio |
| **Freshness** | Os dados estão atualizados? | Dados/Analytics |

---

## Boas práticas

- ✅ Meça SLIs do **ponto de vista do usuário** (não do servidor)
- ✅ Use **proporção** (eventos bons / total), não valores absolutos
- ✅ Escolha poucos SLIs (2-4 por serviço) — os que **realmente importam**
- ❌ Não use métricas internas como SLI (ex: CPU do servidor)
- ❌ Não confunda SLI com SLO — SLI é o valor medido, SLO é a meta

---

## 🤔 Perguntas para reflexão

1. CPU a 90% é um bom SLI? Por quê ou por que não?
2. Se você mede latência no **servidor**, mas o usuário está em outra cidade com rede lenta, seu SLI reflete a experiência real?
3. Qual a diferença entre medir "o servidor está online" vs "o usuário consegue completar uma compra"?