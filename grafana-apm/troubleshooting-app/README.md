# Observabilidade — Instalação

Plugin Grafana **Observabilidade** (`troubleshooting-app`) — catálogo de serviços e correlação de métricas, logs, traces, runtime e infraestrutura em um único fluxo.

**Versão:** 1.0.0 · **Grafana:** >= 12.3

Código-fonte e build: [github.com/Brunyribeiro/grafana-apm](https://github.com/Brunyribeiro/grafana-apm)

## Pré-requisitos

| Item | Descrição |
|------|-----------|
| Grafana | >= 12.3 |
| Métricas | Prometheus ou Mimir (span metrics, HTTP metrics, etc.) |
| Logs | Loki |
| Traces | Tempo ou compatible |
| Traces Drilldown | `grafana-exploretraces-app` (recomendado para traces embutidos) |

## Instalar no Grafana

Esta pasta já contém o build pronto (`plugin.json`, `module.js`, etc.). Copie **todo o conteúdo** desta pasta para o diretório de plugins do Grafana.

### Opção A — cópia manual (Linux)

```bash
sudo cp -r . /var/lib/grafana/plugins/troubleshooting-app
sudo chown -R grafana:grafana /var/lib/grafana/plugins/troubleshooting-app
```

### Opção B — Docker

Monte esta pasta no container:

```yaml
volumes:
  - ./grafana-apm/troubleshooting-app:/var/lib/grafana/plugins/troubleshooting-app
```

### Plugins não assinados

Em `grafana.ini`:

```ini
[plugins]
allow_loading_unsigned_plugins = kubernetes-health-app,troubleshooting-app
```

Ou via variável de ambiente:

```bash
GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=kubernetes-health-app,troubleshooting-app
```

Reinicie o Grafana após a cópia.

## Habilitar e configurar

1. **Administration → Plugins** → busque **Observabilidade** → **Enable**
2. Instale e habilite **Traces Drilldown** (`grafana-exploretraces-app`) se usar traces embutidos
3. Abra **Configuração** (ícone de engrenagem)

| Campo | Descrição |
|-------|-----------|
| Metrics datasource | Mimir/Prometheus |
| Logs datasource | Loki |
| Traces datasource | Tempo ou compatible |
| Cluster label | Mesmo padrão do ambiente (`k8s_cluster_name` ou `cluster`) |

## Atualizar

Substitua os arquivos desta pasta pelos de uma versão mais recente do repositório [grafana-apm](https://github.com/Brunyribeiro/grafana-apm) e reinicie o Grafana.

## Problemas comuns

- **Plugin não aparece:** verifique permissões da pasta e `allow_loading_unsigned_plugins`
- **Traces embutidos vazios:** instale e habilite `grafana-exploretraces-app`
- **Sem dados:** confirme os UIDs dos datasources na Configuration
