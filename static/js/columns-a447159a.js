import{u as r,w as l}from"./xlsx-e927f539.js";import{a as c}from"./data-84bcfbf1.js";import{d as u}from"./index-4b9f55af.js";import{m as f}from"./message-fc668156.js";import{r as b}from"./runtime-core.esm-bundler-8baab2e8.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";import"./vue.runtime.esm-bundler-411b24f7.js";import"./runtime-dom.esm-bundler-9e945af3.js";import"./index-4787b779.js";import"./style-2d30e5a7.js";import"./index-61e37875.js";import"./index-60ab9bfa.js";function C(){const e=b(u(c,!0)),o=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}];return{columns:o,dataList:e,exportExcel:()=>{const s=e.value.map(t=>{const m=[];return o.forEach(n=>{m.push(t[n.prop])}),m}),p=[];o.forEach(t=>{p.push(t.label)}),s.unshift(p);const i=r.aoa_to_sheet(s),a=r.book_new();r.book_append_sheet(a,i,"数据报表"),l(a,"pure-admin-table.xlsx"),f("导出成功",{type:"success"})}}}export{C as useColumns};
