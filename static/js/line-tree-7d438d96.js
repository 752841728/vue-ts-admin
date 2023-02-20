import{m as g,d as L}from"./index-4b9f55af.js";import{a as k,b as D,c as y,d as N}from"./index-122aca41.js";import{j as x,a2 as h,a as V,a3 as m,k as A,x as T,y as a,E as o,m as n,u as d,D as v}from"./runtime-core.esm-bundler-8baab2e8.js";import"./vue.runtime.esm-bundler-411b24f7.js";import"./runtime-dom.esm-bundler-9e945af3.js";import"./vue-i18n.runtime.esm-bundler-3b734191.js";import"./_commonjsHelpers-042e6b4d.js";import"./hot-cc9aa47e.js";import"./index-9aff8a28.js";import"./multiTags-23feb6ec.js";import"./index-162fdfcd.js";import"./axios-a900fd7e.js";import"./vue-router-3ff981c7.js";import"./index-61e37875.js";const b=x({name:"ReTreeLine",props:{node:{type:Object,required:!0},data:{type:Array,default:()=>{}},treeData:{type:Array,default:()=>[]},indent:{type:Number,default:16},showLabelLine:{type:Boolean,default:!0}},setup(_,p){const{slots:l}=p;return{getScopedSlot:t=>{if(!t)return null;const r=t.split("||");let e=null;for(let s=0;s<r.length;s++){const c=r[s];e=(l||{})[c]}return e},getSlotValue:(t,r,e=null)=>g(t)?t(r)||e:t||e}},render(){const _=this.getScopedSlot("default"),p=this.getScopedSlot("node-label"),l=this.getScopedSlot("after-node-label"),f=_?this.getSlotValue(_,{node:this.node,data:this.data}):[p?this.getSlotValue(p,{node:this.node,data:this.data}):h("span",{class:"element-tree-node-label"},this.node.label),this.showLabelLine?h("span",{class:"element-tree-node-label-line"}):null,this.getSlotValue(l,{node:this.node,data:this.data})],i=[];let t=this.node;for(;t;){let e=t.parent;if(t.level===1&&!t.parent){if(!this.treeData||!Array.isArray(this.treeData))throw Error("if you using el-tree-v2 (Virtualized Tree) of element-plus,element-tree-line required data.");e={children:Array.isArray(this.treeData)?this.treeData.map(s=>({...s,key:s.id})):[],level:0,key:"node-0",parent:null}}if(e){const s=(e.children||e.childNodes).findIndex(c=>(c.key||c.id)===(t.key||t.id));i.unshift(s===(e.children||e.childNodes).length-1)}t=e}const r=[];for(let e=0;e<this.node.level;e++)r.push(h("span",{class:{"element-tree-node-line-ver":!0,"last-node-line":i[e]&&this.node.level-1!==e,"last-node-isLeaf-line":i[e]&&this.node.level-1===e},style:{left:this.indent*e+"px"}}));return h("span",{class:"element-tree-node-label-wrapper"},[f].concat(r).concat([h("span",{class:"element-tree-node-line-hor",style:{width:(this.node.isLeaf?24:8)+"px",left:(this.node.level-1)*this.indent+"px"}})]))}}),q=n("div",{class:"card-header"},[n("span",{class:"font-medium"}," 扩展elemenet-plus的树形组件包括虚拟树组件，支持连接线 ")],-1),B=n("div",{class:"card-header"},[n("span",{class:"font-medium"}," 普通树结构 ")],-1),C={class:"max-h-[550px] overflow-y-auto"},I={class:"text-sm"},E=n("div",{class:"card-header"},[n("span",{class:"font-medium"}," 虚拟树结构 ")],-1),P={class:"max-h-[550px] overflow-y-auto"},j={class:"text-sm"},z=x({name:"LineTree"}),$=x({...z,setup(_){const p=L(k().wholeMenus,!0),l=V(()=>N(p)),f=D(l.value),i={value:"uniqueId",children:"children"};return(t,r)=>{const e=m("el-tree"),s=m("el-card"),c=m("el-col"),S=m("el-tree-v2"),w=m("el-row");return A(),T(s,{shadow:"never"},{header:a(()=>[q]),default:a(()=>[o(w,{gutter:24},{default:a(()=>[o(c,{xs:24,sm:24,md:12,lg:12,xl:12,class:"mb-[20px]"},{default:a(()=>[o(s,{shadow:"never"},{header:a(()=>[B]),default:a(()=>[n("div",C,[o(e,{data:d(l),props:i,"show-checkbox":"","default-expand-all":"","node-key":"uniqueId",indent:30},{default:a(({node:u})=>[o(d(b),{node:u,showLabelLine:!0},{"node-label":a(()=>[n("span",I,v(d(y)(u.data.meta.title)),1)]),_:2},1032,["node"])]),_:1},8,["data"])])]),_:1})]),_:1}),o(c,{xs:24,sm:24,md:12,lg:12,xl:12},{default:a(()=>[o(s,{shadow:"never"},{header:a(()=>[E]),default:a(()=>[n("div",P,[o(S,{data:d(l),props:i,"show-checkbox":"",height:550,"default-expanded-keys":d(f)},{default:a(({node:u})=>[o(d(b),{node:u,treeData:d(l),showLabelLine:!0,indent:30},{"node-label":a(()=>[n("span",j,v(d(y)(u.data.meta.title)),1)]),_:2},1032,["node","treeData"])]),_:1},8,["data","default-expanded-keys"])])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{$ as default};
