(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{16:function(t,e,n){"use strict";n.d(e,"c",(function(){return j})),n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return p}));var r=n(5),c=n.n(r),a=n(13),u=n(4),o=n(10),i=n.n(o);function s(t){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i.a.defaults.baseURL="https://connections-api.herokuapp.com";var f=n(17),j=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(f.a.fetchContactRequest()),t.prev=1,t.next=4,i.a.get("/contacts");case 4:n=t.sent,r=n.data,e(f.a.fetchContactSucess(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(f.a.fetchContactError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},h=Object(u.c)("/contacts/contactsFetchPost",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.rejectWithValue,a=n.getState,t.prev=1,!a().contacts.entris.find((function(t){var n;return(null===t||void 0===t||null===(n=t.name)||void 0===n?void 0:n.toLowerCase())===e.name.toLowerCase()}))){t.next=6;break}return alert("\u041e\u0448\u0438\u0431\u043a\u0430, \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e.name," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c")),t.abrupt("return",null);case 6:return t.next=8,s(e);case 8:return u=t.sent,t.abrupt("return",u);case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()),p=Object(u.c)("/contacts/contactsFetchDelete",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,b(e);case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}())},17:function(t,e,n){"use strict";var r=n(86),c=n(4),a={formSubmit:Object(c.b)("add_Contact",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(r.a)(),name:e,number:n}}})),deleteContact:Object(c.b)("delete_Contact"),filters:Object(c.b)("filter_contact"),fetchContactRequest:Object(c.b)("/contacts/fetchContactRequest"),fetchContactSucess:Object(c.b)("/contacts/fetchContactSucess"),fetchContactError:Object(c.b)("/contacts/fetchContactError")};e.a=a},46:function(t,e,n){t.exports={container:"Container_container__3RIox"}},8:function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return O}));var r=n(5),c=n.n(r),a=n(13),u=n(10),o=n.n(u),i=n(4);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var s,l=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){o.a.defaults.headers.common.Authorization=""},d=Object(i.c)("auth/register",function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/signup",e);case 3:return n=t.sent,r=n.data,l(r.token),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f=Object(i.c)("auth/login",function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/login",e);case 3:return n=t.sent,r=n.data,l(r.token),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),j={register:d,logOut:Object(i.c)("auth/logout",Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/logout");case 3:b(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))),logIn:f,fetchCurrentUser:Object(i.c)("auth/refresh",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return l(a),t.prev=5,t.next=8,o.a.get("/users/current");case 8:return u=t.sent,i=u.data,t.abrupt("return",i);case 13:t.prev=13,t.t0=t.catch(5),console.log(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}())},h={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUsername:function(t){return t.auth.user.name},getIsFetchingCurrent:function(t){return t.auth.isFetchingCurrentUser}},p=n(3),O=Object(i.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(s={},Object(p.a)(s,j.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(p.a)(s,j.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(p.a)(s,j.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(p.a)(s,j.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0})),s)}).reducer},84:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(0),a=n.n(c),u=n(25),o=n.n(u),i=n(19),s=n(7),l=n(45),b=n(6),d=n(8),f={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},j=function(){var t=Object(s.c)(d.c.getIsLoggedIn);return Object(r.jsxs)("nav",{children:[Object(r.jsx)(i.b,{to:"/",exact:!0,style:f.link,activeStyle:f.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),t&&Object(r.jsx)(i.b,{to:"/contacts",exact:!0,style:f.link,activeStyle:f.activeLink,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"})]})},h=n.p+"static/media/default-avatar.b50d0699.png",p={container:{display:"flex",alignItems:"center"},avatar:{marginRight:8},name:{fontWeight:700,marginRight:12}};function O(){var t=Object(s.b)(),e=Object(s.c)(d.c.getUsername),n=h;return Object(r.jsxs)("div",{style:p.container,children:[Object(r.jsx)("img",{src:n,alt:"",width:"32",style:p.avatar}),Object(r.jsxs)("span",{style:p.name,children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",e]}),Object(r.jsx)("button",{type:"button",onClick:function(){return t(d.a.logOut())},className:"buttonOut",children:"\u0412\u044b\u0439\u0442\u0438"})]})}var g={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function v(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(i.b,{to:"/register",exact:!0,style:g.link,activeStyle:g.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(r.jsx)(i.b,{to:"/login",exact:!0,style:g.link,activeStyle:g.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})}var x={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function m(){var t=Object(s.c)(d.c.getIsLoggedIn);return Object(r.jsxs)("header",{style:x.header,children:[Object(r.jsx)(j,{}),t?Object(r.jsx)(O,{}):Object(r.jsx)(v,{})]})}var k=n(46),y=n.n(k);function C(t){var e=t.children;return Object(r.jsx)("div",{className:y.a.container,children:e})}var w=n(22),I=n(27);function L(t){var e=t.children,n=t.redirectTo,c=void 0===n?"/":n,a=Object(I.a)(t,["children","redirectTo"]),u=Object(s.c)(d.c.getIsLoggedIn);return Object(r.jsx)(b.b,Object(w.a)(Object(w.a)({},a),{},{children:u?e:Object(r.jsx)(b.a,{to:c})}))}function S(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,a=t.redirectTo,u=void 0===a?"/":a,o=Object(I.a)(t,["children","restricted","redirectTo"]),i=Object(s.c)(d.c.getIsLoggedIn)&&c;return Object(r.jsx)(b.b,Object(w.a)(Object(w.a)({},o),{},{children:i?Object(r.jsx)(b.a,{to:u}):e}))}var R=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,96))})),F=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,93))})),E=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,94))})),A=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,95))}));function T(){var t=Object(s.b)(),e=Object(s.c)(d.c.getIsFetchingCurrent);return Object(c.useEffect)((function(){t(d.a.fetchCurrentUser())}),[t]),Object(r.jsx)(C,{children:e?Object(r.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c... "}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(b.d,{children:Object(r.jsxs)(c.Suspense,{fallback:Object(r.jsx)("div",{class:"loader",children:Object(r.jsx)("div",{class:"loader_inner"})}),children:[Object(r.jsx)(S,{exact:!0,path:"/",children:Object(r.jsx)(R,{})}),Object(r.jsx)(S,{exact:!0,path:"/register",redirectTo:"/contacts",restricted:!0,children:Object(r.jsx)(F,{})}),Object(r.jsx)(S,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(r.jsx)(E,{})}),Object(r.jsx)(L,{path:"/contacts",redirectTo:"/login",children:Object(r.jsx)(A,{})})]})})]})})}var U,z,_,B=n(26),W=n(4),q=n(20),D=n(47),V=n.n(D),J=n(3),N=n(9),M=n(17),P=n(16),G=Object(W.d)([],(U={},Object(J.a)(U,M.a.fetchContactSucess,(function(t,e){return e.payload})),Object(J.a)(U,P.b.fulfilled,(function(t,e){var n=e.payload;return n?[].concat(Object(B.a)(t),[n]):t})),Object(J.a)(U,P.a.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),U)),H=Object(W.d)(!1,(z={},Object(J.a)(z,M.a.fetchContactRequest,(function(){return!0})),Object(J.a)(z,M.a.fetchContactSucess,(function(){return!1})),Object(J.a)(z,M.a.fetchContactError,(function(){return!1})),Object(J.a)(z,P.b.pending,(function(){return!0})),Object(J.a)(z,P.b.fulfilled,(function(){return!1})),Object(J.a)(z,P.b.rejected,(function(){return!1})),Object(J.a)(z,P.a.pending,(function(){return!0})),Object(J.a)(z,P.a.fulfilled,(function(){return!1})),Object(J.a)(z,P.a.rejected,(function(){return!1})),z)),K=Object(W.d)(null,(_={},Object(J.a)(_,M.a.fetchContactError,(function(t,e){return e.payload})),Object(J.a)(_,M.a.fetchContactSucess,(function(){return null})),Object(J.a)(_,P.b.rejected,(function(t,e){return e.payload})),Object(J.a)(_,P.b.fulfilled,(function(){return null})),Object(J.a)(_,P.a.rejected,(function(t,e){return e.payload})),Object(J.a)(_,P.a.fulfilled,(function(){return null})),_)),Q=Object(W.d)("",Object(J.a)({},M.a.filters,(function(t,e){return e.payload}))),X={contactsReduscer:Object(N.c)({entris:G,isLoding:H,error:K}),reducerFilter:Q},Y=Object(B.a)(Object(W.f)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),Z={key:"auth",storage:V.a,whitelist:["token"]},$=Object(W.a)({reducer:{auth:Object(q.g)(Z,d.b),contacts:X.contactsReduscer,filter:X.reducerFilter},middleware:Y,devTools:!1}),tt=Object(q.h)($);n(83),n(84);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(s.a,{store:$,children:Object(r.jsx)(l.a,{loading:null,persistor:tt,children:Object(r.jsx)(i.a,{children:Object(r.jsx)(T,{})})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.29cf2a0f.chunk.js.map