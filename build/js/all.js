/*!
 * Bootstrap without jQuery v0.6.1 for Bootstrap 3
 * By Daniel Davis under MIT License
 * https://github.com/tagawa/bootstrap-without-jquery
 */
!function(){"use strict";function e(){var e,t=document.createElement("div"),n={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(n.hasOwnProperty(e)&&void 0!==t.style[e])return n[e];return!1}function t(e){var t={};e=e||window.event,t.evTarget=e.currentTarget||e.srcElement;var n=t.evTarget.getAttribute("data-target");return t.dataTarget=n?document.querySelector(n):!1,t}function n(e){var t=e.style.height;e.style.height="auto";var n=getComputedStyle(e).height;return e.style.height=t,e.offsetHeight,n}function r(e,t){if(document.createEvent){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!1),e.dispatchEvent(n)}else e.fireEvent("on"+t)}function a(e,t){e.classList.remove("collapse"),e.classList.add("collapsing"),t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0),e.style.height=n(e),d?e.addEventListener(d,function(){s(e)},!1):s(e)}function i(e,t){e.classList.remove("collapse"),e.classList.remove("in"),e.classList.add("collapsing"),t.classList.add("collapsed"),t.setAttribute("aria-expanded",!1),e.style.height=getComputedStyle(e).height,e.offsetHeight,e.style.height="0px"}function s(e){e.classList.remove("collapsing"),e.classList.add("collapse"),e.setAttribute("aria-expanded",!1),"0px"!==e.style.height&&(e.classList.add("in"),e.style.height="auto")}function l(e){e.preventDefault();var n=t(e),r=n.dataTarget;return r.classList.contains("in")?i(r,n.evTarget):a(r,n.evTarget),!1}function o(e){function n(){try{i.parentNode.removeChild(i),r(i,"closed.bs.alert")}catch(e){window.console.error("Unable to remove alert")}}e.preventDefault();var a=t(e),i=a.dataTarget;if(!i){var s=a.evTarget.parentNode;s.classList.contains("alert")?i=s:s.parentNode.classList.contains("alert")&&(i=s.parentNode)}return r(i,"close.bs.alert"),i.classList.remove("in"),d&&i.classList.contains("fade")?i.addEventListener(d,function(){n()},!1):n(),!1}function c(e){e=e||window.event;var t=e.currentTarget||e.srcElement;return t.parentElement.classList.toggle("open"),!1}function u(e){e=e||window.event;var t=e.currentTarget||e.srcElement;return t.parentElement.classList.remove("open"),e.relatedTarget&&"dropdown"!==e.relatedTarget.getAttribute("data-toggle")&&e.relatedTarget.click(),!1}for(var d=e(),g=document.querySelectorAll("[data-toggle=collapse]"),h=0,f=g.length;f>h;h++)g[h].onclick=l;for(var m=document.querySelectorAll("[data-dismiss=alert]"),v=0,p=m.length;p>v;v++)m[v].onclick=o;for(var y,E=document.querySelectorAll("[data-toggle=dropdown]"),w=0,b=E.length;b>w;w++)y=E[w],y.setAttribute("tabindex","0"),y.onclick=c,y.onblur=u}();

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function _interopRequireWildcard(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
};

var _Modal = require('./modal');

var _Modal2 = _interopRequireWildcard(_Modal);

var _SmoothScroll = require('./smooth-scroll');

var _SmoothScroll2 = _interopRequireWildcard(_SmoothScroll);

