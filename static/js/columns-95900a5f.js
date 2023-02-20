import{a as J}from"./data-84bcfbf1.js";import{d as U}from"./index-4b9f55af.js";import{m as X}from"./message-fc668156.js";import{a as I,v as M,r as G}from"./runtime-dom.esm-bundler-9e945af3.js";import{j as K,r as f,a as Q,w as H,a0 as Y,b6 as Z,b4 as ee,k as m,x as c,F as k,X as O,z,A as ne,B as g,E as x,D as L,R as te,I as A,bq as ie,a2 as ae}from"./runtime-core.esm-bundler-8baab2e8.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";import"./vue.runtime.esm-bundler-411b24f7.js";import"./index-4787b779.js";import"./style-2d30e5a7.js";import"./index-61e37875.js";import"./index-60ab9bfa.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function R(e,u,i,o){function _(p){return p instanceof i?p:new i(function(n){n(p)})}return new(i||(i=Promise))(function(p,n){function v(b){try{w(o.next(b))}catch(y){n(y)}}function r(b){try{w(o.throw(b))}catch(y){n(y)}}function w(b){b.done?p(b.value):_(b.value).then(v,r)}w((o=o.apply(e,u||[])).next())})}function oe(e,u,i){let o=document.createElement(e);return o.setAttribute("class",u),i&&(o.innerText=i),o}const N=function(e){let u=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let i in e)e.hasOwnProperty(i)&&(e[i]&&typeof e[i]=="object"?u[i]=N(e[i]):u[i]=e[i]);return u};var C=K({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},setup(e){const u=f(0),i=f(0),o=f(!1),_=f(0),p=f(0),n=f(!1),v=f(null),r=f([]),w=Q(()=>e.menuList.some(a=>a.children&&a.children.length>0)),b=f(10),y=f();H(n,a=>R(this,void 0,void 0,function*(){var d,s;if(a){yield A();let l=y.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(h=>{l.style.setProperty(`--menu-${h}`,e.menuWrapperCss&&e.menuWrapperCss[h])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(h=>{l.style.setProperty(`--menu-item-${h}`,e.menuItemCss&&e.menuItemCss[h])});let t=(s=(d=e.menuItemCss)===null||d===void 0?void 0:d.arrowSize)===null||s===void 0?void 0:s.match(/\d+/);t?b.value=~~t[0]||10:b.value=10,l.style.setProperty("--menu-item-arrowRealSize",b.value/2+"px")}}));const j=(a,d)=>{a.disabled||(a.fn&&typeof a.fn=="function"&&a.fn(e.params,v.value,e.el,d),n.value=!1)},D=(a,d)=>{a.disabled||(a.fn&&typeof a.fn=="function"&&!a.disabled&&(a.fn(e.params,v.value,e.el,d),o.value=!1),n.value=!1)},E=(a,d)=>{if(d.children&&!d.disabled){o.value=!0;const s=a.currentTarget;if(!s)return;const{offsetWidth:l}=s,t=s.querySelector(".__menu__sub__wrapper");if(!t)return;const{offsetWidth:h,offsetHeight:S}=t,{innerWidth:V,innerHeight:$}=window,{top:B,left:W}=s.getBoundingClientRect();W+l+h>V-5?u.value=W-h+5:u.value=W+l,B+S>$-5?i.value=$-S:i.value=B+5}},F=(a,d,s,l)=>a.map(t=>(t.children&&(t.children=F(t.children,d,s,l)),t.label&&typeof t.label=="function"&&(t.label=t.label(l,d,s)),t.tips&&typeof t.tips=="function"&&(t.tips=t.tips(l,d,s)),t.icon&&typeof t.icon=="function"&&(t.icon=t.icon(l,d,s)),t.hidden&&typeof t.hidden=="function"&&(t.hidden=t.hidden(l,d,s)),t.disabled&&typeof t.disabled=="function"&&(t.disabled=t.disabled(l,d,s)),t)),q=(a=0,d=0)=>R(this,void 0,void 0,function*(){if(v.value=document.elementFromPoint(a-1,d-1),e.menuHiddenFn?n.value=!e.menuHiddenFn(e.params,v.value,e.el):n.value=!0,!n.value)return;r.value=N(e.menuList),r.value=F(r.value,v.value,e.el,e.params),yield A();const{innerWidth:s,innerHeight:l}=window,h=y.value.offsetHeight,S=e.menuWidth||200;p.value=a+S+1>s?s-S-5:a+1,_.value=d+h+1>l?l-h-5:d+1}),P=()=>{n.value=!1},T=a=>{y.value&&!y.value.contains(a.currentTarget)&&(n.value=!1,document.oncontextmenu=null)};return H(()=>e.injectCloseListener,a=>{a?document.addEventListener("mousedown",T):document.removeEventListener("mousedown",T)},{immediate:!0}),Y(()=>{document.removeEventListener("mousedown",T)}),{subLeft:u,subTop:i,hoverFlag:o,menuTop:_,menuLeft:p,showMenu:n,clickDomEl:v,calcMenuList:r,arrowSize:b,hasSubMenu:w,MenuWrapper:y,handleMenuItemClick:j,handleSubMenuItemClick:D,handleMenuMouseEnter:E,show:q,close:P}}});const _e=ie();Z("data-v-3d21bc0a");const ue={key:0,class:"__menu__item-icon"},re={class:"__menu__item-label"},de={class:"__menu__item-tips"},se={class:"__menu__item-arrow-after"},le={class:"__menu__sub__item-label"},me={class:"__menu__sub__item-tips"};ee();const ce=_e((e,u,i,o,_,p)=>(m(),c(te,{to:"body",disabled:!e.appendToBody},[e.showMenu?(m(),c("div",{key:0,ref:"MenuWrapper",class:["__menu__wrapper",e.customClass],style:{width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`}},[(m(!0),c(k,null,O(e.calcMenuList,(n,v)=>(m(),c(k,null,[!n.hidden&&!n.line?(m(),c("div",{key:v,class:["__menu__item",n.disabled&&"disabled",n.customClass],onMousedown:I(r=>e.handleMenuItemClick(n,r),["stop"]),onMouseenter:r=>e.handleMenuMouseEnter(r,n)},[e.hasIcon?(m(),c("div",ue,[e.iconType==="font-icon"?z((m(),c("i",{key:0,class:n.icon},null,2)),[[M,n.icon]]):e.iconType==="svg-icon"?z((m(),c("div",{key:1,class:"__menu__item-icon-svg",innerHTML:n.icon},null,8,["innerHTML"])),[[M,n.icon]]):e.iconType==="vnode-icon"?(m(),c(ne(n.icon),{key:2})):g("v-if",!0)])):g("v-if",!0),x("span",re,L(n.label),1),x("span",de,L(n.tips||""),1),e.hasSubMenu?(m(),c("span",{key:1,class:["__menu__item-arrow",{show:e.hasSubMenu&&n.children}],style:{width:e.arrowSize+"px",height:e.arrowSize+"px"}},[z(x("span",se,null,512),[[M,e.hasSubMenu&&n.children]])],6)):g("v-if",!0),n.children&&n.children.length>0?z((m(),c("div",{key:2,class:"__menu__sub__wrapper",style:{top:`${e.subTop}px`,left:`${e.subLeft}px`}},[(m(!0),c(k,null,O(n.children,(r,w)=>(m(),c(k,null,[!r.hidden&&!r.line?(m(),c("div",{key:w,class:["__menu__sub__item",r.disabled&&"disabled",r.customClass],onMousedown:I(b=>e.handleSubMenuItemClick(r,b),["stop"])},[x("span",le,L(r.label),1),x("span",me,L(r.tips||""),1)],42,["onMousedown"])):g("v-if",!0),r.line?(m(),c("div",{key:w,class:"__menu__line"})):g("v-if",!0)],64))),256))],4)),[[M,e.hoverFlag]]):g("v-if",!0)],42,["onMousedown","onMouseenter"])):g("v-if",!0),!n.hidden&&n.line?(m(),c("div",{key:v,class:"__menu__line"})):g("v-if",!0)],64))),256))],6)):g("v-if",!0)],8,["disabled"])));function be(e,u){u===void 0&&(u={});var i=u.insertAt;if(!(!e||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],_=document.createElement("style");_.type="text/css",i==="top"&&o.firstChild?o.insertBefore(_,o.firstChild):o.appendChild(_),_.styleSheet?_.styleSheet.cssText=e:_.appendChild(document.createTextNode(e))}}var ve=`.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;be(ve);C.render=ce;C.__scopeId="data-v-3d21bc0a";C.__file="packages/mouse-menu/mouse-menu.vue";C.install=e=>{e.component(C.name,C)};function pe(e){var u;const i="__mouse__menu__container";let o;document.querySelector(`.${i}`)?o=document.querySelector(`.${i}`):o=oe("div",i);const _=ae(C,e);return G(_,o),document.body.appendChild(o),(u=_.component)===null||u===void 0?void 0:u.proxy}function Te(){const e=f(U(J,!0)),u=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}],i={menuList:[{label:({id:_})=>`ID为：${_}`,disabled:!0},{label:"编辑",tips:"Edit",fn:_=>X(`您编辑了第 ${e.value.findIndex(p=>p.id===_.id)+1} 行，数据为：${JSON.stringify(_)}`,{type:"success"})}]};function o(_,p,n){n.preventDefault();const{x:v,y:r}=n;pe({el:n.currentTarget,params:_,menuWrapperCss:{background:"var(--el-bg-color)"},menuItemCss:{labelColor:"var(--el-text-color)",hoverLabelColor:"var(--el-color-primary)",hoverTipsColor:"var(--el-color-primary)"},...i}).show(v,r)}return{columns:u,dataList:e,showMouseMenu:o}}export{Te as useColumns};
