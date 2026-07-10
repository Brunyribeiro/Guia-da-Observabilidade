"use strict";(self.webpackChunktroubleshooting_app=self.webpackChunktroubleshooting_app||[]).push([[323],{4031(e,t,r){r.d(t,{p:()=>o});var n=r(5959),a=r.n(n),l=r(2007);function o({title:e,children:t}){return a().createElement(l.Alert,{title:e,severity:"info"},null!=t?t:"Nenhum registro encontrado para os filtros atuais.")}},6330(e,t,r){r.d(t,{i:()=>s});var n=r(5959),a=r.n(n),l=r(2007);const o={normal:"green",warning:"orange",critical:"red",unknown:"darkgrey"},c={normal:"Saudável",warning:"Atenção",critical:"Crítico",unknown:"Sem dados"};function s({health:e,compact:t=!1}){var r;const n=null!==(r=null==e?void 0:e.overallStatus)&&void 0!==r?r:"unknown";return t?a().createElement(l.Badge,{text:c[n],color:o[n]}):a().createElement("div",null,a().createElement(l.Badge,{text:c[n],color:o[n]}),e?a().createElement("div",{style:{marginTop:4,fontSize:12,opacity:.85}},"Erro ",e.errorRateLabel," · p95 ",e.latencyLabel," · ",e.throughputLabel):a().createElement("div",{style:{marginTop:4,fontSize:12,opacity:.65}},"Carregando saúde..."))}},4446(e,t,r){r.d(t,{C:()=>c});var n=r(5959),a=r.n(n),l=r(6089),o=r(2007);function c({tip:e,children:t}){const r=(0,o.useStyles2)(s);return a().createElement(o.Tooltip,{content:e},a().createElement("span",{className:r.term},t))}const s=e=>({term:l.css`
    border-bottom: 1px dashed ${e.colors.text.secondary};
    cursor: help;
  `})},8323(e,t,r){r.r(t),r.d(t,{default:()=>F});var n=r(5959),a=r.n(n),l=r(8531),o=r(6089),c=r(2007),s=r(1159),i=r(9348),u=r(9962),d=r(6855),p=r(880),m=r(5612),g=r(8505);function f(e,t,r,n,a,l,o){try{var c=e[l](o),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var l=e.apply(t,r);function o(e){f(l,n,a,o,c,"next",e)}function c(e){f(l,n,a,o,c,"throw",e)}o(void 0)})}}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){y(e,t,r[t])})}return e}function v(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function E(e,t,r){return h(function*(){if(0===e.length)return[];const n=new Array(e.length);let a=0;const l=Array.from({length:Math.min(t,e.length)},()=>h(function*(){for(;a<e.length;){const t=a;a+=1,n[t]=yield r(e[t])}})());return yield Promise.all(l),n})()}function w(e){const t=e.slice(0,3).map(e=>e.cluster).join(", "),r=e.length>3?` e mais ${e.length-3} cluster(s)`:"";return`Falha parcial ao analisar ${e.length} cluster(s): ${t}${r}.`}function k(e,t){return h(function*(){if(!e.metricsDatasourceUid)return{apps:[],clustersScanned:0,totalClusters:0,totalDegraded:0,truncated:!1};const r=yield(0,m.rR)(e,t),n=r.values,a=yield E(n,4,n=>function(e,t,r,n){return h(function*(){try{const a={cluster:n},l=yield(0,m.Um)(e,t,r,a);if(0===l.length)return{apps:[],cluster:r};const o=yield(0,g.QV)(e,r,t,l),c=[];for(const e of l){const t=o[(0,p.TD)(e.namespace,e.deployment)];!t||"warning"!==t.overallStatus&&"critical"!==t.overallStatus||c.push(v(b({},e),{health:t}))}return{apps:c,cluster:r}}catch(e){const t=e instanceof Error?e.message:"Falha desconhecida";return{apps:[],cluster:r,error:t}}})()}(e,t,n,r.label)),l=a.filter(e=>e.error).map(e=>({cluster:e.cluster,message:e.error})),o=function(e){const t={critical:0,warning:1,normal:2,unknown:3};return[...e].sort((e,r)=>{const n=t[e.health.overallStatus]-t[r.health.overallStatus];return 0!==n?n:e.deployment.localeCompare(r.deployment)})}(a.flatMap(e=>e.apps)),c=o.length;return{apps:o.slice(0,20),clustersScanned:n.length-l.length,totalClusters:n.length,totalDegraded:c,truncated:c>20,clusterErrors:l.length>0?l:void 0,partialError:l.length>0?w(l):void 0}})()}function S(e,t,r,n,a,l,o){try{var c=e[l](o),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}function O(e){const t=(0,d.U)(),[r,a]=(0,n.useState)([]),[l,o]=(0,n.useState)(0),[c,s]=(0,n.useState)(0),[i,u]=(0,n.useState)(0),[p,m]=(0,n.useState)(!1),[g,f]=(0,n.useState)(),[h,y]=(0,n.useState)(!1),[b,v]=(0,n.useState)(),[E,w]=(0,n.useState)(0),O=(0,n.useCallback)(()=>{w(e=>e+1)},[]);return(0,n.useEffect)(()=>{if(!t.metricsDatasourceUid)return a([]),o(0),s(0),u(0),m(!1),void f(void 0);let r=!1;var n;return(n=function*(){y(!0),v(void 0);try{const n=yield k(t,e);r||(a(n.apps),o(n.clustersScanned),s(n.totalClusters),u(n.totalDegraded),m(n.truncated),f(n.partialError))}catch(e){console.error(e),r||(v("Não foi possível carregar workloads degradados."),a([]),o(0),s(0),u(0),m(!1),f(void 0))}finally{r||y(!1)}},function(){var e=this,t=arguments;return new Promise(function(r,a){var l=n.apply(e,t);function o(e){S(l,r,a,o,c,"next",e)}function c(e){S(l,r,a,o,c,"throw",e)}o(void 0)})})(),()=>{r=!0}},[E,t,e]),{apps:r,loading:h,error:b,reload:O,degradedAppCount:r.length,totalDegraded:i,truncated:p,partialError:g,clustersScanned:l,totalClusters:c}}var P=r(1057),$=r(5265),x=r(9604),C=r(5192),j=r(4031),N=r(6330),D=r(6920),R=r(3080),A=r(4446),L=r(9023),T=r(5611);function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(){const e=(0,c.useStyles2)(B),t=(0,s.useNavigate)(),[r,n]=(0,i.ok)(),l=(0,d.U)(),o=(0,P.nO)(l),p=(0,u.NI)(r.get("timeRange")),{apps:m,loading:g,error:f,partialError:h,reload:y,degradedAppCount:b,totalDegraded:v,truncated:E,clustersScanned:w,totalClusters:k}=O(p);return a().createElement("div",{"data-testid":T.b.incidents.container},a().createElement("div",{className:e.header},a().createElement("div",null,a().createElement("h1",null,"Centro de incidentes"),a().createElement("p",null,"Workloads com sinais de degradação (erro ou latência elevados). Complementa a visão de infraestrutura do plugin Kubernetes Health.")),a().createElement("div",{className:e.actions},a().createElement(L.$,{value:p,onChange:e=>{const t=new URLSearchParams(r);t.set("timeRange",e),n(t)}}),a().createElement(c.LinkButton,{variant:"secondary",icon:"sync",onClick:y,disabled:g},"Recarregar"),a().createElement(c.LinkButton,{variant:"secondary",icon:"cloud",href:(0,u.Hl)({timeRange:p})},"Clusters degradados (K8s)"))),a().createElement(D.W,{timeRange:p}),o?a().createElement(c.Alert,{title:"Configuração necessária",severity:"info"},o):null,h?a().createElement(c.Alert,{title:"Scan parcial de clusters",severity:"warning"},h):null,f?a().createElement(c.Alert,{title:"Erro",severity:"warning"},f):null,a().createElement(c.Alert,{title:"Resumo",severity:b>0?"warning":"success"},(0,$.q)(v>0?v:b),v>0?" — priorize estas apps no war room.":"",k>0?` Analisados ${w} cluster(s).`:"",E?` Exibindo ${b} de ${v} workloads degradados.`:""),g?a().createElement(R.Q,{rows:6,columns:5}):null,g||0!==m.length?null:a().createElement(j.p,{title:"Nenhum workload degradado"},"Não encontramos apps com erro ou latência elevados nos clusters analisados."),!g&&m.length>0?a().createElement("div",{className:e.tableWrapper},a().createElement("div",{className:e.tableScroll},a().createElement("table",{className:e.table},a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,"Saúde"),a().createElement("th",null,"Workload"),a().createElement("th",null,a().createElement(A.C,{tip:$.F.namespace},"Namespace")),a().createElement("th",null,"Cluster"),a().createElement("th",null,"Erro"),a().createElement("th",null,"Latência p95"),a().createElement("th",null,"Ação"))),a().createElement("tbody",null,m.map(r=>a().createElement("tr",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){z(e,t,r[t])})}return e}({key:`${r.cluster}/${r.namespace}/${r.deployment}`,className:e.clickableRow},(0,C.H)(()=>t((0,u.al)(r.cluster,r.namespace,r.deployment,{timeRange:p}),{relative:"route"}),`Investigar workload ${r.deployment}`)),a().createElement("td",null,a().createElement(N.i,{health:r.health,compact:!0})),a().createElement("td",null,r.deployment),a().createElement("td",null,r.namespace),a().createElement("td",null,(0,x.N)(r.cluster)),a().createElement("td",null,r.health.errorRateLabel),a().createElement("td",null,r.health.latencyLabel),a().createElement("td",null,a().createElement(c.LinkButton,{size:"sm",variant:"secondary"},"Investigar")))))))):null)}const B=e=>({header:o.css`
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
  `,tableWrapper:o.css`
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    overflow: hidden;
  `,tableScroll:o.css`
    overflow-x: auto;
  `,table:o.css`
    width: 100%;
    min-width: 880px;
    border-collapse: collapse;

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
    }
  `,clickableRow:o.css`
    cursor: pointer;

    &:hover td {
      background: ${e.colors.action.hover};
    }
  `});const F=function(){return a().createElement(l.PluginPage,null,a().createElement(U,null))}},5265(e,t,r){r.d(t,{q:()=>n});function n(e){return 0===e?"Nenhum workload degradado detectado":`${e} workload${e>1?"s":""} com sinais de degradação`}r.d(t,["F",0,{namespace:"Namespace Kubernetes — agrupa workloads e recursos relacionados.",deployment:"Nome do workload implantado (deployment / k8s_deployment_name).",errorRate:"Percentual de respostas HTTP 5xx no período selecionado.",latencyP95:"95% das requisições respondem abaixo deste tempo (latência p95).",throughput:"Taxa de requisições por segundo (throughput).",alertFiring:"Regra de alerta Prometheus/Grafana em estado firing (condição ativa no momento)."}])},5192(e,t,r){function n(e,t){return{role:"button",tabIndex:0,onClick:e,onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),e())},"aria-label":t}}r.d(t,{H:()=>n})}}]);
//# sourceMappingURL=323.js.map?_cache=9071d2412eabd341e8f7