var Ot=Object.defineProperty;var Je=o=>{throw TypeError(o)};var jt=(o,e,t)=>e in o?Ot(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var g=(o,e,t)=>jt(o,typeof e!="symbol"?e+"":e,t),Lt=(o,e,t)=>e.has(o)||Je("Cannot "+t);var Ye=(o,e,t)=>e.has(o)?Je("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t);var le=(o,e,t)=>(Lt(o,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis,Re=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Me=Symbol(),Xe=new WeakMap;let gt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Re&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Xe.set(t,e))}return e}toString(){return this.cssText}};const z=o=>new gt(typeof o=="string"?o:o+"",void 0,Me),k=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new gt(t,o,Me)},Ht=(o,e)=>{if(Re)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=de.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},Ke=Re?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return z(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Dt,defineProperty:Nt,getOwnPropertyDescriptor:Ut,getOwnPropertyNames:Bt,getOwnPropertySymbols:qt,getPrototypeOf:Wt}=Object,P=globalThis,et=P.trustedTypes,Ft=et?et.emptyScript:"",Ae=P.reactiveElementPolyfillSupport,Q=(o,e)=>o,ue={toAttribute(o,e){switch(e){case Boolean:o=o?Ft:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Ie=(o,e)=>!Dt(o,e),tt={attribute:!0,type:String,converter:ue,reflect:!1,useDefault:!1,hasChanged:Ie};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),P.litPropertyMetadata??(P.litPropertyMetadata=new WeakMap);let B=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Nt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:s}=Ut(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){const a=i==null?void 0:i.call(this);s==null||s.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tt}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;const e=Wt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){const t=this.properties,n=[...Bt(t),...qt(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(Ke(i))}else e!==void 0&&t.push(Ke(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ht(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var s;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const r=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:ue).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){var s,r;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=n.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:ue;this._$Em=i;const h=l.fromAttribute(t,a.type);this[i]=h??((r=this._$Ej)==null?void 0:r.get(i))??h,this._$Em=null}}requestUpdate(e,t,n,i=!1,s){var r;if(e!==void 0){const a=this.constructor;if(i===!1&&(s=this[e]),n??(n=a.getPropertyOptions(e)),!((n.hasChanged??Ie)(s,t)||n.useDefault&&n.reflect&&s===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:s},r){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i){const{wrapped:a}=r,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,r,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[Q("elementProperties")]=new Map,B[Q("finalized")]=new Map,Ae==null||Ae({ReactiveElement:B}),(P.reactiveElementVersions??(P.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,nt=o=>o,fe=V.trustedTypes,it=fe?fe.createPolicy("lit-html",{createHTML:o=>o}):void 0,bt="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,vt="?"+E,Gt=`<${vt}>`,O=document,X=()=>O.createComment(""),K=o=>o===null||typeof o!="object"&&typeof o!="function",Oe=Array.isArray,Zt=o=>Oe(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Se=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,st=/>/g,R=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,at=/"/g,xt=/^(?:script|style|textarea|title)$/i,Qt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),b=Qt(1),j=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),lt=new WeakMap,M=O.createTreeWalker(O,129);function kt(o,e){if(!Oe(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(e):e}const Vt=(o,e)=>{const t=o.length-1,n=[];let i,s=e===2?"<svg>":e===3?"<math>":"",r=G;for(let a=0;a<t;a++){const l=o[a];let h,c,p=-1,d=0;for(;d<l.length&&(r.lastIndex=d,c=r.exec(l),c!==null);)d=r.lastIndex,r===G?c[1]==="!--"?r=rt:c[1]!==void 0?r=st:c[2]!==void 0?(xt.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=R):c[3]!==void 0&&(r=R):r===R?c[0]===">"?(r=i??G,p=-1):c[1]===void 0?p=-2:(p=r.lastIndex-c[2].length,h=c[1],r=c[3]===void 0?R:c[3]==='"'?at:ot):r===at||r===ot?r=R:r===rt||r===st?r=G:(r=R,i=void 0);const u=r===R&&o[a+1].startsWith("/>")?" ":"";s+=r===G?l+Gt:p>=0?(n.push(h),l.slice(0,p)+bt+l.slice(p)+E+u):l+E+(p===-2?a:u)}return[kt(o,s+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class ee{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,r=0;const a=e.length-1,l=this.parts,[h,c]=Vt(e,t);if(this.el=ee.createElement(h,n),M.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=M.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(bt)){const d=c[r++],u=i.getAttribute(p).split(E),x=/([.?@])?(.*)/.exec(d);l.push({type:1,index:s,name:x[2],strings:u,ctor:x[1]==="."?Yt:x[1]==="?"?Xt:x[1]==="@"?Kt:ke}),i.removeAttribute(p)}else p.startsWith(E)&&(l.push({type:6,index:s}),i.removeAttribute(p));if(xt.test(i.tagName)){const p=i.textContent.split(E),d=p.length-1;if(d>0){i.textContent=fe?fe.emptyScript:"";for(let u=0;u<d;u++)i.append(p[u],X()),M.nextNode(),l.push({type:2,index:++s});i.append(p[d],X())}}}else if(i.nodeType===8)if(i.data===vt)l.push({type:2,index:s});else{let p=-1;for(;(p=i.data.indexOf(E,p+1))!==-1;)l.push({type:7,index:s}),p+=E.length-1}s++}}static createElement(e,t){const n=O.createElement("template");return n.innerHTML=e,n}}function W(o,e,t=o,n){var r,a;if(e===j)return e;let i=n!==void 0?(r=t._$Co)==null?void 0:r[n]:t._$Cl;const s=K(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=i:t._$Cl=i),i!==void 0&&(e=W(o,i._$AS(o,e.values),i,n)),e}class Jt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??O).importNode(t,!0);M.currentNode=i;let s=M.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let h;l.type===2?h=new se(s,s.nextSibling,this,e):l.type===1?h=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(h=new en(s,this,e)),this._$AV.push(h),l=n[++a]}r!==(l==null?void 0:l.index)&&(s=M.nextNode(),r++)}return M.currentNode=O,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class se{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),K(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==j&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Zt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&K(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ee.createElement(kt(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(t);else{const r=new Jt(i,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=lt.get(e.strings);return t===void 0&&lt.set(e.strings,t=new ee(e)),t}k(e){Oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const s of e)i===t.length?t.push(n=new se(this.O(X()),this.O(X()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){const i=nt(e).nextSibling;nt(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ke{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,i){const s=this.strings;let r=!1;if(s===void 0)e=W(this,e,t,0),r=!K(e)||e!==this._$AH&&e!==j,r&&(this._$AH=e);else{const a=e;let l,h;for(e=s[0],l=0;l<s.length-1;l++)h=W(this,a[n+l],t,l),h===j&&(h=this._$AH[l]),r||(r=!K(h)||h!==this._$AH[l]),h===v?e=v:e!==v&&(e+=(h??"")+s[l+1]),this._$AH[l]=h}r&&!i&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Yt extends ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class Xt extends ke{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class Kt extends ke{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=W(this,e,t,0)??v)===j)return;const n=this._$AH,i=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==v&&(n===v||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class en{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const Te=V.litHtmlPolyfillSupport;Te==null||Te(ee,se),(V.litHtmlVersions??(V.litHtmlVersions=[])).push("3.3.3");const tn=(o,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const s=(t==null?void 0:t.renderBefore)??null;n._$litPart$=i=new se(e.insertBefore(X(),s),s,void 0,t??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis;let A=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return j}};var mt;A._$litElement$=!0,A.finalized=!0,(mt=I.litElementHydrateSupport)==null||mt.call(I,{LitElement:A});const Ce=I.litElementPolyfillSupport;Ce==null||Ce({LitElement:A});(I.litElementVersions??(I.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:Ie},rn=(o=nn,e,t)=>{const{kind:n,metadata:i}=t;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(t.name,o),n==="accessor"){const{name:r}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,l,o,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,o,a),a}}}if(n==="setter"){const{name:r}=t;return function(a){const l=this[r];e.call(this,a),this.requestUpdate(r,l,o,!0,a)}}throw Error("Unsupported decorator location: "+n)};function yt(o){return(e,t)=>typeof t=="object"?rn(o,e,t):((n,i,s)=>{const r=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(i,s):void 0})(o,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(o){return yt({...o,state:!0,attribute:!1})}const N=`@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 3rem;
  }
}

.section {
  padding: 6rem 0;
  position: relative;
}

@media (min-width: 768px) {
  .section {
    padding: 8rem 0;
  }
}

.section-intro {
  margin-bottom: 4rem;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.section-subtitle {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent);
  margin-bottom: 0.75rem;
  display: block;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 3.25rem;
  }
}

