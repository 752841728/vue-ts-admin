import{t as l}from"./data-f09cf461.js";import{j as b,r as s,a3 as c,k as v,l as g,E as n,u,m as k,y as p,C as d}from"./runtime-core.esm-bundler-8baab2e8.js";const h={style:{"margin-top":"20px"}},y=b({__name:"radio",setup(w){const o=s(),_=s(),a=t=>{const{setCurrentRow:e}=o.value.getTableRef();e(t)},i=t=>{_.value=t},m=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(t,e)=>{const f=c("pure-table"),r=c("el-button");return v(),g("div",null,[n(f,{ref_key:"tableRef",ref:o,data:u(l),columns:m,"highlight-current-row":"",onCurrentChange:i},null,8,["data"]),k("div",h,[n(r,{onClick:e[0]||(e[0]=C=>a(u(l)[1]))},{default:p(()=>[d("Select second row")]),_:1}),n(r,{onClick:e[1]||(e[1]=C=>a())},{default:p(()=>[d("Clear selection")]),_:1})])])}}});export{y as _};
