"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[943],{1943:function(e,a,t){t.r(a),t.d(a,{default:function(){return x}});var l=t(3396),u=t(9242),o=t(4870),n=t(2483),d=t(7139),m=t(3793),c=t(1038),i=t(7312),r=t(11),s=t(6572),p=t(1888),y=t(1334),f=t(3121),v=t(6824),g=t(8521),w=t(3369),W=t(9234),b=t(8694),_=t(165);const V=["onKeyup"],k=(0,l._)("span",{class:"text-h5"},"Edit Project",-1);var h={__name:"EditProductView",setup(e){const a=(0,d.oR)(),t=(0,n.yj)(),h=t.params.id,q=(0,o.iH)({name:"",price:"",quantity:"",image:[],blob:null,category:""});(0,l.bv)((async()=>{if(await a.dispatch("productsStore/getProduct",h),await a.dispatch("productsStore/getMetadataImageProduct",h),a.state.productsStore.product){const e=a.state.productsStore.metadata,{name:t,price:l,quantity:u,image:o,category:n}=a.state.productsStore.product;q.value={name:t,price:l,quantity:u,image:[new File([e],e.name,{type:e.contentType})],blob:o,category:n}}}));const x=e=>{const a=e.target.files[0];if(a){const e=URL.createObjectURL(a);q.value.blob=e}},U=async()=>{await a.dispatch("productsStore/editProduct",{id:h,name:q.value.name,price:q.value.price,image:q.value.image[0],quantity:q.value.quantity,category:q.value.category})},D=()=>{m.Z.go(-1)};return(e,a)=>((0,l.wg)(),(0,l.iD)("div",{class:"rounded-xl px-md-10 mx-md-10",onKeyup:(0,u.D2)(U,["enter"])},[(0,l.Wm)(v.o,{justify:"center "},{default:(0,l.w5)((()=>[(0,l.Wm)(g.D,{cols:"12",md:"10"},{default:(0,l.w5)((()=>[(0,l.Wm)(r._,{class:"bg-dark ma-3 pt-5 rounded-xl"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.E,{style:{color:"#0fe"},class:"text-center"},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)(p.Z,{style:{color:"#0fe"}},{default:(0,l.w5)((()=>[(0,l.Wm)(w.K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g.D,{cols:"12",md:"6",sm:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(_.h,{label:"Product Name",name:"product",variant:"outlined",modelValue:q.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value.name=e),required:"",type:"text"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(g.D,{cols:"12",md:"2",sm:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(_.h,{label:"Price",name:"price",variant:"outlined",modelValue:q.value.price,"onUpdate:modelValue":a[1]||(a[1]=e=>q.value.price=e),required:"",type:"text"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(g.D,{cols:"12",md:"2",sm:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(_.h,{label:"Quantity",name:"quantity",variant:"outlined",modelValue:q.value.quantity,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value.quantity=e),required:"",type:"text"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(g.D,{cols:"12",md:"2",sm:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.f,{label:"Category",items:["Makanan","Pakaian","Skincare"],variant:"outlined",modelValue:q.value.category,"onUpdate:modelValue":a[3]||(a[3]=e=>q.value.category=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(g.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(f.Z,{label:"Image",variant:"outlined","prepend-icon":"mdi-image",modelValue:q.value.image,"onUpdate:modelValue":a[4]||(a[4]=e=>q.value.image=e),accept:"image/*",type:"file",maxFileSize:"512000",onChange:x},null,8,["modelValue"]),q.value.blob?((0,l.wg)(),(0,l.j4)(r._,{key:0,width:"50%"},{default:(0,l.w5)((()=>[(0,l.Wm)(b.f,{src:q.value.blob},null,8,["src"])])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(y.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W.C),(0,l.Wm)(i.T,{color:"blue",variant:"text",onClick:a[5]||(a[5]=e=>D())},{default:(0,l.w5)((()=>[(0,l.Uk)(" Back ")])),_:1}),(0,l.Wm)(i.T,{color:"#0fe",variant:"text",onClick:a[6]||(a[6]=e=>U())},{default:(0,l.w5)((()=>[(0,l.Uk)(" Update ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})],40,V))}};const q=h;var x=q}}]);
//# sourceMappingURL=943.738e65c1.js.map