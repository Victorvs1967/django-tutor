(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},19:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(11),r=n.n(c),i=(n(19),n(13)),l=n(12),u=n.n(l);n(37);var s=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/blogpost/"}).then((function(e){c(e.data)}))}),[]),console.log(n),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Hello from React!"),a.a.createElement("ul",null,n.map((function(e){return a.a.createElement("li",{key:e.id},e.titul,a.a.createElement("br",null),e.content)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.d168e929.chunk.js.map