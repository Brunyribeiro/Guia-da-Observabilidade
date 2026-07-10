# 🔭 Observabilidade (troubleshooting-app)

Plugin Grafana **Observabilidade** (`troubleshooting-app`) — catálogo de serviços com correlação de métricas, logs, traces, runtime e infraestrutura em um único fluxo APM.

**Versão:** 1.0.0 · **Grafana:** >= 12.3

Código-fonte: [github.com/Brunyribeiro/grafana-apm](https://github.com/Brunyribeiro/grafana-apm)

---

## Pré-requisitos

| Item | Descrição |
|------|-----------|
| Grafana | >= 12.3 |
| Métricas | Prometheus ou Mimir (span metrics, HTTP metrics, etc.) |
| Logs | Loki |
| Traces | Tempo ou compatível |
| Traces Drilldown | `grafana-exploretraces-app` (recomendado para traces embutidos) |

---

## Instalar no Grafana

O build pronto está na pasta `grafana-apm/troubleshooting-app/` do repositório.

### Opção A — cópia manual (Linux)

```bash
sudo cp -r grafana-apm/troubleshooting-app /var/lib/grafana/plugins/troubleshooting-app
sudo chown -R grafana:grafana /var/lib/grafana/plugins/troubleshooting-app
```

### Opção B — Docker

```yaml
volumes:
  - ./grafana-apm/troubleshooting-app:/var/lib/grafana/plugins/troubleshooting-app
```

### Plugins não assinados

=== "grafana.ini"

    ```ini
    [plugins]
    allow_loading_unsigned_plugins = kubernetes-health-app,troubleshooting-app
    ```

=== "Variável de ambiente"

    ```bash
    GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=kubernetes-health-app,troubleshooting-app
    ```

Reinicie o Grafana após a cópia.

---

## Habilitar e configurar

1. **Administration → Plugins** → busque **Observabilidade** → **Enable**
2. Instale e habilite **Traces Drilldown** (`grafana-exploretraces-app`) se usar traces embutidos
3. Abra **Configuração** (ícone de engrenagem):

| Campo | Descrição |
|-------|-----------|
| Metrics datasource | Mimir/Prometheus |
| Logs datasource | Loki |
| Traces datasource | Tempo ou compatível |
| Cluster label | Mesmo padrão do ambiente (`k8s_cluster_name` ou `cluster`) |

---

## Atualizar

Substitua os arquivos da pasta pelos de uma versão mais recente do repositório e reinicie o Grafana.

---

## Problemas comuns

!!! warning "Plugin não aparece"
    Verifique permissões da pasta e `allow_loading_unsigned_plugins`.

!!! warning "Traces embutidos vazios"
    Instale e habilite `grafana-exploretraces-app`.

!!! warning "Sem dados"
    Confirme os UIDs dos datasources na página de Configuration do plugin.
