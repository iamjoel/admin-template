webpackJsonp([3],{124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",components:{},data:function(){return{model:{name:null,password:null},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login:function(){this.$refs.form.validate(function(e){if(!e)return!1;localStorage.setItem("j-sessionid",Math.random()),location.href="index.html"})}},mounted:function(){localStorage.clear()}}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(75),a=n.n(o),i=n(17),s=(n.n(i),n(16)),u=n.n(s);r.default.use(u.a),r.default.config.productionTip=!1,n(73),new r.default({el:"#app",template:"<App/>",components:{App:a.a},filters:{}})},17:function(e,t){},181:function(e,t){},182:function(e,t){},183:function(e,t){},193:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-card",{staticClass:"login"},[n("div",{staticClass:"clearfix",slot:"header"},[n("div",{staticClass:"login__title"},[e._v("登录")])]),e._v(" "),n("el-form",{ref:"form",attrs:{model:e.model,rules:e.rules,"label-position":"right","label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名",prop:"name"}},[n("el-input",{model:{value:e.model.name,callback:function(t){e.model.name=t},expression:"model.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.model.password=t},expression:"model.password"}})],1)],1),e._v(" "),n("div",{staticClass:"login__btn-wrap"},[n("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)},staticRenderFns:[]}},24:function(e,t,n){"use strict";var r=n(18),o=n.n(r),a=n(2),i=n(72),s=n(28);a.default.use(i.a),t.a=new i.a({routes:[].concat(o()(s.a),[{path:"*",redirect:"/"}])})},28:function(e,t,n){"use strict";var r=n(18),o=n.n(r),a={system:"system",music:"music"},i=[{path:"/",component:function(e){s(e,"dashboard",!1)}}].concat(o()(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["list","update","view"];if(!Array.isArray(n))throw"type should be array";return n.map(function(n){var r="/"+a[t]+"/"+e+"/"+("list"===n?"list":n+"/:id"),o=n;return"view"===n&&(o="update"),{path:r,component:function(n){s(n,a[t]+"/"+e+"/"+o)}}})}("song","music"))),s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n.e(0).then(function(o){e(n(82)("./"+t+(r?"/Index":"")+".vue"))}.bind(null,n)).catch(n.oe)};t.a=i},73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(130),o=n.n(r),a=n(78),i=n.n(a),s=n(77),u=n.n(s),l=n(16),c=(n.n(l),n(76)),d=n(24);u.a.interceptors.request.use(function(e){return new i.a(function(t,n){var r=localStorage.getItem("sc-sessionid");if(-1===e.url.indexOf(c.a.getUserInfoByCode))return"get"===e.method?(e.params=e.params||{},e.params.sessionid=r):(e.data=e.data||{},e.data.sessionid=r),t(e);p(function(n){return e.headers.Authorization="token "+n,e.headers["Content-Type"]="application/json",t(e)})})},function(e){return i.a.reject(e)}),u.a.interceptors.response.use(function(e){var t=e.data,r=e.config,o=t.errcode;if(13==o)d.a.push("/login");else if(void 0!=o&&0!=o&&!r.notShowError){var a=c.b[o]||t.errmsg;n.i(l.Message)({showClose:!0,message:a,type:"error"})}return e},function(e){return i.a.reject(e)});var p=function(e){var t=(new Date).getTime(),n=localStorage.getItem("authInfo");if(n&&(n=JSON.parse(n),(!n.expireTime||t>n.expireTime)&&(n=!1)),n)e(n.token);else{var r={app_id:c.oauth2.appid,app_secret:c.oauth2.appsecret};u.a.post(c.oauth2.url,r,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){var r=n.data,a={token:r.token,time:(new Date).getTime(),expireTime:t+1e3*(r.expire-100)};localStorage.setItem("authInfo",o()(a)),e(r.token)},function(e){console.error("error occur when getToken "+e)})}}},75:function(e,t,n){function r(e){n(183),n(182),n(181)}var o=n(11)(n(124),n(193),r,null,null);e.exports=o.exports},76:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r={song:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["list","detail","del","add","edit"],n={};return t.forEach(function(t){n[t]=e+"/"+t}),n}(void 0+"/song")},o={19:"没有权限"}}},[128]);
//# sourceMappingURL=login.fe01daecc75276fe50ed.js.map