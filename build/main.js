#!/usr/bin/env node
!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)t.d(n,u,function(r){return e[r]}.bind(null,u));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";var n=t(2);Object.defineProperty(r,"__esModule",{value:!0}),r.getPkgProp=function(e,r){if(f.default.nullOrUndefined(e))return null;var t=(0,f.default)(r);try{switch(t){case"undefined":return b(e);case"string":return g(e,r);case"Object":return v(e,r);default:return m(!0,{fn:"getPkgProp",message:"Unrecognized argument type"})}}catch(e){return m(!0,{fn:"getPkgProp",message:"handler failed",err:e})}},r.handleUndefined=b,r.handleString=g,r.handleObject=v,r.handleError=m,r.getPkgUpJSON=function(){return k.apply(this,arguments)};var u=n(t(3)),a=n(t(4)),i=n(t(5)),o=n(t(6)),f=n(t(7)),c=n(t(8)),l=n(t(9)),s=n(t(10)),d=t(11),p=console.log;function b(e){return h.apply(this,arguments)}function h(){return(h=(0,i.default)(a.default.mark(function e(r){var t;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.default.nullOrUndefined(r)){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,(0,c.default)();case 5:t=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),m(!0,{fn:"handleUndefined",err:e.t0,message:"pkgUp failed"});case 11:return e.abrupt("return",g(r,t));case 12:case"end":return e.stop()}},e,null,[[2,8]])}))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=(0,i.default)(a.default.mark(function e(r){var t,n,u,i=arguments;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.length>1&&void 0!==i[1]?i[1]:process.cwd(),!f.default.nullOrUndefined(r)){e.next=3;break}return e.abrupt("return",null);case 3:return!1===(u=t).endsWith("package.json")&&(u=o.default.resolve(u,"package.json")),e.prev=5,e.next=8,l.default.readJson(u);case 8:n=e.sent,e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(5),e.abrupt("return",m(!0,{fn:"handleString",err:e.t0,message:"readJson failed"}));case 14:return e.abrupt("return",v(r,n));case 15:case"end":return e.stop()}},e,null,[[5,11]])}))).apply(this,arguments)}function v(e,r){return y.apply(this,arguments)}function y(){return(y=(0,i.default)(a.default.mark(function e(r,t){var n,i;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.default.nullOrUndefined(r)){e.next=2;break}return e.abrupt("return",null);case 2:if(i=t,!f.default.object(i)){e.next=9;break}if(!1!==i.hasOwnProperty(r)){e.next=8;break}return e.abrupt("return",m(!0,{fn:"handleObject",message:"property not found"}));case 8:Object.entries(i).map(function(e){var t=(0,u.default)(e,2),a=t[0],i=t[1];a===r&&(n=i)});case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function m(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=arguments.length>1?arguments[1]:void 0;if(f.default.truthy(e)&&f.default.truthy(r)){var t=r.fn,n=r.err,u=r.message;t&&(0,d.printLine)("red"),f.default.undefined(t)||p("".concat(s.default.red(t))),f.default.undefined(n)||((0,d.printLine)({character:".",color:"grey"}),p("".concat(s.default.red(n))),(0,d.printLine)({character:".",color:"grey"})),f.default.undefined(u)||p("".concat(s.default.grey(u))),(0,d.printLine)("red")}return!1}function k(){return(k=(0,i.default)(a.default.mark(function e(){var r;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.default)();case 2:return r=e.sent,e.next=5,l.default.readJson(r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}},function(e,r){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},function(e,r){e.exports=require("@babel/runtime/helpers/slicedToArray")},function(e,r){e.exports=require("@babel/runtime/regenerator")},function(e,r){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("@sindresorhus/is")},function(e,r){e.exports=require("pkg-up")},function(e,r){e.exports=require("fs-extra")},function(e,r){e.exports=require("chalk")},function(e,r){e.exports=require("tacker")}]));
//# sourceMappingURL=main.js.map