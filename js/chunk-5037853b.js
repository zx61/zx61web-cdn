import{f as J,B as le,U as D,r as w,V as Y,o as g,c as E,b as N,F as h,j as m,q as r,w as d,L as ne,W as se,X as oe,I as re,G as M,H as A,i as Q,J as H,_ as ie}from"./chunk-4953a83b.js";import{w as de,a as ue,b as ce,c as me,d as pe,e as ve,f as fe,g as be,h as _e,i as he,m as T,H as L,p as ye,W as $,j as R,k as ge,l as Te,A as Ce,E as Be,n as _,o as Se,T as we,q as Ke,C as ke,r as xe,s as Pe,t as Ee,u as Ne,v as Ve,x as Oe,y as De}from"./chunk-48639acf.js";import{c as p,b as y,E as G,a as Me,d as Ae,e as He,f as Le}from"./chunk-aa031322.js";import{H as z}from"./chunk-4193870e.js";const $e={cz:de,en:ue,es:ce,fr:me,it:pe,ja:ve,ko:fe,zh_cn:be,zh_tw:_e},Ue=async(v,e,C,n)=>{(v==p.SUI||v==p.APTOS)&&(e="en",C=16);const t=he($e[e],C*8);if(v==y.BTC_1){const o="m/44'/0'/0'/0/0",s=T(t),i=L.fromMasterSeed(s).derive(o);return{address:ye(i.publicKey||Buffer.from("")).address,privateKey:$().encode(i.privateKey||Buffer.from("")),mnemonic:t}}if(v==y.BTC_BC1Q){const o="m/84'/0'/0'/0/0",s=T(t),i=L.fromMasterSeed(s).derive(o);return{address:R(i.publicKey||Buffer.from("")).address,privateKey:$().encode(i.privateKey||Buffer.from("")),mnemonic:t}}if(v==y.BTC_3){const o="m/49'/0'/0'/0/0",s=T(t),i=L.fromMasterSeed(s).derive(o);return{address:ge(R(i.publicKey||Buffer.from(""))).address,privateKey:$().encode(i.privateKey||Buffer.from("")),mnemonic:t}}if(v==y.BTC_BC1P){const o="m/86'/0'/0'/0/0",s=T(t),i=L.fromMasterSeed(s).derive(o);return{address:Te("tr",i.privateKey||Buffer.from("")),privateKey:$().encode(i.privateKey||Buffer.from("")),mnemonic:t}}if(v==p.APTOS){const o="m/44'/637'/0'/0'/0'",s=Ce.fromDerivePath(o,t);return{address:s.toPrivateKeyObject().address,privateKey:s.toPrivateKeyObject().privateKeyHex,mnemonic:t}}if(v==p.SUI){const o=Be.deriveKeypair(t),s=Buffer.from(o.export().privateKey,"base64");return{address:o.getPublicKey().toSuiAddress(),privateKey:"0x"+s.toString("hex"),mnemonic:t}}if(v==p.COSMOS){e="en";const o="m/44'/118'/0'/0/0",s=_.stringToPath(o),i=new _.EnglishMnemonic(t),k=await _.Bip39.mnemonicToSeed(i),{privkey:x}=_.Slip10.derivePath(_.Slip10Curve.Secp256k1,k,s),{pubkey:U}=await _.Secp256k1.makeKeypair(x),W=_.Secp256k1.compressPubkey(U);return n||(n="cosmos"),{address:Se.toBech32(n==null?void 0:n.toLowerCase(),_.ripemd160(_.sha256(W))),privateKey:Buffer.from(x).toString("hex"),mnemonic:t}}if(v==p.TRON){const o=T(t),s=z.fromSeed(o).derivePath("m/44'/195'/0'/0/0");return{address:we.address.fromPrivateKey(s.privateKey.substring(2)),privateKey:s.privateKey.substring(2),mnemonic:t}}if(v==p.FILE){const o=T(t),s=z.fromSeed(o).derivePath("m/44'/461'/0'/0/0");return{address:Ke(s.address,ke.MAIN).toString(),privateKey:s.privateKey,mnemonic:t}}const K=T(t),f=z.fromSeed(K).derivePath("m/44'/60'/0'/0/0");return{address:f.address,privateKey:f.privateKey,mnemonic:t}},We={class:"batchCreateWallet"},Ie={class:"text_markedness"},ze={class:"buttons"},je={class:"text_markedness"},qe={class:"bcwTable"},Fe=J({name:"batchCreateWallet"}),Ye=J({...Fe,setup(v){const{t:e}=le(),C=ne(),n=D({chainName:p.ETH,count:10,mnemonicLang:"en",digit:16}),t=D([...Ae]);t.splice(1,1,{label:e("chainTools.BTC_1"),value:y.BTC_1},{label:e("chainTools.BTC_BC1Q"),value:y.BTC_BC1Q},{label:e("chainTools.BTC_3"),value:y.BTC_3},{label:e("chainTools.BTC_BC1P"),value:y.BTC_BC1P});const K=C.currentRoute.value.query.chainName;if(K){let u=!1;for(let a=0;a<t.length;a++)if(t[a].value.toString().toUpperCase()==K.toString().toUpperCase()){n.chainName=K.toString().toUpperCase(),u=!0;break}u||C.push({query:{chainName:p.ETH}})}const f=D([]),o=D([]),s=w(1),i=w(1),k=w("cosmos");Y(()=>n.chainName,()=>{C.push({query:{chainName:n.chainName}})}),Y(()=>({...f}),()=>{s.value=Math.ceil(f.length/100),x()});const x=()=>{o.length=0,o.push(...f.slice((i.value-1)*100,i.value*100))},U=u=>{i.value=u,x()},W=[{label:e("lang.en"),value:"en"},{label:e("lang.zh_cn"),value:"zh_cn"},{label:e("lang.zh_tw"),value:"zh_tw"},{label:e("lang.cz"),value:"cz"},{label:e("lang.es"),value:"es"},{label:e("lang.fr"),value:"fr"},{label:e("lang.it"),value:"it"},{label:e("lang.ja"),value:"ja"},{label:e("lang.ko"),value:"ko"}],j=[{label:"12",value:16},{label:"15",value:20},{label:"18",value:24},{label:"21",value:28},{label:"24",value:32}],q=w(e("chainTools.create")),V=w(0),b=w(!0),X=u=>{const a=u.count;if(a==0)return;const c=u.chainName,B=u.mnemonicLang,O=u.digit;q.value=e("chainTools.recreate"),f.length=0,V.value=0,(c==p.SUI||c==p.APTOS)&&(u.mnemonicLang="en",u.digit=16,G.warning(e("chainTools.suiTip"))),b.value=!1;async function S(){if(V.value<a&&!b.value){const P=await Ue(c,B,O,k.value);f.push(P),V.value++,setTimeout(S,0)}else b.value=!0,G.success(e("chainTools.createOver"))}return setTimeout(S,0),!0},Z=()=>{const u=se(oe(),"YYYYMMDDHHmmss"),a=f.map(c=>c.address+"----"+c.privateKey+"----"+c.mnemonic).join(`\r
`);try{xe.saveAs(new Blob([a],{type:"text/plain;charset=utf-8"}),e("chainTools.fileName1")+n.chainName+e("chainTools.fileName2")+u.value+".txt")}catch(c){typeof console<"u"&&console.log(c,a)}return a};return(u,a)=>{const c=re,B=He,O=Me,S=Ne,P=Ve,F=Le,ee=Oe,ae=Pe,I=De,te=Ee;return g(),E("div",We,[N("h1",null,h(m(e)("chainTools.bathCreteWallet")),1),N("div",Ie,h(m(e)("chainTools.createTip")),1),r(O,{inline:!0,class:"batchCreateWalletForm"},{default:d(()=>[(g(!0),E(M,null,A(t,l=>(g(),Q(B,null,{default:d(()=>[r(c,{onClick:Qe=>n.chainName=l.value.toString(),color:"#626aef",plain:"",disabled:!b.value},{default:d(()=>[H(h(l.label),1)]),_:2},1032,["onClick","disabled"])]),_:2},1024))),256))]),_:1}),r(O,{inline:!0,model:n,class:"batchCreateWalletForm"},{default:d(()=>[r(B,{label:m(e)("chainTools.mnemonicTypeLable")},{default:d(()=>[r(P,{modelValue:n.chainName,"onUpdate:modelValue":a[0]||(a[0]=l=>n.chainName=l),disabled:!b.value,class:"long-select"},{default:d(()=>[(g(!0),E(M,null,A(t,l=>(g(),Q(S,{value:l.value,label:l.label},null,8,["value","label"]))),256))]),_:1},8,["modelValue","disabled"]),r(P,{modelValue:n.mnemonicLang,"onUpdate:modelValue":a[1]||(a[1]=l=>n.mnemonicLang=l),disabled:!b.value||n.chainName==m(p).COSMOS},{default:d(()=>[(g(),E(M,null,A(W,l=>r(S,{value:l.value,label:l.label},null,8,["value","label"])),64))]),_:1},8,["modelValue","disabled"]),r(P,{modelValue:n.digit,"onUpdate:modelValue":a[2]||(a[2]=l=>n.digit=l),disabled:!b.value},{default:d(()=>[(g(),E(M,null,A(j,l=>r(S,{value:l.value,label:l.label},null,8,["value","label"])),64))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label"]),r(B,{label:m(e)("chainTools.cosmosPerfixLable")},{default:d(()=>[r(F,{modelValue:k.value,"onUpdate:modelValue":a[3]||(a[3]=l=>k.value=l),disabled:n.chainName!=m(p).COSMOS},null,8,["modelValue","disabled"])]),_:1},8,["label"]),r(B,{label:m(e)("chainTools.countLable")},{default:d(()=>[r(F,{modelValue:n.count,"onUpdate:modelValue":a[4]||(a[4]=l=>n.count=l),disabled:!b.value},null,8,["modelValue","disabled"])]),_:1},8,["label"])]),_:1},8,["model"]),N("div",ze,[r(c,{type:"primary",onClick:a[5]||(a[5]=l=>X(n))},{default:d(()=>[H(h(q.value),1)]),_:1}),r(c,{type:"warning",onClick:a[6]||(a[6]=l=>b.value=!0)},{default:d(()=>[H(h(m(e)("chainTools.stopCreate")),1)]),_:1}),r(c,{type:"primary",onClick:a[7]||(a[7]=l=>Z())},{default:d(()=>[H(h(m(e)("chainTools.dowmLoadTable")),1)]),_:1}),N("div",je,h(m(e)("chainTools.currentCount"))+h(V.value),1)]),N("div",qe,[r(ae,{target:".batchCreateWallet",offset:80},{default:d(()=>[r(ee,{layout:"->,prev, pager, next","page-count":s.value,background:"",onCurrentChange:U,"hide-on-single-page":!0},null,8,["page-count"])]),_:1}),r(te,{data:o,"max-height":"500"},{default:d(()=>[r(I,{prop:"address",label:m(e)("chainTools.address")},null,8,["label"]),r(I,{prop:"privateKey",label:m(e)("chainTools.privateKey")},null,8,["label"]),r(I,{prop:"mnemonic",label:m(e)("chainTools.mnemonic")},null,8,["label"])]),_:1},8,["data"])])])}}});const Ze=ie(Ye,[["__scopeId","data-v-62839fca"]]);export{Ze as default};
