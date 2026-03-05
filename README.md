# 📚 Guia da Observabilidade

[![MkDocs](https://img.shields.io/badge/docs-MkDocs%20Material-blue?logo=materialformkdocs)](https://brunyribeiro.github.io/Guia-da-Observabilidade/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> **Roteiro de estudos completo sobre Observabilidade e SRE.**  
> Cada tópico segue a estrutura: **Resumo → Exemplo → Pergunta para reflexão**, combinando técnicas de aprendizagem ativa (*Active Recall* + *Elaborative Interrogation*).

🔗 **Acesse o site:** [brunyribeiro.github.io/Guia-da-Observabilidade](https://brunyribeiro.github.io/Guia-da-Observabilidade/)

---

## 🗺️ Visão Geral

O guia está organizado em **5 partes progressivas**, indo dos fundamentos teóricos até a prática com labs e preparação para certificações:

```
Fundamentos ➜ Pilares ➜ Práticas SRE ➜ Labs Hands-on ➜ Certificações
```

---

## 📖 Conteúdo

### Parte 1 — Observabilidade (Fundamentos e Pilares)

| # | Tópico | Descrição |
|---|--------|-----------|
| 1 | Observabilidade vs Monitoramento | A diferença fundamental — por onde tudo começa |
| 2 | Logs | Registros de eventos — o pilar mais fundamental |
| 3 | Métricas | Valores numéricos ao longo do tempo — tendências e alertas |
| 4 | Traces | Rastreamento distribuído — o caminho da requisição |
| 5 | OpenTelemetry | O padrão aberto para instrumentação |
| 6 | Alertas | Quando e como notificar que algo precisa de ação |
| 7 | Dashboards | Design de painéis — como visualizar o que importa |
| 8 | Maturidade (OMM) | Avaliando onde você está na jornada |

### Parte 2 — SRE (Site Reliability Engineering)

| # | Tópico | Descrição |
|---|--------|-----------|
| 9 | Golden Signals | As 4 métricas fundamentais do Google |
| 10 | SLI | Service Level Indicator — o que você mede |
| 11 | SLO | Service Level Objective — a meta que você define |
| 12 | SLA | Service Level Agreement — o contrato com o cliente |
| 13 | Error Budget | O orçamento de falhas que equilibra velocidade e estabilidade |
| 14 | MTTR | Mean Time to Recovery — velocidade de recuperação |
| 15 | Post-Mortem | Análise blameless de incidentes — aprender sem culpar |
| 16 | Release & Change | Deploys seguros — canary, blue/green, feature flags, DORA |
| 17 | TOI | Transfer of Information — transferência de conhecimento operacional |

### Parte 3 — Na Prática

| # | Tópico | Descrição |
|---|--------|-----------|
| 18 | Incident Management | Coordenação de incidentes — papéis, comunicação, processo |
| 19 | On-Call | Plantão — escalas, expectativas e saúde do time |
| 20 | Runbooks | Manuais de emergência — como escrever e manter |
| 21 | Troubleshooting | Guia prático de investigação de incidentes |

### Parte 4 — Labs Práticos 🐳

Todos os labs rodam com **Docker Compose** e seguem uma progressão incremental:

| Lab | Stack | O que você pratica |
|-----|-------|--------------------|
| Lab 01 | Prometheus + Grafana | Instrumentação de métricas e PromQL |
| Lab 02 | Loki + Promtail | Logs estruturados e LogQL |
| Lab 03 | Tempo + OTel Collector | Distributed tracing em microserviços |
| Lab 04 | OTel Collector + Prometheus + Loki + Tempo + Grafana | Stack observabilidade completa |
| Lab 05 | grafana/otel-lgtm | Stack completa em 1 container (~5 min) |

### Parte 5 — Certificações

Blueprints de estudo para certificações reconhecidas pelo mercado:

| Certificação | Organização | Custo aprox. |
|-------------|-------------|--------------|
| Observability Foundation | DevOps Institute | ~$350 |
| SRE Foundation | DevOps Institute | ~$350 |
| SRE Practitioner | DevOps Institute | ~$350 |
| PCA (Prometheus Certified Associate) | CNCF | $250 |
| OTCA (OpenTelemetry Certified Associate) | CNCF | $250 |

---

## 🚀 Como usar

### 📘 Leitura online (recomendado)

Acesse o site gerado com MkDocs Material:  
👉 [brunyribeiro.github.io/Guia-da-Observabilidade](https://brunyribeiro.github.io/Guia-da-Observabilidade/)

### 💻 Rodar localmente

```bash
# Clone o repositório
git clone https://github.com/brunyribeiro/Guia-da-Observabilidade.git
cd Guia-da-Observabilidade

# Instale as dependências
pip install mkdocs-material

# Inicie o servidor local
mkdocs serve
```

Acesse em: `http://localhost:8000`

### 🧪 Rodar os Labs

Cada lab está na pasta `labs/` com seu próprio `docker-compose.yml`:

```bash
# Exemplo: rodar o Lab 01 (Métricas com Prometheus + Grafana)
cd labs/lab01
docker compose up -d

# Acompanhe a documentação do lab para os endpoints e exercícios
# Para encerrar:
docker compose down
```

> **Pré-requisitos dos labs:** Docker e Docker Compose instalados.

---

## 📁 Estrutura do Projeto

```
.
├── mkdocs.yml              # Configuração do site MkDocs Material
├── docs/                   # Conteúdo do guia (Markdown)
│   ├── index.md            # Página inicial e roteiro de estudos
│   ├── troubleshooting.md  # Guia de troubleshooting
│   ├── Observabilidade/    # Fundamentos e pilares
│   ├── SRE/                # Práticas de SRE
│   ├── Labs/               # Documentação dos labs
│   └── Certificacoes/      # Blueprints de certificações
└── labs/                   # Arquivos dos labs (Docker Compose + apps)
    ├── lab01/              # Métricas — Prometheus + Grafana
    ├── lab02/              # Logs — Loki + Promtail
    ├── lab03/              # Traces — Tempo + OTel
    ├── lab04/              # Stack Completa
    └── lab05/              # LGTM All-in-One
```

---

## 🎓 Metodologia de Estudo

Cada página segue um padrão comprovado:

1. **📖 Leia o resumo** — entenda o conceito em poucas linhas
2. **💻 Analise o exemplo** — veja como funciona na prática
3. **🤔 Responda a pergunta** — tente responder antes de seguir em frente
4. **🔄 Revise** — volte após alguns dias e veja se ainda lembra

---

## 📚 Referências

| Recurso | Tipo |
|---------|------|
| [Google SRE Book](https://sre.google/sre-book/table-of-contents/) | Livro (gratuito) |
| [Google SRE Workbook](https://sre.google/workbook/table-of-contents/) | Livro (gratuito) |
| [OpenTelemetry Docs](https://opentelemetry.io/docs/) | Documentação |
| [Prometheus Docs](https://prometheus.io/docs/) | Documentação |
| [Grafana Learning](https://grafana.com/tutorials/) | Tutoriais |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

---

<p align="center">
  Feito com 💜 para a comunidade de Observabilidade e SRE
</p>
