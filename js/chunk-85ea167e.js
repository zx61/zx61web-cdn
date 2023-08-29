import{d as M,e as j,u as q,f as z,g as E,r as f,ac as G,bU as H,E as d,o as C,c as P,b as y,t as u,h as t,l as p,i as a,w as i,k as W,j as X,F as J,bV as K,bW as O,bX as Q,z as Y}from"./chunk-ac361598.js";import{E as Z}from"./chunk-2b0b8698.js";import{a as ee,E as te}from"./chunk-4ef87021.js";import{E as le,a as ae}from"./chunk-458f1da6.js";import{E as se}from"./chunk-8c574eaf.js";import{E as oe,a as ie}from"./chunk-f2c63844.js";import"./chunk-e90af107.js";import"./chunk-9519ab40.js";import"./chunk-9e9cd98f.js";const ue={class:"text_markedness"},ne={target:"_blank",href:"/documents/sdkLogin",style:{"text-decoration":"none"}},pe=y("br",null,null,-1),Ve=M({__name:"index",setup(re){const{t:e}=j(),L=q(),I=z();L.getUserItem("type")!="account"&&I.push("/account");const m=E([]),g=f(!1);let o=E({appId:"",appName:"",origin:"",whiteList:"",status:"whiteList"});const b=f(!0),h=f(e("utils.create")+e("utils.app")),w=f(!1),k=f(""),c=f(0),U=()=>{h.value=e("utils.create")+e("utils.app"),b.value=!0,g.value=!0,c.value=m.length},A=(n,l)=>{h.value=e("utils.change")+e("utils.app"),b.value=!1,g.value=!0,o=n,c.value=l},D=(n,l)=>{w.value=!0,c.value=l},$=async()=>{if(!o.appName)return d.error(e("login.errorData"));const n=b.value?await K({appName:o.appName,origin:o.origin,whiteList:o.whiteList.split(","),status:o.status}):await O({appId:o.appId,appName:o.appName,origin:o.origin,whiteList:o.whiteList.split(","),status:o.status});if(n.data.msg)d.error(n.data.msg);else{const l=n.data.data;l.statusCN=e("utils."+l.status),l.whiteList=l.whiteList.toString(),m[c.value]=l,d.success(e(b?"utils.create":"utils.change")+e("utils.success")),g.value=!1}},F=()=>{const n=L.getUserItem("email");if(k.value!=n)return d.error(e("login.errorData"));Q({appId:m[c.value].appId}).then(l=>{l.data.msg?d.error(l.data.msg):(d.success(e("utils.delete")+e("utils.success")),m.splice(c.value,1),w.value=!1)})};return G(()=>{H().then(n=>{n.data.msg?d.error(n.data.msg):n.data.data.forEach(r=>{r.statusCN=e("utils."+r.status),r.whiteList=r.whiteList.toString(),m.push(r)})})}),(n,l)=>{const r=Y,v=oe,T=ie,_=ee,V=se,x=le,B=ae,S=te,N=Z;return C(),P(J,null,[y("h1",null,u(t(e)("menu.appCenter")),1),y("div",ue,[y("a",ne,u(t(e)("utils.toSdkApi")),1),p(" "+u(t(e)("utils.appTip"))+" ",1),a(r,{type:"primary",style:{"margin-top":"1em","margin-bottom":"1em"},onClick:l[0]||(l[0]=s=>U())},{default:i(()=>[p(u(t(e)("utils.create")+t(e)("utils.app")),1)]),_:1})]),a(T,{data:m},{default:i(()=>[a(v,{type:"expand"},{default:i(s=>[p(u(t(e)("utils.origin")+"  "+s.row.origin)+" ",1),pe,p(" "+u(t(e)("utils.whiteList")+"  "+s.row.whiteList),1)]),_:1}),a(v,{prop:"appName",label:t(e)("utils.appName")},null,8,["label"]),a(v,{prop:"appId",label:t(e)("utils.appId")},null,8,["label"]),a(v,{prop:"statusCN",label:t(e)("utils.status")},null,8,["label"]),a(v,{label:t(e)("utils.operation"),width:"220px"},{default:i(s=>[a(r,{type:"primary",link:"",onClick:R=>A(s.row,s.$index)},{default:i(()=>[p(u(t(e)("utils.edit")),1)]),_:2},1032,["onClick"]),a(r,{type:"danger",link:"",onClick:R=>D(s.row,s.$index)},{default:i(()=>[p(u(t(e)("utils.delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),a(N,{modelValue:g.value,"onUpdate:modelValue":l[6]||(l[6]=s=>g.value=s),"align-center":"","destroy-on-close":"",style:{"max-width":"600px"},title:h.value},{default:i(()=>[a(S,{class:"appForm","label-width":"100px",model:t(o)},{default:i(()=>[b.value?X("",!0):(C(),W(_,{key:0,label:t(e)("utils.appId")},{default:i(()=>[p(u(t(o).appId),1)]),_:1},8,["label"])),a(_,{label:t(e)("utils.appName"),required:""},{default:i(()=>[a(V,{modelValue:t(o).appName,"onUpdate:modelValue":l[1]||(l[1]=s=>t(o).appName=s)},null,8,["modelValue"])]),_:1},8,["label"]),a(_,{label:t(e)("utils.origin")},{default:i(()=>[a(V,{modelValue:t(o).origin,"onUpdate:modelValue":l[2]||(l[2]=s=>t(o).origin=s)},null,8,["modelValue"])]),_:1},8,["label"]),a(_,{label:t(e)("utils.whiteList")},{default:i(()=>[a(V,{modelValue:t(o).whiteList,"onUpdate:modelValue":l[3]||(l[3]=s=>t(o).whiteList=s),rows:3,type:"textarea",placeholder:t(e)("utils.whiteListPlaceHolder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(_,{label:t(e)("utils.status")},{default:i(()=>[a(B,{modelValue:t(o).status,"onUpdate:modelValue":l[4]||(l[4]=s=>t(o).status=s)},{default:i(()=>[a(x,{label:"blockUp"},{default:i(()=>[p(u(t(e)("utils.blockUp")),1)]),_:1}),a(x,{label:"normal"},{default:i(()=>[p(u(t(e)("utils.normal")),1)]),_:1}),a(x,{label:"whiteList"},{default:i(()=>[p(u(t(e)("utils.whiteList")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(_,null,{default:i(()=>[a(r,{type:"primary",onClick:l[5]||(l[5]=s=>$())},{default:i(()=>[p(u(t(e)("utils.save")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),a(N,{modelValue:w.value,"onUpdate:modelValue":l[9]||(l[9]=s=>w.value=s),"align-center":"","destroy-on-close":"",style:{"max-width":"600px"},title:t(e)("utils.delete")+t(e)("utils.app")},{default:i(()=>[p(u(t(e)("utils.deleteTip"))+" ",1),a(V,{modelValue:k.value,"onUpdate:modelValue":l[7]||(l[7]=s=>k.value=s)},null,8,["modelValue"]),a(r,{type:"primary",style:{"margin-top":"1em"},onClick:l[8]||(l[8]=s=>F())},{default:i(()=>[p(u(t(e)("utils.save")),1)]),_:1})]),_:1},8,["modelValue","title"])],64)}}});export{Ve as default};
