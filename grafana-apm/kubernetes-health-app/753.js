"use strict";(self.webpackChunkkubernetes_health_app=self.webpackChunkkubernetes_health_app||[]).push([[753],{7753(e,t,n){n.r(t),n.d(t,{ClusterCostTab:()=>j});var a=n(5959),l=n.n(a),r=n(6089),c=n(2007),o=n(6855),s=n(7883),i=n(3773),m=n(3378),u=n(5192),d=n(3042),p=n(1335),E=n(980),g=n(3288),h=n(7922),b=n(5611);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function v({cluster:e,budgetUsd:t,namespaceRows:n,budgetAlerts:a,recommendations:r,storageRows:o,metricsDatasourceUid:s,metricsBackend:i,metricsFilter:u="",cpuRateUsd:v,memoryRateUsd:U,trendChangeByNamespace:w,onOpenTab:C,onSelectRecommendation:P}){const S=(0,c.useStyles2)(k),$=s&&i?(0,E.H_)(s,(0,E.x3)(i,u,v,U),"7d"):void 0;return l().createElement(l().Fragment,null,l().createElement(h.sh,{title:"FinOps — orçamento, tendência e recomendações"},l().createElement("div",{className:S.actions},l().createElement(c.Button,{size:"sm",variant:"secondary",icon:"download-alt",onClick:()=>{const a=(0,m.uM)({cluster:e,namespaceRows:n.map(e=>f(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){y(e,t,n[t])})}return e}({},e),{budgetStatus:(0,m.lk)(e.estimatedMonthlyUsd,t),trendChangePercent:null==w?void 0:w.get(e.namespace)})),budgetUsd:t,recommendations:r,storageRows:o});(0,m.MT)(`finops-${e}-${(new Date).toISOString().slice(0,10)}.csv`,a)},"data-testid":b.b.cluster.finOpsExport},"Exportar CSV"),$?l().createElement(g.A,{href:$,label:"Custo no Explore (7d)"}):null,a.length>0?l().createElement(c.Button,{size:"sm",variant:"secondary",onClick:()=>null==C?void 0:C("alerts")},"Ver alertas de orçamento (",a.length,")"):null),t?l().createElement("p",{className:S.hint},"Orçamento mensal por namespace: ",l().createElement("strong",null,(0,d.UK)(t)),". Alertas quando uso ≥"," ",80,"% do limite."):l().createElement(c.Alert,{title:"Orçamento não configurado",severity:"info"},"Defina um orçamento mensal por namespace abaixo ou em Apps → Kubernetes Health → Configuration para habilitar alertas FinOps."),a.length>0?l().createElement(h.s,null,l().createElement(h.LO,{testId:b.b.cluster.budgetAlertTable},l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,"Namespace"),l().createElement("th",null,"Custo estimado"),l().createElement("th",null,"Orçamento"),l().createElement("th",null,"Uso"),l().createElement("th",null,"Excedente"),l().createElement("th",null,"Severidade"))),l().createElement("tbody",null,a.map(e=>l().createElement("tr",{key:e.namespace},l().createElement("td",null,e.namespace),l().createElement("td",null,(0,d.UK)(e.estimatedMonthlyUsd)),l().createElement("td",null,(0,d.UK)(e.budgetUsd)),l().createElement("td",null,e.usagePercent,"%"),l().createElement("td",null,e.overageUsd>0?(0,d.UK)(e.overageUsd):"—"),l().createElement("td",null,l().createElement(c.Badge,{text:"critical"===e.severity?"Crítico":"Atenção",color:"critical"===e.severity?"red":"orange"}))))))):null),r.length>0?l().createElement(h.sh,{title:"Recomendações de rightsizing"},l().createElement(h.s,null,l().createElement(h.LO,{testId:b.b.cluster.recommendationsTable},l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,"Namespace"),l().createElement("th",null,"Workload"),l().createElement("th",null,"Recurso"),l().createElement("th",null,"Redução"),l().createElement("th",null,"Waste/mês"),l().createElement("th",null,"Recomendação"),l().createElement("th",null,"Ações"))),l().createElement("tbody",null,r.map(e=>{const t=s&&i?(0,E.H_)(s,(0,E.cm)(i,u,e.namespace,v,U),"7d"):void 0;return l().createElement("tr",{key:`${e.namespace}/${e.kind}/${e.workloadName}/${e.resource}`},l().createElement("td",null,e.namespace),l().createElement("td",null,(0,p.RY)(e.kind)," / ",e.workloadName),l().createElement("td",null,"cpu"===e.resource?"CPU":"Memória"),l().createElement("td",null,e.reductionPercent,"%"),l().createElement("td",null,void 0!==e.wasteMonthlyUsd?(0,d.UK)(e.wasteMonthlyUsd):"—"),l().createElement("td",null,e.summary),l().createElement("td",null,l().createElement("div",{className:S.rowActions},P?l().createElement(c.Button,{size:"sm",variant:"secondary",onClick:()=>P(e.namespace,e.workloadName,e.kind)},"Abrir workload"):null,t?l().createElement(g.A,{href:t,label:"Explore"}):null)))}))))):null)}function U({status:e}){return l().createElement(c.Badge,{text:(0,m.CM)(e),color:(0,m.JE)(e)})}const k=e=>({actions:r.css`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.spacing(1)};
    margin-bottom: ${e.spacing(1.5)};
  `,hint:r.css`
    margin: 0 0 ${e.spacing(1.5)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,rowActions:r.css`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.spacing(.5)};
  `});function w(e){return void 0===e?"—":`${e}%`}function C({result:e,onOpenTab:t,onNamespaceSelect:n}){const a=(0,c.useStyles2)(P),{cluster:r}=e,o=(0,d.pm)(r.efficiencyScore);return l().createElement(l().Fragment,null,l().createElement(h.sh,{title:"Eficiência do cluster"},l().createElement("div",{className:a.cards,"data-testid":b.b.cluster.resourceEfficiencyCards},l().createElement("button",{type:"button",className:a.card,onClick:()=>null==t?void 0:t("nodes")},l().createElement("span",{className:a.cardLabel},"Score de eficiência"),l().createElement("span",{className:a.cardValue},void 0!==r.efficiencyScore?l().createElement(c.Badge,{text:`${r.efficiencyScore}%`,color:o}):"—"),l().createElement("span",{className:a.cardHint},"Uso médio vs capacidade allocatable")),l().createElement("button",{type:"button",className:a.card,onClick:()=>null==t?void 0:t("nodes")},l().createElement("span",{className:a.cardLabel},"CPU do cluster"),l().createElement("span",{className:a.cardValue},(0,d.wF)(r.cpuUsageCores)," / ",(0,d.wF)(r.cpuAllocatableCores)),l().createElement("span",{className:a.cardHint},w(r.cpuUtilizationPercent)," utilizado")),l().createElement("button",{type:"button",className:a.card,onClick:()=>null==t?void 0:t("nodes")},l().createElement("span",{className:a.cardLabel},"Memória do cluster"),l().createElement("span",{className:a.cardValue},r.memoryUsageGiB.toFixed(1)," / ",r.memoryAllocatableGiB.toFixed(1)," GiB"),l().createElement("span",{className:a.cardHint},w(r.memoryUtilizationPercent)," utilizada")),l().createElement("button",{type:"button",className:a.card,onClick:()=>null==t?void 0:t("storage")},l().createElement("span",{className:a.cardLabel},"Storage provisionado"),l().createElement("span",{className:a.cardValue},e.storageTotalGiB.toFixed(1)," GiB"),l().createElement("span",{className:a.cardHint},(0,d.UK)(e.storageMonthlyUsd),"/mês",void 0!==e.storageUsedGiB?` · ${e.storageUsedGiB.toFixed(1)} GiB em uso`:"")))),e.lowUtilNodes.length>0?l().createElement(h.sh,{title:"Nodes subutilizados (< 25% — candidatos a scale-down)"},l().createElement(h.s,null,l().createElement(h.LO,{testId:b.b.cluster.lowUtilNodeTable},l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,"Node"),l().createElement("th",null,"CPU"),l().createElement("th",null,"Memória"),l().createElement("th",null,"Pico util."),l().createElement("th",null,"Pods"))),l().createElement("tbody",null,e.lowUtilNodes.map(e=>{var t,n,a;return l().createElement("tr",{key:e.name},l().createElement("td",null,e.name),l().createElement("td",null,(0,d.wF)(e.cpuUsageCores)," / ",(0,d.wF)(e.cpuCapacityCores)," (",w(e.cpuUsagePercent),")"),l().createElement("td",null,(null!==(t=e.memoryUsageGiB)&&void 0!==t?t:0).toFixed(1)," / ",(null!==(n=e.memoryCapacityGiB)&&void 0!==n?n:0).toFixed(1)," GiB (",w(e.memoryUsagePercent),")"),l().createElement("td",null,w(e.peakUtilizationPercent)),l().createElement("td",null,null!==(a=e.podCount)&&void 0!==a?a:"—"))}))))):null,e.namespaceStorage.length>0?l().createElement(h.sh,{title:"Custo de storage por namespace"},l().createElement(h.s,null,l().createElement(h.LO,{testId:b.b.cluster.storageCostTable},l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,"Namespace"),l().createElement("th",null,"PVCs"),l().createElement("th",null,"Provisionado"),l().createElement("th",null,"Em uso"),l().createElement("th",null,"Estimativa/mês"))),l().createElement("tbody",null,e.namespaceStorage.map(e=>l().createElement("tr",{key:e.namespace},l().createElement("td",null,n?l().createElement("button",{type:"button",className:a.linkButton,onClick:()=>n(e.namespace)},e.namespace):e.namespace),l().createElement("td",null,e.pvcCount),l().createElement("td",null,e.provisionedGiB.toFixed(1)," GiB"),l().createElement("td",null,void 0!==e.usedGiB?`${e.usedGiB.toFixed(1)} GiB`:"—"),l().createElement("td",null,(0,d.UK)(e.estimatedMonthlyUsd)))))))):null,e.networkTopTalkers.length>0?l().createElement(h.sh,{title:"Top namespaces por tráfego de rede"},l().createElement(h.s,null,l().createElement(h.LO,{testId:b.b.cluster.networkTopTalkersTable},l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,"Namespace"),l().createElement("th",null,"Receive"),l().createElement("th",null,"Transmit"),l().createElement("th",null,"Total"))),l().createElement("tbody",null,e.networkTopTalkers.map(e=>l().createElement("tr",{key:e.namespace},l().createElement("td",null,n?l().createElement("button",{type:"button",className:a.linkButton,onClick:()=>n(e.namespace)},e.namespace):e.namespace),l().createElement("td",null,(0,d.vV)(e.receiveBytesPerSec)),l().createElement("td",null,(0,d.vV)(e.transmitBytesPerSec)),l().createElement("td",null,(0,d.vV)(e.totalBytesPerSec)))))))):null)}const P=e=>({cards:r.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${e.spacing(1.5)};
  `,card:r.css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${e.spacing(.5)};
    padding: ${e.spacing(1.5)};
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: inherit;

    &:hover {
      border-color: ${e.colors.border.medium};
      background: ${e.colors.action.hover};
    }
  `,cardLabel:r.css`
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,cardValue:r.css`
    font-size: ${e.typography.h4.fontSize};
    font-weight: ${e.typography.fontWeightMedium};
  `,cardHint:r.css`
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,linkButton:r.css`
    border: none;
    background: none;
    padding: 0;
    color: ${e.colors.text.link};
    cursor: pointer;
    font: inherit;
    text-decoration: underline;
  `});function S({values:e,width:t=96,height:n=28,title:a}){const o=(0,c.useTheme2)();if(e.length<2)return l().createElement("span",{title:a},"—");const s=Math.min(...e),i=Math.max(...e)-s||1,m=t/(e.length-1),u=e.map((e,t)=>`${t*m},${n-(e-s)/i*(n-4)-2}`).join(" "),d=e[e.length-1]>=e[0]?o.visualization.getColorByName("red"):o.visualization.getColorByName("green");return l().createElement("svg",{width:t,height:n,viewBox:`0 0 ${t} ${n}`,className:r.css`
        display: block;
      `,role:"img","aria-label":a},l().createElement("polyline",{fill:"none",stroke:d,strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",points:u}))}function $(e){if(void 0===e)return"—";return`${e>0?"+":""}${e}%`}var B=n(3097);function O({status:e}){return l().createElement(c.Badge,{text:(0,B._D)(e),color:(0,B.L0)(e)})}function x(e,t,n,a,l,r,c){try{var o=e[r](c),s=o.value}catch(e){return void n(e)}o.done?t(s):Promise.resolve(s).then(a,l)}function N(e){return function(){var t=this,n=arguments;return new Promise(function(a,l){var r=e.apply(t,n);function c(e){x(r,a,l,c,o,"next",e)}function o(e){x(r,a,l,c,o,"throw",e)}c(void 0)})}}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){M(e,t,n[t])})}return e}function G(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function R(e){return void 0===e?"—":`${e}%`}function z(e,t,n){const a=n?`${e.toFixed(1)} ${n}`:(0,d.wF)(e);if(void 0===t)return a;return`${a} / ${n?`${t.toFixed(1)} ${n}`:(0,d.wF)(t)}`}function j({context:e,refreshKey:t,onSelectWorkload:n,onNavigate:r}){const E=(0,c.useStyles2)(T),g=(0,o.U)(),[y,f]=(0,a.useState)([]),[k,w]=(0,a.useState)(),[P,B]=(0,a.useState)([]),[x,M]=(0,a.useState)(new Map),[j,D]=(0,a.useState)(),[A,L]=(0,a.useState)(()=>g.costDefaultNamespaceBudgetUsd),[K,q]=(0,a.useState)(!1),[V,W]=(0,a.useState)(!1),[H,I]=(0,a.useState)(),[_,Y]=(0,a.useState)(()=>(0,d.d)(g)),[J,Q]=(0,a.useState)(),[X,Z]=(0,a.useState)([]),[ee,te]=(0,a.useState)(!1),[ne,ae]=(0,a.useState)(),le=(0,a.useMemo)(()=>G(F({},e),{namespaceFilter:void 0}),[e]);(0,a.useEffect)(()=>{Y((0,d.d)(g)),L(g.costDefaultNamespaceBudgetUsd)},[g.costCpuCorePerMonthUsd,g.costMemoryGiBPerMonthUsd,g.costStorageGiBPerMonthUsd,g.costDefaultNamespaceBudgetUsd]),(0,a.useEffect)(()=>{if(!g.metricsDatasourceUid)return;let e=!1;return N(function*(){W(!0),I(void 0);try{const t=yield(0,i.M)(g,le.cluster,le.timeRange,le.clusterLabel),[n,a,l]=yield Promise.all([(0,s.KB)(le,g),(0,s.Mg)(le,g),(0,s.fA)(le,g)]);e||(f(n),w(a),B(l),D(t?{backend:t.backend,filter:t.filter}:void 0))}catch(t){console.error(t),e||(I("Não foi possível estimar custos e eficiência do cluster."),f([]),w(void 0),B([]),D(void 0))}finally{e||W(!1)}})(),()=>{e=!0}},[le,t,g]),(0,a.useEffect)(()=>{if(!g.metricsDatasourceUid||0===y.length)return void M(new Map);let e=!1;return N(function*(){q(!0);try{const t=yield(0,s.rw)(le,g,y.map(e=>e.namespace),_);e||M(t)}catch(t){console.error(t),e||M(new Map)}finally{e||q(!1)}})(),()=>{e=!0}},[le,t,y,_,g]),(0,a.useEffect)(()=>{if(!J||!g.metricsDatasourceUid)return Z([]),void ae(void 0);let e=!1;return N(function*(){te(!0),ae(void 0);try{const t=yield(0,s.Pm)(le,g,J);e||Z(t)}catch(t){console.error(t),e||(ae("Não foi possível carregar eficiência por workload."),Z([]))}finally{e||te(!1)}})(),()=>{e=!0}},[le,t,J,g]);const re=(0,a.useMemo)(()=>y.map(e=>G(F({},e),{estimatedMonthlyUsd:(0,d.KB)(e,_)})),[y,_]),ce=(0,a.useMemo)(()=>re.reduce((e,t)=>e+t.estimatedMonthlyUsd,0),[re]),oe=(0,a.useMemo)(()=>re.reduce((e,t)=>{var n;return e+(null!==(n=t.wasteMonthlyUsd)&&void 0!==n?n:0)},0),[re]),se=(0,a.useMemo)(()=>re.filter(e=>{var t;return(null!==(t=e.wasteMonthlyUsd)&&void 0!==t?t:0)>0}).slice(0,5),[re]),ie=(0,a.useMemo)(()=>{if(!k)return;const e=k.namespaceStorage.map(e=>G(F({},e),{estimatedMonthlyUsd:(0,d.A$)(e.provisionedGiB,_)}));return G(F({},k),{namespaceStorage:e,storageMonthlyUsd:e.reduce((e,t)=>e+t.estimatedMonthlyUsd,0)})},[k,_]),me=(0,a.useMemo)(()=>(0,m.qY)(re,A),[re,A]),ue=(0,a.useMemo)(()=>{const e=new Map;for(const[t,n]of x.entries())e.set(t,n.changePercent);return e},[x]),de=(e,t)=>{const n=Number(t);Y(t=>G(F({},t),{[e]:Number.isFinite(n)&&n>=0?n:0}))},pe=e=>{Q(t=>t===e?void 0:e)},Ee=e=>{null==r||r({tab:e})};return l().createElement("div",{"data-testid":b.b.cluster.tabs.cost},l().createElement("p",null,"Visão de ",l().createElement("strong",null,"recursos, eficiência e showback"),": uso vs capacidade do cluster, nodes subutilizados, custo de storage, tráfego de rede e chargeback de CPU/memória por namespace e workload."),l().createElement(c.FieldSet,{label:"Taxas de referência (USD/mês)",className:E.rateFields},l().createElement(c.Field,{label:"CPU (USD/core/mês)",description:"Equivalente a ~730 h contínuos. Ex.: vCPU × preço/hora × 730."},l().createElement(c.Input,{width:16,type:"number",min:0,step:.01,"data-testid":b.b.cluster.costCpuRate,value:_.cpuCorePerMonthUsd,onChange:e=>de("cpuCorePerMonthUsd",e.currentTarget.value)})),l().createElement(c.Field,{label:"Memória (USD/GiB/mês)",description:"GiB = gibibyte (1024³ bytes). Ex.: GB de RAM × preço/GB/mês da região."},l().createElement(c.Input,{width:16,type:"number",min:0,step:.01,"data-testid":b.b.cluster.costMemoryRate,value:_.memoryGiBPerMonthUsd,onChange:e=>de("memoryGiBPerMonthUsd",e.currentTarget.value)})),l().createElement(c.Field,{label:"Storage (USD/GiB/mês)",description:"GiB provisionado em PVCs × taxa mensal."},l().createElement(c.Input,{width:16,type:"number",min:0,step:.01,"data-testid":b.b.cluster.costStorageRate,value:_.storageGiBPerMonthUsd,onChange:e=>de("storageGiBPerMonthUsd",e.currentTarget.value)})),l().createElement(c.Field,{label:"Orçamento/namespace (USD/mês)",description:"Limite mensal de showback por namespace para alertas FinOps."},l().createElement(c.Input,{width:16,type:"number",min:0,step:1,"data-testid":b.b.cluster.costBudgetRate,value:null!=A?A:"",onChange:e=>(e=>{const t=Number(e);L(Number.isFinite(t)&&t>0?t:void 0)})(e.currentTarget.value)}))),l().createElement("p",{className:E.formula},"Fórmula de waste: ",l().createElement("code",null,"(request CPU − uso CPU) × taxa CPU + (request memória − uso memória) × taxa memória"),". Badges: ≤35% utilização = superdimensionado; ≥90% = subdimensionado."),H?l().createElement(c.Alert,{title:"Erro",severity:"error"},H):null,V?l().createElement(c.LoadingPlaceholder,{text:"Calculando eficiência e custos..."}):null,!V&&ie?l().createElement(C,{result:ie,onOpenTab:Ee,onNamespaceSelect:pe}):null,!V&&re.length>0?l().createElement(v,{cluster:e.cluster,budgetUsd:A,namespaceRows:re,budgetAlerts:me,recommendations:P,storageRows:null==ie?void 0:ie.namespaceStorage,metricsDatasourceUid:g.metricsDatasourceUid,metricsBackend:null==j?void 0:j.backend,metricsFilter:null==j?void 0:j.filter,cpuRateUsd:_.cpuCorePerMonthUsd,memoryRateUsd:_.memoryGiBPerMonthUsd,trendChangeByNamespace:ue,onOpenTab:Ee,onSelectRecommendation:(e,t,a)=>{null==n||n({namespace:e,name:t,kind:a,replicasDesired:0,replicasAvailable:0,unavailable:0,status:"normal"})}}):null,!V&&re.length>0?l().createElement(l().Fragment,null,l().createElement(h.sh,{title:"Chargeback por namespace (CPU/memória)"},se.length>0?l().createElement("div",{className:E.topWaste},l().createElement("strong",null,"Top waste por namespace"),l().createElement("ul",null,se.map(e=>{var t,n;return l().createElement("li",{key:e.namespace},l().createElement("button",{type:"button",className:E.linkButton,onClick:()=>pe(e.namespace)},e.namespace)," — ","reserva ",(0,d.wF)(null!==(t=e.cpuRequestCores)&&void 0!==t?t:e.cpuCores),", usa"," ",(0,d.wF)(e.cpuCores)," · waste ",(0,d.UK)(null!==(n=e.wasteMonthlyUsd)&&void 0!==n?n:0),"/mês",l().createElement(O,{status:e.efficiencyStatus}))}))):null,l().createElement("p",{className:E.sectionSummary},"Total compute: ",(0,d.UK)(ce),"/mês",oe>0?` · Waste: ${(0,d.UK)(oe)}/mês`:""),l().createElement(h.s,null,l().createElement(h.LO,{testId:b.b.cluster.costTable},l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,"Namespace"),l().createElement("th",null,"CPU (uso / req)"),l().createElement("th",null,"Memória (uso / req)"),l().createElement("th",null,"Util. CPU"),l().createElement("th",null,"Util. mem."),l().createElement("th",null,"Eficiência"),l().createElement("th",null,"Orçamento"),l().createElement("th",null,"Tendência 7d"),l().createElement("th",null,"Custo/mês"),l().createElement("th",null,"Waste/mês"))),l().createElement("tbody",null,re.map(e=>{var t;const n=J===e.namespace,a=(0,m.lk)(e.estimatedMonthlyUsd,A),r=x.get(e.namespace);return l().createElement("tr",F({key:e.namespace,className:n?E.selectedRow:E.clickableRow},(0,u.H)(()=>pe(e.namespace),`Ver workloads de ${e.namespace}`)),l().createElement("td",null,e.namespace),l().createElement("td",null,z(e.cpuCores,e.cpuRequestCores)),l().createElement("td",null,z(e.memoryGiB,e.memoryRequestGiB,"GiB")),l().createElement("td",null,R(e.cpuUtilizationPercent)),l().createElement("td",null,R(e.memoryUtilizationPercent)),l().createElement("td",null,l().createElement(O,{status:e.efficiencyStatus})),l().createElement("td",null,l().createElement(U,{status:a})),l().createElement("td",null,l().createElement("div",{className:E.trendCell},K?"…":l().createElement(S,{values:null!==(t=null==r?void 0:r.values)&&void 0!==t?t:[]}),K?null:l().createElement(c.Badge,{text:$(null==r?void 0:r.changePercent),color:(o=null==r?void 0:r.changePercent,void 0===o?"darkgrey":o<=-5?"green":o>=10?"red":"orange")}))),l().createElement("td",null,(0,d.UK)(e.estimatedMonthlyUsd)),l().createElement("td",null,void 0!==e.wasteMonthlyUsd?(0,d.UK)(e.wasteMonthlyUsd):"—"));var o}))))),J?l().createElement(h.sh,{title:`Workloads — ${J}`},l().createElement("div",{className:E.workloadHeader},l().createElement("p",null,"Clique em um workload para abrir detalhes na aba Workloads."),l().createElement(c.Button,{size:"sm",variant:"secondary",onClick:()=>Q(void 0)},"Fechar")),ne?l().createElement(c.Alert,{title:"Erro",severity:"error"},ne):null,ee?l().createElement(c.LoadingPlaceholder,{text:"Carregando workloads..."}):null,!ee&&X.length>0?l().createElement(h.s,null,l().createElement(h.LO,null,l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,"Workload"),l().createElement("th",null,"Tipo"),l().createElement("th",null,"CPU (uso / req)"),l().createElement("th",null,"Memória (uso / req)"),l().createElement("th",null,"Util. CPU"),l().createElement("th",null,"Util. mem."),l().createElement("th",null,"Eficiência"),l().createElement("th",null,"Custo/mês"),l().createElement("th",null,"Waste/mês"))),l().createElement("tbody",null,X.map(e=>l().createElement("tr",F({key:`${e.kind}/${e.name}`,className:E.clickableRow},(0,u.H)(()=>(e=>{null==n||n({namespace:e.namespace,name:e.name,kind:e.kind,replicasDesired:0,replicasAvailable:0,unavailable:0,status:"normal"})})(e),`Abrir workload ${e.name}`)),l().createElement("td",null,e.name),l().createElement("td",null,l().createElement(c.Badge,{text:(0,p.RY)(e.kind),color:(0,p._M)(e.kind)})),l().createElement("td",null,z(e.cpuCores,e.cpuRequestCores)),l().createElement("td",null,z(e.memoryGiB,e.memoryRequestGiB,"GiB")),l().createElement("td",null,R(e.cpuUtilizationPercent)),l().createElement("td",null,R(e.memoryUtilizationPercent)),l().createElement("td",null,l().createElement(O,{status:e.efficiencyStatus})),l().createElement("td",null,(0,d.UK)(e.estimatedMonthlyUsd)),l().createElement("td",null,void 0!==e.wasteMonthlyUsd?(0,d.UK)(e.wasteMonthlyUsd):"—")))))):null,ee||0!==X.length||ne?null:l().createElement(c.Alert,{title:"Sem dados de workload",severity:"info"},"Não encontramos métricas de uso/request para workloads neste namespace.")):null):null,V||0!==re.length||H?null:l().createElement(c.Alert,{title:"Sem dados de eficiência",severity:"info"},"Não encontramos métricas de CPU/memória por namespace para estimar custos e eficiência."))}const T=e=>({rateFields:r.css`
    margin-bottom: ${e.spacing(2)};

    & > div {
      display: inline-block;
      margin-right: ${e.spacing(3)};
      vertical-align: top;
    }
  `,formula:r.css`
    margin: 0 0 ${e.spacing(2)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};

    code {
      font-size: inherit;
    }
  `,sectionSummary:r.css`
    margin: 0 0 ${e.spacing(1.5)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,trendCell:r.css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${e.spacing(.5)};
    min-width: 110px;
  `,topWaste:r.css`
    margin-bottom: ${e.spacing(2)};
    padding: ${e.spacing(1.5)};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};

    ul {
      margin: ${e.spacing(1)} 0 0;
      padding-left: ${e.spacing(2.5)};
    }

    li {
      margin-bottom: ${e.spacing(.5)};
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: ${e.spacing(1)};
    }
  `,linkButton:r.css`
    border: none;
    background: none;
    padding: 0;
    color: ${e.colors.text.link};
    cursor: pointer;
    font: inherit;
    text-decoration: underline;
  `,clickableRow:r.css`
    cursor: pointer;

    &:hover {
      background: ${e.colors.action.hover};
    }
  `,selectedRow:r.css`
    cursor: pointer;
    background: ${e.colors.action.selected};

    &:hover {
      background: ${e.colors.action.selected};
    }
  `,workloadHeader:r.css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(1.5)};

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
    }
  `})},3288(e,t,n){n.d(t,{A:()=>c});var a=n(5959),l=n.n(a),r=n(2007);function c({href:e,label:t="Explore",size:n="sm",variant:a="secondary"}){return l().createElement(r.LinkButton,{href:e,target:"_blank",rel:"noopener noreferrer",size:n,variant:a,icon:"external-link-alt"},t)}}}]);
//# sourceMappingURL=753.js.map?_cache=00589e105ce703a6c100