import{a as x,y as F,d as I,c as h,A as k}from"./index-122aca41.js";import{u as M}from"./hooks-c211a57d.js";import{d as N}from"./index-4b9f55af.js";import{u as C}from"./multiTags-23feb6ec.js";import{j as b,a as g,r as S,a3 as i,k as c,x as U,y as a,m as r,l as y,F as $,X as E,E as n,u as m,C as o,D as f}from"./runtime-core.esm-bundler-8baab2e8.js";import"./vue-i18n.runtime.esm-bundler-3b734191.js";import"./_commonjsHelpers-042e6b4d.js";import"./hot-cc9aa47e.js";import"./index-9aff8a28.js";import"./index-162fdfcd.js";import"./axios-a900fd7e.js";import"./vue-router-3ff981c7.js";import"./index-61e37875.js";import"./vue.runtime.esm-bundler-411b24f7.js";import"./runtime-dom.esm-bundler-9e945af3.js";const j=r("div",null,"标签页复用，超出限制自动关闭",-1),H={class:"flex flex-wrap items-center"},L=r("p",null,"query传参模式：",-1),P={class:"flex flex-wrap items-center"},z=r("p",null,"params传参模式：",-1),X=b({name:"Tabs"}),re=b({...X,setup(G){const{toDetail:_,router:B}=M(),D=N(x().wholeMenus,!0),p=g(()=>F(I(D),0,{disabled:!0})),d=S([]),v=g(()=>{var l;return(l=C())==null?void 0:l.multiTags});function T(){d.value.length!==0&&d.value.forEach(l=>{const t=k(p.value,l).redirect??k(p.value,l).path;C().handleTags("splice",t),t==="/tabs/index"&&B.push({path:v.value[v.value.length-1].path})})}return(l,t)=>{const s=i("el-button"),u=i("el-divider"),q=i("el-tree-select"),V=i("el-link"),w=i("el-card");return c(),U(w,{shadow:"never"},{header:a(()=>[j]),default:a(()=>[r("div",H,[L,(c(),y($,null,E(6,e=>n(s,{class:"m-2",key:e,onClick:A=>m(_)(e,"query")},{default:a(()=>[o(" 打开"+f(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),n(u),r("div",P,[z,(c(),y($,null,E(6,e=>n(s,{class:"m-2",key:e,onClick:A=>m(_)(e,"params")},{default:a(()=>[o(" 打开"+f(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),n(u),n(q,{class:"w-[300px]","node-key":"uniqueId",placeholder:"请选择要关闭的标签",clearable:"",multiple:"",filterable:"","default-expand-all":"",props:{label:e=>m(h)(e.meta.title),value:"uniqueId",children:"children",disabled:"disabled"},data:m(p),modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e)},{default:a(({data:e})=>[r("span",null,f(m(h)(e.meta.title)),1)]),_:1},8,["props","data","modelValue"]),n(s,{class:"m-2",onClick:T},{default:a(()=>[o("关闭标签")]),_:1}),n(u),n(s,{onClick:t[1]||(t[1]=e=>l.$router.push({name:"Menu1-2-2"}))},{default:a(()=>[o(" 跳转页内菜单（传name对象，优先推荐） ")]),_:1}),n(s,{onClick:t[2]||(t[2]=e=>l.$router.push("/nested/menu1/menu1-2/menu1-2-2"))},{default:a(()=>[o(" 跳转页内菜单（直接传要跳转的路径） ")]),_:1}),n(s,{onClick:t[3]||(t[3]=e=>l.$router.push({path:"/nested/menu1/menu1-2/menu1-2-2"}))},{default:a(()=>[o(" 跳转页内菜单（传path对象） ")]),_:1}),n(u),n(s,{onClick:t[4]||(t[4]=e=>l.$router.push({name:"Menu1-2-2",query:{text:"传name对象，优先推荐"}}))},{default:a(()=>[o(" 携参跳转页内菜单（传name对象，优先推荐） ")]),_:1}),n(s,{onClick:t[5]||(t[5]=e=>l.$router.push({path:"/nested/menu1/menu1-2/menu1-2-2",query:{text:"传path对象"}}))},{default:a(()=>[o(" 携参跳转页内菜单（传path对象） ")]),_:1}),n(V,{class:"ml-4",href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank"},{default:a(()=>[o(" 点击查看更多跳转方式 ")]),_:1}),n(u),n(s,{onClick:t[6]||(t[6]=e=>l.$router.push({name:"Empty"}))},{default:a(()=>[o(" 跳转无Layout的空白页面 ")]),_:1})]),_:1})}}});export{re as default};
