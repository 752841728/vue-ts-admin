import{V as m}from"./styles-f0d69c68.js";import{j as u,J as w,w as d,a3 as c,k as f,x as _,y as a,m as n,C as t,E as r,u as g}from"./runtime-core.esm-bundler-8baab2e8.js";import"./_commonjsHelpers-042e6b4d.js";import"./vue.runtime.esm-bundler-1a3e96ba.js";import"./vue.runtime.esm-bundler-411b24f7.js";import"./runtime-dom.esm-bundler-9e945af3.js";const b={class:"card-header"},v={class:"font-medium"},k={class:"font-medium"},x=u({name:"JsonEditor"}),C=u({...x,setup(y){const i={status:200,text:"",error:null,config:void 0,data:[{news_id:51184,title:"iPhone X Review: Innovative future with real black technology",source:"Netease phone"},{news_id:51183,title:"Traffic paradise: How to design streets for people and unmanned vehicles in the future?",source:"Netease smart",link:"http://netease.smart/traffic-paradise/1235"},{news_id:51182,title:"Teslamask's American Business Relations: The government does not pay billions to build factories",source:"AI Finance",members:["Daniel","Mike","John"]}]},e=w({val:JSON.stringify(i),data:i,showLine:!0,showLineNumber:!0,showDoubleQuotes:!0,showLength:!0,editable:!0,showIcon:!0,editableTrigger:"click",deep:3});return d(()=>e.val,o=>{try{e.data=JSON.parse(o)}catch{}}),d(()=>e.data,o=>{try{e.val=JSON.stringify(o)}catch{}}),(o,s)=>{const l=c("el-link"),h=c("el-card");return f(),_(h,{shadow:"never"},{header:a(()=>[n("div",b,[n("span",v,[t(" JSON编辑器组件，采用开源的 "),r(l,{href:"https://github.com/leezng/vue-json-pretty",target:"_blank",style:{"font-size":"16px",margin:"0 4px 5px"}},{default:a(()=>[t(" vue-json-pretty ")]),_:1}),t(" （支持大数据量）。 ")]),n("span",k,[t(" 当然我们还有一款代码编辑器组件推荐（这里就不做演示了），采用开源的 "),r(l,{href:"https://github.com/surmon-china/vue-codemirror",target:"_blank",style:{"font-size":"16px",margin:"0 4px 5px"}},{default:a(()=>[t(" codemirror6 ")]),_:1})])])]),default:a(()=>[r(g(m),{data:e.data,"onUpdate:data":s[0]||(s[0]=p=>e.data=p),deep:e.deep,"show-double-quotes":e.showDoubleQuotes,"show-line":e.showLine,"show-length":e.showLength,"show-icon":e.showIcon,"show-line-number":e.showLineNumber,editable:e.editable,"editable-trigger":e.editableTrigger},null,8,["data","deep","show-double-quotes","show-line","show-length","show-icon","show-line-number","editable","editable-trigger"])]),_:1})}}});export{C as default};
