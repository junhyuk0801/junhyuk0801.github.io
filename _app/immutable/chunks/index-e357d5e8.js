function R(){}const ut=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function I(){return Object.create(null)}function $(t){t.forEach(V)}function X(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function zt(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function ft(t){return Object.keys(t).length===0}function Ft(t,e,n,i){if(t){const l=Y(t,e,n,i);return t[0](l)}}function Y(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const o=[],r=Math.max(e.dirty.length,l.length);for(let c=0;c<r;c+=1)o[c]=e.dirty[c]|l[c];return o}return e.dirty|l}return e.dirty}function It(t,e,n,i,l,o){if(l){const r=Y(e,n,i,o);t.p(r,l)}}function Wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const Z=typeof window!="undefined";let _t=Z?()=>window.performance.now():()=>Date.now(),B=Z?t=>requestAnimationFrame(t):R;const x=new Set;function tt(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&B(tt)}function dt(t){let e;return x.size===0&&B(tt),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let q=!1;function ht(){q=!0}function mt(){q=!1}function pt(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,_=(l>0&&e[n[l]].claim_order<=u?l+1:pt(1,l,a=>e[n[a]].claim_order,u))-1;i[s]=n[_]+1;const f=_+1;n[f]=s,l=Math.max(f,l)}const o=[],r=[];let c=e.length-1;for(let s=n[l]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);c>=s;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);o.reverse(),r.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<r.length;s++){for(;u<o.length&&r[s].claim_order>=o[u].claim_order;)u++;const _=u<o.length?o[u]:null;t.insertBefore(r[s],_)}}function gt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=z("style");return $t(et(t),e),e.sheet}function $t(t,e){gt(t.head||t,e)}function bt(t,e){if(q){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function wt(t,e,n){t.insertBefore(e,n||null)}function vt(t,e,n){q&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Qt(){return F(" ")}function Ut(){return F("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,l=!1){nt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const s=n(c);return s===void 0?t.splice(r,1):t[r]=s,l||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const s=n(c);return s===void 0?t.splice(r,1):t[r]=s,l?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,e,n,i){return it(t,l=>l.nodeName===e,l=>{const o=[];for(let r=0;r<l.attributes.length;r++){const c=l.attributes[r];n[c.name]||o.push(c.name)}o.forEach(r=>l.removeAttribute(r))},()=>i(e))}function Yt(t,e,n){return rt(t,e,n,z)}function Zt(t,e,n){return rt(t,e,n,Et)}function kt(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function te(t){return kt(t," ")}function W(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return t.length}function ee(t){const e=W(t,"HTML_TAG_START",0),n=W(t,"HTML_TAG_END",e);if(e===n)return new J;nt(t);const i=t.splice(e,n-e+1);C(i[0]),C(i[i.length-1]);const l=i.slice(1,i.length-1);for(const o of l)o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(l)}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ie(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function re(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Tt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=z(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)wt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class J extends Tt{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)vt(this.t,this.n[n],e)}}const j=new Map;let M=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:xt(e),rules:{}};return j.set(t,n),n}function K(t,e,n,i,l,o,r,c=0){const s=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=s){const g=e+(n-e)*o(p);u+=p*100+`%{${r(g,1-g)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${St(_)}_${c}`,a=et(t),{stylesheet:d,rules:h}=j.get(a)||Ct(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${l}ms 1 both`,M+=1,f}function jt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),l=n.length-i.length;l&&(t.style.animation=i.join(", "),M-=l,M||Mt())}function Mt(){B(()=>{M||(j.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),j.clear())})}let E;function v(t){E=t}function G(){if(!E)throw new Error("Function called outside component initialization");return E}function le(t){G().$$.on_mount.push(t)}function se(t){G().$$.after_update.push(t)}function ce(t,e){G().$$.context.set(t,e)}const w=[],Q=[],T=[],U=[],lt=Promise.resolve();let P=!1;function st(){P||(P=!0,lt.then(ct))}function oe(){return st(),lt}function H(t){T.push(t)}const D=new Set;let N=0;function ct(){const t=E;do{for(;N<w.length;){const e=w[N];N++,v(e),Ht(e.$$)}for(v(null),w.length=0,N=0;Q.length;)Q.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];D.has(n)||(D.add(n),n())}T.length=0}while(w.length);for(;U.length;)U.pop()();P=!1,D.clear(),v(t)}function Ht(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let b;function Rt(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function O(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const S=new Set;let m;function ue(){m={r:0,c:[],p:m}}function ae(){m.r||$(m.c),m=m.p}function qt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),m.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Lt={duration:0};function _e(t,e,n,i){let l=e(t,n),o=i?0:1,r=null,c=null,s=null;function u(){s&&jt(t,s)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=ut,tick:p=R,css:g}=l||Lt,L={start:_t()+d,b:a};a||(L.group=m,m.r+=1),r||c?c=L:(g&&(u(),s=K(t,o,a,h,d,y,g)),a&&p(0,1),r=_(L,h),H(()=>O(t,a,"start")),dt(A=>{if(c&&A>c.start&&(r=_(c,h),c=null,O(t,r.b,"start"),g&&(u(),s=K(t,o,r.b,r.duration,0,y,l.css))),r){if(A>=r.end)p(o=r.b,1-o),O(t,r.b,"end"),c||(r.b?u():--r.group.r||$(r.group.c)),r=null;else if(A>=r.start){const ot=A-r.start;o=r.a+r.d*y(ot/r.duration),p(o,1-o)}}return!!(r||c)}))}return{run(a){X(l)?Rt().then(()=>{l=l(),f(a)}):f(a)},end(){u(),r=c=null}}}function de(t,e){const n={},i={},l={$$scope:1};let o=t.length;for(;o--;){const r=t[o],c=e[o];if(c){for(const s in r)s in c||(i[s]=1);for(const s in c)l[s]||(n[s]=c[s],l[s]=1);t[o]=c}else for(const s in r)l[s]=1}for(const r in i)r in n||(n[r]=void 0);return n}function he(t){return typeof t=="object"&&t!==null?t:{}}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:l,on_mount:o,on_destroy:r,after_update:c}=t.$$;l&&l.m(e,n),i||H(()=>{const s=o.map(V).filter(X);r?r.push(...s):$(s),t.$$.on_mount=[]}),c.forEach(H)}function Ot(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(w.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,i,l,o,r,c=[-1]){const s=E;v(t);const u=t.$$={fragment:null,ctx:null,props:o,update:R,not_equal:l,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:I(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&l(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Pt(t,f)),a}):[],u.update(),_=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ht();const f=At(e.target);u.fragment&&u.fragment.l(f),f.forEach(C)}else u.fragment&&u.fragment.c();e.intro&&qt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),mt(),ct()}v(s)}class ge{$destroy(){Ot(this,1),this.$destroy=R}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as A,he as B,Ot as C,at as D,oe as E,Et as F,Zt as G,bt as H,Jt as I,zt as J,Vt as K,H as L,_e as M,Ft as N,re as O,It as P,Wt as Q,Gt as R,ge as S,J as T,ee as U,Kt as V,wt as W,gt as X,Q as Y,At as a,Xt as b,Yt as c,C as d,z as e,ie as f,vt as g,kt as h,ye as i,ne as j,Qt as k,Ut as l,te as m,R as n,ue as o,fe as p,ae as q,qt as r,Bt as s,F as t,ce as u,se as v,le as w,me as x,pe as y,Dt as z};
