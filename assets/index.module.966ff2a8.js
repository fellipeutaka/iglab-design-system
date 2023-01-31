var m=Object.defineProperty;var f=(e,t)=>m(e,"name",{value:t,configurable:!0});import{r as o}from"./jsx-runtime.1b886227.js";import{_ as C,$ as P}from"./index.module.70dd6b4a.js";import"./index.b5b662f5.js";function g(e,t){const r=o.exports.createContext(t);function c(u){const{children:s,...i}=u,a=o.exports.useMemo(()=>i,Object.values(i));return o.exports.createElement(r.Provider,{value:a},s)}f(c,"Provider");function n(u){const s=o.exports.useContext(r);if(s)return s;if(t!==void 0)return t;throw new Error(`\`${u}\` must be used within \`${e}\``)}return f(n,"useContext"),c.displayName=e+"Provider",[c,n]}f(g,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function L(e,t=[]){let r=[];function c(u,s){const i=o.exports.createContext(s),a=r.length;r=[...r,s];function d(l){const{scope:p,children:b,...$}=l,h=(p==null?void 0:p[e][a])||i,S=o.exports.useMemo(()=>$,Object.values($));return o.exports.createElement(h.Provider,{value:S},b)}f(d,"Provider");function x(l,p){const b=(p==null?void 0:p[e][a])||i,$=o.exports.useContext(b);if($)return $;if(s!==void 0)return s;throw new Error(`\`${l}\` must be used within \`${u}\``)}return f(x,"useContext"),d.displayName=u+"Provider",[d,x]}f(c,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const n=f(()=>{const u=r.map(s=>o.exports.createContext(s));return f(function(i){const a=(i==null?void 0:i[e])||u;return o.exports.useMemo(()=>({[`__scope${e}`]:{...i,[e]:a}}),[i,a])},"useScope")},"createScope");return n.scopeName=e,[c,w(n,...t)]}f(L,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function w(...e){const t=e[0];if(e.length===1)return t;const r=f(()=>{const c=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return f(function(u){const s=c.reduce((i,{useScope:a,scopeName:d})=>{const l=a(u)[`__scope${d}`];return{...i,...l}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])},"useComposedScopes")},"createScope1");return r.scopeName=t.scopeName,r}f(w,"$c512c27ab02ef895$var$composeContextScopes");function O(e,t,{checkForDefaultPrevented:r=!0}={}){return f(function(n){if(e==null||e(n),r===!1||!n.defaultPrevented)return t==null?void 0:t(n)},"handleEvent")}f(O,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function v(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...r)=>{var c;return(c=t.current)===null||c===void 0?void 0:c.call(t,...r)},[])}f(v,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function B({prop:e,defaultProp:t,onChange:r=f(()=>{},"onChange")}){const[c,n]=y({defaultProp:t,onChange:r}),u=e!==void 0,s=u?e:c,i=v(r),a=o.exports.useCallback(d=>{if(u){const l=typeof d=="function"?d(e):d;l!==e&&i(l)}else n(d)},[u,e,n,i]);return[s,a]}f(B,"$71cd76cc60e0454e$export$6f32135080cb4c3");function y({defaultProp:e,onChange:t}){const r=o.exports.useState(e),[c]=r,n=o.exports.useRef(c),u=v(t);return o.exports.useEffect(()=>{n.current!==c&&(u(c),n.current=c)},[c,n,u]),r}f(y,"$71cd76cc60e0454e$var$useUncontrolledState");function T(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}f(T,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const R=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function j(e){const[t,r]=o.exports.useState(void 0);return R(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const c=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;const u=n[0];let s,i;if("borderBoxSize"in u){const a=u.borderBoxSize,d=Array.isArray(a)?a[0]:a;s=d.inlineSize,i=d.blockSize}else s=e.offsetWidth,i=e.offsetHeight;r({width:s,height:i})});return c.observe(e,{box:"border-box"}),()=>c.unobserve(e)}else r(void 0)},[e]),t}f(j,"$db6c3485150b8e66$export$1ab7ae714698c4b8");const z=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],D=z.reduce((e,t)=>{const r=o.exports.forwardRef((c,n)=>{const{asChild:u,...s}=c,i=u?P:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(i,C({},s,{ref:n}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),E="Label",[U,_]=g(E,{id:void 0,controlRef:{current:null}}),W=f(e=>{const t=_("LabelConsumer"),{controlRef:r}=t;return o.exports.useEffect(()=>{e&&(r.current=e)},[e,r]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");export{R as $,L as a,W as b,B as c,D as d,O as e,T as f,j as g};
//# sourceMappingURL=index.module.966ff2a8.js.map