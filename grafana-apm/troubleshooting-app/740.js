"use strict";(self.webpackChunktroubleshooting_app=self.webpackChunktroubleshooting_app||[]).push([[740],{3740(e,t,r){r.r(t),r.d(t,{ServiceServiceMapTab:()=>J});var n=r(5959),a=r.n(n),o=r(6089),i=r(2007),l=r(5611),c=r(8531),s=r(6855),d=r(7781),u=r(4724),m=r(4911),p=r(5409),f=r(8197),v=r(880);function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){g(e,t,r[t])})}return e}function y(e){var t,r,n;return null!==(t=null!==(r=null===(n=e.schema)||void 0===n?void 0:n.fields)&&void 0!==r?r:e.fields)&&void 0!==t?t:[]}function b(e,t){const r=y(e).findIndex(e=>{var r;return(null===(r=e.name)||void 0===r?void 0:r.toLowerCase())===t.toLowerCase()});return r<0?[]:function(e,t){var r,n,a;const o=null===(a=e.data)||void 0===a||null===(n=a.values)||void 0===n?void 0:n[t];if(Array.isArray(o))return o;const i=y(e)[t];return null!==(r=null==i?void 0:i.values)&&void 0!==r?r:[]}(e,r)}function S(e){return y(e).some(e=>"source"===e.name)}function w(e){if(null==e||""===e)return{label:"—"};if("number"==typeof e&&!Number.isNaN(e))return{numeric:e,label:x(e)};const t=String(e).trim(),r=t.match(/([-+]?\d[\d.,]*)/);if(!r)return{label:t};const n=Number(r[1].replace(",","."));return Number.isNaN(n)?{label:t}:{numeric:n,label:t}}function x(e){return e>=100?e.toFixed(0):e>=10?e.toFixed(1):e.toFixed(2)}function E(e,t){const r=e.toLowerCase(),n=t.toLowerCase();return r===n||r.includes(n)||n.includes(r)}function $(e,t,r,n,a){return{service:e,direction:t,rate:r,errorRate:n,latencyP95:a,rateLabel:(0,v.Y5)(r),errorLabel:(0,v.l9)(n),latencyLabel:(0,v.je)(a),navigable:(0,f.gL)(e)}}function N(e,t,r,n){var a,o,i;void 0!==t&&(e.rate=(null!==(a=e.rate)&&void 0!==a?a:0)+t,e.rateLabel=(0,v.Y5)(e.rate));void 0!==r&&(e.errorRate=Math.max(null!==(o=e.errorRate)&&void 0!==o?o:0,r),e.errorLabel=(0,v.l9)(e.errorRate));void 0!==n&&(e.latencyP95=Math.max(null!==(i=e.latencyP95)&&void 0!==i?i:0,n),e.latencyLabel=(0,v.je)(e.latencyP95))}var P=r(8448),R=r(1561);function k(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function L(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){k(o,n,a,i,l,"next",e)}function l(e){k(o,n,a,i,l,"throw",e)}i(void 0)})}}function M(e){var t,r;const n=(0,d.dateTime)(null!==(t=null==e?void 0:e.from)&&void 0!==t?t:Date.now()-36e5),a=(0,d.dateTime)(null!==(r=null==e?void 0:e.to)&&void 0!==r?r:Date.now());return{series:[],state:d.LoadingState.Done,timeRange:{from:n,to:a,raw:{from:n,to:a}}}}function D(e,t,r){return L(function*(){const n=(0,P.Zv)(e.timeRange),a=(0,p.AF)(t,r),o=(0,p.er)(t,r),i=(0,p.GI)(t,r),l=yield Promise.all(a.map(e=>(0,R.uJ)(t.metricsDatasourceUid,{expr:e,instant:!0,range:!1},n))),c=l.filter(e=>!(0,m.T1)(e)),s=l.map(e=>(0,m.T1)(e)).filter(Boolean);var d;if(0===c.length)return{edges:[],error:null!==(d=s[0])&&void 0!==d?d:"Nenhum dado de service graph retornado. Verifique se o Tempo/Alloy gera métricas traces_service_graph_* no Prometheus.",timeRange:n};const u=(0,p.HF)(c);if(0===u.length)return{edges:[],error:"Nenhum dado de service graph retornado. Verifique se o Tempo/Alloy gera métricas traces_service_graph_* no Prometheus.",timeRange:n};const[f,v]=yield Promise.all([Promise.all(o.map(e=>(0,R.uJ)(t.metricsDatasourceUid,{expr:e,instant:!0,range:!1},n))),Promise.all(i.map(e=>(0,R.uJ)(t.metricsDatasourceUid,{expr:e,instant:!0,range:!1},n)))]);return{edges:(0,p.EP)((0,p.Bn)(u,f),v),timeRange:n}})()}function z(e,t,r){return L(function*(){if(!t.metricsDatasourceUid)return{data:M(),dependencies:[],error:"Configure o datasource Prometheus/Mimir na página de configuração do app."};const n=!1!==(null==r?void 0:r.scopeToService),a=n?{deployment:e.deployment,namespace:e.namespace,cluster:e.cluster}:void 0,{edges:o,error:i,timeRange:l}=yield D(e,t,a);if(i)return{data:M(l),dependencies:[],error:i};const c=(0,p.Vx)(o),s=c.map(e=>({schema:{fields:e.fields.map(e=>({name:e.name,type:e.type}))},data:{values:e.fields.map(e=>e.values.toArray())}}));const u=n?function(e,t){const r=new Map;for(const n of e){let e,a="";if(E(n.client,t))e="downstream",a=n.server;else{if(!E(n.server,t))continue;e="upstream",a=n.client}if(!a||E(a,t))continue;const o=`${e}:${a}`,i=r.get(o);i?N(i,n.rate,n.errorRate,n.latencyP95):r.set(o,$(a,e,n.rate,n.errorRate,n.latencyP95))}return Array.from(r.values()).sort((e,t)=>{var r,n;return(null!==(r=t.rate)&&void 0!==r?r:0)-(null!==(n=e.rate)&&void 0!==n?n:0)})}(o,e.deployment):function(e,t,r=!0){const n=e.find(S);if(!n)return[];const a=b(n,"source").map(String),o=b(n,"target").map(String),i=b(n,"mainstat"),l=b(n,"secondarystat"),c=new Map;for(let e=0;e<a.length;e+=1){var s,d;const n=null!==(s=a[e])&&void 0!==s?s:"",u=null!==(d=o[e])&&void 0!==d?d:"",m=w(i[e]),p=w(l[e]);let f,v="";if(r&&t)if(E(n,t))f="downstream",v=u;else{if(!E(u,t))continue;f="upstream",v=n}else f="downstream",v=`${n} → ${u}`;if(!v||r&&E(v,t))continue;const g=`${f}:${v}`,y=c.get(g);y?N(y,m.numeric,p.numeric):c.set(g,h({},$(v,f,m.numeric,p.numeric)))}return Array.from(c.values()).sort((e,t)=>{var r,n;return(null!==(r=t.rate)&&void 0!==r?r:0)-(null!==(n=e.rate)&&void 0!==n?n:0)})}(s,e.deployment,!1);return{data:{series:c,state:d.LoadingState.Done,timeRange:{from:(0,d.dateTime)(l.from),to:(0,d.dateTime)(l.to),raw:{from:(0,d.dateTime)(l.from),to:(0,d.dateTime)(l.to)}}},dependencies:u}})()}var T=r(5612),U=r(980),C=r(9490),_=r(1159),A=r(9962);function F({dependencies:e,currentService:t,context:r,catalogServices:n=[],enableServiceNavigation:o=!1,testId:c=l.b.serviceMap.dependencyMetricsTable,title:s="Métricas das dependências",description:d}){const u=(0,i.useStyles2)(O),m=(0,_.useNavigate)();return a().createElement("div",{className:u.wrapper,"data-testid":c},a().createElement("header",{className:u.header},a().createElement("h3",null,s),a().createElement("p",null,null!=d?d:`Throughput, latência p95 e taxa de erro nas dependências relacionadas a ${t}.`)),a().createElement("table",{className:u.table},a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,"Serviço"),a().createElement("th",null,"Direção"),a().createElement("th",null,"Rate"),a().createElement("th",null,"Latência p95"),a().createElement("th",null,"Erro"))),a().createElement("tbody",null,0===e.length?a().createElement("tr",null,a().createElement("td",{colSpan:5,className:u.empty},"Nenhuma dependência com métricas encontrada para este serviço no período.")):e.map(e=>{return a().createElement("tr",{key:`${e.direction}-${e.service}`},a().createElement("td",{className:u.service},o&&r&&!1!==e.navigable?a().createElement(i.Button,{fill:"text",size:"sm",className:u.serviceLink,onClick:()=>(e=>{if(!r)return;const t=(0,A.L6)(e,r,n);m((0,A.SF)(t.cluster,t.namespace,t.deployment,{timeRange:r.timeRange}),{relative:"route"})})(e.service)},e.service):e.service),a().createElement("td",null,a().createElement(i.Badge,{text:(l=e.direction,function(e){return"downstream"===e?"Downstream (chama)":"Upstream (chamado por)"}(l)),color:"downstream"===e.direction?"blue":"purple"})),a().createElement("td",null,e.rateLabel),a().createElement("td",null,e.latencyLabel),a().createElement("td",null,a().createElement(i.Badge,{text:e.errorLabel,color:(t=e.errorRate,void 0===t?"darkgrey":t>=.05?"red":t>=.01?"orange":"green")})));var t,l}))))}const O=e=>({wrapper:o.css`
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    overflow: hidden;
    background: ${e.colors.background.primary};
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
  `,table:o.css`
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      text-align: left;
      padding: ${e.spacing(1.25,2)};
      border-bottom: 1px solid ${e.colors.border.weak};
      vertical-align: middle;
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
  `,service:o.css`
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
  `,serviceLink:o.css`
    padding: 0;
    min-height: 0;
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
  `,empty:o.css`
    color: ${e.colors.text.secondary};
  `});function j(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function B(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){j(o,n,a,i,l,"next",e)}function l(e){j(o,n,a,i,l,"throw",e)}i(void 0)})}}const q=[{field:"arc__success",color:"#73BF69"},{field:"arc__errors",color:"#F2495C"}];function I({context:e}){var t;const r=(0,i.useStyles2)(H),o=(0,s.U)(),d=(0,n.useRef)(null),[m,p]=(0,n.useState)({width:960,height:560}),[f,v]=(0,n.useState)(!0),[g,h]=(0,n.useState)(!1),[y,b]=(0,n.useState)(),[S,w]=(0,n.useState)([]),[x,E]=(0,n.useState)([]),[$,N]=(0,n.useState)();if((0,n.useLayoutEffect)(()=>{const e=d.current;if(!e)return;const t=new ResizeObserver(e=>{const t=e[0];t&&p({width:Math.max(Math.floor(t.contentRect.width),320),height:Math.max(Math.floor(t.contentRect.height),420)})});return t.observe(e),()=>t.disconnect()},[]),(0,n.useEffect)(()=>{if(!o.metricsDatasourceUid||!e.cluster)return;let t=!1;return B(function*(){try{const r=yield(0,T.Um)(o,e.timeRange,e.cluster);t||E(r)}catch(e){console.error(e),t||E([])}})(),()=>{t=!0}},[e.cluster,e.timeRange,o]),(0,n.useEffect)(()=>{if(!o.metricsDatasourceUid)return;let t=!1;return B(function*(){h(!0),b(void 0);try{const r=yield z(e,o,{scopeToService:f});t||(N(r.data),w(r.dependencies),b(r.error))}catch(e){console.error(e),t||(b("Não foi possível carregar o service map."),N(void 0),w([]))}finally{t||h(!1)}})(),()=>{t=!0}},[e,f,o]),!o.metricsDatasourceUid)return a().createElement(i.Alert,{title:"Service map indisponível",severity:"info"},"Configure o datasource Prometheus/Mimir na página de configuração do app.");const P=f&&e.deployment?function(e,t){return t.deployment?[...(0,u.ht)(e,t,"client"),...(0,u.ht)(e,t,"server")]:[]}(o,e):void 0;return a().createElement("section",{className:r.panel,"data-testid":l.b.serviceMap.panel},a().createElement("header",{className:r.header},a().createElement("div",null,a().createElement("h3",null,"Service map"),a().createElement("p",null,"Dependências entre serviços")),a().createElement("div",{className:r.actions},a().createElement(i.Checkbox,{label:`Focar em ${e.deployment}`,value:f,onChange:e=>v(e.currentTarget.checked),"data-testid":l.b.serviceMap.scopeToggle}),a().createElement(i.LinkButton,{variant:"secondary",icon:"external-link-alt",href:(0,U.Yr)(null!==(t=o.tracesDatasourceUid)&&void 0!==t?t:o.metricsDatasourceUid,e.timeRange,P),target:"_blank",rel:"noreferrer"},"Abrir no Explore"))),y?a().createElement(i.Alert,{title:"Service map",severity:"warning"},y):null,g?a().createElement(i.LoadingPlaceholder,{text:"Consultando service graph..."}):null,g?null:a().createElement(F,{dependencies:S,currentService:e.deployment,context:e,catalogServices:x,enableServiceNavigation:!0,title:"Dependências do serviço",description:`Serviços que chamam ou são chamados por ${e.deployment}. Clique no nome do serviço para abrir o overview.`}),!g&&(null==$?void 0:$.series.length)?a().createElement("div",{ref:d,className:r.graphHost},a().createElement(C.K,{title:"Erro ao renderizar service map"},a().createElement(c.PanelRenderer,{pluginId:"nodeGraph",title:"",width:m.width,height:m.height,data:$,options:{nodes:{mainStatUnit:"reqps",secondaryStatUnit:"percentunit",arcs:[...q]},edges:{mainStatUnit:"reqps",secondaryStatUnit:"percentunit"}}}))):null,g||(null==$?void 0:$.series.length)||y?null:a().createElement(i.Alert,{title:"Sem dados",severity:"info"},"Não há arestas/nós para exibir no período selecionado."))}const H=e=>({panel:o.css`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(1.5)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
    padding: ${e.spacing(2)};
  `,header:o.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${e.spacing(2)};
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
  `,actions:o.css`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1.5)};
    flex-wrap: wrap;
  `,graphHost:o.css`
    min-height: 560px;
    width: 100%;
  `});function J({context:e}){const t=(0,i.useStyles2)(V);return a().createElement("div",{className:t.container,"data-testid":l.b.serviceMap.container},a().createElement(I,{context:e}))}const V=e=>({container:o.css`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(2)};
  `})}}]);
//# sourceMappingURL=740.js.map?_cache=a56e58c0a16a12434df6