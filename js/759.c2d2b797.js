"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[759],{6921:function(e,t,n){var s=n(1795),a=n(3396);const l=()=>{(0,a.bv)((()=>{const e=document.querySelectorAll(".json");e.forEach((e=>{s.Z.highlightElement(e,{lenguage:"json"})}))}))};t.Z=l},1023:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(3396),a=n(4870),l=n(7312),c=n(8521),o={__name:"BtnCopy",props:["className"],setup(e){const t=e,n=(0,a.iH)("mdi-content-copy"),o=(0,s.Fl)((()=>t.className)),u=()=>{const e=document.querySelector(`.${o.value}`).innerText,t=document.createElement("input");t.setAttribute("value",e),document.body.appendChild(t),t.select(),document.execCommand("copy"),t.parentNode.removeChild(t),n.value="mdi-check",setTimeout((()=>{n.value="mdi-content-copy"}),2e3)};return(e,t)=>((0,s.wg)(),(0,s.j4)(c.D,{cols:"12",class:"text-end bg-copy"},{default:(0,s.w5)((()=>[(0,s.Wm)(l.T,{icon:n.value,color:"bg-white text-black "==e.mode?"black":"white",onClick:t[0]||(t[0]=e=>u("payloadUsers")),variant:"tonal"},null,8,["icon","color"])])),_:1}))}};const u=o;var i=u},6759:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var s=n(3396),a=n(2268),l=n(4870),c=n(1023),o=n(7139),u=n(6921),i=n(11),d=n(6572);const r={id:"deleteAuthentication"},h=(0,s._)("h6",null,"Endpoint",-1),m=(0,s._)("h6",null,"Headers",-1),p={class:"json"},_={class:"deleteAuthHeaders"},v=(0,s._)("h6",null,"Response",-1),k={class:"deleteAuthResponse json"};var w={__name:"AuthDelete",setup(e){const t=(0,o.oR)(),n=(0,s.Fl)((()=>t.state.mode?"bg-white text-black ":"bg-element text-white")),w=(0,l.iH)('\n  {\n    "status": "success",\n    "message": "Token berhasil dihapus",\n  }\n  '),b=(0,l.iH)('\n  { \n    "Headers": { \n      "Authorization": "Bearer accessToken"; \n    } \n  }   \n  ');return(0,u.Z)(),(e,o)=>((0,s.wg)(),(0,s.iD)("section",r,[(0,s._)("h5",{class:(0,a.C_)(["font-weight-bold",(0,l.SU)(t).state.mode?"text-black":"text-white"])}," DELETE Authentication ",2),h,(0,s.Wm)(i._,{width:"100%",height:"auto",class:(0,a.C_)(["my-5",n.value])},{default:(0,s.w5)((()=>[(0,s.Wm)(d.E,{class:"text-body-1"},{default:(0,s.w5)((()=>[(0,s.Uk)(" DELETE /auth/<refreshToken> ")])),_:1})])),_:1},8,["class"]),m,(0,s.Wm)(i._,{class:(0,a.C_)(["my-5",n.value])},{default:(0,s.w5)((()=>[(0,s.Wm)(c.Z,{"class-name":"deleteAuthHeaders"}),(0,s._)("pre",p,[(0,s.Uk)("              "),(0,s._)("code",_,"\n                \n  "+(0,a.zw)(b.value)+"  \n  \n              ",1),(0,s.Uk)("\n            ")])])),_:1},8,["class"]),v,(0,s.Wm)(i._,{class:(0,a.C_)(["my-5",n.value])},{default:(0,s.w5)((()=>[(0,s.Wm)(c.Z,{"class-name":"deleteAuthResponse"}),(0,s._)("pre",k,[(0,s.Uk)("              "),(0,s._)("code",null,"\n    "+(0,a.zw)(w.value)+"\n              ",1),(0,s.Uk)("\n            ")])])),_:1},8,["class"])]))}};const b=w;var f=b}}]);
//# sourceMappingURL=759.c2d2b797.js.map