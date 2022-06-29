(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c,r=n(7),a=n.n(r),s=n(4),o=n(0),u=(n(23),n(24),n(5)),i=n(13),l=n(2),d=n.n(l),p=(n(26),n(9)),j=n.n(p),b="https://mate.academy/students-api",O=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(b,"/todos/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();!function(e){e.SET_TODOS="SET_TODOS",e.ADD_TODO="ADD_TODO",e.SET_USER="SET_USER",e.CLEAR_USER="CLEAR_USER"}(c||(c={}));var _,v=function(e){return{type:c.SET_TODOS,payload:e}},m=function(e){return e.user},x=n(1);!function(e){e[e.all=0]="all",e[e.complited=1]="complited",e[e.active=2]="active"}(_||(_={}));var T=function(){var e=Object(s.b)(),t=Object(o.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],l=Object(o.useState)(_.all),p=Object(i.a)(l,2),b=p[0],T=p[1],y=Object(s.c)(m),S=Object(s.c)(function(e){return function(t){return t.todos.filter((function(t){return t.title.includes(e)}))}}(r));Object(o.useEffect)((function(){var t=function(){var t=Object(u.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:n=t.sent,e(v(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var E=function(){var t=Object(u.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h(n);case 3:r=t.sent,e((a=r,{type:c.SET_USER,payload:a})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}var a}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),w=S.filter((function(e){switch(b){case _.complited:return!0===e.completed;case _.active:return!1===e.completed;default:return e}})),N=function(){var t=Object(u.a)(d.a.mark((function t(n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(n);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:return t.next=10,O();case 10:c=t.sent,e(v(c));case 12:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"TodoList",children:[Object(x.jsx)("h2",{children:"Todos:"}),Object(x.jsxs)("div",{className:"TodoList__list-container",children:[Object(x.jsx)("input",{type:"text",id:"search-query",className:"TodoList__search",value:r,placeholder:"Type search word",onChange:function(e){return a(e.target.value.toLowerCase())}}),Object(x.jsxs)("select",{className:"TodoList__select",onChange:function(e){return T(+e.target.value)},children:[Object(x.jsx)("option",{value:_.all,children:"Show all"}),Object(x.jsx)("option",{value:_.complited,children:"Show complited"}),Object(x.jsx)("option",{value:_.active,children:"Show uncomplited"})]}),Object(x.jsx)("ul",{className:"TodoList__list",children:w.map((function(e){return Object(x.jsxs)("li",{className:j()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",readOnly:!0}),Object(x.jsx)("p",{className:"TodoList__list-paragraph",children:e.title})]}),Object(x.jsx)("button",{type:"button",className:j()("TodoList__user-button button",{"TodoList__user-button--selected":e.userId===(null===y||void 0===y?void 0:y.id)}),onClick:function(){E(e.userId)},children:"User #".concat(e.userId)}),Object(x.jsx)("button",{type:"button",className:j()("TodoList__user-button button",{"TodoList__user-button--selected":e.userId===(null===y||void 0===y?void 0:y.id)}),onClick:function(){return N(e.id)},children:"Remove"})]},e.id)}))})]})]})},y=(n(28),function(){var e=Object(s.c)(m),t=Object(s.b)();return e?Object(x.jsxs)("div",{className:"CurrentUser",children:[Object(x.jsx)("h2",{className:"CurrentUser__title",children:Object(x.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(x.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(x.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(x.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(x.jsx)("button",{type:"submit",className:"button CurrentUser__clear",onClick:function(){return t((e=null,{type:c.CLEAR_USER,payload:e}));var e},children:"Clear"})]}):Object(x.jsx)("p",{children:"No selected user"})}),S=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"App__sidebar",children:Object(x.jsx)(T,{})}),Object(x.jsx)("div",{className:"App__content",children:Object(x.jsx)("div",{className:"App__content-container",children:Object(x.jsx)(y,{})})})]})},E=n(12),w=n(3),N=n(15),L={todos:[],user:null},C=Object(N.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_TODOS:return Object(w.a)(Object(w.a)({},e),{},{todos:Object(E.a)(t.payload)});case c.ADD_TODO:return Object(w.a)(Object(w.a)({},e),{},{todos:[].concat(Object(E.a)(e.todos),[t.payload])});case c.SET_USER:return Object(w.a)(Object(w.a)({},e),{},{user:t.payload});case c.CLEAR_USER:return Object(w.a)(Object(w.a)({},e),{},{user:null});default:return e}}));a.a.render(Object(x.jsx)(s.a,{store:C,children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7f6aaec7.chunk.js.map