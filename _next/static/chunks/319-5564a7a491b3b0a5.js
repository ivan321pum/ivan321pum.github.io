(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{4850:function(e,t,r){"use strict";r.d(t,{q:function(){return N}});var o=r(7294),a=r(3967),u=r.n(a),i=r(7462),l=r(5360),f=r(9698),c=r(9981),d=r(5320);let p="Avatar",[v,m]=(0,l.b)(p),[g,h]=v(p),b=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,...a}=e,[u,l]=(0,o.useState)("idle");return(0,o.createElement)(g,{scope:r,imageLoadingStatus:u,onImageLoadingStatusChange:l},(0,o.createElement)(d.WV.span,(0,i.Z)({},a,{ref:t})))}),w=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:u=()=>{},...l}=e,p=h("AvatarImage",r),v=$cddcb0b647441e34$var$useImageLoadingStatus(a),m=(0,f.W)(e=>{u(e),p.onImageLoadingStatusChange(e)});return(0,c.b)(()=>{"idle"!==v&&m(v)},[v,m]),"loaded"===v?(0,o.createElement)(d.WV.img,(0,i.Z)({},l,{ref:t,src:a})):null}),T=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:a,...u}=e,l=h("AvatarFallback",r),[f,c]=(0,o.useState)(void 0===a);return(0,o.useEffect)(()=>{if(void 0!==a){let e=window.setTimeout(()=>c(!0),a);return()=>window.clearTimeout(e)}},[a]),f&&"loaded"!==l.imageLoadingStatus?(0,o.createElement)(d.WV.span,(0,i.Z)({},u,{ref:t})):null});function $cddcb0b647441e34$var$useImageLoadingStatus(e){let[t,r]=(0,o.useState)("idle");return(0,c.b)(()=>{if(!e){r("error");return}let t=!0,o=new window.Image,updateStatus=e=>()=>{t&&r(e)};return r("loading"),o.onload=updateStatus("loaded"),o.onerror=updateStatus("error"),o.src=e,()=>{t=!1}},[e]),t}var E=r(8291),O=r(6679),k=r(8219);let L={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"3",responsive:!0},variant:{type:"enum",values:["solid","soft"],default:"soft"},color:{...E.m,default:void 0},highContrast:O.B,radius:k.C,fallback:{type:"ReactNode",default:void 0,required:!0}};var R=r(3843),j=r(6776);let N=o.forwardRef((e,t)=>{let{rest:r,...a}=(0,R.FY)(e),{className:i,style:l,size:f=L.size.default,variant:c=L.variant.default,color:d=L.color.default,highContrast:p=L.highContrast.default,radius:v=L.radius.default,fallback:m,...g}=r,[h,E]=o.useState("idle");return o.createElement(b,{"data-accent-color":d,"data-radius":v,className:u()("rt-AvatarRoot",i,(0,j.g)(f,"rt-r-size"),`rt-variant-${c}`,{"rt-high-contrast":p},(0,R.we)(a)),style:l},"idle"===h||"loading"===h?o.createElement("span",{className:"rt-AvatarFallback"}):null,"error"===h?o.createElement(T,{className:u()("rt-AvatarFallback",{"rt-one-letter":"string"==typeof m&&1===m.length,"rt-two-letters":"string"==typeof m&&2===m.length}),delayMs:0},m):null,o.createElement(w,{ref:t,className:"rt-AvatarImage",...g,onLoadingStatusChange:e=>{var t;null===(t=g.onLoadingStatusChange)||void 0===t||t.call(g,e),E(e)}}))});N.displayName="Avatar"},3725:function(e,t,r){"use strict";r.d(t,{x:function(){return p}});var o=r(7294),a=r(3967),u=r.n(a),i=r(8426);let l={display:{type:"enum",values:["none","inline","inline-block","block"],default:void 0,responsive:!0}};var f=r(3843),c=r(134),d=r(6776);let p=o.forwardRef((e,t)=>{let{rest:r,...a}=(0,f.FY)(e),{rest:p,...v}=(0,c.F8)(r),{className:m,asChild:g,display:h=l.display.default,...b}=p,w=g?i.g7:"div";return o.createElement(w,{...b,ref:t,className:u()("rt-Box",m,(0,d.g)(h,"rt-r-display"),(0,c.yt)(v),(0,f.we)(a))})});p.displayName="Box"},4152:function(e,t,r){"use strict";r.d(t,{z:function(){return g}});var o=r(7294),a=r(3967),u=r.n(a),i=r(8426),l=r(8291),f=r(6679),c=r(8219);let d={size:{type:"enum",values:["1","2","3","4"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","solid","soft","surface","outline","ghost"],default:"solid"},color:l.m,highContrast:f.B,radius:c.C};var p=r(3843),v=r(6776);let m=o.forwardRef((e,t)=>{let{rest:r,...a}=(0,p.FY)(e),{className:l,asChild:f=!1,size:c=d.size.default,variant:m=d.variant.default,color:g=d.color.default,highContrast:h=d.highContrast.default,radius:b=d.radius.default,...w}=r,T=f?i.g7:"button";return o.createElement(T,{"data-disabled":w.disabled||void 0,"data-accent-color":g,"data-radius":b,...w,ref:t,className:u()("rt-reset","rt-BaseButton",l,(0,v.g)(c,"rt-r-size"),`rt-variant-${m}`,{"rt-high-contrast":h},(0,p.we)(a))})});m.displayName="BaseButton";let g=o.forwardRef((e,t)=>o.createElement(m,{...e,ref:t,className:u()("rt-Button",e.className)}));g.displayName="Button"},5269:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var o=r(7294),a=r(3967),u=r.n(a),i=r(8426);let l={size:{type:"enum",values:["1","2","3","4","5"],default:"1",responsive:!0},variant:{type:"enum",values:["surface","classic","ghost"],default:"surface"}};var f=r(3843),c=r(6776);let d=o.forwardRef((e,t)=>{let{rest:r,...a}=(0,f.FY)(e),{asChild:d,children:p,className:v,size:m=l.size.default,variant:g=l.variant.default,...h}=r,b=d?i.g7:"div";function getChild(){let e=o.Children.only(p);return o.cloneElement(e,{children:o.createElement("div",{className:"rt-CardInner"},e.props.children)})}return o.createElement(b,{ref:t,...h,className:u()("rt-reset","rt-Card",v,(0,c.g)(m,"rt-r-size"),`rt-variant-${g}`,(0,f.we)(a))},d?getChild():o.createElement("div",{className:"rt-CardInner"},p))});d.displayName="Card"},668:function(e,t,r){"use strict";r.d(t,{Em:function(){return i}});var o=r(7294),a=r(3967),u=r.n(a);let i=o.forwardRef((e,t)=>o.createElement("em",{...e,ref:t,className:u()("rt-Em",e.className)}));i.displayName="Em"},5877:function(e,t,r){"use strict";r.d(t,{k:function(){return p}});var o=r(7294),a=r(3967),u=r.n(a),i=r(8426);let l={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var f=r(3843),c=r(134),d=r(6776);let p=o.forwardRef((e,t)=>{let{rest:r,...a}=(0,f.FY)(e),{rest:p,...v}=(0,c.F8)(r),{className:m,asChild:g,display:h=l.display.default,direction:b=l.direction.default,align:w=l.align.default,justify:T=l.justify.default,wrap:E=l.wrap.default,gap:O=l.gap.default,...k}=p,L=g?i.g7:"div";return o.createElement(L,{...k,ref:t,className:u()("rt-Flex",m,(0,d.g)(h,"rt-r-display"),(0,d.g)(b,"rt-r-fd"),(0,d.g)(w,"rt-r-ai"),(0,d.g)(T,"rt-r-jc",{between:"space-between"}),(0,d.g)(E,"rt-r-fw"),(0,d.g)(O,"rt-r-gap"),(0,c.yt)(v),(0,f.we)(a))})});p.displayName="Flex"},2627:function(e,t,r){"use strict";r.d(t,{r:function(){return c}});var o=r(7294),a=r(3967),u=r.n(a),i=r(6445),l=r(4778);let f={size:l.S.size,weight:l.S.weight,trim:l.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:l.S.color,highContrast:l.S.highContrast},c=o.forwardRef((e,t)=>{let{children:r,className:a,asChild:l=!1,underline:c=f.underline.default,...d}=e;return o.createElement(i.x,{...d,ref:t,asChild:!0,className:u()("rt-reset","rt-Link",a,`rt-underline-${c}`)},l?r:o.createElement("a",null,r))});c.displayName="Link"},6445:function(e,t,r){"use strict";r.d(t,{x:function(){return d}});var o=r(7294),a=r(3967),u=r.n(a),i=r(8426),l=r(4778),f=r(3843),c=r(6776);let d=o.forwardRef((e,t)=>{let{rest:r,...a}=(0,f.FY)(e),{children:d,className:p,asChild:v=!1,as:m="span",size:g=l.S.size.default,weight:h=l.S.weight.default,align:b=l.S.align.default,trim:w=l.S.trim.default,color:T=l.S.color.default,highContrast:E=l.S.highContrast.default,...O}=r;return o.createElement(i.g7,{"data-accent-color":T,...O,ref:t,className:u()("rt-Text",p,(0,c.g)(g,"rt-r-size"),(0,c.g)(h,"rt-r-weight"),(0,c.g)(b,"rt-r-ta"),(0,c.g)(w,"rt-r-lt"),{"rt-high-contrast":E},(0,f.we)(a))},v?d:o.createElement(m,null,d))});d.displayName="Text"},4778:function(e,t,r){"use strict";r.d(t,{S:function(){return u}});var o=r(8291),a=r(6679);let u={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0},weight:{type:"enum",values:["light","regular","medium","bold"],default:void 0,responsive:!0},align:{type:"enum",values:["left","center","right"],default:void 0,responsive:!0},trim:{type:"enum",values:["normal","start","end","both"],default:void 0,responsive:!0},color:o.m,highContrast:a.B}},6776:function(e,t,r){"use strict";function withBreakpoints(e,t="",r){var o,a,u,i;let l=[];if("object"==typeof e){for(let u of Object.keys(e))if(u in e){let i=null===(o=e[u])||void 0===o?void 0:o.toString(),f=null==i?void 0:i.startsWith("-"),c=""===t?"":"-",d=f?`-${t}`:t,p=f?null==i?void 0:i.substring(1):i;if(void 0===p)continue;let v=null!==(a=null==r?void 0:r[p])&&void 0!==a?a:p,m="initial"===u?`${d}${c}${v}`:`${u}:${d}${c}${v}`;l.push(m)}}if("string"==typeof e){let o=e.startsWith("-"),a=""===t?"":"-",i=o?`-${t}`:t,f=o?e.substring(1):e,c=null!==(u=null==r?void 0:r[f])&&void 0!==u?u:f;l.push(`${i}${a}${c}`)}if("boolean"==typeof e){let o=""===t?"":"-",a=e.toString(),u=null!==(i=null==r?void 0:r[a])&&void 0!==i?i:a;l.push(`${t}${o}${u}`)}return l.join(" ")}r.d(t,{g:function(){return withBreakpoints}})},8291:function(e,t,r){"use strict";r.d(t,{m:function(){return a}});var o=r(269);let a={type:"enum",values:o.yT.accentColor.values,default:void 0}},6679:function(e,t,r){"use strict";r.d(t,{B:function(){return o}});let o={type:"boolean",default:void 0}},134:function(e,t,r){"use strict";r.d(t,{F8:function(){return extractLayoutProps},yt:function(){return withLayoutProps}});var o=r(6776);let a=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=l.p.default,px:r=l.px.default,py:o=l.py.default,pt:a=l.pt.default,pr:u=l.pr.default,pb:i=l.pb.default,pl:f=l.pl.default,...c}=e;return{p:t,px:r,py:o,pt:a,pr:u,pb:i,pl:f,rest:c}}function withPaddingProps(e){return[(0,o.g)(e.p,"rt-r-p"),(0,o.g)(e.px,"rt-r-px"),(0,o.g)(e.py,"rt-r-py"),(0,o.g)(e.pt,"rt-r-pt"),(0,o.g)(e.pr,"rt-r-pr"),(0,o.g)(e.pb,"rt-r-pb"),(0,o.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let u=["auto","0","50%","100%"],i=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],l={p:{type:"enum",values:a,default:void 0,responsive:!0},px:{type:"enum",values:a,default:void 0,responsive:!0},py:{type:"enum",values:a,default:void 0,responsive:!0},pt:{type:"enum",values:a,default:void 0,responsive:!0},pr:{type:"enum",values:a,default:void 0,responsive:!0},pb:{type:"enum",values:a,default:void 0,responsive:!0},pl:{type:"enum",values:a,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:u,default:void 0,responsive:!0},top:{type:"enum",values:u,default:void 0,responsive:!0},right:{type:"enum",values:u,default:void 0,responsive:!0},bottom:{type:"enum",values:u,default:void 0,responsive:!0},left:{type:"enum",values:u,default:void 0,responsive:!0},width:{type:"enum",values:i,default:void 0,responsive:!0},height:{type:"enum",values:i,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:o=l.position.default,width:a=l.width.default,height:u=l.height.default,inset:i=l.inset.default,top:f=l.top.default,bottom:c=l.bottom.default,left:d=l.left.default,right:p=l.right.default,shrink:v=l.shrink.default,grow:m=l.grow.default,...g}=t;return{...r,position:o,width:a,height:u,inset:i,top:f,bottom:c,left:d,right:p,shrink:v,grow:m,rest:g}}function withLayoutProps(e){return[withPaddingProps(e),(0,o.g)(e.position,"rt-r-position"),(0,o.g)(e.shrink,"rt-r-fs"),(0,o.g)(e.grow,"rt-r-fg"),(0,o.g)(e.width,"rt-r-w"),(0,o.g)(e.height,"rt-r-h"),(0,o.g)(e.inset,"rt-r-inset"),(0,o.g)(e.top,"rt-r-top"),(0,o.g)(e.bottom,"rt-r-bottom"),(0,o.g)(e.left,"rt-r-left"),(0,o.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},3843:function(e,t,r){"use strict";r.d(t,{FY:function(){return extractMarginProps},we:function(){return withMarginProps}});var o=r(6776);let a=["auto","0","1","2","3","4","5","6","7","8","9","-1","-2","-3","-4","-5","-6","-7","-8","-9"],u={m:{type:"enum",values:a,default:void 0,responsive:!0},mx:{type:"enum",values:a,default:void 0,responsive:!0},my:{type:"enum",values:a,default:void 0,responsive:!0},mt:{type:"enum",values:a,default:void 0,responsive:!0},mr:{type:"enum",values:a,default:void 0,responsive:!0},mb:{type:"enum",values:a,default:void 0,responsive:!0},ml:{type:"enum",values:a,default:void 0,responsive:!0}};function extractMarginProps(e){let{m:t=u.m.default,mx:r=u.mx.default,my:o=u.my.default,mt:a=u.mt.default,mr:i=u.mr.default,mb:l=u.mb.default,ml:f=u.ml.default,...c}=e;return{m:t,mx:r,my:o,mt:a,mr:i,mb:l,ml:f,rest:c}}function withMarginProps(e){return[(0,o.g)(e.m,"rt-r-m"),(0,o.g)(e.mx,"rt-r-mx"),(0,o.g)(e.my,"rt-r-my"),(0,o.g)(e.mt,"rt-r-mt"),(0,o.g)(e.mr,"rt-r-mr"),(0,o.g)(e.mb,"rt-r-mb"),(0,o.g)(e.ml,"rt-r-ml")].filter(Boolean).join(" ")}},8219:function(e,t,r){"use strict";r.d(t,{C:function(){return a}});var o=r(269);let a={type:"enum",values:o.yT.radius.values,default:void 0}},3454:function(e,t,r){"use strict";var o,a;e.exports=(null==(o=r.g.process)?void 0:o.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(7663)},7498:function(e,t){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return f},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return d}});let a="refresh",u="navigate",i="restore",l="server-patch",f="prefetch",c="fast-refresh",d="server-action";(o=r||(r={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return T}});let o=r(8754),a=o._(r(7294)),u=r(4450),i=r(2227),l=r(4364),f=r(109),c=r(3607),d=r(1823),p=r(9031),v=r(920),m=r(30),g=r(7192),h=r(7498),b=new Set;function prefetch(e,t,r,o,a,u){if(!u&&!(0,i.isLocalURL)(t))return;if(!o.bypassPrefetchedCheck){let a=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,u=t+"%"+r+"%"+a;if(b.has(u))return;b.add(u)}let l=u?e.prefetch(t,a):e.prefetch(t,r,o);Promise.resolve(l).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,o,u,l,f,c,d,p){let{nodeName:v}=e.currentTarget,m="A"===v.toUpperCase();if(m&&(isModifiedEvent(e)||!d&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==f||f;"beforePopState"in t?t[u?"replace":"push"](r,o,{shallow:l,locale:c,scroll:e}):t[u?"replace":"push"](o||r,{forceOptimisticNavigation:!p,scroll:e})};d?a.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let w=a.default.forwardRef(function(e,t){let r,o;let{href:i,as:l,children:b,prefetch:w=null,passHref:T,replace:E,shallow:O,scroll:k,locale:L,onClick:R,onMouseEnter:j,onTouchStart:N,legacyBehavior:M=!1,...I}=e;r=b,M&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let $=a.default.useContext(d.RouterContext),z=a.default.useContext(p.AppRouterContext),U=null!=$?$:z,B=!$,W=!1!==w,Y=null===w?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:K,as:q}=a.default.useMemo(()=>{if(!$){let e=formatStringOrUrl(i);return{href:e,as:l?formatStringOrUrl(l):e}}let[e,t]=(0,u.resolveHref)($,i,!0);return{href:e,as:l?(0,u.resolveHref)($,l):t||e}},[$,i,l]),H=a.default.useRef(K),V=a.default.useRef(q);M&&(o=a.default.Children.only(r));let Z=M?o&&"object"==typeof o&&o.ref:t,[Q,G,J]=(0,v.useIntersection)({rootMargin:"200px"}),X=a.default.useCallback(e=>{(V.current!==q||H.current!==K)&&(J(),V.current=q,H.current=K),Q(e),Z&&("function"==typeof Z?Z(e):"object"==typeof Z&&(Z.current=e))},[q,Z,K,J,Q]);a.default.useEffect(()=>{U&&G&&W&&prefetch(U,K,q,{locale:L},{kind:Y},B)},[q,K,G,L,W,null==$?void 0:$.locale,U,B,Y]);let ee={ref:X,onClick(e){M||"function"!=typeof R||R(e),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),U&&!e.defaultPrevented&&linkClicked(e,U,K,q,E,O,k,L,B,W)},onMouseEnter(e){M||"function"!=typeof j||j(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),U&&(W||!B)&&prefetch(U,K,q,{locale:L,priority:!0,bypassPrefetchedCheck:!0},{kind:Y},B)},onTouchStart(e){M||"function"!=typeof N||N(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),U&&(W||!B)&&prefetch(U,K,q,{locale:L,priority:!0,bypassPrefetchedCheck:!0},{kind:Y},B)}};if((0,f.isAbsoluteUrl)(q))ee.href=q;else if(!M||T||"a"===o.type&&!("href"in o.props)){let e=void 0!==L?L:null==$?void 0:$.locale,t=(null==$?void 0:$.isLocaleDomain)&&(0,m.getDomainLocale)(q,e,null==$?void 0:$.locales,null==$?void 0:$.domainLocales);ee.href=t||(0,g.addBasePath)((0,c.addLocale)(q,e,null==$?void 0:$.defaultLocale))}return M?a.default.cloneElement(o,ee):a.default.createElement("a",{...I,...ee},r)}),T=w;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let o=r(7294),a=r(3436),u="function"==typeof IntersectionObserver,i=new Map,l=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=l.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=i.get(o)))return t;let a=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:a},l.push(r),i.set(r,t),t}function observe(e,t,r){let{id:o,observer:a,elements:u}=createObserver(r);return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);let e=l.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&l.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:i}=e,l=i||!u,[f,c]=(0,o.useState)(!1),d=(0,o.useRef)(null),p=(0,o.useCallback)(e=>{d.current=e},[]);(0,o.useEffect)(()=>{if(u){if(l||f)return;let e=d.current;if(e&&e.tagName){let o=observe(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r});return o}}else if(!f){let e=(0,a.requestIdleCallback)(()=>c(!0));return()=>(0,a.cancelIdleCallback)(e)}},[l,r,t,f,d.current]);let v=(0,o.useCallback)(()=>{c(!1)},[]);return[p,f,v]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7663:function(e){!function(){var t={229:function(e){var t,r,o,a=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}function runClearTimeout(e){if(r===clearTimeout)return clearTimeout(e);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){r=defaultClearTimeout}}();var u=[],i=!1,l=-1;function cleanUpNextTick(){i&&o&&(i=!1,o.length?u=o.concat(u):l=-1,u.length&&drainQueue())}function drainQueue(){if(!i){var e=runTimeout(cleanUpNextTick);i=!0;for(var t=u.length;t;){for(o=u,u=[];++l<t;)o&&o[l].run();l=-1,t=u.length}o=null,i=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new Item(e,t)),1!==u.length||i||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=noop,a.addListener=noop,a.once=noop,a.off=noop,a.removeListener=noop,a.removeAllListeners=noop,a.emit=noop,a.prependListener=noop,a.prependOnceListener=noop,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function __nccwpck_require__(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}},u=!0;try{t[e](a,a.exports,__nccwpck_require__),u=!1}finally{u&&delete r[e]}return a.exports}__nccwpck_require__.ab="//";var o=__nccwpck_require__(229);e.exports=o}()},9008:function(e,t,r){e.exports=r(9201)},1664:function(e,t,r){e.exports=r(5170)},9849:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var o,a=r(7294),u=r(3546),i="u">typeof globalThis?globalThis:"u">typeof window?window:"u">typeof global?global:"u">typeof self?self:{},l={},f={};function hr(){if(o)return f;o=1;var e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function _(t,o,a){var l,f={},c=null,d=null;for(l in void 0!==a&&(c=""+a),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(d=o.ref),o)r.call(o,l)&&!i.hasOwnProperty(l)&&(f[l]=o[l]);if(t&&t.defaultProps)for(l in o=t.defaultProps)void 0===f[l]&&(f[l]=o[l]);return{$$typeof:e,type:t,key:c,ref:d,props:f,_owner:u.current}}return f.Fragment=t,f.jsx=_,f.jsxs=_,f}({get exports(){return l},set exports(n){l=n}}).exports=hr();let c=l.jsx;var d=0/0,p=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,g=/^0o[0-7]+$/i,h=parseInt,b="object"==typeof i&&i&&i.Object===Object&&i,w="object"==typeof self&&self&&self.Object===Object&&self,T=b||w||Function("return this")(),E=Object.prototype.toString,O=Math.max,k=Math.min,ue=function(){return T.Date.now()};function le(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Wr(e){return!!e&&"object"==typeof e}function $r(e){return"symbol"==typeof e||Wr(e)&&"[object Symbol]"==E.call(e)}function Le(e){if("number"==typeof e)return e;if($r(e))return d;if(le(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=le(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var r=m.test(e);return r||g.test(e)?h(e.slice(2),r?2:8):v.test(e)?d:+e}var Lr=function(e,t,r){var o,a,u,i,l,f,c=0,d=!1,p=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function C(t){var r=o,u=a;return o=a=void 0,c=t,i=e.apply(u,r)}function A(e){return c=e,l=setTimeout(y,t),d?C(e):i}function F(e){var r=e-f,o=e-c,a=t-r;return p?k(a,u-o):a}function P(e){var r=e-f,o=e-c;return void 0===f||r>=t||r<0||p&&o>=u}function y(){var e=ue();if(P(e))return s(e);l=setTimeout(y,F(e))}function s(e){return l=void 0,v&&o?C(e):(o=a=void 0,i)}function D(){void 0!==l&&clearTimeout(l),c=0,o=f=a=l=void 0}function x(){return void 0===l?i:s(ue())}function S(){var e=ue(),r=P(e);if(o=arguments,a=this,f=e,r){if(void 0===l)return A(f);if(p)return l=setTimeout(y,t),C(f)}return void 0===l&&(l=setTimeout(y,t)),i}return t=Le(t)||0,le(r)&&(d=!!r.leading,u=(p="maxWait"in r)?O(Le(r.maxWait)||0,t):u,v="trailing"in r?!!r.trailing:v),S.cancel=D,S.flush=x,S};function Yr(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}let L=[],R={width:"100%",height:"100%"},j=(0,a.forwardRef)(function({className:e,children:t,debounceTime:r=300,ignoreDimensions:o=L,parentSizeStyles:u,enableDebounceLeadingCall:i=!0,resizeObserverPolyfill:l,...f},d){let p=(0,a.useRef)(null),v=(0,a.useRef)(0),[m,g]=(0,a.useState)({width:0,height:0,top:0,left:0}),h=(0,a.useMemo)(()=>{let e=Array.isArray(o)?o:[o];return Lr(t=>{g(r=>Object.keys(r).filter(e=>r[e]!==t[e]).every(t=>e.includes(t))?r:t)},r,{leading:i})},[r,i,o]);return(0,a.useEffect)(()=>{let e=l||window.ResizeObserver,t=new e(e=>{e.forEach(e=>{let{left:t,top:r,width:o,height:a}=(null==e?void 0:e.contentRect)??{};v.current=window.requestAnimationFrame(()=>{h({width:o,height:a,top:r,left:t})})})});return p.current&&t.observe(p.current),()=>{window.cancelAnimationFrame(v.current),t.disconnect(),h.cancel()}},[h,l]),c("div",{style:{...R,...u},ref:Yr([d,p]),className:e,...f,children:t({...m,ref:p.current,resize:h})})}),N=(0,a.forwardRef)(({scene:e,style:t,onMouseDown:r,onMouseUp:o,onMouseHover:i,onKeyDown:l,onKeyUp:f,onStart:d,onLookAt:p,onFollow:v,onWheel:m,onLoad:g,renderOnDemand:h=!0,...b},w)=>{let T=(0,a.useRef)(null),[E,O]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let t;O(!0);let a=[{name:"mouseDown",cb:r},{name:"mouseUp",cb:o},{name:"mouseHover",cb:i},{name:"keyDown",cb:l},{name:"keyUp",cb:f},{name:"start",cb:d},{name:"lookAt",cb:p},{name:"follow",cb:v},{name:"scroll",cb:m}];return T.current&&(t=new u.M(T.current,{renderOnDemand:h}),async function(){for(let r of(await t.load(e),a))r.cb&&t.addEventListener(r.name,r.cb);O(!1),null==g||g(t)}()),()=>{for(let e of a)e.cb&&t.removeEventListener(e.name,e.cb);t.dispose()}},[e]),c(j,{ref:w,parentSizeStyles:t,debounceTime:50,...b,children:()=>c("canvas",{ref:T,style:{display:E?"none":"block"}})})})}}]);