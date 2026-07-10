"use strict";(self.webpackChunktroubleshooting_app=self.webpackChunktroubleshooting_app||[]).push([[687],{4031(e,t,r){r.d(t,{p:()=>l});var a=r(5959),n=r.n(a),o=r(2007);function l({title:e,children:t}){return n().createElement(o.Alert,{title:e,severity:"info"},null!=t?t:"Nenhum registro encontrado para os filtros atuais.")}},377(e,t,r){r.d(t,{Z:()=>s});var a=r(5959),n=r.n(a),o=r(6089),l=r(2007),c=r(5611);function s({service:e,isFavorite:t,onToggle:r,testId:a,compact:o=!1}){const s=(0,l.useStyles2)(i);return n().createElement("button",{type:"button",className:o?s.compactButton:s.button,"aria-label":t?`Remover ${e.deployment} dos favoritos`:`Favoritar ${e.deployment}`,"data-testid":null!=a?a:c.b.catalog.favoriteButton,onClick:e=>{e.stopPropagation(),r()}},n().createElement(l.Icon,{name:"star",className:t?s.starActive:s.starInactive}),o?null:t?"Favorito":"Favoritar")}const i=e=>({button:o.css`
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
  `})},6330(e,t,r){r.d(t,{i:()=>s});var a=r(5959),n=r.n(a),o=r(2007);const l={normal:"green",warning:"orange",critical:"red",unknown:"darkgrey"},c={normal:"Saudável",warning:"Atenção",critical:"Crítico",unknown:"Sem dados"};function s({health:e,compact:t=!1}){var r;const a=null!==(r=null==e?void 0:e.overallStatus)&&void 0!==r?r:"unknown";return t?n().createElement(o.Badge,{text:c[a],color:l[a]}):n().createElement("div",null,n().createElement(o.Badge,{text:c[a],color:l[a]}),e?n().createElement("div",{style:{marginTop:4,fontSize:12,opacity:.85}},"Erro ",e.errorRateLabel," · p95 ",e.latencyLabel," · ",e.throughputLabel):n().createElement("div",{style:{marginTop:4,fontSize:12,opacity:.65}},"Carregando saúde..."))}},7584(e,t,r){r.d(t,{a:()=>i});var a=r(5959),n=r(1610),o=r(721);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){l(e,t,r[t])})}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function i(){const[e,t]=(0,a.useState)(()=>(0,o.nC)());return{recentItems:e,recordView:(0,a.useCallback)(e=>{const r=(0,n.xW)(e),a=(new Date).toISOString();t(t=>{const l=t.filter(e=>(0,n.xW)(e)!==r),i=[s(c({},e),{viewedAt:a}),...l].slice(0,8);return(0,o.$2)(i),i})},[])}}},7632(e,t,r){r.d(t,{o:()=>l});var a=r(5959),n=r(1610),o=r(721);function l(){const[e,t]=(0,a.useState)(()=>(0,o.JR)()),r=(0,a.useCallback)(t=>e.includes((0,n.xW)(t)),[e]),l=(0,a.useCallback)(e=>{const r=(0,n.xW)(e);t(e=>{const t=e.includes(r)?e.filter(e=>e!==r):[r,...e];return(0,o.BT)(t),t})},[]);return{favoriteKeys:e,isFavorite:r,toggleFavorite:l}}},5687(e,t,r){r.r(t),r.d(t,{default:()=>q});var a=r(5959),n=r.n(a),o=r(8531),l=r(6089),c=r(2007),s=r(1159),i=r(9348),u=r(9962),m=r(6855),d=r(5612),p=r(8505),g=r(692);function f(e,t,r,a,n,o,l){try{var c=e[o](l),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(a,n)}function y(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function l(e){f(o,a,n,l,c,"next",e)}function c(e){f(o,a,n,l,c,"throw",e)}l(void 0)})}}const v=[{label:"Selecione um cluster",value:"all"}];var b=r(7632),h=r(7584),E=r(880);function w(e,t,r,a,n,o,l){try{var c=e[o](l),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(a,n)}function $(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function l(e){w(o,a,n,l,c,"next",e)}function c(e){w(o,a,n,l,c,"throw",e)}l(void 0)})}}function S(e){return`${e.cluster}/${e.namespace}/${e.deployment}`}function k(e,t,r){const n=(0,m.U)(),[o,l]=(0,a.useState)({}),[c,s]=(0,a.useState)({}),[i,u]=(0,a.useState)(!1),[d,f]=(0,a.useState)(!1),[y,v]=(0,a.useState)(),b=(0,a.useMemo)(()=>function(e){const t=new Set;return e.filter(e=>{const r=S(e);return!t.has(r)&&(t.add(r),!0)})}(e),[e]);return(0,a.useEffect)(()=>{if(!r||!n.metricsDatasourceUid||0===b.length)return l({}),s({}),u(!1),f(!1),void v(void 0);let e=!1;return $(function*(){u(!0),f(!0),v(void 0);const r=new Map;for(const e of b){var a;const t=null!==(a=r.get(e.cluster))&&void 0!==a?a:[];t.push(e),r.set(e.cluster,t)}const o={},c={},i=[];yield Promise.all([...r.entries()].map(([e,r])=>$(function*(){try{const[a,l]=yield Promise.all([(0,p.QV)(n,e,t,r),(0,g.tp)(n,e,t,r)]);for(const e of r){const t=S(e),r=(0,E.TD)(e.namespace,e.deployment);a[r]&&(o[t]=a[r]),l[r]&&(c[t]=l[r])}}catch(t){console.error(t),i.push(e)}})())),e||(l(o),s(c),i.length===r.size?v("Não foi possível carregar health dos favoritos e recentes."):i.length>0&&v(function(e){const t=e.slice(0,3).join(", "),r=e.length>3?` e mais ${e.length-3} cluster(s)`:"";return`Falha parcial ao carregar favoritos em ${e.length} cluster(s): ${t}${r}.`}(i))),e||(u(!1),f(!1))})(),()=>{e=!0}},[r,n,t,b]),{watchlist:b,healthByKey:o,runtimesByKey:c,loading:i,loadingRuntimes:d,error:y}}var O=r(1057);function x(e,t){const r=(0,c.fuzzyMatch)(e.toLowerCase(),t.toLowerCase());return r.found?1e3-r.distance:-1}function C(e){return"1"===e||"true"===e}function N(e){return!!e&&("warning"===e.overallStatus||"critical"===e.overallStatus)}var P=r(9604),j=r(5192),D=r(1610);function F({compact:e,problemsOnly:t,onCompactChange:r,onProblemsOnlyChange:a}){const o=(0,c.useStyles2)(B);return n().createElement("div",{className:o.bar,role:"group","aria-label":"Filtros do catálogo"},n().createElement(c.Checkbox,{label:"Só problemas",value:t,onChange:e=>a(e.currentTarget.checked)}),n().createElement(c.Checkbox,{label:"Modo compacto",value:e,onChange:e=>r(e.currentTarget.checked)}))}const B=e=>({bar:l.css`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(1.5)};
  `});var R=r(4031),L=r(377),I=r(6330),U=r(6920),A=r(3080),T=r(9023),z=r(5611);function M({title:e,items:t,testId:r,onOpen:a,onToggleFavorite:o,isFavorite:l,styles:s}){return 0===t.length?null:n().createElement("section",{className:s.section,"data-testid":r},n().createElement("h3",null,e),n().createElement("div",{className:s.chips},t.map(e=>n().createElement("div",{key:`${e.cluster}/${e.namespace}/${e.deployment}`,className:s.chip},n().createElement("button",{type:"button",className:s.chipButton,onClick:()=>a(e)},(0,D.Be)(e)),n().createElement("button",{type:"button",className:s.starButton,"aria-label":l(e)?"Remover favorito":"Adicionar favorito",onClick:()=>o(e)},n().createElement(c.Icon,{name:"star",className:l(e)?s.starActive:s.starInactive}))))))}function W({favorites:e,recentItems:t,onOpen:r,onToggleFavorite:a,isFavorite:o}){const l=(0,c.useStyles2)(K);return 0===e.length&&0===t.length?null:n().createElement("div",{className:l.panel},n().createElement(M,{title:"Favoritos",items:e,testId:z.b.catalog.favoritesPanel,onOpen:r,onToggleFavorite:a,isFavorite:o,styles:l}),n().createElement(M,{title:"Vistos recentemente",items:t,testId:z.b.catalog.recentlyViewedPanel,onOpen:r,onToggleFavorite:a,isFavorite:o,styles:l}))}const K=e=>({panel:l.css`
    display: grid;
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(3)};
  `,section:l.css`
    h3 {
      margin: 0 0 ${e.spacing(1)};
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightMedium};
      color: ${e.colors.text.secondary};
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
  `,chips:l.css`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.spacing(1)};
  `,chip:l.css`
    display: inline-flex;
    align-items: stretch;
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    overflow: hidden;
    background: ${e.colors.background.secondary};
  `,chipButton:l.css`
    border: none;
    background: none;
    color: ${e.colors.text.primary};
    cursor: pointer;
    padding: ${e.spacing(.75,1.25)};
    font: inherit;

    &:hover {
      background: ${e.colors.action.hover};
    }
  `,starButton:l.css`
    border: none;
    border-left: 1px solid ${e.colors.border.weak};
    background: none;
    color: ${e.colors.text.secondary};
    cursor: pointer;
    padding: ${e.spacing(.75,1)};
    display: inline-flex;
    align-items: center;

    &:hover {
      color: ${e.colors.warning.main};
      background: ${e.colors.action.hover};
    }
  `,starActive:l.css`
    color: ${e.colors.warning.main};
  `,starInactive:l.css`
    opacity: 0.45;
  `});function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}const J=[{label:"Nome",value:"name"},{label:"Saúde (críticos primeiro)",value:"health"},{label:"Maior taxa de erro",value:"errorRate"},{label:"Maior latência",value:"latency"}];function Q(e){return`${e.cluster}/${e.namespace}/${e.deployment}`}function Z(){var e;const t=(0,c.useStyles2)(_),r=(0,s.useNavigate)(),[o,l]=(0,i.ok)(),f=(0,m.U)(),w=(0,O.nO)(f),$=null!==(e=o.get("cluster"))&&void 0!==e?e:"all",S=(0,u.NI)(o.get("timeRange")),B=C(o.get("compact")),M=C(o.get("problemsOnly")),K=C(o.get("legacyInvestigate")),[Z,q]=(0,a.useState)(""),[G,X]=(0,a.useState)("health"),Y=e=>{const t=new URLSearchParams(o);for(const[r,a]of Object.entries(e))null===a||"cluster"===r&&"all"===a?t.delete(r):t.set(r,a);l(t)},ee=(e,t)=>{const r=new URLSearchParams(o);t?r.set(e,"1"):r.delete(e),l(r)},{favoriteKeys:te,isFavorite:re,toggleFavorite:ae}=(0,b.o)(),{recentItems:ne}=(0,h.a)(),oe=(0,a.useMemo)(()=>te.map(e=>(0,D.oU)(e)).filter(e=>Boolean(e)),[te]),le=(0,a.useMemo)(()=>[...oe,...ne],[oe,ne]),{watchlist:ce,healthByKey:se,runtimesByKey:ie,loading:ue,loadingRuntimes:me,error:de}=k(le,S,"all"===$&&!w),{services:pe,healthByKey:ge,runtimesByKey:fe,clusters:ye,loading:ve,loadingServices:be,loadingHealth:he,loadingRuntimes:Ee,error:we,reload:$e,hasDatasource:Se}=function(e,t,r){const n=(0,m.U)(),[o,l]=(0,a.useState)([]),[c,s]=(0,a.useState)({}),[i,u]=(0,a.useState)({}),[f,b]=(0,a.useState)(v),[h,E]=(0,a.useState)(!1),[w,$]=(0,a.useState)(!1),[S,k]=(0,a.useState)(!1),[O,x]=(0,a.useState)(!1),[C,N]=(0,a.useState)(),[P,j]=(0,a.useState)(0),D=Boolean(n.metricsDatasourceUid||n.logsDatasourceUid),F=(0,a.useMemo)(()=>({metricsDatasourceUid:n.metricsDatasourceUid,logsDatasourceUid:n.logsDatasourceUid,tracesDatasourceUid:n.tracesDatasourceUid,deploymentLabel:n.deploymentLabel,namespaceLabel:n.namespaceLabel,clusterLabel:n.clusterLabel}),[n.clusterLabel,n.deploymentLabel,n.logsDatasourceUid,n.metricsDatasourceUid,n.namespaceLabel,n.tracesDatasourceUid]),B=(0,a.useMemo)(()=>(0,p.uK)(o,c,r),[c,o,r]),R=(0,a.useCallback)(()=>{j(e=>e+1)},[]);(0,a.useEffect)(()=>{if(!D)return;let e=!1;return y(function*(){E(!0);try{const r=yield(0,d.rR)(F,t);if(e)return;b([...v,...r.values.map(e=>({label:e,value:e}))])}catch(t){console.error(t),e||N("Não foi possível carregar clusters.")}finally{e||E(!1)}})(),()=>{e=!0}},[F,D,P,t]),(0,a.useEffect)(()=>{if(!D||"all"===e)return;let r=!1;const a={};return y(function*(){$(!0),k(!1),x(!1),s({}),u({}),N(void 0);try{const o=yield(0,d.rR)(F,t);if(r)return;a.cluster=o.label;const c=yield(0,d.Um)(F,t,e,a);if(r)return;if(l(c),0===c.length)return void N("Nenhum workload encontrado neste cluster para o período selecionado.");if(!n.metricsDatasourceUid)return;k(!0),x(!0);const[i,m]=yield Promise.all([(0,p.QV)(F,e,t,c),(0,g.tp)(F,e,t,c)]);r||(s(i),u(m))}catch(e){console.error(e),r||(N("Não foi possível carregar o catálogo de workloads."),l([]),s({}),u({}))}finally{r||($(!1),k(!1),x(!1))}})(),()=>{r=!0}},[e,F,D,P,n.metricsDatasourceUid,t]);const L=D&&"all"!==e;return{services:L?B:[],healthByKey:L?c:{},runtimesByKey:L?i:{},clusters:f,loading:h||L&&w,loadingClusters:h,loadingServices:!!L&&w,loadingHealth:!!L&&S,loadingRuntimes:!!L&&O,error:L?C:void 0,reload:R,hasDatasource:D}}($,S,G),ke=(0,a.useMemo)(()=>{let e=function(e,t){const r=t.trim().toLowerCase();return r?e.map(e=>{const t=x(e.deployment,r),a=x(e.namespace,r),n=x(e.cluster,r),o=x(`${e.deployment} ${e.namespace} ${e.cluster}`,r);return{service:e,score:Math.max(t,a,n,o)}}).filter(e=>e.score>=0).sort((e,t)=>t.score-e.score).map(e=>e.service):e}(pe,Z);return M&&(e=e.filter(e=>N(ge[(0,E.TD)(e.namespace,e.deployment)]))),e},[ge,M,Z,pe]),Oe=(0,a.useMemo)(()=>{let e=ce;return M&&(e=e.filter(e=>N(se[Q(e)]))),e},[M,ce,se]),xe=e=>{r((0,u.al)(e.cluster,e.namespace,e.deployment,{timeRange:S}),{relative:"route"})},Ce=(e,r,a,o,l=Ee)=>{var c,s,i;return n().createElement("tr",H(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){V(e,t,r[t])})}return e}({key:Q(e),className:t.clickableRow},(0,j.H)(()=>xe(e),`Abrir workload ${e.deployment} no namespace ${e.namespace}`)),{"data-testid":z.b.catalog.row}),n().createElement("td",null,n().createElement(L.Z,{service:e,isFavorite:re(e),onToggle:()=>ae(e),compact:!0})),n().createElement("td",null,n().createElement(I.i,{health:r,compact:!0})),n().createElement("td",{className:t.appCell},n().createElement("span",null,e.deployment)),n().createElement("td",null,e.namespace),o?n().createElement("td",null,(0,P.N)(e.cluster)):null,B?null:n().createElement(n().Fragment,null,n().createElement("td",null,null!==(c=null==r?void 0:r.errorRateLabel)&&void 0!==c?c:he||ue?"...":"—"),n().createElement("td",null,null!==(s=null==r?void 0:r.latencyLabel)&&void 0!==s?s:he||ue?"...":"—"),n().createElement("td",null,null!==(i=null==r?void 0:r.throughputLabel)&&void 0!==i?i:he||ue?"...":"—"),n().createElement("td",{className:t.runtimeCell},l?"...":a)))};return n().createElement("div",{"data-testid":z.b.catalog.container},n().createElement("div",{className:t.header},n().createElement("div",null,n().createElement("h1",null,"Observabilidade"),n().createElement("p",null,"Selecione um cluster para ver todos os workloads com health em tempo real. Use favoritos e busca fuzzy para encontrar serviços rapidamente durante incidentes.")),n().createElement("div",{className:t.headerActions},n().createElement(c.LinkButton,{variant:"secondary",icon:"sync",onClick:$e,disabled:ve},"Recarregar"),n().createElement(c.LinkButton,{variant:"secondary",icon:"fire",onClick:()=>{const e=new URLSearchParams(o);r(`../incidents?${e.toString()}`,{relative:"route"})}},"Centro de incidentes"))),n().createElement(U.W,{timeRange:S}),K?n().createElement(c.Alert,{title:"Rota atualizada",severity:"info",onRemove:()=>Y({legacyInvestigate:null}),"data-testid":z.b.catalog.legacyInvestigateBanner},"A página ",n().createElement("strong",null,"Investigar")," foi substituída por este catálogo. Selecione um cluster, encontre a workload e abra a visão geral com abas de logs, traces e métricas."):null,n().createElement(W,{favorites:oe,recentItems:ne,onOpen:xe,onToggleFavorite:ae,isFavorite:re}),w?n().createElement(c.Alert,{title:"Configuração necessária",severity:"info"},w):null,n().createElement("div",{className:t.toolbar},n().createElement(c.Field,{label:"Cluster"},n().createElement(c.Select,{width:32,options:ye,value:$,isLoading:ve&&"all"===$,onChange:e=>{var t;return Y({cluster:null!==(t=e.value)&&void 0!==t?t:"all"})}})),n().createElement(T.$,{value:S,onChange:e=>Y({timeRange:e})}),n().createElement(c.Field,{label:"Ordenar por"},n().createElement(c.Select,{width:28,options:J,value:G,onChange:e=>{var t;return X(null!==(t=e.value)&&void 0!==t?t:"health")},disabled:"all"===$})),n().createElement(c.Field,{label:"Buscar app"},n().createElement(c.Input,{width:32,placeholder:"Busca fuzzy (ex: pay prod)",value:Z,onChange:e=>q(e.currentTarget.value),disabled:"all"===$,"data-testid":z.b.catalog.searchInput}))),n().createElement(F,{compact:B,problemsOnly:M,onCompactChange:e=>ee("compact",e),onProblemsOnlyChange:e=>ee("problemsOnly",e)}),we?n().createElement(c.Alert,{title:"Catálogo de workloads",severity:"warning"},we):null,de?n().createElement(c.Alert,{title:"Favoritos e recentes",severity:"warning"},de):null,"all"===$&&Se?n().createElement(n().Fragment,null,0===le.length?n().createElement(R.p,{title:"Selecione um cluster ou favorite um workload"},"Escolha um cluster acima para listar todas as apps, ou use favoritos e recentes para acompanhar serviços críticos sem sair desta tela."):null,le.length>0?n().createElement("div",{className:t.tableWrapper},n().createElement("h3",{className:t.sectionTitle},"Favoritos e recentes"),ue?n().createElement(A.Q,{rows:4,columns:B?4:6}):0===Oe.length?n().createElement(R.p,{title:"Nenhum serviço com problemas"},'Nenhum favorito ou recente está degradado no período. Desative "Só problemas" para ver todos.'):n().createElement("div",{className:t.tableScroll},n().createElement("table",{className:t.table},n().createElement("thead",null,n().createElement("tr",null,n().createElement("th",null),n().createElement("th",null,"Saúde"),n().createElement("th",null,"Workload"),n().createElement("th",null,"Namespace"),n().createElement("th",null,"Cluster"),B?null:n().createElement(n().Fragment,null,n().createElement("th",null,"Erro"),n().createElement("th",null,"Latência p95"),n().createElement("th",null,"Taxa"),n().createElement("th",null,"Runtime")))),n().createElement("tbody",null,Oe.map(e=>Ce(e,se[Q(e)],(0,g.ll)(ie[Q(e)]),!0,me)))))):null):null,be&&"all"!==$?n().createElement("div",{className:t.tableWrapper},n().createElement(A.Q,{rows:6,columns:B?4:7})):null,be||"all"===$||0!==ke.length?null:n().createElement(R.p,{title:"Nenhum workload encontrado"},M?'Nenhum workload com problemas no período. Desative "Só problemas" para ver todos.':"Nenhum workload encontrado para os filtros atuais. Ajuste a busca ou recarregue o catálogo."),!be&&"all"!==$&&ke.length>0?n().createElement("div",{className:t.tableWrapper},n().createElement("div",{className:t.tableScroll},n().createElement("table",{className:t.table,"data-testid":z.b.catalog.table},n().createElement("thead",null,n().createElement("tr",null,n().createElement("th",null),n().createElement("th",null,"Saúde"),n().createElement("th",null,"Workload"),n().createElement("th",null,"Namespace"),B?null:n().createElement(n().Fragment,null,n().createElement("th",null,"Erro"),n().createElement("th",null,"Latência p95"),n().createElement("th",null,"Taxa"),n().createElement("th",null,"Runtime")))),n().createElement("tbody",null,ke.map(e=>{const t=(0,E.TD)(e.namespace,e.deployment),r=ge[t],a=(0,g.ll)(fe[t]);return Ce(e,r,a,!1)})))),n().createElement("p",{className:t.summary},ke.length," workload(s)",Z.trim()?` filtrada(s) de ${pe.length}`:"",he?" · calculando saúde...":"",Ee?" · detectando runtime...":"")):null)}const _=e=>({header:l.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(3)};

    h1 {
      margin: 0 0 ${e.spacing(1)};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      max-width: 900px;
    }
  `,headerActions:l.css`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
    flex-shrink: 0;
  `,toolbar:l.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(2)};
  `,sectionTitle:l.css`
    margin: 0 0 ${e.spacing(1.5)};
    padding: ${e.spacing(1.5,2,0)};
    font-size: ${e.typography.h5.fontSize};
  `,tableWrapper:l.css`
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    overflow: hidden;
    margin-bottom: ${e.spacing(2)};
  `,tableScroll:l.css`
    overflow-x: auto;
  `,table:l.css`
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;

    th,
    td {
      padding: ${e.spacing(1.5,2)};
      text-align: left;
      border-bottom: 1px solid ${e.colors.border.weak};
      vertical-align: middle;
    }

    th {
      background: ${e.colors.background.secondary};
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightMedium};
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    tbody tr:last-child td {
      border-bottom: none;
    }
  `,clickableRow:l.css`
    cursor: pointer;

    &:hover td {
      background: ${e.colors.action.hover};
    }

    &:focus-visible td {
      outline: 2px solid ${e.colors.primary.border};
      outline-offset: -2px;
    }
  `,appCell:l.css`
    font-weight: ${e.typography.fontWeightMedium};
  `,runtimeCell:l.css`
    color: ${e.colors.text.secondary};
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
    white-space: nowrap;
  `,summary:l.css`
    margin: 0;
    padding: ${e.spacing(1.5,2)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
    background: ${e.colors.background.primary};
  `});const q=function(){return n().createElement(o.PluginPage,null,n().createElement(Z,null))}},5192(e,t,r){function a(e,t){return{role:"button",tabIndex:0,onClick:e,onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),e())},"aria-label":t}}r.d(t,{H:()=>a})},1610(e,t,r){function a(e){return`${e.cluster}/${e.namespace}/${e.deployment}`}function n(e){const t=e.split("/");if(3!==t.length)return;const[r,a,n]=t;return r&&a&&n?{cluster:r,namespace:a,deployment:n}:void 0}function o(e){return`${e.deployment} (${e.namespace})`}r.d(t,{Be:()=>o,oU:()=>n,xW:()=>a})},721(e,t,r){r.d(t,{$2:()=>m,BT:()=>i,JR:()=>s,nC:()=>u});const a=`${r(2533).id}:`,n={favorites:[],recentlyViewed:[]};function o(e){return`${a}${e}`}function l(){try{const e=localStorage.getItem(o("preferences"));if(!e)return n;const t=JSON.parse(e);return{favorites:Array.isArray(t.favorites)?t.favorites.filter(e=>"string"==typeof e):[],recentlyViewed:Array.isArray(t.recentlyViewed)?t.recentlyViewed.filter(e=>e&&"object"==typeof e&&"string"==typeof e.cluster&&"string"==typeof e.namespace&&"string"==typeof e.deployment):[]}}catch(e){return n}}function c(e){try{localStorage.setItem(o("preferences"),JSON.stringify(e))}catch(e){console.warn("Failed to persist user preferences",e)}}function s(){return l().favorites}function i(e){const t=l();t.favorites=e,c(t)}function u(){return l().recentlyViewed}function m(e){const t=l();t.recentlyViewed=e,c(t)}}}]);
//# sourceMappingURL=687.js.map?_cache=43dc9a3d86b569377c9e