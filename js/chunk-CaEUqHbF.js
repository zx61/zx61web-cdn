import{d as se,u as ne,v as ie,Q as de,r as h,e as $,o as m,c as I,b as g,t as p,f as s,g as n,w as i,h as ue,p as me,a as ce,i as y,j as v,k as C,F as q,l as T,s as Q,m as R,E as c,n as W,q as pe,x as ge,y as fe,z as ve,A as ye,B as we,_ as be}from"./chunk-bN8bH30D.js";import{E as _e}from"./chunk-BkShT7WH.js";import{E as Ce,a as he}from"./chunk-CJ6aAzYL.js";import{E as Ee}from"./chunk-BpzVLdka.js";import{E as Ve}from"./chunk-Cch2kbmk.js";import{E as Ue}from"./chunk-Dh26Qr1W.js";import{_ as Ne}from"./chunk-Di5dVj9Q.js";import{r as z,a as ke,b as G,d as U}from"./chunk-3qytWtpQ.js";import{m as Y,b as xe,p as Oe,a as Ie,o as Pe,w as Se,c as De,h as Me,d as je,s as Re,g as Ye,e as Ae,i as J,f as Be}from"./chunk-SW_GC0TU.js";import"./chunk-BB_Ol6Sd.js";import"./chunk-mWAOJ9ad.js";import"./chunk-D9wEq4bu.js";import"./chunk-DfdmAFhS.js";import"./chunk-DA9cNxaC.js";import"./chunk-Cc-YmMIf.js";import"./chunk-BUg6px7m.js";const Le=N=>(me("data-v-0054cc80"),N=N(),ce(),N),Fe={class:"bigBox"},$e={class:"box",ref:"box"},qe={class:"pre-box"},Te={class:"text_markedness"},Qe=Le(()=>g("div",{class:"img-box"},[g("img",{src:Ne,id:"avatar"})],-1)),We={class:"login-form"},ze={class:"formLogin"},Ge={key:0,target:"_blank",href:"/documents/getInvitedCode",style:{"text-decoration":"none"}},Je={style:{display:"flex"}},He={target:"_blank",href:"/documents/privacyPolicy",style:{"text-decoration":"none"}},Ke={target:"_blank",href:"/documents/serviceAgreement",style:{"text-decoration":"none"}},Xe=se({__name:"index",setup(N){var F;const P=ne(),{t:a}=ie.useI18n(),S=ue();P.getUserItem(de)&&S.push("/account");const D=h(!0),u=h(!1),f=h(!1),E=h(a("utils.send")),A=h(),o=$({emailOrUserName:"",password:"",emailCode:"",rePassword:"",birthday:"",inviteCode:((F=S.currentRoute.value.query.invite)==null?void 0:F.toString())||""}),H=$({emailOrUserName:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.emailOrUserNameNull"))),u.value&&(z(e)||t(new Error(a("login.errorEmail")))),u.value||!z(e)&&!ke(e)&&t(new Error(a("login.errorEmailOrUserName"))),t()},trigger:"blur"}],emailCode:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.emailCodeNull"))),isNaN(Number(e))&&t(new Error(a("login.errorEmailCode"))),t()},trigger:"blur"}],password:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.passwordNull"))),G(e)||t(new Error(a("login.errorPassword"))),t()},trigger:"blur"}],rePassword:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.passwordNull"))),G(e)||t(new Error(a("login.errorPassword"))),e!=o.password&&t(new Error(a("login.eeSetPasswordNotMatch"))),t()},trigger:"blur"}],birthday:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.birthdayNull"))),U(e).add(18,"y")<U()?t():t(new Error(a("login.nonageTip")))},trigger:"blur"}],inviteCode:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.inviteCodeNull"))),t()},trigger:"blur"}]}),k=()=>D.value?!0:(c.error(a("login.readUserAgreement")),!1),M=async()=>{var e;return await((e=A.value)==null?void 0:e.validate(t=>(t||c.error(a("login.errorData")),t)))},j=async()=>{if(P.getUserItem("qsession")){const l=await ye();l&&l.data.msg!="user not login"&&(P.setUser(l.data.data),setTimeout(()=>{S.push("/account")},100))}},K=async()=>{if(!k()||!await M())return;let l;f.value?l={type:"emailCode",emailOrUserName:o.emailOrUserName,emailCode:Number(o.emailCode),birthday:U(o.birthday).valueOf()}:l={type:"account",emailOrUserName:o.emailOrUserName,password:Q.sm3(o.password)};const e=await R(l);if(e.data.msg)c.error(e.data.msg);else if(e.data.data=="needEmailValidate"){f.value=!0,c.warning(a("login.needEmailValidate"));return}else j()},X=async()=>{if(!k()||!await M())return;if(f.value){c.warning(a("login.subAccountCant"));return}const l={type:"subAccount",emailOrUserName:o.emailOrUserName,password:Q.sm3(o.password)},e=await R(l);e.data.msg?c.error(e.data.msg):j()};let V=Y;const x=h(!1),B={mainnet:Y,bsc:xe,polygon:Oe,arbitrum:Ie,okc:Pe},O={metaMask:"MetaMask",walletConnect:"WalletConnect",coinbase:"Coinbase",injected:"Injected"},Z=l=>{x.value=!1,l=="mainnet"?V=Y:V=B[l];const t=Se({projectId:we});L(t)},L=l=>{const e=Math.random().toString(36).slice(-6),t="login to quejinqiu "+e,d=De({chains:[V],connectors:[l],transports:{[V.id]:Me()}});je(d,{chainId:V.id,connector:l}).then(async()=>{Re(d,{message:t}).then(async b=>{const w={type:"erc20Sign",address:Ye(d).address,personalsign:b,password:e};Ae(d);const _=await R(w);if(_.data.msg)c.error(_.data.msg);else if(_.data.data=="needEmailValidate"){f.value=!0,c.warning(a("login.needEmailValidate"));return}else j()})})},ee=l=>{if(k())if(l==O.walletConnect)x.value=!0;else{let e;switch(e=J(),l){case O.metaMask:e=J({target:"metaMask"});break;case O.coinbase:e=Be({appName:"QueJinQiu"});break}L(e)}},ae=async()=>{if(!k()||!await M())return;const l={email:o.emailOrUserName,password:W(o.password,o.emailOrUserName),rePassword:W(o.rePassword,U(o.birthday).valueOf().toString()),birthday:U(o.birthday).valueOf(),inviteCode:o.inviteCode,avatar:pe()},e=await ge(l);e.data.data=="sucess"?(c.success(a("login.registerSuccess")),u.value=!1,f.value=!0):c.error(e.data.msg)},te=async()=>{if(E.value!=a("utils.send")&&E.value!=a("utils.reSend"))return;let l=60;const e=()=>{--l>0?(E.value=l.toString(),setTimeout(e,1e3)):E.value=a("utils.reSend")};e();const t=await fe({emailOrUserName:o.emailOrUserName});t.data.data=="success"?c.success(a("login.sendCodeSuccess")):(c.error(t.data.msg),t.data.msg=="sendEmailCode fail"&&c.error("server error"))};return(l,e)=>{const t=Ue,d=he,b=Ve,w=ve,_=Ee,oe=Ce,re=_e;return m(),I("div",Fe,[g("div",$e,[g("div",qe,[g("h1",null,p(s(a)("login.welcoming")),1),g("div",Te,p(s(a)("login.announcement")),1),Qe]),g("div",We,[g("h1",null,p(s(a)("utils.login")),1),g("div",ze,[n(oe,{"label-width":"100px",model:o,rules:H,ref_key:"loginFormRef",ref:A},{default:i(()=>[n(d,{class:"hasCheckbox"},{default:i(()=>[n(t,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=r=>u.value=r),label:s(a)("login.toRegister")},null,8,["modelValue","label"]),u.value?(m(),I("a",Ge,"     "+p(s(a)("login.howGetInvitedCode")),1)):y("",!0)]),_:1}),n(d,{label:u.value?s(a)("login.email"):s(a)("login.emailOrUserName"),prop:"emailOrUserName"},{default:i(()=>[n(b,{modelValue:o.emailOrUserName,"onUpdate:modelValue":e[1]||(e[1]=r=>o.emailOrUserName=r)},null,8,["modelValue"])]),_:1},8,["label"]),!u.value&&f.value?(m(),v(d,{key:0,label:s(a)("account.emailCode"),prop:"emailCode"},{default:i(()=>[n(b,{modelValue:o.emailCode,"onUpdate:modelValue":e[2]||(e[2]=r=>o.emailCode=r),style:{width:"76%"}},null,8,["modelValue"]),n(w,{style:{width:"20%",margin:"0 0 0 4%"},type:"primary",onClick:e[3]||(e[3]=r=>te())},{default:i(()=>[C(p(E.value),1)]),_:1})]),_:1},8,["label"])):y("",!0),!f.value||u.value?(m(),v(d,{key:1,label:s(a)("account.password"),prop:"password"},{default:i(()=>[n(b,{modelValue:o.password,"onUpdate:modelValue":e[4]||(e[4]=r=>o.password=r),type:"password"},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),u.value?(m(),v(d,{key:2,label:s(a)("account.rePassword"),prop:"rePassword"},{default:i(()=>[n(b,{modelValue:o.rePassword,"onUpdate:modelValue":e[5]||(e[5]=r=>o.rePassword=r),type:"password"},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),u.value||f.value?(m(),v(d,{key:3,prop:"birthday",label:s(a)("utils.birthday")},{default:i(()=>[g("div",Je,[n(_,{type:"year",placeholder:s(a)("utils.year"),"value-format":"YYYY-MM-DD",modelValue:o.birthday,"onUpdate:modelValue":e[6]||(e[6]=r=>o.birthday=r),style:{width:"28%"}},null,8,["placeholder","modelValue"]),n(_,{type:"month",placeholder:s(a)("utils.month"),format:"MM","value-format":"YYYY-MM-DD",modelValue:o.birthday,"onUpdate:modelValue":e[7]||(e[7]=r=>o.birthday=r),style:{width:"32%"}},null,8,["placeholder","modelValue"]),n(_,{type:"date",placeholder:s(a)("utils.date"),format:"DD","value-format":"YYYY-MM-DD",modelValue:o.birthday,"onUpdate:modelValue":e[8]||(e[8]=r=>o.birthday=r),style:{width:"40%"}},null,8,["placeholder","modelValue"])])]),_:1},8,["label"])):y("",!0),u.value?(m(),v(d,{key:4,label:s(a)("account.inviteCode"),prop:"inviteCode"},{default:i(()=>[n(b,{modelValue:o.inviteCode,"onUpdate:modelValue":e[9]||(e[9]=r=>o.inviteCode=r)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),n(d,{class:"hasCheckbox"},{default:i(()=>[n(t,{modelValue:D.value,"onUpdate:modelValue":e[10]||(e[10]=r=>D.value=r),label:s(a)("login.checkboxText")},null,8,["modelValue","label"]),g("a",He," 【"+p(s(a)("login.privacyPolicy"))+"】 ",1),C(" 和 "),g("a",Ke," 【"+p(s(a)("login.serviceAgreement"))+"】 ",1)]),_:1}),u.value?y("",!0):(m(),v(d,{key:5},{default:i(()=>[n(t,{modelValue:f.value,"onUpdate:modelValue":e[11]||(e[11]=r=>f.value=r),label:s(a)("login.emailCodeLogin")},null,8,["modelValue","label"])]),_:1})),u.value?y("",!0):(m(),v(d,{key:6},{default:i(()=>[n(w,{type:"primary",onClick:e[12]||(e[12]=r=>K())},{default:i(()=>[C("   "+p(s(a)("utils.login"))+"    ",1)]),_:1}),n(w,{type:"primary",onClick:e[13]||(e[13]=r=>X())},{default:i(()=>[C(p(s(a)("login.subAccountLogin")),1)]),_:1})]),_:1})),!u.value&&!f.value?(m(),v(d,{key:7,label:s(a)("login.ERC20Login")},{default:i(()=>[(m(!0),I(q,null,T(Object.values(O),r=>(m(),v(w,{type:"success",onClick:le=>ee(r)},{default:i(()=>[C(p(r),1)]),_:2},1032,["onClick"]))),256))]),_:1},8,["label"])):y("",!0),u.value?(m(),v(d,{key:8},{default:i(()=>[n(w,{type:"primary",onClick:e[14]||(e[14]=r=>ae())},{default:i(()=>[C("   "+p(s(a)("utils.register"))+"   ",1)]),_:1})]),_:1})):y("",!0)]),_:1},8,["model","rules"])])])],512),n(re,{"align-center":"","destroy-on-close":"",title:s(a)("login.selectChain"),modelValue:x.value,"onUpdate:modelValue":e[15]||(e[15]=r=>x.value=r),style:{"max-width":"480px"}},{default:i(()=>[(m(!0),I(q,null,T(Object.keys(B),r=>(m(),v(w,{color:"#626aef",plain:"",onClick:le=>Z(r)},{default:i(()=>[C(p(r),1)]),_:2},1032,["onClick"]))),256))]),_:1},8,["title","modelValue"])])}}}),Ca=be(Xe,[["__scopeId","data-v-0054cc80"]]);export{Ca as default};
