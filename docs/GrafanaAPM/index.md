# 📊 Grafana APM — Plugins de Observabilidade

Esta seção documenta os **plugins Grafana** desenvolvidos como extensão prática deste guia. Cada plugin pode ser instalado diretamente no seu Grafana (>= 12.3) e oferece uma visão APM completa — do cluster Kubernetes ao rastreamento de serviços.

Repositório dos plugins: **[github.com/Brunyribeiro/grafana-apm](https://github.com/Brunyribeiro/grafana-apm)**

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
    [:octicons-mark-github-16: Download no GitHub](https://github.com/Brunyribeiro/grafana-apm/tree/main/kubernetes-health-app){ target=_blank }

-   :material-magnify: **Observabilidade**

    ---

    Catálogo de serviços com correlação de métricas, logs, traces, runtime e infraestrutura em um único fluxo APM.

    **ID:** `troubleshooting-app` · **Grafana:** >= 12.3

    [:octicons-arrow-right-24: Documentação](troubleshooting-app.md)
    [:octicons-mark-github-16: Download no GitHub](https://github.com/Brunyribeiro/grafana-apm/tree/main/troubleshooting-app){ target=_blank }

</div>

---

## Instalação rápida

Os builds prontos estão nas pastas `kubernetes-health-app/` e `troubleshooting-app/` do repositório [grafana-apm](https://github.com/Brunyribeiro/grafana-apm). Copie a pasta do plugin para o diretório de plugins do Grafana e habilite plugins não assinados.

### Docker Compose (ambos os plugins)

```yaml
services:
  grafana:
    image: grafana/grafana:latest
    environment:
      - GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=kubernetes-health-app,troubleshooting-app
    volumes:
      - ./kubernetes-health-app:/var/lib/grafana/plugins/kubernetes-health-app
      - ./troubleshooting-app:/var/lib/grafana/plugins/troubleshooting-app
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
