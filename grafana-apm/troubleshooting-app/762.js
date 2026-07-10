"use strict";(self.webpackChunktroubleshooting_app=self.webpackChunktroubleshooting_app||[]).push([[762],{8762(e,t,a){a.r(t),a.d(t,{ServiceLogsTab:()=>E});var o=a(5959),r=a.n(o),n=a(6089),l=a(2007),s=a(6855),i=a(4987),c=a(8448);function d(e,t,a,o,r,n,l){try{var s=e[n](l),i=s.value}catch(e){return void a(e)}s.done?t(i):Promise.resolve(i).then(o,r)}function m(e,t,a=!0){const r=(0,s.U)(),[n,l]=(0,o.useState)([]),[m,u]=(0,o.useState)(!1),[g,p]=(0,o.useState)(),f=(0,c.Zv)(e.timeRange);return(0,o.useEffect)(()=>{if(!a||!r.logsDatasourceUid)return;let o=!1;var n;return(n=function*(){u(!0),p(void 0);try{const a=yield(0,i.Ls)(e,r,t);o||(l(a.frames),p(a.error))}catch(e){console.error(e),o||(p("Não foi possível carregar o volume de logs."),l([]))}finally{o||u(!1)}},function(){var e=this,t=arguments;return new Promise(function(a,o){var r=n.apply(e,t);function l(e){d(r,a,o,l,s,"next",e)}function s(e){d(r,a,o,l,s,"throw",e)}l(void 0)})})(),()=>{o=!0}},[e.cluster,e.deployment,e.namespace,e.timeRange,a,t.levelFilter,t.textFilter,t.traceIdOnly,t.volumeInterval,r]),{frames:n,loading:m,error:g,from:f.from,to:f.to}}var u=a(1057);function g(e,t,a,o,r,n,l){try{var s=e[n](l),i=s.value}catch(e){return void a(e)}s.done?t(i):Promise.resolve(i).then(o,r)}function p(e,t,a=!0){var r,n;const l=(0,s.U)(),[i,c]=(0,o.useState)([]),[d,m]=(0,o.useState)(!1),[p,f]=(0,o.useState)();return(0,o.useEffect)(()=>{if(!a||!l.logsDatasourceUid)return;let o=!1;var r;return(r=function*(){m(!0),f(void 0);try{const a=yield(0,u.DV)(e,l,t);o||(c(a.logs),f(a.error))}catch(e){console.error(e),o||(f("Não foi possível carregar logs do Loki."),c([]))}finally{o||m(!1)}},function(){var e=this,t=arguments;return new Promise(function(a,o){var n=r.apply(e,t);function l(e){g(n,a,o,l,s,"next",e)}function s(e){g(n,a,o,l,s,"throw",e)}l(void 0)})})(),()=>{o=!0}},[e.cluster,e.compareWithPrevious,e.deployment,e.namespace,e.timeRange,a,t.levelFilter,t.maxLines,t.textFilter,null===(r=t.timeWindow)||void 0===r?void 0:r.from,null===(n=t.timeWindow)||void 0===n?void 0:n.to,t.traceIdOnly,l]),{logs:i,loading:d,error:p}}var f=a(980),h=a(3344),v=a(498),y=a(5615);function b({buckets:e,selectedKey:t,onSelectBucket:a}){const n=(0,l.useStyles2)(x),s={error:n.segmentError,warn:n.segmentWarn,info:n.segmentInfo,other:n.segmentOther},i=(0,o.useMemo)(()=>e.reduce((e,t)=>Math.max(e,t.total),0),[e]),c=(0,o.useMemo)(()=>Math.max(100,12*e.length),[e.length]);return 0===e.length?r().createElement("p",{className:n.empty},"Sem dados de volume no período selecionado."):r().createElement("div",{className:n.scrollHost},r().createElement("div",{className:n.chart,style:{minWidth:`${c}px`},role:"list","aria-label":"Volume de logs por intervalo"},e.map(e=>{const o=i>0?Math.max(e.total/i*100,e.total>0?6:2):2,l=e.key===t,c=(0,v.KQ)(e),d=(0,v.CH)(e.from,e.to);return r().createElement("button",{key:e.key,type:"button",role:"listitem",className:`${n.barButton}${l?` ${n.barButtonSelected}`:""}`,title:`${d} · ${Math.round(e.total)} logs`,"aria-pressed":l,onClick:()=>a(e)},r().createElement("div",{className:n.barTrack,"data-bar-track":"true"},r().createElement("div",{className:n.barStack,style:{height:`${o}%`}},c.map(e=>r().createElement("span",{key:e.level,className:s[e.level],style:{height:`${e.percent}%`},"aria-hidden":"true"})))),r().createElement("span",{className:n.barLabel},(0,v._h)(e.from)))})))}const x=e=>({scrollHost:n.css`
    overflow-x: auto;
    padding-bottom: ${e.spacing(.5)};
  `,chart:n.css`
    display: flex;
    align-items: flex-end;
    gap: ${e.spacing(.25)};
    width: 100%;
    height: 220px;
    padding: ${e.spacing(1,.5,0)};
  `,barButton:n.css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: ${e.spacing(.5)};
    flex: 1 1 0;
    min-width: ${12}px;
    height: 100%;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    border-radius: ${e.shape.radius.default};

    &:hover [data-bar-track='true'] {
      background: ${e.colors.action.hover};
    }
  `,barButtonSelected:n.css`
    outline: 2px solid ${e.colors.primary.border};
    outline-offset: 2px;
  `,barTrack:n.css`
    display: flex;
    align-items: flex-end;
    width: 100%;
    flex: 1;
    border-radius: ${e.shape.radius.default};
    padding: ${e.spacing(.25)};
  `,barStack:n.css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    min-height: 4px;
    border-radius: ${e.shape.radius.default};
    overflow: hidden;
    background: ${e.colors.background.secondary};
  `,segmentError:n.css`
    width: 100%;
    flex-shrink: 0;
    background: ${e.colors.error.main};
  `,segmentWarn:n.css`
    width: 100%;
    flex-shrink: 0;
    background: ${e.colors.warning.main};
  `,segmentInfo:n.css`
    width: 100%;
    flex-shrink: 0;
    background: ${e.colors.info.main};
  `,segmentOther:n.css`
    width: 100%;
    flex-shrink: 0;
    background: ${e.colors.text.secondary};
    opacity: 0.45;
  `,barLabel:n.css`
    font-size: 10px;
    line-height: 1;
    color: ${e.colors.text.secondary};
    font-family: ${e.typography.fontFamilyMonospace};
    white-space: nowrap;
  `,empty:n.css`
    margin: ${e.spacing(2)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `});var $=a(5611);function k({buckets:e,interval:t,selectedKey:a,periodLabel:n,filterHint:s,onIntervalChange:i,onSelectBucket:c,onClearSelection:d}){const m=(0,l.useStyles2)(w),u={error:m.legendSwatchError,warn:m.legendSwatchWarn,info:m.legendSwatchInfo,other:m.legendSwatchOther},g=(0,o.useMemo)(()=>e.find(e=>e.key===a),[e,a]);return r().createElement("section",{className:m.panel,"data-testid":$.b.logs.volumePanel},r().createElement("header",{className:m.header},r().createElement("div",null,r().createElement("h4",null,"Volume de logs"),r().createElement("p",null,"Clique em uma barra para ver os logs daquele intervalo · ",n,s?` · ${s}`:"")),r().createElement(l.Field,{label:"Intervalo de tempo"},r().createElement(l.Select,{width:20,options:v.XF,value:t,onChange:e=>{var t;return i(null!==(t=e.value)&&void 0!==t?t:"5m")},"data-testid":$.b.logs.volumeIntervalSelect}))),r().createElement(b,{buckets:e,selectedKey:a,onSelectBucket:c}),r().createElement("footer",{className:m.footer},r().createElement("div",{className:m.legend},v.H.map(({level:e,label:t})=>r().createElement("span",{key:e,className:m.legendItem},r().createElement("i",{className:u[e]})," ",t))),g?r().createElement("div",{className:m.selection},r().createElement("span",null,"Intervalo selecionado:"," ",r().createElement("strong",null,(0,v.CH)(g.from,g.to))," (",Math.round(g.total)," logs)"),r().createElement(l.Button,{size:"sm",variant:"secondary",onClick:d},"Ver período completo")):r().createElement("span",{className:m.hint},"Nenhum intervalo selecionado — exibindo todo o período (",n,").")))}const w=e=>({panel:n.css`
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.primary};
    overflow: hidden;
  `,header:n.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: ${e.spacing(2)};
    flex-wrap: wrap;
    padding: ${e.spacing(1.5,1.5,1)};
    border-bottom: 1px solid ${e.colors.border.weak};

    h4 {
      margin: 0 0 ${e.spacing(.25)};
      font-size: ${e.typography.h6.fontSize};
    }

    p {
      margin: 0;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
    }
  `,footer:n.css`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(1)};
    padding: ${e.spacing(1,1.5,1.25)};
    border-top: 1px solid ${e.colors.border.weak};
  `,legend:n.css`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.spacing(1.5)};
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `,legendItem:n.css`
    display: inline-flex;
    align-items: center;
    gap: ${e.spacing(.5)};
  `,legendSwatchError:n.css`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: ${e.colors.error.main};
  `,legendSwatchWarn:n.css`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: ${e.colors.warning.main};
  `,legendSwatchInfo:n.css`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: ${e.colors.info.main};
  `,legendSwatchOther:n.css`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: ${e.colors.text.secondary};
    opacity: 0.45;
  `,selection:n.css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${e.spacing(1.5)};
    flex-wrap: wrap;
    font-size: ${e.typography.bodySmall.fontSize};
  `,hint:n.css`
    color: ${e.colors.text.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
  `});function E({context:e}){const t=(0,l.useStyles2)(S),a=(0,s.U)(),[n,d]=(0,o.useState)(""),[u,g]=(0,o.useState)(""),[b,x]=(0,o.useState)("all"),[w,E]=(0,o.useState)(!1),[C,N]=(0,o.useState)(()=>(0,v.F4)(e.timeRange)),[I,L]=(0,o.useState)();(0,o.useEffect)(()=>{const e=window.setTimeout(()=>g(n.trim()),350);return()=>window.clearTimeout(e)},[n]),(0,o.useEffect)(()=>{N((0,v.F4)(e.timeRange)),L(void 0)},[e.timeRange]),(0,o.useEffect)(()=>{L(void 0)},[C,u,b,w]);const F=(0,o.useMemo)(()=>I?{from:I.from,to:I.to}:void 0,[I]),M=(0,o.useMemo)(()=>({maxLines:500,levelFilter:b,textFilter:u||void 0,traceIdOnly:w,timeWindow:F}),[u,b,F,w]),z=(0,o.useMemo)(()=>({levelFilter:b,textFilter:u||void 0,traceIdOnly:w,volumeInterval:C}),[u,b,w,C]),{logs:R,loading:B,error:H}=p(e,M),{frames:O,loading:T,error:U}=m(e,z),W=(0,o.useMemo)(()=>{const t=(0,v.bw)(C),a=(0,c.Zv)(e.timeRange),o=(0,v.ZC)(O,t);return(0,v.mR)(o,a.from,a.to,t)},[e.timeRange,O,C]),P=(0,o.useMemo)(()=>(0,i.ye)(a,e,M),[e,M,a]),D=(0,c.GR)(e.timeRange),K=(0,h.bN)(b),_=I?(0,v.CH)(I.from,I.to):D;return a.logsDatasourceUid?r().createElement("div",{className:t.container,"data-testid":$.b.logs.container},r().createElement("div",{className:t.toolbar},r().createElement(l.Field,{label:"Filtrar texto"},r().createElement(l.Input,{width:36,placeholder:"Buscar na mensagem do log...",value:n,onChange:e=>d(e.currentTarget.value),"data-testid":$.b.logs.searchInput})),r().createElement(l.Field,{label:"Nível"},r().createElement(l.Select,{width:24,options:h.nl,value:b,onChange:e=>{var t;return x(null!==(t=e.value)&&void 0!==t?t:"all")},"data-testid":$.b.logs.levelSelect})),r().createElement(l.Field,{label:"Filtros"},r().createElement(l.Checkbox,{label:"Trace",value:w,onChange:e=>E(e.currentTarget.checked),"data-testid":$.b.logs.traceOnlyToggle})),r().createElement(l.LinkButton,{variant:"secondary",icon:"external-link-alt",href:(0,f.w_)(a.logsDatasourceUid,P,e.timeRange),target:"_blank",rel:"noreferrer"},"Abrir no Explore")),U?r().createElement(l.Alert,{title:"Erro ao carregar volume",severity:"warning"},U):null,T?r().createElement(l.LoadingPlaceholder,{text:"Calculando volume de logs..."}):null,T?null:r().createElement(k,{buckets:W,interval:C,selectedKey:null==I?void 0:I.key,periodLabel:D,filterHint:u?`contém "${u}"`:void 0,onIntervalChange:N,onSelectBucket:e=>L(t=>(null==t?void 0:t.key)===e.key?void 0:e),onClearSelection:()=>L(void 0)}),B?r().createElement(l.LoadingPlaceholder,{text:"Consultando Loki..."}):null,B?null:r().createElement(y.K,{logs:R,tracesDatasourceUid:a.tracesDatasourceUid,timeRange:e.timeRange,title:"Stream de logs",description:`Até 500 linhas · ${_} · nível ${K.toLowerCase()}${u?` · contém "${u}"`:""}${w?" · com trace":""}`,emptyMessage:I?`Nenhum log encontrado entre ${(0,v.CH)(I.from,I.to).toLowerCase()}.`:`Nenhum log encontrado em ${D.toLowerCase()} com os filtros atuais.`,error:H,loading:B,maxListHeight:"min(70vh, 720px)"})):r().createElement(l.Alert,{title:"Logs indisponíveis",severity:"info"},"Configure o datasource Loki na página de configuração do app.")}const S=e=>({container:n.css`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(2)};
  `,toolbar:n.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: ${e.spacing(2)};
    align-items: end;
  `})}}]);
//# sourceMappingURL=762.js.map?_cache=3da30d01344983d4be63