import{t as n}from"./data-f09cf461.js";import{j as g,r as i,a3 as p,k as C,l as v,E as a,u as s,m as k,y as d,C as u}from"./runtime-core.esm-bundler-8baab2e8.js";const S={style:{"margin-top":"20px"}},R=g({__name:"multipleChoice",setup(h){const r=i(),f=i([]),c=t=>{const{toggleRowSelection:e,clearSelection:l}=r.value.getTableRef();t?t.forEach(o=>{e(o,void 0)}):l()},m=t=>{f.value=t},_=[{type:"selection",align:"left"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(t,e)=>{const l=p("pure-table"),o=p("el-button");return C(),v("div",null,[a(l,{ref_key:"tableRef",ref:r,data:s(n),columns:_,onSelectionChange:m},null,8,["data"]),k("div",S,[a(o,{onClick:e[0]||(e[0]=b=>c([s(n)[1],s(n)[2]]))},{default:d(()=>[u(" Toggle selection status of second and third rows ")]),_:1}),a(o,{onClick:e[1]||(e[1]=b=>c())},{default:d(()=>[u("Clear selection")]),_:1})])])}}});export{R as _};
