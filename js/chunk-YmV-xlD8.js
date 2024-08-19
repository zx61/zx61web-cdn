import{d as T,v as Y,u as j,r as v,e as I,ad as k,bf as q,o as E,c as x,b as y,t as i,f as t,i as N,j as A,w as n,k as C,g as s,F as $,bg as H,E as u,bh as z,n as h,z as G,p as J,a as K,_ as O}from"./chunk-Czqc0dE8.js";import{E as Q,a as W}from"./chunk-fOJCMQd6.js";import"./chunk-BB8cIw-t.js";import"./chunk-7TUX3IvC.js";import{E as X}from"./chunk-B2R6DWAK.js";import{a as Z,E as ee}from"./chunk-CLZwLkAm.js";import{E as oe}from"./chunk-CWG-aGsG.js";import{d as ae,b as S}from"./chunk-DF74Qcfv.js";import"./chunk--j5HiCuQ.js";import"./chunk-DNlyfVOr.js";import"./chunk-BB_Ol6Sd.js";const U=c=>(J("data-v-1a758fb3"),c=c(),K(),c),se=U(()=>y("br",null,null,-1)),te=U(()=>y("br",null,null,-1)),re={key:0},le=T({__name:"index",setup(c){const{t:o}=Y.useI18n(),m=j(),f=v([]),P=m.getUserItem("type")&&m.getUserItem("type")!="subAccount",p=v(o("utils.send")),l=I({emailCode:"",password:"",rePassword:""}),V=v(),w=v(!1),F=I({emailCode:[{validator:(r,e,a)=>{e===""&&a(new Error(o("login.emailCodeNull"))),isNaN(Number(e))&&a(new Error(o("login.errorEmailCode"))),a()},trigger:"blur"}],password:[{validator:(r,e,a)=>{e===""&&a(new Error(o("login.passwordNull"))),S(e)||a(new Error(o("login.errorPassword"))),a()},trigger:"blur"}],rePassword:[{validator:(r,e,a)=>{e===""&&a(new Error(o("login.passwordNull"))),S(e)||a(new Error(o("login.errorPassword"))),e!=l.password&&a(new Error(o("login.eeSetPasswordNotMatch"))),a()},trigger:"blur"}]}),D=async()=>{const r=await H();if(r.data.data=="success"){if(u.success(o("login.sendCodeSuccess")),p.value!=o("utils.send")&&p.value!=o("utils.reSend"))return;let e=60;const a=()=>{--e>0?(p.value=e.toString(),setTimeout(a,1e3)):p.value=o("utils.reSend")};a()}else u.error(r.data.msg),r.data.msg=="sendEmailCode fail"&&u.error("server error")},B=async()=>{if(!await V.value.validate(a=>(a||u.error(o("login.errorData")),a)))return;const e=await z({emailCode:Number(l.emailCode),password:h(l.password,m.getUserItem("email")),rePassword:h(l.rePassword,m.getUserItem("birthday"))});e.data.msg?u.error(e.data.msg):(u.success(e.data.data),w.value=!1)};return k(async()=>{if(m.getUserItem("qsession")){const r=await q();if(r&&r.data.msg!="user not login"){f.value=r.data.data.operationLogs;for(let e=0;e<f.value.length;e++){const a=f.value[e];a.timestamp=ae(a.timestamp).format("YYYY-MM-DD HH:mm:ss")}}}}),(r,e)=>{const a=G,b=oe,g=Z,M=ee,R=X,_=Q,L=W;return E(),x($,null,[y("h1",null,i(t(o)("utils.securityCenter")),1),se,te,t(P)?(E(),x("h2",re,i(t(o)("account.changePassword")),1)):N("",!0),t(P)?(E(),A(a,{key:1,type:"primary",onClick:e[0]||(e[0]=d=>w.value=!0),style:{"margin-left":"1rem"}},{default:n(()=>[C(i(t(o)("account.changePassword")),1)]),_:1})):N("",!0),s(R,{modelValue:w.value,"onUpdate:modelValue":e[6]||(e[6]=d=>w.value=d),"align-center":"","destroy-on-close":"",style:{"max-width":"600px"},title:t(o)("account.changePassword")},{default:n(()=>[s(M,{class:"secuityForm","label-width":"100px",model:l,rules:F,ref_key:"securityFormRef",ref:V},{default:n(()=>[s(g,{label:t(o)("account.emailCode"),prop:"emailCode"},{default:n(()=>[s(b,{style:{width:"76%"},modelValue:l.emailCode,"onUpdate:modelValue":e[1]||(e[1]=d=>l.emailCode=d)},null,8,["modelValue"]),s(a,{style:{width:"20%",margin:"0 0 0 4%"},type:"primary",onClick:e[2]||(e[2]=d=>D())},{default:n(()=>[C(i(p.value),1)]),_:1})]),_:1},8,["label"]),s(g,{label:t(o)("account.password"),prop:"password"},{default:n(()=>[s(b,{modelValue:l.password,"onUpdate:modelValue":e[3]||(e[3]=d=>l.password=d),type:"password"},null,8,["modelValue"])]),_:1},8,["label"]),s(g,{label:t(o)("account.rePassword"),prop:"rePassword"},{default:n(()=>[s(b,{modelValue:l.rePassword,"onUpdate:modelValue":e[4]||(e[4]=d=>l.rePassword=d),type:"password"},null,8,["modelValue"])]),_:1},8,["label"]),s(g,null,{default:n(()=>[s(a,{type:"primary",onClick:e[5]||(e[5]=d=>B())},{default:n(()=>[C(i(t(o)("utils.save")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),y("h2",null,i(t(o)("account.operationLogs")),1),s(L,{data:f.value,"max-height":"500"},{default:n(()=>[s(_,{label:t(o)("account.operationLogs")},{default:n(()=>[s(_,{prop:"type",label:t(o)("account.type")},null,8,["label"]),s(_,{prop:"ipAddress",label:"ipAddress"}),s(_,{prop:"timestamp",label:t(o)("account.time")},null,8,["label"])]),_:1},8,["label"])]),_:1},8,["data"])],64)}}}),Ee=O(le,[["__scopeId","data-v-1a758fb3"]]);export{Ee as default};
