# 📊 Grafana APM — Plugins de Observabilidade

Esta seção documenta os **plugins Grafana** incluídos neste guia. Cada plugin já vem buildado e pronto para instalar no Grafana (>= 12.3), oferecendo uma visão APM completa — do cluster Kubernetes ao rastreamento de serviços.

Todos os arquivos estão na pasta [`grafana-apm/`](https://github.com/Brunyribeiro/Guia-da-Observabilidade/tree/main/grafana-apm) deste repositório.

---

## Screenshot

![Painel Demo Observabilidade](https://raw.githubusercontent.com/Brunyribeiro/Guia-da-Observabilidade/main/grafana-apm/grafana-apm.jpg)

> Painel **Demo Observabilidade** rodando o plugin `troubleshooting-app`: correlação de SLOs, métricas HTTP, dependências e traces por serviço.

---

## Plugins disponíveis

<div class="grid cards" markdown>

-   :material-kubernetes: **Kubernetes Health**

    ---

    Visão APM completa do cluster: workloads, nodes, namespaces, storage, custo e alertas.

    **ID:** `kubernetes-health-app` · **Grafana:** >= 12.3

    [:octicons-arrow-right-24: Documentação](kubernetes-health-app.md)
    [:octicons-download-16: Download](https://github.com/Brunyribeiro/Guia-da-Observabilidade/tree/main/grafana-apm/kubernetes-health-app){ target=_blank }

-   :material-magnify: **Observabilidade**

    ---

    Catálogo de serviços com correlação de métricas, logs, traces, runtime e infraestrutura em um único fluxo APM.

    **ID:** `troubleshooting-app` · **Grafana:** >= 12.3

    [:octicons-arrow-right-24: Documentação](troubleshooting-app.md)
    [:octicons-download-16: Download](https://github.com/Brunyribeiro/Guia-da-Observabilidade/tree/main/grafana-apm/troubleshooting-app){ target=_blank }

</div>

---

## Instalação rápida

Clone este repositório e copie a pasta do plugin desejado para o diretório de plugins do Grafana:

```bash
git clone https://github.com/Brunyribeiro/Guia-da-Observabilidade.git
```

### Kubernetes Health

```bash
sudo cp -r Guia-da-Observabilidade/grafana-apm/kubernetes-health-app /var/lib/grafana/plugins/kubernetes-health-app
sudo chown -R grafana:grafana /var/lib/grafana/plugins/kubernetes-health-app
```

### Observabilidade

```bash
sudo cp -r Guia-da-Observabilidade/grafana-apm/troubleshooting-app /var/lib/grafana/plugins/troubleshooting-app
sudo chown -R grafana:grafana /var/lib/grafana/plugins/troubleshooting-app
```

### Docker Compose (ambos os plugins)

```yaml
services:
  grafana:
    image: grafana/grafana:latest
    environment:
      - GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=kubernetes-health-app,troubleshooting-app
    volumes:
      - ./Guia-da-Observabilidade/grafana-apm/kubernetes-health-app:/var/lib/grafana/plugins/kubernetes-health-app
      - ./Guia-da-Observabilidade/grafana-apm/troubleshooting-app:/var/lib/grafana/plugins/troubleshooting-app
    ports:
      - "3000:3000"
```

### Configuração `grafana.ini`

```ini
[plugins]
allow_loading_unsigned_plugins = kubernetes-health-app,troubleshooting-app
```

---

## Pré-requisitos comuns

| Dependência | Finalidade |
|-------------|------------|
| Grafana >= 12.3 | Runtime dos plugins |
| Prometheus ou Mimir | Métricas (HTTP, span metrics, `kube_*` / `k8s_*`) |
| Loki | Logs e eventos K8s |
| Tempo | Distributed Tracing |
| `grafana-exploretraces-app` | Traces embutidos no painel Observabilidade (recomendado) |
