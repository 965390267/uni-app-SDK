(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(e,t,n){"use strict";function o(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function r(){return"string"===typeof __channelId__&&__channelId__}function i(e,t){switch(o(t)){case"Function":return"function() { [native code] }";default:return t}}function c(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];console[e].apply(console,n)}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var c=t.shift();if(r())return t.push(t.pop().replace("at ","uni-app:///")),console[c].apply(console,t);var u=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,i)+"---END:JSON---"}catch(r){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=o(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e})),a="";if(u.length>1){var s=u.pop();a=u.join("---COMMA---"),0===s.indexOf(" at ")?a+=s:a+="---COMMA---"+s}else a=u[0];console[c](a)}n.r(t),n.d(t,"log",(function(){return c})),n.d(t,"default",(function(){return u}))},3237:function(e,t,n){"use strict";n("c0e0");var o=i(n("8bbf")),r=i(n("c8f9"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o.default.config.productionTip=!1,r.default.mpType="app";var s=new o.default(u({},r.default));s.$mount()},"8bbf":function(e,t){e.exports=Vue},a294:function(e,t,n){"use strict";n.r(t);var o=n("a72d"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},a72d:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){e("log","App Launch"," at App.vue:4"),uni.authorize({scope:"scope.camera",success:function(){uni.getLocation()}}),uni.authorize({scope:"scope.record",success:function(){uni.getLocation()}})},onShow:function(){e("log","App Show"," at App.vue:21")},onHide:function(){e("log","App Hide"," at App.vue:24")}};t.default=n}).call(this,n("0de9")["default"])},c0e0:function(e,t){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval)},c8f9:function(e,t,n){"use strict";n.r(t);var o=n("a294");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);var i,c,u,a,s=n("f0c5"),f=Object(s["a"])(o["default"],i,c,!1,null,null,null,!1,u,a);t["default"]=f.exports},f0c5:function(e,t,n){"use strict";function o(e,t,n,o,r,i,c,u,a,s){var f,l="function"===typeof e?e.options:e;if(a){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in a)p.call(a,d)&&!p.call(l.components,d)&&(l.components[d]=a[d])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(l.mixins||(l.mixins=[])).push(s)),t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),c?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},l._ssrRegister=f):r&&(f=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r),f)if(l.functional){l._injectStyles=f;var h=l.render;l.render=function(e,t){return f.call(t),h(e,t)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,f):[f]}return{exports:e,options:l}}n.d(t,"a",(function(){return o}))}},[["3237","app-config"]]]);