import{S as c}from"./sortable.esm-679e0872.js";import{d as s}from"./index-8c77f9cd.js";import{a as m}from"./data-11b60b52.js";function f(){const o=Vue.ref(s(m,!0)),e=Vue.ref([{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}]),t=Vue.ref([{label:"ID",prop:r=>e.value[r].prop},{label:"日期",prop:r=>e.value[r].prop},{label:"姓名",prop:r=>e.value[r].prop}]),l=r=>{r.preventDefault(),Vue.nextTick(()=>{const p=document.querySelector(".el-table__header-wrapper tr");c.create(p,{animation:300,delay:0,onEnd:({newIndex:n,oldIndex:a})=>{const u=e.value[a];e.value.splice(a,1),e.value.splice(n,0,u)}})})};return Vue.onMounted(()=>{Vue.nextTick(()=>{l(event)})}),{columns:t,dataList:o,columnsDrag:e}}export{f as useColumns};