new _Modal2['default']();
new _SmoothScroll2['default']();

},{"./modal":2,"./smooth-scroll":3}],2:[function(require,module,exports){
'use strict';

var _classCallCheck = function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
};

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

Object.defineProperty(exports, '__esModule', {
  value: true
});
// Polyfills:
// - classList

var Modal = (function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.body = document.getElementsByTagName('body')[0];
    this.modalButton = document.getElementById('modal-copyright-btn');
    this.modal = document.getElementById('modal-copyright');
    this.modalDialog = document.querySelector('.modal-dialog');
    this.modalBackdrop = this.modal.querySelector('.modal-backdrop');
    this.modalClose = this.modal.querySelectorAll('.js-modal-legal-close');

    this.init();
  }

  _createClass(Modal, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // Toggle modal from footer button
      this.modalButton.addEventListener('click', this.toggleLegalModal.bind(this), false);

      // Toggle the modal on click on the backdrop
      this.modalBackdrop.addEventListener('click', this.toggleLegalModal.bind(this), false);

      // Toggle modal from modal's close buttons
      [].forEach.call(this.modalClose, function (el) {
        el.addEventListener('click', _this.toggleLegalModal.bind(_this), false);
      });
    }
  }, {
    key: 'toggleLegalModal',
    value: function toggleLegalModal(e) {
      var _this2 = this;

      e && e.preventDefault();

      if (this.modal.classList.contains('in')) {

        // Remove 'modal-open' to restore body's scroll
        this.body.classList.remove('modal-open');

        // Manage the modal hiding
        this.modal.classList.remove('in');
        this.modalBackdrop.classList.remove('in');

        // Timeout needed to let the css animation finish
        setTimeout(function () {
          _this2.modal.style.display = 'none';
          _this2.modalBackdrop.style.display = 'none';
        }, 500);
      } else {
        // Add class to kill the body's scroll
        this.body.classList.add('modal-open');
        // Manage the modal showing
        this.modal.style.display = 'block';
        this.modalBackdrop.style.display = 'block';
        this.modalBackdrop.style.height = parseFloat(this.modalDialog.offsetHeight + 60) + 'px';
        this.modal.classList.add('in');
        this.modalBackdrop.classList.add('in');
      }
    }
  }]);

  return Modal;
})();

exports['default'] = Modal;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

var _classCallCheck = function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
};

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

Object.defineProperty(exports, '__esModule', {
  value: true
});
// Polyfills:
// - classList

var Modal = (function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.init();
  }

  _createClass(Modal, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var navLinks = document.getElementsByClassName('js-smooth-link');

      [].forEach.call(navLinks, function (el) {
        el.addEventListener('click', function (ev) {
          ev.preventDefault();
          _this.smoothScroll(ev.target.href.split('#')[1]);
        }, false);
      });
    }
  }, {
    key: 'currentYPosition',
    value: function currentYPosition() {
      // Firefox, Chrome, Opera, Safari
      if (self.pageYOffset) {
        return self.pageYOffset;
      } // Internet Explorer 6 - standards mode
      if (document.documentElement && document.documentElement.scrollTop) {
        return document.documentElement.scrollTop;
      } // Internet Explorer 6, 7 and 8
      if (document.body.scrollTop) {
        return document.body.scrollTop;
      }return 0;
    }
  }, {
    key: 'elmYPosition',
    value: function elmYPosition(eID) {
      console.log('eID: ', eID);
      var elm = document.getElementById(eID);
      var y = elm.offsetTop;
      var node = elm;
      while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
      }return y;
    }
  }, {
    key: 'smoothScroll',
    value: function smoothScroll(eID) {
      var startY = this.currentYPosition();
      var stopY = this.elmYPosition(eID);
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
        scrollTo(0, stopY);return;
      }
      var speed = Math.round(distance / 100);
      if (speed >= 20) speed = 20;
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;
      if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
          setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
          leapY += step;if (leapY > stopY) leapY = stopY;timer++;
        }return;
      }
      for (var i = startY; i > stopY; i -= step) {
        setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
        leapY -= step;if (leapY < stopY) leapY = stopY;timer++;
      }
      return false;
    }
  }]);

  return Modal;
})();

