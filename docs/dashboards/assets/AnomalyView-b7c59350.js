import{_ as F,r as E,b as _,o as x,c as m,g as l,h as s,i as z,a as e,F as $,d as B,t as r,j as b,m as k,f as D,e as P}from"./index-19806229.js";d3plus.colorDefaults.missing="white";d3plus.colorDefaults.scale.range(["#305EA9","#1C97C9","#6CCDEF","#685990","#B1B6BA","#555555","#24264F","#30A98C","#F453AA","#F9965E","#FC4D4D","#FFCB65"]);d3plus.formatDefaultLocale="es-ES";const M={methods:{},setup(){var C=E(!1),w=E(0),g=[];g=["Shock externo","Cambio de metodología","Otros"];function v(){Promise.all([fetch("https://mydata.iadb.org/resource/s8uc-zq8r.json").then(o=>o.ok&&o.json()||Promise.reject(o)),fetch("https://mydata.iadb.org/resource/mjbx-2muu.json").then(o=>o.ok&&o.json()||Promise.reject(o))]).then(o=>{var f=o[0],a=o[1];this.headers=[{title:"País",value:"isoalpha3"},{title:"Año/s",value:"years"},{title:"Indicador",value:"indicator"},{title:"Tema",value:"theme_en"}];var p=f.sort((n,i)=>n.isoalpha3<i.isoalpha3?-1:n.isoalpha3>i.isoalpha3?1:0),h=[];p.forEach(n=>{var i=h.filter(u=>n.indicator==u.indicator&&n.isoalpha3==u.isoalpha3)[0];i!=null?(i.years.push(+n.year),i.years=[...new Set(i.years.map(u=>+u))]):(n.years=[+n.year],h.push(n))}),h.forEach(n=>{n.exception=null,n.years_exception=[];var i=a.filter(u=>u.isoalpha3==n.isoalpha3&&u.indicator==n.indicator)[0];i!=null&&(n.years_exception.push(i.year),n.exception=i)}),this.anomalies=h,drawGraph(h)})}function V(){fetch("https://mydata.iadb.org/resource/mjbx-2muu.json",{method:"POST",headers:{Authorization:"OAuth ZeJLaxe-dvTgkOxd5CsyOAg7PoylMDL2mYnB","Content-Type":"application/json"},body:JSON.stringify({id:"1233",indicator:"prangoedad0_15",year:"2015",isoalpha3:"SLV",anomalyconfirmed:"1",comments:"Value is within expected range"})}).then(o=>o.json()).then(o=>{console.log(o)})}function j(o){fetch(`https://mydata.iadb.org/resource/q8e9-eb82.json?$$app_token=IjHG1z0fQXsM9vxlkB8vPq3S2&indicator=${o.indicator}&isoalpha3=${o.isoalpha3}&totals_dummy=1`).then(f=>f.json()).then(f=>{d3.select("#viz").select("svg").remove(),console.clear(),d3.max(f,a=>a.value),new d3plus.LinePlot().data(f).groupBy(["isoalpha3","indicator"]).height(600).x(a=>+a.year).loadingMessage(!0).tooltip(!0).lineMarkerConfig({fill:(a,p)=>+a.y&&z(o.years).indexOf(a.x)>-1||a.value&&z(o.years).indexOf(+a.year)>-1?"#C24E4C":"#1E88E5",label:a=>d3.format(".2f")(a.y),r:20,labelConfig:{fontResize:!0}}).baseline(0).title(`Error encontrado en: <b>${o.isoalpha3} ${o.years.join(", ")} ${o.indicator} ${o.theme_en}</b>`).tooltip(!0).lineMarkers(!0).legend(!1).y(a=>+a.value).select("#viz").render()})}return{getData:v,anomalies:w,dialog:C,drawViz:j,addException:V,describe_exception:g}},mounted(){this.getData()}},L={class:"container"},T=e("span",{class:"text-3xl font-semibold mb-2 lg:mb-0"},"ANOMALÍAS",-1),N=e("thead",null,[e("tr",null,[e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," ID "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," País "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Tema "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Indicador "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Año "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Acciones ")])],-1),U=e("div",{id:"viz"},null,-1),I=e("div",null,null,-1),q={class:"v-card-text"},G=e("hr",null,null,-1),J=e("p",{class:"pt-5"},[b("Si desea agregar una excepción para anomaía seleccionada, debe enviar un email a "),e("b",null,"scldata@iadb.org"),b(" con el siguiente formato.")],-1),R=e("br",null,null,-1),H=e("b",{class:"text-blue-400"},"Asunto del email: ",-1),Q=e("br",null,null,-1),X=e("b",{class:"pt-10 text-blue-400"},"Contenido del email",-1),Y=e("br",null,null,-1),Z=e("b",{class:"pt-2"},"Indicador: ",-1),K=e("br",null,null,-1),W=e("b",{class:"pt-2"},"País: ",-1),ee=e("br",null,null,-1),te=e("b",{class:"pt-2"},"Año/s: ",-1),oe=e("br",null,null,-1),le=e("b",{class:"pt-2"},"Motivo general: ",-1),ne=e("br",null,null,-1),ae=e("b",{class:"pt-2"},"Comentario: ",-1),se={class:"d-flex align-center flex-column"},ie={class:"v-card-text"};function re(C,w,g,v,V,j){const o=_("v-col"),f=_("v-row"),a=_("v-chip"),p=_("v-btn"),h=_("v-spacer"),n=_("v-card-actions"),i=_("v-card"),u=_("v-dialog"),A=_("v-select"),S=_("v-textarea"),y=_("v-table");return x(),m("div",L,[l(f,{class:""},{default:s(()=>[l(o,null,{default:s(()=>[T]),_:1})]),_:1}),l(y,{density:"compact",class:"mt-10"},{default:s(()=>[N,e("tbody",null,[(x(!0),m($,null,B(v.anomalies,(t,O)=>(x(),m("tr",{key:t.id},[e("td",null,r(O+1),1),e("td",null,r(t.isoalpha3),1),e("td",null,r(t.theme_en),1),e("td",null,r(t.indicator),1),e("td",null,[(x(!0),m($,null,B(t.years,(c,d)=>(x(),m("div",{class:"inline",key:d},[l(a,{size:"x-small",color:t.years_exception.indexOf(c.toString())!=-1?"success":"black"},{default:s(()=>[b(r(c),1)]),_:2},1032,["color"])]))),128))]),e("td",null,[e("div",null,[l(u,{fullscreen:""},{activator:s(({props:c})=>[l(p,k({variant:"outlined",size:"x-small"},c,{text:"Tendencia",onClick:d=>v.drawViz(t)}),null,16,["onClick"])]),default:s(({isActive:c})=>[l(i,{title:""},{default:s(()=>[U,I,l(n,null,{default:s(()=>[l(h),l(p,{text:"Cerrar",onClick:d=>c.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),l(u,null,{activator:s(({props:c})=>[l(p,k({variant:"outlined",size:"x-small"},c,{text:"➕ excepción",class:"ml-2",onClick:d=>v.addException(t)}),null,16,["onClick"])]),default:s(({isActive:c})=>[l(i,{title:"Envio de excepción para una anomalía"},{default:s(()=>[e("div",q,[l(A,{multiple:"",class:"w-25 d-inline-block pr-10 pt-5",label:"Año de la excepción",modelValue:t.year_exception,"onUpdate:modelValue":d=>t.year_exception=d,items:t.years,variant:"outlined"},null,8,["modelValue","onUpdate:modelValue","items"]),v.describe_exception?(x(),D(A,{key:0,class:"w-25 d-inline-block",label:"Motivo de la excepción",modelValue:t.describe_exception,"onUpdate:modelValue":d=>t.describe_exception=d,items:v.describe_exception,variant:"outlined"},null,8,["modelValue","onUpdate:modelValue","items"])):P("",!0),l(S,{maxlength:"500",placeholder:"Explicación de la excepción",rows:"3",variant:"outlined",class:"pt-2",modelValue:t.comments,"onUpdate:modelValue":d=>t.comments=d},null,8,["modelValue","onUpdate:modelValue"]),G,J,R,H,e("p",null,[b("Excepción para "),e("b",null,r(t.indicator)+" / "+r(t.isoalpha3)+" / "+r(t.year_exception?t.year_exception.join(","):t.year),1)]),Q,X,Y,Z,b(r(t.indicator),1),K,W,b(r(t.isoalpha3),1),ee,te,b(r(t.year_exception?t.year_exception.join(","):t.year),1),oe,le,b(r(t.describe_exception),1),ne,ae,b(r(t.comments),1)]),l(n,null,{default:s(()=>[l(h),l(p,{text:"Cerrar",onClick:d=>c.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),l(u,null,{activator:s(({props:c})=>[t.exception!=null?(x(),D(p,k({key:0,variant:"outlined",color:"success",size:"x-small"},c,{text:"Comentario",class:"ml-2 border-1",onClick:d=>v.addException(t)}),null,16,["onClick"])):P("",!0)]),default:s(({isActive:c})=>[e("div",se,[l(i,{title:"Motivo de excepción",width:"400"},{default:s(()=>[e("div",ie,[e("h3",null,r(t.exception.year),1),e("p",null,r(t.exception.comments),1)]),l(n,null,{default:s(()=>[l(h),l(p,{text:"Cerrar",onClick:d=>c.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1024)])]),_:2},1024)])])]))),128))])]),_:1})])}const de=F(M,[["render",re]]);export{de as default};