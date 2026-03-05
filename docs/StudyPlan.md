# Roteiro de Estudos - Observabilidade

Este documento serve como um roteiro de estudo em formato de livro/guia. Cada tópico tem um breve resumo, um exemplo e uma pergunta para reflexão.

---

## 1. Introdução à Observabilidade
- **Resumo:** Objetivo de entender sistemas a partir de sinais que eles emitem (logs, métricas, traces).
- **Exemplo:** Em um microsserviço, registrar um evento de erro com contexto de usuário.
- **Pergunta:** Por que "observabilidade" é mais do que apenas monitoração?

## 2. Logs
- **Resumo:** Registros textuais de eventos no sistema; importantes para investigação de falhas.
- **Exemplo:** Um log estruturado em JSON com nível "error" e campos de request.
- **Pergunta:** Quais informações devem sempre estar presentes em um log de erro?

## 3. Métricas
- **Resumo:** Dados numéricos agregados que descrevem comportamentos (latência, taxa de erro).
- **Exemplo:** Uma métrica Prometheus `http_request_duration_seconds`.
- **Pergunta:** Quando usar métricas de contagem vs. histograma?

## 4. Traces distribuídos
- **Resumo:** Rastreamento de requisições por vários serviços para entender fluxo e latência.
- **Exemplo:** Um trace que mostra chamadas entre front-end, auth e banco.
- **Pergunta:** Como os spans ajudam a encontrar gargalos?

## 5. Correlação entre sinais
- **Resumo:** Vincular logs, métricas e traces usando um identificador comum.
- **Exemplo:** Incluir um `trace_id` em todos os logs durante a execução de uma requisição.
- **Pergunta:** Qual é o desafio principal ao correlacionar dados em sistemas distribuídos?

## 6. Ferramentas e tecnologias
- **Resumo:** Principais ferramentas: ELK/EFK, Prometheus, Jaeger, Grafana, etc.
- **Exemplo:** Dashboard simples em Grafana mostrando latência e erros.
- **Pergunta:** Quais critérios você usaria para escolher uma ferramenta de observabilidade?

## 7. Boas práticas
- **Resumo:** Padronizar formatos, coletar apenas o necessário, cuidado com performance e custo.
- **Exemplo:** Usar índices em Elasticsearch apenas para campos pesquisados.
- **Pergunta:** Como evitar que a observabilidade impacte negativamente o desempenho do sistema?

## 8. SRE e observabilidade
- **Resumo:** Uso da observabilidade para definir SLIs/SLOs/SLA e otimizar confiabilidade.
- **Exemplo:** Calcular tempo de resposta 95º percentil para SLO.
- **Pergunta:** Por que SLOs são melhores do que simples alertas de CPU?

---

> Este roteiro é flexível: adicione mais tópicos e aprofunde conforme necessário. A ideia é manter resumos curtos, exemplos práticos e uma pergunta para revisar o aprendizado.