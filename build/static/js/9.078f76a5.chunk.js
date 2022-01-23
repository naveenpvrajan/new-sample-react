(this["webpackJsonpsample-react"]=this["webpackJsonpsample-react"]||[]).push([[9],{2120:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Layout}));var r=n(0),a=n(2107),o=n(2137),c=n(2069),i=n(49),l=n(22),u=n(2142),s=n(2143),d=n(2145),j=n(2136),b=n(2068),O=n(2130),f=n(2144),p=n(2141),h=n(516),x=n.n(h),m=n(517),v=n.n(m),y=n(521),g=n.n(y),k=n(48),S=n(300),C=n(23),w=n(2109),U=n(2110),D=n(4),E=Object(r.createContext)();function LayoutProvider(e){var t=e.children,n=Object(r.useState)(!1),a=Object(l.a)(n,2),o=a[0],c=a[1];return Object(D.jsx)(E.Provider,{value:{isSidebarOpen:o,toggleSidebar:function toggleSidebar(){return c((function(e){return!e}))}},children:t})}var M=n(298),R=n(67),P=["label","icon","isDivider"],q=[{label:"Profile",value:"profile",icon:Object(D.jsx)(x.a,{}),path:C.f,isDivider:!0},{label:"Logout",value:"logout",icon:Object(D.jsx)(v.a,{}),path:C.c}],z=function Header(){var e=Object(k.c)(),t=r.useContext(E),n=r.useState(null),a=Object(l.a)(n,2),h=a[0],x=a[1],m=function handleCloseUserMenu(){x(null)},v=function onMenuClick(t){return function(){"logout"===t.value?e(Object(S.a)()):e(Object(M.b)({modalType:R.d,modalProps:{form:"edit_profile_form",title:"Edit Profile"}})),m()}};return Object(D.jsx)(u.a,{position:"fixed",sx:{zIndex:function zIndex(e){return e.zIndex.drawer+1}},children:Object(D.jsx)(c.a,{maxWidth:"xxl",children:Object(D.jsxs)(s.a,{disableGutters:!0,children:[Object(D.jsx)("div",{style:{flexGrow:1,cursor:"pointer"},onClick:t.toggleSidebar,children:Object(D.jsx)(g.a,{})}),Object(D.jsx)(j.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,mr:2},children:"User management"}),Object(D.jsxs)(o.a,{sx:{flexGrow:0},children:[Object(D.jsx)(f.a,{title:"Open settings",children:Object(D.jsx)(d.a,{onClick:function handleOpenUserMenu(e){x(e.currentTarget)},sx:{p:0},children:Object(D.jsx)(O.a,{alt:"Alex Kumar",src:"/static/images/avatar/2.jpg"})})}),function renderActionMenu(){return Object(D.jsx)(b.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(h),onClose:m,children:q.map((function(e){var t=e.label,n=e.icon,r=e.isDivider,a=void 0!==r&&r,o=Object(i.a)(e,P);return[Object(D.jsxs)(p.a,{onClick:v(o),children:[n?Object(D.jsx)(w.a,{children:n}):null,Object(D.jsx)(j.a,{textAlign:"center",children:t})]}),a?Object(D.jsx)(U.a,{}):null]}))})}()]})]})})})},T=n(6),F=[{path:C.a,component:Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(10)]).then(n.bind(null,2114))}))},{path:C.f,component:Object(r.lazy)((function(){return Promise.all([n.e(6),n.e(12)]).then(n.bind(null,2132))}))},{path:C.d,component:Object(r.lazy)((function(){return n.e(11).then(n.bind(null,2117))}))}];function Content(){return Object(D.jsx)(r.Suspense,{fallback:Object(D.jsx)("div",{children:"Loading..."}),children:Object(D.jsxs)(T.d,{children:[F.map((function(e){var t=e.path,n=e.component;return Object(D.jsx)(T.b,{path:t,element:Object(D.jsx)(n,{})},t)})),Object(D.jsx)(T.b,{path:"*",element:Object(D.jsx)("div",{children:"No path found!!"})})]})})}function Footer(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{children:"Footer component"})})}var L=n(11),I=n(2146),N=n(2140),W=n(2125),A=n(2111),K=n(524),B=n.n(K),G=n(523),_=n.n(G),H=n(525),V=n.n(H),J="left",Q=[{label:"Dashboard",icon:Object(D.jsx)(_.a,{}),path:C.a},{label:"Users",icon:Object(D.jsx)(B.a,{}),path:C.f,isDivider:!0},{label:"Settings",icon:Object(D.jsx)(V.a,{}),path:C.d}];function Sidebar(){var e=Object(T.g)(),t=r.useContext(E),n=function toggleDrawer(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&t.toggleSidebar()},a=function onMenuClick(t){return function(){return e(t)}};return Object(D.jsx)(I.a,{anchor:J,open:t.isSidebarOpen,sx:Object(L.a)({width:250,flexShrink:0},"& .MuiDrawer-paper",{width:250,boxSizing:"border-box"}),onClose:n,children:function list(){return Object(D.jsx)(o.a,{sx:{width:250,mt:8},role:"presentation",onClick:n,onKeyDown:n,children:Object(D.jsx)(N.a,{children:Q.map((function(e){var t=e.path,n=e.label,o=e.icon,c=e.isDivider,i=void 0!==c&&c;return Object(D.jsxs)(r.Fragment,{children:[Object(D.jsxs)(W.a,{button:!0,onClick:a(t),children:[Object(D.jsx)(w.a,{children:o}),Object(D.jsx)(A.a,{primary:n})]}),i?Object(D.jsx)(U.a,{}):null]},t)}))})})}()})}var X=n(3),Y=n(2121),Z=n(2119),$=n(2129),ee=n(302),te=n(2131),ne=n(2155),re=n(2152),ae=n(2154),oe=n(2153),ce=n(2112);function Modal(e){var t=e.title,n=void 0===t?"":t,r=e.children,a=e.onOk,o=void 0===a?function(){}:a,c=e.actions,i=e.okayBtnProps,l=void 0===i?{}:i,u=e.closeBtnProps,s=void 0===u?{}:u,d=Object(k.c)();return Object(D.jsxs)(re.a,{open:!0,children:[Object(D.jsx)(ce.a,{children:n}),Object(D.jsx)(oe.a,{children:r}),Object(D.jsx)(ae.a,{children:c||Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(te.a,Object(X.a)(Object(X.a)({variant:"outlined",onClick:function handleClose(){return d(Object(M.a)())},color:"secondary"},s),{},{children:s.label||"Cancel"})),Object(D.jsxs)(te.a,Object(X.a)(Object(X.a)({variant:"contained",disabled:l.loading,onClick:o,color:"secondary"},l),{},{children:[l.loading?Object(D.jsx)(ne.a,{color:"secondary",sx:{mr:1},size:25}):null,l.label||"Okay"]}))]})})]})}var ie=n(257),le=n(264),ue=n(2149),se=n(2070),de=n(2151),je=n(2113),be=["value"];var Oe=function Toggle(e){var t=e.label,n=e.color,r=void 0===n?"secondary":n,a=e.labelPlacement,o=void 0===a?"start":a,c=e.input,l=c.value,u=Object(i.a)(c,be),s=e.meta,d=s.touched,j=s.invalid,b=s.error,O=!("active"!==l&&!0!==l);return Object(D.jsxs)(ue.a,{component:"fieldset",variant:"standard",error:d&&j,children:[Object(D.jsx)(se.a,{label:t,labelPlacement:o,control:Object(D.jsx)(je.a,Object(X.a)({color:r,checked:O},u))}),d&&b?Object(D.jsx)(de.a,{children:b}):null]})},fe=["dataSource","labelKey","valueKey"];var pe=function SelectField(e){var t=e.dataSource,n=e.labelKey,r=void 0===n?"label":n,a=e.valueKey,o=void 0===a?"value":a,c=Object(i.a)(e,fe);return Object(D.jsx)(ie.a,Object(X.a)(Object(X.a)({select:!0},c),{},{children:t.map((function(e){var t=e[o],n=e[r];return Object(D.jsx)(p.a,{value:t,children:n},t)}))}))},he=n(60),xe=["title","handleSubmit","intialValues"];var me={USER_FORM:Object(Z.a)()((function UserFormModal(e){var t=e.title,n=void 0===t?"Add User":t,r=e.handleSubmit,a=(e.intialValues,Object(i.a)(e,xe),Object(k.c)()),c=Object(k.d)((function(e){return e.user.isUserUpdating}));return console.log("isUserUpdating",c),Object(D.jsx)(Modal,{title:n,onOk:r((function onSubmit(e){console.log("formProps",e),a(Object(ee.c)(e))})),okayBtnProps:{loading:c},children:Object(D.jsx)(o.a,{component:"div",sx:{mt:3},children:Object(D.jsxs)($.a,{container:!0,spacing:1,children:[Object(D.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(Y.a,{required:!0,name:"name",label:"Name",component:ie.a,validate:[le.b]})}),Object(D.jsx)($.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(Y.a,{required:!0,dataSource:he.b,name:"gender",label:"Gender",component:pe,validate:[le.b]})}),Object(D.jsx)($.a,{item:!0,xs:12,children:Object(D.jsx)(Y.a,{required:!0,name:"email",label:"Email Address",component:ie.a,validate:[le.b,le.a]})}),Object(D.jsx)($.a,{item:!0,xs:12,children:Object(D.jsx)(Y.a,{name:"status",label:"Status",component:Oe})})]})})})})),DELETE_USER:function DeleteUser(e){var t=e.userData,n=e.title,r=Object(k.c)(),a=Object(k.d)((function(e){return e.user.isUserDeleting}));return Object(D.jsx)(Modal,{title:n,onOk:function onDelete(){r(Object(ee.a)(t.id))},okayBtnProps:{label:"Delete User",color:"error",loading:a},children:Object(D.jsxs)(o.a,{component:"div",children:["Are you sure you want to delete user (",Object(D.jsx)("b",{children:t.name}),")?",Object(D.jsx)("div",{children:Object(D.jsx)("b",{children:"Note: This cannot be undone."})})]})})}};function ModalRoot(){var e=Object(k.d)((function(e){return e.modal.modalType})),t=Object(k.d)((function(e){return e.modal.modalProps}));return e&&e.length?e.map((function(e,n){var r=me[e];return Object(D.jsx)(r,Object(X.a)({},t[n]))})):Object(D.jsx)("span",{})}var ve=n(14),ye=n(548),ge=n.n(ye),ke=n(103),Se=n(350),Ce=[],we=function useNotifier(){var e=Object(k.c)(),t=Object(k.d)((function(e){return e.noti.notifications||[]})),n=Object(ke.b)(),a=n.enqueueSnackbar,o=n.closeSnackbar;Object(r.useEffect)((function(){t.forEach((function(t){var n=t.key,r=t.msg,c=t.type,i=t.dismissed;void 0!==i&&i?o(n):Ce.includes(n)||(a(r,{key:n,variant:c,action:function action(e){return Object(D.jsx)(d.a,{sx:{p:.5},onClick:function onClick(){return o(e)},children:Object(D.jsx)(ge.a,{})})},onClose:function onClose(e,t,n){},onExited:function onExited(t,n){e(Object(Se.b)(n)),function removeDisplayed(e){Ce=Object(ve.a)(Ce.filter((function(t){return e!==t})))}(n)}}),function storeDisplayed(e){Ce=[].concat(Object(ve.a)(Ce),[e])}(n))}))}),[t,o,a,e])};function Layout(){return we(),Object(D.jsx)(LayoutProvider,{children:Object(D.jsxs)(o.a,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[Object(D.jsx)(a.a,{}),Object(D.jsx)(z,{}),Object(D.jsx)(Sidebar,{}),Object(D.jsx)(ModalRoot,{}),Object(D.jsx)(c.a,{component:"main",sx:{mt:10,mb:2,mx:0},maxWidth:"xxl",children:Object(D.jsx)(Content,{})}),Object(D.jsx)(o.a,{component:"footer",sx:{py:3,mt:"auto",backgroundColor:function backgroundColor(e){return"light"===e.palette.mode?e.palette.grey[200]:e.palette.grey[800]}},children:Object(D.jsx)(c.a,{sx:{mx:0},maxWidth:"xxl",children:Object(D.jsx)(Footer,{})})})]})})}},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return Input}));var r=n(3),a=n(49),o=n(2138),c=n(4),i=["label","input","type","margin","color","variant","focused","required","fullWidth","autoComplete","children","meta"],l={text:"off",password:"new-password"};function Input(e){var t=e.label,n=e.input,u=e.type,s=void 0===u?"text":u,d=e.margin,j=void 0===d?"normal":d,b=e.color,O=void 0===b?"secondary":b,f=e.variant,p=void 0===f?"outlined":f,h=e.focused,x=void 0===h||h,m=e.required,v=void 0===m||m,y=e.fullWidth,g=void 0===y||y,k=e.autoComplete,S=void 0===k?"":k,C=e.children,w=void 0===C?null:C,U=e.meta,D=U.touched,E=U.invalid,M=U.error,R=Object(a.a)(e,i),P=v?"".concat(t," *"):t;return Object(c.jsx)(o.a,Object(r.a)(Object(r.a)(Object(r.a)({type:s,label:P,color:O,margin:j,focused:x,variant:p,placeholder:t,fullWidth:g,error:D&&E,helperText:D&&M,autoComplete:S||l[s]},n),R),{},{children:w}))}},264:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(289),a=n.n(r),o=function required(e){return e||"number"===typeof e?void 0:"Required"},c=function email(e){return e&&!a.a.isEmail(e)?"Invalid email address":void 0}},298:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(67),a=function showModal(e){return{type:r.c,payload:e}},o=function hideModal(e){return{type:r.b,payload:e}}},300:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(71);var a=n(41),o=function loginRequest(e){return function(t){if(t({type:a.b}),"admin@admin.com"===e.username&&"admin"===e.password){var n=function getRandomId(){return Math.random().toString(36).substr(2,9)}();Object(r.d)("authToken",n),t({type:a.c,payload:n})}else t({type:a.a})}},c=function logOut(){return function(e){e({type:a.d}),Object(r.c)("authToken")}}},302:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return p}));var r=n(526),a=n.n(r),o=n(544),c=n.n(o),i=n(102),l=n(350),u=a.a.create({baseURL:"https://gorest.co.in/public/v1/"}),s=function request(e){return u(e).then((function(e){return e.data})).catch((function(e){return d(e),{error:e.response&&e.response.data||e.message||"SERVER_ERROR"}}))},d=function errorHandler(e){var t=i.a.dispatch;if(e.response&&e.response.status){var n,r,a=null===(n=e.response.data)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message;404===e.response.status?t(Object(l.a)({msg:a||"Not Found",type:"error"})):401===e.response.status?t(Object(l.a)({msg:a||"Unauthorized",type:"error"})):t(Object(l.a)({msg:a||"Server Error",type:"error"}))}else t(Object(l.a)({msg:"Server Error",type:"error"}))},j=function patch(e,t){return s({url:e,method:"patch",data:c.a.stringify(t)})},b=n(9),O=function fetchUsersListRequest(){return function(e){e({type:b.k}),function get(e,t){return s({url:e,method:"get",params:t})}("users").then((function(t){return e({type:b.l,payload:t})})).catch((function(){return e({type:b.j})}))}},f=function updateUserRequest(e){return function(t){t({type:b.t}),j("users/".concat(e.id),e).then((function(e){return t({type:b.u,payload:e})})).catch((function(){return t({type:b.s})}))}},p=function deleteUserRequest(e){return function(t){t({type:b.e}),function remove(e){return s({url:e,method:"delete"})}("users/".concat(e)).then((function(e){return t({type:b.f,payload:e})})).catch((function(){return t({type:b.d})}))}}},350:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(3),a=n(62),o=function openNotification(e){return{type:a.b,payload:Object(r.a)(Object(r.a)({},e),{},{key:(new Date).getTime()+Math.random()})}},c=function removeNotification(e){return{type:a.c,payload:{key:e}}}}}]);