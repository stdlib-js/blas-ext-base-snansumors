"use strict";var t=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var q=t(function(x,f){
var R=require('@stdlib/number-float64-base-to-float32/dist'),o=require('@stdlib/math-base-assert-is-nanf/dist');function T(a,r,u){var i,e,n;if(i=0,a<=0)return i;if(a===1||u===0)return o(r[0])?i:r[0];for(u<0?e=(1-a)*u:e=0,n=0;n<a;n++)o(r[e])===!1&&(i=R(i+r[e])),e+=u;return i}f.exports=T
});var c=t(function(z,m){
var _=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/math-base-assert-is-nanf/dist');function E(a,r,u,i){var e,n,s;if(e=0,a<=0)return e;if(a===1||u===0)return l(r[i])?e:r[i];for(n=i,s=0;s<a;s++)l(r[n])===!1&&(e=_(e+r[n])),n+=u;return e}m.exports=E
});var j=t(function(A,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),b=c();O(p,"ndarray",b);y.exports=p
});var d=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=j(),v,F=g(d(__dirname,"./native.js"));h(F)?v=k:v=F;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
