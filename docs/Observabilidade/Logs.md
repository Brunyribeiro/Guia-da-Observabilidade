# 📄 Logs

## O que são?

Registros de eventos que aconteceram dentro de um sistema. Cada log é uma "foto" de algo que ocorreu — um erro, uma requisição, uma ação do usuário. São o pilar mais antigo da observabilidade.

---

## Para que servem?

| Uso | Quando |
|-----|--------|
| **Debug** | Encontrar a causa raiz de um bug |
| **Auditoria** | Saber quem fez o quê e quando |
| **Troubleshooting** | Investigar incidentes em produção |
| **Compliance** | Atender requisitos regulatórios |

---

## Níveis de log

| Nível | Quando usar |
|-------|-------------|
| `DEBUG` | Informação detalhada para desenvolvimento |
| `INFO` | Eventos normais do sistema |
| `WARN` | Algo inesperado, mas o sistema continua |
| `ERROR` | Falha que impede uma operação |
| `FATAL` | Sistema precisa ser encerrado |

> **Exemplo:** Se você loga tudo como `INFO`, como vai diferenciar um evento normal de um problema real às 3h da manhã?

---

## Log estruturado vs não estruturado

**❌ Não estruturado (difícil de filtrar):**
```
2026-03-04 10:00:00 ERROR payment failed for user 123
```

**✅ Estruturado (fácil de consultar e filtrar):**
```json
{
  "timestamp": "2026-03-04T10:00:00Z",
  "service": "payments",
  "level": "ERROR",
  "message": "payment failed",
  "user_id": "123",
  "trace_id": "abc-456",
  "amount": 99.90
}
```

> Note o `trace_id` — ele conecta este log a um trace distribuído. Isso é o **Correlation ID**.

---

## Boas práticas

- ✅ Use **log estruturado** (JSON) — facilita buscas e dashboards
- ✅ Adicione **Correlation ID** — conecta logs entre microsserviços
- ✅ Defina **retenção** — logs custam armazenamento
- ❌ **Nunca** logue secrets, senhas, tokens ou dados sensíveis (PII)
- ❌ Evite logar dentro de loops — volume explode

---

## Ferramentas populares

| Ferramenta | Tipo | Destaque |
|------------|------|----------|
| **Grafana Loki** | Open source | Leve, indexa só labels |
| **Elasticsearch (ELK)** | Open source | Full-text search poderoso |
| **Datadog** | SaaS | Integração completa com APM |
| **CloudWatch** | SaaS (AWS) | Nativo na AWS |

---

## Problemas comuns

| Problema | Consequência |
|----------|-------------|
| Log sem contexto | Você sabe que deu erro, mas não sabe **onde** nem **por quê** |
| Volume excessivo | Custo alto e difícil encontrar o que importa |
| Logs duplicados | Alertas falsos e confusão na investigação |
| Sem padronização | Cada serviço loga de um jeito diferente |

---

## 🤔 Perguntas para reflexão

1. Se um serviço gera 1 milhão de logs por hora, como você decide o que **realmente** precisa ser logado?
2. Um log de `ERROR` sem `trace_id` em um sistema com 50 microsserviços — como você descobre qual foi o serviço de origem?
3. Qual a diferença entre um log ser **útil para debug** e ser **útil para auditoria**?
