"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[463],{2463:function(e,l,t){t.r(l),t.d(l,{default:function(){return E}});var a=t(3396),n=t(4870),o=t(2483),i=t(7139),u=t(3793),r=t(7312),s=t(11),c=t(6572),d=t(1888),p=t(1334),v=t(3121),m=t(6824),f=t(8521),y=t(3369),g=t(9234),b=t(8694),h=t(165),k=t(9242),x=(t(348),t(7173)),W=t(8302),w=t(2816),V=t(7052),C=t(3185),_=t(8969),S=t(8717),I=t(3766),F=t(1107),z=t(131),B=t(9888);const P=(0,I.U)({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...(0,W.c)(),...(0,x.hy)()},"v-textarea"),j=(0,F.ev)()({name:"VTextarea",directives:{Intersect:V.Z},inheritAttrs:!1,props:P(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:t,emit:o,slots:i}=l;const u=(0,S.z)(e,"modelValue"),{isFocused:r,focus:s,blur:c}=(0,_.K)(e),d=(0,a.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(u.value):(u.value||"").toString().length)),p=(0,a.Fl)((()=>t.maxlength?t.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function v(l,t){e.autofocus&&l&&t[0].target?.focus?.()}const m=(0,n.iH)(),f=(0,n.iH)(),y=(0,n.XI)(""),g=(0,n.iH)(),b=(0,a.Fl)((()=>e.persistentPlaceholder||r.value||e.active));function h(){g.value!==document.activeElement&&g.value?.focus(),r.value||s()}function V(e){h(),o("click:control",e)}function I(e){o("mousedown:control",e)}function F(l){l.stopPropagation(),h(),(0,a.Y3)((()=>{u.value="",(0,z.dr)(e["onClick:clear"],l)}))}function P(l){const t=l.target;if(u.value=t.value,e.modelModifiers?.trim){const e=[t.selectionStart,t.selectionEnd];(0,a.Y3)((()=>{t.selectionStart=e[0],t.selectionEnd=e[1]}))}}const j=(0,n.iH)();function Y(){e.autoGrow&&(0,a.Y3)((()=>{if(!j.value||!f.value)return;const l=getComputedStyle(j.value),t=getComputedStyle(f.value.$el),a=parseFloat(l.getPropertyValue("--v-field-padding-top"))+parseFloat(l.getPropertyValue("--v-input-padding-top"))+parseFloat(l.getPropertyValue("--v-field-padding-bottom")),n=j.value.scrollHeight,o=parseFloat(l.lineHeight),i=Math.max(parseFloat(e.rows)*o+a,parseFloat(t.getPropertyValue("--v-input-control-height"))),u=parseFloat(e.maxRows)*o+a||1/0;y.value=(0,z.kb)((0,z.uZ)(n??0,i,u))}))}let A;return(0,a.bv)(Y),(0,a.YP)(u,Y),(0,a.YP)((()=>e.rows),Y),(0,a.YP)((()=>e.maxRows),Y),(0,a.YP)((()=>e.density),Y),(0,a.YP)(j,(e=>{e?(A=new ResizeObserver(Y),A.observe(j.value)):A?.disconnect()})),(0,a.Jd)((()=>{A?.disconnect()})),(0,B.L)((()=>{const l=!!(i.counter||e.counter||e.counterValue),n=!(!l&&!i.details),[o,s]=(0,z.An)(t),[{modelValue:C,..._}]=W.q.filterProps(e),[S]=(0,x.g8)(e);return(0,a.Wm)(W.q,(0,a.dG)({ref:m,modelValue:u.value,"onUpdate:modelValue":e=>u.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},o,_,{focused:r.value}),{...i,default:l=>{let{isDisabled:t,isDirty:n,isReadonly:o,isValid:d}=l;return(0,a.Wm)(x.hF,(0,a.dG)({ref:f,style:{"--v-textarea-control-height":y.value},onClick:V,onMousedown:I,"onClick:clear":F,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},S,{active:b.value||n.value,dirty:n.value||e.dirty,disabled:t.value,focused:r.value,error:!1===d.value}),{...i,default:l=>{let{props:{class:n,...i}}=l;return(0,a.Wm)(a.HY,null,[e.prefix&&(0,a.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,a.wy)((0,a.Wm)("textarea",(0,a.dG)({ref:g,class:n,value:u.value,onInput:P,autofocus:e.autofocus,readonly:o.value,disabled:t.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:h,onBlur:c},i,s),null),[[(0,a.Q2)("intersect"),{handler:v},null,{once:!0}]]),e.autoGrow&&(0,a.wy)((0,a.Wm)("textarea",{class:[n,"v-textarea__sizer"],"onUpdate:modelValue":e=>u.value=e,ref:j,readonly:!0,"aria-hidden":"true"},null),[[k.nr,u.value]]),e.suffix&&(0,a.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?t=>(0,a.Wm)(a.HY,null,[i.details?.(t),l&&(0,a.Wm)(a.HY,null,[(0,a.Wm)("span",null,null),(0,a.Wm)(w._,{active:e.persistentCounter||r.value,value:d.value,max:p.value},i.counter)])]):void 0})})),(0,C.F)({},m,f,g)}}),Y={class:"rounded-xl mt-15 pa-md-10 mx-md-10"},A=(0,a._)("span",{class:"text-h5"},"Edit Project",-1);var U={__name:"EditProjectView",setup(e){const l=(0,i.oR)(),t=(0,o.yj)(),k=t.params.id,x=(0,n.iH)({name:"",description:"",image:[],url_site:"",blob:null});(0,a.bv)((async()=>{if(await l.dispatch("projects/getProject",k),await l.dispatch("projects/getMetadataImageProject",k),l.state.projects.project){const e=l.state.projects.image_metadata,{name:t,description:a,url_site:n,image:o}=l.state.projects.project;x.value={name:t,description:a,image:[new File([e],e.name,{type:e.contentType})],url_site:n,blob:o}}}));const W=e=>{const l=e.target.files[0];if(l){const e=URL.createObjectURL(l);x.value.blob=e}},w=async()=>{await l.dispatch("projects/editProject",{id:k,name:x.value.name,description:x.value.description,image:x.value.image[0],url_site:x.value.url_site})},V=()=>{u.Z.go(-1)};return(e,l)=>((0,a.wg)(),(0,a.iD)("div",Y,[(0,a.Wm)(m.o,{justify:"center "},{default:(0,a.w5)((()=>[(0,a.Wm)(f.D,{cols:"12",md:"10"},{default:(0,a.w5)((()=>[(0,a.Wm)(s._,{class:"bg-dark ma-3 pt-5 rounded-xl"},{default:(0,a.w5)((()=>[(0,a.Wm)(c.E,{style:{color:"#0fe"},class:"text-center"},{default:(0,a.w5)((()=>[A])),_:1}),(0,a.Wm)(d.Z,{style:{color:"#0fe"}},{default:(0,a.w5)((()=>[(0,a.Wm)(y.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(h.h,{label:"Project Name",name:"project",variant:"outlined",modelValue:x.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>x.value.name=e),required:"",type:"text"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(f.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{label:"Description",name:"description",variant:"outlined",modelValue:x.value.description,"onUpdate:modelValue":l[1]||(l[1]=e=>x.value.description=e),required:"",type:"text"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(f.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(h.h,{label:"Url Web Site",name:"url",variant:"outlined",modelValue:x.value.url_site,"onUpdate:modelValue":l[2]||(l[2]=e=>x.value.url_site=e),required:"",type:"text"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(f.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(v.Z,{label:"Image",variant:"outlined","prepend-icon":"mdi-image",modelValue:x.value.image,"onUpdate:modelValue":l[3]||(l[3]=e=>x.value.image=e),accept:"image/*",type:"file",maxFileSize:"512000",onChange:W},null,8,["modelValue"]),x.value.blob?((0,a.wg)(),(0,a.j4)(s._,{key:0,width:"50%"},{default:(0,a.w5)((()=>[(0,a.Wm)(b.f,{src:x.value.blob},null,8,["src"])])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(p.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g.C),(0,a.Wm)(r.T,{color:"blue",variant:"text",onClick:l[4]||(l[4]=e=>V())},{default:(0,a.w5)((()=>[(0,a.Uk)(" Back ")])),_:1}),(0,a.Wm)(r.T,{color:"#0fe",variant:"text",onClick:l[5]||(l[5]=e=>w())},{default:(0,a.w5)((()=>[(0,a.Uk)(" Update ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})]))}};const H=U;var E=H},7103:function(e,l,t){t.d(l,{v:function(){return j}});var a=t(3396),n=t(9242),o=t(652),i=t(9166),u=t(1970),r=t(1138),s=t(7041),c=t(5221),d=t(6107),p=t(3766),v=t(131),m=t(1107),f=t(9888),y=t(4870);const g=Symbol.for("vuetify:v-chip-group"),b=(0,p.U)({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:v.vZ},...(0,i.l)(),...(0,u.k4)({selectedClass:"v-chip--selected"}),...(0,r.Q)(),...(0,s.x$)(),...(0,c.bk)({variant:"tonal"})},"v-chip-group");(0,m.ev)()({name:"VChipGroup",props:b(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{themeClasses:n}=(0,s.ER)(e),{isSelected:o,select:i,next:r,prev:c,selected:p}=(0,u._v)(e,g);return(0,d.AF)({VChip:{color:(0,y.Vh)(e,"color"),disabled:(0,y.Vh)(e,"disabled"),filter:(0,y.Vh)(e,"filter"),variant:(0,y.Vh)(e,"variant")}}),(0,f.L)((()=>(0,a.Wm)(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>[t.default?.({isSelected:o,select:i,next:r,prev:c,selected:p.value})]}))),{}}});var h=t(836),k=t(8952),x=t(3289),W=t(4960),w=t(2718),V=t(9694),C=t(2465),_=t(4231),S=t(6183),I=t(9374),F=t(1629),z=t(8717),B=t(3824);const P=(0,p.U)({activeClass:String,appendAvatar:String,appendIcon:W.lE,closable:Boolean,closeIcon:{type:W.lE,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:W.lE,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:(0,v.as)(),onClickOnce:(0,v.as)(),...(0,w.m)(),...(0,i.l)(),...(0,V.f)(),...(0,C.c)(),...(0,u.YQ)(),...(0,_.I)(),...(0,S.GN)(),...(0,I.Z)(),...(0,r.Q)({tag:"span"}),...(0,s.x$)(),...(0,c.bk)({variant:"tonal"})},"v-chip"),j=(0,m.ev)()({name:"VChip",directives:{Ripple:B.H},props:P(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,l){let{attrs:t,emit:i,slots:r}=l;const{t:d}=(0,F.bU)(),{borderClasses:p}=(0,w.P)(e),{colorClasses:v,colorStyles:m,variantClasses:f}=(0,c.c1)(e),{densityClasses:y}=(0,V.t)(e),{elevationClasses:b}=(0,C.Y)(e),{roundedClasses:W}=(0,_.b)(e),{sizeClasses:B}=(0,I.t)(e),{themeClasses:P}=(0,s.ER)(e),j=(0,z.z)(e,"modelValue"),Y=(0,u.Yt)(e,g,!1),A=(0,S.nB)(e,t),U=(0,a.Fl)((()=>!1!==e.link&&A.isLink.value)),H=(0,a.Fl)((()=>!e.disabled&&!1!==e.link&&(!!Y||e.link||A.isClickable.value))),E=(0,a.Fl)((()=>({"aria-label":d(e.closeLabel),onClick(e){j.value=!1,i("click:close",e)}})));function R(e){i("click",e),H.value&&(A.navigate?.(e),Y?.toggle())}function G(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),R(e))}return()=>{const l=A.isLink.value?"a":e.tag,t=!(!e.appendIcon&&!e.appendAvatar),i=!(!t&&!r.append),u=!(!r.close&&!e.closable),s=!(!r.filter&&!e.filter)&&Y,d=!(!e.prependIcon&&!e.prependAvatar),g=!(!d&&!r.prepend),w=!Y||Y.isSelected.value;return j.value&&(0,a.wy)((0,a.Wm)(l,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":H.value,"v-chip--filter":s,"v-chip--pill":e.pill},P.value,p.value,w?v.value:void 0,y.value,b.value,W.value,B.value,f.value,Y?.selectedClass.value,e.class],style:[w?m.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:A.href.value,tabindex:H.value?0:void 0,onClick:R,onKeydown:H.value&&!U.value&&G},{default:()=>[(0,c.Ux)(H.value,"v-chip"),s&&(0,a.Wm)(k.Zq,{key:"filter"},{default:()=>[(0,a.wy)((0,a.Wm)("div",{class:"v-chip__filter"},[r.filter?(0,a.wy)((0,a.Wm)(h.z,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[(0,a.Q2)("slot"),r.filter,"default"]]):(0,a.Wm)(x.t,{key:"filter-icon",icon:e.filterIcon},null)]),[[n.F8,Y.isSelected.value]])]}),g&&(0,a.Wm)("div",{key:"prepend",class:"v-chip__prepend"},[r.prepend?(0,a.Wm)(h.z,{key:"prepend-defaults",disabled:!d,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},r.prepend):(0,a.Wm)(a.HY,null,[e.prependIcon&&(0,a.Wm)(x.t,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&(0,a.Wm)(o.V,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),(0,a.Wm)("div",{class:"v-chip__content"},[r.default?.({isSelected:Y?.isSelected.value,selectedClass:Y?.selectedClass.value,select:Y?.select,toggle:Y?.toggle,value:Y?.value.value,disabled:e.disabled})??e.text]),i&&(0,a.Wm)("div",{key:"append",class:"v-chip__append"},[r.append?(0,a.Wm)(h.z,{key:"append-defaults",disabled:!t,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},r.append):(0,a.Wm)(a.HY,null,[e.appendIcon&&(0,a.Wm)(x.t,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&(0,a.Wm)(o.V,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),u&&(0,a.Wm)("div",(0,a.dG)({key:"close",class:"v-chip__close"},E.value),[r.close?(0,a.Wm)(h.z,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},r.close):(0,a.Wm)(x.t,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}),[[(0,a.Q2)("ripple"),H.value&&e.ripple,null]])}}})},3121:function(e,l,t){t.d(l,{Z:function(){return b}});var a=t(3396),n=t(7173),o=t(8302),i=t(7103),u=t(2816),r=t(3185),s=t(8969),c=t(1629),d=t(8717),p=t(4870),v=t(3766),m=t(131),f=t(1107),y=t(9888);const g=(0,v.U)({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},...(0,o.c)({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>(0,m.FT)(e).every((e=>null!=e&&"object"===typeof e))},...(0,n.hy)({clearable:!0})},"v-file-input"),b=(0,f.ev)()({name:"VFileInput",inheritAttrs:!1,props:g(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:t,emit:v,slots:f}=l;const{t:g}=(0,c.bU)(),b=(0,d.z)(e,"modelValue"),{isFocused:h,focus:k,blur:x}=(0,s.K)(e),W=(0,a.Fl)((()=>"boolean"!==typeof e.showSize?e.showSize:void 0)),w=(0,a.Fl)((()=>(b.value??[]).reduce(((e,l)=>{let{size:t=0}=l;return e+t}),0))),V=(0,a.Fl)((()=>(0,m.XE)(w.value,W.value))),C=(0,a.Fl)((()=>(b.value??[]).map((l=>{const{name:t="",size:a=0}=l;return e.showSize?`${t} (${(0,m.XE)(a,W.value)})`:t})))),_=(0,a.Fl)((()=>{const l=b.value?.length??0;return e.showSize?g(e.counterSizeString,l,V.value):g(e.counterString,l)})),S=(0,p.iH)(),I=(0,p.iH)(),F=(0,p.iH)(),z=(0,a.Fl)((()=>h.value||e.active));function B(){F.value!==document.activeElement&&F.value?.focus(),h.value||k()}function P(e){Y(e)}function j(e){v("mousedown:control",e)}function Y(e){F.value?.click(),v("click:control",e)}function A(l){l.stopPropagation(),B(),(0,a.Y3)((()=>{b.value=[],(0,m.dr)(e["onClick:clear"],l)}))}return(0,a.YP)(b,(e=>{const l=!Array.isArray(e)||!e.length;l&&F.value&&(F.value.value="")})),(0,y.L)((()=>{const l=!(!f.counter&&!e.counter),r=!(!l&&!f.details),[s,c]=(0,m.An)(t),[{modelValue:d,...p}]=o.q.filterProps(e),[v]=(0,n.g8)(e);return(0,a.Wm)(o.q,(0,a.dG)({ref:S,modelValue:b.value,"onUpdate:modelValue":e=>b.value=e,class:["v-file-input",e.class],style:e.style,"onClick:prepend":P},s,p,{focused:h.value}),{...f,default:l=>{let{id:t,isDisabled:o,isDirty:u,isReadonly:r,isValid:s}=l;return(0,a.Wm)(n.hF,(0,a.dG)({ref:I,"prepend-icon":e.prependIcon,onMousedown:j,onClick:Y,"onClick:clear":A,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},v,{id:t.value,active:z.value||u.value,dirty:u.value,disabled:o.value,focused:h.value,error:!1===s.value}),{...f,default:l=>{let{props:{class:t,...n}}=l;return(0,a.Wm)(a.HY,null,[(0,a.Wm)("input",(0,a.dG)({ref:F,type:"file",readonly:r.value,disabled:o.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),B()},onChange:e=>{if(!e.target)return;const l=e.target;b.value=[...l.files??[]]},onFocus:B,onBlur:x},n,c),null),(0,a.Wm)("div",{class:t},[!!b.value?.length&&(f.selection?f.selection({fileNames:C.value,totalBytes:w.value,totalBytesReadable:V.value}):e.chips?C.value.map((l=>(0,a.Wm)(i.v,{key:l,size:"small",color:e.color},{default:()=>[l]}))):C.value.join(", "))])])}})},details:r?e=>(0,a.Wm)(a.HY,null,[f.details?.(e),l&&(0,a.Wm)(a.HY,null,[(0,a.Wm)("span",null,null),(0,a.Wm)(u._,{active:!!b.value?.length,value:_.value},f.counter)])]):void 0})})),(0,r.F)({},S,I,F)}})}}]);
//# sourceMappingURL=463.7b6d5978.js.map