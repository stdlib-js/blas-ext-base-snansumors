"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=u(function(A,f){
var l=require('@stdlib/number-float64-base-to-float32/dist'),o=require('@stdlib/math-base-assert-is-nanf/dist');function x(e,r,a,j){var i,s,n;if(i=0,e<=0)return i;if(s=j,a===0)return o(r[s])?i:e*r[s];for(n=0;n<e;n++)o(r[s])===!1&&(i=l(i+r[s])),s+=a;return i}f.exports=x
});var m=u(function(B,q){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=t();function E(e,r,a){return _(e,r,a,R(e,a))}q.exports=E
});var y=u(function(C,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=m(),b=t();O(c,"ndarray",b);p.exports=c
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=y(),v,d=h(g(__dirname,"./native.js"));k(d)?v=w:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
