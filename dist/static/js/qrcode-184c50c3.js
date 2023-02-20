import{m as s}from"./message-7116a117.js";import{R as d}from"./index-f9179e1c.js";import"./index-8c77f9cd.js";import"./propTypes-d4134fbf.js";import"./refresh-right-6177e75c.js";const r={class:"font-medium"},n=Vue.createElementVNode("div",{class:"font-bold"},"基础用法",-1),i=Vue.createElementVNode("div",{class:"font-bold"},"img标签",-1),x=Vue.createElementVNode("div",{class:"font-bold"},"样式配置",-1),m=Vue.createElementVNode("div",{class:"font-bold"},"点击事件",-1),_=Vue.createElementVNode("div",{class:"font-bold"},"异步内容",-1),h=Vue.createElementVNode("div",{class:"font-bold"},"失效",-1),f=Vue.createElementVNode("div",{class:"font-bold"},"logo配置",-1),N=Vue.createElementVNode("div",{class:"font-bold"},"logo样式",-1),p=Vue.createElementVNode("div",{class:"font-bold"},"大小配置",-1),w=Vue.defineComponent({name:"QrCode"}),q=Vue.defineComponent({...w,setup(C){const t="vue-pure-admin",u=Vue.ref("");setTimeout(()=>{u.value=Vue.unref(t)},3e3);const a=()=>{s("点击事件",{type:"info"})},l=()=>{s("失效",{type:"info"})};return(v,b)=>{const V=Vue.resolveComponent("el-link"),e=Vue.resolveComponent("el-card"),o=Vue.resolveComponent("el-col"),c=Vue.resolveComponent("el-row");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(e,{shadow:"never"},{header:Vue.withCtx(()=>[Vue.createElementVNode("div",r,[Vue.createTextVNode(" 二维码（基于 "),Vue.createVNode(V,{href:"https://github.com/soldair/node-qrcode",target:"_blank",style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:Vue.withCtx(()=>[Vue.createTextVNode(" qrcode ")]),_:1}),Vue.createTextVNode(" 生成） ")])]),default:Vue.withCtx(()=>[Vue.createVNode(c,{gutter:20,justify:"space-between"},{default:Vue.withCtx(()=>[Vue.createVNode(o,{xl:6,lg:6,md:12,sm:24,xs:24},{default:Vue.withCtx(()=>[Vue.createVNode(e,{shadow:"hover",class:"mb-[10px] text-center"},{default:Vue.withCtx(()=>[n,Vue.createVNode(Vue.unref(d),{text:t})]),_:1})]),_:1}),Vue.createVNode(o,{xl:6,lg:6,md:12,sm:24,xs:24},{default:Vue.withCtx(()=>[Vue.createVNode(e,{shadow:"hover",class:"mb-[10px] text-center"},{default:Vue.withCtx(()=>[i,Vue.createVNode(Vue.unref(d),{text:t,tag:"img"})]),_:1})]),_:1}),Vue.createVNode(o,{xl:6,lg:6,md:12,sm:24,xs:24},{default:Vue.withCtx(()=>[Vue.createVNode(e,{shadow:"hover",class:"mb-[10px] text-center"},{default:Vue.withCtx(()=>[x,Vue.createVNode(Vue.unref(d),{text:t,options:{color:{dark:"#55D187",light:"#2d8cf0"}}})]),_:1})]),_:1}),Vue.createVNode(o,{xl:6,lg:6,md:12,sm:24,xs:24},{default:Vue.withCtx(()=>[Vue.createVNode(e,{shadow:"hover",class:"mb-[10px] text-center"},{default:Vue.withCtx(()=>[m,Vue.createVNode(Vue.unref(d),{text:t,onClick:a})]),_:1})]),_:1}),Vue.createVNode(o,{xl:6,lg:6,md:12,sm:24,xs:24},{default:Vue.withCtx(()=>[Vue.createVNode(e,{shadow:"hover",class:"mb-[10px] text-center"},{default:Vue.withCtx(()=>[_,Vue.createVNode(Vue.unref(d),{text:u.value},null,8,["text"])]),_:1})]),_:1}),Vue.createVNode(o,{xl:6,lg:6,md:12,sm:24,xs:24},{default:Vue.withCtx(()=>[Vue.createVNode(e,{shadow:"hover",class:"mb-[10px] text-center"},{default:Vue.withCtx(()=>[h,Vue.createVNode(Vue.unref(d),{text:t,disabled:"",onDisabledClick:l})]),_:1})]),_:1}),Vue.createVNode(o,{xl:6,lg:6,md:12,sm:24,xs:24},{default:Vue.withCtx(()=>[Vue.createVNode(e,{shadow:"hover",class:"mb-[10px] text-center"},{default:Vue.withCtx(()=>[f,Vue.createVNode(Vue.unref(d),{text:t,logo:"https://avatars.githubusercontent.com/u/44761321?v=4"})]),_:1})]),_:1}),Vue.createVNode(o,{xl:6,lg:6,md:12,sm:24,xs:24},{default:Vue.withCtx(()=>[Vue.createVNode(e,{shadow:"hover",class:"mb-[10px] text-center"},{default:Vue.withCtx(()=>[N,Vue.createVNode(Vue.unref(d),{text:t,logo:{src:"https://avatars.githubusercontent.com/u/44761321?v=4",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["logo"])]),_:1})]),_:1}),Vue.createVNode(o,{xl:6,lg:6,md:12,sm:24,xs:24},{default:Vue.withCtx(()=>[Vue.createVNode(e,{shadow:"hover",class:"mb-[10px] text-center"},{default:Vue.withCtx(()=>[p,Vue.createVNode(Vue.unref(d),{text:t,width:100})]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{q as default};
