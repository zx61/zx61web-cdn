import{$ as ue,a$ as Ee,aC as ke,Y as G,bs as Se,a7 as Me,T as te,b2 as de,bw as se,G as K,by as Te,bv as De,bP as Ie,bx as Be,aq as W,L as oe,N as Z,e as x,i as V,bQ as j,ap as C,bn as $e,M as _e,ac as Ae,ax as ne,bR as Re,V as L,o as F,c as q,b as U,n as E,g as o,t as Fe,w as B,v as J,z as Le,E as Pe,j as Q,a2 as fe,a3 as me,bS as Oe,bT as ze,O as Ne,bp as Ye,bU as le,s as $,bV as Ve,a5 as xe,a4 as Ue,bW as Xe,bE as ae,aB as He,U as ie,aD as We,af as je,bX as qe,aG as Ge,aF as Ke,b0 as Ze,b1 as Je,bY as Qe,a8 as et}from"./chunk-5b0306a6.js";import{z as tt,U as pe}from"./chunk-e72910d8.js";const ve=Symbol("dialogInjectionKey"),ot=(e,t,s)=>{let n={offsetX:0,offsetY:0};const l=r=>{const d=r.clientX,p=r.clientY,{offsetX:m,offsetY:v}=n,a=e.value.getBoundingClientRect(),f=a.left,S=a.top,P=a.width,O=a.height,z=document.documentElement.clientWidth,_=document.documentElement.clientHeight,N=-f+m,A=-S+v,M=z-f-P+m,T=_-S-O+v,R=w=>{const i=Math.min(Math.max(m+w.clientX-d,N),M),g=Math.min(Math.max(v+w.clientY-p,A),T);n={offsetX:i,offsetY:g},e.value.style.transform=`translate(${G(i)}, ${G(g)})`},h=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",h)},u=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",l)},c=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",l)};ue(()=>{Ee(()=>{s.value?u():c()})}),ke(()=>{c()})},st=()=>{},nt=Array.isArray,lt=e=>typeof e=="function";let at;function it(e,t=at){t&&t.active&&t.effects.push(e)}const rt=e=>{const t=new Set(e);return t.w=0,t.n=0,t},he=e=>(e.w&k)>0,ye=e=>(e.n&k)>0,ct=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=k},ut=e=>{const{deps:t}=e;if(t.length){let s=0;for(let n=0;n<t.length;n++){const l=t[n];he(l)&&!ye(l)?l.delete(e):t[s++]=l,l.w&=~k,l.n&=~k}t.length=s}};let Y=0,k=1;const ee=30;let b;class dt{constructor(t,s=null,n){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,it(this,n)}run(){if(!this.active)return this.fn();let t=b,s=X;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=b,b=this,X=!0,k=1<<++Y,Y<=ee?ct(this):re(this),this.fn()}finally{Y<=ee&&ut(this),k=1<<--Y,b=this.parent,X=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b===this?this.deferStop=!0:this.active&&(re(this),this.onStop&&this.onStop(),this.active=!1)}}function re(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let X=!0;function ft(e,t){let s=!1;Y<=ee?ye(e)||(e.n|=k,s=!he(e)):s=!e.has(b),s&&(e.add(b),b.deps.push(e))}function mt(e,t){const s=nt(e)?e:[...e];for(const n of s)n.computed&&ce(n);for(const n of s)n.computed||ce(n)}function ce(e,t){(e!==b||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function pt(e){X&&b&&(e=H(e),ft(e.dep||(e.dep=rt())))}function vt(e,t){e=H(e);const s=e.dep;s&&mt(s)}var ge;class ht{constructor(t,s,n,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[ge]=!1,this._dirty=!0,this.effect=new dt(t,()=>{this._dirty||(this._dirty=!0,vt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=n}get value(){const t=H(this);return pt(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ge="__v_isReadonly";function yt(e,t,s=!1){let n,l;const u=lt(e);return u?(n=e,l=st):(n=e.get,l=e.set),new ht(n,l,u||!l,s)}const gt=e=>{Se(e)||Me("[useLockscreen]","You need to pass a ref param to this function");const t=te("popup"),s=yt(()=>t.bm("parent","hidden"));if(!de||se(document.body,s.value))return;let n=0,l=!1,u="0";const c=()=>{setTimeout(()=>{Be(document==null?void 0:document.body,s.value),l&&document&&(document.body.style.width=u)},200)};K(e,r=>{if(!r){c();return}l=!se(document.body,s.value),l&&(u=document.body.style.width),n=tt(t.namespace.value);const d=document.documentElement.clientHeight<document.body.scrollHeight,p=Te(document.body,"overflowY");n>0&&(d||p==="scroll")&&l&&(document.body.style.width=`calc(100% - ${n}px)`),De(document.body,s.value)}),Ie(()=>c())},be=e=>{if(!e)return{onClick:W,onMousedown:W,onMouseup:W};let t=!1,s=!1;return{onClick:c=>{t&&s&&e(c),t=s=!1},onMousedown:c=>{t=c.target===c.currentTarget},onMouseup:c=>{s=c.target===c.currentTarget}}},bt=oe({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:Z([String,Array,Object])},zIndex:{type:Z([String,Number])}}),Ct={click:e=>e instanceof MouseEvent};var wt=x({name:"ElOverlay",props:bt,emits:Ct,setup(e,{slots:t,emit:s}){const n=te("overlay"),l=d=>{s("click",d)},{onClick:u,onMousedown:c,onMouseup:r}=be(e.customMaskEvent?void 0:l);return()=>e.mask?V("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:u,onMousedown:c,onMouseup:r},[C(t,"default")],j.STYLE|j.CLASS|j.PROPS,["onClick","onMouseup","onMousedown"]):$e("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[C(t,"default")])}});const Et=wt,Ce=oe({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:_e},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),kt={close:()=>!0},St=["aria-label"],Mt=["id"],Tt=x({name:"ElDialogContent"}),Dt=x({...Tt,props:Ce,emits:kt,setup(e){const t=e,{t:s}=Ae(),{Close:n}=Oe,{dialogRef:l,headerRef:u,bodyId:c,ns:r,style:d}=ne(ve),{focusTrapRef:p}=ne(Re),m=ze(p,l),v=L(()=>t.draggable);return ot(l,u,v),(a,f)=>(F(),q("div",{ref:o(m),class:E([o(r).b(),o(r).is("fullscreen",a.fullscreen),o(r).is("draggable",o(v)),o(r).is("align-center",a.alignCenter),{[o(r).m("center")]:a.center},a.customClass]),style:fe(o(d)),tabindex:"-1"},[U("header",{ref_key:"headerRef",ref:u,class:E(o(r).e("header"))},[C(a.$slots,"header",{},()=>[U("span",{role:"heading",class:E(o(r).e("title"))},Fe(a.title),3)]),a.showClose?(F(),q("button",{key:0,"aria-label":o(s)("el.dialog.close"),class:E(o(r).e("headerbtn")),type:"button",onClick:f[0]||(f[0]=S=>a.$emit("close"))},[V(o(Pe),{class:E(o(r).e("close"))},{default:B(()=>[(F(),J(Le(a.closeIcon||o(n))))]),_:1},8,["class"])],10,St)):Q("v-if",!0)],2),U("div",{id:o(c),class:E(o(r).e("body"))},[C(a.$slots,"default")],10,Mt),a.$slots.footer?(F(),q("footer",{key:0,class:E(o(r).e("footer"))},[C(a.$slots,"footer")],2)):Q("v-if",!0)],6))}});var It=me(Dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Bt=oe({...Ce,appendToBody:{type:Boolean,default:!1},beforeClose:{type:Z(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),$t={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[pe]:e=>Ne(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},_t=(e,t)=>{const n=Ue().emit,{nextZIndex:l}=Ye();let u="";const c=le(),r=le(),d=$(!1),p=$(!1),m=$(!1),v=$(e.zIndex||l());let a,f;const S=Ve("namespace",Xe),P=L(()=>{const y={},I=`--${S.value}-dialog`;return e.fullscreen||(e.top&&(y[`${I}-margin-top`]=e.top),e.width&&(y[`${I}-width`]=G(e.width))),y}),O=L(()=>e.alignCenter?{display:"flex"}:{});function z(){n("opened")}function _(){n("closed"),n(pe,!1),e.destroyOnClose&&(m.value=!1)}function N(){n("close")}function A(){f==null||f(),a==null||a(),e.openDelay&&e.openDelay>0?{stop:a}=ae(()=>h(),e.openDelay):h()}function M(){a==null||a(),f==null||f(),e.closeDelay&&e.closeDelay>0?{stop:f}=ae(()=>w(),e.closeDelay):w()}function T(){function y(I){I||(p.value=!0,d.value=!1)}e.beforeClose?e.beforeClose(y):M()}function R(){e.closeOnClickModal&&T()}function h(){de&&(d.value=!0)}function w(){d.value=!1}function i(){n("openAutoFocus")}function g(){n("closeAutoFocus")}function D(y){var I;((I=y.detail)==null?void 0:I.focusReason)==="pointer"&&y.preventDefault()}e.lockScroll&&gt(d);function we(){e.closeOnPressEscape&&T()}return K(()=>e.modelValue,y=>{y?(p.value=!1,A(),m.value=!0,v.value=e.zIndex?v.value++:l(),xe(()=>{n("open"),t.value&&(t.value.scrollTop=0)})):d.value&&M()}),K(()=>e.fullscreen,y=>{t.value&&(y?(u=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=u)}),ue(()=>{e.modelValue&&(d.value=!0,m.value=!0,A())}),{afterEnter:z,afterLeave:_,beforeLeave:N,handleClose:T,onModalClick:R,close:M,doClose:w,onOpenAutoFocus:i,onCloseAutoFocus:g,onCloseRequested:we,onFocusoutPrevented:D,titleId:c,bodyId:r,closed:p,style:P,overlayDialogStyle:O,rendered:m,visible:d,zIndex:v}},At=["aria-label","aria-labelledby","aria-describedby"],Rt=x({name:"ElDialog",inheritAttrs:!1}),Ft=x({...Rt,props:Bt,emits:$t,setup(e,{expose:t}){const s=e,n=He();ie({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},L(()=>!!n.title)),ie({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},L(()=>!!s.customClass));const l=te("dialog"),u=$(),c=$(),r=$(),{visible:d,titleId:p,bodyId:m,style:v,overlayDialogStyle:a,rendered:f,zIndex:S,afterEnter:P,afterLeave:O,beforeLeave:z,handleClose:_,onModalClick:N,onOpenAutoFocus:A,onCloseAutoFocus:M,onCloseRequested:T,onFocusoutPrevented:R}=_t(s,u);We(ve,{dialogRef:u,headerRef:c,bodyId:m,ns:l,rendered:f,style:v});const h=be(N),w=L(()=>s.draggable&&!s.fullscreen);return t({visible:d,dialogContentRef:r}),(i,g)=>(F(),J(Qe,{to:"body",disabled:!i.appendToBody},[V(Je,{name:"dialog-fade",onAfterEnter:o(P),onAfterLeave:o(O),onBeforeLeave:o(z),persisted:""},{default:B(()=>[je(V(o(Et),{"custom-mask-event":"",mask:i.modal,"overlay-class":i.modalClass,"z-index":o(S)},{default:B(()=>[U("div",{role:"dialog","aria-modal":"true","aria-label":i.title||void 0,"aria-labelledby":i.title?void 0:o(p),"aria-describedby":o(m),class:E(`${o(l).namespace.value}-overlay-dialog`),style:fe(o(a)),onClick:g[0]||(g[0]=(...D)=>o(h).onClick&&o(h).onClick(...D)),onMousedown:g[1]||(g[1]=(...D)=>o(h).onMousedown&&o(h).onMousedown(...D)),onMouseup:g[2]||(g[2]=(...D)=>o(h).onMouseup&&o(h).onMouseup(...D))},[V(o(qe),{loop:"",trapped:o(d),"focus-start-el":"container",onFocusAfterTrapped:o(A),onFocusAfterReleased:o(M),onFocusoutPrevented:o(R),onReleaseRequested:o(T)},{default:B(()=>[o(f)?(F(),J(It,Ge({key:0,ref_key:"dialogContentRef",ref:r},i.$attrs,{"custom-class":i.customClass,center:i.center,"align-center":i.alignCenter,"close-icon":i.closeIcon,draggable:o(w),fullscreen:i.fullscreen,"show-close":i.showClose,title:i.title,onClose:o(_)}),Ke({header:B(()=>[i.$slots.title?C(i.$slots,"title",{key:1}):C(i.$slots,"header",{key:0,close:o(_),titleId:o(p),titleClass:o(l).e("title")})]),default:B(()=>[C(i.$slots,"default")]),_:2},[i.$slots.footer?{name:"footer",fn:B(()=>[C(i.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):Q("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,At)]),_:3},8,["mask","overlay-class","z-index"]),[[Ze,o(d)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Lt=me(Ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const zt=et(Lt);export{zt as E};
