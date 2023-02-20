import{j as F,a2 as S}from"./runtime-core.esm-bundler-8baab2e8.js";const jt=Object.freeze({left:0,top:0,width:16,height:16}),$t=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),X=Object.freeze({...jt,...$t});Object.freeze({...X,body:"",hidden:!1});({...jt});const Tt=Object.freeze({width:null,height:null}),Ft=Object.freeze({...Tt,...$t});function Wt(t,o){const n={...t};for(const i in o){const e=o[i],r=typeof e;i in Tt?(e===null||e&&(r==="string"||r==="number"))&&(n[i]=e):r===typeof n[i]&&(n[i]=i==="rotate"?e%4:e)}return n}const Kt=/[\s,]+/;function Jt(t,o){o.split(Kt).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Xt(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:i(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/e,r%1===0?i(r):0)}}return o}const Yt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Zt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function rt(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const i=t.split(Yt);if(i===null||!i.length)return t;const e=[];let r=i.shift(),s=Zt.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?e.push(r):e.push(Math.ceil(c*o*n)/n)}else e.push(r);if(r=i.shift(),r===void 0)return e.join("");s=!s}}function te(t,o){const n={...X,...t},i={...Ft,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(w=>{const h=[],p=w.hFlip,f=w.vFlip;let m=w.rotate;p?f?m+=2:(h.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),h.push("scale(-1 1)"),e.top=e.left=0):f&&(h.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),h.push("scale(1 -1)"),e.top=e.left=0);let g;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:g=e.height/2+e.top,h.unshift("rotate(90 "+g.toString()+" "+g.toString()+")");break;case 2:h.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:g=e.width/2+e.left,h.unshift("rotate(-90 "+g.toString()+" "+g.toString()+")");break}m%2===1&&(e.left!==e.top&&(g=e.left,e.left=e.top,e.top=g),e.width!==e.height&&(g=e.width,e.width=e.height,e.height=g)),h.length&&(r='<g transform="'+h.join(" ")+'">'+r+"</g>")});const s=i.width,c=i.height,l=e.width,a=e.height;let u,d;return s===null?(d=c===null?"1em":c==="auto"?a:c,u=rt(d,l/a)):(u=s==="auto"?l:s,d=c===null?rt(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:d.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:r}}const ee=/\sid="(\S+)"/g,ne="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let oe=0;function ie(t,o=ne){const n=[];let i;for(;i=ee.exec(t);)n.push(i[1]);return n.length&&n.forEach(e=>{const r=typeof o=="function"?o(e):o+(oe++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),t}function re(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in o)n+=" "+i+'="'+o[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function se(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ce(t){return'url("data:image/svg+xml,'+se(t)+'")'}const st={...Ft,inline:!1},le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},ae={display:"inline-block"},B={backgroundColor:"currentColor"},Ot={backgroundColor:"transparent"},ct={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},lt={webkitMask:B,mask:B,background:Ot};for(const t in lt){const o=lt[t];for(const n in ct)o[t+n]=ct[n]}const M={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";M[t+"-flip"]=o,M[t.slice(0,1)+"-flip"]=o,M[t+"Flip"]=o});function at(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const fe=(t,o)=>{const n=Wt(st,o),i={...le},e=o.mode||"svg",r={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let p in o){const f=o[p];if(f!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&Jt(n,f);break;case"color":r.color=f;break;case"rotate":typeof f=="string"?n[p]=Xt(f):typeof f=="number"&&(n[p]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete i["aria-hidden"];break;default:{const m=M[p];m?(f===!0||f==="true"||f===1)&&(n[m]=!0):st[p]===void 0&&(i[p]=f)}}}const l=te(t,n),a=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),e==="svg"){i.style={...r,...c},Object.assign(i,a);let p=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),i.innerHTML=ie(l.body,f?()=>f+"ID"+p++:"iconifyVue"),S("svg",i)}const{body:u,width:d,height:b}=t,w=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),h=re(u,{...a,width:d+"",height:b+""});return i.style={...r,"--svg":ce(h),width:at(a.width),height:at(a.height),...ae,...w?B:Ot,...c},S("span",i)},Pt=Object.create(null);function ue(t,o){Pt[t]=o}const ft=F({inheritAttrs:!1,render(){const t=this.$attrs,o=t.icon,n=typeof o=="string"?Pt[o]:typeof o=="object"?o:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:fe({...X,...n},t)}}),de=F({name:"IconifyIconOffline",components:{IconifyIcon:ft},props:{icon:{default:null}},render(){typeof this.icon=="object"&&ue(this.icon,this.icon);const t=this.$attrs;return S(ft,{icon:this.icon,style:t!=null&&t.style?Object.assign(t.style,{outline:"none"}):{outline:"none"},...t},{default:()=>[]})}}),j=/^[a-z0-9]+(-[a-z0-9]+)*$/,_=(t,o,n,i="")=>{const e=t.split(":");if(t.slice(0,1)==="@"){if(e.length<2||e.length>3)return null;i=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){const c=e.pop(),l=e.pop(),a={provider:e.length>0?e[0]:i,prefix:l,name:c};return o&&!E(a)?null:a}const r=e[0],s=r.split("-");if(s.length>1){const c={provider:i,prefix:s.shift(),name:s.join("-")};return o&&!E(c)?null:c}if(n&&i===""){const c={provider:i,prefix:"",name:r};return o&&!E(c,n)?null:c}return null},E=(t,o)=>t?!!((t.provider===""||t.provider.match(j))&&(o&&t.prefix===""||t.prefix.match(j))&&t.name.match(j)):!1,Mt=Object.freeze({left:0,top:0,width:16,height:16}),N=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),D=Object.freeze({...Mt,...N}),Q=Object.freeze({...D,body:"",hidden:!1});function he(t,o){const n={};!t.hFlip!=!o.hFlip&&(n.hFlip=!0),!t.vFlip!=!o.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(o.rotate||0))%4;return i&&(n.rotate=i),n}function ut(t,o){const n=he(t,o);for(const i in Q)i in N?i in t&&!(i in n)&&(n[i]=N[i]):i in o?n[i]=o[i]:i in t&&(n[i]=t[i]);return n}function pe(t,o){const n=t.icons,i=t.aliases||Object.create(null),e=Object.create(null);function r(s){if(n[s])return e[s]=[];if(!(s in e)){e[s]=null;const c=i[s]&&i[s].parent,l=c&&r(c);l&&(e[s]=[c].concat(l))}return e[s]}return(o||Object.keys(n).concat(Object.keys(i))).forEach(r),e}function ge(t,o,n){const i=t.icons,e=t.aliases||Object.create(null);let r={};function s(c){r=ut(i[c]||e[c],r)}return s(o),n.forEach(s),ut(t,r)}function Et(t,o){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(e=>{o(e,null),n.push(e)});const i=pe(t);for(const e in i){const r=i[e];r&&(o(e,ge(t,e,r)),n.push(e))}return n}const me={provider:"",aliases:{},not_found:{},...Mt};function H(t,o){for(const n in o)if(n in t&&typeof t[n]!=typeof o[n])return!1;return!0}function Lt(t){if(typeof t!="object"||t===null)return null;const o=t;if(typeof o.prefix!="string"||!t.icons||typeof t.icons!="object"||!H(t,me))return null;const n=o.icons;for(const e in n){const r=n[e];if(!e.match(j)||typeof r.body!="string"||!H(r,Q))return null}const i=o.aliases||Object.create(null);for(const e in i){const r=i[e],s=r.parent;if(!e.match(j)||typeof s!="string"||!n[s]&&!i[s]||!H(r,Q))return null}return o}const dt=Object.create(null);function ye(t,o){return{provider:t,prefix:o,icons:Object.create(null),missing:new Set}}function v(t,o){const n=dt[t]||(dt[t]=Object.create(null));return n[o]||(n[o]=ye(t,o))}function Y(t,o){return Lt(o)?Et(o,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function be(t,o,n){try{if(typeof n.body=="string")return t.icons[o]={...n},!0}catch{}return!1}let $=!1;function At(t){return typeof t=="boolean"&&($=t),$}function we(t){const o=typeof t=="string"?_(t,!0,$):t;if(o){const n=v(o.provider,o.prefix),i=o.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function Ie(t,o){const n=_(t,!0,$);if(!n)return!1;const i=v(n.provider,n.prefix);return be(i,n.name,o)}function Se(t,o){if(typeof t!="object")return!1;if(typeof o!="string"&&(o=t.provider||""),$&&!o&&!t.prefix){let e=!1;return Lt(t)&&(t.prefix="",Et(t,(r,s)=>{s&&Ie(r,s)&&(e=!0)})),e}const n=t.prefix;if(!E({provider:o,prefix:n,name:"a"}))return!1;const i=v(o,n);return!!Y(i,t)}const Nt=Object.freeze({width:null,height:null}),_t=Object.freeze({...Nt,...N}),xe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ve=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ht(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const i=t.split(xe);if(i===null||!i.length)return t;const e=[];let r=i.shift(),s=ve.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?e.push(r):e.push(Math.ceil(c*o*n)/n)}else e.push(r);if(r=i.shift(),r===void 0)return e.join("");s=!s}}function ke(t,o){const n={...D,...t},i={..._t,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(w=>{const h=[],p=w.hFlip,f=w.vFlip;let m=w.rotate;p?f?m+=2:(h.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),h.push("scale(-1 1)"),e.top=e.left=0):f&&(h.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),h.push("scale(1 -1)"),e.top=e.left=0);let g;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:g=e.height/2+e.top,h.unshift("rotate(90 "+g.toString()+" "+g.toString()+")");break;case 2:h.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:g=e.width/2+e.left,h.unshift("rotate(-90 "+g.toString()+" "+g.toString()+")");break}m%2===1&&(e.left!==e.top&&(g=e.left,e.left=e.top,e.top=g),e.width!==e.height&&(g=e.width,e.width=e.height,e.height=g)),h.length&&(r='<g transform="'+h.join(" ")+'">'+r+"</g>")});const s=i.width,c=i.height,l=e.width,a=e.height;let u,d;return s===null?(d=c===null?"1em":c==="auto"?a:c,u=ht(d,l/a)):(u=s==="auto"?l:s,d=c===null?ht(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:d.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:r}}const Ce=/\sid="(\S+)"/g,je="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let $e=0;function Te(t,o=je){const n=[];let i;for(;i=Ce.exec(t);)n.push(i[1]);return n.length&&n.forEach(e=>{const r=typeof o=="function"?o(e):o+($e++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),t}const U=Object.create(null);function Fe(t,o){U[t]=o}function q(t){return U[t]||U[""]}function Z(t){let o;if(typeof t.resources=="string")o=[t.resources];else if(o=t.resources,!(o instanceof Array)||!o.length)return null;return{resources:o,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const tt=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;C.length>0;)C.length===1||Math.random()>.5?L.push(C.shift()):L.push(C.pop());tt[""]=Z({resources:["https://api.iconify.design"].concat(L)});function Oe(t,o){const n=Z(o);return n===null?!1:(tt[t]=n,!0)}function et(t){return tt[t]}const Pe=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let pt=Pe();function Me(t,o){const n=et(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let e=0;n.resources.forEach(s=>{e=Math.max(e,s.length)});const r=o+".json?icons=";i=n.maxURL-e-n.path.length-r.length}return i}function Ee(t){return t===404}const Le=(t,o,n)=>{const i=[],e=Me(t,o),r="icons";let s={type:r,provider:t,prefix:o,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=e&&a>0&&(i.push(s),s={type:r,provider:t,prefix:o,icons:[]},c=l.length),s.icons.push(l)}),i.push(s),i};function Ae(t){if(typeof t=="string"){const o=et(t);if(o)return o.path}return"/"}const Ne=(t,o,n)=>{if(!pt){n("abort",424);return}let i=Ae(o.provider);switch(o.type){case"icons":{const r=o.prefix,c=o.icons.join(","),l=new URLSearchParams({icons:c});i+=r+".json?"+l.toString();break}case"custom":{const r=o.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let e=503;pt(t+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{n(Ee(s)?"abort":"next",s)});return}return e=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",e)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",e)})},_e={prepare:Le,send:Ne};function De(t){const o={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((e,r)=>e.provider!==r.provider?e.provider.localeCompare(r.provider):e.prefix!==r.prefix?e.prefix.localeCompare(r.prefix):e.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(e=>{if(i.name===e.name&&i.prefix===e.prefix&&i.provider===e.provider)return;i=e;const r=e.provider,s=e.prefix,c=e.name,l=n[r]||(n[r]=Object.create(null)),a=l[s]||(l[s]=v(r,s));let u;c in a.icons?u=o.loaded:s===""||a.missing.has(c)?u=o.missing:u=o.pending;const d={provider:r,prefix:s,name:c};u.push(d)}),o}function Dt(t,o){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(e=>e.id!==o))})}function ze(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const o=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!o.length)return;let n=!1;const i=t.provider,e=t.prefix;o.forEach(r=>{const s=r.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==e)return!0;const a=l.name;if(t.icons[a])s.loaded.push({provider:i,prefix:e,name:a});else if(t.missing.has(a))s.missing.push({provider:i,prefix:e,name:a});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||Dt([t],r.id),r.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),r.abort))})}))}let Re=0;function He(t,o,n){const i=Re++,e=Dt.bind(null,n,i);if(!o.pending.length)return e;const r={id:i,icons:o,callback:t,abort:e};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(r)}),e}function Ve(t,o=!0,n=!1){const i=[];return t.forEach(e=>{const r=typeof e=="string"?_(e,o,n):e;r&&i.push(r)}),i}var Be={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Qe(t,o,n,i){const e=t.resources.length,r=t.random?Math.floor(Math.random()*e):t.index;let s;if(t.random){let y=t.resources.slice(0);for(s=[];y.length>1;){const I=Math.floor(Math.random()*y.length);s.push(y[I]),y=y.slice(0,I).concat(y.slice(I+1))}s=s.concat(y)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let l="pending",a=0,u,d=null,b=[],w=[];typeof i=="function"&&w.push(i);function h(){d&&(clearTimeout(d),d=null)}function p(){l==="pending"&&(l="aborted"),h(),b.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),b=[]}function f(y,I){I&&(w=[]),typeof y=="function"&&w.push(y)}function m(){return{startTime:c,payload:o,status:l,queriesSent:a,queriesPending:b.length,subscribe:f,abort:p}}function g(){l="failed",w.forEach(y=>{y(void 0,u)})}function it(){b.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),b=[]}function Gt(y,I,k){const O=I!=="success";switch(b=b.filter(x=>x!==y),l){case"pending":break;case"failed":if(O||!t.dataAfterTimeout)return;break;default:return}if(I==="abort"){u=k,g();return}if(O){u=k,b.length||(s.length?R():g());return}if(h(),it(),!t.random){const x=t.resources.indexOf(y.resource);x!==-1&&x!==t.index&&(t.index=x)}l="completed",w.forEach(x=>{x(k)})}function R(){if(l!=="pending")return;h();const y=s.shift();if(y===void 0){if(b.length){d=setTimeout(()=>{h(),l==="pending"&&(it(),g())},t.timeout);return}g();return}const I={status:"pending",resource:y,callback:(k,O)=>{Gt(I,k,O)}};b.push(I),a++,d=setTimeout(R,t.rotate),n(y,o,I.callback)}return setTimeout(R),m}function zt(t){const o={...Be,...t};let n=[];function i(){n=n.filter(c=>c().status==="pending")}function e(c,l,a){const u=Qe(o,c,l,(d,b)=>{i(),a&&a(d,b)});return n.push(u),u}function r(c){return n.find(l=>c(l))||null}return{query:e,find:r,setIndex:c=>{o.index=c},getIndex:()=>o.index,cleanup:i}}function gt(){}const V=Object.create(null);function Ue(t){if(!V[t]){const o=et(t);if(!o)return;const n=zt(o),i={config:o,redundancy:n};V[t]=i}return V[t]}function qe(t,o,n){let i,e;if(typeof t=="string"){const r=q(t);if(!r)return n(void 0,424),gt;e=r.send;const s=Ue(t);s&&(i=s.redundancy)}else{const r=Z(t);if(r){i=zt(r);const s=t.resources?t.resources[0]:"",c=q(s);c&&(e=c.send)}}return!i||!e?(n(void 0,424),gt):i.query(o,e,n)().abort}const mt="iconify2",T="iconify",Rt=T+"-count",yt=T+"-version",Ht=36e5,Ge=168;function G(t,o){try{return t.getItem(o)}catch{}}function nt(t,o,n){try{return t.setItem(o,n),!0}catch{}}function bt(t,o){try{t.removeItem(o)}catch{}}function W(t,o){return nt(t,Rt,o.toString())}function K(t){return parseInt(G(t,Rt))||0}const z={local:!0,session:!0},Vt={local:new Set,session:new Set};let ot=!1;function We(t){ot=t}let P=typeof window>"u"?{}:window;function Bt(t){const o=t+"Storage";try{if(P&&P[o]&&typeof P[o].length=="number")return P[o]}catch{}z[t]=!1}function Qt(t,o){const n=Bt(t);if(!n)return;const i=G(n,yt);if(i!==mt){if(i){const c=K(n);for(let l=0;l<c;l++)bt(n,T+l.toString())}nt(n,yt,mt),W(n,0);return}const e=Math.floor(Date.now()/Ht)-Ge,r=c=>{const l=T+c.toString(),a=G(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>e&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&o(u,c))return!0}catch{}bt(n,l)}};let s=K(n);for(let c=s-1;c>=0;c--)r(c)||(c===s-1?(s--,W(n,s)):Vt[t].add(c))}function Ut(){if(!ot){We(!0);for(const t in z)Qt(t,o=>{const n=o.data,i=o.provider,e=n.prefix,r=v(i,e);if(!Y(r,n).length)return!1;const s=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,s):s,!0})}}function Ke(t,o){const n=t.lastModifiedCached;if(n&&n>=o)return n===o;if(t.lastModifiedCached=o,n)for(const i in z)Qt(i,e=>{const r=e.data;return e.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===o});return!0}function Je(t,o){ot||Ut();function n(i){let e;if(!z[i]||!(e=Bt(i)))return;const r=Vt[i];let s;if(r.size)r.delete(s=Array.from(r).shift());else if(s=K(e),!W(e,s+1))return;const c={cached:Math.floor(Date.now()/Ht),provider:t.provider,data:o};return nt(e,T+s.toString(),JSON.stringify(c))}o.lastModified&&!Ke(t,o.lastModified)||Object.keys(o.icons).length&&(o.not_found&&(o=Object.assign({},o),delete o.not_found),n("local")||n("session"))}function wt(){}function Xe(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,ze(t)}))}function Ye(t,o){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(o).sort():t.iconsToLoad=o,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,e=t.iconsToLoad;delete t.iconsToLoad;let r;if(!e||!(r=q(n)))return;r.prepare(n,i,e).forEach(c=>{qe(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=Y(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),Je(t,l)}catch(a){console.error(a)}Xe(t)})})}))}const Ze=(t,o)=>{const n=Ve(t,!0,At()),i=De(n);if(!i.pending.length){let l=!0;return o&&setTimeout(()=>{l&&o(i.loaded,i.missing,i.pending,wt)}),()=>{l=!1}}const e=Object.create(null),r=[];let s,c;return i.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===s)return;s=a,c=u,r.push(v(a,u));const d=e[a]||(e[a]=Object.create(null));d[u]||(d[u]=[])}),i.pending.forEach(l=>{const{provider:a,prefix:u,name:d}=l,b=v(a,u),w=b.pendingIcons||(b.pendingIcons=new Set);w.has(d)||(w.add(d),e[a][u].push(d))}),r.forEach(l=>{const{provider:a,prefix:u}=l;e[a][u].length&&Ye(l,e[a][u])}),o?He(o,i,r):wt};function tn(t,o){const n={...t};for(const i in o){const e=o[i],r=typeof e;i in Nt?(e===null||e&&(r==="string"||r==="number"))&&(n[i]=e):r===typeof n[i]&&(n[i]=i==="rotate"?e%4:e)}return n}const en=/[\s,]+/;function nn(t,o){o.split(en).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function on(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:i(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/e,r%1===0?i(r):0)}}return o}function rn(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in o)n+=" "+i+'="'+o[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function sn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function cn(t){return'url("data:image/svg+xml,'+sn(t)+'")'}const It={..._t,inline:!1},ln={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},an={display:"inline-block"},J={backgroundColor:"currentColor"},qt={backgroundColor:"transparent"},St={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},xt={webkitMask:J,mask:J,background:qt};for(const t in xt){const o=xt[t];for(const n in St)o[t+n]=St[n]}const A={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";A[t+"-flip"]=o,A[t.slice(0,1)+"-flip"]=o,A[t+"Flip"]=o});function vt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const kt=(t,o)=>{const n=tn(It,o),i={...ln},e=o.mode||"svg",r={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let p in o){const f=o[p];if(f!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&nn(n,f);break;case"color":r.color=f;break;case"rotate":typeof f=="string"?n[p]=on(f):typeof f=="number"&&(n[p]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete i["aria-hidden"];break;default:{const m=A[p];m?(f===!0||f==="true"||f===1)&&(n[m]=!0):It[p]===void 0&&(i[p]=f)}}}const l=ke(t,n),a=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),e==="svg"){i.style={...r,...c},Object.assign(i,a);let p=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),i.innerHTML=Te(l.body,f?()=>f+"ID"+p++:"iconifyVue"),S("svg",i)}const{body:u,width:d,height:b}=t,w=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),h=rn(u,{...a,width:d+"",height:b+""});return i.style={...r,"--svg":cn(h),width:vt(a.width),height:vt(a.height),...an,...w?J:qt,...c},S("span",i)};At(!0);Fe("",_e);if(typeof document<"u"&&typeof window<"u"){Ut();const t=window;if(t.IconifyPreload!==void 0){const o=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof o=="object"&&o!==null&&(o instanceof Array?o:[o]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Se(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const o=t.IconifyProviders;if(typeof o=="object"&&o!==null)for(let n in o){const i="IconifyProviders["+n+"] is invalid.";try{const e=o[n];if(typeof e!="object"||!e||e.resources===void 0)continue;Oe(n,e)||console.error(i)}catch{console.error(i)}}}}const fn={...D,body:""},Ct=F({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,o){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=_(t,!1,!0))===null)return this.abortLoading(),null;const i=we(n);if(!i)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",i!==null&&(this._loadingIcon={name:t,abort:Ze([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,o&&o(t));const e=["iconify"];return n.prefix!==""&&e.push("iconify--"+n.prefix),n.provider!==""&&e.push("iconify--"+n.provider),{data:i,classes:e}}},render(){this.counter;const t=this.$attrs,o=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!o)return kt(fn,t);let n=t;return o.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+o.classes.join(" ")}),kt({...D,...o.data},n)}}),un=F({name:"IconifyIconOnline",components:{IconifyIcon:Ct},props:{icon:{type:String,default:""}},render(){const t=this.$attrs;return S(Ct,{icon:`${this.icon}`,style:t!=null&&t.style?Object.assign(t.style,{outline:"none"}):{outline:"none"},...t},{default:()=>[]})}}),dn=F({name:"FontIcon",props:{icon:{type:String,default:""}},render(){const t=this.$attrs;return Object.keys(t).includes("uni")||(t==null?void 0:t.iconType)==="uni"?S("i",{class:"iconfont",...t},this.icon):Object.keys(t).includes("svg")||(t==null?void 0:t.iconType)==="svg"?S("svg",{class:"icon-svg","aria-hidden":!0},{default:()=>[S("use",{"xlink:href":`#${this.icon}`})]}):S("i",{class:`iconfont ${this.icon}`,...t})}}),pn=de,gn=un,mn=dn;export{mn as F,pn as I,gn as a,ue as b};
