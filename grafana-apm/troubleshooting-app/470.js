"use strict";(self.webpackChunktroubleshooting_app=self.webpackChunktroubleshooting_app||[]).push([[470],{4470(e,a,r){r.r(a),r.d(a,{ServiceTracesTab:()=>h});var t=r(5959),o=r.n(t),s=r(6089),l=r(2007),n=r(6855),c=r(9264),i=r(2537),d=r(5611),m=r(8531),u=r(2533),p=r(2488),g=r(9490);function b({context:e}){const a=(0,l.useStyles2)(f),r=(0,n.U)(),{component:s,isLoading:c}=(0,m.usePluginComponent)(p.WN),{value:i,loading:d}=(0,m.useAppPluginInstalled)(p.h7),b=(0,t.useMemo)(()=>({embedded:!0,embedderName:u.id,initialDS:r.tracesDatasourceUid,initialFilters:(0,p.WK)(r,e),initialTimeRange:(0,p.q$)(e.timeRange),initialActionView:"traceList",urlSync:!1}),[e,r]),x=(0,t.useMemo)(()=>{if(r.tracesDatasourceUid)return(0,p._n)(r,e,r.tracesDatasourceUid)},[e,r]);return r.tracesDatasourceUid?c||d?o().createElement(l.LoadingPlaceholder,{text:"Carregando Traces Drilldown..."}):s?o().createElement("div",{className:a.container},o().createElement(s,b)):i&&x?o().createElement("div",{className:a.container,"data-testid":"embedded-traces-iframe-fallback"},o().createElement("div",{className:a.toolbar},o().createElement(l.LinkButton,{variant:"secondary",icon:"external-link-alt",href:x,target:"_blank",rel:"noreferrer"},"Abrir em nova aba")),o().createElement(g.K,{title:"Erro ao carregar Traces Drilldown"},o().createElement("iframe",{title:"Traces Drilldown",src:x,className:a.frame,sandbox:"allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"}))):o().createElement("div",{className:a.placeholder},"Instale e habilite o plugin ",o().createElement("strong",null,"Traces Drilldown")," (",o().createElement("code",null,"grafana-exploretraces-app"),") no Grafana para explorar traces aqui. Enquanto isso, use a lista de traces lentos abaixo."):o().createElement("div",{className:a.placeholder},"Configure o datasource Tempo na página de configuração do app para explorar traces.")}const f=e=>({container:s.css`
    min-height: 640px;
    border: 1px solid ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `,toolbar:s.css`
    display: flex;
    justify-content: flex-end;
    padding: ${e.spacing(1)};
    border-bottom: 1px solid ${e.colors.border.weak};
    background: ${e.colors.background.secondary};
  `,frame:s.css`
    flex: 1;
    width: 100%;
    min-height: 600px;
    border: 0;
    background: ${e.colors.background.primary};
  `,placeholder:s.css`
    min-height: 240px;
    padding: ${e.spacing(2)};
    border: 1px dashed ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};
    color: ${e.colors.text.secondary};
  `});var x=r(2429);function h({context:e,slowTraces:a=[],slowTracesError:r}){const s=(0,l.useStyles2)(E),m=(0,n.U)(),u=(0,c.id)(m),[p,g]=(0,t.useState)();return o().createElement("div",{className:s.container,"data-testid":d.b.traces.container},o().createElement(b,{context:e}),r?o().createElement(l.Alert,{title:"Traces lentos",severity:"warning"},r):null,a.length>0?o().createElement("div",{className:s.fallback},o().createElement(l.Alert,{title:"Traces lentos detectados",severity:"info"},"Clique em um trace abaixo para abrir o visualizador completo com spans e conexões entre serviços."),o().createElement(i.o,{traces:a,tracesDatasourceUid:m.tracesDatasourceUid,timeRange:e.timeRange,onSelectTrace:g,slowTraceThresholdMs:u})):null,o().createElement(x.m,{traceId:p,tracesDatasourceUid:m.tracesDatasourceUid,timeRange:e.timeRange,onDismiss:()=>g(void 0)}))}const E=e=>({container:s.css`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(2)};
  `,fallback:s.css`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(1)};
  `})}}]);
//# sourceMappingURL=470.js.map?_cache=3e3cda210f37f78121eb