(function(t){function e(e){for(var o,i,a=e[0],l=e[1],c=e[2],d=0,m=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},r=[];function i(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"41161755"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=s[t]=[e,o]}));e.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=i(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,n[1](c)}s[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),s=n.n(o);s.a},"0a5b":function(t,e,n){},"147b":function(t,e,n){"use strict";var o=n("d5bc"),s=n.n(o);s.a},"1a44":function(t,e,n){},"21f4":function(t,e,n){"use strict";var o=n("b00d"),s=n.n(o);s.a},"511b":function(t,e,n){},"53be":function(t,e,n){"use strict";var o=n("7d8f"),s=n.n(o);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header"),n("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("b-navbar",{attrs:{toggleable:"md",type:"light"}},[n("b-container",[n("app-logo"),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/blog","active-class":"active"}},[t._v("Blog")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/contact","active-class":"active"}},[t._v("Contact")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/tasks","active-class":"active"}},[t._v("Tasks")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/photos","active-class":"active"}},[t._v("Photos")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/todos","active-class":"active"}},[n("nobr",[t._v("To-Do's")])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:"/register"}},[t._v("Register")])],1)],1)],1)],1)],1)],1)},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar-brand",[n("router-link",{attrs:{to:"/"}},[t._v("vue-project")])],1)},c=[],d={name:"app-logo"},u=d,m=(n("80f7"),n("2877")),f=Object(m["a"])(u,l,c,!1,null,"3eaab64e",null),p=f.exports,h={name:"app-header",components:{AppLogo:p}},b=h,g=(n("9944"),Object(m["a"])(b,i,a,!1,null,"70e64570",null)),v=g.exports,w={name:"App",components:{AppHeader:v}},y=w,P=(n("034f"),Object(m["a"])(y,s,r,!1,null,null,null)),O=P.exports,E=n("8c4f"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Homepage")])])}],k={name:"home"},x=k,S=(n("21f4"),Object(m["a"])(x,_,j,!1,null,"22b9a8c5",null)),F=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-col",{directives:[{name:"show",rawName:"v-show",value:t.formUnsubmitted,expression:"formUnsubmitted"}],staticClass:"main-content",attrs:{xl:"5",lg:"6",md:"8",sm:"10"}},[n("h1",{staticClass:"header"},[t._v("Register")]),t.shouldShowGeneralError?n("div",{staticClass:"text-danger general-error"},[t._v("Incorrect register information.")]):t._e(),n("b-form",[n("b-form-group",{attrs:{label:"Username:","invalid-feedback":t.invalidUsername,state:t.usernameState}},[n("b-form-input",{attrs:{id:"username",state:t.usernameState,trim:"",placeholder:"Enter username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("b-form-group",{attrs:{label:"Email address:","invalid-feedback":t.invalidEmail,state:t.emailState}},[n("b-form-input",{attrs:{type:"email",id:"email",state:t.emailState,placeholder:"Enter email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("b-form-group",{attrs:{label:"Password:","invalid-feedback":t.invalidPassword,state:t.passwordState}},[n("b-form-input",{attrs:{type:"password",id:"password",state:t.passwordState,required:"",placeholder:"Enter password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("b-form-group",{attrs:{label:"Confirm Password:","invalid-feedback":t.invalidConfirmPassword,state:t.confirmPasswordState}},[n("b-form-input",{attrs:{type:"password",id:"confirmPassword",state:t.confirmPasswordState,required:"",placeholder:"Enter confirm password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),n("b-form-group",{attrs:{id:"checkbox","invalid-feedback":t.invalidTerms,state:t.termsState}},[n("b-form-checkbox",{attrs:{id:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"},model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}},[t._v("\n          I agree to the "),n("b-link",{attrs:{to:"terms"}},[t._v("Terms of Service")]),t._v(".\n        ")],1)],1),n("b-button",{staticClass:"btn-lg",attrs:{type:"submit",id:"submit-button",variant:"primary",disabled:!t.formState},on:{click:function(e){return t.submitForm(e)}}},[t._v("Register\n      ")])],1)],1),n("transition",{attrs:{name:"fadeUp",duration:{enter:1800,leave:800}},on:{"after-enter":function(e){t.showMessage=!1},"after-leave":t.redirectToHome}},[t.showMessage?n("p",{attrs:{id:"registered-message"}},[t._v("Registered Successfully!")]):t._e()])],1)},C=[],R={data:function(){return{email:null}},computed:{emailState:function(){if(null==this.email)return null;var t=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;return t.test(this.email)},invalidEmail:function(){return null==this.email?"":this.email.length>0&&this.email.length<40?"Invalid email.":"Please enter your email address."}}},M={data:function(){return{username:null,password:null,confirmPassword:null,terms:null,formUnsubmitted:!0,showMessage:!1}},mixins:[R],computed:{usernameState:function(){return null==this.username?null:this.username.length>=4&&this.username.length<=20},invalidUsername:function(){return this.username.length>4&&this.username.length<=20||null==this.username?"":this.username.length>0||this.username.length>20?"Username must be between 4 and 20 characters.":"Please enter your desired username."},passwordState:function(){if(null==this.password)return null;var t=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;return t.test(this.password)},invalidPassword:function(){return null==this.password?"":this.password.length>0&&this.password.length<40?"Password must be at least 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number.":this.password.length>40?"Password must be less than 40 characters.":"Please enter your desired password."},confirmPasswordState:function(){return null==this.confirmPassword?null:this.confirmPassword==this.password&&this.confirmPassword.length>0},invalidConfirmPassword:function(){return null==this.confirmPassword?"":this.confirmPassword.length>0?"Confirm password must match password.":"Please enter your password again."},termsState:function(){return null==this.terms?null:"accepted"==this.terms},invalidTerms:function(){return null==this.terms?"":this.termsState?void 0:"You must agree to the Terms of Service"},formState:function(){return 1==(this.usernameState&&this.emailState&&this.passwordState&&this.confirmPasswordState&&this.termsState)},shouldShowGeneralError:function(){return null!=this.username&&null!=this.email&&null!=this.password&&null!=this.confirmPassword&&null!=this.terms&&!this.formState}},methods:{redirectToHome:function(){this.$router.push({name:"home"})},submitForm:function(t){t.preventDefault(),this.formUnsubmitted=!1,this.showMessage=!0}}},B=M,D=(n("ce51"),Object(m["a"])(B,T,C,!1,null,"048ea97d",null)),$=D.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-col",{staticClass:"main-content",attrs:{xl:"5",lg:"6",md:"8",sm:"10"}},[n("content-header",[t._v("Contact")]),t.shouldShowGeneralError?n("div",{staticClass:"text-danger general-error"},[t._v("Please fill out the fields.")]):t._e(),n("b-form",[n("b-form-group",{attrs:{label:"Name:","invalid-feedback":t.invalidName,state:t.nameState}},[n("b-form-input",{attrs:{id:"name",state:t.nameState,trim:"",placeholder:"Enter name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("b-form-group",{attrs:{label:"Email address:","invalid-feedback":t.invalidEmail,state:t.emailState}},[n("b-form-input",{attrs:{type:"email",id:"email",state:t.emailState,placeholder:"Enter email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("b-form-group",{ref:"phoneNumber",attrs:{label:"Phone number:","invalid-feedback":t.invalidPhone,state:t.phoneState}},[n("vue-tel-input",{class:[null==this.phone.valid?"form-control is-null":1==this.phone.valid?"form-control is-valid":"form-control is-invalid"],attrs:{state:t.phoneState},on:{onInput:t.updateNumber},model:{value:t.phone.number,callback:function(e){t.$set(t.phone,"number",e)},expression:"phone.number"}})],1),n("b-form-group",{attrs:{label:"Message:","invalid-feedback":t.invalidMessage,state:t.messageState}},[n("b-form-textarea",{attrs:{id:"message",state:t.messageState,placeholder:"Enter your message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),n("b-button",{staticClass:"btn-lg",attrs:{type:"submit",id:"submit-button",variant:"primary",disabled:!t.formState},on:{click:function(e){return t.submitForm(e)}}},[t._v("\n      Submit\n      ")])],1)],1),n("transition",{attrs:{name:"fadeUp",duration:{enter:1800,leave:1800}},on:{"after-enter":function(e){t.showMessage=!1}}},[t.showMessage?n("p",{attrs:{id:"message-sent"}},[t._v("Message Sent!")]):t._e()])],1)},z=[],N=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(t._s(t.title)),t._t("default")],2)}),A=[],U={props:["title"]},L=U,H=(n("53be"),Object(m["a"])(L,N,A,!1,null,null,null)),V=H.exports,q={data:function(){return{name:null,phone:{number:null,fullNumber:null,valid:null},message:null,showMessage:null}},computed:{nameState:function(){return null==this.name?null:this.name.length>=4&&this.name.length<=20},invalidName:function(){return null==this.name||this.name.length>4&&this.name.length<=20?"":this.name.length>0||this.name.length>20?"Name must be between 4 and 20 characters.":"Please enter your name."},phoneState:function(){return null==this.phone.valid?null:this.phone.valid},invalidPhone:function(){return null==this.phone.valid?"":void 0===this.phone.number?"".concat(this.phone.number," is not a valid number."):this.phone.isValid?"":"".concat(this.phone.fullNumber," is not a valid number.")},messageState:function(){return null==this.message?null:this.message.length>=4&&this.message.length<=20},invalidMessage:function(){return null==this.message?"":this.message.length<4||this.message.length>500?"This message must be between 4 and 500 characters":""},formState:function(){return 1==(this.nameState&&this.emailState&&this.phoneState&&this.messageState)},shouldShowGeneralError:function(){return null!=this.name&&null!=this.email&&null!=this.phone.valid&&null!=this.message&&!this.formState}},mixins:[R],components:{ContentHeader:V},methods:{submitForm:function(t){t.preventDefault(),this.clearForm(),this.showMessage=!0},updateNumber:function(t){var e=t.isValid,n=t.country;this.phone.fullNumber="+".concat(n.dialCode," ").concat(this.phone.number),this.phone.valid=e},clearForm:function(){this.name=null,this.phone.number="",this.phone.fullNumber="",this.phone.valid=null,this.message=null,this.email=null}}},G=q,J=(n("ec0d"),Object(m["a"])(G,I,z,!1,null,"3126a1fa",null)),Z=J.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-content",{attrs:{title:"Blo"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("g")]},proxy:!0},{key:"body",fn:function(){return t._l(t.getRows,(function(e){return n("b-row",{key:e},t._l(t.getItemsPerRowFromStore(e),(function(e){return n("list-item",{key:e.id,on:{"my-custom-emit":function(n){return t.logEmitter(e.title)}}},[n("b-card",{attrs:{title:t._f("capitalize")(e.title),align:"left"}},[n("b-card-text",[t._v(t._s(t._f("limit50Characters")(t._f("capitalize")(e.body)))+"...")]),n("b-button",{attrs:{to:"posts/"+e.id,variant:"primary"}},[t._v("Read More")])],1)],1)})),1)}))},proxy:!0}])})},K=[],Q=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"main-content",attrs:{xl:"12"}},[n("content-header",{attrs:{title:t.title}},[t._t("header")],2),n("content-body",[t._t("body")],2)],1)},X=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content-box"}},[t._t("default")],2)},et=[],nt={},ot=nt,st=Object(m["a"])(ot,tt,et,!1,null,null,null),rt=st.exports,it={name:"main-content",components:{ContentHeader:V,ContentBody:rt},props:["title","items"]},at=it,lt=Object(m["a"])(at,W,X,!1,null,"76434aa8",null),ct=lt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4",xl:"4"},on:{mouseenter:function(e){return t.emitHovered(e)}}},[t._t("default")],2)},ut=[],mt={methods:{emitHovered:function(){this.$emit("my-custom-emit")}}},ft=mt,pt=Object(m["a"])(ft,dt,ut,!1,null,null,null),ht=pt.exports,bt=n("2f62");function gt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function vt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?gt(n,!0).forEach((function(e){Object(Q["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var wt={computed:vt({},Object(bt["d"])({posts:function(t){return t.blog.posts},itemsPerRow:function(t){return t.blog.itemsPerRow}}),{},Object(bt["c"])({getRows:"blog/getRows",getItemsForRow:"blog/getItemsForRow",getCombinedTitleLength:"blog/getCombinedTitleLength"})),watch:{posts:function(){console.log("Combined title length is ".concat(this.getCombinedTitleLength))}},mounted:function(){this.$store.dispatch("blog/loadSelectedPosts")},components:{MainContent:ct,ListItem:ht},methods:{logEmitter:function(t){console.log("".concat(t," emitted an event"))},getItemsPerRowFromStore:function(t){return this.getItemsForRow(t)}}},yt=wt,Pt=(n("147b"),Object(m["a"])(yt,Y,K,!1,null,"2f02b666",null)),Ot=Pt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-col",{staticClass:"main-content",attrs:{xl:"12"}},[n("h1",{attrs:{id:"title"}},[t._v(t._s(t._f("capitalize")(t.post.title)))]),n("p",{attrs:{id:"body"}},[t._v(t._s(t._f("capitalize")(t.post.body)))])])],1)},_t=[],jt=n("bc3a"),kt=n.n(jt),xt=n("3022");function St(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function Ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?St(n,!0).forEach((function(e){Object(Q["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):St(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Tt={computed:Object(bt["d"])({posts:function(t){return t.blog.posts},post:function(t){return t.blog.post}}),mounted:function(){var t=this.$route.params.id;this.posts.length<1?(console.log("No posts loaded. Fetching single post"),this.fetchPostById(t)):(console.log("Loading post from posts[]"),this.loadPost(this.posts.filter((function(e){return e.id==t}))[0]))},methods:Ft({},Object(bt["b"])({fetchPostById:"blog/fetchPostById",loadPost:"blog/loadPost"}))},Ct=Tt,Rt=(n("bc18"),Object(m["a"])(Ct,Et,_t,!1,null,"ac88ce14",null)),Mt=Rt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-content",{attrs:{title:"Task"},scopedSlots:t._u([{key:"body",fn:function(){return t._l(t.getRows,(function(e){return n("b-row",{key:e},t._l(t.getItemsPerRowFromStore(e),(function(e){return n("list-item",{key:e.id},[n("b-card",{class:[e.completed?"completed":"in-progress"],attrs:{title:e.title,align:"left"}},[n("b-card-text",[t._v(t._s(e.completed?"Completed":"In Progress"))])],1)],1)})),1)}))},proxy:!0}])})},Dt=[];function $t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function It(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$t(n,!0).forEach((function(e){Object(Q["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$t(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var zt={computed:It({},Object(bt["d"])({tasks:function(t){return t.tasks.tasks}}),{},Object(bt["c"])({getRows:"tasks/getRows",getItemsForRow:"tasks/getItemsForRow"})),mounted:function(){this.$store.dispatch("tasks/loadSelectedTasks")},methods:{getItemsPerRowFromStore:function(t){return this.getItemsForRow(t)}},components:{MainContent:ct,ListItem:ht}},Nt=zt,At=(n("dd16"),Object(m["a"])(Nt,Bt,Dt,!1,null,"3a1d0310",null)),Ut=At.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-content",{attrs:{title:"Photos"},scopedSlots:t._u([{key:"body",fn:function(){return t._l(t.getRows,(function(e){return n("b-row",{key:e},t._l(t.getItemsPerRowFromStore(e),(function(e){return n("list-item",{key:e.id},[n("b-card-img-lazy",{attrs:{top:!0,offset:360,src:e.url,alt:"Image",bottom:""}}),n("b-card-title",[t._v(t._s(e.title))])],1)})),1)}))},proxy:!0}])})},Ht=[];function Vt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function qt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Vt(n,!0).forEach((function(e){Object(Q["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Gt={computed:qt({},Object(bt["d"])({photos:function(t){return t.photos.photos}}),{},Object(bt["c"])({getRows:"photos/getRows",getItemsForRow:"photos/getItemsForRow"})),mounted:function(){this.$store.dispatch("photos/load35RandomPhotos")},methods:{getItemsPerRowFromStore:function(t){return this.getItemsForRow(t)}},components:{MainContent:ct,ListItem:ht}},Jt=Gt,Zt=(n("bffc"),Object(m["a"])(Jt,Lt,Ht,!1,null,"b6dd9cda",null)),Yt=Zt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"main-content",attrs:{xl:"12"}},[n("content-header",[t._v("To-Do's")]),n("b-col",{staticClass:"mb-4 mx-auto",attrs:{sm:"11"}},[n("b-form-group",{attrs:{"invalid-feedback":t.invalidTitle,state:t.titleState}},[n("b-input-group",[n("b-form-input",{staticClass:"mr-3",attrs:{state:t.titleState,id:"editBox"},on:{input:function(e){return t.updateTitle()}},model:{value:t.editField,callback:function(e){t.editField=e},expression:"editField"}}),n("b-button",{attrs:{variant:"outline-primary"},on:{click:t.setTodo}},[t._v("\n          "+t._s(this.editFieldEditMode?"Save":"Create")+"\n        ")])],1)],1)],1),n("b-table",{attrs:{id:"todos-table",hover:"",items:t.todos,fields:t.fields,"tbody-tr-class":t.rowClass,"per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":!0},scopedSlots:t._u([{key:"cell(title)",fn:function(e){return[n("p",{ref:"title-"+e.item.id},[t._v(t._s(e.item.title))])]}},{key:"cell(edit)",fn:function(e){return[n("b-button",{attrs:{variant:"outline-warning",size:"sm"},on:{click:function(n){return t.editTodo(e.item)}}},[t._v("\n      Edit\n      ")])]}},{key:"cell(delete)",fn:function(e){return[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.delete-modal",modifiers:{"delete-modal":!0}}],attrs:{variant:"outline-danger",size:"sm"},on:{click:function(n){return t.promptDelete(e.item)}}},[t._v("\n      Delete\n      ")])]}},{key:"cell(is_completed)",fn:function(e){return[n("b-form-checkbox",{attrs:{size:"lg",switch:""},model:{value:e.item.completed,callback:function(n){t.$set(e.item,"completed",n)},expression:"row.item.completed"}})]}}])}),n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"todos-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),n("b-modal",{ref:"delete-modal",attrs:{id:"delete-modal"},scopedSlots:t._u([{key:"modal-header",fn:function(e){e.close;return[n("h5",[t._v("Confirm Deletion")])]}},{key:"default",fn:function(e){e.hide;return[n("p",[t._v('Are you sure you want to delete todo "'+t._s(t.todoBeingEdited.title)+'"')])]}},{key:"modal-footer",fn:function(e){e.hide;return[n("b-button",{attrs:{variant:"danger"},on:{click:t.confirmDelete}},[t._v("\n        Delete\n      ")]),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:t.cancelDelete}},[t._v("\n        Cancel\n      ")])]}}])})],1)},Qt=[],Wt=n("a8db");n("f576");function Xt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function te(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Xt(n,!0).forEach((function(e){Object(Q["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ee={computed:te({},Object(bt["d"])({todos:function(t){return t.todos.todos},perPage:function(t){return t.todos.perPage},rows:function(t){return t.todos.rows},fields:function(t){return t.todos.fields},sortBy:function(t){return t.todos.sortBy}}),{currentPage:{get:function(){return this.$store.state.todos.currentPage},set:function(t){this.setCurrentPage(t)}},editField:{get:function(){return this.$store.state.todos.editField},set:function(t){this.setEditField(t)}},editFieldEditMode:{get:function(){return this.$store.state.todos.editFieldEditMode},set:function(t){this.setEditFieldEditMode(t)}},todoBeingEdited:{get:function(){return this.$store.state.todos.todoBeingEdited},set:function(t){this.setTodoBeingEdited(t)}},titleState:function(){return null==this.editField?null:this.editField.length>=5&&this.editField.length<=80},invalidTitle:function(){return null==this.editField||this.editField.length>=5&&this.editField.length<=80?"":this.editField.length<5||this.editField.length>80?"Title must be between 5 and 80 characters.":"Please enter a todo title."}}),watch:{todos:function(t){console.log("Todo ids with leading 0's: ".concat(t.map((function(t){return String(t.id).padStart(2,0)}))))}},mounted:function(){this.loadTodos(),this.printDestructuringExample()},methods:te({data:function(){return{initialFieldValue:""}}},Object(bt["b"])({loadTodos:"todos/loadAllTodos",setCurrentPage:"todos/setCurrentPage",setCompleted:"todos/setCompleted",setEditField:"todos/setEditField",addTodo:"todos/addTodo",setEditFieldEditMode:"todos/setEditFieldEditMode",setTodoBeingEdited:"todos/setTodoBeingEdited",saveTodo:"todos/saveTodo",resetEdit:"todos/resetEdit",deleteTodo:"todos/deleteTodo"}),{setTodo:function(){this.editFieldEditMode?(this.saveTodo(this.editField),this.resetEdit()):""==this.editField||Object(xt["isNullOrUndefined"])(this.editField)?this.editField="":this.addTodo(this.editField)},editTodo:function(t){this.todoBeingEdited.id?(this.saveTodo(this.initialFieldValue),this.setEditField(t.title),this.setEditFieldEditMode(!0),this.setTodoBeingEdited(t),this.initialFieldValue=t.title):(this.initialFieldValue=t.title,this.setEditField(t.title),this.setEditFieldEditMode(!0),this.setTodoBeingEdited(t))},rowClass:function(t){if(t)return t.completed?"completed":"in-progress"},promptDelete:function(t){this.todoBeingEdited.id?(this.saveTodo(this.initialFieldValue),this.setEditField(null),this.setEditFieldEditMode(!1),this.setTodoBeingEdited(t)):(this.setEditField(null),this.setEditFieldEditMode(!1),this.setTodoBeingEdited(t))},cancelDelete:function(){this.$refs["delete-modal"].hide(),this.setTodoBeingEdited({})},confirmDelete:function(){this.deleteTodo(this.todoBeingEdited),this.setTodoBeingEdited({}),this.$refs["delete-modal"].hide()},updateTitle:function(){this.todoBeingEdited.id&&this.saveTodo(this.editField)},printDestructuringExample:function(){var t,e,n;t=5,n=10,console.log(t),console.log(e),console.log(n);var o={a:10,b:20,c:30,c2:40};t=o.a,e=o.b,n=Object(Wt["a"])(o,["a","b"]),console.log(t),console.log(e),console.log(n)}}),components:{ContentHeader:V}},ne=ee,oe=(n("c05e"),Object(m["a"])(ne,Kt,Qt,!1,null,"ca521252",null)),se=oe.exports;o["default"].use(E["a"]);var re=new E["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/register",name:"register",component:$},{path:"/contact",name:"contact",component:Z},{path:"/blog",name:"blog",component:Ot},{path:"/posts/:id",name:"post",component:Mt},{path:"/tasks",name:"tasks",component:Ut},{path:"/photos",name:"photos",component:Yt},{path:"/todos",name:"todos",component:se}]}),ie=n("5f5b"),ae=(n("f9e3"),n("2dd8"),n("f62e"));n("9ddc"),n("6b54");o["default"].filter("capitalize",(function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""})),o["default"].filter("limit50Characters",(function(t){return t?(t=t.toString(),t.substring(0,59)):""}));var le={posts:[],post:{},itemsPerRow:3,rows:3},ce={getRows:function(t){return Math.ceil(t.posts.length/t.itemsPerRow)},getItemsForRow:function(t){return function(e){for(var n=[],o=t.itemsPerRow*(e-1),s=o,r=0;s<o+t.itemsPerRow;s++,r++)t.posts[s]&&(n[r]=t.posts[s]);return n}},getCombinedTitleLength:function(t){return t.posts.reduce((function(t,e){return t+e.title.length}),0)}},de={loadAllPosts:function(t){var e=t.commit;kt.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){e("setPosts",t.data)}))},loadSelectedPosts:function(t){var e=t.commit;kt.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){e("setPosts",t.data.filter((function(t){return t.id>10&&t.id<22})))}))},fetchPostById:function(t,e){var n=t.commit;kt.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(t){n("setPost",t.data)}))},loadPost:function(t,e){var n=t.commit;n("setPost",e)}},ue={setPosts:function(t,e){t.posts=e},setPost:function(t,e){t.post=e},setRows:function(t,e){t.rows=e}},me={namespaced:!0,state:le,getters:ce,actions:de,mutations:ue},fe={post:Object},pe={},he={loadPost:function(t,e){var n=t.commit;kt.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(t){n("setPost",t.data)}))}},be={setPost:function(t,e){t.post=e}},ge={namespaced:!0,state:fe,getters:pe,actions:he,mutations:be},ve={tasks:[],itemsPerRow:3,rows:3},we={getRows:function(t){return Math.ceil(t.tasks.length/t.itemsPerRow)},getItemsForRow:function(t){return function(e){for(var n=[],o=t.itemsPerRow*(e-1),s=o,r=0;s<o+t.itemsPerRow;s++,r++)t.tasks[s]&&(n[r]=t.tasks[s]);return n}}},ye={loadSelectedTasks:function(t){var e=t.commit;kt.a.get("https://jsonplaceholder.typicode.com/todos").then((function(t){e("setTasks",t.data.filter((function(t){return t.id>0&&t.id<10})))}))}},Pe={setTasks:function(t,e){t.tasks=e}},Oe={namespaced:!0,state:ve,getters:we,actions:ye,mutations:Pe},Ee=n("75fc"),_e={photos:[],itemsPerRow:3,rows:3},je={getRows:function(t){return Math.ceil(t.photos.length/t.itemsPerRow)},getItemsForRow:function(t){return function(e){for(var n=[],o=t.itemsPerRow*(e-1),s=o,r=0;s<o+t.itemsPerRow;s++,r++)t.photos[s]&&(n[r]=t.photos[s]);return n}}},ke={load35RandomPhotos:function(t){var e=t.commit;e("setPhotos",[]),Se(Object(Ee["a"])(Array(50).keys())).forEach((function(t){kt.a.get("https://jsonplaceholder.typicode.com/photos/".concat(t)).then((function(t){e("addPhoto",t.data)}))}))}},xe={addPhoto:function(t,e){t.photos.push(e)},setPhotos:function(t,e){t.photos=e}},Se=function(t){var e=[];while(e.length<=35){var n=Math.ceil(Math.random()*t.length);-1===e.indexOf(n)&&e.push(n)}return e},Fe={namespaced:!0,state:_e,getters:je,actions:ke,mutations:xe},Te=(n("20d6"),{todos:[],perPage:10,currentPage:1,rows:0,fields:[{key:"id",sortable:!0},"title","is_completed","edit","delete"],sortBy:"id",editField:null,editFieldEditMode:!1,todoBeingEdited:{}}),Ce={currentPage:function(t){return t.currentPage}},Re={loadAllTodos:function(t){var e=t.commit;fetch("./todos.json").then((function(t){return t.json().then((function(t){e("setTodos",t),e("setRows",t.length)}))}))},setCurrentPage:function(t,e){var n=t.commit;n("setCurrentPage",e)},setCompleted:function(t,e){var n=t.commit;n("setCompleted",e)},setEditField:function(t,e){var n=t.commit;n("setEditField",e)},addTodo:function(t,e){var n=t.commit;n("addTodo",e)},setEditFieldEditMode:function(t,e){var n=t.commit;n("setEditFieldEditMode",e)},setTodoBeingEdited:function(t,e){var n=t.commit;n("setTodoBeingEdited",e)},saveTodo:function(t,e){var n=t.commit;n("saveTodo",e)},resetEdit:function(t){var e=t.commit;e("resetEdit")},deleteTodo:function(t,e){var n=t.commit;n("deleteTodo",e)}},Me={setTodos:function(t,e){t.todos=e},setCurrentPage:function(t,e){t.currentPage=e},setCompleted:function(t,e){t.completed=e},setRows:function(t,e){t.rows=e},setEditField:function(t,e){t.editField=e},addTodo:function(t,e){t.todos.push({userId:1,id:t.todos.length+1,title:e,completed:!1}),t.editField=null},setEditFieldEditMode:function(t,e){t.editFieldEditMode=e},setTodoBeingEdited:function(t,e){t.todoBeingEdited=e},saveTodo:function(t,e){t.todos[t.todoBeingEdited.id-1].title=e},resetEdit:function(t){t.editField=null,t.editFieldEditMode=!1,t.todoBeingEdited={}},deleteTodo:function(t,e){t.todos.splice(t.todos.findIndex((function(t){return t.id===e.id})),1)}},Be={namespaced:!0,state:Te,getters:Ce,actions:Re,mutations:Me},De={name:null,phone:{number:null,fullNumber:null,valid:null},message:null,showMessage:null},$e={},Ie={},ze={setName:function(t,e){t.name=e}},Ne={namespaced:!0,state:De,getters:$e,actions:Ie,mutations:ze};o["default"].use(bt["a"]);var Ae=new bt["a"].Store({modules:{blog:me,post:ge,tasks:Oe,photos:Fe,todos:Be,contact:Ne}}),Ue=n("9483");Object(Ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["default"].use(ie["a"]),o["default"].use(ae["a"]),o["default"].config.productionTip=!1,new o["default"]({router:re,store:Ae,render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,n){},"7d8f":function(t,e,n){},"80f7":function(t,e,n){"use strict";var o=n("1a44"),s=n.n(o);s.a},9944:function(t,e,n){"use strict";var o=n("511b"),s=n.n(o);s.a},"9ce5":function(t,e,n){},b00d:function(t,e,n){},bc18:function(t,e,n){"use strict";var o=n("9ce5"),s=n.n(o);s.a},bffc:function(t,e,n){"use strict";var o=n("0a5b"),s=n.n(o);s.a},c05e:function(t,e,n){"use strict";var o=n("da9e"),s=n.n(o);s.a},ce51:function(t,e,n){"use strict";var o=n("da25"),s=n.n(o);s.a},d5bc:function(t,e,n){},da25:function(t,e,n){},da9e:function(t,e,n){},dd16:function(t,e,n){"use strict";var o=n("f702"),s=n.n(o);s.a},ec0d:function(t,e,n){"use strict";var o=n("f430"),s=n.n(o);s.a},f430:function(t,e,n){},f702:function(t,e,n){}});
//# sourceMappingURL=app.e938fdcf.js.map