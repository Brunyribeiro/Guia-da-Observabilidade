# 📊 Dashboards — Design e Boas Práticas

## O que são?

Painéis visuais que mostram o **estado do sistema em tempo real**. Um bom dashboard conta uma história — em 10 segundos você sabe se algo está errado.

> Dashboard bom: você olha e sabe se precisa agir. Dashboard ruim: 40 gráficos e nenhuma resposta.

---

## Tipos de dashboard

| Tipo | Para quem | O que mostra | Quando usar |
|------|----------|-------------|-------------|
| **Estratégico** | Liderança, negócio | SLOs, disponibilidade, impacto ao usuário | Reuniões, status page |
| **Tático** | Time de engenharia | Golden Signals por serviço | Monitoramento diário |
| **Operacional** | On-call | Métricas detalhadas, logs recentes | Durante incidentes |
| **Debug** | Desenvolvedores | Traces, queries, cache hits | Investigação profunda |

---

## Exemplo prático — estrutura de um dashboard tático

```
┌─────────────────────────────────────────────────┐
│  🟢 checkout-api          Últimas 6 horas       │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ SLO      │  │ Error    │  │ Req/s    │      │
│  │ 99.92%   │  │ Rate     │  │ 2.5k     │      │
│  │ 🟢 OK    │  │ 0.08%   │  │ ───────  │      │
│  └──────────┘  └──────────┘  └──────────┘      │
│                                                  │
│  ┌─────────────────────────────────────────┐    │
│  │ Latência (p50 / p95 / p99)              │    │
│  │ ▁▁▂▂▁▁▁▁▁▁▃▃▂▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁    │    │
│  │ p50: 45ms  p95: 180ms  p99: 450ms      │    │
│  └─────────────────────────────────────────┘    │
│                                                  │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │ Saturação         │  │ Dependências     │    │
│  │ CPU: 35%  ▓░░░░  │  │ DB: 12ms  🟢     │    │
│  │ Mem: 60%  ▓▓▓░░  │  │ Redis: 2ms 🟢    │    │
│  │ DB:  80%  ▓▓▓▓░  │  │ PIX API: 🔴 3s   │    │
│  └──────────────────┘  └──────────────────┘    │
└─────────────────────────────────────────────────┘
```

> Neste dashboard, em 5 segundos você vê: serviço saudável, mas a **PIX API** está com latência alta e as **conexões de DB estão em 80%**.

---

## Hierarquia de dashboards (drill-down)

```
Nível 1: Visão Geral (todos os serviços)
  "Algum serviço com problema?"
    │
    ↓ clica no serviço com problema
    │
Nível 2: Golden Signals do serviço
  "Qual signal está fora? Latência? Erros?"
    │
    ↓ clica na métrica com problema
    │
Nível 3: Detalhes do componente
  "É o banco? A API externa? O cache?"
    │
    ↓ clica para ver logs/traces
    │
Nível 4: Investigação (logs + traces)
  "Qual o trace_id? O que diz o log?"
```

> Cada dashboard deve ter **links** para o próximo nível. O on-call não deveria precisar digitar queries.

---

## Anti-patterns — dashboards que atrapalham

| Anti-pattern | Problema | Solução |
|-------------|----------|---------|
| **Dashboard frankestein** | 40 gráficos misturando métricas de 10 serviços | Um dashboard por serviço, siga Golden Signals |
| **Só métricas de infra** | CPU, memória, disco — sem contexto de negócio | Adicione métricas de **usuário** (latência, erros, throughput) |
| **Gráficos sem contexto** | "O que é esse gráfico?" | Título claro, descrição, thresholds visuais |
| **Sem thresholds visuais** | Não dá para saber se 80% é bom ou ruim | Adicione linhas de referência (SLO, limites) |
| **Métricas instantâneas** | Mostra só "agora" sem histórico | Use janelas de tempo (últimas 6h, 24h, 7d) |
| **Dashboard que ninguém olha** | Criou e esqueceu | Se ninguém usa, delete. Mantenha poucos e úteis |

---

## Regras de ouro para design

### 1. A regra dos 10 segundos
> Se em 10 segundos olhando o dashboard você **não sabe** se algo está errado, ele precisa ser redesenhado.

### 2. A regra do semáforo
> Use cores com significado: 🟢 saudável, 🟡 atenção, 🔴 problema. Evite gráficos coloridos sem propósito.

### 3. A regra do "e daí?"
> Para cada gráfico, pergunte: "Se esse número mudar, **o que eu faço?**". Se a resposta for "nada", remova o gráfico.

---

## Ferramentas populares

| Ferramenta | Tipo | Destaque |
|------------|------|----------|
| **Grafana** | Open source | Padrão do mercado, data sources múltiplos |
| **Datadog Dashboards** | SaaS | Integração nativa com APM e logs |
| **Kibana** | Open source | Focado em dados do Elasticsearch |
| **CloudWatch Dashboards** | SaaS (AWS) | Nativo AWS |
| **New Relic** | SaaS | Dashboards + observabilidade integrada |

---

## Boas práticas

- ✅ Um dashboard = um **propósito** (não misture serviços)
- ✅ Organize os gráficos em ordem de **prioridade de diagnóstico** (de cima para baixo)
- ✅ Adicione **SLO lines** nos gráficos de latência e erro
- ✅ Use **variáveis** (filtros por ambiente, região, serviço)
- ✅ Inclua **links** para logs, traces e runbooks
- ✅ Revise dashboards **trimestralmente** — delete os obsoletos
- ❌ Não coloque mais de 8-10 painéis por dashboard
- ❌ Não use gráficos de pizza para métricas de série temporal
- ❌ Não crie dashboards "só por criar" — cada um deve responder perguntas específicas

---

## 🤔 Perguntas para reflexão

1. Você tem um dashboard com 30 gráficos. Quantos deles você **realmente olhou** nos últimos 30 dias?
2. Se o on-call precisa abrir **3 dashboards e rodar 2 queries** para entender um alerta, o que está errado?
3. Faz sentido mostrar **CPU do servidor** em um dashboard tático, ou isso deveria ficar só no operacional?
