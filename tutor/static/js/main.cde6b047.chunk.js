(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{58:function(e,t,a){e.exports=a(88)},88:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),o=a.n(r),l=(a(63),a(19)),i=a(6),m=a(27),s=a(23),u=a.n(s),h=a(95),d=a(97),E=a(94),p=a(96),f=a(56),g=a(55),b=function(e){var t=e.match,a=Object(n.useState)([]),r=Object(m.a)(a,2),o=r[0],l=r[1],i=t.params.id;return Object(n.useEffect)((function(){u()({method:"GET",url:"http://localhost/api/category/".concat(i,"/")}).then((function(e){l(e.data)}))}),[i]),c.a.createElement("div",null,c.a.createElement("h2",null,"Category with id ",o.id),c.a.createElement("h4",null,"Category: ",o.name))},v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){r(e.data)}))}),[]),c.a.createElement(h.a,{className:"px-5",bg:"light",variant:"light",fixed:"top"},c.a.createElement(h.a.Brand,null,c.a.createElement(l.b,{className:"text-reset",to:{pathname:"/"}},"Django-React")),c.a.createElement(d.a,{className:"mr-auto"},c.a.createElement(d.a.Link,null,c.a.createElement(l.b,{className:"text-reset",to:{pathname:"/"}},"Home")),c.a.createElement(E.a,{title:"Categories",id:"basic-nav-dropdown"},a.map((function(e){return c.a.createElement(E.a.Item,null,c.a.createElement(l.b,{className:"text-reset",key:e.id,to:{pathname:"/api/category/".concat(e.id,"/"),fromDashboard:!1}},e.name))})))),c.a.createElement(p.a,{inline:!0},c.a.createElement(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),c.a.createElement(g.a,{variant:"outline-primary"},"Search")))},y=(a(93),a(57),a(98),function(){return c.a.createElement(l.a,null,c.a.createElement(v,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/category/:id",exect:!0,component:b})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.cde6b047.chunk.js.map