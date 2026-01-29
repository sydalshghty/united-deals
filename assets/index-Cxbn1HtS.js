(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();var Ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var _s={exports:{}},ro={},Os={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function th(){if(pd)return he;pd=1;var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),x=Symbol.iterator;function E(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,k={};function S(P,I,te){this.props=P,this.context=I,this.refs=k,this.updater=te||C}S.prototype.isReactComponent={},S.prototype.setState=function(P,I){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,I,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function _(){}_.prototype=S.prototype;function R(P,I,te){this.props=P,this.context=I,this.refs=k,this.updater=te||C}var A=R.prototype=new _;A.constructor=R,b(A,S.prototype),A.isPureReactComponent=!0;var D=Array.isArray,H=Object.prototype.hasOwnProperty,B={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function K(P,I,te){var pe,fe={},ke=null,ve=null;if(I!=null)for(pe in I.ref!==void 0&&(ve=I.ref),I.key!==void 0&&(ke=""+I.key),I)H.call(I,pe)&&!F.hasOwnProperty(pe)&&(fe[pe]=I[pe]);var ge=arguments.length-2;if(ge===1)fe.children=te;else if(1<ge){for(var le=Array(ge),je=0;je<ge;je++)le[je]=arguments[je+2];fe.children=le}if(P&&P.defaultProps)for(pe in ge=P.defaultProps,ge)fe[pe]===void 0&&(fe[pe]=ge[pe]);return{$$typeof:r,type:P,key:ke,ref:ve,props:fe,_owner:B.current}}function Z(P,I){return{$$typeof:r,type:P.type,key:I,ref:P.ref,props:P.props,_owner:P._owner}}function Y(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function Q(P){var I={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(te){return I[te]})}var z=/\/+/g;function ne(P,I){return typeof P=="object"&&P!==null&&P.key!=null?Q(""+P.key):I.toString(36)}function $(P,I,te,pe,fe){var ke=typeof P;(ke==="undefined"||ke==="boolean")&&(P=null);var ve=!1;if(P===null)ve=!0;else switch(ke){case"string":case"number":ve=!0;break;case"object":switch(P.$$typeof){case r:case i:ve=!0}}if(ve)return ve=P,fe=fe(ve),P=pe===""?"."+ne(ve,0):pe,D(fe)?(te="",P!=null&&(te=P.replace(z,"$&/")+"/"),$(fe,I,te,"",function(je){return je})):fe!=null&&(Y(fe)&&(fe=Z(fe,te+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(z,"$&/")+"/")+P)),I.push(fe)),1;if(ve=0,pe=pe===""?".":pe+":",D(P))for(var ge=0;ge<P.length;ge++){ke=P[ge];var le=pe+ne(ke,ge);ve+=$(ke,I,te,le,fe)}else if(le=E(P),typeof le=="function")for(P=le.call(P),ge=0;!(ke=P.next()).done;)ke=ke.value,le=pe+ne(ke,ge++),ve+=$(ke,I,te,le,fe);else if(ke==="object")throw I=String(P),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return ve}function Pe(P,I,te){if(P==null)return P;var pe=[],fe=0;return $(P,pe,"","",function(ke){return I.call(te,ke,fe++)}),pe}function Se(P){if(P._status===-1){var I=P._result;I=I(),I.then(function(te){(P._status===0||P._status===-1)&&(P._status=1,P._result=te)},function(te){(P._status===0||P._status===-1)&&(P._status=2,P._result=te)}),P._status===-1&&(P._status=0,P._result=I)}if(P._status===1)return P._result.default;throw P._result}var ye={current:null},X={transition:null},ae={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:X,ReactCurrentOwner:B};return he.Children={map:Pe,forEach:function(P,I,te){Pe(P,function(){I.apply(this,arguments)},te)},count:function(P){var I=0;return Pe(P,function(){I++}),I},toArray:function(P){return Pe(P,function(I){return I})||[]},only:function(P){if(!Y(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},he.Component=S,he.Fragment=a,he.Profiler=c,he.PureComponent=R,he.StrictMode=s,he.Suspense=v,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,he.cloneElement=function(P,I,te){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var pe=b({},P.props),fe=P.key,ke=P.ref,ve=P._owner;if(I!=null){if(I.ref!==void 0&&(ke=I.ref,ve=B.current),I.key!==void 0&&(fe=""+I.key),P.type&&P.type.defaultProps)var ge=P.type.defaultProps;for(le in I)H.call(I,le)&&!F.hasOwnProperty(le)&&(pe[le]=I[le]===void 0&&ge!==void 0?ge[le]:I[le])}var le=arguments.length-2;if(le===1)pe.children=te;else if(1<le){ge=Array(le);for(var je=0;je<le;je++)ge[je]=arguments[je+2];pe.children=ge}return{$$typeof:r,type:P.type,key:fe,ref:ke,props:pe,_owner:ve}},he.createContext=function(P){return P={$$typeof:m,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:f,_context:P},P.Consumer=P},he.createElement=K,he.createFactory=function(P){var I=K.bind(null,P);return I.type=P,I},he.createRef=function(){return{current:null}},he.forwardRef=function(P){return{$$typeof:y,render:P}},he.isValidElement=Y,he.lazy=function(P){return{$$typeof:p,_payload:{_status:-1,_result:P},_init:Se}},he.memo=function(P,I){return{$$typeof:g,type:P,compare:I===void 0?null:I}},he.startTransition=function(P){var I=X.transition;X.transition={};try{P()}finally{X.transition=I}},he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},he.useCallback=function(P,I){return ye.current.useCallback(P,I)},he.useContext=function(P){return ye.current.useContext(P)},he.useDebugValue=function(){},he.useDeferredValue=function(P){return ye.current.useDeferredValue(P)},he.useEffect=function(P,I){return ye.current.useEffect(P,I)},he.useId=function(){return ye.current.useId()},he.useImperativeHandle=function(P,I,te){return ye.current.useImperativeHandle(P,I,te)},he.useInsertionEffect=function(P,I){return ye.current.useInsertionEffect(P,I)},he.useLayoutEffect=function(P,I){return ye.current.useLayoutEffect(P,I)},he.useMemo=function(P,I){return ye.current.useMemo(P,I)},he.useReducer=function(P,I,te){return ye.current.useReducer(P,I,te)},he.useRef=function(P){return ye.current.useRef(P)},he.useState=function(P){return ye.current.useState(P)},he.useSyncExternalStore=function(P,I,te){return ye.current.useSyncExternalStore(P,I,te)},he.useTransition=function(){return ye.current.useTransition()},he.version="18.2.0",he}var hd;function Bt(){return hd||(hd=1,Os.exports=th()),Os.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function nh(){if(md)return ro;md=1;var r=Bt(),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(y,v,g){var p,x={},E=null,C=null;g!==void 0&&(E=""+g),v.key!==void 0&&(E=""+v.key),v.ref!==void 0&&(C=v.ref);for(p in v)s.call(v,p)&&!f.hasOwnProperty(p)&&(x[p]=v[p]);if(y&&y.defaultProps)for(p in v=y.defaultProps,v)x[p]===void 0&&(x[p]=v[p]);return{$$typeof:i,type:y,key:E,ref:C,props:x,_owner:c.current}}return ro.Fragment=a,ro.jsx=m,ro.jsxs=m,ro}var vd;function rh(){return vd||(vd=1,_s.exports=nh()),_s.exports}var d=rh(),Mi={},Ts={exports:{}},lt={},As={exports:{}},Rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function oh(){return gd||(gd=1,(function(r){function i(X,ae){var P=X.length;X.push(ae);e:for(;0<P;){var I=P-1>>>1,te=X[I];if(0<c(te,ae))X[I]=ae,X[P]=te,P=I;else break e}}function a(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var ae=X[0],P=X.pop();if(P!==ae){X[0]=P;e:for(var I=0,te=X.length,pe=te>>>1;I<pe;){var fe=2*(I+1)-1,ke=X[fe],ve=fe+1,ge=X[ve];if(0>c(ke,P))ve<te&&0>c(ge,ke)?(X[I]=ge,X[ve]=P,I=ve):(X[I]=ke,X[fe]=P,I=fe);else if(ve<te&&0>c(ge,P))X[I]=ge,X[ve]=P,I=ve;else break e}}return ae}function c(X,ae){var P=X.sortIndex-ae.sortIndex;return P!==0?P:X.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var m=Date,y=m.now();r.unstable_now=function(){return m.now()-y}}var v=[],g=[],p=1,x=null,E=3,C=!1,b=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(X){for(var ae=a(g);ae!==null;){if(ae.callback===null)s(g);else if(ae.startTime<=X)s(g),ae.sortIndex=ae.expirationTime,i(v,ae);else break;ae=a(g)}}function D(X){if(k=!1,A(X),!b)if(a(v)!==null)b=!0,Se(H);else{var ae=a(g);ae!==null&&ye(D,ae.startTime-X)}}function H(X,ae){b=!1,k&&(k=!1,_(K),K=-1),C=!0;var P=E;try{for(A(ae),x=a(v);x!==null&&(!(x.expirationTime>ae)||X&&!Q());){var I=x.callback;if(typeof I=="function"){x.callback=null,E=x.priorityLevel;var te=I(x.expirationTime<=ae);ae=r.unstable_now(),typeof te=="function"?x.callback=te:x===a(v)&&s(v),A(ae)}else s(v);x=a(v)}if(x!==null)var pe=!0;else{var fe=a(g);fe!==null&&ye(D,fe.startTime-ae),pe=!1}return pe}finally{x=null,E=P,C=!1}}var B=!1,F=null,K=-1,Z=5,Y=-1;function Q(){return!(r.unstable_now()-Y<Z)}function z(){if(F!==null){var X=r.unstable_now();Y=X;var ae=!0;try{ae=F(!0,X)}finally{ae?ne():(B=!1,F=null)}}else B=!1}var ne;if(typeof R=="function")ne=function(){R(z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Pe=$.port2;$.port1.onmessage=z,ne=function(){Pe.postMessage(null)}}else ne=function(){S(z,0)};function Se(X){F=X,B||(B=!0,ne())}function ye(X,ae){K=S(function(){X(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){b||C||(b=!0,Se(H))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_getFirstCallbackNode=function(){return a(v)},r.unstable_next=function(X){switch(E){case 1:case 2:case 3:var ae=3;break;default:ae=E}var P=E;E=ae;try{return X()}finally{E=P}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,ae){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var P=E;E=X;try{return ae()}finally{E=P}},r.unstable_scheduleCallback=function(X,ae,P){var I=r.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?I+P:I):P=I,X){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=P+te,X={id:p++,callback:ae,priorityLevel:X,startTime:P,expirationTime:te,sortIndex:-1},P>I?(X.sortIndex=P,i(g,X),a(v)===null&&X===a(g)&&(k?(_(K),K=-1):k=!0,ye(D,P-I))):(X.sortIndex=te,i(v,X),b||C||(b=!0,Se(H))),X},r.unstable_shouldYield=Q,r.unstable_wrapCallback=function(X){var ae=E;return function(){var P=E;E=ae;try{return X.apply(this,arguments)}finally{E=P}}}})(Rs)),Rs}var yd;function ih(){return yd||(yd=1,As.exports=oh()),As.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function ah(){if(xd)return lt;xd=1;var r=Bt(),i=ih();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(c[e]=t,e=0;e<t.length;e++)s.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},x={};function E(e){return v.call(x,e)?!0:v.call(p,e)?!1:g.test(e)?x[e]=!0:(p[e]=!0,!1)}function C(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function b(e,t,n,o){if(t===null||typeof t>"u"||C(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function k(e,t,n,o,l,u,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=h}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new k(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_,R);S[t]=new k(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_,R);S[t]=new k(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_,R);S[t]=new k(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});function A(e,t,n,o){var l=S.hasOwnProperty(t)?S[t]:null;(l!==null?l.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(b(t,n,l,o)&&(n=null),o||l===null?E(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,o=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var D=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),B=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),Q=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),X=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,I;function te(e){if(I===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return`
`+I+e}var pe=!1;function fe(e,t){if(!e||pe)return"";pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(M){var o=M}Reflect.construct(e,[],t)}else{try{t.call()}catch(M){o=M}e.call(t.prototype)}else{try{throw Error()}catch(M){o=M}e()}}catch(M){if(M&&o&&typeof M.stack=="string"){for(var l=M.stack.split(`
`),u=o.stack.split(`
`),h=l.length-1,w=u.length-1;1<=h&&0<=w&&l[h]!==u[w];)w--;for(;1<=h&&0<=w;h--,w--)if(l[h]!==u[w]){if(h!==1||w!==1)do if(h--,w--,0>w||l[h]!==u[w]){var j=`
`+l[h].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=h&&0<=w);break}}}finally{pe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?te(e):""}function ke(e){switch(e.tag){case 5:return te(e.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function ve(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case B:return"Portal";case Z:return"Profiler";case K:return"StrictMode";case ne:return"Suspense";case $:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Q:return(e.displayName||"Context")+".Consumer";case Y:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pe:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case Se:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(t);case 8:return t===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vt(e){var t=je(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){o=""+h,u.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(h){o=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function At(e){e._valueTracker||(e._valueTracker=Vt(e))}function Co(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=je(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function za(e,t){var n=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wu(e,t){t=t.checked,t!=null&&A(e,"checked",t,!1)}function Da(e,t){wu(e,t);var n=le(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ia(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ia(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ia(e,t,n){(t!=="number"||So(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function Vn(e,t,n,o){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&o&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return P({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ku(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(yr(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function Cu(e,t){var n=le(t.value),o=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ha(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Po,ju=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function Eu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function Nu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,l=Eu(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,l):e[n]=l}}var ap=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ba(e,t){if(t){if(ap[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Va=null;function Wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,Wn=null,qn=null;function _u(e){if(e=Ur(e)){if(typeof qa!="function")throw Error(a(280));var t=e.stateNode;t&&(t=Ko(t),qa(e.stateNode,e.type,t))}}function Ou(e){Wn?qn?qn.push(e):qn=[e]:Wn=e}function Tu(){if(Wn){var e=Wn,t=qn;if(qn=Wn=null,_u(e),t)for(e=0;e<t.length;e++)_u(t[e])}}function Au(e,t){return e(t)}function Ru(){}var Qa=!1;function Mu(e,t,n){if(Qa)return e(t,n);Qa=!0;try{return Au(e,t,n)}finally{Qa=!1,(Wn!==null||qn!==null)&&(Ru(),Tu())}}function br(e,t){var n=e.stateNode;if(n===null)return null;var o=Ko(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Xa=!1;if(y)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Xa=!1}function lp(e,t,n,o,l,u,h,w,j){var M=Array.prototype.slice.call(arguments,3);try{t.apply(n,M)}catch(V){this.onError(V)}}var Cr=!1,jo=null,Eo=!1,Ka=null,sp={onError:function(e){Cr=!0,jo=e}};function up(e,t,n,o,l,u,h,w,j){Cr=!1,jo=null,lp.apply(sp,arguments)}function cp(e,t,n,o,l,u,h,w,j){if(up.apply(this,arguments),Cr){if(Cr){var M=jo;Cr=!1,jo=null}else throw Error(a(198));Eo||(Eo=!0,Ka=M)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zu(e){if(Nn(e)!==e)throw Error(a(188))}function dp(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,o=t;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){n=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return zu(l),e;if(u===o)return zu(l),t;u=u.sibling}throw Error(a(188))}if(n.return!==o.return)n=l,o=u;else{for(var h=!1,w=l.child;w;){if(w===n){h=!0,n=l,o=u;break}if(w===o){h=!0,o=l,n=u;break}w=w.sibling}if(!h){for(w=u.child;w;){if(w===n){h=!0,n=u,o=l;break}if(w===o){h=!0,o=u,n=l;break}w=w.sibling}if(!h)throw Error(a(189))}}if(n.alternate!==o)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function Du(e){return e=dp(e),e!==null?Iu(e):null}function Iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Iu(e);if(t!==null)return t;e=e.sibling}return null}var Fu=i.unstable_scheduleCallback,Hu=i.unstable_cancelCallback,fp=i.unstable_shouldYield,pp=i.unstable_requestPaint,ze=i.unstable_now,hp=i.unstable_getCurrentPriorityLevel,Za=i.unstable_ImmediatePriority,Bu=i.unstable_UserBlockingPriority,No=i.unstable_NormalPriority,mp=i.unstable_LowPriority,Uu=i.unstable_IdlePriority,_o=null,Rt=null;function vp(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:xp,gp=Math.log,yp=Math.LN2;function xp(e){return e>>>=0,e===0?32:31-(gp(e)/yp|0)|0}var Oo=64,To=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,l=e.suspendedLanes,u=e.pingedLanes,h=n&268435455;if(h!==0){var w=h&~l;w!==0?o=Sr(w):(u&=h,u!==0&&(o=Sr(u)))}else h=n&~l,h!==0?o=Sr(h):u!==0&&(o=Sr(u));if(o===0)return 0;if(t!==0&&t!==o&&(t&l)===0&&(l=o&-o,u=t&-t,l>=u||l===16&&(u&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-wt(t),l=1<<n,o|=e[n],t&=~l;return o}function wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var h=31-wt(u),w=1<<h,j=l[h];j===-1?((w&n)===0||(w&o)!==0)&&(l[h]=wp(w,t)):j<=t&&(e.expiredLanes|=w),u&=~w}}function Ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=Oo;return Oo<<=1,(Oo&4194240)===0&&(Oo=64),e}function $a(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function kp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-wt(n),u=1<<l;t[l]=0,o[l]=-1,e[l]=-1,n&=~u}}function Ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-wt(n),l=1<<o;l&t|e[o]&t&&(e[o]|=t),n&=~l}}var Ce=0;function Wu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var qu,Ja,Qu,Xu,Ku,el=!1,Ro=[],ln=null,sn=null,un=null,jr=new Map,Er=new Map,cn=[],Cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zu(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function Nr(e,t,n,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Ur(t),t!==null&&Ja(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Sp(e,t,n,o,l){switch(t){case"focusin":return ln=Nr(ln,e,t,n,o,l),!0;case"dragenter":return sn=Nr(sn,e,t,n,o,l),!0;case"mouseover":return un=Nr(un,e,t,n,o,l),!0;case"pointerover":var u=l.pointerId;return jr.set(u,Nr(jr.get(u)||null,e,t,n,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Er.set(u,Nr(Er.get(u)||null,e,t,n,o,l)),!0}return!1}function Yu(e){var t=_n(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Lu(n),t!==null){e.blockedOn=t,Ku(e.priority,function(){Qu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Va=o,n.target.dispatchEvent(o),Va=null}else return t=Ur(n),t!==null&&Ja(t),e.blockedOn=n,!1;t.shift()}return!0}function $u(e,t,n){Mo(e)&&n.delete(t)}function Pp(){el=!1,ln!==null&&Mo(ln)&&(ln=null),sn!==null&&Mo(sn)&&(sn=null),un!==null&&Mo(un)&&(un=null),jr.forEach($u),Er.forEach($u)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,el||(el=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Pp)))}function Or(e){function t(l){return _r(l,e)}if(0<Ro.length){_r(Ro[0],e);for(var n=1;n<Ro.length;n++){var o=Ro[n];o.blockedOn===e&&(o.blockedOn=null)}}for(ln!==null&&_r(ln,e),sn!==null&&_r(sn,e),un!==null&&_r(un,e),jr.forEach(t),Er.forEach(t),n=0;n<cn.length;n++)o=cn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)Yu(n),n.blockedOn===null&&cn.shift()}var Qn=D.ReactCurrentBatchConfig,Lo=!0;function jp(e,t,n,o){var l=Ce,u=Qn.transition;Qn.transition=null;try{Ce=1,tl(e,t,n,o)}finally{Ce=l,Qn.transition=u}}function Ep(e,t,n,o){var l=Ce,u=Qn.transition;Qn.transition=null;try{Ce=4,tl(e,t,n,o)}finally{Ce=l,Qn.transition=u}}function tl(e,t,n,o){if(Lo){var l=nl(e,t,n,o);if(l===null)xl(e,t,o,zo,n),Zu(e,o);else if(Sp(l,e,t,n,o))o.stopPropagation();else if(Zu(e,o),t&4&&-1<Cp.indexOf(e)){for(;l!==null;){var u=Ur(l);if(u!==null&&qu(u),u=nl(e,t,n,o),u===null&&xl(e,t,o,zo,n),u===l)break;l=u}l!==null&&o.stopPropagation()}else xl(e,t,o,null,n)}}var zo=null;function nl(e,t,n,o){if(zo=null,e=Wa(o),e=_n(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zo=e,null}function Gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hp()){case Za:return 1;case Bu:return 4;case No:case mp:return 16;case Uu:return 536870912;default:return 16}default:return 16}}var dn=null,rl=null,Do=null;function Ju(){if(Do)return Do;var e,t=rl,n=t.length,o,l="value"in dn?dn.value:dn.textContent,u=l.length;for(e=0;e<n&&t[e]===l[e];e++);var h=n-e;for(o=1;o<=h&&t[n-o]===l[u-o];o++);return Do=l.slice(e,1<o?1-o:void 0)}function Io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fo(){return!0}function ec(){return!1}function st(e){function t(n,o,l,u,h){this._reactName=n,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(n=e[w],this[w]=n?n(u):u[w]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Fo:ec,this.isPropagationStopped=ec,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=st(Xn),Tr=P({},Xn,{view:0,detail:0}),Np=st(Tr),il,al,Ar,Ho=P({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(il=e.screenX-Ar.screenX,al=e.screenY-Ar.screenY):al=il=0,Ar=e),il)},movementY:function(e){return"movementY"in e?e.movementY:al}}),tc=st(Ho),_p=P({},Ho,{dataTransfer:0}),Op=st(_p),Tp=P({},Tr,{relatedTarget:0}),ll=st(Tp),Ap=P({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=st(Ap),Mp=P({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=st(Mp),zp=P({},Xn,{data:0}),nc=st(zp),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ip={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fp[e])?!!t[e]:!1}function sl(){return Hp}var Bp=P({},Tr,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ip[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Up=st(Bp),Vp=P({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=st(Vp),Wp=P({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),qp=st(Wp),Qp=P({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=st(Qp),Kp=P({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=st(Kp),Yp=[9,13,27,32],ul=y&&"CompositionEvent"in window,Rr=null;y&&"documentMode"in document&&(Rr=document.documentMode);var $p=y&&"TextEvent"in window&&!Rr,oc=y&&(!ul||Rr&&8<Rr&&11>=Rr),ic=" ",ac=!1;function lc(e,t){switch(e){case"keyup":return Yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function Gp(e,t){switch(e){case"compositionend":return sc(t);case"keypress":return t.which!==32?null:(ac=!0,ic);case"textInput":return e=t.data,e===ic&&ac?null:e;default:return null}}function Jp(e,t){if(Kn)return e==="compositionend"||!ul&&lc(e,t)?(e=Ju(),Do=rl=dn=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var e2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!e2[e.type]:t==="textarea"}function cc(e,t,n,o){Ou(o),t=qo(t,"onChange"),0<t.length&&(n=new ol("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Mr=null,Lr=null;function t2(e){Nc(e,0)}function Bo(e){var t=Jn(e);if(Co(t))return e}function n2(e,t){if(e==="change")return t}var dc=!1;if(y){var cl;if(y){var dl="oninput"in document;if(!dl){var fc=document.createElement("div");fc.setAttribute("oninput","return;"),dl=typeof fc.oninput=="function"}cl=dl}else cl=!1;dc=cl&&(!document.documentMode||9<document.documentMode)}function pc(){Mr&&(Mr.detachEvent("onpropertychange",hc),Lr=Mr=null)}function hc(e){if(e.propertyName==="value"&&Bo(Lr)){var t=[];cc(t,Lr,e,Wa(e)),Mu(t2,t)}}function r2(e,t,n){e==="focusin"?(pc(),Mr=t,Lr=n,Mr.attachEvent("onpropertychange",hc)):e==="focusout"&&pc()}function o2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bo(Lr)}function i2(e,t){if(e==="click")return Bo(t)}function a2(e,t){if(e==="input"||e==="change")return Bo(t)}function l2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:l2;function zr(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var l=n[o];if(!v.call(t,l)||!bt(e[l],t[l]))return!1}return!0}function mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vc(e,t){var n=mc(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mc(n)}}function gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yc(){for(var e=window,t=So();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=So(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function s2(e){var t=yc(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gc(n.ownerDocument.documentElement,n)){if(o!==null&&fl(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,u=Math.min(o.start,l);o=o.end===void 0?u:Math.min(o.end,l),!e.extend&&u>o&&(l=o,o=u,u=l),l=vc(n,u);var h=vc(n,o);l&&h&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),u>o?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var u2=y&&"documentMode"in document&&11>=document.documentMode,Zn=null,pl=null,Dr=null,hl=!1;function xc(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hl||Zn==null||Zn!==So(o)||(o=Zn,"selectionStart"in o&&fl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Dr&&zr(Dr,o)||(Dr=o,o=qo(pl,"onSelect"),0<o.length&&(t=new ol("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Zn)))}function Uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},ml={},wc={};y&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Vo(e){if(ml[e])return ml[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wc)return ml[e]=t[n];return e}var bc=Vo("animationend"),kc=Vo("animationiteration"),Cc=Vo("animationstart"),Sc=Vo("transitionend"),Pc=new Map,jc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){Pc.set(e,t),f(t,[e])}for(var vl=0;vl<jc.length;vl++){var gl=jc[vl],c2=gl.toLowerCase(),d2=gl[0].toUpperCase()+gl.slice(1);fn(c2,"on"+d2)}fn(bc,"onAnimationEnd"),fn(kc,"onAnimationIteration"),fn(Cc,"onAnimationStart"),fn("dblclick","onDoubleClick"),fn("focusin","onFocus"),fn("focusout","onBlur"),fn(Sc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Ec(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,cp(o,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var h=o.length-1;0<=h;h--){var w=o[h],j=w.instance,M=w.currentTarget;if(w=w.listener,j!==u&&l.isPropagationStopped())break e;Ec(l,w,M),u=j}else for(h=0;h<o.length;h++){if(w=o[h],j=w.instance,M=w.currentTarget,w=w.listener,j!==u&&l.isPropagationStopped())break e;Ec(l,w,M),u=j}}}if(Eo)throw e=Ka,Eo=!1,Ka=null,e}function Ne(e,t){var n=t[Pl];n===void 0&&(n=t[Pl]=new Set);var o=e+"__bubble";n.has(o)||(_c(t,e,2,!1),n.add(o))}function yl(e,t,n){var o=0;t&&(o|=4),_c(n,e,o,t)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[Wo]){e[Wo]=!0,s.forEach(function(n){n!=="selectionchange"&&(f2.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wo]||(t[Wo]=!0,yl("selectionchange",!1,t))}}function _c(e,t,n,o){switch(Gu(t)){case 1:var l=jp;break;case 4:l=Ep;break;default:l=tl}n=l.bind(null,t,n,e),l=void 0,!Xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function xl(e,t,n,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var h=o.tag;if(h===3||h===4){var w=o.stateNode.containerInfo;if(w===l||w.nodeType===8&&w.parentNode===l)break;if(h===4)for(h=o.return;h!==null;){var j=h.tag;if((j===3||j===4)&&(j=h.stateNode.containerInfo,j===l||j.nodeType===8&&j.parentNode===l))return;h=h.return}for(;w!==null;){if(h=_n(w),h===null)return;if(j=h.tag,j===5||j===6){o=u=h;continue e}w=w.parentNode}}o=o.return}Mu(function(){var M=u,V=Wa(n),W=[];e:{var U=Pc.get(e);if(U!==void 0){var G=ol,ee=e;switch(e){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":G=Up;break;case"focusin":ee="focus",G=ll;break;case"focusout":ee="blur",G=ll;break;case"beforeblur":case"afterblur":G=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=qp;break;case bc:case kc:case Cc:G=Rp;break;case Sc:G=Xp;break;case"scroll":G=Np;break;case"wheel":G=Zp;break;case"copy":case"cut":case"paste":G=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=rc}var re=(t&4)!==0,De=!re&&e==="scroll",O=re?U!==null?U+"Capture":null:U;re=[];for(var N=M,T;N!==null;){T=N;var q=T.stateNode;if(T.tag===5&&q!==null&&(T=q,O!==null&&(q=br(N,O),q!=null&&re.push(Hr(N,q,T)))),De)break;N=N.return}0<re.length&&(U=new G(U,ee,null,n,V),W.push({event:U,listeners:re}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",U&&n!==Va&&(ee=n.relatedTarget||n.fromElement)&&(_n(ee)||ee[Wt]))break e;if((G||U)&&(U=V.window===V?V:(U=V.ownerDocument)?U.defaultView||U.parentWindow:window,G?(ee=n.relatedTarget||n.toElement,G=M,ee=ee?_n(ee):null,ee!==null&&(De=Nn(ee),ee!==De||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(G=null,ee=M),G!==ee)){if(re=tc,q="onMouseLeave",O="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(re=rc,q="onPointerLeave",O="onPointerEnter",N="pointer"),De=G==null?U:Jn(G),T=ee==null?U:Jn(ee),U=new re(q,N+"leave",G,n,V),U.target=De,U.relatedTarget=T,q=null,_n(V)===M&&(re=new re(O,N+"enter",ee,n,V),re.target=T,re.relatedTarget=De,q=re),De=q,G&&ee)t:{for(re=G,O=ee,N=0,T=re;T;T=$n(T))N++;for(T=0,q=O;q;q=$n(q))T++;for(;0<N-T;)re=$n(re),N--;for(;0<T-N;)O=$n(O),T--;for(;N--;){if(re===O||O!==null&&re===O.alternate)break t;re=$n(re),O=$n(O)}re=null}else re=null;G!==null&&Oc(W,U,G,re,!1),ee!==null&&De!==null&&Oc(W,De,ee,re,!0)}}e:{if(U=M?Jn(M):window,G=U.nodeName&&U.nodeName.toLowerCase(),G==="select"||G==="input"&&U.type==="file")var ie=n2;else if(uc(U))if(dc)ie=a2;else{ie=o2;var se=r2}else(G=U.nodeName)&&G.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(ie=i2);if(ie&&(ie=ie(e,M))){cc(W,ie,n,V);break e}se&&se(e,U,M),e==="focusout"&&(se=U._wrapperState)&&se.controlled&&U.type==="number"&&Ia(U,"number",U.value)}switch(se=M?Jn(M):window,e){case"focusin":(uc(se)||se.contentEditable==="true")&&(Zn=se,pl=M,Dr=null);break;case"focusout":Dr=pl=Zn=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,xc(W,n,V);break;case"selectionchange":if(u2)break;case"keydown":case"keyup":xc(W,n,V)}var ue;if(ul)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Kn?lc(e,n)&&(de="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(de="onCompositionStart");de&&(oc&&n.locale!=="ko"&&(Kn||de!=="onCompositionStart"?de==="onCompositionEnd"&&Kn&&(ue=Ju()):(dn=V,rl="value"in dn?dn.value:dn.textContent,Kn=!0)),se=qo(M,de),0<se.length&&(de=new nc(de,e,null,n,V),W.push({event:de,listeners:se}),ue?de.data=ue:(ue=sc(n),ue!==null&&(de.data=ue)))),(ue=$p?Gp(e,n):Jp(e,n))&&(M=qo(M,"onBeforeInput"),0<M.length&&(V=new nc("onBeforeInput","beforeinput",null,n,V),W.push({event:V,listeners:M}),V.data=ue))}Nc(W,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qo(e,t){for(var n=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=br(e,n),u!=null&&o.unshift(Hr(e,u,l)),u=br(e,t),u!=null&&o.push(Hr(e,u,l))),e=e.return}return o}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oc(e,t,n,o,l){for(var u=t._reactName,h=[];n!==null&&n!==o;){var w=n,j=w.alternate,M=w.stateNode;if(j!==null&&j===o)break;w.tag===5&&M!==null&&(w=M,l?(j=br(n,u),j!=null&&h.unshift(Hr(n,j,w))):l||(j=br(n,u),j!=null&&h.push(Hr(n,j,w)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var p2=/\r\n?/g,h2=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(p2,`
`).replace(h2,"")}function Qo(e,t,n){if(t=Tc(t),Tc(e)!==t&&n)throw Error(a(425))}function Xo(){}var wl=null,bl=null;function kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cl=typeof setTimeout=="function"?setTimeout:void 0,m2=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,v2=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(e){return Ac.resolve(null).then(e).catch(g2)}:Cl;function g2(e){setTimeout(function(){throw e})}function Sl(e,t){var n=t,o=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(o===0){e.removeChild(l),Or(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=l}while(n);Or(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Gn,Br="__reactProps$"+Gn,Wt="__reactContainer$"+Gn,Pl="__reactEvents$"+Gn,y2="__reactListeners$"+Gn,x2="__reactHandles$"+Gn;function _n(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rc(e);e!==null;){if(n=e[Mt])return n;e=Rc(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[Mt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Ko(e){return e[Br]||null}var jl=[],er=-1;function hn(e){return{current:e}}function _e(e){0>er||(e.current=jl[er],jl[er]=null,er--)}function Ee(e,t){er++,jl[er]=e.current,e.current=t}var mn={},Ze=hn(mn),nt=hn(!1),On=mn;function tr(e,t){var n=e.type.contextTypes;if(!n)return mn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in n)l[u]=t[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function rt(e){return e=e.childContextTypes,e!=null}function Zo(){_e(nt),_e(Ze)}function Mc(e,t,n){if(Ze.current!==mn)throw Error(a(168));Ee(Ze,t),Ee(nt,n)}function Lc(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var l in o)if(!(l in t))throw Error(a(108,ge(e)||"Unknown",l));return P({},n,o)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,On=Ze.current,Ee(Ze,e),Ee(nt,nt.current),!0}function zc(e,t,n){var o=e.stateNode;if(!o)throw Error(a(169));n?(e=Lc(e,t,On),o.__reactInternalMemoizedMergedChildContext=e,_e(nt),_e(Ze),Ee(Ze,e)):_e(nt),Ee(nt,n)}var qt=null,$o=!1,El=!1;function Dc(e){qt===null?qt=[e]:qt.push(e)}function w2(e){$o=!0,Dc(e)}function vn(){if(!El&&qt!==null){El=!0;var e=0,t=Ce;try{var n=qt;for(Ce=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}qt=null,$o=!1}catch(l){throw qt!==null&&(qt=qt.slice(e+1)),Fu(Za,vn),l}finally{Ce=t,El=!1}}return null}var nr=[],rr=0,Go=null,Jo=0,ht=[],mt=0,Tn=null,Qt=1,Xt="";function An(e,t){nr[rr++]=Jo,nr[rr++]=Go,Go=e,Jo=t}function Ic(e,t,n){ht[mt++]=Qt,ht[mt++]=Xt,ht[mt++]=Tn,Tn=e;var o=Qt;e=Xt;var l=32-wt(o)-1;o&=~(1<<l),n+=1;var u=32-wt(t)+l;if(30<u){var h=l-l%5;u=(o&(1<<h)-1).toString(32),o>>=h,l-=h,Qt=1<<32-wt(t)+l|n<<l|o,Xt=u+e}else Qt=1<<u|n<<l|o,Xt=e}function Nl(e){e.return!==null&&(An(e,1),Ic(e,1,0))}function _l(e){for(;e===Go;)Go=nr[--rr],nr[rr]=null,Jo=nr[--rr],nr[rr]=null;for(;e===Tn;)Tn=ht[--mt],ht[mt]=null,Xt=ht[--mt],ht[mt]=null,Qt=ht[--mt],ht[mt]=null}var ut=null,ct=null,Oe=!1,kt=null;function Fc(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ct=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Qt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,ct=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(Oe){var t=ct;if(t){var n=t;if(!Hc(e,t)){if(Ol(e))throw Error(a(418));t=pn(n.nextSibling);var o=ut;t&&Hc(e,t)?Fc(o,n):(e.flags=e.flags&-4097|2,Oe=!1,ut=e)}}else{if(Ol(e))throw Error(a(418));e.flags=e.flags&-4097|2,Oe=!1,ut=e}}}function Bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function ei(e){if(e!==ut)return!1;if(!Oe)return Bc(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kl(e.type,e.memoizedProps)),t&&(t=ct)){if(Ol(e))throw Uc(),Error(a(418));for(;t;)Fc(e,t),t=pn(t.nextSibling)}if(Bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ut?pn(e.stateNode.nextSibling):null;return!0}function Uc(){for(var e=ct;e;)e=pn(e.nextSibling)}function or(){ct=ut=null,Oe=!1}function Al(e){kt===null?kt=[e]:kt.push(e)}var b2=D.ReactCurrentBatchConfig;function Ct(e,t){if(e&&e.defaultProps){t=P({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ti=hn(null),ni=null,ir=null,Rl=null;function Ml(){Rl=ir=ni=null}function Ll(e){var t=ti.current;_e(ti),e._currentValue=t}function zl(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){ni=e,Rl=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(Rl!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(ni===null)throw Error(a(308));ir=e,ni.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Rn=null;function Dl(e){Rn===null?Rn=[e]:Rn.push(e)}function Vc(e,t,n,o){var l=t.interleaved;return l===null?(n.next=n,Dl(t)):(n.next=l.next,l.next=n),t.interleaved=n,Kt(e,o)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,Kt(e,n)}return l=o.interleaved,l===null?(t.next=t,Dl(o)):(t.next=l.next,l.next=t),o.interleaved=t,Kt(e,n)}function ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ga(e,n)}}function qc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var h={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?l=u=h:u=u.next=h,n=n.next}while(n!==null);u===null?l=u=t:u=u.next=t}else l=u=t;n={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oi(e,t,n,o){var l=e.updateQueue;gn=!1;var u=l.firstBaseUpdate,h=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var j=w,M=j.next;j.next=null,h===null?u=M:h.next=M,h=j;var V=e.alternate;V!==null&&(V=V.updateQueue,w=V.lastBaseUpdate,w!==h&&(w===null?V.firstBaseUpdate=M:w.next=M,V.lastBaseUpdate=j))}if(u!==null){var W=l.baseState;h=0,V=M=j=null,w=u;do{var U=w.lane,G=w.eventTime;if((o&U)===U){V!==null&&(V=V.next={eventTime:G,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ee=e,re=w;switch(U=t,G=n,re.tag){case 1:if(ee=re.payload,typeof ee=="function"){W=ee.call(G,W,U);break e}W=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=re.payload,U=typeof ee=="function"?ee.call(G,W,U):ee,U==null)break e;W=P({},W,U);break e;case 2:gn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,U=l.effects,U===null?l.effects=[w]:U.push(w))}else G={eventTime:G,lane:U,tag:w.tag,payload:w.payload,callback:w.callback,next:null},V===null?(M=V=G,j=W):V=V.next=G,h|=U;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;U=w,w=U.next,U.next=null,l.lastBaseUpdate=U,l.shared.pending=null}}while(!0);if(V===null&&(j=W),l.baseState=j,l.firstBaseUpdate=M,l.lastBaseUpdate=V,t=l.shared.interleaved,t!==null){l=t;do h|=l.lane,l=l.next;while(l!==t)}else u===null&&(l.shared.lanes=0);zn|=h,e.lanes=h,e.memoizedState=W}}function Qc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],l=o.callback;if(l!==null){if(o.callback=null,o=n,typeof l!="function")throw Error(a(191,l));l.call(o)}}}var Xc=new r.Component().refs;function Fl(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:P({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ii={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=et(),l=kn(e),u=Zt(o,l);u.payload=t,n!=null&&(u.callback=n),t=yn(e,u,l),t!==null&&(jt(t,e,l,o),ri(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=et(),l=kn(e),u=Zt(o,l);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=yn(e,u,l),t!==null&&(jt(t,e,l,o),ri(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),o=kn(e),l=Zt(n,o);l.tag=2,t!=null&&(l.callback=t),t=yn(e,l,o),t!==null&&(jt(t,e,o,n),ri(t,e,o))}};function Kc(e,t,n,o,l,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,h):t.prototype&&t.prototype.isPureReactComponent?!zr(n,o)||!zr(l,u):!0}function Zc(e,t,n){var o=!1,l=mn,u=t.contextType;return typeof u=="object"&&u!==null?u=vt(u):(l=rt(t)?On:Ze.current,o=t.contextTypes,u=(o=o!=null)?tr(e,l):mn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ii,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),t}function Yc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&ii.enqueueReplaceState(t,t.state,null)}function Hl(e,t,n,o){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=Xc,Il(e);var u=t.contextType;typeof u=="object"&&u!==null?l.context=vt(u):(u=rt(t)?On:Ze.current,l.context=tr(e,u)),l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Fl(e,t,u,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ii.enqueueReplaceState(l,l.state,null),oi(e,n,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var o=n.stateNode}if(!o)throw Error(a(147,e));var l=o,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(h){var w=l.refs;w===Xc&&(w=l.refs={}),h===null?delete w[u]:w[u]=h},t._stringRef=u,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ai(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $c(e){var t=e._init;return t(e._payload)}function Gc(e){function t(O,N){if(e){var T=O.deletions;T===null?(O.deletions=[N],O.flags|=16):T.push(N)}}function n(O,N){if(!e)return null;for(;N!==null;)t(O,N),N=N.sibling;return null}function o(O,N){for(O=new Map;N!==null;)N.key!==null?O.set(N.key,N):O.set(N.index,N),N=N.sibling;return O}function l(O,N){return O=Sn(O,N),O.index=0,O.sibling=null,O}function u(O,N,T){return O.index=T,e?(T=O.alternate,T!==null?(T=T.index,T<N?(O.flags|=2,N):T):(O.flags|=2,N)):(O.flags|=1048576,N)}function h(O){return e&&O.alternate===null&&(O.flags|=2),O}function w(O,N,T,q){return N===null||N.tag!==6?(N=Cs(T,O.mode,q),N.return=O,N):(N=l(N,T),N.return=O,N)}function j(O,N,T,q){var ie=T.type;return ie===F?V(O,N,T.props.children,q,T.key):N!==null&&(N.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Se&&$c(ie)===N.type)?(q=l(N,T.props),q.ref=Vr(O,N,T),q.return=O,q):(q=Pi(T.type,T.key,T.props,null,O.mode,q),q.ref=Vr(O,N,T),q.return=O,q)}function M(O,N,T,q){return N===null||N.tag!==4||N.stateNode.containerInfo!==T.containerInfo||N.stateNode.implementation!==T.implementation?(N=Ss(T,O.mode,q),N.return=O,N):(N=l(N,T.children||[]),N.return=O,N)}function V(O,N,T,q,ie){return N===null||N.tag!==7?(N=Hn(T,O.mode,q,ie),N.return=O,N):(N=l(N,T),N.return=O,N)}function W(O,N,T){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Cs(""+N,O.mode,T),N.return=O,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case H:return T=Pi(N.type,N.key,N.props,null,O.mode,T),T.ref=Vr(O,null,N),T.return=O,T;case B:return N=Ss(N,O.mode,T),N.return=O,N;case Se:var q=N._init;return W(O,q(N._payload),T)}if(yr(N)||ae(N))return N=Hn(N,O.mode,T,null),N.return=O,N;ai(O,N)}return null}function U(O,N,T,q){var ie=N!==null?N.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return ie!==null?null:w(O,N,""+T,q);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case H:return T.key===ie?j(O,N,T,q):null;case B:return T.key===ie?M(O,N,T,q):null;case Se:return ie=T._init,U(O,N,ie(T._payload),q)}if(yr(T)||ae(T))return ie!==null?null:V(O,N,T,q,null);ai(O,T)}return null}function G(O,N,T,q,ie){if(typeof q=="string"&&q!==""||typeof q=="number")return O=O.get(T)||null,w(N,O,""+q,ie);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case H:return O=O.get(q.key===null?T:q.key)||null,j(N,O,q,ie);case B:return O=O.get(q.key===null?T:q.key)||null,M(N,O,q,ie);case Se:var se=q._init;return G(O,N,T,se(q._payload),ie)}if(yr(q)||ae(q))return O=O.get(T)||null,V(N,O,q,ie,null);ai(N,q)}return null}function ee(O,N,T,q){for(var ie=null,se=null,ue=N,de=N=0,qe=null;ue!==null&&de<T.length;de++){ue.index>de?(qe=ue,ue=null):qe=ue.sibling;var be=U(O,ue,T[de],q);if(be===null){ue===null&&(ue=qe);break}e&&ue&&be.alternate===null&&t(O,ue),N=u(be,N,de),se===null?ie=be:se.sibling=be,se=be,ue=qe}if(de===T.length)return n(O,ue),Oe&&An(O,de),ie;if(ue===null){for(;de<T.length;de++)ue=W(O,T[de],q),ue!==null&&(N=u(ue,N,de),se===null?ie=ue:se.sibling=ue,se=ue);return Oe&&An(O,de),ie}for(ue=o(O,ue);de<T.length;de++)qe=G(ue,O,de,T[de],q),qe!==null&&(e&&qe.alternate!==null&&ue.delete(qe.key===null?de:qe.key),N=u(qe,N,de),se===null?ie=qe:se.sibling=qe,se=qe);return e&&ue.forEach(function(Pn){return t(O,Pn)}),Oe&&An(O,de),ie}function re(O,N,T,q){var ie=ae(T);if(typeof ie!="function")throw Error(a(150));if(T=ie.call(T),T==null)throw Error(a(151));for(var se=ie=null,ue=N,de=N=0,qe=null,be=T.next();ue!==null&&!be.done;de++,be=T.next()){ue.index>de?(qe=ue,ue=null):qe=ue.sibling;var Pn=U(O,ue,be.value,q);if(Pn===null){ue===null&&(ue=qe);break}e&&ue&&Pn.alternate===null&&t(O,ue),N=u(Pn,N,de),se===null?ie=Pn:se.sibling=Pn,se=Pn,ue=qe}if(be.done)return n(O,ue),Oe&&An(O,de),ie;if(ue===null){for(;!be.done;de++,be=T.next())be=W(O,be.value,q),be!==null&&(N=u(be,N,de),se===null?ie=be:se.sibling=be,se=be);return Oe&&An(O,de),ie}for(ue=o(O,ue);!be.done;de++,be=T.next())be=G(ue,O,de,be.value,q),be!==null&&(e&&be.alternate!==null&&ue.delete(be.key===null?de:be.key),N=u(be,N,de),se===null?ie=be:se.sibling=be,se=be);return e&&ue.forEach(function(eh){return t(O,eh)}),Oe&&An(O,de),ie}function De(O,N,T,q){if(typeof T=="object"&&T!==null&&T.type===F&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case H:e:{for(var ie=T.key,se=N;se!==null;){if(se.key===ie){if(ie=T.type,ie===F){if(se.tag===7){n(O,se.sibling),N=l(se,T.props.children),N.return=O,O=N;break e}}else if(se.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Se&&$c(ie)===se.type){n(O,se.sibling),N=l(se,T.props),N.ref=Vr(O,se,T),N.return=O,O=N;break e}n(O,se);break}else t(O,se);se=se.sibling}T.type===F?(N=Hn(T.props.children,O.mode,q,T.key),N.return=O,O=N):(q=Pi(T.type,T.key,T.props,null,O.mode,q),q.ref=Vr(O,N,T),q.return=O,O=q)}return h(O);case B:e:{for(se=T.key;N!==null;){if(N.key===se)if(N.tag===4&&N.stateNode.containerInfo===T.containerInfo&&N.stateNode.implementation===T.implementation){n(O,N.sibling),N=l(N,T.children||[]),N.return=O,O=N;break e}else{n(O,N);break}else t(O,N);N=N.sibling}N=Ss(T,O.mode,q),N.return=O,O=N}return h(O);case Se:return se=T._init,De(O,N,se(T._payload),q)}if(yr(T))return ee(O,N,T,q);if(ae(T))return re(O,N,T,q);ai(O,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,N!==null&&N.tag===6?(n(O,N.sibling),N=l(N,T),N.return=O,O=N):(n(O,N),N=Cs(T,O.mode,q),N.return=O,O=N),h(O)):n(O,N)}return De}var lr=Gc(!0),Jc=Gc(!1),Wr={},Lt=hn(Wr),qr=hn(Wr),Qr=hn(Wr);function Mn(e){if(e===Wr)throw Error(a(174));return e}function Bl(e,t){switch(Ee(Qr,t),Ee(qr,e),Ee(Lt,Wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ha(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ha(t,e)}_e(Lt),Ee(Lt,t)}function sr(){_e(Lt),_e(qr),_e(Qr)}function e0(e){Mn(Qr.current);var t=Mn(Lt.current),n=Ha(t,e.type);t!==n&&(Ee(qr,e),Ee(Lt,n))}function Ul(e){qr.current===e&&(_e(Lt),_e(qr))}var Re=hn(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function Wl(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var si=D.ReactCurrentDispatcher,ql=D.ReactCurrentBatchConfig,Ln=0,Me=null,Fe=null,Ve=null,ui=!1,Xr=!1,Kr=0,k2=0;function Ye(){throw Error(a(321))}function Ql(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function Xl(e,t,n,o,l,u){if(Ln=u,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,si.current=e===null||e.memoizedState===null?j2:E2,e=n(o,l),Xr){u=0;do{if(Xr=!1,Kr=0,25<=u)throw Error(a(301));u+=1,Ve=Fe=null,t.updateQueue=null,si.current=N2,e=n(o,l)}while(Xr)}if(si.current=fi,t=Fe!==null&&Fe.next!==null,Ln=0,Ve=Fe=Me=null,ui=!1,t)throw Error(a(300));return e}function Kl(){var e=Kr!==0;return Kr=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Me.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function gt(){if(Fe===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Ve===null?Me.memoizedState:Ve.next;if(t!==null)Ve=t,Fe=e;else{if(e===null)throw Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ve===null?Me.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Zr(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=gt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var o=Fe,l=o.baseQueue,u=n.pending;if(u!==null){if(l!==null){var h=l.next;l.next=u.next,u.next=h}o.baseQueue=l=u,n.pending=null}if(l!==null){u=l.next,o=o.baseState;var w=h=null,j=null,M=u;do{var V=M.lane;if((Ln&V)===V)j!==null&&(j=j.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),o=M.hasEagerState?M.eagerState:e(o,M.action);else{var W={lane:V,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};j===null?(w=j=W,h=o):j=j.next=W,Me.lanes|=V,zn|=V}M=M.next}while(M!==null&&M!==u);j===null?h=o:j.next=w,bt(o,t.memoizedState)||(ot=!0),t.memoizedState=o,t.baseState=h,t.baseQueue=j,n.lastRenderedState=o}if(e=n.interleaved,e!==null){l=e;do u=l.lane,Me.lanes|=u,zn|=u,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=gt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var o=n.dispatch,l=n.pending,u=t.memoizedState;if(l!==null){n.pending=null;var h=l=l.next;do u=e(u,h.action),h=h.next;while(h!==l);bt(u,t.memoizedState)||(ot=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,o]}function t0(){}function n0(e,t){var n=Me,o=gt(),l=t(),u=!bt(o.memoizedState,l);if(u&&(o.memoizedState=l,ot=!0),o=o.queue,$l(i0.bind(null,n,o,e),[e]),o.getSnapshot!==t||u||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Yr(9,o0.bind(null,n,o,l,t),void 0,null),We===null)throw Error(a(349));(Ln&30)!==0||r0(n,t,l)}return l}function r0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function o0(e,t,n,o){t.value=n,t.getSnapshot=o,a0(t)&&l0(e)}function i0(e,t,n){return n(function(){a0(t)&&l0(e)})}function a0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function l0(e){var t=Kt(e,1);t!==null&&jt(t,e,1,-1)}function s0(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},t.queue=e,e=e.dispatch=P2.bind(null,Me,e),[t.memoizedState,e]}function Yr(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function u0(){return gt().memoizedState}function ci(e,t,n,o){var l=zt();Me.flags|=e,l.memoizedState=Yr(1|t,n,void 0,o===void 0?null:o)}function di(e,t,n,o){var l=gt();o=o===void 0?null:o;var u=void 0;if(Fe!==null){var h=Fe.memoizedState;if(u=h.destroy,o!==null&&Ql(o,h.deps)){l.memoizedState=Yr(t,n,u,o);return}}Me.flags|=e,l.memoizedState=Yr(1|t,n,u,o)}function c0(e,t){return ci(8390656,8,e,t)}function $l(e,t){return di(2048,8,e,t)}function d0(e,t){return di(4,2,e,t)}function f0(e,t){return di(4,4,e,t)}function p0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function h0(e,t,n){return n=n!=null?n.concat([e]):null,di(4,4,p0.bind(null,t,e),n)}function Gl(){}function m0(e,t){var n=gt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ql(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function v0(e,t){var n=gt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ql(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function g0(e,t,n){return(Ln&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(bt(n,t)||(n=Vu(),Me.lanes|=n,zn|=n,e.baseState=!0),t)}function C2(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var o=ql.transition;ql.transition={};try{e(!1),t()}finally{Ce=n,ql.transition=o}}function y0(){return gt().memoizedState}function S2(e,t,n){var o=kn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},x0(e))w0(t,n);else if(n=Vc(e,t,n,o),n!==null){var l=et();jt(n,e,o,l),b0(n,t,o)}}function P2(e,t,n){var o=kn(e),l={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(x0(e))w0(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var h=t.lastRenderedState,w=u(h,n);if(l.hasEagerState=!0,l.eagerState=w,bt(w,h)){var j=t.interleaved;j===null?(l.next=l,Dl(t)):(l.next=j.next,j.next=l),t.interleaved=l;return}}catch{}finally{}n=Vc(e,t,l,o),n!==null&&(l=et(),jt(n,e,o,l),b0(n,t,o))}}function x0(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function w0(e,t){Xr=ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function b0(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ga(e,n)}}var fi={readContext:vt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},j2={readContext:vt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:c0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ci(4194308,4,p0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return ci(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=zt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=S2.bind(null,Me,e),[o.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:s0,useDebugValue:Gl,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=s0(!1),t=e[0];return e=C2.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Me,l=zt();if(Oe){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),We===null)throw Error(a(349));(Ln&30)!==0||r0(o,t,n)}l.memoizedState=n;var u={value:n,getSnapshot:t};return l.queue=u,c0(i0.bind(null,o,u,e),[e]),o.flags|=2048,Yr(9,o0.bind(null,o,u,n,t),void 0,null),n},useId:function(){var e=zt(),t=We.identifierPrefix;if(Oe){var n=Xt,o=Qt;n=(o&~(1<<32-wt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=k2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},E2={readContext:vt,useCallback:m0,useContext:vt,useEffect:$l,useImperativeHandle:h0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:v0,useReducer:Zl,useRef:u0,useState:function(){return Zl(Zr)},useDebugValue:Gl,useDeferredValue:function(e){var t=gt();return g0(t,Fe.memoizedState,e)},useTransition:function(){var e=Zl(Zr)[0],t=gt().memoizedState;return[e,t]},useMutableSource:t0,useSyncExternalStore:n0,useId:y0,unstable_isNewReconciler:!1},N2={readContext:vt,useCallback:m0,useContext:vt,useEffect:$l,useImperativeHandle:h0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:v0,useReducer:Yl,useRef:u0,useState:function(){return Yl(Zr)},useDebugValue:Gl,useDeferredValue:function(e){var t=gt();return Fe===null?t.memoizedState=e:g0(t,Fe.memoizedState,e)},useTransition:function(){var e=Yl(Zr)[0],t=gt().memoizedState;return[e,t]},useMutableSource:t0,useSyncExternalStore:n0,useId:y0,unstable_isNewReconciler:!1};function ur(e,t){try{var n="",o=t;do n+=ke(o),o=o.return;while(o);var l=n}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:l,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function es(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _2=typeof WeakMap=="function"?WeakMap:Map;function k0(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){xi||(xi=!0,ms=o),es(e,t)},n}function C0(e,t,n){n=Zt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=t.value;n.payload=function(){return o(l)},n.callback=function(){es(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){es(e,t),typeof o!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),n}function S0(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new _2;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(n)||(l.add(n),e=V2.bind(null,e,t,n),t.then(e,e))}function P0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function j0(e,t,n,o,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,yn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var O2=D.ReactCurrentOwner,ot=!1;function Je(e,t,n,o){t.child=e===null?Jc(t,null,n,o):lr(t,e.child,n,o)}function E0(e,t,n,o,l){n=n.render;var u=t.ref;return ar(t,l),o=Xl(e,t,n,o,u,l),n=Kl(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Yt(e,t,l)):(Oe&&n&&Nl(t),t.flags|=1,Je(e,t,o,l),t.child)}function N0(e,t,n,o,l){if(e===null){var u=n.type;return typeof u=="function"&&!ks(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,_0(e,t,u,o,l)):(e=Pi(n.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&l)===0){var h=u.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(h,o)&&e.ref===t.ref)return Yt(e,t,l)}return t.flags|=1,e=Sn(u,o),e.ref=t.ref,e.return=t,t.child=e}function _0(e,t,n,o,l){if(e!==null){var u=e.memoizedProps;if(zr(u,o)&&e.ref===t.ref)if(ot=!1,t.pendingProps=o=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Yt(e,t,l)}return ts(e,t,n,o,l)}function O0(e,t,n){var o=t.pendingProps,l=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(dr,dt),dt|=n;else{if((n&1073741824)===0)return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(dr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:n,Ee(dr,dt),dt|=o}else u!==null?(o=u.baseLanes|n,t.memoizedState=null):o=n,Ee(dr,dt),dt|=o;return Je(e,t,l,n),t.child}function T0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ts(e,t,n,o,l){var u=rt(n)?On:Ze.current;return u=tr(t,u),ar(t,l),n=Xl(e,t,n,o,u,l),o=Kl(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Yt(e,t,l)):(Oe&&o&&Nl(t),t.flags|=1,Je(e,t,n,l),t.child)}function A0(e,t,n,o,l){if(rt(n)){var u=!0;Yo(t)}else u=!1;if(ar(t,l),t.stateNode===null)hi(e,t),Zc(t,n,o),Hl(t,n,o,l),o=!0;else if(e===null){var h=t.stateNode,w=t.memoizedProps;h.props=w;var j=h.context,M=n.contextType;typeof M=="object"&&M!==null?M=vt(M):(M=rt(n)?On:Ze.current,M=tr(t,M));var V=n.getDerivedStateFromProps,W=typeof V=="function"||typeof h.getSnapshotBeforeUpdate=="function";W||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==o||j!==M)&&Yc(t,h,o,M),gn=!1;var U=t.memoizedState;h.state=U,oi(t,o,h,l),j=t.memoizedState,w!==o||U!==j||nt.current||gn?(typeof V=="function"&&(Fl(t,n,V,o),j=t.memoizedState),(w=gn||Kc(t,n,w,o,U,j,M))?(W||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=j),h.props=o,h.state=j,h.context=M,o=w):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{h=t.stateNode,Wc(e,t),w=t.memoizedProps,M=t.type===t.elementType?w:Ct(t.type,w),h.props=M,W=t.pendingProps,U=h.context,j=n.contextType,typeof j=="object"&&j!==null?j=vt(j):(j=rt(n)?On:Ze.current,j=tr(t,j));var G=n.getDerivedStateFromProps;(V=typeof G=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==W||U!==j)&&Yc(t,h,o,j),gn=!1,U=t.memoizedState,h.state=U,oi(t,o,h,l);var ee=t.memoizedState;w!==W||U!==ee||nt.current||gn?(typeof G=="function"&&(Fl(t,n,G,o),ee=t.memoizedState),(M=gn||Kc(t,n,M,o,U,ee,j)||!1)?(V||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ee,j),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ee,j)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=ee),h.props=o,h.state=ee,h.context=j,o=M):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),o=!1)}return ns(e,t,n,o,u,l)}function ns(e,t,n,o,l,u){T0(e,t);var h=(t.flags&128)!==0;if(!o&&!h)return l&&zc(t,n,!1),Yt(e,t,u);o=t.stateNode,O2.current=t;var w=h&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&h?(t.child=lr(t,e.child,null,u),t.child=lr(t,null,w,u)):Je(e,t,w,u),t.memoizedState=o.state,l&&zc(t,n,!0),t.child}function R0(e){var t=e.stateNode;t.pendingContext?Mc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mc(e,t.context,!1),Bl(e,t.containerInfo)}function M0(e,t,n,o,l){return or(),Al(l),t.flags|=256,Je(e,t,n,o),t.child}var rs={dehydrated:null,treeContext:null,retryLane:0};function os(e){return{baseLanes:e,cachePool:null,transitions:null}}function L0(e,t,n){var o=t.pendingProps,l=Re.current,u=!1,h=(t.flags&128)!==0,w;if((w=h)||(w=e!==null&&e.memoizedState===null?!1:(l&2)!==0),w?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ee(Re,l&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=o.children,e=o.fallback,u?(o=t.mode,u=t.child,h={mode:"hidden",children:h},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=h):u=ji(h,o,0,null),e=Hn(e,o,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=os(n),t.memoizedState=rs,e):is(t,h));if(l=e.memoizedState,l!==null&&(w=l.dehydrated,w!==null))return T2(e,t,h,o,w,l,n);if(u){u=o.fallback,h=t.mode,l=e.child,w=l.sibling;var j={mode:"hidden",children:o.children};return(h&1)===0&&t.child!==l?(o=t.child,o.childLanes=0,o.pendingProps=j,t.deletions=null):(o=Sn(l,j),o.subtreeFlags=l.subtreeFlags&14680064),w!==null?u=Sn(w,u):(u=Hn(u,h,n,null),u.flags|=2),u.return=t,o.return=t,o.sibling=u,t.child=o,o=u,u=t.child,h=e.child.memoizedState,h=h===null?os(n):{baseLanes:h.baseLanes|n,cachePool:null,transitions:h.transitions},u.memoizedState=h,u.childLanes=e.childLanes&~n,t.memoizedState=rs,o}return u=e.child,e=u.sibling,o=Sn(u,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function is(e,t){return t=ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pi(e,t,n,o){return o!==null&&Al(o),lr(t,e.child,null,n),e=is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function T2(e,t,n,o,l,u,h){if(n)return t.flags&256?(t.flags&=-257,o=Jl(Error(a(422))),pi(e,t,h,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=o.fallback,l=t.mode,o=ji({mode:"visible",children:o.children},l,0,null),u=Hn(u,l,h,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,(t.mode&1)!==0&&lr(t,e.child,null,h),t.child.memoizedState=os(h),t.memoizedState=rs,u);if((t.mode&1)===0)return pi(e,t,h,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var w=o.dgst;return o=w,u=Error(a(419)),o=Jl(u,o,void 0),pi(e,t,h,o)}if(w=(h&e.childLanes)!==0,ot||w){if(o=We,o!==null){switch(h&-h){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(o.suspendedLanes|h))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Kt(e,l),jt(o,e,l,-1))}return bs(),o=Jl(Error(a(421))),pi(e,t,h,o)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=W2.bind(null,e),l._reactRetry=t,null):(e=u.treeContext,ct=pn(l.nextSibling),ut=t,Oe=!0,kt=null,e!==null&&(ht[mt++]=Qt,ht[mt++]=Xt,ht[mt++]=Tn,Qt=e.id,Xt=e.overflow,Tn=t),t=is(t,o.children),t.flags|=4096,t)}function z0(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),zl(e.return,t,n)}function as(e,t,n,o,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=l)}function D0(e,t,n){var o=t.pendingProps,l=o.revealOrder,u=o.tail;if(Je(e,t,o.children,n),o=Re.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&z0(e,n,t);else if(e.tag===19)z0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ee(Re,o),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&li(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),as(t,!1,l,n,u);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&li(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}as(t,!0,n,null,u);break;case"together":as(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function A2(e,t,n){switch(t.tag){case 3:R0(t),or();break;case 5:e0(t);break;case 1:rt(t.type)&&Yo(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,l=t.memoizedProps.value;Ee(ti,o._currentValue),o._currentValue=l;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ee(Re,Re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?L0(e,t,n):(Ee(Re,Re.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);Ee(Re,Re.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return D0(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ee(Re,Re.current),o)break;return null;case 22:case 23:return t.lanes=0,O0(e,t,n)}return Yt(e,t,n)}var I0,ls,F0,H0;I0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ls=function(){},F0=function(e,t,n,o){var l=e.memoizedProps;if(l!==o){e=t.stateNode,Mn(Lt.current);var u=null;switch(n){case"input":l=za(e,l),o=za(e,o),u=[];break;case"select":l=P({},l,{value:void 0}),o=P({},o,{value:void 0}),u=[];break;case"textarea":l=Fa(e,l),o=Fa(e,o),u=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Xo)}Ba(n,o);var h;n=null;for(M in l)if(!o.hasOwnProperty(M)&&l.hasOwnProperty(M)&&l[M]!=null)if(M==="style"){var w=l[M];for(h in w)w.hasOwnProperty(h)&&(n||(n={}),n[h]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(c.hasOwnProperty(M)?u||(u=[]):(u=u||[]).push(M,null));for(M in o){var j=o[M];if(w=l?.[M],o.hasOwnProperty(M)&&j!==w&&(j!=null||w!=null))if(M==="style")if(w){for(h in w)!w.hasOwnProperty(h)||j&&j.hasOwnProperty(h)||(n||(n={}),n[h]="");for(h in j)j.hasOwnProperty(h)&&w[h]!==j[h]&&(n||(n={}),n[h]=j[h])}else n||(u||(u=[]),u.push(M,n)),n=j;else M==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,w=w?w.__html:void 0,j!=null&&w!==j&&(u=u||[]).push(M,j)):M==="children"?typeof j!="string"&&typeof j!="number"||(u=u||[]).push(M,""+j):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(c.hasOwnProperty(M)?(j!=null&&M==="onScroll"&&Ne("scroll",e),u||w===j||(u=[])):(u=u||[]).push(M,j))}n&&(u=u||[]).push("style",n);var M=u;(t.updateQueue=M)&&(t.flags|=4)}},H0=function(e,t,n,o){n!==o&&(t.flags|=4)};function $r(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function R2(e,t,n){var o=t.pendingProps;switch(_l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return rt(t.type)&&Zo(),$e(t),null;case 3:return o=t.stateNode,sr(),_e(nt),_e(Ze),Wl(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(ys(kt),kt=null))),ls(e,t),$e(t),null;case 5:Ul(t);var l=Mn(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)F0(e,t,n,o,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(a(166));return $e(t),null}if(e=Mn(Lt.current),ei(t)){o=t.stateNode,n=t.type;var u=t.memoizedProps;switch(o[Mt]=t,o[Br]=u,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",o),Ne("close",o);break;case"iframe":case"object":case"embed":Ne("load",o);break;case"video":case"audio":for(l=0;l<Ir.length;l++)Ne(Ir[l],o);break;case"source":Ne("error",o);break;case"img":case"image":case"link":Ne("error",o),Ne("load",o);break;case"details":Ne("toggle",o);break;case"input":xu(o,u),Ne("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},Ne("invalid",o);break;case"textarea":ku(o,u),Ne("invalid",o)}Ba(n,u),l=null;for(var h in u)if(u.hasOwnProperty(h)){var w=u[h];h==="children"?typeof w=="string"?o.textContent!==w&&(u.suppressHydrationWarning!==!0&&Qo(o.textContent,w,e),l=["children",w]):typeof w=="number"&&o.textContent!==""+w&&(u.suppressHydrationWarning!==!0&&Qo(o.textContent,w,e),l=["children",""+w]):c.hasOwnProperty(h)&&w!=null&&h==="onScroll"&&Ne("scroll",o)}switch(n){case"input":At(o),bu(o,u,!0);break;case"textarea":At(o),Su(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=Xo)}o=l,t.updateQueue=o,o!==null&&(t.flags|=4)}else{h=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=h.createElement(n,{is:o.is}):(e=h.createElement(n),n==="select"&&(h=e,o.multiple?h.multiple=!0:o.size&&(h.size=o.size))):e=h.createElementNS(e,n),e[Mt]=t,e[Br]=o,I0(e,t,!1,!1),t.stateNode=e;e:{switch(h=Ua(n,o),n){case"dialog":Ne("cancel",e),Ne("close",e),l=o;break;case"iframe":case"object":case"embed":Ne("load",e),l=o;break;case"video":case"audio":for(l=0;l<Ir.length;l++)Ne(Ir[l],e);l=o;break;case"source":Ne("error",e),l=o;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),l=o;break;case"details":Ne("toggle",e),l=o;break;case"input":xu(e,o),l=za(e,o),Ne("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=P({},o,{value:void 0}),Ne("invalid",e);break;case"textarea":ku(e,o),l=Fa(e,o),Ne("invalid",e);break;default:l=o}Ba(n,l),w=l;for(u in w)if(w.hasOwnProperty(u)){var j=w[u];u==="style"?Nu(e,j):u==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&ju(e,j)):u==="children"?typeof j=="string"?(n!=="textarea"||j!=="")&&xr(e,j):typeof j=="number"&&xr(e,""+j):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?j!=null&&u==="onScroll"&&Ne("scroll",e):j!=null&&A(e,u,j,h))}switch(n){case"input":At(e),bu(e,o,!1);break;case"textarea":At(e),Su(e);break;case"option":o.value!=null&&e.setAttribute("value",""+le(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?Vn(e,!!o.multiple,u,!1):o.defaultValue!=null&&Vn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)H0(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(a(166));if(n=Mn(Qr.current),Mn(Lt.current),ei(t)){if(o=t.stateNode,n=t.memoizedProps,o[Mt]=t,(u=o.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Qo(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qo(o.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Mt]=t,t.stateNode=o}return $e(t),null;case 13:if(_e(Re),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Uc(),or(),t.flags|=98560,u=!1;else if(u=ei(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[Mt]=t}else or(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),u=!1}else kt!==null&&(ys(kt),kt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Re.current&1)!==0?He===0&&(He=3):bs())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return sr(),ls(e,t),e===null&&Fr(t.stateNode.containerInfo),$e(t),null;case 10:return Ll(t.type._context),$e(t),null;case 17:return rt(t.type)&&Zo(),$e(t),null;case 19:if(_e(Re),u=t.memoizedState,u===null)return $e(t),null;if(o=(t.flags&128)!==0,h=u.rendering,h===null)if(o)$r(u,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=li(e),h!==null){for(t.flags|=128,$r(u,!1),o=h.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)u=n,e=o,u.flags&=14680066,h=u.alternate,h===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=h.childLanes,u.lanes=h.lanes,u.child=h.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=h.memoizedProps,u.memoizedState=h.memoizedState,u.updateQueue=h.updateQueue,u.type=h.type,e=h.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Re,Re.current&1|2),t.child}e=e.sibling}u.tail!==null&&ze()>fr&&(t.flags|=128,o=!0,$r(u,!1),t.lanes=4194304)}else{if(!o)if(e=li(h),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Oe)return $e(t),null}else 2*ze()-u.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,o=!0,$r(u,!1),t.lanes=4194304);u.isBackwards?(h.sibling=t.child,t.child=h):(n=u.last,n!==null?n.sibling=h:t.child=h,u.last=h)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=ze(),t.sibling=null,n=Re.current,Ee(Re,o?n&1|2:n&1),t):($e(t),null);case 22:case 23:return ws(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(dt&1073741824)!==0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function M2(e,t){switch(_l(t),t.tag){case 1:return rt(t.type)&&Zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),_e(nt),_e(Ze),Wl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ul(t),null;case 13:if(_e(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Re),null;case 4:return sr(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return ws(),null;case 24:return null;default:return null}}var mi=!1,Ge=!1,L2=typeof WeakSet=="function"?WeakSet:Set,J=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Le(e,t,o)}else n.current=null}function ss(e,t,n){try{n()}catch(o){Le(e,t,o)}}var B0=!1;function z2(e,t){if(wl=Lo,e=yc(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var h=0,w=-1,j=-1,M=0,V=0,W=e,U=null;t:for(;;){for(var G;W!==n||l!==0&&W.nodeType!==3||(w=h+l),W!==u||o!==0&&W.nodeType!==3||(j=h+o),W.nodeType===3&&(h+=W.nodeValue.length),(G=W.firstChild)!==null;)U=W,W=G;for(;;){if(W===e)break t;if(U===n&&++M===l&&(w=h),U===u&&++V===o&&(j=h),(G=W.nextSibling)!==null)break;W=U,U=W.parentNode}W=G}n=w===-1||j===-1?null:{start:w,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},Lo=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var re=ee.memoizedProps,De=ee.memoizedState,O=t.stateNode,N=O.getSnapshotBeforeUpdate(t.elementType===t.type?re:Ct(t.type,re),De);O.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(q){Le(t,t.return,q)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return ee=B0,B0=!1,ee}function Gr(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&ss(t,n,u)}l=l.next}while(l!==o)}}function vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function U0(e){var t=e.alternate;t!==null&&(e.alternate=null,U0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Br],delete t[Pl],delete t[y2],delete t[x2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function V0(e){return e.tag===5||e.tag===3||e.tag===4}function W0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||V0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(o!==4&&(e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function ds(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ds(e,t,n),e=e.sibling;e!==null;)ds(e,t,n),e=e.sibling}var Qe=null,St=!1;function xn(e,t,n){for(n=n.child;n!==null;)q0(e,t,n),n=n.sibling}function q0(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:Ge||cr(n,t);case 6:var o=Qe,l=St;Qe=null,xn(e,t,n),Qe=o,St=l,Qe!==null&&(St?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(St?(e=Qe,n=n.stateNode,e.nodeType===8?Sl(e.parentNode,n):e.nodeType===1&&Sl(e,n),Or(e)):Sl(Qe,n.stateNode));break;case 4:o=Qe,l=St,Qe=n.stateNode.containerInfo,St=!0,xn(e,t,n),Qe=o,St=l;break;case 0:case 11:case 14:case 15:if(!Ge&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var u=l,h=u.destroy;u=u.tag,h!==void 0&&((u&2)!==0||(u&4)!==0)&&ss(n,t,h),l=l.next}while(l!==o)}xn(e,t,n);break;case 1:if(!Ge&&(cr(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(w){Le(n,t,w)}xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:n.mode&1?(Ge=(o=Ge)||n.memoizedState!==null,xn(e,t,n),Ge=o):xn(e,t,n);break;default:xn(e,t,n)}}function Q0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new L2),t.forEach(function(o){var l=q2.bind(null,e,o);n.has(o)||(n.add(o),o.then(l,l))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o];try{var u=e,h=t,w=h;e:for(;w!==null;){switch(w.tag){case 5:Qe=w.stateNode,St=!1;break e;case 3:Qe=w.stateNode.containerInfo,St=!0;break e;case 4:Qe=w.stateNode.containerInfo,St=!0;break e}w=w.return}if(Qe===null)throw Error(a(160));q0(u,h,l),Qe=null,St=!1;var j=l.alternate;j!==null&&(j.return=null),l.return=null}catch(M){Le(l,t,M)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)X0(t,e),t=t.sibling}function X0(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Dt(e),o&4){try{Gr(3,e,e.return),vi(3,e)}catch(re){Le(e,e.return,re)}try{Gr(5,e,e.return)}catch(re){Le(e,e.return,re)}}break;case 1:Pt(t,e),Dt(e),o&512&&n!==null&&cr(n,n.return);break;case 5:if(Pt(t,e),Dt(e),o&512&&n!==null&&cr(n,n.return),e.flags&32){var l=e.stateNode;try{xr(l,"")}catch(re){Le(e,e.return,re)}}if(o&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,h=n!==null?n.memoizedProps:u,w=e.type,j=e.updateQueue;if(e.updateQueue=null,j!==null)try{w==="input"&&u.type==="radio"&&u.name!=null&&wu(l,u),Ua(w,h);var M=Ua(w,u);for(h=0;h<j.length;h+=2){var V=j[h],W=j[h+1];V==="style"?Nu(l,W):V==="dangerouslySetInnerHTML"?ju(l,W):V==="children"?xr(l,W):A(l,V,W,M)}switch(w){case"input":Da(l,u);break;case"textarea":Cu(l,u);break;case"select":var U=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var G=u.value;G!=null?Vn(l,!!u.multiple,G,!1):U!==!!u.multiple&&(u.defaultValue!=null?Vn(l,!!u.multiple,u.defaultValue,!0):Vn(l,!!u.multiple,u.multiple?[]:"",!1))}l[Br]=u}catch(re){Le(e,e.return,re)}}break;case 6:if(Pt(t,e),Dt(e),o&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(re){Le(e,e.return,re)}}break;case 3:if(Pt(t,e),Dt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(re){Le(e,e.return,re)}break;case 4:Pt(t,e),Dt(e);break;case 13:Pt(t,e),Dt(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(hs=ze())),o&4&&Q0(e);break;case 22:if(V=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(M=Ge)||V,Pt(t,e),Ge=M):Pt(t,e),Dt(e),o&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!V&&(e.mode&1)!==0)for(J=e,V=e.child;V!==null;){for(W=J=V;J!==null;){switch(U=J,G=U.child,U.tag){case 0:case 11:case 14:case 15:Gr(4,U,U.return);break;case 1:cr(U,U.return);var ee=U.stateNode;if(typeof ee.componentWillUnmount=="function"){o=U,n=U.return;try{t=o,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(re){Le(o,n,re)}}break;case 5:cr(U,U.return);break;case 22:if(U.memoizedState!==null){Y0(W);continue}}G!==null?(G.return=U,J=G):Y0(W)}V=V.sibling}e:for(V=null,W=e;;){if(W.tag===5){if(V===null){V=W;try{l=W.stateNode,M?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(w=W.stateNode,j=W.memoizedProps.style,h=j!=null&&j.hasOwnProperty("display")?j.display:null,w.style.display=Eu("display",h))}catch(re){Le(e,e.return,re)}}}else if(W.tag===6){if(V===null)try{W.stateNode.nodeValue=M?"":W.memoizedProps}catch(re){Le(e,e.return,re)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===e)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===e)break e;for(;W.sibling===null;){if(W.return===null||W.return===e)break e;V===W&&(V=null),W=W.return}V===W&&(V=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:Pt(t,e),Dt(e),o&4&&Q0(e);break;case 21:break;default:Pt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(V0(n)){var o=n;break e}n=n.return}throw Error(a(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(xr(l,""),o.flags&=-33);var u=W0(e);ds(e,u,l);break;case 3:case 4:var h=o.stateNode.containerInfo,w=W0(e);cs(e,w,h);break;default:throw Error(a(161))}}catch(j){Le(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function D2(e,t,n){J=e,K0(e)}function K0(e,t,n){for(var o=(e.mode&1)!==0;J!==null;){var l=J,u=l.child;if(l.tag===22&&o){var h=l.memoizedState!==null||mi;if(!h){var w=l.alternate,j=w!==null&&w.memoizedState!==null||Ge;w=mi;var M=Ge;if(mi=h,(Ge=j)&&!M)for(J=l;J!==null;)h=J,j=h.child,h.tag===22&&h.memoizedState!==null?$0(l):j!==null?(j.return=h,J=j):$0(l);for(;u!==null;)J=u,K0(u),u=u.sibling;J=l,mi=w,Ge=M}Z0(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,J=u):Z0(e)}}function Z0(e){for(;J!==null;){var t=J;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||vi(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ge)if(n===null)o.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);o.componentDidUpdate(l,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Qc(t,u,o);break;case 3:var h=t.updateQueue;if(h!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qc(t,h,n)}break;case 5:var w=t.stateNode;if(n===null&&t.flags&4){n=w;var j=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&n.focus();break;case"img":j.src&&(n.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var M=t.alternate;if(M!==null){var V=M.memoizedState;if(V!==null){var W=V.dehydrated;W!==null&&Or(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ge||t.flags&512&&us(t)}catch(U){Le(t,t.return,U)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function Y0(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function $0(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vi(4,t)}catch(j){Le(t,n,j)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var l=t.return;try{o.componentDidMount()}catch(j){Le(t,l,j)}}var u=t.return;try{us(t)}catch(j){Le(t,u,j)}break;case 5:var h=t.return;try{us(t)}catch(j){Le(t,h,j)}}}catch(j){Le(t,t.return,j)}if(t===e){J=null;break}var w=t.sibling;if(w!==null){w.return=t.return,J=w;break}J=t.return}}var I2=Math.ceil,gi=D.ReactCurrentDispatcher,fs=D.ReactCurrentOwner,yt=D.ReactCurrentBatchConfig,we=0,We=null,Ie=null,Xe=0,dt=0,dr=hn(0),He=0,Jr=null,zn=0,yi=0,ps=0,eo=null,it=null,hs=0,fr=1/0,$t=null,xi=!1,ms=null,wn=null,wi=!1,bn=null,bi=0,to=0,vs=null,ki=-1,Ci=0;function et(){return(we&6)!==0?ze():ki!==-1?ki:ki=ze()}function kn(e){return(e.mode&1)===0?1:(we&2)!==0&&Xe!==0?Xe&-Xe:b2.transition!==null?(Ci===0&&(Ci=Vu()),Ci):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:Gu(e.type)),e)}function jt(e,t,n,o){if(50<to)throw to=0,vs=null,Error(a(185));Pr(e,n,o),((we&2)===0||e!==We)&&(e===We&&((we&2)===0&&(yi|=n),He===4&&Cn(e,Xe)),at(e,o),n===1&&we===0&&(t.mode&1)===0&&(fr=ze()+500,$o&&vn()))}function at(e,t){var n=e.callbackNode;bp(e,t);var o=Ao(e,e===We?Xe:0);if(o===0)n!==null&&Hu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Hu(n),t===1)e.tag===0?w2(J0.bind(null,e)):Dc(J0.bind(null,e)),v2(function(){(we&6)===0&&vn()}),n=null;else{switch(Wu(o)){case 1:n=Za;break;case 4:n=Bu;break;case 16:n=No;break;case 536870912:n=Uu;break;default:n=No}n=ld(n,G0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function G0(e,t){if(ki=-1,Ci=0,(we&6)!==0)throw Error(a(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var o=Ao(e,e===We?Xe:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Si(e,o);else{t=o;var l=we;we|=2;var u=td();(We!==e||Xe!==t)&&($t=null,fr=ze()+500,In(e,t));do try{B2();break}catch(w){ed(e,w)}while(!0);Ml(),gi.current=u,we=l,Ie!==null?t=0:(We=null,Xe=0,t=He)}if(t!==0){if(t===2&&(l=Ya(e),l!==0&&(o=l,t=gs(e,l))),t===1)throw n=Jr,In(e,0),Cn(e,o),at(e,ze()),n;if(t===6)Cn(e,o);else{if(l=e.current.alternate,(o&30)===0&&!F2(l)&&(t=Si(e,o),t===2&&(u=Ya(e),u!==0&&(o=u,t=gs(e,u))),t===1))throw n=Jr,In(e,0),Cn(e,o),at(e,ze()),n;switch(e.finishedWork=l,e.finishedLanes=o,t){case 0:case 1:throw Error(a(345));case 2:Fn(e,it,$t);break;case 3:if(Cn(e,o),(o&130023424)===o&&(t=hs+500-ze(),10<t)){if(Ao(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){et(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Cl(Fn.bind(null,e,it,$t),t);break}Fn(e,it,$t);break;case 4:if(Cn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,l=-1;0<o;){var h=31-wt(o);u=1<<h,h=t[h],h>l&&(l=h),o&=~u}if(o=l,o=ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*I2(o/1960))-o,10<o){e.timeoutHandle=Cl(Fn.bind(null,e,it,$t),o);break}Fn(e,it,$t);break;case 5:Fn(e,it,$t);break;default:throw Error(a(329))}}}return at(e,ze()),e.callbackNode===n?G0.bind(null,e):null}function gs(e,t){var n=eo;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=Si(e,t),e!==2&&(t=it,it=n,t!==null&&ys(t)),e}function ys(e){it===null?it=e:it.push.apply(it,e)}function F2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var l=n[o],u=l.getSnapshot;l=l.value;try{if(!bt(u(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~ps,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),o=1<<n;e[n]=-1,t&=~o}}function J0(e){if((we&6)!==0)throw Error(a(327));pr();var t=Ao(e,0);if((t&1)===0)return at(e,ze()),null;var n=Si(e,t);if(e.tag!==0&&n===2){var o=Ya(e);o!==0&&(t=o,n=gs(e,o))}if(n===1)throw n=Jr,In(e,0),Cn(e,t),at(e,ze()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,it,$t),at(e,ze()),null}function xs(e,t){var n=we;we|=1;try{return e(t)}finally{we=n,we===0&&(fr=ze()+500,$o&&vn())}}function Dn(e){bn!==null&&bn.tag===0&&(we&6)===0&&pr();var t=we;we|=1;var n=yt.transition,o=Ce;try{if(yt.transition=null,Ce=1,e)return e()}finally{Ce=o,yt.transition=n,we=t,(we&6)===0&&vn()}}function ws(){dt=dr.current,_e(dr)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,m2(n)),Ie!==null)for(n=Ie.return;n!==null;){var o=n;switch(_l(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Zo();break;case 3:sr(),_e(nt),_e(Ze),Wl();break;case 5:Ul(o);break;case 4:sr();break;case 13:_e(Re);break;case 19:_e(Re);break;case 10:Ll(o.type._context);break;case 22:case 23:ws()}n=n.return}if(We=e,Ie=e=Sn(e.current,null),Xe=dt=t,He=0,Jr=null,ps=yi=zn=0,it=eo=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],o=n.interleaved,o!==null){n.interleaved=null;var l=o.next,u=n.pending;if(u!==null){var h=u.next;u.next=l,o.next=h}n.pending=o}Rn=null}return e}function ed(e,t){do{var n=Ie;try{if(Ml(),si.current=fi,ui){for(var o=Me.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}ui=!1}if(Ln=0,Ve=Fe=Me=null,Xr=!1,Kr=0,fs.current=null,n===null||n.return===null){He=1,Jr=t,Ie=null;break}e:{var u=e,h=n.return,w=n,j=t;if(t=Xe,w.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var M=j,V=w,W=V.tag;if((V.mode&1)===0&&(W===0||W===11||W===15)){var U=V.alternate;U?(V.updateQueue=U.updateQueue,V.memoizedState=U.memoizedState,V.lanes=U.lanes):(V.updateQueue=null,V.memoizedState=null)}var G=P0(h);if(G!==null){G.flags&=-257,j0(G,h,w,u,t),G.mode&1&&S0(u,M,t),t=G,j=M;var ee=t.updateQueue;if(ee===null){var re=new Set;re.add(j),t.updateQueue=re}else ee.add(j);break e}else{if((t&1)===0){S0(u,M,t),bs();break e}j=Error(a(426))}}else if(Oe&&w.mode&1){var De=P0(h);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),j0(De,h,w,u,t),Al(ur(j,w));break e}}u=j=ur(j,w),He!==4&&(He=2),eo===null?eo=[u]:eo.push(u),u=h;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var O=k0(u,j,t);qc(u,O);break e;case 1:w=j;var N=u.type,T=u.stateNode;if((u.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(wn===null||!wn.has(T)))){u.flags|=65536,t&=-t,u.lanes|=t;var q=C0(u,w,t);qc(u,q);break e}}u=u.return}while(u!==null)}rd(n)}catch(ie){t=ie,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function td(){var e=gi.current;return gi.current=fi,e===null?fi:e}function bs(){(He===0||He===3||He===2)&&(He=4),We===null||(zn&268435455)===0&&(yi&268435455)===0||Cn(We,Xe)}function Si(e,t){var n=we;we|=2;var o=td();(We!==e||Xe!==t)&&($t=null,In(e,t));do try{H2();break}catch(l){ed(e,l)}while(!0);if(Ml(),we=n,gi.current=o,Ie!==null)throw Error(a(261));return We=null,Xe=0,He}function H2(){for(;Ie!==null;)nd(Ie)}function B2(){for(;Ie!==null&&!fp();)nd(Ie)}function nd(e){var t=ad(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?rd(e):Ie=t,fs.current=null}function rd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=R2(n,t,dt),n!==null){Ie=n;return}}else{if(n=M2(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);He===0&&(He=5)}function Fn(e,t,n){var o=Ce,l=yt.transition;try{yt.transition=null,Ce=1,U2(e,t,n,o)}finally{yt.transition=l,Ce=o}return null}function U2(e,t,n,o){do pr();while(bn!==null);if((we&6)!==0)throw Error(a(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(kp(e,u),e===We&&(Ie=We=null,Xe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||wi||(wi=!0,ld(No,function(){return pr(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=yt.transition,yt.transition=null;var h=Ce;Ce=1;var w=we;we|=4,fs.current=null,z2(e,n),X0(n,e),s2(bl),Lo=!!wl,bl=wl=null,e.current=n,D2(n),pp(),we=w,Ce=h,yt.transition=u}else e.current=n;if(wi&&(wi=!1,bn=e,bi=l),u=e.pendingLanes,u===0&&(wn=null),vp(n.stateNode),at(e,ze()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],o(l.value,{componentStack:l.stack,digest:l.digest});if(xi)throw xi=!1,e=ms,ms=null,e;return(bi&1)!==0&&e.tag!==0&&pr(),u=e.pendingLanes,(u&1)!==0?e===vs?to++:(to=0,vs=e):to=0,vn(),null}function pr(){if(bn!==null){var e=Wu(bi),t=yt.transition,n=Ce;try{if(yt.transition=null,Ce=16>e?16:e,bn===null)var o=!1;else{if(e=bn,bn=null,bi=0,(we&6)!==0)throw Error(a(331));var l=we;for(we|=4,J=e.current;J!==null;){var u=J,h=u.child;if((J.flags&16)!==0){var w=u.deletions;if(w!==null){for(var j=0;j<w.length;j++){var M=w[j];for(J=M;J!==null;){var V=J;switch(V.tag){case 0:case 11:case 15:Gr(8,V,u)}var W=V.child;if(W!==null)W.return=V,J=W;else for(;J!==null;){V=J;var U=V.sibling,G=V.return;if(U0(V),V===M){J=null;break}if(U!==null){U.return=G,J=U;break}J=G}}}var ee=u.alternate;if(ee!==null){var re=ee.child;if(re!==null){ee.child=null;do{var De=re.sibling;re.sibling=null,re=De}while(re!==null)}}J=u}}if((u.subtreeFlags&2064)!==0&&h!==null)h.return=u,J=h;else e:for(;J!==null;){if(u=J,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Gr(9,u,u.return)}var O=u.sibling;if(O!==null){O.return=u.return,J=O;break e}J=u.return}}var N=e.current;for(J=N;J!==null;){h=J;var T=h.child;if((h.subtreeFlags&2064)!==0&&T!==null)T.return=h,J=T;else e:for(h=N;J!==null;){if(w=J,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:vi(9,w)}}catch(ie){Le(w,w.return,ie)}if(w===h){J=null;break e}var q=w.sibling;if(q!==null){q.return=w.return,J=q;break e}J=w.return}}if(we=l,vn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(_o,e)}catch{}o=!0}return o}finally{Ce=n,yt.transition=t}}return!1}function od(e,t,n){t=ur(n,t),t=k0(e,t,1),e=yn(e,t,1),t=et(),e!==null&&(Pr(e,1,t),at(e,t))}function Le(e,t,n){if(e.tag===3)od(e,e,n);else for(;t!==null;){if(t.tag===3){od(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wn===null||!wn.has(o))){e=ur(n,e),e=C0(t,e,1),t=yn(t,e,1),e=et(),t!==null&&(Pr(t,1,e),at(t,e));break}}t=t.return}}function V2(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,We===e&&(Xe&n)===n&&(He===4||He===3&&(Xe&130023424)===Xe&&500>ze()-hs?In(e,0):ps|=n),at(e,t)}function id(e,t){t===0&&((e.mode&1)===0?t=1:(t=To,To<<=1,(To&130023424)===0&&(To=4194304)));var n=et();e=Kt(e,t),e!==null&&(Pr(e,t,n),at(e,n))}function W2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),id(e,n)}function q2(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(a(314))}o!==null&&o.delete(t),id(e,n)}var ad;ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,A2(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,Oe&&(t.flags&1048576)!==0&&Ic(t,Jo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;hi(e,t),e=t.pendingProps;var l=tr(t,Ze.current);ar(t,n),l=Xl(null,t,o,e,l,n);var u=Kl();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(o)?(u=!0,Yo(t)):u=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Il(t),l.updater=ii,t.stateNode=l,l._reactInternals=t,Hl(t,o,e,n),t=ns(null,t,o,!0,u,n)):(t.tag=0,Oe&&u&&Nl(t),Je(null,t,l,n),t=t.child),t;case 16:o=t.elementType;e:{switch(hi(e,t),e=t.pendingProps,l=o._init,o=l(o._payload),t.type=o,l=t.tag=X2(o),e=Ct(o,e),l){case 0:t=ts(null,t,o,e,n);break e;case 1:t=A0(null,t,o,e,n);break e;case 11:t=E0(null,t,o,e,n);break e;case 14:t=N0(null,t,o,Ct(o.type,e),n);break e}throw Error(a(306,o,""))}return t;case 0:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Ct(o,l),ts(e,t,o,l,n);case 1:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Ct(o,l),A0(e,t,o,l,n);case 3:e:{if(R0(t),e===null)throw Error(a(387));o=t.pendingProps,u=t.memoizedState,l=u.element,Wc(e,t),oi(t,o,null,n);var h=t.memoizedState;if(o=h.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){l=ur(Error(a(423)),t),t=M0(e,t,o,n,l);break e}else if(o!==l){l=ur(Error(a(424)),t),t=M0(e,t,o,n,l);break e}else for(ct=pn(t.stateNode.containerInfo.firstChild),ut=t,Oe=!0,kt=null,n=Jc(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),o===l){t=Yt(e,t,n);break e}Je(e,t,o,n)}t=t.child}return t;case 5:return e0(t),e===null&&Tl(t),o=t.type,l=t.pendingProps,u=e!==null?e.memoizedProps:null,h=l.children,kl(o,l)?h=null:u!==null&&kl(o,u)&&(t.flags|=32),T0(e,t),Je(e,t,h,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return L0(e,t,n);case 4:return Bl(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=lr(t,null,o,n):Je(e,t,o,n),t.child;case 11:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Ct(o,l),E0(e,t,o,l,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,l=t.pendingProps,u=t.memoizedProps,h=l.value,Ee(ti,o._currentValue),o._currentValue=h,u!==null)if(bt(u.value,h)){if(u.children===l.children&&!nt.current){t=Yt(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var w=u.dependencies;if(w!==null){h=u.child;for(var j=w.firstContext;j!==null;){if(j.context===o){if(u.tag===1){j=Zt(-1,n&-n),j.tag=2;var M=u.updateQueue;if(M!==null){M=M.shared;var V=M.pending;V===null?j.next=j:(j.next=V.next,V.next=j),M.pending=j}}u.lanes|=n,j=u.alternate,j!==null&&(j.lanes|=n),zl(u.return,n,t),w.lanes|=n;break}j=j.next}}else if(u.tag===10)h=u.type===t.type?null:u.child;else if(u.tag===18){if(h=u.return,h===null)throw Error(a(341));h.lanes|=n,w=h.alternate,w!==null&&(w.lanes|=n),zl(h,n,t),h=u.sibling}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===t){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}Je(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,o=t.pendingProps.children,ar(t,n),l=vt(l),o=o(l),t.flags|=1,Je(e,t,o,n),t.child;case 14:return o=t.type,l=Ct(o,t.pendingProps),l=Ct(o.type,l),N0(e,t,o,l,n);case 15:return _0(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Ct(o,l),hi(e,t),t.tag=1,rt(o)?(e=!0,Yo(t)):e=!1,ar(t,n),Zc(t,o,l),Hl(t,o,l,n),ns(null,t,o,!0,e,n);case 19:return D0(e,t,n);case 22:return O0(e,t,n)}throw Error(a(156,t.tag))};function ld(e,t){return Fu(e,t)}function Q2(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,o){return new Q2(e,t,n,o)}function ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X2(e){if(typeof e=="function")return ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===z)return 11;if(e===Pe)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pi(e,t,n,o,l,u){var h=2;if(o=e,typeof e=="function")ks(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case F:return Hn(n.children,l,u,t);case K:h=8,l|=8;break;case Z:return e=xt(12,n,t,l|2),e.elementType=Z,e.lanes=u,e;case ne:return e=xt(13,n,t,l),e.elementType=ne,e.lanes=u,e;case $:return e=xt(19,n,t,l),e.elementType=$,e.lanes=u,e;case ye:return ji(n,l,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:h=10;break e;case Q:h=9;break e;case z:h=11;break e;case Pe:h=14;break e;case Se:h=16,o=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=xt(h,n,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function Hn(e,t,n,o){return e=xt(7,e,o,t),e.lanes=n,e}function ji(e,t,n,o){return e=xt(22,e,o,t),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function Cs(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function Ss(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function K2(e,t,n,o,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$a(0),this.expirationTimes=$a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ps(e,t,n,o,l,u,h,w,j){return e=new K2(e,t,n,w,j),t===1?(t=1,u===!0&&(t|=8)):t=0,u=xt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(u),e}function Z2(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function sd(e){if(!e)return mn;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(rt(n))return Lc(e,n,t)}return t}function ud(e,t,n,o,l,u,h,w,j){return e=Ps(n,o,!0,e,l,u,h,w,j),e.context=sd(null),n=e.current,o=et(),l=kn(n),u=Zt(o,l),u.callback=t??null,yn(n,u,l),e.current.lanes=l,Pr(e,l,o),at(e,o),e}function Ei(e,t,n,o){var l=t.current,u=et(),h=kn(l);return n=sd(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(u,h),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=yn(l,t,h),e!==null&&(jt(e,l,h,u),ri(e,l,h)),h}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function js(e,t){cd(e,t),(e=e.alternate)&&cd(e,t)}function Y2(){return null}var dd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}_i.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));Ei(e,t,null,null)},_i.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){Ei(null,e,null,null)}),t[Wt]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cn.length&&t!==0&&t<cn[n].priority;n++);cn.splice(n,0,e),n===0&&Yu(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(){}function $2(e,t,n,o,l){if(l){if(typeof o=="function"){var u=o;o=function(){var M=Ni(h);u.call(M)}}var h=ud(t,o,e,0,null,!1,!1,"",fd);return e._reactRootContainer=h,e[Wt]=h.current,Fr(e.nodeType===8?e.parentNode:e),Dn(),h}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var w=o;o=function(){var M=Ni(j);w.call(M)}}var j=Ps(e,0,!1,null,null,!1,!1,"",fd);return e._reactRootContainer=j,e[Wt]=j.current,Fr(e.nodeType===8?e.parentNode:e),Dn(function(){Ei(t,j,n,o)}),j}function Ti(e,t,n,o,l){var u=n._reactRootContainer;if(u){var h=u;if(typeof l=="function"){var w=l;l=function(){var j=Ni(h);w.call(j)}}Ei(t,h,e,l)}else h=$2(n,t,e,l,o);return Ni(h)}qu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sr(t.pendingLanes);n!==0&&(Ga(t,n|1),at(t,ze()),(we&6)===0&&(fr=ze()+500,vn()))}break;case 13:Dn(function(){var o=Kt(e,1);if(o!==null){var l=et();jt(o,e,1,l)}}),js(e,1)}},Ja=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=et();jt(t,e,134217728,n)}js(e,134217728)}},Qu=function(e){if(e.tag===13){var t=kn(e),n=Kt(e,t);if(n!==null){var o=et();jt(n,e,t,o)}js(e,t)}},Xu=function(){return Ce},Ku=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}},qa=function(e,t,n){switch(t){case"input":if(Da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var l=Ko(o);if(!l)throw Error(a(90));Co(o),Da(o,l)}}}break;case"textarea":Cu(e,n);break;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}},Au=xs,Ru=Dn;var G2={usingClientEntryPoint:!1,Events:[Ur,Jn,Ko,Ou,Tu,xs]},no={findFiberByHostInstance:_n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},J2={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Du(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||Y2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{_o=Ai.inject(J2),Rt=Ai}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G2,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(a(200));return Z2(e,t,null,n)},lt.createRoot=function(e,t){if(!Ns(e))throw Error(a(299));var n=!1,o="",l=dd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ps(e,1,!1,null,null,n,!1,o,l),e[Wt]=t.current,Fr(e.nodeType===8?e.parentNode:e),new Es(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Du(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Dn(e)},lt.hydrate=function(e,t,n){if(!Oi(t))throw Error(a(200));return Ti(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(a(405));var o=n!=null&&n.hydratedSources||null,l=!1,u="",h=dd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),t=ud(t,null,e,1,n??null,l,!1,u,h),e[Wt]=t.current,Fr(e),o)for(e=0;e<o.length;e++)n=o[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new _i(t)},lt.render=function(e,t,n){if(!Oi(t))throw Error(a(200));return Ti(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(a(40));return e._reactRootContainer?(Dn(function(){Ti(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},lt.unstable_batchedUpdates=xs,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Oi(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Ti(e,t,n,!1,o)},lt.version="18.2.0-next-9e3b772b8-20220608",lt}var wd;function ru(){if(wd)return Ts.exports;wd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),Ts.exports=ah(),Ts.exports}var bd;function lh(){if(bd)return Mi;bd=1;var r=ru();return Mi.createRoot=r.createRoot,Mi.hydrateRoot=r.hydrateRoot,Mi}var sh=lh();const uh=yf(sh),ch="/assets/Black-9qYMGh-s.svg",dh="/assets/Discount-C_cVnwQS.svg",fh="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.125%2010H16.875'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.25%204.375L16.875%2010L11.25%2015.625'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";var Te={},Li={},zi={},Di={},Ms,kd;function ph(){if(kd)return Ms;kd=1;var r="Expected a function",i=NaN,a="[object Symbol]",s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,y=parseInt,v=typeof Ri=="object"&&Ri&&Ri.Object===Object&&Ri,g=typeof self=="object"&&self&&self.Object===Object&&self,p=v||g||Function("return this")(),x=Object.prototype,E=x.toString,C=Math.max,b=Math.min,k=function(){return p.Date.now()};function S(B,F,K){var Z,Y,Q,z,ne,$,Pe=0,Se=!1,ye=!1,X=!0;if(typeof B!="function")throw new TypeError(r);F=H(F)||0,R(K)&&(Se=!!K.leading,ye="maxWait"in K,Q=ye?C(H(K.maxWait)||0,F):Q,X="trailing"in K?!!K.trailing:X);function ae(le){var je=Z,Vt=Y;return Z=Y=void 0,Pe=le,z=B.apply(Vt,je),z}function P(le){return Pe=le,ne=setTimeout(pe,F),Se?ae(le):z}function I(le){var je=le-$,Vt=le-Pe,At=F-je;return ye?b(At,Q-Vt):At}function te(le){var je=le-$,Vt=le-Pe;return $===void 0||je>=F||je<0||ye&&Vt>=Q}function pe(){var le=k();if(te(le))return fe(le);ne=setTimeout(pe,I(le))}function fe(le){return ne=void 0,X&&Z?ae(le):(Z=Y=void 0,z)}function ke(){ne!==void 0&&clearTimeout(ne),Pe=0,Z=$=Y=ne=void 0}function ve(){return ne===void 0?z:fe(k())}function ge(){var le=k(),je=te(le);if(Z=arguments,Y=this,$=le,je){if(ne===void 0)return P($);if(ye)return ne=setTimeout(pe,F),ae($)}return ne===void 0&&(ne=setTimeout(pe,F)),z}return ge.cancel=ke,ge.flush=ve,ge}function _(B,F,K){var Z=!0,Y=!0;if(typeof B!="function")throw new TypeError(r);return R(K)&&(Z="leading"in K?!!K.leading:Z,Y="trailing"in K?!!K.trailing:Y),S(B,F,{leading:Z,maxWait:F,trailing:Y})}function R(B){var F=typeof B;return!!B&&(F=="object"||F=="function")}function A(B){return!!B&&typeof B=="object"}function D(B){return typeof B=="symbol"||A(B)&&E.call(B)==a}function H(B){if(typeof B=="number")return B;if(D(B))return i;if(R(B)){var F=typeof B.valueOf=="function"?B.valueOf():B;B=R(F)?F+"":F}if(typeof B!="string")return B===0?B:+B;B=B.replace(s,"");var K=f.test(B);return K||m.test(B)?y(B.slice(2),K?2:8):c.test(B)?i:+B}return Ms=_,Ms}var oo={},Cd;function ou(){if(Cd)return oo;Cd=1,Object.defineProperty(oo,"__esModule",{value:!0}),oo.addPassiveEventListener=function(a,s,c){var f=c.name;f||(f=s,console.warn("Listener must be a named function.")),r.has(s)||r.set(s,new Set);var m=r.get(s);if(!m.has(f)){var y=(function(){var v=!1;try{var g=Object.defineProperty({},"passive",{get:function(){v=!0}});window.addEventListener("test",null,g)}catch{}return v})();a.addEventListener(s,c,y?{passive:!0}:!1),m.add(f)}},oo.removePassiveEventListener=function(a,s,c){a.removeEventListener(s,c),r.get(s).delete(c.name||s)};var r=new Map;return oo}var Sd;function iu(){if(Sd)return Di;Sd=1,Object.defineProperty(Di,"__esModule",{value:!0});var r=ph(),i=s(r),a=ou();function s(m){return m&&m.__esModule?m:{default:m}}var c=function(y){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,i.default)(y,v)},f={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(y,v){if(y){var g=c(function(p){f.scrollHandler(y)},v);return f.scrollSpyContainers.push(y),(0,a.addPassiveEventListener)(y,"scroll",g),function(){(0,a.removePassiveEventListener)(y,"scroll",g),f.scrollSpyContainers.splice(f.scrollSpyContainers.indexOf(y),1)}}return function(){}},isMounted:function(y){return f.scrollSpyContainers.indexOf(y)!==-1},currentPositionX:function(y){if(y===document){var v=window.scrollY!==void 0,g=(document.compatMode||"")==="CSS1Compat";return v?window.scrollX:g?document.documentElement.scrollLeft:document.body.scrollLeft}else return y.scrollLeft},currentPositionY:function(y){if(y===document){var v=window.scrollX!==void 0,g=(document.compatMode||"")==="CSS1Compat";return v?window.scrollY:g?document.documentElement.scrollTop:document.body.scrollTop}else return y.scrollTop},scrollHandler:function(y){var v=f.scrollSpyContainers[f.scrollSpyContainers.indexOf(y)].spyCallbacks||[];v.forEach(function(g){return g(f.currentPositionX(y),f.currentPositionY(y))})},addStateHandler:function(y){f.spySetState.push(y)},addSpyHandler:function(y,v){var g=f.scrollSpyContainers[f.scrollSpyContainers.indexOf(v)];g.spyCallbacks||(g.spyCallbacks=[]),g.spyCallbacks.push(y)},updateStates:function(){f.spySetState.forEach(function(y){return y()})},unmount:function(y,v){f.scrollSpyContainers.forEach(function(g){return g.spyCallbacks&&g.spyCallbacks.length&&g.spyCallbacks.indexOf(v)>-1&&g.spyCallbacks.splice(g.spyCallbacks.indexOf(v),1)}),f.spySetState&&f.spySetState.length&&f.spySetState.indexOf(y)>-1&&f.spySetState.splice(f.spySetState.indexOf(y),1),document.removeEventListener("scroll",f.scrollHandler)},update:function(){return f.scrollSpyContainers.forEach(function(y){return f.scrollHandler(y)})}};return Di.default=f,Di}var Ii={},Fi={},Pd;function ka(){if(Pd)return Fi;Pd=1,Object.defineProperty(Fi,"__esModule",{value:!0});var r=function(y,v){var g=y.indexOf("#")===0?y.substring(1):y,p=g?"#"+g:"",x=window&&window.location,E=p?x.pathname+x.search+p:x.pathname+x.search;v?history.pushState(history.state,"",E):history.replaceState(history.state,"",E)},i=function(){return window.location.hash.replace(/^#/,"")},a=function(y){return function(v){return y.contains?y!=v&&y.contains(v):!!(y.compareDocumentPosition(v)&16)}},s=function(y){return getComputedStyle(y).position!=="static"},c=function(y,v){for(var g=y.offsetTop,p=y.offsetParent;p&&!v(p);)g+=p.offsetTop,p=p.offsetParent;return{offsetTop:g,offsetParent:p}},f=function(y,v,g){if(g)return y===document?v.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(y).position!=="static"?v.offsetLeft:v.offsetLeft-y.offsetLeft;if(y===document)return v.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(s(y)){if(v.offsetParent!==y){var p=function(S){return S===y||S===document},x=c(v,p),E=x.offsetTop,C=x.offsetParent;if(C!==y)throw new Error("Seems containerElement is not an ancestor of the Element");return E}return v.offsetTop}if(v.offsetParent===y.offsetParent)return v.offsetTop-y.offsetTop;var b=function(S){return S===document};return c(v,b).offsetTop-c(y,b).offsetTop};return Fi.default={updateHash:r,getHash:i,filterElementInContainer:a,scrollOffset:f},Fi}var Hi={},Bi={},jd;function hh(){return jd||(jd=1,Object.defineProperty(Bi,"__esModule",{value:!0}),Bi.default={defaultEasing:function(i){return i<.5?Math.pow(i*2,2)/2:1-Math.pow((1-i)*2,2)/2},linear:function(i){return i},easeInQuad:function(i){return i*i},easeOutQuad:function(i){return i*(2-i)},easeInOutQuad:function(i){return i<.5?2*i*i:-1+(4-2*i)*i},easeInCubic:function(i){return i*i*i},easeOutCubic:function(i){return--i*i*i+1},easeInOutCubic:function(i){return i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1},easeInQuart:function(i){return i*i*i*i},easeOutQuart:function(i){return 1- --i*i*i*i},easeInOutQuart:function(i){return i<.5?8*i*i*i*i:1-8*--i*i*i*i},easeInQuint:function(i){return i*i*i*i*i},easeOutQuint:function(i){return 1+--i*i*i*i*i},easeInOutQuint:function(i){return i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i}}),Bi}var Ui={},Ed;function mh(){if(Ed)return Ui;Ed=1,Object.defineProperty(Ui,"__esModule",{value:!0});var r=ou(),i=["mousedown","wheel","touchmove","keydown"];return Ui.default={subscribe:function(s){return typeof document<"u"&&i.forEach(function(c){return(0,r.addPassiveEventListener)(document,c,s)})}},Ui}var Vi={},Nd;function au(){if(Nd)return Vi;Nd=1,Object.defineProperty(Vi,"__esModule",{value:!0});var r={registered:{},scrollEvent:{register:function(a,s){r.registered[a]=s},remove:function(a){r.registered[a]=null}}};return Vi.default=r,Vi}var _d;function xf(){if(_d)return Hi;_d=1,Object.defineProperty(Hi,"__esModule",{value:!0});var r=Object.assign||function(Y){for(var Q=1;Q<arguments.length;Q++){var z=arguments[Q];for(var ne in z)Object.prototype.hasOwnProperty.call(z,ne)&&(Y[ne]=z[ne])}return Y},i=ka();v(i);var a=hh(),s=v(a),c=mh(),f=v(c),m=au(),y=v(m);function v(Y){return Y&&Y.__esModule?Y:{default:Y}}var g=function(Q){return s.default[Q.smooth]||s.default.defaultEasing},p=function(Q){return typeof Q=="function"?Q:function(){return Q}},x=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},E=(function(){return x()||function(Y,Q,z){window.setTimeout(Y,z||1e3/60,new Date().getTime())}})(),C=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},b=function(Q){var z=Q.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollLeft;var ne=window.pageXOffset!==void 0,$=(document.compatMode||"")==="CSS1Compat";return ne?window.pageXOffset:$?document.documentElement.scrollLeft:document.body.scrollLeft},k=function(Q){var z=Q.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollTop;var ne=window.pageXOffset!==void 0,$=(document.compatMode||"")==="CSS1Compat";return ne?window.pageYOffset:$?document.documentElement.scrollTop:document.body.scrollTop},S=function(Q){var z=Q.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollWidth-z.offsetWidth;var ne=document.body,$=document.documentElement;return Math.max(ne.scrollWidth,ne.offsetWidth,$.clientWidth,$.scrollWidth,$.offsetWidth)},_=function(Q){var z=Q.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollHeight-z.offsetHeight;var ne=document.body,$=document.documentElement;return Math.max(ne.scrollHeight,ne.offsetHeight,$.clientHeight,$.scrollHeight,$.offsetHeight)},R=function Y(Q,z,ne){var $=z.data;if(!z.ignoreCancelEvents&&$.cancel){y.default.registered.end&&y.default.registered.end($.to,$.target,$.currentPositionY);return}if($.delta=Math.round($.targetPosition-$.startPosition),$.start===null&&($.start=ne),$.progress=ne-$.start,$.percent=$.progress>=$.duration?1:Q($.progress/$.duration),$.currentPosition=$.startPosition+Math.ceil($.delta*$.percent),$.containerElement&&$.containerElement!==document&&$.containerElement!==document.body?z.horizontal?$.containerElement.scrollLeft=$.currentPosition:$.containerElement.scrollTop=$.currentPosition:z.horizontal?window.scrollTo($.currentPosition,0):window.scrollTo(0,$.currentPosition),$.percent<1){var Pe=Y.bind(null,Q,z);E.call(window,Pe);return}y.default.registered.end&&y.default.registered.end($.to,$.target,$.currentPosition)},A=function(Q){Q.data.containerElement=Q?Q.containerId?document.getElementById(Q.containerId):Q.container&&Q.container.nodeType?Q.container:document:null},D=function(Q,z,ne,$){z.data=z.data||C(),window.clearTimeout(z.data.delayTimeout);var Pe=function(){z.data.cancel=!0};if(f.default.subscribe(Pe),A(z),z.data.start=null,z.data.cancel=!1,z.data.startPosition=z.horizontal?b(z):k(z),z.data.targetPosition=z.absolute?Q:Q+z.data.startPosition,z.data.startPosition===z.data.targetPosition){y.default.registered.end&&y.default.registered.end(z.data.to,z.data.target,z.data.currentPosition);return}z.data.delta=Math.round(z.data.targetPosition-z.data.startPosition),z.data.duration=p(z.duration)(z.data.delta),z.data.duration=isNaN(parseFloat(z.data.duration))?1e3:parseFloat(z.data.duration),z.data.to=ne,z.data.target=$;var Se=g(z),ye=R.bind(null,Se,z);if(z&&z.delay>0){z.data.delayTimeout=window.setTimeout(function(){y.default.registered.begin&&y.default.registered.begin(z.data.to,z.data.target),E.call(window,ye)},z.delay);return}y.default.registered.begin&&y.default.registered.begin(z.data.to,z.data.target),E.call(window,ye)},H=function(Q){return Q=r({},Q),Q.data=Q.data||C(),Q.absolute=!0,Q},B=function(Q){D(0,H(Q))},F=function(Q,z){D(Q,H(z))},K=function(Q){Q=H(Q),A(Q),D(Q.horizontal?S(Q):_(Q),Q)},Z=function(Q,z){z=H(z),A(z);var ne=z.horizontal?b(z):k(z);D(Q+ne,z)};return Hi.default={animateTopScroll:D,getAnimationType:g,scrollToTop:B,scrollToBottom:K,scrollTo:F,scrollMore:Z},Hi}var Od;function Ca(){if(Od)return Ii;Od=1,Object.defineProperty(Ii,"__esModule",{value:!0});var r=Object.assign||function(p){for(var x=1;x<arguments.length;x++){var E=arguments[x];for(var C in E)Object.prototype.hasOwnProperty.call(E,C)&&(p[C]=E[C])}return p},i=ka(),a=y(i),s=xf(),c=y(s),f=au(),m=y(f);function y(p){return p&&p.__esModule?p:{default:p}}var v={},g=void 0;return Ii.default={unmount:function(){v={}},register:function(x,E){v[x]=E},unregister:function(x){delete v[x]},get:function(x){return v[x]||document.getElementById(x)||document.getElementsByName(x)[0]||document.getElementsByClassName(x)[0]},setActiveLink:function(x){return g=x},getActiveLink:function(){return g},scrollTo:function(x,E){var C=this.get(x);if(!C){console.warn("target Element not found");return}E=r({},E,{absolute:!1});var b=E.containerId,k=E.container,S=void 0;b?S=document.getElementById(b):k&&k.nodeType?S=k:S=document,E.absolute=!0;var _=E.horizontal,R=a.default.scrollOffset(S,C,_)+(E.offset||0);if(!E.smooth){m.default.registered.begin&&m.default.registered.begin(x,C),S===document?E.horizontal?window.scrollTo(R,0):window.scrollTo(0,R):S.scrollTop=R,m.default.registered.end&&m.default.registered.end(x,C);return}c.default.animateTopScroll(R,E,x,C)}},Ii}var Ls={exports:{}},zs,Td;function vh(){if(Td)return zs;Td=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return zs=r,zs}var Ds,Ad;function gh(){if(Ad)return Ds;Ad=1;var r=vh();function i(){}function a(){}return a.resetWarningCache=i,Ds=function(){function s(m,y,v,g,p,x){if(x!==r){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}s.isRequired=s;function c(){return s}var f={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:a,resetWarningCache:i};return f.PropTypes=f,f},Ds}var Rd;function Sa(){return Rd||(Rd=1,Ls.exports=gh()()),Ls.exports}var Wi={},Md;function wf(){if(Md)return Wi;Md=1,Object.defineProperty(Wi,"__esModule",{value:!0}),ou();var r=ka(),i=a(r);function a(c){return c&&c.__esModule?c:{default:c}}var s={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(f){this.scroller=f,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(f,m){this.containers[f]=m},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var f=this,m=this.getHash();m?window.setTimeout(function(){f.scrollTo(m,!0),f.initialized=!0},10):this.initialized=!0},scrollTo:function(f,m){var y=this.scroller,v=y.get(f);if(v&&(m||f!==y.getActiveLink())){var g=this.containers[f]||document;y.scrollTo(f,{container:g})}},getHash:function(){return i.default.getHash()},changeHash:function(f,m){this.isInitialized()&&i.default.getHash()!==f&&i.default.updateHash(f,m)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Wi.default=s,Wi}var Ld;function lu(){if(Ld)return zi;Ld=1,Object.defineProperty(zi,"__esModule",{value:!0});var r=Object.assign||function(_){for(var R=1;R<arguments.length;R++){var A=arguments[R];for(var D in A)Object.prototype.hasOwnProperty.call(A,D)&&(_[D]=A[D])}return _},i=(function(){function _(R,A){for(var D=0;D<A.length;D++){var H=A[D];H.enumerable=H.enumerable||!1,H.configurable=!0,"value"in H&&(H.writable=!0),Object.defineProperty(R,H.key,H)}}return function(R,A,D){return A&&_(R.prototype,A),D&&_(R,D),R}})(),a=Bt(),s=E(a),c=iu(),f=E(c),m=Ca(),y=E(m),v=Sa(),g=E(v),p=wf(),x=E(p);function E(_){return _&&_.__esModule?_:{default:_}}function C(_,R){if(!(_ instanceof R))throw new TypeError("Cannot call a class as a function")}function b(_,R){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R&&(typeof R=="object"||typeof R=="function")?R:_}function k(_,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof R);_.prototype=Object.create(R&&R.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),R&&(Object.setPrototypeOf?Object.setPrototypeOf(_,R):_.__proto__=R)}var S={to:g.default.string.isRequired,containerId:g.default.string,container:g.default.object,activeClass:g.default.string,activeStyle:g.default.object,spy:g.default.bool,horizontal:g.default.bool,smooth:g.default.oneOfType([g.default.bool,g.default.string]),offset:g.default.number,delay:g.default.number,isDynamic:g.default.bool,onClick:g.default.func,duration:g.default.oneOfType([g.default.number,g.default.func]),absolute:g.default.bool,onSetActive:g.default.func,onSetInactive:g.default.func,ignoreCancelEvents:g.default.bool,hashSpy:g.default.bool,saveHashHistory:g.default.bool,spyThrottle:g.default.number};return zi.default=function(_,R){var A=R||y.default,D=(function(B){k(F,B);function F(K){C(this,F);var Z=b(this,(F.__proto__||Object.getPrototypeOf(F)).call(this,K));return H.call(Z),Z.state={active:!1},Z.beforeUnmountCallbacks=[],Z}return i(F,[{key:"getScrollSpyContainer",value:function(){var Z=this.props.containerId,Y=this.props.container;return Z&&!Y?document.getElementById(Z):Y&&Y.nodeType?Y:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var Z=this.getScrollSpyContainer();if(!f.default.isMounted(Z)){var Y=f.default.mount(Z,this.props.spyThrottle);this.beforeUnmountCallbacks.push(Y)}this.props.hashSpy&&(x.default.isMounted()||x.default.mount(A),x.default.mapContainer(this.props.to,Z)),f.default.addSpyHandler(this.spyHandler,Z),this.setState({container:Z})}}},{key:"componentWillUnmount",value:function(){f.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(Z){return Z()})}},{key:"render",value:function(){var Z="";this.state&&this.state.active?Z=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():Z=this.props.className;var Y={};this.state&&this.state.active?Y=r({},this.props.style,this.props.activeStyle):Y=r({},this.props.style);var Q=r({},this.props);for(var z in S)Q.hasOwnProperty(z)&&delete Q[z];return Q.className=Z,Q.style=Y,Q.onClick=this.handleClick,s.default.createElement(_,Q)}}]),F})(s.default.PureComponent),H=function(){var F=this;this.scrollTo=function(K,Z){A.scrollTo(K,r({},F.state,Z))},this.handleClick=function(K){F.props.onClick&&F.props.onClick(K),K.stopPropagation&&K.stopPropagation(),K.preventDefault&&K.preventDefault(),F.scrollTo(F.props.to,F.props)},this.spyHandler=function(K,Z){var Y=F.getScrollSpyContainer();if(!(x.default.isMounted()&&!x.default.isInitialized())){var Q=F.props.horizontal,z=F.props.to,ne=null,$=void 0,Pe=void 0;if(Q){var Se=0,ye=0,X=0;if(Y.getBoundingClientRect){var ae=Y.getBoundingClientRect();X=ae.left}if(!ne||F.props.isDynamic){if(ne=A.get(z),!ne)return;var P=ne.getBoundingClientRect();Se=P.left-X+K,ye=Se+P.width}var I=K-F.props.offset;$=I>=Math.floor(Se)&&I<Math.floor(ye),Pe=I<Math.floor(Se)||I>=Math.floor(ye)}else{var te=0,pe=0,fe=0;if(Y.getBoundingClientRect){var ke=Y.getBoundingClientRect();fe=ke.top}if(!ne||F.props.isDynamic){if(ne=A.get(z),!ne)return;var ve=ne.getBoundingClientRect();te=ve.top-fe+Z,pe=te+ve.height}var ge=Z-F.props.offset;$=ge>=Math.floor(te)&&ge<Math.floor(pe),Pe=ge<Math.floor(te)||ge>=Math.floor(pe)}var le=A.getActiveLink();if(Pe){if(z===le&&A.setActiveLink(void 0),F.props.hashSpy&&x.default.getHash()===z){var je=F.props.saveHashHistory,Vt=je===void 0?!1:je;x.default.changeHash("",Vt)}F.props.spy&&F.state.active&&(F.setState({active:!1}),F.props.onSetInactive&&F.props.onSetInactive(z,ne))}if($&&(le!==z||F.state.active===!1)){A.setActiveLink(z);var At=F.props.saveHashHistory,Co=At===void 0?!1:At;F.props.hashSpy&&x.default.changeHash(z,Co),F.props.spy&&(F.setState({active:!0}),F.props.onSetActive&&F.props.onSetActive(z,ne))}}}};return D.propTypes=S,D.defaultProps={offset:0},D},zi}var zd;function yh(){if(zd)return Li;zd=1,Object.defineProperty(Li,"__esModule",{value:!0});var r=Bt(),i=c(r),a=lu(),s=c(a);function c(g){return g&&g.__esModule?g:{default:g}}function f(g,p){if(!(g instanceof p))throw new TypeError("Cannot call a class as a function")}function m(g,p){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:g}function y(g,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);g.prototype=Object.create(p&&p.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(g,p):g.__proto__=p)}var v=(function(g){y(p,g);function p(){var x,E,C,b;f(this,p);for(var k=arguments.length,S=Array(k),_=0;_<k;_++)S[_]=arguments[_];return b=(E=(C=m(this,(x=p.__proto__||Object.getPrototypeOf(p)).call.apply(x,[this].concat(S))),C),C.render=function(){return i.default.createElement("a",C.props,C.props.children)},E),m(C,b)}return p})(i.default.Component);return Li.default=(0,s.default)(v),Li}var qi={},Dd;function xh(){if(Dd)return qi;Dd=1,Object.defineProperty(qi,"__esModule",{value:!0});var r=(function(){function p(x,E){for(var C=0;C<E.length;C++){var b=E[C];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(x,b.key,b)}}return function(x,E,C){return E&&p(x.prototype,E),C&&p(x,C),x}})(),i=Bt(),a=f(i),s=lu(),c=f(s);function f(p){return p&&p.__esModule?p:{default:p}}function m(p,x){if(!(p instanceof x))throw new TypeError("Cannot call a class as a function")}function y(p,x){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:p}function v(p,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);p.prototype=Object.create(x&&x.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(p,x):p.__proto__=x)}var g=(function(p){v(x,p);function x(){return m(this,x),y(this,(x.__proto__||Object.getPrototypeOf(x)).apply(this,arguments))}return r(x,[{key:"render",value:function(){return a.default.createElement("button",this.props,this.props.children)}}]),x})(a.default.Component);return qi.default=(0,c.default)(g),qi}var Qi={},Xi={},Id;function bf(){if(Id)return Xi;Id=1,Object.defineProperty(Xi,"__esModule",{value:!0});var r=Object.assign||function(C){for(var b=1;b<arguments.length;b++){var k=arguments[b];for(var S in k)Object.prototype.hasOwnProperty.call(k,S)&&(C[S]=k[S])}return C},i=(function(){function C(b,k){for(var S=0;S<k.length;S++){var _=k[S];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(b,_.key,_)}}return function(b,k,S){return k&&C(b.prototype,k),S&&C(b,S),b}})(),a=Bt(),s=g(a),c=ru();g(c);var f=Ca(),m=g(f),y=Sa(),v=g(y);function g(C){return C&&C.__esModule?C:{default:C}}function p(C,b){if(!(C instanceof b))throw new TypeError("Cannot call a class as a function")}function x(C,b){if(!C)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:C}function E(C,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);C.prototype=Object.create(b&&b.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(C,b):C.__proto__=b)}return Xi.default=function(C){var b=(function(k){E(S,k);function S(_){p(this,S);var R=x(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,_));return R.childBindings={domNode:null},R}return i(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(R){this.props.name!==R.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;m.default.unregister(this.props.name)}},{key:"registerElems",value:function(R){m.default.register(R,this.childBindings.domNode)}},{key:"render",value:function(){return s.default.createElement(C,r({},this.props,{parentBindings:this.childBindings}))}}]),S})(s.default.Component);return b.propTypes={name:v.default.string,id:v.default.string},b},Xi}var Fd;function wh(){if(Fd)return Qi;Fd=1,Object.defineProperty(Qi,"__esModule",{value:!0});var r=Object.assign||function(C){for(var b=1;b<arguments.length;b++){var k=arguments[b];for(var S in k)Object.prototype.hasOwnProperty.call(k,S)&&(C[S]=k[S])}return C},i=(function(){function C(b,k){for(var S=0;S<k.length;S++){var _=k[S];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(b,_.key,_)}}return function(b,k,S){return k&&C(b.prototype,k),S&&C(b,S),b}})(),a=Bt(),s=v(a),c=bf(),f=v(c),m=Sa(),y=v(m);function v(C){return C&&C.__esModule?C:{default:C}}function g(C,b){if(!(C instanceof b))throw new TypeError("Cannot call a class as a function")}function p(C,b){if(!C)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:C}function x(C,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);C.prototype=Object.create(b&&b.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(C,b):C.__proto__=b)}var E=(function(C){x(b,C);function b(){return g(this,b),p(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return i(b,[{key:"render",value:function(){var S=this,_=r({},this.props);return delete _.name,_.parentBindings&&delete _.parentBindings,s.default.createElement("div",r({},_,{ref:function(A){S.props.parentBindings.domNode=A}}),this.props.children)}}]),b})(s.default.Component);return E.propTypes={name:y.default.string,id:y.default.string},Qi.default=(0,f.default)(E),Qi}var Is,Hd;function bh(){if(Hd)return Is;Hd=1;var r=Object.assign||function(E){for(var C=1;C<arguments.length;C++){var b=arguments[C];for(var k in b)Object.prototype.hasOwnProperty.call(b,k)&&(E[k]=b[k])}return E},i=(function(){function E(C,b){for(var k=0;k<b.length;k++){var S=b[k];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(C,S.key,S)}}return function(C,b,k){return b&&E(C.prototype,b),k&&E(C,k),C}})();function a(E,C){if(!(E instanceof C))throw new TypeError("Cannot call a class as a function")}function s(E,C){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C&&(typeof C=="object"||typeof C=="function")?C:E}function c(E,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof C);E.prototype=Object.create(C&&C.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),C&&(Object.setPrototypeOf?Object.setPrototypeOf(E,C):E.__proto__=C)}var f=Bt();ru(),ka();var m=iu(),y=Ca(),v=Sa(),g=wf(),p={to:v.string.isRequired,containerId:v.string,container:v.object,activeClass:v.string,spy:v.bool,smooth:v.oneOfType([v.bool,v.string]),offset:v.number,delay:v.number,isDynamic:v.bool,onClick:v.func,duration:v.oneOfType([v.number,v.func]),absolute:v.bool,onSetActive:v.func,onSetInactive:v.func,ignoreCancelEvents:v.bool,hashSpy:v.bool,spyThrottle:v.number},x={Scroll:function(C,b){console.warn("Helpers.Scroll is deprecated since v1.7.0");var k=b||y,S=(function(R){c(A,R);function A(D){a(this,A);var H=s(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,D));return _.call(H),H.state={active:!1},H}return i(A,[{key:"getScrollSpyContainer",value:function(){var H=this.props.containerId,B=this.props.container;return H?document.getElementById(H):B&&B.nodeType?B:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var H=this.getScrollSpyContainer();m.isMounted(H)||m.mount(H,this.props.spyThrottle),this.props.hashSpy&&(g.isMounted()||g.mount(k),g.mapContainer(this.props.to,H)),this.props.spy&&m.addStateHandler(this.stateHandler),m.addSpyHandler(this.spyHandler,H),this.setState({container:H})}}},{key:"componentWillUnmount",value:function(){m.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var H="";this.state&&this.state.active?H=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():H=this.props.className;var B=r({},this.props);for(var F in p)B.hasOwnProperty(F)&&delete B[F];return B.className=H,B.onClick=this.handleClick,f.createElement(C,B)}}]),A})(f.Component),_=function(){var A=this;this.scrollTo=function(D,H){k.scrollTo(D,r({},A.state,H))},this.handleClick=function(D){A.props.onClick&&A.props.onClick(D),D.stopPropagation&&D.stopPropagation(),D.preventDefault&&D.preventDefault(),A.scrollTo(A.props.to,A.props)},this.stateHandler=function(){k.getActiveLink()!==A.props.to&&(A.state!==null&&A.state.active&&A.props.onSetInactive&&A.props.onSetInactive(),A.setState({active:!1}))},this.spyHandler=function(D){var H=A.getScrollSpyContainer();if(!(g.isMounted()&&!g.isInitialized())){var B=A.props.to,F=null,K=0,Z=0,Y=0;if(H.getBoundingClientRect){var Q=H.getBoundingClientRect();Y=Q.top}if(!F||A.props.isDynamic){if(F=k.get(B),!F)return;var z=F.getBoundingClientRect();K=z.top-Y+D,Z=K+z.height}var ne=D-A.props.offset,$=ne>=Math.floor(K)&&ne<Math.floor(Z),Pe=ne<Math.floor(K)||ne>=Math.floor(Z),Se=k.getActiveLink();if(Pe)return B===Se&&k.setActiveLink(void 0),A.props.hashSpy&&g.getHash()===B&&g.changeHash(),A.props.spy&&A.state.active&&(A.setState({active:!1}),A.props.onSetInactive&&A.props.onSetInactive()),m.updateStates();if($&&Se!==B)return k.setActiveLink(B),A.props.hashSpy&&g.changeHash(B),A.props.spy&&(A.setState({active:!0}),A.props.onSetActive&&A.props.onSetActive(B)),m.updateStates()}}};return S.propTypes=p,S.defaultProps={offset:0},S},Element:function(C){console.warn("Helpers.Element is deprecated since v1.7.0");var b=(function(k){c(S,k);function S(_){a(this,S);var R=s(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,_));return R.childBindings={domNode:null},R}return i(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(R){this.props.name!==R.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;y.unregister(this.props.name)}},{key:"registerElems",value:function(R){y.register(R,this.childBindings.domNode)}},{key:"render",value:function(){return f.createElement(C,r({},this.props,{parentBindings:this.childBindings}))}}]),S})(f.Component);return b.propTypes={name:v.string,id:v.string},b}};return Is=x,Is}var Bd;function kh(){if(Bd)return Te;Bd=1,Object.defineProperty(Te,"__esModule",{value:!0}),Te.Helpers=Te.ScrollElement=Te.ScrollLink=Te.animateScroll=Te.scrollSpy=Te.Events=Te.scroller=Te.Element=Te.Button=Te.Link=void 0;var r=yh(),i=D(r),a=xh(),s=D(a),c=wh(),f=D(c),m=Ca(),y=D(m),v=au(),g=D(v),p=iu(),x=D(p),E=xf(),C=D(E),b=lu(),k=D(b),S=bf(),_=D(S),R=bh(),A=D(R);function D(H){return H&&H.__esModule?H:{default:H}}return Te.Link=i.default,Te.Button=s.default,Te.Element=f.default,Te.scroller=y.default,Te.Events=g.default,Te.scrollSpy=x.default,Te.animateScroll=C.default,Te.ScrollLink=k.default,Te.ScrollElement=_.default,Te.Helpers=A.default,Te.default={Link:i.default,Button:s.default,Element:f.default,scroller:y.default,Events:g.default,scrollSpy:x.default,animateScroll:C.default,ScrollLink:k.default,ScrollElement:_.default,Helpers:A.default},Te}var su=kh();function Ch(){return d.jsx("div",{className:"w-full h-20 top-header bg-grayColor",children:d.jsxs("div",{className:"container flex items-center justify-between w-full h-full min-w-[100%]",children:[d.jsxs("div",{className:"flex items-center gap-3 col-friday",children:[d.jsx("img",{src:ch,alt:"black-friday"}),d.jsx("p",{className:"text-2xl font-medium text-whiteColor tracking-[0.5px]",children:"Friday"})]}),d.jsx("div",{className:"col-discount",children:d.jsx("img",{src:dh,alt:"discount-img"})}),d.jsx(su.Link,{to:"Featured-Products",smooth:!0,duration:500,children:d.jsxs("div",{className:"flex items-center col-shop w-[156px] h-12 bg-yellowColor gap-2 pl-6 pr-6 rounded-sm cursor-pointer",children:[d.jsx("a",{href:"#",className:"text-sm font-bold text-grayColor tracking-[0%] uppercase",children:"Shop now"}),d.jsx("img",{src:fh,alt:"arrow-right"})]})})]})})}const Sh="data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.03184%2013.0112C11.0699%2013.0112%2014.3718%208.00592%2014.3718%203.66552C14.3718%203.52337%2014.3689%203.38187%2014.3625%203.24096C15.005%202.77578%2015.5595%202.19982%2016%201.54007C15.4118%201.80173%2014.7789%201.97783%2014.1149%202.05723C14.7926%201.6506%2015.3129%201.00729%2015.5584%200.24048C14.914%200.622975%2014.2091%200.892613%2013.4739%201.03777C12.8749%200.399314%2012.0221%200%2011.0778%200C9.26494%200%207.79489%201.47098%207.79489%203.28419C7.79489%203.54197%207.82374%203.79264%207.88006%204.03315C5.15177%203.89578%202.73252%202.58874%201.11343%200.601313C0.821818%201.10258%200.668434%201.67228%200.668943%202.25224C0.668943%203.39183%201.24846%204.39782%202.12976%204.98638C1.60846%204.97045%201.0986%204.82956%200.643057%204.57555C0.642569%204.58934%200.642569%204.60278%200.642569%204.61751C0.642569%206.20823%201.77408%207.53638%203.27613%207.83733C2.99402%207.9142%202.70292%207.95307%202.41054%207.9529C2.19938%207.9529%201.99359%207.93212%201.79359%207.8937C2.21151%209.19879%203.42335%2010.1485%204.86013%2010.1751C3.73659%2011.0562%202.32127%2011.581%200.783024%2011.581C0.521349%2011.5813%200.259888%2011.5661%200%2011.5355C1.45281%2012.4673%203.17789%2013.011%205.032%2013.011'%20fill='white'/%3e%3c/svg%3e",Ph="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1003_5028)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%200C12.4183%200%2016%203.58173%2016%208C16%2012.4183%2012.4183%2016%208%2016C3.58173%2016%200%2012.4183%200%208C0%203.58173%203.58173%200%208%200Z'%20fill='white'/%3e%3cpath%20d='M9.04217%2015.933V9.75237H10.7856L11.0167%207.5771H9.04217L9.0451%206.48827C9.0451%205.92091%209.09903%205.61705%209.91445%205.61705H11.0045V3.44141H9.26065C7.16597%203.44141%206.42881%204.4966%206.42881%206.27136V7.57726H5.12305V9.75274H6.42881V15.8453C6.9375%2015.9466%207.4634%2016.0001%208.00187%2016.0001C8.34972%2016.0001%208.69721%2015.9777%209.04217%2015.933Z'%20fill='%231B6392'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1003_5028'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",jh="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1003_5031)'%3e%3cpath%20d='M7.02503%200.0535087C4.36618%200.350326%201.71669%202.50147%201.60734%205.57431C1.5386%207.4505%202.07131%208.85804%203.8569%209.25327C4.63175%207.88635%203.60695%207.58485%203.44761%206.59598C2.79304%202.54365%208.1217%20-0.219876%2010.9102%202.60926C12.8395%204.56825%2011.5695%2010.5952%208.45757%209.96876C5.4769%209.37044%209.91666%204.57294%207.53743%203.63093C5.60344%202.86546%204.57551%205.97266%205.49252%207.51611C4.95512%2010.1703%203.79754%2012.6714%204.2662%2016.0004C5.78621%2014.8975%206.29861%2012.7854%206.71884%2010.5827C7.48276%2011.0467%207.89049%2011.5294%208.8653%2011.6044C12.4599%2011.8824%2014.4673%208.01602%2013.9768%204.44952C13.541%201.28764%2010.3853%20-0.321418%207.02503%200.0535087Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1003_5031'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Eh="/assets/Reddit-DWp9V1-a.svg",Nh="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.35477%2013.5026L5.07745%2013.4427C4.01632%2013.4218%202.95255%2013.4635%201.91223%2013.2472C0.329668%2012.924%200.217553%2011.3393%200.100237%2010.0101C-0.0614125%208.14132%200.0011669%206.23865%200.306221%204.3855C0.478434%203.34568%201.15616%202.72522%202.20424%202.6577C5.74229%202.41267%209.30387%202.44171%2012.8341%202.55602C13.2069%202.5665%2013.5823%202.62378%2013.9499%202.68898C15.7647%203.00697%2015.8089%204.80277%2015.9265%206.31449C16.0439%207.84181%2015.9943%209.37697%2015.7701%2010.8939C15.5902%2012.1499%2015.246%2013.2031%2013.7935%2013.3048C11.9736%2013.4378%2010.1954%2013.5448%208.37038%2013.5107C8.37046%2013.5026%208.35998%2013.5026%208.35477%2013.5026ZM6.42802%2010.3229C7.79948%209.53569%209.14478%208.76163%2010.5084%207.97973C9.13437%207.19255%207.79164%206.41849%206.42802%205.63659V10.3229Z'%20fill='white'/%3e%3c/svg%3e",_h="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1003_5039)'%3e%3cpath%20d='M5.60136%208.00078C5.60136%206.67535%206.67558%205.60059%208.00107%205.60059C9.32656%205.60059%2010.4014%206.67535%2010.4014%208.00078C10.4014%209.32621%209.32656%2010.401%208.00107%2010.401C6.67558%2010.401%205.60136%209.32621%205.60136%208.00078ZM4.30381%208.00078C4.30381%2010.0427%205.95907%2011.6979%208.00107%2011.6979C10.0431%2011.6979%2011.6983%2010.0427%2011.6983%208.00078C11.6983%205.95886%2010.0431%204.30367%208.00107%204.30367C5.95907%204.30367%204.30387%205.95875%204.30387%208.00078H4.30381ZM10.9807%204.15708C10.9807%204.32796%2011.0313%204.49502%2011.1261%204.63715C11.221%204.77927%2011.3559%204.89006%2011.5138%204.95552C11.6716%205.02098%2011.8454%205.03816%2012.013%205.00489C12.1806%204.97162%2012.3346%204.88939%2012.4555%204.76861C12.5764%204.64782%2012.6587%204.4939%2012.6921%204.32632C12.7255%204.15873%2012.7085%203.985%2012.6432%203.8271C12.5778%203.6692%2012.4671%203.53422%2012.3251%203.43922C12.183%203.34423%2012.016%203.29349%2011.8451%203.29342H11.8448C11.6157%203.29353%2011.396%203.38454%2011.234%203.54648C11.072%203.70841%2010.9809%203.92802%2010.9807%204.15708ZM5.09215%2013.8615C4.39015%2013.8295%204.0086%2013.7126%203.75503%2013.6138C3.41886%2013.4829%203.17901%2013.3271%202.92682%2013.0752C2.67464%2012.8234%202.51854%2012.5838%202.38824%2012.2476C2.2894%2011.9942%202.17246%2011.6125%202.14055%2010.9106C2.10565%2010.1516%202.09868%209.92364%202.09868%208.0009C2.09868%206.07815%202.10622%205.8508%202.14055%205.09123C2.17252%204.38926%202.29032%204.00835%202.38824%203.75416C2.51912%203.41801%202.67499%203.17816%202.92682%202.92599C3.17866%202.67382%203.41829%202.51772%203.75503%202.38743C4.00848%202.28859%204.39015%202.17166%205.09215%202.13975C5.85112%202.10485%206.07911%202.09788%208.00107%202.09788C9.92303%202.09788%2010.1512%202.10531%2010.9108%202.13987C11.6128%202.17183%2011.9938%202.28963%2012.248%202.38755C12.5841%202.51784%2012.824%202.67428%2013.0762%202.92611C13.3284%203.17793%2013.4839%203.41813%2013.6148%203.75428C13.7136%204.00772%2013.8305%204.38938%2013.8624%205.09135C13.8974%205.85092%2013.9043%206.07827%2013.9043%208.00101C13.9043%209.92376%2013.8974%2010.1511%2013.8624%2010.9107C13.8305%2011.6126%2013.713%2011.9942%2013.6148%2012.2477C13.4839%2012.5839%2013.328%2012.8237%2013.0762%2013.0753C12.8243%2013.3269%2012.5841%2013.483%2012.248%2013.6139C11.9945%2013.7127%2011.6128%2013.8297%2010.9108%2013.8616C10.1519%2013.8965%209.92389%2013.9035%208.00107%2013.9035C6.07825%2013.9035%205.85089%2013.8965%205.09215%2013.8616V13.8615ZM5.03253%200.844384C4.26602%200.87929%203.74224%201.00083%203.28482%201.17881C2.81139%201.36261%202.41007%201.6092%202.00933%202.00929C1.6086%202.40938%201.36263%202.81073%201.17883%203.28472C1.00083%203.74241%200.879293%204.26588%200.844386%205.03237C0.808903%205.80006%200.800781%206.04549%200.800781%208.00078C0.800781%209.95607%200.808903%2010.2015%200.844386%2010.9692C0.879293%2011.7357%201.00083%2012.2591%201.17883%2012.7168C1.36263%2013.1903%201.60865%2013.5924%202.00933%2013.9923C2.41002%2014.3922%202.81081%2014.6384%203.28482%2014.8228C3.74311%2015.0007%204.26602%2015.1223%205.03253%2015.1572C5.80066%2015.1921%206.0457%2015.2008%208.00107%2015.2008C9.95644%2015.2008%2010.2019%2015.1927%2010.9696%2015.1572C11.7362%2015.1223%2012.2596%2015.0007%2012.7173%2014.8228C13.1907%2014.6384%2013.5921%2014.3924%2013.9928%2013.9923C14.3935%2013.5922%2014.639%2013.1903%2014.8233%2012.7168C15.0013%2012.2591%2015.1234%2011.7357%2015.1578%2010.9692C15.1927%2010.2009%2015.2008%209.95607%2015.2008%208.00078C15.2008%206.04549%2015.1927%205.80006%2015.1578%205.03237C15.1228%204.26582%2015.0013%203.74213%2014.8233%203.28472C14.639%202.81131%2014.3929%202.41001%2013.9928%202.00929C13.5927%201.60856%2013.1907%201.36261%2012.7179%201.17881C12.2596%201.00083%2011.7361%200.878714%2010.9702%200.844384C10.2023%200.809306%209.95701%200.800781%208.00193%200.800781C6.04685%200.800781%205.80095%200.808903%205.03282%200.844384'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1003_5039'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function Oh(){const r=[{id:1,icon:Sh},{id:2,icon:Ph},{id:3,icon:jh},{id:4,icon:Eh},{id:5,icon:Nh},{id:6,icon:_h}];return d.jsx("div",{className:"center-header w-full h-[52px] bg-secondaryColor",children:d.jsxs("div",{className:"container min-w-[100%] h-full flex justify-between items-center",children:[d.jsx("p",{className:"text-sm text-whiteColor welcome-p",children:"Welcome to Clicon online eCommerce store."}),d.jsxs("div",{className:"flex gap-6 all-follow-us-content",children:[d.jsxs("div",{className:"flex items-center gap-3 pr-5 border-r-[1px] follow-us-content border-whiteColor",children:[d.jsx("p",{className:"text-sm text-whiteColor",children:"Follow us:"}),d.jsx("div",{className:"flex items-center gap-3 all-icons-social",children:r.map((i,a)=>d.jsx("img",{src:i.icon,alt:"icon-social",className:"w-4 h-4 cursor-pointer"},i.id))})]}),d.jsx("div",{className:"flex gap-2 cursor-pointer col-lang",children:d.jsx("p",{className:"text-sm text-whiteColor",children:"Eng"})})]})]})})}var L=Bt();const xe=yf(L);var kf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ud=xe.createContext&&xe.createContext(kf),Th=["attr","size","title"];function Ah(r,i){if(r==null)return{};var a=Rh(r,i),s,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(c=0;c<f.length;c++)s=f[c],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(a[s]=r[s])}return a}function Rh(r,i){if(r==null)return{};var a={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(i.indexOf(s)>=0)continue;a[s]=r[s]}return a}function ua(){return ua=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s])}return r},ua.apply(this,arguments)}function Vd(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);i&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),a.push.apply(a,s)}return a}function ca(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Vd(Object(a),!0).forEach(function(s){Mh(r,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Vd(Object(a)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(a,s))})}return r}function Mh(r,i,a){return i=Lh(i),i in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r}function Lh(r){var i=zh(r,"string");return typeof i=="symbol"?i:i+""}function zh(r,i){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var s=a.call(r,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}function Cf(r){return r&&r.map((i,a)=>xe.createElement(i.tag,ca({key:a},i.attr),Cf(i.child)))}function En(r){return i=>xe.createElement(Dh,ua({attr:ca({},r.attr)},i),Cf(r.child))}function Dh(r){var i=a=>{var{attr:s,size:c,title:f}=r,m=Ah(r,Th),y=c||a.size||"1em",v;return a.className&&(v=a.className),r.className&&(v=(v?v+" ":"")+r.className),xe.createElement("svg",ua({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,s,m,{className:v,style:ca(ca({color:r.color||a.color},a.style),r.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),f&&xe.createElement("title",null,f),r.children)};return Ud!==void 0?xe.createElement(Ud.Consumer,null,a=>i(a)):i(kf)}function It(r){return En({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(r)}function Ih(r){return En({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(r)}function Nt(r){return En({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(r)}function Fh(r){return En({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(r)}function Hh(r){return En({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"},child:[]}]})(r)}const Bh="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48%2024C48%2037.2548%2037.2548%2048%2024%2048C10.7452%2048%200%2037.2548%200%2024C0%2010.7452%2010.7452%200%2024%200C37.2548%200%2048%2010.7452%2048%2024ZM36%2024C36%2030.6274%2030.6274%2036%2024%2036C17.3726%2036%2012%2030.6274%2012%2024C12%2017.3726%2017.3726%2012%2024%2012C30.6274%2012%2036%2017.3726%2036%2024ZM24%2032C28.4183%2032%2032%2028.4183%2032%2024C32%2019.5817%2028.4183%2016%2024%2016C19.5817%2016%2016%2019.5817%2016%2024C16%2028.4183%2019.5817%2032%2024%2032Z'%20fill='white'/%3e%3c/svg%3e",Uh="/assets/united-deals-logo-CyskSLw4.svg";var Fs={exports:{}},Hs={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function Vh(){if(Wd)return Hs;Wd=1;var r=Bt();function i(v,g){return v===g&&(v!==0||1/v===1/g)||v!==v&&g!==g}var a=typeof Object.is=="function"?Object.is:i,s=r.useSyncExternalStore,c=r.useRef,f=r.useEffect,m=r.useMemo,y=r.useDebugValue;return Hs.useSyncExternalStoreWithSelector=function(v,g,p,x,E){var C=c(null);if(C.current===null){var b={hasValue:!1,value:null};C.current=b}else b=C.current;C=m(function(){function S(H){if(!_){if(_=!0,R=H,H=x(H),E!==void 0&&b.hasValue){var B=b.value;if(E(B,H))return A=B}return A=H}if(B=A,a(R,H))return B;var F=x(H);return E!==void 0&&E(B,F)?(R=H,B):(R=H,A=F)}var _=!1,R,A,D=p===void 0?null:p;return[function(){return S(g())},D===null?void 0:function(){return S(D())}]},[g,p,x,E]);var k=s(v,C[0],C[1]);return f(function(){b.hasValue=!0,b.value=k},[k]),y(k),k},Hs}var qd;function Wh(){return qd||(qd=1,Fs.exports=Vh()),Fs.exports}var qh=Wh();function Qh(r){r()}function Xh(){let r=null,i=null;return{clear(){r=null,i=null},notify(){Qh(()=>{let a=r;for(;a;)a.callback(),a=a.next})},get(){const a=[];let s=r;for(;s;)a.push(s),s=s.next;return a},subscribe(a){let s=!0;const c=i={callback:a,next:null,prev:i};return c.prev?c.prev.next=c:r=c,function(){!s||r===null||(s=!1,c.next?c.next.prev=c.prev:i=c.prev,c.prev?c.prev.next=c.next:r=c.next)}}}}var Qd={notify(){},get:()=>[]};function Kh(r,i){let a,s=Qd,c=0,f=!1;function m(k){p();const S=s.subscribe(k);let _=!1;return()=>{_||(_=!0,S(),x())}}function y(){s.notify()}function v(){b.onStateChange&&b.onStateChange()}function g(){return f}function p(){c++,a||(a=r.subscribe(v),s=Xh())}function x(){c--,a&&c===0&&(a(),a=void 0,s.clear(),s=Qd)}function E(){f||(f=!0,p())}function C(){f&&(f=!1,x())}const b={addNestedSub:m,notifyNestedSubs:y,handleChangeWrapper:v,isSubscribed:g,trySubscribe:E,tryUnsubscribe:C,getListeners:()=>s};return b}var Zh=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yh=Zh(),$h=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Gh=$h(),Jh=()=>Yh||Gh?L.useLayoutEffect:L.useEffect,em=Jh(),tm=Symbol.for("react-redux-context"),nm=typeof globalThis<"u"?globalThis:{};function rm(){if(!L.createContext)return{};const r=nm[tm]??=new Map;let i=r.get(L.createContext);return i||(i=L.createContext(null),r.set(L.createContext,i)),i}var da=rm();function om(r){const{children:i,context:a,serverState:s,store:c}=r,f=L.useMemo(()=>{const v=Kh(c);return{store:c,subscription:v,getServerState:s?()=>s:void 0}},[c,s]),m=L.useMemo(()=>c.getState(),[c]);em(()=>{const{subscription:v}=f;return v.onStateChange=v.notifyNestedSubs,v.trySubscribe(),m!==c.getState()&&v.notifyNestedSubs(),()=>{v.tryUnsubscribe(),v.onStateChange=void 0}},[f,m]);const y=a||da;return L.createElement(y.Provider,{value:f},i)}var im=om;function Sf(r=da){return function(){return L.useContext(r)}}var am=Sf(),lm=(r,i)=>r===i;function sm(r=da){const i=r===da?am:Sf(r),a=(s,c={})=>{const{equalityFn:f=lm}=typeof c=="function"?{equalityFn:c}:c,m=i(),{store:y,subscription:v,getServerState:g}=m;L.useRef(!0);const p=L.useCallback({[s.name](E){return s(E)}}[s.name],[s]),x=qh.useSyncExternalStoreWithSelector(v.addNestedSub,y.getState,g||y.getState,p,f);return L.useDebugValue(x),x};return Object.assign(a,{withTypes:()=>a}),a}var um=sm();function cm(){const[r,i]=L.useState(!1),a=um(s=>s.heartsProducts.heartsProducts.length);return d.jsx("nav",{className:"nav-content w-full h-[88px] bg-secondaryColor",children:d.jsxs("div",{className:"container min-w-[100%] h-full flex justify-between items-center",children:[d.jsxs("div",{className:"flex gap-2 col-logo",children:[d.jsx("img",{src:Bh,alt:"icon-img"}),d.jsx("img",{src:Uh,alt:"logo-img"})]}),d.jsxs("form",{action:"",className:"flex items-center form-search w-[40%] h-12 bg-whiteColor pl-5 pr-5 pt-[14px] pb-[14px]",children:[d.jsx("input",{type:"text",name:"search",placeholder:"Search for anything...",className:"w-[95%] min-h-[100%] border-none outline-none text-sm text-gray500"}),d.jsx("button",{type:"submit",children:d.jsx(Ih,{className:"w-5 h-5 cursor-pointer text-gray900"})})]}),d.jsxs("div",{className:"flex items-center gap-6 all-icons",children:[d.jsxs("div",{className:"flex cursor-pointer col-cart",children:[d.jsx(Nt,{className:"w-8 h-8 text-whiteColor cart-icon"}),d.jsx("div",{className:"number-products w-5 h-5 pt-[2px] pb-[2px] bg-whiteColor rounded-full flex justify-center items-center mt-[-4px] ml-[-8px]",children:d.jsx("p",{className:"text-xs font-semibold text-secondary700",children:"2"})})]}),d.jsxs("div",{className:"flex cursor-pointer col-heart ",children:[d.jsx(Fh,{className:"w-8 h-8 text-whiteColor heart-icon"}),d.jsx("div",{className:"number-heart w-5 h-5 pt-[2px] pb-[2px] bg-whiteColor rounded-full flex justify-center items-center mt-[-4px] ml-[-8px]",children:d.jsx("p",{className:"text-xs font-semibold text-secondary700",children:a})})]}),d.jsx(Hh,{className:"w-8 h-8 cursor-pointer text-whiteColor account-icon"})]})]})})}function dm(){return d.jsxs("header",{children:[d.jsx(Ch,{}),d.jsx(Oh,{}),d.jsx(cm,{})]})}const fm="/assets/banner-img-1-3_73RWf8.png",pm="/assets/banner-img-2-DbegsuBA.png",hm="/assets/banner-img-3-iFyOEp25.png";function mm(){return d.jsx(su.Link,{to:"Featured-Products",smooth:!0,duration:500,children:d.jsx("div",{className:"w-full h-full mt-6 mb-6 banners-departament",children:d.jsxs("div",{className:"container flex min-w-[100%] h-full gap-6 justify-center",children:[d.jsx("div",{className:"slider-banners",children:d.jsx("img",{src:fm,alt:"banner-img",className:"object-contain min-w-[100%] h-full cursor-pointer"})}),d.jsxs("div",{className:"flex flex-col gap-5 col-banners",children:[d.jsx("img",{src:pm,alt:"banner-img",className:"object-contain min-w-[100%] h-full cursor-pointer"}),d.jsx("img",{src:hm,alt:"banner-img",className:"object-contain w-full h-full cursor-pointer"})]})]})})})}const vm="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M35%2027.7023V12.2961C34.9988%2012.0736%2034.939%2011.8553%2034.8265%2011.6632C34.714%2011.4712%2034.5529%2011.3122%2034.3594%2011.2023L20.6094%203.46797C20.4241%203.361%2020.2139%203.30469%2020%203.30469C19.7861%203.30469%2019.5759%203.361%2019.3906%203.46797L5.64062%2011.2023C5.44711%2011.3122%205.28599%2011.4712%205.17352%2011.6632C5.06105%2011.8553%205.0012%2012.0736%205%2012.2961V27.7023C5.0012%2027.9249%205.06105%2028.1432%205.17352%2028.3352C5.28599%2028.5272%205.44711%2028.6862%205.64062%2028.7961L19.3906%2036.5305C19.5759%2036.6374%2019.7861%2036.6938%2020%2036.6938C20.2139%2036.6938%2020.4241%2036.6374%2020.6094%2036.5305L34.3594%2028.7961C34.5529%2028.6862%2034.714%2028.5272%2034.8265%2028.3352C34.939%2028.1432%2034.9988%2027.9249%2035%2027.7023V27.7023Z'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27.6562%2023.8281V15.7031L12.5%207.34375'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M34.8281%2011.6562L20.1406%2020L5.17188%2011.6562'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20.1406%2020L20%2036.6875'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",gm="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.75%208.75V17.3594C8.75%2023.5625%2013.7187%2028.7031%2019.9219%2028.75C21.4058%2028.7603%2022.8771%2028.4769%2024.2511%2027.9162C25.625%2027.3554%2026.8744%2026.5284%2027.9274%2025.4827C28.9803%2024.437%2029.816%2023.1933%2030.3862%2021.8233C30.9565%2020.4533%2031.25%2018.984%2031.25%2017.5V8.75C31.25%208.41848%2031.1183%208.10054%2030.8839%207.86612C30.6495%207.6317%2030.3315%207.5%2030%207.5H10C9.66848%207.5%209.35054%207.6317%209.11612%207.86612C8.8817%208.10054%208.75%208.41848%208.75%208.75Z'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%2035H25'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20%2028.75V35'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M30.9688%2020H32.5C33.8261%2020%2035.0979%2019.4732%2036.0355%2018.5355C36.9732%2017.5979%2037.5%2016.3261%2037.5%2015V12.5C37.5%2012.1685%2037.3683%2011.8505%2037.1339%2011.6161C36.8995%2011.3817%2036.5815%2011.25%2036.25%2011.25H31.25'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.0625%2020H7.48438C6.15829%2020%204.88652%2019.4732%203.94884%2018.5355C3.01116%2017.5979%202.48438%2016.3261%202.48438%2015V12.5C2.48438%2012.1685%202.61607%2011.8505%202.85049%2011.6161C3.08491%2011.3817%203.40285%2011.25%203.73438%2011.25H8.73438'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ym="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M35%208.75H5C4.30964%208.75%203.75%209.30964%203.75%2010V30C3.75%2030.6904%204.30964%2031.25%205%2031.25H35C35.6904%2031.25%2036.25%2030.6904%2036.25%2030V10C36.25%209.30964%2035.6904%208.75%2035%208.75Z'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M26.25%2026.25H31.25'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.75%2026.25H21.25'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.75%2015.1406H36.25'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",xm="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M35.2344%2021.2505H30.2344C29.5713%2021.2505%2028.9354%2021.5139%2028.4666%2021.9828C27.9978%2022.4516%2027.7344%2023.0875%2027.7344%2023.7505V30.0005C27.7344%2030.6636%2027.9978%2031.2994%2028.4666%2031.7683C28.9354%2032.2371%2029.5713%2032.5005%2030.2344%2032.5005H32.7344C33.3974%2032.5005%2034.0333%2032.2371%2034.5021%2031.7683C34.971%2031.2994%2035.2344%2030.6636%2035.2344%2030.0005V21.2505ZM35.2344%2021.2505C35.2344%2019.2701%2034.8424%2017.3093%2034.0807%2015.4813C33.3191%2013.6532%2032.203%2011.994%2030.7969%2010.5995C29.3907%209.20495%2027.7224%208.10268%2025.888%207.35625C24.0537%206.60982%2022.0897%206.23402%2020.1094%206.25052C18.1304%206.23609%2016.1681%206.61342%2014.3355%207.36078C12.503%208.10814%2010.8365%209.21074%209.432%2010.6051C8.02751%2011.9994%206.91283%2013.6578%206.15218%2015.4849C5.39153%2017.3119%204.99995%2019.2715%205%2021.2505V30.0005C5%2030.6636%205.26339%2031.2994%205.73223%2031.7683C6.20107%2032.2371%206.83696%2032.5005%207.5%2032.5005H10C10.663%2032.5005%2011.2989%2032.2371%2011.7678%2031.7683C12.2366%2031.2994%2012.5%2030.6636%2012.5%2030.0005V23.7505C12.5%2023.0875%2012.2366%2022.4516%2011.7678%2021.9828C11.2989%2021.5139%2010.663%2021.2505%2010%2021.2505H5'%20stroke='%23191C1F'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function wm(){const r=[{id:1,img:vm,title:"Fasted Delivery",description:"Delivery in 24/H"},{id:2,img:gm,title:"24 Hours Return",description:"100% money-back guarantee"},{id:3,img:ym,title:"Secure Payment",description:"Your money is safe"},{id:4,img:xm,title:"Support 24/7",description:"Live contact/message"}];return d.jsx("div",{className:"w-full free-delivery-departament",children:d.jsx("div",{className:"container min-w-[100%] h-[108px]",children:d.jsx("div",{className:"flex items-center justify-between w-full h-full p-4 gap-7 all-content-delivery",children:r.map((i,a)=>d.jsxs("div",{className:"flex gap-4 col-div",children:[d.jsx("img",{src:i.img,alt:"img-icon"}),d.jsxs("div",{className:"content-text",children:[d.jsx("h3",{className:"text-base uppercase text-gray900",children:i.title}),d.jsx("p",{className:"text-sm text-gray600",children:i.description})]})]},i.id))})})})}function ho(r){return En({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"},child:[]}]})(r)}function ce(r){return En({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"},child:[]}]})(r)}function Ft(r){return En({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(r)}function Ue(r,i){i===void 0&&(i={});var a=i.insertAt;if(r&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=r:c.appendChild(document.createTextNode(r))}}Ue(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var me=function(){return me=Object.assign||function(r){for(var i,a=1,s=arguments.length;a<s;a++)for(var c in i=arguments[a])Object.prototype.hasOwnProperty.call(i,c)&&(r[c]=i[c]);return r},me.apply(this,arguments)};function fa(r){return fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},fa(r)}var bm=/^\s+/,km=/\s+$/;function oe(r,i){if(i=i||{},(r=r||"")instanceof oe)return r;if(!(this instanceof oe))return new oe(r,i);var a=(function(s){var c={r:0,g:0,b:0},f=1,m=null,y=null,v=null,g=!1,p=!1;typeof s=="string"&&(s=(function(b){b=b.replace(bm,"").replace(km,"").toLowerCase();var k,S=!1;if(Xs[b])b=Xs[b],S=!0;else if(b=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(k=Et.rgb.exec(b))?{r:k[1],g:k[2],b:k[3]}:(k=Et.rgba.exec(b))?{r:k[1],g:k[2],b:k[3],a:k[4]}:(k=Et.hsl.exec(b))?{h:k[1],s:k[2],l:k[3]}:(k=Et.hsla.exec(b))?{h:k[1],s:k[2],l:k[3],a:k[4]}:(k=Et.hsv.exec(b))?{h:k[1],s:k[2],v:k[3]}:(k=Et.hsva.exec(b))?{h:k[1],s:k[2],v:k[3],a:k[4]}:(k=Et.hex8.exec(b))?{r:ft(k[1]),g:ft(k[2]),b:ft(k[3]),a:Gd(k[4]),format:S?"name":"hex8"}:(k=Et.hex6.exec(b))?{r:ft(k[1]),g:ft(k[2]),b:ft(k[3]),format:S?"name":"hex"}:(k=Et.hex4.exec(b))?{r:ft(k[1]+""+k[1]),g:ft(k[2]+""+k[2]),b:ft(k[3]+""+k[3]),a:Gd(k[4]+""+k[4]),format:S?"name":"hex8"}:(k=Et.hex3.exec(b))?{r:ft(k[1]+""+k[1]),g:ft(k[2]+""+k[2]),b:ft(k[3]+""+k[3]),format:S?"name":"hex"}:!1})(s)),fa(s)=="object"&&(Gt(s.r)&&Gt(s.g)&&Gt(s.b)?(x=s.r,E=s.g,C=s.b,c={r:255*Ae(x,255),g:255*Ae(E,255),b:255*Ae(C,255)},g=!0,p=String(s.r).substr(-1)==="%"?"prgb":"rgb"):Gt(s.h)&&Gt(s.s)&&Gt(s.v)?(m=lo(s.s),y=lo(s.v),c=(function(b,k,S){b=6*Ae(b,360),k=Ae(k,100),S=Ae(S,100);var _=Math.floor(b),R=b-_,A=S*(1-k),D=S*(1-R*k),H=S*(1-(1-R)*k),B=_%6,F=[S,D,A,A,H,S][B],K=[H,S,S,D,A,A][B],Z=[A,A,H,S,S,D][B];return{r:255*F,g:255*K,b:255*Z}})(s.h,m,y),g=!0,p="hsv"):Gt(s.h)&&Gt(s.s)&&Gt(s.l)&&(m=lo(s.s),v=lo(s.l),c=(function(b,k,S){var _,R,A;function D(F,K,Z){return Z<0&&(Z+=1),Z>1&&(Z-=1),Z<1/6?F+6*(K-F)*Z:Z<.5?K:Z<2/3?F+(K-F)*(2/3-Z)*6:F}if(b=Ae(b,360),k=Ae(k,100),S=Ae(S,100),k===0)_=R=A=S;else{var H=S<.5?S*(1+k):S+k-S*k,B=2*S-H;_=D(B,H,b+1/3),R=D(B,H,b),A=D(B,H,b-1/3)}return{r:255*_,g:255*R,b:255*A}})(s.h,m,v),g=!0,p="hsl"),s.hasOwnProperty("a")&&(f=s.a));var x,E,C;return f=Pf(f),{ok:g,format:s.format||p,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:f}})(r);this._originalInput=r,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||a.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=a.ok}function Xd(r,i,a){r=Ae(r,255),i=Ae(i,255),a=Ae(a,255);var s,c,f=Math.max(r,i,a),m=Math.min(r,i,a),y=(f+m)/2;if(f==m)s=c=0;else{var v=f-m;switch(c=y>.5?v/(2-f-m):v/(f+m),f){case r:s=(i-a)/v+(i<a?6:0);break;case i:s=(a-r)/v+2;break;case a:s=(r-i)/v+4}s/=6}return{h:s,s:c,l:y}}function Kd(r,i,a){r=Ae(r,255),i=Ae(i,255),a=Ae(a,255);var s,c,f=Math.max(r,i,a),m=Math.min(r,i,a),y=f,v=f-m;if(c=f===0?0:v/f,f==m)s=0;else{switch(f){case r:s=(i-a)/v+(i<a?6:0);break;case i:s=(a-r)/v+2;break;case a:s=(r-i)/v+4}s/=6}return{h:s,s:c,v:y}}function Zd(r,i,a,s){var c=[Ot(Math.round(r).toString(16)),Ot(Math.round(i).toString(16)),Ot(Math.round(a).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function Yd(r,i,a,s){return[Ot(jf(s)),Ot(Math.round(r).toString(16)),Ot(Math.round(i).toString(16)),Ot(Math.round(a).toString(16))].join("")}function Cm(r,i){i=i===0?0:i||10;var a=oe(r).toHsl();return a.s-=i/100,a.s=Pa(a.s),oe(a)}function Sm(r,i){i=i===0?0:i||10;var a=oe(r).toHsl();return a.s+=i/100,a.s=Pa(a.s),oe(a)}function Pm(r){return oe(r).desaturate(100)}function jm(r,i){i=i===0?0:i||10;var a=oe(r).toHsl();return a.l+=i/100,a.l=Pa(a.l),oe(a)}function Em(r,i){i=i===0?0:i||10;var a=oe(r).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(-i/100*255))),a.g=Math.max(0,Math.min(255,a.g-Math.round(-i/100*255))),a.b=Math.max(0,Math.min(255,a.b-Math.round(-i/100*255))),oe(a)}function Nm(r,i){i=i===0?0:i||10;var a=oe(r).toHsl();return a.l-=i/100,a.l=Pa(a.l),oe(a)}function _m(r,i){var a=oe(r).toHsl(),s=(a.h+i)%360;return a.h=s<0?360+s:s,oe(a)}function Om(r){var i=oe(r).toHsl();return i.h=(i.h+180)%360,oe(i)}function $d(r,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var a=oe(r).toHsl(),s=[oe(r)],c=360/i,f=1;f<i;f++)s.push(oe({h:(a.h+f*c)%360,s:a.s,l:a.l}));return s}function Tm(r){var i=oe(r).toHsl(),a=i.h;return[oe(r),oe({h:(a+72)%360,s:i.s,l:i.l}),oe({h:(a+216)%360,s:i.s,l:i.l})]}function Am(r,i,a){i=i||6,a=a||30;var s=oe(r).toHsl(),c=360/a,f=[oe(r)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,f.push(oe(s));return f}function Rm(r,i){i=i||6;for(var a=oe(r).toHsv(),s=a.h,c=a.s,f=a.v,m=[],y=1/i;i--;)m.push(oe({h:s,s:c,v:f})),f=(f+y)%1;return m}oe.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,i,a,s=this.toRgb();return r=s.r/255,i=s.g/255,a=s.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},setAlpha:function(r){return this._a=Pf(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=Kd(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=Kd(this._r,this._g,this._b),i=Math.round(360*r.h),a=Math.round(100*r.s),s=Math.round(100*r.v);return this._a==1?"hsv("+i+", "+a+"%, "+s+"%)":"hsva("+i+", "+a+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var r=Xd(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=Xd(this._r,this._g,this._b),i=Math.round(360*r.h),a=Math.round(100*r.s),s=Math.round(100*r.l);return this._a==1?"hsl("+i+", "+a+"%, "+s+"%)":"hsla("+i+", "+a+"%, "+s+"%, "+this._roundA+")"},toHex:function(r){return Zd(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return(function(i,a,s,c,f){var m=[Ot(Math.round(i).toString(16)),Ot(Math.round(a).toString(16)),Ot(Math.round(s).toString(16)),Ot(jf(c))];return f&&m[0].charAt(0)==m[0].charAt(1)&&m[1].charAt(0)==m[1].charAt(1)&&m[2].charAt(0)==m[2].charAt(1)&&m[3].charAt(0)==m[3].charAt(1)?m[0].charAt(0)+m[1].charAt(0)+m[2].charAt(0)+m[3].charAt(0):m.join("")})(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ae(this._r,255))+"%",g:Math.round(100*Ae(this._g,255))+"%",b:Math.round(100*Ae(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ae(this._r,255))+"%, "+Math.round(100*Ae(this._g,255))+"%, "+Math.round(100*Ae(this._b,255))+"%)":"rgba("+Math.round(100*Ae(this._r,255))+"%, "+Math.round(100*Ae(this._g,255))+"%, "+Math.round(100*Ae(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Mm[Zd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var i="#"+Yd(this._r,this._g,this._b,this._a),a=i,s=this._gradientType?"GradientType = 1, ":"";if(r){var c=oe(r);a="#"+Yd(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+a+")"},toString:function(r){var i=!!r;r=r||this._format;var a=!1,s=this._a<1&&this._a>=0;return i||!s||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(a=this.toRgbString()),r==="prgb"&&(a=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(a=this.toHexString()),r==="hex3"&&(a=this.toHexString(!0)),r==="hex4"&&(a=this.toHex8String(!0)),r==="hex8"&&(a=this.toHex8String()),r==="name"&&(a=this.toName()),r==="hsl"&&(a=this.toHslString()),r==="hsv"&&(a=this.toHsvString()),a||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return oe(this.toString())},_applyModification:function(r,i){var a=r.apply(null,[this].concat([].slice.call(i)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification(jm,arguments)},brighten:function(){return this._applyModification(Em,arguments)},darken:function(){return this._applyModification(Nm,arguments)},desaturate:function(){return this._applyModification(Cm,arguments)},saturate:function(){return this._applyModification(Sm,arguments)},greyscale:function(){return this._applyModification(Pm,arguments)},spin:function(){return this._applyModification(_m,arguments)},_applyCombination:function(r,i){return r.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(Am,arguments)},complement:function(){return this._applyCombination(Om,arguments)},monochromatic:function(){return this._applyCombination(Rm,arguments)},splitcomplement:function(){return this._applyCombination(Tm,arguments)},triad:function(){return this._applyCombination($d,[3])},tetrad:function(){return this._applyCombination($d,[4])}},oe.fromRatio=function(r,i){if(fa(r)=="object"){var a={};for(var s in r)r.hasOwnProperty(s)&&(a[s]=s==="a"?r[s]:lo(r[s]));r=a}return oe(r,i)},oe.equals=function(r,i){return!(!r||!i)&&oe(r).toRgbString()==oe(i).toRgbString()},oe.random=function(){return oe.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},oe.mix=function(r,i,a){a=a===0?0:a||50;var s=oe(r).toRgb(),c=oe(i).toRgb(),f=a/100;return oe({r:(c.r-s.r)*f+s.r,g:(c.g-s.g)*f+s.g,b:(c.b-s.b)*f+s.b,a:(c.a-s.a)*f+s.a})},oe.readability=function(r,i){var a=oe(r),s=oe(i);return(Math.max(a.getLuminance(),s.getLuminance())+.05)/(Math.min(a.getLuminance(),s.getLuminance())+.05)},oe.isReadable=function(r,i,a){var s,c,f=oe.readability(r,i);switch(c=!1,(s=(function(m){var y,v;return y=((m=m||{level:"AA",size:"small"}).level||"AA").toUpperCase(),v=(m.size||"small").toLowerCase(),y!=="AA"&&y!=="AAA"&&(y="AA"),v!=="small"&&v!=="large"&&(v="small"),{level:y,size:v}})(a)).level+s.size){case"AAsmall":case"AAAlarge":c=f>=4.5;break;case"AAlarge":c=f>=3;break;case"AAAsmall":c=f>=7}return c},oe.mostReadable=function(r,i,a){var s,c,f,m,y=null,v=0;c=(a=a||{}).includeFallbackColors,f=a.level,m=a.size;for(var g=0;g<i.length;g++)(s=oe.readability(r,i[g]))>v&&(v=s,y=oe(i[g]));return oe.isReadable(r,y,{level:f,size:m})||!c?y:(a.includeFallbackColors=!1,oe.mostReadable(r,["#fff","#000"],a))};var Xs=oe.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Mm=oe.hexNames=(function(r){var i={};for(var a in r)r.hasOwnProperty(a)&&(i[r[a]]=a);return i})(Xs);function Pf(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Ae(r,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(r)&&(r="100%");var a=(function(s){return typeof s=="string"&&s.indexOf("%")!=-1})(r);return r=Math.min(i,Math.max(0,parseFloat(r))),a&&(r=parseInt(r*i,10)/100),Math.abs(r-i)<1e-6?1:r%i/parseFloat(i)}function Pa(r){return Math.min(1,Math.max(0,r))}function ft(r){return parseInt(r,16)}function Ot(r){return r.length==1?"0"+r:""+r}function lo(r){return r<=1&&(r=100*r+"%"),r}function jf(r){return Math.round(255*parseFloat(r)).toString(16)}function Gd(r){return ft(r)/255}var jn,Ki,Zi,Et=(Ki="[\\s|\\(]+("+(jn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+jn+")[,|\\s]+("+jn+")\\s*\\)?",Zi="[\\s|\\(]+("+jn+")[,|\\s]+("+jn+")[,|\\s]+("+jn+")[,|\\s]+("+jn+")\\s*\\)?",{CSS_UNIT:new RegExp(jn),rgb:new RegExp("rgb"+Ki),rgba:new RegExp("rgba"+Zi),hsl:new RegExp("hsl"+Ki),hsla:new RegExp("hsla"+Zi),hsv:new RegExp("hsv"+Ki),hsva:new RegExp("hsva"+Zi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Gt(r){return!!Et.CSS_UNIT.exec(r)}var mo=function(r,i){var a=(typeof r=="string"?parseInt(r):r)||0;if(a>=-5&&a<=5){var s=a,c=parseFloat(i),f=c+s*(c/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:i}},vo=function(r,i){var a=r||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(a.fontSize){var f=a.fontSize;c=(function(m,y){var v={};for(var g in m)Object.prototype.hasOwnProperty.call(m,g)&&y.indexOf(g)<0&&(v[g]=m[g]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function"){var p=0;for(g=Object.getOwnPropertySymbols(m);p<g.length;p++)y.indexOf(g[p])<0&&Object.prototype.propertyIsEnumerable.call(m,g[p])&&(v[g[p]]=m[g[p]])}return v})(a,["fontSize"]),s=f}return{fontSize:s,styles:c}},Lm={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},go=function(r){var i=r.className,a=r.text,s=r.textColor,c=r.staticText,f=r.style;return a?xe.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:me(me(me({},c&&Lm),s&&{color:s,mixBlendMode:"unset"}),f&&f)},typeof a=="string"&&a.length?a:"loading"):null},en="rgb(50, 205, 50)";function yo(r,i){if(i===void 0&&(i=0),r.length===0)throw new Error("Input array cannot be empty!");var a=[];return(function s(c,f){return f===void 0&&(f=0),a.push.apply(a,c),a.length<f&&s(a,f),a.slice(0,f)})(r,i)}Ue(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);oe(en).toRgb();Array.from({length:4},(function(r,i){return"--atom-phase".concat(i+1,"-rgb")}));Ue(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--commet-phase".concat(i+1,"-color")}));Ue(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var Yi=Array.from({length:4},(function(r,i){return"--OP-annulus-phase".concat(i+1,"-color")})),zm=function(r){var i,a=vo(r?.style,r?.size),s=a.styles,c=a.fontSize,f=r?.easing,m=mo(r?.speedPlus,"1.5s").animationPeriod,y=(function(g){var p={},x=Yi.length;if(g instanceof Array){for(var E=yo(g,x),C=0;C<E.length&&!(C>=4);C++)p[Yi[C]]=E[C];return p}try{if(typeof g!="string")throw new Error("Color String expected");for(var b=0;b<x;b++)p[Yi[b]]=g}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof g,'" instead with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),b=0;b<x;b++)p[Yi[b]]=en}return p})((i=r?.color)!==null&&i!==void 0?i:""),v=r?.dense?4.3:2.9;return xe.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:me(me(me(me(me({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),y),s),role:"status","aria-live":"polite","aria-label":"Loading"},xe.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},xe.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},xe.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:v,strokeMiterlimit:"10"})),xe.createElement(go,{className:"OP-annulus-text",text:r?.text,textColor:r?.textColor})))};function Bs(r){return r&&r.Math===Math&&r}Ue(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var hr=Bs(typeof window=="object"&&window)||Bs(typeof self=="object"&&self)||Bs(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();function Ef(){var r,i;return!((r=hr?.crypto)===null||r===void 0)&&r.randomUUID?hr.crypto.randomUUID():!((i=hr?.btoa)===null||i===void 0)&&i.name?hr.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var $i=Array.from({length:4},(function(r,i){return"--OP-dotted-phase".concat(i+1,"-color")})),Dm=function(r){var i,a=vo(r?.style,r?.size),s=a.styles,c=a.fontSize,f=r?.easing,m=mo(r?.speedPlus,"1.2s").animationPeriod,y=(function(g){var p={},x=$i.length;if(g instanceof Array){for(var E=yo(g,x),C=0;C<E.length&&!(C>=4);C++)p[$i[C]]=E[C];return p}try{if(typeof g!="string")throw new Error("Color String expected");for(var b=0;b<x;b++)p[$i[b]]=g}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof g,'" with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),b=0;b<x;b++)p[$i[b]]=en}return p})((i=r?.color)!==null&&i!==void 0?i:""),v=r?.dense?16:12;return xe.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:me(me(me(me(me({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),y),s),role:"status","aria-live":"polite","aria-label":"Loading"},xe.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:v}).map((function(g,p){var x=(function(b,k,S){if(k===16){var _=360*b/k,R=k-b,A=Number.parseFloat(S)/k*R*-1;return{transform:"rotate(".concat(_,"deg)"),animationDelay:"".concat(A,"s")}}return{transform:"",animationDelay:""}})(p,v,m),E=x.animationDelay,C=x.transform;return xe.createElement("span",{key:Ef(),className:"rli-d-i-b dot-shape-holder",style:C?{transform:C}:void 0},xe.createElement("span",{className:"dot",style:E?{animationDelay:E}:void 0}))})),xe.createElement(go,{className:"OP-dotted-text",text:r?.text,textColor:r?.textColor})))};Ue(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var Gi=Array.from({length:4},(function(r,i){return"--OP-spokes-phase".concat(i+1,"-color")})),Im=function(r){var i,a=vo(r?.style,r?.size),s=a.styles,c=a.fontSize,f=r?.easing,m=mo(r?.speedPlus,"1.2s").animationPeriod,y=(function(g){var p={},x=Gi.length;if(g instanceof Array){for(var E=yo(g,x),C=0;C<E.length&&!(C>=4);C++)p[Gi[C]]=E[C];return p}try{if(typeof g!="string")throw new Error("Color String expected");for(var b=0;b<x;b++)p[Gi[b]]=g}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof g,'" instead with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),b=0;b<x;b++)p[Gi[b]]=en}return p})((i=r?.color)!==null&&i!==void 0?i:""),v=r?.dense?16:12;return xe.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:me(me(me(me(me({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),y),s),role:"status","aria-live":"polite","aria-label":"Loading"},xe.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:v},(function(g,p){return xe.createElement("span",{key:Ef(),className:"rli-d-i-b spoke",style:Fm(p,v,m)})}))),xe.createElement(go,{text:r?.text,textColor:r?.textColor}))};function Fm(r,i,a){if(i===16){var s=i-r,c=Number.parseFloat(a)/i;return{transform:"rotate(".concat(360*r/i,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((s-1)*c*-1,"s")}}}Ue(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var Ji=Array.from({length:4},(function(r,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")})),Hm=function(r){var i,a=vo(r?.style,r?.size),s=a.styles,c=a.fontSize,f=r?.easing,m=mo(r?.speedPlus,"1.2s").animationPeriod,y=(function(g){var p={},x=Ji.length;if(g instanceof Array){for(var E=yo(g,x),C=0;C<E.length&&!(C>=4);C++)p[Ji[C]]=E[C];return p}try{if(typeof g!="string")throw new Error("Color String expected");for(var b=0;b<x;b++)p[Ji[b]]=g}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof g,'" with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),b=0;b<x;b++)p[Ji[b]]=en}return p})((i=r?.color)!==null&&i!==void 0?i:""),v=r.dense?"0.45em":"";return xe.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:me(me(me(me(me({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),y),s),role:"status","aria-live":"polite","aria-label":"Loading"},xe.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},xe.createElement("span",{className:"rli-d-i-b annulus-sectors",style:me({},v&&{borderWidth:v})}),xe.createElement(go,{className:"OP-annulus-dual-sectors-text",text:r?.text,textColor:r?.textColor})))};Ue(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var io=Array.from({length:4},(function(r,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]})),ea=function(r){return r===void 0&&(r=1),.25*r},Bm=function(r){var i,a=vo(r?.style,r?.size),s=a.styles,c=a.fontSize,f=r?.easing,m=mo(r?.speedPlus,"1s").animationPeriod,y=(function(g){var p={},x=io.length;if(g instanceof Array){for(var E=yo(g,x),C=0;C<E.length&&!(C>=4);C++){var b=io[C];try{if(!(_=oe(E[C])).isValid())throw new Error("Invalid Color: ".concat(_.getOriginalInput()));var k=_.setAlpha(ea(_.getAlpha())).toRgbString(),S=E[C];p[b[0]]=k,p[b[1]]=S}catch{S=en,k=(_=oe(en)).setAlpha(ea(_.getAlpha())).toRgbString(),p[b[0]]=k,p[b[1]]=S}}return p}try{var _=oe(g);if(typeof g!="string")throw new Error("Color String expected");if(!_.isValid())throw new Error("Invalid Color: ".concat(_.getOriginalInput()));S=g,k=_.setAlpha(ea(_.getAlpha())).toRgbString();for(var R=0;R<x;R++)p[(b=io[R])[0]]=k,p[b[1]]=S}catch(A){for(A instanceof Error?console.warn("[".concat(A.message,']: Received "').concat(typeof g,'" with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),S=en,k=(_=oe(en)).setAlpha(ea(_.getAlpha())).toRgbString(),R=0;R<io.length;R++)p[(b=io[R])[0]]=k,p[b[1]]=S}return p})((i=r?.color)!==null&&i!==void 0?i:""),v=r.dense?"0.45em":"";return xe.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:me(me(me(me(me({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),y),s),role:"status","aria-live":"polite","aria-label":"Loading"},xe.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},xe.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:me({},v&&{borderWidth:v})}),xe.createElement(go,{className:"OP-annulus-sector-text",text:r?.text,textColor:r?.textColor})))},uu=function(r){var i=Object(r).variant,a=i===void 0?"disc":i;return a==="dotted"?xe.createElement(Dm,me({},r)):a==="spokes"?xe.createElement(Im,me({},r)):a==="disc"?xe.createElement(zm,me({},r)):a==="split-disc"?xe.createElement(Hm,me({},r)):a==="track-disc"?xe.createElement(Bm,me({},r)):null};Ue(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--four-square-phase".concat(i+1,"-color")}));Ue(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--mosaic-phase".concat(i+1,"-color")}));Ue(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--riple-phase".concat(i+1,"-color")}));Ue(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--TD-pulsate-phase".concat(i+1,"-color")}));Ue(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}));Ue(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--TD-bob-phase".concat(i+1,"-color")}));Ue(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--TD-bounce-phase".concat(i+1,"-color")}));Ue(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--shape-phase".concat(i+1,"-color")}));Ue(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--trophySpin-phase".concat(i+1,"-color")}));Ue(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--slab-phase".concat(i+1,"-color")}));Ue(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(r,i){return"--life-line-phase".concat(i+1,"-color")}));function Um(){const[r,i]=L.useState("All Product"),[a,s]=L.useState([]),c=async()=>{const x=await(await fetch("https://dummyjson.com/products?limit=200")).json();s(x.products)};L.useEffect(()=>{c()},[]);const f=a.filter(p=>p.category==="smartphones").slice(0,10),m=a.filter(p=>p.category==="laptops"),y=a.filter(p=>p.category==="tablets"),v=a.filter(p=>p.category==="mobile-accessories").slice(0,10),g=[...f.sort((p,x)=>x.price-p.price).slice(0,3),...m.sort((p,x)=>x.price-p.price).slice(0,3),...y.sort((p,x)=>x.price-p.price).slice(0,1),...v.sort((p,x)=>x.price-p.price).slice(0,3)];return d.jsx(su.Element,{name:"Featured-Products",children:d.jsx("section",{className:"w-full h-full featured-products mt-[72px] mb-[72px]",children:d.jsx("div",{className:"container flex min-w-[100%] h-full gap-6",children:d.jsxs("div",{className:"w-full featured-products-content",children:[d.jsxs("div",{className:"flex items-center justify-between w-full heading-col",children:[d.jsx("h1",{className:"text-2xl font-semibold text-gray900",children:"Featured Products"}),d.jsxs("ul",{className:"flex gap-4 category-links",children:[d.jsx("li",{className:r==="All Product"?"active":"",onClick:()=>i("All Product"),children:d.jsx("a",{href:"#All Product",className:"text-sm font-semibold capitalize text-gray900",children:"All Product"})}),d.jsx("li",{onClick:()=>i("Smart Phone"),className:r==="Smart Phone"?"active":"",children:d.jsx("a",{href:"#Smart Phone",className:"text-sm font-medium capitalize text-gray600",children:"Smart Phones"})}),d.jsx("li",{onClick:()=>i("Laptop"),className:r==="Laptop"?"active":"",children:d.jsx("a",{href:"#Laptop",className:"text-sm font-medium capitalize text-gray600",children:"Laptops"})}),d.jsx("li",{onClick:()=>i("tablets"),className:r==="tablets"?"active":"",children:d.jsx("a",{href:"#Headphone",className:"text-sm font-medium capitalize text-gray600",children:"tablets"})}),d.jsx("li",{onClick:()=>i("mobileAccessories"),className:r==="mobileAccessories"?"active":"",children:d.jsx("a",{href:"#TV",className:"text-sm font-medium capitalize text-gray600",children:"mobile Accessories"})}),d.jsxs("div",{className:"flex items-center gap-2 navigate-all-products",children:[d.jsx("a",{href:"#Browse All Product",className:"text-sm font-semibold text-primary500",children:"Browse All Product"}),d.jsx(ho,{className:"w-5 h-5 cursor-pointer text-primary500"})]})]})]}),a.length===0?d.jsx("div",{className:"col-loading w-full min-h-[400px] flex justify-center items-center",children:d.jsx(uu,{color:"#FA8232",size:"medium",text:"",textColor:""})}):d.jsxs("div",{className:"flex flex-wrap gap-4 mt-6 all-featured-products",children:[r==="All Product"?d.jsx(d.Fragment,{children:g.map((p,x)=>d.jsxs("div",{className:"col-product w-[234px] h-[320px] rounded-[3px] p-3",children:[d.jsxs("div",{className:"all-images w-[202px] h-[172px] relative mb-5",children:[d.jsx("img",{src:p.images[0],alt:"product-img",className:"object-contain w-full h-full"}),d.jsxs("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons",children:[d.jsx("div",{className:"col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Ft,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Nt,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(It,{className:"w-5 h-5 text-black"})})]})]}),d.jsxs("div",{className:"flex flex-col gap-2 information-product",children:[d.jsxs("div",{className:"flex items-center gap-1 all-stars-content",children:[d.jsxs("div",{className:"flex all-stars",children:[d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"})]}),d.jsx("p",{className:"text-xs p-rate text-gray500",children:`(${p.rating})`})]}),d.jsx("p",{className:"text-sm title-product text-gray900",children:p.title}),d.jsx("span",{className:"text-sm font-semibold price-product text-secondary500",children:`₹${p.price}`})]})]},p.id))}):"",r==="Smart Phone"?d.jsx(d.Fragment,{children:f.map((p,x)=>d.jsxs("div",{className:"col-product w-[234px] h-[320px] rounded-[3px] p-3",children:[d.jsxs("div",{className:"all-images w-[202px] h-[172px] relative mb-5",children:[d.jsx("img",{src:p.images[0],alt:"product-img",className:"object-contain w-full h-full"}),d.jsxs("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons",children:[d.jsx("div",{className:"col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Ft,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Nt,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(It,{className:"w-5 h-5 text-black"})})]})]}),d.jsxs("div",{className:"flex flex-col gap-2 information-product",children:[d.jsxs("div",{className:"flex items-center gap-1 all-stars-content",children:[d.jsxs("div",{className:"flex all-stars",children:[d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"})]}),d.jsx("p",{className:"text-xs p-rate text-gray500",children:`(${p.rating})`})]}),d.jsx("p",{className:"text-sm title-product text-gray900",children:p.title}),d.jsx("span",{className:"text-sm font-semibold price-product text-secondary500",children:`₹${p.price}`})]})]},p.id))}):"",r==="Laptop"?d.jsx(d.Fragment,{children:m.map((p,x)=>d.jsxs("div",{className:"col-product w-[234px] h-[320px] rounded-[3px] p-3",children:[d.jsxs("div",{className:"all-images w-[202px] h-[172px] relative mb-5",children:[d.jsx("img",{src:p.images[0],alt:"product-img",className:"object-contain w-full h-full"}),d.jsxs("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons",children:[d.jsx("div",{className:"col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Ft,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Nt,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(It,{className:"w-5 h-5 text-black"})})]})]}),d.jsxs("div",{className:"flex flex-col gap-2 information-product",children:[d.jsxs("div",{className:"flex items-center gap-1 all-stars-content",children:[d.jsxs("div",{className:"flex all-stars",children:[d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"})]}),d.jsx("p",{className:"text-xs p-rate text-gray500",children:`(${p.rating})`})]}),d.jsx("p",{className:"text-sm title-product text-gray900",children:p.title}),d.jsx("span",{className:"text-sm font-semibold price-product text-secondary500",children:`₹${p.price}`})]})]},p.id))}):"",r==="tablets"?d.jsx(d.Fragment,{children:y.map((p,x)=>d.jsxs("div",{className:"col-product w-[234px] h-[320px] rounded-[3px] p-3",children:[d.jsxs("div",{className:"all-images w-[202px] h-[172px] relative mb-5",children:[d.jsx("img",{src:p.images[0],alt:"product-img",className:"object-contain w-full h-full"}),d.jsxs("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons",children:[d.jsx("div",{className:"col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Ft,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Nt,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(It,{className:"w-5 h-5 text-black"})})]})]}),d.jsxs("div",{className:"flex flex-col gap-2 information-product",children:[d.jsxs("div",{className:"flex items-center gap-1 all-stars-content",children:[d.jsxs("div",{className:"flex all-stars",children:[d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"})]}),d.jsx("p",{className:"text-xs p-rate text-gray500",children:`(${p.rating})`})]}),d.jsx("p",{className:"text-sm title-product text-gray900",children:p.title}),d.jsx("span",{className:"text-sm font-semibold price-product text-secondary500",children:`₹${p.price}`})]})]},p.id))}):"",r==="mobileAccessories"?d.jsx(d.Fragment,{children:v.map((p,x)=>d.jsxs("div",{className:"col-product w-[234px] h-[320px] rounded-[3px] p-3",children:[d.jsxs("div",{className:"all-images w-[202px] h-[172px] relative mb-5",children:[d.jsx("img",{src:p.images[0],alt:"product-img",className:"object-contain w-full h-full"}),d.jsxs("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons",children:[d.jsx("div",{className:"col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Ft,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Nt,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(It,{className:"w-5 h-5 text-black"})})]})]}),d.jsxs("div",{className:"flex flex-col gap-2 information-product",children:[d.jsxs("div",{className:"flex items-center gap-1 all-stars-content",children:[d.jsxs("div",{className:"flex all-stars",children:[d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"})]}),d.jsx("p",{className:"text-xs p-rate text-gray500",children:`(${p.rating})`})]}),d.jsx("p",{className:"text-sm title-product text-gray900",children:p.title}),d.jsx("span",{className:"text-sm font-semibold price-product text-secondary500",children:`₹${p.price}`})]})]},p.id))}):""]})]})})})})}function Vm(){const[r,i]=L.useState("All Product"),[a,s]=L.useState([]),c=async()=>{const x=await(await fetch("https://dummyjson.com/products?limit=200")).json();s(x.products)};L.useEffect(()=>{c()},[]);const f=a.filter(p=>p.category==="mens-watches"),m=a.filter(p=>p.category==="mens-shirts"),y=a.filter(p=>p.category==="mens-shoes"),v=a.filter(p=>p.category==="sports-accessories").slice(0,10),g=[...f.sort((p,x)=>x.price-p.price).slice(0,3),...m.sort((p,x)=>x.price-p.price).slice(0,3),...y.sort((p,x)=>x.price-p.price).slice(0,3),...v.sort((p,x)=>x.price-p.price).slice(0,1)];return d.jsx("section",{className:"w-full h-full computer-accessories mt-[72px] mb-[72px]",children:d.jsxs("div",{className:"container min-w-[100%] h-full",children:[d.jsxs("div",{className:"flex items-center justify-between w-full heading-col",children:[d.jsx("h1",{className:"text-2xl font-semibold text-gray900",children:"Best Products"}),d.jsxs("ul",{className:"flex gap-4 category-links",children:[d.jsx("li",{className:r==="All Product"?"active":"",onClick:()=>i("All Product"),children:d.jsx("a",{href:"#All Product",className:"text-sm font-semibold capitalize text-gray900",children:"All Product"})}),d.jsx("li",{onClick:()=>i("mens-watches"),className:r==="mens-watches"?"active":"",children:d.jsx("a",{href:"#Smart Phone",className:"text-sm font-medium capitalize text-gray600",children:"mens-watches"})}),d.jsx("li",{onClick:()=>i("mens-shirts"),className:r==="mens-shirts"?"active":"",children:d.jsx("a",{href:"#Laptop",className:"text-sm font-medium capitalize text-gray600",children:"mens-shirts"})}),d.jsx("li",{onClick:()=>i("mens-shoes"),className:r==="mens-shoes"?"active":"",children:d.jsx("a",{href:"#Headphone",className:"text-sm font-medium capitalize text-gray600",children:"mens-shoes"})}),d.jsx("li",{onClick:()=>i("sports-accessories"),className:r==="sports-accessories"?"active":"",children:d.jsx("a",{href:"#Headphone",className:"text-sm font-medium capitalize text-gray600",children:"sports-accessories"})}),d.jsxs("div",{className:"flex items-center gap-2 navigate-all-products",children:[d.jsx("a",{href:"#Browse All Product",className:"text-sm font-semibold text-primary500",children:"Browse All Product"}),d.jsx(ho,{className:"w-5 h-5 cursor-pointer text-primary500"})]})]})]}),a.length===0?d.jsx("div",{className:"col-loading w-full min-h-[400px] flex justify-center items-center",children:d.jsx(uu,{color:"#FA8232",size:"medium",text:"",textColor:""})}):d.jsxs("div",{className:"flex flex-wrap gap-4 mt-6 all-products-accessories",children:[r==="All Product"?d.jsx(d.Fragment,{children:g.map((p,x)=>d.jsxs("div",{className:"col-product w-[234px] h-[320px] rounded-[3px] p-3",children:[d.jsxs("div",{className:"all-images w-[202px] h-[172px] relative mb-5",children:[d.jsx("img",{src:p.images[0],alt:"product-img",className:"object-contain w-full h-full"}),d.jsxs("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons",children:[d.jsx("div",{className:"col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Ft,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Nt,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(It,{className:"w-5 h-5 text-black"})})]})]}),d.jsxs("div",{className:"flex flex-col gap-2 information-product",children:[d.jsxs("div",{className:"flex items-center gap-1 all-stars-content",children:[d.jsxs("div",{className:"flex all-stars",children:[d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"})]}),d.jsx("p",{className:"text-xs p-rate text-gray500",children:`(${p.rating})`})]}),d.jsx("p",{className:"text-sm title-product text-gray900",children:p.title}),d.jsx("span",{className:"text-sm font-semibold price-product text-secondary500",children:`₹${p.price}`})]})]},p.id))}):"",r==="mens-watches"?d.jsx(d.Fragment,{children:f.map((p,x)=>d.jsxs("div",{className:"col-product w-[234px] h-[320px] rounded-[3px] p-3",children:[d.jsxs("div",{className:"all-images w-[202px] h-[172px] relative mb-5",children:[d.jsx("img",{src:p.images[0],alt:"product-img",className:"object-contain w-full h-full"}),d.jsxs("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons",children:[d.jsx("div",{className:"col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Ft,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Nt,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(It,{className:"w-5 h-5 text-black"})})]})]}),d.jsxs("div",{className:"flex flex-col gap-2 information-product",children:[d.jsxs("div",{className:"flex items-center gap-1 all-stars-content",children:[d.jsxs("div",{className:"flex all-stars",children:[d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"})]}),d.jsx("p",{className:"text-xs p-rate text-gray500",children:`(${p.rating})`})]}),d.jsx("p",{className:"text-sm title-product text-gray900",children:p.title}),d.jsx("span",{className:"text-sm font-semibold price-product text-secondary500",children:`₹${p.price}`})]})]},p.id))}):"",r==="mens-shirts"?d.jsx(d.Fragment,{children:m.map((p,x)=>d.jsxs("div",{className:"col-product w-[234px] h-[320px] rounded-[3px] p-3",children:[d.jsxs("div",{className:"all-images w-[202px] h-[172px] relative mb-5",children:[d.jsx("img",{src:p.images[0],alt:"product-img",className:"object-contain w-full h-full"}),d.jsxs("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons",children:[d.jsx("div",{className:"col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Ft,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Nt,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(It,{className:"w-5 h-5 text-black"})})]})]}),d.jsxs("div",{className:"flex flex-col gap-2 information-product",children:[d.jsxs("div",{className:"flex items-center gap-1 all-stars-content",children:[d.jsxs("div",{className:"flex all-stars",children:[d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"})]}),d.jsx("p",{className:"text-xs p-rate text-gray500",children:`(${p.rating})`})]}),d.jsx("p",{className:"text-sm title-product text-gray900",children:p.title}),d.jsx("span",{className:"text-sm font-semibold price-product text-secondary500",children:`₹${p.price}`})]})]},p.id))}):"",r==="mens-shoes"?d.jsx(d.Fragment,{children:y.map((p,x)=>d.jsxs("div",{className:"col-product w-[234px] h-[320px] rounded-[3px] p-3",children:[d.jsxs("div",{className:"all-images w-[202px] h-[172px] relative mb-5",children:[d.jsx("img",{src:p.images[0],alt:"product-img",className:"object-contain w-full h-full"}),d.jsxs("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons",children:[d.jsx("div",{className:"col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Ft,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Nt,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(It,{className:"w-5 h-5 text-black"})})]})]}),d.jsxs("div",{className:"flex flex-col gap-2 information-product",children:[d.jsxs("div",{className:"flex items-center gap-1 all-stars-content",children:[d.jsxs("div",{className:"flex all-stars",children:[d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"})]}),d.jsx("p",{className:"text-xs p-rate text-gray500",children:`(${p.rating})`})]}),d.jsx("p",{className:"text-sm title-product text-gray900",children:p.title}),d.jsx("span",{className:"text-sm font-semibold price-product text-secondary500",children:`₹${p.price}`})]})]},p.id))}):"",r==="sports-accessories"?d.jsx(d.Fragment,{children:v.map((p,x)=>d.jsxs("div",{className:"col-product w-[234px] h-[320px] rounded-[3px] p-3",children:[d.jsxs("div",{className:"all-images w-[202px] h-[172px] relative mb-5",children:[d.jsx("img",{src:p.images[0],alt:"product-img",className:"object-contain w-full h-full"}),d.jsxs("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 h-c-v-icons",children:[d.jsx("div",{className:"col-heart w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Ft,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-cart  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(Nt,{className:"w-5 h-5 text-black"})}),d.jsx("div",{className:"col-view  w-[48px] h-[48px] p-3 bg-white rounded-full flex justify-center items-center cursor-pointer",children:d.jsx(It,{className:"w-5 h-5 text-black"})})]})]}),d.jsxs("div",{className:"flex flex-col gap-2 information-product",children:[d.jsxs("div",{className:"flex items-center gap-1 all-stars-content",children:[d.jsxs("div",{className:"flex all-stars",children:[d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"}),d.jsx(ce,{className:"w-4 h-4 text-primary500"})]}),d.jsx("p",{className:"text-xs p-rate text-gray500",children:`(${p.rating})`})]}),d.jsx("p",{className:"text-sm title-product text-gray900",children:p.title}),d.jsx("span",{className:"text-sm font-semibold price-product text-secondary500",children:`₹${p.price}`})]})]},p.id))}):""]})]})})}const Wm="/assets/macbook-pro-DL-CnD3m.png";function qm(){return d.jsx("section",{className:"macbook-pro w-full h-full mb-[72px]",children:d.jsx("div",{className:"container min-w-[100%] h-full",children:d.jsx("div",{className:"w-full h-full col-banner",children:d.jsx("img",{src:Wm,alt:"banner-img",className:"object-contain h-full min-w-full"})})})})}const Qm="/assets/Banner-DB9yb9f2.png",Xm="/assets/Banner%20(1)-BkP4tk3A.png";function Km(){return d.jsx("section",{className:"w-full h-full new-apple-banner mt-[72px] mb-[72px]",children:d.jsxs("div",{className:"container min-w-[100%] flex gap-6",children:[d.jsx("div",{className:"col-img-banner w-[50%] h-full",children:d.jsx("img",{src:Qm,alt:"banner-img",className:"cursor-pointer"})}),d.jsx("div",{className:"col-img-banner w-[50%] h-full",children:d.jsx("img",{src:Xm,alt:"banner-img",className:"cursor-pointer"})})]})})}function Zm(){const[r,i]=L.useState([]),a=async()=>{const E=await(await fetch("https://dummyjson.com/products?limit=200")).json();i(E.products)};L.useEffect(()=>{a()},[]);const s=r.filter(x=>x.category=="smartphones").sort((x,E)=>E.price-x.price).slice(0,3),c=r.filter(x=>x.category=="laptops").sort((x,E)=>E.price-x.price).slice(0,3),f=r.filter(x=>x.category=="tablets").sort((x,E)=>E.price-x.price).slice(0,3),m=r.filter(x=>x.category=="mobile-accessories").sort((x,E)=>E.price-x.price).slice(0,3),y=[...s.slice(0,1),...c.slice(0,1),...f.slice(0,1)],v=[...c.slice(1,2),...f.slice(1,2),...s.slice(1,2)],g=[...s.slice(2,3),...m.slice(0,1),...f.slice(2,3)],p=[...c.slice(2,3),...s.slice(2,3),...m.slice(1,2)];return d.jsx("section",{className:"all-products-section w-full h-full mb-[72px]",children:r.length===0?d.jsx("div",{className:"col-loading w-full min-h-[400px] flex justify-center items-center",children:d.jsx(uu,{color:"#FA8232",size:"medium",text:"",textColor:""})}):d.jsxs("div",{className:"container min-w-[100%] h-full flex gap-6",children:[d.jsxs("div",{className:"flash-sale-products",children:[d.jsx("h1",{className:"mb-4 font-sans text-base font-semibold text-gray900",children:"FLASH SALE TODAY"}),d.jsx("div",{className:"flex flex-col gap-4 all-products",children:y.map((x,E)=>d.jsxs("div",{className:"flex items-center justify-center w-full gap-3 cursor-pointer col-product",children:[d.jsx("div",{className:"col-image w-[120px] h-[120px]",children:d.jsx("img",{src:x.images[0],alt:"img-product",className:"object-contain w-full h-full"})}),d.jsxs("div",{className:"flex flex-col gap-2 col-information",children:[d.jsxs("p",{className:"text-sm text-gray900",children:[x.description.slice(0,40),"..."]}),d.jsxs("span",{className:"text-sm font-semibold price-product text-secondary500",children:["₹ ",x.price]})]})]},x.id))})]}),d.jsxs("div",{className:"BEST-SELLERS-products",children:[d.jsx("h1",{className:"mb-4 font-sans text-base font-semibold text-gray900",children:"BEST SELLERS"}),d.jsx("div",{className:"flex flex-col gap-4 all-products",children:v.map((x,E)=>d.jsxs("div",{className:"flex items-center justify-center w-full gap-3 cursor-pointer col-product",children:[d.jsx("div",{className:"col-image w-[120px] h-[120px]",children:d.jsx("img",{src:x.images[0],alt:"img-product",className:"object-contain w-full h-full"})}),d.jsxs("div",{className:"flex flex-col gap-2 col-information",children:[d.jsxs("p",{className:"text-sm text-gray900",children:[x.description.slice(0,40),"..."]}),d.jsxs("span",{className:"text-sm font-semibold price-product text-secondary500",children:["₹ ",x.price]})]})]},x.id))})]}),d.jsxs("div",{className:"TOP-RATED-products",children:[d.jsx("h1",{className:"mb-4 font-sans text-base font-semibold text-gray900",children:"TOP RATED"}),d.jsx("div",{className:"flex flex-col gap-4 all-products",children:g.map((x,E)=>d.jsxs("div",{className:"flex items-center justify-center w-full gap-3 cursor-pointer col-product",children:[d.jsx("div",{className:"col-image w-[120px] h-[120px]",children:d.jsx("img",{src:x.images[0],alt:"img-product",className:"object-contain w-full h-full"})}),d.jsxs("div",{className:"flex flex-col gap-2 col-information",children:[d.jsxs("p",{className:"text-sm text-gray900",children:[x.description.slice(0,40),"..."]}),d.jsxs("span",{className:"text-sm font-semibold price-product text-secondary500",children:["₹ ",x.price]})]})]},x.id))})]}),d.jsxs("div",{className:"NEW-ARRIVAL-products",children:[d.jsx("h1",{className:"mb-4 font-sans text-base font-semibold text-gray900",children:"NEW ARRIVAL"}),d.jsx("div",{className:"flex flex-col gap-4 all-products",children:p.map((x,E)=>d.jsxs("div",{className:"flex items-center justify-center w-full gap-3 cursor-pointer col-product",children:[d.jsx("div",{className:"col-image w-[120px] h-[120px]",children:d.jsx("img",{src:x.images[0],alt:"img-product",className:"object-contain w-full h-full"})}),d.jsxs("div",{className:"flex flex-col gap-2 col-information",children:[d.jsxs("p",{className:"text-sm text-gray900",children:[x.description.slice(0,40),"..."]}),d.jsxs("span",{className:"text-sm font-semibold price-product text-secondary500",children:["₹ ",x.price]})]})]},x.id))})]})]})})}const Ym="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2021C16.9706%2021%2021%2016.9706%2021%2012C21%207.02944%2016.9706%203%2012%203C7.02944%203%203%207.02944%203%2012C3%2016.9706%207.02944%2021%2012%2021Z'%20stroke='%23FA8232'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2015C14.0711%2015%2015.75%2013.3211%2015.75%2011.25C15.75%209.17893%2014.0711%207.5%2012%207.5C9.92893%207.5%208.25%209.17893%208.25%2011.25C8.25%2013.3211%209.92893%2015%2012%2015Z'%20stroke='%23FA8232'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.98047%2018.6933C6.54476%2017.5819%207.40581%2016.6484%208.46816%2015.9963C9.53052%2015.3442%2010.7527%2014.999%2011.9992%2014.999C13.2457%2014.999%2014.4679%2015.3442%2015.5303%2015.9963C16.5926%2016.6484%2017.4537%2017.5819%2018.018%2018.6933'%20stroke='%23FA8232'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",$m="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.5%203.75H4.5C4.08579%203.75%203.75%204.08579%203.75%204.5V19.5C3.75%2019.9142%204.08579%2020.25%204.5%2020.25H19.5C19.9142%2020.25%2020.25%2019.9142%2020.25%2019.5V4.5C20.25%204.08579%2019.9142%203.75%2019.5%203.75Z'%20stroke='%23FA8232'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.5%202.25V5.25'%20stroke='%23FA8232'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.5%202.25V5.25'%20stroke='%23FA8232'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.75%208.25H20.25'%20stroke='%23FA8232'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Gm="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.2565%2016.5933C3.13983%2014.7093%202.74924%2012.4825%203.15804%2010.331C3.56684%208.1794%204.74693%206.25104%206.47677%204.90789C8.2066%203.56474%2010.3672%202.89919%2012.553%203.03617C14.7388%203.17315%2016.7994%204.10325%2018.348%205.65186C19.8966%207.20047%2020.8267%209.26108%2020.9637%2011.4469C21.1007%2013.6326%2020.4351%2015.7932%2019.0919%2017.5231C17.7488%2019.2529%2015.8204%2020.433%2013.6689%2020.8418C11.5173%2021.2506%209.29049%2020.86%207.4065%2019.7433L4.294%2020.6246C4.16648%2020.6619%204.03128%2020.6642%203.90256%2020.6313C3.77384%2020.5983%203.65635%2020.5314%203.5624%2020.4374C3.46845%2020.3435%203.4015%2020.226%203.36858%2020.0973C3.33565%2019.9686%203.33796%2019.8334%203.37525%2019.7058L4.2565%2016.5933Z'%20stroke='%23FA8232'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013.125C12.6213%2013.125%2013.125%2012.6213%2013.125%2012C13.125%2011.3787%2012.6213%2010.875%2012%2010.875C11.3787%2010.875%2010.875%2011.3787%2010.875%2012C10.875%2012.6213%2011.3787%2013.125%2012%2013.125Z'%20fill='%23FA8232'/%3e%3cpath%20d='M7.5%2013.125C8.12132%2013.125%208.625%2012.6213%208.625%2012C8.625%2011.3787%208.12132%2010.875%207.5%2010.875C6.87868%2010.875%206.375%2011.3787%206.375%2012C6.375%2012.6213%206.87868%2013.125%207.5%2013.125Z'%20fill='%23FA8232'/%3e%3cpath%20d='M16.5%2013.125C17.1213%2013.125%2017.625%2012.6213%2017.625%2012C17.625%2011.3787%2017.1213%2010.875%2016.5%2010.875C15.8787%2010.875%2015.375%2011.3787%2015.375%2012C15.375%2012.6213%2015.8787%2013.125%2016.5%2013.125Z'%20fill='%23FA8232'/%3e%3c/svg%3e",Jm="/assets/latest-news-img1-RF5yQZmW.png",e1="/assets/latest-news-img2-BAAkTe0a.png",t1="/assets/latest-news-img3-BmgdrPFU.png";function n1(){const r=[{id:1,img:Jm,icons:[{id:1,user:"Kristin",calender:"19Dec, 2013",chats:"453"}],title:"Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",description:"Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus."},{id:2,img:e1,icons:[{id:1,user:"Robert",calender:"28 Nov, 2015",chats:"738"}],title:"Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",description:"Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. "},{id:3,img:t1,icons:[{id:1,user:"Arlene",calender:"9 May, 2014",chats:"826"}],title:"Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",description:"Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus."}];return d.jsx("section",{className:"w-full h-full latest-news-section pt-[72px] pb-[72px] bg-gray50",children:d.jsxs("div",{className:"container min-w-[100%] h-full",children:[d.jsx("h1",{className:"w-full text-center mb-10 text-[32px] text-gray900 font-semibold font-sans",children:"Latest News"}),d.jsx("div",{className:"flex justify-center w-full h-full gap-6 all-cols-latestnews",children:r.map((i,a)=>d.jsxs("div",{className:"p-8 col-news w-[424px] h-[572px] flex flex-col gap-4",children:[d.jsx("div",{className:"flex items-center justify-center w-full h-full col-img",children:d.jsx("img",{src:i.img,alt:"img-news",className:"object-contain w-full h-full"})}),i.icons.map((s,c)=>d.jsxs("div",{className:"flex items-center gap-4 all-icons",children:[d.jsxs("div",{className:"flex gap-[6px] items-center",children:[d.jsx("img",{src:Ym,alt:"img-icon"}),d.jsx("p",{children:s.user})]}),d.jsxs("div",{className:"flex gap-[6px] items-center",children:[d.jsx("img",{src:$m,alt:"img-icon"}),d.jsx("p",{children:s.calender})]}),d.jsxs("div",{className:"flex gap-[6px] items-center",children:[d.jsx("img",{src:Gm,alt:"img-icon"}),d.jsx("p",{children:s.chats})]})]},s.id)),d.jsx("h2",{className:"font-sans text-lg font-medium text-gray900",children:i.title}),d.jsx("p",{className:"font-sans text-base text-gray500",children:i.description}),d.jsxs("div",{className:"text-white btn-read-more bg-primary500 w-[165px] min-h-[48px] flex justify-center items-center gap-2 cursor-pointer",children:[d.jsx("a",{href:"#Read-more",className:"text-sm font-bold text-white uppercase",children:"Read more"}),d.jsx(ho,{className:"text-white"})]})]},i.id))})]})})}const r1="/assets/google-2015%201-Dz_MJJpf.svg",o1="/assets/Frame-D4n4TlgW.svg",i1="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.33662%2034.281C7.33662%2035.9205%206.54224%2037.0309%204.53049%2037.0309H3.89481V31.8095C4.1208%2031.7967%204.33185%2031.7967%204.53049%2031.7967C6.43537%2031.7966%207.33662%2032.6952%207.33662%2034.281ZM5.27161%2039.3043C8.87121%2039.3043%2011.1471%2037.4533%2011.1471%2034.2287C11.1469%2030.6856%208.71216%2029.417%204.74226%2029.417C3.20695%2029.417%201.35425%2029.5224%200.03125%2029.681V42.3187H3.89499V39.3043H5.27161ZM57.0397%2034.281C57.0397%2035.9205%2056.2464%2037.0309%2054.2341%2037.0309H53.6005V31.8095C53.8246%2031.7967%2054.036%2031.7967%2054.2341%2031.7967C56.1391%2031.7966%2057.0397%2032.6952%2057.0397%2034.281ZM54.977%2039.3043C58.5737%2039.3043%2060.8509%2037.4533%2060.8509%2034.2287C60.8509%2030.6856%2058.4164%2029.417%2054.4462%2029.417C52.9112%2029.417%2051.0575%2029.5224%2049.7343%2029.681V42.3187H53.6V39.3043H54.977ZM65.8787%2032.9062C65.8787%2032.2191%2066.5677%2031.9014%2067.6782%2031.9014C68.8961%2031.9014%2070.2203%2032.166%2071.1194%2032.5375L70.8022%2029.7871C69.7959%2029.5756%2068.8961%2029.417%2067.2557%2029.417C64.1324%2029.417%2062.0157%2030.6468%2062.0157%2033.2245C62.0157%2037.6648%2068.051%2036.7667%2068.051%2038.8287C68.051%2039.6211%2067.4678%2040.0438%2066.0379%2040.0438C64.7695%2040.0438%2062.8095%2039.6211%2061.6452%2039.0398L62.0699%2041.9488C63.2333%2042.3717%2064.8213%2042.5825%2066.0921%2042.5825C69.32%2042.5825%2071.9672%2041.5247%2071.9672%2038.3518C71.9672%2034.1233%2065.8787%2034.9157%2065.8787%2032.9062ZM46.8242%2029.681H42.9604V42.3187H46.8242V29.681ZM31.1556%2029.681H27.2915V42.3187H31.1556V29.681ZM37.878%2039.7799V29.681H34.0139V42.3187H41.0017L41.5834%2039.7799H37.878ZM24.4334%2029.681H20.5693V34.7041H16.5463V29.681H12.6815V42.3187H16.5462V37.3478H20.5691V42.3187H24.4332L24.4334%2029.681Z'%20fill='white'/%3e%3c/svg%3e",a1="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.44462%2041.2448H3.66706V33.283H0.455078V30.8931H9.82768V33.283H6.44462V41.2448ZM11.1418%2033.6247C11.5609%2031.1882%2013.7333%2030.8311%2015.8131%2030.8311C19.3826%2030.8311%2020.6395%2031.7156%2020.6395%2035.4558C20.6395%2039.289%2020.5465%2041.3221%2015.8908%2041.3221C14.0441%2041.3221%2011.8403%2041.1827%2011.2194%2039.0566C11.0177%2038.3581%2011.0021%2037.629%2011.0021%2036.8995V36.1386C11.0021%2035.3161%2011.0021%2034.4473%2011.1418%2033.6247ZM13.842%2036.7127C13.842%2038.1717%2013.873%2038.9475%2015.5957%2038.9475C17.4891%2038.9475%2017.7839%2038.4818%2017.7839%2036.7127C17.7839%2036.2163%2017.7995%2035.7042%2017.7995%2035.2074C17.7995%2033.8261%2017.5821%2033.2056%2016.0925%2033.2056C13.9201%2033.2056%2013.8887%2033.423%2013.8424%2036.0919V36.7127H13.842ZM28.7544%2034.1212C28.7544%2033.0656%2028.3816%2032.9262%2027.3888%2032.9262H27.1094C26.3799%2032.9262%2025.6041%2032.9572%2025.6041%2033.8728C25.6041%2034.5093%2025.7905%2034.804%2026.4576%2034.8507C28.8627%2035.0524%2031.703%2034.5713%2031.703%2037.908C31.703%2038.7929%2031.703%2039.9101%2030.9735%2040.5309C30.1197%2041.2448%2028.9404%2041.3068%2027.8542%2041.3068H27.1714C24.3158%2041.3068%2022.8258%2041.1827%2022.8258%2037.8923H25.464C25.464%2038.6681%2025.6504%2039.1339%2026.5192%2039.1339H27.7141C28.4126%2039.1339%2028.9711%2039.0406%2028.9711%2038.1093C28.9711%2037.1938%2028.4279%2037.1938%2027.6517%2037.1475C24.6568%2036.9458%2022.8411%2037.2248%2022.8411%2033.7798C22.8411%2031.9793%2023.5549%2031.0328%2025.4016%2030.8931C26.0067%2030.8464%2026.6118%2030.8154%2027.2173%2030.8154C29.6229%2030.8154%2031.4076%2030.8621%2031.4076%2033.7954C31.4076%2033.9041%2031.3919%2034.0128%2031.3919%2034.1215H28.7544V34.1212ZM43.0266%2041.2448H40.2483V37.1785H36.6478V41.2448H33.8699V30.8931H36.6478V34.804H40.2483V30.8931H43.0266V41.2448ZM48.4506%2041.2448H45.673V30.8931H48.4506V41.2448ZM51.115%2030.8931H56.7486C58.6263%2030.8931%2059.8369%2031.4052%2059.8369%2033.5314C59.8369%2034.7263%2059.7282%2035.6885%2058.2233%2035.9369V36.0295C59.6203%2036.1539%2060.0076%2036.8987%2060.0076%2038.2644C60.0076%2040.5922%2059.2322%2041.2444%2056.7953%2041.2444H51.115V30.8931ZM55.6623%2035.0367C56.4232%2035.0057%2057.09%2035.0991%2057.09%2034.1522C57.09%2033.4074%2056.8886%2033.1743%2056.1438%2033.1743H53.8933V35.0367H55.6623ZM55.7404%2038.9632C56.6092%2038.9632%2057.2454%2038.9475%2057.2454%2037.939C57.2454%2036.9768%2056.7953%2036.9458%2055.9264%2036.9458H53.8933V38.9632H55.7404ZM68.5715%2041.2448H71.3961L68.245%2030.8931H64.0399L60.9355%2041.2448H63.8225L64.4141%2039.1653H67.9713L68.5715%2041.2448ZM64.9845%2037.1632L66.1817%2032.9572L67.3949%2037.1632H64.9845Z'%20fill='white'/%3e%3c/svg%3e",l1="data:image/svg+xml,%3csvg%20width='72'%20height='72'%20viewBox='0%200%2072%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1026_7393)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M62.9654%2038.6921C69.0785%2035.7011%2072.4501%2032.2963%2071.9519%2029.4765C70.9036%2023.5502%2052.9415%2022.5957%2034.4047%2025.8866C25.9216%2027.3929%2017.8085%2029.6539%2012.316%2031.8961C12.6077%2031.8776%2012.8117%2031.8911%2012.8117%2031.8911C15.1857%2031.9567%2015.0407%2033.4327%2015.0407%2033.4327L15.0444%2034.3344H13.1517V33.7224C13.1517%2033.2881%2012.6228%2033.259%2012.6228%2033.259C12.2181%2033.259%2012.1234%2033.5339%2012.1234%2033.5339C11.8993%2033.9534%2012.2828%2034.3156%2012.2828%2034.3156C12.4782%2034.5331%2013.4622%2034.9887%2013.4622%2034.9887C13.781%2035.112%2014.2947%2035.4303%2014.2947%2035.4303C15.2574%2036.0092%2015.1702%2037.1091%2015.1702%2037.1091V37.8334C15.0546%2039.6286%2012.5794%2039.5774%2012.5794%2039.5774C9.98781%2039.5774%2010.0443%2037.8773%2010.0443%2037.8773V36.9887H12.0608V37.6007C12.0608%2038.1218%2012.5642%2038.1452%2012.5642%2038.1452C13.1144%2038.1665%2013.1611%2037.6343%2013.1611%2037.6343C13.2361%2037.1169%2012.6658%2036.7912%2012.6658%2036.7912C12.1619%2036.5298%2011.6601%2036.2645%2011.1603%2035.9952C10.697%2035.6913%2010.5089%2035.416%2010.5089%2035.416C10.1759%2034.9965%2010.198%2034.3447%2010.198%2034.3447V33.7801C10.198%2032.9985%2010.4081%2032.7744%2010.4081%2032.7744C10.4169%2032.7575%2010.426%2032.7409%2010.4356%2032.7244C3.66453%2035.8535%20-0.480533%2039.4803%200.0446667%2042.4623C1.11022%2048.5115%2018.0497%2049.305%2037.9733%2046.2366C47.1471%2044.8241%2055.1308%2042.2235%2061.1726%2039.5303C61.1296%2039.5323%2061.0837%2039.5323%2061.0399%2039.5323C61.0399%2039.5323%2058.5979%2039.7298%2058.5401%2037.7613V33.9538C58.5401%2033.9538%2058.2361%2031.8551%2060.9719%2031.8551C60.9719%2031.8551%2062.7532%2031.7973%2063.2235%2032.8539C63.2235%2032.8539%2063.4553%2033.1365%2063.3939%2034.3049H61.4967V33.7064C61.4967%2033.7064%2061.4934%2033.223%2061.0014%2033.223C61.0014%2033.223%2060.4869%2033.2447%2060.4869%2033.6499V37.5872C60.4869%2037.5872%2060.4651%2038.1157%2061.0444%2038.1157C61.0444%2038.1157%2061.5196%2038.105%2061.5196%2037.5491V36.4106H61.0018V35.3504H63.4389V37.5872C63.4389%2037.5872%2063.4324%2038.0575%2063.2374%2038.3324C63.2382%2038.3328%2063.0407%2038.6356%2062.9654%2038.6921ZM56.0186%2039.3304H53.7838L51.7907%2034.9334H51.7068L51.8194%2039.33H49.9439V32.1402H52.2475L54.1726%2036.5016H54.2549L54.1197%2032.1394H56.0186V39.3304ZM44.2671%2037.5446C44.2671%2038.1538%2044.8456%2038.1231%2044.8456%2038.1231C45.3962%2038.1231%2045.3679%2037.5295%2045.3679%2037.5295V32.1091H47.3778V37.595C47.3778%2039.5717%2044.8751%2039.5418%2044.8751%2039.5418C41.9938%2039.5418%2042.2048%2037.5008%2042.2048%2037.5008V32.1087H44.2606L44.2671%2037.5446ZM37.9508%2034.3344V33.7224C37.9508%2033.2877%2037.4227%2033.259%2037.4227%2033.259C37.0172%2033.259%2036.9225%2033.5339%2036.9225%2033.5339C36.6984%2033.9534%2037.0827%2034.3156%2037.0827%2034.3156C37.2781%2034.5323%2038.2621%2034.9887%2038.2621%2034.9887C38.5805%2035.1116%2039.0942%2035.4303%2039.0942%2035.4303C40.0569%2036.0092%2039.9705%2037.1091%2039.9705%2037.1091V37.8334C39.8545%2039.6286%2037.3797%2039.5778%2037.3797%2039.5778C34.7877%2039.5778%2034.8443%2037.8773%2034.8443%2037.8773V36.9887H36.8611V37.6007C36.8611%2038.1218%2037.3646%2038.1452%2037.3646%2038.1452C37.9152%2038.1665%2037.9606%2037.6343%2037.9606%2037.6343C38.0368%2037.1169%2037.4662%2036.7912%2037.4662%2036.7912C36.9623%2036.5297%2036.4604%2036.2644%2035.9606%2035.9952C35.4969%2035.6913%2035.3092%2035.416%2035.3092%2035.416C34.9766%2034.996%2034.9975%2034.3443%2034.9975%2034.3443V33.7797C34.9975%2032.9981%2035.2076%2032.774%2035.2076%2032.774C35.7435%2031.7678%2037.6108%2031.8907%2037.6108%2031.8907C39.9848%2031.9563%2039.8398%2033.4327%2039.8398%2033.4327L39.8439%2034.3344H37.9508ZM28.0191%2032.1382L28.625%2036.0735H28.7729L29.4067%2032.1386H32.537L32.7394%2039.3291H30.8573L30.8127%2033.9129H30.6828L29.7025%2039.3279H27.734L26.7414%2033.9112H26.5943L26.5717%2039.3295H24.7004L24.8585%2032.1382H28.0191ZM20.6757%2039.3214L19.9383%2033.747H19.7732L19.0354%2039.3214H17.0211L18.2656%2032.132H21.4459L22.6913%2039.3214H20.6757Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1026_7393'%3e%3crect%20width='72'%20height='72'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function s1(){return d.jsx("section",{className:"email-address-section w-full h-full bg-secondary700 pt-[72px] pb-[72px]",children:d.jsxs("div",{className:"container min-w-[100%] h-full flex flex-col justify-center items-center gap-3",children:[d.jsx("h1",{className:"text-2xl font-semibold text-white",children:"Subscribe to our newsletter"}),d.jsx("p",{className:"mb-2 text-xs text-whiteColor max-w-[500px] text-center leading-[1.6]",children:"Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum."}),d.jsxs("form",{action:"",className:"flex items-center justify-between w-[40%] h-[72px] bg-whiteColor p-3 rounded-[3px] gap-4 mb-3 form-subscribe",children:[d.jsx("input",{type:"text",placeholder:"Email address",className:"w-[65%] h-full border-none outline-none text-base text-gray500 placeholder:pl-2 focus:bg-white"}),d.jsxs("button",{type:"submit",className:"flex items-center w-[160px] h-[48px] bg-primary500 pl-6 pr-6 rounded-sm justify-center gap-2 cursor-pointer",children:[d.jsx("p",{className:"text-sm text-whiteColor font-semibold",children:"Subscribe"}),d.jsx(ho,{className:"text-white"})]})]}),d.jsxs("div",{className:"col-websites flex gap-12 flex-wrap justify-center",children:[d.jsx("img",{src:r1,alt:"google"}),d.jsx("img",{src:o1,alt:"amazon"}),d.jsx("img",{src:i1,alt:"philips"}),d.jsx("img",{src:a1,alt:"toshiba"}),d.jsx("img",{src:l1,alt:"samsung"})]})]})})}const u1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAAAwCAYAAABexZu4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoNSURBVHgB7Z3Reds2EMcPlJ2mT1UnKD1BZHeAyhMknSDyBHbf25pO+25nAisT2JnAygKxMkHZCeo+pbFjovenIJsCjyRAypbS4vd9bCwIgADwcLgDjqyiJaCTQf+G6IWKomeZolhpPSBSff6qX8iVkqJUaTXVRB9us2zydTJNKRDoiKKWQHA/96J9TXpIWg2pDUpPuezrINCBLngL8Z3wajqgBU3bmTEL81EQ5oAvXkJ889vO4QMI7wJKUbL5y/sjCgQccRLij8kg7qneGS//A3ocUtbKu0ErB1yImjJ8/v37l70ounxEAQYxfvNTMnhBgUADtUIM8yHL9Jge0Hyooc+7HWdoAwUCNVSaE8b+TWgNCHZyoA5RiD8l3/Oerz6jNSKKstHGz9M3FAhYlIQ4d+JgA6/GhKjjip297eDsBWxKNjEL8AWtnwCDfk+ptVodAuvBghAbJyqmdUWpwaejnYQCgQJ35oQxI/6gTugrzcfImc4m/CGdL/045fuHaNBT0QveqnvOPxtTe642s2xLJdMrWhI6j/UgXPMVKMWllJo6lo+tpCsu69U+rsOKNfGrx7RhaOrAlZpr6tsWoV0xdRifQvuK+PZtAS6b3v09/+P61c4p/zOiVmg+nNB7LLQTl9w8YUa9SB22FWbeNTn66vB9Qh0wA7NPsz5XmU8pXyc8YK8b6rEn/5jL7JFfe4b8z4WVvMf1jGvKoN3oA/bT6/bxx3wdFW+8Q3tichufiUvdXJ+2kiDA2y5t4qIY37j4u1xua/4hNyeghamtAGt6vZnpbVcBBpx3jDIoSy3gLbd9aHdqCQ8Kbg6c16Yj9JivEwyipA1WiWkP+pBQvQCDEV/og9OeuxkfCI7L+Iz4uuAyvgdTqPeUloCxiaMhtQAa8cnh+4M2SzvKoCzqIH/61yo6oBaYG3lCfs5rzNelMTtWTkGAY/IjaRJk/v6YZuPjQ8zXGZf1vSfDFmVKbOA/vZ7ap5K2b4C1qLSk3ySDIW/qPteEmaniPHEWcjmVotRQx/XRTp8Nm33yQJH+gTzhARsRiQc4mITYg4aNB+GGsL608iAdN2q7i43ZFSPAVTtI53y9o1l/0Af2P0qCDkH+wH04F+qGgEtCJY3Pcyq34ZjrgA0+IXf4UE2f+5g6NqqdQ6dTmANFDZyHaEbRoZYH4f4HeZZvsDDbZW8idelrI7OD963PKiDYVgA358AWzIKw2Plh/yVWvkeziTmf5LukfO1KgsD5Ud6ekOjrVrHPFf0AMPmSivHBlqe9Oi3Yq4X8dVpywmV2q750sImjIXmjy0KoehdNApzn5Tw3Sl0UbVrUBceQPLmJImc7zGjh2ErGYIwkzWoEQmrTvnGoHh0jOCPhq90qTYb+0UyDFkH77bGTzAxoyIOa8YHgpdZXsRlrH2BWJNSSqKcanQILnT75dToupkADe0W58X5vXqaAcQz9lmnt1XbJXKm1x82yOLGS58vpKhgKaROHpVg6rr8zx8ykHAl5fqIajHBLzvlL8uewrc+xQZF+xvaqewmt3hY/whxx0cClargMl31b3NXgBec17zw4R61l5LZjYG6SNEDnDsUh6O+stFXZxJJwvKVmxlS2X9PC30OhzNTRTh3zdWylQbP2G3wHjOkzq12tfI4NFsrYp8CtzhZufM/SqD7khx8FTYdDEk5zri9S6pljVkmAnQ4BKrTxqhD7QQ2YfiY1WYZC2jtyAHXDmRPahs+TmqKwcyFLxQkQ08ysqV0BbCLy3KZ5ag8amwbUFpV7uEVS8sPVNo2FtFVp0y5I/e14yprznZCWkjtS3pga4AlwQuXV8MA4uc40PtlR+mF7N6Db3mlc/NAiQq2LEP9NXxBVhy0sCH9Sd6Rx9Jnk0ljG5Mae8FunPs6ztxD/h/iLAivHmDo/WskxkbtvBCH2Wlb179v20pNSW2a21P3HDkfJDaRC2rf0ZSHep1Vt9y0T43fYuxwHrkfZ3kL8z2e9uJGtnbxjGSsK6rP/1lVK7fmOviCMxpLu1TfUHckk8ZkcUhtS8iMRypy6xKywg9/s3S4WiIbFz/ZuhQ84hi5+1sr98CJH6dQxp9THmL48UiFtm7ojTY6Y3JHypuSBmaT24ZJTkFCkM/JyDJQV45Dv87aJRuMyJUeuvFtRT6Y+uGQzca/2jerzLG/Uxjjm1WX8JtvykLa9GlcvePtCH4pH3BOhmFNsSs0evJdyBBVmxZAaJlR0q71/rP8RQT4FNnWW2PZtLZw3L1PgY7IzIl/tqDKftktmj8tR91BIS2k1SKuei7BJhyRFBTCh8iQfOG51SRN60iFIKiHPCRA9JX9zgA84Tu3Yh02td500MuKPOa8de9GL3L3RObeZ1yHEWEjbr7O5TFSX/b3XEw3LxGiq1EquDWc0/ZME7bxQ7zxKzaYpbDOuyPOGWlJhVtQS5cKk9YT8iO3Yh3l8MNu5W9y5N3n45R1su7Lw4tVUUvyxqSsmH1ib++wr18RBXEiCzGnQXolQVatA/iUixXscS4JcE7aZCuGSJ1TWxpggZxXjgzREscVC3WPqgFESzqd2edAEHr70iVm4/7HuLzVp/5KWbM8ORGqiEEwued7QTFhi4WnDxhsKeVKyIsZqQhhduAvZ1B6PJ0GwSNauKc36gcMHmBnoh9TXqnoxEY5JxmV8wFZFSKgditkYrmrs9qHw1UIoZh4U/0RnJzcqgsPmtecI4bt5tdO344Odys7jj7V/8BDwNCVyMLgaZo+snV6QLBhFflQdgreXCG5+TGWHCmlN43lUpSlxDGwcNUmhuYzP3pLHB/1sfAdKfmIHAdQtn3fL44Oj6PL6Ve6YOYGnP1CmTfSbYdz2JSpmqcK2VOpRDBN0d1W2sI2xGzEZfe/ZQkB/Rd34Hku5j1JKaTY+Y1oiZkI0rvQb8z/aamNDzNcpC/KhwrKTZW83ECVmtDPCNTeQpxf9AM2rO76cxd5f9sUMzpYJ3kafBxVZkQ9OykkHb/tBMO05ME9uQBlIjwsB5IMp8EY5PjZkNDLKJDQzS+KKrBOa7fqMH2p8TFvQt2FlnuKHtrbxY7KMx/XLdd7tdc6FADckXRPTwRkTVI4+xHT/boiUOiKMT2rqXouJreyE66Pty07hlQ8Kniq53KJAoEApiu1Wa0QUrdXSOUPjObxdCgQsSkIMh4ltTq/I+sdAz94wlFIgYCHGE+MNPS1favIg5HZwMj2nQEBA1X25Do7eQzhygf8WqikD/ucvKooQDtdpW8wfzXa5+unJr+/HFAjU0CjEYPaWIHXR8ZWs7mg9hYMZbOCAC05CPOfhzYvZ+42D+RDwwUuIAbRyxEeTvNHd5i0vFcyEF6eGy3x5duD/gbcQzzHvNB7O3qjZ8nBE6YnO1LsgvIEutBbiIncCraLB7LVYOPZU8X0OnT/kqJWaqoz+vNXZ9CleVhcEN7AE/gXe69AvAd+mXwAAAABJRU5ErkJggg==",c1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAABFCAYAAADq6Gz0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqbSURBVHgB7ZxdbBXVFsfXwRu5D+2N960t8Y2Wm9ybG2i53gs39CPRmFghGg2tJfgRJeJHQmkKklRBqkb5SKuJH5Ditxg0Gg2lTUxMWg4JSmyLifrQ1gcx2tMXkOQcX3g57v+asw7T6czpAc+Zmd2uX3IoZ2bOnj2z/3vN2muvPQkyrL5l/T7KZjspQTeRosSdLF02/77z7Tdf7Uys/s+6fiPcTlIU68juh4B/U8urWMrlZSpexWJuWkaKYjEqYMVqVMCK1aiAFatRAStWowJWrEYFrFiNClixGhWwYjUqYMVqVMCK1aiAFatRAStWowJWrEYFXIDKykr+lKqsmupqUkpLWQSMxuo7+JK1DYb6D7zxKg199gkNvG7+fv4praqrLeJ3FbSx9Q7ffd2dO2hTbt/a+jX8Uf48ZREwGqqlqZFFICKGKLDNBvY/00Pj4+ep8dbbqX3rA9S1aw93SAjUjdc6V1ZUmmtv9S1z33PP05Fjb/L/G+rr+VOIIMtfyqfCYuCGqhU3P0sl5t6772aLJaIdPX2GLl68SMtvvJF69uym777/gdKZDMURdLiHHthKXbv35LddvHSJUqmU+V/CXMclWlVbS++9NUDr1/2Xtm97mK8P17p/bw9f9/p1/6PBoeE55T76yMNc9oqaKi4fx60w389+fW7Ocej0axvq6aH7t/JxOCfuF5dhztXz1C4+L44Zn5igf//rn2b7I6YOST7m/LmzvH0mNcuGpOO+tvy+xUjZfWA0mljiyelpOjrwJp14/x3T2E/H0sWoq1tJYxPn520fMSKdnJrm/3d37aBtjz3Jn329z/O1zBiB7+t9wRzzI28PAuWcPDXMn0P9r/geM2XOA8uPcra0b+ZtECPuV+td9/D2dDpNHW1tfE/FHWkwf/G9uamJvzcb4zF4aogWM6EM4rwiRgO0NG7gbbAqceJvFXMfz907d7APnPzyC7aiEAmuA76u873eWOSVVEpGchYTnUI6eZ2x2COjp/PHfHjiYyPceiPkDB8HEeNpBwMh/jr++nXGxURoUQg/EVdWVNB2IwIIJGjwEzZocLgIwmFjJWH1ThqXAG5PxnxmZmb5MS0ft7tRLio9Hcvtj4+MJp2OBJGz+LNsfRe7eEGoYTQ/EeNRiO+95jHcd/BA5G4FrFk6k57zZECdHF8+6VhF48fCx4RA8Leuri5/rHegVyrQUVqam/LfIVBsA4PDw2Zfo7mXv/N3CLr3madpbHyCFjuhx4GDRAxamjawNY7aP4ZFramq5rqc+OBd9tlhiVnc5pF9uP9lHrANvPEaX0smV3/sN2Mu/l0hIaMjbLrzDu6wxcJPAHMenBN1Wrumno5/9DHvQ52wb+S042KMJs/w+UeTi3fwJiRW37IuSyVmv+n9aKBCoLEhXvzFIxtCcIeHsP248fM+PPERRQWHrIybw8L0AZ0MboV0QPfvvNuCyi/muGup01KjLGE0PG4XCvy7Q2w/XbhAZ786R7ffdistX748v///JhyFjgALMzU9TWFz5cqVguE+7MMxfr8rtvxS12mpEelUciF3wn0M/OO4ht2UaIk8F6IYEQPEQTfFJFKhxIdYJPMUI2LENzEVK3kWcQm7KdESm2y0QiJ2ixfHwHeGW4ERuboVS5vIBnF++A3sfrrwM7393vt58bonGSDeLe1tHLoaXwJBe2U+scsH9lri4yaM5ideN5jNK9cEghJvYpnQLjNf+e9VVfwphHeqVVkaxFLA8HlheSHkhaITAEF9DewvTf5CMUMGbOJKAIhXROydsWOx56ZUywGywHjGzXSeqPzs6txANXUdnRT3qqJirnuV8cweyjEZn1nFuBMrAXvFKxEG/N8t4r5DL3FGGFY5lMvywoXBygzv9DbyJCQvOCx69/Zw6iSy4q71eutqV9IxE63xgkQk5DKjPDnmiLn/R3OrRmwhNgIOEi+QbSLi9q0PltVSQLyINeMcqBcaGemKmNYeeP01Tja3zWUZGz9Pg0NOcrtcC2Y3tz32BNlMLAQ8Z5LikP9iUCSwIJl8ZihV9sccktiBdBiAbDCIFkuIOkzoDhlpXC9T5472zfkICfJxvcuJRDDszxvrjQQldwfAdpQp+byTU1Pm+FZeTRGU04sysVoD5/cr08vMbIqvQa5l1apaToIPiqO764xyUT7OgzZA3ZCqKdeJCFD3zk7zVEyFbsEjF7B3ksIvVIYbjnTGMPwzGTjCYk16EojQOG5xzgn5mcZFQ0oM/HBuuRDyihHmQ91RHkSHKfFtjz/Bv/GWIUuInDogn3e+gKVMHA9x4TdIRcWTAYlPxVDoXqJ+sM6copk8w0LnOhtrjWuQ5U1yLxpy+096Om4YRCrghcQLER09dizUlQXV1U64DhZLQGM1uJbBp1KzLBxYXuyDWI/n0j5xHZhcQc4vGhtCw7Hi9kAMmEGExYIgpAy5F1JGkGXEdpQJSy0rQaTMja2tRaWfwrrCp5bojVyzgIR+SWXF/mbTOfoPHuC1dmiLsYkJ/j06LDpMS6OTaB9F6mtkAi4kXtw0DCgGI+jRfkAgsEgCOtbY4xP52caTQ1cXTg6eGubGxSoNSbTGQk6xeM4qjlT+eq+WMTyvDD+w6FTAmjw3hWY//ZKh0AZ+oL6/mk7a3LiBampqTLnOOWWySOonHWZtwxq+prAHtyASAYvF8ooXjYzFigiLRRXOkbxjd4fCY3TMRAAAVlsIYiX9Htvw2aXB/a7FO3MIq1cMsuiU3/RTc9VKowOkZoJ9YDwNsNRI6oOQ4GRAjrXb7UGH817fSDJJ3WYf3CX467gPQSusy03oAkboBjfbK15skxF/lKCx5BG50QxiYG3QkLyMPeefSsOLDwsLLW6OvLAEDTs1/SP/H+9wkMFNfnImZ60QDqR6p8N4y/BD7g/8Y/eACfFquDZB4HzFDrDEv4ZP7dRnzZyZUdwjWGlskxe5RPXuiVAF7CfeKPzchTjc9wrXDwsjWxobuTHxmBS/UXw9/OV4sXEvYIHwCMfIHcdgXRqQztDd1cmi255bLCo+M0Jbsj4Olg2Wu9Brp8ZylhN+trMANcPH4/tec39L4XbJQlvH70/Qrq4d846RemPwiDaMyvCENpXsFS9yG3DDMRqP2/JviTVDfBAoRAcRoqFkHR+QyQDQb+LGsFxyjICXneAlJlvaNvMxuG64UCI0lNG1+ylzzikWInI6jgy8VbB+eNUVjkdKKcqEb3u0hGMGjvgYlwaTG/0HX6TR0fnW1XEt0tye7jFA2ISyqNMt3j5zQ/DesSj93GtBFlGmF5hmFX84yBIVKgdTxZlMOu9rdhix7zIWeyGLWmzdrpegRasCxgPytqCoLHDZXQi3eNEwsEg2zWKJ/7sQC11TUDkSc5XICwS55b62onIviq3b9RJ0TY/yE8mZBJEJnqgoi4AxWMBFYUQ/4nLubZtnDwMJn2EmrjcXqpNxQVw7Ot6ZIbHrciZSFUNZXAhFCQt9Q7tiNSpgxWpUwIrVqIAVq1EBK1ajAlasRgWsWI0KWLEaFbBiNSpgxWpUwIrVqIAVq1EBK1ajAlasZhll6TIpip1cXkaJbDTroRXlz5Kld2+Y/fWX0aqam/9uvv6DEvRXUpS4A68hkT3w7Tdf7/kD/xwFzy7REtQAAAAASUVORK5CYII=",d1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAABFCAYAAADq6Gz0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoiSURBVHgB7Z1rbBRVFMfPokE/tEbFD+02RkxsayIx0NZHMdKSSHwUiA9iK4hohFTEyNqUR4JaWzFBIVQTH5CC8qyFaDQtxRhNWiDhEWghET608EESZfulSNz183r/Z/Yuw3YWWrp3mLucXzJ0d+bunbuz/3vm3DvnXEKkmPro9CZKJCIUojtJEIJOgi6pf7edOn7kvdDURypblXAjJAjWkWiGgP8RyytYyqUJIl7BYu6cQIJgMSJgwWpEwILViIAFqxEBC1YjAhasRgQsWI0IWLAaEbBgNSJgwWpEwILViIAFqxEBC1YjAhasxgoBl5eV0Zya58hv8vPzectWXeHCQhKyS6AFPLNqBnX//CNt+eZLemvJm+QXEFubOmf3Tz9Q29dfchtKS4pH8bm8jB2tMbKc5iaPVZRN400YP7dSQKlXgn1r8WXRXrgwRH7R/MEa6us7SUuWvsPvS4uLaeP6dVS3cBHFYvFUOQg9Fotdfp+Xr0RaQ13d+0fU2fTx2tRr3FHAif6TlIn0ut37gdexm5FbCoru/YgCRrp4waYtW2nw7FkyDW7zbyxaSA0rV6f2DV+8SNFoVL0K0fDwRRb0jm/baHrlY3xn6D1wiIXV/OEattTTKx8fIeJ69X1Qd1G4gOtHuSL1/vDRY1eUg+WvKC+jN15byOVwzj9On3HqUOdas2oFnxdl+vr76eEpD6n9i1UbDnKZk8cO8/4L0SG2+PNfqU0dy0UC50LgR04X7wUlHi+rZoKSkgc8LWOPEunAoNOBGhuWs3XG1tSyVgn3fW5jU8snqsy5lOX2AvV07tvP2/rWLzzLDKrzwNqjngV1L/M+iBHXpub5l3g/LPD82loaUJ1auyPl6i/eV1dV8ftq5YJ17eumXCZwLsT85A/mpmHFavKLO/KuHLQ1vrecffH8vDza3bFXibufheT2dUuLH6Bs0pO0mOgUeuBXoix2T++BVJl21ZbmD96nzerOhHIQMQS7uW2ruoa1TrvUZ67mpuQCgbPA7sESrAws3IAProMGPzhcBM0GZSVh9TrVHSAWj1NcbfDHcZvWm9vdMEV+WsfCgFHT03uQ/WpcO0f8CRZzrosXBNKFgHBPqEFU3cLXWTh+AmsWi8fY33S3CVYYviRbReXHwseEQPC3pKQkVdYtrGyCjjKzuir1HgLFPtC1f786NkNdt//4PQTdoqzzib5+ynV8dSEw0Jnz3LM8AIG1wI8PQcBq6IEG/DvsSy8LYAHhh3Yqv67PoHWBRW2MRHj6DOcMFxSoWYRPuF1gQ+vnPGDDACtcWMC3bcDHQ8SfS5+xcIPvilmNUiX8hpWrRtMk7shwI9q++Yo7SezfODWsciw/zoNO33PAcTF6Dx6iFQ0R9Td3B2+a0NRHKxPkA/BtMTjL9GAAPz4s2sDAIFuTiuRUUyZQXovdFPwgQ/m+mc7Bd4t4fMSUVqYpMK/6xzoddq023Wz4ImCvabFs4IeIhWBj3Ac2JV4AC1guT7Ruaoz6wF5zutkCt15YXz9nKITgYdQC1y82F7+AhwAiXsGogCvKzdzeMcXW5fP0mhBMjAkYU1+mwgc7u3P78agweowJOC/PzIQ+iMqsg5DEmICLJHhb8AErU4pMWnfBLowJ2OQMQakr9sA0hepOUngD7iZ4bIx4B8xzZyutKRcxNg+cKQ4gGyyoq+UwQtNUVz1JrZ99yq8xbdfesYdMg4Ev4izcj9LxpBGhnPr8iJaDuBHroGOUb1aMWWCO6jKU9oJgFsTpmmbmjMvRX4hG8wN8L4gX8b5Lli7jcFKwgvc705KY4UEmSEnxtfP0ch2jKUWT75s8qmTI6+HhKVM48stUVBo6ybq1LWzh/jx/nkXVlYwJ1iATA6JCmtGa1Stp3osv8H6d+gSBvfvO2xx8UxQupHeXLaWnZz3F9eEzXuCcuHsteXsZR+vBFUOGBoVC/Bfu07wXn2dLDdcC11enJWEf0ouQioQON3HixFRb8H3QRrQF8/NIWdLtQCwxOgTubKgf+93fM8gYFXA8HqO5s2vIFBBVWAkDP2y2L/gzSmgQwXc7dtHp02f4NYTl7jCtn62j+1Unrago44Dzeybdzd8XbUEe2+TJ9ynLGeE2IiUI+5+ofJyFrvPW0kEkno5yg7jwF+WcWOQhzoFDiOk9kyZxeeTr4Rg+07FzGwt6+OIw3a/O7W4LyreoDofjz8yaRbfdNpEOHznKgv3qi40cFsodVYkbQv71t9+tELHRWQhYD9PZsxCGiYCeObOdlCGIo0f5mvgec2ePTJmHZWtqXpvKYUM5J2z08kwJrB6C8508umW8D5bSC9QF9wsuA+KKO3Zt5xQh/VAIccHt3zu+8Ka2rSkXoz4Zqoq4ZZwH7UE96W0ByDDBhvBVuCwoV/PCPI6DxmdRvt7HZQzGg1EBw2Jh8GGabLsREAusO9wHx5ePc2d09l/ZWXBcz7g4wfmHWADup5BI9NQhn04WRzTjuhCoC+KCMJH4CfFDzMhWvlq2x0w14EQ7dT6dfo3PlE+b5tkW/bQUlnZ+7cvcCZDrh05oy7oVxjMy2vfs4cxaU1NBsEjZjgd2D5aQpu4GGb+jyTWD8HSgNVKUxgq+l06ngpXEbX1OTU3GmRBc3/Tr4DUT5NUWtBVujqbn4CFr1p0wLmBthU2srIMfTKfzZBPtPmxKqxsdES4LUoo0zmAqLyUWHcAEf7VQ+ZW6jLs8Nq9Ohw7TsXM7dxDtaoDB5FRZ/lUe4CBbGncNd1v0ADo65L0ojG4D2qpdEYA56GjUv4VkxoMvOXGYs8XgpDTL0z4QWLatr9t9SJ9rhjhxDBbabYWRp7Zb+aX6loxoObRLCxjlMWOBJMsFrzgp7137RkbTaZdFl0d6VTgcVp3mWT6enuOWqktZaiyugrahLes3fs6DTmyoE5tXYJV2M1CusSHCaft4DWsP6+8WdVDxLakTaztglJwtVwLzpCZCKqtnPMl/vbKhITqIxO1GQHC9yAJWggMQr3sZKcC+qLKeugzq2ZThQQwGUXiQweuoJdeeSC0vkLTEGFRWJ4WHWQ5ch93KtcA5kHu4RYk4U1vSwfFYLEILlA+MTbd3Q4ZFV4KGb0mdAJalLXlxxwMGOnrEfyOBf8wjeDXo8kq2xOwIxKSt2VjWNdP1gUx3mUz1ZUo2Hc35xvq5G42vafWwWnWvLuKUcvctDRess/sX5esNpn4sPATwyk6GVUE6edAuMtpzrTaNpc3jqe963KrRnC+I+L60lLaesMYIksGE/sDZcyMuHsTevmdvauoKEWh4qhSk1WYglKutmsmr+KgycVlJ0hi+uhCCkG3kvxgQrEYELFiNCFiwGhGwYDUiYMFqRMCC1YiABasRAQtWIwIWrEYELFiNCFiwGhGwYDUiYMFqRMCC1UygBF0iQbCTSxMolLAj+UkQ0knQ9luG/v6rtyB8713q7YMUottJEIIOvIZQ4tNTx4+u/h/B9eYeyNNR+wAAAABJRU5ErkJggg==";function f1(){return d.jsx("footer",{className:"w-full h-full bg-gray900 pt-[72px] pb-[72px]",children:d.jsxs("div",{className:"container flex justify-between min-w-[100%] h-full flex-wrap gap-10",children:[d.jsxs("div",{className:"col-one",children:[d.jsx("img",{src:u1,alt:"logo",className:"cursor-pointer mb-7"}),d.jsxs("div",{className:"customer-support flex flex-col gap-1 mb-5",children:[d.jsx("h2",{className:"text-sm  font-medium text-gray500 tracking-[0.5px]",children:"Customer Supports:"}),d.jsx("p",{className:"text-[18px] text-white font-medium",children:"(629) 555-0129"})]}),d.jsx("p",{className:"p-location text-base font-sans tracking-[0.5px] text-gray300 max-w-[250px] mb-5",children:"4517 Washington Ave. Manchester, Kentucky 39495"}),d.jsx("a",{href:"mailto:info@kinbo.com",className:"text-base font-sans text-white",children:"info@kinbo.com"})]}),d.jsxs("div",{className:"col-two flex gap-20 flex-wrap",children:[d.jsxs("ul",{className:"TopCategory-links",children:[d.jsx("h2",{className:"text-base text-white font-sans uppercase font-medium mb-6",children:"Top Category"}),d.jsxs("div",{className:"all-links flex flex-col gap-3",children:[d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"Computer & Laptop"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"SmartPhone"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"Headphone"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"Accessories"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"Camera & Photo"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"TV & Homes"})}),d.jsxs("div",{className:"go-to-products flex gap-2 items-center justify-center h-[32px]",children:[d.jsx("a",{href:"#",className:"text-sm font-sans font-medium text-warning500",children:"Browse All Product"}),d.jsx(ho,{className:"text-warning500 cursor-pointer"})]})]})]}),d.jsxs("ul",{className:"Quicklinks-links",children:[d.jsx("h2",{className:"text-base text-white font-sans uppercase font-medium mb-6",children:"Quick links"}),d.jsxs("div",{className:"all-links flex flex-col gap-3",children:[d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"Shop Product"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"Shoping Cart"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"Wishlist"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"Compare"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"Track Order"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"Customer Help"})}),d.jsx("li",{children:d.jsx("a",{href:"#",className:"text-sm text-gray400 font-sans font-medium hover:text-white transition-colors duration-500",children:"About Us"})})]})]})]}),d.jsxs("div",{className:"col-three flex gap-6 flex-wrap",children:[d.jsxs("div",{className:"Download-APP-Col",children:[d.jsx("h2",{className:"text-base text-white font-sans uppercase font-medium mb-6",children:"Download APP"}),d.jsxs("div",{className:"images-download flex flex-col gap-3",children:[d.jsx("img",{src:c1,alt:"google-play",className:"cursor-pointer"}),d.jsx("img",{src:d1,alt:"apple-store",className:"cursor-pointer"})]})]}),d.jsxs("div",{className:"Popular-Tag",children:[d.jsx("h2",{className:"text-base text-white font-sans uppercase font-medium mb-6",children:"Popular Tag"}),d.jsxs("div",{className:"all-tags flex w-[350px] flex-wrap gap-2",children:[d.jsx("div",{className:"col-tag w-fit h-8 pt-[6px] pb-[6px] pl-3 pr-3",children:"Game"}),d.jsx("div",{className:"col-tag",children:"iPhone"}),d.jsx("div",{className:"col-tag",children:"TV"}),d.jsx("div",{className:"col-tag",children:"Asus Laptops"}),d.jsx("div",{className:"col-tag",children:"Macbook"}),d.jsx("div",{className:"col-tag",children:"SSD"}),d.jsx("div",{className:"col-tag",children:"Graphics Card"}),d.jsx("div",{className:"col-tag",children:"Power Bank"}),d.jsx("div",{className:"col-tag",children:"Smart TV"}),d.jsx("div",{className:"col-tag",children:"Speaker"}),d.jsx("div",{className:"col-tag",children:"Tablet"}),d.jsx("div",{className:"col-tag",children:"Microwave"}),d.jsx("div",{className:"col-tag",children:"Samsung"})]})]})]})]})})}function p1(){return d.jsxs(d.Fragment,{children:[d.jsx(dm,{}),d.jsx(mm,{}),d.jsx(wm,{}),d.jsx(Um,{}),d.jsx(Km,{}),d.jsx(Vm,{}),d.jsx(qm,{}),d.jsx(Zm,{}),d.jsx(n1,{}),d.jsx(s1,{}),d.jsx(f1,{})]})}function h1(){return d.jsx(d.Fragment,{children:d.jsx(p1,{})})}function Ke(r){return`Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var m1=typeof Symbol=="function"&&Symbol.observable||"@@observable",Jd=m1,Us=()=>Math.random().toString(36).substring(7).split("").join("."),v1={INIT:`@@redux/INIT${Us()}`,REPLACE:`@@redux/REPLACE${Us()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Us()}`},pa=v1;function cu(r){if(typeof r!="object"||r===null)return!1;let i=r;for(;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return Object.getPrototypeOf(r)===i||Object.getPrototypeOf(r)===null}function Nf(r,i,a){if(typeof r!="function")throw new Error(Ke(2));if(typeof i=="function"&&typeof a=="function"||typeof a=="function"&&typeof arguments[3]=="function")throw new Error(Ke(0));if(typeof i=="function"&&typeof a>"u"&&(a=i,i=void 0),typeof a<"u"){if(typeof a!="function")throw new Error(Ke(1));return a(Nf)(r,i)}let s=r,c=i,f=new Map,m=f,y=0,v=!1;function g(){m===f&&(m=new Map,f.forEach((S,_)=>{m.set(_,S)}))}function p(){if(v)throw new Error(Ke(3));return c}function x(S){if(typeof S!="function")throw new Error(Ke(4));if(v)throw new Error(Ke(5));let _=!0;g();const R=y++;return m.set(R,S),function(){if(_){if(v)throw new Error(Ke(6));_=!1,g(),m.delete(R),f=null}}}function E(S){if(!cu(S))throw new Error(Ke(7));if(typeof S.type>"u")throw new Error(Ke(8));if(typeof S.type!="string")throw new Error(Ke(17));if(v)throw new Error(Ke(9));try{v=!0,c=s(c,S)}finally{v=!1}return(f=m).forEach(R=>{R()}),S}function C(S){if(typeof S!="function")throw new Error(Ke(10));s=S,E({type:pa.REPLACE})}function b(){const S=x;return{subscribe(_){if(typeof _!="object"||_===null)throw new Error(Ke(11));function R(){const D=_;D.next&&D.next(p())}return R(),{unsubscribe:S(R)}},[Jd](){return this}}}return E({type:pa.INIT}),{dispatch:E,subscribe:x,getState:p,replaceReducer:C,[Jd]:b}}function g1(r){Object.keys(r).forEach(i=>{const a=r[i];if(typeof a(void 0,{type:pa.INIT})>"u")throw new Error(Ke(12));if(typeof a(void 0,{type:pa.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ke(13))})}function y1(r){const i=Object.keys(r),a={};for(let f=0;f<i.length;f++){const m=i[f];typeof r[m]=="function"&&(a[m]=r[m])}const s=Object.keys(a);let c;try{g1(a)}catch(f){c=f}return function(m={},y){if(c)throw c;let v=!1;const g={};for(let p=0;p<s.length;p++){const x=s[p],E=a[x],C=m[x],b=E(C,y);if(typeof b>"u")throw y&&y.type,new Error(Ke(14));g[x]=b,v=v||b!==C}return v=v||s.length!==Object.keys(m).length,v?g:m}}function ha(...r){return r.length===0?i=>i:r.length===1?r[0]:r.reduce((i,a)=>(...s)=>i(a(...s)))}function x1(...r){return i=>(a,s)=>{const c=i(a,s);let f=()=>{throw new Error(Ke(15))};const m={getState:c.getState,dispatch:(v,...g)=>f(v,...g)},y=r.map(v=>v(m));return f=ha(...y)(c.dispatch),{...c,dispatch:f}}}function w1(r){return cu(r)&&"type"in r&&typeof r.type=="string"}var _f=Symbol.for("immer-nothing"),ef=Symbol.for("immer-draftable"),tt=Symbol.for("immer-state");function _t(r,...i){throw new Error(`[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`)}var pt=Object,vr=pt.getPrototypeOf,ma="constructor",ja="prototype",Ks="configurable",va="enumerable",ia="writable",uo="value",rn=r=>!!r&&!!r[tt];function Tt(r){return r?Of(r)||Na(r)||!!r[ef]||!!r[ma]?.[ef]||_a(r)||Oa(r):!1}var b1=pt[ja][ma].toString(),tf=new WeakMap;function Of(r){if(!r||!du(r))return!1;const i=vr(r);if(i===null||i===pt[ja])return!0;const a=pt.hasOwnProperty.call(i,ma)&&i[ma];if(a===Object)return!0;if(!mr(a))return!1;let s=tf.get(a);return s===void 0&&(s=Function.toString.call(a),tf.set(a,s)),s===b1}function Ea(r,i,a=!0){xo(r)===0?(a?Reflect.ownKeys(r):pt.keys(r)).forEach(c=>{i(c,r[c],r)}):r.forEach((s,c)=>i(c,s,r))}function xo(r){const i=r[tt];return i?i.type_:Na(r)?1:_a(r)?2:Oa(r)?3:0}var nf=(r,i,a=xo(r))=>a===2?r.has(i):pt[ja].hasOwnProperty.call(r,i),Zs=(r,i,a=xo(r))=>a===2?r.get(i):r[i],ga=(r,i,a,s=xo(r))=>{s===2?r.set(i,a):s===3?r.add(a):r[i]=a};function k1(r,i){return r===i?r!==0||1/r===1/i:r!==r&&i!==i}var Na=Array.isArray,_a=r=>r instanceof Map,Oa=r=>r instanceof Set,du=r=>typeof r=="object",mr=r=>typeof r=="function",Vs=r=>typeof r=="boolean";function C1(r){const i=+r;return Number.isInteger(i)&&String(i)===r}var Jt=r=>r.copy_||r.base_,fu=r=>r.modified_?r.copy_:r.base_;function Ys(r,i){if(_a(r))return new Map(r);if(Oa(r))return new Set(r);if(Na(r))return Array[ja].slice.call(r);const a=Of(r);if(i===!0||i==="class_only"&&!a){const s=pt.getOwnPropertyDescriptors(r);delete s[tt];let c=Reflect.ownKeys(s);for(let f=0;f<c.length;f++){const m=c[f],y=s[m];y[ia]===!1&&(y[ia]=!0,y[Ks]=!0),(y.get||y.set)&&(s[m]={[Ks]:!0,[ia]:!0,[va]:y[va],[uo]:r[m]})}return pt.create(vr(r),s)}else{const s=vr(r);if(s!==null&&a)return{...r};const c=pt.create(s);return pt.assign(c,r)}}function pu(r,i=!1){return Ta(r)||rn(r)||!Tt(r)||(xo(r)>1&&pt.defineProperties(r,{set:ta,add:ta,clear:ta,delete:ta}),pt.freeze(r),i&&Ea(r,(a,s)=>{pu(s,!0)},!1)),r}function S1(){_t(2)}var ta={[uo]:S1};function Ta(r){return r===null||!du(r)?!0:pt.isFrozen(r)}var ya="MapSet",$s="Patches",rf="ArrayMethods",Tf={};function Bn(r){const i=Tf[r];return i||_t(0,r),i}var of=r=>!!Tf[r],co,Af=()=>co,P1=(r,i)=>({drafts_:[],parent_:r,immer_:i,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:of(ya)?Bn(ya):void 0,arrayMethodsPlugin_:of(rf)?Bn(rf):void 0});function af(r,i){i&&(r.patchPlugin_=Bn($s),r.patches_=[],r.inversePatches_=[],r.patchListener_=i)}function Gs(r){Js(r),r.drafts_.forEach(j1),r.drafts_=null}function Js(r){r===co&&(co=r.parent_)}var lf=r=>co=P1(co,r);function j1(r){const i=r[tt];i.type_===0||i.type_===1?i.revoke_():i.revoked_=!0}function sf(r,i){i.unfinalizedDrafts_=i.drafts_.length;const a=i.drafts_[0];if(r!==void 0&&r!==a){a[tt].modified_&&(Gs(i),_t(4)),Tt(r)&&(r=uf(i,r));const{patchPlugin_:c}=i;c&&c.generateReplacementPatches_(a[tt].base_,r,i)}else r=uf(i,a);return E1(i,r,!0),Gs(i),i.patches_&&i.patchListener_(i.patches_,i.inversePatches_),r!==_f?r:void 0}function uf(r,i){if(Ta(i))return i;const a=i[tt];if(!a)return xa(i,r.handledSet_,r);if(!Aa(a,r))return i;if(!a.modified_)return a.base_;if(!a.finalized_){const{callbacks_:s}=a;if(s)for(;s.length>0;)s.pop()(r);Lf(a,r)}return a.copy_}function E1(r,i,a=!1){!r.parent_&&r.immer_.autoFreeze_&&r.canAutoFreeze_&&pu(i,a)}function Rf(r){r.finalized_=!0,r.scope_.unfinalizedDrafts_--}var Aa=(r,i)=>r.scope_===i,N1=[];function Mf(r,i,a,s){const c=Jt(r),f=r.type_;if(s!==void 0&&Zs(c,s,f)===i){ga(c,s,a,f);return}if(!r.draftLocations_){const y=r.draftLocations_=new Map;Ea(c,(v,g)=>{if(rn(g)){const p=y.get(g)||[];p.push(v),y.set(g,p)}})}const m=r.draftLocations_.get(i)??N1;for(const y of m)ga(c,y,a,f)}function _1(r,i,a){r.callbacks_.push(function(c){const f=i;if(!f||!Aa(f,c))return;c.mapSetPlugin_?.fixSetContents(f);const m=fu(f);Mf(r,f.draft_??f,m,a),Lf(f,c)})}function Lf(r,i){if(r.modified_&&!r.finalized_&&(r.type_===3||r.type_===1&&r.allIndicesReassigned_||(r.assigned_?.size??0)>0)){const{patchPlugin_:s}=i;if(s){const c=s.getPath(r);c&&s.generatePatches_(r,c,i)}Rf(r)}}function O1(r,i,a){const{scope_:s}=r;if(rn(a)){const c=a[tt];Aa(c,s)&&c.callbacks_.push(function(){aa(r);const m=fu(c);Mf(r,a,m,i)})}else Tt(a)&&r.callbacks_.push(function(){const f=Jt(r);r.type_===3?f.has(a)&&xa(a,s.handledSet_,s):Zs(f,i,r.type_)===a&&s.drafts_.length>1&&(r.assigned_.get(i)??!1)===!0&&r.copy_&&xa(Zs(r.copy_,i,r.type_),s.handledSet_,s)})}function xa(r,i,a){return!a.immer_.autoFreeze_&&a.unfinalizedDrafts_<1||rn(r)||i.has(r)||!Tt(r)||Ta(r)||(i.add(r),Ea(r,(s,c)=>{if(rn(c)){const f=c[tt];if(Aa(f,a)){const m=fu(f);ga(r,s,m,r.type_),Rf(f)}}else Tt(c)&&xa(c,i,a)})),r}function T1(r,i){const a=Na(r),s={type_:a?1:0,scope_:i?i.scope_:Af(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:i,base_:r,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let c=s,f=wa;a&&(c=[s],f=fo);const{revoke:m,proxy:y}=Proxy.revocable(c,f);return s.draft_=y,s.revoke_=m,[y,s]}var wa={get(r,i){if(i===tt)return r;let a=r.scope_.arrayMethodsPlugin_;const s=r.type_===1&&typeof i=="string";if(s&&a?.isArrayOperationMethod(i))return a.createMethodInterceptor(r,i);const c=Jt(r);if(!nf(c,i,r.type_))return A1(r,c,i);const f=c[i];if(r.finalized_||!Tt(f)||s&&r.operationMethod&&a?.isMutatingArrayMethod(r.operationMethod)&&C1(i))return f;if(f===Ws(r.base_,i)){aa(r);const m=r.type_===1?+i:i,y=tu(r.scope_,f,r,m);return r.copy_[m]=y}return f},has(r,i){return i in Jt(r)},ownKeys(r){return Reflect.ownKeys(Jt(r))},set(r,i,a){const s=zf(Jt(r),i);if(s?.set)return s.set.call(r.draft_,a),!0;if(!r.modified_){const c=Ws(Jt(r),i),f=c?.[tt];if(f&&f.base_===a)return r.copy_[i]=a,r.assigned_.set(i,!1),!0;if(k1(a,c)&&(a!==void 0||nf(r.base_,i,r.type_)))return!0;aa(r),eu(r)}return r.copy_[i]===a&&(a!==void 0||i in r.copy_)||Number.isNaN(a)&&Number.isNaN(r.copy_[i])||(r.copy_[i]=a,r.assigned_.set(i,!0),O1(r,i,a)),!0},deleteProperty(r,i){return aa(r),Ws(r.base_,i)!==void 0||i in r.base_?(r.assigned_.set(i,!1),eu(r)):r.assigned_.delete(i),r.copy_&&delete r.copy_[i],!0},getOwnPropertyDescriptor(r,i){const a=Jt(r),s=Reflect.getOwnPropertyDescriptor(a,i);return s&&{[ia]:!0,[Ks]:r.type_!==1||i!=="length",[va]:s[va],[uo]:a[i]}},defineProperty(){_t(11)},getPrototypeOf(r){return vr(r.base_)},setPrototypeOf(){_t(12)}},fo={};for(let r in wa){let i=wa[r];fo[r]=function(){const a=arguments;return a[0]=a[0][0],i.apply(this,a)}}fo.deleteProperty=function(r,i){return fo.set.call(this,r,i,void 0)};fo.set=function(r,i,a){return wa.set.call(this,r[0],i,a,r[0])};function Ws(r,i){const a=r[tt];return(a?Jt(a):r)[i]}function A1(r,i,a){const s=zf(i,a);return s?uo in s?s[uo]:s.get?.call(r.draft_):void 0}function zf(r,i){if(!(i in r))return;let a=vr(r);for(;a;){const s=Object.getOwnPropertyDescriptor(a,i);if(s)return s;a=vr(a)}}function eu(r){r.modified_||(r.modified_=!0,r.parent_&&eu(r.parent_))}function aa(r){r.copy_||(r.assigned_=new Map,r.copy_=Ys(r.base_,r.scope_.immer_.useStrictShallowCopy_))}var R1=class{constructor(r){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(i,a,s)=>{if(mr(i)&&!mr(a)){const f=a;a=i;const m=this;return function(v=f,...g){return m.produce(v,p=>a.call(this,p,...g))}}mr(a)||_t(6),s!==void 0&&!mr(s)&&_t(7);let c;if(Tt(i)){const f=lf(this),m=tu(f,i,void 0);let y=!0;try{c=a(m),y=!1}finally{y?Gs(f):Js(f)}return af(f,s),sf(c,f)}else if(!i||!du(i)){if(c=a(i),c===void 0&&(c=i),c===_f&&(c=void 0),this.autoFreeze_&&pu(c,!0),s){const f=[],m=[];Bn($s).generateReplacementPatches_(i,c,{patches_:f,inversePatches_:m}),s(f,m)}return c}else _t(1,i)},this.produceWithPatches=(i,a)=>{if(mr(i))return(m,...y)=>this.produceWithPatches(m,v=>i(v,...y));let s,c;return[this.produce(i,a,(m,y)=>{s=m,c=y}),s,c]},Vs(r?.autoFreeze)&&this.setAutoFreeze(r.autoFreeze),Vs(r?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(r.useStrictShallowCopy),Vs(r?.useStrictIteration)&&this.setUseStrictIteration(r.useStrictIteration)}createDraft(r){Tt(r)||_t(8),rn(r)&&(r=M1(r));const i=lf(this),a=tu(i,r,void 0);return a[tt].isManual_=!0,Js(i),a}finishDraft(r,i){const a=r&&r[tt];(!a||!a.isManual_)&&_t(9);const{scope_:s}=a;return af(s,i),sf(void 0,s)}setAutoFreeze(r){this.autoFreeze_=r}setUseStrictShallowCopy(r){this.useStrictShallowCopy_=r}setUseStrictIteration(r){this.useStrictIteration_=r}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(r,i){let a;for(a=i.length-1;a>=0;a--){const c=i[a];if(c.path.length===0&&c.op==="replace"){r=c.value;break}}a>-1&&(i=i.slice(a+1));const s=Bn($s).applyPatches_;return rn(r)?s(r,i):this.produce(r,c=>s(c,i))}};function tu(r,i,a,s){const[c,f]=_a(i)?Bn(ya).proxyMap_(i,a):Oa(i)?Bn(ya).proxySet_(i,a):T1(i,a);return(a?.scope_??Af()).drafts_.push(c),f.callbacks_=a?.callbacks_??[],f.key_=s,a&&s!==void 0?_1(a,f,s):f.callbacks_.push(function(v){v.mapSetPlugin_?.fixSetContents(f);const{patchPlugin_:g}=v;f.modified_&&g&&g.generatePatches_(f,[],v)}),c}function M1(r){return rn(r)||_t(10,r),Df(r)}function Df(r){if(!Tt(r)||Ta(r))return r;const i=r[tt];let a,s=!0;if(i){if(!i.modified_)return i.base_;i.finalized_=!0,a=Ys(r,i.scope_.immer_.useStrictShallowCopy_),s=i.scope_.immer_.shouldUseStrictIteration()}else a=Ys(r,!0);return Ea(a,(c,f)=>{ga(a,c,Df(f))},s),i&&(i.finalized_=!1),a}var L1=new R1,If=L1.produce;function Ff(r){return({dispatch:a,getState:s})=>c=>f=>typeof f=="function"?f(a,s,r):c(f)}var z1=Ff(),D1=Ff,I1=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ha:ha.apply(null,arguments)};function cf(r,i){function a(...s){if(i){let c=i(...s);if(!c)throw new Error(tn(0));return{type:r,payload:c.payload,..."meta"in c&&{meta:c.meta},..."error"in c&&{error:c.error}}}return{type:r,payload:s[0]}}return a.toString=()=>`${r}`,a.type=r,a.match=s=>w1(s)&&s.type===r,a}var Hf=class so extends Array{constructor(...i){super(...i),Object.setPrototypeOf(this,so.prototype)}static get[Symbol.species](){return so}concat(...i){return super.concat.apply(this,i)}prepend(...i){return i.length===1&&Array.isArray(i[0])?new so(...i[0].concat(this)):new so(...i.concat(this))}};function df(r){return Tt(r)?If(r,()=>{}):r}function na(r,i,a){return r.has(i)?r.get(i):r.set(i,a(i)).get(i)}function F1(r){return typeof r=="boolean"}var H1=()=>function(i){const{thunk:a=!0,immutableCheck:s=!0,serializableCheck:c=!0,actionCreatorCheck:f=!0}=i??{};let m=new Hf;return a&&(F1(a)?m.push(z1):m.push(D1(a.extraArgument))),m},B1="RTK_autoBatch",ff=r=>i=>{setTimeout(i,r)},U1=(r={type:"raf"})=>i=>(...a)=>{const s=i(...a);let c=!0,f=!1,m=!1;const y=new Set,v=r.type==="tick"?queueMicrotask:r.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:ff(10):r.type==="callback"?r.queueNotification:ff(r.timeout),g=()=>{m=!1,f&&(f=!1,y.forEach(p=>p()))};return Object.assign({},s,{subscribe(p){const x=()=>c&&p(),E=s.subscribe(x);return y.add(p),()=>{E(),y.delete(p)}},dispatch(p){try{return c=!p?.meta?.[B1],f=!c,f&&(m||(m=!0,v(g))),s.dispatch(p)}finally{c=!0}}})},V1=r=>function(a){const{autoBatch:s=!0}=a??{};let c=new Hf(r);return s&&c.push(U1(typeof s=="object"?s:void 0)),c};function W1(r){const i=H1(),{reducer:a=void 0,middleware:s,devTools:c=!0,preloadedState:f=void 0,enhancers:m=void 0}=r||{};let y;if(typeof a=="function")y=a;else if(cu(a))y=y1(a);else throw new Error(tn(1));let v;typeof s=="function"?v=s(i):v=i();let g=ha;c&&(g=I1({trace:!1,...typeof c=="object"&&c}));const p=x1(...v),x=V1(p);let E=typeof m=="function"?m(x):x();const C=g(...E);return Nf(y,f,C)}function Bf(r){const i={},a=[];let s;const c={addCase(f,m){const y=typeof f=="string"?f:f.type;if(!y)throw new Error(tn(28));if(y in i)throw new Error(tn(29));return i[y]=m,c},addAsyncThunk(f,m){return m.pending&&(i[f.pending.type]=m.pending),m.rejected&&(i[f.rejected.type]=m.rejected),m.fulfilled&&(i[f.fulfilled.type]=m.fulfilled),m.settled&&a.push({matcher:f.settled,reducer:m.settled}),c},addMatcher(f,m){return a.push({matcher:f,reducer:m}),c},addDefaultCase(f){return s=f,c}};return r(c),[i,a,s]}function q1(r){return typeof r=="function"}function Q1(r,i){let[a,s,c]=Bf(i),f;if(q1(r))f=()=>df(r());else{const y=df(r);f=()=>y}function m(y=f(),v){let g=[a[v.type],...s.filter(({matcher:p})=>p(v)).map(({reducer:p})=>p)];return g.filter(p=>!!p).length===0&&(g=[c]),g.reduce((p,x)=>{if(x)if(rn(p)){const C=x(p,v);return C===void 0?p:C}else{if(Tt(p))return If(p,E=>x(E,v));{const E=x(p,v);if(E===void 0){if(p===null)return p;throw Error("A case reducer on a non-draftable value must not return undefined")}return E}}return p},y)}return m.getInitialState=f,m}var X1=Symbol.for("rtk-slice-createasyncthunk");function K1(r,i){return`${r}/${i}`}function Z1({creators:r}={}){const i=r?.asyncThunk?.[X1];return function(s){const{name:c,reducerPath:f=c}=s;if(!c)throw new Error(tn(11));const m=(typeof s.reducers=="function"?s.reducers(G1()):s.reducers)||{},y=Object.keys(m),v={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},g={addCase(A,D){const H=typeof A=="string"?A:A.type;if(!H)throw new Error(tn(12));if(H in v.sliceCaseReducersByType)throw new Error(tn(13));return v.sliceCaseReducersByType[H]=D,g},addMatcher(A,D){return v.sliceMatchers.push({matcher:A,reducer:D}),g},exposeAction(A,D){return v.actionCreators[A]=D,g},exposeCaseReducer(A,D){return v.sliceCaseReducersByName[A]=D,g}};y.forEach(A=>{const D=m[A],H={reducerName:A,type:K1(c,A),createNotation:typeof s.reducers=="function"};ev(D)?nv(H,D,g,i):J1(H,D,g)});function p(){const[A={},D=[],H=void 0]=typeof s.extraReducers=="function"?Bf(s.extraReducers):[s.extraReducers],B={...A,...v.sliceCaseReducersByType};return Q1(s.initialState,F=>{for(let K in B)F.addCase(K,B[K]);for(let K of v.sliceMatchers)F.addMatcher(K.matcher,K.reducer);for(let K of D)F.addMatcher(K.matcher,K.reducer);H&&F.addDefaultCase(H)})}const x=A=>A,E=new Map,C=new WeakMap;let b;function k(A,D){return b||(b=p()),b(A,D)}function S(){return b||(b=p()),b.getInitialState()}function _(A,D=!1){function H(F){let K=F[A];return typeof K>"u"&&D&&(K=na(C,H,S)),K}function B(F=x){const K=na(E,D,()=>new WeakMap);return na(K,F,()=>{const Z={};for(const[Y,Q]of Object.entries(s.selectors??{}))Z[Y]=Y1(Q,F,()=>na(C,F,S),D);return Z})}return{reducerPath:A,getSelectors:B,get selectors(){return B(H)},selectSlice:H}}const R={name:c,reducer:k,actions:v.actionCreators,caseReducers:v.sliceCaseReducersByName,getInitialState:S,..._(f),injectInto(A,{reducerPath:D,...H}={}){const B=D??f;return A.inject({reducerPath:B,reducer:k},H),{...R,..._(B,!0)}}};return R}}function Y1(r,i,a,s){function c(f,...m){let y=i(f);return typeof y>"u"&&s&&(y=a()),r(y,...m)}return c.unwrapped=r,c}var $1=Z1();function G1(){function r(i,a){return{_reducerDefinitionType:"asyncThunk",payloadCreator:i,...a}}return r.withTypes=()=>r,{reducer(i){return Object.assign({[i.name](...a){return i(...a)}}[i.name],{_reducerDefinitionType:"reducer"})},preparedReducer(i,a){return{_reducerDefinitionType:"reducerWithPrepare",prepare:i,reducer:a}},asyncThunk:r}}function J1({type:r,reducerName:i,createNotation:a},s,c){let f,m;if("reducer"in s){if(a&&!tv(s))throw new Error(tn(17));f=s.reducer,m=s.prepare}else f=s;c.addCase(r,f).exposeCaseReducer(i,f).exposeAction(i,m?cf(r,m):cf(r))}function ev(r){return r._reducerDefinitionType==="asyncThunk"}function tv(r){return r._reducerDefinitionType==="reducerWithPrepare"}function nv({type:r,reducerName:i},a,s,c){if(!c)throw new Error(tn(18));const{payloadCreator:f,fulfilled:m,pending:y,rejected:v,settled:g,options:p}=a,x=c(r,f,p);s.exposeAction(i,x),m&&s.addCase(x.fulfilled,m),y&&s.addCase(x.pending,y),v&&s.addCase(x.rejected,v),g&&s.addMatcher(x.settled,g),s.exposeCaseReducer(i,{fulfilled:m||ra,pending:y||ra,rejected:v||ra,settled:g||ra})}function ra(){}function tn(r){return`Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}const rv={heartsProducts:JSON.parse(localStorage.getItem("hearts"))||[]},Uf=$1({name:"Heart-Slice",initialState:rv,reducers:{addHeartProduct:(r,i)=>{const a=i.payload;r.heartsProducts.find(c=>c.id===a.id)||(r.heartsProducts.push(a),localStorage.setItem("hearts",JSON.stringify(r.heartsProducts)))}}}),{addHeartProduct:Ng}=Uf.actions,ov=Uf.reducer,iv=W1({reducer:{heartsProducts:ov}});/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var pf="popstate";function av(r={}){function i(s,c){let{pathname:f,search:m,hash:y}=s.location;return nu("",{pathname:f,search:m,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function a(s,c){return typeof c=="string"?c:po(c)}return sv(i,a,null,r)}function Be(r,i){if(r===!1||r===null||typeof r>"u")throw new Error(i)}function Ht(r,i){if(!r){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function lv(){return Math.random().toString(36).substring(2,10)}function hf(r,i){return{usr:r.state,key:r.key,idx:i}}function nu(r,i,a=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof i=="string"?wo(i):i,state:a,key:i&&i.key||s||lv()}}function po({pathname:r="/",search:i="",hash:a=""}){return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function wo(r){let i={};if(r){let a=r.indexOf("#");a>=0&&(i.hash=r.substring(a),r=r.substring(0,a));let s=r.indexOf("?");s>=0&&(i.search=r.substring(s),r=r.substring(0,s)),r&&(i.pathname=r)}return i}function sv(r,i,a,s={}){let{window:c=document.defaultView,v5Compat:f=!1}=s,m=c.history,y="POP",v=null,g=p();g==null&&(g=0,m.replaceState({...m.state,idx:g},""));function p(){return(m.state||{idx:null}).idx}function x(){y="POP";let S=p(),_=S==null?null:S-g;g=S,v&&v({action:y,location:k.location,delta:_})}function E(S,_){y="PUSH";let R=nu(k.location,S,_);g=p()+1;let A=hf(R,g),D=k.createHref(R);try{m.pushState(A,"",D)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;c.location.assign(D)}f&&v&&v({action:y,location:k.location,delta:1})}function C(S,_){y="REPLACE";let R=nu(k.location,S,_);g=p();let A=hf(R,g),D=k.createHref(R);m.replaceState(A,"",D),f&&v&&v({action:y,location:k.location,delta:0})}function b(S){return uv(S)}let k={get action(){return y},get location(){return r(c,m)},listen(S){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(pf,x),v=S,()=>{c.removeEventListener(pf,x),v=null}},createHref(S){return i(c,S)},createURL:b,encodeLocation(S){let _=b(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:E,replace:C,go(S){return m.go(S)}};return k}function uv(r,i=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Be(a,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:po(r);return s=s.replace(/ $/,"%20"),!i&&s.startsWith("//")&&(s=a+s),new URL(s,a)}function Vf(r,i,a="/"){return cv(r,i,a,!1)}function cv(r,i,a,s){let c=typeof i=="string"?wo(i):i,f=on(c.pathname||"/",a);if(f==null)return null;let m=Wf(r);dv(m);let y=null;for(let v=0;y==null&&v<m.length;++v){let g=kv(f);y=wv(m[v],g,s)}return y}function Wf(r,i=[],a=[],s="",c=!1){let f=(m,y,v=c,g)=>{let p={relativePath:g===void 0?m.path||"":g,caseSensitive:m.caseSensitive===!0,childrenIndex:y,route:m};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(s)&&v)return;Be(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length)}let x=nn([s,p.relativePath]),E=a.concat(p);m.children&&m.children.length>0&&(Be(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Wf(m.children,i,E,x,v)),!(m.path==null&&!m.index)&&i.push({path:x,score:yv(x,m.index),routesMeta:E})};return r.forEach((m,y)=>{if(m.path===""||!m.path?.includes("?"))f(m,y);else for(let v of qf(m.path))f(m,y,!0,v)}),i}function qf(r){let i=r.split("/");if(i.length===0)return[];let[a,...s]=i,c=a.endsWith("?"),f=a.replace(/\?$/,"");if(s.length===0)return c?[f,""]:[f];let m=qf(s.join("/")),y=[];return y.push(...m.map(v=>v===""?f:[f,v].join("/"))),c&&y.push(...m),y.map(v=>r.startsWith("/")&&v===""?"/":v)}function dv(r){r.sort((i,a)=>i.score!==a.score?a.score-i.score:xv(i.routesMeta.map(s=>s.childrenIndex),a.routesMeta.map(s=>s.childrenIndex)))}var fv=/^:[\w-]+$/,pv=3,hv=2,mv=1,vv=10,gv=-2,mf=r=>r==="*";function yv(r,i){let a=r.split("/"),s=a.length;return a.some(mf)&&(s+=gv),i&&(s+=hv),a.filter(c=>!mf(c)).reduce((c,f)=>c+(fv.test(f)?pv:f===""?mv:vv),s)}function xv(r,i){return r.length===i.length&&r.slice(0,-1).every((s,c)=>s===i[c])?r[r.length-1]-i[i.length-1]:0}function wv(r,i,a=!1){let{routesMeta:s}=r,c={},f="/",m=[];for(let y=0;y<s.length;++y){let v=s[y],g=y===s.length-1,p=f==="/"?i:i.slice(f.length)||"/",x=ba({path:v.relativePath,caseSensitive:v.caseSensitive,end:g},p),E=v.route;if(!x&&g&&a&&!s[s.length-1].route.index&&(x=ba({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},p)),!x)return null;Object.assign(c,x.params),m.push({params:c,pathname:nn([f,x.pathname]),pathnameBase:jv(nn([f,x.pathnameBase])),route:E}),x.pathnameBase!=="/"&&(f=nn([f,x.pathnameBase]))}return m}function ba(r,i){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[a,s]=bv(r.path,r.caseSensitive,r.end),c=i.match(a);if(!c)return null;let f=c[0],m=f.replace(/(.)\/+$/,"$1"),y=c.slice(1);return{params:s.reduce((g,{paramName:p,isOptional:x},E)=>{if(p==="*"){let b=y[E]||"";m=f.slice(0,f.length-b.length).replace(/(.)\/+$/,"$1")}const C=y[E];return x&&!C?g[p]=void 0:g[p]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:m,pattern:r}}function bv(r,i=!1,a=!0){Ht(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],c="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,v)=>(s.push({paramName:y,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),c+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?c+="\\/*$":r!==""&&r!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),s]}function kv(r){try{return r.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Ht(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),r}}function on(r,i){if(i==="/")return r;if(!r.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,s=r.charAt(a);return s&&s!=="/"?null:r.slice(a)||"/"}function Cv(r,i="/"){let{pathname:a,search:s="",hash:c=""}=typeof r=="string"?wo(r):r;return{pathname:a?a.startsWith("/")?a:Sv(a,i):i,search:Ev(s),hash:Nv(c)}}function Sv(r,i){let a=i.replace(/\/+$/,"").split("/");return r.split("/").forEach(c=>{c===".."?a.length>1&&a.pop():c!=="."&&a.push(c)}),a.length>1?a.join("/"):"/"}function qs(r,i,a,s){return`Cannot include a '${r}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pv(r){return r.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function Qf(r){let i=Pv(r);return i.map((a,s)=>s===i.length-1?a.pathname:a.pathnameBase)}function Xf(r,i,a,s=!1){let c;typeof r=="string"?c=wo(r):(c={...r},Be(!c.pathname||!c.pathname.includes("?"),qs("?","pathname","search",c)),Be(!c.pathname||!c.pathname.includes("#"),qs("#","pathname","hash",c)),Be(!c.search||!c.search.includes("#"),qs("#","search","hash",c)));let f=r===""||c.pathname==="",m=f?"/":c.pathname,y;if(m==null)y=a;else{let x=i.length-1;if(!s&&m.startsWith("..")){let E=m.split("/");for(;E[0]==="..";)E.shift(),x-=1;c.pathname=E.join("/")}y=x>=0?i[x]:"/"}let v=Cv(c,y),g=m&&m!=="/"&&m.endsWith("/"),p=(f||m===".")&&a.endsWith("/");return!v.pathname.endsWith("/")&&(g||p)&&(v.pathname+="/"),v}var nn=r=>r.join("/").replace(/\/\/+/g,"/"),jv=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Ev=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Nv=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function _v(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Kf=["POST","PUT","PATCH","DELETE"];new Set(Kf);var Ov=["GET",...Kf];new Set(Ov);var gr=L.createContext(null);gr.displayName="DataRouter";var Ra=L.createContext(null);Ra.displayName="DataRouterState";L.createContext(!1);var Zf=L.createContext({isTransitioning:!1});Zf.displayName="ViewTransition";var Tv=L.createContext(new Map);Tv.displayName="Fetchers";var Av=L.createContext(null);Av.displayName="Await";var Ut=L.createContext(null);Ut.displayName="Navigation";var Ma=L.createContext(null);Ma.displayName="Location";var an=L.createContext({outlet:null,matches:[],isDataRoute:!1});an.displayName="Route";var hu=L.createContext(null);hu.displayName="RouteError";function Rv(r,{relative:i}={}){Be(bo(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:s}=L.useContext(Ut),{hash:c,pathname:f,search:m}=ko(r,{relative:i}),y=f;return a!=="/"&&(y=f==="/"?a:nn([a,f])),s.createHref({pathname:y,search:m,hash:c})}function bo(){return L.useContext(Ma)!=null}function Un(){return Be(bo(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(Ma).location}var Yf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $f(r){L.useContext(Ut).static||L.useLayoutEffect(r)}function Mv(){let{isDataRoute:r}=L.useContext(an);return r?Xv():Lv()}function Lv(){Be(bo(),"useNavigate() may be used only in the context of a <Router> component.");let r=L.useContext(gr),{basename:i,navigator:a}=L.useContext(Ut),{matches:s}=L.useContext(an),{pathname:c}=Un(),f=JSON.stringify(Qf(s)),m=L.useRef(!1);return $f(()=>{m.current=!0}),L.useCallback((v,g={})=>{if(Ht(m.current,Yf),!m.current)return;if(typeof v=="number"){a.go(v);return}let p=Xf(v,JSON.parse(f),c,g.relative==="path");r==null&&i!=="/"&&(p.pathname=p.pathname==="/"?i:nn([i,p.pathname])),(g.replace?a.replace:a.push)(p,g.state,g)},[i,a,f,c,r])}L.createContext(null);function ko(r,{relative:i}={}){let{matches:a}=L.useContext(an),{pathname:s}=Un(),c=JSON.stringify(Qf(a));return L.useMemo(()=>Xf(r,JSON.parse(c),s,i==="path"),[r,c,s,i])}function zv(r,i,a,s,c){Be(bo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=L.useContext(Ut),{matches:m}=L.useContext(an),y=m[m.length-1],v=y?y.params:{},g=y?y.pathname:"/",p=y?y.pathnameBase:"/",x=y&&y.route;{let R=x&&x.path||"";Gf(g,!x||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let E=Un(),C;C=E;let b=C.pathname||"/",k=b;if(p!=="/"){let R=p.replace(/^\//,"").split("/");k="/"+b.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=Vf(r,{pathname:k});return Ht(x||S!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Ht(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Bv(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},v,R.params),pathname:nn([p,f.encodeLocation?f.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?p:nn([p,f.encodeLocation?f.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),m,a,s,c)}function Dv(){let r=Qv(),i=_v(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),a=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},m=null;return console.error("Error handled by React Router default ErrorBoundary:",r),m=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:f},"ErrorBoundary")," or"," ",L.createElement("code",{style:f},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},i),a?L.createElement("pre",{style:c},a):null,m)}var Iv=L.createElement(Dv,null),Fv=class extends L.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,i){return i.location!==r.location||i.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:i.error,location:i.location,revalidation:r.revalidation||i.revalidation}}componentDidCatch(r,i){this.props.unstable_onError?this.props.unstable_onError(r,i):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?L.createElement(an.Provider,{value:this.props.routeContext},L.createElement(hu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hv({routeContext:r,match:i,children:a}){let s=L.useContext(gr);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),L.createElement(an.Provider,{value:r},a)}function Bv(r,i=[],a=null,s=null,c=null){if(r==null){if(!a)return null;if(a.errors)r=a.matches;else if(i.length===0&&!a.initialized&&a.matches.length>0)r=a.matches;else return null}let f=r,m=a?.errors;if(m!=null){let g=f.findIndex(p=>p.route.id&&m?.[p.route.id]!==void 0);Be(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,g+1))}let y=!1,v=-1;if(a)for(let g=0;g<f.length;g++){let p=f[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(v=g),p.route.id){let{loaderData:x,errors:E}=a,C=p.route.loader&&!x.hasOwnProperty(p.route.id)&&(!E||E[p.route.id]===void 0);if(p.route.lazy||C){y=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((g,p,x)=>{let E,C=!1,b=null,k=null;a&&(E=m&&p.route.id?m[p.route.id]:void 0,b=p.route.errorElement||Iv,y&&(v<0&&x===0?(Gf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,k=null):v===x&&(C=!0,k=p.route.hydrateFallbackElement||null)));let S=i.concat(f.slice(0,x+1)),_=()=>{let R;return E?R=b:C?R=k:p.route.Component?R=L.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=g,L.createElement(Hv,{match:p,routeContext:{outlet:g,matches:S,isDataRoute:a!=null},children:R})};return a&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?L.createElement(Fv,{location:a.location,revalidation:a.revalidation,component:b,error:E,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:s}):_()},null)}function mu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Uv(r){let i=L.useContext(gr);return Be(i,mu(r)),i}function Vv(r){let i=L.useContext(Ra);return Be(i,mu(r)),i}function Wv(r){let i=L.useContext(an);return Be(i,mu(r)),i}function vu(r){let i=Wv(r),a=i.matches[i.matches.length-1];return Be(a.route.id,`${r} can only be used on routes that contain a unique "id"`),a.route.id}function qv(){return vu("useRouteId")}function Qv(){let r=L.useContext(hu),i=Vv("useRouteError"),a=vu("useRouteError");return r!==void 0?r:i.errors?.[a]}function Xv(){let{router:r}=Uv("useNavigate"),i=vu("useNavigate"),a=L.useRef(!1);return $f(()=>{a.current=!0}),L.useCallback(async(c,f={})=>{Ht(a.current,Yf),a.current&&(typeof c=="number"?r.navigate(c):await r.navigate(c,{fromRouteId:i,...f}))},[r,i])}var vf={};function Gf(r,i,a){!i&&!vf[r]&&(vf[r]=!0,Ht(!1,a))}L.memo(Kv);function Kv({routes:r,future:i,state:a,unstable_onError:s}){return zv(r,void 0,a,s,i)}function Zv({basename:r="/",children:i=null,location:a,navigationType:s="POP",navigator:c,static:f=!1}){Be(!bo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=r.replace(/^\/*/,"/"),y=L.useMemo(()=>({basename:m,navigator:c,static:f,future:{}}),[m,c,f]);typeof a=="string"&&(a=wo(a));let{pathname:v="/",search:g="",hash:p="",state:x=null,key:E="default"}=a,C=L.useMemo(()=>{let b=on(v,m);return b==null?null:{location:{pathname:b,search:g,hash:p,state:x,key:E},navigationType:s}},[m,v,g,p,x,E,s]);return Ht(C!=null,`<Router basename="${m}"> is not able to match the URL "${v}${g}${p}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:L.createElement(Ut.Provider,{value:y},L.createElement(Ma.Provider,{children:i,value:C}))}var la="get",sa="application/x-www-form-urlencoded";function La(r){return r!=null&&typeof r.tagName=="string"}function Yv(r){return La(r)&&r.tagName.toLowerCase()==="button"}function $v(r){return La(r)&&r.tagName.toLowerCase()==="form"}function Gv(r){return La(r)&&r.tagName.toLowerCase()==="input"}function Jv(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function eg(r,i){return r.button===0&&(!i||i==="_self")&&!Jv(r)}var oa=null;function tg(){if(oa===null)try{new FormData(document.createElement("form"),0),oa=!1}catch{oa=!0}return oa}var ng=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qs(r){return r!=null&&!ng.has(r)?(Ht(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sa}"`),null):r}function rg(r,i){let a,s,c,f,m;if($v(r)){let y=r.getAttribute("action");s=y?on(y,i):null,a=r.getAttribute("method")||la,c=Qs(r.getAttribute("enctype"))||sa,f=new FormData(r)}else if(Yv(r)||Gv(r)&&(r.type==="submit"||r.type==="image")){let y=r.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=r.getAttribute("formaction")||y.getAttribute("action");if(s=v?on(v,i):null,a=r.getAttribute("formmethod")||y.getAttribute("method")||la,c=Qs(r.getAttribute("formenctype"))||Qs(y.getAttribute("enctype"))||sa,f=new FormData(y,r),!tg()){let{name:g,type:p,value:x}=r;if(p==="image"){let E=g?`${g}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else g&&f.append(g,x)}}else{if(La(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=la,s=null,c=sa,m=r}return f&&c==="text/plain"&&(m=f,f=void 0),{action:s,method:a.toLowerCase(),encType:c,formData:f,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gu(r,i){if(r===!1||r===null||typeof r>"u")throw new Error(i)}function og(r,i,a){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${a}`:i&&on(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.${a}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${a}`,s}async function ig(r,i){if(r.id in i)return i[r.id];try{let a=await import(r.module);return i[r.id]=a,a}catch(a){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ag(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function lg(r,i,a){let s=await Promise.all(r.map(async c=>{let f=i.routes[c.route.id];if(f){let m=await ig(f,a);return m.links?m.links():[]}return[]}));return dg(s.flat(1).filter(ag).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function gf(r,i,a,s,c,f){let m=(v,g)=>a[g]?v.route.id!==a[g].route.id:!0,y=(v,g)=>a[g].pathname!==v.pathname||a[g].route.path?.endsWith("*")&&a[g].params["*"]!==v.params["*"];return f==="assets"?i.filter((v,g)=>m(v,g)||y(v,g)):f==="data"?i.filter((v,g)=>{let p=s.routes[v.route.id];if(!p||!p.hasLoader)return!1;if(m(v,g)||y(v,g))return!0;if(v.route.shouldRevalidate){let x=v.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function sg(r,i,{includeHydrateFallback:a}={}){return ug(r.map(s=>{let c=i.routes[s.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),a&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function ug(r){return[...new Set(r)]}function cg(r){let i={},a=Object.keys(r).sort();for(let s of a)i[s]=r[s];return i}function dg(r,i){let a=new Set;return new Set(i),r.reduce((s,c)=>{let f=JSON.stringify(cg(c));return a.has(f)||(a.add(f),s.push({key:f,link:c})),s},[])}function Jf(){let r=L.useContext(gr);return gu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function fg(){let r=L.useContext(Ra);return gu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var yu=L.createContext(void 0);yu.displayName="FrameworkContext";function ep(){let r=L.useContext(yu);return gu(r,"You must render this element inside a <HydratedRouter> element"),r}function pg(r,i){let a=L.useContext(yu),[s,c]=L.useState(!1),[f,m]=L.useState(!1),{onFocus:y,onBlur:v,onMouseEnter:g,onMouseLeave:p,onTouchStart:x}=i,E=L.useRef(null);L.useEffect(()=>{if(r==="render"&&m(!0),r==="viewport"){let k=_=>{_.forEach(R=>{m(R.isIntersecting)})},S=new IntersectionObserver(k,{threshold:.5});return E.current&&S.observe(E.current),()=>{S.disconnect()}}},[r]),L.useEffect(()=>{if(s){let k=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(k)}}},[s]);let C=()=>{c(!0)},b=()=>{c(!1),m(!1)};return a?r!=="intent"?[f,E,{}]:[f,E,{onFocus:ao(y,C),onBlur:ao(v,b),onMouseEnter:ao(g,C),onMouseLeave:ao(p,b),onTouchStart:ao(x,C)}]:[!1,E,{}]}function ao(r,i){return a=>{r&&r(a),a.defaultPrevented||i(a)}}function hg({page:r,...i}){let{router:a}=Jf(),s=L.useMemo(()=>Vf(a.routes,r,a.basename),[a.routes,r,a.basename]);return s?L.createElement(vg,{page:r,matches:s,...i}):null}function mg(r){let{manifest:i,routeModules:a}=ep(),[s,c]=L.useState([]);return L.useEffect(()=>{let f=!1;return lg(r,i,a).then(m=>{f||c(m)}),()=>{f=!0}},[r,i,a]),s}function vg({page:r,matches:i,...a}){let s=Un(),{manifest:c,routeModules:f}=ep(),{basename:m}=Jf(),{loaderData:y,matches:v}=fg(),g=L.useMemo(()=>gf(r,i,v,c,s,"data"),[r,i,v,c,s]),p=L.useMemo(()=>gf(r,i,v,c,s,"assets"),[r,i,v,c,s]),x=L.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let b=new Set,k=!1;if(i.forEach(_=>{let R=c.routes[_.route.id];!R||!R.hasLoader||(!g.some(A=>A.route.id===_.route.id)&&_.route.id in y&&f[_.route.id]?.shouldRevalidate||R.hasClientLoader?k=!0:b.add(_.route.id))}),b.size===0)return[];let S=og(r,m,"data");return k&&b.size>0&&S.searchParams.set("_routes",i.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[m,y,s,c,g,i,r,f]),E=L.useMemo(()=>sg(p,c),[p,c]),C=mg(p);return L.createElement(L.Fragment,null,x.map(b=>L.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...a})),E.map(b=>L.createElement("link",{key:b,rel:"modulepreload",href:b,...a})),C.map(({key:b,link:k})=>L.createElement("link",{key:b,nonce:a.nonce,...k})))}function gg(...r){return i=>{r.forEach(a=>{typeof a=="function"?a(i):a!=null&&(a.current=i)})}}var tp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tp&&(window.__reactRouterVersion="7.9.3")}catch{}function yg({basename:r,children:i,window:a}){let s=L.useRef();s.current==null&&(s.current=av({window:a,v5Compat:!0}));let c=s.current,[f,m]=L.useState({action:c.action,location:c.location}),y=L.useCallback(v=>{L.startTransition(()=>m(v))},[m]);return L.useLayoutEffect(()=>c.listen(y),[c,y]),L.createElement(Zv,{basename:r,children:i,location:f.location,navigationType:f.action,navigator:c})}var np=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rp=L.forwardRef(function({onClick:i,discover:a="render",prefetch:s="none",relative:c,reloadDocument:f,replace:m,state:y,target:v,to:g,preventScrollReset:p,viewTransition:x,...E},C){let{basename:b}=L.useContext(Ut),k=typeof g=="string"&&np.test(g),S,_=!1;if(typeof g=="string"&&k&&(S=g,tp))try{let Z=new URL(window.location.href),Y=g.startsWith("//")?new URL(Z.protocol+g):new URL(g),Q=on(Y.pathname,b);Y.origin===Z.origin&&Q!=null?g=Q+Y.search+Y.hash:_=!0}catch{Ht(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=Rv(g,{relative:c}),[A,D,H]=pg(s,E),B=kg(g,{replace:m,state:y,target:v,preventScrollReset:p,relative:c,viewTransition:x});function F(Z){i&&i(Z),Z.defaultPrevented||B(Z)}let K=L.createElement("a",{...E,...H,href:S||R,onClick:_||f?i:F,ref:gg(C,D),target:v,"data-discover":!k&&a==="render"?"true":void 0});return A&&!k?L.createElement(L.Fragment,null,K,L.createElement(hg,{page:R})):K});rp.displayName="Link";var xg=L.forwardRef(function({"aria-current":i="page",caseSensitive:a=!1,className:s="",end:c=!1,style:f,to:m,viewTransition:y,children:v,...g},p){let x=ko(m,{relative:g.relative}),E=Un(),C=L.useContext(Ra),{navigator:b,basename:k}=L.useContext(Ut),S=C!=null&&Eg(x)&&y===!0,_=b.encodeLocation?b.encodeLocation(x).pathname:x.pathname,R=E.pathname,A=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;a||(R=R.toLowerCase(),A=A?A.toLowerCase():null,_=_.toLowerCase()),A&&k&&(A=on(A,k)||A);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let H=R===_||!c&&R.startsWith(_)&&R.charAt(D)==="/",B=A!=null&&(A===_||!c&&A.startsWith(_)&&A.charAt(_.length)==="/"),F={isActive:H,isPending:B,isTransitioning:S},K=H?i:void 0,Z;typeof s=="function"?Z=s(F):Z=[s,H?"active":null,B?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let Y=typeof f=="function"?f(F):f;return L.createElement(rp,{...g,"aria-current":K,className:Z,ref:p,style:Y,to:m,viewTransition:y},typeof v=="function"?v(F):v)});xg.displayName="NavLink";var wg=L.forwardRef(({discover:r="render",fetcherKey:i,navigate:a,reloadDocument:s,replace:c,state:f,method:m=la,action:y,onSubmit:v,relative:g,preventScrollReset:p,viewTransition:x,...E},C)=>{let b=Pg(),k=jg(y,{relative:g}),S=m.toLowerCase()==="get"?"get":"post",_=typeof y=="string"&&np.test(y),R=A=>{if(v&&v(A),A.defaultPrevented)return;A.preventDefault();let D=A.nativeEvent.submitter,H=D?.getAttribute("formmethod")||m;b(D||A.currentTarget,{fetcherKey:i,method:H,navigate:a,replace:c,state:f,relative:g,preventScrollReset:p,viewTransition:x})};return L.createElement("form",{ref:C,method:S,action:k,onSubmit:s?v:R,...E,"data-discover":!_&&r==="render"?"true":void 0})});wg.displayName="Form";function bg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function op(r){let i=L.useContext(gr);return Be(i,bg(r)),i}function kg(r,{target:i,replace:a,state:s,preventScrollReset:c,relative:f,viewTransition:m}={}){let y=Mv(),v=Un(),g=ko(r,{relative:f});return L.useCallback(p=>{if(eg(p,i)){p.preventDefault();let x=a!==void 0?a:po(v)===po(g);y(r,{replace:x,state:s,preventScrollReset:c,relative:f,viewTransition:m})}},[v,y,g,a,s,i,r,c,f,m])}var Cg=0,Sg=()=>`__${String(++Cg)}__`;function Pg(){let{router:r}=op("useSubmit"),{basename:i}=L.useContext(Ut),a=qv();return L.useCallback(async(s,c={})=>{let{action:f,method:m,encType:y,formData:v,body:g}=rg(s,i);if(c.navigate===!1){let p=c.fetcherKey||Sg();await r.fetch(p,a,c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:g,formMethod:c.method||m,formEncType:c.encType||y,flushSync:c.flushSync})}else await r.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:v,body:g,formMethod:c.method||m,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:a,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,i,a])}function jg(r,{relative:i}={}){let{basename:a}=L.useContext(Ut),s=L.useContext(an);Be(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),f={...ko(r||".",{relative:i})},m=Un();if(r==null){f.search=m.search;let y=new URLSearchParams(f.search),v=y.getAll("index");if(v.some(p=>p==="")){y.delete("index"),v.filter(x=>x).forEach(x=>y.append("index",x));let p=y.toString();f.search=p?`?${p}`:""}}return(!r||r===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(f.pathname=f.pathname==="/"?a:nn([a,f.pathname])),po(f)}function Eg(r,{relative:i}={}){let a=L.useContext(Zf);Be(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=op("useViewTransitionState"),c=ko(r,{relative:i});if(!a.isTransitioning)return!1;let f=on(a.currentLocation.pathname,s)||a.currentLocation.pathname,m=on(a.nextLocation.pathname,s)||a.nextLocation.pathname;return ba(c.pathname,m)!=null||ba(c.pathname,f)!=null}uh.createRoot(document.getElementById("root")).render(d.jsx(im,{store:iv,children:d.jsx(yg,{children:d.jsx(h1,{})})}));
