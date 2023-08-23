"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[979],{2979:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});a(7658);var t=a(3396),n=a(4870),o=a(2483),i=a(7139),u=a(3793),c=a(7312),s=a(11),d=a(6572),r=a(1888),p=a(1334),v=a(3121),m=a(6824),f=a(8521),y=a(3369),g=a(9234),b=a(8694),k=a(165);const h={class:"rounded-xl mt-15 pa-md-10 mx-md-10"},W=(0,t._)("span",{class:"text-h5"},"Edit Project",-1);var C={__name:"EditCv",setup(e){const l=(0,i.oR)(),a=(0,o.yj)(),C=a.params.id,w=(0,n.iH)({name:"",image:[],blob:null});(0,t.bv)((async()=>{if(await l.dispatch("cv/getCv",{id:C}),await l.dispatch("cv/getImageMetadata",C),l.state.cv.cv){const e=l.state.cv.image_metadata,{name:a,image:t}=l.state.cv.cv;w.value={name:a,image:[new File([e],e.name,{type:e.contentType})],blob:t}}}));const V=e=>{const l=e.target.files[0];if(l){const e=URL.createObjectURL(l);w.value.blob=e}},I=async()=>{await l.dispatch("cv/editCv",{id:C,name:w.value.name,image:w.value.image[0]}),u.Z.push({name:"Curiculum Vitae"})},_=()=>{u.Z.go(-1)};return(e,l)=>((0,t.wg)(),(0,t.iD)("div",h,[(0,t.Wm)(m.o,{justify:"center "},{default:(0,t.w5)((()=>[(0,t.Wm)(f.D,{cols:"12",md:"10"},{default:(0,t.w5)((()=>[(0,t.Wm)(s._,{class:"bg-dark ma-3 pt-5 rounded-xl"},{default:(0,t.w5)((()=>[(0,t.Wm)(d.E,{style:{color:"#0fe"},class:"text-center"},{default:(0,t.w5)((()=>[W])),_:1}),(0,t.Wm)(r.Z,{style:{color:"#0fe"}},{default:(0,t.w5)((()=>[(0,t.Wm)(y.K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m.o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f.D,{cols:"12"},{default:(0,t.w5)((()=>[(0,t.Wm)(k.h,{label:"Project Name",name:"project",variant:"outlined",modelValue:w.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>w.value.name=e),required:"",type:"text"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f.D,{cols:"12"},{default:(0,t.w5)((()=>[(0,t.Wm)(v.Z,{label:"Image",variant:"outlined","prepend-icon":"mdi-image",modelValue:w.value.image,"onUpdate:modelValue":l[1]||(l[1]=e=>w.value.image=e),accept:"image/*",type:"file",maxFileSize:"512000",onChange:V},null,8,["modelValue"]),w.value.blob?((0,t.wg)(),(0,t.j4)(s._,{key:0,width:"50%"},{default:(0,t.w5)((()=>[(0,t.Wm)(b.f,{src:w.value.blob},null,8,["src"])])),_:1})):(0,t.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(p.h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g.C),(0,t.Wm)(c.T,{color:"blue",variant:"text",onClick:l[2]||(l[2]=e=>_())},{default:(0,t.w5)((()=>[(0,t.Uk)(" Back ")])),_:1}),(0,t.Wm)(c.T,{color:"#0fe",variant:"text",onClick:l[3]||(l[3]=e=>I())},{default:(0,t.w5)((()=>[(0,t.Uk)(" Update ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})]))}};const w=C;var V=w},7103:function(e,l,a){a.d(l,{v:function(){return U}});var t=a(3396),n=a(9242),o=a(652),i=a(9166),u=a(1970),c=a(1138),s=a(7041),d=a(5221),r=a(6107),p=a(3766),v=a(131),m=a(1107),f=a(9888),y=a(4870);const g=Symbol.for("vuetify:v-chip-group"),b=(0,p.U)({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:v.vZ},...(0,i.l)(),...(0,u.k4)({selectedClass:"v-chip--selected"}),...(0,c.Q)(),...(0,s.x$)(),...(0,d.bk)({variant:"tonal"})},"v-chip-group");(0,m.ev)()({name:"VChipGroup",props:b(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const{themeClasses:n}=(0,s.ER)(e),{isSelected:o,select:i,next:c,prev:d,selected:p}=(0,u._v)(e,g);return(0,r.AF)({VChip:{color:(0,y.Vh)(e,"color"),disabled:(0,y.Vh)(e,"disabled"),filter:(0,y.Vh)(e,"filter"),variant:(0,y.Vh)(e,"variant")}}),(0,f.L)((()=>(0,t.Wm)(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>[a.default?.({isSelected:o,select:i,next:c,prev:d,selected:p.value})]}))),{}}});var k=a(836),h=a(8952),W=a(3289),C=a(4960),w=a(2718),V=a(9694),I=a(2465),_=a(4231),S=a(6183),z=a(9374),F=a(1629),x=a(8717),B=a(3824);const A=(0,p.U)({activeClass:String,appendAvatar:String,appendIcon:C.lE,closable:Boolean,closeIcon:{type:C.lE,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:C.lE,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:(0,v.as)(),onClickOnce:(0,v.as)(),...(0,w.m)(),...(0,i.l)(),...(0,V.f)(),...(0,I.c)(),...(0,u.YQ)(),...(0,_.I)(),...(0,S.GN)(),...(0,z.Z)(),...(0,c.Q)({tag:"span"}),...(0,s.x$)(),...(0,d.bk)({variant:"tonal"})},"v-chip"),U=(0,m.ev)()({name:"VChip",directives:{Ripple:B.H},props:A(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,l){let{attrs:a,emit:i,slots:c}=l;const{t:r}=(0,F.bU)(),{borderClasses:p}=(0,w.P)(e),{colorClasses:v,colorStyles:m,variantClasses:f}=(0,d.c1)(e),{densityClasses:y}=(0,V.t)(e),{elevationClasses:b}=(0,I.Y)(e),{roundedClasses:C}=(0,_.b)(e),{sizeClasses:B}=(0,z.t)(e),{themeClasses:A}=(0,s.ER)(e),U=(0,x.z)(e,"modelValue"),E=(0,u.Yt)(e,g,!1),H=(0,S.nB)(e,a),Y=(0,t.Fl)((()=>!1!==e.link&&H.isLink.value)),$=(0,t.Fl)((()=>!e.disabled&&!1!==e.link&&(!!E||e.link||H.isClickable.value))),j=(0,t.Fl)((()=>({"aria-label":r(e.closeLabel),onClick(e){U.value=!1,i("click:close",e)}})));function L(e){i("click",e),$.value&&(H.navigate?.(e),E?.toggle())}function R(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),L(e))}return()=>{const l=H.isLink.value?"a":e.tag,a=!(!e.appendIcon&&!e.appendAvatar),i=!(!a&&!c.append),u=!(!c.close&&!e.closable),s=!(!c.filter&&!e.filter)&&E,r=!(!e.prependIcon&&!e.prependAvatar),g=!(!r&&!c.prepend),w=!E||E.isSelected.value;return U.value&&(0,t.wy)((0,t.Wm)(l,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":$.value,"v-chip--filter":s,"v-chip--pill":e.pill},A.value,p.value,w?v.value:void 0,y.value,b.value,C.value,B.value,f.value,E?.selectedClass.value,e.class],style:[w?m.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:H.href.value,tabindex:$.value?0:void 0,onClick:L,onKeydown:$.value&&!Y.value&&R},{default:()=>[(0,d.Ux)($.value,"v-chip"),s&&(0,t.Wm)(h.Zq,{key:"filter"},{default:()=>[(0,t.wy)((0,t.Wm)("div",{class:"v-chip__filter"},[c.filter?(0,t.wy)((0,t.Wm)(k.z,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[(0,t.Q2)("slot"),c.filter,"default"]]):(0,t.Wm)(W.t,{key:"filter-icon",icon:e.filterIcon},null)]),[[n.F8,E.isSelected.value]])]}),g&&(0,t.Wm)("div",{key:"prepend",class:"v-chip__prepend"},[c.prepend?(0,t.Wm)(k.z,{key:"prepend-defaults",disabled:!r,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},c.prepend):(0,t.Wm)(t.HY,null,[e.prependIcon&&(0,t.Wm)(W.t,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&(0,t.Wm)(o.V,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),(0,t.Wm)("div",{class:"v-chip__content"},[c.default?.({isSelected:E?.isSelected.value,selectedClass:E?.selectedClass.value,select:E?.select,toggle:E?.toggle,value:E?.value.value,disabled:e.disabled})??e.text]),i&&(0,t.Wm)("div",{key:"append",class:"v-chip__append"},[c.append?(0,t.Wm)(k.z,{key:"append-defaults",disabled:!a,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},c.append):(0,t.Wm)(t.HY,null,[e.appendIcon&&(0,t.Wm)(W.t,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&(0,t.Wm)(o.V,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),u&&(0,t.Wm)("div",(0,t.dG)({key:"close",class:"v-chip__close"},j.value),[c.close?(0,t.Wm)(k.z,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},c.close):(0,t.Wm)(W.t,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}),[[(0,t.Q2)("ripple"),$.value&&e.ripple,null]])}}})},3121:function(e,l,a){a.d(l,{Z:function(){return b}});var t=a(3396),n=a(7173),o=a(8302),i=a(7103),u=a(2816),c=a(3185),s=a(8969),d=a(1629),r=a(8717),p=a(4870),v=a(3766),m=a(131),f=a(1107),y=a(9888);const g=(0,v.U)({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},...(0,o.c)({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>(0,m.FT)(e).every((e=>null!=e&&"object"===typeof e))},...(0,n.hy)({clearable:!0})},"v-file-input"),b=(0,f.ev)()({name:"VFileInput",inheritAttrs:!1,props:g(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:a,emit:v,slots:f}=l;const{t:g}=(0,d.bU)(),b=(0,r.z)(e,"modelValue"),{isFocused:k,focus:h,blur:W}=(0,s.K)(e),C=(0,t.Fl)((()=>"boolean"!==typeof e.showSize?e.showSize:void 0)),w=(0,t.Fl)((()=>(b.value??[]).reduce(((e,l)=>{let{size:a=0}=l;return e+a}),0))),V=(0,t.Fl)((()=>(0,m.XE)(w.value,C.value))),I=(0,t.Fl)((()=>(b.value??[]).map((l=>{const{name:a="",size:t=0}=l;return e.showSize?`${a} (${(0,m.XE)(t,C.value)})`:a})))),_=(0,t.Fl)((()=>{const l=b.value?.length??0;return e.showSize?g(e.counterSizeString,l,V.value):g(e.counterString,l)})),S=(0,p.iH)(),z=(0,p.iH)(),F=(0,p.iH)(),x=(0,t.Fl)((()=>k.value||e.active));function B(){F.value!==document.activeElement&&F.value?.focus(),k.value||h()}function A(e){E(e)}function U(e){v("mousedown:control",e)}function E(e){F.value?.click(),v("click:control",e)}function H(l){l.stopPropagation(),B(),(0,t.Y3)((()=>{b.value=[],(0,m.dr)(e["onClick:clear"],l)}))}return(0,t.YP)(b,(e=>{const l=!Array.isArray(e)||!e.length;l&&F.value&&(F.value.value="")})),(0,y.L)((()=>{const l=!(!f.counter&&!e.counter),c=!(!l&&!f.details),[s,d]=(0,m.An)(a),[{modelValue:r,...p}]=o.q.filterProps(e),[v]=(0,n.g8)(e);return(0,t.Wm)(o.q,(0,t.dG)({ref:S,modelValue:b.value,"onUpdate:modelValue":e=>b.value=e,class:["v-file-input",e.class],style:e.style,"onClick:prepend":A},s,p,{focused:k.value}),{...f,default:l=>{let{id:a,isDisabled:o,isDirty:u,isReadonly:c,isValid:s}=l;return(0,t.Wm)(n.hF,(0,t.dG)({ref:z,"prepend-icon":e.prependIcon,onMousedown:U,onClick:E,"onClick:clear":H,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},v,{id:a.value,active:x.value||u.value,dirty:u.value,disabled:o.value,focused:k.value,error:!1===s.value}),{...f,default:l=>{let{props:{class:a,...n}}=l;return(0,t.Wm)(t.HY,null,[(0,t.Wm)("input",(0,t.dG)({ref:F,type:"file",readonly:c.value,disabled:o.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),B()},onChange:e=>{if(!e.target)return;const l=e.target;b.value=[...l.files??[]]},onFocus:B,onBlur:W},n,d),null),(0,t.Wm)("div",{class:a},[!!b.value?.length&&(f.selection?f.selection({fileNames:I.value,totalBytes:w.value,totalBytesReadable:V.value}):e.chips?I.value.map((l=>(0,t.Wm)(i.v,{key:l,size:"small",color:e.color},{default:()=>[l]}))):I.value.join(", "))])])}})},details:c?e=>(0,t.Wm)(t.HY,null,[f.details?.(e),l&&(0,t.Wm)(t.HY,null,[(0,t.Wm)("span",null,null),(0,t.Wm)(u._,{active:!!b.value?.length,value:_.value},f.counter)])]):void 0})})),(0,c.F)({},S,z,F)}})}}]);
//# sourceMappingURL=979.32ae50f5.js.map