import{P as u}from"./print-a6e42845.js";import{b as f}from"./data-84bcfbf1.js";import{d}from"./index-4b9f55af.js";import{r as m}from"./runtime-core.esm-bundler-8baab2e8.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";import"./vue.runtime.esm-bundler-411b24f7.js";import"./runtime-dom.esm-bundler-9e945af3.js";function S(o){const t=m(d(f,!0)),a=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],e=()=>{u(o.value.getTableDoms().tableWrapper).toPrint};function n({column:{property:r},rowIndex:p}){if(r==="id")return p<3?{background:"#87baf9"}:{background:"#87e8de"}}function l({columnIndex:r}){return r===0?{background:"#f3b2d0"}:{background:"#fafafa"}}function i({rowIndex:r}){return r%2===1?{background:"#ffa39e"}:{background:"#91d5ff"}}return{columns:a,dataList:t,print:e,rowStyle:i,cellStyle:n,headerCellStyle:l}}export{S as useColumns};
