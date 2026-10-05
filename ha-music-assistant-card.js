/*! ha-music-assistant-card | MIT
# Third-party notices

Service-call, entity-registry lookup, extension instance mapping, grouping, and
queue-item action behavior was adapted and rewritten from:
https://github.com/droans/mass-player-card

Upstream license (retained verbatim):

MIT License

Copyright (c) 2024 Gábor Tolnai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

The bundle also includes Lit under BSD-3-Clause. Its license comments are
retained in the generated module; installed package licenses are available in
node_modules/lit, node_modules/lit-element, and node_modules/lit-html.

## Lit and related runtime packages

BSD 3-Clause License

Copyright (c) 2017 Google LLC. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
## Material Design Icons

The SVG paths used for controls come from `@mdi/js` 7.4.47 by Pictogrammers.
The icons are licensed under Apache License 2.0. The upstream notice is included below:

Pictogrammers Free License
--------------------------

This icon collection is released as free, open source, and GPL friendly by
the [Pictogrammers](http://pictogrammers.com/) icon group. You may use it
for commercial projects, open source projects, or anything really.

# Icons: Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
Some of the icons are redistributed under the Apache 2.0 license. All other
icons are either redistributed under their respective licenses or are
distributed under the Apache 2.0 license.

# Fonts: Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
All web and desktop fonts are distributed under the Apache 2.0 license. Web
and desktop fonts contain some icons that are redistributed under the Apache
2.0 license. All other icons are either redistributed under their respective
licenses or are distributed under the Apache 2.0 license.

# Code: MIT (https://opensource.org/licenses/MIT)
The MIT license applies to all non-font and non-icon files.

*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V1=globalThis,L1=V1.ShadowRoot&&(V1.ShadyCSS===void 0||V1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a1=Symbol(),h1=new WeakMap,W=class{constructor(H,C,V){if(this._$cssResult$=!0,V!==a1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=H,this.t=C}get styleSheet(){let H=this.o,C=this.t;if(L1&&H===void 0){let V=C!==void 0&&C.length===1;V&&(H=h1.get(C)),H===void 0&&((this.o=H=new CSSStyleSheet).replaceSync(this.cssText),V&&h1.set(C,H))}return H}toString(){return this.cssText}},O1=e=>new W(typeof e=="string"?e:e+"",void 0,a1),w=(e,...H)=>{let C=e.length===1?e[0]:H.reduce((V,L,M)=>V+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(L)+e[M+1],e[0]);return new W(C,e,a1)},g1=(e,H)=>{if(L1)e.adoptedStyleSheets=H.map(C=>C instanceof CSSStyleSheet?C:C.styleSheet);else for(let C of H){let V=document.createElement("style"),L=V1.litNonce;L!==void 0&&V.setAttribute("nonce",L),V.textContent=C.cssText,e.appendChild(V)}},o1=L1?e=>e:e=>e instanceof CSSStyleSheet?(H=>{let C="";for(let V of H.cssRules)C+=V.cssText;return O1(C)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{is:n2,defineProperty:l2,getOwnPropertyDescriptor:v2,getOwnPropertyNames:x2,getOwnPropertySymbols:Z2,getPrototypeOf:s2}=Object,k=globalThis,f1=k.trustedTypes,u2=f1?f1.emptyScript:"",S2=k.reactiveElementPolyfillSupport,N=(e,H)=>e,A1={toAttribute(e,H){switch(H){case Boolean:e=e?u2:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,H){let C=e;switch(H){case Boolean:C=e!==null;break;case Number:C=e===null?null:Number(e);break;case Object:case Array:try{C=JSON.parse(e)}catch{C=null}}return C}},y1=(e,H)=>!n2(e,H),k1={attribute:!0,type:String,converter:A1,reflect:!1,useDefault:!1,hasChanged:y1};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k.litPropertyMetadata??(k.litPropertyMetadata=new WeakMap);var O=class extends HTMLElement{static addInitializer(H){this._$Ei(),(this.l??(this.l=[])).push(H)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(H,C=k1){if(C.state&&(C.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(H)&&((C=Object.create(C)).wrapped=!0),this.elementProperties.set(H,C),!C.noAccessor){let V=Symbol(),L=this.getPropertyDescriptor(H,V,C);L!==void 0&&l2(this.prototype,H,L)}}static getPropertyDescriptor(H,C,V){let{get:L,set:M}=v2(this.prototype,H)??{get(){return this[C]},set(r){this[C]=r}};return{get:L,set(r){let t=L?.call(this);M?.call(this,r),this.requestUpdate(H,t,V)},configurable:!0,enumerable:!0}}static getPropertyOptions(H){return this.elementProperties.get(H)??k1}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;let H=s2(this);H.finalize(),H.l!==void 0&&(this.l=[...H.l]),this.elementProperties=new Map(H.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){let C=this.properties,V=[...x2(C),...Z2(C)];for(let L of V)this.createProperty(L,C[L])}let H=this[Symbol.metadata];if(H!==null){let C=litPropertyMetadata.get(H);if(C!==void 0)for(let[V,L]of C)this.elementProperties.set(V,L)}this._$Eh=new Map;for(let[C,V]of this.elementProperties){let L=this._$Eu(C,V);L!==void 0&&this._$Eh.set(L,C)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(H){let C=[];if(Array.isArray(H)){let V=new Set(H.flat(1/0).reverse());for(let L of V)C.unshift(o1(L))}else H!==void 0&&C.push(o1(H));return C}static _$Eu(H,C){let V=C.attribute;return V===!1?void 0:typeof V=="string"?V:typeof H=="string"?H.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(H=>this.enableUpdating=H),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(H=>H(this))}addController(H){(this._$EO??(this._$EO=new Set)).add(H),this.renderRoot!==void 0&&this.isConnected&&H.hostConnected?.()}removeController(H){this._$EO?.delete(H)}_$E_(){let H=new Map,C=this.constructor.elementProperties;for(let V of C.keys())this.hasOwnProperty(V)&&(H.set(V,this[V]),delete this[V]);H.size>0&&(this._$Ep=H)}createRenderRoot(){let H=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return g1(H,this.constructor.elementStyles),H}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(H=>H.hostConnected?.())}enableUpdating(H){}disconnectedCallback(){this._$EO?.forEach(H=>H.hostDisconnected?.())}attributeChangedCallback(H,C,V){this._$AK(H,V)}_$ET(H,C){let V=this.constructor.elementProperties.get(H),L=this.constructor._$Eu(H,V);if(L!==void 0&&V.reflect===!0){let M=(V.converter?.toAttribute!==void 0?V.converter:A1).toAttribute(C,V.type);this._$Em=H,M==null?this.removeAttribute(L):this.setAttribute(L,M),this._$Em=null}}_$AK(H,C){let V=this.constructor,L=V._$Eh.get(H);if(L!==void 0&&this._$Em!==L){let M=V.getPropertyOptions(L),r=typeof M.converter=="function"?{fromAttribute:M.converter}:M.converter?.fromAttribute!==void 0?M.converter:A1;this._$Em=L;let t=r.fromAttribute(C,M.type);this[L]=t??this._$Ej?.get(L)??t,this._$Em=null}}requestUpdate(H,C,V,L=!1,M){if(H!==void 0){let r=this.constructor;if(L===!1&&(M=this[H]),V??(V=r.getPropertyOptions(H)),!((V.hasChanged??y1)(M,C)||V.useDefault&&V.reflect&&M===this._$Ej?.get(H)&&!this.hasAttribute(r._$Eu(H,V))))return;this.C(H,C,V)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(H,C,{useDefault:V,reflect:L,wrapped:M},r){V&&!(this._$Ej??(this._$Ej=new Map)).has(H)&&(this._$Ej.set(H,r??C??this[H]),M!==!0||r!==void 0)||(this._$AL.has(H)||(this.hasUpdated||V||(C=void 0),this._$AL.set(H,C)),L===!0&&this._$Em!==H&&(this._$Eq??(this._$Eq=new Set)).add(H))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(C){Promise.reject(C)}let H=this.scheduleUpdate();return H!=null&&await H,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[L,M]of this._$Ep)this[L]=M;this._$Ep=void 0}let V=this.constructor.elementProperties;if(V.size>0)for(let[L,M]of V){let{wrapped:r}=M,t=this[L];r!==!0||this._$AL.has(L)||t===void 0||this.C(L,void 0,M,t)}}let H=!1,C=this._$AL;try{H=this.shouldUpdate(C),H?(this.willUpdate(C),this._$EO?.forEach(V=>V.hostUpdate?.()),this.update(C)):this._$EM()}catch(V){throw H=!1,this._$EM(),V}H&&this._$AE(C)}willUpdate(H){}_$AE(H){this._$EO?.forEach(C=>C.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(H)),this.updated(H)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(H){return!0}update(H){this._$Eq&&(this._$Eq=this._$Eq.forEach(C=>this._$ET(C,this[C]))),this._$EM()}updated(H){}firstUpdated(H){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[N("elementProperties")]=new Map,O[N("finalized")]=new Map,S2?.({ReactiveElement:O}),(k.reactiveElementVersions??(k.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Q=globalThis,b1=e=>e,M1=Q.trustedTypes,w1=M1?M1.createPolicy("lit-html",{createHTML:e=>e}):void 0,E1="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,D1="?"+y,c2=`<${D1}>`,T=document,U=()=>T.createComment(""),G=e=>e===null||typeof e!="object"&&typeof e!="function",x1=Array.isArray,h2=e=>x1(e)||typeof e?.[Symbol.iterator]=="function",d1=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B1=/-->/g,P1=/>/g,B=RegExp(`>|${d1}(?:([^\\s"'>=/]+)(${d1}*=${d1}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),T1=/'/g,F1=/"/g,_1=/^(?:script|style|textarea|title)$/i,Z1=e=>(H,...C)=>({_$litType$:e,strings:H,values:C}),a=Z1(1),T2=Z1(2),F2=Z1(3),F=Symbol.for("lit-noChange"),o=Symbol.for("lit-nothing"),R1=new WeakMap,P=T.createTreeWalker(T,129);function $1(e,H){if(!x1(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return w1!==void 0?w1.createHTML(H):H}var O2=(e,H)=>{let C=e.length-1,V=[],L,M=H===2?"<svg>":H===3?"<math>":"",r=I;for(let t=0;t<C;t++){let i=e[t],d,m,p=-1,s=0;for(;s<i.length&&(r.lastIndex=s,m=r.exec(i),m!==null);)s=r.lastIndex,r===I?m[1]==="!--"?r=B1:m[1]!==void 0?r=P1:m[2]!==void 0?(_1.test(m[2])&&(L=RegExp("</"+m[2],"g")),r=B):m[3]!==void 0&&(r=B):r===B?m[0]===">"?(r=L??I,p=-1):m[1]===void 0?p=-2:(p=r.lastIndex-m[2].length,d=m[1],r=m[3]===void 0?B:m[3]==='"'?F1:T1):r===F1||r===T1?r=B:r===B1||r===P1?r=I:(r=B,L=void 0);let Z=r===B&&e[t+1].startsWith("/>")?" ":"";M+=r===I?i+c2:p>=0?(V.push(d),i.slice(0,p)+E1+i.slice(p)+y+Z):i+y+(p===-2?t:Z)}return[$1(e,M+(e[C]||"<?>")+(H===2?"</svg>":H===3?"</math>":"")),V]},q=class e{constructor({strings:H,_$litType$:C},V){let L;this.parts=[];let M=0,r=0,t=H.length-1,i=this.parts,[d,m]=O2(H,C);if(this.el=e.createElement(d,V),P.currentNode=this.el.content,C===2||C===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(L=P.nextNode())!==null&&i.length<t;){if(L.nodeType===1){if(L.hasAttributes())for(let p of L.getAttributeNames())if(p.endsWith(E1)){let s=m[r++],Z=L.getAttribute(p).split(y),u=/([.?@])?(.*)/.exec(s);i.push({type:1,index:M,name:u[2],strings:Z,ctor:u[1]==="."?m1:u[1]==="?"?n1:u[1]==="@"?l1:D}),L.removeAttribute(p)}else p.startsWith(y)&&(i.push({type:6,index:M}),L.removeAttribute(p));if(_1.test(L.tagName)){let p=L.textContent.split(y),s=p.length-1;if(s>0){L.textContent=M1?M1.emptyScript:"";for(let Z=0;Z<s;Z++)L.append(p[Z],U()),P.nextNode(),i.push({type:2,index:++M});L.append(p[s],U())}}}else if(L.nodeType===8)if(L.data===D1)i.push({type:2,index:M});else{let p=-1;for(;(p=L.data.indexOf(y,p+1))!==-1;)i.push({type:7,index:M}),p+=y.length-1}M++}}static createElement(H,C){let V=T.createElement("template");return V.innerHTML=H,V}};function E(e,H,C=e,V){if(H===F)return H;let L=V!==void 0?C._$Co?.[V]:C._$Cl,M=G(H)?void 0:H._$litDirective$;return L?.constructor!==M&&(L?._$AO?.(!1),M===void 0?L=void 0:(L=new M(e),L._$AT(e,C,V)),V!==void 0?(C._$Co??(C._$Co=[]))[V]=L:C._$Cl=L),L!==void 0&&(H=E(e,L._$AS(e,H.values),L,V)),H}var p1=class{constructor(H,C){this._$AV=[],this._$AN=void 0,this._$AD=H,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(H){let{el:{content:C},parts:V}=this._$AD,L=(H?.creationScope??T).importNode(C,!0);P.currentNode=L;let M=P.nextNode(),r=0,t=0,i=V[0];for(;i!==void 0;){if(r===i.index){let d;i.type===2?d=new z(M,M.nextSibling,this,H):i.type===1?d=new i.ctor(M,i.name,i.strings,this,H):i.type===6&&(d=new v1(M,this,H)),this._$AV.push(d),i=V[++t]}r!==i?.index&&(M=P.nextNode(),r++)}return P.currentNode=T,L}p(H){let C=0;for(let V of this._$AV)V!==void 0&&(V.strings!==void 0?(V._$AI(H,V,C),C+=V.strings.length-2):V._$AI(H[C])),C++}},z=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(H,C,V,L){this.type=2,this._$AH=o,this._$AN=void 0,this._$AA=H,this._$AB=C,this._$AM=V,this.options=L,this._$Cv=L?.isConnected??!0}get parentNode(){let H=this._$AA.parentNode,C=this._$AM;return C!==void 0&&H?.nodeType===11&&(H=C.parentNode),H}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(H,C=this){H=E(this,H,C),G(H)?H===o||H==null||H===""?(this._$AH!==o&&this._$AR(),this._$AH=o):H!==this._$AH&&H!==F&&this._(H):H._$litType$!==void 0?this.$(H):H.nodeType!==void 0?this.T(H):h2(H)?this.k(H):this._(H)}O(H){return this._$AA.parentNode.insertBefore(H,this._$AB)}T(H){this._$AH!==H&&(this._$AR(),this._$AH=this.O(H))}_(H){this._$AH!==o&&G(this._$AH)?this._$AA.nextSibling.data=H:this.T(T.createTextNode(H)),this._$AH=H}$(H){let{values:C,_$litType$:V}=H,L=typeof V=="number"?this._$AC(H):(V.el===void 0&&(V.el=q.createElement($1(V.h,V.h[0]),this.options)),V);if(this._$AH?._$AD===L)this._$AH.p(C);else{let M=new p1(L,this),r=M.u(this.options);M.p(C),this.T(r),this._$AH=M}}_$AC(H){let C=R1.get(H.strings);return C===void 0&&R1.set(H.strings,C=new q(H)),C}k(H){x1(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,V,L=0;for(let M of H)L===C.length?C.push(V=new e(this.O(U()),this.O(U()),this,this.options)):V=C[L],V._$AI(M),L++;L<C.length&&(this._$AR(V&&V._$AB.nextSibling,L),C.length=L)}_$AR(H=this._$AA.nextSibling,C){for(this._$AP?.(!1,!0,C);H!==this._$AB;){let V=b1(H).nextSibling;b1(H).remove(),H=V}}setConnected(H){this._$AM===void 0&&(this._$Cv=H,this._$AP?.(H))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(H,C,V,L,M){this.type=1,this._$AH=o,this._$AN=void 0,this.element=H,this.name=C,this._$AM=L,this.options=M,V.length>2||V[0]!==""||V[1]!==""?(this._$AH=Array(V.length-1).fill(new String),this.strings=V):this._$AH=o}_$AI(H,C=this,V,L){let M=this.strings,r=!1;if(M===void 0)H=E(this,H,C,0),r=!G(H)||H!==this._$AH&&H!==F,r&&(this._$AH=H);else{let t=H,i,d;for(H=M[0],i=0;i<M.length-1;i++)d=E(this,t[V+i],C,i),d===F&&(d=this._$AH[i]),r||(r=!G(d)||d!==this._$AH[i]),d===o?H=o:H!==o&&(H+=(d??"")+M[i+1]),this._$AH[i]=d}r&&!L&&this.j(H)}j(H){H===o?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,H??"")}},m1=class extends D{constructor(){super(...arguments),this.type=3}j(H){this.element[this.name]=H===o?void 0:H}},n1=class extends D{constructor(){super(...arguments),this.type=4}j(H){this.element.toggleAttribute(this.name,!!H&&H!==o)}},l1=class extends D{constructor(H,C,V,L,M){super(H,C,V,L,M),this.type=5}_$AI(H,C=this){if((H=E(this,H,C,0)??o)===F)return;let V=this._$AH,L=H===o&&V!==o||H.capture!==V.capture||H.once!==V.once||H.passive!==V.passive,M=H!==o&&(V===o||L);L&&this.element.removeEventListener(this.name,this,V),M&&this.element.addEventListener(this.name,this,H),this._$AH=H}handleEvent(H){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,H):this._$AH.handleEvent(H)}},v1=class{constructor(H,C,V){this.element=H,this.type=6,this._$AN=void 0,this._$AM=C,this.options=V}get _$AU(){return this._$AM._$AU}_$AI(H){E(this,H)}};var g2=Q.litHtmlPolyfillSupport;g2?.(q,z),(Q.litHtmlVersions??(Q.litHtmlVersions=[])).push("3.3.3");var W1=(e,H,C)=>{let V=C?.renderBefore??H,L=V._$litPart$;if(L===void 0){let M=C?.renderBefore??null;V._$litPart$=L=new z(H.insertBefore(U(),M),M,void 0,C??{})}return L._$AI(e),L};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K=globalThis,h=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var C;let H=super.createRenderRoot();return(C=this.renderOptions).renderBefore??(C.renderBefore=H.firstChild),H}update(H){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(H),this._$Do=W1(C,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};h._$litElement$=!0,h.finalized=!0,K.litElementHydrateSupport?.({LitElement:h});var f2=K.litElementPolyfillSupport;f2?.({LitElement:h});(K.litElementVersions??(K.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var N1="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z";var I1="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z";var Q1="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var U1="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";var G1="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z";var q1="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z";var z1="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z";var K1="M2.4038 7.01172C2.47451 4.39542 4.45441 2.41552 7 2.41552V1.00131C3.53517 0.9306 0.848167 3.61761 0.989589 7.01172L2.4038 7.01172Z M7 5.38537V3.97116C5.23223 4.04187 3.95944 5.31466 3.95944 7.01172H5.37365C5.51507 6.16319 6.15147 5.52679 7 5.38537Z M17 2.41552C19.5456 2.41552 21.5255 4.39542 21.5962 7.01172L23.0104 7.01172C23.1518 3.61761 20.4648 0.9306 17 1.00131V2.41552Z M17 3.97116V5.38537C17.8485 5.52679 18.4849 6.16319 18.6263 7.01172H20.0406C20.0406 5.31466 18.7678 4.04187 17 3.97116Z M19 20V12H22L12 3L2 12H5V20H19ZM12 5.7L17 10.2V18H7V10.2L12 5.7Z";var j1="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";var X1="M14,19H18V5H14M6,19H10V5H6V19Z";var s1="M8,5.14V19.14L19,12.14L8,5.14Z";var Y1="M15,6V8H3V6H15M15,10V12H3V10H15M3,16V14H11V16H3M17,6H22V8H19V17A3,3 0 0,1 16,20A3,3 0 0,1 13,17A3,3 0 0,1 16,14C16.35,14 16.69,14.07 17,14.18V6M16,16A1,1 0 0,0 15,17A1,1 0 0,0 16,18A1,1 0 0,0 17,17A1,1 0 0,0 16,16Z";var J1="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z";var C2="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z";var H2="M13,15V9H12L10,10V11H11.5V15M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z";var V2="M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z";var L2="M16,18H18V6H16M6,18L14.5,12L6,6V18Z";var M2="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z";var r2="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var e2="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var j="custom:ha-music-assistant-card",t2=/^media_player\.[a-z0-9_]+$/;function r1(e){if(!e||!Array.isArray(e.entities)||!e.entities.length)throw new Error("Configure at least one Music Assistant player.");let H=e.entities.map(r=>typeof r=="string"?{entity_id:r}:{...r}),C=new Set;for(let r of H){if(!t2.test(r.entity_id))throw new Error("Players must use media_player entity IDs.");if(C.has(r.entity_id))throw new Error("Each player must appear only once.");if(C.add(r.entity_id),r.volume_entity&&!t2.test(r.volume_entity))throw new Error("Volume entity must be a media_player.");if(r.favorite_entity&&!/^button\.[a-z0-9_]+$/.test(r.favorite_entity))throw new Error("Favorite entity must be a button.");if(r.max_volume!==void 0&&(!Number.isFinite(r.max_volume)||r.max_volume<0||r.max_volume>100))throw new Error("Volume ceilings must be between 0 and 100.")}if(e.default_player&&!C.has(e.default_player))throw new Error("Default player must be in the player list.");let V=e.layout??"auto";if(!["auto","compact","standard","expanded"].includes(V))throw new Error("Unknown layout.");let L=e.sections??["browse","queue","rooms"];if(!Array.isArray(L)||L.some(r=>!["browse","queue","rooms"].includes(r))||new Set(L).size!==L.length)throw new Error("Sections must contain unique browse, queue, or rooms values.");if(e.extension&&!["auto","off"].includes(e.extension))throw new Error("Extension must be auto or off.");if(e.artwork_size&&!["small","medium","large"].includes(e.artwork_size))throw new Error("Unknown artwork size.");for(let r of["metadata","advanced_search","artwork_accent"])if(e[r]!==void 0&&typeof e[r]!="boolean")throw new Error(`${r} must be a boolean.`);let M=e.room_presets??[];if(!Array.isArray(M))throw new Error("Room presets must be a list.");for(let r of M)if(!r||typeof r.name!="string"||!r.name.trim()||!C.has(r.leader)||!Array.isArray(r.members)||!r.members.length||r.members.some(t=>!C.has(t)))throw new Error("Room presets require a name, configured leader, and configured members.");return{...e,type:j,entities:H,layout:V,sections:L,artwork_size:e.artwork_size??"medium",metadata:e.metadata??!0,advanced_search:e.advanced_search??!1,artwork_accent:e.artwork_accent??!1,extension:e.extension??"auto",room_presets:M.map(r=>({...r,members:[...new Set(r.members)]}))}}function i2(e){return e?.layout==="compact"?{columns:6,rows:2,min_columns:6,min_rows:2}:{columns:12,rows:e?.layout==="expanded"?8:6,min_columns:6,min_rows:4}}function n(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)?e:{}}function A(e){return typeof e=="string"?e:""}function x(e,H=0){return typeof e=="number"&&Number.isFinite(e)?e:H}function X(e){return Array.isArray(e)?e.filter(H=>typeof H=="string"):[]}function g(e){let H=A(e).trim();if(!(!H||[...H].some(C=>C.charCodeAt(0)<=32||C==="\\"))){if(H.startsWith("/")&&!H.startsWith("//"))return H;try{let C=new URL(H);if(["http:","https:"].includes(C.protocol)&&!C.username&&!C.password)return C.href}catch{}}}function b(e){let H=n(e),C={...H,...n(H.media_item)},V=n(C.metadata),L=n(C.album),M=Array.isArray(C.artists)?C.artists.map(H1=>A(n(H1).name)||A(H1)).filter(Boolean).join(", "):A(C.artist)||A(C.media_artist),r=Array.isArray(V.images)?V.images:[],t=g(C.media_image)??g(C.image)??g(C.image_url)??g(n(C.image).path)??g(C.thumbnail)??g(n(r[0]).path),i=n(C.audio_format),d=n(H.streamdetails),m={...n(d.audio_format),...n(H.stream_details)},p=A(i.content_type)||A(m.content_type),s=x(i.sample_rate)||x(m.sample_rate),Z=x(i.bit_depth)||x(m.bit_depth),u=A(C.uri)||A(C.media_content_id);return{id:A(H.queue_item_id)||u||A(C.item_id),uri:u,name:A(C.name)||A(C.title)||A(C.media_title)||"Unknown title",type:A(C.media_type)||A(C.media_content_type)||"track",artist:M,album:A(L.name)||A(C.album)||A(C.media_album_name),image:t,provider:A(C.provider)||A(m.provider)||u.split("://")[0],duration:x(C.duration),description:A(V.description)||A(C.description),quality:[p,s?`${s/1e3} kHz`:"",Z?`${Z}-bit`:""].filter(Boolean).join(" \xB7 "),favorite:typeof C.favorite=="boolean"?C.favorite:void 0,queueId:A(H.queue_item_id)||void 0,raw:C}}function R(e){if(!Array.isArray(e)||e.some(H=>H===null||typeof H!="object"||Array.isArray(H)))throw new Error("Music Assistant returned an invalid item list.");return e.map(b)}var l={pause:1,seek:2,volume:4,mute:8,previous:16,next:32,playMedia:512,clear:8192,play:16384,shuffle:32768,group:524288,repeat:262144};function c(e,H){return(e&H)===H}function f(e,H,C=Date.now()){let V=e?.states[H.entity_id],L=V?.attributes??{},M=e?.states[H.volume_entity||H.entity_id]?.attributes??{},r=x(L.media_duration),t=Date.parse(A(L.media_position_updated_at)),i=V?.state==="playing"&&Number.isFinite(t)?Math.max(0,(C-t)/1e3):0;return{id:H.entity_id,name:H.name||A(L.friendly_name)||H.entity_id,available:!!V&&!["unavailable","unknown"].includes(V.state)&&e?.connection?.connected!==!1,state:V?.state??"unavailable",features:x(L.supported_features),title:A(L.media_title),artist:A(L.media_artist),album:A(L.media_album_name),image:g(L.entity_picture),position:Math.min(r||1/0,Math.max(0,x(L.media_position)+i)),duration:r,volume:x(M.volume_level),muted:M.is_volume_muted===!0,members:X(L.group_members),shuffle:L.shuffle===!0,repeat:A(L.repeat)||"off"}}function a2(e,H){return Math.max(0,Math.min(x(e),H.max_volume??100))/100}function u1(e){let H=Math.max(0,Math.floor(e));return`${Math.floor(H/60)}:${String(H%60).padStart(2,"0")}`}var e1=class{constructor(H,C){this.hass=H;this.config=C;this.entries=new Map}has(H,C){return!!this.hass.services[H]?.[C]}async response(H,C,V,L){let M=n(await this.hass.callWS({type:"call_service",domain:H,service:C,service_data:V,...L?{target:{entity_id:L}}:{},return_response:!0}));if(!("response"in M)||M.response===null||typeof M.response!="object")throw new Error(`${C} returned no response.`);return n(M.response)}entity(H){return this.config.entities.find(C=>C.entity_id===H)??{entity_id:H}}async entry(H){let C=this.entity(H).config_entry_id||this.config.config_entry_id;if(C)return C;let V=this.entries.get(H);if(V)return V;let L=n(await this.hass.callWS({type:"config/entity_registry/get",entity_id:H})),M=A(L.config_entry_id);if(!M||L.platform&&L.platform!=="music_assistant")throw new Error("Select a Music Assistant player or set its integration entry ID.");return this.entries.set(H,M),M}assertAvailable(H){if(!f(this.hass,this.entity(H)).available)throw new Error("This room is unavailable.")}async media(H,C,V={}){if(this.assertAvailable(H),!this.has("media_player",C))throw new Error("This action is unavailable.");let L={media_play:l.play,media_pause:l.pause,media_seek:l.seek,media_previous_track:l.previous,media_next_track:l.next,volume_set:l.volume,volume_mute:l.mute,shuffle_set:l.shuffle,repeat_set:l.repeat,clear_playlist:l.clear,join:l.group,unjoin:l.group};if(L[C]&&!c(x(this.hass.states[H]?.attributes.supported_features),L[C]))throw new Error("This player does not support that action.");return this.hass.callService("media_player",C,V,{entity_id:H})}async browse(H,C){let V=await this.entry(H);if(C.text.trim()&&["all","library"].includes(C.source)){let r=await this.response("music_assistant","search",{config_entry_id:V,name:C.text.trim(),media_type:[C.type],limit:50,library_only:C.source!=="all"}),t=C.type==="radio"?"radio":`${C.type}s`;return{items:R(r[t]),hasMore:!1}}let L=await this.response("music_assistant","get_library",{config_entry_id:V,media_type:C.type,limit:25,offset:C.offset,...C.source==="favorites"?{favorite:!0}:{},...C.text.trim()?{search:C.text.trim()}:{},order_by:C.source==="recent"?"last_played_desc":"name"}),M=R(L.items);return{items:M,hasMore:M.length===25}}async queue(H){let C=await this.response("music_assistant","get_queue",{},H),V=n(C[H]);if(!("current_item"in V))throw new Error("Queue details were not returned for this room.");return{kind:"partial",items:[V.current_item,V.next_item].filter(Boolean).map(b),hasMore:!1,offset:0}}async play(H,C,V){if(this.assertAvailable(H),!C.uri)throw new Error("This item has no playable URI.");if(!this.has("music_assistant","play_media")||!c(x(this.hass.states[H]?.attributes.supported_features),l.playMedia))throw new Error("This player cannot play selected media.");return this.hass.callService("music_assistant","play_media",{media_id:C.uri,media_type:C.type,...V==="radio"?{radio_mode:!0}:{enqueue:V}},{entity_id:H})}async volume(H,C){let V=this.entity(H),L=V.volume_entity||H;if(!c(x(this.hass.states[L]?.attributes.supported_features),l.volume))throw new Error("Volume control is unavailable.");return this.media(L,"volume_set",{volume_level:a2(C,{...V,max_volume:Math.min(V.max_volume??100,...this.config.entities.filter(M=>(M.volume_entity||M.entity_id)===L).map(M=>M.max_volume??100))})})}async groupVolume(H,C){let V=[...new Set([H,...X(this.hass.states[H]?.attributes.group_members)])],L=new Set,M=[];for(let r of V){let t=this.entity(r).volume_entity||r;if(!L.has(t)){L.add(t);try{await this.volume(r,C)}catch(i){M.push(`${this.entity(r).name||r}: ${_(i)}`)}}}if(M.length)throw new Error(M.join("; "))}async join(H,C){if(this.assertAvailable(H),!c(x(this.hass.states[H]?.attributes.supported_features),l.group))throw new Error("This player does not support grouping.");let V=X(this.hass.states[H]?.attributes.group_members),L=[...new Set([...V,...C])].filter(r=>r!==H),M=await this.entry(H);for(let r of C)if(this.assertAvailable(r),await this.entry(r)!==M)throw new Error("Grouping requires rooms on the same Music Assistant server.");return this.media(H,"join",{group_members:L})}async preset(H,C){let V=X(this.hass.states[H]?.attributes.group_members),L=[];for(let M of[...new Set(C)].filter(r=>r!==H))try{await this.join(H,[...V,M]),V.push(M)}catch(r){L.push(`${this.entity(M).name||M}: ${_(r)}`)}if(L.length)throw new Error(L.join("; "))}async transfer(H,C){if(this.assertAvailable(H),this.assertAvailable(C),await this.entry(H)!==await this.entry(C))throw new Error("Queue transfer requires rooms on the same Music Assistant server.");return this.hass.callService("music_assistant","transfer_queue",{source_player:H,auto_play:!0},{entity_id:C})}async favoriteEntity(H){let C=this.entity(H).favorite_entity;if(C)return C;let V=n(await this.hass.callWS({type:"config/entity_registry/get",entity_id:H})),L=await this.hass.callWS({type:"config/entity_registry/list"});if(!(!Array.isArray(L)||!V.device_id))return L.find(M=>M.entity_id.startsWith("button.")&&M.device_id===V.device_id&&M.config_entry_id===V.config_entry_id&&(M.translation_key==="favorite_now_playing"||M.unique_id?.endsWith("_favorite_now_playing")))?.entity_id}async children(H,C){let V=n(await this.hass.callWS({type:"media_player/browse_media",entity_id:H,media_content_id:C.uri,media_content_type:C.type}));return R(V.children)}};function _(e){return e instanceof Error?e.message:A(n(e).message)||"The request failed. Please try again."}var S1=["play_queue_item","move_queue_item_up","move_queue_item_down","move_queue_item_next","remove_queue_item"],t1=class{constructor(H){this.native=H}async entry(H){if(this.native.config.extension==="off"||!this.native.has("mass_queue","get_queue_items"))return;let C=n(await this.native.hass.callWS({type:"mass_queue/get_info",entity_id:H}));return A(n(C.entries).mass_queue)||void 0}async queue(H,C=0){let V=await this.native.response("mass_queue","get_queue_items",{entity:H,offset:C,limit:50}),L=R(V[H]);return{kind:"complete",items:L,hasMore:L.length===50,offset:C}}async action(H,C,V){if(!S1.some(L=>L===C)||!this.native.has("mass_queue",C)||!V.queueId)throw new Error("This queue action is unavailable.");return this.native.assertAvailable(H),this.native.hass.callService("mass_queue",C,{entity:H,queue_item_id:V.queueId})}async details(H,C){let V=await this.native.response("mass_queue",`get_${C.type}`,{config_entry_id:H,uri:C.uri});return b(V)}async children(H,C,V=0){let L=C.type==="podcast"?"get_podcast_episodes":`get_${C.type}_tracks`,M=await this.native.response("mass_queue",L,{config_entry_id:H,uri:C.uri,...C.type==="podcast"?{}:{page:V}});return R(C.type==="podcast"?M.episodes:M.tracks)}};var c1=()=>({search:!1,library:!1,queue:!1,queueActions:[],details:[]}),i1=class{constructor(H,C){this.config=H;this.changed=C;this.items=[];this.hasMore=!1;this.capabilities=c1();this.error="";this.notice="";this.pending=!1;this.loading=!1;this.query={text:"",type:"track",source:"all",offset:0};this.generation=0;this.searchGeneration=0;this.queueGeneration=0;this.queueBusy=!1;this.visible=!1;this.connected=!1;this.cache=new Map;this.subscriptionToken=0;this.subscriptionPending=!1;this.subscriptionFailed=!1;this.active=H.default_player||H.entities[0].entity_id}get hass(){return this.native?.hass}updateHass(H){let C=this.hass,V=C?.states[this.active],L=C?.connection?.connected===!1&&H.connection?.connected!==!1;this.native?this.native.hass=H:(this.native=new e1(H,this.config),this.extension=new t1(this.native),this.connected&&this.discover()),(L||C&&C.services!==H.services)&&(this.discover(),this.cache.clear());let M=H.states[this.active];(V?.state!==M?.state||V?.attributes.media_content_id!==M?.attributes.media_content_id||V?.attributes.active_queue!==M?.attributes.active_queue)&&this.visible&&this.section==="queue"&&this.capabilities.queue&&this.refreshQueue(),this.changed()}connect(){this.connected=!0,this.native&&this.discover()}disconnect(){this.connected=!1,this.visible=!1,this.generation++,this.searchGeneration++,this.queueGeneration++,clearTimeout(this.debounce),clearInterval(this.interval),this.interval=void 0,this.stopSubscription()}async discover(){let H=++this.generation,C=this.native;if(!C)return;this.stopSubscription(),this.subscriptionFailed=!1;let V=c1();V.search=C.has("music_assistant","search"),V.library=C.has("music_assistant","get_library"),V.queue=C.has("music_assistant","get_queue");try{V.extensionEntry=await this.extension?.entry(this.active)}catch{}V.extensionEntry&&(V.queue=!0,V.queueActions=S1.filter(L=>C.has("mass_queue",L)),V.details=["album","artist","playlist","podcast"].filter(L=>C.has("mass_queue",`get_${L}`)));try{V.favoriteEntity=await C.favoriteEntity(this.active)}catch{V.favoriteEntity=C.entity(this.active).favorite_entity}H!==this.generation||!this.connected||(this.capabilities=V,this.changed(),this.updatePolling(),this.visible&&this.section==="queue"&&this.refreshQueue(),this.visible&&this.section==="browse"&&this.browse())}select(H){!this.config.entities.some(C=>C.entity_id===H)||H===this.active||this.pending||(this.active=H,this.generation++,this.searchGeneration++,this.queueGeneration++,this.queueBusy=!1,this.queue=void 0,this.items=[],this.error="",this.notice="",this.loading=!1,this.query={...this.query,offset:0},this.capabilities=c1(),clearTimeout(this.debounce),this.discover(),this.changed())}setVisible(H){let C=this.visible;this.visible=H&&this.connected,this.updatePolling(),this.visible&&!C&&(this.section==="queue"&&this.refreshQueue(),this.section==="browse"&&this.browse())}setSection(H){this.section=H,this.updatePolling(),this.visible&&H==="queue"&&this.refreshQueue(),this.visible&&H==="browse"&&this.browse(),this.changed()}updatePolling(){clearInterval(this.interval),this.interval=void 0,this.connected&&this.visible&&this.section==="queue"&&this.capabilities.queue&&(this.interval=setInterval(()=>{this.refreshQueue()},15e3)),this.interval&&this.capabilities.extensionEntry?this.subscribe():this.stopSubscription()}stopSubscription(){this.subscriptionToken++,this.unsubscribe?.(),this.unsubscribe=void 0,this.subscriptionPending=!1}async subscribe(){let H=this.hass?.connection;if(!H?.subscribeEvents||this.unsubscribe||this.subscriptionPending||this.subscriptionFailed)return;let C=++this.subscriptionToken;this.subscriptionPending=!0;try{let V=await H.subscribeEvents(L=>{let M=n(L.data),r=A(this.hass?.states[this.active]?.attributes.active_queue);this.visible&&this.section==="queue"&&M.type==="queue_updated"&&r&&n(M.data).queue_id===r&&this.refreshQueue()},"mass_queue");C!==this.subscriptionToken||!this.visible||!this.connected?V():this.unsubscribe=V}catch{C===this.subscriptionToken&&(this.subscriptionFailed=!0)}finally{C===this.subscriptionToken&&(this.subscriptionPending=!1)}}search(H){this.query={...this.query,...H,offset:0},this.searchGeneration++,clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.browse()},300),this.changed()}async browse(H=!1){let C=this.native;if(!C||!this.visible||!(this.query.text.trim()&&["all","library"].includes(this.query.source)?this.capabilities.search:this.capabilities.library))return;let V=++this.searchGeneration,L=this.generation,M=this.active,r={...this.query,offset:H?this.query.offset+25:0},t=JSON.stringify([M,r]);this.loading=!0,this.error="",this.changed();try{let i=this.cache.get(t),d=i&&Date.now()-i.time<6e4?i:await C.browse(M,r);if(V!==this.searchGeneration||L!==this.generation||!this.connected)return;this.items=H?[...this.items,...d.items]:d.items,this.hasMore=d.hasMore,this.query=r,this.cache.set(t,{...d,time:Date.now()}),this.cache.size>30&&this.cache.delete(this.cache.keys().next().value)}catch(i){V===this.searchGeneration&&L===this.generation&&(this.error=_(i),this.retryRead=()=>this.browse(H))}finally{V===this.searchGeneration&&(this.loading=!1,this.changed())}}async refreshQueue(H=!1){if(!this.native||!this.visible||!this.capabilities.queue||this.queueBusy||!f(this.hass,this.native.entity(this.active)).available)return;let C=++this.queueGeneration,V=this.generation,L=this.active,M=this.capabilities.extensionEntry,r=H&&this.queue?this.queue.offset+50:0;this.queueBusy=!0;try{let t=M?await this.extension.queue(L,r):await this.native.queue(L);if(C!==this.queueGeneration||V!==this.generation||!this.connected)return;this.queue=H&&this.queue?{...t,items:[...this.queue.items,...t.items]}:t}catch(t){C===this.queueGeneration&&V===this.generation&&(this.error=_(t),this.retryRead=()=>this.refreshQueue(H))}finally{C===this.queueGeneration&&(this.queueBusy=!1,this.changed())}}async run(H,C=!0){if(!(this.pending||!this.native)){this.pending=!0,this.error="",this.notice="",this.retryRead=void 0,this.changed();try{await H(),C&&(this.notice="Done"),this.cache.clear()}catch(V){this.error=_(V)}finally{this.pending=!1,this.section==="queue"&&await this.refreshQueue(),this.changed()}}}retry(){this.error="",this.retryRead?.(),this.changed()}get canRetry(){return!!this.retryRead}};var o2=["track","artist","album","playlist","radio","podcast","audiobook"];var A2=w`
  :host {
    display: block;
    height: 100%;
    min-width: 0;
    container-type: inline-size;
    color: var(--primary-text-color, #212121);
    font-family: var(--paper-font-body1_-_font-family, inherit);
    --music-accent: transparent;
  }
  * {
    box-sizing: border-box;
  }
  ha-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 0;
    overflow: hidden;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: var(--ha-card-border-radius, 12px);
    border: 1px solid var(--ha-card-border-color, var(--divider-color, #ddd));
    color: inherit;
  }
  button,
  input,
  select {
    font: inherit;
    color: inherit;
  }
  button,
  select {
    min-height: 44px;
    border-radius: 10px;
    border: 1px solid var(--divider-color, #ddd);
    background: var(--ha-card-background, var(--card-background-color, #fff));
    padding: 8px 12px;
  }
  button {
    cursor: pointer;
    touch-action: manipulation;
    transition:
      background-color 140ms ease,
      color 140ms ease,
      transform 140ms ease;
  }
  button:hover {
    background: var(--secondary-background-color, #eee);
  }
  button:disabled,
  select:disabled {
    opacity: 0.5;
    cursor: default;
  }
  button[aria-pressed="true"] {
    color: var(--primary-color, #03a9f4);
    border-color: currentColor;
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible,
  summary:focus-visible {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: 2px;
  }
  button.icon {
    width: 44px;
    height: 44px;
    padding: 10px;
    flex-shrink: 0;
    display: inline-grid;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: transparent;
  }
  svg {
    display: block;
    width: 20px;
    height: 20px;
    flex: none;
    fill: currentColor;
  }
  button.icon:hover:not(:disabled) {
    background: var(--secondary-background-color, #eee);
  }
  button.icon:active:not(:disabled),
  .nav button:active:not(:disabled) {
    transform: scale(0.94);
  }
  button.icon[aria-pressed="true"] {
    background: color-mix(
      in srgb,
      var(--primary-color, #03a9f4) 12%,
      transparent
    );
    color: var(--primary-color, #03a9f4);
  }
  button.icon.favorite[aria-pressed="true"] {
    color: var(--error-color, #d32f2f);
    background: color-mix(
      in srgb,
      var(--error-color, #d32f2f) 12%,
      transparent
    );
  }
  button.icon.favorite[aria-pressed="true"]:disabled {
    opacity: 1;
  }
  button.icon.primary {
    width: 52px;
    height: 52px;
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
    box-shadow: 0 2px 6px rgb(0 0 0 / 0.16);
  }
  button.icon.primary svg {
    width: 25px;
    height: 25px;
  }
  button.icon.primary:hover:not(:disabled) {
    background: var(--primary-color, #03a9f4);
    filter: brightness(1.08);
  }
  button.icon.primary:disabled {
    box-shadow: none;
  }
  input[type="range"] {
    width: 100%;
    min-width: 0;
    min-height: 44px;
    accent-color: var(--primary-color, #03a9f4);
  }
  input[type="search"],
  input[type="text"],
  input[type="number"] {
    min-height: 44px;
    width: 100%;
    border: 1px solid var(--divider-color, #ddd);
    background: var(--card-background-color, #fff);
    border-radius: 8px;
    padding: 8px;
  }
  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px 4px;
    flex-shrink: 0;
  }
  .header select {
    flex: 1;
    min-width: 0;
    border: 0;
    background: transparent;
    font-weight: 500;
  }
  .header-room {
    flex: 1;
    min-width: 0;
    padding: 8px 12px;
    overflow: hidden;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header button.icon {
    background: var(--secondary-background-color, #eee);
    width: 40px;
    height: 40px;
  }
  .body {
    min-height: 0;
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  .player {
    padding: 12px 16px;
    min-width: 0;
    background: linear-gradient(var(--music-accent), var(--music-accent));
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .hero {
    display: flex;
    gap: 16px;
    align-items: center;
    min-width: 0;
  }
  .hero hamac-artwork {
    width: 72px;
    flex-shrink: 0;
  }
  .hero.small hamac-artwork {
    width: 64px;
  }
  .hero.large hamac-artwork {
    width: 144px;
  }
  .track {
    min-width: 0;
    flex: 1;
  }
  .track strong {
    font-size: 1.1rem;
    font-weight: 500;
    display: block;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .muted {
    color: var(--secondary-text-color, #666);
    font-size: 0.875rem;
  }
  .transport {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .progress {
    display: flex;
    align-items: center;
    gap: 8px;
    font-variant-numeric: tabular-nums;
    font-size: 0.75rem;
  }
  .volume {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .volume label {
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;
  }
  .volume label input[type="range"] {
    margin: 0;
  }
  .nav {
    display: flex;
    padding: 4px 12px 8px;
    gap: 6px;
    flex-shrink: 0;
  }
  .nav button {
    flex: 1;
    min-width: 0;
    padding: 8px 4px;
    border: 0;
    border-radius: 12px;
    background: var(--secondary-background-color, #eee);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-weight: 500;
  }
  .nav button:hover:not(:disabled),
  .nav button[aria-current="page"] {
    background: color-mix(
      in srgb,
      var(--primary-color, #03a9f4) 12%,
      var(--secondary-background-color, #eee)
    );
    color: var(--primary-color, #03a9f4);
  }
  .nav svg {
    width: 18px;
    height: 18px;
  }
  .pane {
    padding: 12px 16px;
    min-width: 0;
    min-height: 0;
    overflow: auto;
    border-top: 1px solid var(--divider-color, #ddd);
  }
  .browse-sticky {
    position: sticky;
    top: 0;
    z-index: 2;
    padding-bottom: 8px;
    background: var(--card-background-color, #fff);
  }
  .browse-bar {
    display: flex;
    align-items: end;
    gap: 8px;
  }
  .browse-bar .search {
    flex: 1;
    min-width: 0;
    margin: 0;
  }
  .browse-bar .search input {
    width: 100%;
  }
  .queue-shortcut {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-height: 44px;
    flex: none;
  }
  .queue-shortcut svg {
    width: 18px;
    height: 18px;
  }
  .advanced-search {
    margin-top: 4px;
  }
  .advanced-search summary {
    min-height: 36px;
    padding: 8px 0;
  }
  .advanced-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .advanced-filters label {
    flex: 1;
    min-width: 110px;
    margin: 0;
  }
  .advanced-filters select {
    width: 100%;
  }
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid var(--divider-color, #ddd);
    flex-wrap: wrap;
  }
  .item hamac-artwork {
    width: 44px;
    flex-shrink: 0;
  }
  .item .track {
    min-width: 80px;
  }
  .item .actions {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }
  .item .actions button {
    font-size: 0.8rem;
  }
  .item-main {
    display: flex;
    gap: 10px;
    align-items: center;
    flex: 1;
    min-width: 0;
    text-align: left;
    border: 0;
    background: transparent;
    padding: 0;
  }
  .room {
    padding: 12px 0;
    border-bottom: 1px solid var(--divider-color, #ddd);
  }
  .room-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  .room-actions {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-top: 8px;
  }
  .empty {
    padding: 20px 4px;
    text-align: center;
    color: var(--secondary-text-color, #666);
  }
  .message {
    padding: 8px 16px;
    font-size: 0.875rem;
    flex-shrink: 0;
    max-height: 100px;
    overflow: auto;
  }
  .error {
    color: var(--error-color, #b00020);
  }
  h2 {
    font-size: 1.15rem;
    font-weight: 500;
    margin: 0;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    line-height: 1.5;
  }
  details {
    margin: 8px 0;
  }
  summary {
    cursor: pointer;
    min-height: 44px;
    padding: 12px 0;
  }
  .metadata {
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .dialog {
    position: fixed;
    inset: 0;
    margin: auto;
    width: min(640px, calc(100vw - 24px));
    max-width: 100%;
    max-height: calc(100dvh - 24px);
    border: 1px solid var(--divider-color, #ddd);
    border-radius: var(--ha-card-border-radius, 12px);
    padding: 0;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color, #212121);
    overflow: auto;
  }
  .dialog::backdrop {
    background: rgb(0 0 0 / 0.45);
  }
  .dialog-head {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    padding: 6px 12px;
    position: sticky;
    top: 0;
    background: var(--card-background-color, #fff);
    z-index: 1;
  }
  .dialog-head h2 {
    margin: 0 auto 0 4px;
    font-size: 1.05rem;
  }
  .dialog .pane {
    border: 0;
    max-height: none;
    overflow: visible;
    padding: 4px 16px 12px;
  }
  .dialog .pane > .muted:first-child {
    margin: 0 0 6px;
  }
  .dialog .item {
    padding: 7px 0;
  }
  .dialog .player {
    padding: 16px;
  }
  .dialog .message {
    max-height: none;
  }
  .dialog .hero hamac-artwork {
    width: 120px;
  }
  .detail-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding: 12px 0;
  }
  .split {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    overflow: hidden;
  }
  .split .pane {
    border-top: 0;
    border-left: 1px solid var(--divider-color, #ddd);
  }
  .split .player {
    overflow: auto;
  }
  .compact .header {
    padding: 4px 8px 0;
  }
  .compact .player {
    padding: 4px 8px;
    gap: 4px;
    flex-direction: row;
    align-items: center;
  }
  .compact .hero {
    flex: 1;
    gap: 8px;
  }
  .compact .hero hamac-artwork {
    width: 40px;
  }
  .compact .hero .album,
  .compact .extras,
  .compact .progress,
  .compact .volume,
  .compact .metadata {
    display: none;
  }
  .compact .transport {
    flex-wrap: nowrap;
    gap: 0;
  }
  .compact .transport button.secondary {
    display: none;
  }
  .compact .nav {
    padding: 0 8px 4px;
    gap: 4px;
  }
  .compact .nav button {
    min-height: 30px;
    padding: 2px;
    font-size: 0.75rem;
  }
  .compact .header select {
    min-height: 30px;
    padding: 0;
  }
  .compact .header .icon {
    min-height: 30px;
    height: 30px;
    width: 34px;
    padding: 3px;
  }
  .compact .body {
    overflow: hidden;
  }
  .compact .track strong {
    font-size: 0.9rem;
  }
  .compact .muted {
    font-size: 0.75rem;
  }
  .compact .message {
    padding: 2px 8px;
    font-size: 0.7rem;
  }
  .compact .nav svg {
    width: 16px;
    height: 16px;
  }
  .compact button.icon.primary {
    width: 44px;
    height: 44px;
  }
  .body .volume label > span {
    display: none;
  }
  .body > .pane {
    flex: 1;
  }
  .compact .message {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }
  .compact .message.error {
    position: static;
    width: auto;
    height: auto;
    clip-path: none;
    max-height: 28px;
  }
  .header .back {
    border: 0;
  }
  @container (max-width:300px) {
    .hero {
      gap: 10px;
    }
    .hero hamac-artwork,
    .hero.large hamac-artwork {
      width: 64px;
    }
    .header {
      padding-inline: 8px;
    }
    .player {
      padding-inline: 8px;
    }
    .nav span {
      font-size: 0.75rem;
    }
    .compact .transport .secondary {
      display: none;
    }
    .compact .hero hamac-artwork {
      display: none;
    }
    .advanced-filters label {
      min-width: 80px;
    }
    .item .actions {
      width: 100%;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      scroll-behavior: auto !important;
      transition: none !important;
    }
  }
`;var k2={player:"Player",browse:"Browse",queue:"Queue",rooms:"Rooms",close:"Close",retry:"Retry",search:"Search music",empty:"Nothing here yet",unavailable:"Unavailable",play:"Play",pause:"Pause",previous:"Previous",next:"Next",shuffle:"Shuffle",repeat:"Repeat",mute:"Mute",unmute:"Unmute",volume:"Volume",details:"Details",favorite:"Favorite current track",more:"Load more",refresh:"Refresh",select:"Select room",join:"Join playback",leave:"Leave group",transfer:"Move playback here"};function v(e){return k2[e]}var Y=new Map,J=class extends h{constructor(){super(...arguments);this.src="";this.accent=!1;this.failed=!1;this.last=""}willUpdate(){this.last!==this.src&&(this.last=this.src,this.failed=!1)}render(){let C=g(this.src);return C&&!this.failed?a`<img
          src=${C}
          alt=""
          loading="lazy"
          @error=${()=>{this.failed=!0}}
          @load=${()=>this.extract(C)}
        />`:a`<div class="placeholder" aria-hidden="true">♫</div>`}extract(C){if(!this.accent)return;let V=r=>this.dispatchEvent(new CustomEvent("artwork-accent",{detail:r,bubbles:!0,composed:!0})),L=Y.get(C);if(L){V(L);return}let M=new Image;M.crossOrigin="anonymous",M.onload=()=>{if(!(this.src!==C||!this.isConnected))try{let r=document.createElement("canvas");r.width=1,r.height=1;let t=r.getContext("2d");if(!t)return;t.drawImage(M,0,0,1,1);let[i,d,m]=t.getImageData(0,0,1,1).data,p=`rgb(${i} ${d} ${m} / 0.12)`;Y.set(C,p),Y.size>30&&Y.delete(Y.keys().next().value),V(p)}catch{}},M.src=C}};J.properties={src:{type:String},accent:{type:Boolean},failed:{state:!0}},J.styles=w`
    :host {
      display: block;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--secondary-background-color, #eee);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .placeholder {
      height: 100%;
      display: grid;
      place-items: center;
      color: var(--secondary-text-color, #666);
      font-size: 2rem;
    }
  `;customElements.get("hamac-artwork")||customElements.define("hamac-artwork",J);var y2={"arrow-down":N1,"arrow-up":I1,close:Q1,"delete-outline":U1,"dots-horizontal":G1,"heart-outline":z1,heart:q1,"home-sound-out-outline":K1,magnify:j1,pause:X1,play:s1,"playlist-music-outline":Y1,refresh:J1,repeat:C2,"repeat-once":H2,shuffle:V2,"skip-next":L2,"skip-previous":M2,"volume-high":r2,"volume-off":e2},C1=class extends h{constructor(){super(...arguments);this.width=0;this.height=0;this.onScreen=!0;this.detailItems=[];this.detailPage=0;this.detailMore=!1;this.detailToken=0;this.accentImage="";this.visibility=()=>{let C=this.onScreen&&!document.hidden;this.controller?.setVisible(C),clearInterval(this.tick),C&&(this.tick=setInterval(()=>{this.current?.state==="playing"&&this.requestUpdate()},1e3))};this.closeDialog=()=>{this.dialog=void 0,this.detailToken++,this.controller?.setSection(this.split?this.controller.config.sections[0]:void 0),this.requestUpdate(),this.opener?.focus()}}set hass(C){this._hass=C,C&&this.controller?.updateHass(C)}get hass(){return this._hass}setConfig(C){let V=r1(C);this.controller?.disconnect(),this.controller=new i1(V,()=>this.requestUpdate()),this.hass&&this.controller.updateHass(this.hass),this.isConnected&&(this.controller.connect(),this.visibility()),this.requestUpdate()}getGridOptions(){return i2(this.controller?.config)}getCardSize(){return Math.ceil((this.height||this.getGridOptions().rows*64-8)/50)}static getConfigElement(){return document.createElement("ha-music-assistant-card-editor")}static getStubConfig(C){let V=Object.values(C?.states??{}).find(L=>L?.entity_id.startsWith("media_player.")&&L.attributes.mass_player_id)?.entity_id;return{type:j,entities:V?[V]:[]}}connectedCallback(){super.connectedCallback(),this.controller?.connect(),this.resize=new ResizeObserver(C=>{let V=C[0].contentRect;this.width=V.width,this.height=V.height,this.requestUpdate()}),this.resize.observe(this),this.intersection=new IntersectionObserver(C=>{this.onScreen=C[0].isIntersecting,this.visibility()}),this.intersection.observe(this),document.addEventListener("visibilitychange",this.visibility),this.visibility()}disconnectedCallback(){super.disconnectedCallback(),this.controller?.disconnect(),this.resize?.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.visibility),clearInterval(this.tick),this.detailToken++,this.shadowRoot?.querySelector("dialog")?.close()}get current(){let C=this.controller;return C?f(this.hass,C.config.entities.find(V=>V.entity_id===C.active)):void 0}updated(){let C=this.current,V=this.controller;C&&V&&((C.image!==this.accentImage||!V.config.artwork_accent)&&this.style.setProperty("--music-accent","transparent"),this.accentImage=C.image??""),!(!V||this.dialog)&&(this.split&&!V.section&&V.config.sections.length?V.setSection(V.config.sections[0]):!this.inlinePanels&&V.section&&V.setSection(void 0))}get compact(){return this.controller?.config.layout==="compact"||this.height>0&&this.height<270}get inlinePanels(){return this.controller?.config.layout==="expanded"&&!this.compact}get split(){return this.controller?.config.layout==="expanded"&&this.width>=720&&!this.compact}icon(C){return a`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d=${y2[C]??s1}></path>
    </svg>`}button(C,V,L,M=!1,r="",t){return a`<button
      class=${`icon ${r}`}
      aria-label=${C}
      title=${C}
      ?disabled=${M||r!=="close"&&this.controller?.pending}
      aria-pressed=${t===void 0?o:String(t)}
      @click=${L}
    >
      ${this.icon(V)}
    </button>`}run(C){this.controller?.run(C)}async openDialog(C,V){this.dialog||(this.opener=this.shadowRoot?.activeElement),this.dialog=C,this.detail=V,this.detailItems=[],this.detailPage=0,this.detailMore=!1,this.detailToken++,this.controller?.setSection(C==="player"||C==="details"?void 0:C),this.requestUpdate(),await this.updateComplete;let L=this.shadowRoot?.querySelector("dialog");L&&!L.open&&L.showModal(),V&&this.loadDetail(V)}navigate(C){this.inlinePanels?this.controller?.setSection(C):this.openDialog(C)}async loadDetail(C,V=!1){let L=this.controller,M=++this.detailToken;if(!L?.native)return;let r=L.active,t=V?this.detailPage+1:0;await L.run(async()=>{let i=C;C.type==="track"&&L.native.has("music_assistant","get_queue")&&C.uri===A(this.hass?.states[r]?.attributes.media_content_id)&&(i=(await L.native.queue(r)).items.find(Z=>Z.uri===C.uri)??C);let d=[],m=L.capabilities.extensionEntry;!V&&m&&L.capabilities.details.includes(C.type)&&(i=await L.extension.details(m,C));let p=C.type==="podcast"?"get_podcast_episodes":`get_${C.type}_tracks`;m&&L.native.has("mass_queue",p)?d=await L.extension.children(m,C,t):!V&&["album","artist"].includes(C.type)&&(d=await L.native.children(r,C)),!(M!==this.detailToken||r!==L.active)&&(this.detail={...i,image:i.image||C.image},this.detailItems=V?[...this.detailItems,...d]:d,this.detailPage=t,this.detailMore=!!m&&["album","playlist"].includes(C.type)&&d.length>0,this.requestUpdate())})}messages(){let C=this.controller;return a`${C.error?a`<div class="message error" role="alert">${C.error} ${C.canRetry?a`<button @click=${()=>C.retry()}>${v("retry")}</button>`:o}</div>`:o}<span
        class="message"
        role="status"
        ?hidden=${!C.pending&&!C.notice}
        >${C.pending?"Working\u2026":C.notice}</span
      >`}render(){let C=this.controller,V=this.current;return!C||!V?a`<ha-card
        ><p class="empty">
          Choose a Music Assistant player in the card editor.
        </p></ha-card
      >`:a`<ha-card class=${this.compact?"compact":""}
        ><div class="header">
          ${C.config.entities.length>1?a`<select
                  aria-label="Selected room"
                  .value=${C.active}
                  ?disabled=${C.pending}
                  @change=${L=>C.select(L.target.value)}
                >
                  ${C.config.entities.map(L=>{let M=f(this.hass,L);return a`<option
                      value=${M.id}
                      ?disabled=${!M.available}
                    >
                      ${M.name}${M.available?"":" \xB7 Unavailable"}
                    </option>`})}
                </select>`:a`<span class="header-room">${V.name}</span>`}${this.button("More player controls","dots-horizontal",()=>this.openDialog("player"))}
        </div>
        ${this.dialog?o:this.messages()}
        <div class=${`body ${this.split?"split":""}`}>
          ${this.inlinePanels&&!this.split&&C.section?a`<section class="pane"><button class="back" @click=${()=>C.setSection(void 0)}>Back to player</button>${this.section(C.section)}</section>`:this.player()}${this.split?a`<section class="pane">${this.section(C.section??C.config.sections[0])}</section>`:o}
        </div>
        ${C.config.sections.length?a`<nav class="nav" aria-label="Music navigation">
                ${C.config.sections.map(L=>a`<button aria-current=${this.inlinePanels&&C.section===L?"page":o} @click=${()=>this.navigate(L)}>${this.icon(L==="browse"?"magnify":L==="queue"?"playlist-music-outline":"home-sound-out-outline")} <span>${v(L)}</span></button>`)}
              </nav>`:o}</ha-card
      >
      <dialog
        class="dialog"
        aria-labelledby="dialog-title"
        @close=${this.closeDialog}
      >
        <div class="dialog-head">
          <h2 id="dialog-title">${this.dialog?v(this.dialog):""}</h2>
          ${this.dialog==="queue"?this.button(v("refresh"),"refresh",()=>this.controller?.refreshQueue(),!this.controller?.capabilities.queue):o}
          ${this.button(v("close"),"close",()=>this.shadowRoot?.querySelector("dialog")?.close(),!1,"close")}
        </div>
        ${this.dialog?this.messages():o}
        <div class="pane">
          ${this.dialog==="player"?this.player(!0):this.dialog==="details"?this.details():this.section(this.dialog)}
        </div>
      </dialog>`}player(C=!1){let V=this.controller,L=this.current,M=V.native,r=!L.available||!M,t=S=>c(L.features,S),i=V.config.entities.find(S=>S.entity_id===L.id),d=this.hass?.states[i.volume_entity||L.id],m=this.currentTrackKey(L.id),p=n(this.hass?.states[L.id]?.attributes),s=V.queue?.items.find(S=>S.uri&&S.uri===A(p.media_content_id)),Z=this.likedTrackKey===m||s?.favorite===!0||p.media_is_favorite===!0||p.is_favorite===!0,u=(S,m2={})=>this.run(()=>M.media(L.id,S,m2)),H1=a`<hamac-artwork
      .src=${L.image??""}
      .accent=${V.config.artwork_accent}
      @artwork-accent=${S=>this.style.setProperty("--music-accent",S.detail)}
    ></hamac-artwork>`;return a`<section class="player" aria-label="Now playing">
      <div class=${`hero ${V.config.artwork_size}`}>
        ${H1}
        <div class="track">
          <strong class="truncate" title=${L.title}
            >${L.title||(L.available?"Ready to play":v("unavailable"))}</strong
          >
          <div class="truncate muted">${L.artist||L.name}</div>
          ${V.config.metadata?a`<div class="truncate muted album">${L.album}</div>`:o}
        </div>
      </div>
      ${L.duration>0?a`<div class="progress"><span>${u1(L.position)}</span><input type="range" aria-label="Playback position" min="0" max=${L.duration} .value=${String(Math.floor(L.position))} ?disabled=${r||!t(l.seek)||V.pending} @change=${S=>u("media_seek",{seek_position:Number(S.target.value)})} /><span>${u1(L.duration)}</span></div>`:o}
      <div class="transport">
        ${t(l.shuffle)?this.button(v("shuffle"),"shuffle",()=>u("shuffle_set",{shuffle:!L.shuffle}),r,"secondary",L.shuffle):o}${V.capabilities.favoriteEntity?this.button(Z?"Current track is in favorites":v("favorite"),Z?"heart":"heart-outline",()=>this.favoriteCurrentTrack(V.capabilities.favoriteEntity,m),r||!L.title||Z,"favorite",Z):o}${t(l.previous)?this.button(v("previous"),"skip-previous",()=>u("media_previous_track"),r,"secondary"):o}${t(L.state==="playing"?l.pause:l.play)?this.button(L.state==="playing"?v("pause"):v("play"),L.state==="playing"?"pause":"play",()=>u(L.state==="playing"?"media_pause":"media_play"),r,"primary"):o}${t(l.next)?this.button(v("next"),"skip-next",()=>u("media_next_track"),r):o}${t(l.repeat)?this.button(`${v("repeat")}: ${L.repeat}`,L.repeat==="one"?"repeat-once":"repeat",()=>u("repeat_set",{repeat:L.repeat==="off"?"all":L.repeat==="all"?"one":"off"}),r,"secondary",L.repeat!=="off"):o}
      </div>
      ${c(x(d?.attributes.supported_features),l.volume)?this.volume(i):o}
      ${C?a`<div class="detail-actions">${V.config.sections.map(S=>a`<button @click=${()=>this.openDialog(S)}>${v(S)}</button>`)}</div>`:o}
    </section>`}currentTrackKey(C){let V=n(this.hass?.states[C]?.attributes);return[C,A(V.media_content_id)||`${A(V.media_title)}|${A(V.media_artist)}`].join(":")}favoriteCurrentTrack(C,V){this.controller?.run(async()=>{await this.hass.callService("button","press",{},{entity_id:C}),this.likedTrackKey=V},!1)}volume(C,V=!1){let L=this.controller,M=f(this.hass,C),r=C.volume_entity||M.id,t=this.hass?.states[r]?.attributes,i=!M.available||!this.hass?.states[r]||["unavailable","unknown"].includes(this.hass.states[r].state)||L.pending;return a`<div class="volume">
      ${c(x(t?.supported_features),l.mute)&&!V?this.button(M.muted?v("unmute"):v("mute"),M.muted?"volume-off":"volume-high",()=>this.run(()=>L.native.media(r,"volume_mute",{is_volume_muted:!M.muted})),i):o}<label
        ><span class="muted"
          >${V?"Group volume":M.name+" volume"}</span
        ><input
          type="range"
          aria-label=${V?"Group volume":M.name+" volume"}
          min="0"
          max=${C.max_volume??100}
          .value=${String(Math.round(M.volume*100))}
          ?disabled=${i}
          @change=${d=>this.run(()=>V?L.native.groupVolume(M.id,Number(d.target.value)):L.native.volume(M.id,Number(d.target.value)))} /></label
      ><span class="muted">${Math.round(M.volume*100)}%</span>
    </div>`}section(C){return C==="browse"?this.browse():C==="queue"?this.queue():C==="rooms"?this.rooms():o}browse(){let C=this.controller;return a`<div class="browse">
      <div class="browse-sticky">
        <div class="browse-bar">
          <label class="search"
            ><span class="muted">${v("search")}</span
            ><input
              type="search"
              placeholder="Artists, albums, tracks…"
              aria-label=${v("search")}
              .value=${C.query.text}
              @input=${V=>C.search({text:V.target.value})}
            />
          </label>
          <button class="queue-shortcut" @click=${()=>this.navigate("queue")}>
            ${this.icon("playlist-music-outline")}<span>Queue</span>
          </button>
        </div>
        ${C.config.advanced_search?a`<details class="advanced-search">
                <summary>Advanced search</summary>
                <div class="advanced-filters">
                  <label
                    ><span class="muted">Media type</span
                    ><select
                      aria-label="Media type"
                      .value=${C.query.type}
                      @change=${V=>C.search({type:V.target.value})}
                    >
                      ${o2.map(V=>a`<option value=${V}>${V}</option>`)}
                    </select>
                  </label>
                  <label
                    ><span class="muted">Collection</span
                    ><select
                      aria-label="Collection"
                      .value=${C.query.source}
                      @change=${V=>C.search({source:V.target.value})}
                    >
                      <option value="all">All providers</option>
                      <option value="library">Library</option>
                      <option value="favorites">Favorites</option>
                      <option value="recent">Recently played</option>
                    </select>
                  </label>
                </div>
              </details>`:o}
      </div>
      ${!C.capabilities.library&&!C.capabilities.search?a`<p class="empty">Search and library services are unavailable.</p>`:o}${C.loading?a`<p role="status">Loading…</p>`:o}${this.mediaList(C.items)}${!C.loading&&!C.items.length?a`<p class="empty">${v("empty")}</p>`:o}${C.hasMore?a`<button ?disabled=${C.loading} @click=${()=>C.browse(!0)}>${v("more")}</button>`:o}
    </div>`}mediaList(C){return a`<ul class="list">
      ${C.map(V=>a`<li class="item">
            <button
              class="item-main"
              @click=${()=>this.openDialog("details",V)}
            >
              <hamac-artwork .src=${V.image??""}></hamac-artwork
              ><span class="track"
                ><strong class="truncate">${V.name}</strong
                ><span class="muted"
                  >${V.artist||V.type}${V.provider?" \xB7 "+V.provider:""}</span
                ></span
              >
            </button>
            <div class="actions">
              <button
                ?disabled=${this.controller?.pending||!this.current?.available||!V.uri}
                @click=${()=>this.run(()=>this.controller.native.play(this.controller.active,V,"play"))}
              >
                Play
              </button>
            </div>
          </li>`)}
    </ul>`}queue(){let C=this.controller,V=C.queue;return a`${V?.kind==="partial"?a`<p class="muted">Current and next. Full queue editing requires Music Assistant Queue Actions.</p>`:o}${C.capabilities.queue?o:a`<p class="empty">Queue service unavailable.</p>`}
      <ul class="list">
        ${V?.items.map((L,M)=>a`<li class="item">
              <hamac-artwork .src=${L.image??""}></hamac-artwork>
              <div class="track">
                <strong class="truncate">${L.name}</strong>
                <div class="muted">
                  ${V.kind==="partial"?M?"Next":"Current":""}
                  ${L.artist}
                </div>
              </div>
              <div class="actions">
                ${V.kind==="complete"?C.capabilities.queueActions.map(r=>this.button({play_queue_item:"Play queue item",move_queue_item_up:"Move up",move_queue_item_down:"Move down",move_queue_item_next:"Play next",remove_queue_item:"Remove"}[r]??r,{play_queue_item:"play",move_queue_item_up:"arrow-up",move_queue_item_down:"arrow-down",move_queue_item_next:"skip-next",remove_queue_item:"delete-outline"}[r]??"play",()=>this.run(()=>C.extension.action(C.active,r,L)),!this.current?.available||!L.queueId)):o}
              </div>
            </li>`)}
      </ul>
      ${V?.items.length?o:a`<p class="empty">${v("empty")}</p>`}${V?.hasMore?a`<button @click=${()=>C.refreshQueue(!0)}>${v("more")}</button>`:o}${V?.kind==="complete"&&c(this.current.features,l.clear)?a`<details>
              <summary>Clear queue</summary>
              <p>This removes the current queue.</p>
              <button
                ?disabled=${C.pending||!this.current?.available}
                @click=${()=>this.run(()=>C.native.media(C.active,"clear_playlist"))}
              >
                Confirm clear queue
              </button>
            </details>`:o}`}rooms(){let C=this.controller,V=this.current;return a`${V.members.length>1?this.volume(C.native?.entity(V.id)??{entity_id:V.id},!0):o}${C.config.room_presets.length?a`<h3>Room presets</h3>
            <div class="detail-actions">
              ${C.config.room_presets.map(L=>a`<button ?disabled=${C.pending} @click=${()=>this.run(()=>C.native.preset(L.leader,L.members))}>${L.name}</button>`)}
            </div>`:o}${C.config.entities.map(L=>{let M=f(this.hass,L),r=M.id===C.active,t=V.members.includes(M.id);return a`<section class="room">
        <div class="room-head">
          <strong>${M.name}</strong
          ><span class="muted"
            >${M.available?M.state:v("unavailable")}${r?" \xB7 Selected":""}</span
          >
        </div>
        ${M.title?a`<p class="muted truncate">${M.title}</p>`:o}${c(x(this.hass?.states[L.volume_entity||L.entity_id]?.attributes.supported_features),l.volume)?this.volume(L):o}
        <div class="room-actions">
          <button
            ?disabled=${!M.available||r||C.pending}
            @click=${()=>C.select(M.id)}
          >
            ${v("select")}</button
          >${!r&&c(V.features,l.group)?a`<button ?disabled=${!M.available||!V.available||t||C.pending} @click=${()=>this.run(()=>C.native.join(C.active,[M.id]))}>${v("join")}</button>`:o}${M.members.length>1&&c(M.features,l.group)?a`<button ?disabled=${!M.available||C.pending} @click=${()=>this.run(()=>C.native.media(M.id,"unjoin"))}>${v("leave")}</button>`:o}${!r&&C.native?.has("music_assistant","transfer_queue")?a`<button ?disabled=${!M.available||!V.available||C.pending} @click=${()=>this.run(()=>C.native.transfer(C.active,M.id))}>${v("transfer")}</button>`:o}
        </div>
      </section>`})}`}details(){let C=this.controller,V=this.detail;if(!V)return o;let L=Array.isArray(V.raw.artists)?V.raw.artists:[],M=n(V.raw.album);return a`<div class="hero">
        <hamac-artwork .src=${V.image??""}></hamac-artwork>
        <div class="track">
          <h2>${V.name}</h2>
          <p class="muted">${V.artist}<br />${V.album}</p>
        </div>
      </div>
      <div class="detail-actions">
        ${["play","next","add","replace","radio"].map(r=>a`<button ?disabled=${C.pending||!this.current?.available||!V.uri} @click=${()=>this.run(()=>C.native.play(C.active,V,r))}>${{play:"Play now",next:"Play next",add:"Add to queue",replace:"Replace queue",radio:"Start radio"}[r]}</button>`)}
      </div>
      ${C.config.metadata?a`<p class="muted">
                ${V.provider||A(V.raw.uri).split("://")[0]}
                ${V.quality?" \xB7 "+V.quality:""}
              </p>
              ${V.description?a`<p class="metadata">${V.description}</p>`:o}
              <div class="detail-actions">
                ${L.map(r=>a`<button @click=${()=>this.openDialog("details",b(r))}>${A(n(r).name)}</button>`)}${M.uri?a`<button @click=${()=>this.openDialog("details",b(M))}>${A(M.name)}</button>`:o}
              </div>`:o}${this.mediaList(this.detailItems)}${this.detailMore?a`<button @click=${()=>this.loadDetail(V,!0)}>${v("more")}</button>`:o}`}};C1.styles=A2;function d2(e){if(!Array.isArray(e))throw new Error("Home Assistant registry data is unavailable.");return e.filter(H=>typeof H=="object"&&H!==null&&!Array.isArray(H))}function p2(e,H,C,V){let L=new Map;for(let r of d2(C))typeof r.id=="string"&&typeof r.area_id=="string"&&L.set(r.id,r.area_id);let M=[];for(let r of d2(H)){if(typeof r.entity_id!="string"||!r.entity_id.startsWith("media_player.")||r.disabled_by||!V[r.entity_id])continue;(typeof r.area_id=="string"?r.area_id:typeof r.device_id=="string"?L.get(r.device_id):void 0)===e&&M.push(r.entity_id)}return M.sort((r,t)=>r.localeCompare(t))}var $=class extends h{constructor(){super(...arguments);this.config={type:j,entities:[]};this.error="";this.selectedArea="";this.selectedPlayers=[];this.addingPlayers=!1}setConfig(C){this.config={...C,entities:[...C.entities??[]]},this.requestUpdate()}updateConfig(C){this.config={...this.config,...C};try{r1(this.config),this.error="",this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this.config}},bubbles:!0,composed:!0}))}catch(V){this.error=V instanceof Error?V.message:"Invalid configuration"}this.requestUpdate()}entities(){return this.config.entities.map(C=>typeof C=="string"?{entity_id:C}:C)}entity(C,V){let L=this.entities().map((M,r)=>r===C?{...M,...V}:M);this.updateConfig({entities:L})}textField(C,V,L){return a`<label
      >${C}<input
        aria-label=${C}
        .value=${V}
        @change=${M=>L(M.target.value)}
    /></label>`}entityPicker(C,V,L,M,r){return a`<label class="entity-picker"
      >${C}<ha-entity-picker
        .hass=${this.hass}
        .label=${C}
        .value=${V||void 0}
        .includeDomains=${L}
        .includeEntities=${r}
        @value-changed=${t=>M(t.detail.value??"")}
      ></ha-entity-picker
    ></label>`}select(C,V,L,M){return a`<label
      >${C}<select
        aria-label=${C}
        .value=${V}
        @change=${r=>M(r.target.value)}
      >
        ${L.map(r=>a`<option value=${r}>${r}</option>`)}
      </select></label
    >`}preset(C,V){this.updateConfig({room_presets:(this.config.room_presets??[]).map((L,M)=>M===C?{...L,...V}:L)})}async addPlayers(){if(this.addingPlayers)return;let C=[...this.selectedPlayers],V=this.selectedArea;if(!(!C.length&&!V)){this.addingPlayers=!0,this.error="",this.requestUpdate();try{let L=C;if(!L.length){if(!this.hass)throw new Error("Home Assistant is not connected.");let[i,d]=await Promise.all([this.hass.callWS({type:"config/entity_registry/list"}),this.hass.callWS({type:"config/device_registry/list"})]);if(L=p2(V,i,d,this.hass.states),!L.length)throw new Error("No player entities were found in this area.")}let M=this.entities(),r=new Set(M.map(i=>i.entity_id)),t=[...new Set(L)].filter(i=>!r.has(i)).map(i=>({entity_id:i}));if(!t.length)throw new Error("These players are already configured.");this.updateConfig({entities:[...M,...t]}),this.selectedArea="",this.selectedPlayers=[]}catch(L){this.error=L instanceof Error?L.message:"Could not add players."}finally{this.addingPlayers=!1,this.requestUpdate()}}}render(){let C=this.entities();return a`<p>
        Choose an area or one or more player entities to add rooms.
      </p>
      ${this.error?a`<p class="error" role="alert">${this.error}</p>`:""}
      <fieldset>
        <legend>Add players</legend>
        <div class="grid">
          <label class="selector-field">
            <span>Area</span>
            <ha-selector
              .hass=${this.hass}
              .selector=${{area:{}}}
              .value=${this.selectedArea||void 0}
              .label=${""}
              .required=${!1}
              @value-changed=${V=>{this.selectedArea=V.detail.value??"",this.requestUpdate()}}
            ></ha-selector>
          </label>
          <label class="selector-field">
            <span>Player entities</span>
            <ha-selector
              .hass=${this.hass}
              .selector=${{entity:{filter:{domain:"media_player"},multiple:!0}}}
              .value=${this.selectedPlayers}
              .label=${""}
              .required=${!1}
              @value-changed=${V=>{this.selectedPlayers=Array.isArray(V.detail.value)?V.detail.value:[],this.requestUpdate()}}
            ></ha-selector>
          </label>
        </div>
        <p>
          Selected players take priority. Leave them empty to add every player
          in the area.
        </p>
        <button
          ?disabled=${this.addingPlayers||!this.selectedArea&&!this.selectedPlayers.length}
          @click=${this.addPlayers}
        >
          ${this.addingPlayers?"Adding\u2026":"Add players"}
        </button>
      </fieldset>
      ${C.map((V,L)=>a`<fieldset>
            <legend>
              Room ${L+1}:
              ${V.name||this.hass?.states[V.entity_id]?.attributes.friendly_name||V.entity_id}
            </legend>
            <div class="grid">
              <p class="player-id">${V.entity_id}</p>
              ${this.textField("Room name",V.name??"",M=>this.entity(L,{name:M}))}${this.entityPicker("Volume entity",V.volume_entity,["media_player"],M=>this.entity(L,{volume_entity:M||void 0}))}${this.entityPicker("Favorite button entity",V.favorite_entity,["button"],M=>this.entity(L,{favorite_entity:M||void 0}))}${this.textField("Integration entry ID",V.config_entry_id??"",M=>this.entity(L,{config_entry_id:M}))}<label
                ><span
                  >Maximum volume:
                  <output id=${`max-volume-${L}`}
                    >${V.max_volume??100}%</output
                  ></span
                ><input
                  aria-label=${`Maximum volume for ${V.name||V.entity_id}`}
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(V.max_volume??100)}
                  @input=${M=>{let r=M.target,t=this.shadowRoot?.getElementById(`max-volume-${L}`);t&&(t.textContent=`${r.value}%`)}}
                  @change=${M=>this.entity(L,{max_volume:Number(M.target.value)})}
              /></label>
            </div>
            <button
              ?disabled=${L===0}
              @click=${()=>{let M=[...C];[M[L-1],M[L]]=[M[L],M[L-1]],this.updateConfig({entities:M})}}
            >
              Move up</button
            ><button
              ?disabled=${L===C.length-1}
              @click=${()=>{let M=[...C];[M[L+1],M[L]]=[M[L],M[L+1]],this.updateConfig({entities:M})}}
            >
              Move down</button
            ><button
              @click=${()=>this.updateConfig({entities:C.filter((M,r)=>L!==r)})}
            >
              Remove room
            </button>
          </fieldset>`)}
      <div class="grid">
        ${this.entityPicker("Default player",this.config.default_player,["media_player"],V=>this.updateConfig({default_player:V||void 0}),C.map(V=>V.entity_id).filter(Boolean))}${this.select("Layout",this.config.layout??"auto",["auto","compact","standard","expanded"],V=>this.updateConfig({layout:V}))}${this.select("Artwork size",this.config.artwork_size??"medium",["small","medium","large"],V=>this.updateConfig({artwork_size:V}))}${this.select("Queue extension",this.config.extension??"auto",["auto","off"],V=>this.updateConfig({extension:V}))}${this.textField("Default integration entry ID",this.config.config_entry_id??"",V=>this.updateConfig({config_entry_id:V||void 0}))}
      </div>
      <fieldset>
        <legend>Appearance</legend>
        ${["metadata","artwork_accent"].map(V=>a`<label class="check"><input type="checkbox" .checked=${this.config[V]??V==="metadata"} @change=${L=>this.updateConfig({[V]:L.target.checked})} />${V==="metadata"?"Show metadata":"Use artwork accent colors"}</label>`)}
      </fieldset>
      <fieldset>
        <legend>Search</legend>
        <label class="check">
          <input
            type="checkbox"
            .checked=${this.config.advanced_search??!1}
            @change=${V=>this.updateConfig({advanced_search:V.target.checked})}
          />
          Show advanced media type and collection filters
        </label>
      </fieldset>
      <fieldset>
        <legend>Visible sections</legend>
        ${["browse","queue","rooms"].map(V=>a`<label class="check"
              ><input
                type="checkbox"
                .checked=${(this.config.sections??["browse","queue","rooms"]).includes(V)}
                @change=${L=>{let M=this.config.sections??["browse","queue","rooms"];this.updateConfig({sections:L.target.checked?[...M,V]:M.filter(r=>r!==V)})}}
              />${V}</label
            >`)}
      </fieldset>
      <fieldset>
        <legend>Room presets</legend>
        ${(this.config.room_presets??[]).map((V,L)=>a`<fieldset>
              ${this.textField("Preset name",V.name,M=>this.preset(L,{name:M}))}${this.entityPicker("Preset leader",V.leader,["media_player"],M=>this.preset(L,{leader:M}),C.map(M=>M.entity_id).filter(Boolean))}${C.map(M=>a`<label class="check"><input type="checkbox" .checked=${V.members.includes(M.entity_id)} @change=${r=>this.preset(L,{members:r.target.checked?[...V.members,M.entity_id]:V.members.filter(t=>t!==M.entity_id)})} />${M.name||M.entity_id}</label>`)}<button
                @click=${()=>this.updateConfig({room_presets:this.config.room_presets?.filter((M,r)=>L!==r)})}
              >
                Remove preset
              </button>
            </fieldset>`)}<button
          ?disabled=${!C.length}
          @click=${()=>this.updateConfig({room_presets:[...this.config.room_presets??[],{name:"New preset",leader:C[0].entity_id,members:C.map(V=>V.entity_id)}]})}
        >
          Add preset
        </button>
      </fieldset>`}};$.properties={hass:{attribute:!1}},$.styles=w`
    :host {
      display: block;
      color: var(--primary-text-color);
      font-family: inherit;
    }
    * {
      box-sizing: border-box;
    }
    fieldset {
      border: 1px solid var(--divider-color, #ddd);
      border-radius: 8px;
      margin: 12px 0;
      padding: 12px;
      min-width: 0;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px;
      align-items: start;
    }
    label {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin: 8px 0;
      font-size: 0.9rem;
    }
    input,
    select,
    button {
      font: inherit;
      color: inherit;
      min-height: 44px;
      border: 1px solid var(--divider-color, #ddd);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      padding: 8px;
      width: 100%;
    }
    ha-entity-picker,
    ha-selector {
      display: block;
      min-width: 0;
      width: 100%;
    }
    .selector-field > span {
      display: block;
      line-height: 1.5;
    }
    button {
      cursor: pointer;
      width: auto;
      margin: 4px;
    }
    input[type="checkbox"] {
      min-height: 24px;
      width: 24px;
    }
    input[type="range"] {
      border: 0;
      padding: 0;
    }
    .player-id {
      font-weight: 600;
      overflow-wrap: anywhere;
    }
    .check {
      flex-direction: row;
      align-items: center;
    }
    .error {
      color: var(--error-color, #b00020);
    }
    p {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }
    :focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
    }
  `;customElements.get("ha-music-assistant-card")||customElements.define("ha-music-assistant-card",C1);customElements.get("ha-music-assistant-card-editor")||customElements.define("ha-music-assistant-card-editor",$);window.customCards??(window.customCards=[]);window.customCards.some(e=>e.type==="ha-music-assistant-card")||window.customCards.push({type:"ha-music-assistant-card",name:"Music Assistant",description:"Music discovery, playback, and multiroom controls.",preview:!0});
