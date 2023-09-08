import{r as p,ae as T,ci as P,X as R,d as A,cj as j,aG as g,w as z,j as B,z as O,A as K,B as G,aB as _,a1 as M,af as I,K as S,ck as b,aA as k,aK as V,bP as q,cl as D,ba as F,P as H,o as X,t as Y,l as Z,m as y}from"./index-c7b540bb.js";function J(t){let e;const s=p(!1),l=T({...t,originalPosition:"",originalOverflow:"",visible:!1});function a(n){l.text=n}function o(){const n=l.parent,c=v.ns;if(!n.vLoadingAddClassList){let u=n.getAttribute("loading-number");u=Number.parseInt(u)-1,u?n.setAttribute("loading-number",u.toString()):(_(n,c.bm("parent","relative")),n.removeAttribute("loading-number")),_(n,c.bm("parent","hidden"))}r(),m.unmount()}function r(){var n,c;(c=(n=v.$el)==null?void 0:n.parentNode)==null||c.removeChild(v.$el)}function i(){var n;t.beforeClose&&!t.beforeClose()||(s.value=!0,clearTimeout(e),e=window.setTimeout(f,400),l.visible=!1,(n=t.closed)==null||n.call(t))}function f(){if(!s.value)return;const n=l.parent;s.value=!1,n.vLoadingAddClassList=void 0,o()}const d=A({name:"ElLoading",setup(n,{expose:c}){const{ns:u,zIndex:$}=j("loading");return c({ns:u,zIndex:$}),()=>{const L=l.spinner||l.svg,E=g("svg",{class:"circular",viewBox:l.svgViewBox?l.svgViewBox:"0 0 50 50",...L?{innerHTML:L}:{}},[g("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),N=l.text?g("p",{class:u.b("text")},[l.text]):void 0;return g(G,{name:u.b("fade"),onAfterLeave:f},{default:z(()=>[B(O("div",{style:{backgroundColor:l.background||""},class:[u.b("mask"),l.customClass,l.fullscreen?"is-fullscreen":""]},[g("div",{class:u.b("spinner")},[E,N])]),[[K,l.visible]])])})}}}),m=P(d),v=m.mount(document.createElement("div"));return{...R(l),setText:a,removeElLoadingChild:r,close:i,handleAfterLeave:f,vm:v,get $el(){return v.$el}}}let x;const Q=function(t={}){if(!M)return;const e=U(t);if(e.fullscreen&&x)return x;const s=J({...e,closed:()=>{var a;(a=e.closed)==null||a.call(e),e.fullscreen&&(x=void 0)}});W(e,e.parent,s),h(e,e.parent,s),e.parent.vLoadingAddClassList=()=>h(e,e.parent,s);let l=e.parent.getAttribute("loading-number");return l?l=`${Number.parseInt(l)+1}`:l="1",e.parent.setAttribute("loading-number",l),e.parent.appendChild(s.$el),I(()=>s.visible.value=e.visible),e.fullscreen&&(x=s),s},U=t=>{var e,s,l,a;let o;return S(t.target)?o=(e=document.querySelector(t.target))!=null?e:document.body:o=t.target||document.body,{parent:o===document.body||t.body?document.body:o,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:o===document.body&&((s=t.fullscreen)!=null?s:!0),lock:(l=t.lock)!=null?l:!1,customClass:t.customClass||"",visible:(a=t.visible)!=null?a:!0,target:o}},W=async(t,e,s)=>{const{nextZIndex:l}=s.vm.zIndex||s.vm._.exposed.zIndex,a={};if(t.fullscreen)s.originalPosition.value=b(document.body,"position"),s.originalOverflow.value=b(document.body,"overflow"),a.zIndex=l();else if(t.parent===document.body){s.originalPosition.value=b(document.body,"position"),await I();for(const o of["top","left"]){const r=o==="top"?"scrollTop":"scrollLeft";a[o]=`${t.target.getBoundingClientRect()[o]+document.body[r]+document.documentElement[r]-Number.parseInt(b(document.body,`margin-${o}`),10)}px`}for(const o of["height","width"])a[o]=`${t.target.getBoundingClientRect()[o]}px`}else s.originalPosition.value=b(e,"position");for(const[o,r]of Object.entries(a))s.$el.style[o]=r},h=(t,e,s)=>{const l=s.vm.ns||s.vm._.exposed.ns;["absolute","fixed","sticky"].includes(s.originalPosition.value)?_(e,l.bm("parent","relative")):k(e,l.bm("parent","relative")),t.fullscreen&&t.lock?k(e,l.bm("parent","hidden")):_(e,l.bm("parent","hidden"))},C=Symbol("ElLoading"),w=(t,e)=>{var s,l,a,o;const r=e.instance,i=n=>V(e.value)?e.value[n]:void 0,f=n=>{const c=S(n)&&(r==null?void 0:r[n])||n;return c&&p(c)},d=n=>f(i(n)||t.getAttribute(`element-loading-${D(n)}`)),m=(s=i("fullscreen"))!=null?s:e.modifiers.fullscreen,v={text:d("text"),svg:d("svg"),svgViewBox:d("svgViewBox"),spinner:d("spinner"),background:d("background"),customClass:d("customClass"),fullscreen:m,target:(l=i("target"))!=null?l:m?void 0:t,body:(a=i("body"))!=null?a:e.modifiers.body,lock:(o=i("lock"))!=null?o:e.modifiers.lock};t[C]={options:v,instance:Q(v)}},ee=(t,e)=>{for(const s of Object.keys(e))q(e[s])&&(e[s].value=t[s])},te={mounted(t,e){e.value&&w(t,e)},updated(t,e){const s=t[C];e.oldValue!==e.value&&(e.value&&!e.oldValue?w(t,e):e.value&&e.oldValue?V(e.value)&&ee(e.value,s.options):s==null||s.instance.close())},unmounted(t){var e;(e=t[C])==null||e.instance.close()}};const se={class:"h-full"},le=["src"],oe=A({__name:"index",setup(t){const e=F(),s=p(""),l=p(),a=p(!1);return H(()=>{var i;a.value=!0,(i=y(e.meta))!=null&&i.iframeLink&&(s.value=y(e.meta).iframeLink);const r=y(l);r&&r.addEventListener("load",()=>{a.value=!1})}),(r,i)=>{const f=te;return B((X(),Y("div",se,[Z("iframe",{src:s.value,class:"wh-full",ref_key:"iframeRef",ref:l},null,8,le)])),[[f,a.value]])}}});export{oe as default};