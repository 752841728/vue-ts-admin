const l={class:"dark:text-white"},V={style:{"text-indent":"2em"}},r={style:{"text-indent":"4em"}},m={key:0,class:"mt-4"},a=Vue.defineComponent({name:"Menu1-2-2"}),d=Vue.defineComponent({...a,setup(c){const t=Vue.ref(""),{t:e}=VueI18n.useI18n(),{query:n}=VueRouter.useRoute();return(i,u)=>{const o=Vue.resolveComponent("el-input");return Vue.openBlock(),Vue.createElementBlock("div",l,[Vue.createElementVNode("p",null,Vue.toDisplayString(Vue.unref(e)("menus.hsmenu1")),1),Vue.createElementVNode("p",V,Vue.toDisplayString(Vue.unref(e)("menus.hsmenu1-2")),1),Vue.createElementVNode("p",r,Vue.toDisplayString(Vue.unref(e)("menus.hsmenu1-2-2")),1),Vue.createVNode(o,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=s=>t.value=s)},null,8,["modelValue"]),Vue.unref(n).text?(Vue.openBlock(),Vue.createElementBlock("div",m," 此页面携带的参数值为："+Vue.toDisplayString(Vue.unref(n).text),1)):Vue.createCommentVNode("",!0)])}}});export{d as default};
