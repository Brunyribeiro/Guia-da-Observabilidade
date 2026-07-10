"use strict";(self.webpackChunktroubleshooting_app=self.webpackChunktroubleshooting_app||[]).push([[922],{922(e,t,r){r.r(t),r.d(t,{ServiceRuntimeTab:()=>g});var a=r(5959),n=r.n(a),i=r(6089),o=r(2007),s=r(6855),c=r(692),l=r(980),m=r(8448),d=r(8565),u=r(5611);function p(e,t,r,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(a,n)}function g({context:e}){const t=(0,o.useStyles2)(f),r=(0,s.U)(),[i,g]=(0,a.useState)(),[v,h]=(0,a.useState)(!1),[y,E]=(0,a.useState)(),b=(0,m.Zv)(e.timeRange);if((0,a.useEffect)(()=>{if(!r.metricsDatasourceUid)return;let t=!1;var a;return(a=function*(){h(!0),E(void 0);try{const a=yield(0,c.Q4)(e,r);t||g(a)}catch(e){console.error(e),t||(E("Não foi possível carregar métricas de runtime."),g(void 0))}finally{t||h(!1)}},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=a.apply(e,t);function o(e){p(i,r,n,o,s,"next",e)}function s(e){p(i,r,n,o,s,"throw",e)}o(void 0)})})(),()=>{t=!0}},[e.cluster,e.deployment,e.namespace,e.timeRange,e.compareWithPrevious,r]),!r.metricsDatasourceUid)return n().createElement(o.Alert,{title:"Runtime indisponível",severity:"info"},"Esta aba depende de métricas de runtime ainda não configuradas para o namespace.");if(v)return n().createElement(o.LoadingPlaceholder,{text:"Carregando métricas de runtime..."});if(y)return n().createElement(o.Alert,{title:"Erro ao carregar runtime",severity:"error"},y);if(!i||0===i.runtimes.length)return n().createElement(o.Alert,{title:"Sem métricas de runtime",severity:"warning"},"Este serviço não possui métricas de runtime disponíveis no período selecionado.");const x=(0,l.H_)(r.metricsDatasourceUid,(0,c.yW)(r,e,i.metricSelector),e.timeRange),k=(0,c.zr)(i.runtimes);return n().createElement("div",{"data-testid":u.b.runtime.container},n().createElement("header",{className:t.header},n().createElement("div",null,n().createElement("h3",null,"Runtime"),n().createElement("p",null,"Saúde do processo do workload: memória, garbage collector, threads e CPU."),n().createElement("div",{className:t.runtimeBadges},i.runtimes.map(e=>n().createElement(o.Badge,{key:e.kind,text:e.label,color:"blue"})))),n().createElement(o.LinkButton,{variant:"secondary",icon:"external-link-alt",href:x,target:"_blank",rel:"noreferrer"},"Abrir no Explore")),k?null:n().createElement(o.Alert,{title:"Sem dados no período",severity:"info"},"Não há séries de runtime no intervalo selecionado. Tente ampliar o período ou verifique se o serviço estava ativo."),i.runtimes.map(e=>n().createElement("section",{key:e.kind,className:t.section},n().createElement("h3",{className:t.sectionTitle},e.label),n().createElement("div",{className:t.grid},e.panels.map(e=>n().createElement(d.R,{key:e.id,title:e.title,description:e.description,frames:e.frames,from:b.from,to:b.to,unit:e.unit}))))))}const f=e=>({header:i.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${e.spacing(2)};
    margin-bottom: ${e.spacing(2)};
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
  `,runtimeBadges:i.css`
    display: flex;
    flex-wrap: wrap;
    gap: ${e.spacing(.5)};
    margin-top: ${e.spacing(1)};
  `,section:i.css`
    margin-bottom: ${e.spacing(3)};
  `,sectionTitle:i.css`
    margin: 0 0 ${e.spacing(1.5)};
    font-size: ${e.typography.h5.fontSize};
    font-weight: ${e.typography.fontWeightMedium};
  `,grid:i.css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: ${e.spacing(2)};
  `})}}]);
//# sourceMappingURL=922.js.map?_cache=ff257639faffb7a5eea6