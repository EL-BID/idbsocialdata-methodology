import{_ as T,r as S,b as u,o as v,c as x,g as a,h as n,i as A,a as e,F as z,d as O,t as f,j as C,m as D,f as B,e as M}from"./index-955c35c0.js";d3plus.colorDefaults.missing="white";d3plus.colorDefaults.scale.range(["#305EA9","#1C97C9","#6CCDEF","#685990","#B1B6BA","#555555","#24264F","#30A98C","#F453AA","#F9965E","#FC4D4D","#FFCB65"]);d3plus.formatDefaultLocale="es-ES";const P={setup(){var E=S(!1),g=S(""),y=S([]),c=[];c=["Shock externo","Cambio de metodología","Otros"];var w=async()=>{const l=await Promise.all([fetch("https://mydata.iadb.org/resource/s8uc-zq8r.json").then(t=>t.ok&&t.json()||Promise.reject(t)),fetch("https://mydata.iadb.org/resource/mjbx-2muu.json").then(t=>t.ok&&t.json()||Promise.reject(t)),fetch("https://mydata.iadb.org/resource/rvn3-znbm.json",{headers:{"X-App-Token":"9r_Y4pTJ4rzFIypGFNGiormZuI1OZBmlVcax"}}).then(t=>t.ok&&t.json()||Promise.reject(t))]).then(t=>{var s=t[0],p=t[1],b=s.sort((o,i)=>o.isoalpha3<i.isoalpha3?-1:o.isoalpha3>i.isoalpha3?1:0),m=[];return b.forEach(o=>{var i=m.filter(h=>o.indicator==h.indicator&&o.isoalpha3==h.isoalpha3)[0];i!=null?(i.years.push(+o.year),i.years=[...new Set(i.years.map(h=>+h))]):(o.years=[+o.year],m.push(o))}),m.forEach(o=>{o.exception=null,o.years_exception=[];var i=p.filter(h=>h.isoalpha3==o.isoalpha3&&h.indicator==o.indicator)[0];i!=null&&(o.years_exception.push(i.year),o.exception=i)}),console.log(m),m});y.value=l},j=()=>{fetch("https://mydata.iadb.org/resource/mjbx-2muu.json",{method:"POST",headers:{Authorization:"OAuth ZeJLaxe-dvTgkOxd5CsyOAg7PoylMDL2mYnB","Content-Type":"application/json"},body:JSON.stringify({id:"1233",indicator:"prangoedad0_15",year:"2015",isoalpha3:"SLV",anomalyconfirmed:"1",comments:"Value is within expected range"})}).then(l=>l.json()).then(l=>{console.log(l)})},k=l=>{fetch(`https://mydata.iadb.org/resource/q8e9-eb82.json?$$app_token=IjHG1z0fQXsM9vxlkB8vPq3S2&indicator=${l.indicator}&isoalpha3=${l.isoalpha3}&totals_dummy=1`).then(t=>t.json()).then(t=>{d3.select("#viz").select("svg").remove(),console.clear(),d3.max(t,s=>s.value),new d3plus.LinePlot().data(t).groupBy(["isoalpha3","indicator"]).height(600).x(s=>+s.year).loadingMessage(!0).tooltip(!0).lineMarkerConfig({fill:(s,p)=>+s.y&&A(l.years).indexOf(s.x)>-1||s.value&&A(l.years).indexOf(+s.year)>-1?"#C24E4C":"#1E88E5",label:s=>d3.format(".2f")(s.y),r:20,labelConfig:{fontResize:!0}}).baseline(0).title(`Error encontrado en: <b>${l.isoalpha3} ${l.years.join(", ")} ${l.indicator} ${l.theme_en}</b>`).tooltip(!0).lineMarkers(!0).legend(!1).y(s=>+s.value).select("#viz").render()})};return{getData:w,anomalies:y,dialog:E,drawViz:k,addException:j,describe_exception:c,indicatorNameToSearch:g}},created(){},async mounted(){this.getData()}},V={class:"container"},q=e("p",{class:"text-3xl font-semibold text-black mb-2 lg:mb-0"},"REPORTE DE ANOMALÍAS EN LOS INDICADORES",-1),F=e("p",{class:"text-md mb-2 lg:mb-0 text-black"},[C(" Se identifican las anomalías o valores extremos encontrados en los indicadores socioeconómicos a lo largo del tiempo. Una anomalía se define como aquel valor que se encuentra fuera de tres veces el rango intercuartílico. A continuación, se muestra la distribución de las anomalías por tema, año, indicador y país. Para conocer mayor detalle sobre la metodología de cálculo, visitar el repositorio en GitHub. "),e("ul",{class:"list-disc pl-5"},[e("li",null,"En tendencia, se muestra gráficamente los valores del indicador y se resalta en rojo los números fuera de los rangos esperados."),e("li",null,"En excepción, el technical steward podrá mandar un correo para indicar si el valor está en el rango esperado y debería considerarse como correcto."),e("li",null,"En comentario, se podrá ver aquellos indicadores que a pesar de ser anomalías tienen una explicación para estar tres veces fuera del rango intercuartílico.")])],-1),U=e("p",{class:"text-md mb-2 lg:mb-0 text-black"},[C("Las anomalías se pueden descargar desde "),e("a",{class:"text-blue-400",href:"https://mydata.iadb.org/resource/s8uc-zq8r.csv",target:"_blank"},"aquí")],-1),L=e("thead",null,[e("tr",null,[e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," ID "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," País "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Tema "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Indicador "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Año "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Acciones ")])],-1),I=e("div",{id:"viz"},null,-1),G=e("div",null,null,-1),R=e("div",{class:"v-card-text"},[e("p",{class:"pt-5"},[C("Si desea agregar una excepción para la anomalía seleccionada, debe hacer la carga en la siguiente planilla "),e("a",{href:"",target:"_blank"},"aqui")])],-1),$={class:"d-flex align-center flex-column"},J={class:"v-card-text"};function Y(E,g,y,c,w,j){const k=u("v-col"),l=u("v-row"),t=u("v-text-field"),s=u("v-chip"),p=u("v-btn"),b=u("v-spacer"),m=u("v-card-actions"),o=u("v-card"),i=u("v-dialog"),h=u("v-table");return v(),x("div",V,[a(l,{class:""},{default:n(()=>[a(k,null,{default:n(()=>[q,F,U]),_:1})]),_:1}),a(l,null,{default:n(()=>[a(k,null,{default:n(()=>[a(t,{modelValue:c.indicatorNameToSearch,"onUpdate:modelValue":g[0]||(g[0]=r=>c.indicatorNameToSearch=r),label:"Búsqueda por identificador de indicador, tema, país o año",variant:"outlined",class:"text-black"},null,8,["modelValue"])]),_:1})]),_:1}),a(h,{density:"compact",class:"mt-10"},{default:n(()=>[L,e("tbody",null,[(v(!0),x(z,null,O(c.indicatorNameToSearch!=""?c.anomalies.filter(r=>r.years.join(",").toUpperCase().indexOf(c.indicatorNameToSearch.toUpperCase())>-1||r.isoalpha3.toUpperCase().indexOf(c.indicatorNameToSearch.toUpperCase())>-1||r.indicator.toUpperCase().indexOf(c.indicatorNameToSearch.toUpperCase())>-1||r.theme_en.toUpperCase().indexOf(c.indicatorNameToSearch.toUpperCase())>-1):c.anomalies,(r,N)=>(v(),x("tr",{key:r.id},[e("td",null,f(N+1),1),e("td",null,f(r.isoalpha3),1),e("td",null,f(r.theme_en),1),e("td",null,f(r.indicator),1),e("td",null,[(v(!0),x(z,null,O(r.years,(d,_)=>(v(),x("div",{class:"inline",key:_},[a(s,{size:"x-small",color:r.years_exception.indexOf(d.toString())!=-1?"success":"black"},{default:n(()=>[C(f(d),1)]),_:2},1032,["color"])]))),128))]),e("td",null,[e("div",null,[a(i,{fullscreen:""},{activator:n(({props:d})=>[a(p,D({variant:"outlined",class:"text-black",size:"x-small"},d,{text:"Tendencia",onClick:_=>c.drawViz(r)}),null,16,["onClick"])]),default:n(({isActive:d})=>[a(o,{title:""},{default:n(()=>[I,G,a(m,null,{default:n(()=>[a(b),a(p,{text:"Cerrar",onClick:_=>d.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),a(i,null,{activator:n(({props:d})=>[]),default:n(({isActive:d})=>[a(o,{title:"Envio de excepción para una anomalía"},{default:n(()=>[R,a(m,null,{default:n(()=>[a(b),a(p,{text:"Cerrar",onClick:_=>d.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1}),a(p,{variant:"outlined",class:"text-black ml-2",size:"x-small",target:"_blank",text:"➕ excepción",href:"https://idbg.sharepoint.com/:x:/r/sites/DataGovernance-SCL/Shared%20Documents/General/M.%20Manuals%20%26%20Standards/M.2%20Methods,%20Processes%20%26%20Standards/M.2.2%20Quality%20Control%20%26%20Assessment/M224%20Anomalies/Revisi%C3%B3n%20de%20anomal%C3%ADas%20hist%C3%B3ricas%20Encuestas%2008MAY2023.xlsx?d=w93708a4081df4875abc7386e080bfce6&csf=1&web=1&e=zUzvgE"}),a(i,null,{activator:n(({props:d})=>[r.exception!=null?(v(),B(p,D({key:0,variant:"outlined",class:"text-black ml-2 border-1",color:"success",size:"x-small"},d,{text:"Comentario",onClick:_=>c.addException(r)}),null,16,["onClick"])):M("",!0)]),default:n(({isActive:d})=>[e("div",$,[a(o,{title:"Motivo de excepción",width:"400"},{default:n(()=>[e("div",J,[e("h3",null,f(r.exception.year),1),e("p",null,f(r.exception.comments),1)]),a(m,null,{default:n(()=>[a(b),a(p,{text:"Cerrar",onClick:_=>d.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1024)])]),_:2},1024)])])]))),128))])]),_:1})])}const H=T(P,[["render",Y]]);export{H as default};