"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4813:(M,_,a)=>{a.d(_,{c:()=>c});var f=a(6953),u=a(2613),n=a(8077);const c=(s,r)=>{let t,o;const l=(i,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(i,p);E&&r(E)?E!==t&&(e(),d(E,w)):e()},d=(i,p)=>{t=i,o||(o=t);const w=t;(0,f.w)(()=>w.classList.add("ion-activated")),p()},e=(i=!1)=>{if(!t)return;const p=t;(0,f.w)(()=>p.classList.remove("ion-activated")),i&&o!==t&&t.click(),t=void 0};return(0,n.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>l(i.currentX,i.currentY,u.a),onMove:i=>l(i.currentX,i.currentY,u.b),onEnd:()=>{e(!0),(0,u.h)(),o=void 0}})}},9920:(M,_,a)=>{a.d(_,{g:()=>u});var f=a(7643);const u=()=>{if(void 0!==f.w)return f.w.Capacitor}},278:(M,_,a)=>{a.d(_,{g:()=>f});const f=(r,t,o,l,d)=>n(r[1],t[1],o[1],l[1],d).map(e=>u(r[0],t[0],o[0],l[0],e)),u=(r,t,o,l,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*o*d+3*o+l*d))-r*Math.pow(d-1,3),n=(r,t,o,l,d)=>s((l-=d)-3*(o-=d)+3*(t-=d)-(r-=d),3*o-6*t+3*r,3*t-3*r,r).filter(i=>i>=0&&i<=1),s=(r,t,o,l)=>{if(0===r)return((r,t,o)=>{const l=t*t-4*r*o;return l<0?[]:[(-t+Math.sqrt(l))/(2*r),(-t-Math.sqrt(l))/(2*r)]})(t,o,l);const d=(3*(o/=r)-(t/=r)*t)/3,e=(2*t*t*t-9*t*o+27*(l/=r))/27;if(0===d)return[Math.pow(-e,1/3)];if(0===e)return[Math.sqrt(-d),-Math.sqrt(-d)];const i=Math.pow(e/2,2)+Math.pow(d/3,3);if(0===i)return[Math.pow(e/2,.5)-t/3];if(i>0)return[Math.pow(-e/2+Math.sqrt(i),1/3)-Math.pow(e/2+Math.sqrt(i),1/3)-t/3];const p=Math.sqrt(Math.pow(-d/3,3)),w=Math.acos(-e/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-t/3,E*Math.cos((w+2*Math.PI)/3)-t/3,E*Math.cos((w+4*Math.PI)/3)-t/3]}},1776:(M,_,a)=>{a.d(_,{i:()=>f});const f=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3433:(M,_,a)=>{a.r(_),a.d(_,{startFocusVisible:()=>c});const f="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=s=>{let r=[],t=!0;const o=s?s.shadowRoot:document,l=s||document.body,d=x=>{r.forEach(h=>h.classList.remove(f)),x.forEach(h=>h.classList.add(f)),r=x},e=()=>{t=!1,d([])},i=x=>{t=n.includes(x.key),t||d([])},p=x=>{if(t&&void 0!==x.composedPath){const h=x.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));d(h)}},w=()=>{o.activeElement===l&&d([])};return o.addEventListener("keydown",i),o.addEventListener("focusin",p),o.addEventListener("focusout",w),o.addEventListener("touchstart",e,{passive:!0}),o.addEventListener("mousedown",e),{destroy:()=>{o.removeEventListener("keydown",i),o.removeEventListener("focusin",p),o.removeEventListener("focusout",w),o.removeEventListener("touchstart",e),o.removeEventListener("mousedown",e)},setFocus:d}}},2587:(M,_,a)=>{a.d(_,{c:()=>u});var f=a(544);const u=r=>{const t=r;let o;return{hasLegacyControl:()=>{if(void 0===o){const d=void 0!==t.label||n(t),e=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,i=(0,f.h)(t);o=!0===t.legacy||!d&&!e&&null!==i}return o}}},n=r=>null!==r.shadowRoot&&!!(c.includes(r.tagName)&&null!==r.querySelector('[slot="label"]')||s.includes(r.tagName)&&""!==r.textContent),c=["ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2613:(M,_,a)=>{a.d(_,{I:()=>u,a:()=>t,b:()=>o,c:()=>r,d:()=>d,h:()=>l});var f=a(9920),u=function(e){return e.Heavy="HEAVY",e.Medium="MEDIUM",e.Light="LIGHT",e}(u||{});const c={getEngine(){const e=window.TapticEngine;if(e)return e;const i=(0,f.g)();return null!=i&&i.isPluginAvailable("Haptics")?i.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const i=(0,f.g)();return"web"!==(null==i?void 0:i.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,f.g)(),impact(e){const i=this.getEngine();if(!i)return;const p=this.isCapacitor()?e.style:e.style.toLowerCase();i.impact({style:p})},notification(e){const i=this.getEngine();if(!i)return;const p=this.isCapacitor()?e.type:e.type.toLowerCase();i.notification({type:p})},selection(){const e=this.isCapacitor()?u.Light:"light";this.impact({style:e})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},s=()=>c.available(),r=()=>{s()&&c.selection()},t=()=>{s()&&c.selectionStart()},o=()=>{s()&&c.selectionChanged()},l=()=>{s()&&c.selectionEnd()},d=e=>{s()&&c.impact(e)}},9993:(M,_,a)=>{a.d(_,{a:()=>f,b:()=>p,c:()=>t,d:()=>w,e:()=>C,f:()=>r,g:()=>E,h:()=>n,i:()=>u,j:()=>y,k:()=>O,l:()=>o,m:()=>e,n:()=>x,o:()=>d,p:()=>s,q:()=>c,r:()=>v,s:()=>g,t:()=>i,u:()=>h,v:()=>m,w:()=>l});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4435:(M,_,a)=>{a.d(_,{I:()=>r,a:()=>d,b:()=>s,c:()=>p,d:()=>E,f:()=>e,g:()=>l,i:()=>o,p:()=>w,r:()=>x,s:()=>i});var f=a(5861),u=a(544),n=a(7690);const s="ion-content",r=".ion-content-scroll-host",t=`${s}, ${r}`,o=h=>"ION-CONTENT"===h.tagName,l=function(){var h=(0,f.Z)(function*(m){return o(m)?(yield new Promise(v=>(0,u.c)(m,v)),m.getScrollElement()):m});return function(v){return h.apply(this,arguments)}}(),d=h=>h.querySelector(r)||h.querySelector(t),e=h=>h.closest(t),i=(h,m)=>o(h)?h.scrollToTop(m):Promise.resolve(h.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(h,m,v,y)=>o(h)?h.scrollByPoint(m,v,y):Promise.resolve(h.scrollBy({top:v,left:m,behavior:y>0?"smooth":"auto"})),w=h=>(0,n.b)(h,s),E=h=>{if(o(h)){const v=h.scrollY;return h.scrollY=!1,v}return h.style.setProperty("overflow","hidden"),!0},x=(h,m)=>{o(h)?h.scrollY=m:h.style.removeProperty("overflow")}},1685:(M,_,a)=>{a.d(_,{c:()=>c,g:()=>s});var f=a(7643),u=a(544),n=a(7690);const c=(t,o,l)=>{let d,e;void 0!==f.w&&"MutationObserver"in f.w&&(d=new MutationObserver(E=>{for(const x of E)for(const h of x.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&h.slot===o)return l(),void(0,u.r)(()=>i(h))}),d.observe(t,{childList:!0}));const i=E=>{var x;e&&(e.disconnect(),e=void 0),e=new MutationObserver(h=>{l();for(const m of h)for(const v of m.removedNodes)v.nodeType===Node.ELEMENT_NODE&&v.slot===o&&w()}),e.observe(null!==(x=E.parentElement)&&void 0!==x?x:E,{subtree:!0,childList:!0})},w=()=>{e&&(e.disconnect(),e=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),w()}}},s=(t,o,l)=>{const d=null==t?0:t.toString().length,e=r(d,o);if(void 0===l)return e;try{return l(d,o)}catch(i){return(0,n.a)("Exception in provided `counterFormatter`.",i),e}},r=(t,o)=>`${t} / ${o}`},3701:(M,_,a)=>{a.r(_),a.d(_,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>O,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>x,resetKeyboardAssist:()=>d,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>e,trackViewportChanges:()=>y});var f=a(3812);a(9920),a(7643);const c="ionKeyboardDidShow",s="ionKeyboardDidHide";let t={},o={},l=!1;const d=()=>{t={},o={},l=!1},e=g=>{if(f.K.getEngine())i(g);else{if(!g.visualViewport)return;o=O(g.visualViewport),g.visualViewport.onresize=()=>{y(g),E()||x(g)?p(g):h(g)&&w(g)}}},i=g=>{g.addEventListener("keyboardDidShow",C=>p(g,C)),g.addEventListener("keyboardDidHide",()=>w(g))},p=(g,C)=>{m(g,C),l=!0},w=g=>{v(g),l=!1},E=()=>!l&&t.width===o.width&&(t.height-o.height)*o.scale>150,x=g=>l&&!h(g),h=g=>l&&o.height===g.innerHeight,m=(g,C)=>{const b=new CustomEvent(c,{detail:{keyboardHeight:C?C.keyboardHeight:g.innerHeight-o.height}});g.dispatchEvent(b)},v=g=>{const C=new CustomEvent(s);g.dispatchEvent(C)},y=g=>{t=Object.assign({},o),o=O(g.visualViewport)},O=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},3812:(M,_,a)=>{a.d(_,{K:()=>c,a:()=>n});var f=a(9920),u=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(u||{}),n=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(n||{});const c={getEngine(){const s=(0,f.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(r=>{if(r.code!==u.Unimplemented)throw r}):Promise.resolve(void 0)}}},2930:(M,_,a)=>{a.d(_,{c:()=>r});var f=a(5861),u=a(7643),n=a(3812);const c=t=>{if(void 0===u.d||t===n.a.None||void 0===t)return null;const o=u.d.querySelector("ion-app");return null!=o?o:u.d.body},s=t=>{const o=c(t);return null===o?0:o.clientHeight},r=function(){var t=(0,f.Z)(function*(o){let l,d,e,i;const p=function(){var m=(0,f.Z)(function*(){const v=yield n.K.getResizeMode(),y=void 0===v?void 0:v.mode;l=()=>{void 0===i&&(i=s(y)),e=!0,w(e,y)},d=()=>{e=!1,w(e,y)},null==u.w||u.w.addEventListener("keyboardWillShow",l),null==u.w||u.w.addEventListener("keyboardWillHide",d)});return function(){return m.apply(this,arguments)}}(),w=(m,v)=>{o&&o(m,E(v))},E=m=>{if(0===i||i===s(m))return;const v=c(m);return null!==v?new Promise(y=>{const g=new ResizeObserver(()=>{v.clientHeight===i&&(g.disconnect(),y())});g.observe(v)}):void 0};return yield p(),{init:p,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",l),null==u.w||u.w.removeEventListener("keyboardWillHide",d),l=d=void 0},isKeyboardVisible:()=>e}});return function(l){return t.apply(this,arguments)}}()},9718:(M,_,a)=>{a.d(_,{c:()=>n});var f=a(7643),u=a(544);const n=(c,s,r)=>{let t;const o=()=>!(void 0===s()||void 0!==c.label||null===r()),d=()=>{const i=s();if(void 0===i)return;if(!o())return void i.style.removeProperty("width");const p=r().scrollWidth;if(0===p&&null===i.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==t)return;const w=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),w.disconnect(),t=void 0)},{threshold:.01,root:c});w.observe(i)}else i.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{o()&&(0,u.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},1173:(M,_,a)=>{a.d(_,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(n,c,s)=>{const r=n*c/s-n+"ms",t=2*Math.PI*c/s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(n,c,s)=>{const r=c/s,t=n*r-n+"ms",o=2*Math.PI*r;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(n,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(n,c,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":n*c/s-n+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(n,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":n*c/s-n+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(n,c,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":n*c/s-n+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(n,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":n*c/s-n+"ms"}})}}},4666:(M,_,a)=>{a.r(_),a.d(_,{createSwipeBackGesture:()=>s});var f=a(544),u=a(1776),n=a(8077);a(4587);const s=(r,t,o,l,d)=>{const e=r.ownerDocument.defaultView;let i=(0,u.i)(r);const w=v=>i?-v.deltaX:v.deltaX;return(0,n.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:v=>(i=(0,u.i)(r),(v=>{const{startX:O}=v;return i?O>=e.innerWidth-50:O<=50})(v)&&t()),onStart:o,onMove:v=>{const O=w(v)/e.innerWidth;l(O)},onEnd:v=>{const y=w(v),O=e.innerWidth,g=y/O,C=(v=>i?-v.velocityX:v.velocityX)(v),b=C>=0&&(C>.2||y>O/2),L=(b?1-g:g)*O;let P=0;if(L>5){const A=L/Math.abs(C);P=Math.min(A,540)}d(b,g<=0?.01:(0,f.l)(0,g,.9999),P)}})}},8639:(M,_,a)=>{a.d(_,{w:()=>f});const f=(c,s,r)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(o=>{r(u(o,s))});return t.observe(c,{childList:!0,subtree:!0}),t},u=(c,s)=>{let r;return c.forEach(t=>{for(let o=0;o<t.addedNodes.length;o++)r=n(t.addedNodes[o],s)||r}),r},n=(c,s)=>1!==c.nodeType?void 0:(c.tagName===s.toUpperCase()?[c]:Array.from(c.querySelectorAll(s))).find(t=>t.value===c.value)},6162:(M,_,a)=>{a.d(_,{t:()=>o});var f=a(5687),u=a(6814),n=a(6689);function c(l,d){if(1&l&&(n.ynx(0),n.TgZ(1,"p"),n._uU(2),n.qZA(),n.BQk()),2&l){const e=d.$implicit;n.xp6(2),n.Oqu(e.text)}}function s(l,d){if(1&l&&(n.ynx(0),n.TgZ(1,"li")(2,"h3"),n._uU(3),n.qZA(),n.YNc(4,c,3,1,"ng-container",1),n.qZA(),n.BQk()),2&l){const e=d.$implicit,i=d.index;n.xp6(1),n.Jzz("--i: ",i+1,""),n.xp6(2),n.Oqu(e.text),n.xp6(1),n.Q6J("ngForOf",e.next)}}function r(l,d){if(1&l&&(n.TgZ(0,"ol",3),n.YNc(1,s,5,5,"ng-container",1),n.qZA()),2&l){const e=n.oxw().$implicit;n.Jzz("--length: ",e.next.length,""),n.xp6(1),n.Q6J("ngForOf",e.next)}}function t(l,d){if(1&l&&(n.ynx(0),n.TgZ(1,"h1"),n._uU(2),n.qZA(),n.YNc(3,r,2,4,"ol",2),n.BQk()),2&l){const e=d.$implicit;n.xp6(2),n.Oqu(e.text),n.xp6(1),n.Q6J("ngIf",e.next)}}let o=(()=>{class l{constructor(){}ngOnInit(){console.log(`t=${this.datas}`)}}return l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-article"]],inputs:{datas:"datas"},standalone:!0,features:[n.jDz],decls:2,vars:2,consts:[[3,"fullscreen"],[4,"ngFor","ngForOf"],["role","list",3,"style",4,"ngIf"],["role","list"]],template:function(e,i){1&e&&(n.TgZ(0,"ion-content",0),n.YNc(1,t,4,2,"ng-container",1),n.qZA()),2&e&&(n.Q6J("fullscreen",!0),n.xp6(1),n.Q6J("ngForOf",i.datas))},dependencies:[f.Pc,f.W2,u.sg,u.O5],styles:['[_nghost-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{--h: 212deg;--l: 43%;--brandColor: hsl(var(--h), 71%, var(--l));font-family:Montserrat,sans-serif;margin:0;background-color:#f5f5f5}p[_ngcontent-%COMP%]{margin:0;line-height:1.6}ol[_ngcontent-%COMP%]{list-style:none;counter-reset:list;padding:0 1rem}li[_ngcontent-%COMP%]{--stop: calc(100% / var(--length) * var(--i));--l: 62%;--l2: 88%;--h: calc((var(--i) - 1) * (180 / var(--length)));--c1: hsl(var(--h), 71%, var(--l));--c2: hsl(var(--h), 71%, var(--l2));position:relative;counter-increment:list;max-width:45rem;margin:2rem auto;padding:2rem 1rem 1rem;box-shadow:.1rem .1rem 1.5rem #0000004d;border-radius:.25rem;overflow:hidden;background-color:#fff}li[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:1rem;position:absolute;top:0;left:0;background:linear-gradient(to right,var(--c1) var(--stop),var(--c2) var(--stop))}h3[_ngcontent-%COMP%]{display:flex;align-items:baseline;margin:0 0 1rem;color:#464646;font-weight:bolder}h3[_ngcontent-%COMP%]:before{display:flex;justify-content:center;align-items:center;flex:0 0 auto;margin-right:1rem;width:1rem;height:1rem;content:counter(list);padding:1rem;border-radius:50%;background-color:var(--c1);color:#fff}p[_ngcontent-%COMP%]{margin-left:4rem}h1[_ngcontent-%COMP%]{background-color:#f8cd5f;color:#fff;font-weight:bolder;font-size:2rem;padding:1rem;text-align:center}']}),l})()},3307:(M,_,a)=>{a.d(_,{G:()=>f,e:()=>u});let f=[{text:"\u7981\u5fcc",next:[{text:"\u5c11\u9e7d",next:[{text:"\u9e7d = \u98df\u9e7d\uff0c\u91ac\u6cb9\uff0c\u5473\u589e\uff0c\u9183\u6f2c\uff0c\u6c99\u8336\u91ac"}]},{text:"\u934b\u5177",next:[{text:"\u5b89\u5168\u7121\u6bd2\u7684\u934b\u5177"}]},{text:"\u5316\u599d\u54c1\uff0c\u4fdd\u990a\u54c1",next:[{text:"\u67d3\u9aee\u5291\uff0c\u751f\u9577\u56e0\u5b50"}]}]},{text:"\u852c\u679c\u6e6f",next:[{text:"\u852c\u679c\u6c41\u4f7f\u7528\u7834\u58c1\u6a5f\uff0c\u6216\u8005\u5ef6\u9577\u6253\u679c\u6c41\u7684\u6642\u9593\u3002"},{text:"\u5fb9\u5e95\u6e05\u9664\u8fb2\u85e5"},{text:"\u716e\u6e6f",next:[{text:"\u4e0d\u751f\u5403\uff0c\u4e0d\u71b1\u7092\u3002"}]},{text:"\u7121\u9e7d",next:[{text:"\u4e0d\u52a0\u9e7d\uff0c\u4e0d\u52a0\u9aa8\u982d\uff0c\u4e0d\u52a0\u8089\uff0c\u4e0d\u52a0\u96de\u6e6f\u584a"}]},{text:"\u53ea\u7528\u7d14\u6c34"},{text:"\u6df7\u5408\u591a\u7a2e\u984f\u8272\u7684\u852c\u679c",next:[{text:"\u591a\u6a23\u852c\u83dc\uff0c\u6bcf\u7a2e\u852c\u83dc\u4efd\u91cf\u5c11"},{text:"\u4f8b\u5982\uff1a\u7d05\u863f\u8514\uff0c\u9752\u6912\uff0c\u7d2b\u8272\u8304\u5b50\uff0c\u9ec3\u8272\u5357\u74dc\uff0c\u7da0\u8449\u852c\u83dc...\u5c11\u8a31\u4efd\u91cf"}]},{text:"\u7de9\u6162\u70f9\u8abf"},{text:"\u65b0\u9bae",next:[{text:"\u4e00\u6b21\u53ea\u716e1\u9910\u62162\u9910\u4efd"},{text:"\u852c\u679c\u5df2\u7d93\u88ab\u7a7a\u6c23\u6c27\u5316\u7684\u90e8\u5206\uff0c\u4e0d\u5403"}]}]},{text:"\u86cb\u767d\u8cea\u65b7\u98df",next:[{text:"\u5403\u852c\u679c\u6e6f\u6642\uff0c\u4e0d\u5403\u8089"}]},{text:"\u4f7f\u7528\u597d\u6cb9"}],u=[{text:"\u7d14\u6c34",next:[{text:"\u6c34\u4e2d\u7684\u6c1f\u5316\u7269\uff0c\u6c2f\u5316\u7269\uff0c\u81f4\u764c"}]},{text:"\u5c11\u9e7d",next:[{text:"\u86cb\u767d\u8cea\u548c\u9e7d\u7d50\u5408\u4e4b\u5f8c -> \u7d30\u80de\u6c34\u816b -> \u7d30\u80de\u6ce1\u6c34 -> \u7d30\u80de\u5931\u80fd -> \u816b\u7624\u5fae\u74b0\u5883"},{text:"\u9e7d\u5206 -> \u4fc3\u9032\u7d30\u80de\u5206\u88c2"},{text:"\u9e7d\u6709\u91cd\u8981\u7684\u751f\u7406\u4f5c\u7528\u3002\u6211\u5011\u9700\u8981\u4e00\u9ede\u9ede\u9e7d"}]},{text:"\u5f97\u5230\u690d\u5316\u7d20",next:[{text:"\u6253\u7834\u7d30\u80de\u58c1",next:[{text:"\u52a0\u71b1"},{text:"\u7834\u58c1\u6a5f"}]}]},{text:"\u690d\u5316\u7d20",next:[{text:"\u985e\u9ec3\u916e\u7d20",next:[{text:"(1) \u82b1\u9752\u7d20\u3001\u524d\u82b1\u9752\u7d20\uff1b(2) \u5152\u8336\u7d20\uff1b(3) \u69f2\u76ae\u7d20\uff1b(4) \u6ab8\u6aac\u9ec3\u7d20\uff1b(5) \u82b8\u9999\u7d20\uff1b(6) \u82b9\u83dc\u7d20\u7b49\u3002\n"}]},{text:"\u985e\u80e1\u863f\u8514\u7d20",next:[{text:"(1) \u03b2-\u80e1\u863f\u8514\u7d20\u3001\u03b2-\u96b1\u9ec3\u7d20\u3001\u03b1-\u80e1\u863f\u8514\u7d20\uff1b(2) \u8449\u9ec3\u7d20\uff1b(3) \u7389\u7c73\u9ec3\u7d20\uff1b(4) \u8304\u7d05\u7d20\uff1b(5) \u8fa3\u6912\u7d20\u3001\u8fa3\u6912\u7d05\u7d20\u7b49\u3002\n"}]},{text:"\u6709\u6a5f\u786b\u5316\u7269",next:[{text:"(1) \u5927\u849c\u7d20\uff1b(2) \u863f\u8514\u786b\u7d20\uff1b(3) \u9ea9\u80f1\u7518\u80bd\uff1b(4) \u5432\u54da\uff1b(5) \u7570\u786b\u6c30\u9178\u916f\u7b49\u3002\n"}]},{text:"\u915a\u9178\u985e",next:[{text:"(1) \u7da0\u539f\u9178\uff1b(2) \u97a3\u82b1\u9178\uff1b(3) \u6c92\u98df\u5b50\u9178\uff1b(4) \u5c0d\u9999\u8c46\u9178\uff1b(5) \u963f\u9b4f\u9178\uff1b(6) \u6c34\u694a\u9178\u7b49\u3002\n"}]},{text:"\u690d\u7269\u96cc\u6fc0\u7d20",next:[{text:"(1) \u7570\u9ec3\u916e\uff1b(2) \u6728\u915a\u7d20\uff1b(3) \u85af\u828b\u7682\u7b49\u3002"}]},{text:"\u5176\u4ed6",next:[{text:"(1) \u8449\u7da0\u7d20\uff1b(2) \u8591\u9ec3\u7d20\uff1b(3) \u767d\u85dc\u8606\u9187\uff1b(4) \u5496\u5561\u9178\uff1b(5) \u6ab8\u6aac\u9178\u70ef\u3001\u6ab8\u6aac\u82e6\u7d20\uff1b(6) \u690d\u7269\u7682\u7d20\uff1b(7) \u82e6\u74dc\u82f7\uff1b(8) \u8ff7\u8fed\u9999\u9178\u7b49"}]},{text:"\u690d\u5316\u7d20\u53ef\u4ee5\u9032\u5165\u5927\u8166"},{text:"\u690d\u5316\u7d20\u53ef\u4ee5\u8010\u71b1100\u5ea6\uff0c\u6eb6\u65bc\u6c34\uff0c\u4e0d\u8010\u9ad8\u6eab"}]},{text:"\u6e6f\u4e2d\u6709\u9240\u96e2\u5b50",next:[{text:"\u7d30\u80de\u80fd\u91cf\uff0c\u53bb\u6c34\u816b"},{text:"\u6ce8\u610f\uff01\u5982\u679c\u5403\u904e\u982d -> \u9ad8\u8840\u9240\u75c7\u72c0"}]}]}}]);