import{bV as k,r as x,bW as Xe,bI as D,bX as X,bY as Je,bH as H,bL as Ye,bZ as ge,b_ as q,b$ as Re,c0 as L,bG as be,c1 as Ze,x as Qe,bd as et,an as he,f as tt,az as ie,k as G,ao as Y,y as Z,aA as se,c2 as oe,C as J,aF as at,av as rt,E as nt,aH as it,aG as st,g as w,l as Q,U as ot,w as ee,aN as lt,o as ut,I as h,Q as C,M as K,u as l,N as E,aJ as ct,J as B,K as U,$ as te,ap as M,a0 as P,al as ae,R as ft,c3 as dt,O as le,ar as pt,_ as vt,aU as gt,W as yt,c4 as me,F as bt,h as ht,a2 as mt,b4 as F,aV as _t}from"./index-e6cfb8d8.js";var Tt=k(x,"WeakMap");const ue=Tt;var wt=9007199254740991;function Ue(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=wt}function At(e){return e!=null&&Ue(e.length)&&!Xe(e)}var St=Object.prototype;function Et(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||St;return e===a}function It(e,t){for(var a=-1,r=Array(e);++a<e;)r[a]=t(a);return r}var $t="[object Arguments]";function _e(e){return D(e)&&X(e)==$t}var Fe=Object.prototype,Pt=Fe.hasOwnProperty,Ct=Fe.propertyIsEnumerable,Ot=_e(function(){return arguments}())?_e:function(e){return D(e)&&Pt.call(e,"callee")&&!Ct.call(e,"callee")};const jt=Ot;function Bt(){return!1}var ze=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Te=ze&&typeof module=="object"&&module&&!module.nodeType&&module,Nt=Te&&Te.exports===ze,we=Nt?x.Buffer:void 0,xt=we?we.isBuffer:void 0,Lt=xt||Bt;const ce=Lt;var Mt="[object Arguments]",Vt="[object Array]",Dt="[object Boolean]",Rt="[object Date]",Ut="[object Error]",Ft="[object Function]",zt="[object Map]",Gt="[object Number]",Kt="[object Object]",Ht="[object RegExp]",qt="[object Set]",Wt="[object String]",kt="[object WeakMap]",Xt="[object ArrayBuffer]",Jt="[object DataView]",Yt="[object Float32Array]",Zt="[object Float64Array]",Qt="[object Int8Array]",ea="[object Int16Array]",ta="[object Int32Array]",aa="[object Uint8Array]",ra="[object Uint8ClampedArray]",na="[object Uint16Array]",ia="[object Uint32Array]",c={};c[Yt]=c[Zt]=c[Qt]=c[ea]=c[ta]=c[aa]=c[ra]=c[na]=c[ia]=!0;c[Mt]=c[Vt]=c[Xt]=c[Dt]=c[Jt]=c[Rt]=c[Ut]=c[Ft]=c[zt]=c[Gt]=c[Kt]=c[Ht]=c[qt]=c[Wt]=c[kt]=!1;function sa(e){return D(e)&&Ue(e.length)&&!!c[X(e)]}function oa(e){return function(t){return e(t)}}var Ge=typeof exports=="object"&&exports&&!exports.nodeType&&exports,V=Ge&&typeof module=="object"&&module&&!module.nodeType&&module,la=V&&V.exports===Ge,re=la&&Je.process,ua=function(){try{var e=V&&V.require&&V.require("util").types;return e||re&&re.binding&&re.binding("util")}catch{}}();const Ae=ua;var Se=Ae&&Ae.isTypedArray,ca=Se?oa(Se):sa;const Ke=ca;var fa=Object.prototype,da=fa.hasOwnProperty;function pa(e,t){var a=H(e),r=!a&&jt(e),o=!a&&!r&&ce(e),n=!a&&!r&&!o&&Ke(e),f=a||r||o||n,s=f?It(e.length,String):[],p=s.length;for(var u in e)(t||da.call(e,u))&&!(f&&(u=="length"||o&&(u=="offset"||u=="parent")||n&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Ye(u,p)))&&s.push(u);return s}function va(e,t){return function(a){return e(t(a))}}var ga=va(Object.keys,Object);const ya=ga;var ba=Object.prototype,ha=ba.hasOwnProperty;function ma(e){if(!Et(e))return ya(e);var t=[];for(var a in Object(e))ha.call(e,a)&&a!="constructor"&&t.push(a);return t}function _a(e){return At(e)?pa(e):ma(e)}function Ta(e,t){for(var a=-1,r=t.length,o=e.length;++a<r;)e[o+a]=t[a];return e}function wa(){this.__data__=new ge,this.size=0}function Aa(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}function Sa(e){return this.__data__.get(e)}function Ea(e){return this.__data__.has(e)}var Ia=200;function $a(e,t){var a=this.__data__;if(a instanceof ge){var r=a.__data__;if(!q||r.length<Ia-1)return r.push([e,t]),this.size=++a.size,this;a=this.__data__=new Re(r)}return a.set(e,t),this.size=a.size,this}function O(e){var t=this.__data__=new ge(e);this.size=t.size}O.prototype.clear=wa;O.prototype.delete=Aa;O.prototype.get=Sa;O.prototype.has=Ea;O.prototype.set=$a;function Pa(e,t){for(var a=-1,r=e==null?0:e.length,o=0,n=[];++a<r;){var f=e[a];t(f,a,e)&&(n[o++]=f)}return n}function Ca(){return[]}var Oa=Object.prototype,ja=Oa.propertyIsEnumerable,Ee=Object.getOwnPropertySymbols,Ba=Ee?function(e){return e==null?[]:(e=Object(e),Pa(Ee(e),function(t){return ja.call(e,t)}))}:Ca;const Na=Ba;function xa(e,t,a){var r=t(e);return H(e)?r:Ta(r,a(e))}function Ie(e){return xa(e,_a,Na)}var La=k(x,"DataView");const fe=La;var Ma=k(x,"Promise");const de=Ma;var Va=k(x,"Set");const pe=Va;var $e="[object Map]",Da="[object Object]",Pe="[object Promise]",Ce="[object Set]",Oe="[object WeakMap]",je="[object DataView]",Ra=L(fe),Ua=L(q),Fa=L(de),za=L(pe),Ga=L(ue),N=X;(fe&&N(new fe(new ArrayBuffer(1)))!=je||q&&N(new q)!=$e||de&&N(de.resolve())!=Pe||pe&&N(new pe)!=Ce||ue&&N(new ue)!=Oe)&&(N=function(e){var t=X(e),a=t==Da?e.constructor:void 0,r=a?L(a):"";if(r)switch(r){case Ra:return je;case Ua:return $e;case Fa:return Pe;case za:return Ce;case Ga:return Oe}return t});const Be=N;var Ka=x.Uint8Array;const Ne=Ka;var Ha="__lodash_hash_undefined__";function qa(e){return this.__data__.set(e,Ha),this}function Wa(e){return this.__data__.has(e)}function W(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new Re;++t<a;)this.add(e[t])}W.prototype.add=W.prototype.push=qa;W.prototype.has=Wa;function ka(e,t){for(var a=-1,r=e==null?0:e.length;++a<r;)if(t(e[a],a,e))return!0;return!1}function Xa(e,t){return e.has(t)}var Ja=1,Ya=2;function He(e,t,a,r,o,n){var f=a&Ja,s=e.length,p=t.length;if(s!=p&&!(f&&p>s))return!1;var u=n.get(e),b=n.get(t);if(u&&b)return u==t&&b==e;var g=-1,d=!0,T=a&Ya?new W:void 0;for(n.set(e,t),n.set(t,e);++g<s;){var m=e[g],_=t[g];if(r)var A=f?r(_,m,g,t,e,n):r(m,_,g,e,t,n);if(A!==void 0){if(A)continue;d=!1;break}if(T){if(!ka(t,function(I,S){if(!Xa(T,S)&&(m===I||o(m,I,a,r,n)))return T.push(S)})){d=!1;break}}else if(!(m===_||o(m,_,a,r,n))){d=!1;break}}return n.delete(e),n.delete(t),d}function Za(e){var t=-1,a=Array(e.size);return e.forEach(function(r,o){a[++t]=[o,r]}),a}function Qa(e){var t=-1,a=Array(e.size);return e.forEach(function(r){a[++t]=r}),a}var er=1,tr=2,ar="[object Boolean]",rr="[object Date]",nr="[object Error]",ir="[object Map]",sr="[object Number]",or="[object RegExp]",lr="[object Set]",ur="[object String]",cr="[object Symbol]",fr="[object ArrayBuffer]",dr="[object DataView]",xe=be?be.prototype:void 0,ne=xe?xe.valueOf:void 0;function pr(e,t,a,r,o,n,f){switch(a){case dr:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case fr:return!(e.byteLength!=t.byteLength||!n(new Ne(e),new Ne(t)));case ar:case rr:case sr:return Ze(+e,+t);case nr:return e.name==t.name&&e.message==t.message;case or:case ur:return e==t+"";case ir:var s=Za;case lr:var p=r&er;if(s||(s=Qa),e.size!=t.size&&!p)return!1;var u=f.get(e);if(u)return u==t;r|=tr,f.set(e,t);var b=He(s(e),s(t),r,o,n,f);return f.delete(e),b;case cr:if(ne)return ne.call(e)==ne.call(t)}return!1}var vr=1,gr=Object.prototype,yr=gr.hasOwnProperty;function br(e,t,a,r,o,n){var f=a&vr,s=Ie(e),p=s.length,u=Ie(t),b=u.length;if(p!=b&&!f)return!1;for(var g=p;g--;){var d=s[g];if(!(f?d in t:yr.call(t,d)))return!1}var T=n.get(e),m=n.get(t);if(T&&m)return T==t&&m==e;var _=!0;n.set(e,t),n.set(t,e);for(var A=f;++g<p;){d=s[g];var I=e[d],S=t[d];if(r)var v=f?r(S,I,d,t,e,n):r(I,S,d,e,t,n);if(!(v===void 0?I===S||o(I,S,a,r,n):v)){_=!1;break}A||(A=d=="constructor")}if(_&&!A){var $=e.constructor,j=t.constructor;$!=j&&"constructor"in e&&"constructor"in t&&!(typeof $=="function"&&$ instanceof $&&typeof j=="function"&&j instanceof j)&&(_=!1)}return n.delete(e),n.delete(t),_}var hr=1,Le="[object Arguments]",Me="[object Array]",z="[object Object]",mr=Object.prototype,Ve=mr.hasOwnProperty;function _r(e,t,a,r,o,n){var f=H(e),s=H(t),p=f?Me:Be(e),u=s?Me:Be(t);p=p==Le?z:p,u=u==Le?z:u;var b=p==z,g=u==z,d=p==u;if(d&&ce(e)){if(!ce(t))return!1;f=!0,b=!1}if(d&&!b)return n||(n=new O),f||Ke(e)?He(e,t,a,r,o,n):pr(e,t,p,a,r,o,n);if(!(a&hr)){var T=b&&Ve.call(e,"__wrapped__"),m=g&&Ve.call(t,"__wrapped__");if(T||m){var _=T?e.value():e,A=m?t.value():t;return n||(n=new O),o(_,A,a,r,n)}}return d?(n||(n=new O),br(e,t,a,r,o,n)):!1}function qe(e,t,a,r,o){return e===t?!0:e==null||t==null||!D(e)&&!D(t)?e!==e&&t!==t:_r(e,t,a,r,qe,o)}function Lr(e,t){return qe(e,t)}const Tr=Qe({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:et},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:he},inactiveIcon:{type:he},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:tt(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1}}),wr={[ie]:e=>G(e)||Y(e)||Z(e),[se]:e=>G(e)||Y(e)||Z(e),[oe]:e=>G(e)||Y(e)||Z(e)},Ar=["onClick"],Sr=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Er=["aria-hidden"],Ir=["aria-hidden"],$r=["aria-hidden"],ve="ElSwitch",Pr=J({name:ve}),Cr=J({...Pr,props:Tr,emits:wr,setup(e,{expose:t,emit:a}){const r=e,o=ht(),{formItem:n}=at(),f=rt(),s=nt("switch");(i=>{i.forEach(y=>{gt({from:y[0],replacement:y[1],scope:ve,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},w(()=>{var R;return!!((R=o.vnode.props)!=null&&R[y[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:u}=it(r,{formItemContext:n}),b=st(w(()=>r.loading)),g=Q(r.modelValue!==!1),d=Q(),T=Q(),m=w(()=>[s.b(),s.m(f.value),s.is("disabled",b.value),s.is("checked",v.value)]),_=w(()=>[s.e("label"),s.em("label","left"),s.is("active",!v.value)]),A=w(()=>[s.e("label"),s.em("label","right"),s.is("active",v.value)]),I=w(()=>({width:ot(r.width)}));ee(()=>r.modelValue,()=>{g.value=!0}),ee(()=>r.value,()=>{g.value=!1});const S=w(()=>g.value?r.modelValue:r.value),v=w(()=>S.value===r.activeValue);[r.activeValue,r.inactiveValue].includes(S.value)||(a(ie,r.inactiveValue),a(se,r.inactiveValue),a(oe,r.inactiveValue)),ee(v,i=>{var y;d.value.checked=i,r.validateEvent&&((y=n==null?void 0:n.validate)==null||y.call(n,"change").catch(R=>lt()))});const $=()=>{const i=v.value?r.inactiveValue:r.activeValue;a(ie,i),a(se,i),a(oe,i),yt(()=>{d.value.checked=v.value})},j=()=>{if(b.value)return;const{beforeChange:i}=r;if(!i){$();return}const y=i();[me(y),G(y)].includes(!0)||bt(ve,"beforeChange must return type `Promise<boolean>` or `boolean`"),me(y)?y.then(ye=>{ye&&$()}).catch(ye=>{}):y&&$()},We=w(()=>s.cssVarBlock({...r.activeColor?{"on-color":r.activeColor}:null,...r.inactiveColor?{"off-color":r.inactiveColor}:null,...r.borderColor?{"border-color":r.borderColor}:null})),ke=()=>{var i,y;(y=(i=d.value)==null?void 0:i.focus)==null||y.call(i)};return ut(()=>{d.value.checked=v.value}),t({focus:ke,checked:v}),(i,y)=>(h(),C("div",{class:E(l(m)),style:le(l(We)),onClick:pt(j,["prevent"])},[K("input",{id:l(u),ref_key:"input",ref:d,class:E(l(s).e("input")),type:"checkbox",role:"switch","aria-checked":l(v),"aria-disabled":l(b),name:i.name,"true-value":i.activeValue,"false-value":i.inactiveValue,disabled:l(b),tabindex:i.tabindex,onChange:$,onKeydown:ct(j,["enter"])},null,42,Sr),!i.inlinePrompt&&(i.inactiveIcon||i.inactiveText)?(h(),C("span",{key:0,class:E(l(_))},[i.inactiveIcon?(h(),B(l(M),{key:0},{default:U(()=>[(h(),B(te(i.inactiveIcon)))]),_:1})):P("v-if",!0),!i.inactiveIcon&&i.inactiveText?(h(),C("span",{key:1,"aria-hidden":l(v)},ae(i.inactiveText),9,Er)):P("v-if",!0)],2)):P("v-if",!0),K("span",{ref_key:"core",ref:T,class:E(l(s).e("core")),style:le(l(I))},[i.inlinePrompt?(h(),C("div",{key:0,class:E(l(s).e("inner"))},[i.activeIcon||i.inactiveIcon?(h(),B(l(M),{key:0,class:E(l(s).is("icon"))},{default:U(()=>[(h(),B(te(l(v)?i.activeIcon:i.inactiveIcon)))]),_:1},8,["class"])):i.activeText||i.inactiveText?(h(),C("span",{key:1,class:E(l(s).is("text")),"aria-hidden":!l(v)},ae(l(v)?i.activeText:i.inactiveText),11,Ir)):P("v-if",!0)],2)):P("v-if",!0),K("div",{class:E(l(s).e("action"))},[i.loading?(h(),B(l(M),{key:0,class:E(l(s).is("loading"))},{default:U(()=>[ft(l(dt))]),_:1},8,["class"])):P("v-if",!0)],2)],6),!i.inlinePrompt&&(i.activeIcon||i.activeText)?(h(),C("span",{key:1,class:E(l(A))},[i.activeIcon?(h(),B(l(M),{key:0},{default:U(()=>[(h(),B(te(i.activeIcon)))]),_:1})):P("v-if",!0),!i.activeIcon&&i.activeText?(h(),C("span",{key:1,"aria-hidden":!l(v)},ae(i.activeText),9,$r)):P("v-if",!0)],2)):P("v-if",!0)],14,Ar))}});var Or=vt(Cr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Mr=mt(Or);const jr=["xlink:href"],Br=J({__name:"svgIcon",props:{name:{type:String,required:!0},color:{type:String,default:""},size:{type:[Number,String],default:16}},setup(e){const t=e,a=w(()=>`#${t.name}`),r=w(()=>({width:t.size+"px",height:t.size+"px",color:t.color}));return(o,n)=>(h(),C("svg",{"aria-hidden":"true",style:le(r.value)},[K("use",{"xlink:href":a.value,fill:"currentColor"},null,8,jr)],4))}}),De="el-icon",Nr="local-icon",Vr=J({name:"Icon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:16},color:{type:String,default:"inherit"}},setup(e){if(e.name.indexOf(De)===0)return()=>F(M,{size:e.size,color:e.color},()=>F(_t(e.name.replace(`${De}-`,""))));if(e.name.indexOf(Nr)===0)return()=>F("i",F(Br,{...e}))}});export{Mr as E,O as S,Ne as U,Vr as _,Et as a,At as b,pa as c,jt as d,Ta as e,xa as f,Na as g,Be as h,Lr as i,oa as j,_a as k,ce as l,Ie as m,Ae as n,va as o,Ue as p,Ca as s};