.section-desc {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-top: 1.25rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  border-radius: 9999px;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition-normal);
  cursor: pointer;
  border: none;
  outline: none;
}

.btn-primary {
  background: var(--accent-gradient);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(129, 140, 248, 0.3);
}

.btn-primary:hover {
  background: var(--accent-gradient-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(129, 140, 248, 0.4);
}

.btn-stroke {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-stroke:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
  background: rgba(129, 140, 248, 0.05);
}

.glass-card {
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
}

.glass-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.list-reset {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;var sn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,ye=(o,e,t,n)=>{for(var i=n>1?void 0:n?on(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(e,t,i):r(i))||i);return n&&i&&sn(e,t,i),i};let F=class extends A{constructor(){super(...arguments),this.activeSection="intro",this.menuOpen=!1,this.theme=localStorage.getItem("theme")||"dark"}firstUpdated(){this.applyTheme(this.theme)}toggleTheme(){this.theme=this.theme==="dark"?"light":"dark",this.applyTheme(this.theme)}applyTheme(o){localStorage.setItem("theme",o),document.documentElement.setAttribute("data-theme",o),this.dispatchEvent(new CustomEvent("theme-changed",{detail:{theme:o}}))}toggleMenu(){this.menuOpen=!this.menuOpen}closeMenu(){this.menuOpen=!1}handleNav(o,e){o.preventDefault(),this.closeMenu(),this.dispatchEvent(new CustomEvent("nav-navigate",{detail:{targetId:e},bubbles:!0,composed:!0}))}render(){return b`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <header class="header">
        <div class="container nav-container">
          <div class="logo">
            <a href="#top" @click=${o=>this.handleNav(o,"intro")}>Jimz<span>.</span></a>
          </div>

          <nav class="nav-menu">
            <a href="#intro" class="nav-link ${this.activeSection==="intro"?"active":""}" @click=${o=>this.handleNav(o,"intro")}>Intro</a>
            <a href="#about" class="nav-link ${this.activeSection==="about"?"active":""}" @click=${o=>this.handleNav(o,"about")}>About</a>
            <a href="#resume" class="nav-link ${this.activeSection==="resume"?"active":""}" @click=${o=>this.handleNav(o,"resume")}>Résumé</a>
            <a href="#contact" class="nav-link ${this.activeSection==="contact"?"active":""}" @click=${o=>this.handleNav(o,"contact")}>Contact</a>
          </nav>

          <div class="actions">
            <button class="theme-toggle" @click=${this.toggleTheme} title="Toggle Dark/Light Mode">
              ${this.theme==="dark"?b`<i class="fa-solid fa-sun"></i>`:b`<i class="fa-solid fa-moon"></i>`}
            </button>
            <button class="mobile-menu-btn" @click=${this.toggleMenu} title="Toggle Menu">
              ${this.menuOpen?b`<i class="fa-solid fa-xmark"></i>`:b`<i class="fa-solid fa-bars"></i>`}
            </button>
          </div>
        </div>

        <div class="mobile-nav ${this.menuOpen?"open":""}">
          <a href="#intro" class="mobile-nav-link ${this.activeSection==="intro"?"active":""}" @click=${o=>this.handleNav(o,"intro")}>Intro</a>
          <a href="#about" class="mobile-nav-link ${this.activeSection==="about"?"active":""}" @click=${o=>this.handleNav(o,"about")}>About</a>
          <a href="#resume" class="mobile-nav-link ${this.activeSection==="resume"?"active":""}" @click=${o=>this.handleNav(o,"resume")}>Résumé</a>
          <a href="#contact" class="mobile-nav-link ${this.activeSection==="contact"?"active":""}" @click=${o=>this.handleNav(o,"contact")}>Contact</a>
        </div>
      </header>
    `}};F.styles=[k`${z(N)}`,k`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--header-height);
        z-index: 1000;
        transition: background-color var(--transition-normal), border-color var(--transition-normal);
      }

      .header {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        background: var(--bg-glass);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-color);
        transition: background-color var(--transition-normal), border-color var(--transition-normal);
      }

      .nav-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      .logo a {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 800;
        text-decoration: none;
        color: var(--text-primary);
        letter-spacing: -0.03em;
        transition: color var(--transition-fast);
      }

      .logo a span {
        color: var(--accent);
      }

      .nav-menu {
        display: none;
        gap: 2.5rem;
        align-items: center;
      }

      .nav-link {
        font-family: var(--font-sans);
        font-size: 0.95rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-secondary);
        transition: color var(--transition-fast), transform var(--transition-fast);
        position: relative;
        padding: 0.5rem 0;
      }

      .nav-link:hover {
        color: var(--text-primary);
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--accent-gradient);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease-in-out;
      }

      .nav-link:hover::after,
      .nav-link.active::after {
        transform: scaleX(1);
        transform-origin: left;
      }

      .nav-link.active {
        color: var(--accent);
        font-weight: 600;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .theme-toggle,
      .mobile-menu-btn {
        background: transparent;
        border: 1px solid var(--border-color);
        color: var(--text-primary);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: var(--transition-fast);
        outline: none;
      }

      .theme-toggle:hover,
      .mobile-menu-btn:hover {
        border-color: var(--accent);
        color: var(--accent);
        background: rgba(129, 140, 248, 0.08);
      }

      .mobile-menu-btn {
        display: inline-flex;
      }

      @media (min-width: 768px) {
        .nav-menu {
          display: flex;
        }

        .mobile-menu-btn {
          display: none;
        }
      }

      /* Mobile Navigation Menu */
      .mobile-nav {
        position: absolute;
        top: var(--header-height);
        left: 0;
        width: 100%;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border-color);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        transform: translateY(-150%);
        opacity: 0;
        transition: transform var(--transition-normal), opacity var(--transition-normal);
        z-index: -1;
        box-shadow: var(--shadow-lg);
      }

      .mobile-nav.open {
        transform: translateY(0);
        opacity: 1;
      }

      .mobile-nav-link {
        font-family: var(--font-heading);
        font-size: 1.15rem;
        font-weight: 600;
        text-decoration: none;
        color: var(--text-secondary);
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--border-color);
        transition: color var(--transition-fast);
      }

      .mobile-nav-link:last-child {
        border-bottom: none;
      }

      .mobile-nav-link.active {
        color: var(--accent);
      }
    `];ye([yt({type:String})],F.prototype,"activeSection",2);ye([$()],F.prototype,"menuOpen",2);ye([$()],F.prototype,"theme",2);F=ye([D("app-header")],F);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const an={CHILD:2},ln=o=>(...e)=>({_$litDirective$:o,values:e});class cn{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ee extends cn{constructor(e){if(super(e),this.it=v,e.type!==an.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===v||e==null)return this._t=void 0,this.it=e;if(e===j)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ee.directiveName="unsafeHTML",Ee.resultType=1;const q=ln(Ee);function je(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let U=je();function wt(o){U=o}const $t=/[&<>"']/,hn=new RegExp($t.source,"g"),_t=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,pn=new RegExp(_t.source,"g"),dn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ct=o=>dn[o];function w(o,e){if(e){if($t.test(o))return o.replace(hn,ct)}else if(_t.test(o))return o.replace(pn,ct);return o}const un=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function fn(o){return o.replace(un,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const mn=/(^|[^\[])\^/g;function m(o,e){let t=typeof o=="string"?o:o.source;e=e||"";const n={replace:(i,s)=>{let r=typeof s=="string"?s:s.source;return r=r.replace(mn,"$1"),t=t.replace(i,r),n},getRegex:()=>new RegExp(t,e)};return n}function ht(o){try{o=encodeURI(o).replace(/%25/g,"%")}catch{return null}return o}const J={exec:()=>null};function pt(o,e){const t=o.replace(/\|/g,(s,r,a)=>{let l=!1,h=r;for(;--h>=0&&a[h]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function ce(o,e,t){const n=o.length;if(n===0)return"";let i=0;for(;i<n&&o.charAt(n-i-1)===e;)i++;return o.slice(0,n-i)}function gn(o,e){if(o.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<o.length;n++)if(o[n]==="\\")n++;else if(o[n]===e[0])t++;else if(o[n]===e[1]&&(t--,t<0))return n;return-1}function dt(o,e,t,n){const i=e.href,s=e.title?w(e.title):null,r=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:t,href:i,title:s,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,a}return{type:"image",raw:t,href:i,title:s,text:w(r)}}function bn(o,e){const t=o.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[r]=s;return r.length>=n.length?i.slice(n.length):i}).join(`
`)}class me{constructor(e){g(this,"options");g(this,"rules");g(this,"lexer");this.options=e||U}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ce(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=bn(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=ce(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=ce(n.replace(/^ *>[ \t]?/gm,""),`
`);const i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,s={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const r=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",h=!1;for(;e;){let c=!1;if(!(t=r.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let p=t[2].split(`
`,1)[0].replace(/^\t+/,$e=>" ".repeat(3*$e.length)),d=e.split(`
`,1)[0],u=0;this.options.pedantic?(u=2,l=p.trimStart()):(u=t[2].search(/[^ ]/),u=u>4?1:u,l=p.slice(u),u+=t[1].length);let x=!1;if(!p&&/^ *$/.test(d)&&(a+=d+`
`,e=e.substring(d.length+1),c=!0),!c){const $e=new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ze=new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Qe=new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),Ve=new RegExp(`^ {0,${Math.min(3,u-1)}}#`);for(;e;){const _e=e.split(`
`,1)[0];if(d=_e,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Qe.test(d)||Ve.test(d)||$e.test(d)||Ze.test(e))break;if(d.search(/[^ ]/)>=u||!d.trim())l+=`
`+d.slice(u);else{if(x||p.search(/[^ ]/)>=4||Qe.test(p)||Ve.test(p)||Ze.test(p))break;l+=`
`+d}!x&&!d.trim()&&(x=!0),a+=_e+`
`,e=e.substring(_e.length+1),p=d.slice(u)}}s.loose||(h?s.loose=!0:/\n *\n *$/.test(a)&&(h=!0));let y=null,C;this.options.gfm&&(y=/^\[[ xX]\] /.exec(l),y&&(C=y[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:a,task:!!y,checked:C,loose:!1,text:l,tokens:[]}),s.raw+=a}s.items[s.items.length-1].raw=a.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let c=0;c<s.items.length;c++)if(this.lexer.state.top=!1,s.items[c].tokens=this.lexer.blockTokens(s.items[c].text,[]),!s.loose){const p=s.items[c].tokens.filter(u=>u.type==="space"),d=p.length>0&&p.some(u=>/\n.*\n/.test(u.raw));s.loose=d}if(s.loose)for(let c=0;c<s.items.length;c++)s.items[c].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=pt(t[1]),i=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],r={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const a of i)/^ *-+: *$/.test(a)?r.align.push("right"):/^ *:-+: *$/.test(a)?r.align.push("center"):/^ *:-+ *$/.test(a)?r.align.push("left"):r.align.push(null);for(const a of n)r.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of s)r.rows.push(pt(a,r.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return r}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:w(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=ce(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=gn(t[2],"()");if(r>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),dt(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const i=(n[2]||n[1]).replace(/\s+/g," "),s=t[i.toLowerCase()];if(!s){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return dt(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...i[0]].length-1;let a,l,h=r,c=0;const p=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+r);(i=p.exec(t))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(l=[...a].length,i[3]||i[4]){h+=l;continue}else if((i[5]||i[6])&&r%3&&!((r+l)%3)){c+=l;continue}if(h-=l,h>0)continue;l=Math.min(l,l+h+c);const d=[...i[0]][0].length,u=e.slice(0,r+i.index+d+l);if(Math.min(r,l)%2){const y=u.slice(1,-1);return{type:"em",raw:u,text:y,tokens:this.lexer.inlineTokens(y)}}const x=u.slice(2,-2);return{type:"strong",raw:u,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=w(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=w(t[1]),i="mailto:"+n):(n=w(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=w(t[0]),s="mailto:"+i;else{let r;do r=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(r!==t[0]);i=w(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=w(t[0]),{type:"text",raw:t[0],text:n}}}}const vn=/^(?: *(?:\n|$))+/,xn=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,kn=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,oe=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,yn=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,At=/(?:[*+-]|\d{1,9}[.)])/,St=m(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,At).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Le=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,wn=/^[^\n]+/,He=/(?!\s*\])(?:\\.|[^\[\]\\])+/,$n=m(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",He).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),_n=m(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,At).getRegex(),we="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",De=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,An=m("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",De).replace("tag",we).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Tt=m(Le).replace("hr",oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",we).getRegex(),Sn=m(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Tt).getRegex(),Ne={blockquote:Sn,code:xn,def:$n,fences:kn,heading:yn,hr:oe,html:An,lheading:St,list:_n,newline:vn,paragraph:Tt,table:J,text:wn},ut=m("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",we).getRegex(),Tn={...Ne,table:ut,paragraph:m(Le).replace("hr",oe).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ut).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",we).getRegex()},Cn={...Ne,html:m(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",De).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:J,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:m(Le).replace("hr",oe).replace("heading",` *#{1,6} *[^
]`).replace("lheading",St).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ct=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,En=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Et=/^( {2,}|\\)\n(?!\s*$)/,Pn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ae="\\p{P}\\p{S}",zn=m(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ae).getRegex(),Rn=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Mn=m(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ae).getRegex(),In=m("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ae).getRegex(),On=m("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ae).getRegex(),jn=m(/\\([punct])/,"gu").replace(/punct/g,ae).getRegex(),Ln=m(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Hn=m(De).replace("(?:-->|$)","-->").getRegex(),Dn=m("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Hn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ge=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Nn=m(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ge).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Pt=m(/^!?\[(label)\]\[(ref)\]/).replace("label",ge).replace("ref",He).getRegex(),zt=m(/^!?\[(ref)\](?:\[\])?/).replace("ref",He).getRegex(),Un=m("reflink|nolink(?!\\()","g").replace("reflink",Pt).replace("nolink",zt).getRegex(),Ue={_backpedal:J,anyPunctuation:jn,autolink:Ln,blockSkip:Rn,br:Et,code:En,del:J,emStrongLDelim:Mn,emStrongRDelimAst:In,emStrongRDelimUnd:On,escape:Ct,link:Nn,nolink:zt,punctuation:zn,reflink:Pt,reflinkSearch:Un,tag:Dn,text:Pn,url:J},Bn={...Ue,link:m(/^!?\[(label)\]\((.*?)\)/).replace("label",ge).getRegex(),reflink:m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ge).getRegex()},Pe={...Ue,escape:m(Ct).replace("])","~|])").getRegex(),url:m(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},qn={...Pe,br:m(Et).replace("{2,}","*").getRegex(),text:m(Pe.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},he={normal:Ne,gfm:Tn,pedantic:Cn},Z={normal:Ue,gfm:Pe,breaks:qn,pedantic:Bn};class S{constructor(e){g(this,"tokens");g(this,"options");g(this,"state");g(this,"tokenizer");g(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||U,this.options.tokenizer=this.options.tokenizer||new me,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:he.normal,inline:Z.normal};this.options.pedantic?(t.block=he.pedantic,t.inline=Z.pedantic):this.options.gfm&&(t.block=he.gfm,this.options.breaks?t.inline=Z.breaks:t.inline=Z.gfm),this.tokenizer.rules=t}static get rules(){return{block:he,inline:Z}}static lex(e,t){return new S(t).lex(e)}static lexInline(e,t){return new S(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,h)=>l+"    ".repeat(h.length));let n,i,s,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let h;this.options.extensions.startBlock.forEach(c=>{h=c.call({lexer:this},l),typeof h=="number"&&h>=0&&(a=Math.min(a,h))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),r=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,r=e,a,l,h;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,a.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(h=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,h)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const p=e.slice(1);let d;this.options.extensions.startInline.forEach(u=>{d=u.call({lexer:this},p),typeof d=="number"&&d>=0&&(c=Math.min(c,d))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(h=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}}class be{constructor(e){g(this,"options");this.options=e||U}code(e,t,n){var s;const i=(s=(t||"").match(/^\S*/))==null?void 0:s[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+w(i)+'">'+(n?e:w(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:w(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const i=t?"ol":"ul",s=t&&n!==1?' start="'+n+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const i=ht(e);if(i===null)return n;e=i;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){const i=ht(e);if(i===null)return n;e=i;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return e}}class Be{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class T{constructor(e){g(this,"options");g(this,"renderer");g(this,"textRenderer");this.options=e||U,this.options.renderer=this.options.renderer||new be,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Be}static parse(e,t){return new T(t).parse(e)}static parseInline(e,t){return new T(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=s,a=this.options.extensions.renderers[r.type].call({parser:this},r);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){n+=a||"";continue}}switch(s.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const r=s;n+=this.renderer.heading(this.parseInline(r.tokens),r.depth,fn(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{const r=s;n+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=s;let a="",l="";for(let c=0;c<r.header.length;c++)l+=this.renderer.tablecell(this.parseInline(r.header[c].tokens),{header:!0,align:r.align[c]});a+=this.renderer.tablerow(l);let h="";for(let c=0;c<r.rows.length;c++){const p=r.rows[c];l="";for(let d=0;d<p.length;d++)l+=this.renderer.tablecell(this.parseInline(p[d].tokens),{header:!1,align:r.align[d]});h+=this.renderer.tablerow(l)}n+=this.renderer.table(a,h);continue}case"blockquote":{const r=s,a=this.parse(r.tokens);n+=this.renderer.blockquote(a);continue}case"list":{const r=s,a=r.ordered,l=r.start,h=r.loose;let c="";for(let p=0;p<r.items.length;p++){const d=r.items[p],u=d.checked,x=d.task;let y="";if(d.task){const C=this.renderer.checkbox(!!u);h?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=C+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=C+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:C+" "}):y+=C+" "}y+=this.parse(d.tokens,h),c+=this.renderer.listitem(y,x,!!u)}n+=this.renderer.list(c,a,l);continue}case"html":{const r=s;n+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=s;n+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=s,a=r.tokens?this.parseInline(r.tokens):r.text;for(;i+1<e.length&&e[i+1].type==="text";)r=e[++i],a+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);n+=t?this.renderer.paragraph(a):a;continue}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=this.options.extensions.renderers[s.type].call({parser:this},s);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=r||"";continue}}switch(s.type){case"escape":{const r=s;n+=t.text(r.text);break}case"html":{const r=s;n+=t.html(r.text);break}case"link":{const r=s;n+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{const r=s;n+=t.image(r.href,r.title,r.text);break}case"strong":{const r=s;n+=t.strong(this.parseInline(r.tokens,t));break}case"em":{const r=s;n+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{const r=s;n+=t.codespan(r.text);break}case"br":{n+=t.br();break}case"del":{const r=s;n+=t.del(this.parseInline(r.tokens,t));break}case"text":{const r=s;n+=t.text(r.text);break}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}}class Y{constructor(e){g(this,"options");this.options=e||U}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}g(Y,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var H,ze,Rt;class Wn{constructor(...e){Ye(this,H);g(this,"defaults",je());g(this,"options",this.setOptions);g(this,"parse",le(this,H,ze).call(this,S.lex,T.parse));g(this,"parseInline",le(this,H,ze).call(this,S.lexInline,T.parseInline));g(this,"Parser",T);g(this,"Renderer",be);g(this,"TextRenderer",Be);g(this,"Lexer",S);g(this,"Tokenizer",me);g(this,"Hooks",Y);this.use(...e)}walkTokens(e,t){var i,s;let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const a=r;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const h of l)n=n.concat(this.walkTokens(h.tokens,t));break}case"list":{const a=r;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=r;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const h=a[l].flat(1/0);n=n.concat(this.walkTokens(h,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const r=t.renderers[s.name];r?t.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=r.apply(this,a)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=t[s.level];r?r.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),i.extensions=t),n.renderer){const s=this.defaults.renderer||new be(this.defaults);for(const r in n.renderer){if(!(r in s))throw new Error(`renderer '${r}' does not exist`);if(r==="options")continue;const a=r,l=n.renderer[a],h=s[a];s[a]=(...c)=>{let p=l.apply(s,c);return p===!1&&(p=h.apply(s,c)),p||""}}i.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new me(this.defaults);for(const r in n.tokenizer){if(!(r in s))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const a=r,l=n.tokenizer[a],h=s[a];s[a]=(...c)=>{let p=l.apply(s,c);return p===!1&&(p=h.apply(s,c)),p}}i.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Y;for(const r in n.hooks){if(!(r in s))throw new Error(`hook '${r}' does not exist`);if(r==="options")continue;const a=r,l=n.hooks[a],h=s[a];Y.passThroughHooks.has(r)?s[a]=c=>{if(this.defaults.async)return Promise.resolve(l.call(s,c)).then(d=>h.call(s,d));const p=l.call(s,c);return h.call(s,p)}:s[a]=(...c)=>{let p=l.apply(s,c);return p===!1&&(p=h.apply(s,c)),p}}i.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,r=n.walkTokens;i.walkTokens=function(a){let l=[];return l.push(r.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return S.lex(e,t??this.defaults)}parser(e,t){return T.parse(e,t??this.defaults)}}H=new WeakSet,ze=function(e,t){return(n,i)=>{const s={...i},r={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const a=le(this,H,Rt).call(this,!!r.silent,!!r.async);if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(l=>e(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>t(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(a);try{r.hooks&&(n=r.hooks.preprocess(n));let l=e(n,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let h=t(l,r);return r.hooks&&(h=r.hooks.postprocess(h)),h}catch(l){return a(l)}}},Rt=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+w(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};const L=new Wn;function f(o,e){return L.parse(o,e)}f.options=f.setOptions=function(o){return L.setOptions(o),f.defaults=L.defaults,wt(f.defaults),f};f.getDefaults=je;f.defaults=U;f.use=function(...o){return L.use(...o),f.defaults=L.defaults,wt(f.defaults),f};f.walkTokens=function(o,e){return L.walkTokens(o,e)};f.parseInline=L.parseInline;f.Parser=T;f.parser=T.parse;f.Renderer=be;f.TextRenderer=Be;f.Lexer=S;f.lexer=S.lex;f.Tokenizer=me;f.Hooks=Y;f.parse=f;f.options;f.setOptions;f.use;f.walkTokens;f.parseInline;T.parse;S.lex;const Fn=`# Hello,
I'm Jimz Au.

- Senior Software Engineer
- DevOps
- Team Lead
`,Gn="hello@jimz.au",Zn="https://www.linkedin.com/in/jimzau",Qn="https://github.com/jmzcray",Vn="https://drive.google.com/open?id=0B-vmjnGH79fONEZYVFpHQVRRa00",Jn="https://drive.google.com/open?id=0B-vmjnGH79fOeUFKbEpnVmxpNWM",Yn="/images/profile-pic.jpg",_={email:Gn,linkedin:Zn,github:Qn,cvWord:Vn,cvPdf:Jn,profilePic:Yn};var Xn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Mt=(o,e,t,n)=>{for(var i=n>1?void 0:n?Kn(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(e,t,i):r(i))||i);return n&&i&&Xn(e,t,i),i};let ve=class extends A{constructor(){super(...arguments),this.parsedHtml=""}connectedCallback(){super.connectedCallback(),this.parsedHtml=f.parse(Fn)}render(){return b`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div class="glow-blob glow-blob-1"></div>
      <div class="glow-blob glow-blob-2"></div>

      <div class="container intro-container">
        <div class="intro-content">
          <div class="markdown-content">
            ${q(this.parsedHtml)}
          </div>

          <div class="social-links">
            <a href="${_.linkedin}" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="${_.github}" target="_blank" rel="noopener" class="social-link" title="GitHub">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>

          <div class="actions">
            <a href="#about" class="btn btn-primary">
              More About Me <i class="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    `}};ve.styles=[k`${z(N)}`,k`
      :host {
        display: block;
        min-height: 100vh;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      .intro-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        padding-top: var(--header-height);
        position: relative;
        z-index: 10;
      }

      /* Glowing background blobs */
      .glow-blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.15;
        z-index: 1;
        pointer-events: none;
        animation: float 20s infinite alternate ease-in-out;
      }

      .glow-blob-1 {
        width: 400px;
        height: 400px;
        background: var(--accent);
        top: -10%;
        left: -10%;
      }

      .glow-blob-2 {
        width: 500px;
        height: 500px;
        background: var(--accent-teal);
        bottom: -10%;
        right: -10%;
        animation-delay: -5s;
      }

      @keyframes float {
        0% {
          transform: translate(0, 0) scale(1);
        }
        50% {
          transform: translate(50px, 30px) scale(1.1);
        }
        100% {
          transform: translate(-30px, -50px) scale(0.9);
        }
      }

      .intro-content {
        max-width: 800px;
        animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      /* Markdown text custom styling */
      .markdown-content h1 {
        font-family: var(--font-heading);
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1.1;
        margin: 1.5rem 0;
        letter-spacing: -0.03em;
        color: var(--text-primary);
      }

      @media (min-width: 768px) {
        .markdown-content h1 {
          font-size: 5.5rem;
        }
      }

      .markdown-content h1 strong,
      .markdown-content h1 em {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-style: normal;
      }

      .markdown-content h5 {
        font-family: var(--font-heading);
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.25em;
        color: var(--accent);
        margin: 0;
      }

      /* Bullet points style as badges */
      .markdown-content ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin: 2rem 0;
        padding: 0;
      }

      .markdown-content li {
        font-family: var(--font-sans);
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-secondary);
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        padding: 0.5rem 1.25rem;
        border-radius: 9999px;
        box-shadow: var(--shadow-sm);
        transition: var(--transition-fast);
      }

      .markdown-content li:hover {
        border-color: var(--accent);
        color: var(--text-primary);
        transform: translateY(-2px);
      }

      .social-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
      }

      .social-link {
        font-size: 1.5rem;
        color: var(--text-secondary);
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition-normal);
        text-decoration: none;
      }

      .social-link:hover {
        color: #ffffff;
        border-color: var(--accent);
        background: var(--accent);
        transform: translateY(-4px) rotate(8deg);
        box-shadow: 0 10px 20px rgba(129, 140, 248, 0.4);
      }

      .actions {
        margin-top: 2rem;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `];Mt([$()],ve.prototype,"parsedHtml",2);ve=Mt([D("intro-section")],ve);const pe=`# Let me introduce myself.

I'm a Sydney based **Senior Software Engineer** with **DevOps** experience specialising in **Adobe Experience Manager (AEM)** and **Amazon Web Services (AWS)**.

### Profile
A results-driven, versatile Senior Software Engineer with multiple years of experience.
Motivated to learn and enjoy working with technologies.
Adapts to new technologies quickly with proven track record to apply newly gained skills to deliver technical tasks and solving complex application problems.

- **Fullname:** James Au
- **Role:** Senior Software Engineer
- **Email:** hello@jimz.au
`,ei=[{category:"Cloud Platforms",skills:["Amazon Web Services (AWS)","Azure"]},{category:"Languages & Programming",skills:["Java","OSGi","HTML","JavaScript","TypeScript","NodeJS","CSS","XML / XSLT","Shell Script","Ansible","Terraform"]},{category:"CMS Platforms",skills:["Adobe Experience Manager (AEM)"]},{category:"Operating Systems",skills:["Microsoft Windows","macOS","Linux","Unix"]},{category:"Software Tools & Platforms",skills:["JIRA","Pivotal Cloud Foundry (PCF)","Apigee","Git","Bamboo","Apache","Postman","Insomnia","Bruno","Docker","New Relic"]},{category:"AI Tools",skills:["GitHub Copilot","ChatGPT","Claude","Perplexity","Ollama","Llama"]}];var ti=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,qe=(o,e,t,n)=>{for(var i=n>1?void 0:n?ni(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(e,t,i):r(i))||i);return n&&i&&ti(e,t,i),i};let te=class extends A{constructor(){super(...arguments),this.introHtml="",this.profileHtml=""}connectedCallback(){super.connectedCallback();const e=pe.indexOf("### Profile");e!==-1?(this.introHtml=f.parse(pe.substring(0,e)),this.profileHtml=f.parse(pe.substring(e))):(this.introHtml=f.parse(pe),this.profileHtml="")}getCategoryIcon(o){const e=o.toLowerCase();return e.includes("cloud")?"fa-cloud":e.includes("language")||e.includes("programming")?"fa-code":e.includes("cms")?"fa-laptop-code":e.includes("system")?"fa-terminal":e.includes("tool")||e.includes("platform")?"fa-screwdriver-wrench":e.includes("ai")?"fa-brain":"fa-gears"}render(){return b`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <section id="about" class="section">
        <div class="container">
          <div class="section-intro">
            <span class="section-subtitle">About</span>
            <h2 class="section-title">Let me introduce myself.</h2>
            <div class="section-desc">
              ${q(this.introHtml)}
            </div>
          </div>

          <div class="about-grid">
            <!-- Profile Column -->
            <div class="profile-info">
              <div class="profile-pic-wrapper">
                <img class="profile-pic" src="${_.profilePic}" alt="James Au - Profile Picture" />
              </div>
              
              <div class="profile-text">
                ${q(this.profileHtml)}
                
                <ul>
                  <li>
                    <strong>Full Name:</strong>
                    <span>James Au</span>
                  </li>
                  <li>
                    <strong>Role:</strong>
                    <span>Senior Software Engineer</span>
                  </li>
                  <li>
                    <strong>Email:</strong>
                    <span><a href="mailto:${_.email}">${_.email}</a></span>
                  </li>
                </ul>
              </div>

              <div class="buttons-section">
                <a href="#contact" class="btn btn-stroke">
                  <i class="fa-regular fa-envelope"></i> Contact Me
                </a>
                <a href="${_.cvWord}" class="btn btn-primary" target="_blank" rel="noopener">
                  <i class="fa-regular fa-file-word"></i> Download Word CV
                </a>
                <a href="${_.cvPdf}" class="btn btn-primary" target="_blank" rel="noopener">
                  <i class="fa-regular fa-file-pdf"></i> Download PDF CV
                </a>
              </div>
            </div>

            <!-- Skills Column -->
            <div class="skills-container">
              ${ei.map(o=>b`
                  <div class="glass-card skill-card">
                    <h4 class="skill-category-title">
                      <i class="fa-solid ${this.getCategoryIcon(o.category)}"></i>
                      ${o.category}
                    </h4>
                    <div class="skill-badges">
                      ${o.skills.map(e=>b`<span class="skill-badge">${e}</span>`)}
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>
      </section>
    `}};te.styles=[k`${z(N)}`,k`
      .about-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-top: 3rem;
      }

      @media (min-width: 992px) {
        .about-grid {
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
        }
      }

      .profile-info {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .profile-pic-wrapper {
        text-align: center;
        margin-bottom: 2rem;
      }

      .profile-pic {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--border-color);
        box-shadow: var(--shadow-md);
        transition: var(--transition-normal);
      }

      .profile-pic:hover {
        border-color: var(--accent);
        transform: scale(1.05) rotate(3deg);
        box-shadow: 0 10px 25px rgba(129, 140, 248, 0.3);
      }

      .profile-text {
        font-size: 1.05rem;
        line-height: 1.7;
        color: var(--text-secondary);
      }

      .profile-text h3 {
        font-family: var(--font-heading);
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1rem;
        letter-spacing: -0.01em;
      }

      .profile-text p {
        margin-bottom: 1rem;
      }

      .profile-text ul {
        list-style: none;
        margin-top: 1.5rem;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .profile-text li {
        display: flex;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 0.5rem;
      }

      .profile-text li strong {
        width: 120px;
        color: var(--text-primary);
        font-family: var(--font-heading);
        font-weight: 600;
      }

      .profile-text li span {
        color: var(--text-secondary);
      }

      .profile-text li a {
        color: var(--accent);
        text-decoration: none;
        transition: color var(--transition-fast);
      }

      .profile-text li a:hover {
        color: var(--text-primary);
        text-decoration: underline;
      }

      /* Skills Grid */
      .skills-container {
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
      }

      .skill-card {
        padding: 1.75rem;
      }

      .skill-category-title {
        font-family: var(--font-heading);
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border-bottom: 1px dashed var(--border-color);
        padding-bottom: 0.5rem;
      }

      .skill-category-title i {
        color: var(--accent);
      }

      .skill-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
      }

      .skill-badge {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-secondary);
        background: rgba(129, 140, 248, 0.04);
        border: 1px solid var(--border-color);
        padding: 0.4rem 0.9rem;
        border-radius: 8px;
        transition: var(--transition-fast);
      }

      .skill-badge:hover {
        background: var(--accent-gradient);
        border-color: transparent;
        color: #ffffff;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(129, 140, 248, 0.25);
      }

      .buttons-section {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2rem;
        justify-content: center;
      }

      @media (min-width: 992px) {
        .buttons-section {
          justify-content: flex-start;
        }
      }
    `];qe([$()],te.prototype,"introHtml",2);qe([$()],te.prototype,"profileHtml",2);te=qe([D("about-section")],te);const ii=`# Work Experience

## Senior Software Engineer / Team Lead
**Telstra** | *Mar 2019 - present*

Experienced in leading large-scale digital transformation initiatives and delivering resilient, secure, and scalable platforms aligned with Telstra’s strategic direction.

* **Skills used:** Java, AEM 6.1, AEM 6.3, AEM 6.5, microservices, Nodejs, AWS (CloudFront, CodeBuild, Lambda, WAF, API Gateway, Route53)

### Accomplishments:
* **Cloud Migration Leadership:** Successfully migrated Telstra’s on-premise Adobe Experience Manager (AEM) platform to AWS, aligning with the company’s strategic shift to cloud-first infrastructure.
* **Global Expansion Enablement:** Launched the Telstra International website, significantly expanding Telstra’s global reach and digital presence.
* **Infrastructure Modernisation:** Executed the migration of root domain DNS entries from legacy F5 infrastructure, reducing exposure to DNS-related vulnerabilities and improving security posture.
* **Forms Platform Overhaul:** Modernised Telstra’s eForms solution, enhancing user experience and operational efficiency.
* **Security & Compliance:** Ensured all deliverables adhered to rigorous security assessments and compliance standards.
* **High-Load System Resilience:** Engineered resilient systems capable of sustaining high-pressure loads during major events such as iPhone launches and Ed Sheeran concert presales.
* **Complex Migration & Upgrade Management:** Led multiple concurrent migrations and upgrades, including WAF, authentication systems, AEM, third-party managed sites, and internal tools.
* **Mentorship & Team Development:** Actively mentored junior developers, contributing to their professional growth and helping them achieve a chapter area award.

---

## Senior Developer
**Valtech** | *Dec 2016 - Mar 2019*

As an AEM developer / consultant, I've been working in various projects with some of Australia's most iconic companies, such as Lion, Fairfax, and Foxtel.

* **Skills used:** Java 8, AEM 6.1, AEM 6.4, Node.js, BitBucket, Docker, Amazon Web Services (AWS), EC2, S3

### Responsibilities:
* Provide clean-and-reusable solution to requirements.
* Manage offshore resources.
* Assist development team with technical guidance.
* Setup and maintain applications server environment with CI/CD, caching strategy, and security.

### Accomplishments:
* Led the development of **Valtech Rapid**, an AEM foundation project that can be rolled out for multiple clients / projects.
* Used Valtech Rapid to build a multi-national site, including but not limited to: Australia, Hong Kong, China, Singapore, Saudi Arabia, Taiwan, United Arab Emirates, Great Britain, and Malaysia.

### Projects:
* **[Ego Pharmaceuticals (2019)](https://www.egopharm.com/au/en.html)** - AEM 6.4
* **[Foxtel (2018)](https://www.foxtel.com.au/index.html)** - AEM 5.6.1
* **[Sydney Morning Herald - Fairfax (2017)](http://www.smh.com.au/)** - AEM 5.6.1
* **[Modern Curations Gallery - Lion (2016)](https://www.mocu.com.au/)** - AEM 6.1

---

## Senior Developer
**ASX** | *Apr 2016 - Dec 2016*

In charge of the AEM front-end code as well as helping out the project team on AEM back-end development stories / defects.

* **Skills used:** Java 8, AEM 6.1, Sightly, OSGi, HTML, JavaScript, CSS, Grunt.js, Handlebars.js, Salesforce

### Accomplishments:
* Delivered a completely revamped **[ASX Customer Portal](https://www.asxonline.com/)** on AEM 6.1.
* Hit the ground running and resolved ~75 outstanding tickets in my first 7 weeks in order for the project to go-live as planned.

---

## Technical Team Lead
**Telstra Operations | IT** | *Apr 2015 - Apr 2016*

Lead a team of 6 consisting of developers and testers. Provided oversight in requirement analysis, solution design, development, implementation, testing, and support of AEM6/CQ5 web applications.

### Accomplishments:
* **[Mobile Gifted Services](https://giftedservices.telstra.com.au):** Development completed 2 weeks in advance and handled 24,000 vouchers in 1st day of launch.
* **[Telstra TV portal](https://tv.telstra.com.au):** Delivered 3 weeks ahead of schedule and processed 30,000 device activations in 2 months since launch.

---

## Web Applications Developer
**Telstra Operations | IT** | *July 2011 - Apr 2016*

As an all-rounded developer, working in both front-end and back-end developments on multiple projects as well as providing system administration support for the project team.

* **Skills used:** Java, OSGi, HTML, JavaScript, CSS, UNIX shell scripting, Ansible, Apache Velocity

### Projects:
* **[Telstra TV portal (2015)](https://tv.telstra.com.au)** - AEM6
* **[Responsive Telstra Media Homepage (2015)](https://www.media.telstra.com.au)** - AEM6
* **[Sky News Australia (2014)](http://www.skynews.com.au)** - CQ5
* **16 NRL Clubs + 2 State Leagues sites (2014):** Raiders, Sea Eagles, Bulldogs, Titans, Parramatta Eels, Dragons, Rabbitohs, Roosters, Panthers, Cowboys, Knights, Warriors, Broncos, Sharks, Tigers, Storm, NSWRL, QRL - CQ5
* **[Telstra Media Homepage + Corporate Header/Footer (2013)](http://www.media.telstra.com.au)** - CQ5
* **[Telstra Help & Support (2011 / 2012)](http://support.telstra.com.au)** - Liferay and Oracle WebCenter 11g
* **[BigPond (2011 / 2012)](http://www.bigpond.com.au)** - MassiveCMS

---

## IT Graduate
**Telstra Operations | IT** | *July 2009 - June 2011*

Rotated through various technical roles in the 2-year graduate program within the IT business group in Telstra to gain exposure and experience in teams involved in the software development cycle.

* **Roles performed:** Platform Engineering, System Quality Testing, CMS Development, Web Services Development, Wideband IT Developer

### Accomplishments:
* Wrote a web application in Perl that gathered test-server environments information for testers, reducing queries to system administrators and improving tester efficiency.
* Implemented a dynamic XSD/XSLT template in Massive CMS to create flexible HTML tables, influencing the vendor (Massive Interactive) to overhaul their CMS for creating dynamic content.
* Successfully boosted efficiency for Wideband Planners and streamlined the turnaround time from 5-10 days to less than 10 minutes.

# Education

## Bachelor of e-Business
**Macquarie University** | *2005 - 2007*

An interdisciplinary degree that involves the analysis, design, and implementation of computer systems for commercial application, and the management of business computing.

* **GPA:** 3.12 out of 4
* Distinctions or higher in Database, Web / E-commerce Technology, IT management, and Programming.
* Golden Key International Honour Society (Recognition of academic achievement for students in the Top 15% of their respective fields).

# Professional Development & Training

## HackerRank Coding Challenges
* Algorithms

## Adobe Experience Manager
* Adobe Experience Manager 6 Lead Developer Certified
* System Administration (AEM 6.x)
* Advanced Developer (AEM 6.x)
* Developer

## Oracle Universal Content Management 11g
* Web Content and Administrator
`;var ri=Object.defineProperty,si=Object.getOwnPropertyDescriptor,We=(o,e,t,n)=>{for(var i=n>1?void 0:n?si(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(e,t,i):r(i))||i);return n&&i&&ri(e,t,i),i};let ne=class extends A{constructor(){super(...arguments),this.sections=[],this.activeTab=0}connectedCallback(){super.connectedCallback(),this.parseResumeData()}parseResumeData(){const o=ii.split(/^# /gm),e=[];for(const t of o){if(!t.trim())continue;const n=t.split(`
`),i=n[0].trim(),r=n.slice(1).join(`
`).split(/^## /gm),a=f.parse(r[0].trim()),l=[];for(let h=1;h<r.length;h++){const c=r[h].split(`
`),p=c[0].trim();let d=1;for(;d<c.length&&!c[d].trim();)d++;let u="",x=d+1;d<c.length&&(u=f.parse(c[d].trim()));const y=c.slice(x).join(`
`).trim(),C=f.parse(y);l.push({title:p,subtitleHtml:u,contentHtml:C})}e.push({title:i,preambleHtml:a,items:l})}this.sections=e}getSectionIcon(o){const e=o.toLowerCase();return e.includes("work")||e.includes("experience")?"fa-briefcase":e.includes("education")?"fa-graduation-cap":"fa-certificate"}render(){return this.sections.length===0?b``:b`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <section id="resume" class="section">
        <div class="container resume-container">
          <div class="section-intro">
            <span class="section-subtitle">Résumé</span>
            <h2 class="section-title">Experience & Education</h2>
          </div>

          <!-- Tabs Navigation -->
          <div class="tabs-nav">
            ${this.sections.map((o,e)=>b`
                <button
                  class="tab-btn ${this.activeTab===e?"active":""}"
                  @click=${()=>this.activeTab=e}
                >
                  ${o.title}
                </button>
              `)}
          </div>

          <!-- Timeline Sections -->
          ${this.sections.map((o,e)=>b`
              <div class="timeline-section ${this.activeTab===e?"active":""}">
                ${o.preambleHtml?b`<div class="section-preamble">${q(o.preambleHtml)}</div>`:""}

                <div class="timeline-track-container">
                  ${o.items.map(t=>b`
                      <div class="timeline-block">
                        <div class="timeline-ico">
                          <i class="fa-solid ${this.getSectionIcon(o.title)}"></i>
                        </div>
                        <div class="glass-card timeline-card">
                          <div class="card-header">
                            <h3>${t.title}</h3>
                            <div class="subtitle">${q(t.subtitleHtml)}</div>
                          </div>
                          <div class="card-content">
                            ${q(t.contentHtml)}
                          </div>
                        </div>
                      </div>
                    `)}
                </div>
              </div>
            `)}
        </div>
      </section>
    `}};ne.styles=[k`${z(N)}`,k`
      .resume-container {
        position: relative;
      }

      /* Tabs Navigation */
      .tabs-nav {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 3.5rem;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1px;
        flex-wrap: wrap;
      }

      .tab-btn {
        background: transparent;
        border: none;
        outline: none;
        font-family: var(--font-heading);
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-secondary);
        padding: 1rem 1.5rem;
        cursor: pointer;
        transition: var(--transition-fast);
        position: relative;
        border-radius: 8px 8px 0 0;
      }

      @media (min-width: 768px) {
        .tab-btn {
          font-size: 1.1rem;
          padding: 1rem 2rem;
        }
      }

      .tab-btn:hover {
        color: var(--text-primary);
        background: rgba(129, 140, 248, 0.04);
      }

      .tab-btn.active {
        color: var(--accent);
      }

      .tab-btn.active::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--accent-gradient);
      }

      /* Timeline Layout */
      .timeline-section {
        display: none;
        animation: fadeIn 0.5s ease forwards;
      }

      .timeline-section.active {
        display: block;
      }

      .section-preamble {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 3rem auto;
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-secondary);
      }

      .timeline-track-container {
        position: relative;
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem 0;
      }

      /* The vertical line */
      .timeline-track-container::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 20px;
        width: 2px;
        background: var(--border-color);
      }

      @media (min-width: 768px) {
        .timeline-track-container::before {
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .timeline-block {
        position: relative;
        margin-bottom: 3rem;
      }

      .timeline-block:last-child {
        margin-bottom: 0;
      }

      /* Timeline Icons */
      .timeline-ico {
        position: absolute;
        top: 0;
        left: 20px;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: var(--bg-secondary);
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transform: translateX(-50%);
        color: var(--accent);
        box-shadow: var(--shadow-sm);
        transition: var(--transition-normal);
      }

      .timeline-block:hover .timeline-ico {
        border-color: var(--accent);
        background: var(--accent);
        color: #ffffff;
        box-shadow: 0 0 15px rgba(129, 140, 248, 0.4);
      }

      @media (min-width: 768px) {
        .timeline-ico {
          left: 50%;
          width: 48px;
          height: 48px;
        }
      }

      /* Timeline Card */
      .timeline-card {
        margin-left: 50px;
        padding: 2rem;
      }

      @media (min-width: 768px) {
        .timeline-card {
          margin-left: 0;
          width: 45%;
        }

        .timeline-block:nth-child(even) .timeline-card {
          margin-left: 55%;
        }

        .timeline-block:nth-child(odd) .timeline-card {
          text-align: right;
        }
      }

      .card-header h3 {
        font-family: var(--font-heading);
        font-size: 1.35rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .card-header .subtitle {
        font-size: 0.95rem;
        color: var(--accent-teal);
        margin-bottom: 1.25rem;
        font-weight: 500;
      }

      .card-header .subtitle strong {
        color: var(--text-primary);
      }

      .card-header .subtitle em {
        background: rgba(20, 184, 166, 0.1);
        color: var(--accent-teal);
        padding: 0.2rem 0.6rem;
        border-radius: 6px;
        font-style: normal;
        font-size: 0.85rem;
        display: inline-block;
        margin-top: 0.25rem;
      }

      /* Card Content markdown styles */
      .card-content {
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--text-secondary);
        text-align: left;
      }

      .card-content p {
        margin-bottom: 1rem;
      }

      .card-content ul {
        padding-left: 1.25rem;
        margin-bottom: 1rem;
      }

      .card-content li {
        margin-bottom: 0.5rem;
      }

      .card-content li strong {
        color: var(--text-primary);
      }

      .card-content h3, .card-content h4, .card-content h5 {
        font-family: var(--font-heading);
        font-weight: 600;
        color: var(--text-primary);
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        font-size: 1.05rem;
      }

      .card-content a {
        color: var(--accent);
        text-decoration: none;
      }

      .card-content a:hover {
        text-decoration: underline;
      }

      .card-content iframe {
        border-radius: 12px;
        margin-top: 1rem;
        border: 1px solid var(--border-color);
        max-width: 100%;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(15px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `];We([$()],ne.prototype,"sections",2);We([$()],ne.prototype,"activeTab",2);ne=We([D("resume-timeline")],ne);const ft=[{id:"projects",icon:"pencil-ruler",count:64,suffix:"",title:"Projects Completed"},{id:"contacts",icon:"users",count:280,suffix:"+",title:"Professional Contacts"},{id:"awards",icon:"badge",count:8,suffix:"",title:"Awards Received"},{id:"ideas",icon:"light-bulb",count:42,suffix:"",title:"Crazy Ideas"},{id:"coffee",icon:"cup",count:1850,suffix:"",title:"Coffee Cups"},{id:"hours",icon:"clock",count:9200,suffix:"+",title:"Hours Worked"}];var oi=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,Fe=(o,e,t,n)=>{for(var i=n>1?void 0:n?ai(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(e,t,i):r(i))||i);return n&&i&&oi(e,t,i),i};let ie=class extends A{constructor(){super(...arguments),this.stats=ft,this.displayCounts=ft.map(()=>0),this.animated=!1}firstUpdated(){this.setupIntersectionObserver()}disconnectedCallback(){super.disconnectedCallback(),this.observer&&this.observer.disconnect()}setupIntersectionObserver(){this.observer=new IntersectionObserver(o=>{const[e]=o;e.isIntersecting&&(this.startCounterAnimation(),this.observer.disconnect())},{threshold:.2}),this.observer.observe(this.renderRoot.querySelector(".stats-grid"))}startCounterAnimation(){if(this.animated)return;this.animated=!0;const o=2e3,e=1e3/60,t=Math.round(o/e);let n=0;const i=setInterval(()=>{n++;const s=n/t,r=s===1?1:1-Math.pow(2,-10*s);this.displayCounts=this.stats.map(a=>Math.floor(a.count*r)),n>=t&&(clearInterval(i),this.displayCounts=this.stats.map(a=>a.count))},e)}getIconClass(o){switch(o){case"pencil-ruler":return"fa-solid fa-pen-ruler";case"users":return"fa-solid fa-users";case"badge":return"fa-solid fa-award";case"light-bulb":return"fa-regular fa-lightbulb";case"cup":return"fa-solid fa-mug-hot";case"clock":return"fa-regular fa-clock";default:return"fa-solid fa-chart-simple"}}render(){return b`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div class="stats-section">
        <div class="container">
          <div class="stats-grid">
            ${this.stats.map((o,e)=>b`
                <div class="stat-card">
                  <div class="stat-icon">
                    <i class="${this.getIconClass(o.icon)}"></i>
                  </div>
                  <div class="stat-number">
                    ${this.displayCounts[e]}${o.suffix}
                  </div>
                  <div class="stat-title">
                    ${o.title}
                  </div>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}};ie.styles=[k`${z(N)}`,k`
      :host {
        display: block;
        background: var(--bg-secondary);
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        transition: background-color var(--transition-normal), border-color var(--transition-normal);
      }

      .stats-section {
        padding: 5rem 0;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      @media (min-width: 576px) {
        .stats-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 992px) {
        .stats-grid {
          grid-template-columns: repeat(6, 1fr);
        }
      }

      .stat-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1.5rem 1rem;
        background: transparent;
        border: none;
      }

      .stat-icon {
        font-size: 2.25rem;
        color: var(--accent);
        margin-bottom: 1rem;
        background: rgba(129, 140, 248, 0.05);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-color);
        transition: var(--transition-normal);
      }

      .stat-card:hover .stat-icon {
        background: var(--accent-gradient);
        color: #ffffff;
        transform: scale(1.1) rotate(5deg);
        border-color: transparent;
        box-shadow: 0 8px 20px rgba(129, 140, 248, 0.3);
      }

      .stat-number {
        font-family: var(--font-heading);
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--text-primary);
        line-height: 1.2;
        margin-bottom: 0.5rem;
        letter-spacing: -0.02em;
      }

      .stat-title {
        font-family: var(--font-sans);
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
    `];Fe([$()],ie.prototype,"stats",2);Fe([$()],ie.prototype,"displayCounts",2);ie=Fe([D("stats-counter")],ie);var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,It=(o,e,t,n)=>{for(var i=n>1?void 0:n?ci(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(e,t,i):r(i))||i);return n&&i&&li(e,t,i),i};let xe=class extends A{constructor(){super(...arguments),this.emailCopied=!1}async copyEmail(){try{await navigator.clipboard.writeText(_.email),this.emailCopied=!0,setTimeout(()=>{this.emailCopied=!1},2e3)}catch(o){console.error("Failed to copy email: ",o)}}render(){return b`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <section id="contact" class="section">
        <div class="container">
          <div class="section-intro">
            <span class="section-subtitle">Contact</span>
            <h2 class="section-title">Let's Connect</h2>
            <div class="section-desc">
              Like what you see or just want to get in touch? Reach out directly via the channels below. I'd love to hear from you.
            </div>
          </div>

          <div class="contact-grid">
            <!-- Email Card -->
            <div class="glass-card contact-card">
              <div class="contact-icon">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <h4 class="contact-title">Email</h4>
              <p class="contact-value">${_.email}</p>
              <button class="btn btn-primary contact-btn" @click=${this.copyEmail}>
                ${this.emailCopied?b`<i class="fa-solid fa-check"></i> Copied!`:b`<i class="fa-regular fa-copy"></i> Copy Email`}
              </button>
            </div>

            <!-- LinkedIn Card -->
            <div class="glass-card contact-card">
              <div class="contact-icon">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <h4 class="contact-title">LinkedIn</h4>
              <p class="contact-value">linkedin.com/in/jimzau</p>
              <a href="${_.linkedin}" target="_blank" rel="noopener" class="btn btn-stroke contact-btn">
                Visit Profile <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>

            <!-- GitHub Card -->
            <div class="glass-card contact-card">
              <div class="contact-icon">
                <i class="fa-brands fa-github"></i>
              </div>
              <h4 class="contact-title">GitHub</h4>
              <p class="contact-value">github.com/jmzcray</p>
              <a href="${_.github}" target="_blank" rel="noopener" class="btn btn-stroke contact-btn">
                View Work <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    `}};xe.styles=[k`${z(N)}`,k`
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        max-width: 900px;
        margin: 3rem auto 0 auto;
      }

      @media (min-width: 768px) {
        .contact-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .contact-card {
        padding: 2.5rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 100%;
        position: relative;
        overflow: hidden;
      }

      .contact-icon {
        font-size: 2rem;
        color: var(--accent);
        background: rgba(129, 140, 248, 0.05);
        width: 64px;
        height: 64px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-color);
        margin-bottom: 1.5rem;
        transition: var(--transition-normal);
      }

      .contact-card:hover .contact-icon {
        background: var(--accent-gradient);
        color: #ffffff;
        transform: translateY(-4px) scale(1.05);
        border-color: transparent;
        box-shadow: 0 8px 20px rgba(129, 140, 248, 0.3);
      }

      .contact-title {
        font-family: var(--font-heading);
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .contact-value {
        font-size: 0.95rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
        word-break: break-all;
      }

      .contact-btn {
        margin-top: auto;
        width: 100%;
        font-size: 0.85rem;
        padding: 0.6rem 1.2rem;
      }

      /* Glowing background border effect */
      .contact-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: var(--accent-gradient);
        opacity: 0;
        transition: var(--transition-normal);
      }

      .contact-card:hover::before {
        opacity: 1;
      }
    `];It([$()],xe.prototype,"emailCopied",2);xe=It([D("contact-section")],xe);var hi=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,Ge=(o,e,t,n)=>{for(var i=n>1?void 0:n?pi(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(e,t,i):r(i))||i);return n&&i&&hi(e,t,i),i};let re=class extends A{constructor(){super(...arguments),this.activeSection="intro",this.showGoTop=!1,this.handleScroll=()=>{this.showGoTop=window.scrollY>300}}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this.handleScroll)}firstUpdated(){this.setupScrollSpy()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.handleScroll)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}handleNavigation(o){var n;const e=o.detail.targetId,t=(n=this.shadowRoot)==null?void 0:n.getElementById(e);if(t){const r=t.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:r,behavior:"smooth"})}}setupScrollSpy(){var n;const o={root:null,rootMargin:"-30% 0px -40% 0px",threshold:0},e=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(this.activeSection=s.target.id)})},o),t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll(".spy-target");t==null||t.forEach(i=>e.observe(i))}render(){return b`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div id="top"></div>
      
      <!-- Sticky Navigation Header -->
      <app-header .activeSection=${this.activeSection} @nav-navigate=${this.handleNavigation}></app-header>

      <!-- Main Body sections -->
      <main>
        <div id="intro" class="spy-target">
          <intro-section></intro-section>
        </div>
        
        <div id="about" class="spy-target">
          <about-section></about-section>
        </div>
        
        <div id="resume" class="spy-target">
          <resume-timeline></resume-timeline>
        </div>
        
        <stats-counter></stats-counter>
        
        <div id="contact" class="spy-target">
          <contact-section></contact-section>
        </div>
      </main>

      <!-- Footer layout -->
      <footer>
        <div class="container footer-content">
          <p>Rewritten with Lit Stack & Vite &copy; 2026.</p>
          <p>Handcrafted by <a href="mailto:hello@jimz.au">Jimz Au</a>. Original design inspiration by <a href="http://www.styleshout.com/" target="_blank" rel="noopener">styleshout</a>.</p>
        </div>
        <button class="go-top ${this.showGoTop?"visible":""}" @click=${this.scrollToTop} title="Back to Top">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </footer>
    `}};re.styles=[k`${z(N)}`,k`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--bg-primary);
        color: var(--text-primary);
        transition: background-color var(--transition-normal), color var(--transition-normal);
      }

      main {
        position: relative;
      }

      /* Footer styling */
      footer {
        padding: 4rem 0;
        background: var(--bg-secondary);
        border-top: 1px solid var(--border-color);
        transition: background-color var(--transition-normal), border-color var(--transition-normal);
        text-align: center;
        position: relative;
      }

      .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
      }

      .footer-content p {
        font-size: 0.9rem;
        color: var(--text-muted);
      }

      .footer-content a {
        color: var(--accent);
        text-decoration: none;
        transition: color var(--transition-fast);
      }

      .footer-content a:hover {
        color: var(--text-primary);
      }

      /* Go to top button */
      .go-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--accent-gradient);
        color: #ffffff;
        border: none;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all var(--transition-normal);
        box-shadow: 0 4px 15px rgba(129, 140, 248, 0.4);
        z-index: 99;
      }

      .go-top.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .go-top:hover {
        transform: translateY(-4px);
        background: var(--accent-gradient-hover);
        box-shadow: 0 6px 20px rgba(129, 140, 248, 0.6);
      }
    `];Ge([$()],re.prototype,"activeSection",2);Ge([$()],re.prototype,"showGoTop",2);re=Ge([D("resume-app")],re);
//# sourceMappingURL=index-FB1Tl6R2.js.map
