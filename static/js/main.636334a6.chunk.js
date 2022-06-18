(this["webpackJsonpchartjs-release"]=this["webpackJsonpchartjs-release"]||[]).push([[0],{249:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(57),s=a.n(c),r=a(85),o=a(130),l=a(15),i=a(67),u=a(133),b=a(134),j=a(6);i.a.register(u.a),i.a.register(b.a);var d=function(e){var t=e.chartData,a=e.subtitle,n=e.displayValues;return Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{data:t,options:{responsive:!0,interaction:{mode:"index",intersect:!1},stacked:!1,plugins:{title:{display:!0,text:["Time-Temprature-Carbon Potential",a]},legend:{position:"bottom"},zoom:{zoom:{min:1,max:1e3,wheel:{enabled:!0},drag:{enabled:!1},mode:"x",speed:100},pan:{enabled:!1,mode:"xy",speed:100}},datalabels:{display:n,color:"black",align:"end",padding:{right:2},labels:{padding:{top:10},title:{font:{}},value:{color:"green"}}}},scales:{y:{type:"linear",display:!0,position:"left",ticks:{callback:function(e,t,a){return e+" \xb0C"}}},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1},ticks:{callback:function(e,t,a){return e+" CP"}}}}}})})},C=a(97),m=a.n(C),O=(a(248),a(249),a(96)),p=a.n(O),h=a(86),H=a.n(h),f=a(135);function g(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),u=i[0],b=i[1],C=Object(n.useState)(""),O=Object(l.a)(C,2),h=O[0],g=O[1],x=Object(n.useState)(""),v=Object(l.a)(x,2),y=v[0],S=v[1],N=Object(n.useState)(""),k=Object(l.a)(N,2),D=k[0],T=k[1],w=Object(n.useState)(""),F=Object(l.a)(w,2),A=F[0],P=F[1],M=Object(n.useState)(""),I=Object(l.a)(M,2),B=I[0],Y=I[1],Q=Object(n.useState)(""),E=Object(l.a)(Q,2),J=E[0],L=E[1],R=Object(n.useState)(""),z=Object(l.a)(R,2),G=z[0],V=z[1],U=Object(n.useState)(""),q=Object(l.a)(U,2),K=q[0],W=q[1],X=Object(n.useState)(""),Z=Object(l.a)(X,2),$=Z[0],_=Z[1],ee=Object(n.useState)(""),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)(""),se=Object(l.a)(ce,2),re=se[0],oe=se[1],le=Object(n.useState)(""),ie=Object(l.a)(le,2),ue=ie[0],be=ie[1],je=Object(n.useState)(""),de=Object(l.a)(je,2),Ce=de[0],me=de[1],Oe=Object(n.useState)(""),pe=Object(l.a)(Oe,2),he=pe[0],He=pe[1],fe=function(e){return e.timestamp.substring(11,16)},ge=Object(n.useState)(null),xe=Object(l.a)(ge,2),ve=xe[0],ye=xe[1],Se=function(){var e=Object(o.a)(Object(r.a)().mark((function e(t,a,n,c,s){var o,l,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=void me("Customer: "+D+" | Material: "+A+" | Part Name: "+B+" | Part Number: "+J+" | Process: "+G+" | Batch No: "+K+" | Batch Qty: "+$+" | Soaking Start: "+ae+" | Batch Qty: "+re+" | Batch Qty: "+ue),console.log(o),t=t+"?fromTime="+p()(a).format("YYYY-MM-DD HH:mm:ss")+"&toTime="+p()(n).format("YYYY-MM-DD HH:mm:ss")+"&furnace="+c+"&interval="+s,console.log(t),e.next=6,fetch(t);case 6:return l=e.sent,e.next=9,l.json();case 9:i=e.sent,ye({labels:i.data.map((function(e){return fe(e)})),datasets:[{label:"Actual Process Temp",data:i.data.map((function(e){return e.actualMv})),borderColor:"#ff6384",backgroundColor:"#ff6384",yAxisID:"y"},{label:"Set Process Temp",data:i.data.map((function(e){return e.setMv})),borderColor:"#ff6384",backgroundColor:"#ff6384",yAxisID:"y"},{label:"Actual Oil Temp",data:i.data.map((function(e){return e.actualOt})),borderColor:"#36a2eb",backgroundColor:"#36a2eb",yAxisID:"y"},{label:"Set Oil Temp",data:i.data.map((function(e){return e.setOt})),borderColor:"#36a2eb",backgroundColor:"#36a2eb",yAxisID:"y"},{label:"Actual % CP",data:i.data.map((function(e){return e.actualCp})),borderColor:"#cc65fe",backgroundColor:"#cc65fe",yAxisID:"y1"},{label:"Set % CP",data:i.data.map((function(e){return e.setCp})),borderColor:"#cc65fe",backgroundColor:"#cc65fe",yAxisID:"y1"}]});case 11:case"end":return e.stop()}}),e)})));return function(t,a,n,c,s){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"App FormDiv",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"DatePicker",children:["From"," ",Object(j.jsx)(m.a,{selected:u,onChange:function(e){b(e)},dateFormat:"yyyy-MM-dd HH:mm:ss",timeInputLabel:"Time:",timeFormat:"HH:mm",startDate:u,endDate:h,showTimeSelect:!0}),Object(j.jsx)("br",{}),"To"," ",Object(j.jsx)(m.a,{selected:h,onChange:function(e){g(e)},dateFormat:"yyyy-MM-dd HH:mm:ss",timeInputLabel:"Time:",timeFormat:"HH:mm:ss",startDate:u,endDate:h,minDate:u,showTimeSelect:!0})]}),Object(j.jsxs)("div",{children:["Furnace",Object(j.jsx)("select",{className:"select",value:y,onChange:function(e){S(e.target.value)},children:[{value:"CH1,CH15,CH3,CH19,CH2,CH16",label:"SQF1"},{value:"CH4,CH18,CH6,CH20,CH5,CH17",label:"SQF2"},{value:"CH7,CH24,CH100,CH1,CH1,CH1",label:"TF1"},{value:"CH8,CH25,CH1,CH1,CH1,CH1",label:"TF2"},{value:"CH9,CH28,CH1,CH1,CH1,CH1",label:"TF3"},{value:"CH10,CH22,CH12,CH21,CH11,CH23",label:"GCF"},{value:"CH13,CH27,CH1,CH1,CH1,CH1",label:"THF1"},{value:"CH14,CH26,CH1,CH1,CH1,CH1",label:"THF2"}].map((function(e){return Object(j.jsxs)("option",{value:e.value,children:[e.label," = (",e.value,")"]},e.value)}))}),Object(j.jsx)("br",{}),"Customer"," ",Object(j.jsx)("input",{className:"input10",onChange:function(e){T(e.target.value)}}),Object(j.jsx)("br",{}),"Material"," ",Object(j.jsx)("input",{className:"input5",onChange:function(e){P(e.target.value)}}),Object(j.jsx)("br",{}),"Part Name"," ",Object(j.jsx)("input",{className:"input5",onChange:function(e){Y(e.target.value)}}),Object(j.jsx)("br",{}),"Part No."," ",Object(j.jsx)("input",{className:"input5",onChange:function(e){L(e.target.value)}}),Object(j.jsx)("br",{}),"Process"," ",Object(j.jsx)("input",{className:"input5",onChange:function(e){V(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Batch Qty."," ",Object(j.jsx)("input",{className:"input5",onChange:function(e){_(e.target.value)}}),Object(j.jsx)("br",{}),"Batch No."," ",Object(j.jsx)("input",{className:"input5",onChange:function(e){W(e.target.value)}}),Object(j.jsx)("br",{}),"Soaking Start"," ",Object(j.jsx)("input",{className:"input5",onChange:function(e){ne(e.target.value)}}),Object(j.jsx)("br",{}),"Soaking End"," ",Object(j.jsx)("input",{className:"input5",onChange:function(e){oe(e.target.value)}}),Object(j.jsx)("br",{}),"Total Soaking Time"," ",Object(j.jsx)("input",{className:"input5",onChange:function(e){be(e.target.value)}}),Object(j.jsx)("br",{}),"Interval"," ",Object(j.jsx)("input",{type:"number",className:"input4",onChange:function(e){He(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"button",onClick:function(){return Se("http://localhost:8082/data",u,h,y,he)},children:"Draw"}),Object(j.jsx)("button",{className:"button",onClick:function(e){return function(e){var t=window.document.getElementsByClassName("App ChartDiv")[0];H()(t).then((function(e){console.log(e.width+"  "+e.height);var t=e.toDataURL("image/jpg"),a=new f.a("l","pt",[e.width,e.height],!0);a.addImage(t,"JPEG",1,1,e.width,e.height),a.save("chart.pdf")}))}()},children:"Export"}),Object(j.jsx)("button",{className:"button",onClick:function(){return c((function(e){return!e}))},children:"Reading"})," "]}),Object(j.jsx)("button",{className:"button",onClick:function(){return ye({})},children:"Reset"})]})]}),Object(j.jsx)("div",{className:"App ChartDiv",children:Object(j.jsx)(d,{chartData:ve,displayValues:a,subtitle:Ce||""})})]})}var x=document.getElementById("root");s.a.render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(g,{})}),x)}},[[312,1,2]]]);
//# sourceMappingURL=main.636334a6.chunk.js.map