(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:ee,getPrototypeOf:te}=Object,p=globalThis,ne=p.trustedTypes,re=ne?ne.emptyScript:``,ie=p.reactiveElementPolyfillSupport,m=(e,t)=>e,ae={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},oe=(e,t)=>!l(e,t),se={attribute:!0,type:String,converter:ae,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol(`metadata`),p.litPropertyMetadata??=new WeakMap;var h=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...f(e),...ee(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ae:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ae:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??oe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};h.elementStyles=[],h.shadowRootOptions={mode:`open`},h[m(`elementProperties`)]=new Map,h[m(`finalized`)]=new Map,ie?.({ReactiveElement:h}),(p.reactiveElementVersions??=[]).push(`2.1.2`);var ce=globalThis,le=e=>e,g=ce.trustedTypes,ue=g?g.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,_=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+_,pe=`<${fe}>`,v=document,y=()=>v.createComment(``),b=e=>e===null||typeof e!=`object`&&typeof e!=`function`,me=Array.isArray,he=e=>me(e)||typeof e?.[Symbol.iterator]==`function`,ge=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,ve=/>/g,S=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ye=/'/g,be=/"/g,xe=/^(?:script|style|textarea|title)$/i,C=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),w=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),Se=new WeakMap,E=v.createTreeWalker(v,129);function Ce(e,t){if(!me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}var we=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=x;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===x?c[1]===`!--`?o=_e:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=S):(xe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=S):o=ve:o===S?c[0]===`>`?(o=i??x,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?S:c[3]===`"`?be:ye):o===be||o===ye?o=S:o===_e||o===ve?o=x:(o=S,i=void 0);let d=o===S&&e[t+1].startsWith(`/>`)?` `:``;a+=o===x?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+_+d):n+_+(l===-2?t:d)}return[Ce(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Te=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=we(t,n);if(this.el=e.createElement(l,r),E.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=E.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(_),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Oe:r[1]===`?`?ke:r[1]===`@`?Ae:O}),i.removeAttribute(e)}else e.startsWith(_)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(xe.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=g?g.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],y()),E.nextNode(),c.push({type:2,index:++a});i.append(e[t],y())}}}else if(i.nodeType===8)if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}a++}}static createElement(e,t){let n=v.createElement(`template`);return n.innerHTML=e,n}};function D(e,t,n=e,r){if(t===w)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=b(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=D(e,i._$AS(e,t.values),i,r)),t}var Ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??v).importNode(t,!0);E.currentNode=r;let i=E.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new De(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=E.nextNode(),a++)}return E.currentNode=v,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},De=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),b(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==w&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&b(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Te.createElement(Ce(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ee(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new Te(e)),t}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(y()),this.O(y()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=le(e).nextSibling;le(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=D(this,e,t,0),a=!b(e)||e!==this._$AH&&e!==w,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=D(this,r[n+o],t,o),s===w&&(s=this._$AH[o]),a||=!b(s)||s!==this._$AH[o],s===T?e=T:e!==T&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Oe=class extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},ke=class extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Ae=class extends O{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??T)===w)return;let n=this._$AH,r=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}},Me=ce.litHtmlPolyfillSupport;Me?.(Te,De),(ce.litHtmlVersions??=[]).push(`3.3.3`);var Ne=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new De(t.insertBefore(y(),e),e,void 0,n??{})}return i._$AI(e),i},Pe=globalThis,k=class extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ne(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};k._$litElement$=!0,k.finalized=!0,Pe.litElementHydrateSupport?.({LitElement:k});var Fe=Pe.litElementPolyfillSupport;Fe?.({LitElement:k}),(Pe.litElementVersions??=[]).push(`4.2.2`);var A=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Ie={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:oe},Le=(e=Ie,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function Re(e){return(t,n)=>typeof n==`object`?Le(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function j(e){return Re({...e,state:!0,attribute:!1})}var M=`@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

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
`;function N(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var P=class extends k{constructor(...e){super(...e),this.activeSection=`intro`,this.menuOpen=!1,this.theme=localStorage.getItem(`theme`)||`dark`}static{this.styles=[o`${a(M)}`,o`
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
    `]}firstUpdated(){this.applyTheme(this.theme)}toggleTheme(){this.theme=this.theme===`dark`?`light`:`dark`,this.applyTheme(this.theme)}applyTheme(e){localStorage.setItem(`theme`,e),document.documentElement.setAttribute(`data-theme`,e),this.dispatchEvent(new CustomEvent(`theme-changed`,{detail:{theme:e}}))}toggleMenu(){this.menuOpen=!this.menuOpen}closeMenu(){this.menuOpen=!1}handleNav(e,t){e.preventDefault(),this.closeMenu(),this.dispatchEvent(new CustomEvent(`nav-navigate`,{detail:{targetId:t},bubbles:!0,composed:!0}))}render(){return C`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <header class="header">
        <div class="container nav-container">
          <div class="logo">
            <a href="#top" @click=${e=>this.handleNav(e,`intro`)}>Jimz<span>.</span></a>
          </div>

          <nav class="nav-menu">
            <a href="#intro" class="nav-link ${this.activeSection===`intro`?`active`:``}" @click=${e=>this.handleNav(e,`intro`)}>Intro</a>
            <a href="#about" class="nav-link ${this.activeSection===`about`?`active`:``}" @click=${e=>this.handleNav(e,`about`)}>About</a>
            <a href="#resume" class="nav-link ${this.activeSection===`resume`?`active`:``}" @click=${e=>this.handleNav(e,`resume`)}>Résumé</a>
            <a href="#contact" class="nav-link ${this.activeSection===`contact`?`active`:``}" @click=${e=>this.handleNav(e,`contact`)}>Contact</a>
          </nav>

          <div class="actions">
            <button class="theme-toggle" @click=${this.toggleTheme} title="Toggle Dark/Light Mode">
              ${this.theme===`dark`?C`<i class="fa-solid fa-sun"></i>`:C`<i class="fa-solid fa-moon"></i>`}
            </button>
            <button class="mobile-menu-btn" @click=${this.toggleMenu} title="Toggle Menu">
              ${this.menuOpen?C`<i class="fa-solid fa-xmark"></i>`:C`<i class="fa-solid fa-bars"></i>`}
            </button>
          </div>
        </div>

        <div class="mobile-nav ${this.menuOpen?`open`:``}">
          <a href="#intro" class="mobile-nav-link ${this.activeSection===`intro`?`active`:``}" @click=${e=>this.handleNav(e,`intro`)}>Intro</a>
          <a href="#about" class="mobile-nav-link ${this.activeSection===`about`?`active`:``}" @click=${e=>this.handleNav(e,`about`)}>About</a>
          <a href="#resume" class="mobile-nav-link ${this.activeSection===`resume`?`active`:``}" @click=${e=>this.handleNav(e,`resume`)}>Résumé</a>
          <a href="#contact" class="mobile-nav-link ${this.activeSection===`contact`?`active`:``}" @click=${e=>this.handleNav(e,`contact`)}>Contact</a>
        </div>
      </header>
    `}};N([Re({type:String})],P.prototype,`activeSection`,void 0),N([j()],P.prototype,`menuOpen`,void 0),N([j()],P.prototype,`theme`,void 0),P=N([A(`app-header`)],P);var ze={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Be=e=>(...t)=>({_$litDirective$:e,values:t}),Ve=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},He=class extends Ve{constructor(e){if(super(e),this.it=T,e.type!==ze.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===T||e==null)return this._t=void 0,this.it=e;if(e===w)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};He.directiveName=`unsafeHTML`,He.resultType=1;var F=Be(He);function Ue(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var I=Ue();function We(e){I=e}var Ge=/[&<>"']/,Ke=new RegExp(Ge.source,`g`),qe=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Je=new RegExp(qe.source,`g`),Ye={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Xe=e=>Ye[e];function L(e,t){if(t){if(Ge.test(e))return e.replace(Ke,Xe)}else if(qe.test(e))return e.replace(Je,Xe);return e}var Ze=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Qe(e){return e.replace(Ze,(e,t)=>(t=t.toLowerCase(),t===`colon`?`:`:t.charAt(0)===`#`?t.charAt(1)===`x`?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):``))}var $e=/(^|[^\[])\^/g;function R(e,t){let n=typeof e==`string`?e:e.source;t||=``;let r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace($e,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}function et(e){try{e=encodeURI(e).replace(/%25/g,`%`)}catch{return null}return e}var z={exec:()=>null};function tt(e,t){let n=e.replace(/\|/g,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(/ \|/),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,`|`);return n}function B(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function nt(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return-1}function rt(e,t,n,r){let i=t.href,a=t.title?L(t.title):null,o=e[1].replace(/\\([\[\]])/g,`$1`);if(e[0].charAt(0)!==`!`){r.state.inLink=!0;let e={type:`link`,raw:n,href:i,title:a,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,e}return{type:`image`,raw:n,href:i,title:a,text:L(o)}}function it(e,t){let n=e.match(/^(\s+)(?:```)/);if(n===null)return t;let r=n[1];return t.split(`
`).map(e=>{let t=e.match(/^\s+/);if(t===null)return e;let[n]=t;return n.length>=r.length?e.slice(r.length):e}).join(`
`)}var V=class{options;rules;lexer;constructor(e){this.options=e||I}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(/^ {1,4}/gm,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:B(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=it(e,t[3]||``);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){let t=B(e,`#`);(this.options.pedantic||!t||/ $/.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);e=B(e.replace(/^ *>[ \t]?/gm,``),`
`);let n=this.lexer.state.top;this.lexer.state.top=!0;let r=this.lexer.blockTokens(e);return this.lexer.state.top=n,{type:`blockquote`,raw:t[0],tokens:r,text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=RegExp(`^( {0,3}${n})((?:[\t ][^\\n]*)?(?:\\n|$))`),o=``,s=``,c=!1;for(;e;){let n=!1;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let r=t[2].split(`
`,1)[0].replace(/^\t+/,e=>` `.repeat(3*e.length)),l=e.split(`
`,1)[0],u=0;this.options.pedantic?(u=2,s=r.trimStart()):(u=t[2].search(/[^ ]/),u=u>4?1:u,s=r.slice(u),u+=t[1].length);let d=!1;if(!r&&/^ *$/.test(l)&&(o+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),n=RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),i=RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),a=RegExp(`^ {0,${Math.min(3,u-1)}}#`);for(;e;){let c=e.split(`
`,1)[0];if(l=c,this.options.pedantic&&(l=l.replace(/^ {1,4}(?=( {4})*[^ ])/g,`  `)),i.test(l)||a.test(l)||t.test(l)||n.test(e))break;if(l.search(/[^ ]/)>=u||!l.trim())s+=`
`+l.slice(u);else{if(d||r.search(/[^ ]/)>=4||i.test(r)||a.test(r)||n.test(r))break;s+=`
`+l}!d&&!l.trim()&&(d=!0),o+=c+`
`,e=e.substring(c.length+1),r=l.slice(u)}}i.loose||(c?i.loose=!0:/\n *\n *$/.test(o)&&(c=!0));let f=null,ee;this.options.gfm&&(f=/^\[[ xX]\] /.exec(s),f&&(ee=f[0]!==`[ ] `,s=s.replace(/^\[[ xX]\] +/,``))),i.items.push({type:`list_item`,raw:o,task:!!f,checked:ee,loose:!1,text:s,tokens:[]}),i.raw+=o}i.items[i.items.length-1].raw=o.trimEnd(),i.items[i.items.length-1].text=s.trimEnd(),i.raw=i.raw.trimEnd();for(let e=0;e<i.items.length;e++)if(this.lexer.state.top=!1,i.items[e].tokens=this.lexer.blockTokens(i.items[e].text,[]),!i.loose){let t=i.items[e].tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>/\n.*\n/.test(e.raw))}if(i.loose)for(let e=0;e<i.items.length;e++)i.items[e].loose=!0;return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(/\s+/g,` `),n=t[2]?t[2].replace(/^<(.*)>$/,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;let n=tt(t[1]),r=t[2].replace(/^\||\| *$/g,``).split(`|`),i=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)/^ *-+: *$/.test(e)?a.align.push(`right`):/^ *:-+: *$/.test(e)?a.align.push(`center`):/^ *:-+ *$/.test(e)?a.align.push(`left`):a.align.push(null);for(let e of n)a.header.push({text:e,tokens:this.lexer.inline(e)});for(let e of i)a.rows.push(tt(e,a.header.length).map(e=>({text:e,tokens:this.lexer.inline(e)})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:L(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let t=B(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=nt(t[2],`()`);if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),rt(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(/\s+/g,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return rt(n,e,n[0],this.lexer)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(r&&!(r[3]&&n.match(/[\p{L}\p{N}]/u))&&(!(r[1]||r[2])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g,` `),n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=L(e,!0),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:`del`,raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=L(t[1]),n=`mailto:`+e):(e=L(t[1]),n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=L(t[0]),n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=L(t[0]),n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e;return e=this.lexer.state.inRawBlock?t[0]:L(t[0]),{type:`text`,raw:t[0],text:e}}}},at=/^(?: *(?:\n|$))+/,ot=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,st=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,H=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ct=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,lt=/(?:[*+-]|\d{1,9}[.)])/,ut=R(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,lt).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),dt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ft=/^[^\n]+/,pt=/(?!\s*\])(?:\\.|[^\[\]\\])+/,mt=R(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace(`label`,pt).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ht=R(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,lt).getRegex(),U=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,gt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,_t=R(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))`,`i`).replace(`comment`,gt).replace(`tag`,U).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),vt=R(dt).replace(`hr`,H).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,U).getRegex(),yt={blockquote:R(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,vt).getRegex(),code:ot,def:mt,fences:st,heading:ct,hr:H,html:_t,lheading:ut,list:ht,newline:at,paragraph:vt,table:z,text:ft},bt=R(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,H).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,` {4}[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,U).getRegex(),xt={...yt,table:bt,paragraph:R(dt).replace(`hr`,H).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,bt).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,U).getRegex()},St={...yt,html:R(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,gt).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:z,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:R(dt).replace(`hr`,H).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,ut).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Ct=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,wt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Tt=/^( {2,}|\\)\n(?!\s*$)/,Et=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,W=`\\p{P}\\p{S}`,Dt=R(/^((?![*_])[\spunctuation])/,`u`).replace(/punctuation/g,W).getRegex(),Ot=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,kt=R(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,`u`).replace(/punct/g,W).getRegex(),At=R(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])`,`gu`).replace(/punct/g,W).getRegex(),jt=R(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])`,`gu`).replace(/punct/g,W).getRegex(),Mt=R(/\\([punct])/,`gu`).replace(/punct/g,W).getRegex(),Nt=R(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Pt=R(gt).replace(`(?:-->|$)`,`-->`).getRegex(),Ft=R(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Pt).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),G=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,It=R(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace(`label`,G).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Lt=R(/^!?\[(label)\]\[(ref)\]/).replace(`label`,G).replace(`ref`,pt).getRegex(),Rt=R(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,pt).getRegex(),zt={_backpedal:z,anyPunctuation:Mt,autolink:Nt,blockSkip:Ot,br:Tt,code:wt,del:z,emStrongLDelim:kt,emStrongRDelimAst:At,emStrongRDelimUnd:jt,escape:Ct,link:It,nolink:Rt,punctuation:Dt,reflink:Lt,reflinkSearch:R(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Lt).replace(`nolink`,Rt).getRegex(),tag:Ft,text:Et,url:z},Bt={...zt,link:R(/^!?\[(label)\]\((.*?)\)/).replace(`label`,G).getRegex(),reflink:R(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,G).getRegex()},Vt={...zt,escape:R(Ct).replace(`])`,`~|])`).getRegex(),url:R(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,`i`).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ht={...Vt,br:R(Tt).replace(`{2,}`,`*`).getRegex(),text:R(Vt.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},K={normal:yt,gfm:xt,pedantic:St},q={normal:zt,gfm:Vt,breaks:Ht,pedantic:Bt},J=class e{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||I,this.options.tokenizer=this.options.tokenizer||new V,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:K.normal,inline:q.normal};this.options.pedantic?(t.block=K.pedantic,t.inline=q.pedantic):this.options.gfm&&(t.block=K.gfm,this.options.breaks?t.inline=q.breaks:t.inline=q.gfm),this.tokenizer.rules=t}static get rules(){return{block:K,inline:q}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){e=this.options.pedantic?e.replace(/\t/g,`    `).replace(/^ +$/gm,``):e.replace(/^( *)(\t+)/gm,(e,t,n)=>t+`    `.repeat(n.length));let n,r,i,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>(n=r.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&(r.type===`paragraph`||r.type===`text`)?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&(r.type===`paragraph`||r.type===`text`)?(r.raw+=`
`+n.raw,r.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){r=t[t.length-1],a&&r.type===`paragraph`?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),a=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&r.type===`text`?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,i,a=e,o,s,c;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)e.includes(o[0].slice(o[0].lastIndexOf(`[`)+1,-1))&&(a=a.slice(0,o.index)+`[`+`a`.repeat(o[0].length-2)+`]`+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,o.index)+`[`+`a`.repeat(o[0].length-2)+`]`+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,o.index)+`++`+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(s||(c=``),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(r=>(n=r.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&n.type===`text`&&r.type===`text`?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),r=t[t.length-1],r&&n.type===`text`&&r.type===`text`?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,a,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(i)){e=e.substring(n.raw.length),n.raw.slice(-1)!==`_`&&(c=n.raw.slice(-1)),s=!0,r=t[t.length-1],r&&r.type===`text`?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},Y=class{options;constructor(e){this.options=e||I}code(e,t,n){let r=(t||``).match(/^\S*/)?.[0];return e=e.replace(/\n$/,``)+`
`,r?`<pre><code class="language-`+L(r)+`">`+(n?e:L(e,!0))+`</code></pre>
`:`<pre><code>`+(n?e:L(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>\n`}hr(){return`<hr>
`}list(e,t,n){let r=t?`ol`:`ul`,i=t&&n!==1?` start="`+n+`"`:``;return`<`+r+i+`>
`+e+`</`+r+`>
`}listitem(e,t,n){return`<li>${e}</li>\n`}checkbox(e){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox">`}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&=`<tbody>${t}</tbody>`,`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){let n=t.header?`th`:`td`;return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return`<br>`}del(e){return`<del>${e}</del>`}link(e,t,n){let r=et(e);if(r===null)return n;e=r;let i=`<a href="`+e+`"`;return t&&(i+=` title="`+t+`"`),i+=`>`+n+`</a>`,i}image(e,t,n){let r=et(e);if(r===null)return n;e=r;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=`>`,i}text(e){return e}},Ut=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return``+n}image(e,t,n){return``+n}br(){return``}},X=class e{options;renderer;textRenderer;constructor(e){this.options=e||I,this.options.renderer=this.options.renderer||new Y,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ut}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e,t=!0){let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){let e=i,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(t!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`paragraph`,`text`].includes(e.type)){n+=t||``;continue}}switch(i.type){case`space`:continue;case`hr`:n+=this.renderer.hr();continue;case`heading`:{let e=i;n+=this.renderer.heading(this.parseInline(e.tokens),e.depth,Qe(this.parseInline(e.tokens,this.textRenderer)));continue}case`code`:{let e=i;n+=this.renderer.code(e.text,e.lang,!!e.escaped);continue}case`table`:{let e=i,t=``,r=``;for(let t=0;t<e.header.length;t++)r+=this.renderer.tablecell(this.parseInline(e.header[t].tokens),{header:!0,align:e.align[t]});t+=this.renderer.tablerow(r);let a=``;for(let t=0;t<e.rows.length;t++){let n=e.rows[t];r=``;for(let t=0;t<n.length;t++)r+=this.renderer.tablecell(this.parseInline(n[t].tokens),{header:!1,align:e.align[t]});a+=this.renderer.tablerow(r)}n+=this.renderer.table(t,a);continue}case`blockquote`:{let e=i,t=this.parse(e.tokens);n+=this.renderer.blockquote(t);continue}case`list`:{let e=i,t=e.ordered,r=e.start,a=e.loose,o=``;for(let t=0;t<e.items.length;t++){let n=e.items[t],r=n.checked,i=n.task,s=``;if(n.task){let e=this.renderer.checkbox(!!r);a?n.tokens.length>0&&n.tokens[0].type===`paragraph`?(n.tokens[0].text=e+` `+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type===`text`&&(n.tokens[0].tokens[0].text=e+` `+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:`text`,text:e+` `}):s+=e+` `}s+=this.parse(n.tokens,a),o+=this.renderer.listitem(s,i,!!r)}n+=this.renderer.list(o,t,r);continue}case`html`:{let e=i;n+=this.renderer.html(e.text,e.block);continue}case`paragraph`:{let e=i;n+=this.renderer.paragraph(this.parseInline(e.tokens));continue}case`text`:{let a=i,o=a.tokens?this.parseInline(a.tokens):a.text;for(;r+1<e.length&&e[r+1].type===`text`;)a=e[++r],o+=`
`+(a.tokens?this.parseInline(a.tokens):a.text);n+=t?this.renderer.paragraph(o):o;continue}default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}parseInline(e,t){t||=this.renderer;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}switch(i.type){case`escape`:{let e=i;n+=t.text(e.text);break}case`html`:{let e=i;n+=t.html(e.text);break}case`link`:{let e=i;n+=t.link(e.href,e.title,this.parseInline(e.tokens,t));break}case`image`:{let e=i;n+=t.image(e.href,e.title,e.text);break}case`strong`:{let e=i;n+=t.strong(this.parseInline(e.tokens,t));break}case`em`:{let e=i;n+=t.em(this.parseInline(e.tokens,t));break}case`codespan`:{let e=i;n+=t.codespan(e.text);break}case`br`:n+=t.br();break;case`del`:{let e=i;n+=t.del(this.parseInline(e.tokens,t));break}case`text`:{let e=i;n+=t.text(e.text);break}default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Wt=class{options;constructor(e){this.options=e||I}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}},Z=new class{defaults=Ue();options=this.setOptions;parse=this.#e(J.lex,X.parse);parseInline=this.#e(J.lexInline,X.parseInline);Parser=X;Renderer=Y;TextRenderer=Ut;Lexer=J;Tokenizer=V;Hooks=Wt;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Y(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if(n===`options`)continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new V(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Wt;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if(n===`options`)continue;let r=n,i=e.hooks[r],a=t[r];Wt.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async)return Promise.resolve(i.call(t,e)).then(e=>a.call(t,e));let n=i.call(t,e);return a.call(t,n)}:t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return J.lex(e,t??this.defaults)}parser(e,t){return X.parse(e,t??this.defaults)}#e(e,t){return(n,r)=>{let i={...r},a={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(a.silent||console.warn(`marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.`),a.async=!0);let o=this.#t(!!a.silent,!!a.async);if(n==null)return o(Error(`marked(): input parameter is undefined or null`));if(typeof n!=`string`)return o(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(n)+`, string expected`));if(a.hooks&&(a.hooks.options=a),a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(n):n).then(t=>e(t,a)).then(e=>a.hooks?a.hooks.processAllTokens(e):e).then(e=>a.walkTokens?Promise.all(this.walkTokens(e,a.walkTokens)).then(()=>e):e).then(e=>t(e,a)).then(e=>a.hooks?a.hooks.postprocess(e):e).catch(o);try{a.hooks&&(n=a.hooks.preprocess(n));let r=e(n,a);a.hooks&&(r=a.hooks.processAllTokens(r)),a.walkTokens&&this.walkTokens(r,a.walkTokens);let i=t(r,a);return a.hooks&&(i=a.hooks.postprocess(i)),i}catch(e){return o(e)}}}#t(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+L(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Q(e,t){return Z.parse(e,t)}Q.options=Q.setOptions=function(e){return Z.setOptions(e),Q.defaults=Z.defaults,We(Q.defaults),Q},Q.getDefaults=Ue,Q.defaults=I,Q.use=function(...e){return Z.use(...e),Q.defaults=Z.defaults,We(Q.defaults),Q},Q.walkTokens=function(e,t){return Z.walkTokens(e,t)},Q.parseInline=Z.parseInline,Q.Parser=X,Q.parser=X.parse,Q.Renderer=Y,Q.TextRenderer=Ut,Q.Lexer=J,Q.lexer=J.lex,Q.Tokenizer=V,Q.Hooks=Wt,Q.parse=Q,Q.options,Q.setOptions,Q.use,Q.walkTokens,Q.parseInline,X.parse,J.lex;var Gt=`# Hello,
I'm Jimz Au.

- Senior Software Engineer
- DevOps
- Team Lead
`,$={email:`hello@jimz.au`,linkedin:`https://www.linkedin.com/in/jimzau`,github:`https://github.com/jmzcray`,cvWord:`https://drive.google.com/open?id=0B-vmjnGH79fONEZYVFpHQVRRa00`,cvPdf:`https://drive.google.com/open?id=0B-vmjnGH79fOeUFKbEpnVmxpNWM`,profilePic:`images/profile-pic.jpg`},Kt=class extends k{constructor(...e){super(...e),this.parsedHtml=``}handleNavigate(e,t){e.preventDefault(),this.dispatchEvent(new CustomEvent(`nav-navigate`,{detail:{targetId:t},bubbles:!0,composed:!0}))}static{this.styles=[o`${a(M)}`,o`
      :host {
        display: block;
        min-height: 100vh;
        width: 100%;
        position: relative;
        overflow: hidden;
        background:
          linear-gradient(rgba(10, 15, 28, 0.68), rgba(10, 15, 28, 0.72)),
          url('images/intro-bg.jpg') no-repeat center center;
        background-size: cover;
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
    `]}connectedCallback(){super.connectedCallback(),this.parsedHtml=Q.parse(Gt)}render(){return C`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div class="glow-blob glow-blob-1"></div>
      <div class="glow-blob glow-blob-2"></div>

      <div class="container intro-container">
        <div class="intro-content">
          <div class="markdown-content">
            ${F(this.parsedHtml)}
          </div>

          <div class="social-links">
            <a href="${$.linkedin}" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="${$.github}" target="_blank" rel="noopener" class="social-link" title="GitHub">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>

          <div class="actions">
            <a href="#about" class="btn btn-primary" @click=${e=>this.handleNavigate(e,`about`)}>
              More About Me <i class="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    `}};N([j()],Kt.prototype,`parsedHtml`,void 0),Kt=N([A(`intro-section`)],Kt);var qt=`# Let me introduce myself.

I'm a Sydney based **Senior Software Engineer** with **DevOps** experience specialising in **Adobe Experience Manager (AEM)** and **Amazon Web Services (AWS)**.

### Profile
A results-driven, versatile Senior Software Engineer with multiple years of experience.
Motivated to learn and enjoy working with technologies.
Adapts to new technologies quickly with proven track record to apply newly gained skills to deliver technical tasks and solving complex application problems.

- **Fullname:** James Au
- **Role:** Senior Software Engineer
- **Email:** hello@jimz.au
`,Jt=[{category:`Cloud Platforms`,skills:[`Amazon Web Services (AWS)`,`Azure`]},{category:`Languages & Programming`,skills:[`Java`,`OSGi`,`HTML`,`JavaScript`,`TypeScript`,`NodeJS`,`CSS`,`XML / XSLT`,`Shell Script`,`Ansible`,`Terraform`]},{category:`CMS Platforms`,skills:[`Adobe Experience Manager (AEM)`]},{category:`Operating Systems`,skills:[`Microsoft Windows`,`macOS`,`Linux`,`Unix`]},{category:`Software Tools & Platforms`,skills:[`JIRA`,`Pivotal Cloud Foundry (PCF)`,`Apigee`,`Git`,`Bamboo`,`Apache`,`Postman`,`Insomnia`,`Bruno`,`Docker`,`New Relic`]},{category:`AI Tools`,skills:[`GitHub Copilot`,`ChatGPT`,`Claude`,`Perplexity`,`Ollama`,`Llama`]}],Yt=class extends k{constructor(...e){super(...e),this.introHtml=``,this.profileHtml=``}static{this.styles=[o`${a(M)}`,o`
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
    `]}connectedCallback(){super.connectedCallback();let e=qt.indexOf(`### Profile`);e===-1?(this.introHtml=Q.parse(qt),this.profileHtml=``):(this.introHtml=Q.parse(qt.substring(0,e)),this.profileHtml=Q.parse(qt.substring(e)))}getCategoryIcon(e){let t=e.toLowerCase();return t.includes(`cloud`)?`fa-cloud`:t.includes(`language`)||t.includes(`programming`)?`fa-code`:t.includes(`cms`)?`fa-laptop-code`:t.includes(`system`)?`fa-terminal`:t.includes(`tool`)||t.includes(`platform`)?`fa-screwdriver-wrench`:t.includes(`ai`)?`fa-brain`:`fa-gears`}render(){return C`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <section id="about" class="section">
        <div class="container">
          <div class="section-intro">
            <span class="section-subtitle">About</span>
            <h2 class="section-title">Let me introduce myself.</h2>
            <div class="section-desc">
              ${F(this.introHtml)}
            </div>
          </div>

          <div class="about-grid">
            <!-- Profile Column -->
            <div class="profile-info">
              <div class="profile-pic-wrapper">
                <img class="profile-pic" src="${$.profilePic}" alt="James Au - Profile Picture" />
              </div>
              
              <div class="profile-text">
                ${F(this.profileHtml)}
                
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
                    <span><a href="mailto:${$.email}">${$.email}</a></span>
                  </li>
                </ul>
              </div>

              <div class="buttons-section">
                <a href="#contact" class="btn btn-stroke">
                  <i class="fa-regular fa-envelope"></i> Contact Me
                </a>
                <a href="${$.cvWord}" class="btn btn-primary" target="_blank" rel="noopener">
                  <i class="fa-regular fa-file-word"></i> Download Word CV
                </a>
                <a href="${$.cvPdf}" class="btn btn-primary" target="_blank" rel="noopener">
                  <i class="fa-regular fa-file-pdf"></i> Download PDF CV
                </a>
              </div>
            </div>

            <!-- Skills Column -->
            <div class="skills-container">
              ${Jt.map(e=>C`
                  <div class="glass-card skill-card">
                    <h4 class="skill-category-title">
                      <i class="fa-solid ${this.getCategoryIcon(e.category)}"></i>
                      ${e.category}
                    </h4>
                    <div class="skill-badges">
                      ${e.skills.map(e=>C`<span class="skill-badge">${e}</span>`)}
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>
      </section>
    `}};N([j()],Yt.prototype,`introHtml`,void 0),N([j()],Yt.prototype,`profileHtml`,void 0),Yt=N([A(`about-section`)],Yt);var Xt=`# Work Experience

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
`,Zt=class extends k{constructor(...e){super(...e),this.sections=[],this.activeTab=0}static{this.styles=[o`${a(M)}`,o`
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
    `]}connectedCallback(){super.connectedCallback(),this.parseResumeData()}parseResumeData(){let e=Xt.split(/^# /gm),t=[];for(let n of e){if(!n.trim())continue;let e=n.split(`
`),r=e[0].trim(),i=e.slice(1).join(`
`).split(/^## /gm),a=Q.parse(i[0].trim()),o=[];for(let e=1;e<i.length;e++){let t=i[e].split(`
`),n=t[0].trim(),r=1;for(;r<t.length&&!t[r].trim();)r++;let a=``,s=r+1;r<t.length&&(a=Q.parse(t[r].trim()));let c=t.slice(s).join(`
`).trim(),l=Q.parse(c);o.push({title:n,subtitleHtml:a,contentHtml:l})}t.push({title:r,preambleHtml:a,items:o})}this.sections=t}getSectionIcon(e){let t=e.toLowerCase();return t.includes(`work`)||t.includes(`experience`)?`fa-briefcase`:t.includes(`education`)?`fa-graduation-cap`:`fa-certificate`}render(){return this.sections.length===0?C``:C`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <section id="resume" class="section">
        <div class="container resume-container">
          <div class="section-intro">
            <span class="section-subtitle">Résumé</span>
            <h2 class="section-title">Experience & Education</h2>
          </div>

          <!-- Tabs Navigation -->
          <div class="tabs-nav">
            ${this.sections.map((e,t)=>C`
                <button
                  class="tab-btn ${this.activeTab===t?`active`:``}"
                  @click=${()=>this.activeTab=t}
                >
                  ${e.title}
                </button>
              `)}
          </div>

          <!-- Timeline Sections -->
          ${this.sections.map((e,t)=>C`
              <div class="timeline-section ${this.activeTab===t?`active`:``}">
                ${e.preambleHtml?C`<div class="section-preamble">${F(e.preambleHtml)}</div>`:``}

                <div class="timeline-track-container">
                  ${e.items.map(t=>C`
                      <div class="timeline-block">
                        <div class="timeline-ico">
                          <i class="fa-solid ${this.getSectionIcon(e.title)}"></i>
                        </div>
                        <div class="glass-card timeline-card">
                          <div class="card-header">
                            <h3>${t.title}</h3>
                            <div class="subtitle">${F(t.subtitleHtml)}</div>
                          </div>
                          <div class="card-content">
                            ${F(t.contentHtml)}
                          </div>
                        </div>
                      </div>
                    `)}
                </div>
              </div>
            `)}
        </div>
      </section>
    `}};N([j()],Zt.prototype,`sections`,void 0),N([j()],Zt.prototype,`activeTab`,void 0),Zt=N([A(`resume-timeline`)],Zt);var Qt=[{id:`projects`,icon:`pencil-ruler`,count:64,suffix:``,title:`Projects Completed`},{id:`contacts`,icon:`users`,count:280,suffix:`+`,title:`Professional Contacts`},{id:`awards`,icon:`badge`,count:8,suffix:``,title:`Awards Received`},{id:`ideas`,icon:`light-bulb`,count:42,suffix:``,title:`Crazy Ideas`},{id:`coffee`,icon:`cup`,count:1850,suffix:``,title:`Coffee Cups`},{id:`hours`,icon:`clock`,count:9200,suffix:`+`,title:`Hours Worked`}],$t=class extends k{constructor(...e){super(...e),this.stats=Qt,this.displayCounts=Qt.map(()=>0),this.animated=!1}static{this.styles=[o`${a(M)}`,o`
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
    `]}firstUpdated(){this.setupIntersectionObserver()}disconnectedCallback(){super.disconnectedCallback(),this.observer&&this.observer.disconnect()}setupIntersectionObserver(){this.observer=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&(this.startCounterAnimation(),this.observer.disconnect())},{threshold:.2}),this.observer.observe(this.renderRoot.querySelector(`.stats-grid`))}startCounterAnimation(){if(this.animated)return;this.animated=!0;let e=0,t=setInterval(()=>{e++;let n=e/120,r=n===1?1:1-2**(-10*n);this.displayCounts=this.stats.map(e=>Math.floor(e.count*r)),e>=120&&(clearInterval(t),this.displayCounts=this.stats.map(e=>e.count))},16.666666666666668)}getIconClass(e){switch(e){case`pencil-ruler`:return`fa-solid fa-pen-ruler`;case`users`:return`fa-solid fa-users`;case`badge`:return`fa-solid fa-award`;case`light-bulb`:return`fa-regular fa-lightbulb`;case`cup`:return`fa-solid fa-mug-hot`;case`clock`:return`fa-regular fa-clock`;default:return`fa-solid fa-chart-simple`}}render(){return C`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div class="stats-section">
        <div class="container">
          <div class="stats-grid">
            ${this.stats.map((e,t)=>C`
                <div class="stat-card">
                  <div class="stat-icon">
                    <i class="${this.getIconClass(e.icon)}"></i>
                  </div>
                  <div class="stat-number">
                    ${this.displayCounts[t]}${e.suffix}
                  </div>
                  <div class="stat-title">
                    ${e.title}
                  </div>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}};N([j()],$t.prototype,`stats`,void 0),N([j()],$t.prototype,`displayCounts`,void 0),$t=N([A(`stats-counter`)],$t);var en=class extends k{constructor(...e){super(...e),this.emailCopied=!1}static{this.styles=[o`${a(M)}`,o`
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
    `]}async copyEmail(){try{await navigator.clipboard.writeText($.email),this.emailCopied=!0,setTimeout(()=>{this.emailCopied=!1},2e3)}catch(e){console.error(`Failed to copy email: `,e)}}render(){return C`
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
              <p class="contact-value">${$.email}</p>
              <button class="btn btn-primary contact-btn" @click=${this.copyEmail}>
                ${this.emailCopied?C`<i class="fa-solid fa-check"></i> Copied!`:C`<i class="fa-regular fa-copy"></i> Copy Email`}
              </button>
            </div>

            <!-- LinkedIn Card -->
            <div class="glass-card contact-card">
              <div class="contact-icon">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <h4 class="contact-title">LinkedIn</h4>
              <p class="contact-value">linkedin.com/in/jimzau</p>
              <a href="${$.linkedin}" target="_blank" rel="noopener" class="btn btn-stroke contact-btn">
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
              <a href="${$.github}" target="_blank" rel="noopener" class="btn btn-stroke contact-btn">
                View Work <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    `}};N([j()],en.prototype,`emailCopied`,void 0),en=N([A(`contact-section`)],en);var tn=class extends k{constructor(...e){super(...e),this.activeSection=`intro`,this.showGoTop=!1,this.handleScroll=()=>{this.showGoTop=window.scrollY>300}}static{this.styles=[o`${a(M)}`,o`
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
    `]}connectedCallback(){super.connectedCallback(),window.addEventListener(`scroll`,this.handleScroll)}firstUpdated(){this.setupScrollSpy()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`scroll`,this.handleScroll)}scrollToTop(){window.scrollTo({top:0,behavior:`smooth`})}handleNavigation(e){let t=e.detail.targetId,n=this.shadowRoot?.getElementById(t);if(n){let e=n.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:e,behavior:`smooth`})}}setupScrollSpy(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(this.activeSection=e.target.id)})},{root:null,rootMargin:`-30% 0px -40% 0px`,threshold:0});(this.shadowRoot?.querySelectorAll(`.spy-target`))?.forEach(t=>e.observe(t))}render(){return C`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div id="top"></div>
      
      <!-- Sticky Navigation Header -->
      <app-header .activeSection=${this.activeSection} @nav-navigate=${this.handleNavigation}></app-header>

      <!-- Main Body sections -->
      <main>
        <div id="intro" class="spy-target">
          <intro-section @nav-navigate=${this.handleNavigation}></intro-section>
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
          <p>Rewritten with Lit Stack & Vite &copy;</p>
          <p>Handcrafted by <a href="mailto:hello@jimz.au">Jimz Au</a>. Original design inspiration by <a href="http://www.styleshout.com/" target="_blank" rel="noopener">styleshout</a>.</p>
        </div>
        <button class="go-top ${this.showGoTop?`visible`:``}" @click=${this.scrollToTop} title="Back to Top">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </footer>
    `}};N([j()],tn.prototype,`activeSection`,void 0),N([j()],tn.prototype,`showGoTop`,void 0),tn=N([A(`resume-app`)],tn);
//# sourceMappingURL=index-CW1D4AwZ.js.map