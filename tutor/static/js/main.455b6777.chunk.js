(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{55:function(e,t,a){e.exports=a(85)},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(60),a(91)),m=a(30),i=a(54),s=a(25),u=a.n(s),h=a(93),E=a(95),d=a(92),f=a(94),p=a(52),g=a(50),b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){c(e.data)}))}),[]),r.a.createElement(h.a,{className:"px-5",bg:"light",variant:"light",fixed:"top"},r.a.createElement(h.a.Brand,{href:"#home"},"Django-React"),r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(E.a.Link,{href:"#home"},"Home"),r.a.createElement(d.a,{title:"Categories",id:"basic-nav-dropdown"},a.map((function(e){return r.a.createElement(d.a.Item,{as:i.a,key:e.id,to:{pathname:"/category/".concat(e.id),fromDashboard:!1}},e.name)})))),r.a.createElement(f.a,{inline:!0},r.a.createElement(p.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(g.a,{variant:"outline-primary"},"Search")))},y=a(90),v=a(53),w=a(96),x=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/"}).then((function(e){c(e.data)}))}),[]),r.a.createElement(y.a,{md:3},a.map((function(e){return r.a.createElement(v.a,null,r.a.createElement(w.a,{className:"mb-4",key:e.id},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null,e.title),r.a.createElement(w.a.Text,null,e.content)),r.a.createElement(w.a.Footer,{className:"text-muted",style:{fontSize:"12px"}},r.a.createElement("a",{href:"/".concat(e.blog_category.slug)},"#",e.blog_category.slug)," (",e.pub_date,")")))})))},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(o.a,{className:"pt-5"},r.a.createElement("h1",{className:"mt-2 text-center"},"Hello from React!"),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.455b6777.chunk.js.map