exports['default'] = Modal;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdG9tL2JsYWFhc3QvYmxhYWFzdC5naXRodWIuaW8vanMvbWFpbi5qcyIsIi9Vc2Vycy90b20vYmxhYWFzdC9ibGFhYXN0LmdpdGh1Yi5pby9qcy9tb2RhbC5qcyIsIi9Vc2Vycy90b20vYmxhYWFzdC9ibGFhYXN0LmdpdGh1Yi5pby9qcy9zbW9vdGgtc2Nyb2xsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOztBQUViLElBQUksdUJBQXVCLEdBQUcsaUNBQVUsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRSxDQUFDOztBQUUxRyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBSkYsU0FBUyxDQUFBLENBQUE7O0FBTTNCLElBQUksT0FBTyxHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU5QyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBUEYsaUJBQWlCLENBQUEsQ0FBQTs7QUFTMUMsSUFBSSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBUDVELElBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFXLENBQUM7QUFDWixJQUFBLGNBQUEsQ0FBQSxTQUFBLENBQUEsRUFBa0IsQ0FBQzs7O0FDSm5CLFlBQVksQ0FBQzs7QUFFYixJQUFJLGVBQWUsR0FBRyx5QkFBVSxRQUFRLEVBQUUsV0FBVyxFQUFFO0FBQUUsTUFBSSxFQUFFLFFBQVEsWUFBWSxXQUFXLENBQUEsQUFBQyxFQUFFO0FBQUUsVUFBTSxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0dBQUU7Q0FBRSxDQUFDOztBQUVqSyxJQUFJLFlBQVksR0FBRyxDQUFDLFlBQVk7QUFBRSxXQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFBRSxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUFFLFVBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQUFBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxBQUFDLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxBQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FBRTtHQUFFLEFBQUMsT0FBTyxVQUFVLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0FBQUUsUUFBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxBQUFDLElBQUksV0FBVyxFQUFFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxBQUFDLE9BQU8sV0FBVyxDQUFDO0dBQUUsQ0FBQztDQUFFLENBQUEsRUFBRyxDQUFDOztBQUV0akIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDLE9BQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDOzs7O0FBSUgsSUFUcUIsS0FBSyxHQUFBLENBQUEsWUFBQTtBQUViLFdBRlEsS0FBSyxHQUVWO0FBU1osbUJBQWUsQ0FBQyxJQUFJLEVBWEgsS0FBSyxDQUFBLENBQUE7O0FBR3RCLFFBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFFBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2xFLFFBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3hELFFBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMzRCxRQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDakUsUUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7O0FBRXZFLFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUNiOztBQVlELGNBQVksQ0F2Qk8sS0FBSyxFQUFBLENBQUE7QUF3QnRCLE9BQUcsRUFBRSxNQUFNO0FBQ1gsU0FBSyxFQVpILFNBQUEsSUFBQSxHQUFHO0FBYUgsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDOzs7QUFYbkIsVUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7O0FBR3BGLFVBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7OztBQUd0RixRQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsRUFBRSxFQUFLO0FBQ3ZDLFVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBQSxDQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQSxLQUFBLENBQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztPQUN2RSxDQUFDLENBQUM7S0FDSjtHQWVBLEVBQUU7QUFDRCxPQUFHLEVBQUUsa0JBQWtCO0FBQ3ZCLFNBQUssRUFmUyxTQUFBLGdCQUFBLENBQUMsQ0FBQyxFQUFFO0FBZ0JoQixVQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7O0FBZnBCLE9BQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7O0FBRXhCLFVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFOzs7QUFHdkMsWUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7QUFHekMsWUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLFlBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O0FBRzFDLGtCQUFVLENBQUMsWUFBTTtBQUNmLGdCQUFBLENBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLGdCQUFBLENBQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQzNDLEVBQUUsR0FBRyxDQUFDLENBQUM7T0FFVCxNQUFNOztBQUVMLFlBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFdEMsWUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUNuQyxZQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQzNDLFlBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3hGLFlBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixZQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDeEM7S0FDRjtHQWlCQSxDQUFDLENBQUMsQ0FBQzs7QUFFSixTQXpFbUIsS0FBSyxDQUFBO0NBMEV6QixDQUFBLEVBQUcsQ0FBQzs7QUFFTCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBNUVHLEtBQUssQ0FBQTtBQTZFMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7OztBQ2hGcEMsWUFBWSxDQUFDOztBQUViLElBQUksZUFBZSxHQUFHLHlCQUFVLFFBQVEsRUFBRSxXQUFXLEVBQUU7QUFBRSxNQUFJLEVBQUUsUUFBUSxZQUFZLFdBQVcsQ0FBQSxBQUFDLEVBQUU7QUFBRSxVQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7R0FBRTtDQUFFLENBQUM7O0FBRWpLLElBQUksWUFBWSxHQUFHLENBQUMsWUFBWTtBQUFFLFdBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUFFLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQUUsVUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxBQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEFBQUMsSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEFBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUFFO0dBQUUsQUFBQyxPQUFPLFVBQVUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFBRSxRQUFJLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEFBQUMsSUFBSSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEFBQUMsT0FBTyxXQUFXLENBQUM7R0FBRSxDQUFDO0NBQUUsQ0FBQSxFQUFHLENBQUM7O0FBRXRqQixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7Ozs7QUFJSCxJQVRxQixLQUFLLEdBQUEsQ0FBQSxZQUFBO0FBRWIsV0FGUSxLQUFLLEdBRVY7QUFTWixtQkFBZSxDQUFDLElBQUksRUFYSCxLQUFLLENBQUEsQ0FBQTs7QUFHdEIsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ2I7O0FBWUQsY0FBWSxDQWhCTyxLQUFLLEVBQUEsQ0FBQTtBQWlCdEIsT0FBRyxFQUFFLE1BQU07QUFDWCxTQUFLLEVBWkgsU0FBQSxJQUFBLEdBQUc7QUFhSCxVQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBWm5CLFVBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUVqRSxRQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxFQUFFLEVBQUs7QUFDaEMsVUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEVBQUUsRUFBSztBQUNuQyxZQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDcEIsZUFBQSxDQUFLLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRCxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ1gsQ0FBQyxDQUFDO0tBQ0o7R0FlQSxFQUFFO0FBQ0QsT0FBRyxFQUFFLGtCQUFrQjtBQUN2QixTQUFLLEVBZlMsU0FBQSxnQkFBQSxHQUFHOztBQUVqQixVQUFJLElBQUksQ0FBQyxXQUFXLEVBQUE7QUFBRSxlQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7T0FBQTtBQUU5QyxVQUFJLFFBQVEsQ0FBQyxlQUFlLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUE7QUFDaEUsZUFBTyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztPQUFBO0FBRTVDLFVBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUE7QUFBRSxlQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO09BQUEsT0FDckQsQ0FBQyxDQUFDO0tBQ1Y7R0FrQkEsRUFBRTtBQUNELE9BQUcsRUFBRSxjQUFjO0FBQ25CLFNBQUssRUFsQkssU0FBQSxZQUFBLENBQUMsR0FBRyxFQUFFO0FBQ2hCLGFBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLFVBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsVUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUN0QixVQUFJLElBQUksR0FBRyxHQUFHLENBQUM7QUFDZixhQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQzlELFlBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQ3pCLFNBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO09BQ3JCLE9BQVEsQ0FBQyxDQUFDO0tBQ1o7R0FtQkEsRUFBRTtBQUNELE9BQUcsRUFBRSxjQUFjO0FBQ25CLFNBQUssRUFuQkssU0FBQSxZQUFBLENBQUMsR0FBRyxFQUFFO0FBQ2hCLFVBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3JDLFVBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsVUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDaEUsVUFBSSxRQUFRLEdBQUcsR0FBRyxFQUFFO0FBQ2xCLGdCQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQVE7T0FDNUI7QUFDRCxVQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN2QyxVQUFJLEtBQUssSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUM1QixVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNyQyxVQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztBQUMzRCxVQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxVQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7QUFDbEIsYUFBTSxJQUFJLENBQUMsR0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFDLEtBQUssRUFBRSxDQUFDLElBQUUsSUFBSSxFQUFHO0FBQ3JDLG9CQUFVLENBQUMscUJBQXFCLEdBQUMsS0FBSyxHQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDM0QsZUFBSyxJQUFJLElBQUksQ0FBQyxJQUFLLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFNLEVBQUUsQ0FBQztTQUMxRCxPQUFRO09BQ1Y7QUFDRCxXQUFNLElBQUksQ0FBQyxHQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUMsS0FBSyxFQUFFLENBQUMsSUFBRSxJQUFJLEVBQUc7QUFDckMsa0JBQVUsQ0FBQyxxQkFBcUIsR0FBQyxLQUFLLEdBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMzRCxhQUFLLElBQUksSUFBSSxDQUFDLElBQUssS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQU0sRUFBRSxDQUFDO09BQzFEO0FBQ0QsYUFBTyxLQUFLLENBQUM7S0FDZDtHQW9CQSxDQUFDLENBQUMsQ0FBQzs7QUFFSixTQXBGbUIsS0FBSyxDQUFBO0NBcUZ6QixDQUFBLEVBQUcsQ0FBQzs7QUFFTCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBdkZHLEtBQUssQ0FBQTtBQXdGMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICcuL3Ntb290aC1zY3JvbGwnO1xuXG5uZXcgTW9kYWwoKTtcbm5ldyBTbW9vdGhTY3JvbGwoKTtcbiIsIi8vIFBvbHlmaWxsczpcbi8vIC0gY2xhc3NMaXN0XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIHRoaXMubW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY29weXJpZ2h0LWJ0bicpO1xuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY29weXJpZ2h0Jyk7XG4gICAgdGhpcy5tb2RhbERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cnKTtcbiAgICB0aGlzLm1vZGFsQmFja2Ryb3AgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZHJvcCcpO1xuICAgIHRoaXMubW9kYWxDbG9zZSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmpzLW1vZGFsLWxlZ2FsLWNsb3NlJyk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gVG9nZ2xlIG1vZGFsIGZyb20gZm9vdGVyIGJ1dHRvblxuICAgIHRoaXMubW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUxlZ2FsTW9kYWwuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgLy8gVG9nZ2xlIHRoZSBtb2RhbCBvbiBjbGljayBvbiB0aGUgYmFja2Ryb3BcbiAgICB0aGlzLm1vZGFsQmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUxlZ2FsTW9kYWwuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgLy8gVG9nZ2xlIG1vZGFsIGZyb20gbW9kYWwncyBjbG9zZSBidXR0b25zXG4gICAgW10uZm9yRWFjaC5jYWxsKHRoaXMubW9kYWxDbG9zZSwgKGVsKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlTGVnYWxNb2RhbC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVMZWdhbE1vZGFsKGUpIHtcbiAgICBlICYmIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLm1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaW4nKSkge1xuXG4gICAgICAvLyBSZW1vdmUgJ21vZGFsLW9wZW4nIHRvIHJlc3RvcmUgYm9keSdzIHNjcm9sbFxuICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcblxuICAgICAgLy8gTWFuYWdlIHRoZSBtb2RhbCBoaWRpbmdcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaW4nKTtcbiAgICAgIHRoaXMubW9kYWxCYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdpbicpO1xuXG4gICAgICAvLyBUaW1lb3V0IG5lZWRlZCB0byBsZXQgdGhlIGNzcyBhbmltYXRpb24gZmluaXNoXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLm1vZGFsQmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDUwMCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRkIGNsYXNzIHRvIGtpbGwgdGhlIGJvZHkncyBzY3JvbGxcbiAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAvLyBNYW5hZ2UgdGhlIG1vZGFsIHNob3dpbmdcbiAgICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLm1vZGFsQmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLm1vZGFsQmFja2Ryb3Auc3R5bGUuaGVpZ2h0ID0gcGFyc2VGbG9hdCh0aGlzLm1vZGFsRGlhbG9nLm9mZnNldEhlaWdodCArIDYwKSArICdweCc7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2luJyk7XG4gICAgICB0aGlzLm1vZGFsQmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICB9XG4gIH1cblxufVxuIiwiLy8gUG9seWZpbGxzOlxuLy8gLSBjbGFzc0xpc3RcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgbmF2TGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy1zbW9vdGgtbGluaycpO1xuXG4gICAgW10uZm9yRWFjaC5jYWxsKG5hdkxpbmtzLCAoZWwpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc21vb3RoU2Nyb2xsKGV2LnRhcmdldC5ocmVmLnNwbGl0KCcjJylbMV0pO1xuICAgICAgfSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgY3VycmVudFlQb3NpdGlvbigpIHtcbiAgICAvLyBGaXJlZm94LCBDaHJvbWUsIE9wZXJhLCBTYWZhcmlcbiAgICBpZiAoc2VsZi5wYWdlWU9mZnNldCkgcmV0dXJuIHNlbGYucGFnZVlPZmZzZXQ7XG4gICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNiAtIHN0YW5kYXJkcyBtb2RlXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKVxuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNiwgNyBhbmQgOFxuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZWxtWVBvc2l0aW9uKGVJRCkge1xuICAgIGNvbnNvbGUubG9nKCdlSUQ6ICcsIGVJRCk7XG4gICAgbGV0IGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVJRCk7XG4gICAgbGV0IHkgPSBlbG0ub2Zmc2V0VG9wO1xuICAgIGxldCBub2RlID0gZWxtO1xuICAgIHdoaWxlIChub2RlLm9mZnNldFBhcmVudCAmJiBub2RlLm9mZnNldFBhcmVudCAhPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG4gICAgICB5ICs9IG5vZGUub2Zmc2V0VG9wO1xuICAgIH0gcmV0dXJuIHk7XG4gIH1cblxuICBzbW9vdGhTY3JvbGwoZUlEKSB7XG4gICAgbGV0IHN0YXJ0WSA9IHRoaXMuY3VycmVudFlQb3NpdGlvbigpO1xuICAgIGxldCBzdG9wWSA9IHRoaXMuZWxtWVBvc2l0aW9uKGVJRCk7XG4gICAgbGV0IGRpc3RhbmNlID0gc3RvcFkgPiBzdGFydFkgPyBzdG9wWSAtIHN0YXJ0WSA6IHN0YXJ0WSAtIHN0b3BZO1xuICAgIGlmIChkaXN0YW5jZSA8IDEwMCkge1xuICAgICAgc2Nyb2xsVG8oMCwgc3RvcFkpOyByZXR1cm47XG4gICAgfVxuICAgIGxldCBzcGVlZCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAxMDApO1xuICAgIGlmIChzcGVlZCA+PSAyMCkgc3BlZWQgPSAyMDtcbiAgICBsZXQgc3RlcCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAyNSk7XG4gICAgbGV0IGxlYXBZID0gc3RvcFkgPiBzdGFydFkgPyBzdGFydFkgKyBzdGVwIDogc3RhcnRZIC0gc3RlcDtcbiAgICBsZXQgdGltZXIgPSAwO1xuICAgIGlmIChzdG9wWSA+IHN0YXJ0WSkge1xuICAgICAgZm9yICggbGV0IGk9c3RhcnRZOyBpPHN0b3BZOyBpKz1zdGVwICkge1xuICAgICAgICBzZXRUaW1lb3V0KFwid2luZG93LnNjcm9sbFRvKDAsIFwiK2xlYXBZK1wiKVwiLCB0aW1lciAqIHNwZWVkKTtcbiAgICAgICAgbGVhcFkgKz0gc3RlcDsgaWYgKGxlYXBZID4gc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XG4gICAgICB9IHJldHVybjtcbiAgICB9XG4gICAgZm9yICggbGV0IGk9c3RhcnRZOyBpPnN0b3BZOyBpLT1zdGVwICkge1xuICAgICAgc2V0VGltZW91dChcIndpbmRvdy5zY3JvbGxUbygwLCBcIitsZWFwWStcIilcIiwgdGltZXIgKiBzcGVlZCk7XG4gICAgICBsZWFwWSAtPSBzdGVwOyBpZiAobGVhcFkgPCBzdG9wWSkgbGVhcFkgPSBzdG9wWTsgdGltZXIrKztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==
