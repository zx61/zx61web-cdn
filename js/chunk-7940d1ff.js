import{bZ as ve,a$ as U,aN as Ve,b0 as mr,b_ as Pt,b1 as hr,aT as ne,aU as ye,b$ as br,aS as me,aP as wr,c0 as We,c1 as ce,aV as Ar,c2 as J,aR as et,a0 as It,a1 as Fe,b5 as Mt,bm as $r,aK as Oe,ae as Lt,D as W,a9 as E,e as ae,aB as Nt,Q as De,G as de,aL as xr,ao as Rt,C as Ct,bp as Bt,c3 as Ue,o as _e,c as Vt,a3 as fe,n as X,u as _,ab as Wt,$ as Dt,a7 as pe,c4 as Ee,P as jr,J as Ut,M as zt,aD as Tr,bh as Fr,h as ge,F as Or,ai as Gt,am as _r,ag as Er,c5 as Sr,N as tt,bL as $e,w as xe,s as qr,y as Pr,aa as rt,k as Ir,t as nt,i as at,b as it,c6 as Mr,av as Lr,bq as Nr}from"./chunk-5adf69d9.js";var Rr=ve(U,"WeakMap");const Se=Rr;var ot=Object.create,Cr=function(){function t(){}return function(e){if(!Ve(e))return{};if(ot)return ot(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const Br=Cr;function Vr(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function Wr(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}function he(t,e,r,n){var a=!r;r||(r={});for(var o=-1,i=e.length;++o<i;){var s=e[o],f=n?n(r[s],t[s],s,r,t):void 0;f===void 0&&(f=t[s]),a?mr(r,s,f):Pt(r,s,f)}return r}var Dr=9007199254740991;function Kt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Dr}function Yt(t){return t!=null&&Kt(t.length)&&!hr(t)}var Ur=Object.prototype;function ze(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Ur;return t===r}function zr(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Gr="[object Arguments]";function st(t){return ne(t)&&ye(t)==Gr}var Zt=Object.prototype,Kr=Zt.hasOwnProperty,Yr=Zt.propertyIsEnumerable,Zr=st(function(){return arguments}())?st:function(t){return ne(t)&&Kr.call(t,"callee")&&!Yr.call(t,"callee")};const Jr=Zr;function Hr(){return!1}var Jt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ft=Jt&&typeof module=="object"&&module&&!module.nodeType&&module,Qr=ft&&ft.exports===Jt,ut=Qr?U.Buffer:void 0,Xr=ut?ut.isBuffer:void 0,kr=Xr||Hr;const Ht=kr;var en="[object Arguments]",tn="[object Array]",rn="[object Boolean]",nn="[object Date]",an="[object Error]",on="[object Function]",sn="[object Map]",fn="[object Number]",un="[object Object]",ln="[object RegExp]",cn="[object Set]",dn="[object String]",pn="[object WeakMap]",gn="[object ArrayBuffer]",vn="[object DataView]",yn="[object Float32Array]",mn="[object Float64Array]",hn="[object Int8Array]",bn="[object Int16Array]",wn="[object Int32Array]",An="[object Uint8Array]",$n="[object Uint8ClampedArray]",xn="[object Uint16Array]",jn="[object Uint32Array]",j={};j[yn]=j[mn]=j[hn]=j[bn]=j[wn]=j[An]=j[$n]=j[xn]=j[jn]=!0;j[en]=j[tn]=j[gn]=j[rn]=j[vn]=j[nn]=j[an]=j[on]=j[sn]=j[fn]=j[un]=j[ln]=j[cn]=j[dn]=j[pn]=!1;function Tn(t){return ne(t)&&Kt(t.length)&&!!j[ye(t)]}function Ge(t){return function(e){return t(e)}}var Qt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ee=Qt&&typeof module=="object"&&module&&!module.nodeType&&module,Fn=ee&&ee.exports===Qt,je=Fn&&br.process,On=function(){try{var t=ee&&ee.require&&ee.require("util").types;return t||je&&je.binding&&je.binding("util")}catch{}}();const Z=On;var lt=Z&&Z.isTypedArray,_n=lt?Ge(lt):Tn;const En=_n;var Sn=Object.prototype,qn=Sn.hasOwnProperty;function Xt(t,e){var r=me(t),n=!r&&Jr(t),a=!r&&!n&&Ht(t),o=!r&&!n&&!a&&En(t),i=r||n||a||o,s=i?zr(t.length,String):[],f=s.length;for(var g in t)(e||qn.call(t,g))&&!(i&&(g=="length"||a&&(g=="offset"||g=="parent")||o&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||wr(g,f)))&&s.push(g);return s}function kt(t,e){return function(r){return t(e(r))}}var Pn=kt(Object.keys,Object);const In=Pn;var Mn=Object.prototype,Ln=Mn.hasOwnProperty;function Nn(t){if(!ze(t))return In(t);var e=[];for(var r in Object(t))Ln.call(t,r)&&r!="constructor"&&e.push(r);return e}function Ke(t){return Yt(t)?Xt(t):Nn(t)}function Rn(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Cn=Object.prototype,Bn=Cn.hasOwnProperty;function Vn(t){if(!Ve(t))return Rn(t);var e=ze(t),r=[];for(var n in t)n=="constructor"&&(e||!Bn.call(t,n))||r.push(n);return r}function Ye(t){return Yt(t)?Xt(t,!0):Vn(t)}function er(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t}var Wn=kt(Object.getPrototypeOf,Object);const tr=Wn;function qe(){if(!arguments.length)return[];var t=arguments[0];return me(t)?t:[t]}function Dn(){this.__data__=new We,this.size=0}function Un(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function zn(t){return this.__data__.get(t)}function Gn(t){return this.__data__.has(t)}var Kn=200;function Yn(t,e){var r=this.__data__;if(r instanceof We){var n=r.__data__;if(!ce||n.length<Kn-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Ar(n)}return r.set(t,e),this.size=r.size,this}function H(t){var e=this.__data__=new We(t);this.size=e.size}H.prototype.clear=Dn;H.prototype.delete=Un;H.prototype.get=zn;H.prototype.has=Gn;H.prototype.set=Yn;function Zn(t,e){return t&&he(e,Ke(e),t)}function Jn(t,e){return t&&he(e,Ye(e),t)}var rr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ct=rr&&typeof module=="object"&&module&&!module.nodeType&&module,Hn=ct&&ct.exports===rr,dt=Hn?U.Buffer:void 0,pt=dt?dt.allocUnsafe:void 0;function Qn(t,e){if(e)return t.slice();var r=t.length,n=pt?pt(r):new t.constructor(r);return t.copy(n),n}function Xn(t,e){for(var r=-1,n=t==null?0:t.length,a=0,o=[];++r<n;){var i=t[r];e(i,r,t)&&(o[a++]=i)}return o}function nr(){return[]}var kn=Object.prototype,ea=kn.propertyIsEnumerable,gt=Object.getOwnPropertySymbols,ta=gt?function(t){return t==null?[]:(t=Object(t),Xn(gt(t),function(e){return ea.call(t,e)}))}:nr;const Ze=ta;function ra(t,e){return he(t,Ze(t),e)}var na=Object.getOwnPropertySymbols,aa=na?function(t){for(var e=[];t;)er(e,Ze(t)),t=tr(t);return e}:nr;const ar=aa;function ia(t,e){return he(t,ar(t),e)}function ir(t,e,r){var n=e(t);return me(t)?n:er(n,r(t))}function oa(t){return ir(t,Ke,Ze)}function sa(t){return ir(t,Ye,ar)}var fa=ve(U,"DataView");const Pe=fa;var ua=ve(U,"Promise");const Ie=ua;var la=ve(U,"Set");const Me=la;var vt="[object Map]",ca="[object Object]",yt="[object Promise]",mt="[object Set]",ht="[object WeakMap]",bt="[object DataView]",da=J(Pe),pa=J(ce),ga=J(Ie),va=J(Me),ya=J(Se),V=ye;(Pe&&V(new Pe(new ArrayBuffer(1)))!=bt||ce&&V(new ce)!=vt||Ie&&V(Ie.resolve())!=yt||Me&&V(new Me)!=mt||Se&&V(new Se)!=ht)&&(V=function(t){var e=ye(t),r=e==ca?t.constructor:void 0,n=r?J(r):"";if(n)switch(n){case da:return bt;case pa:return vt;case ga:return yt;case va:return mt;case ya:return ht}return e});const Je=V;var ma=Object.prototype,ha=ma.hasOwnProperty;function ba(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&ha.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var wa=U.Uint8Array;const wt=wa;function He(t){var e=new t.constructor(t.byteLength);return new wt(e).set(new wt(t)),e}function Aa(t,e){var r=e?He(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var $a=/\w*$/;function xa(t){var e=new t.constructor(t.source,$a.exec(t));return e.lastIndex=t.lastIndex,e}var At=et?et.prototype:void 0,$t=At?At.valueOf:void 0;function ja(t){return $t?Object($t.call(t)):{}}function Ta(t,e){var r=e?He(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Fa="[object Boolean]",Oa="[object Date]",_a="[object Map]",Ea="[object Number]",Sa="[object RegExp]",qa="[object Set]",Pa="[object String]",Ia="[object Symbol]",Ma="[object ArrayBuffer]",La="[object DataView]",Na="[object Float32Array]",Ra="[object Float64Array]",Ca="[object Int8Array]",Ba="[object Int16Array]",Va="[object Int32Array]",Wa="[object Uint8Array]",Da="[object Uint8ClampedArray]",Ua="[object Uint16Array]",za="[object Uint32Array]";function Ga(t,e,r){var n=t.constructor;switch(e){case Ma:return He(t);case Fa:case Oa:return new n(+t);case La:return Aa(t,r);case Na:case Ra:case Ca:case Ba:case Va:case Wa:case Da:case Ua:case za:return Ta(t,r);case _a:return new n;case Ea:case Pa:return new n(t);case Sa:return xa(t);case qa:return new n;case Ia:return ja(t)}}function Ka(t){return typeof t.constructor=="function"&&!ze(t)?Br(tr(t)):{}}var Ya="[object Map]";function Za(t){return ne(t)&&Je(t)==Ya}var xt=Z&&Z.isMap,Ja=xt?Ge(xt):Za;const Ha=Ja;var Qa="[object Set]";function Xa(t){return ne(t)&&Je(t)==Qa}var jt=Z&&Z.isSet,ka=jt?Ge(jt):Xa;const ei=ka;var ti=1,ri=2,ni=4,or="[object Arguments]",ai="[object Array]",ii="[object Boolean]",oi="[object Date]",si="[object Error]",sr="[object Function]",fi="[object GeneratorFunction]",ui="[object Map]",li="[object Number]",fr="[object Object]",ci="[object RegExp]",di="[object Set]",pi="[object String]",gi="[object Symbol]",vi="[object WeakMap]",yi="[object ArrayBuffer]",mi="[object DataView]",hi="[object Float32Array]",bi="[object Float64Array]",wi="[object Int8Array]",Ai="[object Int16Array]",$i="[object Int32Array]",xi="[object Uint8Array]",ji="[object Uint8ClampedArray]",Ti="[object Uint16Array]",Fi="[object Uint32Array]",x={};x[or]=x[ai]=x[yi]=x[mi]=x[ii]=x[oi]=x[hi]=x[bi]=x[wi]=x[Ai]=x[$i]=x[ui]=x[li]=x[fr]=x[ci]=x[di]=x[pi]=x[gi]=x[xi]=x[ji]=x[Ti]=x[Fi]=!0;x[si]=x[sr]=x[vi]=!1;function ue(t,e,r,n,a,o){var i,s=e&ti,f=e&ri,g=e&ni;if(r&&(i=a?r(t,n,a,o):r(t)),i!==void 0)return i;if(!Ve(t))return t;var d=me(t);if(d){if(i=ba(t),!s)return Vr(t,i)}else{var v=Je(t),w=v==sr||v==fi;if(Ht(t))return Qn(t,s);if(v==fr||v==or||w&&!a){if(i=f||w?{}:Ka(t),!s)return f?ia(t,Jn(i,t)):ra(t,Zn(i,t))}else{if(!x[v])return a?t:{};i=Ga(t,v,s)}}o||(o=new H);var F=o.get(t);if(F)return F;o.set(t,i),ei(t)?t.forEach(function(y){i.add(ue(y,e,r,y,t,o))}):Ha(t)&&t.forEach(function(y,u){i.set(u,ue(y,e,r,u,t,o))});var O=g?f?sa:oa:f?Ye:Ke,c=d?void 0:O(t);return Wr(c||t,function(y,u){c&&(u=y,y=t[u]),Pt(i,u,ue(y,e,r,u,t,o))}),i}var Oi=4;function Tt(t){return ue(t,Oi)}const _i=It({model:Object,rules:{type:Fe(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:Mt},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),Ei={validate:(t,e,r)=>($r(t)||Oe(t))&&Lt(e)&&Oe(r)};function Si(){const t=W([]),e=E(()=>{if(!t.value.length)return"0";const o=Math.max(...t.value);return o?`${o}px`:""});function r(o){const i=t.value.indexOf(o);return i===-1&&e.value,i}function n(o,i){if(o&&i){const s=r(i);t.value.splice(s,1,o)}else o&&t.value.push(o)}function a(o){const i=r(o);i>-1&&t.value.splice(i,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:a}}const oe=(t,e)=>{const r=qe(e);return r.length>0?t.filter(n=>n.prop&&r.includes(n.prop)):t},qi="ElForm",Pi=ae({name:qi}),Ii=ae({...Pi,props:_i,emits:Ei,setup(t,{expose:e,emit:r}){const n=t,a=[],o=Nt(),i=De("form"),s=E(()=>{const{labelPosition:m,inline:l}=n;return[i.b(),i.m(o.value||"default"),{[i.m(`label-${m}`)]:m,[i.m("inline")]:l}]}),f=m=>{a.push(m)},g=m=>{m.prop&&a.splice(a.indexOf(m),1)},d=(m=[])=>{n.model&&oe(a,m).forEach(l=>l.resetField())},v=(m=[])=>{oe(a,m).forEach(l=>l.clearValidate())},w=E(()=>!!n.model),F=m=>{if(a.length===0)return[];const l=oe(a,m);return l.length?l:[]},O=async m=>y(void 0,m),c=async(m=[])=>{if(!w.value)return!1;const l=F(m);if(l.length===0)return!0;let b={};for(const $ of l)try{await $.validate("")}catch(T){b={...b,...T}}return Object.keys(b).length===0?!0:Promise.reject(b)},y=async(m=[],l)=>{const b=!Dt(l);try{const $=await c(m);return $===!0&&(l==null||l($)),$}catch($){if($ instanceof Error)throw $;const T=$;return n.scrollToError&&u(Object.keys(T)[0]),l==null||l(!1,T),b&&Promise.reject(T)}},u=m=>{var l;const b=oe(a,m)[0];b&&((l=b.$el)==null||l.scrollIntoView())};return de(()=>n.rules,()=>{n.validateOnRuleChange&&O().catch(m=>xr())},{deep:!0}),Rt(Ue,Ct({...Bt(n),emit:r,resetFields:d,clearValidate:v,validateField:y,addField:f,removeField:g,...Si()})),e({validate:O,validateField:y,resetFields:d,clearValidate:v,scrollToField:u}),(m,l)=>(_e(),Vt("form",{class:X(_(s))},[fe(m.$slots,"default")],2))}});var Mi=Wt(Ii,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function D(){return D=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},D.apply(this,arguments)}function Li(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,re(t,e)}function Le(t){return Le=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Le(t)}function re(t,e){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},re(t,e)}function Ni(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function le(t,e,r){return Ni()?le=Reflect.construct.bind():le=function(a,o,i){var s=[null];s.push.apply(s,o);var f=Function.bind.apply(a,s),g=new f;return i&&re(g,i.prototype),g},le.apply(null,arguments)}function Ri(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function Ne(t){var e=typeof Map=="function"?new Map:void 0;return Ne=function(n){if(n===null||!Ri(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,a)}function a(){return le(n,arguments,Le(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),re(a,n)},Ne(t)}var Ci=/%[sdj%]/g,Bi=function(){};typeof process<"u"&&process.env;function Re(t){if(!t||!t.length)return null;var e={};return t.forEach(function(r){var n=r.field;e[n]=e[n]||[],e[n].push(r)}),e}function M(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var a=0,o=r.length;if(typeof t=="function")return t.apply(null,r);if(typeof t=="string"){var i=t.replace(Ci,function(s){if(s==="%%")return"%";if(a>=o)return s;switch(s){case"%s":return String(r[a++]);case"%d":return Number(r[a++]);case"%j":try{return JSON.stringify(r[a++])}catch{return"[Circular]"}break;default:return s}});return i}return t}function Vi(t){return t==="string"||t==="url"||t==="hex"||t==="email"||t==="date"||t==="pattern"}function S(t,e){return!!(t==null||e==="array"&&Array.isArray(t)&&!t.length||Vi(e)&&typeof t=="string"&&!t)}function Wi(t,e,r){var n=[],a=0,o=t.length;function i(s){n.push.apply(n,s||[]),a++,a===o&&r(n)}t.forEach(function(s){e(s,i)})}function Ft(t,e,r){var n=0,a=t.length;function o(i){if(i&&i.length){r(i);return}var s=n;n=n+1,s<a?e(t[s],o):r([])}o([])}function Di(t){var e=[];return Object.keys(t).forEach(function(r){e.push.apply(e,t[r]||[])}),e}var Ot=function(t){Li(e,t);function e(r,n){var a;return a=t.call(this,"Async Validation Error")||this,a.errors=r,a.fields=n,a}return e}(Ne(Error));function Ui(t,e,r,n,a){if(e.first){var o=new Promise(function(w,F){var O=function(u){return n(u),u.length?F(new Ot(u,Re(u))):w(a)},c=Di(t);Ft(c,r,O)});return o.catch(function(w){return w}),o}var i=e.firstFields===!0?Object.keys(t):e.firstFields||[],s=Object.keys(t),f=s.length,g=0,d=[],v=new Promise(function(w,F){var O=function(y){if(d.push.apply(d,y),g++,g===f)return n(d),d.length?F(new Ot(d,Re(d))):w(a)};s.length||(n(d),w(a)),s.forEach(function(c){var y=t[c];i.indexOf(c)!==-1?Ft(y,r,O):Wi(y,r,O)})});return v.catch(function(w){return w}),v}function zi(t){return!!(t&&t.message!==void 0)}function Gi(t,e){for(var r=t,n=0;n<e.length;n++){if(r==null)return r;r=r[e[n]]}return r}function _t(t,e){return function(r){var n;return t.fullFields?n=Gi(e,t.fullFields):n=e[r.field||t.fullField],zi(r)?(r.field=r.field||t.fullField,r.fieldValue=n,r):{message:typeof r=="function"?r():r,fieldValue:n,field:r.field||t.fullField}}}function Et(t,e){if(e){for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];typeof n=="object"&&typeof t[r]=="object"?t[r]=D({},t[r],n):t[r]=n}}return t}var ur=function(e,r,n,a,o,i){e.required&&(!n.hasOwnProperty(e.field)||S(r,i||e.type))&&a.push(M(o.messages.required,e.fullField))},Ki=function(e,r,n,a,o){(/^\s+$/.test(r)||r==="")&&a.push(M(o.messages.whitespace,e.fullField))},se,Yi=function(){if(se)return se;var t="[a-fA-F\\d:]",e=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+t+")|(?<="+t+")(?=\\s|$))":""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",a=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+r+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+r+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+r+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+r+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+r+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+r+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+r+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+r+"$)|(?:^"+a+"$)"),i=new RegExp("^"+r+"$"),s=new RegExp("^"+a+"$"),f=function(b){return b&&b.exact?o:new RegExp("(?:"+e(b)+r+e(b)+")|(?:"+e(b)+a+e(b)+")","g")};f.v4=function(l){return l&&l.exact?i:new RegExp(""+e(l)+r+e(l),"g")},f.v6=function(l){return l&&l.exact?s:new RegExp(""+e(l)+a+e(l),"g")};var g="(?:(?:[a-z]+:)?//)",d="(?:\\S+(?::\\S*)?@)?",v=f.v4().source,w=f.v6().source,F="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",O="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",c="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",y="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',m="(?:"+g+"|www\\.)"+d+"(?:localhost|"+v+"|"+w+"|"+F+O+c+")"+y+u;return se=new RegExp("(?:^"+m+"$)","i"),se},St={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},k={integer:function(e){return k.number(e)&&parseInt(e,10)===e},float:function(e){return k.number(e)&&!k.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!k.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(St.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Yi())},hex:function(e){return typeof e=="string"&&!!e.match(St.hex)}},Zi=function(e,r,n,a,o){if(e.required&&r===void 0){ur(e,r,n,a,o);return}var i=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;i.indexOf(s)>-1?k[s](r)||a.push(M(o.messages.types[s],e.fullField,e.type)):s&&typeof r!==e.type&&a.push(M(o.messages.types[s],e.fullField,e.type))},Ji=function(e,r,n,a,o){var i=typeof e.len=="number",s=typeof e.min=="number",f=typeof e.max=="number",g=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=r,v=null,w=typeof r=="number",F=typeof r=="string",O=Array.isArray(r);if(w?v="number":F?v="string":O&&(v="array"),!v)return!1;O&&(d=r.length),F&&(d=r.replace(g,"_").length),i?d!==e.len&&a.push(M(o.messages[v].len,e.fullField,e.len)):s&&!f&&d<e.min?a.push(M(o.messages[v].min,e.fullField,e.min)):f&&!s&&d>e.max?a.push(M(o.messages[v].max,e.fullField,e.max)):s&&f&&(d<e.min||d>e.max)&&a.push(M(o.messages[v].range,e.fullField,e.min,e.max))},Y="enum",Hi=function(e,r,n,a,o){e[Y]=Array.isArray(e[Y])?e[Y]:[],e[Y].indexOf(r)===-1&&a.push(M(o.messages[Y],e.fullField,e[Y].join(", ")))},Qi=function(e,r,n,a,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||a.push(M(o.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var i=new RegExp(e.pattern);i.test(r)||a.push(M(o.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},h={required:ur,whitespace:Ki,type:Zi,range:Ji,enum:Hi,pattern:Qi},Xi=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r,"string")&&!e.required)return n();h.required(e,r,a,i,o,"string"),S(r,"string")||(h.type(e,r,a,i,o),h.range(e,r,a,i,o),h.pattern(e,r,a,i,o),e.whitespace===!0&&h.whitespace(e,r,a,i,o))}n(i)},ki=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,a,i,o),r!==void 0&&h.type(e,r,a,i,o)}n(i)},eo=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(r===""&&(r=void 0),S(r)&&!e.required)return n();h.required(e,r,a,i,o),r!==void 0&&(h.type(e,r,a,i,o),h.range(e,r,a,i,o))}n(i)},to=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,a,i,o),r!==void 0&&h.type(e,r,a,i,o)}n(i)},ro=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,a,i,o),S(r)||h.type(e,r,a,i,o)}n(i)},no=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,a,i,o),r!==void 0&&(h.type(e,r,a,i,o),h.range(e,r,a,i,o))}n(i)},ao=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,a,i,o),r!==void 0&&(h.type(e,r,a,i,o),h.range(e,r,a,i,o))}n(i)},io=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(r==null&&!e.required)return n();h.required(e,r,a,i,o,"array"),r!=null&&(h.type(e,r,a,i,o),h.range(e,r,a,i,o))}n(i)},oo=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,a,i,o),r!==void 0&&h.type(e,r,a,i,o)}n(i)},so="enum",fo=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,a,i,o),r!==void 0&&h[so](e,r,a,i,o)}n(i)},uo=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r,"string")&&!e.required)return n();h.required(e,r,a,i,o),S(r,"string")||h.pattern(e,r,a,i,o)}n(i)},lo=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r,"date")&&!e.required)return n();if(h.required(e,r,a,i,o),!S(r,"date")){var f;r instanceof Date?f=r:f=new Date(r),h.type(e,f,a,i,o),f&&h.range(e,f.getTime(),a,i,o)}}n(i)},co=function(e,r,n,a,o){var i=[],s=Array.isArray(r)?"array":typeof r;h.required(e,r,a,i,o,s),n(i)},Te=function(e,r,n,a,o){var i=e.type,s=[],f=e.required||!e.required&&a.hasOwnProperty(e.field);if(f){if(S(r,i)&&!e.required)return n();h.required(e,r,a,s,o,i),S(r,i)||h.type(e,r,a,s,o)}n(s)},po=function(e,r,n,a,o){var i=[],s=e.required||!e.required&&a.hasOwnProperty(e.field);if(s){if(S(r)&&!e.required)return n();h.required(e,r,a,i,o)}n(i)},te={string:Xi,method:ki,number:eo,boolean:to,regexp:ro,integer:no,float:ao,array:io,object:oo,enum:fo,pattern:uo,date:lo,url:Te,hex:Te,email:Te,required:co,any:po};function Ce(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Be=Ce(),ie=function(){function t(r){this.rules=null,this._messages=Be,this.define(r)}var e=t.prototype;return e.define=function(n){var a=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(o){var i=n[o];a.rules[o]=Array.isArray(i)?i:[i]})},e.messages=function(n){return n&&(this._messages=Et(Ce(),n)),this._messages},e.validate=function(n,a,o){var i=this;a===void 0&&(a={}),o===void 0&&(o=function(){});var s=n,f=a,g=o;if(typeof f=="function"&&(g=f,f={}),!this.rules||Object.keys(this.rules).length===0)return g&&g(null,s),Promise.resolve(s);function d(c){var y=[],u={};function m(b){if(Array.isArray(b)){var $;y=($=y).concat.apply($,b)}else y.push(b)}for(var l=0;l<c.length;l++)m(c[l]);y.length?(u=Re(y),g(y,u)):g(null,s)}if(f.messages){var v=this.messages();v===Be&&(v=Ce()),Et(v,f.messages),f.messages=v}else f.messages=this.messages();var w={},F=f.keys||Object.keys(this.rules);F.forEach(function(c){var y=i.rules[c],u=s[c];y.forEach(function(m){var l=m;typeof l.transform=="function"&&(s===n&&(s=D({},s)),u=s[c]=l.transform(u)),typeof l=="function"?l={validator:l}:l=D({},l),l.validator=i.getValidationMethod(l),l.validator&&(l.field=c,l.fullField=l.fullField||c,l.type=i.getType(l),w[c]=w[c]||[],w[c].push({rule:l,value:u,source:s,field:c}))})});var O={};return Ui(w,f,function(c,y){var u=c.rule,m=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");m=m&&(u.required||!u.required&&c.value),u.field=c.field;function l(T,N){return D({},N,{fullField:u.fullField+"."+T,fullFields:u.fullFields?[].concat(u.fullFields,[T]):[T]})}function b(T){T===void 0&&(T=[]);var N=Array.isArray(T)?T:[T];!f.suppressWarning&&N.length&&t.warning("async-validator:",N),N.length&&u.message!==void 0&&(N=[].concat(u.message));var I=N.map(_t(u,s));if(f.first&&I.length)return O[u.field]=1,y(I);if(!m)y(I);else{if(u.required&&!c.value)return u.message!==void 0?I=[].concat(u.message).map(_t(u,s)):f.error&&(I=[f.error(u,M(f.messages.required,u.field))]),y(I);var B={};u.defaultField&&Object.keys(c.value).map(function(R){B[R]=u.defaultField}),B=D({},B,c.rule.fields);var Q={};Object.keys(B).forEach(function(R){var L=B[R],be=Array.isArray(L)?L:[L];Q[R]=be.map(l.bind(null,R))});var z=new t(Q);z.messages(f.messages),c.rule.options&&(c.rule.options.messages=f.messages,c.rule.options.error=f.error),z.validate(c.value,c.rule.options||f,function(R){var L=[];I&&I.length&&L.push.apply(L,I),R&&R.length&&L.push.apply(L,R),y(L.length?L:null)})}}var $;if(u.asyncValidator)$=u.asyncValidator(u,c.value,b,c.source,f);else if(u.validator){try{$=u.validator(u,c.value,b,c.source,f)}catch(T){console.error==null,f.suppressValidatorError||setTimeout(function(){throw T},0),b(T.message)}$===!0?b():$===!1?b(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):$ instanceof Array?b($):$ instanceof Error&&b($.message)}$&&$.then&&$.then(function(){return b()},function(T){return b(T)})},function(c){d(c)},s)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!te.hasOwnProperty(n.type))throw new Error(M("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var a=Object.keys(n),o=a.indexOf("message");return o!==-1&&a.splice(o,1),a.length===1&&a[0]==="required"?te.required:te[this.getType(n)]||void 0},t}();ie.register=function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");te[e]=r};ie.warning=Bi;ie.messages=Be;ie.validators=te;const go=["","error","validating","success"],vo=It({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:Fe([String,Array])},required:{type:Boolean,default:void 0},rules:{type:Fe([Object,Array])},error:String,validateStatus:{type:String,values:go},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:Mt}}),qt="ElLabelWrap";var yo=ae({name:qt,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(t,{slots:e}){const r=pe(Ue,void 0),n=pe(Ee);n||jr(qt,"usage: <el-form-item><label-wrap /></el-form-item>");const a=De("form"),o=W(),i=W(0),s=()=>{var d;if((d=o.value)!=null&&d.firstElementChild){const v=window.getComputedStyle(o.value.firstElementChild).width;return Math.ceil(Number.parseFloat(v))}else return 0},f=(d="update")=>{Gt(()=>{e.default&&t.isAutoWidth&&(d==="update"?i.value=s():d==="remove"&&(r==null||r.deregisterLabelWidth(i.value)))})},g=()=>f("update");return Ut(()=>{g()}),zt(()=>{f("remove")}),Tr(()=>g()),de(i,(d,v)=>{t.updateAll&&(r==null||r.registerLabelWidth(d,v))}),Fr(E(()=>{var d,v;return(v=(d=o.value)==null?void 0:d.firstElementChild)!=null?v:null}),g),()=>{var d,v;if(!e)return null;const{isAutoWidth:w}=t;if(w){const F=r==null?void 0:r.autoLabelWidth,O=n==null?void 0:n.hasLabel,c={};if(O&&F&&F!=="auto"){const y=Math.max(0,Number.parseInt(F,10)-i.value),u=r.labelPosition==="left"?"marginRight":"marginLeft";y&&(c[u]=`${y}px`)}return ge("div",{ref:o,class:[a.be("item","label-wrap")],style:c},[(d=e.default)==null?void 0:d.call(e)])}else return ge(Or,{ref:o},[(v=e.default)==null?void 0:v.call(e)])}}});const mo=["role","aria-labelledby"],ho=ae({name:"ElFormItem"}),bo=ae({...ho,props:vo,setup(t,{expose:e}){const r=t,n=_r(),a=pe(Ue,void 0),o=pe(Ee,void 0),i=Nt(void 0,{formItem:!1}),s=De("form-item"),f=Er().value,g=W([]),d=W(""),v=Sr(d,100),w=W(""),F=W();let O,c=!1;const y=E(()=>{if((a==null?void 0:a.labelPosition)==="top")return{};const p=tt(r.labelWidth||(a==null?void 0:a.labelWidth)||"");return p?{width:p}:{}}),u=E(()=>{if((a==null?void 0:a.labelPosition)==="top"||a!=null&&a.inline)return{};if(!r.label&&!r.labelWidth&&B)return{};const p=tt(r.labelWidth||(a==null?void 0:a.labelWidth)||"");return!r.label&&!n.label?{marginLeft:p}:{}}),m=E(()=>[s.b(),s.m(i.value),s.is("error",d.value==="error"),s.is("validating",d.value==="validating"),s.is("success",d.value==="success"),s.is("required",be.value||r.required),s.is("no-asterisk",a==null?void 0:a.hideRequiredAsterisk),(a==null?void 0:a.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[s.m("feedback")]:a==null?void 0:a.statusIcon}]),l=E(()=>Lt(r.inlineMessage)?r.inlineMessage:(a==null?void 0:a.inlineMessage)||!1),b=E(()=>[s.e("error"),{[s.em("error","inline")]:l.value}]),$=E(()=>r.prop?Oe(r.prop)?r.prop:r.prop.join("."):""),T=E(()=>!!(r.label||n.label)),N=E(()=>r.for||g.value.length===1?g.value[0]:void 0),I=E(()=>!N.value&&T.value),B=!!o,Q=E(()=>{const p=a==null?void 0:a.model;if(!(!p||!r.prop))return $e(p,r.prop).value}),z=E(()=>{const{required:p}=r,A=[];r.rules&&A.push(...qe(r.rules));const P=a==null?void 0:a.rules;if(P&&r.prop){const q=$e(P,r.prop).value;q&&A.push(...qe(q))}if(p!==void 0){const q=A.map((C,K)=>[C,K]).filter(([C])=>Object.keys(C).includes("required"));if(q.length>0)for(const[C,K]of q)C.required!==p&&(A[K]={...C,required:p});else A.push({required:p})}return A}),R=E(()=>z.value.length>0),L=p=>z.value.filter(P=>!P.trigger||!p?!0:Array.isArray(P.trigger)?P.trigger.includes(p):P.trigger===p).map(({trigger:P,...q})=>q),be=E(()=>z.value.some(p=>p.required)),cr=E(()=>{var p;return v.value==="error"&&r.showMessage&&((p=a==null?void 0:a.showMessage)!=null?p:!0)}),Qe=E(()=>`${r.label||""}${(a==null?void 0:a.labelSuffix)||""}`),G=p=>{d.value=p},dr=p=>{var A,P;const{errors:q,fields:C}=p;G("error"),w.value=q?(P=(A=q==null?void 0:q[0])==null?void 0:A.message)!=null?P:`${r.prop} is required`:"",a==null||a.emit("validate",r.prop,!1,w.value)},pr=()=>{G("success"),a==null||a.emit("validate",r.prop,!0,"")},gr=async p=>{const A=$.value;return new ie({[A]:p}).validate({[A]:Q.value},{firstFields:!0}).then(()=>(pr(),!0)).catch(q=>(dr(q),Promise.reject(q)))},Xe=async(p,A)=>{if(c||!r.prop)return!1;const P=Dt(A);if(!R.value)return A==null||A(!1),!1;const q=L(p);return q.length===0?(A==null||A(!0),!0):(G("validating"),gr(q).then(()=>(A==null||A(!0),!0)).catch(C=>{const{fields:K}=C;return A==null||A(!1,K),P?!1:Promise.reject(K)}))},we=()=>{G(""),w.value="",c=!1},ke=async()=>{const p=a==null?void 0:a.model;if(!p||!r.prop)return;const A=$e(p,r.prop);c=!0,A.value=Tt(O),await Gt(),we(),c=!1},vr=p=>{g.value.includes(p)||g.value.push(p)},yr=p=>{g.value=g.value.filter(A=>A!==p)};de(()=>r.error,p=>{w.value=p||"",G(p?"error":"")},{immediate:!0}),de(()=>r.validateStatus,p=>G(p||""));const Ae=Ct({...Bt(r),$el:F,size:i,validateState:d,labelId:f,inputIds:g,isGroup:I,hasLabel:T,addInputId:vr,removeInputId:yr,resetField:ke,clearValidate:we,validate:Xe});return Rt(Ee,Ae),Ut(()=>{r.prop&&(a==null||a.addField(Ae),O=Tt(Q.value))}),zt(()=>{a==null||a.removeField(Ae)}),e({size:i,validateMessage:w,validateState:d,validate:Xe,clearValidate:we,resetField:ke}),(p,A)=>{var P;return _e(),Vt("div",{ref_key:"formItemRef",ref:F,class:X(_(m)),role:_(I)?"group":void 0,"aria-labelledby":_(I)?_(f):void 0},[ge(_(yo),{"is-auto-width":_(y).width==="auto","update-all":((P=_(a))==null?void 0:P.labelWidth)==="auto"},{default:xe(()=>[_(T)?(_e(),qr(Pr(_(N)?"label":"div"),{key:0,id:_(f),for:_(N),class:X(_(s).e("label")),style:rt(_(y))},{default:xe(()=>[fe(p.$slots,"label",{label:_(Qe)},()=>[Ir(nt(_(Qe)),1)])]),_:3},8,["id","for","class","style"])):at("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),it("div",{class:X(_(s).e("content")),style:rt(_(u))},[fe(p.$slots,"default"),ge(Mr,{name:`${_(s).namespace.value}-zoom-in-top`},{default:xe(()=>[_(cr)?fe(p.$slots,"error",{key:0,error:w.value},()=>[it("div",{class:X(_(b))},nt(w.value),3)]):at("v-if",!0)]),_:3},8,["name"])],6)],10,mo)}}});var lr=Wt(bo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const Ao=Lr(Mi,{FormItem:lr}),$o=Nr(lr);export{Ao as E,H as S,wt as U,$o as a,Jr as b,er as c,oa as d,Je as e,Ht as f,tr as g,En as h,Yt as i,Kt as j,Ke as k,he as l,Ye as m,Vr as n,Qn as o,Ta as p,Ka as q};
