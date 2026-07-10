"use strict";(self.webpackChunktroubleshooting_app=self.webpackChunktroubleshooting_app||[]).push([[227],{7227(e,t,a){a.r(t),a.d(t,{default:()=>S});var r=a(5959),n=a.n(r),l=a(1269),o=a(6089),s=a(8531),i=a(2007),c=a(6645);function d({label:e,description:t,currentUid:a,onSelected:r,metrics:l,logs:o,tracing:c,inputId:d,testId:m}){return n().createElement(i.Field,{label:e,description:t},n().createElement("div",{"data-testid":m},n().createElement(s.DataSourcePicker,{inputId:d,width:60,current:a||null,metrics:l,logs:o,tracing:c,noDefault:!0,placeholder:"Selecione um datasource",onChange:e=>r(e.uid)})))}const m=[{id:"apps",name:"Workloads (Kubernetes)",role:"Gera telemetria via SDK OpenTelemetry ou auto-instrumentação",requiredFor:["Catálogo","Overview","Runtime"],signals:["HTTP","logs estruturados","traces","métricas de runtime"]},{id:"collector",name:"OpenTelemetry Collector",role:"Recebe, processa e encaminha métricas, logs e traces",requiredFor:["Todas as abas"],signals:["Enriquecimento com labels K8s (deployment, namespace, cluster)"]},{id:"mimir",name:"Mimir / Prometheus",role:"Armazena métricas de aplicação, runtime e infraestrutura",requiredFor:["Overview","Runtime","Infraestrutura","Catálogo","Service map"],signals:["http.server.request.*","jvm_* / dotnet_* / go_*","container_*","kube_*"]},{id:"loki",name:"Loki",role:"Armazena logs com labels correlacionáveis",requiredFor:["Overview","Logs"],signals:["Logs JSON ou texto com trace_id nos labels ou body"]},{id:"tempo",name:"Tempo",role:"Armazena traces distribuídos",requiredFor:["Overview","Traces","Service map"],signals:["Spans com resource.k8s.deployment.name e duração"]},{id:"grafana",name:"Grafana + datasources",role:"Conecta o plugin aos backends LGTM",requiredFor:["Plugin Observabilidade"],signals:["UIDs configurados em Apps → Observabilidade → Configuração"]}],u=[{id:"overview",label:"Visão geral",summary:"Golden signals HTTP, gráficos de dependências, erros recentes e traces lentos.",requires:["metrics","logs","traces"]},{id:"logs",label:"Logs",summary:"Stream completo com filtro por nível, texto e presença de trace.",requires:["logs"]},{id:"traces",label:"Traces",summary:"Busca TraceQL e visualização nativa de spans no drawer.",requires:["traces"]},{id:"serviceMap",label:"Service map",summary:"Mapa de dependências via métricas traces_service_graph_* no Prometheus.",requires:["metrics","traces"]},{id:"runtime",label:"Runtime",summary:"Métricas JVM, .NET ou Go detectadas automaticamente por prefixo.",requires:["metrics"]},{id:"infrastructure",label:"Infraestrutura",summary:"CPU, memória, restarts e inventário de pods do deployment.",requires:["metrics"]}];const p=["Workloads K8s","OTel SDK / auto-instrumentação","OpenTelemetry Collector","Mimir · Loki · Tempo","Grafana datasources","Plugin Observabilidade"];var g=a(5611);function b(){const e=(0,i.useStyles2)(y);return n().createElement("section",{className:e.panel,"data-testid":g.b.appConfig.architecturePanel},n().createElement("header",{className:e.header},n().createElement("h3",null,n().createElement(i.Icon,{name:"sitemap"})," Arquitetura e componentes necessários"),n().createElement("p",null,"O plugin não coleta telemetria — ele correlaciona dados já presentes no stack LGTM. Para funcionar corretamente, a cadeia abaixo precisa estar instrumentada e com labels consistentes.")),n().createElement("div",{className:e.flow,"aria-label":"Fluxo de observabilidade"},p.map((t,a)=>n().createElement(n().Fragment,{key:t},n().createElement("div",{className:e.flowStep},n().createElement("span",{className:e.flowIndex},a+1),n().createElement("span",null,t)),a<p.length-1?n().createElement(i.Icon,{name:"arrow-right",className:e.flowArrow}):null))),n().createElement("div",{className:e.tableWrap},n().createElement("table",{className:e.table},n().createElement("thead",null,n().createElement("tr",null,n().createElement("th",null,"Componente"),n().createElement("th",null,"Função"),n().createElement("th",null,"Alimenta"),n().createElement("th",null,"Sinais esperados"))),n().createElement("tbody",null,m.map(t=>n().createElement("tr",{key:t.id},n().createElement("td",null,n().createElement("strong",null,t.name)),n().createElement("td",null,t.role),n().createElement("td",null,t.requiredFor.join(", ")),n().createElement("td",null,n().createElement("ul",{className:e.signalList},t.signals.map(e=>n().createElement("li",{key:e},e))))))))),n().createElement("footer",{className:e.footer},n().createElement("p",null,n().createElement("strong",null,"Checklist mínimo:")," métricas HTTP OpenTelemetry (`http.server.request.duration`, `http.server.request.body.size`), logs com `trace_id` quando possível, traces no Tempo com atributos `resource.k8s.*`, métricas de container/kube para infraestrutura e runtime exportado pela linguagem (JVM, .NET ou Go).")))}const y=e=>({panel:o.css`
    margin-top: ${e.spacing(2.5)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
    overflow: hidden;
  `,header:o.css`
    padding: ${e.spacing(1.5,2)};
    border-bottom: 1px solid ${e.colors.border.weak};

    h3 {
      display: flex;
      align-items: center;
      gap: ${e.spacing(1)};
      margin: 0 0 ${e.spacing(.5)};
      font-size: ${e.typography.h5.fontSize};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      line-height: 1.5;
      max-width: 960px;
    }
  `,flow:o.css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${e.spacing(1)};
    padding: ${e.spacing(2)};
    background: ${e.colors.background.secondary};
    border-bottom: 1px solid ${e.colors.border.weak};
  `,flowStep:o.css`
    display: inline-flex;
    align-items: center;
    gap: ${e.spacing(1)};
    padding: ${e.spacing(.75,1.25)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
    font-size: ${e.typography.bodySmall.fontSize};
    font-weight: ${e.typography.fontWeightMedium};
  `,flowIndex:o.css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${e.colors.primary.main};
    color: ${e.colors.primary.contrastText};
    font-size: 11px;
    font-weight: ${e.typography.fontWeightMedium};
  `,flowArrow:o.css`
    color: ${e.colors.text.secondary};
  `,tableWrap:o.css`
    overflow-x: auto;
    padding: ${e.spacing(0,2,2)};
  `,table:o.css`
    width: 100%;
    border-collapse: collapse;
    font-size: ${e.typography.bodySmall.fontSize};

    th,
    td {
      padding: ${e.spacing(1.25,1)};
      border-bottom: 1px solid ${e.colors.border.weak};
      text-align: left;
      vertical-align: top;
    }

    th {
      color: ${e.colors.text.secondary};
      font-weight: ${e.typography.fontWeightMedium};
      white-space: nowrap;
    }

    tbody tr:last-child td {
      border-bottom: none;
    }
  `,signalList:o.css`
    margin: 0;
    padding-left: ${e.spacing(2)};

    li {
      margin-bottom: ${e.spacing(.25)};
    }
  `,footer:o.css`
    padding: ${e.spacing(1.5,2,2)};
    border-top: 1px solid ${e.colors.border.weak};
    background: ${e.colors.background.secondary};

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      line-height: 1.55;
      max-width: 960px;
    }
  `});function f({settings:e}){const t=(0,i.useStyles2)(v),a=function(e){return[{role:"metrics",label:"Mimir / Prometheus",configured:Boolean(e.metricsDatasourceUid),feeds:"Golden signals, catálogo, runtime, infraestrutura e service map"},{role:"logs",label:"Loki",configured:Boolean(e.logsDatasourceUid),feeds:"Logs de erro no overview e aba Logs"},{role:"traces",label:"Tempo",configured:Boolean(e.tracesDatasourceUid),feeds:"Traces lentos, aba Traces e correlação log → trace"}]}(e),r=e.deploymentLabel||c.Re,l=e.namespaceLabel||c.pt,o=e.clusterLabel||c.Is;return n().createElement("section",{className:t.panel,"data-testid":g.b.appConfig.guidePanel},n().createElement("header",{className:t.header},n().createElement("div",null,n().createElement("h3",null,"Guia do plugin"),n().createElement("p",null,"Referência de datasources, labels e abas disponíveis após a configuração. Use esta página durante a instalação para validar se o stack LGTM está pronto para investigação de serviços."))),n().createElement("div",{className:t.grid},n().createElement("article",{className:t.card},n().createElement("h4",null,n().createElement(i.Icon,{name:"check-circle"})," Datasources"),n().createElement("ul",{className:t.list},a.map(e=>n().createElement("li",{key:e.role},n().createElement(i.Badge,{text:e.configured?"OK":"Pendente",color:e.configured?"green":"orange"})," ",n().createElement("strong",null,e.label),n().createElement("span",null,e.feeds))))),n().createElement("article",{className:t.card},n().createElement("h4",null,n().createElement(i.Icon,{name:"tag-alt"})," Labels esperados"),n().createElement("p",{className:t.cardIntro},"As queries filtram serviços pelos labels configurados acima. Padrão OpenTelemetry / Kubernetes:"),n().createElement("dl",{className:t.labels},n().createElement("div",null,n().createElement("dt",null,"Deployment"),n().createElement("dd",null,n().createElement("code",null,r)," = ",n().createElement("em",null,"nome do deployment"))),n().createElement("div",null,n().createElement("dt",null,"Namespace"),n().createElement("dd",null,n().createElement("code",null,l)," = ",n().createElement("em",null,"namespace Kubernetes"))),n().createElement("div",null,n().createElement("dt",null,"Cluster"),n().createElement("dd",null,n().createElement("code",null,o)," = ",n().createElement("em",null,"identificador do cluster"))))),n().createElement("article",{className:t.card},n().createElement("h4",null,n().createElement(i.Icon,{name:"apps"})," Abas disponíveis"),n().createElement("ul",{className:t.tabList},u.map(e=>{const r=function(e,t){return e.requires.every(e=>{var a;return null===(a=t.find(t=>t.role===e))||void 0===a?void 0:a.configured})}(e,a);return n().createElement("li",{key:e.id,"data-available":r},n().createElement("div",{className:t.tabTitle},n().createElement(i.Badge,{text:e.label,color:r?"blue":"darkgrey"}),r?null:n().createElement("span",{className:t.tabHint},"requer datasource")),n().createElement("p",null,e.summary))})))))}const v=e=>({panel:o.css`
    margin-top: ${e.spacing(3)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
    overflow: hidden;
  `,header:o.css`
    padding: ${e.spacing(1.5,2)};
    border-bottom: 1px solid ${e.colors.border.weak};
    background: ${e.colors.background.secondary};

    h3 {
      margin: 0 0 ${e.spacing(.5)};
      font-size: ${e.typography.h5.fontSize};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      max-width: 960px;
      line-height: 1.5;
    }
  `,grid:o.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${e.spacing(2)};
    padding: ${e.spacing(2)};
  `,card:o.css`
    h4 {
      display: flex;
      align-items: center;
      gap: ${e.spacing(1)};
      margin: 0 0 ${e.spacing(1)};
      font-size: ${e.typography.body.fontSize};
      font-weight: ${e.typography.fontWeightMedium};
    }
  `,cardIntro:o.css`
    margin: 0 0 ${e.spacing(1)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,list:o.css`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${e.spacing(.5,1)};
      margin-bottom: ${e.spacing(1.25)};
      font-size: ${e.typography.bodySmall.fontSize};

      strong {
        grid-column: 2;
      }

      span {
        grid-column: 2;
        color: ${e.colors.text.secondary};
      }
    }
  `,labels:o.css`
    margin: 0;

    div {
      margin-bottom: ${e.spacing(1)};
    }

    dt {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
    }

    dd {
      margin: ${e.spacing(.25,0,0)};
      font-size: ${e.typography.bodySmall.fontSize};

      code {
        font-family: ${e.typography.fontFamilyMonospace};
        color: ${e.colors.text.primary};
      }

      em {
        color: ${e.colors.text.secondary};
        font-style: normal;
      }
    }
  `,tabList:o.css`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin-bottom: ${e.spacing(1.25)};
      padding-bottom: ${e.spacing(1.25)};
      border-bottom: 1px solid ${e.colors.border.weak};

      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
      }

      p {
        margin: ${e.spacing(.5,0,0)};
        color: ${e.colors.text.secondary};
        font-size: ${e.typography.bodySmall.fontSize};
        line-height: 1.45;
      }
    }
  `,tabTitle:o.css`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
  `,tabHint:o.css`
    color: ${e.colors.text.disabled};
    font-size: ${e.typography.bodySmall.fontSize};
  `});function h(e,t,a,r,n,l,o){try{var s=e[l](o),i=s.value}catch(e){return void a(e)}s.done?t(i):Promise.resolve(i).then(r,n)}function E(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var l=e.apply(t,a);function o(e){h(l,r,n,o,s,"next",e)}function s(e){h(l,r,n,o,s,"throw",e)}o(void 0)})}}function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){w(e,t,a[t])})}return e}function T(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}),e}const S=({plugin:e})=>{var t,a,l,o,s,m,u,p,y,v;const h=(0,i.useStyles2)(k),{enabled:E,jsonData:w}=e.meta,[S,P]=(0,r.useState)({metricsDatasourceUid:null!==(t=null==w?void 0:w.metricsDatasourceUid)&&void 0!==t?t:"",logsDatasourceUid:null!==(a=null==w?void 0:w.logsDatasourceUid)&&void 0!==a?a:"",tracesDatasourceUid:null!==(l=null==w?void 0:w.tracesDatasourceUid)&&void 0!==l?l:"",deploymentLabel:null!==(o=null==w?void 0:w.deploymentLabel)&&void 0!==o?o:c.Re,namespaceLabel:null!==(s=null==w?void 0:w.namespaceLabel)&&void 0!==s?s:c.pt,clusterLabel:null!==(m=null==w?void 0:w.clusterLabel)&&void 0!==m?m:c.Is,slowTraceThresholdMs:null!==(u=null==w?void 0:w.slowTraceThresholdMs)&&void 0!==u?u:500,sloAvailabilityTargetPercent:null==w?void 0:w.sloAvailabilityTargetPercent,sloLatencyP95Ms:null==w?void 0:w.sloLatencyP95Ms}),[x,O]=(0,r.useState)(),D=e=>{P(T($({},S),{[e.target.name]:e.target.value.trim()}))};return n().createElement(n().Fragment,null,n().createElement("form",{onSubmit:t=>{t.preventDefault(),O(void 0),L(e.meta.id,{enabled:E,pinned:!0,jsonData:S},O)}},n().createElement(i.FieldSet,{label:"Stack LGTM"},n().createElement(d,{label:"Métricas (Mimir / Prometheus)",description:"Datasource centralizado de métricas.",currentUid:S.metricsDatasourceUid,metrics:!0,inputId:"config-metrics-datasource",testId:g.b.appConfig.metricsDatasourceUid,onSelected:e=>P(T($({},S),{metricsDatasourceUid:e}))}),n().createElement(d,{label:"Logs (Loki)",description:"Datasource centralizado de logs.",currentUid:S.logsDatasourceUid,logs:!0,inputId:"config-logs-datasource",testId:g.b.appConfig.logsDatasourceUid,onSelected:e=>P(T($({},S),{logsDatasourceUid:e}))}),n().createElement(d,{label:"Traces (Tempo)",description:"Datasource centralizado de traces.",currentUid:S.tracesDatasourceUid,tracing:!0,inputId:"config-traces-datasource",testId:g.b.appConfig.tracesDatasourceUid,onSelected:e=>P(T($({},S),{tracesDatasourceUid:e}))})),n().createElement(i.FieldSet,{label:"Labels OpenTelemetry / Kubernetes"},n().createElement(i.Field,{label:"Label de deployment",description:`Usado para listar serviços. Padrão OTel: ${c.Re}`},n().createElement(i.Input,{width:40,name:"deploymentLabel",id:"config-deployment-label","data-testid":g.b.appConfig.deploymentLabel,value:S.deploymentLabel,onChange:D})),n().createElement(i.Field,{label:"Label de namespace",description:`Padrão OTel: ${c.pt}`},n().createElement(i.Input,{width:40,name:"namespaceLabel",id:"config-namespace-label","data-testid":g.b.appConfig.namespaceLabel,value:S.namespaceLabel,onChange:D})),n().createElement(i.Field,{label:"Label de cluster",description:`Padrão OTel: ${c.Is}`},n().createElement(i.Input,{width:40,name:"clusterLabel",id:"config-cluster-label","data-testid":g.b.appConfig.clusterLabel,value:S.clusterLabel,onChange:D}))),n().createElement(i.FieldSet,{label:"Traces"},n().createElement(i.Field,{label:"Limite de trace lento (ms)",description:"Traces acima deste valor aparecem como lentos. Padrão: 500 ms."},n().createElement(i.Input,{width:20,type:"number",min:1,name:"slowTraceThresholdMs",id:"config-slow-trace-threshold","data-testid":g.b.appConfig.slowTraceThresholdMs,value:String(null!==(p=S.slowTraceThresholdMs)&&void 0!==p?p:500),onChange:e=>{const t=Number.parseInt(e.currentTarget.value,10);P(T($({},S),{slowTraceThresholdMs:Number.isNaN(t)?500:t}))}}))),n().createElement(i.FieldSet,{label:"SLOs"},n().createElement(i.Field,{label:"Disponibilidade HTTP (%)",description:"Target SLO de disponibilidade (1 - error rate). Padrão: 99.9%."},n().createElement(i.Input,{width:20,type:"number",min:0,max:100,step:.1,name:"sloAvailabilityTargetPercent",id:"config-slo-availability","data-testid":g.b.appConfig.sloAvailability,value:null!==(y=S.sloAvailabilityTargetPercent)&&void 0!==y?y:"",onChange:e=>{const t=Number(e.currentTarget.value);P(T($({},S),{sloAvailabilityTargetPercent:Number.isFinite(t)&&t>0&&t<=100?t:void 0}))}})),n().createElement(i.Field,{label:"Latência p95 (ms)",description:"Target SLO de latência HTTP p95. Padrão: 500 ms."},n().createElement(i.Input,{width:20,type:"number",min:1,name:"sloLatencyP95Ms",id:"config-slo-latency","data-testid":g.b.appConfig.sloLatency,value:null!==(v=S.sloLatencyP95Ms)&&void 0!==v?v:"",onChange:e=>{const t=Number(e.currentTarget.value);P(T($({},S),{sloLatencyP95Ms:Number.isFinite(t)&&t>0?t:void 0}))}}))),x?n().createElement(i.Alert,{title:"Erro ao salvar",severity:"error"},x):null,n().createElement("div",{className:h.marginTop},n().createElement(i.Button,{type:"submit","data-testid":g.b.appConfig.submit},"Salvar configuração"))),n().createElement(f,{settings:S}),n().createElement(b,null))},k=e=>({marginTop:o.css`
    margin-top: ${e.spacing(3)};
  `}),L=(e,t,a)=>E(function*(){try{yield P(e,t),window.location.reload()}catch(e){console.error("Error while updating the plugin",e),a("Não foi possível salvar a configuração. Tente novamente.")}})(),P=(e,t)=>E(function*(){const a=yield(0,s.getBackendSrv)().fetch({url:`/api/plugins/${e}/settings`,method:"POST",data:t});return(0,l.lastValueFrom)(a)})()},5611(e,t,a){a.d(t,["b",0,{appConfig:{metricsDatasourceUid:"data-testid ac-metrics-datasource",logsDatasourceUid:"data-testid ac-logs-datasource",tracesDatasourceUid:"data-testid ac-traces-datasource",deploymentLabel:"data-testid ac-deployment-label",namespaceLabel:"data-testid ac-namespace-label",clusterLabel:"data-testid ac-cluster-label",sloAvailability:"data-testid ac-slo-availability",sloLatency:"data-testid ac-slo-latency",slowTraceThresholdMs:"data-testid ac-slow-trace-threshold",submit:"data-testid ac-submit-form",architecturePanel:"data-testid ac-architecture-panel",guidePanel:"data-testid ac-guide-panel"},investigate:{container:"data-testid investigate-container",selector:"data-testid investigate-selector",deploymentSelect:"data-testid investigate-deployment-select",goldenSignals:"data-testid investigate-golden-signals",errorLogs:"data-testid investigate-error-logs",slowTraces:"data-testid investigate-slow-traces"},catalog:{container:"data-testid catalog-container",table:"data-testid catalog-table",row:"data-testid catalog-row",searchInput:"data-testid catalog-search-input",favoritesPanel:"data-testid catalog-favorites-panel",recentlyViewedPanel:"data-testid catalog-recently-viewed",favoriteButton:"data-testid catalog-favorite-button",legacyInvestigateBanner:"data-testid catalog-legacy-investigate-banner"},overview:{container:"data-testid overview-container",favoriteButton:"data-testid overview-favorite-button",compareToggle:"data-testid overview-compare-toggle",alertBanner:"data-testid overview-alert-banner",sloPanel:"data-testid overview-slo-panel",recentDeployPanel:"data-testid overview-recent-deploy-panel",goldenSignalsCharts:"data-testid overview-golden-signals-charts",pathsTable:"data-testid overview-paths-table"},logs:{container:"data-testid logs-container",searchInput:"data-testid logs-search-input",levelSelect:"data-testid logs-level-select",traceOnlyToggle:"data-testid logs-trace-only-toggle",volumePanel:"data-testid logs-volume-panel",volumeIntervalSelect:"data-testid logs-volume-interval-select"},metrics:{container:"data-testid metrics-container"},infrastructure:{container:"data-testid infrastructure-container",podTable:"data-testid infrastructure-pod-table"},runtime:{container:"data-testid runtime-container"},traces:{container:"data-testid traces-container"},serviceMap:{container:"data-testid service-map-container",panel:"data-testid traces-service-map-panel",scopeToggle:"data-testid traces-service-map-scope-toggle",dependencyMetricsTable:"data-testid traces-dependency-metrics-table"},incidents:{container:"data-testid incidents-container",firingBanner:"data-testid incidents-firing-banner"}}])},6645(e,t,a){a.d(t,["HG",0,["k8s_deployment_name","service_name","deployment","app","job"],"Is",0,"k8s_cluster_name","Re",0,"k8s_deployment_name","mm",0,["k8s_cluster_name","cluster"],"pt",0,"k8s_namespace_name","zj",0,["k8s_namespace_name","namespace"]])}}]);
//# sourceMappingURL=227.js.map?_cache=410584a31d00189f610d