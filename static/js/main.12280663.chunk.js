(this["webpackJsonpreact-api-fetch-demo"]=this["webpackJsonpreact-api-fetch-demo"]||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),l=(n(31),n(23)),i=n(2),u=n(25),s=n(12),m=n(15),d=n.n(m),p=n(22);var h=Object(s.b)((function(e){return{repos:e.GitHubReposReducer.repos}}),{getProduct:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var a,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.github.com/users/".concat(e,"/repos"),t.next=3,fetch(a);case 3:return r=t.sent,t.next=6,r.json();case 6:c=t.sent,n({type:"GET_GITHUB_API",payload:c});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.getProduct,n=e.repos,c=r.a.useState(1),o=Object(u.a)(c,2),l=o[0],i=o[1],s=["id","name","description","size","url"];Object(a.useEffect)((function(){t("ronny1020")}),[t,"ronny1020"]),Object(a.useEffect)((function(){document.documentElement.scrollHeight===window.innerHeight&&0===window.scrollY&&l<n.length&&i(l+1);var e=function(){window.scrollY+window.innerHeight===document.documentElement.scrollHeight&&l<n.length&&i(l+1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[l,n.length]);var m=s.map((function(e,t){return r.a.createElement("th",{key:t,scope:"col"},e)})),d=n.map((function(e,t){return t<l?r.a.createElement("tr",{key:t},s.map((function(t,n){return r.a.createElement("th",{key:n,scope:"col"},e[t])}))):null}));return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"m-5"},"GitHubAPI DEMO"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,m)),r.a.createElement("tbody",null,d)))}));var E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(h,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(7),w=n(18),b={repos:[]},v=Object(f.c)({GitHubReposReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_GITHUB_API":return Object(w.a)(Object(w.a)({},e),{},{repos:t.payload});default:return e}}}),g=n(24),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,y=Object(f.e)(v,O(Object(f.a)(g.a)));o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{store:y},r.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.12280663.chunk.js.map