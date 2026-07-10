# Kubernetes Health — Instalação

Plugin Grafana **Kubernetes Health** (`kubernetes-health-app`) — visão APM do cluster: overview, namespaces, workloads, nodes, capacidade, storage, custo e alertas.

**Versão:** 1.0.0 · **Grafana:** >= 12.3

Código-fonte e build: [github.com/Brunyribeiro/grafana-apm](https://github.com/Brunyribeiro/grafana-apm)

## Pré-requisitos

| Item | Descrição |
|------|-----------|
| Grafana | >= 12.3 |
| Métricas | Prometheus ou Mimir com métricas `k8s_*` (OTel) ou `kube_*` (kube-state-metrics) |
| Logs | Loki (opcional, para eventos K8s) |

## Instalar no Grafana

Esta pasta já contém o build pronto (`plugin.json`, `module.js`, etc.). Copie **todo o conteúdo** desta pasta para o diretório de plugins do Grafana.

### Opção A — cópia manual (Linux)

```bash
sudo cp -r . /var/lib/grafana/plugins/kubernetes-health-app
sudo chown -R grafana:grafana /var/lib/grafana/plugins/kubernetes-health-app
```

### Opção B — Docker

Monte esta pasta no container:

```yaml
volumes:
  - ./grafana-apm/kubernetes-health-app:/var/lib/grafana/plugins/kubernetes-health-app
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

1. **Administration → Plugins** → busque **Kubernetes Health** → **Enable**
2. Abra **Configuration** (ícone de engrenagem)

| Campo | Descrição |
|-------|-----------|
| Metrics datasource | Mimir/Prometheus com métricas do cluster |
| Logs datasource | Loki (opcional) |
| Cluster label | Padrão `k8s_cluster_name`; use `cluster` se kube-state clássico |
| Runbook URL | Link do runbook de incidentes (opcional) |

## Atualizar

Substitua os arquivos desta pasta pelos de uma versão mais recente do repositório [grafana-apm](https://github.com/Brunyribeiro/grafana-apm) e reinicie o Grafana.

## Problemas comuns

- **Plugin não aparece:** verifique permissões da pasta e `allow_loading_unsigned_plugins`
- **Sem dados:** confirme o UID do datasource na Configuration e o label de cluster no Explore
