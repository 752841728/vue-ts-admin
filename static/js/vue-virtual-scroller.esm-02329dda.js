import{b6 as de,b4 as he,I as Z,k as _,x as U,bq as ue,a2 as fe,a9 as me,bc as pe,a3 as ee,ad as ve,z as ye,l as x,n as w,B as K,y as T,F as be,X as ge,A as Y,P as te,a6 as ze,t as Se,q as X,E as $e,$ as _e,a8 as we}from"./runtime-core.esm-bundler-8baab2e8.js";function Ie(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var i=e.indexOf("Trident/");if(i>0){var s=e.indexOf("rv:");return parseInt(e.substring(s+3,e.indexOf(".",s)),10)}var r=e.indexOf("Edge/");return r>0?parseInt(e.substring(r+5,e.indexOf(".",r)),10):-1}let M;function F(){F.init||(F.init=!0,M=Ie()!==-1)}var E={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){F(),Z(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",M&&this.$el.appendChild(e),e.data="about:blank",M||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!M&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Oe=ue();de("data-v-b329ee4c");const Te={class:"resize-observer",tabindex:"-1"};he();const Ve=Oe((e,t,i,s,r,a)=>(_(),U("div",Te)));E.render=Ve;E.__scopeId="data-v-b329ee4c";E.__file="src/components/ResizeObserver.vue";function P(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?P=function(t){return typeof t}:P=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(e)}function ke(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function De(e,t,i){return t&&G(e.prototype,t),i&&G(e,i),e}function J(e){return Re(e)||Ae(e)||xe(e)||Me()}function Re(e){if(Array.isArray(e))return C(e)}function Ae(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function xe(e,t){if(e){if(typeof e=="string")return C(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return C(e,t)}}function C(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}function Me(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(e){var t;return typeof e=="function"?t={callback:e}:t=e,t}function Ue(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,r,a,l=function(n){for(var h=arguments.length,p=new Array(h>1?h-1:0),z=1;z<h;z++)p[z-1]=arguments[z];if(a=p,!(s&&n===r)){var I=i.leading;typeof I=="function"&&(I=I(n,r)),(!s||n!==r)&&I&&e.apply(void 0,[n].concat(J(a))),r=n,clearTimeout(s),s=setTimeout(function(){e.apply(void 0,[n].concat(J(a))),s=0},t)}};return l._clear=function(){clearTimeout(s),s=null},l}function ie(e,t){if(e===t)return!0;if(P(e)==="object"){for(var i in e)if(!ie(e[i],t[i]))return!1;return!0}return!1}var Ee=function(){function e(t,i,s){ke(this,e),this.el=t,this.observer=null,this.frozen=!1,this.createObserver(i,s)}return De(e,[{key:"createObserver",value:function(i,s){var r=this;if(this.observer&&this.destroyObserver(),!this.frozen){if(this.options=Pe(i),this.callback=function(o,n){r.options.callback(o,n),o&&r.options.once&&(r.frozen=!0,r.destroyObserver())},this.callback&&this.options.throttle){var a=this.options.throttleOptions||{},l=a.leading;this.callback=Ue(this.callback,this.options.throttle,{leading:function(n){return l==="both"||l==="visible"&&n||l==="hidden"&&!n}})}this.oldResult=void 0,this.observer=new IntersectionObserver(function(o){var n=o[0];if(o.length>1){var h=o.find(function(z){return z.isIntersecting});h&&(n=h)}if(r.callback){var p=n.isIntersecting&&n.intersectionRatio>=r.threshold;if(p===r.oldResult)return;r.oldResult=p,r.callback(p,n)}},this.options.intersection),Z(function(){r.observer&&r.observer.observe(r.el)})}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&typeof this.options.intersection.threshold=="number"?this.options.intersection.threshold:0}}]),e}();function se(e,t,i){var s=t.value;if(s)if(typeof IntersectionObserver>"u")console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var r=new Ee(e,s,i);e._vue_visibilityState=r}}function He(e,t,i){var s=t.value,r=t.oldValue;if(!ie(s,r)){var a=e._vue_visibilityState;if(!s){re(e);return}a?a.createObserver(s,i):se(e,{value:s},i)}}function re(e){var t=e._vue_visibilityState;t&&(t.destroyObserver(),delete e._vue_visibilityState)}var Fe={beforeMount:se,updated:He,unmounted:re};function Ce(e){return{all:e=e||new Map,on:function(t,i){var s=e.get(t);s&&s.push(i)||e.set(t,[i])},off:function(t,i){var s=e.get(t);s&&s.splice(s.indexOf(i)>>>0,1)},emit:function(t,i){(e.get(t)||[]).slice().map(function(s){s(i)}),(e.get("*")||[]).slice().map(function(s){s(t,i)})}}}var Ne={itemsLimit:1e3},Be=/(auto|scroll)/;function ne(e,t){return e.parentNode===null?t:ne(e.parentNode,t.concat([e]))}var H=function(t,i){return getComputedStyle(t,null).getPropertyValue(i)},Le=function(t){return H(t,"overflow")+H(t,"overflow-y")+H(t,"overflow-x")},We=function(t){return Be.test(Le(t))};function Q(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(var t=ne(e.parentNode,[]),i=0;i<t.length;i+=1)if(We(t[i]))return t[i];return document.scrollingElement||document.documentElement}}function N(e){return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(e)}var le={items:{type:Array,required:!0},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:function(t){return["vertical","horizontal"].includes(t)}},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"}};function oe(){return this.items.length&&N(this.items[0])!=="object"}var B=!1;if(typeof window<"u"){B=!1;try{var je=Object.defineProperty({},"passive",{get:function(){B=!0}});window.addEventListener("test",null,je)}catch{}}let qe=0;var L={name:"RecycleScroller",components:{ResizeObserver:E},directives:{ObserveVisibility:Fe},props:{...le,itemSize:{type:Number,default:null},gridItems:{type:Number,default:void 0},itemSecondarySize:{type:Number,default:void 0},minItemSize:{type:[Number,String],default:null},sizeField:{type:String,default:"size"},typeField:{type:String,default:"type"},buffer:{type:Number,default:200},pageMode:{type:Boolean,default:!1},prerender:{type:Number,default:0},emitUpdate:{type:Boolean,default:!1},updateInterval:{type:Number,default:0},skipHover:{type:Boolean,default:!1},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"},listClass:{type:[String,Object,Array],default:""},itemClass:{type:[String,Object,Array],default:""}},emits:["resize","visible","hidden","update","scroll-start","scroll-end"],data(){return{pool:[],totalSize:0,ready:!1,hoverKey:null}},computed:{sizes(){if(this.itemSize===null){const e={"-1":{accumulator:0}},t=this.items,i=this.sizeField,s=this.minItemSize;let r=1e4,a=0,l;for(let o=0,n=t.length;o<n;o++)l=t[o][i]||s,l<r&&(r=l),a+=l,e[o]={accumulator:a,size:l};return this.$_computedMinItemSize=r,e}return[]},simpleArray:oe,itemIndexByKey(){const{keyField:e,items:t}=this,i={};for(let s=0,r=t.length;s<r;s++)i[t[s][e]]=s;return i}},watch:{items(){this.updateVisibleItems(!0)},pageMode(){this.applyPageMode(),this.updateVisibleItems(!1)},sizes:{handler(){this.updateVisibleItems(!1)},deep:!0},gridItems(){this.updateVisibleItems(!0)},itemSecondarySize(){this.updateVisibleItems(!0)}},created(){this.$_startIndex=0,this.$_endIndex=0,this.$_views=new Map,this.$_unusedViews=new Map,this.$_scrollDirty=!1,this.$_lastUpdateScrollPosition=0,this.prerender&&(this.$_prerender=!0,this.updateVisibleItems(!1)),this.gridItems&&!this.itemSize&&console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems")},mounted(){this.applyPageMode(),this.$nextTick(()=>{this.$_prerender=!1,this.updateVisibleItems(!0),this.ready=!0})},activated(){const e=this.$_lastUpdateScrollPosition;typeof e=="number"&&this.$nextTick(()=>{this.scrollToPosition(e)})},beforeUnmount(){this.removeListeners()},methods:{addView(e,t,i,s,r){const a=me({id:qe++,index:t,used:!0,key:s,type:r}),l=pe({item:i,position:0,nr:a});return e.push(l),l},unuseView(e,t=!1){const i=this.$_unusedViews,s=e.nr.type;let r=i.get(s);r||(r=[],i.set(s,r)),r.push(e),t||(e.nr.used=!1,e.position=-9999)},handleResize(){this.$emit("resize"),this.ready&&this.updateVisibleItems(!1)},handleScroll(e){if(!this.$_scrollDirty){if(this.$_scrollDirty=!0,this.$_updateTimeout)return;const t=()=>requestAnimationFrame(()=>{this.$_scrollDirty=!1;const{continuous:i}=this.updateVisibleItems(!1,!0);i||(clearTimeout(this.$_refreshTimout),this.$_refreshTimout=setTimeout(this.handleScroll,this.updateInterval+100))});t(),this.updateInterval&&(this.$_updateTimeout=setTimeout(()=>{this.$_updateTimeout=0,this.$_scrollDirty&&t()},this.updateInterval))}},handleVisibilityChange(e,t){this.ready&&(e||t.boundingClientRect.width!==0||t.boundingClientRect.height!==0?(this.$emit("visible"),requestAnimationFrame(()=>{this.updateVisibleItems(!1)})):this.$emit("hidden"))},updateVisibleItems(e,t=!1){const i=this.itemSize,s=this.gridItems||1,r=this.itemSecondarySize||i,a=this.$_computedMinItemSize,l=this.typeField,o=this.simpleArray?null:this.keyField,n=this.items,h=n.length,p=this.sizes,z=this.$_views,I=this.$_unusedViews,D=this.pool,ce=this.itemIndexByKey;let v,u,V,g,S;if(!h)v=u=g=S=V=0;else if(this.$_prerender)v=g=0,u=S=Math.min(this.prerender,n.length),V=null;else{const c=this.getScroll();if(t){let m=c.start-this.$_lastUpdateScrollPosition;if(m<0&&(m=-m),i===null&&m<a||m<i)return{continuous:!0}}this.$_lastUpdateScrollPosition=c.start;const y=this.buffer;c.start-=y,c.end+=y;let f=0;if(this.$refs.before&&(f=this.$refs.before.scrollHeight,c.start-=f),this.$refs.after){const m=this.$refs.after.scrollHeight;c.end+=m}if(i===null){let m,k=0,j=h-1,b=~~(h/2),q;do q=b,m=p[b].accumulator,m<c.start?k=b:b<h-1&&p[b+1].accumulator>c.start&&(j=b),b=~~((k+j)/2);while(b!==q);for(b<0&&(b=0),v=b,V=p[h-1].accumulator,u=b;u<h&&p[u].accumulator<c.end;u++);for(u===-1?u=n.length-1:(u++,u>h&&(u=h)),g=v;g<h&&f+p[g].accumulator<c.start;g++);for(S=g;S<h&&f+p[S].accumulator<c.end;S++);}else{v=~~(c.start/i*s);const m=v%s;v-=m,u=Math.ceil(c.end/i*s),g=Math.max(0,Math.floor((c.start-f)/i*s)),S=Math.floor((c.end-f)/i*s),v<0&&(v=0),u>h&&(u=h),g<0&&(g=0),S>h&&(S=h),V=Math.ceil(h/s)*i}}u-v>Ne.itemsLimit&&this.itemsLimitError(),this.totalSize=V;let d;const R=v<=this.$_endIndex&&u>=this.$_startIndex;if(R)for(let c=0,y=D.length;c<y;c++)d=D[c],d.nr.used&&(e&&(d.nr.index=ce[d.item[o]]),(d.nr.index==null||d.nr.index<v||d.nr.index>=u)&&this.unuseView(d));const W=R?null:new Map;let O,$,A;for(let c=v;c<u;c++){O=n[c];const y=o?O[o]:O;if(y==null)throw new Error(`Key is ${y} on item (keyField is '${o}')`);if(d=z.get(y),!i&&!p[c].size){d&&this.unuseView(d);continue}$=O[l];let f=I.get($),m=!1;if(!d)R?f&&f.length?d=f.pop():d=this.addView(D,c,O,y,$):(A=W.get($)||0,(!f||A>=f.length)&&(d=this.addView(D,c,O,y,$),this.unuseView(d,!0),f=I.get($)),d=f[A],W.set($,A+1)),z.delete(d.nr.key),d.nr.used=!0,d.nr.index=c,d.nr.key=y,d.nr.type=$,z.set(y,d),m=!0;else if(!d.nr.used&&(d.nr.used=!0,m=!0,f)){const k=f.indexOf(d);k!==-1&&f.splice(k,1)}d.item=O,m&&(c===n.length-1&&this.$emit("scroll-end"),c===0&&this.$emit("scroll-start")),i===null?(d.position=p[c-1].accumulator,d.offset=0):(d.position=Math.floor(c/s)*i,d.offset=c%s*r)}return this.$_startIndex=v,this.$_endIndex=u,this.emitUpdate&&this.$emit("update",v,u,g,S),clearTimeout(this.$_sortTimer),this.$_sortTimer=setTimeout(this.sortViews,this.updateInterval+300),{continuous:R}},getListenerTarget(){let e=Q(this.$el);return window.document&&(e===window.document.documentElement||e===window.document.body)&&(e=window),e},getScroll(){const{$el:e,direction:t}=this,i=t==="vertical";let s;if(this.pageMode){const r=e.getBoundingClientRect(),a=i?r.height:r.width;let l=-(i?r.top:r.left),o=i?window.innerHeight:window.innerWidth;l<0&&(o+=l,l=0),l+o>a&&(o=a-l),s={start:l,end:l+o}}else i?s={start:e.scrollTop,end:e.scrollTop+e.clientHeight}:s={start:e.scrollLeft,end:e.scrollLeft+e.clientWidth};return s},applyPageMode(){this.pageMode?this.addListeners():this.removeListeners()},addListeners(){this.listenerTarget=this.getListenerTarget(),this.listenerTarget.addEventListener("scroll",this.handleScroll,B?{passive:!0}:!1),this.listenerTarget.addEventListener("resize",this.handleResize)},removeListeners(){this.listenerTarget&&(this.listenerTarget.removeEventListener("scroll",this.handleScroll),this.listenerTarget.removeEventListener("resize",this.handleResize),this.listenerTarget=null)},scrollToItem(e){let t;const i=this.gridItems||1;this.itemSize===null?t=e>0?this.sizes[e-1].accumulator:0:t=Math.floor(e/i)*this.itemSize,this.scrollToPosition(t)},scrollToPosition(e){const t=this.direction==="vertical"?{scroll:"scrollTop",start:"top"}:{scroll:"scrollLeft",start:"left"};let i,s,r;if(this.pageMode){const a=Q(this.$el),l=a.tagName==="HTML"?0:a[t.scroll],o=a.getBoundingClientRect(),h=this.$el.getBoundingClientRect()[t.start]-o[t.start];i=a,s=t.scroll,r=e+l+h}else i=this.$el,s=t.scroll,r=e;i[s]=r},itemsLimitError(){throw setTimeout(()=>{console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",this.$el),console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")}),new Error("Rendered items limit reached")},sortViews(){this.pool.sort((e,t)=>e.nr.index-t.nr.index)}}};const Ke={key:0,ref:"before",class:"vue-recycle-scroller__slot"},Ye={key:1,ref:"after",class:"vue-recycle-scroller__slot"};function Xe(e,t,i,s,r,a){const l=ee("ResizeObserver"),o=ve("observe-visibility");return ye((_(),x("div",{class:X(["vue-recycle-scroller",{ready:r.ready,"page-mode":i.pageMode,[`direction-${e.direction}`]:!0}]),onScrollPassive:t[0]||(t[0]=(...n)=>a.handleScroll&&a.handleScroll(...n))},[e.$slots.before?(_(),x("div",Ke,[w(e.$slots,"before")],512)):K("v-if",!0),(_(),U(Y(i.listTag),{ref:"wrapper",style:Se({[e.direction==="vertical"?"minHeight":"minWidth"]:r.totalSize+"px"}),class:X(["vue-recycle-scroller__item-wrapper",i.listClass])},{default:T(()=>[(_(!0),x(be,null,ge(r.pool,n=>(_(),U(Y(i.itemTag),te({key:n.nr.id,style:r.ready?{transform:`translate${e.direction==="vertical"?"Y":"X"}(${n.position}px) translate${e.direction==="vertical"?"X":"Y"}(${n.offset}px)`,width:i.gridItems?`${e.direction==="vertical"&&i.itemSecondarySize||i.itemSize}px`:void 0,height:i.gridItems?`${e.direction==="horizontal"&&i.itemSecondarySize||i.itemSize}px`:void 0}:null,class:["vue-recycle-scroller__item-view",[i.itemClass,{hover:!i.skipHover&&r.hoverKey===n.nr.key}]]},ze(i.skipHover?{}:{mouseenter:()=>{r.hoverKey=n.nr.key},mouseleave:()=>{r.hoverKey=null}})),{default:T(()=>[w(e.$slots,"default",{item:n.item,index:n.nr.index,active:n.nr.used})]),_:2},1040,["style","class"]))),128)),w(e.$slots,"empty")]),_:3},8,["style","class"])),e.$slots.after?(_(),x("div",Ye,[w(e.$slots,"after")],512)):K("v-if",!0),$e(l,{onNotify:a.handleResize},null,8,["onNotify"])],34)),[[o,a.handleVisibilityChange]])}L.render=Xe;L.__file="src/components/RecycleScroller.vue";var ae={name:"DynamicScroller",components:{RecycleScroller:L},provide(){return typeof ResizeObserver<"u"&&(this.$_resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>{if(Array.isArray(e)){for(const t of e)if(t.target&&t.target.$_vs_onResize){const i=t.borderBoxSize[0];t.target.$_vs_onResize(t.target.$_vs_id,i.inlineSize,i.blockSize)}}})})),{vscrollData:this.vscrollData,vscrollParent:this,vscrollResizeObserver:this.$_resizeObserver}},inheritAttrs:!1,props:{...le,minItemSize:{type:[Number,String],required:!0}},emits:["resize","visible"],data(){return{vscrollData:{active:!0,sizes:{},keyField:this.keyField,simpleArray:!1}}},computed:{simpleArray:oe,itemsWithSize(){const e=[],{items:t,keyField:i,simpleArray:s}=this,r=this.vscrollData.sizes,a=t.length;for(let l=0;l<a;l++){const o=t[l],n=s?l:o[i];let h=r[n];typeof h>"u"&&!this.$_undefinedMap[n]&&(h=0),e.push({item:o,id:n,size:h})}return e}},watch:{items(){this.forceUpdate()},simpleArray:{handler(e){this.vscrollData.simpleArray=e},immediate:!0},direction(e){this.forceUpdate(!0)},itemsWithSize(e,t){const i=this.$el.scrollTop;let s=0,r=0;const a=Math.min(e.length,t.length);for(let o=0;o<a&&!(s>=i);o++)s+=t[o].size||this.minItemSize,r+=e[o].size||this.minItemSize;const l=r-s;l!==0&&(this.$el.scrollTop+=l)}},beforeCreate(){this.$_updates=[],this.$_undefinedSizes=0,this.$_undefinedMap={},this.$_events=Ce()},activated(){this.vscrollData.active=!0},deactivated(){this.vscrollData.active=!1},unmounted(){this.$_events.all.clear()},methods:{onScrollerResize(){this.$refs.scroller&&this.forceUpdate(),this.$emit("resize")},onScrollerVisible(){this.$_events.emit("vscroll:update",{force:!1}),this.$emit("visible")},forceUpdate(e=!1){(e||this.simpleArray)&&(this.vscrollData.sizes={}),this.$_events.emit("vscroll:update",{force:!0})},scrollToItem(e){const t=this.$refs.scroller;t&&t.scrollToItem(e)},getItemSize(e,t=void 0){const i=this.simpleArray?t??this.items.indexOf(e):e[this.keyField];return this.vscrollData.sizes[i]||0},scrollToBottom(){if(this.$_scrollingToBottom)return;this.$_scrollingToBottom=!0;const e=this.$el;this.$nextTick(()=>{e.scrollTop=e.scrollHeight+5e3;const t=()=>{e.scrollTop=e.scrollHeight+5e3,requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight+5e3,this.$_undefinedSizes===0?this.$_scrollingToBottom=!1:requestAnimationFrame(t)})};requestAnimationFrame(t)})}}};function Ge(e,t,i,s,r,a){const l=ee("RecycleScroller");return _(),U(l,te({ref:"scroller",items:a.itemsWithSize,"min-item-size":i.minItemSize,direction:e.direction,"key-field":"id","list-tag":e.listTag,"item-tag":e.itemTag},e.$attrs,{onResize:a.onScrollerResize,onVisible:a.onScrollerVisible}),{default:T(({item:o,index:n,active:h})=>[w(e.$slots,"default",_e(we({item:o.item,index:n,active:h,itemWithSize:o})))]),before:T(()=>[w(e.$slots,"before")]),after:T(()=>[w(e.$slots,"after")]),empty:T(()=>[w(e.$slots,"empty")]),_:3},16,["items","min-item-size","direction","list-tag","item-tag","onResize","onVisible"])}ae.render=Ge;ae.__file="src/components/DynamicScroller.vue";var Je={name:"DynamicScrollerItem",inject:["vscrollData","vscrollParent","vscrollResizeObserver"],props:{item:{required:!0},watchData:{type:Boolean,default:!1},active:{type:Boolean,required:!0},index:{type:Number,default:void 0},sizeDependencies:{type:[Array,Object],default:null},emitResize:{type:Boolean,default:!1},tag:{type:String,default:"div"}},emits:["resize"],computed:{id(){if(this.vscrollData.simpleArray)return this.index;if(this.vscrollData.keyField in this.item)return this.item[this.vscrollData.keyField];throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`)},size(){return this.vscrollData.sizes[this.id]||0},finalActive(){return this.active&&this.vscrollData.active}},watch:{watchData:"updateWatchData",id(e,t){if(this.$el.$_vs_id=this.id,this.size||this.onDataUpdate(),this.$_sizeObserved){const i=this.vscrollData.sizes[t],s=this.vscrollData.sizes[e];i!=null&&i!==s&&this.applySize(i)}},finalActive(e){this.size||(e?this.vscrollParent.$_undefinedMap[this.id]||(this.vscrollParent.$_undefinedSizes++,this.vscrollParent.$_undefinedMap[this.id]=!0):this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=!1)),this.vscrollResizeObserver?e?this.observeSize():this.unobserveSize():e&&this.$_pendingVScrollUpdate===this.id&&this.updateSize()}},created(){if(!this.$isServer&&(this.$_forceNextVScrollUpdate=null,this.updateWatchData(),!this.vscrollResizeObserver)){for(const e in this.sizeDependencies)this.$watch(()=>this.sizeDependencies[e],this.onDataUpdate);this.vscrollParent.$_events.on("vscroll:update",this.onVscrollUpdate)}},mounted(){this.finalActive&&(this.updateSize(),this.observeSize())},beforeUnmount(){this.vscrollParent.$_events.off("vscroll:update",this.onVscrollUpdate),this.unobserveSize()},methods:{updateSize(){this.finalActive?this.$_pendingSizeUpdate!==this.id&&(this.$_pendingSizeUpdate=this.id,this.$_forceNextVScrollUpdate=null,this.$_pendingVScrollUpdate=null,this.computeSize(this.id)):this.$_forceNextVScrollUpdate=this.id},updateWatchData(){this.watchData&&!this.vscrollResizeObserver?this.$_watchData=this.$watch("item",()=>{this.onDataUpdate()},{deep:!0}):this.$_watchData&&(this.$_watchData(),this.$_watchData=null)},onVscrollUpdate({force:e}){!this.finalActive&&e&&(this.$_pendingVScrollUpdate=this.id),(this.$_forceNextVScrollUpdate===this.id||e||!this.size)&&this.updateSize()},onDataUpdate(){this.updateSize()},computeSize(e){this.$nextTick(()=>{if(this.id===e){const t=this.$el.offsetWidth,i=this.$el.offsetHeight;this.applyWidthHeight(t,i)}this.$_pendingSizeUpdate=null})},applyWidthHeight(e,t){const i=~~(this.vscrollParent.direction==="vertical"?t:e);i&&this.size!==i&&this.applySize(i)},applySize(e){this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=void 0),this.vscrollData.sizes[this.id]=e,this.emitResize&&this.$emit("resize",this.id)},observeSize(){this.vscrollResizeObserver&&(this.$_sizeObserved||(this.vscrollResizeObserver.observe(this.$el),this.$el.$_vs_id=this.id,this.$el.$_vs_onResize=this.onResize,this.$_sizeObserved=!0))},unobserveSize(){this.vscrollResizeObserver&&this.$_sizeObserved&&(this.vscrollResizeObserver.unobserve(this.$el),this.$el.$_vs_onResize=void 0,this.$_sizeObserved=!1)},onResize(e,t,i){this.id===e&&this.applyWidthHeight(t,i)}},render(){return fe(this.tag,this.$slots.default())}};Je.__file="src/components/DynamicScrollerItem.vue";export{ae as a,Je as s};
