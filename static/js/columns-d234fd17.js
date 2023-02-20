import{t as m}from"./data-84bcfbf1.js";import{I as s,d as v}from"./index-4b9f55af.js";import{r as a,J as u,e as b,o as C}from"./runtime-core.esm-bundler-8baab2e8.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";import"./vue.runtime.esm-bundler-411b24f7.js";import"./runtime-dom.esm-bundler-9e945af3.js";function M(){const l=a([]),t=a(!0),n=a("nohide"),f=a("default"),p=a(!1),i=a("right"),h=[{label:"日期",prop:"date",hide:()=>n.value==="hideDate"},{label:"姓名",prop:"name",hide:()=>n.value==="hideName"},{label:"地址",prop:"address",hide:()=>n.value==="hideAddress"}],o=u({pageSize:10,currentPage:1,pageSizes:[10,15,20],total:0,align:"right",background:!0,small:!1}),r=u({text:"正在加载第一页...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `});function c(e){o.small=e}function d(e){}function g(e){r.text=`正在加载第${e}页...`,t.value=!0,s(600).then(()=>{t.value=!1})}return b(()=>{o.align=i.value}),C(()=>{s(600).then(()=>{const e=[];Array.from({length:6}).forEach(()=>{e.push(v(m,!0))}),l.value=e.flat(1/0),o.total=l.value.length,t.value=!1})}),{loading:t,columns:h,dataList:l,hideVal:n,tableSize:f,pagination:o,loadingConfig:r,paginationAlign:i,paginationSmall:p,onChange:c,onSizeChange:d,onCurrentChange:g}}export{M as useColumns};
