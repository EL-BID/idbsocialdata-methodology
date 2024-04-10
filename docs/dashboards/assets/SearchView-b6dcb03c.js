import{_ as B,r as f,w as I,b as _,o as h,c as j,g as l,h as n,f as C,e as S,t as u,a as r,j as v,F as E,d as T}from"./index-32ead82d.js";const z={props:{id:{default:"",type:String}},setup(b){const s=f([]),g=f([]),e=f(!1),V=f(null),D=f([]),c=f(""),m=f("Todos");var p=f([]);I(c,o=>{o&&o.indicator&&w(o.indicator,e)}),I(()=>b.id,o=>{var a=y(o);x(a)});function y(o){let a="";return o=="encuestas"&&(a='collection like "%25Survey%25"'),o=="censos"&&(a='collection like "%25Censuses%25"'),o=="web"&&(a='collection not like "%25Censuses%25" AND collection not like "%25Surveys%25"'),o=="all"?"https://mydata.iadb.org/resource/5bbz-ibhf.json":`https://mydata.iadb.org/resource/5bbz-ibhf.json?$where=${a}`}function k(){d3.selectAll("#search svg").remove(),d3.selectAll(".d3plus-Message").remove()}function x(o){c.value="",p.value=[],m.value="Todos",k(),fetch(o).then(a=>a.json()).then(a=>{g.value=[...new Set(a.map(t=>t.theme_es))],g.value.unshift("Todos"),s.value=[...new Set(a.map(t=>({indicator:t.indicator,name_es:t.label_es,name_en:t.label_en,theme_en:t.theme_en,theme_es:t.theme_es,description_es:t.description_es,description_en:t.description_en,collection:t.collection})))].sort(function(t,i){return t.indicator.localeCompare(i.indicator)})})}function w(o,a){k(),o!=""&&o!=null?fetch(`https://mydata.iadb.org/resource/q8e9-eb82.json?$$app_token=IjHG1z0fQXsM9vxlkB8vPq3S2&$limit=8000000&indicator=${o}`).then(t=>t.json()).then(t=>{d3plus.colorDefaults.missing="white";var i=Array.from(d3.group(t,d=>d.year)).length,A=["quintile","education_level","ethnicity","disability","area","age","funding","migration","management","sex"];p.value=[],A.forEach(d=>{t.filter(N=>N[d]!="Total").length>0&&p.value.push(d)}),console.log(t),new d3plus.Matrix().data(t.filter(d=>d.totals_dummy==1)).groupBy(["isoalpha3","year"]).row(d=>+d.year).column("isoalpha3").columnConfig({shapeConfig:{labelConfig:{fontResize:!0}}}).rowConfig({shapeConfig:{labelConfig:{fontResize:!0}}}).colorScaleConfig({color:["#60a5fa"]}).colorScale("indicator").legend(!0).height(i*30).select("#search").render(),d3.selectAll(".d3plus-Shape").on("click",d=>{var N=d.srcElement.__data__.data;a.value=!0,V.value=N})}):alert("NO HAY INFORMACIÓN")}return{getData:x,desagregacion_aplicada:p,themes:g,indicators:s,indicator_selected:c,theme_selected:m,defineSource:y,visible:e,item:V,test:D}},mounted(){let b=this.$route.params.id;var s=this.defineSource(b);this.getData(s)}},q={id:"search"},M=r("span",{class:"text-3xl font-semibold mb-2 lg:mb-0"},"DISPONIBILIDAD",-1),F=["href"],L=r("b",null,"Identificador:",-1),O=r("b",null,"Nombre (ES):",-1),R=r("b",null,"Nombre (EN):",-1),U=r("b",null,"Descripcion (ES):",-1),H=r("b",null,"Descripcion (EN):",-1),P=r("b",null,"Fuente:",-1),G=r("div",{id:"search",class:"matrix-indicator px-10"},null,-1);function Q(b,s,g,e,V,D){const c=_("v-col"),m=_("v-row"),p=_("v-card-text"),y=_("v-spacer"),k=_("v-btn"),x=_("v-card-actions"),w=_("v-card"),o=_("v-dialog"),a=_("v-autocomplete"),t=_("v-chip");return h(),j("div",q,[l(m,{class:""},{default:n(()=>[l(c,null,{default:n(()=>[M]),_:1})]),_:1}),l(o,{modelValue:e.visible,"onUpdate:modelValue":s[1]||(s[1]=i=>e.visible=i),width:"auto"},{default:n(()=>[l(w,{title:"Links útiles"},{default:n(()=>[l(p,{class:"select-all"},{default:n(()=>[e.item?(h(),j("a",{key:0,href:`https://mydata.iadb.org/resource/q8e9-eb82.json?isoalpha3=${e.item.isoalpha3}&indicator=${e.item.indicator}&year=${e.item.year}`,target:"_blank"},"https://mydata.iadb.org/resource/q8e9-eb82.json?isoalpha3="+u(e.item.isoalpha3)+"&indicator="+u(e.item.indicator)+"&year="+u(e.item.year),9,F)):S("",!0)]),_:1}),l(x,null,{default:n(()=>[l(y),l(k,{text:"Cerrar",onClick:s[0]||(s[0]=i=>e.visible=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(m,{class:""},{default:n(()=>[l(c,{cols:"6"},{default:n(()=>[e.themes?(h(),C(a,{key:0,variant:"outlined",density:"compact",clearable:"",modelValue:e.theme_selected,"onUpdate:modelValue":s[2]||(s[2]=i=>e.theme_selected=i),items:e.themes,label:"Tema"},null,8,["modelValue","items"])):S("",!0)]),_:1}),l(c,{cols:"6"},{default:n(()=>[e.indicators!=0?(h(),C(a,{key:0,variant:"outlined",density:"compact",clearable:"",modelValue:e.indicator_selected,"onUpdate:modelValue":s[3]||(s[3]=i=>e.indicator_selected=i),"return-object":"",items:e.indicators.filter(i=>e.theme_selected!="Todos"?i.theme_es==e.theme_selected:i),"item-value":"indicator","item-title":"name_es",label:"Indicador"},null,8,["modelValue","items"])):S("",!0)]),_:1})]),_:1}),e.indicator_selected&&e.indicator_selected.indicator?(h(),C(m,{key:0},{default:n(()=>[l(c,{cols:"12"},{default:n(()=>[r("p",null,[L,v(" "+u(e.indicator_selected.indicator),1)]),r("p",null,[O,v(" "+u(e.indicator_selected.name_es),1)]),r("p",null,[R,v(" "+u(e.indicator_selected.name_en),1)]),r("p",null,[U,v(" "+u(e.indicator_selected.description_es),1)]),r("p",null,[H,v(" "+u(e.indicator_selected.description_en),1)]),r("p",null,[P,v(" "+u(e.indicator_selected.collection),1)])]),_:1})]),_:1})):S("",!0),l(m,null,{default:n(()=>[l(c,{cols:"12"},{default:n(()=>[(h(!0),j(E,null,T(e.desagregacion_aplicada,i=>(h(),C(t,null,{default:n(()=>[v(u(i),1)]),_:2},1024))),256))]),_:1})]),_:1}),l(m,null,{default:n(()=>[l(c,{cols:"12"},{default:n(()=>[G]),_:1})]),_:1})])}const J=B(z,[["render",Q]]);export{J as default};
