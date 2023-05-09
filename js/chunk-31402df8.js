import{f as G,B as te,U as A,r as k,V as $,o as T,c as N,b as P,F as y,j as p,q as n,w as u,L as le,W as ne,X as oe,I as se,G as L,H as W,i as Y,J as D,_ as re}from"./chunk-bc202244.js";import{m as ie,a as U,H,p as ue,W as I,b as Q,c as ce,g as de,A as me,E as pe,d as _,e as ve,T as fe,n as be,C as he,f as _e,h as ye,i as ge,j as Te,k as Ce,l as Be,o as Ke}from"./chunk-f868c0ed.js";import{c as v,b as g,E as R,a as Se,d as ke,e as we,f as Ee}from"./chunk-bbaf1278.js";import{M as xe,r as Ne,H as Pe}from"./chunk-ddf55121.js";const Ve=async(f,e,C,l)=>{var b,B,w;(f==v.SUI||f==v.APTOS)&&(e="en",C=16);const o=xe.fromEntropy(Ne(C),"",ie[e]);if(f==g.BTC_1){const s="m/44'/0'/0'/0/0",r=U(o.phrase),i=H.fromMasterSeed(r).derive(s);return{address:ue(i.publicKey||Buffer.from("")).address,privateKey:I().encode(i.privateKey||Buffer.from("")),mnemonic:o.phrase}}if(f==g.BTC_BC1Q){const s="m/84'/0'/0'/0/0",r=U(o.phrase),i=H.fromMasterSeed(r).derive(s);return{address:Q(i.publicKey||Buffer.from("")).address,privateKey:I().encode(i.privateKey||Buffer.from("")),mnemonic:o.phrase}}if(f==g.BTC_3){const s="m/49'/0'/0'/0/0",r=U(o.phrase),i=H.fromMasterSeed(r).derive(s);return{address:ce(Q(i.publicKey||Buffer.from(""))).address,privateKey:I().encode(i.privateKey||Buffer.from("")),mnemonic:o.phrase}}if(f==g.BTC_BC1P){const s="m/86'/0'/0'/0/0",r=U(o.phrase),i=H.fromMasterSeed(r).derive(s);return{address:de("tr",i.privateKey||Buffer.from("")),privateKey:I().encode(i.privateKey||Buffer.from("")),mnemonic:o.phrase}}if(f==v.APTOS){const s="m/44'/637'/0'/0'/0'",r=me.fromDerivePath(s,o.phrase);return{address:r.toPrivateKeyObject().address,privateKey:r.toPrivateKeyObject().privateKeyHex,mnemonic:o.phrase}}if(f==v.SUI){const s=pe.deriveKeypair(o.phrase),r=Buffer.from(s.export().privateKey,"base64");return{address:s.getPublicKey().toSuiAddress(),privateKey:"0x"+r.toString("hex"),mnemonic:o.phrase}}if(f==v.COSMOS){e="en";const s="m/44'/118'/0'/0/0",r=_.stringToPath(s),i=new _.EnglishMnemonic(o.phrase),j=await _.Bip39.mnemonicToSeed(i),{privkey:V}=_.Slip10.derivePath(_.Slip10Curve.Secp256k1,j,r),{pubkey:z}=await _.Secp256k1.makeKeypair(V),O=_.Secp256k1.compressPubkey(z);return l||(l="cosmos"),{address:ve.toBech32(l==null?void 0:l.toLowerCase(),_.ripemd160(_.sha256(O))),privateKey:Buffer.from(V).toString("hex"),mnemonic:o.phrase}}const d=Pe.fromMnemonic(o);return f==v.TRON?{address:fe.address.fromPrivateKey(d.privateKey.substring(2)),privateKey:d.privateKey.substring(2),mnemonic:(b=d.mnemonic)==null?void 0:b.phrase}:f==v.FILE?{address:be(d.address,he.MAIN).toString(),privateKey:d.privateKey,mnemonic:(B=d.mnemonic)==null?void 0:B.phrase}:{address:d.address,privateKey:d.privateKey,mnemonic:(w=d.mnemonic)==null?void 0:w.phrase}},Oe={class:"batchCreateWallet"},Me={class:"text_markedness"},Ae={class:"buttons"},Le={class:"text_markedness"},We={class:"bcwTable"},De=G({name:"batchCreateWallet"}),Ue=G({...De,setup(f){const{t:e}=te(),C=le(),l=A({chainName:v.ETH,count:10,mnemonicLang:"en",digit:16}),o=A([...ke]);o.splice(1,1,{label:e("chainTools.BTC_1"),value:g.BTC_1},{label:e("chainTools.BTC_BC1Q"),value:g.BTC_BC1Q},{label:e("chainTools.BTC_3"),value:g.BTC_3},{label:e("chainTools.BTC_BC1P"),value:g.BTC_BC1P});const d=C.currentRoute.value.query.chainName;if(d){let c=!1;for(let a=0;a<o.length;a++)if(o[a].value.toString().toUpperCase()==d.toString().toUpperCase()){l.chainName=d.toString().toUpperCase(),c=!0;break}c||C.push({query:{chainName:v.ETH}})}const b=A([]),B=A([]),w=k(1),s=k(1),r=k("cosmos");$(()=>l.chainName,()=>{C.push({query:{chainName:l.chainName}})}),$(()=>({...b}),()=>{w.value=Math.ceil(b.length/100),i()});const i=()=>{B.length=0,B.push(...b.slice((s.value-1)*100,s.value*100))},j=c=>{s.value=c,i()},V=[{label:e("lang.en"),value:"en"},{label:e("lang.zh_cn"),value:"zh_cn"},{label:e("lang.zh_tw"),value:"zh_tw"},{label:e("lang.cz"),value:"cz"},{label:e("lang.es"),value:"es"},{label:e("lang.fr"),value:"fr"},{label:e("lang.it"),value:"it"},{label:e("lang.pt"),value:"pt"},{label:e("lang.ja"),value:"ja"},{label:e("lang.ko"),value:"ko"}],z=[{label:"12",value:16},{label:"15",value:20},{label:"18",value:24},{label:"21",value:28},{label:"24",value:32}],O=k(e("chainTools.create")),E=k(0),h=k(!0),J=c=>{const a=c.count;if(a==0)return;const m=c.chainName,K=c.mnemonicLang,M=c.digit;O.value=e("chainTools.recreate"),b.length=0,E.value=0,(m==v.SUI||m==v.APTOS)&&(c.mnemonicLang="en",c.digit=16,R.warning(e("chainTools.suiTip"))),h.value=!1;async function S(){if(E.value<a&&!h.value){const x=await Ve(m,K,M,r.value);b.push(x),E.value++,setTimeout(S,0)}else h.value=!0,R.success(e("chainTools.createOver"))}return setTimeout(S,0),!0},X=()=>{const c=ne(oe(),"YYYYMMDDHHmmss"),a=b.map(m=>m.address+"----"+m.privateKey+"----"+m.mnemonic).join(`\r
`);try{_e.saveAs(new Blob([a],{type:"text/plain;charset=utf-8"}),e("chainTools.fileName1")+l.chainName+e("chainTools.fileName2")+c.value+".txt")}catch{}return a};return(c,a)=>{const m=se,K=we,M=Se,S=Te,x=Ce,F=Ee,Z=Be,ee=ye,q=Ke,ae=ge;return T(),N("div",Oe,[P("h1",null,y(p(e)("chainTools.bathCreteWallet")),1),P("div",Me,y(p(e)("chainTools.createTip")),1),n(M,{inline:!0,class:"batchCreateWalletForm"},{default:u(()=>[(T(!0),N(L,null,W(o,t=>(T(),Y(K,null,{default:u(()=>[n(m,{onClick:He=>l.chainName=t.value.toString(),color:"#626aef",plain:"",disabled:!h.value},{default:u(()=>[D(y(t.label),1)]),_:2},1032,["onClick","disabled"])]),_:2},1024))),256))]),_:1}),n(M,{inline:!0,model:l,class:"batchCreateWalletForm"},{default:u(()=>[n(K,{label:p(e)("chainTools.mnemonicTypeLable")},{default:u(()=>[n(x,{modelValue:l.chainName,"onUpdate:modelValue":a[0]||(a[0]=t=>l.chainName=t),disabled:!h.value,class:"long-select"},{default:u(()=>[(T(!0),N(L,null,W(o,t=>(T(),Y(S,{value:t.value,label:t.label},null,8,["value","label"]))),256))]),_:1},8,["modelValue","disabled"]),n(x,{modelValue:l.mnemonicLang,"onUpdate:modelValue":a[1]||(a[1]=t=>l.mnemonicLang=t),disabled:!h.value||l.chainName==p(v).COSMOS},{default:u(()=>[(T(),N(L,null,W(V,t=>n(S,{value:t.value,label:t.label},null,8,["value","label"])),64))]),_:1},8,["modelValue","disabled"]),n(x,{modelValue:l.digit,"onUpdate:modelValue":a[2]||(a[2]=t=>l.digit=t),disabled:!h.value},{default:u(()=>[(T(),N(L,null,W(z,t=>n(S,{value:t.value,label:t.label},null,8,["value","label"])),64))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label"]),n(K,{label:p(e)("chainTools.cosmosPerfixLable")},{default:u(()=>[n(F,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=t=>r.value=t),disabled:l.chainName!=p(v).COSMOS},null,8,["modelValue","disabled"])]),_:1},8,["label"]),n(K,{label:p(e)("chainTools.countLable")},{default:u(()=>[n(F,{modelValue:l.count,"onUpdate:modelValue":a[4]||(a[4]=t=>l.count=t),disabled:!h.value},null,8,["modelValue","disabled"])]),_:1},8,["label"])]),_:1},8,["model"]),P("div",Ae,[n(m,{type:"primary",onClick:a[5]||(a[5]=t=>J(l))},{default:u(()=>[D(y(O.value),1)]),_:1}),n(m,{type:"warning",onClick:a[6]||(a[6]=t=>h.value=!0)},{default:u(()=>[D(y(p(e)("chainTools.stopCreate")),1)]),_:1}),n(m,{type:"primary",onClick:a[7]||(a[7]=t=>X())},{default:u(()=>[D(y(p(e)("chainTools.dowmLoadTable")),1)]),_:1}),P("div",Le,y(p(e)("chainTools.currentCount"))+y(E.value),1)]),P("div",We,[n(ee,{target:".batchCreateWallet",offset:80},{default:u(()=>[n(Z,{layout:"->,prev, pager, next","page-count":w.value,background:"",onCurrentChange:j,"hide-on-single-page":!0},null,8,["page-count"])]),_:1}),n(ae,{data:B,"max-height":"500"},{default:u(()=>[n(q,{prop:"address",label:p(e)("chainTools.address")},null,8,["label"]),n(q,{prop:"privateKey",label:p(e)("chainTools.privateKey")},null,8,["label"]),n(q,{prop:"mnemonic",label:p(e)("chainTools.mnemonic")},null,8,["label"])]),_:1},8,["data"])])])}}});const Fe=re(Ue,[["__scopeId","data-v-a69b1962"]]);export{Fe as default};
