"use strict";(self.webpackChunkkubernetes_health_app=self.webpackChunkkubernetes_health_app||[]).push([[568],{8568(e,t,n){n.r(t),n.d(t,{default:()=>x});var a=n(5959),r=n.n(a),l=n(8531),o=n(6089),s=n(2007),i=n(1159),c=n(9348),u=n(4137),d=n(6855),m=n(5036),p=n(7597),v=n(2914);function g(e,t,n,a,r,l,o){try{var s=e[l](o),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(a,r)}function f(e){const t=(0,d.U)(),[n,r]=(0,a.useState)([]),[l,o]=(0,a.useState)([]),[s,i]=(0,a.useState)(!1),[c,u]=(0,a.useState)(),[f,y]=(0,a.useState)(0),h=(0,a.useCallback)(()=>{y(e=>e+1)},[]);(0,a.useEffect)(()=>{if(!t.metricsDatasourceUid)return r([]),void o([]);let n=!1;var a;return(a=function*(){i(!0),u(void 0);try{const[a,l]=yield Promise.all([(0,m.aB)(t,e),(0,p.o)(t,e,15)]);n||(r(a.entries),o(l))}catch(e){console.error(e),n||(u("Não foi possível carregar o centro de incidentes."),r([]),o([]))}finally{n||i(!1)}},function(){var e=this,t=arguments;return new Promise(function(n,r){var l=a.apply(e,t);function o(e){g(l,n,r,o,s,"next",e)}function s(e){g(l,n,r,o,s,"throw",e)}o(void 0)})})(),()=>{n=!0}},[f,t,e]);const b=(0,a.useMemo)(()=>n.filter(e=>(0,v.o)(e.status)),[n]),E=(0,a.useMemo)(()=>b.reduce((e,t)=>e+t.summary.podsNotReady,0),[b]);return{degradedClusters:b,alerts:l,loading:s,error:c,reload:h,totalProblemPods:E,degradedClusterCount:b.length}}var y=n(1762),h=n(5265),b=n(5192),E=n(1e3),k=n(6330),$=n(6920),w=n(3080),N=n(9023),C=n(7922),S=n(5611);function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(){const e=(0,s.useStyles2)(_),t=(0,i.useNavigate)(),[n,a]=(0,c.ok)(),l=(0,d.U)(),o=(0,E.n)(l),m=(0,u.NI)(n.get("timeRange")),{degradedClusters:p,alerts:v,loading:g,error:R,reload:x,totalProblemPods:A,degradedClusterCount:U}=f(m);return r().createElement("div",{"data-testid":S.b.incidents.container},r().createElement("div",{className:e.header},r().createElement("div",null,r().createElement("h1",null,"Centro de incidentes"),r().createElement("p",null,"Visão unificada de clusters degradados e alertas ativos. Priorize war rooms com linguagem de negócio e investigue com um clique.")),r().createElement("div",{className:e.actions},r().createElement(N.$,{value:m,onChange:e=>{const t=new URLSearchParams(n);t.set("timeRange",e),a(t)}}),r().createElement(s.LinkButton,{variant:"secondary",icon:"sync",onClick:x,disabled:g},"Atualizar"),r().createElement(s.LinkButton,{variant:"secondary",icon:"monitor",href:(0,u.cP)({timeRange:m})},"Apps degradadas (APM)"))),r().createElement($.W,{timeRange:m}),o?r().createElement(s.Alert,{title:"Configuração necessária",severity:"info"},o):null,R?r().createElement(s.Alert,{title:"Erro",severity:"error"},R):null,r().createElement("div",{className:e.summaryGrid},r().createElement("article",{className:e.summaryCard},r().createElement("span",null,"Clusters com problemas"),r().createElement("strong",null,U)),r().createElement("article",{className:e.summaryCard},r().createElement("span",null,"Instâncias com problema"),r().createElement("strong",null,A)),r().createElement("article",{className:e.summaryCard},r().createElement("span",null,"Alertas firing"),r().createElement("strong",null,v.length))),g?r().createElement(w.Q,{rows:5,columns:4}):null,g?null:r().createElement(C.sh,{title:"Clusters que precisam de atenção"},0===p.length?r().createElement(s.Alert,{title:"Infraestrutura estável",severity:"success"},"Nenhum cluster degradado detectado no período selecionado."):r().createElement(C.s,null,r().createElement(C.LO,null,r().createElement("thead",null,r().createElement("tr",null,r().createElement("th",null,"Health"),r().createElement("th",null,"Cluster"),r().createElement("th",null,"Resumo"),r().createElement("th",null,"Ação"))),r().createElement("tbody",null,p.map(n=>r().createElement("tr",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){P(e,t,n[t])})}return e}({key:n.cluster,className:e.clickable},(0,b.H)(()=>t((0,u._S)(n.cluster,{timeRange:m,tab:"overview"}),{relative:"route"}),`Investigar cluster ${n.cluster}`)),r().createElement("td",null,r().createElement(k.i,{status:n.status})),r().createElement("td",null,(0,y.Nk)(n.cluster)),r().createElement("td",null,(0,h.qS)(n.summary)),r().createElement("td",null,r().createElement(s.LinkButton,{size:"sm",variant:"secondary",onClick:e=>{e.stopPropagation(),t((0,u._S)(n.cluster,{timeRange:m,tab:"alerts"}),{relative:"route"})}},"Investigar")))))))),!g&&v.length>0?r().createElement(C.sh,{title:"Alertas firing (global)"},r().createElement("ul",{className:e.alertList},v.map(e=>{var t;return r().createElement("li",{key:`${e.alertName}-${null!==(t=e.namespace)&&void 0!==t?t:"global"}`},r().createElement("strong",null,e.alertName),e.namespace?` · ${e.namespace}`:"",e.severity?` · ${e.severity}`:"")}))):null)}const _=e=>({header:o.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${e.spacing(2)};
    flex-wrap: wrap;
    margin-bottom: ${e.spacing(2)};

    h1 {
      margin: 0 0 ${e.spacing(.5)};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      max-width: 760px;
    }
  `,actions:o.css`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1.5)};
    flex-wrap: wrap;
  `,summaryGrid:o.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: ${e.spacing(1.5)};
    margin-bottom: ${e.spacing(2)};
  `,summaryCard:o.css`
    padding: ${e.spacing(1.5,2)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};

    span {
      display: block;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      margin-bottom: ${e.spacing(.5)};
    }

    strong {
      font-size: ${e.typography.h4.fontSize};
    }
  `,clickable:o.css`
    cursor: pointer;

    &:hover td {
      background: ${e.colors.action.hover};
    }
  `,alertList:o.css`
    margin: 0;
    padding-left: ${e.spacing(2.5)};
    color: ${e.colors.text.primary};

    li + li {
      margin-top: ${e.spacing(.75)};
    }
  `});const x=function(){return r().createElement(l.PluginPage,null,r().createElement(R,null))}},7597(e,t,n){n.d(t,{o:()=>p,q:()=>m});var a=n(8531),r=n(4911),l=n(8448),o=n(3773),s=n(1561);function i(e,t,n,a,r,l,o){try{var s=e[l](o),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(a,r)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var l=e.apply(t,n);function o(e){i(l,a,r,o,s,"next",e)}function s(e){i(l,a,r,o,s,"throw",e)}o(void 0)})}}function u(e,t,n,a){if(!e)return"all"===n;if("all"!==n){if(e[t]&&e[t]!==n)return!1;if(e.k8s_cluster_name&&e.k8s_cluster_name!==n)return!1}if(a){var r;const t=null!==(r=e.k8s_namespace_name)&&void 0!==r?r:e.namespace;if(t&&t!==a)return!1}return!0}function d(e,t,n){return c(function*(){const a=t?t.replace("}",',alertstate="firing"}'):'{alertstate="firing"}',l=yield(0,s.uJ)(e,{expr:`ALERTS${a}`,instant:!0,range:!1,format:"table"},n);if((0,r.T1)(l))return[];const o=(0,r.s5)(l,["alertname"]),i=(0,r.s5)(l,["alertname","severity"]),c=(0,r.s5)(l,["alertname","namespace"]),u=(0,r.s5)(l,["alertname","k8s_namespace_name"]);return Array.from(o.keys()).map(e=>{var t,n,a,r,l,o,s,d;const m=null!==(t=null===(r=[...c.entries()].find(([t])=>t.startsWith(`${e}/`)))||void 0===r||null===(a=r[0])||void 0===a?void 0:a.split("/")[1])&&void 0!==t?t:null===(o=[...u.entries()].find(([t])=>t.startsWith(`${e}/`)))||void 0===o||null===(l=o[0])||void 0===l?void 0:l.split("/")[1];return{alertName:e,severity:null!==(n=null===(d=[...i.entries()].find(([t])=>t.startsWith(`${e}/`)))||void 0===d||null===(s=d[0])||void 0===s?void 0:s.split("/")[1])&&void 0!==n?n:"unknown",namespace:m,state:"firing",summary:e}})})()}function m(e,t){return c(function*(){var n;const r=yield(0,o.M)(t,e.cluster,e.timeRange,e.clusterLabel);if(!(null==r?void 0:r.settings.metricsDatasourceUid))return[];const l=(yield d(r.settings.metricsDatasourceUid,r.filter,r.timeRange)).filter(t=>!e.namespaceFilter||t.namespace===e.namespaceFilter);if(l.length>0)return l.sort((e,t)=>e.alertName.localeCompare(t.alertName));var s,i,m;return(yield(s=null!==(n=r.settings.clusterLabel)&&void 0!==n?n:"k8s_cluster_name",i=e.cluster,m=e.namespaceFilter,c(function*(){try{var e,t;const k=yield(0,a.getBackendSrv)().get("/api/prometheus/grafana/api/v1/rules?limit=2000"),$=[];for(const a of null!==(e=null==k||null===(t=k.data)||void 0===t?void 0:t.groups)&&void 0!==e?e:[]){var n;for(const e of null!==(n=a.rules)&&void 0!==n?n:[]){var r,l,o,c,d,p,v,g,f,y,h,b,E;"firing"!==e.state&&"pending"!==e.state||u(e.labels,s,i,m)&&$.push({alertName:null!==(r=null!==(l=e.name)&&void 0!==l?l:null===(g=e.labels)||void 0===g?void 0:g.alertname)&&void 0!==r?r:"Alerta sem nome",severity:null!==(o=null===(f=e.labels)||void 0===f?void 0:f.severity)&&void 0!==o?o:"unknown",namespace:null!==(c=null===(y=e.labels)||void 0===y?void 0:y.k8s_namespace_name)&&void 0!==c?c:null===(h=e.labels)||void 0===h?void 0:h.namespace,state:"pending"===e.state?"pending":"firing",summary:null!==(d=null!==(p=null!==(v=null===(b=e.annotations)||void 0===b?void 0:b.summary)&&void 0!==v?v:null===(E=e.annotations)||void 0===E?void 0:E.description)&&void 0!==p?p:e.name)&&void 0!==d?d:"Alerta Grafana"})}}return $}catch(e){return console.warn("Grafana alerting rules API unavailable",e),[]}})())).sort((e,t)=>e.alertName.localeCompare(t.alertName))})()}function p(e,t,n=20){return c(function*(){if(!e.metricsDatasourceUid)return[];const a=(0,l.Zv)(t);return(yield d(e.metricsDatasourceUid,"",a)).slice(0,n)})()}},5265(e,t,n){n.d(t,{qS:()=>a});function a(e){const t=[];if(e.podsNotReady>0&&t.push(`${e.podsNotReady} instância${e.podsNotReady>1?"s":""} com problema`),e.workloadsUnavailable>0&&t.push(`${e.workloadsUnavailable} workload${e.workloadsUnavailable>1?"s":""} indisponível${e.workloadsUnavailable>1?"eis":""}`),e.nodesTotal>0&&e.nodesReady<e.nodesTotal){const n=e.nodesTotal-e.nodesReady;t.push(`${n} servidor${n>1?"es":""} não pronto${n>1?"s":""}`)}return e.restartEvents>0&&t.push(`${e.restartEvents} reinício${e.restartEvents>1?"s":""} recente${e.restartEvents>1?"s":""}`),0===t.length?"Nenhum problema detectado no período":t.join(" · ")}n.d(t,["Fk",0,{namespace:"Namespace Kubernetes — agrupa workloads e recursos relacionados.",workload:"Workload implantado no cluster (Deployment, StatefulSet, DaemonSet ou ReplicaSet).",podNotReady:"Instância de container que não passou no health check ou ainda está iniciando (pod not ready).",node:"Servidor físico ou virtual que executa workloads no cluster Kubernetes (node).",restart:"Reinício de container — pode indicar crash loop ou eviction.",alertFiring:"Regra de alerta Prometheus/Grafana em estado firing (condição ativa no momento)."}])},2914(e,t,n){function a(e){return"1"===e||"true"===e}function r(e){return"warning"===e||"critical"===e}n.d(t,{Y:()=>a,o:()=>r})}}]);
//# sourceMappingURL=568.js.map?_cache=92f2b3a459308554066b