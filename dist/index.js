"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(w,f){
var j=require('@stdlib/number-float64-base-to-float32/dist'),v=require('@stdlib/math-base-assert-is-nanf/dist');function x(e,r,s,d){var a,i,n;if(a=0,e<=0)return a;if(i=d,s===0)return v(r[i])?a:e*r[i];for(n=0;n<e;n++)v(r[i])===!1&&(a=j(a+r[i])),i+=s;return a}f.exports=x
});var m=u(function(z,q){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=t();function E(e,r,s){return _(e,r,s,R(e,s))}q.exports=E
});var p=u(function(A,l){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=m(),O=t();F(c,"ndarray",O);l.exports=c
});var T=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),o,y=b(T(__dirname,"./native.js"));g(y)?o=h:o=y;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
