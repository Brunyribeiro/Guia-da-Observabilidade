# ♥️ Kubernetes Health

Plugin Grafana **Kubernetes Health** (`kubernetes-health-app`) — visão APM do cluster: overview, namespaces, workloads, nodes, capacidade, storage, custo e alertas.

**Versão:** 1.0.0 · **Grafana:** >= 12.3

Código-fonte: [github.com/Brunyribeiro/grafana-apm](https://github.com/Brunyribeiro/grafana-apm)

---

## Pré-requisitos

| Item | Descrição |
|------|-----------|
| Grafana | >= 12.3 |
| Métricas | Prometheus ou Mimir com métricas `k8s_*` (OTel) ou `kube_*` (kube-state-metrics) |
| Logs | Loki (opcional, para eventos K8s) |

---

## Instalar no Grafana

O build pronto está na pasta `grafana-apm/kubernetes-health-app/` do repositório. Copie **todo o conteúdo** dessa pasta para o diretório de plugins do Grafana.

### Opção A — cópia manual (Linux)

```bash
sudo cp -r grafana-apm/kubernetes-health-app /var/lib/grafana/plugins/kubernetes-health-app
sudo chown -R grafana:grafana /var/lib/grafana/plugins/kubernetes-health-app
```

### Opção B — Docker

```yaml
volumes:
  - ./grafana-apm/kubernetes-health-app:/var/lib/grafana/plugins/kubernetes-health-app
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

1. **Administration → Plugins** → busque **Kubernetes Health** → **Enable**
2. Abra **Configuration** (ícone de engrenagem) e preencha:

| Campo | Descrição |
|-------|-----------|
| Metrics datasource | Mimir/Prometheus com métricas do cluster |
| Logs datasource | Loki (opcional) |
| Cluster label | Padrão `k8s_cluster_name`; use `cluster` se kube-state clássico |
| Runbook URL | Link do runbook de incidentes (opcional) |

---

## Atualizar

Substitua os arquivos da pasta pelos de uma versão mais recente do repositório e reinicie o Grafana.

---

## Problemas comuns

!!! warning "Plugin não aparece"
    Verifique as permissões da pasta e a configuração `allow_loading_unsigned_plugins`.

!!! warning "Sem dados"
    Confirme o UID do datasource na Configuration e o label de cluster (`k8s_cluster_name` vs `cluster`).
