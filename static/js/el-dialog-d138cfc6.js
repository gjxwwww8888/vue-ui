import{d as D,a3 as G,R as T,b1 as H,c as R,bL as W,o as C,l as I,g as $,m as g,n as d,h as e,t as X,q as w,w as u,e as A,i as Z,E as _,j as F,I as N,_ as M,bM as x,u as ee,ai as L,a as ae,r as E,Q as se,f as oe,ag as te,ah as le,ak as ne,a$ as re,v as ie,s as de,al as ce,bN as ue,y as ge,a8 as pe}from"./index-6e274ef2.js";import{b as fe,c as me,d as be,a as ve,u as ye}from"./use-dialog-efb6069c.js";import{c as Ce}from"./refs-483dc387.js";const O=Symbol("dialogInjectionKey"),he=["aria-label"],ke=["id"],Se=D({name:"ElDialogContent"}),Ee=D({...Se,props:fe,emits:me,setup(n){const p=n,{t:i}=G(),{Close:f}=x,{dialogRef:t,headerRef:r,bodyId:h,ns:o,style:c}=T(O),{focusTrapRef:l}=T(H),m=Ce(l,t),b=R(()=>p.draggable);return W(t,r,b),(a,k)=>(C(),I("div",{ref:e(m),class:d([e(o).b(),e(o).is("fullscreen",a.fullscreen),e(o).is("draggable",e(b)),e(o).is("align-center",a.alignCenter),{[e(o).m("center")]:a.center},a.customClass]),style:N(e(c)),tabindex:"-1"},[$("header",{ref_key:"headerRef",ref:r,class:d(e(o).e("header"))},[g(a.$slots,"header",{},()=>[$("span",{role:"heading",class:d(e(o).e("title"))},X(a.title),3)]),a.showClose?(C(),I("button",{key:0,"aria-label":e(i)("el.dialog.close"),class:d(e(o).e("headerbtn")),type:"button",onClick:k[0]||(k[0]=P=>a.$emit("close"))},[w(e(_),{class:d(e(o).e("close"))},{default:u(()=>[(C(),A(Z(a.closeIcon||e(f))))]),_:1},8,["class"])],10,he)):F("v-if",!0)],2),$("div",{id:e(h),class:d(e(o).e("body"))},[g(a.$slots,"default")],10,ke),a.$slots.footer?(C(),I("footer",{key:0,class:d(e(o).e("footer"))},[g(a.$slots,"footer")],2)):F("v-if",!0)],6))}});var Re=M(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const $e=["aria-label","aria-labelledby","aria-describedby"],we=D({name:"ElDialog",inheritAttrs:!1}),De=D({...we,props:be,emits:ve,setup(n,{expose:p}){const i=n,f=ee();L({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},R(()=>!!f.title)),L({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},R(()=>!!i.customClass));const t=ae("dialog"),r=E(),h=E(),o=E(),{visible:c,titleId:l,bodyId:m,style:b,overlayDialogStyle:a,rendered:k,zIndex:P,afterEnter:B,afterLeave:j,beforeLeave:q,handleClose:z,onModalClick:J,onOpenAutoFocus:K,onCloseAutoFocus:U,onCloseRequested:V,onFocusoutPrevented:Q}=ye(i,r);se(O,{dialogRef:r,headerRef:h,bodyId:m,ns:t,rendered:k,style:b});const v=ue(J),Y=R(()=>i.draggable&&!i.fullscreen);return p({visible:c,dialogContentRef:o}),(s,y)=>(C(),A(ce,{to:"body",disabled:!s.appendToBody},[w(de,{name:"dialog-fade",onAfterEnter:e(B),onAfterLeave:e(j),onBeforeLeave:e(q),persisted:""},{default:u(()=>[oe(w(e(te),{"custom-mask-event":"",mask:s.modal,"overlay-class":s.modalClass,"z-index":e(P)},{default:u(()=>[$("div",{role:"dialog","aria-modal":"true","aria-label":s.title||void 0,"aria-labelledby":s.title?void 0:e(l),"aria-describedby":e(m),class:d(`${e(t).namespace.value}-overlay-dialog`),style:N(e(a)),onClick:y[0]||(y[0]=(...S)=>e(v).onClick&&e(v).onClick(...S)),onMousedown:y[1]||(y[1]=(...S)=>e(v).onMousedown&&e(v).onMousedown(...S)),onMouseup:y[2]||(y[2]=(...S)=>e(v).onMouseup&&e(v).onMouseup(...S))},[w(e(le),{loop:"",trapped:e(c),"focus-start-el":"container",onFocusAfterTrapped:e(K),onFocusAfterReleased:e(U),onFocusoutPrevented:e(Q),onReleaseRequested:e(V)},{default:u(()=>[e(k)?(C(),A(Re,ne({key:0,ref_key:"dialogContentRef",ref:o},s.$attrs,{"custom-class":s.customClass,center:s.center,"align-center":s.alignCenter,"close-icon":s.closeIcon,draggable:e(Y),fullscreen:s.fullscreen,"show-close":s.showClose,title:s.title,onClose:e(z)}),re({header:u(()=>[s.$slots.title?g(s.$slots,"title",{key:1}):g(s.$slots,"header",{key:0,close:e(z),titleId:e(l),titleClass:e(t).e("title")})]),default:u(()=>[g(s.$slots,"default")]),_:2},[s.$slots.footer?{name:"footer",fn:u(()=>[g(s.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):F("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,$e)]),_:3},8,["mask","overlay-class","z-index"]),[[ie,e(c)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Ie=M(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const ze=ge(Ie),Te=n=>{const p=E([]),i=E(!1),f=JSON.parse(JSON.stringify(n.params||{})),t=pe({page:1,pageSize:20,pageSizes:[10,20,30,50],total:10}),r=async()=>{i.value=!0;const l=n.isPageable??!0,m=l?{page:t.page,pageSize:t.pageSize}:{},b=Object.assign({},n.params,m);let{data:a}=await n.apiFn(b).finally(()=>i.value=!1);n.callback&&(a=n.callback(a)),p.value=l?a.list:a,t.total=a.total},h=async l=>{t.page=1,t.pageSize=l,await r()},o=async l=>{t.page=l,await r()},c=()=>{Object.keys(f).forEach(l=>{n.params[l]=f[l]}),r()};return(n.immediate??!0)&&r(),{tableData:p,page:t,loading:i,getList:r,resetParams:c,handleSizeChange:h,handleCurrentChange:o}};export{ze as E,Te as u};