"use strict";(self.webpackChunktroubleshooting_app=self.webpackChunktroubleshooting_app||[]).push([[817],{377(e,t,r){r.d(t,{Z:()=>l});var n=r(5959),a=r.n(n),o=r(6089),i=r(2007),s=r(5611);function l({service:e,isFavorite:t,onToggle:r,testId:n,compact:o=!1}){const l=(0,i.useStyles2)(c);return a().createElement("button",{type:"button",className:o?l.compactButton:l.button,"aria-label":t?`Remover ${e.deployment} dos favoritos`:`Favoritar ${e.deployment}`,"data-testid":null!=n?n:s.b.catalog.favoriteButton,onClick:e=>{e.stopPropagation(),r()}},a().createElement(i.Icon,{name:"star",className:t?l.starActive:l.starInactive}),o?null:t?"Favorito":"Favoritar")}const c=e=>({button:o.css`
    display: inline-flex;
    align-items: center;
    gap: ${e.spacing(.5)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};
    color: ${e.colors.text.primary};
    cursor: pointer;
    padding: ${e.spacing(.75,1.25)};
    font: inherit;

    &:hover {
      background: ${e.colors.action.hover};
      color: ${e.colors.warning.main};
    }
  `,compactButton:o.css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    color: ${e.colors.text.secondary};
    cursor: pointer;
    padding: ${e.spacing(.25)};
    font: inherit;

    &:hover {
      color: ${e.colors.warning.main};
    }
  `,starActive:o.css`
    color: ${e.colors.warning.main};
  `,starInactive:o.css`
    opacity: 0.45;
  `})},4446(e,t,r){r.d(t,{C:()=>s});var n=r(5959),a=r.n(n),o=r(6089),i=r(2007);function s({tip:e,children:t}){const r=(0,i.useStyles2)(l);return a().createElement(i.Tooltip,{content:e},a().createElement("span",{className:r.term},t))}const l=e=>({term:o.css`
    border-bottom: 1px dashed ${e.colors.text.secondary};
    cursor: help;
  `})},5615(e,t,r){r.d(t,{K:()=>f});var n=r(5959),a=r.n(n),o=r(6089),i=r(2007),s=r(7735),l=r(3344),c=r(2361);function u({log:e,tracesDatasourceUid:t,onDismiss:r,onOpenTrace:n}){const o=(0,i.useStyles2)(d);if(!e)return null;const u=(0,c.PK)(e),m=(0,l.bN)((0,l.L8)(e.level,e.message));return a().createElement(i.Drawer,{title:"Detalhes do log",subtitle:(0,s.Kg)(e.timestamp),onClose:r,size:"md"},a().createElement("div",{className:o.section},a().createElement("h4",null,"Nível"),a().createElement("p",null,m)),a().createElement("div",{className:o.section},a().createElement("h4",null,"Mensagem"),a().createElement("pre",{className:o.message},e.message)),u.length>0?a().createElement("div",{className:o.section},a().createElement("h4",null,"Atributos"),a().createElement("table",{className:o.table},a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,"Campo"),a().createElement("th",null,"Valor"))),a().createElement("tbody",null,u.map(e=>a().createElement("tr",{key:e.key},a().createElement("td",null,e.key),a().createElement("td",null,e.value)))))):a().createElement("p",{className:o.empty},"Nenhum atributo estruturado além da mensagem."),e.traceId&&t?a().createElement("div",{className:o.actions},a().createElement(i.Button,{icon:"gf-traces",onClick:()=>{null==n||n(e.traceId),r()}},"Abrir trace")):null)}const d=e=>({section:o.css`
    margin-bottom: ${e.spacing(2)};

    h4 {
      margin: 0 0 ${e.spacing(.75)};
      font-size: ${e.typography.body.fontSize};
      font-weight: ${e.typography.fontWeightMedium};
    }

    p {
      margin: 0;
      color: ${e.colors.text.primary};
    }
  `,message:o.css`
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
    line-height: 1.45;
    padding: ${e.spacing(1)};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};
    border: 1px solid ${e.colors.border.weak};
  `,table:o.css`
    width: 100%;
    border-collapse: collapse;
    font-size: ${e.typography.bodySmall.fontSize};

    th,
    td {
      text-align: left;
      padding: ${e.spacing(.75,1)};
      border-bottom: 1px solid ${e.colors.border.weak};
      vertical-align: top;
    }

    th {
      color: ${e.colors.text.secondary};
      font-weight: ${e.typography.fontWeightMedium};
      width: 34%;
    }

    td {
      font-family: ${e.typography.fontFamilyMonospace};
      word-break: break-word;
    }
  `,empty:o.css`
    margin: 0;
    color: ${e.colors.text.secondary};
  `,actions:o.css`
    display: flex;
    justify-content: flex-end;
    margin-top: ${e.spacing(1)};
  `});var m=r(2429),p=r(5611);function f({logs:e,tracesDatasourceUid:t,timeRange:r="1h",title:o="Logs de erro recentes",description:c="Erros e exceções correlacionados ao serviço selecionado",emptyMessage:d="Nenhum log encontrado no período.",maxListHeight:f=520,loading:v=!1,error:y}){const h=(0,i.useStyles2)(g(f)),[b,E]=(0,n.useState)(),[$,w]=(0,n.useState)();return a().createElement("section",{className:h.panel,"data-testid":p.b.investigate.errorLogs},a().createElement("header",{className:h.header},a().createElement("h3",null,o),a().createElement("p",null,c)),y?a().createElement("div",{className:h.feedback},a().createElement(i.Alert,{title:"Logs",severity:"warning"},y)):null,v?a().createElement("div",{className:h.feedback},a().createElement(i.LoadingPlaceholder,{text:"Carregando logs..."})):null,v||y||0!==e.length?null:a().createElement("p",{className:h.empty},d),!v&&e.length>0?a().createElement("div",{className:h.list},e.map((e,r)=>{const n=(0,l.L8)(e.level,e.message),o=(0,l.bN)(n);return a().createElement("article",{key:`${e.timestamp}-${r}`,className:h.row,"data-level":n,role:"button",tabIndex:0,onClick:()=>E(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),E(e))}},a().createElement("time",{className:h.timestamp},(0,s.Kg)(e.timestamp)),a().createElement(i.Badge,{text:o.toUpperCase(),color:(0,s.aw)(n),className:h.levelBadge}),a().createElement("pre",{className:h.message},e.message),e.traceId&&t?a().createElement(i.Button,{size:"sm",variant:"secondary",icon:"eye",className:h.traceLink,onClick:t=>{t.stopPropagation(),w(e.traceId)}},"Trace"):a().createElement("span",{className:h.tracePlaceholder}))})):null,a().createElement(u,{log:b,tracesDatasourceUid:t,onDismiss:()=>E(void 0),onOpenTrace:w}),a().createElement(m.m,{traceId:$,tracesDatasourceUid:t,timeRange:r,onDismiss:()=>w(void 0)}))}const g=e=>t=>({panel:o.css`
    border: 1px solid ${t.colors.border.weak};
    border-radius: ${t.shape.radius.default};
    background: ${t.colors.background.primary};
    overflow: hidden;
  `,header:o.css`
    padding: ${t.spacing(2,2,1.5)};
    border-bottom: 1px solid ${t.colors.border.weak};

    h3 {
      margin: 0 0 ${t.spacing(.5)};
      font-size: ${t.typography.h5.fontSize};
    }

    p {
      margin: 0;
      color: ${t.colors.text.secondary};
      font-size: ${t.typography.bodySmall.fontSize};
    }
  `,empty:o.css`
    color: ${t.colors.text.secondary};
    margin: 0;
    padding: ${t.spacing(2)};
  `,feedback:o.css`
    padding: ${t.spacing(2)};
  `,list:o.css`
    max-height: ${"number"==typeof e?`${e}px`:e};
    overflow: auto;
  `,row:o.css`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${t.spacing(.75,1)};
    min-width: 100%;
    width: max-content;
    padding: ${t.spacing(.5,1.25)};
    border-bottom: 1px solid ${t.colors.border.weak};
    border-left: 3px solid ${t.colors.border.weak};
    cursor: pointer;

    &:hover {
      background: ${t.colors.action.hover};
    }

    &:last-child {
      border-bottom: none;
    }

    &[data-level='unknown'] {
      border-left-color: ${t.colors.text.secondary};
    }

    &[data-level*='error'],
    &[data-level*='fatal'],
    &[data-level*='crit'] {
      border-left-color: ${t.colors.error.main};
      background: ${t.colors.error.transparent};
    }

    &[data-level*='warn'] {
      border-left-color: ${t.colors.warning.main};
    }
  `,timestamp:o.css`
    flex: 0 0 132px;
    color: ${t.colors.text.secondary};
    font-family: ${t.typography.fontFamilyMonospace};
    font-size: 11px;
    line-height: 1.2;
    white-space: nowrap;
  `,levelBadge:o.css`
    flex: 0 0 auto;
  `,message:o.css`
    flex: 0 0 auto;
    margin: 0;
    white-space: nowrap;
    font-family: ${t.typography.fontFamilyMonospace};
    font-size: 11px;
    line-height: 1.2;
    color: ${t.colors.text.primary};
  `,traceLink:o.css`
    flex: 0 0 auto;
    margin-left: ${t.spacing(.5)};
  `,tracePlaceholder:o.css`
    flex: 0 0 72px;
  `})},2537(e,t,r){r.d(t,{o:()=>u});var n=r(5959),a=r.n(n),o=r(6089),i=r(2007),s=r(9264),l=r(5611),c=r(2429);function u({traces:e,tracesDatasourceUid:t,timeRange:r="1h",onSelectTrace:o,error:u,slowTraceThresholdMs:m=500}){const p=(0,i.useStyles2)(d),[f,g]=(0,n.useState)();return a().createElement("section",{className:p.panel,"data-testid":l.b.investigate.slowTraces},a().createElement("header",{className:p.header},a().createElement("h3",null,"Traces mais lentos"),a().createElement("p",null,"Requests com duração acima de ",(0,s.nA)(m)," — clique para ver spans e conexões")),u?a().createElement("div",{className:p.feedback},a().createElement(i.Alert,{title:"Traces",severity:"warning"},u)):null,u||0!==e.length?null:a().createElement("p",{className:p.empty},"Nenhum trace lento encontrado no período."),!u&&e.length>0?a().createElement("table",{className:p.table},a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,"Trace ID"),a().createElement("th",null,"Serviço"),a().createElement("th",null,"Duração"),a().createElement("th",null))),a().createElement("tbody",null,e.map(e=>a().createElement("tr",{key:e.traceId,className:t?p.clickableRow:void 0,onClick:()=>{var r;t&&(r=e.traceId,o?o(r):g(r))}},a().createElement("td",{className:p.mono},e.traceId),a().createElement("td",null,e.service||"—"),a().createElement("td",null,e.durationMs," ms"),a().createElement("td",null,t?a().createElement("span",{className:p.openHint},a().createElement(i.Icon,{name:"eye"})," Ver trace"):null))))):null,o?null:a().createElement(c.m,{traceId:f,tracesDatasourceUid:t,timeRange:r,onDismiss:()=>g(void 0)}))}const d=e=>({panel:o.css`
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
    overflow: hidden;
  `,header:o.css`
    padding: ${e.spacing(2,2,1.5)};
    border-bottom: 1px solid ${e.colors.border.weak};

    h3 {
      margin: 0 0 ${e.spacing(.5)};
      font-size: ${e.typography.h5.fontSize};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
    }
  `,empty:o.css`
    color: ${e.colors.text.secondary};
    margin: 0;
    padding: ${e.spacing(2)};
  `,feedback:o.css`
    padding: ${e.spacing(2)};
  `,table:o.css`
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      text-align: left;
      padding: ${e.spacing(1.25,2)};
      border-bottom: 1px solid ${e.colors.border.weak};
    }

    th {
      color: ${e.colors.text.secondary};
      font-weight: ${e.typography.fontWeightMedium};
      font-size: ${e.typography.bodySmall.fontSize};
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    tbody tr:last-child td {
      border-bottom: none;
    }
  `,clickableRow:o.css`
    cursor: pointer;

    &:hover td {
      background: ${e.colors.action.hover};
    }
  `,mono:o.css`
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
  `,openHint:o.css`
    display: inline-flex;
    align-items: center;
    gap: ${e.spacing(.5)};
    color: ${e.colors.text.link};
    font-size: ${e.typography.bodySmall.fontSize};
  `})},8565(e,t,r){r.d(t,{R:()=>$});var n=r(5959),a=r.n(n),o=r(6089),i=r(2007),s=r(8531),l=r(9490),c=r(7781);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){u(e,t,r[t])})}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}const p=["server","client","span_name","job","service","service_name","k8s_deployment_name","deployment","namespace"],f="user";function g(e){return void 0===e||""===e?f:String(e)}function v(e,t,r,n,a){var o,i;if(e.name&&!e.name.startsWith("frame-"))return e.name;const s=e.fields.find(e=>e.type===c.FieldType.number),l=null!==(o=null==s?void 0:s.labels)&&void 0!==o?o:{},u=(null==a?void 0:a.length)?[...a,...p.filter(e=>!a.includes(e))]:p;for(const e of u){const t=l[e];if("client"===e&&(null==a?void 0:a.includes("client")))return g(void 0===t?void 0:String(t));if(t)return String(t)}const d=function(e,t){if("string"!=typeof e||!e)return;const r=(null==t?void 0:t.length)?t:p;for(const t of r){const r=e.match(new RegExp(`${t}="([^"]*)"`));if(r){if("client"===t)return g(r[1]);if(r[1])return r[1]}}const n=e.match(/="([^"]+)"/);return null==n?void 0:n[1]}(null==s||null===(i=s.config)||void 0===i?void 0:i.displayNameFromDS,a);if(d)return d;if(null==a?void 0:a.includes("client"))return f;const m=Object.entries(l).filter(([e])=>"le"!==e&&!e.startsWith("__"));return m.length>0?m.map(([e,t])=>`${e}=${t}`).join(", "):r>1?`${n} ${t+1}`:n}function y(e,t="Atual",r){return e.map((n,a)=>{const o=v(n,a,e.length,t,r);return(0,c.createDataFrame)({refId:n.refId,name:o,meta:n.meta,fields:n.fields.map(e=>e.type!==c.FieldType.number?e:m(d({},e),{config:m(d({},e.config),{displayName:o,displayNameFromDS:void 0})}))})})}function h(e,t,r=""){return(0,c.createDataFrame)({refId:e.refId,name:e.name?`${e.name}${r}`:e.name,meta:e.meta,fields:e.fields.map(e=>{var n,a;return e.type!==c.FieldType.time?r&&e.type===c.FieldType.number&&void 0===e.config.displayNameFromDS?m(d({},e),{config:m(d({},e.config),{displayName:`${null!==(n=null!==(a=e.config.displayName)&&void 0!==a?a:e.name)&&void 0!==n?n:"Value"}${r}`})}):e:m(d({},e),{values:e.values.map(e=>{const r=function(e){if("number"==typeof e&&Number.isFinite(e))return e;if("string"==typeof e){const t=Date.parse(e);if(!Number.isNaN(t))return t}if(e&&"object"==typeof e&&"valueOf"in e){const t=Number(e.valueOf());if(!Number.isNaN(t))return t}}(e);return void 0===r?e:r+t})})})})}function b({title:e,frames:t,from:r,to:o,compareFrames:u,compareFrom:d,height:m=260,unit:p,legendLabelKey:f}){var g;const v=(0,i.useStyles2)(E),b=(0,n.useRef)(null),[$,w]=(0,n.useState)(640);(0,n.useLayoutEffect)(()=>{const e=b.current;if(!e)return;const t=new ResizeObserver(e=>{const t=e[0];t&&w(Math.max(Math.floor(t.contentRect.width),280))});return t.observe(e),()=>t.disconnect()},[]);const S=(0,n.useMemo)(()=>f?Array.isArray(f)?f:[f]:void 0,[f]),x=(0,n.useMemo)(()=>function(e,t,r,n,a,o){const i=(0,c.dateTime)(t),s=(0,c.dateTime)(r),l=y(e,"Período atual",o);if((null==n?void 0:n.length)&&void 0!==a){const e=t-a;l.push(...y(n,"Período anterior",o).map(t=>h(t,e," (anterior)")))}return{state:c.LoadingState.Done,series:l,timeRange:{from:i,to:s,raw:{from:i,to:s}}}}(t,r,o,u,d,S),[u,d,t,r,S,o]),k=f?x.series.length>0:x.series.length>1,P=(0,n.useMemo)(()=>({defaults:{unit:p,custom:{drawStyle:"line",lineWidth:2,fillOpacity:8,showPoints:"never",spanNulls:!0}},overrides:[]}),[p]);if(0===x.series.length)return null;const N=m+(k?56:0);return a().createElement("div",{ref:b,className:v.container},a().createElement(l.K,{title:"Erro ao renderizar gráfico"},a().createElement(s.PanelRenderer,{pluginId:"timeseries",title:e,width:$,height:N,data:x,fieldConfig:P,timeZone:null===(g=s.config.bootData.user)||void 0===g?void 0:g.timezone,options:{legend:{calcs:[],displayMode:"list",placement:"bottom",showLegend:k},tooltip:{mode:k?"multi":"single",sort:"desc"}}})))}const E=e=>({container:o.css`
    width: 100%;
    min-height: 260px;
  `});function $({title:e,description:t,frames:r,from:n,to:o,compareFrames:s,compareFrom:l,unit:c,wide:u=!1,legendLabelKey:d}){const m=(0,i.useStyles2)(w);return a().createElement("section",{className:u?m.panelWide:m.panel},a().createElement("header",{className:m.header},a().createElement("h4",null,e),t?a().createElement("p",null,t):null),a().createElement("div",{className:m.chartHost},0===r.length?a().createElement("p",{className:m.empty},"Sem dados no período selecionado."):a().createElement(b,{title:e,frames:r,from:n,to:o,compareFrames:s,compareFrom:l,unit:c,legendLabelKey:d})))}const w=e=>({panel:o.css`
    display: flex;
    flex-direction: column;
    min-height: 320px;
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
    overflow: hidden;
  `,panelWide:o.css`
    display: flex;
    flex-direction: column;
    min-height: 360px;
    grid-column: 1 / -1;
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
    overflow: hidden;
  `,description:o.css`
    margin: 0;
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,header:o.css`
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
  `,chartHost:o.css`
    flex: 1;
    width: 100%;
    min-height: 280px;
    padding: ${e.spacing(.5,.5,1)};
  `,empty:o.css`
    margin: ${e.spacing(2)};
    color: ${e.colors.text.secondary};
  `})},2429(e,t,r){r.d(t,{m:()=>E});var n=r(5959),a=r.n(n),o=r(6089),i=r(8531),s=r(2007),l=r(980),c=r(2488),u=r(7781),d=r(4911),m=r(8448);function p(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function f(e){const t=(0,u.dateTime)(e.from),r=(0,u.dateTime)(e.to);return{series:[],state:u.LoadingState.Done,timeRange:{from:t,to:r,raw:{from:t,to:r}}}}function g(e,t,r){return(n=function*(){const n=(0,m.Zv)(r);try{const r=yield(0,i.getBackendSrv)().post("/api/ds/query",{from:String(n.from),to:String(n.to),queries:[{refId:"A",datasource:{type:"tempo",uid:e},queryType:"traceId",query:t}]}),a=(0,d.T1)(r);if(a)return{data:f(n),error:a};const o=(0,d.aB)(r);return 0===o.length?{data:f(n),error:"Trace não encontrado no intervalo selecionado. Tente ampliar o intervalo de tempo."}:{data:{series:o,state:u.LoadingState.Done,timeRange:{from:(0,u.dateTime)(n.from),to:(0,u.dateTime)(n.to),raw:{from:(0,u.dateTime)(n.from),to:(0,u.dateTime)(n.to)}}}}}catch(e){var a,o;const t=e instanceof Error?e.message:"object"==typeof e&&null!==e&&"data"in e?String(null!==(a=null===(o=e.data)||void 0===o?void 0:o.message)&&void 0!==a?a:"Falha ao carregar trace"):"Falha ao carregar trace";return{data:f(n),error:t}}},function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(e){p(o,r,a,i,s,"next",e)}function s(e){p(o,r,a,i,s,"throw",e)}i(void 0)})})();var n}var v=r(9490);function y(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function h({traceId:e,tracesDatasourceUid:t,timeRange:r}){var o;const l=(0,s.useStyles2)(b),c=(0,n.useRef)(null),[u,d]=(0,n.useState)({width:960,height:560}),[m,p]=(0,n.useState)(!1),[f,h]=(0,n.useState)(),[E,$]=(0,n.useState)(),[w,S]=(0,n.useState)(),x=(0,n.useMemo)(()=>({spanFilters:{criticalPathOnly:!1,matchesOnly:!1,serviceNameOperator:">",spanNameOperator:">",serviceName:"",spanName:""},focusedSpanId:w,createFocusSpanLink:(e,t)=>({href:"",title:"Focar span",target:"_self",onClick:e=>{e.preventDefault(),S(e=>e===t?void 0:t)}}),createSpanLink:()=>[]}),[w]);(0,n.useLayoutEffect)(()=>{const e=c.current;if(!e)return;const t=new ResizeObserver(e=>{const t=e[0];t&&d({width:Math.max(Math.floor(t.contentRect.width),320),height:Math.max(Math.floor(t.contentRect.height),420)})});return t.observe(e),()=>t.disconnect()},[]),(0,n.useEffect)(()=>{S(void 0)},[e]),(0,n.useEffect)(()=>{let n=!1;var a;return(a=function*(){p(!0),h(void 0);try{const a=yield g(t,e,r);n||($(a.data),h(a.error))}catch(e){console.error(e),n||(h("Não foi possível carregar o trace."),$(void 0))}finally{n||p(!1)}},function(){var e=this,t=arguments;return new Promise(function(r,n){var o=a.apply(e,t);function i(e){y(o,r,n,i,s,"next",e)}function s(e){y(o,r,n,i,s,"throw",e)}i(void 0)})})(),()=>{n=!0}},[e,r,t]);return a().createElement("div",{ref:c,className:l.container,"data-testid":"trace-viewer-panel",onClickCapture:e=>{var t;const r=e.target.closest("a");if(!r)return;(null!==(t=r.getAttribute("href"))&&void 0!==t?t:"").includes("/explore")&&(e.preventDefault(),e.stopPropagation())}},m?a().createElement(s.LoadingPlaceholder,{text:"Carregando trace..."}):null,f?a().createElement(s.Alert,{title:"Trace indisponível",severity:"warning"},f):null,m||f||(null==E?void 0:E.series.length)?null:a().createElement(s.Alert,{title:"Trace indisponível",severity:"info"},"Nenhum dado retornado para este trace."),m||f||!(null==E?void 0:E.series.length)?null:a().createElement(v.K,{title:"Erro ao renderizar trace"},a().createElement(i.PanelRenderer,{pluginId:"traces",title:"",width:u.width,height:u.height,data:E,timeZone:null===(o=i.config.bootData.user)||void 0===o?void 0:o.timezone,options:x})))}const b=e=>({container:o.css`
    width: 100%;
    min-height: 520px;
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    overflow: hidden;
    background: ${e.colors.background.primary};
  `});function E({traceId:e,tracesDatasourceUid:t,timeRange:r,onDismiss:o}){const u=(0,s.useStyles2)($),{value:d}=(0,i.useAppPluginInstalled)(c.h7),m=(0,n.useMemo)(()=>{if(e&&t)return d?(0,l.y)(t,e,r):(0,l.ie)(t,e,r)},[e,t,r,d]);return e&&t?a().createElement(s.Drawer,{title:`Trace ${e}`,subtitle:"Visualização de spans via Tempo (sem iframe — abra no Traces Drilldown para análise completa)",onClose:o,size:"lg"},a().createElement("div",{className:u.toolbar},a().createElement(s.LinkButton,{variant:"secondary",icon:"external-link-alt",href:m,target:"_blank",rel:"noreferrer"},d?"Abrir no Traces Drilldown":"Abrir no Explore")),a().createElement(h,{traceId:e,tracesDatasourceUid:t,timeRange:r})):null}const $=e=>({toolbar:o.css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: ${e.spacing(1)};
  `})},7584(e,t,r){r.d(t,{a:()=>c});var n=r(5959),a=r(1610),o=r(721);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){i(e,t,r[t])})}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function c(){const[e,t]=(0,n.useState)(()=>(0,o.nC)());return{recentItems:e,recordView:(0,n.useCallback)(e=>{const r=(0,a.xW)(e),n=(new Date).toISOString();t(t=>{const i=t.filter(e=>(0,a.xW)(e)!==r),c=[l(s({},e),{viewedAt:n}),...i].slice(0,8);return(0,o.$2)(c),c})},[])}}},7632(e,t,r){r.d(t,{o:()=>i});var n=r(5959),a=r(1610),o=r(721);function i(){const[e,t]=(0,n.useState)(()=>(0,o.JR)()),r=(0,n.useCallback)(t=>e.includes((0,a.xW)(t)),[e]),i=(0,n.useCallback)(e=>{const r=(0,a.xW)(e);t(e=>{const t=e.includes(r)?e.filter(e=>e!==r):[r,...e];return(0,o.BT)(t),t})},[]);return{favoriteKeys:e,isFavorite:r,toggleFavorite:i}}},7817(e,t,r){r.r(t),r.d(t,{default:()=>tt});var n=r(5959),a=r.n(n),o=r(8531),i=r(6089),s=r(2007),l=r(1159),c=r(9348),u=r(9962),d=r(6855),m=r(1057);function p(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function f(){const e=(0,d.U)(),[t,r]=(0,n.useState)(!1),[a,o]=(0,n.useState)(),[i,s]=(0,n.useState)(),[l,c]=(0,n.useState)(),u=(0,m.nO)(e),f=(0,n.useCallback)(t=>{return(n=function*(){if(t.deployment.trim()){r(!0),o(void 0),c(t);try{const r=yield(0,m.SU)(t,e);s(r)}catch(e){console.error(e),o(e instanceof Error?e.message:"Não foi possível executar a investigação. Verifique os datasources configurados."),s(void 0)}finally{r(!1)}}else o("Selecione um deployment para iniciar a investigação.")},function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(e){p(o,r,a,i,s,"next",e)}function s(e){p(o,r,a,i,s,"throw",e)}i(void 0)})})();var n},[e]);return{settings:e,loading:t,error:a,result:i,context:l,configWarning:u,investigate:f}}var g=r(4987);function v(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function b(e,t=!0){const r=(0,d.U)(),[a,o]=(0,n.useState)({logs:[],levelUsed:"error"}),[i,s]=(0,n.useState)(!1),[l,c]=(0,n.useState)();return(0,n.useEffect)(()=>{if(!t||!r.logsDatasourceUid)return;let n=!1;var a;return(a=function*(){s(!0),c(void 0);try{const t=yield(0,g.lx)(e,r,20);n||(o(t),c(t.error))}catch(e){console.error(e),n||(c("Não foi possível carregar logs do Loki."),o({logs:[],levelUsed:"error"}))}finally{n||s(!1)}},function(){var e=this,t=arguments;return new Promise(function(r,n){var o=a.apply(e,t);function i(e){v(o,r,n,i,s,"next",e)}function s(e){v(o,r,n,i,s,"throw",e)}i(void 0)})})(),()=>{n=!0}},[e.cluster,e.compareWithPrevious,e.deployment,e.namespace,e.timeRange,t,r]),h(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){y(e,t,r[t])})}return e}({},a),{loading:i,error:l})}var E=r(7584),$=r(7632),w=r(3281),S=r(9604),x=r(5203);function k(e,t){const r=new URLSearchParams;(null==t?void 0:t.tab)&&"overview"!==t.tab&&r.set("tab",t.tab),(null==t?void 0:t.timeRange)&&r.set("timeRange",t.timeRange),(null==t?void 0:t.namespace)&&r.set("namespace",t.namespace),(null==t?void 0:t.clusterLabel)&&r.set("clusterLabel",t.clusterLabel);const n=r.toString(),a=`${x.ur}/cluster/${encodeURIComponent(e)}`;return n?`${a}?${n}`:a}var P=r(8448),N=r(9264),T=r(5615),O=r(8505),D=r(8565),R=r(4911),L=r(880),z=r(8197);const j=/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT|TRACE)\s+/i;function C(e){var t,r;let n=e.trim();if(!n)return e;if(n=n.replace(j,"").trim(),n=null!==(t=null===(r=n.split("?")[0])||void 0===r?void 0:r.split("#")[0])&&void 0!==t?t:n,n.includes("://"))try{n=new URL(n).pathname}catch(e){}if(n.startsWith("/")){const e=n.split("/").filter(Boolean);return e.length>0?`/${e[0]}`:"/"}if(n.includes("/")){const e=n.split("/").filter(Boolean);return e.length>0?`/${e[0]}`:n}return/\.[a-z0-9]{1,8}$/i.test(n)?n.replace(/\.[^./\\]+$/,""):n.includes(".")&&null!==(a=n.split(".")[0])&&void 0!==a?a:n;var a}function U(e){const t=new Map;for(const a of e){var r,n;const e=C(a.path),o=null!==(r=a.rate)&&void 0!==r?r:0,i=null!==(n=t.get(e))&&void 0!==n?n:{totalRate:0,weightedLatency:0,latencyWeight:0,weightedError:0,errorWeight:0};i.totalRate+=o,void 0!==a.latencyP95&&o>0&&(i.weightedLatency+=a.latencyP95*o,i.latencyWeight+=o),void 0!==a.errorRate&&o>0&&(i.weightedError+=a.errorRate*o,i.errorWeight+=o),t.set(e,i)}return Array.from(t.entries()).map(([e,t])=>function(e,t,r,n){return{path:e,rate:t,latencyP95:r,errorRate:n,rateLabel:(0,L.Y5)(t),latencyLabel:(0,L.je)(r),errorLabel:(0,L.l9)(n)}}(e,t.totalRate>0?t.totalRate:void 0,t.latencyWeight>0?t.weightedLatency/t.latencyWeight:void 0,t.errorWeight>0?t.weightedError/t.errorWeight:void 0)).sort((e,t)=>{var r,n;return(null!==(r=t.rate)&&void 0!==r?r:0)-(null!==(n=e.rate)&&void 0!==n?n:0)})}var M=r(5920),_=r(4724),I=r(1561),F=r(7128);function A(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function B(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){A(o,n,a,i,s,"next",e)}function s(e){A(o,n,a,i,s,"throw",e)}i(void 0)})}}const W=["traces_spanmetrics_calls_total","traces_spanmetrics_latency_count","traces_spanmetrics_duration_seconds_count"],q=["span_name","http_route","http_target","url_path"];function K(e,t){const r=[],n=(0,F.V7)(e,t);for(const e of W)for(const t of n)r.push(`topk(25, sum by (span_name) (rate(${e}${t}[5m])))`);return r}function V(e,t){const r=[],n=(0,F.V7)(e,t);for(const e of F.IB)for(const t of n)r.push(`topk(25, histogram_quantile(0.95, sum by (span_name, le) (rate(${e}${t}[5m]))))`);return r}function H(e,t,r,n){return`topk(25, sum by (${n}) (rate(${e}${t}[5m])) / sum by (${n}) (rate(${e}${r}[5m])))`}function Z(e,t){const r=[],n=(0,F.V7)(e,t);for(const e of W)for(const t of n)r.push(H(e,(0,_.N6)(t,'status_code=~"5.."'),t,"span_name")),r.push(H(e,(0,_.N6)(t,'status_code="STATUS_CODE_ERROR"'),t,"span_name"));return r}function J(e,t,r){return(0,M.Kq)(e,t).flatMap(e=>q.filter(e=>"span_name"!==e).map(t=>`topk(25, sum by (${t}) (rate(${r}${e}[5m])))`))}function G(e,t,r){return(0,M.Kq)(e,t).flatMap(e=>q.filter(e=>"span_name"!==e).map(t=>`topk(25, histogram_quantile(0.95, sum by (${t}, le) (rate(${r}${e}[5m]))))`))}function Y(e,t,r,n){return(0,M.Kq)(e,t).flatMap(e=>{const t=(0,_.N6)(e,`${n}=~"5.."`);return q.filter(e=>"span_name"!==e).map(n=>H(r,t,e,n))})}function Q(e,t,r,n){return B(function*(){for(const a of t){const t=yield(0,I.uJ)(e,{expr:a,instant:!0,range:!1},n);if((0,R.T1)(t))continue;const o=(0,R.W$)(t,r);if(o.size>0)return o}return new Map})()}function X(e,t,r){const n=new Set([...e.keys(),...t.keys(),...r.keys()]);return function(e,t=5){return e.slice(0,t)}(U(Array.from(n).filter(e=>(0,z.l9)(e)).map(n=>function(e,t,r,n){return{path:e,rate:t,latencyP95:r,errorRate:n,rateLabel:(0,L.Y5)(t),latencyLabel:(0,L.je)(r),errorLabel:(0,L.l9)(n)}}(n,e.get(n),t.get(n),r.get(n))).sort((e,t)=>{var r,n;return(null!==(r=t.rate)&&void 0!==r?r:0)-(null!==(n=e.rate)&&void 0!==n?n:0)})))}var ee=r(2488),te=r(9490);function re({path:e,exploreUrl:t,onDismiss:r}){const n=(0,s.useStyles2)(ne);return a().createElement(s.Drawer,{title:`Traces: ${e}`,subtitle:"Busca filtrada no Traces Drilldown para o path selecionado",onClose:r,size:"lg"},a().createElement("div",{className:n.toolbar},a().createElement(s.LinkButton,{variant:"secondary",icon:"external-link-alt",href:t,target:"_blank",rel:"noreferrer"},"Abrir em nova aba")),a().createElement("iframe",{title:`Traces Drilldown - ${e}`,src:t,className:n.frame,sandbox:"allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"}))}const ne=e=>({toolbar:i.css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: ${e.spacing(1)};
  `,frame:i.css`
    width: 100%;
    min-height: 70vh;
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
  `});var ae=r(5611);function oe({paths:e,context:t,onOpenPath:r,testId:n=ae.b.overview.pathsTable}){const o=(0,s.useStyles2)(ie);return a().createElement("div",{className:o.wrapper,"data-testid":n},a().createElement("header",{className:o.header},a().createElement("h3",null,"Principais paths"),a().createElement("p",null,"Top ",5," prefixos HTTP com maior throughput em ",t.deployment,". Clique para buscar traces no Drilldown.")),a().createElement("table",{className:o.table},a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,"Path"),a().createElement("th",null,"Rate"),a().createElement("th",null,"p95"),a().createElement("th",null,"Erro"))),a().createElement("tbody",null,0===e.length?a().createElement("tr",null,a().createElement("td",{colSpan:4,className:o.empty},"Nenhum path com métricas encontrado para este serviço no período.")):e.map(e=>{return a().createElement("tr",{key:e.path},a().createElement("td",{className:o.path},a().createElement(s.LinkButton,{size:"sm",className:o.pathLink,onClick:()=>r(e.path),title:e.path},e.path)),a().createElement("td",{className:o.metric},e.rateLabel),a().createElement("td",{className:o.metric},e.latencyLabel),a().createElement("td",{className:o.metric},a().createElement(s.Badge,{text:e.errorLabel,color:(t=e.errorRate,void 0===t?"darkgrey":t>=.05?"red":t>=.01?"orange":"green")})));var t}))))}const ie=e=>({wrapper:i.css`
    margin-top: ${e.spacing(2)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    overflow: hidden;
    background: ${e.colors.background.primary};
  `,header:i.css`
    padding: ${e.spacing(1.25,1.5,1)};
    border-bottom: 1px solid ${e.colors.border.weak};

    h3 {
      margin: 0 0 ${e.spacing(.25)};
      font-size: ${e.typography.h6.fontSize};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      line-height: 1.35;
    }
  `,table:i.css`
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;

    th,
    td {
      text-align: left;
      padding: ${e.spacing(.5,1.25)};
      border-bottom: 1px solid ${e.colors.border.weak};
      vertical-align: middle;
      line-height: 1.2;
    }

    th:first-child,
    td:first-child {
      width: 34%;
    }

    th:not(:first-child),
    td:not(:first-child) {
      width: 22%;
    }

    th {
      color: ${e.colors.text.secondary};
      font-weight: ${e.typography.fontWeightMedium};
      font-size: ${e.typography.bodySmall.fontSize};
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    tbody tr:last-child td {
      border-bottom: none;
    }
  `,path:i.css`
    max-width: 0;
    overflow: hidden;
  `,pathLink:i.css`
    padding: 0;
    min-height: 0;
    max-width: 100%;
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,metric:i.css`
    font-size: ${e.typography.bodySmall.fontSize};
    white-space: nowrap;
  `,empty:i.css`
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `});function se(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function le({context:e}){const t=(0,d.U)(),[r,o]=(0,n.useState)([]),[i,l]=(0,n.useState)(!1),[c,u]=(0,n.useState)(),[m,p]=(0,n.useState)();(0,n.useEffect)(()=>{if(!t.metricsDatasourceUid)return;let r=!1;var n;return(n=function*(){l(!0),u(void 0);try{const n=yield function(e,t){return B(function*(){if(!t.metricsDatasourceUid)return{paths:[],error:"Configure o datasource Prometheus/Mimir na página de configuração do app."};const r=(0,P.Zv)(e.timeRange),[n,a,o]=yield Promise.all([Q(t.metricsDatasourceUid,K(t,e),"span_name",r),Q(t.metricsDatasourceUid,V(t,e),"span_name",r),Q(t.metricsDatasourceUid,Z(t,e),"span_name",r)]);if(n.size>0||a.size>0)return{paths:X(n,a,o)};const i=(0,_.AU)(t,e.cluster),s=yield(0,M.cx)(t.metricsDatasourceUid,i,r);for(const n of q.filter(e=>"span_name"!==e)){const[a,o,i]=yield Promise.all([Q(t.metricsDatasourceUid,J(t,e,s.countMetric),n,r),s.bucketMetric?Q(t.metricsDatasourceUid,G(t,e,s.bucketMetric),n,r):Promise.resolve(new Map),Q(t.metricsDatasourceUid,Y(t,e,s.countMetric,s.statusLabels[0]),n,r)]);if(a.size>0||o.size>0)return{paths:X(a,o,i)}}return{paths:[],error:"Nenhum path encontrado. Verifique métricas traces_spanmetrics_* ou HTTP com label de rota (http_route)."}})()}(e,t);r||(o(n.paths),u(n.error))}catch(e){console.error(e),r||(u("Não foi possível carregar os paths do serviço."),o([]))}finally{r||l(!1)}},function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(e){se(o,r,a,i,s,"next",e)}function s(e){se(o,r,a,i,s,"throw",e)}i(void 0)})})(),()=>{r=!0}},[e,t]);const f=(0,n.useMemo)(()=>{if(m&&t.tracesDatasourceUid)return(0,ee.vT)(t,e,t.tracesDatasourceUid,m)},[e,m,t]);return t.metricsDatasourceUid?i?a().createElement(s.LoadingPlaceholder,{text:"Carregando principais paths..."}):c&&0===r.length?a().createElement(s.Alert,{title:"Paths indisponíveis",severity:"warning"},c):a().createElement(a().Fragment,null,a().createElement(oe,{paths:r,context:e,onOpenPath:e=>{t.tracesDatasourceUid&&p(e)}}),m&&f?a().createElement(te.K,{title:"Erro ao abrir Traces Drilldown"},a().createElement(re,{path:m,exploreUrl:f,onDismiss:()=>p(void 0)})):null,!t.tracesDatasourceUid&&r.length>0?a().createElement(s.Alert,{title:"Traces Drilldown",severity:"info"},"Configure o datasource Tempo para abrir a busca de traces ao clicar em um path."):null):null}function ce(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function ue({context:e,testId:t}){var r,o,i,l,c,u;const m=(0,s.useStyles2)(de),p=(0,d.U)(),[f,g]=(0,n.useState)(),[v,y]=(0,n.useState)(!1),[h,b]=(0,n.useState)(),E=(0,P.Zv)(e.timeRange),$=e.compareWithPrevious?(0,P.Gq)(e.timeRange):void 0;return(0,n.useEffect)(()=>{if(!p.metricsDatasourceUid)return;let t=!1;var r;return(r=function*(){y(!0),b(void 0);try{const r=yield(0,O.Jf)(e,p);t||g(r)}catch(e){console.error(e),t||(b("Não foi possível carregar as séries temporais de métricas."),g(void 0))}finally{t||y(!1)}},function(){var e=this,t=arguments;return new Promise(function(n,a){var o=r.apply(e,t);function i(e){ce(o,n,a,i,s,"next",e)}function s(e){ce(o,n,a,i,s,"throw",e)}i(void 0)})})(),()=>{t=!0}},[e,p]),p.metricsDatasourceUid?v?a().createElement(s.LoadingPlaceholder,{text:"Carregando gráficos de métricas..."}):h?a().createElement(s.Alert,{title:"Erro ao carregar gráficos",severity:"error"},h):a().createElement("section",{className:m.section,"data-testid":t},e.compareWithPrevious?a().createElement("p",{className:m.compareHint},"Linha tracejada = ",(0,P.g9)(e.timeRange)," · sólida = período atual"):null,a().createElement("h3",{className:m.groupTitle},"HTTP"),a().createElement("div",{className:m.grid},a().createElement(D.R,{title:"Taxa",description:"Requisições HTTP por segundo",frames:null!==(r=null==f?void 0:f.throughput)&&void 0!==r?r:[],from:E.from,to:E.to,compareFrames:null==f?void 0:f.previousThroughput,compareFrom:null==$?void 0:$.from,unit:"reqps"}),a().createElement(D.R,{title:"Latência",description:"Tempo de resposta HTTP — percentil 95",frames:null!==(o=null==f?void 0:f.latencyP95)&&void 0!==o?o:[],from:E.from,to:E.to,compareFrames:null==f?void 0:f.previousLatencyP95,compareFrom:null==$?void 0:$.from,unit:"s"}),a().createElement(D.R,{title:"Erros",description:"Percentual de respostas HTTP 5xx",frames:null!==(i=null==f?void 0:f.errorRate)&&void 0!==i?i:[],from:E.from,to:E.to,compareFrames:null==f?void 0:f.previousErrorRate,compareFrom:null==$?void 0:$.from,unit:"percentunit"})),a().createElement("h3",{className:m.groupTitle},"Dependências"),a().createElement("div",{className:m.grid},a().createElement(D.R,{title:"Inbound",description:"Latência p95 de quem chama este serviço",frames:null!==(l=null==f?void 0:f.dependencyInbound)&&void 0!==l?l:[],from:E.from,to:E.to,compareFrames:null==f?void 0:f.previousDependencyInbound,compareFrom:null==$?void 0:$.from,unit:"s",legendLabelKey:"client"}),a().createElement(D.R,{title:"Outbound",description:"Latência p95 para dependências e bancos de dados",frames:null!==(c=null==f?void 0:f.dependencyOutbound)&&void 0!==c?c:[],from:E.from,to:E.to,compareFrames:null==f?void 0:f.previousDependencyOutbound,compareFrom:null==$?void 0:$.from,unit:"s",legendLabelKey:"server"}),a().createElement(D.R,{title:"Latência por span (temporal)",description:"Latência p95 por span ao longo do tempo",frames:null!==(u=null==f?void 0:f.dependencyOperations)&&void 0!==u?u:[],from:E.from,to:E.to,compareFrames:null==f?void 0:f.previousDependencyOperations,compareFrom:null==$?void 0:$.from,unit:"s",legendLabelKey:"span_name"})),a().createElement(le,{context:e})):null}const de=e=>({section:i.css`
    margin-bottom: ${e.spacing(3)};
  `,groupTitle:i.css`
    margin: 0 0 ${e.spacing(1.5)};
    font-size: ${e.typography.h5.fontSize};
    font-weight: ${e.typography.fontWeightMedium};
    color: ${e.colors.text.primary};
  `,grid:i.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(2.5)};
  `,compareHint:i.css`
    margin: 0 0 ${e.spacing(1.5)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `});var me=r(2537),pe=r(8458);function fe(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function ge(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){fe(o,n,a,i,s,"next",e)}function s(e){fe(o,n,a,i,s,"throw",e)}i(void 0)})}}function ve(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){ve(e,t,r[t])})}return e}function he(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}const be=new Set(["ScalingReplicaSet","SuccessfulCreate","SuccessfulDelete"]);function Ee(e,t,r){return ge(function*(){try{return yield(0,o.getBackendSrv)().post("/api/ds/query",{from:String(r.from),to:String(r.to),queries:[{refId:"A",datasource:{type:"loki",uid:e},expr:t,maxLines:100,direction:"backward"}]})}catch(e){return{results:{A:{error:e instanceof Error?e.message:"Falha ao consultar Loki"}}}}})()}function $e(e,t){var r,n,a,o,i,s,l,c,u;const d=null!==(r=null!==(n=null!==(a=t.k8s_event_reason)&&void 0!==a?a:t.reason)&&void 0!==n?n:t["k8s.event.reason"])&&void 0!==r?r:"";if(!be.has(d))return;o=null!==(i=null!==(s=t.k8s_involved_object)&&void 0!==s?s:t.involvedObject)&&void 0!==i?i:t["k8s.event.involved_object.name"];const m=e.trim()||t.body||t.message||d,p=null!==(l=null!==(c=null!==(u=t.timestamp)&&void 0!==u?u:t["@timestamp"])&&void 0!==c?c:t.Time)&&void 0!==l?l:t.time;return{id:`${d}-${null!=p?p:m}`,reason:d,message:m,timestamp:p,source:"loki"}}function we(e,t){return ge(function*(){if(!t.logsDatasourceUid)return[];const r=(0,P.Zv)(e.timeRange),n=function(e,t){const r=(0,_.KC)(t),n=(0,pe.o)(e.deployment),a=`${r.namespace}="${e.namespace}"`,o=e.cluster&&"all"!==e.cluster?[`${r.cluster}="${e.cluster}"`,`k8s_cluster_name="${e.cluster}"`]:[""],i=[];for(const e of o){const t=e?`${e},`:"";i.push(`{${t}${a},service_name="kubernetes-events"} | json | k8s_event_reason=~"ScalingReplicaSet|SuccessfulCreate" | k8s_involved_object=~".*(?i)${n}.*"`),i.push(`{${t}${a},service_name="kubernetes-events"} | json | reason=~"ScalingReplicaSet|SuccessfulCreate" | involvedObject=~".*(?i)${n}.*"`)}return Array.from(new Set(i))}(e,t),a=[];for(const e of n){const n=yield Ee(t.logsDatasourceUid,e,r);if(!(0,R.T1)(n)){for(const e of(0,R.a6)(n)){var o;const t=$e(e.message,null!==(o=e.labels)&&void 0!==o?o:{});var i;if(t)a.push(he(ye({},t),{timestamp:null!==(i=t.timestamp)&&void 0!==i?i:e.timestamp}))}if(a.length>0)break}}return a.sort((e,t)=>{const r=e.timestamp?Date.parse(e.timestamp):0;return(t.timestamp?Date.parse(t.timestamp):0)-r}).slice(0,5)})()}function Se(e,t){return ge(function*(){if(!t.metricsDatasourceUid)return;const r=(0,_.iP)(t,e),n=(0,P.Zv)(e.timeRange),a=e.timeRange,o=[`changes(k8s_deployment_desired${r}[${a}])`,`changes(kube_deployment_status_observed_generation${r}[${a}])`];for(const r of o){const o=yield(0,I.uJ)(t.metricsDatasourceUid,{expr:r,instant:!0,range:!1,format:"table"},n);if((0,R.T1)(o))continue;const i=(0,R.F$)(o);if(void 0!==i&&i>0)return{id:`metrics-${e.deployment}-${a}`,reason:"Rollout",message:`${i} alteração(ões) de réplicas/generation detectada(s) no período ${a}.`,source:"metrics"}}})()}function xe(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function ke({context:e,settings:t}){const r=(0,s.useStyles2)(Pe),[o,i]=(0,n.useState)([]),[l,c]=(0,n.useState)(!1),[u,d]=(0,n.useState)();return(0,n.useEffect)(()=>{if(!t.logsDatasourceUid&&!t.metricsDatasourceUid)return;let r=!1;var n;return(n=function*(){c(!0),d(void 0);try{const n=yield function(e,t){return ge(function*(){const[r,n]=yield Promise.all([we(e,t),Se(e,t)]);return r.length>0?r:n?[n]:[]})()}(e,t);r||i(n)}catch(e){console.error(e),r||(d("Não foi possível carregar rollouts recentes."),i([]))}finally{r||c(!1)}},function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(e){xe(o,r,a,i,s,"next",e)}function s(e){xe(o,r,a,i,s,"throw",e)}i(void 0)})})(),()=>{r=!0}},[e,t]),a().createElement("section",{className:r.panel,"data-testid":ae.b.overview.recentDeployPanel},a().createElement("div",{className:r.header},a().createElement("div",null,a().createElement("h3",null,"Rollouts recentes"),a().createElement("p",null,"Correlaciona incidentes com deploys via eventos Kubernetes e métricas de réplicas."))),l?a().createElement(s.LoadingPlaceholder,{text:"Buscando rollouts..."}):null,u?a().createElement(s.Alert,{title:"Rollouts",severity:"warning"},u):null,l||0!==o.length?null:a().createElement("p",{className:r.empty},"Nenhum rollout detectado para este serviço no período selecionado."),!l&&o.length>0?a().createElement("ul",{className:r.list},o.map(e=>a().createElement("li",{key:e.id,className:r.item},a().createElement("div",{className:r.itemHeader},a().createElement(s.Badge,{text:e.reason,color:"blue"}),a().createElement("time",null,function(e){if(!e)return"—";const t=Date.parse(e);return Number.isNaN(t)?e:new Date(t).toLocaleString("pt-BR")}(e.timestamp))),a().createElement("p",{className:r.message},e.message),"metrics"===e.source?a().createElement("span",{className:r.meta},"Detectado via Prometheus/Mimir"):null))):null)}const Pe=e=>({panel:i.css`
    margin-bottom: ${e.spacing(2)};
    padding: ${e.spacing(1.5,2)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};
  `,header:i.css`
    margin-bottom: ${e.spacing(1)};

    h3 {
      margin: 0 0 ${e.spacing(.25)};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
    }
  `,empty:i.css`
    margin: 0;
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,list:i.css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(1)};
  `,item:i.css`
    padding: ${e.spacing(1,1.25)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
  `,itemHeader:i.css`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
    margin-bottom: ${e.spacing(.5)};

    time {
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
    }
  `,message:i.css`
    margin: 0;
    font-size: ${e.typography.bodySmall.fontSize};
  `,meta:i.css`
    display: block;
    margin-top: ${e.spacing(.5)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `});function Ne(e){return{availabilityPercent:Te(null==e?void 0:e.sloAvailabilityTargetPercent,99.9),latencyP95Ms:Te(null==e?void 0:e.sloLatencyP95Ms,500)}}function Te(e,t){return void 0===e||!Number.isFinite(e)||e<=0?t:e}function Oe(e){var t;const r=void 0!==e.errorRate?100*(1-e.errorRate):void 0,n=e.targets.availabilityPercent/100,a=void 0!==e.errorRate?function(e,t){const r=1-t;if(r<=0)return{consumedPercent:0,remainingPercent:100,status:"unknown"};const n=Math.max(0,1-e),a=Math.min(1,n/r),o=Math.max(0,1-a),i=Math.round(100*a);let s="healthy";return n>r?s="exhausted":(n>=.7*r||i>=70)&&(s="at_risk"),{consumedPercent:i,remainingPercent:Math.round(100*o),status:s}}(1-e.errorRate,n):void 0,o=void 0!==e.latencyP95Ms?e.latencyP95Ms<=e.targets.latencyP95Ms:void 0;let i=null!==(t=null==a?void 0:a.status)&&void 0!==t?t:"unknown";return!1===o&&"healthy"===i&&(i="at_risk"),{availabilitySliPercent:r,latencyP95Ms:e.latencyP95Ms,availabilityTargetPercent:e.targets.availabilityPercent,latencyTargetMs:e.targets.latencyP95Ms,errorBudget:a,latencySloMet:o,overallStatus:i}}function De(e){return{healthy:"green",at_risk:"orange",exhausted:"red",unknown:"darkgrey"}[e]}function Re(e,t){return e.find(e=>e.id===t)}function Le({goldenSignals:e,settings:t}){var r,n;const o=(0,s.useStyles2)(ze),i=Oe({errorRate:function(e){if(!e||"—"===e)return;const t=Number(e.replace("%","").trim());return Number.isFinite(t)?t/100:void 0}(null===(r=Re(e,"errorRate"))||void 0===r?void 0:r.value),latencyP95Ms:function(e){if(e&&"—"!==e){if(e.endsWith("ms")){const t=Number(e.replace("ms","").trim());return Number.isFinite(t)?t:void 0}if(e.endsWith("s")){const t=Number(e.replace("s","").trim());return Number.isFinite(t)?1e3*t:void 0}}}(null===(n=Re(e,"latencyP95"))||void 0===n?void 0:n.value),targets:Ne(t)});return a().createElement("section",{className:o.panel,"data-testid":ae.b.overview.sloPanel},a().createElement("div",{className:o.header},a().createElement("div",null,a().createElement("h3",null,"SLOs do serviço"),a().createElement("p",null,"SLIs derivados dos golden signals HTTP vs targets configurados.")),a().createElement(s.Badge,{text:(l=i.overallStatus,{healthy:"Dentro do SLO",at_risk:"Em risco",exhausted:"Budget esgotado",unknown:"Sem dados"}[l]),color:De(i.overallStatus)})),a().createElement("div",{className:o.grid},a().createElement("article",{className:o.card},a().createElement("span",{className:o.label},"Disponibilidade (SLI)"),a().createElement("strong",{className:o.value},void 0!==i.availabilitySliPercent?`${i.availabilitySliPercent.toFixed(2)}%`:"—"),a().createElement("span",{className:o.hint},"Target ",i.availabilityTargetPercent,"%")),a().createElement("article",{className:o.card},a().createElement("span",{className:o.label},"Error budget"),a().createElement("strong",{className:o.value},i.errorBudget?`${i.errorBudget.remainingPercent}% restante`:"—"),a().createElement("span",{className:o.hint},i.errorBudget?`${i.errorBudget.consumedPercent}% consumido`:"Sem taxa de erro no período")),a().createElement("article",{className:o.card},a().createElement("span",{className:o.label},"Latência p95 (SLI)"),a().createElement("strong",{className:o.value},void 0!==i.latencyP95Ms?`${Math.round(i.latencyP95Ms)} ms`:"—"),a().createElement("span",{className:o.hint},"Target ≤ ",i.latencyTargetMs," ms",!1===i.latencySloMet?" · acima do SLO":""))));var l}const ze=e=>({panel:i.css`
    margin-bottom: ${e.spacing(2)};
    padding: ${e.spacing(1.5,2)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};
  `,header:i.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(1.5)};

    h3 {
      margin: 0 0 ${e.spacing(.25)};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
    }
  `,grid:i.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: ${e.spacing(1.5)};
  `,card:i.css`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(.25)};
    padding: ${e.spacing(1.25)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
  `,label:i.css`
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,value:i.css`
    font-size: ${e.typography.h5.fontSize};
  `,hint:i.css`
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `});var je=r(377),Ce=r(5265),Ue=r(4446);function Me({alerts:e,loading:t,error:r,cluster:n,timeRange:o}){if(t)return null;if(r)return a().createElement(s.Alert,{title:"Alertas firing",severity:"warning","data-testid":ae.b.incidents.firingBanner},r);if(0===e.length)return null;const i=e.slice(0,3).map(e=>e.alertName).join(", ");return a().createElement(s.Alert,{title:`${e.length} alerta(s) ativo(s) neste cluster`,severity:"error","data-testid":ae.b.incidents.firingBanner},a().createElement(Ue.C,{tip:Ce.F.alertFiring},"Alertas firing"),": ",i,e.length>3?` e mais ${e.length-3}...`:""," ",a().createElement(s.LinkButton,{size:"sm",variant:"secondary",href:k(n,{tab:"alerts",timeRange:o})},"Ver alertas no K8s"))}var _e=r(6920),Ie=r(3080),Fe=r(9023);function Ae(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function Be(e,t,r){return(n=function*(){if(!e.metricsDatasourceUid)return{alerts:[]};const n=(0,_.AU)(e,t).replace("}",',alertstate="firing"}'),a=(0,P.Zv)(r),o=yield(0,I.uJ)(e.metricsDatasourceUid,{expr:`ALERTS${n}`,instant:!0,range:!1,format:"table"},a),i=(0,R.T1)(o);if(i)return{alerts:[],error:`Falha ao consultar alertas firing: ${i}`};const s=(0,R.s5)(o,["alertname"]);return{alerts:Array.from(s.keys()).map(e=>({alertName:e}))}},function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function i(e){Ae(o,r,a,i,s,"next",e)}function s(e){Ae(o,r,a,i,s,"throw",e)}i(void 0)})})();var n}function We(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function qe(e,t,r=!0){const a=(0,d.U)(),[o,i]=(0,n.useState)([]),[s,l]=(0,n.useState)(!1),[c,u]=(0,n.useState)();return(0,n.useEffect)(()=>{if(!r||!e||!a.metricsDatasourceUid)return i([]),void u(void 0);let n=!1;var o;return(o=function*(){l(!0),u(void 0);try{const r=yield Be(a,e,t);n||(i(r.alerts),u(r.error))}catch(e){console.error(e),n||(i([]),u("Não foi possível carregar alertas firing do cluster."))}finally{n||l(!1)}},function(){var e=this,t=arguments;return new Promise(function(r,n){var a=o.apply(e,t);function i(e){We(a,r,n,i,s,"next",e)}function s(e){We(a,r,n,i,s,"throw",e)}i(void 0)})})(),()=>{n=!0}},[e,r,a,t]),{alerts:o,loading:s,error:c,count:o.length}}function Ke(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function Ve(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){Ke(o,n,a,i,s,"next",e)}function s(e){Ke(o,n,a,i,s,"throw",e)}i(void 0)})}}const He=a().lazy(()=>Ve(function*(){return{default:(yield Promise.all([r.e(692),r.e(922)]).then(r.bind(r,922))).ServiceRuntimeTab}})()),Ze=a().lazy(()=>Ve(function*(){return{default:(yield r.e(999).then(r.bind(r,5999))).ServiceInfrastructureTab}})()),Je=a().lazy(()=>Ve(function*(){return{default:(yield Promise.all([r.e(612),r.e(740)]).then(r.bind(r,3740))).ServiceServiceMapTab}})()),Ge=a().lazy(()=>Ve(function*(){return{default:(yield r.e(470).then(r.bind(r,4470))).ServiceTracesTab}})()),Ye=a().lazy(()=>Ve(function*(){return{default:(yield r.e(762).then(r.bind(r,8762))).ServiceLogsTab}})()),Qe=[{id:"overview",label:"Visão geral",icon:"apps"},{id:"logs",label:"Logs",icon:"file-alt"},{id:"traces",label:"Traces",icon:"gf-traces"},{id:"serviceMap",label:"Service map",icon:"share-alt"},{id:"runtime",label:"Runtime",icon:"cog"},{id:"infrastructure",label:"Infraestrutura",icon:"cloud"}];function Xe(){var e,t,r,o,i,d;const p=(0,s.useStyles2)(et),v=(0,l.useNavigate)(),y=(0,l.useParams)(),[h,x]=(0,c.ok)(),{loading:O,error:D,result:R,configWarning:L,investigate:z,settings:j}=f(),{isFavorite:C,toggleFavorite:U}=(0,$.o)(),{recordView:M}=(0,E.a)(),_=(0,u.Tl)(null!==(e=y.cluster)&&void 0!==e?e:""),I=(0,u.Tl)(null!==(t=y.namespace)&&void 0!==t?t:""),F=(0,u.Tl)(null!==(r=y.deployment)&&void 0!==r?r:""),A=(0,u.NI)(h.get("timeRange")),B="1"===h.get("compare"),W="logs"===(q=h.get("tab"))||"traces"===q||"serviceMap"===q||"runtime"===q||"infrastructure"===q?q:"overview";var q;const K=(0,n.useMemo)(()=>(0,w.Xv)(h),[h]),V="overview"===W,H=(0,n.useMemo)(()=>({cluster:_,namespace:I,deployment:F}),[_,F,I]),Z=(0,n.useMemo)(()=>({deployment:F,namespace:I,cluster:_,timeRange:A,compareWithPrevious:B}),[_,B,F,I,A]),J="overview"===W||"traces"===W,{alerts:G,loading:Y,error:Q}=qe(_,A,Boolean(j.metricsDatasourceUid)),{logs:X,levelUsed:ee,loading:re,error:ne}=b(Z,"overview"===W&&Boolean(F)),oe=(0,n.useMemo)(()=>(0,g.Sp)(ee),[ee]),ie=(0,N.id)(j),se=(0,n.useCallback)(()=>{F&&z({deployment:F,namespace:I,cluster:_,timeRange:A,compareWithPrevious:B})},[_,B,F,z,I,A]);(0,n.useEffect)(()=>{if("metrics"!==h.get("tab"))return;const e=new URLSearchParams(h);e.delete("tab"),x(e,{replace:!0})},[h,x]),(0,n.useEffect)(()=>{F&&M(H)},[F,M,H]),(0,n.useEffect)(()=>{J&&se()},[J,se]);return a().createElement("div",{"data-testid":ae.b.overview.container},a().createElement("div",{className:p.header},a().createElement("button",{type:"button",className:p.backButton,onClick:()=>v((0,u.EI)({cluster:_,timeRange:A}),{relative:"route"})},a().createElement(s.Icon,{name:"arrow-left"})," Catálogo"),a().createElement("div",{className:p.titleRow},a().createElement("div",null,a().createElement("nav",{className:p.breadcrumb,"aria-label":"Localização"},a().createElement("button",{type:"button",className:p.breadcrumbLink,onClick:()=>v((0,u.EI)({cluster:_,timeRange:A}),{relative:"route"})},(0,S.N)(_)),a().createElement("span",{"aria-hidden":"true"}," / "),a().createElement("a",{className:p.breadcrumbLink,href:k(_,{tab:"workloads",timeRange:A,namespace:I})},I),a().createElement("span",{"aria-hidden":"true"}," / "),a().createElement("span",null,F)),a().createElement("h1",null,F)),a().createElement("div",{className:p.actions},a().createElement(je.Z,{service:H,isFavorite:C(H),onToggle:()=>U(H),testId:ae.b.overview.favoriteButton}),V?a().createElement(s.Checkbox,{label:`Comparar com ${(0,P.g9)(A)}`,value:B,onChange:e=>(e=>{const t=new URLSearchParams(h);e?t.set("compare","1"):t.delete("compare"),x(t)})(e.currentTarget.checked),"data-testid":ae.b.overview.compareToggle}):null,a().createElement(Fe.$,{value:A,onChange:e=>{const t=new URLSearchParams(h);t.set("timeRange",e),x(t)},width:22}),a().createElement(s.LinkButton,{variant:"secondary",icon:"sync",onClick:se,disabled:O},"Atualizar"),a().createElement(s.LinkButton,{variant:"secondary",icon:"cloud",href:k(_,{tab:"workloads",timeRange:A,namespace:I})},"Saúde K8s")))),a().createElement(_e.W,{timeRange:A}),a().createElement(Me,{alerts:G,loading:Y,error:Q,cluster:_,timeRange:A}),(0,w.uz)(K)?a().createElement(s.Alert,{title:"Contexto de alerta",severity:"warning",onRemove:()=>{const e=new URLSearchParams(h);e.delete("alertName"),e.delete("alert"),e.delete("alertUid"),e.delete("ruleUid"),x(e)},"data-testid":ae.b.overview.alertBanner},"Você chegou aqui a partir de um alerta",K.alertName?`: ${K.alertName}`:"",".",K.alertUid?a().createElement(a().Fragment,null," ",a().createElement(s.LinkButton,{variant:"secondary",size:"sm",href:`/alerting/grafana/${K.alertUid}/view`,target:"_blank",rel:"noreferrer"},"Ver regra de alerta")):null):null,L?a().createElement(s.Alert,{title:"Configuração necessária",severity:"info"},L):null,D?a().createElement(s.Alert,{title:"Erro na investigação",severity:"error"},D):null,a().createElement(s.TabsBar,{className:p.tabsScroll},a().createElement("div",{className:p.tabsInner},Qe.map(e=>a().createElement(s.Tab,{key:e.id,label:e.label,icon:e.icon,active:W===e.id,onChangeTab:()=>(e=>{const t=new URLSearchParams(h);"overview"===e?t.delete("tab"):t.set("tab",e),x(t)})(e.id)})))),O&&J?a().createElement("div",{className:p.loadingSection,"aria-busy":"true","aria-live":"polite"},a().createElement("p",{className:p.loadingLabel},"Consultando Mimir, Loki e Tempo..."),a().createElement(Ie.Q,{rows:3,columns:3})):null,"logs"===W?a().createElement(s.TabContent,{className:p.tabContent},a().createElement(te.K,{title:"Erro na aba Logs"},a().createElement(n.Suspense,{fallback:a().createElement(s.LoadingPlaceholder,{text:"Carregando aba de logs..."})},a().createElement(Ye,{context:Z})))):null,"runtime"===W?a().createElement(s.TabContent,{className:p.tabContent},a().createElement(te.K,{title:"Erro na aba Runtime"},a().createElement(n.Suspense,{fallback:a().createElement(s.LoadingPlaceholder,{text:"Carregando aba de runtime..."})},a().createElement(He,{context:Z})))):null,"infrastructure"===W?a().createElement(s.TabContent,{className:p.tabContent},a().createElement(te.K,{title:"Erro na aba Infraestrutura"},a().createElement(n.Suspense,{fallback:a().createElement(s.LoadingPlaceholder,{text:"Carregando aba de infraestrutura..."})},a().createElement(Ze,{context:Z})))):null,"traces"!==W||O&&J?null:a().createElement(s.TabContent,{className:p.tabContent},a().createElement(te.K,{title:"Erro na aba Traces"},a().createElement(n.Suspense,{fallback:a().createElement(s.LoadingPlaceholder,{text:"Carregando aba de traces..."})},a().createElement(Ge,{context:Z,slowTraces:null!==(o=null==R?void 0:R.slowTraces)&&void 0!==o?o:[],slowTracesError:null==R?void 0:R.slowTracesError})))),"serviceMap"===W?a().createElement(s.TabContent,{className:p.tabContent},a().createElement(te.K,{title:"Erro na aba Service map"},a().createElement(n.Suspense,{fallback:a().createElement(s.LoadingPlaceholder,{text:"Carregando service map..."})},a().createElement(Je,{context:Z})))):null,"overview"===W?a().createElement(s.TabContent,{className:p.tabContent},R&&!(0,m.HG)(R)?a().createElement(s.Alert,{title:"Nenhum dado no período",severity:"warning"},"Não encontramos métricas HTTP, logs de erro ou traces lentos para este workload no intervalo selecionado. Confira em Apps → Observabilidade → Configuração se os datasources e a instrumentação estão corretos."):null,(null==R||null===(d=R.goldenSignals)||void 0===d?void 0:d.length)?a().createElement(Le,{goldenSignals:R.goldenSignals,settings:j}):null,a().createElement(ue,{context:Z,testId:ae.b.overview.goldenSignalsCharts}),a().createElement(ke,{context:Z,settings:j}),a().createElement("div",{className:p.split},a().createElement(T.K,{logs:X,tracesDatasourceUid:j.tracesDatasourceUid,timeRange:A,title:oe.title,description:oe.description,emptyMessage:oe.emptyMessage,loading:re,error:null!=ne?ne:null==R?void 0:R.logsError}),O&&J?a().createElement(s.LoadingPlaceholder,{text:"Carregando traces lentos..."}):a().createElement(me.o,{traces:null!==(i=null==R?void 0:R.slowTraces)&&void 0!==i?i:[],tracesDatasourceUid:j.tracesDatasourceUid,timeRange:A,error:null==R?void 0:R.slowTracesError,slowTraceThresholdMs:ie}))):null)}const et=e=>({header:i.css`
    margin-bottom: ${e.spacing(2)};

    h1 {
      margin: 0;
    }
  `,backButton:i.css`
    display: inline-flex;
    align-items: center;
    gap: ${e.spacing(.5)};
    border: none;
    background: none;
    color: ${e.colors.text.link};
    cursor: pointer;
    padding: 0;
    margin-bottom: ${e.spacing(1.5)};
    font: inherit;
  `,titleRow:i.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${e.spacing(2)};
    flex-wrap: wrap;
  `,breadcrumb:i.css`
    margin: 0 0 ${e.spacing(.5)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${e.spacing(.25)};
  `,breadcrumbLink:i.css`
    border: none;
    background: none;
    color: ${e.colors.text.link};
    cursor: pointer;
    padding: 0;
    font: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,actions:i.css`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1.5)};
    flex-wrap: wrap;
  `,tabsScroll:i.css`
    margin-bottom: ${e.spacing(2)};
    overflow-x: auto;
  `,tabsInner:i.css`
    display: inline-flex;
    min-width: min-content;
  `,loadingSection:i.css`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(1.5)};
    margin-bottom: ${e.spacing(2)};
  `,loadingLabel:i.css`
    margin: 0;
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,tabContent:i.css`
    padding-top: ${e.spacing(1)};
  `,split:i.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: ${e.spacing(2)};
  `});const tt=function(){return a().createElement(o.PluginPage,null,a().createElement(Xe,null))}},5265(e,t,r){r.d(t,{q:()=>n});function n(e){return 0===e?"Nenhum workload degradado detectado":`${e} workload${e>1?"s":""} com sinais de degradação`}r.d(t,["F",0,{namespace:"Namespace Kubernetes — agrupa workloads e recursos relacionados.",deployment:"Nome do workload implantado (deployment / k8s_deployment_name).",errorRate:"Percentual de respostas HTTP 5xx no período selecionado.",latencyP95:"95% das requisições respondem abaixo deste tempo (latência p95).",throughput:"Taxa de requisições por segundo (throughput).",alertFiring:"Regra de alerta Prometheus/Grafana em estado firing (condição ativa no momento)."}])},8197(e,t,r){r.d(t,{gL:()=>i,l9:()=>s});const n=/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT|TRACE)\s+/i,a=/^[a-z0-9][a-z0-9-]*\/[a-z0-9][a-z0-9-_.]*$/i;function o(e){const t=e.trim();return!t||(!!n.test(t)||!function(e){return a.test(e.trim())}(t)&&(!!t.includes("/")||(!!t.includes("://")||!!/\.(query|exec|execute|prepare)$/i.test(t))))}function i(e){return!o(e)}function s(e){return o(e)}},980(e,t,r){r.d(t,{H_:()=>c,Yr:()=>d,ie:()=>i,w_:()=>u,y:()=>s});var n=r(7781),a=r(8531);function o(e){var t,r;const o={a:e},i=new URLSearchParams({orgId:String(null!==(t=null===(r=a.config.bootData.user)||void 0===r?void 0:r.orgId)&&void 0!==t?t:1),panes:JSON.stringify(o)});return n.urlUtil.renderUrl("/explore",Object.fromEntries(i))}function i(e,t,r="1h"){var n;return o({datasource:e,queries:[{refId:"A",queryType:"traceId",query:t}],range:{from:null!==(n=l[r])&&void 0!==n?n:"now-1h",to:"now"}})}function s(e,t,r="1h",a){var o;const i=new URLSearchParams({traceId:t,"var-ds":e,"var-primarySignal":"true",actionView:"traceList",from:null!==(o=l[r])&&void 0!==o?o:"now-1h",to:"now"});return a&&i.set("spanId",a),n.urlUtil.renderUrl("/a/grafana-exploretraces-app/explore",Object.fromEntries(i))}const l={"15m":"now-15m","1h":"now-1h","6h":"now-6h","24h":"now-24h"};function c(e,t,r){var n;return o({datasource:e,queries:[{refId:"A",expr:t,range:!0,instant:!1}],range:{from:null!==(n=l[r])&&void 0!==n?n:"now-1h",to:"now"}})}function u(e,t,r){var n;return o({datasource:e,queries:[{refId:"A",expr:t,queryType:"range",maxLines:100,direction:"backward"}],range:{from:null!==(n=l[r])&&void 0!==n?n:"now-1h",to:"now"}})}function d(e,t,r){var n;const a={refId:"A",queryType:"serviceMap"};return r&&(a.serviceMapQuery=r),o({datasource:e,queries:[a],range:{from:null!==(n=l[t])&&void 0!==n?n:"now-1h",to:"now"}})}},1610(e,t,r){function n(e){return`${e.cluster}/${e.namespace}/${e.deployment}`}function a(e){const t=e.split("/");if(3!==t.length)return;const[r,n,a]=t;return r&&n&&a?{cluster:r,namespace:n,deployment:a}:void 0}function o(e){return`${e.deployment} (${e.namespace})`}r.d(t,{Be:()=>o,oU:()=>a,xW:()=>n})},2488(e,t,r){r.d(t,{WK:()=>i,_n:()=>u,q$:()=>s,vT:()=>d});var n=r(7781),a=r(4724),o=r(8448);function i(e,t){const r=(0,a.KC)(e),n=[{key:(0,a.V$)(r.deployment),operator:"=",value:t.deployment}];return t.namespace&&"all"!==t.namespace&&n.unshift({key:(0,a.V$)(r.namespace),operator:"=",value:t.namespace}),t.cluster&&"all"!==t.cluster&&n.unshift({key:(0,a.V$)(r.cluster),operator:"=",value:t.cluster}),n}function s(e){const t=(0,o.Zv)(e);return{from:(0,n.dateTime)(t.from),to:(0,n.dateTime)(t.to),raw:{from:(0,n.dateTime)(t.from),to:(0,n.dateTime)(t.to)}}}const l="grafana-exploretraces-app";function c(){return`/a/${l}/explore`}function u(e,t,r){const a=s(t.timeRange),o=(0,n.toURLRange)(a),l=new URLSearchParams({"var-ds":r,"var-primarySignal":"true",actionView:"traceList",from:String(o.from),to:String(o.to)});for(const r of i(e,t))l.append("var-filters",`${r.key}|${r.operator}|${r.value}`);return n.urlUtil.renderUrl(c(),Object.fromEntries(l))}function d(e,t,r,a){const o=s(t.timeRange),l=(0,n.toURLRange)(o),u=new URLSearchParams({"var-ds":r,"var-primarySignal":"true",actionView:"traceList",from:String(l.from),to:String(l.to)});for(const r of i(e,t))u.append("var-filters",`${r.key}|${r.operator}|${r.value}`);return u.append("var-filters",`name|=|${a}`),a.match(m)||u.append("var-filters",`http.route|=|${a}`),n.urlUtil.renderUrl(c(),Object.fromEntries(u))}const m=/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT|TRACE)\s+/i;r.d(t,["WN",0,"grafana-exploretraces-app/embedded-trace-exploration/v1","h7",0,l])},721(e,t,r){r.d(t,{$2:()=>d,BT:()=>c,JR:()=>l,nC:()=>u});const n=`${r(2533).id}:`,a={favorites:[],recentlyViewed:[]};function o(e){return`${n}${e}`}function i(){try{const e=localStorage.getItem(o("preferences"));if(!e)return a;const t=JSON.parse(e);return{favorites:Array.isArray(t.favorites)?t.favorites.filter(e=>"string"==typeof e):[],recentlyViewed:Array.isArray(t.recentlyViewed)?t.recentlyViewed.filter(e=>e&&"object"==typeof e&&"string"==typeof e.cluster&&"string"==typeof e.namespace&&"string"==typeof e.deployment):[]}}catch(e){return a}}function s(e){try{localStorage.setItem(o("preferences"),JSON.stringify(e))}catch(e){console.warn("Failed to persist user preferences",e)}}function l(){return i().favorites}function c(e){const t=i();t.favorites=e,s(t)}function u(){return i().recentlyViewed}function d(e){const t=i();t.recentlyViewed=e,s(t)}}}]);
//# sourceMappingURL=817.js.map?_cache=4490680c746942adaec6