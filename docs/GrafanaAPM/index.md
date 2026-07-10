# 📊 Grafana APM — Plugins de Observabilidade

Esta seção documenta os **plugins Grafana** desenvolvidos como extensão prática deste guia. Cada plugin pode ser instalado diretamente no seu Grafana (>= 12.3) e oferece uma visão APM completa — do cluster Kubernetes ao rastreamento de serviços.

---

## Screenshot

![Painel Demo Observabilidade](https://raw.githubusercontent.com/Brunyribeiro/Guia-da-Observabilidade/main/grafana-apm/grafana-apm.jpg)

> Painel **Demo Observabilidade** rodando o plugin `troubleshooting-app`: correlação de SLOs, métricas HTTP, dependências e traces por serviço.

---

## Plugins disponíveis

| Plugin | ID | Descrição |
|--------|----|-----------|
| [Kubernetes Health](kubernetes-health-app.md) | `kubernetes-health-app` | Visão APM do cluster: workloads, nodes, storage, custo e alertas |
| [Observabilidade](troubleshooting-app.md) | `troubleshooting-app` | Catálogo de serviços com correlação de métricas, logs, traces e runtime |

---

## Instalação rápida

Os builds prontos estão nas pastas `grafana-apm/kubernetes-health-app/` e `grafana-apm/troubleshooting-app/` do repositório. Copie a pasta do plugin para o diretório de plugins do Grafana e habilite plugins não assinados.

### Docker Compose (ambos os plugins)

```yaml
services:
  grafana:
    image: grafana/grafana:latest
    environment:
      - GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=kubernetes-health-app,troubleshooting-app
    volumes:
      - ./grafana-apm/kubernetes-health-app:/var/lib/grafana/plugins/kubernetes-health-app
      - ./grafana-apm/troubleshooting-app:/var/lib/grafana/plugins/troubleshooting-app
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
