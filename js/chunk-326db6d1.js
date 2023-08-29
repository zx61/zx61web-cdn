import{d as re,u as se,e as ne,f as ie,Q as de,r as E,g as $,o as m,c as O,b as p,t as g,h as s,i as n,w as i,p as ue,a as me,j as w,k as f,l as C,F as q,m as T,s as W,n as R,E as c,q as Q,v as ce,x as ge,y as pe,z as fe,A as ve,B as we,_ as ye}from"./chunk-ac361598.js";import{E as _e}from"./chunk-2b0b8698.js";import{E as be,a as Ce}from"./chunk-4ef87021.js";import{E as Ee}from"./chunk-23d475b9.js";import{E as Ve}from"./chunk-8c574eaf.js";import{E as he}from"./chunk-e90af107.js";import{_ as Ne}from"./chunk-92cfb116.js";import{r as z,a as Ue,b as G,d as N}from"./chunk-b4221006.js";import{m as Y,b as ke,p as xe,a as Oe,o as Ie,W as Pe,I as Se,L as De,C as Me,M as Le}from"./chunk-a62250cc.js";import"./chunk-9519ab40.js";import"./chunk-9e9cd98f.js";import"./chunk-a4ba5bf7.js";import"./chunk-ee658bf4.js";const Re=U=>(ue("data-v-3dd85ee8"),U=U(),me(),U),Ye={class:"bigBox"},je={class:"box",ref:"box"},Be={class:"pre-box"},Ae={class:"text_markedness"},Fe=Re(()=>p("div",{class:"img-box"},[p("img",{src:Ne,id:"avatar"})],-1)),$e={class:"login-form"},qe={class:"formLogin"},Te={key:0,target:"_blank",href:"/documents/getInvitedCode",style:{"text-decoration":"none"}},We={style:{display:"flex"}},Qe={target:"_blank",href:"/documents/privacyPolicy",style:{"text-decoration":"none"}},ze={target:"_blank",href:"/documents/serviceAgreement",style:{"text-decoration":"none"}},Ge=re({__name:"index",setup(U){var F;const I=se(),{t:a}=ne(),P=ie();I.getUserItem(de)&&P.push("/account");const S=E(!1),d=E(!1),v=E(!1),V=E(a("utils.send")),j=E(),o=$({emailOrUserName:"",password:"",emailCode:"",rePassword:"",birthday:"",inviteCode:((F=P.currentRoute.value.query.invite)==null?void 0:F.toString())||""}),J=$({emailOrUserName:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.emailOrUserNameNull"))),d.value&&(z(e)||t(new Error(a("login.errorEmail")))),d.value||!z(e)&&!Ue(e)&&t(new Error(a("login.errorEmailOrUserName"))),t()},trigger:"blur"}],emailCode:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.emailCodeNull"))),isNaN(Number(e))&&t(new Error(a("login.errorEmailCode"))),t()},trigger:"blur"}],password:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.passwordNull"))),G(e)||t(new Error(a("login.errorPassword"))),t()},trigger:"blur"}],rePassword:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.passwordNull"))),G(e)||t(new Error(a("login.errorPassword"))),e!=o.password&&t(new Error(a("login.eeSetPasswordNotMatch"))),t()},trigger:"blur"}],birthday:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.birthdayNull"))),N(e).add(18,"y")<N()?t():t(new Error(a("login.nonageTip")))},trigger:"blur"}],inviteCode:[{validator:(l,e,t)=>{e===""&&t(new Error(a("login.inviteCodeNull"))),t()},trigger:"blur"}]}),k=()=>S.value?!0:(c.error(a("login.readUserAgreement")),!1),D=async()=>{var e;return await((e=j.value)==null?void 0:e.validate(t=>(t||c.error(a("login.errorData")),t)))},M=async()=>{if(I.getUserItem("qsession")){const l=await ve();l&&l.data.msg!="user not login"&&(I.setUser(l.data.data),setTimeout(()=>{P.push("/account")},100))}},H=async()=>{if(!k()||!await D())return;let l;v.value?l={type:"emailCode",emailOrUserName:o.emailOrUserName,emailCode:Number(o.emailCode),birthday:N(o.birthday).valueOf()}:l={type:"account",emailOrUserName:o.emailOrUserName,password:W.sm3(o.password)};const e=await R(l);if(e.data.msg)c.error(e.data.msg);else if(e.data.data=="needEmailValidate"){v.value=!0,c.warning(a("login.needEmailValidate"));return}else M()},K=async()=>{if(!k()||!await D())return;if(v.value){c.warning(a("login.subAccountCant"));return}const l={type:"subAccount",emailOrUserName:o.emailOrUserName,password:W.sm3(o.password)},e=await R(l);e.data.msg?c.error(e.data.msg):M()};let L;const x=E(!1),B={mainnet:Y,bsc:ke,polygon:xe,arbitrum:Oe,okc:Ie},h={metaMask:"MetaMask",walletConnect:"WalletConnect",coinbase:"Coinbase",injected:"Injected",ledger:"Ledger"},X=l=>{x.value=!1,l=="mainnet"?L=[Y]:L=[B[l],Y];const e=we,t=new Pe({chains:L,options:{projectId:e}});A(t)},A=l=>{l.connect().then(()=>{const e=Math.random().toString(36).slice(-6),t="login to quejinqiu "+e;l.getWalletClient().then(u=>{u.signMessage({message:t}).then(async _=>{const y={type:"erc20Sign",address:u.account.address,personalsign:_,password:e};l.disconnect();const b=await R(y);if(b.data.msg)c.error(b.data.msg);else if(b.data.data=="needEmailValidate"){v.value=!0,c.warning(a("login.needEmailValidate"));return}else M()})})})},Z=l=>{if(k())if(l==h.walletConnect)x.value=!0;else{let e;switch(e=new Se,l){case h.metaMask:e=new Le;break;case h.coinbase:e=new Me({options:{appName:"QueJinQiu"}});break;case h.ledger:e=new De({options:{enableDebugLogs:!1}});break}A(e)}},ee=async()=>{if(!k()||!await D())return;const l={email:o.emailOrUserName,password:Q(o.password,o.emailOrUserName),rePassword:Q(o.rePassword,N(o.birthday).valueOf().toString()),birthday:N(o.birthday).valueOf(),inviteCode:o.inviteCode,avatar:ce()},e=await ge(l);e.data.data=="sucess"?(c.success(a("login.registerSuccess")),d.value=!1,v.value=!0):c.error(e.data.msg)},ae=async()=>{const l=await pe({emailOrUserName:o.emailOrUserName});if(l.data.data=="success"){if(c.success(a("login.sendCodeSuccess")),V.value!=a("utils.send")&&V.value!=a("utils.reSend"))return;let e=60;const t=()=>{--e>0?(V.value=e.toString(),setTimeout(t,1e3)):V.value=a("utils.reSend")};t()}else c.error(l.data.msg),l.data.msg=="sendEmailCode fail"&&c.error("server error")};return(l,e)=>{const t=he,u=Ce,_=Ve,y=fe,b=Ee,te=be,oe=_e;return m(),O("div",Ye,[p("div",je,[p("div",Be,[p("h1",null,g(s(a)("login.welcoming")),1),p("div",Ae,g(s(a)("login.announcement")),1),Fe]),p("div",$e,[p("h1",null,g(s(a)("utils.login")),1),p("div",qe,[n(te,{"label-width":"100px",model:o,rules:J,ref_key:"loginFormRef",ref:j},{default:i(()=>[n(u,null,{default:i(()=>[n(t,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r),label:s(a)("login.toRegister")},null,8,["modelValue","label"]),d.value?(m(),O("a",Te,"     "+g(s(a)("login.howGetInvitedCode")),1)):w("",!0)]),_:1}),n(u,{label:d.value?s(a)("utils.email"):s(a)("utils.emailOrUserName"),prop:"emailOrUserName"},{default:i(()=>[n(_,{modelValue:o.emailOrUserName,"onUpdate:modelValue":e[1]||(e[1]=r=>o.emailOrUserName=r)},null,8,["modelValue"])]),_:1},8,["label"]),!d.value&&v.value?(m(),f(u,{key:0,label:s(a)("utils.emailCode"),prop:"emailCode"},{default:i(()=>[n(_,{modelValue:o.emailCode,"onUpdate:modelValue":e[2]||(e[2]=r=>o.emailCode=r),style:{width:"76%"}},null,8,["modelValue"]),n(y,{style:{width:"20%",margin:"0 0 0 4%"},type:"primary",onClick:e[3]||(e[3]=r=>ae())},{default:i(()=>[C(g(V.value),1)]),_:1})]),_:1},8,["label"])):w("",!0),!v.value||d.value?(m(),f(u,{key:1,label:s(a)("utils.password"),prop:"password"},{default:i(()=>[n(_,{modelValue:o.password,"onUpdate:modelValue":e[4]||(e[4]=r=>o.password=r),type:"password"},null,8,["modelValue"])]),_:1},8,["label"])):w("",!0),d.value?(m(),f(u,{key:2,label:s(a)("utils.rePassword"),prop:"rePassword"},{default:i(()=>[n(_,{modelValue:o.rePassword,"onUpdate:modelValue":e[5]||(e[5]=r=>o.rePassword=r),type:"password"},null,8,["modelValue"])]),_:1},8,["label"])):w("",!0),d.value||v.value?(m(),f(u,{key:3,prop:"birthday",label:s(a)("utils.birthday")},{default:i(()=>[p("div",We,[n(b,{type:"year",placeholder:s(a)("utils.year"),"value-format":"YYYY-MM-DD",modelValue:o.birthday,"onUpdate:modelValue":e[6]||(e[6]=r=>o.birthday=r),style:{width:"28%"}},null,8,["placeholder","modelValue"]),n(b,{type:"month",placeholder:s(a)("utils.month"),format:"MM","value-format":"YYYY-MM-DD",modelValue:o.birthday,"onUpdate:modelValue":e[7]||(e[7]=r=>o.birthday=r),style:{width:"32%"}},null,8,["placeholder","modelValue"]),n(b,{type:"date",placeholder:s(a)("utils.date"),format:"DD","value-format":"YYYY-MM-DD",modelValue:o.birthday,"onUpdate:modelValue":e[8]||(e[8]=r=>o.birthday=r),style:{width:"40%"}},null,8,["placeholder","modelValue"])])]),_:1},8,["label"])):w("",!0),d.value?(m(),f(u,{key:4,label:s(a)("utils.inviteCode"),prop:"inviteCode"},{default:i(()=>[n(_,{modelValue:o.inviteCode,"onUpdate:modelValue":e[9]||(e[9]=r=>o.inviteCode=r)},null,8,["modelValue"])]),_:1},8,["label"])):w("",!0),n(u,null,{default:i(()=>[n(t,{modelValue:S.value,"onUpdate:modelValue":e[10]||(e[10]=r=>S.value=r),label:s(a)("login.checkboxText")},null,8,["modelValue","label"]),p("a",Qe," 【"+g(s(a)("login.privacyPolicy"))+"】 ",1),C(" 和 "),p("a",ze," 【"+g(s(a)("login.serviceAgreement"))+"】 ",1)]),_:1}),d.value?w("",!0):(m(),f(u,{key:5},{default:i(()=>[n(t,{modelValue:v.value,"onUpdate:modelValue":e[11]||(e[11]=r=>v.value=r),label:s(a)("login.noPasswordLogin")},null,8,["modelValue","label"])]),_:1})),d.value?w("",!0):(m(),f(u,{key:6},{default:i(()=>[n(y,{type:"primary",onClick:e[12]||(e[12]=r=>H())},{default:i(()=>[C("   "+g(s(a)("utils.login"))+"    ",1)]),_:1}),n(y,{type:"primary",onClick:e[13]||(e[13]=r=>K())},{default:i(()=>[C(g(s(a)("utils.subAccountLogin")),1)]),_:1})]),_:1})),d.value?w("",!0):(m(),f(u,{key:7,label:"ERC20 sign"},{default:i(()=>[(m(!0),O(q,null,T(Object.values(h),r=>(m(),f(y,{type:"success",onClick:le=>Z(r)},{default:i(()=>[C(g(r),1)]),_:2},1032,["onClick"]))),256))]),_:1})),d.value?(m(),f(u,{key:8},{default:i(()=>[n(y,{type:"primary",onClick:e[14]||(e[14]=r=>ee())},{default:i(()=>[C("   "+g(s(a)("utils.register"))+"   ",1)]),_:1})]),_:1})):w("",!0)]),_:1},8,["model","rules"])])])],512),n(oe,{"align-center":"","destroy-on-close":"",title:s(a)("login.selectChain"),modelValue:x.value,"onUpdate:modelValue":e[15]||(e[15]=r=>x.value=r),style:{"max-width":"480px"}},{default:i(()=>[(m(!0),O(q,null,T(Object.keys(B),r=>(m(),f(y,{color:"#626aef",plain:"",onClick:le=>X(r)},{default:i(()=>[C(g(r),1)]),_:2},1032,["onClick"]))),256))]),_:1},8,["title","modelValue"])])}}});const pa=ye(Ge,[["__scopeId","data-v-3dd85ee8"]]);export{pa as default};
