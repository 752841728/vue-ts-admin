import{j as p,G as c,J as d,g as j}from"./index-4b9f55af.js";import{j as $,a as D,d as F,I as N,E as o,u as w,F as A,g as G,r as I,a3 as J,k as V,l as C,X as z,x as T,y as L,m as R,D as M,B as X}from"./runtime-core.esm-bundler-8baab2e8.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue.runtime.esm-bundler-411b24f7.js";import"./runtime-dom.esm-bundler-9e945af3.js";const i="stay",h="hs-on",f="hs-off",_="hs-range",g="both-left-sides",S="both-right-sides";let H="right",b=[],s=[];const P={HsKey:{type:Number||String,default:0},disabled:{type:Boolean,default:!1},value:{type:Number,default:0},max:{type:Array,default(){return[1,2,3,4,5,6,7,8,9,10]}},echo:{type:Array,default(){return[]}}},Q=$({name:"ReSelector",props:P,emits:["selectedVal"],setup(l,{emit:m}){const a=G(),y=l.value,v=D(()=>l.disabled),q=D(()=>{const e=[];let t=0,r=y;for(y!==Math.floor(y)&&r--;t<r;t++)e.push(h);for(;t<l.max.length;t++)e.push(f);return e}),K=e=>{if(!l.disabled){if(s.length===1){b.length<1&&b.push({index:e});let t=b[0].index;if(e>t)for(H="right",p(!1,S,document.querySelector(".hs-select__item"+s[0].index));e>=t;)c(document.querySelector(".hs-select__item"+t),_),t++;else for(H="left",p(!0,S,document.querySelector(".hs-select__item"+s[0].index));e<=t;)c(document.querySelector(".hs-select__item"+t),_),t--}c(document.querySelector("."+f+e),h)}},u=e=>{if(l.disabled)return;const t=document.querySelector("."+f+e);if(t.className.includes(i))return!1;if(d(t,h),s.length===1){const r=b[0].index;if(e>=r)for(let n=0;n<=e;n++)d(document.querySelector(".hs-select__item"+n),_);else for(;e<=r;)d(document.querySelector(".hs-select__item"+e),_),e++}},x=(e,t)=>{if(l.disabled)return;const r=s.length;r<2?(s.push({item:t,index:e}),c(document.querySelector("."+f+e),i),c(document.querySelector(".hs-select__item"+s[0].index),g),s[1]&&(H==="right"?c(document.querySelector(".hs-select__item"+s[1].index),S):c(document.querySelector(".hs-select__item"+s[1].index),g)),r===1&&(H==="right"?m("selectedVal",{left:s[0].item,right:s[1].item,whole:s}):m("selectedVal",{left:s[1].item,right:s[0].item,whole:s}))):N(()=>{s.forEach(n=>{d(document.querySelector("."+f+n.index),h,i),d(document.querySelector(".hs-select__item"+n.index),g,S)}),s=[],b=[];for(let n=0;n<=l.max.length;n++){const B=document.querySelector(".hs-select__item"+n);B&&d(B,_)}s.push({item:t,index:e}),c(document.querySelector("."+f+e),i),c(document.querySelector(".hs-select__item"+s[0].index),g)})},E=e=>{if(e.length!==0){if(e.length>2||e.length===1)throw"传入的数组长度必须是2";for(e.sort((t,r)=>t-r),c(a.refs["hsdiv"+l.HsKey+e[0]],h,i),c(a.refs["hstd"+l.HsKey+e[0]],g),c(a.refs["hsdiv"+l.HsKey+e[1]],h,i),c(a.refs["hstd"+l.HsKey+e[1]],S);e[1]>=e[0];)c(a.refs["hstd"+l.HsKey+e[0]],_),e[0]++}};return F(()=>{N(()=>{E(l.echo)})}),()=>o(A,null,[o("table",{cellspacing:"0",cellpadding:"0"},[o("tbody",null,[o("tr",null,[l.max.map((e,t)=>o("td",{"data-index":l.HsKey,ref:`hstd${l.HsKey}${t}`,class:`hs-select__item${t}`,onMousemove:()=>K(t),onMouseleave:()=>u(t),onClick:()=>x(t,e),style:{cursor:w(v)?"auto":"pointer",textAlign:"center"},key:t},[o("div",{ref:`hsdiv${l.HsKey}${t}`,class:`hs-item ${[w(q)[t]+t]}`},[o("span",null,[e])])]))])])])])}}),U=j(Q),W={class:"card-header"},Y={key:0,class:"mt-3"},Z=$({name:"Selector"}),k=$({...Z,setup(l){const m=I(""),a=I([{title:"基本使用",echo:[],disabled:!1},{title:"回显模式",echo:[2,7],disabled:!0}]),y=({left:v,right:q})=>{m.value=`${v}-${q}`};return(v,q)=>{const K=J("el-card");return V(),C("div",null,[(V(!0),C(A,null,z(a.value,(u,x)=>(V(),T(K,{class:"box-card",key:x,shadow:"never"},{header:L(()=>[R("div",W,[R("span",null,M(u.title),1)])]),default:L(()=>[o(w(U),{HsKey:x,echo:u.echo,onSelectedVal:y,disabled:u.disabled},null,8,["HsKey","echo","disabled"]),u.disabled?X("",!0):(V(),C("h4",Y,"选中范围："+M(m.value),1))]),_:2},1024))),128))])}}});const re=O(k,[["__scopeId","data-v-350ee1a4"]]);export{re as default};
