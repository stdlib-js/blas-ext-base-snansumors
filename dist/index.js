"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(A,f){
var l=require('@stdlib/number-float64-base-to-float32/dist'),o=require('@stdlib/math-base-assert-is-nanf/dist');function x(e,r,s,j){var a,i,n;if(a=0,e<=0)return a;if(i=j,s===0)return o(r[i])?a:e*r[i];for(n=0;n<e;n++)o(r[i])===!1&&(a=l(a+r[i])),i+=s;return a}f.exports=x
});var m=u(function(B,q){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=t();function E(e,r,s){return _(e,r,s,R(e,s))}q.exports=E
});var y=u(function(C,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=m(),b=t();O(c,"ndarray",b);p.exports=c
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=y(),v,d=h(g(__dirname,"./native.js"));k(d)?v=w:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
