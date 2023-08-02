import{d as o,u as S,a as p,c as g,o as c,b as d,r as m,n as f,e as s,f as v,w as b,g as k,h as B,i as H,j as u,k as _,l as $}from"./index-d01574fc.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as h}from"./plugin-vue_export-helper-1cff8a04.js";const V=o({name:"ElContainer"}),A=o({...V,props:{direction:{type:String}},setup(r){const t=r,e=S(),n=p("container"),a=g(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:e&&e.default?e.default().some(i=>{const w=i.type.name;return w==="ElHeader"||w==="ElFooter"}):!1);return(l,i)=>(c(),d("section",{class:f([s(n).b(),s(n).is("vertical",s(a))])},[m(l.$slots,"default")],2))}});var F=h(A,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const M=o({name:"ElAside"}),z=o({...M,props:{width:{type:String,default:null}},setup(r){const t=r,e=p("aside"),n=g(()=>t.width?e.cssVarBlock({width:t.width}):{});return(a,l)=>(c(),d("aside",{class:f(s(e).b()),style:v(s(n))},[m(a.$slots,"default")],6))}});var y=h(z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const I=o({name:"ElFooter"}),j=o({...I,props:{height:{type:String,default:null}},setup(r){const t=r,e=p("footer"),n=g(()=>t.height?e.cssVarBlock({height:t.height}):{});return(a,l)=>(c(),d("footer",{class:f(s(e).b()),style:v(s(n))},[m(a.$slots,"default")],6))}});var E=h(j,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const T=o({name:"ElHeader"}),q=o({...T,props:{height:{type:String,default:null}},setup(r){const t=r,e=p("header"),n=g(()=>t.height?e.cssVarBlock({height:t.height}):{});return(a,l)=>(c(),d("header",{class:f(s(e).b()),style:v(s(n))},[m(a.$slots,"default")],6))}});var x=h(q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const D=o({name:"ElMain"}),G=o({...D,setup(r){const t=p("main");return(e,n)=>(c(),d("main",{class:f(s(t).b())},[m(e.$slots,"default")],2))}});var C=h(G,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const J=b(F,{Aside:y,Footer:E,Header:x,Main:C}),K=k(y);k(E);const L=k(x),O=k(C);const P={};function Q(r,t){const e=K,n=L,a=B("router-view"),l=O,i=J;return c(),H(i,null,{default:u(()=>[_(e,{width:"200px"},{default:u(()=>[$("Aside")]),_:1}),_(i,null,{default:u(()=>[_(n,null,{default:u(()=>[$("Header")]),_:1}),_(l,null,{default:u(()=>[_(a)]),_:1})]),_:1})]),_:1})}const X=N(P,[["render",Q]]);export{X as default};
