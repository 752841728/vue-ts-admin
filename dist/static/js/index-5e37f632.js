import{a as v,y as _,d as k,c as s,A as d}from"./index-e2e6de45.js";import{u as x}from"./hooks-f76c5287.js";import{d as E}from"./index-8c77f9cd.js";import{u as i}from"./multiTags-d9cd5aad.js";import"./_commonjsHelpers-042e6b4d.js";import"./hot-cf4dcfeb.js";import"./index-5e5694dd.js";import"./index-4b83e049.js";import"./index-2b23ea72.js";const w=Vue.createElementVNode("div",null,"标签页复用，超出限制自动关闭",-1),g={class:"flex flex-wrap items-center"},T=Vue.createElementVNode("p",null,"query传参模式：",-1),y={class:"flex flex-wrap items-center"},$=Vue.createElementVNode("p",null,"params传参模式：",-1),B=Vue.defineComponent({name:"Tabs"}),H=Vue.defineComponent({...B,setup(b){const{toDetail:l,router:m}=x(),c=E(v().wholeMenus,!0),a=Vue.computed(()=>_(k(c),0,{disabled:!0})),r=Vue.ref([]),V=Vue.computed(()=>{var u;return(u=i())==null?void 0:u.multiTags});function p(){r.value.length!==0&&r.value.forEach(u=>{const t=d(a.value,u).redirect??d(a.value,u).path;i().handleTags("splice",t),t==="/tabs/index"&&m.push({path:V.value[V.value.length-1].path})})}return(u,t)=>{const o=Vue.resolveComponent("el-button"),n=Vue.resolveComponent("el-divider"),f=Vue.resolveComponent("el-tree-select"),h=Vue.resolveComponent("el-link"),C=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(C,{shadow:"never"},{header:Vue.withCtx(()=>[w]),default:Vue.withCtx(()=>[Vue.createElementVNode("div",g,[T,(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(6,e=>Vue.createVNode(o,{class:"m-2",key:e,onClick:N=>Vue.unref(l)(e,"query")},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 打开"+Vue.toDisplayString(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),Vue.createVNode(n),Vue.createElementVNode("div",y,[$,(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(6,e=>Vue.createVNode(o,{class:"m-2",key:e,onClick:N=>Vue.unref(l)(e,"params")},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 打开"+Vue.toDisplayString(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),Vue.createVNode(n),Vue.createVNode(f,{class:"w-[300px]","node-key":"uniqueId",placeholder:"请选择要关闭的标签",clearable:"",multiple:"",filterable:"","default-expand-all":"",props:{label:e=>Vue.unref(s)(e.meta.title),value:"uniqueId",children:"children",disabled:"disabled"},data:Vue.unref(a),modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e)},{default:Vue.withCtx(({data:e})=>[Vue.createElementVNode("span",null,Vue.toDisplayString(Vue.unref(s)(e.meta.title)),1)]),_:1},8,["props","data","modelValue"]),Vue.createVNode(o,{class:"m-2",onClick:p},{default:Vue.withCtx(()=>[Vue.createTextVNode("关闭标签")]),_:1}),Vue.createVNode(n),Vue.createVNode(o,{onClick:t[1]||(t[1]=e=>u.$router.push({name:"Menu1-2-2"}))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 跳转页内菜单（传name对象，优先推荐） ")]),_:1}),Vue.createVNode(o,{onClick:t[2]||(t[2]=e=>u.$router.push("/nested/menu1/menu1-2/menu1-2-2"))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 跳转页内菜单（直接传要跳转的路径） ")]),_:1}),Vue.createVNode(o,{onClick:t[3]||(t[3]=e=>u.$router.push({path:"/nested/menu1/menu1-2/menu1-2-2"}))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 跳转页内菜单（传path对象） ")]),_:1}),Vue.createVNode(n),Vue.createVNode(o,{onClick:t[4]||(t[4]=e=>u.$router.push({name:"Menu1-2-2",query:{text:"传name对象，优先推荐"}}))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 携参跳转页内菜单（传name对象，优先推荐） ")]),_:1}),Vue.createVNode(o,{onClick:t[5]||(t[5]=e=>u.$router.push({path:"/nested/menu1/menu1-2/menu1-2-2",query:{text:"传path对象"}}))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 携参跳转页内菜单（传path对象） ")]),_:1}),Vue.createVNode(h,{class:"ml-4",href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 点击查看更多跳转方式 ")]),_:1}),Vue.createVNode(n),Vue.createVNode(o,{onClick:t[6]||(t[6]=e=>u.$router.push({name:"Empty"}))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 跳转无Layout的空白页面 ")]),_:1})]),_:1})}}});export{H as default};
