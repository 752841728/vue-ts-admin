import{u as c}from"./app-326ae24d.js";import{z as l,e as n,I as f}from"./index-4b9f55af.js";import{j as p,a as m,r as d,w as h,k as u,l as g}from"./runtime-core.esm-bundler-8baab2e8.js";import{L as e}from"./LinearGradient-99afdd31.js";const v=p({__name:"Bar",setup(b){const{isDark:r}=l(),a=m(()=>r.value?"dark":"light"),t=d(null),{setOptions:o,resize:s}=n(t,{theme:a});return o({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{bottom:"20px",right:"10px"},legend:{right:!0,data:["watchers","fork","star"]},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLabel:{interval:0},data:["2021","2022","2023"],triggerEvent:!0}],yAxis:[{type:"value",triggerEvent:!0}],series:[{name:"watchers",type:"bar",barWidth:"15%",itemStyle:{color:new e(0,0,0,1,[{offset:0,color:"#e6a23c"},{offset:1,color:"#eebe77"}])},data:[200,320,800]},{name:"fork",type:"bar",barWidth:"15%",itemStyle:{color:new e(0,0,0,1,[{offset:0,color:"#f56c6c"},{offset:1,color:"#f89898"}])},data:[1600,2460,4500]},{name:"star",type:"bar",barWidth:"15%",itemStyle:{color:new e(0,0,0,1,[{offset:0,color:"#409EFF"},{offset:1,color:"#53a7ff"}])},data:[1450,3620,7500]}],addTooltip:!0},{name:"click",callback:i=>{}}),h(()=>c().getSidebarStatus,()=>{f(600).then(()=>s())}),(i,y)=>(u(),g("div",{ref_key:"barChartRef",ref:t,style:{width:"100%",height:"35vh"}},null,512))}});export{v as _};
