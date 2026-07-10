"use strict";(self.webpackChunkkubernetes_health_app=self.webpackChunkkubernetes_health_app||[]).push([[99],{3099(e,t,n){n.r(t),n.d(t,{ClusterCapacidadeTab:()=>C});var o=n(5959),r=n.n(o),a=n(6089),l=n(2007),s=n(6855),i=n(7883),c=n(3042),d=n(8448),p=n(8531),m=n(9490),u=n(7781);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}const y=["k8s_node_name","node","k8s_namespace_name","namespace","k8s_deployment_name","deployment","service","service_name"];function b(e,t,n,o,r){var a,l;if(e.name&&!e.name.startsWith("frame-"))return e.name;const s=e.fields.find(e=>e.type===u.FieldType.number),i=null!==(a=null==s?void 0:s.labels)&&void 0!==a?a:{},c=(null==r?void 0:r.length)?[...r,...y.filter(e=>!r.includes(e))]:y;for(const e of c){const t=i[e];if(t)return String(t)}const d=function(e,t){if("string"!=typeof e||!e)return;const n=(null==t?void 0:t.length)?t:y;for(const t of n){const n=e.match(new RegExp(`${t}="([^"]*)"`));if(null==n?void 0:n[1])return n[1]}const o=e.match(/="([^"]+)"/);return null==o?void 0:o[1]}(null==s||null===(l=s.config)||void 0===l?void 0:l.displayNameFromDS,r);if(d)return d;const p=Object.entries(i).filter(([e])=>"le"!==e&&!e.startsWith("__"));return p.length>0?p.map(([e,t])=>`${e}=${t}`).join(", "):n>1?`${o} ${t+1}`:o}function v(e,t="Atual",n){return e.map((o,r)=>{const a=b(o,r,e.length,t,n);return(0,u.createDataFrame)({refId:o.refId,name:a,meta:o.meta,fields:o.fields.map(e=>e.type!==u.FieldType.number?e:h(g({},e),{config:h(g({},e.config),{displayName:a,displayNameFromDS:void 0})}))})})}function E({title:e,frames:t,from:n,to:a,height:s=260,unit:i,legendLabelKey:c}){var d;const f=(0,l.useStyles2)(w),g=(0,o.useRef)(null),[h,y]=(0,o.useState)(640);(0,o.useLayoutEffect)(()=>{const e=g.current;if(!e)return;const t=new ResizeObserver(e=>{const t=e[0];t&&y(Math.max(Math.floor(t.contentRect.width),280))});return t.observe(e),()=>t.disconnect()},[]);const b=(0,o.useMemo)(()=>c?Array.isArray(c)?c:[c]:void 0,[c]),E=(0,o.useMemo)(()=>function(e,t,n,o){const r=(0,u.dateTime)(t),a=(0,u.dateTime)(n);return{state:u.LoadingState.Done,series:v(e,"Período atual",o),timeRange:{from:r,to:a,raw:{from:r,to:a}}}}(t,n,a,b),[t,n,b,a]),x=c?E.series.length>0:E.series.length>1,$=(0,o.useMemo)(()=>({defaults:{unit:i,custom:{drawStyle:"line",lineWidth:2,fillOpacity:8,showPoints:"never",spanNulls:!0}},overrides:[]}),[i]);if(0===E.series.length)return null;const S=s+(x?56:0);return r().createElement("div",{ref:g,className:f.container},r().createElement(m.K,{title:"Erro ao renderizar gráfico"},r().createElement(p.PanelRenderer,{pluginId:"timeseries",title:e,width:h,height:S,data:E,fieldConfig:$,timeZone:null===(d=p.config.bootData.user)||void 0===d?void 0:d.timezone,options:{legend:{calcs:[],displayMode:"list",placement:"bottom",showLegend:x},tooltip:{mode:x?"multi":"single",sort:"desc"}}})))}const w=e=>({container:a.css`
    width: 100%;
    min-height: 260px;
  `});function x({title:e,description:t,frames:n,from:o,to:a,unit:s,wide:i=!1,legendLabelKey:c}){const d=(0,l.useStyles2)($);return r().createElement("section",{className:i?d.panelWide:d.panel},r().createElement("header",{className:d.header},r().createElement("h4",null,e),t?r().createElement("p",null,t):null),r().createElement("div",{className:d.chartHost},0===n.length?r().createElement("p",{className:d.empty},"Sem dados no período selecionado."):r().createElement(E,{title:e,frames:n,from:o,to:a,unit:s,legendLabelKey:c})))}const $=e=>({panel:a.css`
    display: flex;
    flex-direction: column;
    min-height: 320px;
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
    overflow: hidden;
  `,panelWide:a.css`
    display: flex;
    flex-direction: column;
    min-height: 360px;
    grid-column: 1 / -1;
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
    overflow: hidden;
  `,header:a.css`
    padding: ${e.spacing(1.5,1.5,1)};
    border-bottom: 1px solid ${e.colors.border.weak};

    h4 {
      margin: 0 0 ${e.spacing(.25)};
      font-size: ${e.typography.h6.fontSize};
      font-weight: ${e.typography.fontWeightMedium};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
    }
  `,chartHost:a.css`
    flex: 1;
    width: 100%;
    min-height: 280px;
    padding: ${e.spacing(.5,.5,1)};
  `,empty:a.css`
    margin: ${e.spacing(2)};
    color: ${e.colors.text.secondary};
  `});var S=n(7922),k=n(4031),N=n(5611);function O(e,t,n,o,r,a,l){try{var s=e[a](l),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(o,r)}function P(...e){return e.flat()}function F(e){return"app"===e?"App":"Deployment"}function C({context:e,refreshKey:t,onNamespaceFilterChange:n,onNodepoolFilterChange:a}){var p,m;const u=(0,l.useStyles2)(j),f=(0,s.U)(),[g,h]=(0,o.useState)(),[y,b]=(0,o.useState)(!1),[v,E]=(0,o.useState)();(0,o.useEffect)(()=>{if(!f.metricsDatasourceUid)return;let t=!1;var n;return(n=function*(){b(!0),E(void 0);try{const n=yield(0,i.Qj)(e,f);t||h(n)}catch(e){console.error(e),t||(E("Não foi possível carregar métricas de capacidade do cluster."),h(void 0))}finally{t||b(!1)}},function(){var e=this,t=arguments;return new Promise(function(o,r){var a=n.apply(e,t);function l(e){O(a,o,r,l,s,"next",e)}function s(e){O(a,o,r,l,s,"throw",e)}l(void 0)})})(),()=>{t=!0}},[e,t,f]);const w=(0,o.useMemo)(()=>{var e;const t=[{label:"Todos os namespaces",value:""}];for(const n of null!==(e=null==g?void 0:g.namespaces)&&void 0!==e?e:[])t.push({label:n,value:n});return t},[null==g?void 0:g.namespaces]),$=(0,o.useMemo)(()=>{var e;const t=[{label:"Todos os nodepools",value:""}];for(const n of null!==(e=null==g?void 0:g.nodepoolDiscovery.nodepools)&&void 0!==e?e:[])t.push({label:n,value:n});return t},[null==g?void 0:g.nodepoolDiscovery.nodepools]),C=!(null==g?void 0:g.nodepoolDiscovery.available),U=Boolean(e.nodepoolFilter&&C);return r().createElement("div",{"data-testid":N.b.cluster.tabs.capacidade},r().createElement("div",{className:u.toolbar},r().createElement("p",{className:u.description},"Tendências de CPU, memória e disco, pods por fase, uptime dos nodes e recursos agrupados por app. Combine filtros de namespace e nodepool para visões granulares."),r().createElement("div",{className:u.filters},n?r().createElement(l.Field,{label:"Namespace"},r().createElement(l.Select,{width:28,options:w,value:null!==(p=e.namespaceFilter)&&void 0!==p?p:"",onChange:e=>n(e.value||void 0),"data-testid":N.b.cluster.namespaceFilterSelect})):null,a?r().createElement(l.Field,{label:"Nodepool"},r().createElement(l.Select,{width:28,options:$,value:null!==(m=e.nodepoolFilter)&&void 0!==m?m:"",onChange:e=>a(e.value||void 0),disabled:C,"data-testid":N.b.cluster.nodepoolFilterSelect})):null)),C?r().createElement(l.Alert,{title:"Filtro por nodepool indisponível",severity:"info"},"Não encontramos label de nodepool nas métricas deste cluster. Exporte o nome do nodepool nos nodes via OTel (ex.: ",r().createElement("code",null,"k8s_nodepool_name"),") ou configure o label em Configurações do plugin."):null,U?r().createElement(l.Alert,{title:"Filtro de nodepool ignorado",severity:"warning"},"Um nodepool foi selecionado na URL, mas o label ainda não está disponível no Mimir."):null,v?r().createElement(l.Alert,{title:"Erro",severity:"error"},v):null,y?r().createElement(l.LoadingPlaceholder,{text:"Carregando capacidade..."}):null,!y&&g?r().createElement(r().Fragment,null,r().createElement("div",{className:u.chartGrid},r().createElement(x,{title:"CPU",description:"Uso vs capacidade alocável no escopo selecionado",frames:P(g.cpuUsageFrames,g.cpuAvailableFrames),from:g.from,to:g.to,unit:"short"}),r().createElement(x,{title:"Memória",description:"Working set vs capacidade alocável no escopo selecionado",frames:P(g.memoryUsageFrames,g.memoryAvailableFrames),from:g.from,to:g.to,unit:"bytes"}),r().createElement(x,{title:"Disco por node",description:e.nodepoolFilter?"Consumo de filesystem nos nodes do nodepool selecionado":"Consumo de filesystem por node",frames:g.diskUsageFrames,from:g.from,to:g.to,unit:"bytes",wide:!0,legendLabelKey:["k8s_node_name","node"]})),r().createElement("div",{className:u.summaryGrid},r().createElement(S.sh,{title:"Pods por fase"},0===g.podPhaseCounts.length?r().createElement(k.p,{title:"Sem pods no filtro atual"},"Nenhum pod encontrado para os filtros selecionados."):r().createElement("div",{className:u.phaseCards},g.podPhaseCounts.map(e=>{return r().createElement("div",{key:e.phase,className:u.phaseCard},r().createElement(l.Badge,{text:e.phase,color:(t=e.phase,"Running"===t?"green":"Pending"===t?"orange":"Failed"===t?"red":"Succeeded"===t?"blue":"darkgrey")}),r().createElement("strong",null,e.count));var t}))),r().createElement(S.sh,{title:"Uptime dos nodes"},0===g.nodeUptimeRows.length?r().createElement(k.p,{title:"Uptime indisponível"},"A métrica de uptime não foi encontrada para o escopo selecionado."):r().createElement(S.s,null,r().createElement(S.LO,{testId:N.b.cluster.nodeUptimeTable},r().createElement("thead",null,r().createElement("tr",null,r().createElement("th",null,"Node"),r().createElement("th",null,"Uptime"))),r().createElement("tbody",null,g.nodeUptimeRows.map(e=>r().createElement("tr",{key:e.nodeName},r().createElement("td",null,e.nodeName),r().createElement("td",null,(0,d.Y0)(e.uptimeSeconds))))))))),r().createElement(S.sh,{title:`Recursos por ${F(g.appGroupingSource)}`},r().createElement("p",{className:u.sectionHint},"deployment"===g.appGroupingSource?"Label app indisponível neste cluster — agrupando por deployment como proxy.":"Requests e pods pending/running agrupados pela label app."),0===g.appResources.length?r().createElement(k.p,{title:"Sem recursos no filtro atual"},"Nenhum request ou pod encontrado para os filtros selecionados."):r().createElement(S.s,null,r().createElement(S.LO,{testId:N.b.cluster.appResourceTable},r().createElement("thead",null,r().createElement("tr",null,r().createElement("th",null,F(g.appGroupingSource)),r().createElement("th",null,"CPU request"),r().createElement("th",null,"Memória request"),r().createElement("th",null,"Pending"),r().createElement("th",null,"Running"))),r().createElement("tbody",null,g.appResources.map(e=>r().createElement("tr",{key:e.app},r().createElement("td",null,e.app),r().createElement("td",null,(0,c.wF)(e.cpuRequestCores)),r().createElement("td",null,(0,c.Kk)(e.memoryRequestBytes)),r().createElement("td",null,e.pendingPods),r().createElement("td",null,e.runningPods))))))),g.diskUsageFrames.length>0?r().createElement("p",{className:u.footnote},"Disco agregado atual: ",(0,c.Kk)(g.diskUsageFrames.reduce((e,t)=>{var n;const o=t.fields.find(e=>"number"===e.type);if(!(null==o||null===(n=o.values)||void 0===n?void 0:n.length))return e;const r=o.values[o.values.length-1];return e+("number"==typeof r?r:Number(r)||0)},0))," em uso nos nodes monitorados."):null):null)}const j=e=>({toolbar:a.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${e.spacing(2)};
    flex-wrap: wrap;
    margin-bottom: ${e.spacing(2)};
  `,description:a.css`
    margin: 0;
    color: ${e.colors.text.secondary};
    max-width: 720px;
  `,filters:a.css`
    display: flex;
    gap: ${e.spacing(2)};
    flex-wrap: wrap;
  `,chartGrid:a.css`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(2)};

    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
    }
  `,summaryGrid:a.css`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(2)};

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,phaseCards:a.css`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.spacing(1.5)};
    padding: ${e.spacing(1,0)};
  `,phaseCard:a.css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${e.spacing(.75)};
    min-width: 120px;
    padding: ${e.spacing(1.5)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};

    strong {
      font-size: ${e.typography.h4.fontSize};
    }
  `,footnote:a.css`
    margin: ${e.spacing(2,0,0)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,sectionHint:a.css`
    margin: 0 0 ${e.spacing(1.5)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `})}}]);
//# sourceMappingURL=99.js.map?_cache=5231d73f57739228c0b0