import{aO as m,r as _,aZ as g,ad as y,an as E,cx as N,d as h,a8 as C,ab as T,o as p,j as x,w as f,f as t,c as B,ah as S,I as v,Y as w,ag as M,g as b,J as $,cy as I,i as O,bA as z,ai as A,ap as H}from"./chunk-bN8bH30D.js";const P={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},V={click:a=>a instanceof MouseEvent},j=(a,i,l)=>{const e=m(),o=m(),n=_(!1),c=()=>{e.value&&(n.value=e.value.scrollTop>=a.visibilityHeight)},u=s=>{var d;(d=e.value)==null||d.scrollTo({top:0,behavior:"smooth"}),i("click",s)},r=N(c,300,!0);return g(o,"scroll",r),y(()=>{var s;o.value=document,e.value=document.documentElement,a.target&&(e.value=(s=document.querySelector(a.target))!=null?s:void 0,e.value||E(l,`target does not exist: ${a.target}`),o.value=e.value),c()}),{visible:n,handleClick:u}},k="ElBacktop",q=h({name:k}),F=h({...q,props:P,emits:V,setup(a,{emit:i}){const l=a,e=C("backtop"),{handleClick:o,visible:n}=j(l,i,k),c=T(()=>({right:`${l.right}px`,bottom:`${l.bottom}px`}));return(u,r)=>(p(),x(z,{name:`${t(e).namespace.value}-fade-in`},{default:f(()=>[t(n)?(p(),B("div",{key:0,style:S(t(c)),class:v(t(e).b()),onClick:r[0]||(r[0]=w((...s)=>t(o)&&t(o)(...s),["stop"]))},[M(u.$slots,"default",{},()=>[b(t($),{class:v(t(e).e("icon"))},{default:f(()=>[b(t(I))]),_:1},8,["class"])])],6)):O("v-if",!0)]),_:3},8,["name"]))}});var J=A(F,[["__file","backtop.vue"]]);const R=H(J);export{R as E};
