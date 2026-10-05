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
 */var C1=globalThis,H1=C1.ShadowRoot&&(C1.ShadyCSS===void 0||C1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t1=Symbol(),c1=new WeakMap,$=class{constructor(H,C,V){if(this._$cssResult$=!0,V!==t1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=H,this.t=C}get styleSheet(){let H=this.o,C=this.t;if(H1&&H===void 0){let V=C!==void 0&&C.length===1;V&&(H=c1.get(C)),H===void 0&&((this.o=H=new CSSStyleSheet).replaceSync(this.cssText),V&&c1.set(C,H))}return H}toString(){return this.cssText}},h1=e=>new $(typeof e=="string"?e:e+"",void 0,t1),b=(e,...H)=>{let C=e.length===1?e[0]:H.reduce((V,L,M)=>V+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(L)+e[M+1],e[0]);return new $(C,e,t1)},O1=(e,H)=>{if(H1)e.adoptedStyleSheets=H.map(C=>C instanceof CSSStyleSheet?C:C.styleSheet);else for(let C of H){let V=document.createElement("style"),L=C1.litNonce;L!==void 0&&V.setAttribute("nonce",L),V.textContent=C.cssText,e.appendChild(V)}},i1=H1?e=>e:e=>e instanceof CSSStyleSheet?(H=>{let C="";for(let V of H.cssRules)C+=V.cssText;return h1(C)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{is:a2,defineProperty:A2,getOwnPropertyDescriptor:d2,getOwnPropertyNames:p2,getOwnPropertySymbols:m2,getPrototypeOf:n2}=Object,k=globalThis,g1=k.trustedTypes,v2=g1?g1.emptyScript:"",l2=k.reactiveElementPolyfillSupport,W=(e,H)=>e,o1={toAttribute(e,H){switch(H){case Boolean:e=e?v2:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,H){let C=e;switch(H){case Boolean:C=e!==null;break;case Number:C=e===null?null:Number(e);break;case Object:case Array:try{C=JSON.parse(e)}catch{C=null}}return C}},k1=(e,H)=>!a2(e,H),f1={attribute:!0,type:String,converter:o1,reflect:!1,useDefault:!1,hasChanged:k1};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k.litPropertyMetadata??(k.litPropertyMetadata=new WeakMap);var c=class extends HTMLElement{static addInitializer(H){this._$Ei(),(this.l??(this.l=[])).push(H)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(H,C=f1){if(C.state&&(C.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(H)&&((C=Object.create(C)).wrapped=!0),this.elementProperties.set(H,C),!C.noAccessor){let V=Symbol(),L=this.getPropertyDescriptor(H,V,C);L!==void 0&&A2(this.prototype,H,L)}}static getPropertyDescriptor(H,C,V){let{get:L,set:M}=d2(this.prototype,H)??{get(){return this[C]},set(r){this[C]=r}};return{get:L,set(r){let i=L?.call(this);M?.call(this,r),this.requestUpdate(H,i,V)},configurable:!0,enumerable:!0}}static getPropertyOptions(H){return this.elementProperties.get(H)??f1}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;let H=n2(this);H.finalize(),H.l!==void 0&&(this.l=[...H.l]),this.elementProperties=new Map(H.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){let C=this.properties,V=[...p2(C),...m2(C)];for(let L of V)this.createProperty(L,C[L])}let H=this[Symbol.metadata];if(H!==null){let C=litPropertyMetadata.get(H);if(C!==void 0)for(let[V,L]of C)this.elementProperties.set(V,L)}this._$Eh=new Map;for(let[C,V]of this.elementProperties){let L=this._$Eu(C,V);L!==void 0&&this._$Eh.set(L,C)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(H){let C=[];if(Array.isArray(H)){let V=new Set(H.flat(1/0).reverse());for(let L of V)C.unshift(i1(L))}else H!==void 0&&C.push(i1(H));return C}static _$Eu(H,C){let V=C.attribute;return V===!1?void 0:typeof V=="string"?V:typeof H=="string"?H.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(H=>this.enableUpdating=H),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(H=>H(this))}addController(H){(this._$EO??(this._$EO=new Set)).add(H),this.renderRoot!==void 0&&this.isConnected&&H.hostConnected?.()}removeController(H){this._$EO?.delete(H)}_$E_(){let H=new Map,C=this.constructor.elementProperties;for(let V of C.keys())this.hasOwnProperty(V)&&(H.set(V,this[V]),delete this[V]);H.size>0&&(this._$Ep=H)}createRenderRoot(){let H=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return O1(H,this.constructor.elementStyles),H}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(H=>H.hostConnected?.())}enableUpdating(H){}disconnectedCallback(){this._$EO?.forEach(H=>H.hostDisconnected?.())}attributeChangedCallback(H,C,V){this._$AK(H,V)}_$ET(H,C){let V=this.constructor.elementProperties.get(H),L=this.constructor._$Eu(H,V);if(L!==void 0&&V.reflect===!0){let M=(V.converter?.toAttribute!==void 0?V.converter:o1).toAttribute(C,V.type);this._$Em=H,M==null?this.removeAttribute(L):this.setAttribute(L,M),this._$Em=null}}_$AK(H,C){let V=this.constructor,L=V._$Eh.get(H);if(L!==void 0&&this._$Em!==L){let M=V.getPropertyOptions(L),r=typeof M.converter=="function"?{fromAttribute:M.converter}:M.converter?.fromAttribute!==void 0?M.converter:o1;this._$Em=L;let i=r.fromAttribute(C,M.type);this[L]=i??this._$Ej?.get(L)??i,this._$Em=null}}requestUpdate(H,C,V,L=!1,M){if(H!==void 0){let r=this.constructor;if(L===!1&&(M=this[H]),V??(V=r.getPropertyOptions(H)),!((V.hasChanged??k1)(M,C)||V.useDefault&&V.reflect&&M===this._$Ej?.get(H)&&!this.hasAttribute(r._$Eu(H,V))))return;this.C(H,C,V)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(H,C,{useDefault:V,reflect:L,wrapped:M},r){V&&!(this._$Ej??(this._$Ej=new Map)).has(H)&&(this._$Ej.set(H,r??C??this[H]),M!==!0||r!==void 0)||(this._$AL.has(H)||(this.hasUpdated||V||(C=void 0),this._$AL.set(H,C)),L===!0&&this._$Em!==H&&(this._$Eq??(this._$Eq=new Set)).add(H))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(C){Promise.reject(C)}let H=this.scheduleUpdate();return H!=null&&await H,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[L,M]of this._$Ep)this[L]=M;this._$Ep=void 0}let V=this.constructor.elementProperties;if(V.size>0)for(let[L,M]of V){let{wrapped:r}=M,i=this[L];r!==!0||this._$AL.has(L)||i===void 0||this.C(L,void 0,M,i)}}let H=!1,C=this._$AL;try{H=this.shouldUpdate(C),H?(this.willUpdate(C),this._$EO?.forEach(V=>V.hostUpdate?.()),this.update(C)):this._$EM()}catch(V){throw H=!1,this._$EM(),V}H&&this._$AE(C)}willUpdate(H){}_$AE(H){this._$EO?.forEach(C=>C.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(H)),this.updated(H)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(H){return!0}update(H){this._$Eq&&(this._$Eq=this._$Eq.forEach(C=>this._$ET(C,this[C]))),this._$EM()}updated(H){}firstUpdated(H){}};c.elementStyles=[],c.shadowRootOptions={mode:"open"},c[W("elementProperties")]=new Map,c[W("finalized")]=new Map,l2?.({ReactiveElement:c}),(k.reactiveElementVersions??(k.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I=globalThis,y1=e=>e,V1=I.trustedTypes,b1=V1?V1.createPolicy("lit-html",{createHTML:e=>e}):void 0,R1="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,E1="?"+y,x2=`<${E1}>`,P=document,Q=()=>P.createComment(""),U=e=>e===null||typeof e!="object"&&typeof e!="function",v1=Array.isArray,Z2=e=>v1(e)||typeof e?.[Symbol.iterator]=="function",a1=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w1=/-->/g,B1=/>/g,w=RegExp(`>|${a1}(?:([^\\s"'>=/]+)(${a1}*=${a1}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),P1=/'/g,T1=/"/g,D1=/^(?:script|style|textarea|title)$/i,l1=e=>(H,...C)=>({_$litType$:e,strings:H,values:C}),t=l1(1),y2=l1(2),b2=l1(3),T=Symbol.for("lit-noChange"),a=Symbol.for("lit-nothing"),F1=new WeakMap,B=P.createTreeWalker(P,129);function _1(e,H){if(!v1(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return b1!==void 0?b1.createHTML(H):H}var s2=(e,H)=>{let C=e.length-1,V=[],L,M=H===2?"<svg>":H===3?"<math>":"",r=N;for(let i=0;i<C;i++){let o=e[i],d,p,m=-1,x=0;for(;x<o.length&&(r.lastIndex=x,p=r.exec(o),p!==null);)x=r.lastIndex,r===N?p[1]==="!--"?r=w1:p[1]!==void 0?r=B1:p[2]!==void 0?(D1.test(p[2])&&(L=RegExp("</"+p[2],"g")),r=w):p[3]!==void 0&&(r=w):r===w?p[0]===">"?(r=L??N,m=-1):p[1]===void 0?m=-2:(m=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?w:p[3]==='"'?T1:P1):r===T1||r===P1?r=w:r===w1||r===B1?r=N:(r=w,L=void 0);let s=r===w&&e[i+1].startsWith("/>")?" ":"";M+=r===N?o+x2:m>=0?(V.push(d),o.slice(0,m)+R1+o.slice(m)+y+s):o+y+(m===-2?i:s)}return[_1(e,M+(e[C]||"<?>")+(H===2?"</svg>":H===3?"</math>":"")),V]},G=class e{constructor({strings:H,_$litType$:C},V){let L;this.parts=[];let M=0,r=0,i=H.length-1,o=this.parts,[d,p]=s2(H,C);if(this.el=e.createElement(d,V),B.currentNode=this.el.content,C===2||C===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(L=B.nextNode())!==null&&o.length<i;){if(L.nodeType===1){if(L.hasAttributes())for(let m of L.getAttributeNames())if(m.endsWith(R1)){let x=p[r++],s=L.getAttribute(m).split(y),f=/([.?@])?(.*)/.exec(x);o.push({type:1,index:M,name:f[2],strings:s,ctor:f[1]==="."?d1:f[1]==="?"?p1:f[1]==="@"?m1:E}),L.removeAttribute(m)}else m.startsWith(y)&&(o.push({type:6,index:M}),L.removeAttribute(m));if(D1.test(L.tagName)){let m=L.textContent.split(y),x=m.length-1;if(x>0){L.textContent=V1?V1.emptyScript:"";for(let s=0;s<x;s++)L.append(m[s],Q()),B.nextNode(),o.push({type:2,index:++M});L.append(m[x],Q())}}}else if(L.nodeType===8)if(L.data===E1)o.push({type:2,index:M});else{let m=-1;for(;(m=L.data.indexOf(y,m+1))!==-1;)o.push({type:7,index:M}),m+=y.length-1}M++}}static createElement(H,C){let V=P.createElement("template");return V.innerHTML=H,V}};function R(e,H,C=e,V){if(H===T)return H;let L=V!==void 0?C._$Co?.[V]:C._$Cl,M=U(H)?void 0:H._$litDirective$;return L?.constructor!==M&&(L?._$AO?.(!1),M===void 0?L=void 0:(L=new M(e),L._$AT(e,C,V)),V!==void 0?(C._$Co??(C._$Co=[]))[V]=L:C._$Cl=L),L!==void 0&&(H=R(e,L._$AS(e,H.values),L,V)),H}var A1=class{constructor(H,C){this._$AV=[],this._$AN=void 0,this._$AD=H,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(H){let{el:{content:C},parts:V}=this._$AD,L=(H?.creationScope??P).importNode(C,!0);B.currentNode=L;let M=B.nextNode(),r=0,i=0,o=V[0];for(;o!==void 0;){if(r===o.index){let d;o.type===2?d=new q(M,M.nextSibling,this,H):o.type===1?d=new o.ctor(M,o.name,o.strings,this,H):o.type===6&&(d=new n1(M,this,H)),this._$AV.push(d),o=V[++i]}r!==o?.index&&(M=B.nextNode(),r++)}return B.currentNode=P,L}p(H){let C=0;for(let V of this._$AV)V!==void 0&&(V.strings!==void 0?(V._$AI(H,V,C),C+=V.strings.length-2):V._$AI(H[C])),C++}},q=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(H,C,V,L){this.type=2,this._$AH=a,this._$AN=void 0,this._$AA=H,this._$AB=C,this._$AM=V,this.options=L,this._$Cv=L?.isConnected??!0}get parentNode(){let H=this._$AA.parentNode,C=this._$AM;return C!==void 0&&H?.nodeType===11&&(H=C.parentNode),H}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(H,C=this){H=R(this,H,C),U(H)?H===a||H==null||H===""?(this._$AH!==a&&this._$AR(),this._$AH=a):H!==this._$AH&&H!==T&&this._(H):H._$litType$!==void 0?this.$(H):H.nodeType!==void 0?this.T(H):Z2(H)?this.k(H):this._(H)}O(H){return this._$AA.parentNode.insertBefore(H,this._$AB)}T(H){this._$AH!==H&&(this._$AR(),this._$AH=this.O(H))}_(H){this._$AH!==a&&U(this._$AH)?this._$AA.nextSibling.data=H:this.T(P.createTextNode(H)),this._$AH=H}$(H){let{values:C,_$litType$:V}=H,L=typeof V=="number"?this._$AC(H):(V.el===void 0&&(V.el=G.createElement(_1(V.h,V.h[0]),this.options)),V);if(this._$AH?._$AD===L)this._$AH.p(C);else{let M=new A1(L,this),r=M.u(this.options);M.p(C),this.T(r),this._$AH=M}}_$AC(H){let C=F1.get(H.strings);return C===void 0&&F1.set(H.strings,C=new G(H)),C}k(H){v1(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,V,L=0;for(let M of H)L===C.length?C.push(V=new e(this.O(Q()),this.O(Q()),this,this.options)):V=C[L],V._$AI(M),L++;L<C.length&&(this._$AR(V&&V._$AB.nextSibling,L),C.length=L)}_$AR(H=this._$AA.nextSibling,C){for(this._$AP?.(!1,!0,C);H!==this._$AB;){let V=y1(H).nextSibling;y1(H).remove(),H=V}}setConnected(H){this._$AM===void 0&&(this._$Cv=H,this._$AP?.(H))}},E=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(H,C,V,L,M){this.type=1,this._$AH=a,this._$AN=void 0,this.element=H,this.name=C,this._$AM=L,this.options=M,V.length>2||V[0]!==""||V[1]!==""?(this._$AH=Array(V.length-1).fill(new String),this.strings=V):this._$AH=a}_$AI(H,C=this,V,L){let M=this.strings,r=!1;if(M===void 0)H=R(this,H,C,0),r=!U(H)||H!==this._$AH&&H!==T,r&&(this._$AH=H);else{let i=H,o,d;for(H=M[0],o=0;o<M.length-1;o++)d=R(this,i[V+o],C,o),d===T&&(d=this._$AH[o]),r||(r=!U(d)||d!==this._$AH[o]),d===a?H=a:H!==a&&(H+=(d??"")+M[o+1]),this._$AH[o]=d}r&&!L&&this.j(H)}j(H){H===a?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,H??"")}},d1=class extends E{constructor(){super(...arguments),this.type=3}j(H){this.element[this.name]=H===a?void 0:H}},p1=class extends E{constructor(){super(...arguments),this.type=4}j(H){this.element.toggleAttribute(this.name,!!H&&H!==a)}},m1=class extends E{constructor(H,C,V,L,M){super(H,C,V,L,M),this.type=5}_$AI(H,C=this){if((H=R(this,H,C,0)??a)===T)return;let V=this._$AH,L=H===a&&V!==a||H.capture!==V.capture||H.once!==V.once||H.passive!==V.passive,M=H!==a&&(V===a||L);L&&this.element.removeEventListener(this.name,this,V),M&&this.element.addEventListener(this.name,this,H),this._$AH=H}handleEvent(H){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,H):this._$AH.handleEvent(H)}},n1=class{constructor(H,C,V){this.element=H,this.type=6,this._$AN=void 0,this._$AM=C,this.options=V}get _$AU(){return this._$AM._$AU}_$AI(H){R(this,H)}};var u2=I.litHtmlPolyfillSupport;u2?.(G,q),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.3.3");var $1=(e,H,C)=>{let V=C?.renderBefore??H,L=V._$litPart$;if(L===void 0){let M=C?.renderBefore??null;V._$litPart$=L=new q(H.insertBefore(Q(),M),M,void 0,C??{})}return L._$AI(e),L};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z=globalThis,S=class extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var C;let H=super.createRenderRoot();return(C=this.renderOptions).renderBefore??(C.renderBefore=H.firstChild),H}update(H){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(H),this._$Do=$1(C,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};S._$litElement$=!0,S.finalized=!0,z.litElementHydrateSupport?.({LitElement:S});var S2=z.litElementPolyfillSupport;S2?.({LitElement:S});(z.litElementVersions??(z.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W1="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z";var N1="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z";var I1="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var Q1="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";var U1="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z";var G1="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z";var q1="M2.4038 7.01172C2.47451 4.39542 4.45441 2.41552 7 2.41552V1.00131C3.53517 0.9306 0.848167 3.61761 0.989589 7.01172L2.4038 7.01172Z M7 5.38537V3.97116C5.23223 4.04187 3.95944 5.31466 3.95944 7.01172H5.37365C5.51507 6.16319 6.15147 5.52679 7 5.38537Z M17 2.41552C19.5456 2.41552 21.5255 4.39542 21.5962 7.01172L23.0104 7.01172C23.1518 3.61761 20.4648 0.9306 17 1.00131V2.41552Z M17 3.97116V5.38537C17.8485 5.52679 18.4849 6.16319 18.6263 7.01172H20.0406C20.0406 5.31466 18.7678 4.04187 17 3.97116Z M19 20V12H22L12 3L2 12H5V20H19ZM12 5.7L17 10.2V18H7V10.2L12 5.7Z";var z1="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";var K1="M14,19H18V5H14M6,19H10V5H6V19Z";var x1="M8,5.14V19.14L19,12.14L8,5.14Z";var j1="M15,6V8H3V6H15M15,10V12H3V10H15M3,16V14H11V16H3M17,6H22V8H19V17A3,3 0 0,1 16,20A3,3 0 0,1 13,17A3,3 0 0,1 16,14C16.35,14 16.69,14.07 17,14.18V6M16,16A1,1 0 0,0 15,17A1,1 0 0,0 16,18A1,1 0 0,0 17,17A1,1 0 0,0 16,16Z";var X1="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z";var Y1="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z";var J1="M13,15V9H12L10,10V11H11.5V15M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z";var C2="M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z";var H2="M16,18H18V6H16M6,18L14.5,12L6,6V18Z";var V2="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z";var L2="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var M2="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var K="custom:ha-music-assistant-card",r2=/^media_player\.[a-z0-9_]+$/;function L1(e){if(!e||!Array.isArray(e.entities)||!e.entities.length)throw new Error("Configure at least one Music Assistant player.");let H=e.entities.map(r=>typeof r=="string"?{entity_id:r}:{...r}),C=new Set;for(let r of H){if(!r2.test(r.entity_id))throw new Error("Players must use media_player entity IDs.");if(C.has(r.entity_id))throw new Error("Each player must appear only once.");if(C.add(r.entity_id),r.volume_entity&&!r2.test(r.volume_entity))throw new Error("Volume entity must be a media_player.");if(r.favorite_entity&&!/^button\.[a-z0-9_]+$/.test(r.favorite_entity))throw new Error("Favorite entity must be a button.");if(r.max_volume!==void 0&&(!Number.isFinite(r.max_volume)||r.max_volume<0||r.max_volume>100))throw new Error("Volume ceilings must be between 0 and 100.")}if(e.default_player&&!C.has(e.default_player))throw new Error("Default player must be in the player list.");let V=e.layout??"auto";if(!["auto","compact","standard","expanded"].includes(V))throw new Error("Unknown layout.");let L=e.sections??["browse","queue","rooms"];if(!Array.isArray(L)||L.some(r=>!["browse","queue","rooms"].includes(r))||new Set(L).size!==L.length)throw new Error("Sections must contain unique browse, queue, or rooms values.");if(e.extension&&!["auto","off"].includes(e.extension))throw new Error("Extension must be auto or off.");if(e.artwork_size&&!["small","medium","large"].includes(e.artwork_size))throw new Error("Unknown artwork size.");for(let r of["metadata","artwork_accent"])if(e[r]!==void 0&&typeof e[r]!="boolean")throw new Error(`${r} must be a boolean.`);let M=e.room_presets??[];if(!Array.isArray(M))throw new Error("Room presets must be a list.");for(let r of M)if(!r||typeof r.name!="string"||!r.name.trim()||!C.has(r.leader)||!Array.isArray(r.members)||!r.members.length||r.members.some(i=>!C.has(i)))throw new Error("Room presets require a name, configured leader, and configured members.");return{...e,type:K,entities:H,layout:V,sections:L,artwork_size:e.artwork_size??"medium",metadata:e.metadata??!0,artwork_accent:e.artwork_accent??!1,extension:e.extension??"auto",room_presets:M.map(r=>({...r,members:[...new Set(r.members)]}))}}function e2(e){return e?.layout==="compact"?{columns:6,rows:2,min_columns:6,min_rows:2}:{columns:12,rows:e?.layout==="expanded"?8:6,min_columns:6,min_rows:4}}function l(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)?e:{}}function A(e){return typeof e=="string"?e:""}function Z(e,H=0){return typeof e=="number"&&Number.isFinite(e)?e:H}function j(e){return Array.isArray(e)?e.filter(H=>typeof H=="string"):[]}function h(e){let H=A(e).trim();if(!(!H||[...H].some(C=>C.charCodeAt(0)<=32||C==="\\"))){if(H.startsWith("/")&&!H.startsWith("//"))return H;try{let C=new URL(H);if(["http:","https:"].includes(C.protocol)&&!C.username&&!C.password)return C.href}catch{}}}function O(e){let H=l(e),C={...H,...l(H.media_item)},V=l(C.metadata),L=l(C.album),M=Array.isArray(C.artists)?C.artists.map(S1=>A(l(S1).name)||A(S1)).filter(Boolean).join(", "):A(C.artist)||A(C.media_artist),r=Array.isArray(V.images)?V.images:[],i=h(C.media_image)??h(C.image)??h(C.image_url)??h(l(C.image).path)??h(C.thumbnail)??h(l(r[0]).path),o=l(C.audio_format),d=l(H.streamdetails),p={...l(d.audio_format),...l(H.stream_details)},m=A(o.content_type)||A(p.content_type),x=Z(o.sample_rate)||Z(p.sample_rate),s=Z(o.bit_depth)||Z(p.bit_depth),f=A(C.uri)||A(C.media_content_id);return{id:A(H.queue_item_id)||f||A(C.item_id),uri:f,name:A(C.name)||A(C.title)||A(C.media_title)||"Unknown title",type:A(C.media_type)||A(C.media_content_type)||"track",artist:M,album:A(L.name)||A(C.album)||A(C.media_album_name),image:i,provider:A(C.provider)||A(p.provider)||f.split("://")[0],duration:Z(C.duration),description:A(V.description)||A(C.description),quality:[m,x?`${x/1e3} kHz`:"",s?`${s}-bit`:""].filter(Boolean).join(" \xB7 "),favorite:typeof C.favorite=="boolean"?C.favorite:void 0,queueId:A(H.queue_item_id)||void 0,raw:C}}function F(e){if(!Array.isArray(e)||e.some(H=>H===null||typeof H!="object"||Array.isArray(H)))throw new Error("Music Assistant returned an invalid item list.");return e.map(O)}var n={pause:1,seek:2,volume:4,mute:8,previous:16,next:32,playMedia:512,clear:8192,play:16384,shuffle:32768,group:524288,repeat:262144};function u(e,H){return(e&H)===H}function g(e,H,C=Date.now()){let V=e?.states[H.entity_id],L=V?.attributes??{},M=e?.states[H.volume_entity||H.entity_id]?.attributes??{},r=Z(L.media_duration),i=Date.parse(A(L.media_position_updated_at)),o=V?.state==="playing"&&Number.isFinite(i)?Math.max(0,(C-i)/1e3):0;return{id:H.entity_id,name:H.name||A(L.friendly_name)||H.entity_id,available:!!V&&!["unavailable","unknown"].includes(V.state)&&e?.connection?.connected!==!1,state:V?.state??"unavailable",features:Z(L.supported_features),title:A(L.media_title),artist:A(L.media_artist),album:A(L.media_album_name),image:h(L.entity_picture),position:Math.min(r||1/0,Math.max(0,Z(L.media_position)+o)),duration:r,volume:Z(M.volume_level),muted:M.is_volume_muted===!0,members:j(L.group_members),shuffle:L.shuffle===!0,repeat:A(L.repeat)||"off"}}function t2(e,H){return Math.max(0,Math.min(Z(e),H.max_volume??100))/100}function Z1(e){let H=Math.max(0,Math.floor(e));return`${Math.floor(H/60)}:${String(H%60).padStart(2,"0")}`}var M1=class{constructor(H,C){this.hass=H;this.config=C;this.entries=new Map}has(H,C){return!!this.hass.services[H]?.[C]}async response(H,C,V,L){let M=l(await this.hass.callWS({type:"call_service",domain:H,service:C,service_data:V,...L?{target:{entity_id:L}}:{},return_response:!0}));if(!("response"in M)||M.response===null||typeof M.response!="object")throw new Error(`${C} returned no response.`);return l(M.response)}entity(H){return this.config.entities.find(C=>C.entity_id===H)??{entity_id:H}}async entry(H){let C=this.entity(H).config_entry_id||this.config.config_entry_id;if(C)return C;let V=this.entries.get(H);if(V)return V;let L=l(await this.hass.callWS({type:"config/entity_registry/get",entity_id:H})),M=A(L.config_entry_id);if(!M||L.platform&&L.platform!=="music_assistant")throw new Error("Select a Music Assistant player or set its integration entry ID.");return this.entries.set(H,M),M}assertAvailable(H){if(!g(this.hass,this.entity(H)).available)throw new Error("This room is unavailable.")}async media(H,C,V={}){if(this.assertAvailable(H),!this.has("media_player",C))throw new Error("This action is unavailable.");let L={media_play:n.play,media_pause:n.pause,media_seek:n.seek,media_previous_track:n.previous,media_next_track:n.next,volume_set:n.volume,volume_mute:n.mute,shuffle_set:n.shuffle,repeat_set:n.repeat,clear_playlist:n.clear,join:n.group,unjoin:n.group};if(L[C]&&!u(Z(this.hass.states[H]?.attributes.supported_features),L[C]))throw new Error("This player does not support that action.");return this.hass.callService("media_player",C,V,{entity_id:H})}async browse(H,C){let V=await this.entry(H);if(C.text.trim()&&["all","library"].includes(C.source)){let r=await this.response("music_assistant","search",{config_entry_id:V,name:C.text.trim(),media_type:[C.type],limit:50,library_only:C.source!=="all"}),i=C.type==="radio"?"radio":`${C.type}s`;return{items:F(r[i]),hasMore:!1}}let L=await this.response("music_assistant","get_library",{config_entry_id:V,media_type:C.type,limit:25,offset:C.offset,...C.source==="favorites"?{favorite:!0}:{},...C.text.trim()?{search:C.text.trim()}:{},order_by:C.source==="recent"?"last_played_desc":"name"}),M=F(L.items);return{items:M,hasMore:M.length===25}}async queue(H){let C=await this.response("music_assistant","get_queue",{},H),V=l(C[H]);if(!("current_item"in V))throw new Error("Queue details were not returned for this room.");return{kind:"partial",items:[V.current_item,V.next_item].filter(Boolean).map(O),hasMore:!1,offset:0}}async play(H,C,V){if(this.assertAvailable(H),!C.uri)throw new Error("This item has no playable URI.");if(!this.has("music_assistant","play_media")||!u(Z(this.hass.states[H]?.attributes.supported_features),n.playMedia))throw new Error("This player cannot play selected media.");return this.hass.callService("music_assistant","play_media",{media_id:C.uri,media_type:C.type,...V==="radio"?{radio_mode:!0}:{enqueue:V}},{entity_id:H})}async volume(H,C){let V=this.entity(H),L=V.volume_entity||H;if(!u(Z(this.hass.states[L]?.attributes.supported_features),n.volume))throw new Error("Volume control is unavailable.");return this.media(L,"volume_set",{volume_level:t2(C,{...V,max_volume:Math.min(V.max_volume??100,...this.config.entities.filter(M=>(M.volume_entity||M.entity_id)===L).map(M=>M.max_volume??100))})})}async groupVolume(H,C){let V=[...new Set([H,...j(this.hass.states[H]?.attributes.group_members)])],L=new Set,M=[];for(let r of V){let i=this.entity(r).volume_entity||r;if(!L.has(i)){L.add(i);try{await this.volume(r,C)}catch(o){M.push(`${this.entity(r).name||r}: ${D(o)}`)}}}if(M.length)throw new Error(M.join("; "))}async join(H,C){if(this.assertAvailable(H),!u(Z(this.hass.states[H]?.attributes.supported_features),n.group))throw new Error("This player does not support grouping.");let V=j(this.hass.states[H]?.attributes.group_members),L=[...new Set([...V,...C])].filter(r=>r!==H),M=await this.entry(H);for(let r of C)if(this.assertAvailable(r),await this.entry(r)!==M)throw new Error("Grouping requires rooms on the same Music Assistant server.");return this.media(H,"join",{group_members:L})}async preset(H,C){let V=j(this.hass.states[H]?.attributes.group_members),L=[];for(let M of[...new Set(C)].filter(r=>r!==H))try{await this.join(H,[...V,M]),V.push(M)}catch(r){L.push(`${this.entity(M).name||M}: ${D(r)}`)}if(L.length)throw new Error(L.join("; "))}async transfer(H,C){if(this.assertAvailable(H),this.assertAvailable(C),await this.entry(H)!==await this.entry(C))throw new Error("Queue transfer requires rooms on the same Music Assistant server.");return this.hass.callService("music_assistant","transfer_queue",{source_player:H,auto_play:!0},{entity_id:C})}async favoriteEntity(H){let C=this.entity(H).favorite_entity;if(C)return C;let V=l(await this.hass.callWS({type:"config/entity_registry/get",entity_id:H})),L=await this.hass.callWS({type:"config/entity_registry/list"});if(!(!Array.isArray(L)||!V.device_id))return L.find(M=>M.entity_id.startsWith("button.")&&M.device_id===V.device_id&&M.config_entry_id===V.config_entry_id&&(M.translation_key==="favorite_now_playing"||M.unique_id?.endsWith("_favorite_now_playing")))?.entity_id}async children(H,C){let V=l(await this.hass.callWS({type:"media_player/browse_media",entity_id:H,media_content_id:C.uri,media_content_type:C.type}));return F(V.children)}};function D(e){return e instanceof Error?e.message:A(l(e).message)||"The request failed. Please try again."}var s1=["play_queue_item","move_queue_item_up","move_queue_item_down","move_queue_item_next","remove_queue_item"],r1=class{constructor(H){this.native=H}async entry(H){if(this.native.config.extension==="off"||!this.native.has("mass_queue","get_queue_items"))return;let C=l(await this.native.hass.callWS({type:"mass_queue/get_info",entity_id:H}));return A(l(C.entries).mass_queue)||void 0}async queue(H,C=0){let V=await this.native.response("mass_queue","get_queue_items",{entity:H,offset:C,limit:50}),L=F(V[H]);return{kind:"complete",items:L,hasMore:L.length===50,offset:C}}async action(H,C,V){if(!s1.some(L=>L===C)||!this.native.has("mass_queue",C)||!V.queueId)throw new Error("This queue action is unavailable.");return this.native.assertAvailable(H),this.native.hass.callService("mass_queue",C,{entity:H,queue_item_id:V.queueId})}async details(H,C){let V=await this.native.response("mass_queue",`get_${C.type}`,{config_entry_id:H,uri:C.uri});return O(V)}async children(H,C,V=0){let L=C.type==="podcast"?"get_podcast_episodes":`get_${C.type}_tracks`,M=await this.native.response("mass_queue",L,{config_entry_id:H,uri:C.uri,...C.type==="podcast"?{}:{page:V}});return F(C.type==="podcast"?M.episodes:M.tracks)}};var u1=()=>({search:!1,library:!1,queue:!1,queueActions:[],details:[]}),e1=class{constructor(H,C){this.config=H;this.changed=C;this.items=[];this.hasMore=!1;this.capabilities=u1();this.error="";this.notice="";this.pending=!1;this.loading=!1;this.query={text:"",type:"track",source:"all",offset:0};this.generation=0;this.searchGeneration=0;this.queueGeneration=0;this.queueBusy=!1;this.visible=!1;this.connected=!1;this.cache=new Map;this.subscriptionToken=0;this.subscriptionPending=!1;this.subscriptionFailed=!1;this.active=H.default_player||H.entities[0].entity_id}get hass(){return this.native?.hass}updateHass(H){let C=this.hass,V=C?.states[this.active],L=C?.connection?.connected===!1&&H.connection?.connected!==!1;this.native?this.native.hass=H:(this.native=new M1(H,this.config),this.extension=new r1(this.native),this.connected&&this.discover()),(L||C&&C.services!==H.services)&&(this.discover(),this.cache.clear());let M=H.states[this.active];(V?.state!==M?.state||V?.attributes.media_content_id!==M?.attributes.media_content_id||V?.attributes.active_queue!==M?.attributes.active_queue)&&this.visible&&this.section==="queue"&&this.capabilities.queue&&this.refreshQueue(),this.changed()}connect(){this.connected=!0,this.native&&this.discover()}disconnect(){this.connected=!1,this.visible=!1,this.generation++,this.searchGeneration++,this.queueGeneration++,clearTimeout(this.debounce),clearInterval(this.interval),this.interval=void 0,this.stopSubscription()}async discover(){let H=++this.generation,C=this.native;if(!C)return;this.stopSubscription(),this.subscriptionFailed=!1;let V=u1();V.search=C.has("music_assistant","search"),V.library=C.has("music_assistant","get_library"),V.queue=C.has("music_assistant","get_queue");try{V.extensionEntry=await this.extension?.entry(this.active)}catch{}V.extensionEntry&&(V.queue=!0,V.queueActions=s1.filter(L=>C.has("mass_queue",L)),V.details=["album","artist","playlist","podcast"].filter(L=>C.has("mass_queue",`get_${L}`)));try{V.favoriteEntity=await C.favoriteEntity(this.active)}catch{V.favoriteEntity=C.entity(this.active).favorite_entity}H!==this.generation||!this.connected||(this.capabilities=V,this.changed(),this.updatePolling(),this.visible&&this.section==="queue"&&this.refreshQueue(),this.visible&&this.section==="browse"&&this.browse())}select(H){!this.config.entities.some(C=>C.entity_id===H)||H===this.active||this.pending||(this.active=H,this.generation++,this.searchGeneration++,this.queueGeneration++,this.queueBusy=!1,this.queue=void 0,this.items=[],this.error="",this.notice="",this.loading=!1,this.query={...this.query,offset:0},this.capabilities=u1(),clearTimeout(this.debounce),this.discover(),this.changed())}setVisible(H){let C=this.visible;this.visible=H&&this.connected,this.updatePolling(),this.visible&&!C&&(this.section==="queue"&&this.refreshQueue(),this.section==="browse"&&this.browse())}setSection(H){this.section=H,this.updatePolling(),this.visible&&H==="queue"&&this.refreshQueue(),this.visible&&H==="browse"&&this.browse(),this.changed()}updatePolling(){clearInterval(this.interval),this.interval=void 0,this.connected&&this.visible&&this.section==="queue"&&this.capabilities.queue&&(this.interval=setInterval(()=>{this.refreshQueue()},15e3)),this.interval&&this.capabilities.extensionEntry?this.subscribe():this.stopSubscription()}stopSubscription(){this.subscriptionToken++,this.unsubscribe?.(),this.unsubscribe=void 0,this.subscriptionPending=!1}async subscribe(){let H=this.hass?.connection;if(!H?.subscribeEvents||this.unsubscribe||this.subscriptionPending||this.subscriptionFailed)return;let C=++this.subscriptionToken;this.subscriptionPending=!0;try{let V=await H.subscribeEvents(L=>{let M=l(L.data),r=A(this.hass?.states[this.active]?.attributes.active_queue);this.visible&&this.section==="queue"&&M.type==="queue_updated"&&r&&l(M.data).queue_id===r&&this.refreshQueue()},"mass_queue");C!==this.subscriptionToken||!this.visible||!this.connected?V():this.unsubscribe=V}catch{C===this.subscriptionToken&&(this.subscriptionFailed=!0)}finally{C===this.subscriptionToken&&(this.subscriptionPending=!1)}}search(H){this.query={...this.query,...H,offset:0},this.searchGeneration++,clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.browse()},300),this.changed()}async browse(H=!1){let C=this.native;if(!C||!this.visible||!(this.query.text.trim()&&["all","library"].includes(this.query.source)?this.capabilities.search:this.capabilities.library))return;let V=++this.searchGeneration,L=this.generation,M=this.active,r={...this.query,offset:H?this.query.offset+25:0},i=JSON.stringify([M,r]);this.loading=!0,this.error="",this.changed();try{let o=this.cache.get(i),d=o&&Date.now()-o.time<6e4?o:await C.browse(M,r);if(V!==this.searchGeneration||L!==this.generation||!this.connected)return;this.items=H?[...this.items,...d.items]:d.items,this.hasMore=d.hasMore,this.query=r,this.cache.set(i,{...d,time:Date.now()}),this.cache.size>30&&this.cache.delete(this.cache.keys().next().value)}catch(o){V===this.searchGeneration&&L===this.generation&&(this.error=D(o),this.retryRead=()=>this.browse(H))}finally{V===this.searchGeneration&&(this.loading=!1,this.changed())}}async refreshQueue(H=!1){if(!this.native||!this.visible||!this.capabilities.queue||this.queueBusy||!g(this.hass,this.native.entity(this.active)).available)return;let C=++this.queueGeneration,V=this.generation,L=this.active,M=this.capabilities.extensionEntry,r=H&&this.queue?this.queue.offset+50:0;this.queueBusy=!0;try{let i=M?await this.extension.queue(L,r):await this.native.queue(L);if(C!==this.queueGeneration||V!==this.generation||!this.connected)return;this.queue=H&&this.queue?{...i,items:[...this.queue.items,...i.items]}:i}catch(i){C===this.queueGeneration&&V===this.generation&&(this.error=D(i),this.retryRead=()=>this.refreshQueue(H))}finally{C===this.queueGeneration&&(this.queueBusy=!1,this.changed())}}async run(H){if(!(this.pending||!this.native)){this.pending=!0,this.error="",this.notice="",this.retryRead=void 0,this.changed();try{await H(),this.notice="Done",this.cache.clear()}catch(C){this.error=D(C)}finally{this.pending=!1,this.section==="queue"&&await this.refreshQueue(),this.changed()}}}retry(){this.error="",this.retryRead?.(),this.changed()}get canRetry(){return!!this.retryRead}};var i2=["track","artist","album","playlist","radio","podcast","audiobook"];var o2=b`
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
    background: var(--card-background-color, #fff);
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
    flex: 1;
    min-width: 0;
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
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  }
  .filters label {
    flex: 1;
    min-width: 110px;
  }
  .filters select {
    width: 100%;
  }
  .filters .search {
    flex-basis: 100%;
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
    justify-content: space-between;
    padding: 12px 16px;
    position: sticky;
    top: 0;
    background: var(--card-background-color, #fff);
    z-index: 1;
  }
  .dialog .pane {
    border: 0;
    max-height: none;
    overflow: visible;
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
  .body .extras {
    display: none;
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
    .filters label {
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
`;var c2={player:"Player",browse:"Browse",queue:"Queue",rooms:"Rooms",close:"Close",retry:"Retry",search:"Search music",empty:"Nothing here yet",unavailable:"Unavailable",play:"Play",pause:"Pause",previous:"Previous",next:"Next",shuffle:"Shuffle",repeat:"Repeat",mute:"Mute",unmute:"Unmute",volume:"Volume",details:"Details",favorite:"Favorite current track",more:"Load more",refresh:"Refresh",select:"Select room",join:"Join playback",leave:"Leave group",transfer:"Move playback here"};function v(e){return c2[e]}var X=new Map,Y=class extends S{constructor(){super(...arguments);this.src="";this.accent=!1;this.failed=!1;this.last=""}willUpdate(){this.last!==this.src&&(this.last=this.src,this.failed=!1)}render(){let C=h(this.src);return C&&!this.failed?t`<img
          src=${C}
          alt=""
          loading="lazy"
          @error=${()=>{this.failed=!0}}
          @load=${()=>this.extract(C)}
        />`:t`<div class="placeholder" aria-hidden="true">♫</div>`}extract(C){if(!this.accent)return;let V=r=>this.dispatchEvent(new CustomEvent("artwork-accent",{detail:r,bubbles:!0,composed:!0})),L=X.get(C);if(L){V(L);return}let M=new Image;M.crossOrigin="anonymous",M.onload=()=>{if(!(this.src!==C||!this.isConnected))try{let r=document.createElement("canvas");r.width=1,r.height=1;let i=r.getContext("2d");if(!i)return;i.drawImage(M,0,0,1,1);let[o,d,p]=i.getImageData(0,0,1,1).data,m=`rgb(${o} ${d} ${p} / 0.12)`;X.set(C,m),X.size>30&&X.delete(X.keys().next().value),V(m)}catch{}},M.src=C}};Y.properties={src:{type:String},accent:{type:Boolean},failed:{state:!0}},Y.styles=b`
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
  `;customElements.get("hamac-artwork")||customElements.define("hamac-artwork",Y);var h2={"arrow-down":W1,"arrow-up":N1,close:I1,"delete-outline":Q1,"dots-horizontal":U1,"heart-outline":G1,"home-sound-out-outline":q1,magnify:z1,pause:K1,play:x1,"playlist-music-outline":j1,refresh:X1,repeat:Y1,"repeat-once":J1,shuffle:C2,"skip-next":H2,"skip-previous":V2,"volume-high":L2,"volume-off":M2},J=class extends S{constructor(){super(...arguments);this.width=0;this.height=0;this.onScreen=!0;this.detailItems=[];this.detailPage=0;this.detailMore=!1;this.detailToken=0;this.accentImage="";this.visibility=()=>{let C=this.onScreen&&!document.hidden;this.controller?.setVisible(C),clearInterval(this.tick),C&&(this.tick=setInterval(()=>{this.current?.state==="playing"&&this.requestUpdate()},1e3))};this.closeDialog=()=>{this.dialog=void 0,this.detailToken++,this.controller?.setSection(this.split?this.controller.config.sections[0]:void 0),this.requestUpdate(),this.opener?.focus()}}set hass(C){this._hass=C,C&&this.controller?.updateHass(C)}get hass(){return this._hass}setConfig(C){let V=L1(C);this.controller?.disconnect(),this.controller=new e1(V,()=>this.requestUpdate()),this.hass&&this.controller.updateHass(this.hass),this.isConnected&&(this.controller.connect(),this.visibility()),this.requestUpdate()}getGridOptions(){return e2(this.controller?.config)}getCardSize(){return Math.ceil((this.height||this.getGridOptions().rows*64-8)/50)}static getConfigElement(){return document.createElement("ha-music-assistant-card-editor")}static getStubConfig(C){let V=Object.values(C?.states??{}).find(L=>L?.entity_id.startsWith("media_player.")&&L.attributes.mass_player_id)?.entity_id;return{type:K,entities:V?[V]:[]}}connectedCallback(){super.connectedCallback(),this.controller?.connect(),this.resize=new ResizeObserver(C=>{let V=C[0].contentRect;this.width=V.width,this.height=V.height,this.requestUpdate()}),this.resize.observe(this),this.intersection=new IntersectionObserver(C=>{this.onScreen=C[0].isIntersecting,this.visibility()}),this.intersection.observe(this),document.addEventListener("visibilitychange",this.visibility),this.visibility()}disconnectedCallback(){super.disconnectedCallback(),this.controller?.disconnect(),this.resize?.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.visibility),clearInterval(this.tick),this.detailToken++,this.shadowRoot?.querySelector("dialog")?.close()}get current(){let C=this.controller;return C?g(this.hass,C.config.entities.find(V=>V.entity_id===C.active)):void 0}updated(){let C=this.current,V=this.controller;C&&V&&((C.image!==this.accentImage||!V.config.artwork_accent)&&this.style.setProperty("--music-accent","transparent"),this.accentImage=C.image??""),!(!V||this.dialog)&&(this.split&&!V.section&&V.config.sections.length?V.setSection(V.config.sections[0]):!this.inlinePanels&&V.section&&V.setSection(void 0))}get compact(){return this.controller?.config.layout==="compact"||this.height>0&&this.height<270}get inlinePanels(){return this.controller?.config.layout==="expanded"&&!this.compact}get split(){return this.controller?.config.layout==="expanded"&&this.width>=720&&!this.compact}icon(C){return t`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d=${h2[C]??x1}></path>
    </svg>`}button(C,V,L,M=!1,r="",i){return t`<button
      class=${`icon ${r}`}
      aria-label=${C}
      title=${C}
      ?disabled=${M||r!=="close"&&this.controller?.pending}
      aria-pressed=${i===void 0?a:String(i)}
      @click=${L}
    >
      ${this.icon(V)}
    </button>`}run(C){this.controller?.run(C)}async openDialog(C,V){this.dialog||(this.opener=this.shadowRoot?.activeElement),this.dialog=C,this.detail=V,this.detailItems=[],this.detailPage=0,this.detailMore=!1,this.detailToken++,this.controller?.setSection(C==="player"||C==="details"?void 0:C),this.requestUpdate(),await this.updateComplete;let L=this.shadowRoot?.querySelector("dialog");L&&!L.open&&L.showModal(),V&&this.loadDetail(V)}navigate(C){this.inlinePanels?this.controller?.setSection(C):this.openDialog(C)}async loadDetail(C,V=!1){let L=this.controller,M=++this.detailToken;if(!L?.native)return;let r=L.active,i=V?this.detailPage+1:0;await L.run(async()=>{let o=C;C.type==="track"&&L.native.has("music_assistant","get_queue")&&C.uri===A(this.hass?.states[r]?.attributes.media_content_id)&&(o=(await L.native.queue(r)).items.find(s=>s.uri===C.uri)??C);let d=[],p=L.capabilities.extensionEntry;!V&&p&&L.capabilities.details.includes(C.type)&&(o=await L.extension.details(p,C));let m=C.type==="podcast"?"get_podcast_episodes":`get_${C.type}_tracks`;p&&L.native.has("mass_queue",m)?d=await L.extension.children(p,C,i):!V&&["album","artist"].includes(C.type)&&(d=await L.native.children(r,C)),!(M!==this.detailToken||r!==L.active)&&(this.detail={...o,image:o.image||C.image},this.detailItems=V?[...this.detailItems,...d]:d,this.detailPage=i,this.detailMore=!!p&&["album","playlist"].includes(C.type)&&d.length>0,this.requestUpdate())})}messages(){let C=this.controller;return t`${C.error?t`<div class="message error" role="alert">${C.error} ${C.canRetry?t`<button @click=${()=>C.retry()}>${v("retry")}</button>`:a}</div>`:a}<span
        class="message"
        role="status"
        ?hidden=${!C.pending&&!C.notice}
        >${C.pending?"Working\u2026":C.notice}</span
      >`}render(){let C=this.controller,V=this.current;return!C||!V?t`<ha-card
        ><p class="empty">
          Choose a Music Assistant player in the card editor.
        </p></ha-card
      >`:t`<ha-card class=${this.compact?"compact":""}
        ><div class="header">
          <select
            aria-label="Selected room"
            .value=${C.active}
            ?disabled=${C.pending}
            @change=${L=>C.select(L.target.value)}
          >
            ${C.config.entities.map(L=>{let M=g(this.hass,L);return t`<option value=${M.id} ?disabled=${!M.available}>
                ${M.name}${M.available?"":" \xB7 Unavailable"}
              </option>`})}</select
          >${this.button("More player controls","dots-horizontal",()=>this.openDialog("player"))}
        </div>
        ${this.dialog?a:this.messages()}
        <div class=${`body ${this.split?"split":""}`}>
          ${this.inlinePanels&&!this.split&&C.section?t`<section class="pane"><button class="back" @click=${()=>C.setSection(void 0)}>Back to player</button>${this.section(C.section)}</section>`:this.player()}${this.split?t`<section class="pane">${this.section(C.section??C.config.sections[0])}</section>`:a}
        </div>
        <nav class="nav" aria-label="Music navigation">
          ${C.config.sections.map(L=>t`<button aria-current=${this.inlinePanels&&C.section===L?"page":a} @click=${()=>this.navigate(L)}>${this.icon(L==="browse"?"magnify":L==="queue"?"playlist-music-outline":"home-sound-out-outline")} <span>${v(L)}</span></button>`)}
        </nav></ha-card
      >
      <dialog
        class="dialog"
        aria-labelledby="dialog-title"
        @close=${this.closeDialog}
      >
        <div class="dialog-head">
          <h2 id="dialog-title">${this.dialog?v(this.dialog):""}</h2>
          ${this.button(v("close"),"close",()=>this.shadowRoot?.querySelector("dialog")?.close(),!1,"close")}
        </div>
        ${this.dialog?this.messages():a}
        <div class="pane">
          ${this.dialog==="player"?this.player(!0):this.dialog==="details"?this.details():this.section(this.dialog)}
        </div>
      </dialog>`}player(C=!1){let V=this.controller,L=this.current,M=V.native,r=!L.available||!M,i=x=>u(L.features,x),o=V.config.entities.find(x=>x.entity_id===L.id),d=this.hass?.states[o.volume_entity||L.id],p=(x,s={})=>this.run(()=>M.media(L.id,x,s)),m=t`<hamac-artwork
      .src=${L.image??""}
      .accent=${V.config.artwork_accent}
      @artwork-accent=${x=>this.style.setProperty("--music-accent",x.detail)}
    ></hamac-artwork>`;return t`<section class="player" aria-label="Now playing">
      <div class=${`hero ${V.config.artwork_size}`}>
        ${m}
        <div class="track">
          <strong class="truncate" title=${L.title}
            >${L.title||(L.available?"Ready to play":v("unavailable"))}</strong
          >
          <div class="truncate muted">${L.artist||L.name}</div>
          ${V.config.metadata?t`<div class="truncate muted album">${L.album}</div>`:a}
        </div>
      </div>
      ${L.duration>0?t`<div class="progress"><span>${Z1(L.position)}</span><input type="range" aria-label="Playback position" min="0" max=${L.duration} .value=${String(Math.floor(L.position))} ?disabled=${r||!i(n.seek)||V.pending} @change=${x=>p("media_seek",{seek_position:Number(x.target.value)})} /><span>${Z1(L.duration)}</span></div>`:a}
      <div class="transport">
        ${i(n.shuffle)?this.button(v("shuffle"),"shuffle",()=>p("shuffle_set",{shuffle:!L.shuffle}),r,"secondary",L.shuffle):a}${i(n.previous)?this.button(v("previous"),"skip-previous",()=>p("media_previous_track"),r,"secondary"):a}${i(L.state==="playing"?n.pause:n.play)?this.button(L.state==="playing"?v("pause"):v("play"),L.state==="playing"?"pause":"play",()=>p(L.state==="playing"?"media_pause":"media_play"),r,"primary"):a}${i(n.next)?this.button(v("next"),"skip-next",()=>p("media_next_track"),r):a}${i(n.repeat)?this.button(`${v("repeat")}: ${L.repeat}`,L.repeat==="one"?"repeat-once":"repeat",()=>p("repeat_set",{repeat:L.repeat==="off"?"all":L.repeat==="all"?"one":"off"}),r,"secondary",L.repeat!=="off"):a}
      </div>
      ${u(Z(d?.attributes.supported_features),n.volume)?this.volume(o):a}
      <div class="extras">
        ${V.capabilities.favoriteEntity?this.button(v("favorite"),"heart-outline",()=>this.run(()=>this.hass.callService("button","press",{},{entity_id:V.capabilities.favoriteEntity})),r):a}${V.config.metadata?t`<details class="metadata">
                <summary>Track details</summary>
                <p>
                  ${L.title||"No track selected"}<br />${L.artist}<br />${L.album}
                </p>
                <button
                  ?disabled=${r||!L.title}
                  @click=${()=>this.openDialog("details",O({name:L.title,artist:L.artist,album:L.album,image:L.image,uri:this.hass?.states[L.id]?.attributes.media_content_id,media_type:"track"}))}
                >
                  Open details
                </button>
              </details>`:a}
      </div>
      ${C?t`<div class="detail-actions">${V.config.sections.map(x=>t`<button @click=${()=>this.openDialog(x)}>${v(x)}</button>`)}</div>`:a}
    </section>`}volume(C,V=!1){let L=this.controller,M=g(this.hass,C),r=C.volume_entity||M.id,i=this.hass?.states[r]?.attributes,o=!M.available||!this.hass?.states[r]||["unavailable","unknown"].includes(this.hass.states[r].state)||L.pending;return t`<div class="volume">
      ${u(Z(i?.supported_features),n.mute)&&!V?this.button(M.muted?v("unmute"):v("mute"),M.muted?"volume-off":"volume-high",()=>this.run(()=>L.native.media(r,"volume_mute",{is_volume_muted:!M.muted})),o):a}<label
        ><span class="muted"
          >${V?"Group volume":M.name+" volume"}</span
        ><input
          type="range"
          aria-label=${V?"Group volume":M.name+" volume"}
          min="0"
          max=${C.max_volume??100}
          .value=${String(Math.round(M.volume*100))}
          ?disabled=${o}
          @change=${d=>this.run(()=>V?L.native.groupVolume(M.id,Number(d.target.value)):L.native.volume(M.id,Number(d.target.value)))} /></label
      ><span class="muted">${Math.round(M.volume*100)}%</span>
    </div>`}section(C){return C==="browse"?this.browse():C==="queue"?this.queue():C==="rooms"?this.rooms():a}browse(){let C=this.controller;return t`<div class="filters">
        <label class="search"
          ><span class="muted">${v("search")}</span
          ><input
            type="search"
            placeholder="Artists, albums, tracks…"
            aria-label=${v("search")}
            .value=${C.query.text}
            @input=${V=>C.search({text:V.target.value})} /></label
        ><label
          ><span class="muted">Media type</span
          ><select
            aria-label="Media type"
            .value=${C.query.type}
            @change=${V=>C.search({type:V.target.value})}
          >
            ${i2.map(V=>t`<option value=${V}>${V}</option>`)}
          </select></label
        ><label
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
          </select></label
        >
      </div>
      ${!C.capabilities.library&&!C.capabilities.search?t`<p class="empty">Search and library services are unavailable.</p>`:a}${C.loading?t`<p role="status">Loading…</p>`:a}${this.mediaList(C.items)}${!C.loading&&!C.items.length?t`<p class="empty">${v("empty")}</p>`:a}${C.hasMore?t`<button ?disabled=${C.loading} @click=${()=>C.browse(!0)}>${v("more")}</button>`:a}`}mediaList(C){return t`<ul class="list">
      ${C.map(V=>t`<li class="item">
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
    </ul>`}queue(){let C=this.controller,V=C.queue;return t`<div class="room-head">
        <h3>${v("queue")}</h3>
        ${this.button(v("refresh"),"refresh",()=>C.refreshQueue(),!C.capabilities.queue)}
      </div>
      ${V?.kind==="partial"?t`<p class="muted">Current and next. Full queue editing requires Music Assistant Queue Actions.</p>`:a}${C.capabilities.queue?a:t`<p class="empty">Queue service unavailable.</p>`}
      <ul class="list">
        ${V?.items.map((L,M)=>t`<li class="item">
              <hamac-artwork .src=${L.image??""}></hamac-artwork>
              <div class="track">
                <strong class="truncate">${L.name}</strong>
                <div class="muted">
                  ${V.kind==="partial"?M?"Next":"Current":""}
                  ${L.artist}
                </div>
              </div>
              <div class="actions">
                ${V.kind==="complete"?C.capabilities.queueActions.map(r=>this.button({play_queue_item:"Play queue item",move_queue_item_up:"Move up",move_queue_item_down:"Move down",move_queue_item_next:"Play next",remove_queue_item:"Remove"}[r]??r,{play_queue_item:"play",move_queue_item_up:"arrow-up",move_queue_item_down:"arrow-down",move_queue_item_next:"skip-next",remove_queue_item:"delete-outline"}[r]??"play",()=>this.run(()=>C.extension.action(C.active,r,L)),!this.current?.available||!L.queueId)):a}
              </div>
            </li>`)}
      </ul>
      ${V?.items.length?a:t`<p class="empty">${v("empty")}</p>`}${V?.hasMore?t`<button @click=${()=>C.refreshQueue(!0)}>${v("more")}</button>`:a}${V?.kind==="complete"&&u(this.current.features,n.clear)?t`<details>
              <summary>Clear queue</summary>
              <p>This removes the current queue.</p>
              <button
                ?disabled=${C.pending||!this.current?.available}
                @click=${()=>this.run(()=>C.native.media(C.active,"clear_playlist"))}
              >
                Confirm clear queue
              </button>
            </details>`:a}`}rooms(){let C=this.controller,V=this.current;return t`${V.members.length>1?this.volume(C.native?.entity(V.id)??{entity_id:V.id},!0):a}${C.config.room_presets.length?t`<h3>Room presets</h3>
            <div class="detail-actions">
              ${C.config.room_presets.map(L=>t`<button ?disabled=${C.pending} @click=${()=>this.run(()=>C.native.preset(L.leader,L.members))}>${L.name}</button>`)}
            </div>`:a}${C.config.entities.map(L=>{let M=g(this.hass,L),r=M.id===C.active,i=V.members.includes(M.id);return t`<section class="room">
        <div class="room-head">
          <strong>${M.name}</strong
          ><span class="muted"
            >${M.available?M.state:v("unavailable")}${r?" \xB7 Selected":""}</span
          >
        </div>
        ${M.title?t`<p class="muted truncate">${M.title}</p>`:a}${u(Z(this.hass?.states[L.volume_entity||L.entity_id]?.attributes.supported_features),n.volume)?this.volume(L):a}
        <div class="room-actions">
          <button
            ?disabled=${!M.available||r||C.pending}
            @click=${()=>C.select(M.id)}
          >
            ${v("select")}</button
          >${!r&&u(V.features,n.group)?t`<button ?disabled=${!M.available||!V.available||i||C.pending} @click=${()=>this.run(()=>C.native.join(C.active,[M.id]))}>${v("join")}</button>`:a}${M.members.length>1&&u(M.features,n.group)?t`<button ?disabled=${!M.available||C.pending} @click=${()=>this.run(()=>C.native.media(M.id,"unjoin"))}>${v("leave")}</button>`:a}${!r&&C.native?.has("music_assistant","transfer_queue")?t`<button ?disabled=${!M.available||!V.available||C.pending} @click=${()=>this.run(()=>C.native.transfer(C.active,M.id))}>${v("transfer")}</button>`:a}
        </div>
      </section>`})}`}details(){let C=this.controller,V=this.detail;if(!V)return a;let L=Array.isArray(V.raw.artists)?V.raw.artists:[],M=l(V.raw.album);return t`<div class="hero">
        <hamac-artwork .src=${V.image??""}></hamac-artwork>
        <div class="track">
          <h2>${V.name}</h2>
          <p class="muted">${V.artist}<br />${V.album}</p>
        </div>
      </div>
      <div class="detail-actions">
        ${["play","next","add","replace","radio"].map(r=>t`<button ?disabled=${C.pending||!this.current?.available||!V.uri} @click=${()=>this.run(()=>C.native.play(C.active,V,r))}>${{play:"Play now",next:"Play next",add:"Add to queue",replace:"Replace queue",radio:"Start radio"}[r]}</button>`)}
      </div>
      ${C.config.metadata?t`<p class="muted">
                ${V.provider||A(V.raw.uri).split("://")[0]}
                ${V.quality?" \xB7 "+V.quality:""}
              </p>
              ${V.description?t`<p class="metadata">${V.description}</p>`:a}
              <div class="detail-actions">
                ${L.map(r=>t`<button @click=${()=>this.openDialog("details",O(r))}>${A(l(r).name)}</button>`)}${M.uri?t`<button @click=${()=>this.openDialog("details",O(M))}>${A(M.name)}</button>`:a}
              </div>`:a}${this.mediaList(this.detailItems)}${this.detailMore?t`<button @click=${()=>this.loadDetail(V,!0)}>${v("more")}</button>`:a}`}};J.styles=o2;var _=class extends S{constructor(){super(...arguments);this.config={type:K,entities:[]};this.error=""}setConfig(C){this.config={...C,entities:[...C.entities??[]]},this.requestUpdate()}updateConfig(C){this.config={...this.config,...C};try{L1(this.config),this.error="",this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this.config}},bubbles:!0,composed:!0}))}catch(V){this.error=V instanceof Error?V.message:"Invalid configuration"}this.requestUpdate()}entities(){return this.config.entities.map(C=>typeof C=="string"?{entity_id:C}:C)}entity(C,V){let L=this.entities().map((M,r)=>r===C?{...M,...V}:M);this.updateConfig({entities:L})}textField(C,V,L,M){return t`<label
      >${C}<input
        aria-label=${C}
        .value=${V}
        list=${M??""}
        @change=${r=>L(r.target.value)}
    /></label>`}select(C,V,L,M){return t`<label
      >${C}<select
        aria-label=${C}
        .value=${V}
        @change=${r=>M(r.target.value)}
      >
        ${L.map(r=>t`<option value=${r}>${r}</option>`)}
      </select></label
    >`}preset(C,V){this.updateConfig({room_presets:(this.config.room_presets??[]).map((L,M)=>M===C?{...L,...V}:L)})}render(){let C=this.entities();return t`<p>
        Choose Music Assistant player entities. Changes apply once all fields
        are valid.
      </p>
      ${this.error?t`<p class="error" role="alert">${this.error}</p>`:""}<datalist
        id="players"
      >
        ${Object.keys(this.hass?.states??{}).filter(V=>V.startsWith("media_player.")).map(V=>t`<option value=${V}></option>`)}</datalist
      >${C.map((V,L)=>t`<fieldset>
            <legend>Room ${L+1}</legend>
            <div class="grid">
              ${this.textField("Player entity",V.entity_id,M=>this.entity(L,{entity_id:M}),"players")}${this.textField("Room name",V.name??"",M=>this.entity(L,{name:M}))}${this.textField("Volume entity",V.volume_entity??"",M=>this.entity(L,{volume_entity:M}),"players")}${this.textField("Favorite button entity",V.favorite_entity??"",M=>this.entity(L,{favorite_entity:M}))}${this.textField("Integration entry ID",V.config_entry_id??"",M=>this.entity(L,{config_entry_id:M}))}<label
                >Maximum volume (%)<input
                  aria-label="Maximum volume (%)"
                  type="number"
                  min="0"
                  max="100"
                  .value=${String(V.max_volume??100)}
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
          </fieldset>`)}<button
        @click=${()=>{let V=Object.keys(this.hass?.states??{}).find(L=>L.startsWith("media_player.")&&!C.some(M=>M.entity_id===L))??"";this.updateConfig({entities:[...C,{entity_id:V}]})}}
      >
        Add room
      </button>
      <div class="grid">
        ${this.select("Default player",this.config.default_player??"",["",...C.map(V=>V.entity_id)],V=>this.updateConfig({default_player:V||void 0}))}${this.select("Layout",this.config.layout??"auto",["auto","compact","standard","expanded"],V=>this.updateConfig({layout:V}))}${this.select("Artwork size",this.config.artwork_size??"medium",["small","medium","large"],V=>this.updateConfig({artwork_size:V}))}${this.select("Queue extension",this.config.extension??"auto",["auto","off"],V=>this.updateConfig({extension:V}))}${this.textField("Default integration entry ID",this.config.config_entry_id??"",V=>this.updateConfig({config_entry_id:V||void 0}))}
      </div>
      <fieldset>
        <legend>Appearance</legend>
        ${["metadata","artwork_accent"].map(V=>t`<label class="check"><input type="checkbox" .checked=${this.config[V]??V==="metadata"} @change=${L=>this.updateConfig({[V]:L.target.checked})} />${V==="metadata"?"Show metadata":"Use artwork accent colors"}</label>`)}
      </fieldset>
      <fieldset>
        <legend>Visible sections</legend>
        ${["browse","queue","rooms"].map(V=>t`<label class="check"
              ><input
                type="checkbox"
                .checked=${(this.config.sections??["browse","queue","rooms"]).includes(V)}
                @change=${L=>{let M=this.config.sections??["browse","queue","rooms"];this.updateConfig({sections:L.target.checked?[...M,V]:M.filter(r=>r!==V)})}}
              />${V}</label
            >`)}
      </fieldset>
      <fieldset>
        <legend>Room presets</legend>
        ${(this.config.room_presets??[]).map((V,L)=>t`<fieldset>
              ${this.textField("Preset name",V.name,M=>this.preset(L,{name:M}))}${this.select("Preset leader",V.leader,C.map(M=>M.entity_id),M=>this.preset(L,{leader:M}))}${C.map(M=>t`<label class="check"><input type="checkbox" .checked=${V.members.includes(M.entity_id)} @change=${r=>this.preset(L,{members:r.target.checked?[...V.members,M.entity_id]:V.members.filter(i=>i!==M.entity_id)})} />${M.name||M.entity_id}</label>`)}<button
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
      </fieldset>`}};_.properties={hass:{attribute:!1}},_.styles=b`
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
    button {
      cursor: pointer;
      width: auto;
      margin: 4px;
    }
    input[type="checkbox"] {
      min-height: 24px;
      width: 24px;
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
  `;customElements.get("ha-music-assistant-card")||customElements.define("ha-music-assistant-card",J);customElements.get("ha-music-assistant-card-editor")||customElements.define("ha-music-assistant-card-editor",_);window.customCards??(window.customCards=[]);window.customCards.some(e=>e.type==="ha-music-assistant-card")||window.customCards.push({type:"ha-music-assistant-card",name:"Music Assistant",description:"Music discovery, playback, and multiroom controls.",preview:!0});
