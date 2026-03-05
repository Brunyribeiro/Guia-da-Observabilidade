
# Logs

## O que são
Registros de eventos que ocorreram dentro de um sistema.

## Para que servem
- Debug
- Auditoria
- Troubleshooting

## Boas práticas
- Log estruturado (JSON)
- Não logar secrets
- Correlation ID

## Ferramentas
- Loki
- Elasticsearch
- Datadog

## Exemplo prático
Exemplo de log JSON:

{
  "timestamp": "2026-03-04T10:00:00",
  "service": "payments",
  "level": "ERROR",
  "message": "payment failed"
}

## Problemas comuns
- Log sem contexto
- Muito volume
- Logs duplicados
