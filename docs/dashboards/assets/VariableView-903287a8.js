import{_ as j,r as E,b as u,o as n,c as i,g as p,h as _,a as e,F as g,d as k,t as c}from"./index-340494a2.js";const w={methods:{},setup(){var m=E(0),d=[];d=["Shock externo","Cambio de metodología","Otros"];function h(){Promise.all([fetch("./variable.json").then(a=>a.ok&&a.json()||Promise.reject(a)),fetch("./anomalies_dictionary.json").then(a=>a.ok&&a.json()||Promise.reject(a))]).then(a=>{var f=a[1],v=a[0],r=[];v.forEach(t=>{var o={pais:t.pais_c,anio:t.anio_c,variables:[]};Object.keys(t).filter(s=>s!="pais_c"&&s!="anio_c"&&s!="date").forEach(s=>{if(t[s]==1){var l=f.filter(b=>b.rule==s)[0];l!=null&&o.variables.push(l.description)}}),o.variables.length>0&&(console.log(o),r.push(o))}),this.variables=r,console.log(r)})}return{getData:h,variables:m,describe_exception:d}},mounted(){this.getData()}},D={class:"container"},V=e("p",{class:"text-3xl font-semibold text-black mb-2 lg:mb-0"},"REPORTE DE VARIABLE EN LOS INDICADORES",-1),A=e("p",{class:"text-md mb-2 lg:mb-0 text-black"},"Con el objetivo de identificar valores erróneos en las variables armonizadas se definieron reglas que indiquen alertas en las mismas. Mediante un script de Stata se utilizan estas resultando en variables dummies para mostrar las mejoras a las bases. A continuación, mostraremos por país y año los resultados de ejecutar las reglas:",-1),C=e("thead",null,[e("tr",null,[e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," ID "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," País "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Año "),e("th",{class:"bg-blue-darken-1 border border-slate-300 p-1 font-weight-black"}," Variables con error ")])],-1),O={class:"py-2"};function P(m,d,h,a,f,v){const r=u("v-col"),t=u("v-row"),o=u("v-table");return n(),i("div",D,[p(t,{class:""},{default:_(()=>[p(r,null,{default:_(()=>[V,A]),_:1})]),_:1}),p(o,{density:"compact",class:"mt-10","fixed-header":""},{default:_(()=>[C,e("tbody",null,[(n(!0),i(g,null,k(a.variables,(s,l)=>(n(),i("tr",{key:l,class:"py-5"},[e("td",null,c(l+1),1),e("td",null,c(s.pais),1),e("td",null,c(s.anio),1),e("td",O,[e("ul",null,[(n(!0),i(g,null,k(s.variables,(b,x)=>(n(),i("li",null,[e("p",null,c(x+1)+": "+c(b),1)]))),256))])])]))),128))])]),_:1})])}const y=j(w,[["render",P]]);export{y as default};