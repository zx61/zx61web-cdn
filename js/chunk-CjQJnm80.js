import{d as ee,v as ge,h as ke,r as m,e as y,T as C,X as x,V as G,W as K,C as Te,o as g,c as Q,b as _,t as i,f as s,g as o,w as n,F as A,l as q,j as R,k as p,Y as ye,E as U,z as we,J as Ne,Z as B,_ as Ee}from"./chunk-bN8bH30D.js";import{t as Ve,g as Ce,a as xe,b as Ue,E as Be,c as De,q as Qe,d as He}from"./chunk-5U7ESWGd.js";import{E as Se,a as Ie}from"./chunk-D0Iu-s9x.js";import"./chunk-Dh26Qr1W.js";import"./chunk-C-HMdayx.js";import{B as Fe,D as Le,E as $e,F as Ae,G as qe}from"./chunk-p1g588Ao.js";import{E as Re}from"./chunk-Cch2kbmk.js";import{E as Me,a as Ye}from"./chunk-Cye0kR6Q.js";import{a as Oe,E as je}from"./chunk-CJ6aAzYL.js";import{E as ze}from"./chunk-BkShT7WH.js";import"./chunk-BB_Ol6Sd.js";import"./chunk-DA9cNxaC.js";import"./chunk-Cc-YmMIf.js";import"./chunk-D9wEq4bu.js";import"./chunk-DfdmAFhS.js";import"./chunk-mWAOJ9ad.js";import"./chunk-DcxR870N.js";import"./chunk-cDKigGkF.js";import"./chunk-C5nkJ5Sq.js";import"./chunk-BUg6px7m.js";const Pe={class:"batchQueryBalance"},We={class:"text_markedness"},Ge={class:"dialog-footer"},Je={class:"dialog-footer"},Xe={class:"buttons"},Ze={class:"text_markedness",style:{display:"flex"}},Ke={class:"text_markedness"},el={class:"table"},ll={class:"dialog-footer"},al={class:"el-upload__text"},tl=ee({name:"batchQueryBalance"}),ol=ee({...tl,setup(nl){const{t:a}=ge.useI18n(),M=ke(),H=m(!1),S=m(!1),I=m(!1),f=m(!1),b=m(!0),k=m(""),N=m(""),w=m(""),Y=m(0),O=m(1),F=y([]),d=y([]),j=y([]),z=m(),E=y([{label:C.ETH,value:C.ETH}]),V=y([{label:x.ETH,value:x.ETH}]),L=y({ETH:C.ETH}),J=y({}),t=y({chainName:C.ETH,tokens:[C.ETH],network:x.ETH,threadCount:1}),P=M.currentRoute.value.query.chain;if(P){let r=!1;for(let e=0;e<G.length;e++)if(G[e].value.toString().toUpperCase()==P.toString().toUpperCase()){t.chainName=P.toString().toUpperCase(),r=!0;break}r||M.push({query:{chain:C.ETH}})}K(()=>t.chainName,()=>{M.push({query:{chain:t.chainName}}),E.length=0,E.push({label:B[t.chainName],value:B[t.chainName]}),V.length=0,V.push({label:x[t.chainName],value:x[t.chainName]}),t.network=x[t.chainName],t.tokens=[B[t.chainName]],L[B[t.chainName]]=B[t.chainName]}),K(()=>({...d}),()=>{X.value=Math.ceil(d.length/100),Z()});const X=m(1),$=m(1),Z=()=>{j.length=0,j.push(...d.slice(($.value-1)*100,$.value*100))},le=r=>{$.value=r,Z()},ae=()=>{F.length=0,t.tokens.forEach(r=>{F.push({label:L[r],prop:r})})},te=async()=>{f.value=!0;for(let r=0;r<V.length;r++)if(V[r].value==N.value)return U.warning(a("chainTools.networkReuse")),f.value=!1,!1;return await Ve(N.value)?(S.value=!1,V.push({label:N.value,value:N.value})):U.error(a("chainTools.networkError")),f.value=!1,!0},oe=async()=>{f.value=!0;for(let e=0;e<E.length;e++)if(E[e].value==k.value)return U.warning(a("chainTools.networkReuse")),f.value=!1,!1;let r=await Ce(t.chainName,t.network,k.value);r?(H.value=!1,E.push({label:r,value:k.value}),L[k.value]=r,J[k.value]=await xe(t.chainName,t.network,k.value)):U.error(a("chainTools.tokenError")),f.value=!1},ne=()=>{if(f.value=!0,w.value=w.value.trim(),w.value==""){U.warning(a("chainTools.noAddressTip")),f.value=!1;return}d.length=0,w.value.split(`
`).forEach((e,u)=>{e.trim()!=""&&d.push({serialNumber:(u+1).toString(),address:e.split("----")[0],status:a("chainTools.waitQuery")})}),I.value=!1,f.value=!1},se=async()=>{if(d.length==0||t.tokens.length==0)return;Y.value=0,b.value=!1,ae(),d.splice(0,O.value-1);let r=0;const e=async()=>{if(b.value)return;const u=r++;if(u<d.length){const v=d[u];d[u].status=a("chainTools.inQuery");for(let h=0;h<t.tokens.length;h++){const c=t.tokens[h];let T;c==B[t.chainName]?T=await Qe(t.chainName,t.network,v.address):T=await He(t.chainName,t.network,c,v.address,J[c]),d[u][c]=T,h+1==F.length&&(d[u].status=a("chainTools.finishQuery"),Y.value++,u+1==d.length&&(U.success(a("chainTools.finishQuery")),b.value=!0))}e()}};for(let u=0;u<t.threadCount;u++)setTimeout(e,100)},re=()=>{const r=Fe(Le(),"YYYYMMDDHHmmss"),e=d.map(u=>{let v=u.address;return t.tokens.forEach(h=>{v+="----"+L[h]+":"+u[h]}),v}).join(`\r
`);try{$e.saveAs(new Blob([e],{type:"text/plain;charset=utf-8"}),a("chainTools.fileName1")+t.chainName+a("chainTools.fileName3")+r.value+".txt")}catch(u){typeof console<"u"&&console.log(u,e)}return e},ue=r=>{d.splice(r+($.value-1)*100,1)},ie=r=>{const e=new FileReader;e.readAsText(r.raw,"UTF-8"),e.onload=function(u){var v;(v=u.target)!=null&&v.result&&(w.value=u.target.result.toString())}},de=r=>{z.value.clearFiles();const e=r[0];e.uid=Ue(),z.value.handleStart(e)};return(r,e)=>{const u=Me,v=Ye,h=Oe,c=we,T=Re,W=ze,ce=Be,me=je,pe=Ae,fe=qe,D=Se,be=Ie,ve=Te("upload-filled"),he=Ne,_e=De;return g(),Q("div",Pe,[_("h1",null,i(s(a)("chainTools.bathQueryWallet")),1),_("div",We,i(s(a)("chainTools.queryTip")),1),o(me,{inline:!0,model:t,class:"batchQueryBalanceForm"},{default:n(()=>[o(h,{label:s(a)("chainTools.chainNameLabel")},{default:n(()=>[o(v,{modelValue:t.chainName,"onUpdate:modelValue":e[0]||(e[0]=l=>t.chainName=l),class:"shortSelect",disabled:!b.value},{default:n(()=>[(g(!0),Q(A,null,q(s(G),l=>(g(),R(u,{value:l.value,label:l.label,disabled:l.balanceDisable||l.disabled},null,8,["value","label","disabled"]))),256))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label"]),o(h,{label:s(a)("chainTools.networkLabel")},{default:n(()=>[o(v,{disabled:!b.value,modelValue:t.network,"onUpdate:modelValue":e[1]||(e[1]=l=>t.network=l)},{default:n(()=>[(g(!0),Q(A,null,q(V,l=>(g(),R(u,{value:l.value,label:l.label,disabled:l.disabled},null,8,["value","label","disabled"]))),256))]),_:1},8,["disabled","modelValue"]),o(c,{disabled:!b.value,type:"primary",onClick:e[2]||(e[2]=l=>S.value=!0)},{default:n(()=>[p(i(s(a)("chainTools.selfDefinedNetwork")),1)]),_:1},8,["disabled"]),o(W,{"destroy-on-close":"",title:s(a)("chainTools.addNetworkLabel"),"align-center":"",modelValue:S.value,"onUpdate:modelValue":e[5]||(e[5]=l=>S.value=l)},{footer:n(()=>[_("span",Ge,[o(c,{type:"primary",onClick:e[4]||(e[4]=l=>te()),disabled:f.value},{default:n(()=>[p(i(s(a)("utils.confirm")),1)]),_:1},8,["disabled"])])]),default:n(()=>[o(T,{class:"longInput",modelValue:N.value,"onUpdate:modelValue":e[3]||(e[3]=l=>N.value=l)},null,8,["modelValue"])]),_:1},8,["title","modelValue"])]),_:1},8,["label"]),o(h,{label:s(a)("chainTools.tokenLabel")},{default:n(()=>[o(v,{disabled:!b.value,multiple:"","collapse-tags":"","collapse-tags-tooltip":"",modelValue:t.tokens,"onUpdate:modelValue":e[6]||(e[6]=l=>t.tokens=l)},{default:n(()=>[(g(!0),Q(A,null,q(E,l=>(g(),R(u,{value:l.value,label:l.label,disabled:l.disabled},null,8,["value","label","disabled"]))),256))]),_:1},8,["disabled","modelValue"]),o(c,{disabled:!b.value,type:"primary",onClick:e[7]||(e[7]=l=>H.value=!0)},{default:n(()=>[p(i(s(a)("chainTools.selfDefinedToken")),1)]),_:1},8,["disabled"]),o(W,{"destroy-on-close":"",title:s(a)("chainTools.addTokenLabel"),"align-center":"",modelValue:H.value,"onUpdate:modelValue":e[10]||(e[10]=l=>H.value=l)},{footer:n(()=>[_("span",Je,[o(c,{type:"primary",onClick:e[9]||(e[9]=l=>oe()),disabled:f.value},{default:n(()=>[p(i(s(a)("utils.confirm")),1)]),_:1},8,["disabled"])])]),default:n(()=>[o(T,{class:"longInput",modelValue:k.value,"onUpdate:modelValue":e[8]||(e[8]=l=>k.value=l)},null,8,["modelValue"])]),_:1},8,["title","modelValue"])]),_:1},8,["label"]),o(h,{label:s(a)("utils.threadLabel")},{default:n(()=>[o(ce,{disabled:!b.value,modelValue:t.threadCount,"onUpdate:modelValue":e[11]||(e[11]=l=>t.threadCount=l),min:1},null,8,["disabled","modelValue"])]),_:1},8,["label"])]),_:1},8,["model"]),_("div",Xe,[o(c,{disabled:!b.value,type:"info",onClick:e[12]||(e[12]=l=>I.value=!0)},{default:n(()=>[p(i(s(a)("chainTools.importAddress")),1)]),_:1},8,["disabled"]),o(c,{type:"primary",onClick:e[13]||(e[13]=l=>se())},{default:n(()=>[p(i(s(a)("chainTools.startQuery")),1)]),_:1}),o(c,{type:"warning",onClick:e[14]||(e[14]=l=>b.value=!0)},{default:n(()=>[p(i(s(a)("chainTools.stopQuery")),1)]),_:1}),o(c,{type:"primary",onClick:e[15]||(e[15]=l=>re())},{default:n(()=>[p(i(s(a)("chainTools.dowmLoadTable")),1)]),_:1}),_("div",Ze,[p(i(s(a)("utils.startSerialNumber"))+" ",1),o(T,{modelValue:O.value,"onUpdate:modelValue":e[16]||(e[16]=l=>O.value=l),disabled:!b.value},null,8,["modelValue","disabled"])]),_("div",Ke,i(s(a)("chainTools.finishQueryCountLabbel"))+" "+i(Y.value),1)]),_("div",el,[o(fe,{target:".batchQueryBalance",offset:80},{default:n(()=>[o(pe,{layout:"->,prev, pager, next","page-count":X.value,background:"",onCurrentChange:le,"hide-on-single-page":!0},null,8,["page-count"])]),_:1}),o(be,{data:j,"max-height":"500"},{default:n(()=>[o(D,{prop:"serialNumber",label:s(a)("utils.serialNumber"),width:"60"},null,8,["label"]),o(D,{prop:"address",label:s(a)("chainTools.address")},null,8,["label"]),(g(!0),Q(A,null,q(F,l=>(g(),R(D,{prop:l.prop,sortable:"",label:l.label},null,8,["prop","label"]))),256)),o(D,{prop:"status",label:s(a)("utils.status"),width:"100"},null,8,["label"]),o(D,{label:s(a)("utils.operation"),fixed:"right",width:"100"},{default:n(l=>[o(c,{link:"",type:"primary",size:"small",onClick:ye(sl=>ue(l.$index),["prevent"])},{default:n(()=>[p(i(s(a)("utils.delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])]),o(W,{"destroy-on-close":"",title:s(a)("chainTools.importAddressLabel"),"align-center":"",modelValue:I.value,"onUpdate:modelValue":e[19]||(e[19]=l=>I.value=l)},{footer:n(()=>[_("span",ll,[o(_e,{drag:"",ref_key:"upload",ref:z,limit:1,"auto-upload":!1,"on-change":ie,"on-exceed":de},{default:n(()=>[o(he,{class:"el-icon--upload"},{default:n(()=>[o(ve)]),_:1}),_("div",al,[p(i(s(a)("utils.dragToHere"))+" or ",1),_("em",null,i(s(a)("utils.clickToUpload")),1),p(" eg: address---- or address ")])]),_:1},512),o(c,{type:"primary",onClick:e[18]||(e[18]=l=>ne()),disabled:f.value},{default:n(()=>[p(i(s(a)("utils.confirm")),1)]),_:1},8,["disabled"])])]),default:n(()=>[o(T,{class:"longInput",type:"textarea",rows:10,modelValue:w.value,"onUpdate:modelValue":e[17]||(e[17]=l=>w.value=l),placeholder:"eg: address---- or address"},null,8,["modelValue"])]),_:1},8,["title","modelValue"])])}}}),Cl=Ee(ol,[["__scopeId","data-v-cc82d4dc"]]);export{Cl as default};
