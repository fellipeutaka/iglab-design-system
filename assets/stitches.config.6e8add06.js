var ie=Object.defineProperty;var u=(e,t)=>ie(e,"name",{value:t,configurable:!0});var b="colors",B="sizes",n="space",re={gap:n,gridGap:n,columnGap:n,gridColumnGap:n,rowGap:n,gridRowGap:n,inset:n,insetBlock:n,insetBlockEnd:n,insetBlockStart:n,insetInline:n,insetInlineEnd:n,insetInlineStart:n,margin:n,marginTop:n,marginRight:n,marginBottom:n,marginLeft:n,marginBlock:n,marginBlockEnd:n,marginBlockStart:n,marginInline:n,marginInlineEnd:n,marginInlineStart:n,padding:n,paddingTop:n,paddingRight:n,paddingBottom:n,paddingLeft:n,paddingBlock:n,paddingBlockEnd:n,paddingBlockStart:n,paddingInline:n,paddingInlineEnd:n,paddingInlineStart:n,top:n,right:n,bottom:n,left:n,scrollMargin:n,scrollMarginTop:n,scrollMarginRight:n,scrollMarginBottom:n,scrollMarginLeft:n,scrollMarginX:n,scrollMarginY:n,scrollMarginBlock:n,scrollMarginBlockEnd:n,scrollMarginBlockStart:n,scrollMarginInline:n,scrollMarginInlineEnd:n,scrollMarginInlineStart:n,scrollPadding:n,scrollPaddingTop:n,scrollPaddingRight:n,scrollPaddingBottom:n,scrollPaddingLeft:n,scrollPaddingX:n,scrollPaddingY:n,scrollPaddingBlock:n,scrollPaddingBlockEnd:n,scrollPaddingBlockStart:n,scrollPaddingInline:n,scrollPaddingInlineEnd:n,scrollPaddingInlineStart:n,fontSize:"fontSizes",background:b,backgroundColor:b,backgroundImage:b,borderImage:b,border:b,borderBlock:b,borderBlockEnd:b,borderBlockStart:b,borderBottom:b,borderBottomColor:b,borderColor:b,borderInline:b,borderInlineEnd:b,borderInlineStart:b,borderLeft:b,borderLeftColor:b,borderRight:b,borderRightColor:b,borderTop:b,borderTopColor:b,caretColor:b,color:b,columnRuleColor:b,fill:b,outline:b,outlineColor:b,stroke:b,textDecorationColor:b,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:B,minBlockSize:B,maxBlockSize:B,inlineSize:B,minInlineSize:B,maxInlineSize:B,width:B,minWidth:B,maxWidth:B,height:B,minHeight:B,maxHeight:B,flexBasis:B,gridTemplateColumns:B,gridTemplateRows:B,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},ne=u((e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,"o"),A=u(()=>{const e=Object.create(null);return(t,r,...i)=>{const o=(s=>JSON.stringify(s,ne))(t);return o in e?e[o]:e[o]=r(t,...i)}},"l"),N=Symbol.for("sxs.internal"),Z=u((e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),"a"),Y=u(e=>{for(const t in e)return!0;return!1},"c"),{hasOwnProperty:oe}=Object.prototype,U=u(e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),"g"),le=/\s+(?![^()]*\))/,w=u(e=>t=>e(...typeof t=="string"?String(t).split(le):[t]),"u"),q={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:w((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:w((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:w((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:w((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:w((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:w((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},J=/([\d.]+)([^]*)/,se=u((e,t)=>e.length?e.reduce((r,i)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(i)&&/&.*&/.test(o)?`:is(${i})`:i):i+" "+o)),r),[]):t,"m"),ae=u((e,t)=>e in ce&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,i,o,s)=>i+(o==="stretch"?`-moz-available${s};${U(e)}:${i}-webkit-fill-available`:`-moz-fit-content${s};${U(e)}:${i}fit-content`)+s):String(t),"b"),ce={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},C=u(e=>e?e+"-":"","k"),ee=u((e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(i,o,s,p,a)=>p=="$"==!!s?i:(o||p=="--"?"calc(":"")+"var(--"+(p==="$"?C(t)+(a.includes("$")?"":C(r))+a.replace(/\$/g,"-"):a)+")"+(o||p=="--"?"*"+(o||"")+(s||"1")+")":"")),"y"),de=/\s*,\s*(?![^()]*\))/,ge=Object.prototype.toString,P=u((e,t,r,i,o)=>{let s,p,a;const l=u((d,h,S)=>{let c,g;const m=u(y=>{for(c in y){const k=c.charCodeAt(0)===64,F=k&&Array.isArray(y[c])?y[c]:[y[c]];for(g of F){const z=/[A-Z]/.test(f=c)?f:f.replace(/-[^]/g,$=>$[1].toUpperCase()),v=typeof g=="object"&&g&&g.toString===ge&&(!i.utils[z]||!h.length);if(z in i.utils&&!v){const $=i.utils[z];if($!==p){p=$,m($(g)),p=null;continue}}else if(z in q){const $=q[z];if($!==a){a=$,m($(g)),a=null;continue}}if(k&&(x=c.slice(1)in i.media?"@media "+i.media[c.slice(1)]:c,c=x.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,($,I,W,E,R,j)=>{const M=J.test(I),D=.0625*(M?-1:1),[H,X]=M?[E,I]:[I,E];return"("+(W[0]==="="?"":W[0]===">"===M?"max-":"min-")+H+":"+(W[0]!=="="&&W.length===1?X.replace(J,(te,V,G)=>Number(V)+D*(W===">"?1:-1)+G):X)+(R?") and ("+(R[0]===">"?"min-":"max-")+H+":"+(R.length===1?j.replace(J,(te,V,G)=>Number(V)+D*(R===">"?-1:1)+G):j):"")+")"})),v){const $=k?S.concat(c):[...S],I=k?[...h]:se(h,c.split(de));s!==void 0&&o(K(...s)),s=void 0,l(g,I,$)}else s===void 0&&(s=[[],h,S]),c=k||c.charCodeAt(0)!==36?c:`--${C(i.prefix)}${c.slice(1).replace(/\$/g,"-")}`,g=v?g:typeof g=="number"?g&&z in pe?String(g)+"px":String(g):ee(ae(z,g==null?"":g),i.prefix,i.themeMap[z]),s[0].push(`${k?`${c} `:`${U(c)}:`}${g}`)}}var x,f},"p");m(d),s!==void 0&&o(K(...s)),s=void 0},"a");l(e,t,r)},"x"),K=u((e,t,r)=>`${r.map(i=>`${i}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,"I"),pe={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},Q=u(e=>String.fromCharCode(e+(e>25?39:97)),"z"),T=u(e=>(t=>{let r,i="";for(r=Math.abs(t);r>52;r=r/52|0)i=Q(r%52)+i;return Q(r%52)+i})(((t,r)=>{let i=r.length;for(;i;)t=33*t^r.charCodeAt(--i);return t})(5381,JSON.stringify(e))>>>0),"W"),O=["themed","global","styled","onevar","resonevar","allvar","inline"],ue=u(e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},"E"),he=u(e=>{let t;const r=u(()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(s,p)=>{const{cssText:a}=s;let l="";if(a.startsWith("--sxs"))return"";if(o[p-1]&&(l=o[p-1].cssText).startsWith("--sxs")){if(!s.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===s)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${a}`;return s.cssRules.length?`${l}${a}`:""}return a}).join("")},"n"),i=u(()=>{if(t){const{rules:a,sheet:l}=t;if(!l.deleteRule){for(;Object(Object(l.cssRules)[0]).type===3;)l.cssRules.splice(0,1);l.cssRules=[]}for(const d in a)delete a[d]}const o=Object(e).styleSheets||[];for(const a of o)if(ue(a)){for(let l=0,d=a.cssRules;d[l];++l){const h=Object(d[l]);if(h.type!==1)continue;const S=Object(d[l+1]);if(S.type!==4)continue;++l;const{cssText:c}=h;if(!c.startsWith("--sxs"))continue;const g=c.slice(14,-3).trim().split(/\s+/),m=O[g[0]];m&&(t||(t={sheet:a,reset:i,rules:{},toString:r}),t.rules[m]={group:S,index:l,cache:new Set(g)})}if(t)break}if(!t){const a=u((l,d)=>({type:d,cssRules:[],insertRule(h,S){this.cssRules.splice(S,0,a(h,{import:3,undefined:1}[(h.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return l==="@media{}"?`@media{${[].map.call(this.cssRules,h=>h.cssText).join("")}}`:l}}),"i");t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:i,toString:r}}const{sheet:s,rules:p}=t;for(let a=O.length-1;a>=0;--a){const l=O[a];if(!p[l]){const d=O[a+1],h=p[d]?p[d].index:s.cssRules.length;s.insertRule("@media{}",h),s.insertRule(`--sxs{--sxs:${a}}`,h),p[l]={group:s.cssRules[h+1],index:h,cache:new Set([a])}}fe(p[l])}},"r");return i(),t},"T"),fe=u(e=>{const t=e.group;let r=t.cssRules.length;e.apply=i=>{try{t.insertRule(i,r),++r}catch{}}},"v"),L=Symbol(),me=A(),be=u((e,t)=>me(e,()=>(...r)=>{let i={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[N]){i.type==null&&(i.type=o[N].type);for(const s of o[N].composers)i.composers.add(s)}else o.constructor!==Object||o.$$typeof?i.type==null&&(i.type=o):i.composers.add(Se(o,e));return i.type==null&&(i.type="span"),i.composers.size||i.composers.add(["PJLV",{},[],[],{},[]]),ye(e,i,t)}),"C"),Se=u(({variants:e,compoundVariants:t,defaultVariants:r,...i},o)=>{const s=`${C(o.prefix)}c-${T(i)}`,p=[],a=[],l=Object.create(null),d=[];for(const c in r)l[c]=String(r[c]);if(typeof e=="object"&&e)for(const c in e){h=l,S=c,oe.call(h,S)||(l[c]="undefined");const g=e[c];for(const m in g){const y={[c]:String(m)};String(m)==="undefined"&&d.push(c);const x=g[m],f=[y,x,!Y(x)];p.push(f)}}var h,S;if(typeof t=="object"&&t)for(const c of t){let{css:g,...m}=c;g=typeof g=="object"&&g||{};for(const x in m)m[x]=String(m[x]);const y=[m,g,!Y(g)];a.push(y)}return[s,i,p,a,l,d]},"P"),ye=u((e,t,r)=>{const[i,o,s,p]=ke(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(S=>{function c(){for(let g=0;g<c[L].length;g++){const[m,y]=c[L][g];S.rules[m].apply(y)}return c[L]=[],null}return u(c,"t"),c[L]=[],c.rules={},O.forEach(g=>c.rules[g]={apply:m=>c[L].push([g,m])}),c})(r):null,l=(a||r).rules,d=`.${i}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,h=u(S=>{S=typeof S=="object"&&S||xe;const{css:c,...g}=S,m={};for(const f in s)if(delete g[f],f in S){let k=S[f];typeof k=="object"&&k?m[f]={"@initial":s[f],...k}:(k=String(k),m[f]=k!=="undefined"||p.has(f)?k:s[f])}else m[f]=s[f];const y=new Set([...o]);for(const[f,k,F,z]of t.composers){r.rules.styled.cache.has(f)||(r.rules.styled.cache.add(f),P(k,[`.${f}`],[],e,I=>{l.styled.apply(I)}));const v=_(F,m,e.media),$=_(z,m,e.media,!0);for(const I of v)if(I!==void 0)for(const[W,E,R]of I){const j=`${f}-${T(E)}-${W}`;y.add(j);const M=(R?r.rules.resonevar:r.rules.onevar).cache,D=R?l.resonevar:l.onevar;M.has(j)||(M.add(j),P(E,[`.${j}`],[],e,H=>{D.apply(H)}))}for(const I of $)if(I!==void 0)for(const[W,E]of I){const R=`${f}-${T(E)}-${W}`;y.add(R),r.rules.allvar.cache.has(R)||(r.rules.allvar.cache.add(R),P(E,[`.${R}`],[],e,j=>{l.allvar.apply(j)}))}}if(typeof c=="object"&&c){const f=`${i}-i${T(c)}-css`;y.add(f),r.rules.inline.cache.has(f)||(r.rules.inline.cache.add(f),P(c,[`.${f}`],[],e,k=>{l.inline.apply(k)}))}for(const f of String(S.className||"").trim().split(/\s+/))f&&y.add(f);const x=g.className=[...y].join(" ");return{type:t.type,className:x,selector:d,props:g,toString:()=>x,deferredInjector:a}},"p");return Z(h,{className:i,selector:d,[N]:t,toString:()=>(r.rules.styled.cache.has(i)||h(),i)})},"L"),ke=u(e=>{let t="";const r=[],i={},o=[];for(const[s,,,,p,a]of e){t===""&&(t=s),r.push(s),o.push(...a);for(const l in p){const d=p[l];(i[l]===void 0||d!=="undefined"||a.includes(d))&&(i[l]=d)}}return[t,r,i,new Set(o)]},"O"),_=u((e,t,r,i)=>{const o=[];e:for(let[s,p,a]of e){if(a)continue;let l,d=0,h=!1;for(l in s){const S=s[l];let c=t[l];if(c!==S){if(typeof c!="object"||!c)continue e;{let g,m,y=0;for(const x in c){if(S===String(c[x])){if(x!=="@initial"){const f=x.slice(1);(m=m||[]).push(f in r?r[f]:x.replace(/^@media ?/,"")),h=!0}d+=y,g=!0}++y}if(m&&m.length&&(p={["@media "+m.join(", ")]:p}),!g)continue e}}}(o[d]=o[d]||[]).push([i?"cv":`${l}-${s[l]}`,p,h])}return o},"A"),xe={},Be=A(),$e=u((e,t)=>Be(e,()=>(...r)=>{const i=u(()=>{for(let o of r){o=typeof o=="object"&&o||{};let s=T(o);if(!t.rules.global.cache.has(s)){if(t.rules.global.cache.add(s),"@import"in o){let p=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,p++);delete o["@import"]}P(o,[],[],e,p=>{t.rules.global.apply(p)})}}return""},"r");return Z(i,{toString:i})}),"N"),Ie=A(),Re=u((e,t)=>Ie(e,()=>r=>{const i=`${C(e.prefix)}k-${T(r)}`,o=u(()=>{if(!t.rules.global.cache.has(i)){t.rules.global.cache.add(i);const s=[];P(r,[],[],e,a=>s.push(a));const p=`@keyframes ${i}{${s.join("")}}`;t.rules.global.apply(p)}return i},"i");return Z(o,{get name(){return o()},toString:o})}),"G"),ze=u(class{constructor(e,t,r,i){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=i==null?"":String(i)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+C(this.prefix)+C(this.scale)+this.token}toString(){return this.computedValue}},"F"),We=A(),je=u((e,t)=>We(e,()=>(r,i)=>{i=typeof r=="object"&&r||Object(i);const o=`.${r=(r=typeof r=="string"?r:"")||`${C(e.prefix)}t-${T(i)}`}`,s={},p=[];for(const l in i){s[l]={};for(const d in i[l]){const h=`--${C(e.prefix)}${l}-${d}`,S=ee(String(i[l][d]),e.prefix,l);s[l][d]=new ze(d,S,l,e.prefix),p.push(`${h}:${S}`)}}const a=u(()=>{if(p.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const l=`${i===e.theme?":root,":""}.${r}{${p.join(";")}}`;t.rules.themed.apply(l)}return r},"s");return{...s,get className(){return a()},selector:o,toString:a}}),"U"),Ce=A(),Ee=u(e=>{let t=!1;const r=Ce(e,i=>{t=!0;const o="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",s=typeof i.media=="object"&&i.media||{},p=typeof i.root=="object"?i.root||null:globalThis.document||null,a=typeof i.theme=="object"&&i.theme||{},l={prefix:o,media:s,theme:a,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...re},utils:typeof i.utils=="object"&&i.utils||{}},d=he(p),h={css:be(l,d),globalCss:$e(l,d),keyframes:Re(l,d),createTheme:je(l,d),reset(){d.reset(),h.theme.toString()},theme:{},sheet:d,config:l,prefix:o,getCssText:d.toString,toString:d.toString};return String(h.theme=h.createTheme(a)),h});return t||r.reset(),r},"X");const{css:we,globalCss:Te,keyframes:Pe,getCssText:ve,theme:Le,createTheme:Oe,config:Ae}=Ee({theme:{colors:{"gray-900":"#121214","gray-800":"#202024","gray-400":"#7C7C8A","gray-200":"#C4C4CC","gray-100":"#E1E1E6","cyan-500":"#61DAFB","cyan-400":"#81D8F7"},fontSizes:{xs:"14px",sm:"16px",md:"18px",lg:"20px",xl:"24px","2xl":"32px"},space:{1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"32px",8:"36px",9:"40px",10:"48px"}},utils:{mx:e=>({marginLeft:e,marginRight:e}),px:e=>({paddingLeft:e,paddingRight:e}),my:e=>({marginTop:e,marginBottom:e}),py:e=>({paddingTop:e,paddingBottom:e})}}),De=Te({"*":{margin:0,padding:0,boxSizing:"border-box"},body:{backgroundColor:"$gray-900",color:"#fff",fontFamily:"Inter, sans-serif"}});export{we as c,De as g,Pe as k};
//# sourceMappingURL=stitches.config.6e8add06.js.map