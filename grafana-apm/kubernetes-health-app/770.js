"use strict";(self.webpackChunkkubernetes_health_app=self.webpackChunkkubernetes_health_app||[]).push([[770],{770(e,t,a){a.r(t),a.d(t,{ClusterWorkloadsTab:()=>U});var l=a(5959),n=a.n(l),r=a(6089),o=a(2007),s=a(6855),c=a(7883),i=a(1335),m=a(6330),d=a(7922),u=a(4031),p=a(5192),y=a(5611),f=a(3042),g=a(3288),v=a(980);function h(e,t,a,l,n,r,o){try{var s=e[r](o),c=s.value}catch(e){return void a(e)}s.done?t(c):Promise.resolve(c).then(l,n)}function E({context:e,refreshKey:t,workload:a,onClearSelection:r,embedded:p}){const E=(0,o.useStyles2)(b),$=(0,s.U)(),[w,x]=(0,l.useState)([]),[k,S]=(0,l.useState)(!1),[N,z]=(0,l.useState)();(0,l.useEffect)(()=>{if(!$.metricsDatasourceUid)return;let t=!1;var l;return(l=function*(){S(!0),z(void 0);try{const l=yield(0,c.Ii)(e,$,a);t||x(l)}catch(e){console.error(e),t||(z("Não foi possível carregar pods deste workload."),x([]))}finally{t||S(!1)}},function(){var e=this,t=arguments;return new Promise(function(a,n){var r=l.apply(e,t);function o(e){h(r,a,n,o,s,"next",e)}function s(e){h(r,a,n,o,s,"throw",e)}o(void 0)})})(),()=>{t=!0}},[e,t,$,a]);const P=`${(0,i.RY)(a.kind)} ${a.name}`;return n().createElement("div",{className:p?void 0:E.wrapper,"data-testid":y.b.cluster.workloadPodsPanel},p?null:n().createElement("div",{className:E.header},n().createElement("div",null,n().createElement("p",{className:E.subtitle},"Pods do workload"),n().createElement("h3",{className:E.title},P),n().createElement("p",{className:E.meta},"Namespace ",a.namespace)),r?n().createElement(o.LinkButton,{variant:"secondary",icon:"arrow-left",onClick:r},"Voltar para workloads"):null),N?n().createElement(o.Alert,{title:"Erro",severity:"error"},N):null,k?n().createElement(o.LoadingPlaceholder,{text:"Carregando pods..."}):null,k?null:n().createElement(d.sh,{title:"Pods"},0===w.length?n().createElement(u.p,{title:"Nenhum pod encontrado"},"Nenhum pod encontrado para este workload no período selecionado."):n().createElement(d.s,null,n().createElement(d.LO,{testId:y.b.cluster.workloadPodTable},n().createElement("thead",null,n().createElement("tr",null,n().createElement("th",null,"Health"),n().createElement("th",null,"Pod"),n().createElement("th",null,"CPU"),n().createElement("th",null,"Memória"),n().createElement("th",null,"Ready"),n().createElement("th",null,"Restarts"),n().createElement("th",null,"Ações"))),n().createElement("tbody",null,w.map(t=>{const l=$.logsDatasourceUid&&(0,v.w_)($.logsDatasourceUid,`${(0,v.CW)(a.namespace,t.name)} or ${(0,v.CP)(a.namespace,t.name)}`,e.timeRange);return n().createElement("tr",{key:t.name},n().createElement("td",null,n().createElement(m.i,{status:t.status})),n().createElement("td",null,t.name),n().createElement("td",null,(0,f.wF)(t.cpuCores)),n().createElement("td",null,void 0!==t.memoryBytes?(0,f.Kk)(t.memoryBytes):"—"),n().createElement("td",null,void 0===t.ready?"—":t.ready?"Sim":"Não"),n().createElement("td",null,Math.round(t.restarts)),n().createElement("td",null,l?n().createElement(g.A,{href:l,label:"Logs"}):"—"))}))))))}const b=e=>({wrapper:r.css`
    margin-top: ${e.spacing(3)};
    padding-top: ${e.spacing(2)};
    border-top: 1px solid ${e.colors.border.weak};
  `,header:r.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${e.spacing(2)};
    flex-wrap: wrap;
    margin-bottom: ${e.spacing(2)};
  `,subtitle:r.css`
    margin: 0;
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.04em;
  `,title:r.css`
    margin: ${e.spacing(.5,0,0)};
    font-size: ${e.typography.h4.fontSize};
  `,meta:r.css`
    margin: ${e.spacing(.5,0,0)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `});function $(e,t,a,l,n,r,o){try{var s=e[r](o),c=s.value}catch(e){return void a(e)}s.done?t(c):Promise.resolve(c).then(l,n)}function w(e){return void 0===e||Number.isNaN(e)?"—":e>=Math.pow(1024,2)?`${(e/Math.pow(1024,2)).toFixed(2)} MiB/s`:e>=1024?`${(e/1024).toFixed(1)} KiB/s`:`${e.toFixed(0)} B/s`}function x(e){return void 0===e||Number.isNaN(e)?"—":(0,f.Kk)(e)}function k({label:e,value:t,hint:a}){const l=(0,o.useStyles2)(z);return n().createElement("article",{className:l.card},n().createElement("span",{className:l.label},e),n().createElement("strong",{className:l.value},t),a?n().createElement("span",{className:l.hint},a):null)}function S({events:e}){const t=(0,o.useStyles2)(P);return 0===e.length?n().createElement("p",{className:t.empty},"Nenhum evento Kubernetes relacionado no período."):n().createElement("ul",{className:t.list},e.map(e=>n().createElement("li",{key:e.id,className:t.item},n().createElement("div",{className:t.itemHeader},n().createElement(o.Badge,{text:e.label,color:e.critical?"red":"warning"===e.severity?"orange":"blue"}),e.timestamp?n().createElement("time",{className:t.time},e.timestamp):null),n().createElement("p",{className:t.message},e.message),e.involvedObject?n().createElement("p",{className:t.meta},e.involvedObject):null)))}function N({context:e,refreshKey:t,workload:a,availability:r,onClearSelection:m}){var u,p,v,h,b,N,z,P,R;const B=(0,o.useStyles2)(C),U=(0,s.U)(),[D,F]=(0,l.useState)(),[L,A]=(0,l.useState)(!1),O=`${(0,i.RY)(a.kind)} ${a.name}`;(0,l.useEffect)(()=>{if(!U.metricsDatasourceUid)return;let t=!1;var l;return(l=function*(){A(!0);try{const l=yield(0,c.BZ)(e,U,a,r);t||F(l)}catch(e){console.error(e),t||F(void 0)}finally{t||A(!1)}},function(){var e=this,t=arguments;return new Promise(function(a,n){var r=l.apply(e,t);function o(e){$(r,a,n,o,s,"next",e)}function s(e){$(r,a,n,o,s,"throw",e)}o(void 0)})})(),()=>{t=!0}},[r,e,t,U,a]);const M=null!==(u=null==D?void 0:D.metrics)&&void 0!==u?u:{replicasDesired:null!==(p=null==r?void 0:r.replicasDesired)&&void 0!==p?p:0,replicasAvailable:null!==(v=null==r?void 0:r.replicasAvailable)&&void 0!==v?v:0,unavailable:null!==(h=null==r?void 0:r.unavailable)&&void 0!==h?h:0};return n().createElement("div",{className:B.wrapper,"data-testid":y.b.cluster.workloadDetailPanel},n().createElement("div",{className:B.header},n().createElement("div",null,n().createElement("p",{className:B.subtitle},"Detalhe do workload"),n().createElement("h3",{className:B.title},O),n().createElement("p",{className:B.meta},"Namespace ",a.namespace)),n().createElement("div",{className:B.actions},(null==D?void 0:D.logsExploreUrl)?n().createElement(g.A,{href:D.logsExploreUrl,label:"Logs no Explore"}):null,m?n().createElement(o.LinkButton,{variant:"secondary",icon:"arrow-left",onClick:m},"Voltar para workloads"):null)),L?n().createElement(o.LoadingPlaceholder,{text:"Carregando métricas do workload..."}):null,(null==D?void 0:D.error)?n().createElement(o.Alert,{title:"Eventos",severity:"warning"},D.error):null,L?null:n().createElement(n().Fragment,null,n().createElement("div",{className:B.metricsGrid},n().createElement(k,{label:"CPU (uso)",value:(0,f.wF)(M.cpuUsageCores),hint:`Request ${(0,f.wF)(M.cpuRequestCores)} · Limit ${(0,f.wF)(M.cpuLimitCores)}`}),n().createElement(k,{label:"Memória (uso)",value:x(M.memoryUsageBytes),hint:`Request ${x(M.memoryRequestBytes)} · Limit ${x(M.memoryLimitBytes)}`}),n().createElement(k,{label:"Rede (RX)",value:w(M.networkReceiveBytesPerSec),hint:"Taxa de recebimento agregada dos pods"}),n().createElement(k,{label:"Rede (TX)",value:w(M.networkTransmitBytesPerSec),hint:"Taxa de envio agregada dos pods"}),n().createElement(k,{label:"Storage (uso)",value:x(M.storageUsedBytes),hint:`Request ${x(M.storageRequestedBytes)}`}),n().createElement(k,{label:"Réplicas",value:`${M.replicasAvailable}/${M.replicasDesired}`,hint:M.unavailable>0?`${M.unavailable} indisponível(eis)`:"Todas disponíveis"}),M.hpa?n().createElement(k,{label:"HPA",value:`${null!==(b=M.hpa.currentReplicas)&&void 0!==b?b:"—"}/${null!==(N=M.hpa.desiredReplicas)&&void 0!==N?N:"—"}`,hint:`${M.hpa.name} · min ${null!==(z=M.hpa.minReplicas)&&void 0!==z?z:"—"} · max ${null!==(P=M.hpa.maxReplicas)&&void 0!==P?P:"—"}`}):null),n().createElement(d.sh,{title:"Eventos"},n().createElement(S,{events:null!==(R=null==D?void 0:D.events)&&void 0!==R?R:[]})),n().createElement(E,{context:e,refreshKey:t,workload:a,embedded:!0})))}const z=e=>({card:r.css`
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};
    padding: ${e.spacing(1.5)};
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(.5)};
    min-height: 96px;
  `,label:r.css`
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,value:r.css`
    font-size: ${e.typography.h4.fontSize};
    line-height: 1.2;
  `,hint:r.css`
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `}),P=e=>({list:r.css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(1)};
  `,item:r.css`
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    padding: ${e.spacing(1,1.25)};
    background: ${e.colors.background.primary};
  `,itemHeader:r.css`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
    flex-wrap: wrap;
    margin-bottom: ${e.spacing(.5)};
  `,time:r.css`
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
    font-family: ${e.typography.fontFamilyMonospace};
  `,message:r.css`
    margin: 0;
    font-size: ${e.typography.bodySmall.fontSize};
  `,meta:r.css`
    margin: ${e.spacing(.5,0,0)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
    font-family: ${e.typography.fontFamilyMonospace};
  `,empty:r.css`
    margin: 0;
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `}),C=e=>({wrapper:r.css`
    margin-top: ${e.spacing(3)};
    padding-top: ${e.spacing(2)};
    border-top: 1px solid ${e.colors.border.weak};
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(2)};
  `,header:r.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${e.spacing(2)};
    flex-wrap: wrap;
  `,actions:r.css`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
    flex-wrap: wrap;
  `,subtitle:r.css`
    margin: 0;
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.04em;
  `,title:r.css`
    margin: ${e.spacing(.5,0,0)};
    font-size: ${e.typography.h4.fontSize};
  `,meta:r.css`
    margin: ${e.spacing(.5,0,0)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,metricsGrid:r.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: ${e.spacing(1.5)};
  `});function R(e,t,a,l,n,r,o){try{var s=e[r](o),c=s.value}catch(e){return void a(e)}s.done?t(c):Promise.resolve(c).then(l,n)}function B(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function U({context:e,refreshKey:t,onNamespaceFilterChange:a,onSelectWorkload:r,onClearWorkloadSelection:f}){var g;const v=(0,o.useStyles2)(D),h=(0,s.U)(),[E,b]=(0,l.useState)([]),[$,w]=(0,l.useState)(!1),[x,k]=(0,l.useState)(),S=e.workloadSelection;(0,l.useEffect)(()=>{if(!h.metricsDatasourceUid)return;let t=!1;var a;return(a=function*(){w(!0),k(void 0);try{const a=yield(0,c.n4)(e,h);t||b(a)}catch(e){console.error(e),t||(k("Não foi possível carregar workloads do cluster."),b([]))}finally{t||w(!1)}},function(){var e=this,t=arguments;return new Promise(function(l,n){var r=a.apply(e,t);function o(e){R(r,l,n,o,s,"next",e)}function s(e){R(r,l,n,o,s,"throw",e)}o(void 0)})})(),()=>{t=!0}},[e,t,h]);const z=(0,l.useMemo)(()=>{const e=[...new Set(E.map(e=>e.namespace))].sort((e,t)=>e.localeCompare(t)),t=[{label:"Todos os namespaces",value:""}];for(const a of e)t.push({label:a,value:a});return t},[E]),P=(0,l.useMemo)(()=>S?E.find(e=>function(e,t){return e.kind===t.kind&&e.namespace===t.namespace&&e.name===t.name}(e,S)):void 0,[E,S]);return n().createElement("div",{"data-testid":y.b.cluster.tabs.workloads},n().createElement("div",{className:v.toolbar},n().createElement("p",{className:v.description},"Deployments, ReplicaSets, DaemonSets e StatefulSets. Clique em um workload para ver CPU, memória, rede, storage, logs, eventos e requests/limits."),a?n().createElement(o.Field,{label:"Namespace"},n().createElement(o.Select,{width:28,options:z,value:null!==(g=e.namespaceFilter)&&void 0!==g?g:"",onChange:e=>a(e.value||void 0),"data-testid":y.b.cluster.namespaceFilterSelect})):null),x?n().createElement(o.Alert,{title:"Erro",severity:"error"},x):null,$&&!S?n().createElement(o.LoadingPlaceholder,{text:"Carregando workloads..."}):null,$||S?null:n().createElement(d.sh,{title:"Workloads"},0===E.length?n().createElement(u.p,{title:"Nenhum workload encontrado"},"Nenhum workload encontrado para o cluster e filtros atuais."):n().createElement(d.s,null,n().createElement(d.LO,{testId:y.b.cluster.workloadTable},n().createElement("thead",null,n().createElement("tr",null,n().createElement("th",null,"Health"),n().createElement("th",null,"Tipo"),n().createElement("th",null,"Namespace"),n().createElement("th",null,"Nome"),n().createElement("th",null,"Disponíveis"),n().createElement("th",null,"Indisponíveis"))),n().createElement("tbody",null,E.map(e=>n().createElement("tr",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},l=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),l.forEach(function(t){B(e,t,a[t])})}return e}({key:`${e.kind}/${e.namespace}/${e.name}`,className:r?v.clickableRow:void 0},r?(0,p.H)(()=>(e=>{r&&r(e)})(e),`Abrir workload ${e.name}`):{}),n().createElement("td",null,n().createElement(m.i,{status:e.status})),n().createElement("td",null,n().createElement(o.Badge,{text:(0,i.RY)(e.kind),color:(0,i._M)(e.kind)})),n().createElement("td",null,e.namespace),n().createElement("td",null,e.name),n().createElement("td",null,e.replicasAvailable,"/",e.replicasDesired),n().createElement("td",null,e.unavailable))))))),S?n().createElement(N,{context:e,refreshKey:t,workload:S,availability:P,onClearSelection:f}):null)}const D=e=>({toolbar:r.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: ${e.spacing(2)};
    flex-wrap: wrap;
    margin-bottom: ${e.spacing(1.5)};
  `,description:r.css`
    margin: 0;
    color: ${e.colors.text.secondary};
    max-width: 720px;
  `,clickableRow:r.css`
    cursor: pointer;

    &:hover td {
      background: ${e.colors.action.hover};
    }

    &:focus-visible td {
      outline: 2px solid ${e.colors.primary.border};
      outline-offset: -2px;
    }
  `})},3288(e,t,a){a.d(t,{A:()=>o});var l=a(5959),n=a.n(l),r=a(2007);function o({href:e,label:t="Explore",size:a="sm",variant:l="secondary"}){return n().createElement(r.LinkButton,{href:e,target:"_blank",rel:"noopener noreferrer",size:a,variant:l,icon:"external-link-alt"},t)}}}]);
//# sourceMappingURL=770.js.map?_cache=a84f5530893b0db6ae44