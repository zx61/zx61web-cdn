import{d as L,v as Q,u as W,h as X,e as A,r as c,ad as Z,bk as h,E as m,o as ee,c as ae,b as S,t as d,f as s,k as i,g as o,w as u,F as te,bg as le,bl as oe,n as I,bm as se,bn as re,z as ue}from"./chunk-CiXiLY6i.js";import{E as ne,a as de}from"./chunk-Cmm04hk2.js";import{E as ie}from"./chunk-CgMOe_F9.js";import{E as me}from"./chunk-Dsavw2Jh.js";import{E as ce}from"./chunk-DQjeel_c.js";/* empty css              */import{a as pe,E as fe}from"./chunk-CIPY7b2G.js";import{E as ve,a as be}from"./chunk-BkgKV4SP.js";import"./chunk-BA0i8Rbs.js";import"./chunk-BVnJ0uqN.js";import{d as f,a as ge,b as R}from"./chunk-D3m-NMro.js";import"./chunk-BB_Ol6Sd.js";import"./chunk-6DkFu1SN.js";import"./chunk-B8yhLA5U.js";import"./chunk-DWfLDXC-.js";const we={class:"text_markedness"},_e=S("br",null,null,-1),Me=L({__name:"index",setup(ye){const{t:a}=Q.useI18n(),y=W(),$=X();y.getUserItem("type")!="account"&&$.push("/account");const b=A([]),N=c(!1),n=A({userName:"",emailCode:"",password:"",rePassword:""}),O=c(),g=c(a("utils.send")),T=A({userName:[{validator:(r,e,t)=>{e===""&&t(new Error(a("login.emailOrUserNameNull"))),ge(e)||t(new Error(a("login.errorEmailOrUserName"))),t()},trigger:"blur"}],emailCode:[{validator:(r,e,t)=>{e===""&&t(new Error(a("login.emailCodeNull"))),isNaN(Number(e))&&t(new Error(a("login.errorEmailCode"))),t()},trigger:"blur"}],password:[{validator:(r,e,t)=>{e===""&&t(new Error(a("login.passwordNull"))),R(e)||t(new Error(a("login.errorPassword"))),t()},trigger:"blur"}],rePassword:[{validator:(r,e,t)=>{e===""&&t(new Error(a("login.passwordNull"))),R(e)||t(new Error(a("login.errorPassword"))),e!=n.password&&t(new Error(a("login.eeSetPasswordNotMatch"))),t()},trigger:"blur"}]}),Y=async()=>{if(g.value!=a("utils.send")&&g.value!=a("utils.reSend"))return;let r=60;const e=()=>{--r>0?(g.value=r.toString(),setTimeout(e,1e3)):g.value=a("utils.reSend")};e();const t=await le();t.data.data=="success"?m.success(a("login.sendCodeSuccess")):(m.error(t.data.msg),t.data.msg=="sendEmailCode fail"&&m.error("server error"))},B=async()=>{var t;if(!await((t=O.value)==null?void 0:t.validate(p=>(p||m.error(a("login.errorData")),p))))return;const e=await oe({userName:n.userName,emailCode:Number(n.emailCode),password:I(n.password,y.getUserItem("email")),rePassword:I(n.rePassword,y.getUserItem("birthday"))});e.data.msg?m.error(e.data.msg):(b.push({sercetKey:e.data.data.sercetKey,userName:e.data.data.userName,status:a("account.normal")}),N.value=!1)},E=c(0),U=c({}),V=c(!1),v=c(100),k=c(f().toDate()),F=(r,e)=>{V.value=!0,U.value=r,E.value=e},M=()=>{v.value==999&&(v.value=f(k.value).valueOf()),v.value==1e3&&(v.value=f().add(100,"year").valueOf()),se({userName:U.value.userName,blockUp:v.value}).then(r=>{r.data.msg?m.error(r.data.msg):(m.success(a("account.blockUp")+a("account.success")),b[E.value].status=f(Number(r.data.data.blockUp)).valueOf()<f().valueOf()?a("account.normal"):a("account.blockUp")+"-->"+f(Number(r.data.data.blockUp)).format("YYYY-MM-DD HH:mm:ss"),V.value=!1)})},C=c(!1),x=c(""),K=(r,e)=>{C.value=!0,U.value=r,E.value=e},H=()=>{const r=y.getUserItem("email");if(x.value!=r)return m.error(a("login.errorData"));re({userName:U.value.userName}).then(e=>{e.data.msg?m.error(e.data.msg):(m.success(a("utils.delete")+a("account.success")),b.splice(E.value,1),C.value=!1)})};return Z(()=>{h().then(r=>{r.data.msg?m.error(r.data.msg):r.data.data.forEach(t=>{const p=f(Number(t.blockUp)).valueOf()<f().valueOf()?a("account.normal"):a("account.blockUp")+"-->"+f(Number(t.blockUp)).format("YYYY-MM-DD HH:mm:ss");b.push({sercetKey:t.sercetKey,userName:t.userName,status:p})})})}),(r,e)=>{const t=ue,p=ve,j=be,w=me,_=pe,q=fe,D=ce,P=ne,z=ie,G=de;return ee(),ae(te,null,[S("h1",null,d(s(a)("menu.subAccount")),1),S("div",we,[i(d(s(a)("account.subAccountTip"))+" ",1),o(t,{type:"primary",style:{"margin-top":"1em","margin-bottom":"1em"},onClick:e[0]||(e[0]=l=>N.value=!0)},{default:u(()=>[i(d(s(a)("account.create")+s(a)("menu.subAccount")),1)]),_:1})]),o(j,{data:b},{default:u(()=>[o(p,{type:"expand"},{default:u(l=>[i(d(s(a)("account.sercetKey")+"  "+l.row.sercetKey),1)]),_:1}),o(p,{prop:"userName",label:s(a)("login.userName")},null,8,["label"]),o(p,{prop:"status",label:s(a)("utils.status")},null,8,["label"]),o(p,{label:s(a)("utils.operation")},{default:u(l=>[o(t,{type:"primary",link:"",onClick:J=>F(l.row,l.$index)},{default:u(()=>[i(d(s(a)("account.blockUp")),1)]),_:2},1032,["onClick"]),o(t,{type:"danger",link:"",onClick:J=>K(l.row,l.$index)},{default:u(()=>[i(d(s(a)("utils.delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),o(D,{modelValue:N.value,"onUpdate:modelValue":e[7]||(e[7]=l=>N.value=l),"align-center":"","destroy-on-close":"",style:{"max-width":"600px"},title:s(a)("account.create")+s(a)("menu.subAccount")},{default:u(()=>[o(q,{style:{"max-width":"500px"},"label-width":"100px",model:n,rules:T,ref_key:"subAccountFormRef",ref:O},{default:u(()=>[o(_,{label:s(a)("login.userName"),prop:"userName"},{default:u(()=>[o(w,{modelValue:n.userName,"onUpdate:modelValue":e[1]||(e[1]=l=>n.userName=l)},null,8,["modelValue"])]),_:1},8,["label"]),o(_,{label:s(a)("account.emailCode"),prop:"emailCode"},{default:u(()=>[o(w,{style:{width:"76%"},modelValue:n.emailCode,"onUpdate:modelValue":e[2]||(e[2]=l=>n.emailCode=l)},null,8,["modelValue"]),o(t,{style:{width:"20%",margin:"0 0 0 4%"},type:"primary",onClick:e[3]||(e[3]=l=>Y())},{default:u(()=>[i(d(g.value),1)]),_:1})]),_:1},8,["label"]),o(_,{label:s(a)("account.password"),prop:"password"},{default:u(()=>[o(w,{modelValue:n.password,"onUpdate:modelValue":e[4]||(e[4]=l=>n.password=l),type:"password"},null,8,["modelValue"])]),_:1},8,["label"]),o(_,{label:s(a)("account.rePassword"),prop:"rePassword"},{default:u(()=>[o(w,{modelValue:n.rePassword,"onUpdate:modelValue":e[5]||(e[5]=l=>n.rePassword=l),type:"password"},null,8,["modelValue"])]),_:1},8,["label"]),o(_,null,{default:u(()=>[o(t,{type:"primary",onClick:e[6]||(e[6]=l=>B())},{default:u(()=>[i(d(s(a)("utils.save")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),o(D,{modelValue:V.value,"onUpdate:modelValue":e[11]||(e[11]=l=>V.value=l),"align-center":"","destroy-on-close":"",style:{"max-width":"600px"},title:s(a)("account.blockUp")+s(a)("menu.subAccount")},{default:u(()=>[o(G,{modelValue:v.value,"onUpdate:modelValue":e[9]||(e[9]=l=>v.value=l)},{default:u(()=>[o(P,{label:100},{default:u(()=>[i(d(s(a)("account.startUse")),1)]),_:1}),o(P,{label:1e3},{default:u(()=>[i(" 100"+d(s(a)("utils.year")),1)]),_:1}),o(P,{label:999},{default:u(()=>[o(z,{modelValue:k.value,"onUpdate:modelValue":e[8]||(e[8]=l=>k.value=l),type:"datetime",style:{width:"180px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),_e,o(t,{type:"primary",style:{"margin-top":"1em"},onClick:e[10]||(e[10]=l=>M())},{default:u(()=>[i(d(s(a)("utils.save")),1)]),_:1})]),_:1},8,["modelValue","title"]),o(D,{modelValue:C.value,"onUpdate:modelValue":e[14]||(e[14]=l=>C.value=l),"align-center":"","destroy-on-close":"",style:{"max-width":"600px"},title:s(a)("utils.delete")+s(a)("menu.subAccount")},{default:u(()=>[i(d(s(a)("account.deleteTip"))+" ",1),o(w,{modelValue:x.value,"onUpdate:modelValue":e[12]||(e[12]=l=>x.value=l)},null,8,["modelValue"]),o(t,{type:"primary",style:{"margin-top":"1em"},onClick:e[13]||(e[13]=l=>H())},{default:u(()=>[i(d(s(a)("utils.save")),1)]),_:1})]),_:1},8,["modelValue","title"])],64)}}});export{Me as default};
