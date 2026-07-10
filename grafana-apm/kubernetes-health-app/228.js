"use strict";(self.webpackChunkkubernetes_health_app=self.webpackChunkkubernetes_health_app||[]).push([[228],{4228(e,t,a){a.r(t),a.d(t,{default:()=>w});var r=a(5959),s=a.n(r),o=a(1269),n=a(6089),i=a(8531),l=a(2007),c=a(6645),d=a(3042);function u({label:e,description:t,currentUid:a,onSelected:r,inputId:o,testId:n,logs:c,metrics:d=!0}){return s().createElement(l.Field,{label:e,description:t},s().createElement("div",{"data-testid":n},s().createElement(i.DataSourcePicker,{inputId:o,width:60,current:a||null,metrics:d,logs:c,noDefault:!0,placeholder:"Selecione um datasource",onChange:e=>r(e.uid)})))}const p={otel:["k8s_container_ready","k8s_deployment_desired","k8s_replicaset_desired","k8s_node_condition_ready","k8s_pod_cpu_usage","k8s_pod_status_reason","k8s_hpa_current_replicas"],kubeState:["kube_pod_info","kube_deployment_spec_replicas","kube_node_info"]},m=[{id:"overview",label:"Overview",description:"Resumo de nodes, pods, workloads e restarts do cluster.",requiresMetrics:!0},{id:"namespaces",label:"Namespaces",description:"Saúde agregada por namespace com drill-down para workloads.",requiresMetrics:!0},{id:"workloads",label:"Workloads",description:"Deployments com réplicas desejadas, disponíveis e indisponíveis.",requiresMetrics:!0},{id:"nodes",label:"Nodes",description:"Capacidade, uso (CPU, memória, disco), condições e prontidão dos nodes.",requiresMetrics:!0},{id:"capacidade",label:"Capacidade",description:"Gráficos de CPU, memória e disco, pods por fase, uptime dos nodes e filtro por namespace.",requiresMetrics:!0},{id:"storage",label:"Storage",description:"PVCs, fase, StorageClass e uso de volume persistente.",requiresMetrics:!0},{id:"cost",label:"Cost",description:"Estimativa de custo mensal por namespace com base em CPU e memória.",requiresMetrics:!0},{id:"alerts",label:"Alertas",description:"Alertas firing, eventos Kubernetes (OTel/Loki) e sinais de pod/node/volume via métricas.",requiresMetrics:!0}];var b=a(5611);function g({settings:e}){const t=(0,l.useStyles2)(f),a=function(e){return[{role:"metrics",label:"Prometheus / Mimir",configured:Boolean(e.metricsDatasourceUid),feeds:"Overview, namespaces, workloads, nodes, storage, cost e alertas Prometheus."},{role:"logs",label:"Loki",configured:Boolean(e.logsDatasourceUid),feeds:"Eventos Kubernetes exportados pelo OpenTelemetry (k8s_events / k8sobjects)."}]}(e),r=e.clusterLabel||c.I;return s().createElement("section",{className:t.panel,"data-testid":b.b.appConfig.guidePanel},s().createElement("header",{className:t.header},s().createElement("div",null,s().createElement("h3",null,"Guia do plugin"),s().createElement("p",null,"Referência de datasource, labels e abas disponíveis. Use durante a instalação para validar se o Mimir possui métricas Kubernetes (OTel kubeletstats ou kube-state-metrics)."))),s().createElement("div",{className:t.grid},s().createElement("article",{className:t.card},s().createElement("h4",null,s().createElement(l.Icon,{name:"check-circle"})," Datasource"),s().createElement("ul",{className:t.list},a.map(e=>s().createElement("li",{key:e.role},s().createElement(l.Badge,{text:e.configured?"OK":"Pendente",color:e.configured?"green":"orange"})," ",s().createElement("strong",null,e.label),s().createElement("span",null,e.feeds))))),s().createElement("article",{className:t.card},s().createElement("h4",null,s().createElement(l.Icon,{name:"tag-alt"})," Labels e métricas"),s().createElement("p",{className:t.cardIntro},"Label de cluster configurado: ",s().createElement("code",null,r)),s().createElement("dl",{className:t.labels},s().createElement("div",null,s().createElement("dt",null,"OTel (kubeletstats)"),s().createElement("dd",null,p.otel.join(", "))),s().createElement("div",null,s().createElement("dt",null,"kube-state-metrics"),s().createElement("dd",null,p.kubeState.join(", "))))),s().createElement("article",{className:t.card},s().createElement("h4",null,s().createElement(l.Icon,{name:"apps"})," Abas disponíveis"),s().createElement("ul",{className:t.tabList},m.map(e=>{const r=function(e,t){return!e.requiresMetrics||t.some(e=>"metrics"===e.role&&e.configured)}(e,a);return s().createElement("li",{key:e.id,"data-available":r},s().createElement("div",{className:t.tabTitle},s().createElement(l.Badge,{text:e.label,color:r?"blue":"darkgrey"})),s().createElement("p",null,e.description))})))))}const f=e=>({panel:n.css`
    margin-top: ${e.spacing(3)};
    padding: ${e.spacing(2)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};
  `,header:n.css`
    margin-bottom: ${e.spacing(2)};

    h3 {
      margin: 0 0 ${e.spacing(.5)};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      max-width: 960px;
    }
  `,grid:n.css`
    display: grid;
    gap: ${e.spacing(2)};

    @media (min-width: 960px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  `,card:n.css`
    h4 {
      display: flex;
      align-items: center;
      gap: ${e.spacing(.75)};
      margin: 0 0 ${e.spacing(1)};
      font-size: ${e.typography.body.fontSize};
    }
  `,cardIntro:n.css`
    margin: 0 0 ${e.spacing(1)};
    color: ${e.colors.text.secondary};
  `,list:n.css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: ${e.spacing(1)};

    li {
      display: grid;
      gap: ${e.spacing(.25)};
    }

    span {
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
    }
  `,labels:n.css`
    margin: 0;
    display: grid;
    gap: ${e.spacing(1)};

    dt {
      font-weight: 600;
    }

    dd {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
    }
  `,tabList:n.css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: ${e.spacing(1.5)};

    p {
      margin: ${e.spacing(.5)} 0 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
    }
  `,tabTitle:n.css`
    display: flex;
    align-items: center;
    gap: ${e.spacing(.75)};
  `});function v(e,t,a,r,s,o,n){try{var i=e[o](n),l=i.value}catch(e){return void a(e)}i.done?t(l):Promise.resolve(l).then(r,s)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){h(e,t,a[t])})}return e}function k(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}),e}const w=({plugin:e})=>{var t,a,o,n,i,p,m,f,v,h,w,U;const M=(0,l.useStyles2)(P),{enabled:C,jsonData:S}=e.meta,[B,D]=(0,r.useState)({metricsDatasourceUid:null!==(t=null==S?void 0:S.metricsDatasourceUid)&&void 0!==t?t:"",logsDatasourceUid:null!==(a=null==S?void 0:S.logsDatasourceUid)&&void 0!==a?a:"",clusterLabel:null!==(o=null==S?void 0:S.clusterLabel)&&void 0!==o?o:c.I,costCpuCorePerMonthUsd:null!==(n=null==S?void 0:S.costCpuCorePerMonthUsd)&&void 0!==n?n:d.eZ.cpuCorePerMonthUsd,costMemoryGiBPerMonthUsd:null!==(i=null==S?void 0:S.costMemoryGiBPerMonthUsd)&&void 0!==i?i:d.eZ.memoryGiBPerMonthUsd,costStorageGiBPerMonthUsd:null!==(p=null==S?void 0:S.costStorageGiBPerMonthUsd)&&void 0!==p?p:d.eZ.storageGiBPerMonthUsd,costDefaultNamespaceBudgetUsd:null==S?void 0:S.costDefaultNamespaceBudgetUsd,nodepoolLabel:null!==(m=null==S?void 0:S.nodepoolLabel)&&void 0!==m?m:""}),[_,O]=(0,r.useState)(),T=e=>{D(k(y({},B),{[e.target.name]:e.target.value.trim()}))},$=e=>{const t=Number(e.target.value);D(k(y({},B),{[e.target.name]:Number.isFinite(t)&&t>=0?t:void 0}))};return s().createElement("form",{onSubmit:t=>{t.preventDefault(),O(void 0),E(e.meta.id,{enabled:C,pinned:!0,jsonData:B},O)}},s().createElement(l.FieldSet,{label:"Métricas Kubernetes"},s().createElement(u,{label:"Prometheus / Mimir",description:"Datasource com métricas kube-state-metrics ou OTel kubeletstats.",currentUid:B.metricsDatasourceUid,inputId:"config-metrics-datasource",testId:b.b.appConfig.metricsDatasourceUid,onSelected:e=>D(k(y({},B),{metricsDatasourceUid:e}))}),s().createElement(u,{label:"Logs (Loki)",description:"Datasource com eventos Kubernetes exportados pelo OpenTelemetry (k8s_events / k8sobjects receiver).",currentUid:B.logsDatasourceUid,logs:!0,metrics:!1,inputId:"config-logs-datasource",testId:b.b.appConfig.logsDatasourceUid,onSelected:e=>D(k(y({},B),{logsDatasourceUid:e}))}),s().createElement(l.Field,{label:"Label de cluster",description:"Label usado para filtrar métricas por cluster. OTel: k8s_cluster_name. kube-state: cluster."},s().createElement(l.Input,{width:40,name:"clusterLabel",id:"config-cluster-label","data-testid":b.b.appConfig.clusterLabel,value:B.clusterLabel,onChange:T})),s().createElement(l.Field,{label:"Label de nodepool",description:"Label Prometheus com o nome do nodepool nos nodes (ex.: k8s_nodepool_name). Deixe vazio para descoberta automática."},s().createElement(l.Input,{width:40,name:"nodepoolLabel",id:"config-nodepool-label",value:null!==(f=B.nodepoolLabel)&&void 0!==f?f:"",onChange:T}))),s().createElement(l.FieldSet,{label:"Estimativa de custo (chargeback)"},s().createElement(l.Field,{label:"CPU (USD/core/mês)",description:"Taxa mensal por vCPU-core com base no uso agregado por namespace. Para Huawei Cloud: vCPU × preço/hora × 730."},s().createElement(l.Input,{width:20,type:"number",min:0,step:.01,name:"costCpuCorePerMonthUsd",id:"config-cost-cpu","data-testid":b.b.appConfig.costCpuRate,value:null!==(v=B.costCpuCorePerMonthUsd)&&void 0!==v?v:"",onChange:$})),s().createElement(l.Field,{label:"Memória (USD/GiB/mês)",description:"Taxa mensal por gibibyte (GiB) de memória. Para Huawei Cloud: consulte o preço de RAM/GB na região do cluster (CCE/ECS)."},s().createElement(l.Input,{width:20,type:"number",min:0,step:.01,name:"costMemoryGiBPerMonthUsd",id:"config-cost-memory","data-testid":b.b.appConfig.costMemoryRate,value:null!==(h=B.costMemoryGiBPerMonthUsd)&&void 0!==h?h:"",onChange:$})),s().createElement(l.Field,{label:"Storage (USD/GiB/mês)",description:"Taxa mensal por GiB provisionado em PVCs (showback de volumes persistentes)."},s().createElement(l.Input,{width:20,type:"number",min:0,step:.01,name:"costStorageGiBPerMonthUsd",id:"config-cost-storage","data-testid":b.b.appConfig.costStorageRate,value:null!==(w=B.costStorageGiBPerMonthUsd)&&void 0!==w?w:"",onChange:$})),s().createElement(l.Field,{label:"Orçamento padrão por namespace (USD/mês)",description:"Limite mensal de showback por namespace para alertas FinOps na aba Recursos & Eficiência."},s().createElement(l.Input,{width:20,type:"number",min:0,step:1,name:"costDefaultNamespaceBudgetUsd",id:"config-cost-budget","data-testid":b.b.appConfig.costBudgetRate,value:null!==(U=B.costDefaultNamespaceBudgetUsd)&&void 0!==U?U:"",onChange:$}))),_?s().createElement(l.Alert,{title:"Erro ao salvar",severity:"error"},_):null,s().createElement("div",{className:M.marginTop},s().createElement(l.Button,{type:"submit","data-testid":b.b.appConfig.submit},"Salvar configuração")),s().createElement(g,{settings:B}))},P=e=>({marginTop:n.css`
    margin-top: ${e.spacing(3)};
  `}),E=(e,t,a)=>{return(r=function*(){try{yield(0,o.lastValueFrom)((0,i.getBackendSrv)().fetch({url:`/api/plugins/${e}/settings`,method:"POST",data:t})),window.location.reload()}catch(e){console.error("Error while updating the plugin",e),a("Não foi possível salvar a configuração. Tente novamente.")}},function(){var e=this,t=arguments;return new Promise(function(a,s){var o=r.apply(e,t);function n(e){v(o,a,s,n,i,"next",e)}function i(e){v(o,a,s,n,i,"throw",e)}n(void 0)})})();var r}},5611(e,t,a){a.d(t,["b",0,{appConfig:{metricsDatasourceUid:"data-testid ac-metrics-datasource",logsDatasourceUid:"data-testid ac-logs-datasource",clusterLabel:"data-testid ac-cluster-label",costCpuRate:"data-testid ac-cost-cpu-rate",costMemoryRate:"data-testid ac-cost-memory-rate",costStorageRate:"data-testid ac-cost-storage-rate",costBudgetRate:"data-testid ac-cost-budget-rate",submit:"data-testid ac-submit-form",guidePanel:"data-testid ac-guide-panel"},overview:{container:"data-testid overview-container",summaryCards:"data-testid overview-summary-cards",namespaceTable:"data-testid overview-namespace-table",clusterTable:"data-testid overview-cluster-table",searchInput:"data-testid overview-search-input"},cluster:{container:"data-testid cluster-container",workloadTable:"data-testid cluster-workload-table",workloadPodsPanel:"data-testid cluster-workload-pods-panel",workloadDetailPanel:"data-testid cluster-workload-detail-panel",workloadResourceMapPanel:"data-testid cluster-workload-resource-map-panel",namespaceFilterSelect:"data-testid cluster-namespace-filter-select",nodepoolFilterSelect:"data-testid cluster-nodepool-filter-select",storageNamespaceFilterSelect:"data-testid cluster-storage-namespace-filter-select",workloadPodTable:"data-testid cluster-workload-pod-table",nodeTable:"data-testid cluster-node-table",nodeUptimeTable:"data-testid cluster-node-uptime-table",appResourceTable:"data-testid cluster-app-resource-table",storageTable:"data-testid cluster-storage-table",costTable:"data-testid cluster-cost-table",costCpuRate:"data-testid cluster-cost-cpu-rate",costMemoryRate:"data-testid cluster-cost-memory-rate",costStorageRate:"data-testid cluster-cost-storage-rate",costBudgetRate:"data-testid cluster-cost-budget-rate",finOpsExport:"data-testid cluster-finops-export",budgetAlertTable:"data-testid cluster-budget-alert-table",recommendationsTable:"data-testid cluster-recommendations-table",resourceEfficiencyCards:"data-testid cluster-resource-efficiency-cards",lowUtilNodeTable:"data-testid cluster-low-util-node-table",storageCostTable:"data-testid cluster-storage-cost-table",networkTopTalkersTable:"data-testid cluster-network-top-talkers-table",recentRolloutsPanel:"data-testid cluster-recent-rollouts-panel",alertTable:"data-testid cluster-alert-table",eventTable:"data-testid cluster-event-table",investigatePanel:"data-testid cluster-investigate-panel",tabs:{overview:"data-testid cluster-tab-overview",namespaces:"data-testid cluster-tab-namespaces",workloads:"data-testid cluster-tab-workloads",nodes:"data-testid cluster-tab-nodes",capacidade:"data-testid cluster-tab-capacidade",storage:"data-testid cluster-tab-storage",cost:"data-testid cluster-tab-cost",alerts:"data-testid cluster-tab-alerts"}},namespace:{container:"data-testid namespace-container",workloadTable:"data-testid namespace-workload-table"},incidents:{container:"data-testid incidents-container",firingBanner:"data-testid incidents-firing-banner"}}])},6645(e,t,a){a.d(t,["I",0,"k8s_cluster_name","m",0,["k8s_cluster_name","cluster"]])},3042(e,t,a){a.d(t,{A$:()=>u,KB:()=>i,Kk:()=>c,UK:()=>l,d:()=>o,fn:()=>n,pm:()=>m,vV:()=>p,wF:()=>d});const r={cpuCorePerMonthUsd:30,memoryGiBPerMonthUsd:4,storageGiBPerMonthUsd:.08,hoursPerMonth:730};function s(e,t){return void 0===e||!Number.isFinite(e)||e<0?t:e}function o(e){return{cpuCorePerMonthUsd:s(null==e?void 0:e.costCpuCorePerMonthUsd,r.cpuCorePerMonthUsd),memoryGiBPerMonthUsd:s(null==e?void 0:e.costMemoryGiBPerMonthUsd,r.memoryGiBPerMonthUsd),storageGiBPerMonthUsd:s(null==e?void 0:e.costStorageGiBPerMonthUsd,r.storageGiBPerMonthUsd)}}function n(e,t,a=r){const s=t/Math.pow(1024,3);return e*a.cpuCorePerMonthUsd+s*a.memoryGiBPerMonthUsd}function i(e,t){return e.cpuCores*t.cpuCorePerMonthUsd+e.memoryGiB*t.memoryGiBPerMonthUsd}function l(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(e)}function c(e){return`${(e/Math.pow(1024,3)).toFixed(1)} GiB`}function d(e){return void 0===e?"—":`${e.toFixed(2)} cores`}function u(e,t=r){return e*t.storageGiBPerMonthUsd}function p(e){return void 0!==e&&Number.isFinite(e)?e>=Math.pow(1024,3)?`${(e/Math.pow(1024,3)).toFixed(2)} GiB/s`:e>=Math.pow(1024,2)?`${(e/Math.pow(1024,2)).toFixed(1)} MiB/s`:e>=1024?`${(e/1024).toFixed(0)} KiB/s`:`${e.toFixed(0)} B/s`:"—"}function m(e){return void 0===e?"darkgrey":e>=60?"green":e>=35?"orange":"red"}a.d(t,["eZ",0,r])}}]);
//# sourceMappingURL=228.js.map?_cache=c3a600f3c1a059f5bec3