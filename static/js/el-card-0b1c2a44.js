import{b as n,J as p,d,e as c,o,t,n as r,m as s,v as l,x as i,y as u,q as y,l as m,N as f,_ as h,D as v}from"./index-ba386e7c.js";const S=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),_=d({name:"ElCard"}),b=d({..._,props:S,setup(C){const a=c("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[i(u(e.header),1)])],2)):y("v-if",!0),m("div",{class:r(s(a).e("body")),style:f(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var w=h(b,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const N=v(w);export{N as E};
