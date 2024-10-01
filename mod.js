// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,c,f,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,o;for(e=[],o=0,n=x.exec(r);n;)(t=r.slice(o,x.lastIndex-n[0].length)).length&&e.push(t),e.push(O(n)),o=x.lastIndex,n=x.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function F(r){var t,e;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var T,k=Object.prototype,I=k.toString,V=k.__defineGetter__,N=k.__defineSetter__,P=k.__lookupGetter__,$=k.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(P.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=k,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,t,e.get),a&&N&&N.call(r,t,e.set),r};var C=T;function B(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var R=/./;function G(r){return"boolean"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return L&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function X(r,t){return null!=r&&W.call(r,t)}var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var z=Z()?function(r){var t,e,n;if(null==r)return M.call(r);e=r[q],t=X(r,q);try{r[q]=void 0}catch(t){return M.call(r)}return n=M.call(r),t?r[q]=e:delete r[q],n}:function(r){return M.call(r)},D=Boolean,H=Boolean.prototype.toString;var J=Z();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return G(r)||K(r)}B(Q,"isPrimitive",G),B(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof er?er:null,or="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!G(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(rr)return rr;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=ir.document&&ir.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;B(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var t,e,n,o;if(("Object"===(e=z(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=fr.exec(n.toString()))return t[1]}return sr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}B(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!lr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(sr));var yr="function"==typeof R||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?pr(r).toLowerCase():t};function vr(r){return"function"===yr(r)}function dr(r){return"number"==typeof r}var gr=Number,br=gr.prototype.toString;var hr=Z();function wr(r){return"object"==typeof r&&(r instanceof gr||(hr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function mr(r){return dr(r)||wr(r)}B(mr,"isPrimitive",dr),B(mr,"isObject",wr);var jr="function"==typeof Y&&"symbol"==typeof Y("foo")&&X(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=vr(Object.getPrototypeOf)?Er:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=Ar;var xr=Object.prototype;function Or(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(t=function(r){return null==r?null:(r=_r(r),Sr(r))}(r),!t||!X(r,"constructor")&&X(t,"constructor")&&vr(t.constructor)&&"[object Function]"===z(t.constructor)&&X(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===xr||function(r){var t;for(t in r)if(!X(r,t))return!1;return!0}(r)))}function Ur(r,t,e){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!vr(u.next))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(t))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Or(t)?(X(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return B(o={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:dr(e.value)?t(e.value):n.invalid,done:!1}})),B(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&vr(r[jr])&&B(o,jr,(function(){return Ur(r[jr](),t,n)})),o}var Fr=Number.POSITIVE_INFINITY,Tr=gr.NEGATIVE_INFINITY;function kr(r){return r!=r}var Ir="function"==typeof Uint32Array;var Vr="function"==typeof Uint32Array?Uint32Array:null;var Nr,Pr="function"==typeof Uint32Array?Uint32Array:void 0;Nr=function(){var r,t,e;if("function"!=typeof Vr)return!1;try{t=new Vr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Ir&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var $r=Nr,Cr="function"==typeof Float64Array;var Br="function"==typeof Float64Array?Float64Array:null;var Rr,Gr="function"==typeof Float64Array?Float64Array:void 0;Rr=function(){var r,t,e;if("function"!=typeof Br)return!1;try{t=new Br([1,3.14,-3.14,NaN]),e=t,r=(Cr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr=Rr,Zr="function"==typeof Uint8Array;var Mr="function"==typeof Uint8Array?Uint8Array:null;var Wr,Xr="function"==typeof Uint8Array?Uint8Array:void 0;Wr=function(){var r,t,e;if("function"!=typeof Mr)return!1;try{t=new Mr(t=[1,3.14,-3.14,256,257]),e=t,r=(Zr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr=Wr,qr="function"==typeof Uint16Array;var zr="function"==typeof Uint16Array?Uint16Array:null;var Dr,Hr="function"==typeof Uint16Array?Uint16Array:void 0;Dr=function(){var r,t,e;if("function"!=typeof zr)return!1;try{t=new zr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(qr&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Jr,Kr={uint16:Dr,uint8:Yr};(Jr=new Kr.uint16(1))[0]=4660;var Qr=52===new Kr.uint8(Jr.buffer)[0],rt=!0===Qr?1:0,tt=new Lr(1),et=new $r(tt.buffer);function nt(r){return tt[0]=r,et[rt]}var ot=!0===Qr?1:0,it=new Lr(1),at=new $r(it.buffer);function ut(r,t){return it[0]=r,at[ot]=t>>>0,it[0]}var ct=1023;var ft=.6931471803691238,lt=1.9082149292705877e-10,st=.41421356237309503,pt=-.2928932188134525,yt=1.862645149230957e-9,vt=5551115123125783e-32,dt=9007199254740992,gt=.6666666666666666;var bt=Math.sqrt,ht=.6931471805599453;var wt=.6931471803691238,mt=1.9082149292705877e-10,jt=0x40000000000000,At=.3333333333333333,_t=1048575,Et=2146435072,St=1048576,xt=1072693248;function Ot(r){var t,e,n,o,i,a,u,c,f,l,s,p;return 0===r?Tr:kr(r)||r<0?NaN:(i=0,(e=nt(r))<St&&(i-=54,e=nt(r*=jt)),e>=Et?r+r:(i+=(e>>20)-ct|0,i+=(c=(e&=_t)+614244&1048576|0)>>20|0,u=(r=ut(r,e|c^xt))-1,(_t&2+e)<3?0===u?0===i?0:i*wt+i*mt:(a=u*u*(.5-At*u),0===i?u-a:i*wt-(a-i*mt-u)):(c=e-398458|0,f=440401-e|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+o,(c|=f)>0?(t=.5*u*u,0===i?u-(t-l*(t+a)):i*wt-(t-(l*(t+a)+i*mt)-u)):0===i?u-l*(u-a):i*wt-(l*(u-a)-i*mt-u))))}var Ut=1/(1<<28),Ft=1<<28;function Tt(r){var t,e,n;return kr(r)||function(r){return r===Fr||r===Tr}(r)?r:(r<0&&(r=-r,t=!0),n=r<Ut?r:r>Ft?Ot(r)+ht:r>2?Ot(2*r+1/(bt(r*r+1)+r)):function(r){var t,e,n,o,i,a,u,c,f,l;if(r<-1||kr(r))return NaN;if(-1===r)return Tr;if(r===Fr)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<st){if(n<yt)return n<vt?r:r-r*r*.5;r>pt&&(l=0,o=r,e=1)}return 0!==l&&(n<dt?(i=(l=((e=nt(f=1+r))>>20)-ct)>0?1-(f-r):r-(f-1),i/=f):(l=((e=nt(f=r))>>20)-ct,i=0),(e&=1048575)<434334?f=ut(f,1072693248|e):(l+=1,f=ut(f,1071644672|e),e=1048576-e>>2),o=f-1),t=.5*o*o,0===e?0===o?l*ft+(i+=l*lt):l*ft-((c=t*(1-gt*o))-(l*lt+i)-o):(c=(u=(a=o/(2+o))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?o-(t-a*(t+c)):l*ft-(t-(a*(t+c)+(l*lt+i))-o))}(r+(e=r*r)/(1+bt(1+e))),t?-n:n)}function kt(r){return Ur(r,Tt)}export{kt as default};
//# sourceMappingURL=mod.js.map
