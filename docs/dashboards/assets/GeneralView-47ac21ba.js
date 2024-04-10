import{_ as d,o as a,c as l,a as t,t as r,r as p,b as h,F as _,d as f,e as v,f as b}from"./index-79a63c8e.js";const g={props:["name","value"],setup(s){return console.log(s),{props:s}}},x={class:"w-1/2 xl:w-1/4 px-3"},C={class:"w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0"},w=t("svg",{class:"w-16 h-16 fill-current mr-4 hidden lg:block",viewBox:"0 0 20 20"},[t("path",{d:"M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"})],-1),$={class:"text-gray-700"},y={class:"font-semibold text-3xl"};function B(s,n,o,e,c,m){return a(),l("div",x,[t("div",C,[w,t("div",$,[t("p",y,r(e.props.value),1),t("p",null,r(e.props.name),1)])])])}const k=d(g,[["render",B]]);d3plus.colorDefaults.missing="#e5e7eb";d3plus.colorDefaults.scale.range(["#305EA9","#1C97C9","#6CCDEF","#685990","#B1B6BA","#555555","#24264F","#30A98C","#F453AA","#F9965E","#FC4D4D","#FFCB65"]);const F={components:{ItemComponent:k},setup(){var s=p([]);return[{name:"Encuestas",condition:'collection like "%25Survey%25"'},{name:"Censos",condition:'collection like "%25Censuses%25"'},{name:"Otras fuentes",condition:'collection not like "%25Censuses%25" AND collection not like "%25Survey%25"'}].forEach(n=>{fetch(`https://mydata.iadb.org/resource/5bbz-ibhf.json?$where=${n.condition}`).then(o=>o.json()).then(o=>{const e=[...new Set(o.map(c=>c.indicator))];s.value.push({name:n.name,value:e.length})})}),fetch("https://mydata.iadb.org/resource/5bbz-ibhf.json").then(n=>n.json()).then(n=>{const o=[...new Set(n.map(e=>e.indicator))];s.value.push({name:"Total",value:o.length}),new d3plus.Treemap().data(n).groupBy(["theme_es"]).sum(e=>e.indicator?e.indicator.length:0).legend(!1).height(300).select("#viz-treemap").detectVisible(!1).render(),new d3plus.Matrix().data(n).groupBy(["theme_es","collection"]).column("collection").row("theme_es").colorScaleConfig({color:["#60a5fa"]}).colorScale("indicator").legend(!1).height(500).select("#viz-matrix").detectVisible(!1).render()}),{items:s}},mounted(){}},z={class:""},D=t("p",{className:"text-3xl font-semibold mb-2 lg:mb-0"},"General",-1),S={key:0,class:"flex flex-wrap pt-5 justify-center"},V=t("small",null,"* Cantidad de indicadores por fuente de datos.",-1),A=t("div",{class:"px-3"},[t("div",{id:"viz-treemap",className:"pt-10 pb-10"}),t("div",{id:"viz-matrix",className:"pt-10 pb-10"})],-1);function E(s,n,o,e,c,m){const u=h("item-component");return a(),l("div",z,[D,e.items?(a(),l("div",S,[(a(!0),l(_,null,f(e.items,i=>(a(),b(u,{key:i.name,name:i.name,value:i.value},null,8,["name","value"]))),128))])):v("",!0),V,A])}const j=d(F,[["render",E]]);export{j as default};