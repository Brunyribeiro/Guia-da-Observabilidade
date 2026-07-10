"use strict";(self.webpackChunkkubernetes_health_app=self.webpackChunkkubernetes_health_app||[]).push([[322],{7322(e,t,r){r.r(t),r.d(t,{default:()=>B});var n=r(5959),a=r.n(n),l=r(8531),o=r(6089),s=r(2007),c=r(1159),i=r(9348),u=r(4137),m=r(6855),d=r(1e3),p=r(5036);function g(e,t,r,n,a,l,o){try{var s=e[l](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function f(e){const t=(0,m.U)(),[r,a]=(0,n.useState)([]),[l,o]=(0,n.useState)(),[s,c]=(0,n.useState)(!1),[i,u]=(0,n.useState)(!1),[f,v]=(0,n.useState)(),[b,y]=(0,n.useState)([]),[h,E]=(0,n.useState)(0),k=(0,d.n)(t),w=s||i,$=(0,n.useCallback)(()=>{E(e=>e+1)},[]);(0,n.useEffect)(()=>{if(!t.metricsDatasourceUid)return a([]),o(void 0),void y([]);let r=!1;var n;return(n=function*(){c(!0),u(!0),v(void 0),y([]);try{const n=yield(0,p.aB)(t,e);if(r)return;o(n.resolvedLabel),a(n.entries),y(n.failedClusters),0===n.entries.length&&n.failedClusters.length>0&&v("Não foi possível carregar métricas de nenhum cluster.")}catch(e){console.error(e),r||(v("Não foi possível carregar a lista de clusters."),a([]))}finally{r||(c(!1),u(!1))}},function(){var e=this,t=arguments;return new Promise(function(r,a){var l=n.apply(e,t);function o(e){g(l,r,a,o,s,"next",e)}function s(e){g(l,r,a,o,s,"throw",e)}o(void 0)})})(),()=>{r=!0}},[t,e,h]);return{entries:(0,n.useMemo)(()=>[...r].sort((e,t)=>{const r={critical:0,warning:1,unknown:2,normal:3},n=r[e.status]-r[t.status];return 0!==n?n:e.cluster.localeCompare(t.cluster)}),[r]),resolvedLabel:l,loading:w,loadingDiscovery:s,loadingSummaries:i,error:f,partialErrors:b,configWarning:k,reload:$}}var v=r(721);var b=r(1762);function y(e,t){const r=(0,s.fuzzyMatch)(e.toLowerCase(),t.toLowerCase());return r.found?1e3-r.distance:-1}var h=r(2914),E=r(5192),k=r(8448);function w({favorites:e,onOpenCluster:t,onToggleFavorite:r}){const n=(0,s.useStyles2)($),l=(0,v.e4)();return 0===e.length&&0===l.length?null:a().createElement("section",{className:n.panel},e.length>0?a().createElement("div",null,a().createElement("h3",null,"Favoritos"),a().createElement("ul",{className:n.list},e.map(e=>a().createElement("li",{key:`favorite-${e}`},a().createElement("button",{type:"button",className:n.link,onClick:()=>t(e)},(0,b.Nk)(e)),a().createElement("button",{type:"button",className:n.iconButton,"aria-label":`Remover ${e} dos favoritos`,onClick:()=>r(e)},a().createElement(s.Icon,{name:"star"})))))):null,l.length>0?a().createElement("div",null,a().createElement("h3",null,"Recentes"),a().createElement("ul",{className:n.list},l.map(e=>a().createElement("li",{key:`recent-${e.cluster}-${e.viewedAt}`},a().createElement("button",{type:"button",className:n.link,onClick:()=>t(e.cluster,e.clusterLabel)},(0,b.Nk)(e.cluster)))))):null)}const $=e=>({panel:o.css`
    display: grid;
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(2)};

    h3 {
      margin: 0 0 ${e.spacing(.75)};
      font-size: ${e.typography.body.fontSize};
    }
  `,list:o.css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: ${e.spacing(1)};
  `,link:o.css`
    border: 1px solid ${e.colors.border.weak};
    background: ${e.colors.background.secondary};
    border-radius: ${e.shape.radius.default};
    padding: ${e.spacing(.75,1.25)};
    cursor: pointer;
    font: inherit;
    color: ${e.colors.text.primary};

    &:hover {
      background: ${e.colors.action.hover};
    }
  `,iconButton:o.css`
    border: none;
    background: none;
    cursor: pointer;
    color: ${e.colors.warning.text};
    margin-left: ${e.spacing(.5)};
  `});function C({compact:e,problemsOnly:t,onCompactChange:r,onProblemsOnlyChange:n}){const l=(0,s.useStyles2)(S);return a().createElement("div",{className:l.bar,role:"group","aria-label":"Filtros do catálogo"},a().createElement(s.Checkbox,{label:"Só problemas",value:t,onChange:e=>n(e.currentTarget.checked)}),a().createElement(s.Checkbox,{label:"Modo compacto",value:e,onChange:e=>r(e.currentTarget.checked)}))}const S=e=>({bar:o.css`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(1.5)};
  `});var N=r(6330),x=r(6920),O=r(9023),P=r(7922),A=r(3080),L=r(5611);function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(){const e=(0,s.useStyles2)(_),t=(0,c.useNavigate)(),[r,l]=(0,i.ok)(),[o,m]=(0,n.useState)(""),d=(0,u.NI)(r.get("timeRange")),p=(0,h.Y)(r.get("compact")),g=(0,h.Y)(r.get("problemsOnly")),{entries:$,resolvedLabel:S,loading:F,loadingDiscovery:B,loadingSummaries:j,error:I,partialErrors:T,configWarning:V,reload:z}=f(d),{favorites:D,toggleFavorite:M,isFavorite:U}=function(){const[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{t((0,v.eq)())},[]);const r=(0,n.useCallback)(e=>{t(t=>{const r=t.includes(e)?t.filter(t=>t!==e):[...t,e];return(0,v.kr)(r),r})},[]),a=(0,n.useCallback)(t=>e.includes(t),[e]);return{favorites:e,toggleFavorite:r,isFavorite:a}}(),W=(e,t)=>{const n=new URLSearchParams(r);t?n.set(e,"1"):n.delete(e),l(n)},q=(0,n.useMemo)(()=>{let e=function(e,t){const r=t.trim().toLowerCase();return r?e.map(e=>{const t=y(e.cluster,r),n=y((0,b.Nk)(e.cluster),r);return{entry:e,score:Math.max(t,n)}}).filter(e=>e.score>=0).sort((e,t)=>t.score-e.score).map(e=>e.entry):e}($,o);return g&&(e=e.filter(e=>(0,h.o)(e.status))),e},[$,g,o]),H=(e,r)=>{(0,v.On)(e,null!=r?r:S),t((0,u._S)(e,{timeRange:d,clusterLabel:null!=r?r:S}),{relative:"route"})},Y=B?"Descobrindo clusters...":j?"Consultando métricas dos clusters...":"Carregando catálogo...",J=F&&0===$.length;return a().createElement("div",{"data-testid":L.b.overview.container},a().createElement("div",{className:e.header},a().createElement("div",null,a().createElement("h1",null,"Kubernetes Health"),a().createElement("p",null,"Selecione um cluster para explorar namespaces, workloads, nodes, custo e alertas.")),a().createElement("div",{className:e.actions},a().createElement(O.$,{value:d,onChange:e=>{const t=new URLSearchParams(r);t.set("timeRange",e),l(t)}}),a().createElement(s.LinkButton,{variant:"secondary",icon:"sync",onClick:z,disabled:F},"Atualizar"),a().createElement(s.LinkButton,{variant:"secondary",icon:"fire",onClick:()=>{const e=new URLSearchParams(r);t(`../incidents?${e.toString()}`,{relative:"route"})}},"Centro de incidentes"))),a().createElement(x.W,{timeRange:d}),V?a().createElement(s.Alert,{title:"Configuração necessária",severity:"info"},V):null,a().createElement(w,{favorites:D,onOpenCluster:H,onToggleFavorite:M}),I?a().createElement(s.Alert,{title:"Erro ao carregar clusters",severity:"error"},I):null,T.length>0?a().createElement(s.Alert,{title:"Clusters parcialmente indisponíveis",severity:"warning"},"Não foi possível carregar métricas para: ",T.join(", "),"."):null,V?null:a().createElement(P.sh,{title:"Clusters disponíveis"},a().createElement("div",{className:e.toolbar},a().createElement(s.Input,{width:40,placeholder:"Buscar cluster...",value:o,onChange:e=>m(e.currentTarget.value),"data-testid":L.b.overview.searchInput,disabled:F&&0===$.length}),a().createElement("span",{className:e.summary},F&&0===$.length?Y:`${q.length} cluster(s)${o?" filtrado(s)":""}`)),a().createElement(C,{compact:p,problemsOnly:g,onCompactChange:e=>W("compact",e),onProblemsOnlyChange:e=>W("problemsOnly",e)}),J?a().createElement(P.s,null,a().createElement(A.Q,{rows:6,columns:p?3:6})):null,!J&&q.length>0?a().createElement(P.s,null,a().createElement(P.LO,{testId:L.b.overview.clusterTable},a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",{"aria-label":"Favorito"}),a().createElement("th",null,"Health"),a().createElement("th",null,"Cluster"),p?a().createElement("th",null,"Pods com problema"):a().createElement(a().Fragment,null,a().createElement("th",null,"Nodes"),a().createElement("th",null,"Pods não ready"),a().createElement("th",null,"Workloads"),a().createElement("th",null,"Restarts (",(0,k.GR)(d),")")))),a().createElement("tbody",null,q.map(t=>{const r=(0,b.Nk)(t.cluster);return a().createElement("tr",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){R(e,t,r[t])})}return e}({key:t.cluster,className:e.clickable},(0,E.H)(()=>H(t.cluster),`Abrir cluster ${r}`)),a().createElement("td",null,a().createElement("button",{type:"button",className:U(t.cluster)?e.favoriteButtonActive:e.favoriteButton,"aria-label":U(t.cluster)?`Remover ${t.cluster} dos favoritos`:`Adicionar ${t.cluster} aos favoritos`,onClick:e=>{e.stopPropagation(),M(t.cluster)}},a().createElement(s.Icon,{name:"star"}))),a().createElement("td",null,a().createElement(N.i,{status:t.status})),a().createElement("td",null,r),p?a().createElement("td",null,t.summary.podsNotReady):a().createElement(a().Fragment,null,a().createElement("td",null,t.summary.nodesReady,"/",t.summary.nodesTotal),a().createElement("td",null,t.summary.podsNotReady),a().createElement("td",null,t.summary.workloadsUnavailable),a().createElement("td",null,t.summary.restartEvents)))})))):null,J||0!==q.length||I?null:a().createElement(s.Alert,{title:"Nenhum cluster encontrado",severity:"info"},g?'Nenhum cluster com problemas no período selecionado. Desative "Só problemas" para ver todos.':"Verifique se o datasource Mimir/Prometheus possui métricas kube-state (`kube_pod_info`) ou OTel (`k8s_container_ready`). Em Configuration, confirme o datasource e o label de cluster (`k8s_cluster_name` para OTel, `cluster` para kube-state).")))}const _=e=>({header:o.css`
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
      max-width: 720px;
    }
  `,actions:o.css`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1.5)};
    flex-wrap: wrap;
  `,toolbar:o.css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(1.5)};
    flex-wrap: wrap;
  `,summary:o.css`
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,clickable:o.css`
    cursor: pointer;

    &:hover td {
      background: ${e.colors.action.hover};
    }

    &:focus-visible td {
      outline: 2px solid ${e.colors.primary.border};
      outline-offset: -2px;
    }
  `,favoriteButton:o.css`
    border: none;
    background: none;
    cursor: pointer;
    color: ${e.colors.text.disabled};
    padding: 0;
  `,favoriteButtonActive:o.css`
    border: none;
    background: none;
    cursor: pointer;
    color: ${e.colors.warning.text};
    padding: 0;
  `});const B=function(){return a().createElement(l.PluginPage,null,a().createElement(F,null))}},2914(e,t,r){function n(e){return"1"===e||"true"===e}function a(e){return"warning"===e||"critical"===e}r.d(t,{Y:()=>n,o:()=>a})},721(e,t,r){r.d(t,{On:()=>m,e4:()=>u,eq:()=>c,kr:()=>i});var n=r(2533);const a={favorites:[],recentlyViewed:[]};function l(){return`${n.id}:cluster-preferences`}function o(){try{const e=localStorage.getItem(l());if(!e)return a;const t=JSON.parse(e);return{favorites:Array.isArray(t.favorites)?t.favorites.filter(e=>"string"==typeof e):[],recentlyViewed:Array.isArray(t.recentlyViewed)?t.recentlyViewed.filter(e=>e&&"object"==typeof e&&"string"==typeof e.cluster):[]}}catch(e){return a}}function s(e){try{localStorage.setItem(l(),JSON.stringify(e))}catch(e){console.warn("Failed to persist cluster preferences",e)}}function c(){return o().favorites}function i(e){const t=o();t.favorites=e,s(t)}function u(){return o().recentlyViewed}function m(e,t){const r=o(),n={cluster:e,clusterLabel:t,viewedAt:(new Date).toISOString()};r.recentlyViewed=[n,...r.recentlyViewed.filter(t=>t.cluster!==e)].slice(0,8),s(r)}}}]);
//# sourceMappingURL=322.js.map?_cache=7238d54c7bd38e903319