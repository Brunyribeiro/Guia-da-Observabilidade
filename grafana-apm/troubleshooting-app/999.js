"use strict";(self.webpackChunktroubleshooting_app=self.webpackChunktroubleshooting_app||[]).push([[999],{6330(e,t,r){r.d(t,{i:()=>i});var n=r(5959),a=r.n(n),o=r(2007);const s={normal:"green",warning:"orange",critical:"red",unknown:"darkgrey"},c={normal:"Saudável",warning:"Atenção",critical:"Crítico",unknown:"Sem dados"};function i({health:e,compact:t=!1}){var r;const n=null!==(r=null==e?void 0:e.overallStatus)&&void 0!==r?r:"unknown";return t?a().createElement(o.Badge,{text:c[n],color:s[n]}):a().createElement("div",null,a().createElement(o.Badge,{text:c[n],color:s[n]}),e?a().createElement("div",{style:{marginTop:4,fontSize:12,opacity:.85}},"Erro ",e.errorRateLabel," · p95 ",e.latencyLabel," · ",e.throughputLabel):a().createElement("div",{style:{marginTop:4,fontSize:12,opacity:.65}},"Carregando saúde..."))}},5999(e,t,r){r.r(t),r.d(t,{ServiceInfrastructureTab:()=>F});var n=r(5959),a=r.n(n),o=r(6089),s=r(2007),c=r(6855),i=r(4911),l=r(880),u=r(8448),d=r(4724),m=r(1561);function p(e,t,r,n,a,o,s){try{var c=e[o](s),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function s(e){p(o,n,a,s,c,"next",e)}function c(e){p(o,n,a,s,c,"throw",e)}s(void 0)})}}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}const g={cpuMetric:"container_cpu_usage_seconds_total",memoryMetric:"container_memory_working_set_bytes",restartMetric:"kube_pod_container_status_restarts_total",podLabel:"k8s_pod_name"},h=["k8s_pod_cpu_usage","container_cpu_usage","container_cpu_usage_seconds_total","container_cpu_time","kubernetes.container.cpu.time"],v=["k8s_pod_memory_working_set","container_memory_working_set","container_memory_working_set_bytes","container_memory_usage_bytes","kubernetes.container.memory.usage"],_=["k8s_container_restarts","kube_pod_container_status_restarts_total"];function $(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(e,t){return t.find(t=>e.includes(t))}function w(e,t,r){return f(function*(){try{const n=yield(0,m.uJ)(e,{expr:`topk(80, count by (__name__) (last_over_time(${t}[1h])))`,instant:!0,range:!1,format:"table"},r);return(0,i.cS)(n,"__name__")}catch(e){return[]}})()}function k(e,t,r,n,a){return f(function*(){for(const i of[t,r,...n]){var o,s,c;const t=yield w(e,i,a);if(0===t.length)continue;const r=null!==(o=E(t,h))&&void 0!==o?o:t.find(e=>e.includes("cpu")&&(e.includes("pod")||e.includes("container"))),n=null!==(s=E(t,v))&&void 0!==s?s:t.find(e=>e.includes("memory")&&(e.includes("pod")||e.includes("container"))),l=null!==(c=E(t,_))&&void 0!==c?c:t.find(e=>e.includes("restart"));if(!r&&!n&&!l)continue;const u=t.some(e=>e.startsWith("kube_"))?"pod":t.some(e=>e.startsWith("k8s_"))?"k8s_pod_name":g.podLabel;return{cpuMetric:null!=r?r:g.cpuMetric,memoryMetric:null!=n?n:g.memoryMetric,restartMetric:null!=l?l:g.restartMetric,podLabel:u,selector:i}}return b(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){y(e,t,r[t])})}return e}({},g),{selector:t})})()}function S(e,t,r,n){return f(function*(){const a=yield(0,m.uJ)(e,{expr:t,instant:!0,range:!1,format:"table"},n);return(0,i.T1)(a)?new Map:(0,i.s5)(a,[r])})()}function M(e){return void 0===e?"unknown":e>=5?"critical":e>=1?"warning":"normal"}function P(e,t,r){const n=(a=e).endsWith("_total")||a.endsWith("_seconds_total")||a.includes("cpu.time")||a.endsWith("_cpu_time")?`rate(${e}${t}[5m])`:`${e}${t}`;var a;return r?`sum by (${r}) (${n})`:`sum(${n})`}function L(e){return e.endsWith("_total")||e.includes("restarts_total")}function C(e,t){return L(e)?[`sum(increase(${e}${t}[1h]))`,`sum(${e}${t})`]:[`sum(${e}${t})`,`sum(delta(${e}${t}[1h]))`]}function x(e,t,r){return L(e)?`sum by (${r}) (increase(${e}${t}[1h]))`:`sum by (${r}) (${e}${t})`}function O(e){const{selector:t,cpuMetric:r,memoryMetric:n,restartMetric:a,podLabel:o}=e;return{cpu:P(r,t),memory:`sum(${n}${t})`,restarts:C(a,t),podCount:`count(count by (${o}) (${n}${t}))`,cpuByPod:P(r,t,o),memoryByPod:`sum by (${o}) (${n}${t})`,restartsByPod:x(a,t,o)}}function j(e,t,r){return f(function*(){const n=O(t),[a,o,s,c]=yield Promise.all([(0,m.j5)(e,n.cpu,r),(0,m.j5)(e,n.memory,r),(0,m.rN)(e,n.restarts,r),(0,m.j5)(e,n.podCount,r)]);return{cpu:a,memory:o,restarts:s,podCount:c}})()}function z(e,t){return f(function*(){if(!t.metricsDatasourceUid)return;const r=(0,u.Zv)(e.timeRange),n=(0,d.iP)(t,e),a=function(e,t){const r=(0,d.KC)(e),n=[`k8s_pod_name=~"^${$(t.deployment)}-.*"`];return t.namespace&&"all"!==t.namespace&&n.unshift(`${r.namespace}="${t.namespace}"`),t.cluster&&"all"!==t.cluster&&n.unshift(`${r.cluster}="${t.cluster}"`),`{${n.join(",")}}`}(t,e),o=function(e,t){const r=(0,d.KC)(e),n=`pod=~"^${$(t.deployment)}-.*"`,a=[`${r.namespace}="${t.namespace}"`];"namespace"!==r.namespace&&a.push(`namespace="${t.namespace}"`);const o=a.map(e=>{const a=[e,n];return t.cluster&&"all"!==t.cluster&&a.unshift(`${r.cluster}="${t.cluster}"`),`{${a.join(",")}}`});return[...new Set(o)]}(t,e),s=yield k(t.metricsDatasourceUid,n,a,o,r),c=O(s),[i,m,p,f]=yield Promise.all([S(t.metricsDatasourceUid,c.cpuByPod,s.podLabel,r),S(t.metricsDatasourceUid,c.memoryByPod,s.podLabel,r),S(t.metricsDatasourceUid,c.restartsByPod,s.podLabel,r),j(t.metricsDatasourceUid,s,r)]),y=function(e,t,r,n){return Array.from(e).sort((e,t)=>e.localeCompare(t)).map(e=>{const a=t.get(e),o=r.get(e),s=n.get(e);return{name:e,cpuCores:a,memoryBytes:o,restarts:s,cpuLabel:(0,l.wF)(a),memoryLabel:(0,l.z3)(o),restartsLabel:void 0===s?"—":String(Math.round(s)),status:M(s)}})}(new Set([...i.keys(),...m.keys(),...p.keys()]),i,m,p),b=y.reduce((e,t)=>{var r;return e+(null!==(r=t.cpuCores)&&void 0!==r?r:0)},0),g=y.reduce((e,t)=>{var r;return e+(null!==(r=t.memoryBytes)&&void 0!==r?r:0)},0),h=y.reduce((e,t)=>{var r;return e+(null!==(r=t.restarts)&&void 0!==r?r:0)},0);return{snapshot:{podCount:y.length,totalRestarts:h,totalCpuCores:b,totalMemoryBytes:g,podCountLabel:String(y.length),totalRestartsLabel:String(Math.round(h)),totalCpuLabel:(0,l.wF)(b),totalMemoryLabel:(0,l.z3)(g)},pods:y,series:f,detectedMetrics:{cpu:s.cpuMetric,memory:s.memoryMetric,restarts:s.restartMetric,podLabel:s.podLabel,selector:s.selector}}})()}var R=r(980),D=r(8565),U=r(5611);function N({snapshot:e}){const t=(0,s.useStyles2)(B),r=[{label:"Pods",value:e.podCountLabel},{label:"Restarts",value:e.totalRestartsLabel},{label:"CPU total",value:e.totalCpuLabel},{label:"Memória total",value:e.totalMemoryLabel}];return a().createElement("div",{className:t.grid},r.map(e=>a().createElement(s.Card,{key:e.label,className:t.card},a().createElement(s.Card.Description,null,e.label),a().createElement("div",{className:t.value},e.value))))}const B=e=>({grid:o.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(3)};
  `,card:o.css`
    min-height: 96px;
  `,value:o.css`
    margin-top: ${e.spacing(1)};
    font-size: ${e.typography.h4.fontSize};
    font-weight: ${e.typography.fontWeightMedium};
  `});var W=r(6330);function A({pods:e}){const t=(0,s.useStyles2)(T);return a().createElement("div",{className:t.wrapper},a().createElement("h3",{className:t.title},"Pods do deployment"),a().createElement("table",{className:t.table,"data-testid":U.b.infrastructure.podTable},a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,"Saúde"),a().createElement("th",null,"Pod"),a().createElement("th",null,"CPU"),a().createElement("th",null,"Memória"),a().createElement("th",null,"Restarts"))),a().createElement("tbody",null,0===e.length?a().createElement("tr",null,a().createElement("td",{colSpan:5,className:t.empty},"Nenhum pod encontrado para este deployment no período.")):e.map(e=>a().createElement("tr",{key:e.name},a().createElement("td",null,a().createElement(W.i,{health:{errorRateLabel:"—",latencyLabel:"—",throughputLabel:"—",errorStatus:e.status,latencyStatus:e.status,overallStatus:e.status},compact:!0})),a().createElement("td",null,e.name),a().createElement("td",null,e.cpuLabel),a().createElement("td",null,e.memoryLabel),a().createElement("td",null,e.restartsLabel))))))}const T=e=>({wrapper:o.css`
    margin-bottom: ${e.spacing(3)};
  `,title:o.css`
    margin: 0 0 ${e.spacing(1.5)};
    font-size: ${e.typography.h5.fontSize};
  `,table:o.css`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    overflow: hidden;

    th,
    td {
      padding: ${e.spacing(1.5,2)};
      text-align: left;
      border-bottom: 1px solid ${e.colors.border.weak};
    }

    th {
      background: ${e.colors.background.secondary};
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    tbody tr:last-child td {
      border-bottom: none;
    }
  `,empty:o.css`
    color: ${e.colors.text.secondary};
    text-align: center;
  `});function I(e,t,r,n,a,o,s){try{var c=e[o](s),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,a)}function F({context:e}){const t=(0,s.useStyles2)(J),r=(0,c.U)(),[o,i]=(0,n.useState)(),[l,d]=(0,n.useState)(!1),[m,p]=(0,n.useState)(),f=(0,u.Zv)(e.timeRange);if((0,n.useEffect)(()=>{if(!r.metricsDatasourceUid)return;let t=!1;var n;return(n=function*(){d(!0),p(void 0);try{const n=yield z(e,r);t||i(n)}catch(e){console.error(e),t||(p("Não foi possível carregar métricas de infraestrutura."),i(void 0))}finally{t||d(!1)}},function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function s(e){I(o,r,a,s,c,"next",e)}function c(e){I(o,r,a,s,c,"throw",e)}s(void 0)})})(),()=>{t=!0}},[e,r]),!r.metricsDatasourceUid)return a().createElement(s.Alert,{title:"Infraestrutura indisponível",severity:"info"},"Esta aba depende de métricas de cluster ainda não configuradas para o ambiente.");if(l)return a().createElement(s.LoadingPlaceholder,{text:"Carregando pods, CPU e memória..."});if(m)return a().createElement(s.Alert,{title:"Erro ao carregar infraestrutura",severity:"error"},m);if(!o)return a().createElement(s.Alert,{title:"Sem dados de infraestrutura",severity:"warning"},"Este serviço não possui métricas de pods disponíveis no período selecionado.");const y=(0,R.H_)(r.metricsDatasourceUid,O({selector:o.detectedMetrics.selector,cpuMetric:o.detectedMetrics.cpu,memoryMetric:o.detectedMetrics.memory,restartMetric:o.detectedMetrics.restarts,podLabel:o.detectedMetrics.podLabel}).cpu,e.timeRange);return a().createElement("div",{"data-testid":U.b.infrastructure.container},a().createElement("header",{className:t.header},a().createElement("div",null,a().createElement("h3",null,"Infraestrutura"),a().createElement("p",null,"Recursos de CPU, memória e restarts dos pods deste deployment.")),a().createElement(s.LinkButton,{variant:"secondary",icon:"external-link-alt",href:y,target:"_blank",rel:"noreferrer"},"Abrir no Explore")),a().createElement(N,{snapshot:o.snapshot}),a().createElement(A,{pods:o.pods}),a().createElement("div",{className:t.grid},a().createElement(D.R,{title:"CPU total",description:"Soma de cores utilizadas pelos pods",frames:o.series.cpu,from:f.from,to:f.to,unit:"short"}),a().createElement(D.R,{title:"Memória total",description:"Memória utilizada pelos pods",frames:o.series.memory,from:f.from,to:f.to,unit:"bytes"}),a().createElement(D.R,{title:"Reinicializações",description:"Quantas vezes os pods foram reiniciados no período selecionado",frames:o.series.restarts,from:f.from,to:f.to}),a().createElement(D.R,{title:"Contagem de pods",description:"Número de pods ativos no deployment",frames:o.series.podCount,from:f.from,to:f.to})))}const J=e=>({header:o.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(2)};
    flex-wrap: wrap;

    h3 {
      margin: 0 0 ${e.spacing(.5)};
      font-size: ${e.typography.h5.fontSize};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      max-width: 720px;
    }
  `,grid:o.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: ${e.spacing(2)};
  `})}}]);
//# sourceMappingURL=999.js.map?_cache=9909d99e83e6306134a6