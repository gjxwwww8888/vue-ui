import{d as E,aN as S,aP as I,aT as D,o as V,p as C,h as i,x as e,j as d,b0 as P,b1 as z,w as o,t as c,b5 as N,r as y,aV as T,aa as B,v as p,ac as R,ae as U}from"./index-3cd27a6a.js";import{E as j}from"./el-card-e3c4ffd1.js";import{E as L,a as q}from"./el-form-item-ce701022.js";import{E as A}from"./el-text-0023f646.js";import{E as F}from"./el-checkbox-33a368e5.js";import{c as M,E as O,a as G,b as H}from"./el-switch-3eb7df81.js";import"./el-popper-3a60ade8.js";import{_ as J}from"./Icon.vue_vue_type_script_lang-e4fdbc75.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import"./refs-c87e1f6f.js";const Q={class:"flex-y-center justify-between px-25 <sm:px-8 absolute top-0 right-0 left-0 h-20"},W={class:"flex-y-center"},X=i("div",{class:"text-5 ml-4"},[c("Admin"),i("span",{class:"color-primary ml-1"},"PRO")],-1),Y={class:"flex-y-center"},Z={class:"flex-center h-5 w-10 cursor-pointer"},ee=E({__name:"index",setup(g){const m=S(),n=I(),{locale:u}=D(),h=r=>{n.setIsDark(r),n.setThemeColor(n.themeColor)},s=r=>{u.value=r,m.setLanguage(r)};return(r,a)=>{const t=J,f=M,l=O,w=G,v=H;return V(),C("div",Q,[i("div",W,[e(t,{name:"local-icon-logo",size:"24",color:"var(--el-color-primary)"}),X]),i("div",Y,[e(f,{"model-value":d(n).isDark,"inline-prompt":"","active-icon":d(P),"inactive-icon":d(z),onChange:h},null,8,["model-value","active-icon","inactive-icon"]),e(v,{trigger:"click",onCommand:s},{dropdown:o(()=>[e(w,null,{default:o(()=>[e(l,{disabled:d(m).language==="zh-CN",command:"zh-CN"},{default:o(()=>[c(" 简体中文 ")]),_:1},8,["disabled"]),e(l,{disabled:d(m).language==="en",command:"en"},{default:o(()=>[c(" English ")]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[i("div",Z,[e(t,{name:"local-icon-language",size:"20"})])]),_:1})])])}}}),x=g=>N.global.t(g),oe={username:{required:!0,message:x("login.usernamePlaceholder"),trigger:"blur"},password:{required:!0,message:x("login.passwordPlaceholder"),trigger:"blur"}},ae={class:"login-container"},te={class:"mt-6 font-500 text-primary text-18px",type:"primary"},se={class:"w-full flex-y-center justify-between"},le=E({name:"Login",__name:"index",setup(g){const m=y(),n=y(!1),u=y(!1),h=T(),s=B({username:"admin",password:"123456"}),r=async()=>{var a;await((a=m.value)==null?void 0:a.validate());try{u.value=!0,await h.login(s)}finally{u.value=!1}};return(a,t)=>{const f=R,l=L,w=F,v=A,b=U,$=q,k=j;return V(),C("div",ae,[e(d(ee)),e(k,{class:"z-1 !border-none w-100 !bg-transparent !rounded-4% <sm:w-83"},{default:o(()=>[i("h3",te,p(a.$t("login.login")),1),e($,{ref_key:"formRef",ref:m,model:s,rules:d(oe),class:"mt-6",size:"large"},{default:o(()=>[e(l,{prop:"username"},{default:o(()=>[e(f,{modelValue:s.username,"onUpdate:modelValue":t[0]||(t[0]=_=>s.username=_),placeholder:a.$t("login.usernamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1}),e(l,{prop:"password"},{default:o(()=>[e(f,{modelValue:s.password,"onUpdate:modelValue":t[1]||(t[1]=_=>s.password=_),"show-password":"",placeholder:a.$t("login.passwordPlaceholder")},null,8,["modelValue","placeholder"])]),_:1}),e(l,null,{default:o(()=>[i("div",se,[e(w,{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=_=>n.value=_),class:"<sm:text-sm"},{default:o(()=>[c(p(a.$t("login.remember")),1)]),_:1},8,["modelValue"]),e(v,{type:"primary",class:"cursor-pointer <sm:!text-sm"},{default:o(()=>[c(p(a.$t("login.forgetPassword")),1)]),_:1})])]),_:1}),e(l,null,{default:o(()=>[e(b,{class:"w-full",type:"primary",onClick:r,loading:u.value},{default:o(()=>[c(p(a.$t("login.login")),1)]),_:1},8,["loading"])]),_:1}),e(l,null,{default:o(()=>[e(b,{class:"w-full"},{default:o(()=>[c(p(a.$t("login.register")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}});const ge=K(le,[["__scopeId","data-v-05b6dfd7"]]);export{ge as default};