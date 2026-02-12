import{O as pn,P as oe,R as qe,d as ma,v as mn,h as gn,e as Nt,S as bn,r as at,T as Mo,o as Fe,c as vt,b as yt,t as Ie,f as re,g as K,w as Y,F as Rt,l as Lt,j as Po,k as Ht,E as Fo,z as vn,_ as yn}from"./chunk-DumNPkiB.js";import{E as wn,a as kn}from"./chunk-xCeqlN58.js";import"./chunk-DCOt1Y1-.js";import"./chunk--clNN278.js";import{n as Oe,A as En,b as ye,a as zn,T as xn,c as Sn,C as An,u as Bn,d as Tn,f as jn,E as In,e as Un}from"./chunk-uLsikmwE.js";import{E as _n}from"./chunk-CvpxcwE2.js";import{E as Cn,a as $n}from"./chunk-DIE94-Aa.js";import{a as Nn,E as Rn}from"./chunk-xnyBsVKP.js";import{H as Er}from"./chunk-Co57Gtsr.js";import"./chunk-B-QNX2j5.js";import"./chunk-CPlpCXK6.js";import"./chunk-BB_Ol6Sd.js";import"./chunk-CiGKEyJT.js";import"./chunk-C1AEa5pm.js";import"./chunk-DSKVg-N-.js";import"./chunk-DwntrAUn.js";import"./chunk-TDtrdbi3.js";/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Zt(e){return e instanceof Uint8Array||e!=null&&typeof e=="object"&&e.constructor.name==="Uint8Array"}function Ut(...e){const t=n=>n,r=(n,i)=>s=>n(i(s)),o=e.map(n=>n.encode).reduceRight(r,t),a=e.map(n=>n.decode).reduce(r,t);return{encode:o,decode:a}}function ur(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(r=>{if(r<0||r>=e.length)throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${e.length})`);return e[r]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(r=>{if(typeof r!="string")throw new Error(`alphabet.decode: not string element=${r}`);const o=e.indexOf(r);if(o===-1)throw new Error(`Unknown letter: "${r}". Allowed: ${e}`);return o})}}}function dr(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let r of t)if(typeof r!="string")throw new Error(`join.encode: non-string input=${r}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function Ln(e,t="="){if(typeof t!="string")throw new Error("padding chr should be string");return{encode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of r)if(typeof o!="string")throw new Error(`padding.encode: non-string input=${o}`);for(;r.length*e%8;)r.push(t);return r},decode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let a of r)if(typeof a!="string")throw new Error(`padding.decode: non-string input=${a}`);let o=r.length;if(o*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;o>0&&r[o-1]===t;o--)if(!((o-1)*e%8))throw new Error("Invalid padding: string has too much padding");return r.slice(0,o)}}}function Hn(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Nr(e,t,r){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(r<2)throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let o=0;const a=[],n=Array.from(e);for(n.forEach(i=>{if(i<0||i>=t)throw new Error(`Wrong integer: ${i}`)});;){let i=0,s=!0;for(let l=o;l<n.length;l++){const c=n[l],d=t*i+c;if(!Number.isSafeInteger(d)||t*i/t!==i||d-c!==t*i)throw new Error("convertRadix: carry overflow");i=d%r;const u=Math.floor(d/r);if(n[l]=u,!Number.isSafeInteger(u)||u*r+i!==d)throw new Error("convertRadix: carry overflow");if(s)u?s=!1:o=l;else continue}if(a.push(i),s)break}for(let i=0;i<e.length-1&&e[i]===0;i++)a.push(0);return a.reverse()}const ga=(e,t)=>t?ga(t,e%t):e,Yt=(e,t)=>e+(t-ga(e,t));function Qt(e,t,r,o){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(r<=0||r>32)throw new Error(`convertRadix2: wrong to=${r}`);if(Yt(t,r)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${Yt(t,r)}`);let a=0,n=0;const i=2**r-1,s=[];for(const l of e){if(l>=2**t)throw new Error(`convertRadix2: invalid data word=${l} from=${t}`);if(a=a<<t|l,n+t>32)throw new Error(`convertRadix2: carry overflow pos=${n} from=${t}`);for(n+=t;n>=r;n-=r)s.push((a>>n-r&i)>>>0);a&=2**n-1}if(a=a<<r-n&i,!o&&n>=t)throw new Error("Excess padding");if(!o&&a)throw new Error(`Non-zero padding: ${a}`);return o&&n>0&&s.push(a>>>0),s}function ba(e){return{encode:t=>{if(!Zt(t))throw new Error("radix.encode input should be Uint8Array");return Nr(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of numbers");return Uint8Array.from(Nr(t,e,2**8))}}}function Yr(e,t=!1){if(e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Yt(8,e)>32||Yt(e,8)>32)throw new Error("radix2: carry overflow");return{encode:r=>{if(!Zt(r))throw new Error("radix2.encode input should be Uint8Array");return Qt(Array.from(r),8,e,!t)},decode:r=>{if(!Array.isArray(r)||r.length&&typeof r[0]!="number")throw new Error("radix2.decode input should be array of numbers");return Uint8Array.from(Qt(r,e,8,t))}}}function Oo(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function va(e,t){if(typeof t!="function")throw new Error("checksum fn should be function");return{encode(r){if(!Zt(r))throw new Error("checksum.encode: input should be Uint8Array");const o=t(r).slice(0,e),a=new Uint8Array(r.length+e);return a.set(r),a.set(o,r.length),a},decode(r){if(!Zt(r))throw new Error("checksum.decode: input should be Uint8Array");const o=r.slice(0,-e),a=t(o).slice(0,e),n=r.slice(-e);for(let i=0;i<e;i++)if(a[i]!==n[i])throw new Error("Invalid checksum");return o}}}const Kt={alphabet:ur,chain:Ut,checksum:va,convertRadix:Nr,convertRadix2:Qt,radix:ba,radix2:Yr,join:dr,padding:Ln},Kn=e=>Ut(ba(58),ur(e),dr("")),qn=Kn("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),ya=e=>Ut(va(4,t=>e(e(t))),qn),Rr=Ut(ur("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),dr("")),Go=[996825010,642813549,513874426,1027748829,705979059];function wt(e){const t=e>>25;let r=(e&33554431)<<5;for(let o=0;o<Go.length;o++)(t>>o&1)===1&&(r^=Go[o]);return r}function Wo(e,t,r=1){const o=e.length;let a=1;for(let n=0;n<o;n++){const i=e.charCodeAt(n);if(i<33||i>126)throw new Error(`Invalid prefix (${e})`);a=wt(a)^i>>5}a=wt(a);for(let n=0;n<o;n++)a=wt(a)^e.charCodeAt(n)&31;for(let n of t)a=wt(a)^n;for(let n=0;n<6;n++)a=wt(a);return a^=r,Rr.encode(Qt([a%2**30],30,5,!1))}function wa(e){const t=e==="bech32"?1:734539939,r=Yr(5),o=r.decode,a=r.encode,n=Oo(o);function i(d,u,f=90){if(typeof d!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof d}`);if(!Array.isArray(u)||u.length&&typeof u[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof u}`);if(d.length===0)throw new TypeError(`Invalid prefix length ${d.length}`);const p=d.length+7+u.length;if(f!==!1&&p>f)throw new TypeError(`Length ${p} exceeds limit ${f}`);const g=d.toLowerCase(),h=Wo(g,u,t);return`${g}1${Rr.encode(u)}${h}`}function s(d,u=90){if(typeof d!="string")throw new Error(`bech32.decode input should be string, not ${typeof d}`);if(d.length<8||u!==!1&&d.length>u)throw new TypeError(`Wrong string length: ${d.length} (${d}). Expected (8..${u})`);const f=d.toLowerCase();if(d!==f&&d!==d.toUpperCase())throw new Error("String must be lowercase or uppercase");const p=f.lastIndexOf("1");if(p===0||p===-1)throw new Error('Letter "1" must be present between prefix and data only');const g=f.slice(0,p),h=f.slice(p+1);if(h.length<6)throw new Error("Data must be at least 6 characters long");const b=Rr.decode(h).slice(0,-6),v=Wo(g,b,t);if(!h.endsWith(v))throw new Error(`Invalid checksum in ${d}: expected "${v}"`);return{prefix:g,words:b}}const l=Oo(s);function c(d){const{prefix:u,words:f}=s(d,!1);return{prefix:u,words:f,bytes:o(f)}}return{encode:i,decode:s,decodeToBytes:c,decodeUnsafe:l,fromWords:o,fromWordsUnsafe:n,toWords:a}}const Lr=wa("bech32"),ka=wa("bech32m"),Ot=Ut(Yr(4),ur("0123456789abcdef"),dr(""),Hn(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Dn=new Uint8Array;function ct(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function H(e){return e instanceof Uint8Array||e!=null&&typeof e=="object"&&e.constructor.name==="Uint8Array"}function Xt(...e){let t=0;for(let o=0;o<e.length;o++){const a=e[o];if(!H(a))throw new Error("Uint8Array expected");t+=a.length}const r=new Uint8Array(t);for(let o=0,a=0;o<e.length;o++){const n=e[o];r.set(n,a),a+=n.length}return r}const O={BITS:32,FULL_MASK:-1>>>0,len:e=>Math.ceil(e/32),create:e=>new Uint32Array(O.len(e)),clean:e=>e.fill(0),debug:e=>Array.from(e).map(t=>(t>>>0).toString(2).padStart(32,"0")),checkLen:(e,t)=>{if(O.len(t)!==e.length)throw new Error(`bitSet: wrong length=${e.length}. Expected: ${O.len(t)}`)},chunkLen:(e,t,r)=>{if(t<0)throw new Error(`bitset: wrong pos=${t}`);if(t+r>e)throw new Error(`bitSet: wrong range=${t}/${r} of ${e}`)},set:(e,t,r,o=!0)=>!o&&e[t]&r?!1:(e[t]|=r,!0),pos:(e,t)=>({chunk:Math.floor((e+t)/32),mask:1<<32-(e+t)%32-1}),indices:(e,t,r=!1)=>{O.checkLen(e,t);const{FULL_MASK:o,BITS:a}=O,n=a-t%a,i=n?o>>>n<<n:o,s=[];for(let l=0;l<e.length;l++){let c=e[l];if(r&&(c=~c),l===e.length-1&&(c&=i),c!==0)for(let d=0;d<a;d++){const u=1<<a-d-1;c&u&&s.push(l*a+d)}}return s},range:e=>{const t=[];let r;for(const o of e)r===void 0||o!==r.pos+r.length?t.push(r={pos:o,length:1}):r.length+=1;return t},rangeDebug:(e,t,r=!1)=>`[${O.range(O.indices(e,t,r)).map(o=>`(${o.pos}/${o.length})`).join(", ")}]`,setRange:(e,t,r,o,a=!0)=>{O.chunkLen(t,r,o);const{FULL_MASK:n,BITS:i}=O,s=r%i?Math.floor(r/i):void 0,l=r+o,c=l%i?Math.floor(l/i):void 0;if(s!==void 0&&s===c)return O.set(e,s,n>>>i-o<<i-o-r,a);if(s!==void 0&&!O.set(e,s,n>>>r%i,a))return!1;const d=s!==void 0?s+1:r/i,u=c!==void 0?c:l/i;for(let f=d;f<u;f++)if(!O.set(e,f,n,a))return!1;return!(c!==void 0&&s!==c&&!O.set(e,c,n<<i-l%i,a))}};class Qr{constructor(t,r={},o=[],a=[],n=void 0,i=0){this.data=t,this.opts=r,this.path=o,this.fieldPath=a,this.parent=n,this.parentOffset=i,this.pos=0,this.bitBuf=0,this.bitPos=0}enablePtr(){if(this.parent)return this.parent.enablePtr();this.bs||(this.bs=O.create(this.data.length),O.setRange(this.bs,this.data.length,0,this.pos,this.opts.allowMultipleReads))}markBytesBS(t,r){return this.parent?this.parent.markBytesBS(this.parentOffset+t,r):!r||!this.bs?!0:O.setRange(this.bs,this.data.length,t,r,!1)}markBytes(t){const r=this.pos;this.pos+=t;const o=this.markBytesBS(r,t);if(!this.opts.allowMultipleReads&&!o)throw this.err(`multiple read pos=${this.pos} len=${t}`);return o}err(t){return new Error(`Reader(${this.fieldPath.join("/")}): ${t}`)}absBytes(t){if(t>this.data.length)throw new Error("absBytes: Unexpected end of buffer");return this.data.subarray(t)}offsetReader(t){return new Qr(this.absBytes(t),this.opts,this.path,this.fieldPath,this,t)}bytes(t,r=!1){if(this.bitPos)throw this.err("readBytes: bitPos not empty");if(!Number.isFinite(t))throw this.err(`readBytes: wrong length=${t}`);if(this.pos+t>this.data.length)throw this.err("readBytes: Unexpected end of buffer");const o=this.data.subarray(this.pos,this.pos+t);return r||this.markBytes(t),o}byte(t=!1){if(this.bitPos)throw this.err("readByte: bitPos not empty");if(this.pos+1>this.data.length)throw this.err("readBytes: Unexpected end of buffer");const r=this.data[this.pos];return t||this.markBytes(1),r}get leftBytes(){return this.data.length-this.pos}isEnd(){return this.pos>=this.data.length&&!this.bitPos}length(t){let r;if(pt(t)?r=Number(t.decodeStream(this)):typeof t=="number"?r=t:typeof t=="string"&&(r=Jt(this.path,t.split("/"))),typeof r=="bigint"&&(r=Number(r)),typeof r!="number")throw this.err(`Wrong length: ${r}`);return r}bits(t){if(t>32)throw this.err("BitReader: cannot read more than 32 bits in single call");let r=0;for(;t;){this.bitPos||(this.bitBuf=this.byte(),this.bitPos=8);const o=Math.min(t,this.bitPos);this.bitPos-=o,r=r<<o|this.bitBuf>>this.bitPos&2**o-1,this.bitBuf&=2**this.bitPos-1,t-=o}return r>>>0}find(t,r=this.pos){if(!H(t))throw this.err(`find: needle is not bytes! ${t}`);if(this.bitPos)throw this.err("findByte: bitPos not empty");if(!t.length)throw this.err("find: needle is empty");for(let o=r;(o=this.data.indexOf(t[0],o))!==-1;o++){if(o===-1||this.data.length-o<t.length)return;if(ct(t,this.data.subarray(o,o+t.length)))return o}}finish(){if(!this.opts.allowUnreadBytes){if(this.bitPos)throw this.err(`${this.bitPos} bits left after unpack: ${Ot.encode(this.data.slice(this.pos))}`);if(this.bs&&!this.parent){const t=O.indices(this.bs,this.data.length,!0);if(t.length){const r=O.range(t).map(({pos:o,length:a})=>`(${o}/${a})[${Ot.encode(this.data.subarray(o,o+a))}]`).join(", ");throw this.err(`unread byte ranges: ${r} (total=${this.data.length})`)}else return}if(!this.isEnd())throw this.err(`${this.leftBytes} bytes ${this.bitPos} bits left after unpack: ${Ot.encode(this.data.slice(this.pos))}`)}}fieldPathPush(t){this.fieldPath.push(t)}fieldPathPop(){this.fieldPath.pop()}}class Vn{constructor(t=[],r=[]){this.path=t,this.fieldPath=r,this.buffers=[],this.pos=0,this.ptrs=[],this.bitBuf=0,this.bitPos=0}err(t){return new Error(`Writer(${this.fieldPath.join("/")}): ${t}`)}bytes(t){if(this.bitPos)throw this.err("writeBytes: ends with non-empty bit buffer");this.buffers.push(t),this.pos+=t.length}byte(t){if(this.bitPos)throw this.err("writeByte: ends with non-empty bit buffer");this.buffers.push(new Uint8Array([t])),this.pos++}get buffer(){if(this.bitPos)throw this.err("buffer: ends with non-empty bit buffer");let t=Xt(...this.buffers);for(let r of this.ptrs){const o=t.length;t=Xt(t,r.buffer);const a=r.ptr.encode(o);for(let n=0;n<a.length;n++)t[r.pos+n]=a[n]}return t}length(t,r){if(t===null)return;if(pt(t))return t.encodeStream(this,r);let o;if(typeof t=="number"?o=t:typeof t=="string"&&(o=Jt(this.path,t.split("/"))),typeof o=="bigint"&&(o=Number(o)),o===void 0||o!==r)throw this.err(`Wrong length: ${o} len=${t} exp=${r}`)}bits(t,r){if(r>32)throw this.err("writeBits: cannot write more than 32 bits in single call");if(t>=2**r)throw this.err(`writeBits: value (${t}) >= 2**bits (${r})`);for(;r;){const o=Math.min(r,8-this.bitPos);this.bitBuf=this.bitBuf<<o|t>>r-o,this.bitPos+=o,r-=o,t&=2**r-1,this.bitPos===8&&(this.bitPos=0,this.buffers.push(new Uint8Array([this.bitBuf])),this.pos++)}}fieldPathPush(t){this.fieldPath.push(t)}fieldPathPop(){this.fieldPath.pop()}}const Hr=e=>Uint8Array.from(e).reverse();function Zo(e,t,r,o){if(o){const a=2n**(r-1n);if(t<-a||t>=a)throw e.err("sInt: value out of bounds")}else if(0n>t||t>=2n**r)throw e.err("uInt: value out of bounds")}function pe(e){return{...e,encode:t=>{const r=new Vn;return e.encodeStream(r,t),r.buffer},decode:(t,r={})=>{const o=new Qr(t,r),a=e.decodeStream(o);return o.finish(),a}}}function Jt(e,t){e=Array.from(e);let r=0;for(;r<t.length&&t[r]==="..";r++)e.pop();let o=e.pop();for(;r<t.length;r++){if(!o||o[t[r]]===void 0)return;o=o[t[r]]}return o}function pt(e){return e!==null&&typeof e=="object"&&typeof e.encode=="function"&&typeof e.encodeStream=="function"&&typeof e.decode=="function"&&typeof e.decodeStream=="function"}function Mn(){return{encode:e=>{const t={};for(const[r,o]of e){if(t[r]!==void 0)throw new Error(`coders.dict: same key(${r}) appears twice in struct`);t[r]=o}return t},decode:e=>Object.entries(e)}}const Pn={encode:e=>{if(e>BigInt(Number.MAX_SAFE_INTEGER))throw new Error(`coders.number: element bigger than MAX_SAFE_INTEGER=${e}`);return Number(e)},decode:e=>{if(!Number.isSafeInteger(e))throw new Error("coders.number: element is not safe integer");return BigInt(e)}};function Fn(e){return{encode:t=>e[t],decode:t=>e[t]}}function On(e){const t=10n**BigInt(e);return{encode:r=>{let o=(r<0n?-r:r).toString(10),a=o.length-e;a<0&&(o=o.padStart(o.length-a,"0"),a=0);let n=o.length-1;for(;n>=a&&o[n]==="0";n--);let[i,s]=[o.slice(0,a),o.slice(a,n+1)];return i||(i="0"),r<0n&&(i="-"+i),s?`${i}.${s}`:i},decode:r=>{let o=!1;r.startsWith("-")&&(o=!0,r=r.slice(1));let a=r.indexOf(".");a=a===-1?r.length:a;const[n,i]=[r.slice(0,a),r.slice(a+1)],s=BigInt(n)*t,l=Math.min(i.length,e),c=BigInt(i.slice(0,l))*10n**BigInt(e-l),d=s+c;return o?-d:d}}}function Gn(e){return{encode:t=>{for(const r of e){const o=r.encode(t);if(o!==void 0)return o}throw new Error(`match/encode: cannot find match in ${t}`)},decode:t=>{for(const r of e){const o=r.decode(t);if(o!==void 0)return o}throw new Error(`match/decode: cannot find match in ${t}`)}}}const Wn=e=>({encode:e.decode,decode:e.encode}),Xr={dict:Mn,number:Pn,tsEnum:Fn,decimal:On,match:Gn,reverse:Wn},Ea=(e,t=!1,r=!1,o=!0)=>pe({size:o?e:void 0,encodeStream:(a,n)=>{if(typeof n!="bigint")throw a.err(`bigint: invalid value: ${n}`);let i=BigInt(n);const s=BigInt(e);Zo(a,i,8n*s,!!r);const l=2n**(8n*s-1n);r&&i<0&&(i=i|l);let c=[];for(let u=0;u<e;u++)c.push(Number(i&255n)),i>>=8n;let d=new Uint8Array(c).reverse();if(!o){let u=0;for(u=0;u<d.length&&d[u]===0;u++);d=d.subarray(u)}a.bytes(t?d.reverse():d)},decodeStream:a=>{const n=BigInt(e),i=a.bytes(o?e:Math.min(e,a.leftBytes)),s=t?i:Hr(i),l=2n**(8n*n-1n);let c=0n;for(let d=0;d<s.length;d++)c|=BigInt(s[d])<<8n*BigInt(d);return r&&c&l&&(c=(c^l)-l),Zo(a,c,8n*n,!!r),c}}),Zn=Ea(8,!0),hr=(e,t=!1,r=!1,o=!0)=>{if(e>6)throw new Error("int supports size up to 6 bytes (48 bits), for other use bigint");return Jr(Ea(e,t,r,o),Xr.number)},xt=hr(4,!0),Yn=hr(4,!0,!0),Yo=hr(2,!0),Qn=hr(1,!1),za=(e,t=!1)=>pe({size:typeof e=="number"?e:void 0,encodeStream:(r,o)=>{if(!H(o))throw r.err(`bytes: invalid value ${o}`);H(e)||r.length(e,o.length),r.bytes(t?Hr(o):o),H(e)&&r.bytes(e)},decodeStream:r=>{let o;if(H(e)){const a=r.find(e);if(!a)throw r.err("bytes: cannot find terminator");o=r.bytes(a-r.pos),r.bytes(e.length)}else o=r.bytes(e===null?r.leftBytes:r.length(e));return t?Hr(o):o}});function Jr(e,t){if(!pt(e))throw new Error(`apply: invalid inner value ${e}`);return pe({size:e.size,encodeStream:(r,o)=>{let a;try{a=t.decode(o)}catch(n){throw r.err(""+n)}return e.encodeStream(r,a)},decodeStream:r=>{const o=e.decodeStream(r);try{return t.encode(o)}catch(a){throw r.err(""+a)}}})}function xa(e,t){if(!pt(e))throw new Error(`validate: invalid inner value ${e}`);return pe({size:e.size,encodeStream:(r,o)=>e.encodeStream(r,t(o)),decodeStream:r=>t(e.decodeStream(r))})}const Xn=(e,t=!1)=>pe({size:e.length,encodeStream:(r,o)=>{!!o!==t&&r.bytes(e)},decodeStream:r=>{let o=r.leftBytes>=e.length;return o&&(o=ct(r.bytes(e.length,!0),e),o&&r.bytes(e.length)),o!==t}});function Jn(e,t,r){if(!pt(t))throw new Error(`flagged: invalid inner value ${t}`);return pe({encodeStream:(o,a)=>{Jt(o.path,e.split("/"))&&t.encodeStream(o,a)},decodeStream:o=>{let a=!1;if(a=Jt(o.path,e.split("/")),a)return t.decodeStream(o)}})}function ei(e){let t=0;for(let r of e){if(r.size===void 0)return;if(!Number.isSafeInteger(r.size))throw new Error(`sizeof: wrong element size=${t}`);t+=r.size}return t}function eo(e){if(Array.isArray(e))throw new Error("Packed.Struct: got array instead of object");return pe({size:ei(Object.values(e)),encodeStream:(t,r)=>{if(typeof r!="object"||r===null)throw t.err(`struct: invalid value ${r}`);t.path.push(r);for(let o in e)t.fieldPathPush(o),e[o].encodeStream(t,r[o]),t.fieldPathPop();t.path.pop()},decodeStream:t=>{let r={};t.path.push(r);for(let o in e)t.fieldPathPush(o),r[o]=e[o].decodeStream(t),t.fieldPathPop();return t.path.pop(),r}})}function to(e,t){if(!pt(t))throw new Error(`array: invalid inner value ${t}`);return pe({size:typeof e=="number"&&t.size?e*t.size:void 0,encodeStream:(r,o)=>{if(!Array.isArray(o))throw r.err(`array: invalid value ${o}`);H(e)||r.length(e,o.length),r.path.push(o);for(let a=0;a<o.length;a++){r.fieldPathPush(""+a);const n=o[a],i=r.pos;if(t.encodeStream(r,n),H(e)){if(e.length>r.pos-i)continue;const s=r.buffer.subarray(i,r.pos);if(ct(s.subarray(0,e.length),e))throw r.err(`array: inner element encoding same as separator. elm=${n} data=${s}`)}r.fieldPathPop()}r.path.pop(),H(e)&&r.bytes(e)},decodeStream:r=>{let o=[];if(e===null){let a=0;for(r.path.push(o);!r.isEnd()&&(r.fieldPathPush(""+a++),o.push(t.decodeStream(r)),r.fieldPathPop(),!(t.size&&r.leftBytes<t.size)););r.path.pop()}else if(H(e)){let a=0;for(r.path.push(o);;){if(ct(r.bytes(e.length,!0),e)){r.bytes(e.length);break}r.fieldPathPush(""+a++),o.push(t.decodeStream(r)),r.fieldPathPop()}r.path.pop()}else{r.fieldPathPush("arrayLen");const a=r.length(e);r.fieldPathPop(),r.path.push(o);for(let n=0;n<a;n++)r.fieldPathPush(""+n),o.push(t.decodeStream(r)),r.fieldPathPop();r.path.pop()}return o}})}function xe(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`positive integer expected, not ${e}`)}function ti(e){return e instanceof Uint8Array||e!=null&&typeof e=="object"&&e.constructor.name==="Uint8Array"}function de(e,...t){if(!ti(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)}function Sa(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");xe(e.outputLen),xe(e.blockLen)}function ut(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function Aa(e,t){de(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}const zr=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const er=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),Ye=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),me=(e,t)=>e<<32-t|e>>>t,qt=(e,t)=>e<<t|e>>>32-t>>>0,Ge=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,Ba=e=>e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255,Ee=Ge?e=>e:e=>Ba(e);function nt(e){for(let t=0;t<e.length;t++)e[t]=Ba(e[t])}const ri=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function ro(e){de(e);let t="";for(let r=0;r<e.length;r++)t+=ri[e[r]];return t}const we={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function Qo(e){if(e>=we._0&&e<=we._9)return e-we._0;if(e>=we._A&&e<=we._F)return e-(we._A-10);if(e>=we._a&&e<=we._f)return e-(we._a-10)}function Ta(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const t=e.length,r=t/2;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const o=new Uint8Array(r);for(let a=0,n=0;a<r;a++,n+=2){const i=Qo(e.charCodeAt(n)),s=Qo(e.charCodeAt(n+1));if(i===void 0||s===void 0){const l=e[n]+e[n+1];throw new Error('hex string expected, got non-hex character "'+l+'" at index '+n)}o[a]=i*16+s}return o}function ja(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function be(e){return typeof e=="string"&&(e=ja(e)),de(e),e}function kt(...e){let t=0;for(let o=0;o<e.length;o++){const a=e[o];de(a),t+=a.length}const r=new Uint8Array(t);for(let o=0,a=0;o<e.length;o++){const n=e[o];r.set(n,a),a+=n.length}return r}class oo{clone(){return this._cloneInto()}}const oi={}.toString;function ai(e,t){if(t!==void 0&&oi.call(t)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(e,t)}function ao(e){const t=o=>e().update(be(o)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function ni(e){const t=(o,a)=>e(a).update(be(o)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=o=>e(o),t}function no(e=32){if(zr&&typeof zr.getRandomValues=="function")return zr.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}function ii(e,t,r,o){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,o);const a=BigInt(32),n=BigInt(4294967295),i=Number(r>>a&n),s=Number(r&n),l=o?4:0,c=o?0:4;e.setUint32(t+l,i,o),e.setUint32(t+c,s,o)}const si=(e,t,r)=>e&t^~e&r,li=(e,t,r)=>e&t^e&r^t&r;class io extends oo{constructor(t,r,o,a){super(),this.blockLen=t,this.outputLen=r,this.padOffset=o,this.isLE=a,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Ye(this.buffer)}update(t){ut(this);const{view:r,buffer:o,blockLen:a}=this;t=be(t);const n=t.length;for(let i=0;i<n;){const s=Math.min(a-this.pos,n-i);if(s===a){const l=Ye(t);for(;a<=n-i;i+=a)this.process(l,i);continue}o.set(t.subarray(i,i+s),this.pos),this.pos+=s,i+=s,this.pos===a&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){ut(this),Aa(t,this),this.finished=!0;const{buffer:r,view:o,blockLen:a,isLE:n}=this;let{pos:i}=this;r[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>a-i&&(this.process(o,0),i=0);for(let u=i;u<a;u++)r[u]=0;ii(o,a-8,BigInt(this.length*8),n),this.process(o,0);const s=Ye(t),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=l/4,d=this.get();if(c>d.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<c;u++)s.setUint32(4*u,d[u],n)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const o=t.slice(0,r);return this.destroy(),o}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:o,length:a,finished:n,destroyed:i,pos:s}=this;return t.length=a,t.pos=s,t.finished=n,t.destroyed=i,a%r&&t.buffer.set(o),t}}const ci=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),Ia=new Uint8Array(new Array(16).fill(0).map((e,t)=>t)),ui=Ia.map(e=>(9*e+5)%16);let so=[Ia],lo=[ui];for(let e=0;e<4;e++)for(let t of[so,lo])t.push(t[e].map(r=>ci[r]));const Ua=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),di=so.map((e,t)=>e.map(r=>Ua[t][r])),hi=lo.map((e,t)=>e.map(r=>Ua[t][r])),fi=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),pi=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]);function Xo(e,t,r,o){return e===0?t^r^o:e===1?t&r|~t&o:e===2?(t|~r)^o:e===3?t&o|r&~o:t^(r|~o)}const Dt=new Uint32Array(16);class mi extends io{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:r,h2:o,h3:a,h4:n}=this;return[t,r,o,a,n]}set(t,r,o,a,n){this.h0=t|0,this.h1=r|0,this.h2=o|0,this.h3=a|0,this.h4=n|0}process(t,r){for(let p=0;p<16;p++,r+=4)Dt[p]=t.getUint32(r,!0);let o=this.h0|0,a=o,n=this.h1|0,i=n,s=this.h2|0,l=s,c=this.h3|0,d=c,u=this.h4|0,f=u;for(let p=0;p<5;p++){const g=4-p,h=fi[p],b=pi[p],v=so[p],S=lo[p],k=di[p],A=hi[p];for(let y=0;y<16;y++){const E=qt(o+Xo(p,n,s,c)+Dt[v[y]]+h,k[y])+u|0;o=u,u=c,c=qt(s,10)|0,s=n,n=E}for(let y=0;y<16;y++){const E=qt(a+Xo(g,i,l,d)+Dt[S[y]]+b,A[y])+f|0;a=f,f=d,d=qt(l,10)|0,l=i,i=E}}this.set(this.h1+s+d|0,this.h2+c+f|0,this.h3+u+a|0,this.h4+o+i|0,this.h0+n+l|0)}roundClean(){Dt.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const _a=ao(()=>new mi),gi=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ue=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),_e=new Uint32Array(64);class bi extends io{constructor(){super(64,32,8,!1),this.A=Ue[0]|0,this.B=Ue[1]|0,this.C=Ue[2]|0,this.D=Ue[3]|0,this.E=Ue[4]|0,this.F=Ue[5]|0,this.G=Ue[6]|0,this.H=Ue[7]|0}get(){const{A:t,B:r,C:o,D:a,E:n,F:i,G:s,H:l}=this;return[t,r,o,a,n,i,s,l]}set(t,r,o,a,n,i,s,l){this.A=t|0,this.B=r|0,this.C=o|0,this.D=a|0,this.E=n|0,this.F=i|0,this.G=s|0,this.H=l|0}process(t,r){for(let u=0;u<16;u++,r+=4)_e[u]=t.getUint32(r,!1);for(let u=16;u<64;u++){const f=_e[u-15],p=_e[u-2],g=me(f,7)^me(f,18)^f>>>3,h=me(p,17)^me(p,19)^p>>>10;_e[u]=h+_e[u-7]+g+_e[u-16]|0}let{A:o,B:a,C:n,D:i,E:s,F:l,G:c,H:d}=this;for(let u=0;u<64;u++){const f=me(s,6)^me(s,11)^me(s,25),p=d+f+si(s,l,c)+gi[u]+_e[u]|0,h=(me(o,2)^me(o,13)^me(o,22))+li(o,a,n)|0;d=c,c=l,l=s,s=i+p|0,i=n,n=a,a=o,o=p+h|0}o=o+this.A|0,a=a+this.B|0,n=n+this.C|0,i=i+this.D|0,s=s+this.E|0,l=l+this.F|0,c=c+this.G|0,d=d+this.H|0,this.set(o,a,n,i,s,l,c,d)}roundClean(){_e.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const ve=ao(()=>new bi);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ca=BigInt(0),fr=BigInt(1),vi=BigInt(2);function Qe(e){return e instanceof Uint8Array||e!=null&&typeof e=="object"&&e.constructor.name==="Uint8Array"}function _t(e){if(!Qe(e))throw new Error("Uint8Array expected")}const yi=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function dt(e){_t(e);let t="";for(let r=0;r<e.length;r++)t+=yi[e[r]];return t}function $a(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function co(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}const ke={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function Jo(e){if(e>=ke._0&&e<=ke._9)return e-ke._0;if(e>=ke._A&&e<=ke._F)return e-(ke._A-10);if(e>=ke._a&&e<=ke._f)return e-(ke._a-10)}function ht(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const t=e.length,r=t/2;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const o=new Uint8Array(r);for(let a=0,n=0;a<r;a++,n+=2){const i=Jo(e.charCodeAt(n)),s=Jo(e.charCodeAt(n+1));if(i===void 0||s===void 0){const l=e[n]+e[n+1];throw new Error('hex string expected, got non-hex character "'+l+'" at index '+n)}o[a]=i*16+s}return o}function te(e){return co(dt(e))}function uo(e){return _t(e),co(dt(Uint8Array.from(e).reverse()))}function Ve(e,t){return ht(e.toString(16).padStart(t*2,"0"))}function ho(e,t){return Ve(e,t).reverse()}function wi(e){return ht($a(e))}function Z(e,t,r){let o;if(typeof t=="string")try{o=ht(t)}catch(n){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${n}`)}else if(Qe(t))o=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const a=o.length;if(typeof r=="number"&&a!==r)throw new Error(`${e} expected ${r} bytes, got ${a}`);return o}function Xe(...e){let t=0;for(let o=0;o<e.length;o++){const a=e[o];_t(a),t+=a.length}const r=new Uint8Array(t);for(let o=0,a=0;o<e.length;o++){const n=e[o];r.set(n,a),a+=n.length}return r}function ki(e,t){if(e.length!==t.length)return!1;let r=0;for(let o=0;o<e.length;o++)r|=e[o]^t[o];return r===0}function Ei(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function zi(e){let t;for(t=0;e>Ca;e>>=fr,t+=1);return t}function xi(e,t){return e>>BigInt(t)&fr}function Si(e,t,r){return e|(r?fr:Ca)<<BigInt(t)}const fo=e=>(vi<<BigInt(e-1))-fr,xr=e=>new Uint8Array(e),ea=e=>Uint8Array.from(e);function Na(e,t,r){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof r!="function")throw new Error("hmacFn must be a function");let o=xr(e),a=xr(e),n=0;const i=()=>{o.fill(1),a.fill(0),n=0},s=(...u)=>r(a,o,...u),l=(u=xr())=>{a=s(ea([0]),u),o=s(),u.length!==0&&(a=s(ea([1]),u),o=s())},c=()=>{if(n++>=1e3)throw new Error("drbg: tried 1000 values");let u=0;const f=[];for(;u<t;){o=s();const p=o.slice();f.push(p),u+=o.length}return Xe(...f)};return(u,f)=>{i(),l(u);let p;for(;!(p=f(c()));)l();return i(),p}}const Ai={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",stringOrUint8Array:e=>typeof e=="string"||Qe(e),isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function Ct(e,t,r={}){const o=(a,n,i)=>{const s=Ai[n];if(typeof s!="function")throw new Error(`Invalid validator "${n}", expected function`);const l=e[a];if(!(i&&l===void 0)&&!s(l,e))throw new Error(`Invalid param ${String(a)}=${l} (${typeof l}), expected ${n}`)};for(const[a,n]of Object.entries(t))o(a,n,!1);for(const[a,n]of Object.entries(r))o(a,n,!0);return e}const Bi=Object.freeze(Object.defineProperty({__proto__:null,abytes:_t,bitGet:xi,bitLen:zi,bitMask:fo,bitSet:Si,bytesToHex:dt,bytesToNumberBE:te,bytesToNumberLE:uo,concatBytes:Xe,createHmacDrbg:Na,ensureBytes:Z,equalBytes:ki,hexToBytes:ht,hexToNumber:co,isBytes:Qe,numberToBytesBE:Ve,numberToBytesLE:ho,numberToHexUnpadded:$a,numberToVarBytesBE:wi,utf8ToBytes:Ei,validateObject:Ct},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const W=BigInt(0),q=BigInt(1),We=BigInt(2),Ti=BigInt(3),Kr=BigInt(4),ta=BigInt(5),ra=BigInt(8);BigInt(9);BigInt(16);function G(e,t){const r=e%t;return r>=W?r:t+r}function ji(e,t,r){if(r<=W||t<W)throw new Error("Expected power/modulo > 0");if(r===q)return W;let o=q;for(;t>W;)t&q&&(o=o*e%r),e=e*e%r,t>>=q;return o}function ae(e,t,r){let o=e;for(;t-- >W;)o*=o,o%=r;return o}function qr(e,t){if(e===W||t<=W)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=G(e,t),o=t,a=W,n=q;for(;r!==W;){const s=o/r,l=o%r,c=a-n*s;o=r,r=l,a=n,n=c}if(o!==q)throw new Error("invert: does not exist");return G(a,t)}function Ii(e){const t=(e-q)/We;let r,o,a;for(r=e-q,o=0;r%We===W;r/=We,o++);for(a=We;a<e&&ji(a,t,e)!==e-q;a++);if(o===1){const i=(e+q)/Kr;return function(l,c){const d=l.pow(c,i);if(!l.eql(l.sqr(d),c))throw new Error("Cannot find square root");return d}}const n=(r+q)/We;return function(s,l){if(s.pow(l,t)===s.neg(s.ONE))throw new Error("Cannot find square root");let c=o,d=s.pow(s.mul(s.ONE,a),r),u=s.pow(l,n),f=s.pow(l,r);for(;!s.eql(f,s.ONE);){if(s.eql(f,s.ZERO))return s.ZERO;let p=1;for(let h=s.sqr(f);p<c&&!s.eql(h,s.ONE);p++)h=s.sqr(h);const g=s.pow(d,q<<BigInt(c-p-1));d=s.sqr(g),u=s.mul(u,g),f=s.mul(f,d),c=p}return u}}function Ui(e){if(e%Kr===Ti){const t=(e+q)/Kr;return function(o,a){const n=o.pow(a,t);if(!o.eql(o.sqr(n),a))throw new Error("Cannot find square root");return n}}if(e%ra===ta){const t=(e-ta)/ra;return function(o,a){const n=o.mul(a,We),i=o.pow(n,t),s=o.mul(a,i),l=o.mul(o.mul(s,We),i),c=o.mul(s,o.sub(l,o.ONE));if(!o.eql(o.sqr(c),a))throw new Error("Cannot find square root");return c}}return Ii(e)}const _i=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Ci(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},r=_i.reduce((o,a)=>(o[a]="function",o),t);return Ct(e,r)}function $i(e,t,r){if(r<W)throw new Error("Expected power > 0");if(r===W)return e.ONE;if(r===q)return t;let o=e.ONE,a=t;for(;r>W;)r&q&&(o=e.mul(o,a)),a=e.sqr(a),r>>=q;return o}function Ni(e,t){const r=new Array(t.length),o=t.reduce((n,i,s)=>e.is0(i)?n:(r[s]=n,e.mul(n,i)),e.ONE),a=e.inv(o);return t.reduceRight((n,i,s)=>e.is0(i)?n:(r[s]=e.mul(n,r[s]),e.mul(n,i)),a),r}function Ra(e,t){const r=t!==void 0?t:e.toString(2).length,o=Math.ceil(r/8);return{nBitLength:r,nByteLength:o}}function Ri(e,t,r=!1,o={}){if(e<=W)throw new Error(`Expected Field ORDER > 0, got ${e}`);const{nBitLength:a,nByteLength:n}=Ra(e,t);if(n>2048)throw new Error("Field lengths over 2048 bytes are not supported");const i=Ui(e),s=Object.freeze({ORDER:e,BITS:a,BYTES:n,MASK:fo(a),ZERO:W,ONE:q,create:l=>G(l,e),isValid:l=>{if(typeof l!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);return W<=l&&l<e},is0:l=>l===W,isOdd:l=>(l&q)===q,neg:l=>G(-l,e),eql:(l,c)=>l===c,sqr:l=>G(l*l,e),add:(l,c)=>G(l+c,e),sub:(l,c)=>G(l-c,e),mul:(l,c)=>G(l*c,e),pow:(l,c)=>$i(s,l,c),div:(l,c)=>G(l*qr(c,e),e),sqrN:l=>l*l,addN:(l,c)=>l+c,subN:(l,c)=>l-c,mulN:(l,c)=>l*c,inv:l=>qr(l,e),sqrt:o.sqrt||(l=>i(s,l)),invertBatch:l=>Ni(s,l),cmov:(l,c,d)=>d?c:l,toBytes:l=>r?ho(l,n):Ve(l,n),fromBytes:l=>{if(l.length!==n)throw new Error(`Fp.fromBytes: expected ${n}, got ${l.length}`);return r?uo(l):te(l)}});return Object.freeze(s)}function La(e){if(typeof e!="bigint")throw new Error("field order must be bigint");const t=e.toString(2).length;return Math.ceil(t/8)}function Ha(e){const t=La(e);return t+Math.ceil(t/2)}function Li(e,t,r=!1){const o=e.length,a=La(t),n=Ha(t);if(o<16||o<n||o>1024)throw new Error(`expected ${n}-1024 bytes of input, got ${o}`);const i=r?te(e):uo(e),s=G(i,t-q)+q;return r?ho(s,a):Ve(s,a)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Hi=BigInt(0),Sr=BigInt(1);function Ki(e,t){const r=(a,n)=>{const i=n.negate();return a?i:n},o=a=>{const n=Math.ceil(t/a)+1,i=2**(a-1);return{windows:n,windowSize:i}};return{constTimeNegate:r,unsafeLadder(a,n){let i=e.ZERO,s=a;for(;n>Hi;)n&Sr&&(i=i.add(s)),s=s.double(),n>>=Sr;return i},precomputeWindow(a,n){const{windows:i,windowSize:s}=o(n),l=[];let c=a,d=c;for(let u=0;u<i;u++){d=c,l.push(d);for(let f=1;f<s;f++)d=d.add(c),l.push(d);c=d.double()}return l},wNAF(a,n,i){const{windows:s,windowSize:l}=o(a);let c=e.ZERO,d=e.BASE;const u=BigInt(2**a-1),f=2**a,p=BigInt(a);for(let g=0;g<s;g++){const h=g*l;let b=Number(i&u);i>>=p,b>l&&(b-=f,i+=Sr);const v=h,S=h+Math.abs(b)-1,k=g%2!==0,A=b<0;b===0?d=d.add(r(k,n[v])):c=c.add(r(A,n[S]))}return{p:c,f:d}},wNAFCached(a,n,i,s){const l=a._WINDOW_SIZE||1;let c=n.get(a);return c||(c=this.precomputeWindow(a,l),l!==1&&n.set(a,s(c))),this.wNAF(l,c,i)}}}function Ka(e){return Ci(e.Fp),Ct(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Ra(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function qi(e){const t=Ka(e);Ct(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:r,Fp:o,a}=t;if(r){if(!o.eql(a,o.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof r!="object"||typeof r.beta!="bigint"||typeof r.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:Di,hexToBytes:Vi}=Bi,Ze={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=Ze;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const r=e[1],o=e.subarray(2,r+2);if(!r||o.length!==r)throw new t("Invalid signature integer: wrong length");if(o[0]&128)throw new t("Invalid signature integer: negative");if(o[0]===0&&!(o[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:Di(o),l:e.subarray(r+2)}},toSig(e){const{Err:t}=Ze,r=typeof e=="string"?Vi(e):e;_t(r);let o=r.length;if(o<2||r[0]!=48)throw new t("Invalid signature tag");if(r[1]!==o-2)throw new t("Invalid signature: incorrect length");const{d:a,l:n}=Ze._parseInt(r.subarray(2)),{d:i,l:s}=Ze._parseInt(n);if(s.length)throw new t("Invalid signature: left bytes after parsing");return{r:a,s:i}},hexFromSig(e){const t=c=>Number.parseInt(c[0],16)&8?"00"+c:c,r=c=>{const d=c.toString(16);return d.length&1?`0${d}`:d},o=t(r(e.s)),a=t(r(e.r)),n=o.length/2,i=a.length/2,s=r(n),l=r(i);return`30${r(i+n+4)}02${l}${a}02${s}${o}`}},ze=BigInt(0),ne=BigInt(1);BigInt(2);const oa=BigInt(3);BigInt(4);function Mi(e){const t=qi(e),{Fp:r}=t,o=t.toBytes||((g,h,b)=>{const v=h.toAffine();return Xe(Uint8Array.from([4]),r.toBytes(v.x),r.toBytes(v.y))}),a=t.fromBytes||(g=>{const h=g.subarray(1),b=r.fromBytes(h.subarray(0,r.BYTES)),v=r.fromBytes(h.subarray(r.BYTES,2*r.BYTES));return{x:b,y:v}});function n(g){const{a:h,b}=t,v=r.sqr(g),S=r.mul(v,g);return r.add(r.add(S,r.mul(g,h)),b)}if(!r.eql(r.sqr(t.Gy),n(t.Gx)))throw new Error("bad generator point: equation left != right");function i(g){return typeof g=="bigint"&&ze<g&&g<t.n}function s(g){if(!i(g))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function l(g){const{allowedPrivateKeyLengths:h,nByteLength:b,wrapPrivateKey:v,n:S}=t;if(h&&typeof g!="bigint"){if(Qe(g)&&(g=dt(g)),typeof g!="string"||!h.includes(g.length))throw new Error("Invalid key");g=g.padStart(b*2,"0")}let k;try{k=typeof g=="bigint"?g:te(Z("private key",g,b))}catch{throw new Error(`private key must be ${b} bytes, hex or bigint, not ${typeof g}`)}return v&&(k=G(k,S)),s(k),k}const c=new Map;function d(g){if(!(g instanceof u))throw new Error("ProjectivePoint expected")}class u{constructor(h,b,v){if(this.px=h,this.py=b,this.pz=v,h==null||!r.isValid(h))throw new Error("x required");if(b==null||!r.isValid(b))throw new Error("y required");if(v==null||!r.isValid(v))throw new Error("z required")}static fromAffine(h){const{x:b,y:v}=h||{};if(!h||!r.isValid(b)||!r.isValid(v))throw new Error("invalid affine point");if(h instanceof u)throw new Error("projective point not allowed");const S=k=>r.eql(k,r.ZERO);return S(b)&&S(v)?u.ZERO:new u(b,v,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(h){const b=r.invertBatch(h.map(v=>v.pz));return h.map((v,S)=>v.toAffine(b[S])).map(u.fromAffine)}static fromHex(h){const b=u.fromAffine(a(Z("pointHex",h)));return b.assertValidity(),b}static fromPrivateKey(h){return u.BASE.multiply(l(h))}_setWindowSize(h){this._WINDOW_SIZE=h,c.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint&&!r.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:h,y:b}=this.toAffine();if(!r.isValid(h)||!r.isValid(b))throw new Error("bad point: x or y not FE");const v=r.sqr(b),S=n(h);if(!r.eql(v,S))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:h}=this.toAffine();if(r.isOdd)return!r.isOdd(h);throw new Error("Field doesn't support isOdd")}equals(h){d(h);const{px:b,py:v,pz:S}=this,{px:k,py:A,pz:y}=h,E=r.eql(r.mul(b,y),r.mul(k,S)),B=r.eql(r.mul(v,y),r.mul(A,S));return E&&B}negate(){return new u(this.px,r.neg(this.py),this.pz)}double(){const{a:h,b}=t,v=r.mul(b,oa),{px:S,py:k,pz:A}=this;let y=r.ZERO,E=r.ZERO,B=r.ZERO,T=r.mul(S,S),C=r.mul(k,k),_=r.mul(A,A),U=r.mul(S,k);return U=r.add(U,U),B=r.mul(S,A),B=r.add(B,B),y=r.mul(h,B),E=r.mul(v,_),E=r.add(y,E),y=r.sub(C,E),E=r.add(C,E),E=r.mul(y,E),y=r.mul(U,y),B=r.mul(v,B),_=r.mul(h,_),U=r.sub(T,_),U=r.mul(h,U),U=r.add(U,B),B=r.add(T,T),T=r.add(B,T),T=r.add(T,_),T=r.mul(T,U),E=r.add(E,T),_=r.mul(k,A),_=r.add(_,_),T=r.mul(_,U),y=r.sub(y,T),B=r.mul(_,C),B=r.add(B,B),B=r.add(B,B),new u(y,E,B)}add(h){d(h);const{px:b,py:v,pz:S}=this,{px:k,py:A,pz:y}=h;let E=r.ZERO,B=r.ZERO,T=r.ZERO;const C=t.a,_=r.mul(t.b,oa);let U=r.mul(b,k),D=r.mul(v,A),V=r.mul(S,y),X=r.add(b,v),z=r.add(k,A);X=r.mul(X,z),z=r.add(U,D),X=r.sub(X,z),z=r.add(b,S);let w=r.add(k,y);return z=r.mul(z,w),w=r.add(U,V),z=r.sub(z,w),w=r.add(v,S),E=r.add(A,y),w=r.mul(w,E),E=r.add(D,V),w=r.sub(w,E),T=r.mul(C,z),E=r.mul(_,V),T=r.add(E,T),E=r.sub(D,T),T=r.add(D,T),B=r.mul(E,T),D=r.add(U,U),D=r.add(D,U),V=r.mul(C,V),z=r.mul(_,z),D=r.add(D,V),V=r.sub(U,V),V=r.mul(C,V),z=r.add(z,V),U=r.mul(D,z),B=r.add(B,U),U=r.mul(w,z),E=r.mul(X,E),E=r.sub(E,U),U=r.mul(X,D),T=r.mul(w,T),T=r.add(T,U),new u(E,B,T)}subtract(h){return this.add(h.negate())}is0(){return this.equals(u.ZERO)}wNAF(h){return p.wNAFCached(this,c,h,b=>{const v=r.invertBatch(b.map(S=>S.pz));return b.map((S,k)=>S.toAffine(v[k])).map(u.fromAffine)})}multiplyUnsafe(h){const b=u.ZERO;if(h===ze)return b;if(s(h),h===ne)return this;const{endo:v}=t;if(!v)return p.unsafeLadder(this,h);let{k1neg:S,k1:k,k2neg:A,k2:y}=v.splitScalar(h),E=b,B=b,T=this;for(;k>ze||y>ze;)k&ne&&(E=E.add(T)),y&ne&&(B=B.add(T)),T=T.double(),k>>=ne,y>>=ne;return S&&(E=E.negate()),A&&(B=B.negate()),B=new u(r.mul(B.px,v.beta),B.py,B.pz),E.add(B)}multiply(h){s(h);let b=h,v,S;const{endo:k}=t;if(k){const{k1neg:A,k1:y,k2neg:E,k2:B}=k.splitScalar(b);let{p:T,f:C}=this.wNAF(y),{p:_,f:U}=this.wNAF(B);T=p.constTimeNegate(A,T),_=p.constTimeNegate(E,_),_=new u(r.mul(_.px,k.beta),_.py,_.pz),v=T.add(_),S=C.add(U)}else{const{p:A,f:y}=this.wNAF(b);v=A,S=y}return u.normalizeZ([v,S])[0]}multiplyAndAddUnsafe(h,b,v){const S=u.BASE,k=(y,E)=>E===ze||E===ne||!y.equals(S)?y.multiplyUnsafe(E):y.multiply(E),A=k(this,b).add(k(h,v));return A.is0()?void 0:A}toAffine(h){const{px:b,py:v,pz:S}=this,k=this.is0();h==null&&(h=k?r.ONE:r.inv(S));const A=r.mul(b,h),y=r.mul(v,h),E=r.mul(S,h);if(k)return{x:r.ZERO,y:r.ZERO};if(!r.eql(E,r.ONE))throw new Error("invZ was invalid");return{x:A,y}}isTorsionFree(){const{h,isTorsionFree:b}=t;if(h===ne)return!0;if(b)return b(u,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h,clearCofactor:b}=t;return h===ne?this:b?b(u,this):this.multiplyUnsafe(t.h)}toRawBytes(h=!0){return this.assertValidity(),o(u,this,h)}toHex(h=!0){return dt(this.toRawBytes(h))}}u.BASE=new u(t.Gx,t.Gy,r.ONE),u.ZERO=new u(r.ZERO,r.ONE,r.ZERO);const f=t.nBitLength,p=Ki(u,t.endo?Math.ceil(f/2):f);return{CURVE:t,ProjectivePoint:u,normPrivateKeyToScalar:l,weierstrassEquation:n,isWithinCurveOrder:i}}function Pi(e){const t=Ka(e);return Ct(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function Fi(e){const t=Pi(e),{Fp:r,n:o}=t,a=r.BYTES+1,n=2*r.BYTES+1;function i(z){return ze<z&&z<r.ORDER}function s(z){return G(z,o)}function l(z){return qr(z,o)}const{ProjectivePoint:c,normPrivateKeyToScalar:d,weierstrassEquation:u,isWithinCurveOrder:f}=Mi({...t,toBytes(z,w,I){const R=w.toAffine(),$=r.toBytes(R.x),F=Xe;return I?F(Uint8Array.from([w.hasEvenY()?2:3]),$):F(Uint8Array.from([4]),$,r.toBytes(R.y))},fromBytes(z){const w=z.length,I=z[0],R=z.subarray(1);if(w===a&&(I===2||I===3)){const $=te(R);if(!i($))throw new Error("Point is not on curve");const F=u($);let J;try{J=r.sqrt(F)}catch(se){const Te=se instanceof Error?": "+se.message:"";throw new Error("Point is not on curve"+Te)}const ee=(J&ne)===ne;return(I&1)===1!==ee&&(J=r.neg(J)),{x:$,y:J}}else if(w===n&&I===4){const $=r.fromBytes(R.subarray(0,r.BYTES)),F=r.fromBytes(R.subarray(r.BYTES,2*r.BYTES));return{x:$,y:F}}else throw new Error(`Point of length ${w} was invalid. Expected ${a} compressed bytes or ${n} uncompressed bytes`)}}),p=z=>dt(Ve(z,t.nByteLength));function g(z){const w=o>>ne;return z>w}function h(z){return g(z)?s(-z):z}const b=(z,w,I)=>te(z.slice(w,I));class v{constructor(w,I,R){this.r=w,this.s=I,this.recovery=R,this.assertValidity()}static fromCompact(w){const I=t.nByteLength;return w=Z("compactSignature",w,I*2),new v(b(w,0,I),b(w,I,2*I))}static fromDER(w){const{r:I,s:R}=Ze.toSig(Z("DER",w));return new v(I,R)}assertValidity(){if(!f(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!f(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(w){return new v(this.r,this.s,w)}recoverPublicKey(w){const{r:I,s:R,recovery:$}=this,F=B(Z("msgHash",w));if($==null||![0,1,2,3].includes($))throw new Error("recovery id invalid");const J=$===2||$===3?I+t.n:I;if(J>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");const ee=$&1?"03":"02",Be=c.fromHex(ee+p(J)),se=l(J),Te=s(-F*se),bt=s(R*se),je=c.BASE.multiplyAndAddUnsafe(Be,Te,bt);if(!je)throw new Error("point at infinify");return je.assertValidity(),je}hasHighS(){return g(this.s)}normalizeS(){return this.hasHighS()?new v(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return ht(this.toDERHex())}toDERHex(){return Ze.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ht(this.toCompactHex())}toCompactHex(){return p(this.r)+p(this.s)}}const S={isValidPrivateKey(z){try{return d(z),!0}catch{return!1}},normPrivateKeyToScalar:d,randomPrivateKey:()=>{const z=Ha(t.n);return Li(t.randomBytes(z),t.n)},precompute(z=8,w=c.BASE){return w._setWindowSize(z),w.multiply(BigInt(3)),w}};function k(z,w=!0){return c.fromPrivateKey(z).toRawBytes(w)}function A(z){const w=Qe(z),I=typeof z=="string",R=(w||I)&&z.length;return w?R===a||R===n:I?R===2*a||R===2*n:z instanceof c}function y(z,w,I=!0){if(A(z))throw new Error("first arg must be private key");if(!A(w))throw new Error("second arg must be public key");return c.fromHex(w).multiply(d(z)).toRawBytes(I)}const E=t.bits2int||function(z){const w=te(z),I=z.length*8-t.nBitLength;return I>0?w>>BigInt(I):w},B=t.bits2int_modN||function(z){return s(E(z))},T=fo(t.nBitLength);function C(z){if(typeof z!="bigint")throw new Error("bigint expected");if(!(ze<=z&&z<T))throw new Error(`bigint expected < 2^${t.nBitLength}`);return Ve(z,t.nByteLength)}function _(z,w,I=U){if(["recovered","canonical"].some(Pe=>Pe in I))throw new Error("sign() legacy options not supported");const{hash:R,randomBytes:$}=t;let{lowS:F,prehash:J,extraEntropy:ee}=I;F==null&&(F=!0),z=Z("msgHash",z),J&&(z=Z("prehashed msgHash",R(z)));const Be=B(z),se=d(w),Te=[C(se),C(Be)];if(ee!=null&&ee!==!1){const Pe=ee===!0?$(r.BYTES):ee;Te.push(Z("extraEntropy",Pe))}const bt=Xe(...Te),je=Be;function kr(Pe){const tt=E(Pe);if(!f(tt))return;const qo=l(tt),rt=c.BASE.multiply(tt).toAffine(),le=s(rt.x);if(le===ze)return;const ot=s(qo*s(je+le*se));if(ot===ze)return;let Do=(rt.x===le?0:2)|Number(rt.y&ne),Vo=ot;return F&&g(ot)&&(Vo=h(ot),Do^=1),new v(le,Vo,Do)}return{seed:bt,k2sig:kr}}const U={lowS:t.lowS,prehash:!1},D={lowS:t.lowS,prehash:!1};function V(z,w,I=U){const{seed:R,k2sig:$}=_(z,w,I),F=t;return Na(F.hash.outputLen,F.nByteLength,F.hmac)(R,$)}c.BASE._setWindowSize(8);function X(z,w,I,R=D){var rt;const $=z;if(w=Z("msgHash",w),I=Z("publicKey",I),"strict"in R)throw new Error("options.strict was renamed to lowS");const{lowS:F,prehash:J}=R;let ee,Be;try{if(typeof $=="string"||Qe($))try{ee=v.fromDER($)}catch(le){if(!(le instanceof Ze.Err))throw le;ee=v.fromCompact($)}else if(typeof $=="object"&&typeof $.r=="bigint"&&typeof $.s=="bigint"){const{r:le,s:ot}=$;ee=new v(le,ot)}else throw new Error("PARSE");Be=c.fromHex(I)}catch(le){if(le.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(F&&ee.hasHighS())return!1;J&&(w=t.hash(w));const{r:se,s:Te}=ee,bt=B(w),je=l(Te),kr=s(bt*je),Pe=s(se*je),tt=(rt=c.BASE.multiplyAndAddUnsafe(Be,kr,Pe))==null?void 0:rt.toAffine();return tt?s(tt.x)===se:!1}return{CURVE:t,getPublicKey:k,getSharedSecret:y,sign:V,verify:X,ProjectivePoint:c,Signature:v,utils:S}}class qa extends oo{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,Sa(t);const o=be(r);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const a=this.blockLen,n=new Uint8Array(a);n.set(o.length>a?t.create().update(o).digest():o);for(let i=0;i<n.length;i++)n[i]^=54;this.iHash.update(n),this.oHash=t.create();for(let i=0;i<n.length;i++)n[i]^=106;this.oHash.update(n),n.fill(0)}update(t){return ut(this),this.iHash.update(t),this}digestInto(t){ut(this),de(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:o,finished:a,destroyed:n,blockLen:i,outputLen:s}=this;return t=t,t.finished=a,t.destroyed=n,t.blockLen=i,t.outputLen=s,t.oHash=r._cloneInto(t.oHash),t.iHash=o._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Je=(e,t,r)=>new qa(e,t).update(r).digest();Je.create=(e,t)=>new qa(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Oi(e){return{hash:e,hmac:(t,...r)=>Je(e,t,kt(...r)),randomBytes:no}}function Gi(e,t){const r=o=>Fi({...e,...Oi(o)});return Object.freeze({...r(t),create:r})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const pr=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),tr=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Da=BigInt(1),rr=BigInt(2),aa=(e,t)=>(e+t/rr)/t;function Va(e){const t=pr,r=BigInt(3),o=BigInt(6),a=BigInt(11),n=BigInt(22),i=BigInt(23),s=BigInt(44),l=BigInt(88),c=e*e*e%t,d=c*c*e%t,u=ae(d,r,t)*d%t,f=ae(u,r,t)*d%t,p=ae(f,rr,t)*c%t,g=ae(p,a,t)*p%t,h=ae(g,n,t)*g%t,b=ae(h,s,t)*h%t,v=ae(b,l,t)*b%t,S=ae(v,s,t)*h%t,k=ae(S,r,t)*d%t,A=ae(k,i,t)*g%t,y=ae(A,o,t)*c%t,E=ae(y,rr,t);if(!Dr.eql(Dr.sqr(E),e))throw new Error("Cannot find square root");return E}const Dr=Ri(pr,void 0,void 0,{sqrt:Va}),Q=Gi({a:BigInt(0),b:BigInt(7),Fp:Dr,n:tr,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=tr,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),o=-Da*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),a=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),n=r,i=BigInt("0x100000000000000000000000000000000"),s=aa(n*e,t),l=aa(-o*e,t);let c=G(e-s*r-l*a,t),d=G(-s*o-l*n,t);const u=c>i,f=d>i;if(u&&(c=t-c),f&&(d=t-d),c>i||d>i)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:u,k1:c,k2neg:f,k2:d}}}},ve),mr=BigInt(0),Ma=e=>typeof e=="bigint"&&mr<e&&e<pr,Wi=e=>typeof e=="bigint"&&mr<e&&e<tr,na={};function or(e,...t){let r=na[e];if(r===void 0){const o=ve(Uint8Array.from(e,a=>a.charCodeAt(0)));r=Xe(o,o),na[e]=r}return ve(Xe(r,...t))}const po=e=>e.toRawBytes(!0).slice(1),Vr=e=>Ve(e,32),Ar=e=>G(e,pr),St=e=>G(e,tr),mo=Q.ProjectivePoint,Zi=(e,t,r)=>mo.BASE.multiplyAndAddUnsafe(e,t,r);function Mr(e){let t=Q.utils.normPrivateKeyToScalar(e),r=mo.fromPrivateKey(t);return{scalar:r.hasEvenY()?t:St(-t),bytes:po(r)}}function Pa(e){if(!Ma(e))throw new Error("bad x: need 0 < x < p");const t=Ar(e*e),r=Ar(t*e+BigInt(7));let o=Va(r);o%rr!==mr&&(o=Ar(-o));const a=new mo(e,o,Da);return a.assertValidity(),a}function Fa(...e){return St(te(or("BIP0340/challenge",...e)))}function Yi(e){return Mr(e).bytes}function Qi(e,t,r=no(32)){const o=Z("message",e),{bytes:a,scalar:n}=Mr(t),i=Z("auxRand",r,32),s=Vr(n^te(or("BIP0340/aux",i))),l=or("BIP0340/nonce",s,a,o),c=St(te(l));if(c===mr)throw new Error("sign failed: k is zero");const{bytes:d,scalar:u}=Mr(c),f=Fa(d,a,o),p=new Uint8Array(64);if(p.set(d,0),p.set(Vr(St(u+f*n)),32),!Oa(p,o,a))throw new Error("sign: Invalid signature produced");return p}function Oa(e,t,r){const o=Z("signature",e,64),a=Z("message",t),n=Z("publicKey",r,32);try{const i=Pa(te(n)),s=te(o.subarray(0,32));if(!Ma(s))return!1;const l=te(o.subarray(32,64));if(!Wi(l))return!1;const c=Fa(Vr(s),po(i),a),d=Zi(i,l,St(-c));return!(!d||!d.hasEvenY()||d.toAffine().x!==s)}catch{return!1}}const At={getPublicKey:Yi,sign:Qi,verify:Oa,utils:{randomPrivateKey:Q.utils.randomPrivateKey,lift_x:Pa,pointToBytes:po,numberToBytesBE:Ve,bytesToNumberBE:te,taggedHash:or,mod:G}},go=Q.ProjectivePoint,Xi=Q.CURVE.n,gr=e=>_a(ve(e)),Ji=At.getPublicKey;Q.getPublicKey;var ie;(function(e){e[e.ecdsa=0]="ecdsa",e[e.schnorr=1]="schnorr"})(ie||(ie={}));function es(e,t){const r=e.length;if(t===ie.ecdsa){if(r===32)throw new Error("Expected non-Schnorr key");return go.fromHex(e),e}else if(t===ie.schnorr){if(r!==32)throw new Error("Expected 32-byte Schnorr key");return At.utils.lift_x(At.utils.bytesToNumberBE(e)),e}else throw new Error("Unknown key type")}function ts(e,t){const r=At.utils,o=r.taggedHash("TapTweak",e,t),a=r.bytesToNumberBE(o);if(a>=Xi)throw new Error("tweak higher than curve order");return a}function rs(e,t){const r=At.utils,o=ts(e,t),n=r.lift_x(r.bytesToNumberBE(e)).add(go.fromPrivateKey(o)),i=n.hasEvenY()?0:1;return[r.pointToBytes(n),i]}const os=ve(go.BASE.toRawBytes(!1)),Me={bech32:"bc",pubKeyHash:0,scriptHash:5,wif:128};var P;(function(e){e[e.OP_0=0]="OP_0",e[e.PUSHDATA1=76]="PUSHDATA1",e[e.PUSHDATA2=77]="PUSHDATA2",e[e.PUSHDATA4=78]="PUSHDATA4",e[e["1NEGATE"]=79]="1NEGATE",e[e.RESERVED=80]="RESERVED",e[e.OP_1=81]="OP_1",e[e.OP_2=82]="OP_2",e[e.OP_3=83]="OP_3",e[e.OP_4=84]="OP_4",e[e.OP_5=85]="OP_5",e[e.OP_6=86]="OP_6",e[e.OP_7=87]="OP_7",e[e.OP_8=88]="OP_8",e[e.OP_9=89]="OP_9",e[e.OP_10=90]="OP_10",e[e.OP_11=91]="OP_11",e[e.OP_12=92]="OP_12",e[e.OP_13=93]="OP_13",e[e.OP_14=94]="OP_14",e[e.OP_15=95]="OP_15",e[e.OP_16=96]="OP_16",e[e.NOP=97]="NOP",e[e.VER=98]="VER",e[e.IF=99]="IF",e[e.NOTIF=100]="NOTIF",e[e.VERIF=101]="VERIF",e[e.VERNOTIF=102]="VERNOTIF",e[e.ELSE=103]="ELSE",e[e.ENDIF=104]="ENDIF",e[e.VERIFY=105]="VERIFY",e[e.RETURN=106]="RETURN",e[e.TOALTSTACK=107]="TOALTSTACK",e[e.FROMALTSTACK=108]="FROMALTSTACK",e[e["2DROP"]=109]="2DROP",e[e["2DUP"]=110]="2DUP",e[e["3DUP"]=111]="3DUP",e[e["2OVER"]=112]="2OVER",e[e["2ROT"]=113]="2ROT",e[e["2SWAP"]=114]="2SWAP",e[e.IFDUP=115]="IFDUP",e[e.DEPTH=116]="DEPTH",e[e.DROP=117]="DROP",e[e.DUP=118]="DUP",e[e.NIP=119]="NIP",e[e.OVER=120]="OVER",e[e.PICK=121]="PICK",e[e.ROLL=122]="ROLL",e[e.ROT=123]="ROT",e[e.SWAP=124]="SWAP",e[e.TUCK=125]="TUCK",e[e.CAT=126]="CAT",e[e.SUBSTR=127]="SUBSTR",e[e.LEFT=128]="LEFT",e[e.RIGHT=129]="RIGHT",e[e.SIZE=130]="SIZE",e[e.INVERT=131]="INVERT",e[e.AND=132]="AND",e[e.OR=133]="OR",e[e.XOR=134]="XOR",e[e.EQUAL=135]="EQUAL",e[e.EQUALVERIFY=136]="EQUALVERIFY",e[e.RESERVED1=137]="RESERVED1",e[e.RESERVED2=138]="RESERVED2",e[e["1ADD"]=139]="1ADD",e[e["1SUB"]=140]="1SUB",e[e["2MUL"]=141]="2MUL",e[e["2DIV"]=142]="2DIV",e[e.NEGATE=143]="NEGATE",e[e.ABS=144]="ABS",e[e.NOT=145]="NOT",e[e["0NOTEQUAL"]=146]="0NOTEQUAL",e[e.ADD=147]="ADD",e[e.SUB=148]="SUB",e[e.MUL=149]="MUL",e[e.DIV=150]="DIV",e[e.MOD=151]="MOD",e[e.LSHIFT=152]="LSHIFT",e[e.RSHIFT=153]="RSHIFT",e[e.BOOLAND=154]="BOOLAND",e[e.BOOLOR=155]="BOOLOR",e[e.NUMEQUAL=156]="NUMEQUAL",e[e.NUMEQUALVERIFY=157]="NUMEQUALVERIFY",e[e.NUMNOTEQUAL=158]="NUMNOTEQUAL",e[e.LESSTHAN=159]="LESSTHAN",e[e.GREATERTHAN=160]="GREATERTHAN",e[e.LESSTHANOREQUAL=161]="LESSTHANOREQUAL",e[e.GREATERTHANOREQUAL=162]="GREATERTHANOREQUAL",e[e.MIN=163]="MIN",e[e.MAX=164]="MAX",e[e.WITHIN=165]="WITHIN",e[e.RIPEMD160=166]="RIPEMD160",e[e.SHA1=167]="SHA1",e[e.SHA256=168]="SHA256",e[e.HASH160=169]="HASH160",e[e.HASH256=170]="HASH256",e[e.CODESEPARATOR=171]="CODESEPARATOR",e[e.CHECKSIG=172]="CHECKSIG",e[e.CHECKSIGVERIFY=173]="CHECKSIGVERIFY",e[e.CHECKMULTISIG=174]="CHECKMULTISIG",e[e.CHECKMULTISIGVERIFY=175]="CHECKMULTISIGVERIFY",e[e.NOP1=176]="NOP1",e[e.CHECKLOCKTIMEVERIFY=177]="CHECKLOCKTIMEVERIFY",e[e.CHECKSEQUENCEVERIFY=178]="CHECKSEQUENCEVERIFY",e[e.NOP4=179]="NOP4",e[e.NOP5=180]="NOP5",e[e.NOP6=181]="NOP6",e[e.NOP7=182]="NOP7",e[e.NOP8=183]="NOP8",e[e.NOP9=184]="NOP9",e[e.NOP10=185]="NOP10",e[e.CHECKSIGADD=186]="CHECKSIGADD",e[e.INVALID=255]="INVALID"})(P||(P={}));function Ga(e=6,t=!1){return pe({encodeStream:(r,o)=>{if(o===0n)return;const a=o<0,n=BigInt(o),i=[];for(let s=a?-n:n;s;s>>=8n)i.push(Number(s&0xffn));i[i.length-1]>=128?i.push(a?128:0):a&&(i[i.length-1]|=128),r.bytes(new Uint8Array(i))},decodeStream:r=>{const o=r.leftBytes;if(o>e)throw new Error(`ScriptNum: number (${o}) bigger than limit=${e}`);if(o===0)return 0n;if(t&&!(r.data[o-1]&127)&&(o<=1||!(r.data[o-2]&128)))throw new Error("Non-minimally encoded ScriptNum");let a=0,n=0n;for(let i=0;i<o;++i)a=r.byte(),n|=BigInt(a)<<8n*BigInt(i);return a>=128&&(n&=2n**BigInt(o*8)-1n>>1n,n=-n),n}})}function as(e,t=4,r=!0){if(typeof e=="number")return e;if(H(e))try{const o=Ga(t,r).decode(e);return o>Number.MAX_SAFE_INTEGER?void 0:Number(o)}catch{return}}const Pr=pe({encodeStream:(e,t)=>{for(let r of t){if(typeof r=="string"){if(P[r]===void 0)throw new Error(`Unknown opcode=${r}`);e.byte(P[r]);continue}else if(typeof r=="number"){if(r===0){e.byte(0);continue}else if(1<=r&&r<=16){e.byte(P.OP_1-1+r);continue}}if(typeof r=="number"&&(r=Ga().encode(BigInt(r))),!H(r))throw new Error(`Wrong Script OP=${r} (${typeof r})`);const o=r.length;o<P.PUSHDATA1?e.byte(o):o<=255?(e.byte(P.PUSHDATA1),e.byte(o)):o<=65535?(e.byte(P.PUSHDATA2),e.bytes(Yo.encode(o))):(e.byte(P.PUSHDATA4),e.bytes(xt.encode(o))),e.bytes(r)}},decodeStream:e=>{const t=[];for(;!e.isEnd();){const r=e.byte();if(P.OP_0<r&&r<=P.PUSHDATA4){let o;if(r<P.PUSHDATA1)o=r;else if(r===P.PUSHDATA1)o=Qn.decodeStream(e);else if(r===P.PUSHDATA2)o=Yo.decodeStream(e);else if(r===P.PUSHDATA4)o=xt.decodeStream(e);else throw new Error("Should be not possible");t.push(e.bytes(o))}else if(r===0)t.push(0);else if(P.OP_1<=r&&r<=P.OP_16)t.push(r-(P.OP_1-1));else{const o=P[r];if(o===void 0)throw new Error(`Unknown opcode=${r.toString(16)}`);t.push(o)}}return t}}),ia={253:[253,2,253n,65535n],254:[254,4,65536n,4294967295n],255:[255,8,4294967296n,18446744073709551615n]},bo=pe({encodeStream:(e,t)=>{if(typeof t=="number"&&(t=BigInt(t)),0n<=t&&t<=252n)return e.byte(Number(t));for(const[r,o,a,n]of Object.values(ia))if(!(a>t||t>n)){e.byte(r);for(let i=0;i<o;i++)e.byte(Number(t>>8n*BigInt(i)&0xffn));return}throw e.err(`VarInt too big: ${t}`)},decodeStream:e=>{const t=e.byte();if(t<=252)return BigInt(t);const[r,o,a]=ia[t];let n=0n;for(let i=0;i<o;i++)n|=BigInt(e.byte())<<8n*BigInt(i);if(n<a)throw e.err(`Wrong CompactSize(${8*o})`);return n}}),ns=Jr(bo,Xr.number),vo=za(bo),is=to(ns,vo),sa=e=>to(bo,e),ss=eo({txid:za(32,!0),index:xt,finalScriptSig:vo,sequence:xt}),ls=eo({amount:Zn,script:vo}),cs=eo({version:Yn,segwitFlag:Xn(new Uint8Array([0,1])),inputs:sa(ss),outputs:sa(ls),witnesses:Jn("segwitFlag",to("inputs/length",is)),lockTime:xt});function us(e){if(e.segwitFlag&&e.witnesses&&!e.witnesses.length)throw new Error("Segwit flag with empty witnesses array");return e}xa(cs,us);function De(e,t){try{return es(e,t),!0}catch{return!1}}const ds={encode(e){if(!(e.length!==2||!H(e[0])||!De(e[0],ie.ecdsa)||e[1]!=="CHECKSIG"))return{type:"pk",pubkey:e[0]}},decode:e=>e.type==="pk"?[e.pubkey,"CHECKSIG"]:void 0},hs={encode(e){if(!(e.length!==5||e[0]!=="DUP"||e[1]!=="HASH160"||!H(e[2]))&&!(e[3]!=="EQUALVERIFY"||e[4]!=="CHECKSIG"))return{type:"pkh",hash:e[2]}},decode:e=>e.type==="pkh"?["DUP","HASH160",e.hash,"EQUALVERIFY","CHECKSIG"]:void 0},fs={encode(e){if(!(e.length!==3||e[0]!=="HASH160"||!H(e[1])||e[2]!=="EQUAL"))return{type:"sh",hash:e[1]}},decode:e=>e.type==="sh"?["HASH160",e.hash,"EQUAL"]:void 0},ps={encode(e){if(!(e.length!==2||e[0]!==0||!H(e[1]))&&e[1].length===32)return{type:"wsh",hash:e[1]}},decode:e=>e.type==="wsh"?[0,e.hash]:void 0},ms={encode(e){if(!(e.length!==2||e[0]!==0||!H(e[1]))&&e[1].length===20)return{type:"wpkh",hash:e[1]}},decode:e=>e.type==="wpkh"?[0,e.hash]:void 0},gs={encode(e){const t=e.length-1;if(e[t]!=="CHECKMULTISIG")return;const r=e[0],o=e[t-1];if(typeof r!="number"||typeof o!="number")return;const a=e.slice(1,-2);if(o===a.length){for(const n of a)if(!H(n))return;return{type:"ms",m:r,pubkeys:a}}},decode:e=>e.type==="ms"?[e.m,...e.pubkeys,e.pubkeys.length,"CHECKMULTISIG"]:void 0},bs={encode(e){if(!(e.length!==2||e[0]!==1||!H(e[1])))return{type:"tr",pubkey:e[1]}},decode:e=>e.type==="tr"?[1,e.pubkey]:void 0},vs={encode(e){const t=e.length-1;if(e[t]!=="CHECKSIG")return;const r=[];for(let o=0;o<t;o++){const a=e[o];if(o&1){if(a!=="CHECKSIGVERIFY"||o===t-1)return;continue}if(!H(a))return;r.push(a)}return{type:"tr_ns",pubkeys:r}},decode:e=>{if(e.type!=="tr_ns")return;const t=[];for(let r=0;r<e.pubkeys.length-1;r++)t.push(e.pubkeys[r],"CHECKSIGVERIFY");return t.push(e.pubkeys[e.pubkeys.length-1],"CHECKSIG"),t}},ys={encode(e){const t=e.length-1;if(e[t]!=="NUMEQUAL"||e[1]!=="CHECKSIG")return;const r=[],o=as(e[t-1]);if(typeof o=="number"){for(let a=0;a<t-1;a++){const n=e[a];if(a&1){if(n!==(a===1?"CHECKSIG":"CHECKSIGADD"))throw new Error("OutScript.encode/tr_ms: wrong element");continue}if(!H(n))throw new Error("OutScript.encode/tr_ms: wrong key element");r.push(n)}return{type:"tr_ms",pubkeys:r,m:o}}},decode:e=>{if(e.type!=="tr_ms")return;const t=[e.pubkeys[0],"CHECKSIG"];for(let r=1;r<e.pubkeys.length;r++)t.push(e.pubkeys[r],"CHECKSIGADD");return t.push(e.m,"NUMEQUAL"),t}},ws={encode(e){return{type:"unknown",script:Pr.encode(e)}},decode:e=>e.type==="unknown"?Pr.decode(e.script):void 0},ks=[ds,hs,fs,ps,ms,gs,bs,vs,ys,ws],Es=Jr(Pr,Xr.match(ks)),Se=xa(Es,e=>{if(e.type==="pk"&&!De(e.pubkey,ie.ecdsa))throw new Error("OutScript/pk: wrong key");if((e.type==="pkh"||e.type==="sh"||e.type==="wpkh")&&(!H(e.hash)||e.hash.length!==20))throw new Error(`OutScript/${e.type}: wrong hash`);if(e.type==="wsh"&&(!H(e.hash)||e.hash.length!==32))throw new Error("OutScript/wsh: wrong hash");if(e.type==="tr"&&(!H(e.pubkey)||!De(e.pubkey,ie.schnorr)))throw new Error("OutScript/tr: wrong taproot public key");if((e.type==="ms"||e.type==="tr_ns"||e.type==="tr_ms")&&!Array.isArray(e.pubkeys))throw new Error("OutScript/multisig: wrong pubkeys array");if(e.type==="ms"){const t=e.pubkeys.length;for(const r of e.pubkeys)if(!De(r,ie.ecdsa))throw new Error("OutScript/multisig: wrong pubkey");if(e.m<=0||t>16||e.m>t)throw new Error("OutScript/multisig: invalid params")}if(e.type==="tr_ns"||e.type==="tr_ms"){for(const t of e.pubkeys)if(!De(t,ie.schnorr))throw new Error(`OutScript/${e.type}: wrong pubkey`)}if(e.type==="tr_ms"){const t=e.pubkeys.length;if(e.m<=0||t>999||e.m>t)throw new Error("OutScript/tr_ms: invalid params")}return e});function la(e,t){if(!ct(e.hash,ve(t)))throw new Error("checkScript: wsh wrong witnessScript hash");const r=Se.decode(t);if(r.type==="tr"||r.type==="tr_ns"||r.type==="tr_ms")throw new Error(`checkScript: P2${r.type} cannot be wrapped in P2SH`);if(r.type==="wpkh"||r.type==="sh")throw new Error(`checkScript: P2${r.type} cannot be wrapped in P2WSH`)}function zs(e,t,r){if(e){const o=Se.decode(e);if(o.type==="tr_ns"||o.type==="tr_ms"||o.type==="ms"||o.type=="pk")throw new Error(`checkScript: non-wrapped ${o.type}`);if(o.type==="sh"&&t){if(!ct(o.hash,gr(t)))throw new Error("checkScript: sh wrong redeemScript hash");const a=Se.decode(t);if(a.type==="tr"||a.type==="tr_ns"||a.type==="tr_ms")throw new Error(`checkScript: P2${a.type} cannot be wrapped in P2SH`);if(a.type==="sh")throw new Error("checkScript: P2SH cannot be wrapped in P2SH")}o.type==="wsh"&&r&&la(o,r)}if(t){const o=Se.decode(t);o.type==="wsh"&&r&&la(o,r)}}const xs=(e,t=Me)=>{if(!De(e,ie.ecdsa))throw new Error("P2PKH: invalid publicKey");const r=gr(e);return{type:"pkh",script:Se.encode({type:"pkh",hash:r}),address:br(t).encode({type:"pkh",hash:r})}},Ss=(e,t=Me)=>{const r=e.script;if(!H(r))throw new Error(`Wrong script: ${typeof e.script}, expected Uint8Array`);const o=gr(r),a=Se.encode({type:"sh",hash:o});zs(a,r,e.witnessScript);const n={type:"sh",redeemScript:r,script:Se.encode({type:"sh",hash:o}),address:br(t).encode({type:"sh",hash:o})};return e.witnessScript&&(n.witnessScript=e.witnessScript),n},ca=(e,t=Me)=>{if(!De(e,ie.ecdsa))throw new Error("P2WPKH: invalid publicKey");if(e.length===65)throw new Error("P2WPKH: uncompressed public key");const r=gr(e);return{type:"wpkh",script:Se.encode({type:"wpkh",hash:r}),address:br(t).encode({type:"wpkh",hash:r})}};function As(e,t,r=Me,o=!1,a){if(!e&&!t)throw new Error("p2tr: should have pubKey or scriptTree (or both)");const n=typeof e=="string"?Ot.decode(e):e||os;if(!De(n,ie.schnorr))throw new Error("p2tr: non-schnorr pubkey");const[i,s]=rs(n,Dn);return{type:"tr",script:Se.encode({type:"tr",pubkey:i}),address:br(r).encode({type:"tr",pubkey:i}),tweakedPubkey:i,tapInternalKey:n}}function Bs(e,t,r=Me){return As(Ji(t),void 0,r).address}const yo=ya(ve);function Wa(e,t){if(t.length<2||t.length>40)throw new Error("Witness: invalid length");if(e>16)throw new Error("Witness: invalid version");if(e===0&&!(t.length===20||t.length===32))throw new Error("Witness: invalid length for version")}function Br(e,t,r=Me){Wa(e,t);const o=e===0?Lr:ka;return o.encode(r.bech32,[e].concat(o.toWords(t)))}function Fr(e,t){return yo.encode(Xt(Uint8Array.from(t),e))}function Vt(e=Me){return{encode(t){const r=Xt(t,new Uint8Array([1]));return Fr(r.subarray(0,33),[e.wif])},decode(t){let r=yo.decode(t);if(r[0]!==e.wif)throw new Error("Wrong WIF prefix");if(r=r.subarray(1),r.length!==33)throw new Error("Wrong WIF length");if(r[32]!==1)throw new Error("Wrong WIF postfix");return r.subarray(0,-1)}}}function br(e=Me){return{encode(t){const{type:r}=t;if(r==="wpkh")return Br(0,t.hash,e);if(r==="wsh")return Br(0,t.hash,e);if(r==="tr")return Br(1,t.pubkey,e);if(r==="pkh")return Fr(t.hash,[e.pubKeyHash]);if(r==="sh")return Fr(t.hash,[e.scriptHash]);throw new Error(`Unknown address type=${r}`)},decode(t){if(t.length<14||t.length>74)throw new Error("Invalid address length");if(e.bech32&&t.toLowerCase().startsWith(e.bech32)){let o;try{if(o=Lr.decode(t),o.words[0]!==0)throw new Error(`bech32: wrong version=${o.words[0]}`)}catch{if(o=ka.decode(t),o.words[0]===0)throw new Error(`bech32m: wrong version=${o.words[0]}`)}if(o.prefix!==e.bech32)throw new Error(`wrong bech32 prefix=${o.prefix}`);const[a,...n]=o.words,i=Lr.fromWords(n);if(Wa(a,i),a===0&&i.length===32)return{type:"wsh",hash:i};if(a===0&&i.length===20)return{type:"wpkh",hash:i};if(a===1&&i.length===32)return{type:"tr",pubkey:i};throw new Error("Unknown witness program")}const r=yo.decode(t);if(r.length!==21)throw new Error("Invalid base58 address");if(r[0]===e.pubKeyHash)return{type:"pkh",hash:r.slice(1)};if(r[0]===e.scriptHash)return{type:"sh",hash:r.slice(1)};throw new Error(`Invalid address prefix=${r[0]}`)}}}const Mt=BigInt(2**32-1),Or=BigInt(32);function Za(e,t=!1){return t?{h:Number(e&Mt),l:Number(e>>Or&Mt)}:{h:Number(e>>Or&Mt)|0,l:Number(e&Mt)|0}}function Ts(e,t=!1){let r=new Uint32Array(e.length),o=new Uint32Array(e.length);for(let a=0;a<e.length;a++){const{h:n,l:i}=Za(e[a],t);[r[a],o[a]]=[n,i]}return[r,o]}const js=(e,t)=>BigInt(e>>>0)<<Or|BigInt(t>>>0),Is=(e,t,r)=>e>>>r,Us=(e,t,r)=>e<<32-r|t>>>r,_s=(e,t,r)=>e>>>r|t<<32-r,Cs=(e,t,r)=>e<<32-r|t>>>r,$s=(e,t,r)=>e<<64-r|t>>>r-32,Ns=(e,t,r)=>e>>>r-32|t<<64-r,Rs=(e,t)=>t,Ls=(e,t)=>e,Hs=(e,t,r)=>e<<r|t>>>32-r,Ks=(e,t,r)=>t<<r|e>>>32-r,qs=(e,t,r)=>t<<r-32|e>>>64-r,Ds=(e,t,r)=>e<<r-32|t>>>64-r;function Vs(e,t,r,o){const a=(t>>>0)+(o>>>0);return{h:e+r+(a/2**32|0)|0,l:a|0}}const Ms=(e,t,r)=>(e>>>0)+(t>>>0)+(r>>>0),Ps=(e,t,r,o)=>t+r+o+(e/2**32|0)|0,Fs=(e,t,r,o)=>(e>>>0)+(t>>>0)+(r>>>0)+(o>>>0),Os=(e,t,r,o,a)=>t+r+o+a+(e/2**32|0)|0,Gs=(e,t,r,o,a)=>(e>>>0)+(t>>>0)+(r>>>0)+(o>>>0)+(a>>>0),Ws=(e,t,r,o,a,n)=>t+r+o+a+n+(e/2**32|0)|0,j={fromBig:Za,split:Ts,toBig:js,shrSH:Is,shrSL:Us,rotrSH:_s,rotrSL:Cs,rotrBH:$s,rotrBL:Ns,rotr32H:Rs,rotr32L:Ls,rotlSH:Hs,rotlSL:Ks,rotlBH:qs,rotlBL:Ds,add:Vs,add3L:Ms,add3H:Ps,add4L:Fs,add4H:Os,add5H:Ws,add5L:Gs},[Zs,Ys]=j.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Ce=new Uint32Array(80),$e=new Uint32Array(80);class Qs extends io{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:r,Bh:o,Bl:a,Ch:n,Cl:i,Dh:s,Dl:l,Eh:c,El:d,Fh:u,Fl:f,Gh:p,Gl:g,Hh:h,Hl:b}=this;return[t,r,o,a,n,i,s,l,c,d,u,f,p,g,h,b]}set(t,r,o,a,n,i,s,l,c,d,u,f,p,g,h,b){this.Ah=t|0,this.Al=r|0,this.Bh=o|0,this.Bl=a|0,this.Ch=n|0,this.Cl=i|0,this.Dh=s|0,this.Dl=l|0,this.Eh=c|0,this.El=d|0,this.Fh=u|0,this.Fl=f|0,this.Gh=p|0,this.Gl=g|0,this.Hh=h|0,this.Hl=b|0}process(t,r){for(let k=0;k<16;k++,r+=4)Ce[k]=t.getUint32(r),$e[k]=t.getUint32(r+=4);for(let k=16;k<80;k++){const A=Ce[k-15]|0,y=$e[k-15]|0,E=j.rotrSH(A,y,1)^j.rotrSH(A,y,8)^j.shrSH(A,y,7),B=j.rotrSL(A,y,1)^j.rotrSL(A,y,8)^j.shrSL(A,y,7),T=Ce[k-2]|0,C=$e[k-2]|0,_=j.rotrSH(T,C,19)^j.rotrBH(T,C,61)^j.shrSH(T,C,6),U=j.rotrSL(T,C,19)^j.rotrBL(T,C,61)^j.shrSL(T,C,6),D=j.add4L(B,U,$e[k-7],$e[k-16]),V=j.add4H(D,E,_,Ce[k-7],Ce[k-16]);Ce[k]=V|0,$e[k]=D|0}let{Ah:o,Al:a,Bh:n,Bl:i,Ch:s,Cl:l,Dh:c,Dl:d,Eh:u,El:f,Fh:p,Fl:g,Gh:h,Gl:b,Hh:v,Hl:S}=this;for(let k=0;k<80;k++){const A=j.rotrSH(u,f,14)^j.rotrSH(u,f,18)^j.rotrBH(u,f,41),y=j.rotrSL(u,f,14)^j.rotrSL(u,f,18)^j.rotrBL(u,f,41),E=u&p^~u&h,B=f&g^~f&b,T=j.add5L(S,y,B,Ys[k],$e[k]),C=j.add5H(T,v,A,E,Zs[k],Ce[k]),_=T|0,U=j.rotrSH(o,a,28)^j.rotrBH(o,a,34)^j.rotrBH(o,a,39),D=j.rotrSL(o,a,28)^j.rotrBL(o,a,34)^j.rotrBL(o,a,39),V=o&n^o&s^n&s,X=a&i^a&l^i&l;v=h|0,S=b|0,h=p|0,b=g|0,p=u|0,g=f|0,{h:u,l:f}=j.add(c|0,d|0,C|0,_|0),c=s|0,d=l|0,s=n|0,l=i|0,n=o|0,i=a|0;const z=j.add3L(_,D,X);o=j.add3H(z,C,U,V),a=z|0}({h:o,l:a}=j.add(this.Ah|0,this.Al|0,o|0,a|0)),{h:n,l:i}=j.add(this.Bh|0,this.Bl|0,n|0,i|0),{h:s,l}=j.add(this.Ch|0,this.Cl|0,s|0,l|0),{h:c,l:d}=j.add(this.Dh|0,this.Dl|0,c|0,d|0),{h:u,l:f}=j.add(this.Eh|0,this.El|0,u|0,f|0),{h:p,l:g}=j.add(this.Fh|0,this.Fl|0,p|0,g|0),{h,l:b}=j.add(this.Gh|0,this.Gl|0,h|0,b|0),{h:v,l:S}=j.add(this.Hh|0,this.Hl|0,v|0,S|0),this.set(o,a,n,i,s,l,c,d,u,f,p,g,h,b,v,S)}roundClean(){Ce.fill(0),$e.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const Bt=ao(()=>new Qs);/*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const Pt=Q.ProjectivePoint,Tr=ya(ve);function ua(e){return BigInt(`0x${ro(e)}`)}function Xs(e){return Ta(e.toString(16).padStart(64,"0"))}const Js=ja("Bitcoin seed"),jr={private:76066276,public:76067358},Ir=2147483648,el=e=>_a(ve(e)),tl=e=>Ye(e).getUint32(0,!1),Ft=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return Ye(t).setUint32(0,e,!1),t};class ge{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return tl(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return Tr.encode(this.serialize(this.versions.private,kt(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Tr.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,r=jr){if(de(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const o=Je(Bt,Js,t);return new ge({versions:r,chainCode:o.slice(32),privateKey:o.slice(0,32)})}static fromExtendedKey(t,r=jr){const o=Tr.decode(t),a=Ye(o),n=a.getUint32(0,!1),i={versions:r,depth:o[4],parentFingerprint:a.getUint32(5,!1),index:a.getUint32(9,!1),chainCode:o.slice(13,45)},s=o.slice(45),l=s[0]===0;if(n!==r[l?"private":"public"])throw new Error("Version mismatch");return l?new ge({...i,privateKey:s.slice(1)}):new ge({...i,publicKey:s})}static fromJSON(t){return ge.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||jr,this.depth=t.depth||0,this.chainCode=t.chainCode||null,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Q.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:ua(t.privateKey),this.privKeyBytes=Xs(this.privKey),this.pubKey=Q.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=Pt.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=el(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const r=t.replace(/^[mM]'?\//,"").split("/");let o=this;for(const a of r){const n=/^(\d+)('?)$/.exec(a),i=n&&n[1];if(!n||n.length!==3||typeof i!="string")throw new Error(`Invalid child index: ${a}`);let s=+i;if(!Number.isSafeInteger(s)||s>=Ir)throw new Error("Invalid index");n[2]==="'"&&(s+=Ir),o=o.deriveChild(s)}return o}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let r=Ft(t);if(t>=Ir){const s=this.privateKey;if(!s)throw new Error("Could not derive hardened child key");r=kt(new Uint8Array([0]),s,r)}else r=kt(this.pubKey,r);const o=Je(Bt,this.chainCode,r),a=ua(o.slice(0,32)),n=o.slice(32);if(!Q.utils.isValidPrivateKey(a))throw new Error("Tweak bigger than curve order");const i={versions:this.versions,chainCode:n,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const s=G(this.privKey+a,Q.CURVE.n);if(!Q.utils.isValidPrivateKey(s))throw new Error("The tweak was out of range or the resulted private key is invalid");i.privateKey=s}else{const s=Pt.fromHex(this.pubKey).add(Pt.fromPrivateKey(a));if(s.equals(Pt.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");i.publicKey=s.toRawBytes(!0)}return new ge(i)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return de(t,32),Q.sign(t,this.privKey).toCompactRawBytes()}verify(t,r){if(de(t,32),de(r,64),!this.publicKey)throw new Error("No publicKey set!");let o;try{o=Q.Signature.fromCompact(r)}catch{return!1}return Q.verify(o,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,r){if(!this.chainCode)throw new Error("No chainCode set");return de(r,33),kt(Ft(t),new Uint8Array([this.depth]),Ft(this.parentFingerprint),Ft(this.index),this.chainCode,r)}}function rl(e,t,r,o){Sa(e);const a=ai({dkLen:32,asyncTick:10},o),{c:n,dkLen:i,asyncTick:s}=a;if(xe(n),xe(i),xe(s),n<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const l=be(t),c=be(r),d=new Uint8Array(i),u=Je.create(e,l),f=u._cloneInto().update(c);return{c:n,dkLen:i,asyncTick:s,DK:d,PRF:u,PRFSalt:f}}function ol(e,t,r,o,a){return e.destroy(),t.destroy(),o&&o.destroy(),a.fill(0),r}function al(e,t,r,o){const{c:a,dkLen:n,DK:i,PRF:s,PRFSalt:l}=rl(e,t,r,o);let c;const d=new Uint8Array(4),u=Ye(d),f=new Uint8Array(s.outputLen);for(let p=1,g=0;g<n;p++,g+=s.outputLen){const h=i.subarray(g,g+s.outputLen);u.setInt32(0,p,!1),(c=l._cloneInto(c)).update(d).digestInto(f),h.set(f.subarray(0,h.length));for(let b=1;b<a;b++){s._cloneInto(c).update(f).digestInto(f);for(let v=0;v<h.length;v++)h[v]^=f[v]}}return ol(s,l,i,c,f)}/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const nl=e=>e[0]==="あいこくしん";function Ya(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function il(e){const t=Ya(e),r=t.split(" ");if(![12,15,18,21,24].includes(r.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:r}}function sl(e){de(e,16,20,24,28,32)}function ll(e,t=128){if(xe(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return dl(no(t/8),e)}const cl=e=>{const t=8-e.length/4;return new Uint8Array([ve(e)[0]>>t<<t])};function ul(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Wordlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),Kt.chain(Kt.checksum(1,cl),Kt.radix2(11,!0),Kt.alphabet(e))}function dl(e,t){return sl(e),ul(t).encode(e).join(nl(t)?"　":" ")}const hl=e=>Ya(`mnemonic${e}`);function Le(e,t=""){return al(Bt,il(e).nfkd,hl(t),{c:2048,dkLen:64})}const fl=`abdikace
abeceda
adresa
agrese
akce
aktovka
alej
alkohol
amputace
ananas
andulka
anekdota
anketa
antika
anulovat
archa
arogance
asfalt
asistent
aspirace
astma
astronom
atlas
atletika
atol
autobus
azyl
babka
bachor
bacil
baculka
badatel
bageta
bagr
bahno
bakterie
balada
baletka
balkon
balonek
balvan
balza
bambus
bankomat
barbar
baret
barman
baroko
barva
baterka
batoh
bavlna
bazalka
bazilika
bazuka
bedna
beran
beseda
bestie
beton
bezinka
bezmoc
beztak
bicykl
bidlo
biftek
bikiny
bilance
biograf
biolog
bitva
bizon
blahobyt
blatouch
blecha
bledule
blesk
blikat
blizna
blokovat
bloudit
blud
bobek
bobr
bodlina
bodnout
bohatost
bojkot
bojovat
bokorys
bolest
borec
borovice
bota
boubel
bouchat
bouda
boule
bourat
boxer
bradavka
brambora
branka
bratr
brepta
briketa
brko
brloh
bronz
broskev
brunetka
brusinka
brzda
brzy
bublina
bubnovat
buchta
buditel
budka
budova
bufet
bujarost
bukvice
buldok
bulva
bunda
bunkr
burza
butik
buvol
buzola
bydlet
bylina
bytovka
bzukot
capart
carevna
cedr
cedule
cejch
cejn
cela
celer
celkem
celnice
cenina
cennost
cenovka
centrum
cenzor
cestopis
cetka
chalupa
chapadlo
charita
chata
chechtat
chemie
chichot
chirurg
chlad
chleba
chlubit
chmel
chmura
chobot
chochol
chodba
cholera
chomout
chopit
choroba
chov
chrapot
chrlit
chrt
chrup
chtivost
chudina
chutnat
chvat
chvilka
chvost
chyba
chystat
chytit
cibule
cigareta
cihelna
cihla
cinkot
cirkus
cisterna
citace
citrus
cizinec
cizost
clona
cokoliv
couvat
ctitel
ctnost
cudnost
cuketa
cukr
cupot
cvaknout
cval
cvik
cvrkot
cyklista
daleko
dareba
datel
datum
dcera
debata
dechovka
decibel
deficit
deflace
dekl
dekret
demokrat
deprese
derby
deska
detektiv
dikobraz
diktovat
dioda
diplom
disk
displej
divadlo
divoch
dlaha
dlouho
dluhopis
dnes
dobro
dobytek
docent
dochutit
dodnes
dohled
dohoda
dohra
dojem
dojnice
doklad
dokola
doktor
dokument
dolar
doleva
dolina
doma
dominant
domluvit
domov
donutit
dopad
dopis
doplnit
doposud
doprovod
dopustit
dorazit
dorost
dort
dosah
doslov
dostatek
dosud
dosyta
dotaz
dotek
dotknout
doufat
doutnat
dovozce
dozadu
doznat
dozorce
drahota
drak
dramatik
dravec
draze
drdol
drobnost
drogerie
drozd
drsnost
drtit
drzost
duben
duchovno
dudek
duha
duhovka
dusit
dusno
dutost
dvojice
dvorec
dynamit
ekolog
ekonomie
elektron
elipsa
email
emise
emoce
empatie
epizoda
epocha
epopej
epos
esej
esence
eskorta
eskymo
etiketa
euforie
evoluce
exekuce
exkurze
expedice
exploze
export
extrakt
facka
fajfka
fakulta
fanatik
fantazie
farmacie
favorit
fazole
federace
fejeton
fenka
fialka
figurant
filozof
filtr
finance
finta
fixace
fjord
flanel
flirt
flotila
fond
fosfor
fotbal
fotka
foton
frakce
freska
fronta
fukar
funkce
fyzika
galeje
garant
genetika
geolog
gilotina
glazura
glejt
golem
golfista
gotika
graf
gramofon
granule
grep
gril
grog
groteska
guma
hadice
hadr
hala
halenka
hanba
hanopis
harfa
harpuna
havran
hebkost
hejkal
hejno
hejtman
hektar
helma
hematom
herec
herna
heslo
hezky
historik
hladovka
hlasivky
hlava
hledat
hlen
hlodavec
hloh
hloupost
hltat
hlubina
hluchota
hmat
hmota
hmyz
hnis
hnojivo
hnout
hoblina
hoboj
hoch
hodiny
hodlat
hodnota
hodovat
hojnost
hokej
holinka
holka
holub
homole
honitba
honorace
horal
horda
horizont
horko
horlivec
hormon
hornina
horoskop
horstvo
hospoda
hostina
hotovost
houba
houf
houpat
houska
hovor
hradba
hranice
hravost
hrazda
hrbolek
hrdina
hrdlo
hrdost
hrnek
hrobka
hromada
hrot
hrouda
hrozen
hrstka
hrubost
hryzat
hubenost
hubnout
hudba
hukot
humr
husita
hustota
hvozd
hybnost
hydrant
hygiena
hymna
hysterik
idylka
ihned
ikona
iluze
imunita
infekce
inflace
inkaso
inovace
inspekce
internet
invalida
investor
inzerce
ironie
jablko
jachta
jahoda
jakmile
jakost
jalovec
jantar
jarmark
jaro
jasan
jasno
jatka
javor
jazyk
jedinec
jedle
jednatel
jehlan
jekot
jelen
jelito
jemnost
jenom
jepice
jeseter
jevit
jezdec
jezero
jinak
jindy
jinoch
jiskra
jistota
jitrnice
jizva
jmenovat
jogurt
jurta
kabaret
kabel
kabinet
kachna
kadet
kadidlo
kahan
kajak
kajuta
kakao
kaktus
kalamita
kalhoty
kalibr
kalnost
kamera
kamkoliv
kamna
kanibal
kanoe
kantor
kapalina
kapela
kapitola
kapka
kaple
kapota
kapr
kapusta
kapybara
karamel
karotka
karton
kasa
katalog
katedra
kauce
kauza
kavalec
kazajka
kazeta
kazivost
kdekoliv
kdesi
kedluben
kemp
keramika
kino
klacek
kladivo
klam
klapot
klasika
klaun
klec
klenba
klepat
klesnout
klid
klima
klisna
klobouk
klokan
klopa
kloub
klubovna
klusat
kluzkost
kmen
kmitat
kmotr
kniha
knot
koalice
koberec
kobka
kobliha
kobyla
kocour
kohout
kojenec
kokos
koktejl
kolaps
koleda
kolize
kolo
komando
kometa
komik
komnata
komora
kompas
komunita
konat
koncept
kondice
konec
konfese
kongres
konina
konkurs
kontakt
konzerva
kopanec
kopie
kopnout
koprovka
korbel
korektor
kormidlo
koroptev
korpus
koruna
koryto
korzet
kosatec
kostka
kotel
kotleta
kotoul
koukat
koupelna
kousek
kouzlo
kovboj
koza
kozoroh
krabice
krach
krajina
kralovat
krasopis
kravata
kredit
krejcar
kresba
kreveta
kriket
kritik
krize
krkavec
krmelec
krmivo
krocan
krok
kronika
kropit
kroupa
krovka
krtek
kruhadlo
krupice
krutost
krvinka
krychle
krypta
krystal
kryt
kudlanka
kufr
kujnost
kukla
kulajda
kulich
kulka
kulomet
kultura
kuna
kupodivu
kurt
kurzor
kutil
kvalita
kvasinka
kvestor
kynolog
kyselina
kytara
kytice
kytka
kytovec
kyvadlo
labrador
lachtan
ladnost
laik
lakomec
lamela
lampa
lanovka
lasice
laso
lastura
latinka
lavina
lebka
leckdy
leden
lednice
ledovka
ledvina
legenda
legie
legrace
lehce
lehkost
lehnout
lektvar
lenochod
lentilka
lepenka
lepidlo
letadlo
letec
letmo
letokruh
levhart
levitace
levobok
libra
lichotka
lidojed
lidskost
lihovina
lijavec
lilek
limetka
linie
linka
linoleum
listopad
litina
litovat
lobista
lodivod
logika
logoped
lokalita
loket
lomcovat
lopata
lopuch
lord
losos
lotr
loudal
louh
louka
louskat
lovec
lstivost
lucerna
lucifer
lump
lusk
lustrace
lvice
lyra
lyrika
lysina
madam
madlo
magistr
mahagon
majetek
majitel
majorita
makak
makovice
makrela
malba
malina
malovat
malvice
maminka
mandle
manko
marnost
masakr
maskot
masopust
matice
matrika
maturita
mazanec
mazivo
mazlit
mazurka
mdloba
mechanik
meditace
medovina
melasa
meloun
mentolka
metla
metoda
metr
mezera
migrace
mihnout
mihule
mikina
mikrofon
milenec
milimetr
milost
mimika
mincovna
minibar
minomet
minulost
miska
mistr
mixovat
mladost
mlha
mlhovina
mlok
mlsat
mluvit
mnich
mnohem
mobil
mocnost
modelka
modlitba
mohyla
mokro
molekula
momentka
monarcha
monokl
monstrum
montovat
monzun
mosaz
moskyt
most
motivace
motorka
motyka
moucha
moudrost
mozaika
mozek
mozol
mramor
mravenec
mrkev
mrtvola
mrzet
mrzutost
mstitel
mudrc
muflon
mulat
mumie
munice
muset
mutace
muzeum
muzikant
myslivec
mzda
nabourat
nachytat
nadace
nadbytek
nadhoz
nadobro
nadpis
nahlas
nahnat
nahodile
nahradit
naivita
najednou
najisto
najmout
naklonit
nakonec
nakrmit
nalevo
namazat
namluvit
nanometr
naoko
naopak
naostro
napadat
napevno
naplnit
napnout
naposled
naprosto
narodit
naruby
narychlo
nasadit
nasekat
naslepo
nastat
natolik
navenek
navrch
navzdory
nazvat
nebe
nechat
necky
nedaleko
nedbat
neduh
negace
nehet
nehoda
nejen
nejprve
neklid
nelibost
nemilost
nemoc
neochota
neonka
nepokoj
nerost
nerv
nesmysl
nesoulad
netvor
neuron
nevina
nezvykle
nicota
nijak
nikam
nikdy
nikl
nikterak
nitro
nocleh
nohavice
nominace
nora
norek
nositel
nosnost
nouze
noviny
novota
nozdra
nuda
nudle
nuget
nutit
nutnost
nutrie
nymfa
obal
obarvit
obava
obdiv
obec
obehnat
obejmout
obezita
obhajoba
obilnice
objasnit
objekt
obklopit
oblast
oblek
obliba
obloha
obluda
obnos
obohatit
obojek
obout
obrazec
obrna
obruba
obrys
obsah
obsluha
obstarat
obuv
obvaz
obvinit
obvod
obvykle
obyvatel
obzor
ocas
ocel
ocenit
ochladit
ochota
ochrana
ocitnout
odboj
odbyt
odchod
odcizit
odebrat
odeslat
odevzdat
odezva
odhadce
odhodit
odjet
odjinud
odkaz
odkoupit
odliv
odluka
odmlka
odolnost
odpad
odpis
odplout
odpor
odpustit
odpykat
odrazka
odsoudit
odstup
odsun
odtok
odtud
odvaha
odveta
odvolat
odvracet
odznak
ofina
ofsajd
ohlas
ohnisko
ohrada
ohrozit
ohryzek
okap
okenice
oklika
okno
okouzlit
okovy
okrasa
okres
okrsek
okruh
okupant
okurka
okusit
olejnina
olizovat
omak
omeleta
omezit
omladina
omlouvat
omluva
omyl
onehdy
opakovat
opasek
operace
opice
opilost
opisovat
opora
opozice
opravdu
oproti
orbital
orchestr
orgie
orlice
orloj
ortel
osada
oschnout
osika
osivo
oslava
oslepit
oslnit
oslovit
osnova
osoba
osolit
ospalec
osten
ostraha
ostuda
ostych
osvojit
oteplit
otisk
otop
otrhat
otrlost
otrok
otruby
otvor
ovanout
ovar
oves
ovlivnit
ovoce
oxid
ozdoba
pachatel
pacient
padouch
pahorek
pakt
palanda
palec
palivo
paluba
pamflet
pamlsek
panenka
panika
panna
panovat
panstvo
pantofle
paprika
parketa
parodie
parta
paruka
paryba
paseka
pasivita
pastelka
patent
patrona
pavouk
pazneht
pazourek
pecka
pedagog
pejsek
peklo
peloton
penalta
pendrek
penze
periskop
pero
pestrost
petarda
petice
petrolej
pevnina
pexeso
pianista
piha
pijavice
pikle
piknik
pilina
pilnost
pilulka
pinzeta
pipeta
pisatel
pistole
pitevna
pivnice
pivovar
placenta
plakat
plamen
planeta
plastika
platit
plavidlo
plaz
plech
plemeno
plenta
ples
pletivo
plevel
plivat
plnit
plno
plocha
plodina
plomba
plout
pluk
plyn
pobavit
pobyt
pochod
pocit
poctivec
podat
podcenit
podepsat
podhled
podivit
podklad
podmanit
podnik
podoba
podpora
podraz
podstata
podvod
podzim
poezie
pohanka
pohnutka
pohovor
pohroma
pohyb
pointa
pojistka
pojmout
pokazit
pokles
pokoj
pokrok
pokuta
pokyn
poledne
polibek
polknout
poloha
polynom
pomalu
pominout
pomlka
pomoc
pomsta
pomyslet
ponechat
ponorka
ponurost
popadat
popel
popisek
poplach
poprosit
popsat
popud
poradce
porce
porod
porucha
poryv
posadit
posed
posila
poskok
poslanec
posoudit
pospolu
postava
posudek
posyp
potah
potkan
potlesk
potomek
potrava
potupa
potvora
poukaz
pouto
pouzdro
povaha
povidla
povlak
povoz
povrch
povstat
povyk
povzdech
pozdrav
pozemek
poznatek
pozor
pozvat
pracovat
prahory
praktika
prales
praotec
praporek
prase
pravda
princip
prkno
probudit
procento
prodej
profese
prohra
projekt
prolomit
promile
pronikat
propad
prorok
prosba
proton
proutek
provaz
prskavka
prsten
prudkost
prut
prvek
prvohory
psanec
psovod
pstruh
ptactvo
puberta
puch
pudl
pukavec
puklina
pukrle
pult
pumpa
punc
pupen
pusa
pusinka
pustina
putovat
putyka
pyramida
pysk
pytel
racek
rachot
radiace
radnice
radon
raft
ragby
raketa
rakovina
rameno
rampouch
rande
rarach
rarita
rasovna
rastr
ratolest
razance
razidlo
reagovat
reakce
recept
redaktor
referent
reflex
rejnok
reklama
rekord
rekrut
rektor
reputace
revize
revma
revolver
rezerva
riskovat
riziko
robotika
rodokmen
rohovka
rokle
rokoko
romaneto
ropovod
ropucha
rorejs
rosol
rostlina
rotmistr
rotoped
rotunda
roubenka
roucho
roup
roura
rovina
rovnice
rozbor
rozchod
rozdat
rozeznat
rozhodce
rozinka
rozjezd
rozkaz
rozloha
rozmar
rozpad
rozruch
rozsah
roztok
rozum
rozvod
rubrika
ruchadlo
rukavice
rukopis
ryba
rybolov
rychlost
rydlo
rypadlo
rytina
ryzost
sadista
sahat
sako
samec
samizdat
samota
sanitka
sardinka
sasanka
satelit
sazba
sazenice
sbor
schovat
sebranka
secese
sedadlo
sediment
sedlo
sehnat
sejmout
sekera
sekta
sekunda
sekvoje
semeno
seno
servis
sesadit
seshora
seskok
seslat
sestra
sesuv
sesypat
setba
setina
setkat
setnout
setrvat
sever
seznam
shoda
shrnout
sifon
silnice
sirka
sirotek
sirup
situace
skafandr
skalisko
skanzen
skaut
skeptik
skica
skladba
sklenice
sklo
skluz
skoba
skokan
skoro
skripta
skrz
skupina
skvost
skvrna
slabika
sladidlo
slanina
slast
slavnost
sledovat
slepec
sleva
slezina
slib
slina
sliznice
slon
sloupek
slovo
sluch
sluha
slunce
slupka
slza
smaragd
smetana
smilstvo
smlouva
smog
smrad
smrk
smrtka
smutek
smysl
snad
snaha
snob
sobota
socha
sodovka
sokol
sopka
sotva
souboj
soucit
soudce
souhlas
soulad
soumrak
souprava
soused
soutok
souviset
spalovna
spasitel
spis
splav
spodek
spojenec
spolu
sponzor
spornost
spousta
sprcha
spustit
sranda
sraz
srdce
srna
srnec
srovnat
srpen
srst
srub
stanice
starosta
statika
stavba
stehno
stezka
stodola
stolek
stopa
storno
stoupat
strach
stres
strhnout
strom
struna
studna
stupnice
stvol
styk
subjekt
subtropy
suchar
sudost
sukno
sundat
sunout
surikata
surovina
svah
svalstvo
svetr
svatba
svazek
svisle
svitek
svoboda
svodidlo
svorka
svrab
sykavka
sykot
synek
synovec
sypat
sypkost
syrovost
sysel
sytost
tabletka
tabule
tahoun
tajemno
tajfun
tajga
tajit
tajnost
taktika
tamhle
tampon
tancovat
tanec
tanker
tapeta
tavenina
tazatel
technika
tehdy
tekutina
telefon
temnota
tendence
tenista
tenor
teplota
tepna
teprve
terapie
termoska
textil
ticho
tiskopis
titulek
tkadlec
tkanina
tlapka
tleskat
tlukot
tlupa
tmel
toaleta
topinka
topol
torzo
touha
toulec
tradice
traktor
tramp
trasa
traverza
trefit
trest
trezor
trhavina
trhlina
trochu
trojice
troska
trouba
trpce
trpitel
trpkost
trubec
truchlit
truhlice
trus
trvat
tudy
tuhnout
tuhost
tundra
turista
turnaj
tuzemsko
tvaroh
tvorba
tvrdost
tvrz
tygr
tykev
ubohost
uboze
ubrat
ubrousek
ubrus
ubytovna
ucho
uctivost
udivit
uhradit
ujednat
ujistit
ujmout
ukazatel
uklidnit
uklonit
ukotvit
ukrojit
ulice
ulita
ulovit
umyvadlo
unavit
uniforma
uniknout
upadnout
uplatnit
uplynout
upoutat
upravit
uran
urazit
usednout
usilovat
usmrtit
usnadnit
usnout
usoudit
ustlat
ustrnout
utahovat
utkat
utlumit
utonout
utopenec
utrousit
uvalit
uvolnit
uvozovka
uzdravit
uzel
uzenina
uzlina
uznat
vagon
valcha
valoun
vana
vandal
vanilka
varan
varhany
varovat
vcelku
vchod
vdova
vedro
vegetace
vejce
velbloud
veletrh
velitel
velmoc
velryba
venkov
veranda
verze
veselka
veskrze
vesnice
vespodu
vesta
veterina
veverka
vibrace
vichr
videohra
vidina
vidle
vila
vinice
viset
vitalita
vize
vizitka
vjezd
vklad
vkus
vlajka
vlak
vlasec
vlevo
vlhkost
vliv
vlnovka
vloupat
vnucovat
vnuk
voda
vodivost
vodoznak
vodstvo
vojensky
vojna
vojsko
volant
volba
volit
volno
voskovka
vozidlo
vozovna
vpravo
vrabec
vracet
vrah
vrata
vrba
vrcholek
vrhat
vrstva
vrtule
vsadit
vstoupit
vstup
vtip
vybavit
vybrat
vychovat
vydat
vydra
vyfotit
vyhledat
vyhnout
vyhodit
vyhradit
vyhubit
vyjasnit
vyjet
vyjmout
vyklopit
vykonat
vylekat
vymazat
vymezit
vymizet
vymyslet
vynechat
vynikat
vynutit
vypadat
vyplatit
vypravit
vypustit
vyrazit
vyrovnat
vyrvat
vyslovit
vysoko
vystavit
vysunout
vysypat
vytasit
vytesat
vytratit
vyvinout
vyvolat
vyvrhel
vyzdobit
vyznat
vzadu
vzbudit
vzchopit
vzdor
vzduch
vzdychat
vzestup
vzhledem
vzkaz
vzlykat
vznik
vzorek
vzpoura
vztah
vztek
xylofon
zabrat
zabydlet
zachovat
zadarmo
zadusit
zafoukat
zahltit
zahodit
zahrada
zahynout
zajatec
zajet
zajistit
zaklepat
zakoupit
zalepit
zamezit
zamotat
zamyslet
zanechat
zanikat
zaplatit
zapojit
zapsat
zarazit
zastavit
zasunout
zatajit
zatemnit
zatknout
zaujmout
zavalit
zavelet
zavinit
zavolat
zavrtat
zazvonit
zbavit
zbrusu
zbudovat
zbytek
zdaleka
zdarma
zdatnost
zdivo
zdobit
zdroj
zdvih
zdymadlo
zelenina
zeman
zemina
zeptat
zezadu
zezdola
zhatit
zhltnout
zhluboka
zhotovit
zhruba
zima
zimnice
zjemnit
zklamat
zkoumat
zkratka
zkumavka
zlato
zlehka
zloba
zlom
zlost
zlozvyk
zmapovat
zmar
zmatek
zmije
zmizet
zmocnit
zmodrat
zmrzlina
zmutovat
znak
znalost
znamenat
znovu
zobrazit
zotavit
zoubek
zoufale
zplodit
zpomalit
zprava
zprostit
zprudka
zprvu
zrada
zranit
zrcadlo
zrnitost
zrno
zrovna
zrychlit
zrzavost
zticha
ztratit
zubovina
zubr
zvednout
zvenku
zvesela
zvon
zvrat
zvukovod
zvyk`.split(`
`),pl=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`),ml=`abaisser
abandon
abdiquer
abeille
abolir
aborder
aboutir
aboyer
abrasif
abreuver
abriter
abroger
abrupt
absence
absolu
absurde
abusif
abyssal
académie
acajou
acarien
accabler
accepter
acclamer
accolade
accroche
accuser
acerbe
achat
acheter
aciduler
acier
acompte
acquérir
acronyme
acteur
actif
actuel
adepte
adéquat
adhésif
adjectif
adjuger
admettre
admirer
adopter
adorer
adoucir
adresse
adroit
adulte
adverbe
aérer
aéronef
affaire
affecter
affiche
affreux
affubler
agacer
agencer
agile
agiter
agrafer
agréable
agrume
aider
aiguille
ailier
aimable
aisance
ajouter
ajuster
alarmer
alchimie
alerte
algèbre
algue
aliéner
aliment
alléger
alliage
allouer
allumer
alourdir
alpaga
altesse
alvéole
amateur
ambigu
ambre
aménager
amertume
amidon
amiral
amorcer
amour
amovible
amphibie
ampleur
amusant
analyse
anaphore
anarchie
anatomie
ancien
anéantir
angle
angoisse
anguleux
animal
annexer
annonce
annuel
anodin
anomalie
anonyme
anormal
antenne
antidote
anxieux
apaiser
apéritif
aplanir
apologie
appareil
appeler
apporter
appuyer
aquarium
aqueduc
arbitre
arbuste
ardeur
ardoise
argent
arlequin
armature
armement
armoire
armure
arpenter
arracher
arriver
arroser
arsenic
artériel
article
aspect
asphalte
aspirer
assaut
asservir
assiette
associer
assurer
asticot
astre
astuce
atelier
atome
atrium
atroce
attaque
attentif
attirer
attraper
aubaine
auberge
audace
audible
augurer
aurore
automne
autruche
avaler
avancer
avarice
avenir
averse
aveugle
aviateur
avide
avion
aviser
avoine
avouer
avril
axial
axiome
badge
bafouer
bagage
baguette
baignade
balancer
balcon
baleine
balisage
bambin
bancaire
bandage
banlieue
bannière
banquier
barbier
baril
baron
barque
barrage
bassin
bastion
bataille
bateau
batterie
baudrier
bavarder
belette
bélier
belote
bénéfice
berceau
berger
berline
bermuda
besace
besogne
bétail
beurre
biberon
bicycle
bidule
bijou
bilan
bilingue
billard
binaire
biologie
biopsie
biotype
biscuit
bison
bistouri
bitume
bizarre
blafard
blague
blanchir
blessant
blinder
blond
bloquer
blouson
bobard
bobine
boire
boiser
bolide
bonbon
bondir
bonheur
bonifier
bonus
bordure
borne
botte
boucle
boueux
bougie
boulon
bouquin
bourse
boussole
boutique
boxeur
branche
brasier
brave
brebis
brèche
breuvage
bricoler
brigade
brillant
brioche
brique
brochure
broder
bronzer
brousse
broyeur
brume
brusque
brutal
bruyant
buffle
buisson
bulletin
bureau
burin
bustier
butiner
butoir
buvable
buvette
cabanon
cabine
cachette
cadeau
cadre
caféine
caillou
caisson
calculer
calepin
calibre
calmer
calomnie
calvaire
camarade
caméra
camion
campagne
canal
caneton
canon
cantine
canular
capable
caporal
caprice
capsule
capter
capuche
carabine
carbone
caresser
caribou
carnage
carotte
carreau
carton
cascade
casier
casque
cassure
causer
caution
cavalier
caverne
caviar
cédille
ceinture
céleste
cellule
cendrier
censurer
central
cercle
cérébral
cerise
cerner
cerveau
cesser
chagrin
chaise
chaleur
chambre
chance
chapitre
charbon
chasseur
chaton
chausson
chavirer
chemise
chenille
chéquier
chercher
cheval
chien
chiffre
chignon
chimère
chiot
chlorure
chocolat
choisir
chose
chouette
chrome
chute
cigare
cigogne
cimenter
cinéma
cintrer
circuler
cirer
cirque
citerne
citoyen
citron
civil
clairon
clameur
claquer
classe
clavier
client
cligner
climat
clivage
cloche
clonage
cloporte
cobalt
cobra
cocasse
cocotier
coder
codifier
coffre
cogner
cohésion
coiffer
coincer
colère
colibri
colline
colmater
colonel
combat
comédie
commande
compact
concert
conduire
confier
congeler
connoter
consonne
contact
convexe
copain
copie
corail
corbeau
cordage
corniche
corpus
correct
cortège
cosmique
costume
coton
coude
coupure
courage
couteau
couvrir
coyote
crabe
crainte
cravate
crayon
créature
créditer
crémeux
creuser
crevette
cribler
crier
cristal
critère
croire
croquer
crotale
crucial
cruel
crypter
cubique
cueillir
cuillère
cuisine
cuivre
culminer
cultiver
cumuler
cupide
curatif
curseur
cyanure
cycle
cylindre
cynique
daigner
damier
danger
danseur
dauphin
débattre
débiter
déborder
débrider
débutant
décaler
décembre
déchirer
décider
déclarer
décorer
décrire
décupler
dédale
déductif
déesse
défensif
défiler
défrayer
dégager
dégivrer
déglutir
dégrafer
déjeuner
délice
déloger
demander
demeurer
démolir
dénicher
dénouer
dentelle
dénuder
départ
dépenser
déphaser
déplacer
déposer
déranger
dérober
désastre
descente
désert
désigner
désobéir
dessiner
destrier
détacher
détester
détourer
détresse
devancer
devenir
deviner
devoir
diable
dialogue
diamant
dicter
différer
digérer
digital
digne
diluer
dimanche
diminuer
dioxyde
directif
diriger
discuter
disposer
dissiper
distance
divertir
diviser
docile
docteur
dogme
doigt
domaine
domicile
dompter
donateur
donjon
donner
dopamine
dortoir
dorure
dosage
doseur
dossier
dotation
douanier
double
douceur
douter
doyen
dragon
draper
dresser
dribbler
droiture
duperie
duplexe
durable
durcir
dynastie
éblouir
écarter
écharpe
échelle
éclairer
éclipse
éclore
écluse
école
économie
écorce
écouter
écraser
écrémer
écrivain
écrou
écume
écureuil
édifier
éduquer
effacer
effectif
effigie
effort
effrayer
effusion
égaliser
égarer
éjecter
élaborer
élargir
électron
élégant
éléphant
élève
éligible
élitisme
éloge
élucider
éluder
emballer
embellir
embryon
émeraude
émission
emmener
émotion
émouvoir
empereur
employer
emporter
emprise
émulsion
encadrer
enchère
enclave
encoche
endiguer
endosser
endroit
enduire
énergie
enfance
enfermer
enfouir
engager
engin
englober
énigme
enjamber
enjeu
enlever
ennemi
ennuyeux
enrichir
enrobage
enseigne
entasser
entendre
entier
entourer
entraver
énumérer
envahir
enviable
envoyer
enzyme
éolien
épaissir
épargne
épatant
épaule
épicerie
épidémie
épier
épilogue
épine
épisode
épitaphe
époque
épreuve
éprouver
épuisant
équerre
équipe
ériger
érosion
erreur
éruption
escalier
espadon
espèce
espiègle
espoir
esprit
esquiver
essayer
essence
essieu
essorer
estime
estomac
estrade
étagère
étaler
étanche
étatique
éteindre
étendoir
éternel
éthanol
éthique
ethnie
étirer
étoffer
étoile
étonnant
étourdir
étrange
étroit
étude
euphorie
évaluer
évasion
éventail
évidence
éviter
évolutif
évoquer
exact
exagérer
exaucer
exceller
excitant
exclusif
excuse
exécuter
exemple
exercer
exhaler
exhorter
exigence
exiler
exister
exotique
expédier
explorer
exposer
exprimer
exquis
extensif
extraire
exulter
fable
fabuleux
facette
facile
facture
faiblir
falaise
fameux
famille
farceur
farfelu
farine
farouche
fasciner
fatal
fatigue
faucon
fautif
faveur
favori
fébrile
féconder
fédérer
félin
femme
fémur
fendoir
féodal
fermer
féroce
ferveur
festival
feuille
feutre
février
fiasco
ficeler
fictif
fidèle
figure
filature
filetage
filière
filleul
filmer
filou
filtrer
financer
finir
fiole
firme
fissure
fixer
flairer
flamme
flasque
flatteur
fléau
flèche
fleur
flexion
flocon
flore
fluctuer
fluide
fluvial
folie
fonderie
fongible
fontaine
forcer
forgeron
formuler
fortune
fossile
foudre
fougère
fouiller
foulure
fourmi
fragile
fraise
franchir
frapper
frayeur
frégate
freiner
frelon
frémir
frénésie
frère
friable
friction
frisson
frivole
froid
fromage
frontal
frotter
fruit
fugitif
fuite
fureur
furieux
furtif
fusion
futur
gagner
galaxie
galerie
gambader
garantir
gardien
garnir
garrigue
gazelle
gazon
géant
gélatine
gélule
gendarme
général
génie
genou
gentil
géologie
géomètre
géranium
germe
gestuel
geyser
gibier
gicler
girafe
givre
glace
glaive
glisser
globe
gloire
glorieux
golfeur
gomme
gonfler
gorge
gorille
goudron
gouffre
goulot
goupille
gourmand
goutte
graduel
graffiti
graine
grand
grappin
gratuit
gravir
grenat
griffure
griller
grimper
grogner
gronder
grotte
groupe
gruger
grutier
gruyère
guépard
guerrier
guide
guimauve
guitare
gustatif
gymnaste
gyrostat
habitude
hachoir
halte
hameau
hangar
hanneton
haricot
harmonie
harpon
hasard
hélium
hématome
herbe
hérisson
hermine
héron
hésiter
heureux
hiberner
hibou
hilarant
histoire
hiver
homard
hommage
homogène
honneur
honorer
honteux
horde
horizon
horloge
hormone
horrible
houleux
housse
hublot
huileux
humain
humble
humide
humour
hurler
hydromel
hygiène
hymne
hypnose
idylle
ignorer
iguane
illicite
illusion
image
imbiber
imiter
immense
immobile
immuable
impact
impérial
implorer
imposer
imprimer
imputer
incarner
incendie
incident
incliner
incolore
indexer
indice
inductif
inédit
ineptie
inexact
infini
infliger
informer
infusion
ingérer
inhaler
inhiber
injecter
injure
innocent
inoculer
inonder
inscrire
insecte
insigne
insolite
inspirer
instinct
insulter
intact
intense
intime
intrigue
intuitif
inutile
invasion
inventer
inviter
invoquer
ironique
irradier
irréel
irriter
isoler
ivoire
ivresse
jaguar
jaillir
jambe
janvier
jardin
jauger
jaune
javelot
jetable
jeton
jeudi
jeunesse
joindre
joncher
jongler
joueur
jouissif
journal
jovial
joyau
joyeux
jubiler
jugement
junior
jupon
juriste
justice
juteux
juvénile
kayak
kimono
kiosque
label
labial
labourer
lacérer
lactose
lagune
laine
laisser
laitier
lambeau
lamelle
lampe
lanceur
langage
lanterne
lapin
largeur
larme
laurier
lavabo
lavoir
lecture
légal
léger
légume
lessive
lettre
levier
lexique
lézard
liasse
libérer
libre
licence
licorne
liège
lièvre
ligature
ligoter
ligue
limer
limite
limonade
limpide
linéaire
lingot
lionceau
liquide
lisière
lister
lithium
litige
littoral
livreur
logique
lointain
loisir
lombric
loterie
louer
lourd
loutre
louve
loyal
lubie
lucide
lucratif
lueur
lugubre
luisant
lumière
lunaire
lundi
luron
lutter
luxueux
machine
magasin
magenta
magique
maigre
maillon
maintien
mairie
maison
majorer
malaxer
maléfice
malheur
malice
mallette
mammouth
mandater
maniable
manquant
manteau
manuel
marathon
marbre
marchand
mardi
maritime
marqueur
marron
marteler
mascotte
massif
matériel
matière
matraque
maudire
maussade
mauve
maximal
méchant
méconnu
médaille
médecin
méditer
méduse
meilleur
mélange
mélodie
membre
mémoire
menacer
mener
menhir
mensonge
mentor
mercredi
mérite
merle
messager
mesure
métal
météore
méthode
métier
meuble
miauler
microbe
miette
mignon
migrer
milieu
million
mimique
mince
minéral
minimal
minorer
minute
miracle
miroiter
missile
mixte
mobile
moderne
moelleux
mondial
moniteur
monnaie
monotone
monstre
montagne
monument
moqueur
morceau
morsure
mortier
moteur
motif
mouche
moufle
moulin
mousson
mouton
mouvant
multiple
munition
muraille
murène
murmure
muscle
muséum
musicien
mutation
muter
mutuel
myriade
myrtille
mystère
mythique
nageur
nappe
narquois
narrer
natation
nation
nature
naufrage
nautique
navire
nébuleux
nectar
néfaste
négation
négliger
négocier
neige
nerveux
nettoyer
neurone
neutron
neveu
niche
nickel
nitrate
niveau
noble
nocif
nocturne
noirceur
noisette
nomade
nombreux
nommer
normatif
notable
notifier
notoire
nourrir
nouveau
novateur
novembre
novice
nuage
nuancer
nuire
nuisible
numéro
nuptial
nuque
nutritif
obéir
objectif
obliger
obscur
observer
obstacle
obtenir
obturer
occasion
occuper
océan
octobre
octroyer
octupler
oculaire
odeur
odorant
offenser
officier
offrir
ogive
oiseau
oisillon
olfactif
olivier
ombrage
omettre
onctueux
onduler
onéreux
onirique
opale
opaque
opérer
opinion
opportun
opprimer
opter
optique
orageux
orange
orbite
ordonner
oreille
organe
orgueil
orifice
ornement
orque
ortie
osciller
osmose
ossature
otarie
ouragan
ourson
outil
outrager
ouvrage
ovation
oxyde
oxygène
ozone
paisible
palace
palmarès
palourde
palper
panache
panda
pangolin
paniquer
panneau
panorama
pantalon
papaye
papier
papoter
papyrus
paradoxe
parcelle
paresse
parfumer
parler
parole
parrain
parsemer
partager
parure
parvenir
passion
pastèque
paternel
patience
patron
pavillon
pavoiser
payer
paysage
peigne
peintre
pelage
pélican
pelle
pelouse
peluche
pendule
pénétrer
pénible
pensif
pénurie
pépite
péplum
perdrix
perforer
période
permuter
perplexe
persil
perte
peser
pétale
petit
pétrir
peuple
pharaon
phobie
phoque
photon
phrase
physique
piano
pictural
pièce
pierre
pieuvre
pilote
pinceau
pipette
piquer
pirogue
piscine
piston
pivoter
pixel
pizza
placard
plafond
plaisir
planer
plaque
plastron
plateau
pleurer
plexus
pliage
plomb
plonger
pluie
plumage
pochette
poésie
poète
pointe
poirier
poisson
poivre
polaire
policier
pollen
polygone
pommade
pompier
ponctuel
pondérer
poney
portique
position
posséder
posture
potager
poteau
potion
pouce
poulain
poumon
pourpre
poussin
pouvoir
prairie
pratique
précieux
prédire
préfixe
prélude
prénom
présence
prétexte
prévoir
primitif
prince
prison
priver
problème
procéder
prodige
profond
progrès
proie
projeter
prologue
promener
propre
prospère
protéger
prouesse
proverbe
prudence
pruneau
psychose
public
puceron
puiser
pulpe
pulsar
punaise
punitif
pupitre
purifier
puzzle
pyramide
quasar
querelle
question
quiétude
quitter
quotient
racine
raconter
radieux
ragondin
raideur
raisin
ralentir
rallonge
ramasser
rapide
rasage
ratisser
ravager
ravin
rayonner
réactif
réagir
réaliser
réanimer
recevoir
réciter
réclamer
récolter
recruter
reculer
recycler
rédiger
redouter
refaire
réflexe
réformer
refrain
refuge
régalien
région
réglage
régulier
réitérer
rejeter
rejouer
relatif
relever
relief
remarque
remède
remise
remonter
remplir
remuer
renard
renfort
renifler
renoncer
rentrer
renvoi
replier
reporter
reprise
reptile
requin
réserve
résineux
résoudre
respect
rester
résultat
rétablir
retenir
réticule
retomber
retracer
réunion
réussir
revanche
revivre
révolte
révulsif
richesse
rideau
rieur
rigide
rigoler
rincer
riposter
risible
risque
rituel
rival
rivière
rocheux
romance
rompre
ronce
rondin
roseau
rosier
rotatif
rotor
rotule
rouge
rouille
rouleau
routine
royaume
ruban
rubis
ruche
ruelle
rugueux
ruiner
ruisseau
ruser
rustique
rythme
sabler
saboter
sabre
sacoche
safari
sagesse
saisir
salade
salive
salon
saluer
samedi
sanction
sanglier
sarcasme
sardine
saturer
saugrenu
saumon
sauter
sauvage
savant
savonner
scalpel
scandale
scélérat
scénario
sceptre
schéma
science
scinder
score
scrutin
sculpter
séance
sécable
sécher
secouer
sécréter
sédatif
séduire
seigneur
séjour
sélectif
semaine
sembler
semence
séminal
sénateur
sensible
sentence
séparer
séquence
serein
sergent
sérieux
serrure
sérum
service
sésame
sévir
sevrage
sextuple
sidéral
siècle
siéger
siffler
sigle
signal
silence
silicium
simple
sincère
sinistre
siphon
sirop
sismique
situer
skier
social
socle
sodium
soigneux
soldat
soleil
solitude
soluble
sombre
sommeil
somnoler
sonde
songeur
sonnette
sonore
sorcier
sortir
sosie
sottise
soucieux
soudure
souffle
soulever
soupape
source
soutirer
souvenir
spacieux
spatial
spécial
sphère
spiral
stable
station
sternum
stimulus
stipuler
strict
studieux
stupeur
styliste
sublime
substrat
subtil
subvenir
succès
sucre
suffixe
suggérer
suiveur
sulfate
superbe
supplier
surface
suricate
surmener
surprise
sursaut
survie
suspect
syllabe
symbole
symétrie
synapse
syntaxe
système
tabac
tablier
tactile
tailler
talent
talisman
talonner
tambour
tamiser
tangible
tapis
taquiner
tarder
tarif
tartine
tasse
tatami
tatouage
taupe
taureau
taxer
témoin
temporel
tenaille
tendre
teneur
tenir
tension
terminer
terne
terrible
tétine
texte
thème
théorie
thérapie
thorax
tibia
tiède
timide
tirelire
tiroir
tissu
titane
titre
tituber
toboggan
tolérant
tomate
tonique
tonneau
toponyme
torche
tordre
tornade
torpille
torrent
torse
tortue
totem
toucher
tournage
tousser
toxine
traction
trafic
tragique
trahir
train
trancher
travail
trèfle
tremper
trésor
treuil
triage
tribunal
tricoter
trilogie
triomphe
tripler
triturer
trivial
trombone
tronc
tropical
troupeau
tuile
tulipe
tumulte
tunnel
turbine
tuteur
tutoyer
tuyau
tympan
typhon
typique
tyran
ubuesque
ultime
ultrason
unanime
unifier
union
unique
unitaire
univers
uranium
urbain
urticant
usage
usine
usuel
usure
utile
utopie
vacarme
vaccin
vagabond
vague
vaillant
vaincre
vaisseau
valable
valise
vallon
valve
vampire
vanille
vapeur
varier
vaseux
vassal
vaste
vecteur
vedette
végétal
véhicule
veinard
véloce
vendredi
vénérer
venger
venimeux
ventouse
verdure
vérin
vernir
verrou
verser
vertu
veston
vétéran
vétuste
vexant
vexer
viaduc
viande
victoire
vidange
vidéo
vignette
vigueur
vilain
village
vinaigre
violon
vipère
virement
virtuose
virus
visage
viseur
vision
visqueux
visuel
vital
vitesse
viticole
vitrine
vivace
vivipare
vocation
voguer
voile
voisin
voiture
volaille
volcan
voltiger
volume
vorace
vortex
voter
vouloir
voyage
voyelle
wagon
xénon
yacht
zèbre
zénith
zeste
zoologie`.split(`
`),gl=`abaco
abbaglio
abbinato
abete
abisso
abolire
abrasivo
abrogato
accadere
accenno
accusato
acetone
achille
acido
acqua
acre
acrilico
acrobata
acuto
adagio
addebito
addome
adeguato
aderire
adipe
adottare
adulare
affabile
affetto
affisso
affranto
aforisma
afoso
africano
agave
agente
agevole
aggancio
agire
agitare
agonismo
agricolo
agrumeto
aguzzo
alabarda
alato
albatro
alberato
albo
albume
alce
alcolico
alettone
alfa
algebra
aliante
alibi
alimento
allagato
allegro
allievo
allodola
allusivo
almeno
alogeno
alpaca
alpestre
altalena
alterno
alticcio
altrove
alunno
alveolo
alzare
amalgama
amanita
amarena
ambito
ambrato
ameba
america
ametista
amico
ammasso
ammenda
ammirare
ammonito
amore
ampio
ampliare
amuleto
anacardo
anagrafe
analista
anarchia
anatra
anca
ancella
ancora
andare
andrea
anello
angelo
angolare
angusto
anima
annegare
annidato
anno
annuncio
anonimo
anticipo
anzi
apatico
apertura
apode
apparire
appetito
appoggio
approdo
appunto
aprile
arabica
arachide
aragosta
araldica
arancio
aratura
arazzo
arbitro
archivio
ardito
arenile
argento
argine
arguto
aria
armonia
arnese
arredato
arringa
arrosto
arsenico
arso
artefice
arzillo
asciutto
ascolto
asepsi
asettico
asfalto
asino
asola
aspirato
aspro
assaggio
asse
assoluto
assurdo
asta
astenuto
astice
astratto
atavico
ateismo
atomico
atono
attesa
attivare
attorno
attrito
attuale
ausilio
austria
autista
autonomo
autunno
avanzato
avere
avvenire
avviso
avvolgere
azione
azoto
azzimo
azzurro
babele
baccano
bacino
baco
badessa
badilata
bagnato
baita
balcone
baldo
balena
ballata
balzano
bambino
bandire
baraonda
barbaro
barca
baritono
barlume
barocco
basilico
basso
batosta
battuto
baule
bava
bavosa
becco
beffa
belgio
belva
benda
benevole
benigno
benzina
bere
berlina
beta
bibita
bici
bidone
bifido
biga
bilancia
bimbo
binocolo
biologo
bipede
bipolare
birbante
birra
biscotto
bisesto
bisnonno
bisonte
bisturi
bizzarro
blando
blatta
bollito
bonifico
bordo
bosco
botanico
bottino
bozzolo
braccio
bradipo
brama
branca
bravura
bretella
brevetto
brezza
briglia
brillante
brindare
broccolo
brodo
bronzina
brullo
bruno
bubbone
buca
budino
buffone
buio
bulbo
buono
burlone
burrasca
bussola
busta
cadetto
caduco
calamaro
calcolo
calesse
calibro
calmo
caloria
cambusa
camerata
camicia
cammino
camola
campale
canapa
candela
cane
canino
canotto
cantina
capace
capello
capitolo
capogiro
cappero
capra
capsula
carapace
carcassa
cardo
carisma
carovana
carretto
cartolina
casaccio
cascata
caserma
caso
cassone
castello
casuale
catasta
catena
catrame
cauto
cavillo
cedibile
cedrata
cefalo
celebre
cellulare
cena
cenone
centesimo
ceramica
cercare
certo
cerume
cervello
cesoia
cespo
ceto
chela
chiaro
chicca
chiedere
chimera
china
chirurgo
chitarra
ciao
ciclismo
cifrare
cigno
cilindro
ciottolo
circa
cirrosi
citrico
cittadino
ciuffo
civetta
civile
classico
clinica
cloro
cocco
codardo
codice
coerente
cognome
collare
colmato
colore
colposo
coltivato
colza
coma
cometa
commando
comodo
computer
comune
conciso
condurre
conferma
congelare
coniuge
connesso
conoscere
consumo
continuo
convegno
coperto
copione
coppia
copricapo
corazza
cordata
coricato
cornice
corolla
corpo
corredo
corsia
cortese
cosmico
costante
cottura
covato
cratere
cravatta
creato
credere
cremoso
crescita
creta
criceto
crinale
crisi
critico
croce
cronaca
crostata
cruciale
crusca
cucire
cuculo
cugino
cullato
cupola
curatore
cursore
curvo
cuscino
custode
dado
daino
dalmata
damerino
daniela
dannoso
danzare
datato
davanti
davvero
debutto
decennio
deciso
declino
decollo
decreto
dedicato
definito
deforme
degno
delegare
delfino
delirio
delta
demenza
denotato
dentro
deposito
derapata
derivare
deroga
descritto
deserto
desiderio
desumere
detersivo
devoto
diametro
dicembre
diedro
difeso
diffuso
digerire
digitale
diluvio
dinamico
dinnanzi
dipinto
diploma
dipolo
diradare
dire
dirotto
dirupo
disagio
discreto
disfare
disgelo
disposto
distanza
disumano
dito
divano
divelto
dividere
divorato
doblone
docente
doganale
dogma
dolce
domato
domenica
dominare
dondolo
dono
dormire
dote
dottore
dovuto
dozzina
drago
druido
dubbio
dubitare
ducale
duna
duomo
duplice
duraturo
ebano
eccesso
ecco
eclissi
economia
edera
edicola
edile
editoria
educare
egemonia
egli
egoismo
egregio
elaborato
elargire
elegante
elencato
eletto
elevare
elfico
elica
elmo
elsa
eluso
emanato
emblema
emesso
emiro
emotivo
emozione
empirico
emulo
endemico
enduro
energia
enfasi
enoteca
entrare
enzima
epatite
epilogo
episodio
epocale
eppure
equatore
erario
erba
erboso
erede
eremita
erigere
ermetico
eroe
erosivo
errante
esagono
esame
esanime
esaudire
esca
esempio
esercito
esibito
esigente
esistere
esito
esofago
esortato
esoso
espanso
espresso
essenza
esso
esteso
estimare
estonia
estroso
esultare
etilico
etnico
etrusco
etto
euclideo
europa
evaso
evidenza
evitato
evoluto
evviva
fabbrica
faccenda
fachiro
falco
famiglia
fanale
fanfara
fango
fantasma
fare
farfalla
farinoso
farmaco
fascia
fastoso
fasullo
faticare
fato
favoloso
febbre
fecola
fede
fegato
felpa
feltro
femmina
fendere
fenomeno
fermento
ferro
fertile
fessura
festivo
fetta
feudo
fiaba
fiducia
fifa
figurato
filo
finanza
finestra
finire
fiore
fiscale
fisico
fiume
flacone
flamenco
flebo
flemma
florido
fluente
fluoro
fobico
focaccia
focoso
foderato
foglio
folata
folclore
folgore
fondente
fonetico
fonia
fontana
forbito
forchetta
foresta
formica
fornaio
foro
fortezza
forzare
fosfato
fosso
fracasso
frana
frassino
fratello
freccetta
frenata
fresco
frigo
frollino
fronde
frugale
frutta
fucilata
fucsia
fuggente
fulmine
fulvo
fumante
fumetto
fumoso
fune
funzione
fuoco
furbo
furgone
furore
fuso
futile
gabbiano
gaffe
galateo
gallina
galoppo
gambero
gamma
garanzia
garbo
garofano
garzone
gasdotto
gasolio
gastrico
gatto
gaudio
gazebo
gazzella
geco
gelatina
gelso
gemello
gemmato
gene
genitore
gennaio
genotipo
gergo
ghepardo
ghiaccio
ghisa
giallo
gilda
ginepro
giocare
gioiello
giorno
giove
girato
girone
gittata
giudizio
giurato
giusto
globulo
glutine
gnomo
gobba
golf
gomito
gommone
gonfio
gonna
governo
gracile
grado
grafico
grammo
grande
grattare
gravoso
grazia
greca
gregge
grifone
grigio
grinza
grotta
gruppo
guadagno
guaio
guanto
guardare
gufo
guidare
ibernato
icona
identico
idillio
idolo
idra
idrico
idrogeno
igiene
ignaro
ignorato
ilare
illeso
illogico
illudere
imballo
imbevuto
imbocco
imbuto
immane
immerso
immolato
impacco
impeto
impiego
importo
impronta
inalare
inarcare
inattivo
incanto
incendio
inchino
incisivo
incluso
incontro
incrocio
incubo
indagine
india
indole
inedito
infatti
infilare
inflitto
ingaggio
ingegno
inglese
ingordo
ingrosso
innesco
inodore
inoltrare
inondato
insano
insetto
insieme
insonnia
insulina
intasato
intero
intonaco
intuito
inumidire
invalido
invece
invito
iperbole
ipnotico
ipotesi
ippica
iride
irlanda
ironico
irrigato
irrorare
isolato
isotopo
isterico
istituto
istrice
italia
iterare
labbro
labirinto
lacca
lacerato
lacrima
lacuna
laddove
lago
lampo
lancetta
lanterna
lardoso
larga
laringe
lastra
latenza
latino
lattuga
lavagna
lavoro
legale
leggero
lembo
lentezza
lenza
leone
lepre
lesivo
lessato
lesto
letterale
leva
levigato
libero
lido
lievito
lilla
limatura
limitare
limpido
lineare
lingua
liquido
lira
lirica
lisca
lite
litigio
livrea
locanda
lode
logica
lombare
londra
longevo
loquace
lorenzo
loto
lotteria
luce
lucidato
lumaca
luminoso
lungo
lupo
luppolo
lusinga
lusso
lutto
macabro
macchina
macero
macinato
madama
magico
maglia
magnete
magro
maiolica
malafede
malgrado
malinteso
malsano
malto
malumore
mana
mancia
mandorla
mangiare
manifesto
mannaro
manovra
mansarda
mantide
manubrio
mappa
maratona
marcire
maretta
marmo
marsupio
maschera
massaia
mastino
materasso
matricola
mattone
maturo
mazurca
meandro
meccanico
mecenate
medesimo
meditare
mega
melassa
melis
melodia
meninge
meno
mensola
mercurio
merenda
merlo
meschino
mese
messere
mestolo
metallo
metodo
mettere
miagolare
mica
micelio
michele
microbo
midollo
miele
migliore
milano
milite
mimosa
minerale
mini
minore
mirino
mirtillo
miscela
missiva
misto
misurare
mitezza
mitigare
mitra
mittente
mnemonico
modello
modifica
modulo
mogano
mogio
mole
molosso
monastero
monco
mondina
monetario
monile
monotono
monsone
montato
monviso
mora
mordere
morsicato
mostro
motivato
motosega
motto
movenza
movimento
mozzo
mucca
mucosa
muffa
mughetto
mugnaio
mulatto
mulinello
multiplo
mummia
munto
muovere
murale
musa
muscolo
musica
mutevole
muto
nababbo
nafta
nanometro
narciso
narice
narrato
nascere
nastrare
naturale
nautica
naviglio
nebulosa
necrosi
negativo
negozio
nemmeno
neofita
neretto
nervo
nessuno
nettuno
neutrale
neve
nevrotico
nicchia
ninfa
nitido
nobile
nocivo
nodo
nome
nomina
nordico
normale
norvegese
nostrano
notare
notizia
notturno
novella
nucleo
nulla
numero
nuovo
nutrire
nuvola
nuziale
oasi
obbedire
obbligo
obelisco
oblio
obolo
obsoleto
occasione
occhio
occidente
occorrere
occultare
ocra
oculato
odierno
odorare
offerta
offrire
offuscato
oggetto
oggi
ognuno
olandese
olfatto
oliato
oliva
ologramma
oltre
omaggio
ombelico
ombra
omega
omissione
ondoso
onere
onice
onnivoro
onorevole
onta
operato
opinione
opposto
oracolo
orafo
ordine
orecchino
orefice
orfano
organico
origine
orizzonte
orma
ormeggio
ornativo
orologio
orrendo
orribile
ortensia
ortica
orzata
orzo
osare
oscurare
osmosi
ospedale
ospite
ossa
ossidare
ostacolo
oste
otite
otre
ottagono
ottimo
ottobre
ovale
ovest
ovino
oviparo
ovocito
ovunque
ovviare
ozio
pacchetto
pace
pacifico
padella
padrone
paese
paga
pagina
palazzina
palesare
pallido
palo
palude
pandoro
pannello
paolo
paonazzo
paprica
parabola
parcella
parere
pargolo
pari
parlato
parola
partire
parvenza
parziale
passivo
pasticca
patacca
patologia
pattume
pavone
peccato
pedalare
pedonale
peggio
peloso
penare
pendice
penisola
pennuto
penombra
pensare
pentola
pepe
pepita
perbene
percorso
perdonato
perforare
pergamena
periodo
permesso
perno
perplesso
persuaso
pertugio
pervaso
pesatore
pesista
peso
pestifero
petalo
pettine
petulante
pezzo
piacere
pianta
piattino
piccino
picozza
piega
pietra
piffero
pigiama
pigolio
pigro
pila
pilifero
pillola
pilota
pimpante
pineta
pinna
pinolo
pioggia
piombo
piramide
piretico
pirite
pirolisi
pitone
pizzico
placebo
planare
plasma
platano
plenario
pochezza
poderoso
podismo
poesia
poggiare
polenta
poligono
pollice
polmonite
polpetta
polso
poltrona
polvere
pomice
pomodoro
ponte
popoloso
porfido
poroso
porpora
porre
portata
posa
positivo
possesso
postulato
potassio
potere
pranzo
prassi
pratica
precluso
predica
prefisso
pregiato
prelievo
premere
prenotare
preparato
presenza
pretesto
prevalso
prima
principe
privato
problema
procura
produrre
profumo
progetto
prolunga
promessa
pronome
proposta
proroga
proteso
prova
prudente
prugna
prurito
psiche
pubblico
pudica
pugilato
pugno
pulce
pulito
pulsante
puntare
pupazzo
pupilla
puro
quadro
qualcosa
quasi
querela
quota
raccolto
raddoppio
radicale
radunato
raffica
ragazzo
ragione
ragno
ramarro
ramingo
ramo
randagio
rantolare
rapato
rapina
rappreso
rasatura
raschiato
rasente
rassegna
rastrello
rata
ravveduto
reale
recepire
recinto
recluta
recondito
recupero
reddito
redimere
regalato
registro
regola
regresso
relazione
remare
remoto
renna
replica
reprimere
reputare
resa
residente
responso
restauro
rete
retina
retorica
rettifica
revocato
riassunto
ribadire
ribelle
ribrezzo
ricarica
ricco
ricevere
riciclato
ricordo
ricreduto
ridicolo
ridurre
rifasare
riflesso
riforma
rifugio
rigare
rigettato
righello
rilassato
rilevato
rimanere
rimbalzo
rimedio
rimorchio
rinascita
rincaro
rinforzo
rinnovo
rinomato
rinsavito
rintocco
rinuncia
rinvenire
riparato
ripetuto
ripieno
riportare
ripresa
ripulire
risata
rischio
riserva
risibile
riso
rispetto
ristoro
risultato
risvolto
ritardo
ritegno
ritmico
ritrovo
riunione
riva
riverso
rivincita
rivolto
rizoma
roba
robotico
robusto
roccia
roco
rodaggio
rodere
roditore
rogito
rollio
romantico
rompere
ronzio
rosolare
rospo
rotante
rotondo
rotula
rovescio
rubizzo
rubrica
ruga
rullino
rumine
rumoroso
ruolo
rupe
russare
rustico
sabato
sabbiare
sabotato
sagoma
salasso
saldatura
salgemma
salivare
salmone
salone
saltare
saluto
salvo
sapere
sapido
saporito
saraceno
sarcasmo
sarto
sassoso
satellite
satira
satollo
saturno
savana
savio
saziato
sbadiglio
sbalzo
sbancato
sbarra
sbattere
sbavare
sbendare
sbirciare
sbloccato
sbocciato
sbrinare
sbruffone
sbuffare
scabroso
scadenza
scala
scambiare
scandalo
scapola
scarso
scatenare
scavato
scelto
scenico
scettro
scheda
schiena
sciarpa
scienza
scindere
scippo
sciroppo
scivolo
sclerare
scodella
scolpito
scomparto
sconforto
scoprire
scorta
scossone
scozzese
scriba
scrollare
scrutinio
scuderia
scultore
scuola
scuro
scusare
sdebitare
sdoganare
seccatura
secondo
sedano
seggiola
segnalato
segregato
seguito
selciato
selettivo
sella
selvaggio
semaforo
sembrare
seme
seminato
sempre
senso
sentire
sepolto
sequenza
serata
serbato
sereno
serio
serpente
serraglio
servire
sestina
setola
settimana
sfacelo
sfaldare
sfamato
sfarzoso
sfaticato
sfera
sfida
sfilato
sfinge
sfocato
sfoderare
sfogo
sfoltire
sforzato
sfratto
sfruttato
sfuggito
sfumare
sfuso
sgabello
sgarbato
sgonfiare
sgorbio
sgrassato
sguardo
sibilo
siccome
sierra
sigla
signore
silenzio
sillaba
simbolo
simpatico
simulato
sinfonia
singolo
sinistro
sino
sintesi
sinusoide
sipario
sisma
sistole
situato
slitta
slogatura
sloveno
smarrito
smemorato
smentito
smeraldo
smilzo
smontare
smottato
smussato
snellire
snervato
snodo
sobbalzo
sobrio
soccorso
sociale
sodale
soffitto
sogno
soldato
solenne
solido
sollazzo
solo
solubile
solvente
somatico
somma
sonda
sonetto
sonnifero
sopire
soppeso
sopra
sorgere
sorpasso
sorriso
sorso
sorteggio
sorvolato
sospiro
sosta
sottile
spada
spalla
spargere
spatola
spavento
spazzola
specie
spedire
spegnere
spelatura
speranza
spessore
spettrale
spezzato
spia
spigoloso
spillato
spinoso
spirale
splendido
sportivo
sposo
spranga
sprecare
spronato
spruzzo
spuntino
squillo
sradicare
srotolato
stabile
stacco
staffa
stagnare
stampato
stantio
starnuto
stasera
statuto
stelo
steppa
sterzo
stiletto
stima
stirpe
stivale
stizzoso
stonato
storico
strappo
stregato
stridulo
strozzare
strutto
stuccare
stufo
stupendo
subentro
succoso
sudore
suggerito
sugo
sultano
suonare
superbo
supporto
surgelato
surrogato
sussurro
sutura
svagare
svedese
sveglio
svelare
svenuto
svezia
sviluppo
svista
svizzera
svolta
svuotare
tabacco
tabulato
tacciare
taciturno
tale
talismano
tampone
tannino
tara
tardivo
targato
tariffa
tarpare
tartaruga
tasto
tattico
taverna
tavolata
tazza
teca
tecnico
telefono
temerario
tempo
temuto
tendone
tenero
tensione
tentacolo
teorema
terme
terrazzo
terzetto
tesi
tesserato
testato
tetro
tettoia
tifare
tigella
timbro
tinto
tipico
tipografo
tiraggio
tiro
titanio
titolo
titubante
tizio
tizzone
toccare
tollerare
tolto
tombola
tomo
tonfo
tonsilla
topazio
topologia
toppa
torba
tornare
torrone
tortora
toscano
tossire
tostatura
totano
trabocco
trachea
trafila
tragedia
tralcio
tramonto
transito
trapano
trarre
trasloco
trattato
trave
treccia
tremolio
trespolo
tributo
tricheco
trifoglio
trillo
trincea
trio
tristezza
triturato
trivella
tromba
trono
troppo
trottola
trovare
truccato
tubatura
tuffato
tulipano
tumulto
tunisia
turbare
turchino
tuta
tutela
ubicato
uccello
uccisore
udire
uditivo
uffa
ufficio
uguale
ulisse
ultimato
umano
umile
umorismo
uncinetto
ungere
ungherese
unicorno
unificato
unisono
unitario
unte
uovo
upupa
uragano
urgenza
urlo
usanza
usato
uscito
usignolo
usuraio
utensile
utilizzo
utopia
vacante
vaccinato
vagabondo
vagliato
valanga
valgo
valico
valletta
valoroso
valutare
valvola
vampata
vangare
vanitoso
vano
vantaggio
vanvera
vapore
varano
varcato
variante
vasca
vedetta
vedova
veduto
vegetale
veicolo
velcro
velina
velluto
veloce
venato
vendemmia
vento
verace
verbale
vergogna
verifica
vero
verruca
verticale
vescica
vessillo
vestale
veterano
vetrina
vetusto
viandante
vibrante
vicenda
vichingo
vicinanza
vidimare
vigilia
vigneto
vigore
vile
villano
vimini
vincitore
viola
vipera
virgola
virologo
virulento
viscoso
visione
vispo
vissuto
visura
vita
vitello
vittima
vivanda
vivido
viziare
voce
voga
volatile
volere
volpe
voragine
vulcano
zampogna
zanna
zappato
zattera
zavorra
zefiro
zelante
zelo
zenzero
zerbino
zibetto
zinco
zircone
zitto
zolla
zotico
zucchero
zufolo
zulu
zuppa`.split(`
`),bl=`あいこくしん
あいさつ
あいだ
あおぞら
あかちゃん
あきる
あけがた
あける
あこがれる
あさい
あさひ
あしあと
あじわう
あずかる
あずき
あそぶ
あたえる
あたためる
あたりまえ
あたる
あつい
あつかう
あっしゅく
あつまり
あつめる
あてな
あてはまる
あひる
あぶら
あぶる
あふれる
あまい
あまど
あまやかす
あまり
あみもの
あめりか
あやまる
あゆむ
あらいぐま
あらし
あらすじ
あらためる
あらゆる
あらわす
ありがとう
あわせる
あわてる
あんい
あんがい
あんこ
あんぜん
あんてい
あんない
あんまり
いいだす
いおん
いがい
いがく
いきおい
いきなり
いきもの
いきる
いくじ
いくぶん
いけばな
いけん
いこう
いこく
いこつ
いさましい
いさん
いしき
いじゅう
いじょう
いじわる
いずみ
いずれ
いせい
いせえび
いせかい
いせき
いぜん
いそうろう
いそがしい
いだい
いだく
いたずら
いたみ
いたりあ
いちおう
いちじ
いちど
いちば
いちぶ
いちりゅう
いつか
いっしゅん
いっせい
いっそう
いったん
いっち
いってい
いっぽう
いてざ
いてん
いどう
いとこ
いない
いなか
いねむり
いのち
いのる
いはつ
いばる
いはん
いびき
いひん
いふく
いへん
いほう
いみん
いもうと
いもたれ
いもり
いやがる
いやす
いよかん
いよく
いらい
いらすと
いりぐち
いりょう
いれい
いれもの
いれる
いろえんぴつ
いわい
いわう
いわかん
いわば
いわゆる
いんげんまめ
いんさつ
いんしょう
いんよう
うえき
うえる
うおざ
うがい
うかぶ
うかべる
うきわ
うくらいな
うくれれ
うけたまわる
うけつけ
うけとる
うけもつ
うける
うごかす
うごく
うこん
うさぎ
うしなう
うしろがみ
うすい
うすぎ
うすぐらい
うすめる
うせつ
うちあわせ
うちがわ
うちき
うちゅう
うっかり
うつくしい
うったえる
うつる
うどん
うなぎ
うなじ
うなずく
うなる
うねる
うのう
うぶげ
うぶごえ
うまれる
うめる
うもう
うやまう
うよく
うらがえす
うらぐち
うらない
うりあげ
うりきれ
うるさい
うれしい
うれゆき
うれる
うろこ
うわき
うわさ
うんこう
うんちん
うんてん
うんどう
えいえん
えいが
えいきょう
えいご
えいせい
えいぶん
えいよう
えいわ
えおり
えがお
えがく
えきたい
えくせる
えしゃく
えすて
えつらん
えのぐ
えほうまき
えほん
えまき
えもじ
えもの
えらい
えらぶ
えりあ
えんえん
えんかい
えんぎ
えんげき
えんしゅう
えんぜつ
えんそく
えんちょう
えんとつ
おいかける
おいこす
おいしい
おいつく
おうえん
おうさま
おうじ
おうせつ
おうたい
おうふく
おうべい
おうよう
おえる
おおい
おおう
おおどおり
おおや
おおよそ
おかえり
おかず
おがむ
おかわり
おぎなう
おきる
おくさま
おくじょう
おくりがな
おくる
おくれる
おこす
おこなう
おこる
おさえる
おさない
おさめる
おしいれ
おしえる
おじぎ
おじさん
おしゃれ
おそらく
おそわる
おたがい
おたく
おだやか
おちつく
おっと
おつり
おでかけ
おとしもの
おとなしい
おどり
おどろかす
おばさん
おまいり
おめでとう
おもいで
おもう
おもたい
おもちゃ
おやつ
おやゆび
およぼす
おらんだ
おろす
おんがく
おんけい
おんしゃ
おんせん
おんだん
おんちゅう
おんどけい
かあつ
かいが
がいき
がいけん
がいこう
かいさつ
かいしゃ
かいすいよく
かいぜん
かいぞうど
かいつう
かいてん
かいとう
かいふく
がいへき
かいほう
かいよう
がいらい
かいわ
かえる
かおり
かかえる
かがく
かがし
かがみ
かくご
かくとく
かざる
がぞう
かたい
かたち
がちょう
がっきゅう
がっこう
がっさん
がっしょう
かなざわし
かのう
がはく
かぶか
かほう
かほご
かまう
かまぼこ
かめれおん
かゆい
かようび
からい
かるい
かろう
かわく
かわら
がんか
かんけい
かんこう
かんしゃ
かんそう
かんたん
かんち
がんばる
きあい
きあつ
きいろ
ぎいん
きうい
きうん
きえる
きおう
きおく
きおち
きおん
きかい
きかく
きかんしゃ
ききて
きくばり
きくらげ
きけんせい
きこう
きこえる
きこく
きさい
きさく
きさま
きさらぎ
ぎじかがく
ぎしき
ぎじたいけん
ぎじにってい
ぎじゅつしゃ
きすう
きせい
きせき
きせつ
きそう
きぞく
きぞん
きたえる
きちょう
きつえん
ぎっちり
きつつき
きつね
きてい
きどう
きどく
きない
きなが
きなこ
きぬごし
きねん
きのう
きのした
きはく
きびしい
きひん
きふく
きぶん
きぼう
きほん
きまる
きみつ
きむずかしい
きめる
きもだめし
きもち
きもの
きゃく
きやく
ぎゅうにく
きよう
きょうりゅう
きらい
きらく
きりん
きれい
きれつ
きろく
ぎろん
きわめる
ぎんいろ
きんかくじ
きんじょ
きんようび
ぐあい
くいず
くうかん
くうき
くうぐん
くうこう
ぐうせい
くうそう
ぐうたら
くうふく
くうぼ
くかん
くきょう
くげん
ぐこう
くさい
くさき
くさばな
くさる
くしゃみ
くしょう
くすのき
くすりゆび
くせげ
くせん
ぐたいてき
くださる
くたびれる
くちこみ
くちさき
くつした
ぐっすり
くつろぐ
くとうてん
くどく
くなん
くねくね
くのう
くふう
くみあわせ
くみたてる
くめる
くやくしょ
くらす
くらべる
くるま
くれる
くろう
くわしい
ぐんかん
ぐんしょく
ぐんたい
ぐんて
けあな
けいかく
けいけん
けいこ
けいさつ
げいじゅつ
けいたい
げいのうじん
けいれき
けいろ
けおとす
けおりもの
げきか
げきげん
げきだん
げきちん
げきとつ
げきは
げきやく
げこう
げこくじょう
げざい
けさき
げざん
けしき
けしごむ
けしょう
げすと
けたば
けちゃっぷ
けちらす
けつあつ
けつい
けつえき
けっこん
けつじょ
けっせき
けってい
けつまつ
げつようび
げつれい
けつろん
げどく
けとばす
けとる
けなげ
けなす
けなみ
けぬき
げねつ
けねん
けはい
げひん
けぶかい
げぼく
けまり
けみかる
けむし
けむり
けもの
けらい
けろけろ
けわしい
けんい
けんえつ
けんお
けんか
げんき
けんげん
けんこう
けんさく
けんしゅう
けんすう
げんそう
けんちく
けんてい
けんとう
けんない
けんにん
げんぶつ
けんま
けんみん
けんめい
けんらん
けんり
こあくま
こいぬ
こいびと
ごうい
こうえん
こうおん
こうかん
ごうきゅう
ごうけい
こうこう
こうさい
こうじ
こうすい
ごうせい
こうそく
こうたい
こうちゃ
こうつう
こうてい
こうどう
こうない
こうはい
ごうほう
ごうまん
こうもく
こうりつ
こえる
こおり
ごかい
ごがつ
ごかん
こくご
こくさい
こくとう
こくない
こくはく
こぐま
こけい
こける
ここのか
こころ
こさめ
こしつ
こすう
こせい
こせき
こぜん
こそだて
こたい
こたえる
こたつ
こちょう
こっか
こつこつ
こつばん
こつぶ
こてい
こてん
ことがら
ことし
ことば
ことり
こなごな
こねこね
このまま
このみ
このよ
ごはん
こひつじ
こふう
こふん
こぼれる
ごまあぶら
こまかい
ごますり
こまつな
こまる
こむぎこ
こもじ
こもち
こもの
こもん
こやく
こやま
こゆう
こゆび
こよい
こよう
こりる
これくしょん
ころっけ
こわもて
こわれる
こんいん
こんかい
こんき
こんしゅう
こんすい
こんだて
こんとん
こんなん
こんびに
こんぽん
こんまけ
こんや
こんれい
こんわく
ざいえき
さいかい
さいきん
ざいげん
ざいこ
さいしょ
さいせい
ざいたく
ざいちゅう
さいてき
ざいりょう
さうな
さかいし
さがす
さかな
さかみち
さがる
さぎょう
さくし
さくひん
さくら
さこく
さこつ
さずかる
ざせき
さたん
さつえい
ざつおん
ざっか
ざつがく
さっきょく
ざっし
さつじん
ざっそう
さつたば
さつまいも
さてい
さといも
さとう
さとおや
さとし
さとる
さのう
さばく
さびしい
さべつ
さほう
さほど
さます
さみしい
さみだれ
さむけ
さめる
さやえんどう
さゆう
さよう
さよく
さらだ
ざるそば
さわやか
さわる
さんいん
さんか
さんきゃく
さんこう
さんさい
ざんしょ
さんすう
さんせい
さんそ
さんち
さんま
さんみ
さんらん
しあい
しあげ
しあさって
しあわせ
しいく
しいん
しうち
しえい
しおけ
しかい
しかく
じかん
しごと
しすう
じだい
したうけ
したぎ
したて
したみ
しちょう
しちりん
しっかり
しつじ
しつもん
してい
してき
してつ
じてん
じどう
しなぎれ
しなもの
しなん
しねま
しねん
しのぐ
しのぶ
しはい
しばかり
しはつ
しはらい
しはん
しひょう
しふく
じぶん
しへい
しほう
しほん
しまう
しまる
しみん
しむける
じむしょ
しめい
しめる
しもん
しゃいん
しゃうん
しゃおん
じゃがいも
しやくしょ
しゃくほう
しゃけん
しゃこ
しゃざい
しゃしん
しゃせん
しゃそう
しゃたい
しゃちょう
しゃっきん
じゃま
しゃりん
しゃれい
じゆう
じゅうしょ
しゅくはく
じゅしん
しゅっせき
しゅみ
しゅらば
じゅんばん
しょうかい
しょくたく
しょっけん
しょどう
しょもつ
しらせる
しらべる
しんか
しんこう
じんじゃ
しんせいじ
しんちく
しんりん
すあげ
すあし
すあな
ずあん
すいえい
すいか
すいとう
ずいぶん
すいようび
すうがく
すうじつ
すうせん
すおどり
すきま
すくう
すくない
すける
すごい
すこし
ずさん
すずしい
すすむ
すすめる
すっかり
ずっしり
ずっと
すてき
すてる
すねる
すのこ
すはだ
すばらしい
ずひょう
ずぶぬれ
すぶり
すふれ
すべて
すべる
ずほう
すぼん
すまい
すめし
すもう
すやき
すらすら
するめ
すれちがう
すろっと
すわる
すんぜん
すんぽう
せあぶら
せいかつ
せいげん
せいじ
せいよう
せおう
せかいかん
せきにん
せきむ
せきゆ
せきらんうん
せけん
せこう
せすじ
せたい
せたけ
せっかく
せっきゃく
ぜっく
せっけん
せっこつ
せっさたくま
せつぞく
せつだん
せつでん
せっぱん
せつび
せつぶん
せつめい
せつりつ
せなか
せのび
せはば
せびろ
せぼね
せまい
せまる
せめる
せもたれ
せりふ
ぜんあく
せんい
せんえい
せんか
せんきょ
せんく
せんげん
ぜんご
せんさい
せんしゅ
せんすい
せんせい
せんぞ
せんたく
せんちょう
せんてい
せんとう
せんぬき
せんねん
せんぱい
ぜんぶ
ぜんぽう
せんむ
せんめんじょ
せんもん
せんやく
せんゆう
せんよう
ぜんら
ぜんりゃく
せんれい
せんろ
そあく
そいとげる
そいね
そうがんきょう
そうき
そうご
そうしん
そうだん
そうなん
そうび
そうめん
そうり
そえもの
そえん
そがい
そげき
そこう
そこそこ
そざい
そしな
そせい
そせん
そそぐ
そだてる
そつう
そつえん
そっかん
そつぎょう
そっけつ
そっこう
そっせん
そっと
そとがわ
そとづら
そなえる
そなた
そふぼ
そぼく
そぼろ
そまつ
そまる
そむく
そむりえ
そめる
そもそも
そよかぜ
そらまめ
そろう
そんかい
そんけい
そんざい
そんしつ
そんぞく
そんちょう
ぞんび
ぞんぶん
そんみん
たあい
たいいん
たいうん
たいえき
たいおう
だいがく
たいき
たいぐう
たいけん
たいこ
たいざい
だいじょうぶ
だいすき
たいせつ
たいそう
だいたい
たいちょう
たいてい
だいどころ
たいない
たいねつ
たいのう
たいはん
だいひょう
たいふう
たいへん
たいほ
たいまつばな
たいみんぐ
たいむ
たいめん
たいやき
たいよう
たいら
たいりょく
たいる
たいわん
たうえ
たえる
たおす
たおる
たおれる
たかい
たかね
たきび
たくさん
たこく
たこやき
たさい
たしざん
だじゃれ
たすける
たずさわる
たそがれ
たたかう
たたく
ただしい
たたみ
たちばな
だっかい
だっきゃく
だっこ
だっしゅつ
だったい
たてる
たとえる
たなばた
たにん
たぬき
たのしみ
たはつ
たぶん
たべる
たぼう
たまご
たまる
だむる
ためいき
ためす
ためる
たもつ
たやすい
たよる
たらす
たりきほんがん
たりょう
たりる
たると
たれる
たれんと
たろっと
たわむれる
だんあつ
たんい
たんおん
たんか
たんき
たんけん
たんご
たんさん
たんじょうび
だんせい
たんそく
たんたい
だんち
たんてい
たんとう
だんな
たんにん
だんねつ
たんのう
たんぴん
だんぼう
たんまつ
たんめい
だんれつ
だんろ
だんわ
ちあい
ちあん
ちいき
ちいさい
ちえん
ちかい
ちから
ちきゅう
ちきん
ちけいず
ちけん
ちこく
ちさい
ちしき
ちしりょう
ちせい
ちそう
ちたい
ちたん
ちちおや
ちつじょ
ちてき
ちてん
ちぬき
ちぬり
ちのう
ちひょう
ちへいせん
ちほう
ちまた
ちみつ
ちみどろ
ちめいど
ちゃんこなべ
ちゅうい
ちゆりょく
ちょうし
ちょさくけん
ちらし
ちらみ
ちりがみ
ちりょう
ちるど
ちわわ
ちんたい
ちんもく
ついか
ついたち
つうか
つうじょう
つうはん
つうわ
つかう
つかれる
つくね
つくる
つけね
つける
つごう
つたえる
つづく
つつじ
つつむ
つとめる
つながる
つなみ
つねづね
つのる
つぶす
つまらない
つまる
つみき
つめたい
つもり
つもる
つよい
つるぼ
つるみく
つわもの
つわり
てあし
てあて
てあみ
ていおん
ていか
ていき
ていけい
ていこく
ていさつ
ていし
ていせい
ていたい
ていど
ていねい
ていひょう
ていへん
ていぼう
てうち
ておくれ
てきとう
てくび
でこぼこ
てさぎょう
てさげ
てすり
てそう
てちがい
てちょう
てつがく
てつづき
でっぱ
てつぼう
てつや
でぬかえ
てぬき
てぬぐい
てのひら
てはい
てぶくろ
てふだ
てほどき
てほん
てまえ
てまきずし
てみじか
てみやげ
てらす
てれび
てわけ
てわたし
でんあつ
てんいん
てんかい
てんき
てんぐ
てんけん
てんごく
てんさい
てんし
てんすう
でんち
てんてき
てんとう
てんない
てんぷら
てんぼうだい
てんめつ
てんらんかい
でんりょく
でんわ
どあい
といれ
どうかん
とうきゅう
どうぐ
とうし
とうむぎ
とおい
とおか
とおく
とおす
とおる
とかい
とかす
ときおり
ときどき
とくい
とくしゅう
とくてん
とくに
とくべつ
とけい
とける
とこや
とさか
としょかん
とそう
とたん
とちゅう
とっきゅう
とっくん
とつぜん
とつにゅう
とどける
ととのえる
とない
となえる
となり
とのさま
とばす
どぶがわ
とほう
とまる
とめる
ともだち
ともる
どようび
とらえる
とんかつ
どんぶり
ないかく
ないこう
ないしょ
ないす
ないせん
ないそう
なおす
ながい
なくす
なげる
なこうど
なさけ
なたでここ
なっとう
なつやすみ
ななおし
なにごと
なにもの
なにわ
なのか
なふだ
なまいき
なまえ
なまみ
なみだ
なめらか
なめる
なやむ
ならう
ならび
ならぶ
なれる
なわとび
なわばり
にあう
にいがた
にうけ
におい
にかい
にがて
にきび
にくしみ
にくまん
にげる
にさんかたんそ
にしき
にせもの
にちじょう
にちようび
にっか
にっき
にっけい
にっこう
にっさん
にっしょく
にっすう
にっせき
にってい
になう
にほん
にまめ
にもつ
にやり
にゅういん
にりんしゃ
にわとり
にんい
にんか
にんき
にんげん
にんしき
にんずう
にんそう
にんたい
にんち
にんてい
にんにく
にんぷ
にんまり
にんむ
にんめい
にんよう
ぬいくぎ
ぬかす
ぬぐいとる
ぬぐう
ぬくもり
ぬすむ
ぬまえび
ぬめり
ぬらす
ぬんちゃく
ねあげ
ねいき
ねいる
ねいろ
ねぐせ
ねくたい
ねくら
ねこぜ
ねこむ
ねさげ
ねすごす
ねそべる
ねだん
ねつい
ねっしん
ねつぞう
ねったいぎょ
ねぶそく
ねふだ
ねぼう
ねほりはほり
ねまき
ねまわし
ねみみ
ねむい
ねむたい
ねもと
ねらう
ねわざ
ねんいり
ねんおし
ねんかん
ねんきん
ねんぐ
ねんざ
ねんし
ねんちゃく
ねんど
ねんぴ
ねんぶつ
ねんまつ
ねんりょう
ねんれい
のいず
のおづま
のがす
のきなみ
のこぎり
のこす
のこる
のせる
のぞく
のぞむ
のたまう
のちほど
のっく
のばす
のはら
のべる
のぼる
のみもの
のやま
のらいぬ
のらねこ
のりもの
のりゆき
のれん
のんき
ばあい
はあく
ばあさん
ばいか
ばいく
はいけん
はいご
はいしん
はいすい
はいせん
はいそう
はいち
ばいばい
はいれつ
はえる
はおる
はかい
ばかり
はかる
はくしゅ
はけん
はこぶ
はさみ
はさん
はしご
ばしょ
はしる
はせる
ぱそこん
はそん
はたん
はちみつ
はつおん
はっかく
はづき
はっきり
はっくつ
はっけん
はっこう
はっさん
はっしん
はったつ
はっちゅう
はってん
はっぴょう
はっぽう
はなす
はなび
はにかむ
はぶらし
はみがき
はむかう
はめつ
はやい
はやし
はらう
はろうぃん
はわい
はんい
はんえい
はんおん
はんかく
はんきょう
ばんぐみ
はんこ
はんしゃ
はんすう
はんだん
ぱんち
ぱんつ
はんてい
はんとし
はんのう
はんぱ
はんぶん
はんぺん
はんぼうき
はんめい
はんらん
はんろん
ひいき
ひうん
ひえる
ひかく
ひかり
ひかる
ひかん
ひくい
ひけつ
ひこうき
ひこく
ひさい
ひさしぶり
ひさん
びじゅつかん
ひしょ
ひそか
ひそむ
ひたむき
ひだり
ひたる
ひつぎ
ひっこし
ひっし
ひつじゅひん
ひっす
ひつぜん
ぴったり
ぴっちり
ひつよう
ひてい
ひとごみ
ひなまつり
ひなん
ひねる
ひはん
ひびく
ひひょう
ひほう
ひまわり
ひまん
ひみつ
ひめい
ひめじし
ひやけ
ひやす
ひよう
びょうき
ひらがな
ひらく
ひりつ
ひりょう
ひるま
ひるやすみ
ひれい
ひろい
ひろう
ひろき
ひろゆき
ひんかく
ひんけつ
ひんこん
ひんしゅ
ひんそう
ぴんち
ひんぱん
びんぼう
ふあん
ふいうち
ふうけい
ふうせん
ぷうたろう
ふうとう
ふうふ
ふえる
ふおん
ふかい
ふきん
ふくざつ
ふくぶくろ
ふこう
ふさい
ふしぎ
ふじみ
ふすま
ふせい
ふせぐ
ふそく
ぶたにく
ふたん
ふちょう
ふつう
ふつか
ふっかつ
ふっき
ふっこく
ぶどう
ふとる
ふとん
ふのう
ふはい
ふひょう
ふへん
ふまん
ふみん
ふめつ
ふめん
ふよう
ふりこ
ふりる
ふるい
ふんいき
ぶんがく
ぶんぐ
ふんしつ
ぶんせき
ふんそう
ぶんぽう
へいあん
へいおん
へいがい
へいき
へいげん
へいこう
へいさ
へいしゃ
へいせつ
へいそ
へいたく
へいてん
へいねつ
へいわ
へきが
へこむ
べにいろ
べにしょうが
へらす
へんかん
べんきょう
べんごし
へんさい
へんたい
べんり
ほあん
ほいく
ぼうぎょ
ほうこく
ほうそう
ほうほう
ほうもん
ほうりつ
ほえる
ほおん
ほかん
ほきょう
ぼきん
ほくろ
ほけつ
ほけん
ほこう
ほこる
ほしい
ほしつ
ほしゅ
ほしょう
ほせい
ほそい
ほそく
ほたて
ほたる
ぽちぶくろ
ほっきょく
ほっさ
ほったん
ほとんど
ほめる
ほんい
ほんき
ほんけ
ほんしつ
ほんやく
まいにち
まかい
まかせる
まがる
まける
まこと
まさつ
まじめ
ますく
まぜる
まつり
まとめ
まなぶ
まぬけ
まねく
まほう
まもる
まゆげ
まよう
まろやか
まわす
まわり
まわる
まんが
まんきつ
まんぞく
まんなか
みいら
みうち
みえる
みがく
みかた
みかん
みけん
みこん
みじかい
みすい
みすえる
みせる
みっか
みつかる
みつける
みてい
みとめる
みなと
みなみかさい
みねらる
みのう
みのがす
みほん
みもと
みやげ
みらい
みりょく
みわく
みんか
みんぞく
むいか
むえき
むえん
むかい
むかう
むかえ
むかし
むぎちゃ
むける
むげん
むさぼる
むしあつい
むしば
むじゅん
むしろ
むすう
むすこ
むすぶ
むすめ
むせる
むせん
むちゅう
むなしい
むのう
むやみ
むよう
むらさき
むりょう
むろん
めいあん
めいうん
めいえん
めいかく
めいきょく
めいさい
めいし
めいそう
めいぶつ
めいれい
めいわく
めぐまれる
めざす
めした
めずらしい
めだつ
めまい
めやす
めんきょ
めんせき
めんどう
もうしあげる
もうどうけん
もえる
もくし
もくてき
もくようび
もちろん
もどる
もらう
もんく
もんだい
やおや
やける
やさい
やさしい
やすい
やすたろう
やすみ
やせる
やそう
やたい
やちん
やっと
やっぱり
やぶる
やめる
ややこしい
やよい
やわらかい
ゆうき
ゆうびんきょく
ゆうべ
ゆうめい
ゆけつ
ゆしゅつ
ゆせん
ゆそう
ゆたか
ゆちゃく
ゆでる
ゆにゅう
ゆびわ
ゆらい
ゆれる
ようい
ようか
ようきゅう
ようじ
ようす
ようちえん
よかぜ
よかん
よきん
よくせい
よくぼう
よけい
よごれる
よさん
よしゅう
よそう
よそく
よっか
よてい
よどがわく
よねつ
よやく
よゆう
よろこぶ
よろしい
らいう
らくがき
らくご
らくさつ
らくだ
らしんばん
らせん
らぞく
らたい
らっか
られつ
りえき
りかい
りきさく
りきせつ
りくぐん
りくつ
りけん
りこう
りせい
りそう
りそく
りてん
りねん
りゆう
りゅうがく
りよう
りょうり
りょかん
りょくちゃ
りょこう
りりく
りれき
りろん
りんご
るいけい
るいさい
るいじ
るいせき
るすばん
るりがわら
れいかん
れいぎ
れいせい
れいぞうこ
れいとう
れいぼう
れきし
れきだい
れんあい
れんけい
れんこん
れんさい
れんしゅう
れんぞく
れんらく
ろうか
ろうご
ろうじん
ろうそく
ろくが
ろこつ
ろじうら
ろしゅつ
ろせん
ろてん
ろめん
ろれつ
ろんぎ
ろんぱ
ろんぶん
ろんり
わかす
わかめ
わかやま
わかれる
わしつ
わじまし
わすれもの
わらう
われる`.split(`
`),vl=`가격
가끔
가난
가능
가득
가르침
가뭄
가방
가상
가슴
가운데
가을
가이드
가입
가장
가정
가족
가죽
각오
각자
간격
간부
간섭
간장
간접
간판
갈등
갈비
갈색
갈증
감각
감기
감소
감수성
감자
감정
갑자기
강남
강당
강도
강력히
강변
강북
강사
강수량
강아지
강원도
강의
강제
강조
같이
개구리
개나리
개방
개별
개선
개성
개인
객관적
거실
거액
거울
거짓
거품
걱정
건강
건물
건설
건조
건축
걸음
검사
검토
게시판
게임
겨울
견해
결과
결국
결론
결석
결승
결심
결정
결혼
경계
경고
경기
경력
경복궁
경비
경상도
경영
경우
경쟁
경제
경주
경찰
경치
경향
경험
계곡
계단
계란
계산
계속
계약
계절
계층
계획
고객
고구려
고궁
고급
고등학생
고무신
고민
고양이
고장
고전
고집
고춧가루
고통
고향
곡식
골목
골짜기
골프
공간
공개
공격
공군
공급
공기
공동
공무원
공부
공사
공식
공업
공연
공원
공장
공짜
공책
공통
공포
공항
공휴일
과목
과일
과장
과정
과학
관객
관계
관광
관념
관람
관련
관리
관습
관심
관점
관찰
광경
광고
광장
광주
괴로움
굉장히
교과서
교문
교복
교실
교양
교육
교장
교직
교통
교환
교훈
구경
구름
구멍
구별
구분
구석
구성
구속
구역
구입
구청
구체적
국가
국기
국내
국립
국물
국민
국수
국어
국왕
국적
국제
국회
군대
군사
군인
궁극적
권리
권위
권투
귀국
귀신
규정
규칙
균형
그날
그냥
그늘
그러나
그룹
그릇
그림
그제서야
그토록
극복
극히
근거
근교
근래
근로
근무
근본
근원
근육
근처
글씨
글자
금강산
금고
금년
금메달
금액
금연
금요일
금지
긍정적
기간
기관
기념
기능
기독교
기둥
기록
기름
기법
기본
기분
기쁨
기숙사
기술
기억
기업
기온
기운
기원
기적
기준
기침
기혼
기획
긴급
긴장
길이
김밥
김치
김포공항
깍두기
깜빡
깨달음
깨소금
껍질
꼭대기
꽃잎
나들이
나란히
나머지
나물
나침반
나흘
낙엽
난방
날개
날씨
날짜
남녀
남대문
남매
남산
남자
남편
남학생
낭비
낱말
내년
내용
내일
냄비
냄새
냇물
냉동
냉면
냉방
냉장고
넥타이
넷째
노동
노란색
노력
노인
녹음
녹차
녹화
논리
논문
논쟁
놀이
농구
농담
농민
농부
농업
농장
농촌
높이
눈동자
눈물
눈썹
뉴욕
느낌
늑대
능동적
능력
다방
다양성
다음
다이어트
다행
단계
단골
단독
단맛
단순
단어
단위
단점
단체
단추
단편
단풍
달걀
달러
달력
달리
닭고기
담당
담배
담요
담임
답변
답장
당근
당분간
당연히
당장
대규모
대낮
대단히
대답
대도시
대략
대량
대륙
대문
대부분
대신
대응
대장
대전
대접
대중
대책
대출
대충
대통령
대학
대한민국
대합실
대형
덩어리
데이트
도대체
도덕
도둑
도망
도서관
도심
도움
도입
도자기
도저히
도전
도중
도착
독감
독립
독서
독일
독창적
동화책
뒷모습
뒷산
딸아이
마누라
마늘
마당
마라톤
마련
마무리
마사지
마약
마요네즈
마을
마음
마이크
마중
마지막
마찬가지
마찰
마흔
막걸리
막내
막상
만남
만두
만세
만약
만일
만점
만족
만화
많이
말기
말씀
말투
맘대로
망원경
매년
매달
매력
매번
매스컴
매일
매장
맥주
먹이
먼저
먼지
멀리
메일
며느리
며칠
면담
멸치
명단
명령
명예
명의
명절
명칭
명함
모금
모니터
모델
모든
모범
모습
모양
모임
모조리
모집
모퉁이
목걸이
목록
목사
목소리
목숨
목적
목표
몰래
몸매
몸무게
몸살
몸속
몸짓
몸통
몹시
무관심
무궁화
무더위
무덤
무릎
무슨
무엇
무역
무용
무조건
무지개
무척
문구
문득
문법
문서
문제
문학
문화
물가
물건
물결
물고기
물론
물리학
물음
물질
물체
미국
미디어
미사일
미술
미역
미용실
미움
미인
미팅
미혼
민간
민족
민주
믿음
밀가루
밀리미터
밑바닥
바가지
바구니
바나나
바늘
바닥
바닷가
바람
바이러스
바탕
박물관
박사
박수
반대
반드시
반말
반발
반성
반응
반장
반죽
반지
반찬
받침
발가락
발걸음
발견
발달
발레
발목
발바닥
발생
발음
발자국
발전
발톱
발표
밤하늘
밥그릇
밥맛
밥상
밥솥
방금
방면
방문
방바닥
방법
방송
방식
방안
방울
방지
방학
방해
방향
배경
배꼽
배달
배드민턴
백두산
백색
백성
백인
백제
백화점
버릇
버섯
버튼
번개
번역
번지
번호
벌금
벌레
벌써
범위
범인
범죄
법률
법원
법적
법칙
베이징
벨트
변경
변동
변명
변신
변호사
변화
별도
별명
별일
병실
병아리
병원
보관
보너스
보라색
보람
보름
보상
보안
보자기
보장
보전
보존
보통
보편적
보험
복도
복사
복숭아
복습
볶음
본격적
본래
본부
본사
본성
본인
본질
볼펜
봉사
봉지
봉투
부근
부끄러움
부담
부동산
부문
부분
부산
부상
부엌
부인
부작용
부장
부정
부족
부지런히
부친
부탁
부품
부회장
북부
북한
분노
분량
분리
분명
분석
분야
분위기
분필
분홍색
불고기
불과
불교
불꽃
불만
불법
불빛
불안
불이익
불행
브랜드
비극
비난
비닐
비둘기
비디오
비로소
비만
비명
비밀
비바람
비빔밥
비상
비용
비율
비중
비타민
비판
빌딩
빗물
빗방울
빗줄기
빛깔
빨간색
빨래
빨리
사건
사계절
사나이
사냥
사람
사랑
사립
사모님
사물
사방
사상
사생활
사설
사슴
사실
사업
사용
사월
사장
사전
사진
사촌
사춘기
사탕
사투리
사흘
산길
산부인과
산업
산책
살림
살인
살짝
삼계탕
삼국
삼십
삼월
삼촌
상관
상금
상대
상류
상반기
상상
상식
상업
상인
상자
상점
상처
상추
상태
상표
상품
상황
새벽
색깔
색연필
생각
생명
생물
생방송
생산
생선
생신
생일
생활
서랍
서른
서명
서민
서비스
서양
서울
서적
서점
서쪽
서클
석사
석유
선거
선물
선배
선생
선수
선원
선장
선전
선택
선풍기
설거지
설날
설렁탕
설명
설문
설사
설악산
설치
설탕
섭씨
성공
성당
성명
성별
성인
성장
성적
성질
성함
세금
세미나
세상
세월
세종대왕
세탁
센터
센티미터
셋째
소규모
소극적
소금
소나기
소년
소득
소망
소문
소설
소속
소아과
소용
소원
소음
소중히
소지품
소질
소풍
소형
속담
속도
속옷
손가락
손길
손녀
손님
손등
손목
손뼉
손실
손질
손톱
손해
솔직히
솜씨
송아지
송이
송편
쇠고기
쇼핑
수건
수년
수단
수돗물
수동적
수면
수명
수박
수상
수석
수술
수시로
수업
수염
수영
수입
수준
수집
수출
수컷
수필
수학
수험생
수화기
숙녀
숙소
숙제
순간
순서
순수
순식간
순위
숟가락
술병
술집
숫자
스님
스물
스스로
스승
스웨터
스위치
스케이트
스튜디오
스트레스
스포츠
슬쩍
슬픔
습관
습기
승객
승리
승부
승용차
승진
시각
시간
시골
시금치
시나리오
시댁
시리즈
시멘트
시민
시부모
시선
시설
시스템
시아버지
시어머니
시월
시인
시일
시작
시장
시절
시점
시중
시즌
시집
시청
시합
시험
식구
식기
식당
식량
식료품
식물
식빵
식사
식생활
식초
식탁
식품
신고
신규
신념
신문
신발
신비
신사
신세
신용
신제품
신청
신체
신화
실감
실내
실력
실례
실망
실수
실습
실시
실장
실정
실질적
실천
실체
실컷
실태
실패
실험
실현
심리
심부름
심사
심장
심정
심판
쌍둥이
씨름
씨앗
아가씨
아나운서
아드님
아들
아쉬움
아스팔트
아시아
아울러
아저씨
아줌마
아직
아침
아파트
아프리카
아픔
아홉
아흔
악기
악몽
악수
안개
안경
안과
안내
안녕
안동
안방
안부
안주
알루미늄
알코올
암시
암컷
압력
앞날
앞문
애인
애정
액수
앨범
야간
야단
야옹
약간
약국
약속
약수
약점
약품
약혼녀
양념
양력
양말
양배추
양주
양파
어둠
어려움
어른
어젯밤
어쨌든
어쩌다가
어쩐지
언니
언덕
언론
언어
얼굴
얼른
얼음
얼핏
엄마
업무
업종
업체
엉덩이
엉망
엉터리
엊그제
에너지
에어컨
엔진
여건
여고생
여관
여군
여권
여대생
여덟
여동생
여든
여론
여름
여섯
여성
여왕
여인
여전히
여직원
여학생
여행
역사
역시
역할
연결
연구
연극
연기
연락
연설
연세
연속
연습
연애
연예인
연인
연장
연주
연출
연필
연합
연휴
열기
열매
열쇠
열심히
열정
열차
열흘
염려
엽서
영국
영남
영상
영양
영역
영웅
영원히
영하
영향
영혼
영화
옆구리
옆방
옆집
예감
예금
예방
예산
예상
예선
예술
예습
예식장
예약
예전
예절
예정
예컨대
옛날
오늘
오락
오랫동안
오렌지
오로지
오른발
오븐
오십
오염
오월
오전
오직
오징어
오페라
오피스텔
오히려
옥상
옥수수
온갖
온라인
온몸
온종일
온통
올가을
올림픽
올해
옷차림
와이셔츠
와인
완성
완전
왕비
왕자
왜냐하면
왠지
외갓집
외국
외로움
외삼촌
외출
외침
외할머니
왼발
왼손
왼쪽
요금
요일
요즘
요청
용기
용서
용어
우산
우선
우승
우연히
우정
우체국
우편
운동
운명
운반
운전
운행
울산
울음
움직임
웃어른
웃음
워낙
원고
원래
원서
원숭이
원인
원장
원피스
월급
월드컵
월세
월요일
웨이터
위반
위법
위성
위원
위험
위협
윗사람
유난히
유럽
유명
유물
유산
유적
유치원
유학
유행
유형
육군
육상
육십
육체
은행
음력
음료
음반
음성
음식
음악
음주
의견
의논
의문
의복
의식
의심
의외로
의욕
의원
의학
이것
이곳
이념
이놈
이달
이대로
이동
이렇게
이력서
이론적
이름
이민
이발소
이별
이불
이빨
이상
이성
이슬
이야기
이용
이웃
이월
이윽고
이익
이전
이중
이튿날
이틀
이혼
인간
인격
인공
인구
인근
인기
인도
인류
인물
인생
인쇄
인연
인원
인재
인종
인천
인체
인터넷
인하
인형
일곱
일기
일단
일대
일등
일반
일본
일부
일상
일생
일손
일요일
일월
일정
일종
일주일
일찍
일체
일치
일행
일회용
임금
임무
입대
입력
입맛
입사
입술
입시
입원
입장
입학
자가용
자격
자극
자동
자랑
자부심
자식
자신
자연
자원
자율
자전거
자정
자존심
자판
작가
작년
작성
작업
작용
작은딸
작품
잔디
잔뜩
잔치
잘못
잠깐
잠수함
잠시
잠옷
잠자리
잡지
장관
장군
장기간
장래
장례
장르
장마
장면
장모
장미
장비
장사
장소
장식
장애인
장인
장점
장차
장학금
재능
재빨리
재산
재생
재작년
재정
재채기
재판
재학
재활용
저것
저고리
저곳
저녁
저런
저렇게
저번
저울
저절로
저축
적극
적당히
적성
적용
적응
전개
전공
전기
전달
전라도
전망
전문
전반
전부
전세
전시
전용
전자
전쟁
전주
전철
전체
전통
전혀
전후
절대
절망
절반
절약
절차
점검
점수
점심
점원
점점
점차
접근
접시
접촉
젓가락
정거장
정도
정류장
정리
정말
정면
정문
정반대
정보
정부
정비
정상
정성
정오
정원
정장
정지
정치
정확히
제공
제과점
제대로
제목
제발
제법
제삿날
제안
제일
제작
제주도
제출
제품
제한
조각
조건
조금
조깅
조명
조미료
조상
조선
조용히
조절
조정
조직
존댓말
존재
졸업
졸음
종교
종로
종류
종소리
종업원
종종
종합
좌석
죄인
주관적
주름
주말
주머니
주먹
주문
주민
주방
주변
주식
주인
주일
주장
주전자
주택
준비
줄거리
줄기
줄무늬
중간
중계방송
중국
중년
중단
중독
중반
중부
중세
중소기업
중순
중앙
중요
중학교
즉석
즉시
즐거움
증가
증거
증권
증상
증세
지각
지갑
지경
지극히
지금
지급
지능
지름길
지리산
지방
지붕
지식
지역
지우개
지원
지적
지점
지진
지출
직선
직업
직원
직장
진급
진동
진로
진료
진리
진짜
진찰
진출
진통
진행
질문
질병
질서
짐작
집단
집안
집중
짜증
찌꺼기
차남
차라리
차량
차림
차별
차선
차츰
착각
찬물
찬성
참가
참기름
참새
참석
참여
참외
참조
찻잔
창가
창고
창구
창문
창밖
창작
창조
채널
채점
책가방
책방
책상
책임
챔피언
처벌
처음
천국
천둥
천장
천재
천천히
철도
철저히
철학
첫날
첫째
청년
청바지
청소
청춘
체계
체력
체온
체육
체중
체험
초등학생
초반
초밥
초상화
초순
초여름
초원
초저녁
초점
초청
초콜릿
촛불
총각
총리
총장
촬영
최근
최상
최선
최신
최악
최종
추석
추억
추진
추천
추측
축구
축소
축제
축하
출근
출발
출산
출신
출연
출입
출장
출판
충격
충고
충돌
충분히
충청도
취업
취직
취향
치약
친구
친척
칠십
칠월
칠판
침대
침묵
침실
칫솔
칭찬
카메라
카운터
칼국수
캐릭터
캠퍼스
캠페인
커튼
컨디션
컬러
컴퓨터
코끼리
코미디
콘서트
콜라
콤플렉스
콩나물
쾌감
쿠데타
크림
큰길
큰딸
큰소리
큰아들
큰어머니
큰일
큰절
클래식
클럽
킬로
타입
타자기
탁구
탁자
탄생
태권도
태양
태풍
택시
탤런트
터널
터미널
테니스
테스트
테이블
텔레비전
토론
토마토
토요일
통계
통과
통로
통신
통역
통일
통장
통제
통증
통합
통화
퇴근
퇴원
퇴직금
튀김
트럭
특급
특별
특성
특수
특징
특히
튼튼히
티셔츠
파란색
파일
파출소
판결
판단
판매
판사
팔십
팔월
팝송
패션
팩스
팩시밀리
팬티
퍼센트
페인트
편견
편의
편지
편히
평가
평균
평생
평소
평양
평일
평화
포스터
포인트
포장
포함
표면
표정
표준
표현
품목
품질
풍경
풍속
풍습
프랑스
프린터
플라스틱
피곤
피망
피아노
필름
필수
필요
필자
필통
핑계
하느님
하늘
하드웨어
하룻밤
하반기
하숙집
하순
하여튼
하지만
하천
하품
하필
학과
학교
학급
학기
학년
학력
학번
학부모
학비
학생
학술
학습
학용품
학원
학위
학자
학점
한계
한글
한꺼번에
한낮
한눈
한동안
한때
한라산
한마디
한문
한번
한복
한식
한여름
한쪽
할머니
할아버지
할인
함께
함부로
합격
합리적
항공
항구
항상
항의
해결
해군
해답
해당
해물
해석
해설
해수욕장
해안
핵심
핸드백
햄버거
햇볕
햇살
행동
행복
행사
행운
행위
향기
향상
향수
허락
허용
헬기
현관
현금
현대
현상
현실
현장
현재
현지
혈액
협력
형부
형사
형수
형식
형제
형태
형편
혜택
호기심
호남
호랑이
호박
호텔
호흡
혹시
홀로
홈페이지
홍보
홍수
홍차
화면
화분
화살
화요일
화장
화학
확보
확인
확장
확정
환갑
환경
환영
환율
환자
활기
활동
활발히
활용
활짝
회견
회관
회복
회색
회원
회장
회전
횟수
횡단보도
효율적
후반
후춧가루
훈련
훨씬
휴식
휴일
흉내
흐름
흑백
흑인
흔적
흔히
흥미
흥분
희곡
희망
희생
흰색
힘껏`.split(`
`),yl=`的
一
是
在
不
了
有
和
人
这
中
大
为
上
个
国
我
以
要
他
时
来
用
们
生
到
作
地
于
出
就
分
对
成
会
可
主
发
年
动
同
工
也
能
下
过
子
说
产
种
面
而
方
后
多
定
行
学
法
所
民
得
经
十
三
之
进
着
等
部
度
家
电
力
里
如
水
化
高
自
二
理
起
小
物
现
实
加
量
都
两
体
制
机
当
使
点
从
业
本
去
把
性
好
应
开
它
合
还
因
由
其
些
然
前
外
天
政
四
日
那
社
义
事
平
形
相
全
表
间
样
与
关
各
重
新
线
内
数
正
心
反
你
明
看
原
又
么
利
比
或
但
质
气
第
向
道
命
此
变
条
只
没
结
解
问
意
建
月
公
无
系
军
很
情
者
最
立
代
想
已
通
并
提
直
题
党
程
展
五
果
料
象
员
革
位
入
常
文
总
次
品
式
活
设
及
管
特
件
长
求
老
头
基
资
边
流
路
级
少
图
山
统
接
知
较
将
组
见
计
别
她
手
角
期
根
论
运
农
指
几
九
区
强
放
决
西
被
干
做
必
战
先
回
则
任
取
据
处
队
南
给
色
光
门
即
保
治
北
造
百
规
热
领
七
海
口
东
导
器
压
志
世
金
增
争
济
阶
油
思
术
极
交
受
联
什
认
六
共
权
收
证
改
清
美
再
采
转
更
单
风
切
打
白
教
速
花
带
安
场
身
车
例
真
务
具
万
每
目
至
达
走
积
示
议
声
报
斗
完
类
八
离
华
名
确
才
科
张
信
马
节
话
米
整
空
元
况
今
集
温
传
土
许
步
群
广
石
记
需
段
研
界
拉
林
律
叫
且
究
观
越
织
装
影
算
低
持
音
众
书
布
复
容
儿
须
际
商
非
验
连
断
深
难
近
矿
千
周
委
素
技
备
半
办
青
省
列
习
响
约
支
般
史
感
劳
便
团
往
酸
历
市
克
何
除
消
构
府
称
太
准
精
值
号
率
族
维
划
选
标
写
存
候
毛
亲
快
效
斯
院
查
江
型
眼
王
按
格
养
易
置
派
层
片
始
却
专
状
育
厂
京
识
适
属
圆
包
火
住
调
满
县
局
照
参
红
细
引
听
该
铁
价
严
首
底
液
官
德
随
病
苏
失
尔
死
讲
配
女
黄
推
显
谈
罪
神
艺
呢
席
含
企
望
密
批
营
项
防
举
球
英
氧
势
告
李
台
落
木
帮
轮
破
亚
师
围
注
远
字
材
排
供
河
态
封
另
施
减
树
溶
怎
止
案
言
士
均
武
固
叶
鱼
波
视
仅
费
紧
爱
左
章
早
朝
害
续
轻
服
试
食
充
兵
源
判
护
司
足
某
练
差
致
板
田
降
黑
犯
负
击
范
继
兴
似
余
坚
曲
输
修
故
城
夫
够
送
笔
船
占
右
财
吃
富
春
职
觉
汉
画
功
巴
跟
虽
杂
飞
检
吸
助
升
阳
互
初
创
抗
考
投
坏
策
古
径
换
未
跑
留
钢
曾
端
责
站
简
述
钱
副
尽
帝
射
草
冲
承
独
令
限
阿
宣
环
双
请
超
微
让
控
州
良
轴
找
否
纪
益
依
优
顶
础
载
倒
房
突
坐
粉
敌
略
客
袁
冷
胜
绝
析
块
剂
测
丝
协
诉
念
陈
仍
罗
盐
友
洋
错
苦
夜
刑
移
频
逐
靠
混
母
短
皮
终
聚
汽
村
云
哪
既
距
卫
停
烈
央
察
烧
迅
境
若
印
洲
刻
括
激
孔
搞
甚
室
待
核
校
散
侵
吧
甲
游
久
菜
味
旧
模
湖
货
损
预
阻
毫
普
稳
乙
妈
植
息
扩
银
语
挥
酒
守
拿
序
纸
医
缺
雨
吗
针
刘
啊
急
唱
误
训
愿
审
附
获
茶
鲜
粮
斤
孩
脱
硫
肥
善
龙
演
父
渐
血
欢
械
掌
歌
沙
刚
攻
谓
盾
讨
晚
粒
乱
燃
矛
乎
杀
药
宁
鲁
贵
钟
煤
读
班
伯
香
介
迫
句
丰
培
握
兰
担
弦
蛋
沉
假
穿
执
答
乐
谁
顺
烟
缩
征
脸
喜
松
脚
困
异
免
背
星
福
买
染
井
概
慢
怕
磁
倍
祖
皇
促
静
补
评
翻
肉
践
尼
衣
宽
扬
棉
希
伤
操
垂
秋
宜
氢
套
督
振
架
亮
末
宪
庆
编
牛
触
映
雷
销
诗
座
居
抓
裂
胞
呼
娘
景
威
绿
晶
厚
盟
衡
鸡
孙
延
危
胶
屋
乡
临
陆
顾
掉
呀
灯
岁
措
束
耐
剧
玉
赵
跳
哥
季
课
凯
胡
额
款
绍
卷
齐
伟
蒸
殖
永
宗
苗
川
炉
岩
弱
零
杨
奏
沿
露
杆
探
滑
镇
饭
浓
航
怀
赶
库
夺
伊
灵
税
途
灭
赛
归
召
鼓
播
盘
裁
险
康
唯
录
菌
纯
借
糖
盖
横
符
私
努
堂
域
枪
润
幅
哈
竟
熟
虫
泽
脑
壤
碳
欧
遍
侧
寨
敢
彻
虑
斜
薄
庭
纳
弹
饲
伸
折
麦
湿
暗
荷
瓦
塞
床
筑
恶
户
访
塔
奇
透
梁
刀
旋
迹
卡
氯
遇
份
毒
泥
退
洗
摆
灰
彩
卖
耗
夏
择
忙
铜
献
硬
予
繁
圈
雪
函
亦
抽
篇
阵
阴
丁
尺
追
堆
雄
迎
泛
爸
楼
避
谋
吨
野
猪
旗
累
偏
典
馆
索
秦
脂
潮
爷
豆
忽
托
惊
塑
遗
愈
朱
替
纤
粗
倾
尚
痛
楚
谢
奋
购
磨
君
池
旁
碎
骨
监
捕
弟
暴
割
贯
殊
释
词
亡
壁
顿
宝
午
尘
闻
揭
炮
残
冬
桥
妇
警
综
招
吴
付
浮
遭
徐
您
摇
谷
赞
箱
隔
订
男
吹
园
纷
唐
败
宋
玻
巨
耕
坦
荣
闭
湾
键
凡
驻
锅
救
恩
剥
凝
碱
齿
截
炼
麻
纺
禁
废
盛
版
缓
净
睛
昌
婚
涉
筒
嘴
插
岸
朗
庄
街
藏
姑
贸
腐
奴
啦
惯
乘
伙
恢
匀
纱
扎
辩
耳
彪
臣
亿
璃
抵
脉
秀
萨
俄
网
舞
店
喷
纵
寸
汗
挂
洪
贺
闪
柬
爆
烯
津
稻
墙
软
勇
像
滚
厘
蒙
芳
肯
坡
柱
荡
腿
仪
旅
尾
轧
冰
贡
登
黎
削
钻
勒
逃
障
氨
郭
峰
币
港
伏
轨
亩
毕
擦
莫
刺
浪
秘
援
株
健
售
股
岛
甘
泡
睡
童
铸
汤
阀
休
汇
舍
牧
绕
炸
哲
磷
绩
朋
淡
尖
启
陷
柴
呈
徒
颜
泪
稍
忘
泵
蓝
拖
洞
授
镜
辛
壮
锋
贫
虚
弯
摩
泰
幼
廷
尊
窗
纲
弄
隶
疑
氏
宫
姐
震
瑞
怪
尤
琴
循
描
膜
违
夹
腰
缘
珠
穷
森
枝
竹
沟
催
绳
忆
邦
剩
幸
浆
栏
拥
牙
贮
礼
滤
钠
纹
罢
拍
咱
喊
袖
埃
勤
罚
焦
潜
伍
墨
欲
缝
姓
刊
饱
仿
奖
铝
鬼
丽
跨
默
挖
链
扫
喝
袋
炭
污
幕
诸
弧
励
梅
奶
洁
灾
舟
鉴
苯
讼
抱
毁
懂
寒
智
埔
寄
届
跃
渡
挑
丹
艰
贝
碰
拔
爹
戴
码
梦
芽
熔
赤
渔
哭
敬
颗
奔
铅
仲
虎
稀
妹
乏
珍
申
桌
遵
允
隆
螺
仓
魏
锐
晓
氮
兼
隐
碍
赫
拨
忠
肃
缸
牵
抢
博
巧
壳
兄
杜
讯
诚
碧
祥
柯
页
巡
矩
悲
灌
龄
伦
票
寻
桂
铺
圣
恐
恰
郑
趣
抬
荒
腾
贴
柔
滴
猛
阔
辆
妻
填
撤
储
签
闹
扰
紫
砂
递
戏
吊
陶
伐
喂
疗
瓶
婆
抚
臂
摸
忍
虾
蜡
邻
胸
巩
挤
偶
弃
槽
劲
乳
邓
吉
仁
烂
砖
租
乌
舰
伴
瓜
浅
丙
暂
燥
橡
柳
迷
暖
牌
秧
胆
详
簧
踏
瓷
谱
呆
宾
糊
洛
辉
愤
竞
隙
怒
粘
乃
绪
肩
籍
敏
涂
熙
皆
侦
悬
掘
享
纠
醒
狂
锁
淀
恨
牲
霸
爬
赏
逆
玩
陵
祝
秒
浙
貌
役
彼
悉
鸭
趋
凤
晨
畜
辈
秩
卵
署
梯
炎
滩
棋
驱
筛
峡
冒
啥
寿
译
浸
泉
帽
迟
硅
疆
贷
漏
稿
冠
嫩
胁
芯
牢
叛
蚀
奥
鸣
岭
羊
凭
串
塘
绘
酵
融
盆
锡
庙
筹
冻
辅
摄
袭
筋
拒
僚
旱
钾
鸟
漆
沈
眉
疏
添
棒
穗
硝
韩
逼
扭
侨
凉
挺
碗
栽
炒
杯
患
馏
劝
豪
辽
勃
鸿
旦
吏
拜
狗
埋
辊
掩
饮
搬
骂
辞
勾
扣
估
蒋
绒
雾
丈
朵
姆
拟
宇
辑
陕
雕
偿
蓄
崇
剪
倡
厅
咬
驶
薯
刷
斥
番
赋
奉
佛
浇
漫
曼
扇
钙
桃
扶
仔
返
俗
亏
腔
鞋
棱
覆
框
悄
叔
撞
骗
勘
旺
沸
孤
吐
孟
渠
屈
疾
妙
惜
仰
狠
胀
谐
抛
霉
桑
岗
嘛
衰
盗
渗
脏
赖
涌
甜
曹
阅
肌
哩
厉
烃
纬
毅
昨
伪
症
煮
叹
钉
搭
茎
笼
酷
偷
弓
锥
恒
杰
坑
鼻
翼
纶
叙
狱
逮
罐
络
棚
抑
膨
蔬
寺
骤
穆
冶
枯
册
尸
凸
绅
坯
牺
焰
轰
欣
晋
瘦
御
锭
锦
丧
旬
锻
垄
搜
扑
邀
亭
酯
迈
舒
脆
酶
闲
忧
酚
顽
羽
涨
卸
仗
陪
辟
惩
杭
姚
肚
捉
飘
漂
昆
欺
吾
郎
烷
汁
呵
饰
萧
雅
邮
迁
燕
撒
姻
赴
宴
烦
债
帐
斑
铃
旨
醇
董
饼
雏
姿
拌
傅
腹
妥
揉
贤
拆
歪
葡
胺
丢
浩
徽
昂
垫
挡
览
贪
慰
缴
汪
慌
冯
诺
姜
谊
凶
劣
诬
耀
昏
躺
盈
骑
乔
溪
丛
卢
抹
闷
咨
刮
驾
缆
悟
摘
铒
掷
颇
幻
柄
惠
惨
佳
仇
腊
窝
涤
剑
瞧
堡
泼
葱
罩
霍
捞
胎
苍
滨
俩
捅
湘
砍
霞
邵
萄
疯
淮
遂
熊
粪
烘
宿
档
戈
驳
嫂
裕
徙
箭
捐
肠
撑
晒
辨
殿
莲
摊
搅
酱
屏
疫
哀
蔡
堵
沫
皱
畅
叠
阁
莱
敲
辖
钩
痕
坝
巷
饿
祸
丘
玄
溜
曰
逻
彭
尝
卿
妨
艇
吞
韦
怨
矮
歇`.split(`
`),wl=`ábaco
abdomen
abeja
abierto
abogado
abono
aborto
abrazo
abrir
abuelo
abuso
acabar
academia
acceso
acción
aceite
acelga
acento
aceptar
ácido
aclarar
acné
acoger
acoso
activo
acto
actriz
actuar
acudir
acuerdo
acusar
adicto
admitir
adoptar
adorno
aduana
adulto
aéreo
afectar
afición
afinar
afirmar
ágil
agitar
agonía
agosto
agotar
agregar
agrio
agua
agudo
águila
aguja
ahogo
ahorro
aire
aislar
ajedrez
ajeno
ajuste
alacrán
alambre
alarma
alba
álbum
alcalde
aldea
alegre
alejar
alerta
aleta
alfiler
alga
algodón
aliado
aliento
alivio
alma
almeja
almíbar
altar
alteza
altivo
alto
altura
alumno
alzar
amable
amante
amapola
amargo
amasar
ámbar
ámbito
ameno
amigo
amistad
amor
amparo
amplio
ancho
anciano
ancla
andar
andén
anemia
ángulo
anillo
ánimo
anís
anotar
antena
antiguo
antojo
anual
anular
anuncio
añadir
añejo
año
apagar
aparato
apetito
apio
aplicar
apodo
aporte
apoyo
aprender
aprobar
apuesta
apuro
arado
araña
arar
árbitro
árbol
arbusto
archivo
arco
arder
ardilla
arduo
área
árido
aries
armonía
arnés
aroma
arpa
arpón
arreglo
arroz
arruga
arte
artista
asa
asado
asalto
ascenso
asegurar
aseo
asesor
asiento
asilo
asistir
asno
asombro
áspero
astilla
astro
astuto
asumir
asunto
atajo
ataque
atar
atento
ateo
ático
atleta
átomo
atraer
atroz
atún
audaz
audio
auge
aula
aumento
ausente
autor
aval
avance
avaro
ave
avellana
avena
avestruz
avión
aviso
ayer
ayuda
ayuno
azafrán
azar
azote
azúcar
azufre
azul
baba
babor
bache
bahía
baile
bajar
balanza
balcón
balde
bambú
banco
banda
baño
barba
barco
barniz
barro
báscula
bastón
basura
batalla
batería
batir
batuta
baúl
bazar
bebé
bebida
bello
besar
beso
bestia
bicho
bien
bingo
blanco
bloque
blusa
boa
bobina
bobo
boca
bocina
boda
bodega
boina
bola
bolero
bolsa
bomba
bondad
bonito
bono
bonsái
borde
borrar
bosque
bote
botín
bóveda
bozal
bravo
brazo
brecha
breve
brillo
brinco
brisa
broca
broma
bronce
brote
bruja
brusco
bruto
buceo
bucle
bueno
buey
bufanda
bufón
búho
buitre
bulto
burbuja
burla
burro
buscar
butaca
buzón
caballo
cabeza
cabina
cabra
cacao
cadáver
cadena
caer
café
caída
caimán
caja
cajón
cal
calamar
calcio
caldo
calidad
calle
calma
calor
calvo
cama
cambio
camello
camino
campo
cáncer
candil
canela
canguro
canica
canto
caña
cañón
caoba
caos
capaz
capitán
capote
captar
capucha
cara
carbón
cárcel
careta
carga
cariño
carne
carpeta
carro
carta
casa
casco
casero
caspa
castor
catorce
catre
caudal
causa
cazo
cebolla
ceder
cedro
celda
célebre
celoso
célula
cemento
ceniza
centro
cerca
cerdo
cereza
cero
cerrar
certeza
césped
cetro
chacal
chaleco
champú
chancla
chapa
charla
chico
chiste
chivo
choque
choza
chuleta
chupar
ciclón
ciego
cielo
cien
cierto
cifra
cigarro
cima
cinco
cine
cinta
ciprés
circo
ciruela
cisne
cita
ciudad
clamor
clan
claro
clase
clave
cliente
clima
clínica
cobre
cocción
cochino
cocina
coco
código
codo
cofre
coger
cohete
cojín
cojo
cola
colcha
colegio
colgar
colina
collar
colmo
columna
combate
comer
comida
cómodo
compra
conde
conejo
conga
conocer
consejo
contar
copa
copia
corazón
corbata
corcho
cordón
corona
correr
coser
cosmos
costa
cráneo
cráter
crear
crecer
creído
crema
cría
crimen
cripta
crisis
cromo
crónica
croqueta
crudo
cruz
cuadro
cuarto
cuatro
cubo
cubrir
cuchara
cuello
cuento
cuerda
cuesta
cueva
cuidar
culebra
culpa
culto
cumbre
cumplir
cuna
cuneta
cuota
cupón
cúpula
curar
curioso
curso
curva
cutis
dama
danza
dar
dardo
dátil
deber
débil
década
decir
dedo
defensa
definir
dejar
delfín
delgado
delito
demora
denso
dental
deporte
derecho
derrota
desayuno
deseo
desfile
desnudo
destino
desvío
detalle
detener
deuda
día
diablo
diadema
diamante
diana
diario
dibujo
dictar
diente
dieta
diez
difícil
digno
dilema
diluir
dinero
directo
dirigir
disco
diseño
disfraz
diva
divino
doble
doce
dolor
domingo
don
donar
dorado
dormir
dorso
dos
dosis
dragón
droga
ducha
duda
duelo
dueño
dulce
dúo
duque
durar
dureza
duro
ébano
ebrio
echar
eco
ecuador
edad
edición
edificio
editor
educar
efecto
eficaz
eje
ejemplo
elefante
elegir
elemento
elevar
elipse
élite
elixir
elogio
eludir
embudo
emitir
emoción
empate
empeño
empleo
empresa
enano
encargo
enchufe
encía
enemigo
enero
enfado
enfermo
engaño
enigma
enlace
enorme
enredo
ensayo
enseñar
entero
entrar
envase
envío
época
equipo
erizo
escala
escena
escolar
escribir
escudo
esencia
esfera
esfuerzo
espada
espejo
espía
esposa
espuma
esquí
estar
este
estilo
estufa
etapa
eterno
ética
etnia
evadir
evaluar
evento
evitar
exacto
examen
exceso
excusa
exento
exigir
exilio
existir
éxito
experto
explicar
exponer
extremo
fábrica
fábula
fachada
fácil
factor
faena
faja
falda
fallo
falso
faltar
fama
familia
famoso
faraón
farmacia
farol
farsa
fase
fatiga
fauna
favor
fax
febrero
fecha
feliz
feo
feria
feroz
fértil
fervor
festín
fiable
fianza
fiar
fibra
ficción
ficha
fideo
fiebre
fiel
fiera
fiesta
figura
fijar
fijo
fila
filete
filial
filtro
fin
finca
fingir
finito
firma
flaco
flauta
flecha
flor
flota
fluir
flujo
flúor
fobia
foca
fogata
fogón
folio
folleto
fondo
forma
forro
fortuna
forzar
fosa
foto
fracaso
frágil
franja
frase
fraude
freír
freno
fresa
frío
frito
fruta
fuego
fuente
fuerza
fuga
fumar
función
funda
furgón
furia
fusil
fútbol
futuro
gacela
gafas
gaita
gajo
gala
galería
gallo
gamba
ganar
gancho
ganga
ganso
garaje
garza
gasolina
gastar
gato
gavilán
gemelo
gemir
gen
género
genio
gente
geranio
gerente
germen
gesto
gigante
gimnasio
girar
giro
glaciar
globo
gloria
gol
golfo
goloso
golpe
goma
gordo
gorila
gorra
gota
goteo
gozar
grada
gráfico
grano
grasa
gratis
grave
grieta
grillo
gripe
gris
grito
grosor
grúa
grueso
grumo
grupo
guante
guapo
guardia
guerra
guía
guiño
guion
guiso
guitarra
gusano
gustar
haber
hábil
hablar
hacer
hacha
hada
hallar
hamaca
harina
haz
hazaña
hebilla
hebra
hecho
helado
helio
hembra
herir
hermano
héroe
hervir
hielo
hierro
hígado
higiene
hijo
himno
historia
hocico
hogar
hoguera
hoja
hombre
hongo
honor
honra
hora
hormiga
horno
hostil
hoyo
hueco
huelga
huerta
hueso
huevo
huida
huir
humano
húmedo
humilde
humo
hundir
huracán
hurto
icono
ideal
idioma
ídolo
iglesia
iglú
igual
ilegal
ilusión
imagen
imán
imitar
impar
imperio
imponer
impulso
incapaz
índice
inerte
infiel
informe
ingenio
inicio
inmenso
inmune
innato
insecto
instante
interés
íntimo
intuir
inútil
invierno
ira
iris
ironía
isla
islote
jabalí
jabón
jamón
jarabe
jardín
jarra
jaula
jazmín
jefe
jeringa
jinete
jornada
joroba
joven
joya
juerga
jueves
juez
jugador
jugo
juguete
juicio
junco
jungla
junio
juntar
júpiter
jurar
justo
juvenil
juzgar
kilo
koala
labio
lacio
lacra
lado
ladrón
lagarto
lágrima
laguna
laico
lamer
lámina
lámpara
lana
lancha
langosta
lanza
lápiz
largo
larva
lástima
lata
látex
latir
laurel
lavar
lazo
leal
lección
leche
lector
leer
legión
legumbre
lejano
lengua
lento
leña
león
leopardo
lesión
letal
letra
leve
leyenda
libertad
libro
licor
líder
lidiar
lienzo
liga
ligero
lima
límite
limón
limpio
lince
lindo
línea
lingote
lino
linterna
líquido
liso
lista
litera
litio
litro
llaga
llama
llanto
llave
llegar
llenar
llevar
llorar
llover
lluvia
lobo
loción
loco
locura
lógica
logro
lombriz
lomo
lonja
lote
lucha
lucir
lugar
lujo
luna
lunes
lupa
lustro
luto
luz
maceta
macho
madera
madre
maduro
maestro
mafia
magia
mago
maíz
maldad
maleta
malla
malo
mamá
mambo
mamut
manco
mando
manejar
manga
maniquí
manjar
mano
manso
manta
mañana
mapa
máquina
mar
marco
marea
marfil
margen
marido
mármol
marrón
martes
marzo
masa
máscara
masivo
matar
materia
matiz
matriz
máximo
mayor
mazorca
mecha
medalla
medio
médula
mejilla
mejor
melena
melón
memoria
menor
mensaje
mente
menú
mercado
merengue
mérito
mes
mesón
meta
meter
método
metro
mezcla
miedo
miel
miembro
miga
mil
milagro
militar
millón
mimo
mina
minero
mínimo
minuto
miope
mirar
misa
miseria
misil
mismo
mitad
mito
mochila
moción
moda
modelo
moho
mojar
molde
moler
molino
momento
momia
monarca
moneda
monja
monto
moño
morada
morder
moreno
morir
morro
morsa
mortal
mosca
mostrar
motivo
mover
móvil
mozo
mucho
mudar
mueble
muela
muerte
muestra
mugre
mujer
mula
muleta
multa
mundo
muñeca
mural
muro
músculo
museo
musgo
música
muslo
nácar
nación
nadar
naipe
naranja
nariz
narrar
nasal
natal
nativo
natural
náusea
naval
nave
navidad
necio
néctar
negar
negocio
negro
neón
nervio
neto
neutro
nevar
nevera
nicho
nido
niebla
nieto
niñez
niño
nítido
nivel
nobleza
noche
nómina
noria
norma
norte
nota
noticia
novato
novela
novio
nube
nuca
núcleo
nudillo
nudo
nuera
nueve
nuez
nulo
número
nutria
oasis
obeso
obispo
objeto
obra
obrero
observar
obtener
obvio
oca
ocaso
océano
ochenta
ocho
ocio
ocre
octavo
octubre
oculto
ocupar
ocurrir
odiar
odio
odisea
oeste
ofensa
oferta
oficio
ofrecer
ogro
oído
oír
ojo
ola
oleada
olfato
olivo
olla
olmo
olor
olvido
ombligo
onda
onza
opaco
opción
ópera
opinar
oponer
optar
óptica
opuesto
oración
orador
oral
órbita
orca
orden
oreja
órgano
orgía
orgullo
oriente
origen
orilla
oro
orquesta
oruga
osadía
oscuro
osezno
oso
ostra
otoño
otro
oveja
óvulo
óxido
oxígeno
oyente
ozono
pacto
padre
paella
página
pago
país
pájaro
palabra
palco
paleta
pálido
palma
paloma
palpar
pan
panal
pánico
pantera
pañuelo
papá
papel
papilla
paquete
parar
parcela
pared
parir
paro
párpado
parque
párrafo
parte
pasar
paseo
pasión
paso
pasta
pata
patio
patria
pausa
pauta
pavo
payaso
peatón
pecado
pecera
pecho
pedal
pedir
pegar
peine
pelar
peldaño
pelea
peligro
pellejo
pelo
peluca
pena
pensar
peñón
peón
peor
pepino
pequeño
pera
percha
perder
pereza
perfil
perico
perla
permiso
perro
persona
pesa
pesca
pésimo
pestaña
pétalo
petróleo
pez
pezuña
picar
pichón
pie
piedra
pierna
pieza
pijama
pilar
piloto
pimienta
pino
pintor
pinza
piña
piojo
pipa
pirata
pisar
piscina
piso
pista
pitón
pizca
placa
plan
plata
playa
plaza
pleito
pleno
plomo
pluma
plural
pobre
poco
poder
podio
poema
poesía
poeta
polen
policía
pollo
polvo
pomada
pomelo
pomo
pompa
poner
porción
portal
posada
poseer
posible
poste
potencia
potro
pozo
prado
precoz
pregunta
premio
prensa
preso
previo
primo
príncipe
prisión
privar
proa
probar
proceso
producto
proeza
profesor
programa
prole
promesa
pronto
propio
próximo
prueba
público
puchero
pudor
pueblo
puerta
puesto
pulga
pulir
pulmón
pulpo
pulso
puma
punto
puñal
puño
pupa
pupila
puré
quedar
queja
quemar
querer
queso
quieto
química
quince
quitar
rábano
rabia
rabo
ración
radical
raíz
rama
rampa
rancho
rango
rapaz
rápido
rapto
rasgo
raspa
rato
rayo
raza
razón
reacción
realidad
rebaño
rebote
recaer
receta
rechazo
recoger
recreo
recto
recurso
red
redondo
reducir
reflejo
reforma
refrán
refugio
regalo
regir
regla
regreso
rehén
reino
reír
reja
relato
relevo
relieve
relleno
reloj
remar
remedio
remo
rencor
rendir
renta
reparto
repetir
reposo
reptil
res
rescate
resina
respeto
resto
resumen
retiro
retorno
retrato
reunir
revés
revista
rey
rezar
rico
riego
rienda
riesgo
rifa
rígido
rigor
rincón
riñón
río
riqueza
risa
ritmo
rito
rizo
roble
roce
rociar
rodar
rodeo
rodilla
roer
rojizo
rojo
romero
romper
ron
ronco
ronda
ropa
ropero
rosa
rosca
rostro
rotar
rubí
rubor
rudo
rueda
rugir
ruido
ruina
ruleta
rulo
rumbo
rumor
ruptura
ruta
rutina
sábado
saber
sabio
sable
sacar
sagaz
sagrado
sala
saldo
salero
salir
salmón
salón
salsa
salto
salud
salvar
samba
sanción
sandía
sanear
sangre
sanidad
sano
santo
sapo
saque
sardina
sartén
sastre
satán
sauna
saxofón
sección
seco
secreto
secta
sed
seguir
seis
sello
selva
semana
semilla
senda
sensor
señal
señor
separar
sepia
sequía
ser
serie
sermón
servir
sesenta
sesión
seta
setenta
severo
sexo
sexto
sidra
siesta
siete
siglo
signo
sílaba
silbar
silencio
silla
símbolo
simio
sirena
sistema
sitio
situar
sobre
socio
sodio
sol
solapa
soldado
soledad
sólido
soltar
solución
sombra
sondeo
sonido
sonoro
sonrisa
sopa
soplar
soporte
sordo
sorpresa
sorteo
sostén
sótano
suave
subir
suceso
sudor
suegra
suelo
sueño
suerte
sufrir
sujeto
sultán
sumar
superar
suplir
suponer
supremo
sur
surco
sureño
surgir
susto
sutil
tabaco
tabique
tabla
tabú
taco
tacto
tajo
talar
talco
talento
talla
talón
tamaño
tambor
tango
tanque
tapa
tapete
tapia
tapón
taquilla
tarde
tarea
tarifa
tarjeta
tarot
tarro
tarta
tatuaje
tauro
taza
tazón
teatro
techo
tecla
técnica
tejado
tejer
tejido
tela
teléfono
tema
temor
templo
tenaz
tender
tener
tenis
tenso
teoría
terapia
terco
término
ternura
terror
tesis
tesoro
testigo
tetera
texto
tez
tibio
tiburón
tiempo
tienda
tierra
tieso
tigre
tijera
tilde
timbre
tímido
timo
tinta
tío
típico
tipo
tira
tirón
titán
títere
título
tiza
toalla
tobillo
tocar
tocino
todo
toga
toldo
tomar
tono
tonto
topar
tope
toque
tórax
torero
tormenta
torneo
toro
torpedo
torre
torso
tortuga
tos
tosco
toser
tóxico
trabajo
tractor
traer
tráfico
trago
traje
tramo
trance
trato
trauma
trazar
trébol
tregua
treinta
tren
trepar
tres
tribu
trigo
tripa
triste
triunfo
trofeo
trompa
tronco
tropa
trote
trozo
truco
trueno
trufa
tubería
tubo
tuerto
tumba
tumor
túnel
túnica
turbina
turismo
turno
tutor
ubicar
úlcera
umbral
unidad
unir
universo
uno
untar
uña
urbano
urbe
urgente
urna
usar
usuario
útil
utopía
uva
vaca
vacío
vacuna
vagar
vago
vaina
vajilla
vale
válido
valle
valor
válvula
vampiro
vara
variar
varón
vaso
vecino
vector
vehículo
veinte
vejez
vela
velero
veloz
vena
vencer
venda
veneno
vengar
venir
venta
venus
ver
verano
verbo
verde
vereda
verja
verso
verter
vía
viaje
vibrar
vicio
víctima
vida
vídeo
vidrio
viejo
viernes
vigor
vil
villa
vinagre
vino
viñedo
violín
viral
virgo
virtud
visor
víspera
vista
vitamina
viudo
vivaz
vivero
vivir
vivo
volcán
volumen
volver
voraz
votar
voto
voz
vuelo
vulgar
yacer
yate
yegua
yema
yerno
yeso
yodo
yoga
yogur
zafiro
zanja
zapato
zarza
zona
zorro
zumo
zurdo`.split(`
`),kl=`的
一
是
在
不
了
有
和
人
這
中
大
為
上
個
國
我
以
要
他
時
來
用
們
生
到
作
地
於
出
就
分
對
成
會
可
主
發
年
動
同
工
也
能
下
過
子
說
產
種
面
而
方
後
多
定
行
學
法
所
民
得
經
十
三
之
進
著
等
部
度
家
電
力
裡
如
水
化
高
自
二
理
起
小
物
現
實
加
量
都
兩
體
制
機
當
使
點
從
業
本
去
把
性
好
應
開
它
合
還
因
由
其
些
然
前
外
天
政
四
日
那
社
義
事
平
形
相
全
表
間
樣
與
關
各
重
新
線
內
數
正
心
反
你
明
看
原
又
麼
利
比
或
但
質
氣
第
向
道
命
此
變
條
只
沒
結
解
問
意
建
月
公
無
系
軍
很
情
者
最
立
代
想
已
通
並
提
直
題
黨
程
展
五
果
料
象
員
革
位
入
常
文
總
次
品
式
活
設
及
管
特
件
長
求
老
頭
基
資
邊
流
路
級
少
圖
山
統
接
知
較
將
組
見
計
別
她
手
角
期
根
論
運
農
指
幾
九
區
強
放
決
西
被
幹
做
必
戰
先
回
則
任
取
據
處
隊
南
給
色
光
門
即
保
治
北
造
百
規
熱
領
七
海
口
東
導
器
壓
志
世
金
增
爭
濟
階
油
思
術
極
交
受
聯
什
認
六
共
權
收
證
改
清
美
再
採
轉
更
單
風
切
打
白
教
速
花
帶
安
場
身
車
例
真
務
具
萬
每
目
至
達
走
積
示
議
聲
報
鬥
完
類
八
離
華
名
確
才
科
張
信
馬
節
話
米
整
空
元
況
今
集
溫
傳
土
許
步
群
廣
石
記
需
段
研
界
拉
林
律
叫
且
究
觀
越
織
裝
影
算
低
持
音
眾
書
布
复
容
兒
須
際
商
非
驗
連
斷
深
難
近
礦
千
週
委
素
技
備
半
辦
青
省
列
習
響
約
支
般
史
感
勞
便
團
往
酸
歷
市
克
何
除
消
構
府
稱
太
準
精
值
號
率
族
維
劃
選
標
寫
存
候
毛
親
快
效
斯
院
查
江
型
眼
王
按
格
養
易
置
派
層
片
始
卻
專
狀
育
廠
京
識
適
屬
圓
包
火
住
調
滿
縣
局
照
參
紅
細
引
聽
該
鐵
價
嚴
首
底
液
官
德
隨
病
蘇
失
爾
死
講
配
女
黃
推
顯
談
罪
神
藝
呢
席
含
企
望
密
批
營
項
防
舉
球
英
氧
勢
告
李
台
落
木
幫
輪
破
亞
師
圍
注
遠
字
材
排
供
河
態
封
另
施
減
樹
溶
怎
止
案
言
士
均
武
固
葉
魚
波
視
僅
費
緊
愛
左
章
早
朝
害
續
輕
服
試
食
充
兵
源
判
護
司
足
某
練
差
致
板
田
降
黑
犯
負
擊
范
繼
興
似
餘
堅
曲
輸
修
故
城
夫
夠
送
筆
船
佔
右
財
吃
富
春
職
覺
漢
畫
功
巴
跟
雖
雜
飛
檢
吸
助
昇
陽
互
初
創
抗
考
投
壞
策
古
徑
換
未
跑
留
鋼
曾
端
責
站
簡
述
錢
副
盡
帝
射
草
衝
承
獨
令
限
阿
宣
環
雙
請
超
微
讓
控
州
良
軸
找
否
紀
益
依
優
頂
礎
載
倒
房
突
坐
粉
敵
略
客
袁
冷
勝
絕
析
塊
劑
測
絲
協
訴
念
陳
仍
羅
鹽
友
洋
錯
苦
夜
刑
移
頻
逐
靠
混
母
短
皮
終
聚
汽
村
雲
哪
既
距
衛
停
烈
央
察
燒
迅
境
若
印
洲
刻
括
激
孔
搞
甚
室
待
核
校
散
侵
吧
甲
遊
久
菜
味
舊
模
湖
貨
損
預
阻
毫
普
穩
乙
媽
植
息
擴
銀
語
揮
酒
守
拿
序
紙
醫
缺
雨
嗎
針
劉
啊
急
唱
誤
訓
願
審
附
獲
茶
鮮
糧
斤
孩
脫
硫
肥
善
龍
演
父
漸
血
歡
械
掌
歌
沙
剛
攻
謂
盾
討
晚
粒
亂
燃
矛
乎
殺
藥
寧
魯
貴
鐘
煤
讀
班
伯
香
介
迫
句
豐
培
握
蘭
擔
弦
蛋
沉
假
穿
執
答
樂
誰
順
煙
縮
徵
臉
喜
松
腳
困
異
免
背
星
福
買
染
井
概
慢
怕
磁
倍
祖
皇
促
靜
補
評
翻
肉
踐
尼
衣
寬
揚
棉
希
傷
操
垂
秋
宜
氫
套
督
振
架
亮
末
憲
慶
編
牛
觸
映
雷
銷
詩
座
居
抓
裂
胞
呼
娘
景
威
綠
晶
厚
盟
衡
雞
孫
延
危
膠
屋
鄉
臨
陸
顧
掉
呀
燈
歲
措
束
耐
劇
玉
趙
跳
哥
季
課
凱
胡
額
款
紹
卷
齊
偉
蒸
殖
永
宗
苗
川
爐
岩
弱
零
楊
奏
沿
露
桿
探
滑
鎮
飯
濃
航
懷
趕
庫
奪
伊
靈
稅
途
滅
賽
歸
召
鼓
播
盤
裁
險
康
唯
錄
菌
純
借
糖
蓋
橫
符
私
努
堂
域
槍
潤
幅
哈
竟
熟
蟲
澤
腦
壤
碳
歐
遍
側
寨
敢
徹
慮
斜
薄
庭
納
彈
飼
伸
折
麥
濕
暗
荷
瓦
塞
床
築
惡
戶
訪
塔
奇
透
梁
刀
旋
跡
卡
氯
遇
份
毒
泥
退
洗
擺
灰
彩
賣
耗
夏
擇
忙
銅
獻
硬
予
繁
圈
雪
函
亦
抽
篇
陣
陰
丁
尺
追
堆
雄
迎
泛
爸
樓
避
謀
噸
野
豬
旗
累
偏
典
館
索
秦
脂
潮
爺
豆
忽
托
驚
塑
遺
愈
朱
替
纖
粗
傾
尚
痛
楚
謝
奮
購
磨
君
池
旁
碎
骨
監
捕
弟
暴
割
貫
殊
釋
詞
亡
壁
頓
寶
午
塵
聞
揭
炮
殘
冬
橋
婦
警
綜
招
吳
付
浮
遭
徐
您
搖
谷
贊
箱
隔
訂
男
吹
園
紛
唐
敗
宋
玻
巨
耕
坦
榮
閉
灣
鍵
凡
駐
鍋
救
恩
剝
凝
鹼
齒
截
煉
麻
紡
禁
廢
盛
版
緩
淨
睛
昌
婚
涉
筒
嘴
插
岸
朗
莊
街
藏
姑
貿
腐
奴
啦
慣
乘
夥
恢
勻
紗
扎
辯
耳
彪
臣
億
璃
抵
脈
秀
薩
俄
網
舞
店
噴
縱
寸
汗
掛
洪
賀
閃
柬
爆
烯
津
稻
牆
軟
勇
像
滾
厘
蒙
芳
肯
坡
柱
盪
腿
儀
旅
尾
軋
冰
貢
登
黎
削
鑽
勒
逃
障
氨
郭
峰
幣
港
伏
軌
畝
畢
擦
莫
刺
浪
秘
援
株
健
售
股
島
甘
泡
睡
童
鑄
湯
閥
休
匯
舍
牧
繞
炸
哲
磷
績
朋
淡
尖
啟
陷
柴
呈
徒
顏
淚
稍
忘
泵
藍
拖
洞
授
鏡
辛
壯
鋒
貧
虛
彎
摩
泰
幼
廷
尊
窗
綱
弄
隸
疑
氏
宮
姐
震
瑞
怪
尤
琴
循
描
膜
違
夾
腰
緣
珠
窮
森
枝
竹
溝
催
繩
憶
邦
剩
幸
漿
欄
擁
牙
貯
禮
濾
鈉
紋
罷
拍
咱
喊
袖
埃
勤
罰
焦
潛
伍
墨
欲
縫
姓
刊
飽
仿
獎
鋁
鬼
麗
跨
默
挖
鏈
掃
喝
袋
炭
污
幕
諸
弧
勵
梅
奶
潔
災
舟
鑑
苯
訟
抱
毀
懂
寒
智
埔
寄
屆
躍
渡
挑
丹
艱
貝
碰
拔
爹
戴
碼
夢
芽
熔
赤
漁
哭
敬
顆
奔
鉛
仲
虎
稀
妹
乏
珍
申
桌
遵
允
隆
螺
倉
魏
銳
曉
氮
兼
隱
礙
赫
撥
忠
肅
缸
牽
搶
博
巧
殼
兄
杜
訊
誠
碧
祥
柯
頁
巡
矩
悲
灌
齡
倫
票
尋
桂
鋪
聖
恐
恰
鄭
趣
抬
荒
騰
貼
柔
滴
猛
闊
輛
妻
填
撤
儲
簽
鬧
擾
紫
砂
遞
戲
吊
陶
伐
餵
療
瓶
婆
撫
臂
摸
忍
蝦
蠟
鄰
胸
鞏
擠
偶
棄
槽
勁
乳
鄧
吉
仁
爛
磚
租
烏
艦
伴
瓜
淺
丙
暫
燥
橡
柳
迷
暖
牌
秧
膽
詳
簧
踏
瓷
譜
呆
賓
糊
洛
輝
憤
競
隙
怒
粘
乃
緒
肩
籍
敏
塗
熙
皆
偵
懸
掘
享
糾
醒
狂
鎖
淀
恨
牲
霸
爬
賞
逆
玩
陵
祝
秒
浙
貌
役
彼
悉
鴨
趨
鳳
晨
畜
輩
秩
卵
署
梯
炎
灘
棋
驅
篩
峽
冒
啥
壽
譯
浸
泉
帽
遲
矽
疆
貸
漏
稿
冠
嫩
脅
芯
牢
叛
蝕
奧
鳴
嶺
羊
憑
串
塘
繪
酵
融
盆
錫
廟
籌
凍
輔
攝
襲
筋
拒
僚
旱
鉀
鳥
漆
沈
眉
疏
添
棒
穗
硝
韓
逼
扭
僑
涼
挺
碗
栽
炒
杯
患
餾
勸
豪
遼
勃
鴻
旦
吏
拜
狗
埋
輥
掩
飲
搬
罵
辭
勾
扣
估
蔣
絨
霧
丈
朵
姆
擬
宇
輯
陝
雕
償
蓄
崇
剪
倡
廳
咬
駛
薯
刷
斥
番
賦
奉
佛
澆
漫
曼
扇
鈣
桃
扶
仔
返
俗
虧
腔
鞋
棱
覆
框
悄
叔
撞
騙
勘
旺
沸
孤
吐
孟
渠
屈
疾
妙
惜
仰
狠
脹
諧
拋
黴
桑
崗
嘛
衰
盜
滲
臟
賴
湧
甜
曹
閱
肌
哩
厲
烴
緯
毅
昨
偽
症
煮
嘆
釘
搭
莖
籠
酷
偷
弓
錐
恆
傑
坑
鼻
翼
綸
敘
獄
逮
罐
絡
棚
抑
膨
蔬
寺
驟
穆
冶
枯
冊
屍
凸
紳
坯
犧
焰
轟
欣
晉
瘦
禦
錠
錦
喪
旬
鍛
壟
搜
撲
邀
亭
酯
邁
舒
脆
酶
閒
憂
酚
頑
羽
漲
卸
仗
陪
闢
懲
杭
姚
肚
捉
飄
漂
昆
欺
吾
郎
烷
汁
呵
飾
蕭
雅
郵
遷
燕
撒
姻
赴
宴
煩
債
帳
斑
鈴
旨
醇
董
餅
雛
姿
拌
傅
腹
妥
揉
賢
拆
歪
葡
胺
丟
浩
徽
昂
墊
擋
覽
貪
慰
繳
汪
慌
馮
諾
姜
誼
兇
劣
誣
耀
昏
躺
盈
騎
喬
溪
叢
盧
抹
悶
諮
刮
駕
纜
悟
摘
鉺
擲
頗
幻
柄
惠
慘
佳
仇
臘
窩
滌
劍
瞧
堡
潑
蔥
罩
霍
撈
胎
蒼
濱
倆
捅
湘
砍
霞
邵
萄
瘋
淮
遂
熊
糞
烘
宿
檔
戈
駁
嫂
裕
徙
箭
捐
腸
撐
曬
辨
殿
蓮
攤
攪
醬
屏
疫
哀
蔡
堵
沫
皺
暢
疊
閣
萊
敲
轄
鉤
痕
壩
巷
餓
禍
丘
玄
溜
曰
邏
彭
嘗
卿
妨
艇
吞
韋
怨
矮
歇`.split(`
`),El={cz:fl,en:pl,es:wl,fr:ml,it:gl,ja:bl,ko:vl,zh_cn:yl,zh_tw:kl};function zl(e){if(e.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),r=0;r<t.length;r++)t[r]=255;for(var o=0;o<e.length;o++){var a=e.charAt(o),n=a.charCodeAt(0);if(t[n]!==255)throw new TypeError(a+" is ambiguous");t[n]=o}var i=e.length,s=e.charAt(0),l=Math.log(i)/Math.log(256),c=Math.log(256)/Math.log(i);function d(p){if(p instanceof Uint8Array||(ArrayBuffer.isView(p)?p=new Uint8Array(p.buffer,p.byteOffset,p.byteLength):Array.isArray(p)&&(p=Uint8Array.from(p))),!(p instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(p.length===0)return"";for(var g=0,h=0,b=0,v=p.length;b!==v&&p[b]===0;)b++,g++;for(var S=(v-b)*c+1>>>0,k=new Uint8Array(S);b!==v;){for(var A=p[b],y=0,E=S-1;(A!==0||y<h)&&E!==-1;E--,y++)A+=256*k[E]>>>0,k[E]=A%i>>>0,A=A/i>>>0;if(A!==0)throw new Error("Non-zero carry");h=y,b++}for(var B=S-h;B!==S&&k[B]===0;)B++;for(var T=s.repeat(g);B<S;++B)T+=e.charAt(k[B]);return T}function u(p){if(typeof p!="string")throw new TypeError("Expected String");if(p.length===0)return new Uint8Array;for(var g=0,h=0,b=0;p[g]===s;)h++,g++;for(var v=(p.length-g)*l+1>>>0,S=new Uint8Array(v);p[g];){var k=t[p.charCodeAt(g)];if(k===255)return;for(var A=0,y=v-1;(k!==0||A<b)&&y!==-1;y--,A++)k+=i*S[y]>>>0,S[y]=k%256>>>0,k=k/256>>>0;if(k!==0)throw new Error("Non-zero carry");b=A,g++}for(var E=v-b;E!==v&&S[E]===0;)E++;for(var B=new Uint8Array(h+(v-E)),T=h;E!==v;)B[T++]=S[E++];return B}function f(p){var g=u(p);if(g)return g;throw new Error("Non-base"+i+" character")}return{encode:d,decodeUnsafe:u,decode:f}}var xl=zl;const Sl=xl,Al="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";var Bl=Sl(Al);const Qa=pn(Bl),vr=e=>Qa.encode(e),wo=e=>Qa.decode(e);function et(e){return Uint8Array.from(atob(e),t=>t.charCodeAt(0))}const Ur=8192;function Ae(e){if(e.length<Ur)return btoa(String.fromCharCode(...e));let t="";for(var r=0;r<e.length;r+=Ur){const o=e.slice(r,r+Ur);t+=String.fromCharCode(...o)}return btoa(t)}function $t(e){var a;const t=e.startsWith("0x")?e.slice(2):e,o=((a=(t.length%2===0?t:`0${t}}`).match(/.{2}/g))==null?void 0:a.map(n=>parseInt(n,16)))??[];return Uint8Array.from(o)}function mt(e){return e.reduce((t,r)=>t+r.toString(16).padStart(2,"0"),"")}function ko(e){let t=[],r=0;if(e===0)return[0];for(;e>0;)t[r]=e&127,(e>>=7)&&(t[r]|=128),r+=1;return t}function Tl(e){let t=0,r=0,o=0;for(;;){let a=e[o];if(o+=1,t|=(a&127)<<r,!(a&128))break;r+=7}return{value:t,length:o}}class Xa{constructor(t){this.bytePosition=0,this.dataView=new DataView(t.buffer)}shift(t){return this.bytePosition+=t,this}read8(){let t=this.dataView.getUint8(this.bytePosition);return this.shift(1),t}read16(){let t=this.dataView.getUint16(this.bytePosition,!0);return this.shift(2),t}read32(){let t=this.dataView.getUint32(this.bytePosition,!0);return this.shift(4),t}read64(){let t=this.read32(),o=this.read32().toString(16)+t.toString(16).padStart(8,"0");return BigInt("0x"+o).toString(10)}read128(){let t=BigInt(this.read64()),o=BigInt(this.read64()).toString(16)+t.toString(16).padStart(16,"0");return BigInt("0x"+o).toString(10)}read256(){let t=BigInt(this.read128()),o=BigInt(this.read128()).toString(16)+t.toString(16).padStart(32,"0");return BigInt("0x"+o).toString(10)}readBytes(t){let r=this.bytePosition+this.dataView.byteOffset,o=new Uint8Array(this.dataView.buffer,r,t);return this.shift(t),o}readULEB(){let t=this.bytePosition+this.dataView.byteOffset,r=new Uint8Array(this.dataView.buffer,t),{value:o,length:a}=Tl(r);return this.shift(a),o}readVec(t){let r=this.readULEB(),o=[];for(let a=0;a<r;a++)o.push(t(this,a,r));return o}}function jl(e,t){switch(t){case"base58":return vr(e);case"base64":return Ae(e);case"hex":return mt(e);default:throw new Error("Unsupported encoding, supported values are: base64, hex")}}function Il(e,t){switch(t){case"base58":return wo(e);case"base64":return et(e);case"hex":return $t(e);default:throw new Error("Unsupported encoding, supported values are: base64, hex")}}function Ja(e,t=["<",">"]){const[r,o]=t,a=[];let n="",i=0;for(let s=0;s<e.length;s++){const l=e[s];if(l===r&&i++,l===o&&i--,i===0&&l===","){a.push(n.trim()),n="";continue}n+=l}return a.push(n.trim()),a}class en{constructor({size:t=1024,maxSize:r,allocateSize:o=1024}={}){this.bytePosition=0,this.size=t,this.maxSize=r||t,this.allocateSize=o,this.dataView=new DataView(new ArrayBuffer(t))}ensureSizeOrGrow(t){const r=this.bytePosition+t;if(r>this.size){const o=Math.min(this.maxSize,this.size+this.allocateSize);if(r>o)throw new Error(`Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${r}`);this.size=o;const a=new ArrayBuffer(this.size);new Uint8Array(a).set(new Uint8Array(this.dataView.buffer)),this.dataView=new DataView(a)}}shift(t){return this.bytePosition+=t,this}write8(t){return this.ensureSizeOrGrow(1),this.dataView.setUint8(this.bytePosition,Number(t)),this.shift(1)}write16(t){return this.ensureSizeOrGrow(2),this.dataView.setUint16(this.bytePosition,Number(t),!0),this.shift(2)}write32(t){return this.ensureSizeOrGrow(4),this.dataView.setUint32(this.bytePosition,Number(t),!0),this.shift(4)}write64(t){return _r(BigInt(t),8).forEach(r=>this.write8(r)),this}write128(t){return _r(BigInt(t),16).forEach(r=>this.write8(r)),this}write256(t){return _r(BigInt(t),32).forEach(r=>this.write8(r)),this}writeULEB(t){return ko(t).forEach(r=>this.write8(r)),this}writeVec(t,r){return this.writeULEB(t.length),Array.from(t).forEach((o,a)=>r(this,o,a,t.length)),this}*[Symbol.iterator](){for(let t=0;t<this.bytePosition;t++)yield this.dataView.getUint8(t);return this.toBytes()}toBytes(){return new Uint8Array(this.dataView.buffer.slice(0,this.bytePosition))}toString(t){return jl(this.toBytes(),t)}}function _r(e,t){let r=new Uint8Array(t),o=0;for(;e>0;)r[o]=Number(e%BigInt(256)),e=e/BigInt(256),o+=1;return r}var tn=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},ue=(e,t,r)=>(tn(e,t,"read from private field"),t.get(e)),ar=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},nr=(e,t,r,o)=>(tn(e,t,"write to private field"),t.set(e,r),r),it,Et,Gt,He;const rn=class{constructor(e){ar(this,it,void 0),ar(this,Et,void 0),this.name=e.name,this.read=e.read,this.serializedSize=e.serializedSize??(()=>null),nr(this,it,e.write),nr(this,Et,e.serialize??((t,r)=>{const o=new en({size:this.serializedSize(t)??void 0,...r});return ue(this,it).call(this,t,o),o.toBytes()})),this.validate=e.validate??(()=>{})}write(e,t){this.validate(e),ue(this,it).call(this,e,t)}serialize(e,t){return this.validate(e),new _l(this,ue(this,Et).call(this,e,t))}parse(e){const t=new Xa(e);return this.read(t)}transform({name:e,input:t,output:r}){return new rn({name:e??this.name,read:o=>r(this.read(o)),write:(o,a)=>ue(this,it).call(this,t(o),a),serializedSize:o=>this.serializedSize(t(o)),serialize:(o,a)=>ue(this,Et).call(this,t(o),a),validate:o=>this.validate(t(o))})}};let he=rn;it=new WeakMap;Et=new WeakMap;const Ul=Symbol.for("@mysten/serialized-bcs");class _l{constructor(t,r){ar(this,Gt,void 0),ar(this,He,void 0),nr(this,Gt,t),nr(this,He,r)}get[Ul](){return!0}toBytes(){return ue(this,He)}toHex(){return mt(ue(this,He))}toBase64(){return Ae(ue(this,He))}toBase58(){return vr(ue(this,He))}parse(){return ue(this,Gt).parse(ue(this,He))}}Gt=new WeakMap;He=new WeakMap;function ir({size:e,...t}){return new he({...t,serializedSize:()=>e})}function Cr({readMethod:e,writeMethod:t,...r}){return ir({...r,read:o=>o[e](),write:(o,a)=>a[t](o),validate:o=>{var a;if(o<0||o>r.maxValue)throw new TypeError(`Invalid ${r.name} value: ${o}. Expected value in range 0-${r.maxValue}`);(a=r.validate)==null||a.call(r,o)}})}function $r({readMethod:e,writeMethod:t,...r}){return ir({...r,read:o=>o[e](),write:(o,a)=>a[t](BigInt(o)),validate:o=>{var n;const a=BigInt(o);if(a<0||a>r.maxValue)throw new TypeError(`Invalid ${r.name} value: ${a}. Expected value in range 0-${r.maxValue}`);(n=r.validate)==null||n.call(r,a)}})}function Cl({serialize:e,...t}){const r=new he({...t,serialize:e,write:(o,a)=>{for(const n of r.serialize(o).toBytes())a.write8(n)}});return r}function $l({toBytes:e,fromBytes:t,...r}){return new he({...r,read:o=>{const a=o.readULEB(),n=o.readBytes(a);return t(n)},write:(o,a)=>{const n=e(o);a.writeULEB(n.length);for(let i=0;i<n.length;i++)a.write8(n[i])},serialize:o=>{const a=e(o),n=ko(a.length),i=new Uint8Array(n.length+a.length);return i.set(n,0),i.set(a,n.length),i},validate:o=>{var a;if(typeof o!="string")throw new TypeError(`Invalid ${r.name} value: ${o}. Expected string`);(a=r.validate)==null||a.call(r,o)}})}function Nl(e){let t=null;function r(){return t||(t=e()),t}return new he({name:"lazy",read:o=>r().read(o),serializedSize:o=>r().serializedSize(o),write:(o,a)=>r().write(o,a),serialize:(o,a)=>r().serialize(o,a).toBytes()})}const m={u8(e){return Cr({name:"u8",readMethod:"read8",writeMethod:"write8",size:1,maxValue:2**8-1,...e})},u16(e){return Cr({name:"u16",readMethod:"read16",writeMethod:"write16",size:2,maxValue:2**16-1,...e})},u32(e){return Cr({name:"u32",readMethod:"read32",writeMethod:"write32",size:4,maxValue:2**32-1,...e})},u64(e){return $r({name:"u64",readMethod:"read64",writeMethod:"write64",size:8,maxValue:2n**64n-1n,...e})},u128(e){return $r({name:"u128",readMethod:"read128",writeMethod:"write128",size:16,maxValue:2n**128n-1n,...e})},u256(e){return $r({name:"u256",readMethod:"read256",writeMethod:"write256",size:32,maxValue:2n**256n-1n,...e})},bool(e){return ir({name:"bool",size:1,read:t=>t.read8()===1,write:(t,r)=>r.write8(t?1:0),...e,validate:t=>{var r;if((r=e==null?void 0:e.validate)==null||r.call(e,t),typeof t!="boolean")throw new TypeError(`Expected boolean, found ${typeof t}`)}})},uleb128(e){return Cl({name:"uleb128",read:t=>t.readULEB(),serialize:t=>Uint8Array.from(ko(t)),...e})},bytes(e,t){return ir({name:`bytes[${e}]`,size:e,read:r=>r.readBytes(e),write:(r,o)=>{for(let a=0;a<e;a++)o.write8(r[a]??0)},...t,validate:r=>{var o;if((o=t==null?void 0:t.validate)==null||o.call(t,r),!("length"in r))throw new TypeError(`Expected array, found ${typeof r}`);if(r.length!==e)throw new TypeError(`Expected array of length ${e}, found ${r.length}`)}})},string(e){return $l({name:"string",toBytes:t=>new TextEncoder().encode(t),fromBytes:t=>new TextDecoder().decode(t),...e})},fixedArray(e,t,r){return new he({name:`${t.name}[${e}]`,read:o=>{const a=new Array(e);for(let n=0;n<e;n++)a[n]=t.read(o);return a},write:(o,a)=>{for(const n of o)t.write(n,a)},...r,validate:o=>{var a;if((a=r==null?void 0:r.validate)==null||a.call(r,o),!("length"in o))throw new TypeError(`Expected array, found ${typeof o}`);if(o.length!==e)throw new TypeError(`Expected array of length ${e}, found ${o.length}`)}})},option(e){return m.enum(`Option<${e.name}>`,{None:null,Some:e}).transform({input:t=>t==null?{None:!0}:{Some:t},output:t=>"Some"in t?t.Some:null})},vector(e,t){return new he({name:`vector<${e.name}>`,read:r=>{const o=r.readULEB(),a=new Array(o);for(let n=0;n<o;n++)a[n]=e.read(r);return a},write:(r,o)=>{o.writeULEB(r.length);for(const a of r)e.write(a,o)},...t,validate:r=>{var o;if((o=t==null?void 0:t.validate)==null||o.call(t,r),!("length"in r))throw new TypeError(`Expected array, found ${typeof r}`)}})},tuple(e,t){return new he({name:`(${e.map(r=>r.name).join(", ")})`,serializedSize:r=>{let o=0;for(let a=0;a<e.length;a++){const n=e[a].serializedSize(r[a]);if(n==null)return null;o+=n}return o},read:r=>{const o=[];for(const a of e)o.push(a.read(r));return o},write:(r,o)=>{for(let a=0;a<e.length;a++)e[a].write(r[a],o)},...t,validate:r=>{var o;if((o=t==null?void 0:t.validate)==null||o.call(t,r),!Array.isArray(r))throw new TypeError(`Expected array, found ${typeof r}`);if(r.length!==e.length)throw new TypeError(`Expected array of length ${e.length}, found ${r.length}`)}})},struct(e,t,r){const o=Object.entries(t);return new he({name:e,serializedSize:a=>{let n=0;for(const[i,s]of o){const l=s.serializedSize(a[i]);if(l==null)return null;n+=l}return n},read:a=>{const n={};for(const[i,s]of o)n[i]=s.read(a);return n},write:(a,n)=>{for(const[i,s]of o)s.write(a[i],n)},...r,validate:a=>{var n;if((n=r==null?void 0:r.validate)==null||n.call(r,a),typeof a!="object"||a==null)throw new TypeError(`Expected object, found ${typeof a}`)}})},enum(e,t,r){const o=Object.entries(t);return new he({name:e,read:a=>{const n=a.readULEB(),[i,s]=o[n];return{[i]:(s==null?void 0:s.read(a))??!0}},write:(a,n)=>{const[i,s]=Object.entries(a)[0];for(let l=0;l<o.length;l++){const[c,d]=o[l];if(c===i){n.writeULEB(l),d==null||d.write(s,n);return}}},...r,validate:a=>{var s;if((s=r==null?void 0:r.validate)==null||s.call(r,a),typeof a!="object"||a==null)throw new TypeError(`Expected object, found ${typeof a}`);const n=Object.keys(a);if(n.length!==1)throw new TypeError(`Expected object with one key, found ${n.length}`);const[i]=n;if(!Object.hasOwn(t,i))throw new TypeError(`Invalid enum variant ${i}`)}})},map(e,t){return m.vector(m.tuple([e,t])).transform({name:`Map<${e.name}, ${t.name}>`,input:r=>[...r.entries()],output:r=>{const o=new Map;for(const[a,n]of r)o.set(a,n);return o}})},generic(e,t){return(...r)=>t(...r).transform({name:`${t.name}<${r.map(o=>o.name).join(", ")}>`,input:o=>o,output:o=>o})},lazy(e){return Nl(e)}},Rl=32,zt=class{constructor(e){if(this.types=new Map,this.counter=0,e instanceof zt){this.schema=e.schema,this.types=new Map(e.types);return}if(this.schema=e,this.registerAddressType(zt.ADDRESS,e.addressLength,e.addressEncoding),this.registerVectorType(e.vectorType),e.types&&e.types.structs)for(let t of Object.keys(e.types.structs))this.registerStructType(t,e.types.structs[t]);if(e.types&&e.types.enums)for(let t of Object.keys(e.types.enums))this.registerEnumType(t,e.types.enums[t]);if(e.types&&e.types.aliases)for(let t of Object.keys(e.types.aliases))this.registerAlias(t,e.types.aliases[t]);e.withPrimitives!==!1&&Ll(this)}tempKey(){return`bcs-struct-${++this.counter}`}ser(e,t,r){if(typeof e=="string"||Array.isArray(e)){const{name:o,params:a}=this.parseTypeName(e);return this.getTypeInterface(o).encode(this,t,r,a)}if(typeof e=="object"){const o=this.tempKey();return new zt(this).registerStructType(o,e).ser(o,t,r)}throw new Error(`Incorrect type passed into the '.ser()' function. 
${JSON.stringify(e)}`)}de(e,t,r){if(typeof t=="string")if(r)t=Il(t,r);else throw new Error("To pass a string to `bcs.de`, specify encoding");if(typeof e=="string"||Array.isArray(e)){const{name:o,params:a}=this.parseTypeName(e);return this.getTypeInterface(o).decode(this,t,a)}if(typeof e=="object"){const o=new zt(this),a=this.tempKey();return o.registerStructType(a,e).de(a,t,r)}throw new Error(`Incorrect type passed into the '.de()' function. 
${JSON.stringify(e)}`)}hasType(e){return this.types.has(e)}registerAlias(e,t){return this.types.set(e,t),this}registerType(e,t,r,o=()=>!0){const{name:a,params:n}=this.parseTypeName(e);return this.types.set(a,{encode(i,s,l,c){const d=n.reduce((u,f,p)=>Object.assign(u,{[f]:c[p]}),{});return this._encodeRaw.call(i,new en(l),s,c,d)},decode(i,s,l){const c=n.reduce((d,u,f)=>Object.assign(d,{[u]:l[f]}),{});return this._decodeRaw.call(i,new Xa(s),l,c)},_encodeRaw(i,s,l,c){if(o(s))return t.call(this,i,s,l,c);throw new Error(`Validation failed for type ${a}, data: ${s}`)},_decodeRaw(i,s,l){return r.call(this,i,s,l)}}),this}registerBcsType(e,t){return this.registerType(e,(r,o,a)=>{const n=a.map(i=>new he({name:String(i),write:(s,l)=>{const{name:c,params:d}=this.parseTypeName(i),u=this.getTypeInterface(c),f=d.reduce((p,g,h)=>Object.assign(p,{[g]:a[h]}),{});return u._encodeRaw.call(this,l,s,d,f)},read:()=>{throw new Error("Not implemented")}}));return t(...n).write(o,r),r},(r,o)=>{const a=o.map(n=>new he({name:String(n),write:(i,s)=>{throw new Error("Not implemented")},read:i=>{const{name:s,params:l}=this.parseTypeName(n),c=this.getTypeInterface(s),d=l.reduce((u,f,p)=>Object.assign(u,{[f]:o[p]}),{});return c._decodeRaw.call(this,i,l,d)}}));return t(...a).read(r)}),this}registerAddressType(e,t,r="hex"){switch(r){case"base64":return this.registerType(e,function(a,n){return et(n).reduce((i,s)=>i.write8(s),a)},function(a){return Ae(a.readBytes(t))});case"hex":return this.registerType(e,function(a,n){return $t(n).reduce((i,s)=>i.write8(s),a)},function(a){return mt(a.readBytes(t))});default:throw new Error("Unsupported encoding! Use either hex or base64")}}registerVectorType(e){let{name:t,params:r}=this.parseTypeName(e);if(r.length>1)throw new Error("Vector can have only one type parameter; got "+t);return this.registerType(e,function(a,n,i,s){return a.writeVec(n,(l,c)=>{let d=i[0];if(!d)throw new Error(`Incorrect number of type parameters passed a to vector '${e}'`);let{name:u,params:f}=this.parseTypeName(d);if(this.hasType(u))return this.getTypeInterface(u)._encodeRaw.call(this,l,c,f,s);if(!(u in s))throw new Error(`Unable to find a matching type definition for ${u} in vector; make sure you passed a generic`);let{name:p,params:g}=this.parseTypeName(s[u]);return this.getTypeInterface(p)._encodeRaw.call(this,l,c,g,s)})},function(a,n,i){return a.readVec(s=>{let l=n[0];if(!l)throw new Error(`Incorrect number of type parameters passed to a vector '${e}'`);let{name:c,params:d}=this.parseTypeName(l);if(this.hasType(c))return this.getTypeInterface(c)._decodeRaw.call(this,s,d,i);if(!(c in i))throw new Error(`Unable to find a matching type definition for ${c} in vector; make sure you passed a generic`);let{name:u,params:f}=this.parseTypeName(i[c]);return this.getTypeInterface(u)._decodeRaw.call(this,s,f,i)})})}registerStructType(e,t){for(let i in t){let s=this.tempKey(),l=t[i];!Array.isArray(l)&&typeof l!="string"&&(t[i]=s,this.registerStructType(s,l))}let r=Object.freeze(t),o=Object.keys(r),{name:a,params:n}=this.parseTypeName(e);return this.registerType(e,function(s,l,c,d){if(!l||l.constructor!==Object)throw new Error(`Expected ${a} to be an Object, got: ${l}`);if(c.length!==n.length)throw new Error(`Incorrect number of generic parameters passed; expected: ${n.length}, got: ${c.length}`);for(let u of o){if(!(u in l))throw new Error(`Struct ${a} requires field ${u}:${r[u]}`);const{name:f,params:p}=this.parseTypeName(r[u]);if(!n.includes(f))this.getTypeInterface(f)._encodeRaw.call(this,s,l[u],p,d);else{const g=n.indexOf(f);let{name:h,params:b}=this.parseTypeName(c[g]);if(this.hasType(h)){this.getTypeInterface(h)._encodeRaw.call(this,s,l[u],b,d);continue}if(!(h in d))throw new Error(`Unable to find a matching type definition for ${h} in ${a}; make sure you passed a generic`);let{name:v,params:S}=this.parseTypeName(d[h]);this.getTypeInterface(v)._encodeRaw.call(this,s,l[u],S,d)}}return s},function(s,l,c){if(l.length!==n.length)throw new Error(`Incorrect number of generic parameters passed; expected: ${n.length}, got: ${l.length}`);let d={};for(let u of o){const{name:f,params:p}=this.parseTypeName(r[u]);if(!n.includes(f))d[u]=this.getTypeInterface(f)._decodeRaw.call(this,s,p,c);else{const g=n.indexOf(f);let{name:h,params:b}=this.parseTypeName(l[g]);if(this.hasType(h)){d[u]=this.getTypeInterface(h)._decodeRaw.call(this,s,b,c);continue}if(!(h in c))throw new Error(`Unable to find a matching type definition for ${h} in ${a}; make sure you passed a generic`);let{name:v,params:S}=this.parseTypeName(c[h]);d[u]=this.getTypeInterface(v)._decodeRaw.call(this,s,S,c)}}return d})}registerEnumType(e,t){for(let i in t){let s=this.tempKey(),l=t[i];l!==null&&!Array.isArray(l)&&typeof l!="string"&&(t[i]=s,this.registerStructType(s,l))}let r=Object.freeze(t),o=Object.keys(r),{name:a,params:n}=this.parseTypeName(e);return this.registerType(e,function(s,l,c,d){if(!l)throw new Error(`Unable to write enum "${a}", missing data.
Received: "${l}"`);if(typeof l!="object")throw new Error(`Incorrect data passed into enum "${a}", expected object with properties: "${o.join(" | ")}".
Received: "${JSON.stringify(l)}"`);let u=Object.keys(l)[0];if(u===void 0)throw new Error(`Empty object passed as invariant of the enum "${a}"`);let f=o.indexOf(u);if(f===-1)throw new Error(`Unknown invariant of the enum "${a}", allowed values: "${o.join(" | ")}"; received "${u}"`);let p=o[f],g=r[p];if(s.write8(f),g===null)return s;let h=n.indexOf(g),b=h===-1?g:c[h];{let{name:v,params:S}=this.parseTypeName(b);return this.getTypeInterface(v)._encodeRaw.call(this,s,l[u],S,d)}},function(s,l,c){let d=s.readULEB(),u=o[d],f=r[u];if(d===-1)throw new Error(`Decoding type mismatch, expected enum "${a}" invariant index, received "${d}"`);if(f===null)return{[u]:!0};let p=n.indexOf(f),g=p===-1?f:l[p];{let{name:h,params:b}=this.parseTypeName(g);return{[u]:this.getTypeInterface(h)._decodeRaw.call(this,s,b,c)}}})}getTypeInterface(e){let t=this.types.get(e);if(typeof t=="string"){let r=[];for(;typeof t=="string";){if(r.includes(t))throw new Error(`Recursive definition found: ${r.join(" -> ")} -> ${t}`);r.push(t),t=this.types.get(t)}}if(t===void 0)throw new Error(`Type ${e} is not registered`);return t}parseTypeName(e){if(Array.isArray(e)){let[s,...l]=e;return{name:s,params:l}}if(typeof e!="string")throw new Error(`Illegal type passed as a name of the type: ${e}`);let[t,r]=this.schema.genericSeparators||["<",">"],o=e.indexOf(t),a=Array.from(e).reverse().indexOf(r);if(o===-1&&a===-1)return{name:e,params:[]};if(o===-1||a===-1)throw new Error(`Unclosed generic in name '${e}'`);let n=e.slice(0,o),i=Ja(e.slice(o+1,e.length-a-1),this.schema.genericSeparators);return{name:n,params:i}}};let L=zt;L.U8="u8";L.U16="u16";L.U32="u32";L.U64="u64";L.U128="u128";L.U256="u256";L.BOOL="bool";L.VECTOR="vector";L.ADDRESS="address";L.STRING="string";L.HEX="hex-string";L.BASE58="base58-string";L.BASE64="base64-string";function Ll(e){e.registerType(L.U8,function(t,r){return t.write8(r)},function(t){return t.read8()},t=>t<256),e.registerType(L.U16,function(t,r){return t.write16(r)},function(t){return t.read16()},t=>t<65536),e.registerType(L.U32,function(t,r){return t.write32(r)},function(t){return t.read32()},t=>t<=4294967296n),e.registerType(L.U64,function(t,r){return t.write64(r)},function(t){return t.read64()}),e.registerType(L.U128,function(t,r){return t.write128(r)},function(t){return t.read128()}),e.registerType(L.U256,function(t,r){return t.write256(r)},function(t){return t.read256()}),e.registerType(L.BOOL,function(t,r){return t.write8(r)},function(t){return t.read8().toString(10)==="1"}),e.registerType(L.STRING,function(t,r){return t.writeVec(Array.from(r),(o,a)=>o.write8(a.charCodeAt(0)))},function(t){return t.readVec(r=>r.read8()).map(r=>String.fromCharCode(Number(r))).join("")},t=>!0),e.registerType(L.HEX,function(t,r){return t.writeVec(Array.from($t(r)),(o,a)=>o.write8(a))},function(t){let r=t.readVec(o=>o.read8());return mt(new Uint8Array(r))}),e.registerType(L.BASE58,function(t,r){return t.writeVec(Array.from(wo(r)),(o,a)=>o.write8(a))},function(t){let r=t.readVec(o=>o.read8());return vr(new Uint8Array(r))}),e.registerType(L.BASE64,function(t,r){return t.writeVec(Array.from(et(r)),(o,a)=>o.write8(a))},function(t){let r=t.readVec(o=>o.read8());return Ae(new Uint8Array(r))})}function Hl(){return{genericSeparators:["<",">"],vectorType:"vector",addressLength:Rl,addressEncoding:"hex"}}const Kl=new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3]);class ql extends oo{constructor(t,r,o={},a,n,i){if(super(),this.blockLen=t,this.outputLen=r,this.length=0,this.pos=0,this.finished=!1,this.destroyed=!1,xe(t),xe(r),xe(a),r<0||r>a)throw new Error("outputLen bigger than keyLen");if(o.key!==void 0&&(o.key.length<1||o.key.length>a))throw new Error(`key must be up 1..${a} byte long or undefined`);if(o.salt!==void 0&&o.salt.length!==n)throw new Error(`salt must be ${n} byte long or undefined`);if(o.personalization!==void 0&&o.personalization.length!==i)throw new Error(`personalization must be ${i} byte long or undefined`);this.buffer32=er(this.buffer=new Uint8Array(t))}update(t){ut(this);const{blockLen:r,buffer:o,buffer32:a}=this;t=be(t);const n=t.length,i=t.byteOffset,s=t.buffer;for(let l=0;l<n;){this.pos===r&&(Ge||nt(a),this.compress(a,0,!1),Ge||nt(a),this.pos=0);const c=Math.min(r-this.pos,n-l),d=i+l;if(c===r&&!(d%4)&&l+c<n){const u=new Uint32Array(s,d,Math.floor((n-l)/4));Ge||nt(u);for(let f=0;l+r<n;f+=a.length,l+=r)this.length+=r,this.compress(u,f,!1);Ge||nt(u);continue}o.set(t.subarray(l,l+c),this.pos),this.pos+=c,this.length+=c,l+=c}return this}digestInto(t){ut(this),Aa(t,this);const{pos:r,buffer32:o}=this;this.finished=!0,this.buffer.subarray(r).fill(0),Ge||nt(o),this.compress(o,0,!0),Ge||nt(o);const a=er(t);this.get().forEach((n,i)=>a[i]=Ee(n))}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const o=t.slice(0,r);return this.destroy(),o}_cloneInto(t){const{buffer:r,length:o,finished:a,destroyed:n,outputLen:i,pos:s}=this;return t||(t=new this.constructor({dkLen:i})),t.set(...this.get()),t.length=o,t.finished=a,t.destroyed=n,t.outputLen=i,t.buffer.set(r),t.pos=s,t}}const M=new Uint32Array([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),x=new Uint32Array(32);function Ne(e,t,r,o,a,n){const i=a[n],s=a[n+1];let l=x[2*e],c=x[2*e+1],d=x[2*t],u=x[2*t+1],f=x[2*r],p=x[2*r+1],g=x[2*o],h=x[2*o+1],b=j.add3L(l,d,i);c=j.add3H(b,c,u,s),l=b|0,{Dh:h,Dl:g}={Dh:h^c,Dl:g^l},{Dh:h,Dl:g}={Dh:j.rotr32H(h,g),Dl:j.rotr32L(h,g)},{h:p,l:f}=j.add(p,f,h,g),{Bh:u,Bl:d}={Bh:u^p,Bl:d^f},{Bh:u,Bl:d}={Bh:j.rotrSH(u,d,24),Bl:j.rotrSL(u,d,24)},x[2*e]=l,x[2*e+1]=c,x[2*t]=d,x[2*t+1]=u,x[2*r]=f,x[2*r+1]=p,x[2*o]=g,x[2*o+1]=h}function Re(e,t,r,o,a,n){const i=a[n],s=a[n+1];let l=x[2*e],c=x[2*e+1],d=x[2*t],u=x[2*t+1],f=x[2*r],p=x[2*r+1],g=x[2*o],h=x[2*o+1],b=j.add3L(l,d,i);c=j.add3H(b,c,u,s),l=b|0,{Dh:h,Dl:g}={Dh:h^c,Dl:g^l},{Dh:h,Dl:g}={Dh:j.rotrSH(h,g,16),Dl:j.rotrSL(h,g,16)},{h:p,l:f}=j.add(p,f,h,g),{Bh:u,Bl:d}={Bh:u^p,Bl:d^f},{Bh:u,Bl:d}={Bh:j.rotrBH(u,d,63),Bl:j.rotrBL(u,d,63)},x[2*e]=l,x[2*e+1]=c,x[2*t]=d,x[2*t+1]=u,x[2*r]=f,x[2*r+1]=p,x[2*o]=g,x[2*o+1]=h}class Dl extends ql{constructor(t={}){super(128,t.dkLen===void 0?64:t.dkLen,t,64,16,16),this.v0l=M[0]|0,this.v0h=M[1]|0,this.v1l=M[2]|0,this.v1h=M[3]|0,this.v2l=M[4]|0,this.v2h=M[5]|0,this.v3l=M[6]|0,this.v3h=M[7]|0,this.v4l=M[8]|0,this.v4h=M[9]|0,this.v5l=M[10]|0,this.v5h=M[11]|0,this.v6l=M[12]|0,this.v6h=M[13]|0,this.v7l=M[14]|0,this.v7h=M[15]|0;const r=t.key?t.key.length:0;if(this.v0l^=this.outputLen|r<<8|65536|1<<24,t.salt){const o=er(be(t.salt));this.v4l^=Ee(o[0]),this.v4h^=Ee(o[1]),this.v5l^=Ee(o[2]),this.v5h^=Ee(o[3])}if(t.personalization){const o=er(be(t.personalization));this.v6l^=Ee(o[0]),this.v6h^=Ee(o[1]),this.v7l^=Ee(o[2]),this.v7h^=Ee(o[3])}if(t.key){const o=new Uint8Array(this.blockLen);o.set(be(t.key)),this.update(o)}}get(){let{v0l:t,v0h:r,v1l:o,v1h:a,v2l:n,v2h:i,v3l:s,v3h:l,v4l:c,v4h:d,v5l:u,v5h:f,v6l:p,v6h:g,v7l:h,v7h:b}=this;return[t,r,o,a,n,i,s,l,c,d,u,f,p,g,h,b]}set(t,r,o,a,n,i,s,l,c,d,u,f,p,g,h,b){this.v0l=t|0,this.v0h=r|0,this.v1l=o|0,this.v1h=a|0,this.v2l=n|0,this.v2h=i|0,this.v3l=s|0,this.v3h=l|0,this.v4l=c|0,this.v4h=d|0,this.v5l=u|0,this.v5h=f|0,this.v6l=p|0,this.v6h=g|0,this.v7l=h|0,this.v7h=b|0}compress(t,r,o){this.get().forEach((l,c)=>x[c]=l),x.set(M,16);let{h:a,l:n}=j.fromBig(BigInt(this.length));x[24]=M[8]^n,x[25]=M[9]^a,o&&(x[28]=~x[28],x[29]=~x[29]);let i=0;const s=Kl;for(let l=0;l<12;l++)Ne(0,4,8,12,t,r+2*s[i++]),Re(0,4,8,12,t,r+2*s[i++]),Ne(1,5,9,13,t,r+2*s[i++]),Re(1,5,9,13,t,r+2*s[i++]),Ne(2,6,10,14,t,r+2*s[i++]),Re(2,6,10,14,t,r+2*s[i++]),Ne(3,7,11,15,t,r+2*s[i++]),Re(3,7,11,15,t,r+2*s[i++]),Ne(0,5,10,15,t,r+2*s[i++]),Re(0,5,10,15,t,r+2*s[i++]),Ne(1,6,11,12,t,r+2*s[i++]),Re(1,6,11,12,t,r+2*s[i++]),Ne(2,7,8,13,t,r+2*s[i++]),Re(2,7,8,13,t,r+2*s[i++]),Ne(3,4,9,14,t,r+2*s[i++]),Re(3,4,9,14,t,r+2*s[i++]);this.v0l^=x[0]^x[16],this.v0h^=x[1]^x[17],this.v1l^=x[2]^x[18],this.v1h^=x[3]^x[19],this.v2l^=x[4]^x[20],this.v2h^=x[5]^x[21],this.v3l^=x[6]^x[22],this.v3h^=x[7]^x[23],this.v4l^=x[8]^x[24],this.v4h^=x[9]^x[25],this.v5l^=x[10]^x[26],this.v5h^=x[11]^x[27],this.v6l^=x[12]^x[28],this.v6h^=x[13]^x[29],this.v7l^=x[14]^x[30],this.v7h^=x[15]^x[31],x.fill(0)}destroy(){this.destroyed=!0,this.buffer32.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const sr=ni(e=>new Dl(e));var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0});Tt.bech32m=Gr=Tt.bech32=void 0;const lr="qpzry9x8gf2tvdw0s3jn54khce6mua7l",on={};for(let e=0;e<lr.length;e++){const t=lr.charAt(e);on[t]=e}function lt(e){const t=e>>25;return(e&33554431)<<5^-(t>>0&1)&996825010^-(t>>1&1)&642813549^-(t>>2&1)&513874426^-(t>>3&1)&1027748829^-(t>>4&1)&705979059}function da(e){let t=1;for(let r=0;r<e.length;++r){const o=e.charCodeAt(r);if(o<33||o>126)return"Invalid prefix ("+e+")";t=lt(t)^o>>5}t=lt(t);for(let r=0;r<e.length;++r){const o=e.charCodeAt(r);t=lt(t)^o&31}return t}function Eo(e,t,r,o){let a=0,n=0;const i=(1<<r)-1,s=[];for(let l=0;l<e.length;++l)for(a=a<<t|e[l],n+=t;n>=r;)n-=r,s.push(a>>n&i);if(o)n>0&&s.push(a<<r-n&i);else{if(n>=t)return"Excess padding";if(a<<r-n&i)return"Non-zero padding"}return s}function Vl(e){return Eo(e,8,5,!0)}function Ml(e){const t=Eo(e,5,8,!1);if(Array.isArray(t))return t}function Pl(e){const t=Eo(e,5,8,!1);if(Array.isArray(t))return t;throw new Error(t)}function an(e){let t;e==="bech32"?t=1:t=734539939;function r(i,s,l){if(l=l||90,i.length+7+s.length>l)throw new TypeError("Exceeds length limit");i=i.toLowerCase();let c=da(i);if(typeof c=="string")throw new Error(c);let d=i+"1";for(let u=0;u<s.length;++u){const f=s[u];if(f>>5)throw new Error("Non 5-bit word");c=lt(c)^f,d+=lr.charAt(f)}for(let u=0;u<6;++u)c=lt(c);c^=t;for(let u=0;u<6;++u){const f=c>>(5-u)*5&31;d+=lr.charAt(f)}return d}function o(i,s){if(s=s||90,i.length<8)return i+" too short";if(i.length>s)return"Exceeds length limit";const l=i.toLowerCase(),c=i.toUpperCase();if(i!==l&&i!==c)return"Mixed-case string "+i;i=l;const d=i.lastIndexOf("1");if(d===-1)return"No separator character for "+i;if(d===0)return"Missing prefix for "+i;const u=i.slice(0,d),f=i.slice(d+1);if(f.length<6)return"Data too short";let p=da(u);if(typeof p=="string")return p;const g=[];for(let h=0;h<f.length;++h){const b=f.charAt(h),v=on[b];if(v===void 0)return"Unknown character "+b;p=lt(p)^v,!(h+6>=f.length)&&g.push(v)}return p!==t?"Invalid checksum for "+i:{prefix:u,words:g}}function a(i,s){const l=o(i,s);if(typeof l=="object")return l}function n(i,s){const l=o(i,s);if(typeof l=="object")return l;throw new Error(l)}return{decodeUnsafe:a,decode:n,encode:r,toWords:Vl,fromWordsUnsafe:Ml,fromWords:Pl}}var Gr=Tt.bech32=an("bech32");Tt.bech32m=an("bech32m");var jt=(e=>(e[e.TransactionData=0]="TransactionData",e[e.TransactionEffects=1]="TransactionEffects",e[e.CheckpointSummary=2]="CheckpointSummary",e[e.PersonalMessage=3]="PersonalMessage",e))(jt||{});function Fl(e){return[e,0,0]}function nn(e,t){const r=Fl(e),o=new Uint8Array(r.length+t.length);return o.set(r),o.set(t,r.length),o}const yr={ED25519:0,Secp256k1:1,Secp256r1:2,MultiSig:3,ZkLogin:5},Ol={ED25519:32,Secp256k1:33,Secp256r1:33},Gl={0:"ED25519",1:"Secp256k1",2:"Secp256r1",3:"MultiSig",5:"ZkLogin"},wr=32;function ft(e,t=!1){let r=e.toLowerCase();return!t&&r.startsWith("0x")&&(r=r.slice(2)),`0x${r.padStart(wr*2,"0")}`}const Wl=/^vector<(.+)>$/,Zl=/^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;class Ke{static parseFromStr(t,r=!1){if(t==="address")return{address:null};if(t==="bool")return{bool:null};if(t==="u8")return{u8:null};if(t==="u16")return{u16:null};if(t==="u32")return{u32:null};if(t==="u64")return{u64:null};if(t==="u128")return{u128:null};if(t==="u256")return{u256:null};if(t==="signer")return{signer:null};const o=t.match(Wl);if(o)return{vector:Ke.parseFromStr(o[1],r)};const a=t.match(Zl);if(a)return{struct:{address:r?ft(a[1]):a[1],module:a[2],name:a[3],typeParams:a[5]===void 0?[]:Ke.parseStructTypeArgs(a[5],r)}};throw new Error(`Encountered unexpected token when parsing type args for ${t}`)}static parseStructTypeArgs(t,r=!1){return Ja(t).map(o=>Ke.parseFromStr(o,r))}static tagToString(t){if("bool"in t)return"bool";if("u8"in t)return"u8";if("u16"in t)return"u16";if("u32"in t)return"u32";if("u64"in t)return"u64";if("u128"in t)return"u128";if("u256"in t)return"u256";if("address"in t)return"address";if("signer"in t)return"signer";if("vector"in t)return`vector<${Ke.tagToString(t.vector)}>`;if("struct"in t){const r=t.struct,o=r.typeParams.map(Ke.tagToString).join(", ");return`${r.address}::${r.module}::${r.name}${o?`<${o}>`:""}`}throw new Error("Invalid TypeTag")}}const N=new L({...Hl(),types:{enums:{"Option<T>":{None:null,Some:"T"}}}});function sn(e){return m.u64({name:"unsafe_u64",...e}).transform({input:t=>t,output:t=>Number(t)})}function Yl(e){return m.enum("Option",{None:null,Some:e})}function zo(e){return e.transform({input:t=>({[t.kind]:t}),output:t=>{const r=Object.keys(t)[0];return{kind:r,...t[r]}}})}const fe=m.bytes(wr).transform({input:e=>typeof e=="string"?$t(ft(e)):e,output:e=>ft(mt(e))}),xo=m.vector(m.u8()).transform({name:"ObjectDigest",input:e=>wo(e),output:e=>vr(new Uint8Array(e))}),It=m.struct("SuiObjectRef",{objectId:fe,version:m.u64(),digest:xo}),So=m.struct("SharedObjectRef",{objectId:fe,initialSharedVersion:m.u64(),mutable:m.bool()}),cr=m.enum("ObjectArg",{ImmOrOwned:It,Shared:So,Receiving:It}),Ao=m.enum("CallArg",{Pure:m.vector(m.u8()),Object:cr,ObjVec:m.vector(cr)}),gt=m.enum("TypeTag",{bool:null,u8:null,u64:null,u128:null,address:null,signer:null,vector:m.lazy(()=>gt),struct:m.lazy(()=>_o),u16:null,u32:null,u256:null}),ce=zo(m.enum("Argument",{GasCoin:null,Input:m.struct("Input",{index:m.u16()}),Result:m.struct("Result",{index:m.u16()}),NestedResult:m.struct("NestedResult",{index:m.u16(),resultIndex:m.u16()})})),Bo=m.struct("ProgrammableMoveCall",{package:fe,module:m.string(),function:m.string(),type_arguments:m.vector(gt),arguments:m.vector(ce)}).transform({input:e=>{const[t,r,o]=e.target.split("::"),a=e.typeArguments.map(n=>Ke.parseFromStr(n,!0));return{package:ft(t),module:r,function:o,type_arguments:a,arguments:e.arguments}},output:e=>({target:[e.package,e.module,e.function].join("::"),arguments:e.arguments,typeArguments:e.type_arguments.map(Ke.tagToString)})}),To=zo(m.enum("Transaction",{MoveCall:Bo,TransferObjects:m.struct("TransferObjects",{objects:m.vector(ce),address:ce}),SplitCoins:m.struct("SplitCoins",{coin:ce,amounts:m.vector(ce)}),MergeCoins:m.struct("MergeCoins",{destination:ce,sources:m.vector(ce)}),Publish:m.struct("Publish",{modules:m.vector(m.vector(m.u8())),dependencies:m.vector(fe)}),MakeMoveVec:m.struct("MakeMoveVec",{type:Yl(gt),objects:m.vector(ce)}),Upgrade:m.struct("Upgrade",{modules:m.vector(m.vector(m.u8())),dependencies:m.vector(fe),packageId:fe,ticket:ce})})),jo=m.struct("ProgrammableTransaction",{inputs:m.vector(Ao),transactions:m.vector(To)}),Io=m.enum("TransactionKind",{ProgrammableTransaction:jo,ChangeEpoch:null,Genesis:null,ConsensusCommitPrologue:null}),Uo=m.enum("TransactionExpiration",{None:null,Epoch:sn()}),_o=m.struct("StructTag",{address:fe,module:m.string(),name:m.string(),typeParams:m.vector(gt)}),Co=m.struct("GasData",{payment:m.vector(It),owner:fe,price:m.u64(),budget:m.u64()}),$o=m.struct("TransactionDataV1",{kind:Io,sender:fe,gasData:Co,expiration:Uo}),No=m.enum("TransactionData",{V1:$o}),Ql=m.enum("IntentScope",{TransactionData:null,TransactionEffects:null,CheckpointSummary:null,PersonalMessage:null}),Xl=m.enum("IntentVersion",{V0:null}),Jl=m.enum("AppId",{Sui:null}),ec=m.struct("Intent",{scope:Ql,version:Xl,appId:Jl}),tc=m.generic(["T"],e=>m.struct("IntentMessage<T>",{intent:ec,value:e})),Ro=m.enum("CompressedSignature",{ED25519:m.fixedArray(64,m.u8()),Secp256k1:m.fixedArray(64,m.u8()),Secp256r1:m.fixedArray(64,m.u8()),ZkLogin:m.vector(m.u8())}),Lo=m.enum("PublicKey",{ED25519:m.fixedArray(32,m.u8()),Secp256k1:m.fixedArray(33,m.u8()),Secp256r1:m.fixedArray(33,m.u8()),ZkLogin:m.vector(m.u8())}),Ho=m.struct("MultiSigPkMap",{pubKey:Lo,weight:m.u8()}),Ko=m.struct("MultiSigPublicKey",{pk_map:m.vector(Ho),threshold:m.u16()}),ln=m.struct("MultiSig",{sigs:m.vector(Ro),bitmap:m.u16(),multisig_pk:Ko}),rc=m.vector(m.u8()).transform({input:e=>typeof e=="string"?et(e):e,output:e=>Ae(new Uint8Array(e))}),cn=m.struct("SenderSignedTransaction",{intentMessage:tc(No),txSignatures:m.vector(rc)}),un=m.vector(cn,{name:"SenderSignedData"}),Wr={...m,U8:m.u8(),U16:m.u16(),U32:m.u32(),U64:m.u64(),U128:m.u128(),U256:m.u256(),ULEB128:m.uleb128(),Bool:m.bool(),String:m.string(),Address:fe,Argument:ce,CallArg:Ao,CompressedSignature:Ro,GasData:Co,MultiSig:ln,MultiSigPkMap:Ho,MultiSigPublicKey:Ko,ObjectArg:cr,ObjectDigest:xo,ProgrammableMoveCall:Bo,ProgrammableTransaction:jo,PublicKey:Lo,SenderSignedData:un,SenderSignedTransaction:cn,SharedObjectRef:So,StructTag:_o,SuiObjectRef:It,Transaction:To,TransactionData:No,TransactionDataV1:$o,TransactionExpiration:Uo,TransactionKind:Io,TypeTag:gt,ser:N.ser.bind(N),de:N.de.bind(N),getTypeInterface:N.getTypeInterface.bind(N),hasType:N.hasType.bind(N),parseTypeName:N.parseTypeName.bind(N),registerAddressType:N.registerAddressType.bind(N),registerAlias:N.registerAlias.bind(N),registerBcsType:N.registerBcsType.bind(N),registerEnumType:N.registerEnumType.bind(N),registerStructType:N.registerStructType.bind(N),registerType:N.registerType.bind(N),types:N.types};N.registerBcsType("utf8string",()=>m.string({name:"utf8string"}));N.registerBcsType("unsafe_u64",()=>sn());N.registerBcsType("enumKind",e=>zo(e));[fe,ce,Ao,Ro,Co,ln,Ho,Ko,cr,xo,Bo,jo,Lo,un,So,_o,It,To,No,$o,Uo,Io,gt].forEach(e=>{N.registerBcsType(e.name,()=>e)});function oc(e){for(let t=0;t<e.length;t++)if(e[t]!==0)return t;return-1}function ac(e,t){const r=e.toString(16);return Ta(r.padStart(t*2,"0").slice(-t*2))}function nc(e,t){const r=ac(e,t),o=oc(r);return o===-1?new Uint8Array([0]):r.slice(o)}function ic(e,t){const r=nc(e,32);t==="accounts.google.com"&&(t="https://accounts.google.com");const o=new TextEncoder().encode(t),a=new Uint8Array(2+r.length+o.length);return a.set([yr.ZkLogin]),a.set([o.length],1),a.set(o,2),a.set(r,2+o.length),ft(ro(sr(a,{dkLen:32})).slice(0,wr*2))}function sc(e){if(e.length!==1)throw new Error("Invalid base64Url character: "+e);const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(e);if(r===-1)throw new Error("Invalid base64Url character: "+e);const o=r.toString(2).padStart(6,"0");return Array.from(o).map(Number)}function lc(e){let t=[];for(let r=0;r<e.length;r++){const o=e.charAt(r),a=sc(o);t=t.concat(a)}return t}function cc(e,t){if(e.length<2)throw new Error(`Input (s = ${e}) is not tightly packed because s.length < 2`);let r=lc(e);const o=t%4;if(o!==0)if(o===1)r=r.slice(2);else if(o===2)r=r.slice(4);else throw new Error(`Input (s = ${e}) is not tightly packed because i%4 = 3 (i = ${t}))`);const a=(t+e.length-1)%4;if(a!==3)if(a===2)r=r.slice(0,r.length-2);else if(a===1)r=r.slice(0,r.length-4);else throw new Error(`Input (s = ${e}) is not tightly packed because (i + s.length - 1)%4 = 0 (i = ${t}))`);if(r.length%8!==0)throw new Error("We should never reach here...");const n=new Uint8Array(Math.floor(r.length/8));let i=0;for(let s=0;s<r.length;s+=8){const l=r.slice(s,s+8),c=parseInt(l.join(""),2);n[i++]=c}return new TextDecoder().decode(n)}function uc(e){if(!(e.slice(-1)==="}"||e.slice(-1)===","))throw new Error("Invalid claim");const t=JSON.parse("{"+e.slice(0,-1)+"}");if(Object.keys(t).length!==1)throw new Error("Invalid claim");const r=Object.keys(t)[0];return[r,t[r]]}function dc(e,t){const r=cc(e.value,e.indexMod4),[o,a]=uc(r);if(o!==t)throw new Error(`Invalid field name: found ${o} expected ${t}`);return a}const hc=m.struct("ZkLoginSignature",{inputs:m.struct("ZkLoginSignatureInputs",{proofPoints:m.struct("ZkLoginSignatureInputsProofPoints",{a:m.vector(m.string()),b:m.vector(m.vector(m.string())),c:m.vector(m.string())}),issBase64Details:m.struct("ZkLoginSignatureInputsClaim",{value:m.string(),indexMod4:m.u8()}),headerBase64:m.string(),addressSeed:m.string()}),maxEpoch:m.u64(),userSignature:m.vector(m.u8())});function fc(e){return hc.parse(typeof e=="string"?et(e):e)}function pc({signature:e,signatureScheme:t,publicKey:r}){if(!r)throw new Error("`publicKey` is required");const o=r.toRawBytes(),a=new Uint8Array(1+e.length+o.length);return a.set([yr[t]]),a.set(e,1),a.set(o,1+e.length),Ae(a)}function mc(e){const t=et(e),r=Gl[t[0]];switch(r){case"MultiSig":const o=Wr.MultiSig.parse(t.slice(1));return{serializedSignature:e,signatureScheme:r,multisig:o,bytes:t};case"ZkLogin":const a=t.slice(1),{inputs:n,maxEpoch:i,userSignature:s}=fc(a),{issBase64Details:l,addressSeed:c}=n,d=dc(l,"iss"),u=ic(BigInt(c),d);return{serializedSignature:e,signatureScheme:r,zkLogin:{inputs:n,maxEpoch:i,userSignature:s,iss:d,address:u,addressSeed:BigInt(c)},signature:t};case"ED25519":case"Secp256k1":case"Secp256r1":const f=Ol[r],p=t.slice(1,t.length-f),g=t.slice(1+p.length);return{serializedSignature:e,signatureScheme:r,signature:p,publicKey:g,bytes:t};default:throw new Error("Unsupported signature scheme")}}const Wt=32,gc="suiprivkey";class bc{async signWithIntent(t,r){const o=nn(r,t),a=sr(o,{dkLen:32});return{signature:pc({signature:await this.sign(a),signatureScheme:this.getKeyScheme(),publicKey:this.getPublicKey()}),bytes:Ae(t)}}async signTransactionBlock(t){return this.signWithIntent(t,jt.TransactionData)}async signPersonalMessage(t){return this.signWithIntent(m.vector(m.u8()).serialize(t).toBytes(),jt.PersonalMessage)}toSuiAddress(){return this.getPublicKey().toSuiAddress()}}class vc extends bc{export(){return{schema:this.getKeyScheme(),privateKey:this.getSecretKey()}}}function yc(e,t){if(e.length!==Wt)throw new Error("Invalid bytes length");const r=yr[t],o=new Uint8Array(e.length+1);return o.set([r]),o.set(e,1),Gr.encode(gc,Gr.toWords(o))}function ha(e){return!!new RegExp("^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$").test(e)}function wc(e){return Le(e,"")}function kc(e){return mt(wc(e))}const Ec="ed25519 seed",zc=2147483648,xc=new RegExp("^m(\\/[0-9]+')+$"),dn=e=>e.replace("'",""),Sc=e=>{const r=Je.create(Bt,Ec).update($t(e)).digest(),o=r.slice(0,32),a=r.slice(32);return{key:o,chainCode:a}},Ac=({key:e,chainCode:t},r)=>{const o=new ArrayBuffer(4);new DataView(o).setUint32(0,r);const n=new Uint8Array(1+e.length+o.byteLength);n.set(new Uint8Array(1).fill(0)),n.set(e,1),n.set(new Uint8Array(o,0,o.byteLength),e.length+1);const i=Je.create(Bt,t).update(n).digest(),s=i.slice(0,32),l=i.slice(32);return{key:s,chainCode:l}},Bc=e=>xc.test(e)?!e.split("/").slice(1).map(dn).some(isNaN):!1,fa=(e,t,r=zc)=>{if(!Bc(e))throw new Error("Invalid derivation path");const{key:o,chainCode:a}=Sc(t);return e.split("/").slice(1).map(dn).map(i=>parseInt(i,10)).reduce((i,s)=>Ac(i,s+r),{key:o,chainCode:a})};function hn(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}class Tc{equals(t){return hn(this.toRawBytes(),t.toRawBytes())}toBase64(){return Ae(this.toRawBytes())}toString(){throw new Error("`toString` is not implemented on public keys. Use `toBase64()` or `toRawBytes()` instead.")}toSuiPublicKey(){const t=this.toSuiBytes();return Ae(t)}verifyWithIntent(t,r,o){const a=nn(o,t),n=sr(a,{dkLen:32});return this.verify(n,r)}verifyPersonalMessage(t,r){return this.verifyWithIntent(Wr.vector(Wr.u8()).serialize(t).toBytes(),r,jt.PersonalMessage)}verifyTransactionBlock(t,r){return this.verifyWithIntent(t,r,jt.TransactionData)}toSuiBytes(){const t=this.toRawBytes(),r=new Uint8Array(t.length+1);return r.set([this.flag()]),r.set(t,1),r}toSuiAddress(){return ft(ro(sr(this.toSuiBytes(),{dkLen:32})).slice(0,wr*2))}}const Zr=32;class fn extends Tc{constructor(t){if(super(),typeof t=="string"?this.data=et(t):t instanceof Uint8Array?this.data=t:this.data=Uint8Array.from(t),this.data.length!==Zr)throw new Error(`Invalid public key input. Expected ${Zr} bytes, got ${this.data.length}`)}equals(t){return super.equals(t)}toRawBytes(){return this.data}flag(){return yr.ED25519}async verify(t,r){let o;if(typeof r=="string"){const a=mc(r);if(a.signatureScheme!=="ED25519")throw new Error("Invalid signature scheme");if(!hn(this.toRawBytes(),a.publicKey))throw new Error("Signature does not match public key");o=a.signature}else o=r;return Oe.sign.detached.verify(t,o,this.toRawBytes())}}fn.SIZE=Zr;const pa="m/44'/784'/0'/0'/0'";class st extends vc{constructor(t){super(),t?this.keypair=t:this.keypair=Oe.sign.keyPair()}getKeyScheme(){return"ED25519"}static generate(){return new st(Oe.sign.keyPair())}static fromSecretKey(t,r){const o=t.length;if(o!==Wt)throw new Error(`Wrong secretKey size. Expected ${Wt} bytes, got ${o}.`);const a=Oe.sign.keyPair.fromSeed(t);if(!r||!r.skipValidation){const i=new TextEncoder().encode("sui validation"),s=Oe.sign.detached(i,a.secretKey);if(!Oe.sign.detached.verify(i,s,a.publicKey))throw new Error("provided secretKey is invalid")}return new st(a)}getPublicKey(){return new fn(this.keypair.publicKey)}getSecretKey(){return yc(this.keypair.secretKey.slice(0,Wt),this.getKeyScheme())}async sign(t){return this.signData(t)}signData(t){return Oe.sign.detached(t,this.keypair.secretKey)}static deriveKeypair(t,r){if(r==null&&(r=pa),!ha(r))throw new Error("Invalid derivation path");const{key:o}=fa(r,kc(t));return st.fromSecretKey(o)}static deriveKeypairFromSeed(t,r){if(r==null&&(r=pa),!ha(r))throw new Error("Invalid derivation path");const{key:o}=fa(r,t);return st.fromSecretKey(o)}}const jc=async(e,t,r,o)=>{(e==oe.SUI||e==oe.APTOS)&&(t="en",r=16);const a=ll(El[t],r*8);if(e==qe.BTC_1){const s="m/44'/0'/0'/0/0",l=Le(a),c=ge.fromMasterSeed(l).derive(s);return{address:xs(c.publicKey||Buffer.from("")).address,privateKey:Vt().encode(c.privateKey||Buffer.from("")),mnemonic:a}}if(e==qe.BTC_BC1Q){const s="m/84'/0'/0'/0/0",l=Le(a),c=ge.fromMasterSeed(l).derive(s);return{address:ca(c.publicKey||Buffer.from("")).address,privateKey:Vt().encode(c.privateKey||Buffer.from("")),mnemonic:a}}if(e==qe.BTC_3){const s="m/49'/0'/0'/0/0",l=Le(a),c=ge.fromMasterSeed(l).derive(s);return{address:Ss(ca(c.publicKey||Buffer.from(""))).address,privateKey:Vt().encode(c.privateKey||Buffer.from("")),mnemonic:a}}if(e==qe.BTC_BC1P){const s="m/86'/0'/0'/0/0",l=Le(a),c=ge.fromMasterSeed(l).derive(s);return{address:Bs("tr",c.privateKey||Buffer.from("")),privateKey:Vt().encode(c.privateKey||Buffer.from("")),mnemonic:a}}if(e==oe.APTOS){const l=En.fromDerivePath("m/44'/637'/0'/0'/0'",a);return{address:l.toPrivateKeyObject().address,privateKey:l.toPrivateKeyObject().privateKeyHex,mnemonic:a}}if(e==oe.SUI){const s=st.deriveKeypair(a),l=Buffer.from(s.export().privateKey,"base64");return{address:s.getPublicKey().toSuiAddress(),privateKey:"0x"+l.toString("hex"),mnemonic:a}}if(e==oe.COSMOS){t="en";const l=ye.stringToPath("m/44'/118'/0'/0/0"),c=new ye.EnglishMnemonic(a),d=await ye.Bip39.mnemonicToSeed(c),{privkey:u}=ye.Slip10.derivePath(ye.Slip10Curve.Secp256k1,d,l),{pubkey:f}=await ye.Secp256k1.makeKeypair(u),p=ye.Secp256k1.compressPubkey(f);return o||(o="cosmos"),{address:zn.toBech32(o==null?void 0:o.toLowerCase(),ye.ripemd160(ye.sha256(p))),privateKey:Buffer.from(u).toString("hex"),mnemonic:a}}if(e==oe.TRON){const s=Le(a),l=Er.fromSeed(s).derivePath("m/44'/195'/0'/0/0");return{address:xn.address.fromPrivateKey(l.privateKey.substring(2).toUpperCase()),privateKey:l.privateKey.substring(2).toUpperCase(),mnemonic:a}}if(e==oe.FILE){const s=Le(a),l=Er.fromSeed(s).derivePath("m/44'/461'/0'/0/0");return{address:Sn(l.address,An.MAIN).toString(),privateKey:l.privateKey,mnemonic:a}}const n=Le(a),i=Er.fromSeed(n).derivePath("m/44'/60'/0'/0/0");return{address:i.address,privateKey:i.privateKey,mnemonic:a}},Ic={class:"batchCreateWallet"},Uc={class:"text_markedness"},_c={class:"buttons"},Cc={class:"text_markedness"},$c={class:"bcwTable"},Nc=ma({name:"batchCreateWallet"}),Rc=ma({...Nc,setup(e){const{t}=mn.useI18n(),r=gn(),o=Nt({chainName:oe.ETH,count:10,mnemonicLang:"en",digit:16}),a=Nt([...bn]);a.splice(10),a.splice(3,3),a.splice(1,1,{label:t("chainTools.BTC_1"),value:qe.BTC_1},{label:t("chainTools.BTC_BC1Q"),value:qe.BTC_BC1Q},{label:t("chainTools.BTC_3"),value:qe.BTC_3},{label:t("chainTools.BTC_BC1P"),value:qe.BTC_BC1P});const n=r.currentRoute.value.query.chain;if(n){let A=!1;for(let y=0;y<a.length;y++)if(a[y].value.toString().toUpperCase()==n.toString().toUpperCase()){o.chainName=n.toString().toUpperCase(),A=!0;break}A||r.push({query:{chain:oe.ETH}})}const i=Nt([]),s=Nt([]),l=at(1),c=at(1),d=at("cosmos");Mo(()=>o.chainName,()=>{r.push({query:{chain:o.chainName}})}),Mo(()=>({...i}),()=>{l.value=Math.ceil(i.length/100),u()});const u=()=>{s.length=0,s.push(...i.slice((c.value-1)*100,c.value*100))},f=A=>{c.value=A,u()},p=[{label:t("lang.en"),value:"en"},{label:t("lang.zh_cn"),value:"zh_cn"},{label:t("lang.zh_tw"),value:"zh_tw"},{label:t("lang.cz"),value:"cz"},{label:t("lang.es"),value:"es"},{label:t("lang.fr"),value:"fr"},{label:t("lang.it"),value:"it"},{label:t("lang.ja"),value:"ja"},{label:t("lang.ko"),value:"ko"}],g=[{label:"12",value:16},{label:"15",value:20},{label:"18",value:24},{label:"21",value:28},{label:"24",value:32}],h=at(t("chainTools.create")),b=at(0),v=at(!0),S=A=>{const y=A.count;if(y==0)return;const E=A.chainName,B=A.mnemonicLang,T=A.digit;h.value=t("chainTools.recreate"),i.length=0,b.value=0,(E==oe.SUI||E==oe.APTOS)&&(A.mnemonicLang="en",A.digit=16,Fo.warning(t("chainTools.suiTip"))),v.value=!1;async function C(){if(b.value<y&&!v.value){const _=await jc(E,B,T,d.value);i.push(_),b.value++,setTimeout(C,0)}else v.value=!0,Fo.success(t("chainTools.createOver"))}return setTimeout(C,0),!0},k=()=>{const A=Bn(Tn(),"YYYYMMDDHHmmss"),y=i.map(E=>E.address+"----"+E.privateKey+"----"+E.mnemonic).join(`\r
`);try{jn.saveAs(new Blob([y],{type:"text/plain;charset=utf-8"}),t("chainTools.fileName1")+o.chainName+t("chainTools.fileName2")+A.value+".txt")}catch{}return y};return(A,y)=>{const E=vn,B=Nn,T=Rn,C=Cn,_=$n,U=_n,D=In,V=Un,X=wn,z=kn;return Fe(),vt("div",Ic,[yt("h1",null,Ie(re(t)("chainTools.bathCreteWallet")),1),yt("div",Uc,Ie(re(t)("chainTools.createTip")),1),K(T,{inline:!0,class:"batchCreateWalletForm"},{default:Y(()=>[(Fe(!0),vt(Rt,null,Lt(a,w=>(Fe(),Po(B,null,{default:Y(()=>[K(E,{onClick:I=>o.chainName=w.value.toString(),color:"#626aef",plain:"",disabled:!v.value},{default:Y(()=>[Ht(Ie(w.label),1)]),_:2},1032,["onClick","disabled"])]),_:2},1024))),256))]),_:1}),K(T,{inline:!0,model:o,class:"batchCreateWalletForm"},{default:Y(()=>[K(B,{label:re(t)("chainTools.mnemonicTypeLable")},{default:Y(()=>[K(_,{modelValue:o.chainName,"onUpdate:modelValue":y[0]||(y[0]=w=>o.chainName=w),disabled:!v.value,class:"long-select"},{default:Y(()=>[(Fe(!0),vt(Rt,null,Lt(a,w=>(Fe(),Po(C,{value:w.value,label:w.label},null,8,["value","label"]))),256))]),_:1},8,["modelValue","disabled"]),K(_,{modelValue:o.mnemonicLang,"onUpdate:modelValue":y[1]||(y[1]=w=>o.mnemonicLang=w),disabled:!v.value||o.chainName==re(oe).COSMOS},{default:Y(()=>[(Fe(),vt(Rt,null,Lt(p,w=>K(C,{value:w.value,label:w.label},null,8,["value","label"])),64))]),_:1},8,["modelValue","disabled"]),K(_,{modelValue:o.digit,"onUpdate:modelValue":y[2]||(y[2]=w=>o.digit=w),disabled:!v.value},{default:Y(()=>[(Fe(),vt(Rt,null,Lt(g,w=>K(C,{value:w.value,label:w.label},null,8,["value","label"])),64))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label"]),K(B,{label:re(t)("chainTools.cosmosPerfixLable")},{default:Y(()=>[K(U,{modelValue:d.value,"onUpdate:modelValue":y[3]||(y[3]=w=>d.value=w),disabled:o.chainName!=re(oe).COSMOS},null,8,["modelValue","disabled"])]),_:1},8,["label"]),K(B,{label:re(t)("chainTools.countLable")},{default:Y(()=>[K(U,{modelValue:o.count,"onUpdate:modelValue":y[4]||(y[4]=w=>o.count=w),disabled:!v.value},null,8,["modelValue","disabled"])]),_:1},8,["label"])]),_:1},8,["model"]),yt("div",_c,[K(E,{type:"primary",onClick:y[5]||(y[5]=w=>S(o))},{default:Y(()=>[Ht(Ie(h.value),1)]),_:1}),K(E,{type:"warning",onClick:y[6]||(y[6]=w=>v.value=!0)},{default:Y(()=>[Ht(Ie(re(t)("chainTools.stopCreate")),1)]),_:1}),K(E,{type:"primary",onClick:y[7]||(y[7]=w=>k())},{default:Y(()=>[Ht(Ie(re(t)("chainTools.dowmLoadTable")),1)]),_:1}),yt("div",Cc,Ie(re(t)("chainTools.currentCount"))+Ie(b.value),1)]),yt("div",$c,[K(V,{target:".batchCreateWallet",offset:80},{default:Y(()=>[K(D,{layout:"->,prev, pager, next","page-count":l.value,background:"",onCurrentChange:f,"hide-on-single-page":!0},null,8,["page-count"])]),_:1}),K(z,{data:s,"max-height":"500"},{default:Y(()=>[K(X,{prop:"address",label:re(t)("chainTools.address")},null,8,["label"]),K(X,{prop:"privateKey",label:re(t)("chainTools.privateKey")},null,8,["label"]),K(X,{prop:"mnemonic",label:re(t)("chainTools.mnemonic")},null,8,["label"])]),_:1},8,["data"])])])}}}),tu=yn(Rc,[["__scopeId","data-v-123596da"]]);export{tu as default};
