#!/usr/bin/env node
!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)t.d(n,u,function(r){return e[r]}.bind(null,u));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";var n=t(2);Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){switch((0,c.default)(r)){case"undefined":b(r);break;case"string":h(e,r);break;case"Object":x(e,r);break;default:return"".concat(f.default.yellow("printVersion")," doesn't recognize the param type. \nAccepted argument types: null, pkgPath<sz>, pkgObject<JSON>")}},r.handleUndefined=b,r.handleString=h,r.handleObject=x,r.handleError=v;var u=n(t(3)),a=n(t(4)),i=n(t(5)),o=n(t(6)),c=n(t(7)),l=n(t(8)),p=n(t(9)),f=n(t(10)),s=t(11),d=console.log;function b(e){return g.apply(this,arguments)}function g(){return(g=(0,i.default)(u.default.mark(function e(r){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.default)();case 3:t=e.sent,(0,s.printLine)("magenta"),(0,s.printMirror)({pkgPath:t},"magenta","grey"),(0,s.printLine)("magenta"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v("handleUndefined",e.t0,"pkgUp failed");case 12:return e.abrupt("return",h(t,r));case 13:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}function h(e,r){return y.apply(this,arguments)}function y(){return(y=(0,i.default)(u.default.mark(function e(r,t){var n,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=r).endsWith("package.json")||(a=o.default.join(a,"/package.json")),e.prev=2,(0,s.printLine)("green"),(0,s.printMirror)({pkgPath:a},"green","grey"),(0,s.printLine)("green"),e.next=8,p.default.readJson(a);case 8:n=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),v("handleString",e.t0,"readJson failed");case 14:return e.abrupt("return",x(n,t));case 15:case"end":return e.stop()}},e,null,[[2,11]])}))).apply(this,arguments)}function x(e,r){var t;return!1===e.hasOwnProperty(r)&&v("handleObject"),Object.entries(e).map(function(e){var n=(0,a.default)(e,2),u=n[0],i=n[1];u===r&&(t=i,(0,s.printMirror)({val:i},"blue","grey"))}),(0,s.printLine)("blue"),(0,s.printMirror)({propValue:t},"blue","grey"),(0,s.printLine)("blue"),t}function v(e,r,t){(0,s.printLine)("red"),c.default.undefined(e)||d("".concat(f.default.red(e))),c.default.undefined(t)||((0,s.printLine)({character:".",color:"grey"}),d("".concat(f.default.grey(t))),(0,s.printLine)({character:".",color:"grey"})),c.default.undefined(r)||d("".concat(f.default.red(r))),(0,s.printLine)("red")}},function(e,r){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},function(e,r){e.exports=require("@babel/runtime/regenerator")},function(e,r){e.exports=require("@babel/runtime/helpers/slicedToArray")},function(e,r){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("@sindresorhus/is")},function(e,r){e.exports=require("pkg-up")},function(e,r){e.exports=require("fs-extra")},function(e,r){e.exports=require("chalk")},function(e,r){e.exports=require("tacker")}]));
//# sourceMappingURL=main.js.map