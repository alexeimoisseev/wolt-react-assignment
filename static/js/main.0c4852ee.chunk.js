(this["webpackJsonpwolt-react-assignment"]=this["webpackJsonpwolt-react-assignment"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"monday":[],"tuesday":[{"type":"open","value":36000},{"type":"close","value":64800}],"wednesday":[],"thursday":[{"type":"open","value":36000},{"type":"close","value":64800}],"friday":[{"type":"open","value":36000}],"saturday":[{"type":"close","value":3600},{"type":"open","value":32400},{"type":"close","value":39600},{"type":"open","value":57600}],"sunday":[{"type":"close","value":3600},{"type":"open","value":43200},{"type":"close","value":75600}]}')},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(7),r=a.n(c),o=(a(15),a(16),a(17),a(10)),i=a(9),u=a(3),d=a(5),l=a(6),v=a.n(l),p=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];function j(e){return function(e){return e.reduce((function(t,a,n){if(n%2===0)return"".concat(t).concat(a,"\xa0- ");var s="".concat(t).concat(a);return n<e.length-1?s+", ":s}),"")}(e.map((function(e){return t=e.value,v()().startOf("day").add(t,"second").format("h\xa0A");var t})))}var y=function(e){return e===v()().format("dddd").toLowerCase()};a(21);var O=a(1);function b(e){return Object(O.jsxs)("div",{className:"TableItem",children:[Object(O.jsxs)("div",{className:"TableItem__body",children:[Object(O.jsx)("div",{className:"TableItem__dayOfWeek",children:e.dayOfWeek}),e.isToday&&Object(O.jsx)("div",{className:"TableItem__isToday",children:"today"}),e.value?Object(O.jsx)("div",{className:"TableItem__value",children:e.value}):Object(O.jsx)("div",{className:"TableItem__closed",children:"Closed"})]}),Object(O.jsx)("div",{className:"TableItem__separator"})]})}var f=a(8);a(23);function m(){var e=function(e){for(var t,a=[],n=0;n<p.length;n++){var s=p[n];a.push(e[s])}for(var c=0;c<p.length;c++){var r=a[c];r[0]&&"close"===r[0].type&&(a[0===(t=c)?p.length-1:t-1].push(r[0]),a[c].shift())}return a.map(j).reduce((function(e,t,a){return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},p[a],t))}),{})}(f);return Object(O.jsxs)("div",{className:"OpeningHours",children:[Object(O.jsxs)("div",{className:"OpeningHours__header",children:[Object(O.jsx)("div",{className:"OpeningHours__headerIcon",children:Object(O.jsx)(o.a,{icon:i.a})}),Object(O.jsx)("div",{className:"OpeningHours__headerCaption",children:"Opening hours"})]}),Object(O.jsx)("div",{className:"OpeningHours__separator"}),Object(O.jsx)("div",{className:"OpeningHours__items",children:p.map((function(t){return Object(O.jsx)(b,{dayOfWeek:t,value:e[t],isToday:y(t)},t)}))})]})}var h=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(m,{})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(h,{})}),document.getElementById("root")),_()}],[[24,1,2]]]);
//# sourceMappingURL=main.0c4852ee.chunk.js.map