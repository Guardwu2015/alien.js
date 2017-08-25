//   _  /._  _  r5.banner 2017-08-24 11:10pm
//  /_|///_'/ /
"use strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();window.Events||(window.Events={BROWSER_FOCUS:"browser_focus",KEYBOARD_DOWN:"keyboard_down",KEYBOARD_UP:"keyboard_up",KEYBOARD_PRESS:"keyboard_press",RESIZE:"resize",COMPLETE:"complete",PROGRESS:"progress",UPDATE:"update",LOADED:"loaded",ERROR:"error",READY:"ready",HOVER:"hover",CLICK:"click"});var EventManager=function e(){var t=this;_classCallCheck(this,e);var n=[];this.add=function(e,t,i){n.push({event:e,callback:t,object:i})},this.remove=function(e,t){for(var i=n.length-1;i>-1;i--)n[i].event===e&&n[i].callback===t&&(n[i]=null,n.splice(i,1))},this.destroy=function(e){if(!e){window.events.destroy(t);for(var i=n.length-1;i>-1;i--)n[i]=null,n.splice(i,1);return null}for(var r=n.length-1;r>-1;r--)n[r].object===e&&(n[r]=null,n.splice(r,1))},this.fire=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=0;i<n.length;i++)n[i].event===e&&n[i].callback(t)},this.subscribe=function(e,n){return window.events.add(e,n,t),n},this.unsubscribe=function(e,n){window.events.remove(e,n,t)}};window.events||(window.events=new EventManager),window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return Delayed(e,1e3/60)});var Render=new function e(){function t(e){"focus"===e.type&&(i=Date.now())}function n(){var e=Date.now(),u=e-o,c=0,l=60;i&&(l=1e3/(c=e-i)),i=e;for(var h=r.length-1;h>-1;h--){var f=r[h];if(f){if(f.fps){if((s+=c>200?0:c)<1e3/f.fps)continue;s-=1e3/f.fps}f(e,u,c,l,f.frameCount++)}}r.length?window.requestAnimationFrame(n):(a=!1,window.events.remove(Events.BROWSER_FOCUS,t))}_classCallCheck(this,e);var i=void 0,r=[],o=Date.now(),s=0,a=!1;this.start=function(e){e.frameCount=0,-1===r.indexOf(e)&&r.push(e),r.length&&!a&&(a=!0,window.requestAnimationFrame(n),window.events.add(Events.BROWSER_FOCUS,t))},this.stop=function(e){var t=r.indexOf(e);t>-1&&r.splice(t,1)}},DynamicObject=function e(t){var n=this;_classCallCheck(this,e);for(var i in t)this[i]=t[i];this.lerp=function(e,i){for(var r in t)n[r]+=(e[r]-n[r])*i;return n}},Device=new(function(){function e(){var t=this;_classCallCheck(this,e),this.agent=navigator.userAgent.toLowerCase(),this.prefix=function(){var e="",n="",i=window.getComputedStyle(document.documentElement,"");e=(Array.prototype.slice.call(i).join("").match(/-(moz|webkit|ms)-/)||""===i.OLink&&["","o"])[1],n="WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1];var r=t.detect("trident");return{unprefixed:r&&!t.detect("msie 9"),dom:n,lowercase:e,css:"-"+e+"-",js:(r?e[0]:e[0].toUpperCase())+e.substr(1)}}(),this.transformProperty=function(){var e=void 0;switch(t.prefix.lowercase){case"webkit":e="-webkit-transform";break;case"moz":e="-moz-transform";break;case"o":e="-o-transform";break;case"ms":e="-ms-transform";break;default:e="transform"}return e}(),this.mobile=!(!("ontouchstart"in window||"onpointerdown"in window)||!this.detect(["ios","iphone","ipad","android","blackberry"]))&&{},this.tablet=window.innerWidth>window.innerHeight?document.body.clientWidth>800:document.body.clientHeight>800,this.phone=!this.tablet,this.type=this.phone?"phone":"tablet"}return _createClass(e,[{key:"detect",value:function(e){"string"==typeof e&&(e=[e]);for(var t=0;t<e.length;t++)if(this.agent.indexOf(e[t])>-1)return!0;return!1}},{key:"vendor",value:function(e){return this.prefix.js+e}},{key:"vibrate",value:function(e){navigator.vibrate&&navigator.vibrate(e)}}]),e}()),Utils=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"rand",value:function(e,t){return new DynamicObject({v:e}).lerp({v:t},Math.random()).v}},{key:"doRandom",value:function(e,t,n){if("number"==typeof n){var i=Math.pow(10,n);return Math.round(this.rand(e,t)*i)/i}return Math.round(this.rand(e-.5,t+.5))}},{key:"headsTails",value:function(e,t){return this.doRandom(0,1)?t:e}},{key:"toDegrees",value:function(e){return e*(180/Math.PI)}},{key:"toRadians",value:function(e){return e*(Math.PI/180)}},{key:"findDistance",value:function(e,t){var n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}},{key:"timestamp",value:function(){return(Date.now()+this.doRandom(0,99999)).toString()}},{key:"pad",value:function(e){return e<10?"0"+e:e}},{key:"touchEvent",value:function(e){var t={};return t.x=0,t.y=0,e?(Device.mobile&&(e.touches||e.changedTouches)?e.touches.length?(t.x=e.touches[0].pageX,t.y=e.touches[0].pageY):(t.x=e.changedTouches[0].pageX,t.y=e.changedTouches[0].pageY):(t.x=e.pageX,t.y=e.pageY),t):t}},{key:"clamp",value:function(e,t,n){return Math.min(Math.max(e,t),n)}},{key:"constrain",value:function(e,t,n){return Math.min(Math.max(e,Math.min(t,n)),Math.max(t,n))}},{key:"convertRange",value:function(e,t,n,i,r,o){var s=(e-t)*(r-i)/(n-t)+i;return o?this.constrain(s,i,r):s}},{key:"nullObject",value:function(e){for(var t in e)void 0!==e[t]&&(e[t]=null);return null}},{key:"cloneObject",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"mergeObject",value:function(){for(var e={},t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=!0,o=!1,s=void 0;try{for(var a,u=n[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){var c=a.value;for(var l in c)e[l]=c[l]}}catch(e){o=!0,s=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw s}}return e}},{key:"cloneArray",value:function(e){return e.slice(0)}},{key:"toArray",value:function(e){return Object.keys(e).map(function(t){return e[t]})}},{key:"queryString",value:function(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURI(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},{key:"basename",value:function(e){return e.replace(/.*\//,"").replace(/(.*)\..*$/,"$1")}},{key:"base64",value:function(e){return window.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode("0x"+t)}))}}]),e}()),Interpolation=new function e(){var t=this;_classCallCheck(this,e),this.convertEase=function(e){return function(){var n=void 0;switch(e){case"easeInQuad":n=t.Quad.In;break;case"easeInCubic":n=t.Cubic.In;break;case"easeInQuart":n=t.Quart.In;break;case"easeInQuint":n=t.Quint.In;break;case"easeInSine":n=t.Sine.In;break;case"easeInExpo":n=t.Expo.In;break;case"easeInCirc":n=t.Circ.In;break;case"easeInElastic":n=t.Elastic.In;break;case"easeInBack":n=t.Back.In;break;case"easeInBounce":n=t.Bounce.In;break;case"easeOutQuad":n=t.Quad.Out;break;case"easeOutCubic":n=t.Cubic.Out;break;case"easeOutQuart":n=t.Quart.Out;break;case"easeOutQuint":n=t.Quint.Out;break;case"easeOutSine":n=t.Sine.Out;break;case"easeOutExpo":n=t.Expo.Out;break;case"easeOutCirc":n=t.Circ.Out;break;case"easeOutElastic":n=t.Elastic.Out;break;case"easeOutBack":n=t.Back.Out;break;case"easeOutBounce":n=t.Bounce.Out;break;case"easeInOutQuad":n=t.Quad.InOut;break;case"easeInOutCubic":n=t.Cubic.InOut;break;case"easeInOutQuart":n=t.Quart.InOut;break;case"easeInOutQuint":n=t.Quint.InOut;break;case"easeInOutSine":n=t.Sine.InOut;break;case"easeInOutExpo":n=t.Expo.InOut;break;case"easeInOutCirc":n=t.Circ.InOut;break;case"easeInOutElastic":n=t.Elastic.InOut;break;case"easeInOutBack":n=t.Back.InOut;break;case"easeInOutBounce":n=t.Bounce.InOut;break;case"linear":n=t.Linear.None}return n}()||t.Cubic.Out},this.Linear={None:function(e){return e}},this.Quad={In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},this.Cubic={In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},this.Quart={In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},this.Quint={In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},this.Sine={In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.cos(Math.PI*e))}},this.Expo={In:function(e){return 0===e?0:Math.pow(1024,e-1)},Out:function(e){return 1===e?1:1-Math.pow(2,-10*e)},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},this.Circ={In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},this.Elastic={In:function(e){var t=void 0,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4))},Out:function(e){var t=void 0,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/.4)+1)},InOut:function(e){var t=void 0,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),(e*=2)<1?n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4)*.5+1)}},this.Back={In:function(e){var t=1.70158;return e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)}},this.Bounce={In:function(e){return 1-t.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*t.Bounce.In(2*e):.5*t.Bounce.Out(2*e-1)+.5}}},MathTween=function e(t,n,i,r,o,s,a){function u(){return!l||l.kill||!t}function c(e){if(!u()){if(l.kill=!0,!e){for(var n in d)"number"==typeof d[n]&&(t[n]=d[n]);t.transform&&t.transform()}TweenManager.removeMathTween(l),t.mathTween=null}}_classCallCheck(this,e);var l=this,h=void 0,f=void 0,d=void 0,v=void 0,p=void 0;!function(){if(!u()){t.mathTween&&(t.mathTween.kill=!0),TweenManager.clearTween(t),TweenManager.addMathTween(l),t.mathTween=l,r=Interpolation.convertEase(r),h=Date.now(),h+=o,d=n,f={};for(var e in d)"number"==typeof t[e]&&(f[e]=t[e])}}(),this.update=function(e){if(!u()&&!(v||e<h)){var n=r(p=(p=(e-h)/i)>1?1:p);for(var o in f)if("number"==typeof f[o]){var l=f[o],m=d[o];t[o]=l+(m-l)*n}s&&s(n),1===p&&(c(),a&&a()),t.transform&&t.transform()}},this.pause=function(){v=!0},this.resume=function(){v=!1,h=Date.now()-p*i},this.stop=function(){return c(!0)}},SpringTween=function e(t,n,i,r,o,s,a){function u(){return!l||l.kill||!t}function c(e){if(!u()){if(l.kill=!0,!e){for(var n in d)"number"==typeof d[n]&&(t[n]=d[n]);t.transform&&t.transform()}TweenManager.removeMathTween(l),t.mathTween=null}}_classCallCheck(this,e);var l=this,h=void 0,f=void 0,d=void 0,v=void 0,p=void 0,m=void 0,y=void 0;!function(){if(!u()){t.mathTween&&(t.mathTween.kill=!0),TweenManager.clearTween(t),TweenManager.addMathTween(l),t.mathTween=l,h=Date.now(),h+=o,d={},v={},f={},(n.x||n.y||n.z)&&(void 0===n.x&&(n.x=t.x),void 0===n.y&&(n.y=t.y),void 0===n.z&&(n.z=t.z)),m=0,p=n.damping||.1,delete n.damping;for(var e in n)"number"==typeof n[e]&&(f[e]=0,d[e]=n[e]);for(var i in n)"number"==typeof t[i]&&(v[i]=t[i]||0,n[i]=v[i])}}(),this.update=function(e){if(!u()&&!(y||e<h)){var r=void 0;for(var o in v)if("number"==typeof v[o]){var l=(d[o]-n[o])*p;f[o]+=l,f[o]*=i,n[o]+=f[o],t[o]=n[o],r=f[o]}s&&s(e),Math.abs(r)<.001&&++m>30&&(c(),a&&a()),t.transform&&t.transform()}},this.pause=function(){y=!0},this.stop=function(){return c(!0)}},TweenManager=new(function(){function e(){function t(e){if(n.length)for(var r=0;r<n.length;r++)n[r].update(e);else i=!1,Render.stop(t)}_classCallCheck(this,e),this.TRANSFORMS=["x","y","z","scale","scaleX","scaleY","rotation","rotationX","rotationY","rotationZ","skewX","skewY","perspective"],this.CSS_EASES={easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",easeInOut:"cubic-bezier(0.420, 0.000, 0.580, 1.000)",linear:"linear"};var n=[],i=!1;this.addMathTween=function(e){n.push(e),i||(i=!0,Render.start(t))},this.removeMathTween=function(e){var t=n.indexOf(e);t>-1&&n.splice(t,1)}}return _createClass(e,[{key:"tween",value:function(e,t,n,i,r,o,s){"number"!=typeof r&&(s=o,o=r,r=0);var a=null;"undefined"!=typeof Promise&&(a=Promise.create(),o&&a.then(o),o=a.resolve);var u="spring"===i?new SpringTween(e,t,n,i,r,s,o):new MathTween(e,t,n,i,r,s,o);return a||u}},{key:"clearTween",value:function(e){e.mathTween&&e.mathTween.stop()}},{key:"clearCSSTween",value:function(e){e.cssTween&&e.cssTween.stop()}},{key:"checkTransform",value:function(e){return this.TRANSFORMS.indexOf(e)>-1}},{key:"getEase",value:function(e){var t=this.CSS_EASES;return t[e]||t.easeOutCubic}},{key:"getAllTransforms",value:function(e){for(var t={},n=this.TRANSFORMS.length-1;n>-1;n--){var i=this.TRANSFORMS[n],r=e[i];0!==r&&"number"==typeof r&&(t[i]=r)}return t}},{key:"parseTransform",value:function(e){var t="";if(void 0!==e.x||void 0!==e.y||void 0!==e.z){var n="";n+=(e.x||0)+"px, ",n+=(e.y||0)+"px, ",t+="translate3d("+(n+=(e.z||0)+"px")+")"}return void 0!==e.scale?t+="scale("+e.scale+")":(void 0!==e.scaleX&&(t+="scaleX("+e.scaleX+")"),void 0!==e.scaleY&&(t+="scaleY("+e.scaleY+")")),void 0!==e.rotation&&(t+="rotate("+e.rotation+"deg)"),void 0!==e.rotationX&&(t+="rotateX("+e.rotationX+"deg)"),void 0!==e.rotationY&&(t+="rotateY("+e.rotationY+"deg)"),void 0!==e.rotationZ&&(t+="rotateZ("+e.rotationZ+"deg)"),void 0!==e.skewX&&(t+="skewX("+e.skewX+"deg)"),void 0!==e.skewY&&(t+="skewY("+e.skewY+"deg)"),void 0!==e.perspective&&(t+="perspective("+e.perspective+"px)"),t}}]),e}()),CSSTransition=function e(t,n,i,r,o,s){function a(){return!c||c.kill||!t||!t.element}function u(){a()||(c.kill=!0,t.element.style[Device.vendor("Transition")]="",t.cssTween=null)}_classCallCheck(this,e);var c=this,l=TweenManager.getAllTransforms(t),h=[];!function(){for(var e in n)TweenManager.checkTransform(e)?(l.use=!0,l[e]=n[e],delete n[e]):("number"==typeof n[e]||e.indexOf("-")>-1)&&h.push(e);l.use&&h.push(Device.transformProperty),delete l.use}(),function(){if(!a()){t.cssTween&&(t.cssTween.kill=!0),t.cssTween=c;for(var e="",f=0;f<h.length;f++)e+=(e.length?", ":"")+h[f]+" "+i+"ms "+TweenManager.getEase(r)+" "+o+"ms";Delayed(function(){a()||(t.element.style[Device.vendor("Transition")]=e,t.css(n),t.transform(l),Delayed(function(){a()||(u(),s&&s())},i+o))},50)}}(),this.stop=function(){return u()}},Interface=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",i=arguments[2];if(_classCallCheck(this,e),this.events=new EventManager,"string"!=typeof t)this.element=t;else{if(this.name=t,this.type=n,"svg"===this.type){var r=i||"svg";i=!0,this.element=document.createElementNS("http://www.w3.org/2000/svg",r),this.element.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink")}else this.element=document.createElement(this.type);"."!==t[0]?this.element.id=t:this.element.className=t.substr(1)}this.element.style.position="absolute",this.element.object=this,i||(window.Alien&&window.Alien.Stage?window.Alien.Stage:document.body).appendChild(this.element)}return _createClass(e,[{key:"initClass",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var r=new(Function.prototype.bind.apply(e,[null].concat(n)));return this.add(r),r}},{key:"clone",value:function(){return new e(this.element.cloneNode(!0))}},{key:"create",value:function(t,n){var i=new e(t,n);return this.add(i),i}},{key:"empty",value:function(){return this.element.innerHTML="",this}},{key:"add",value:function(e){return e.element?(this.element.appendChild(e.element),e.parent=this):e.nodeName&&this.element.appendChild(e),this}},{key:"remove",value:function(e){return e.element?e.destroy():e.nodeName&&e.parentNode.removeChild(e),this}},{key:"destroy",value:function(){this.loop&&Render.stop(this.loop),this.events=this.events.destroy(),this.removed=!0;var e=this.parent;return e&&!e.removed&&e.remove&&e.remove(this.element),Utils.nullObject(this)}},{key:"text",value:function(e){return void 0===e?this.element.textContent:(this.element.textContent=e,this)}},{key:"html",value:function(e){return void 0===e?this.element.innerHTML:(this.element.innerHTML=e,this)}},{key:"hide",value:function(){return this.element.style.display="none",this}},{key:"show",value:function(){return this.element.style.display="",this}},{key:"visible",value:function(){return this.element.style.visibility="visible",this}},{key:"invisible",value:function(){return this.element.style.visibility="hidden",this}},{key:"setZ",value:function(e){return this.element.style.zIndex=e,this}},{key:"clearAlpha",value:function(){return this.element.style.opacity="",this}},{key:"size",value:function(e,t){return void 0!==e&&(void 0===t&&(t=e),"string"==typeof e?("string"!=typeof t&&(t+="px"),this.element.style.width=e,this.element.style.height=t):(this.element.style.width=e+"px",this.element.style.height=t+"px",this.element.style.backgroundSize=e+"px "+t+"px")),this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this}},{key:"mouseEnabled",value:function(e){return this.element.style.pointerEvents=e?"auto":"none",this}},{key:"fontStyle",value:function(e,t,n,i){return this.css({fontFamily:e,fontSize:t,color:n,fontStyle:i}),this}},{key:"bg",value:function(e,t,n,i){return e.indexOf(".")>-1||e.indexOf("data:")>-1?this.element.style.backgroundImage="url("+e+")":this.element.style.backgroundColor=e,void 0!==t&&(t="number"==typeof t?t+"px":t,n="number"==typeof n?n+"px":n,this.element.style.backgroundPosition=t+" "+n),i&&(this.element.style.backgroundSize="",this.element.style.backgroundRepeat=i),"cover"!==t&&"contain"!==t||(this.element.style.backgroundSize=t,this.element.style.backgroundRepeat="no-repeat",this.element.style.backgroundPosition=void 0!==n?n+" "+i:"center"),this}},{key:"center",value:function(e,t,n){var i={};return void 0===e?(i.left="50%",i.top="50%",i.marginLeft=-this.width/2,i.marginTop=-this.height/2):(e&&(i.left="50%",i.marginLeft=-this.width/2),t&&(i.top="50%",i.marginTop=-this.height/2)),n&&(delete i.left,delete i.top),this.css(i),this}},{key:"mask",value:function(e){return this.element.style[Device.vendor("Mask")]=(e.indexOf(".")>-1?"url("+e+")":e)+" no-repeat",this.element.style[Device.vendor("MaskSize")]="contain",this}},{key:"blendMode",value:function(e,t){return this.element.style[t?"background-blend-mode":"mix-blend-mode"]=e,this}},{key:"css",value:function(e,t){if("object"!==(void 0===e?"undefined":_typeof(e))){if(t)return this.element.style[e]=t,this;var n=this.element.style[e];return"number"!=typeof n&&(n.indexOf("px")>-1&&(n=Number(n.slice(0,-2))),"opacity"===e&&(n=isNaN(Number(this.element.style.opacity))?1:Number(this.element.style.opacity))),n||(n=0),n}for(var i in e){var r=e[i];"string"!=typeof r&&"number"!=typeof r||("string"!=typeof r&&"opacity"!==i&&"zIndex"!==i&&(r+="px"),this.element.style[i]=r)}return this}},{key:"transform",value:function(e){if(e)for(var t in e)"number"==typeof e[t]&&(this[t]=e[t]);else e=this;return this.element.style[Device.vendor("Transform")]=TweenManager.parseTransform(e),this}},{key:"enable3D",value:function(e,t,n){return this.element.style[Device.vendor("TransformStyle")]="preserve-3d",e&&(this.element.style[Device.vendor("Perspective")]=e+"px"),void 0!==t&&(t="number"==typeof t?t+"px":t,n="number"==typeof n?n+"px":n,this.element.style[Device.vendor("PerspectiveOrigin")]=t+" "+n),this}},{key:"disable3D",value:function(){return this.element.style[Device.vendor("TransformStyle")]="",this.element.style[Device.vendor("Perspective")]="",this}},{key:"transformPoint",value:function(e,t,n){var i="";return void 0!==e&&(i+="number"==typeof e?e+"px ":e+" "),void 0!==t&&(i+="number"==typeof t?t+"px ":t+" "),void 0!==n&&(i+="number"==typeof n?n+"px":n),this.element.style[Device.vendor("TransformOrigin")]=i,this}},{key:"tween",value:function(e,t,n,i,r){"number"!=typeof i&&(r=i,i=0);var o=null;"undefined"!=typeof Promise&&(o=Promise.create(),r&&o.then(r),r=o.resolve);var s=new CSSTransition(this,e,t,n,i,r);return o||s}},{key:"clearTransform",value:function(){return"number"==typeof this.x&&(this.x=0),"number"==typeof this.y&&(this.y=0),"number"==typeof this.z&&(this.z=0),"number"==typeof this.scale&&(this.scale=1),"number"==typeof this.scaleX&&(this.scaleX=1),"number"==typeof this.scaleY&&(this.scaleY=1),"number"==typeof this.rotation&&(this.rotation=0),"number"==typeof this.rotationX&&(this.rotationX=0),"number"==typeof this.rotationY&&(this.rotationY=0),"number"==typeof this.rotationZ&&(this.rotationZ=0),"number"==typeof this.skewX&&(this.skewX=0),"number"==typeof this.skewY&&(this.skewY=0),this.element.style[Device.transformProperty]="",this}},{key:"stopTween",value:function(){return this.cssTween&&this.cssTween.stop(),this.mathTween&&this.mathTween.stop(),this}},{key:"attr",value:function(e,t){return void 0===t?this.element.getAttribute(e):(""===t?this.element.removeAttribute(e):this.element.setAttribute(e,t),this)}},{key:"svgSymbol",value:function(e,t,n){if("undefined"!=typeof SVGSymbol){var i=SVGSymbol.getConfig(e);this.html('<svg viewBox="0 0 '+i.width+" "+i.height+'" width="'+t+'" height="'+n+'"><use xlink:href="#'+i.id+'" x="0" y="0"/></svg>')}}},{key:"startRender",value:function(e){this.loop=e,Render.start(e)}},{key:"stopRender",value:function(e){this.loop=null,Render.stop(e)}},{key:"click",value:function(e){var t=this;return this.element.addEventListener("click",function(n){n.object="hit"===t.element.className?t.parent:t,n.action="click",e&&e(n)}),this.element.style.cursor="pointer",this}},{key:"hover",value:function(e){var t=this,n=function(n){n.object="hit"===t.element.className?t.parent:t,n.action="mouseout"===n.type?"out":"over",e&&e(n)};return this.element.addEventListener("mouseover",n),this.element.addEventListener("mouseout",n),this}},{key:"press",value:function(e){var t=this,n=function(n){n.object="hit"===t.element.className?t.parent:t,n.action="mousedown"===n.type?"down":"up",e&&e(n)};return this.element.addEventListener("mousedown",n),this.element.addEventListener("mouseup",n),this}},{key:"bind",value:function(e,t){return"touchstart"!==e||Device.mobile?"touchmove"!==e||Device.mobile?"touchend"!==e||Device.mobile||(e="mouseup"):e="mousemove":e="mousedown",this.element.addEventListener(e,t),this}},{key:"unbind",value:function(e,t){return"touchstart"!==e||Device.mobile?"touchmove"!==e||Device.mobile?"touchend"!==e||Device.mobile||(e="mouseup"):e="mousemove":e="mousedown",this.element.removeEventListener(e,t),this}},{key:"interact",value:function(e,t){return this.hit=this.create(".hit").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:99999}),Device.mobile?this.hit.touchClick(e,t):this.hit.hover(e).click(t),this}},{key:"touchClick",value:function(e,t){var n=this,i=void 0,r=void 0,o={},s={},a=function(e){var t=Utils.touchEvent(e);e.touchX=t.x,e.touchY=t.y,o.x=e.touchX,o.y=e.touchY};return this.element.addEventListener("touchmove",function(e){s=Utils.touchEvent(e),r=Utils.findDistance(o,s)>5},{passive:!0}),this.element.addEventListener("touchstart",function(t){i=Date.now(),t.action="over",t.object="hit"===n.element.className?n.parent:n,a(t),e&&!r&&e(t)},{passive:!0}),this.element.addEventListener("touchend",function(o){var s=Date.now();o.object="hit"===n.element.className?n.parent:n,a(o),i&&s-i<750&&t&&!r&&(o.action="click",t&&!r&&t(o)),e&&(o.action="out",e(o)),r=!1},{passive:!0}),this}},{key:"split",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={position:"relative",display:"block",width:"auto",height:"auto",margin:0,padding:0,cssFloat:"left"},n=[],i=this.text().split(e);this.empty();for(var r=0;r<i.length;r++)" "===i[r]&&(i[r]="&nbsp;"),n.push(this.create(".t","span").html(i[r]).css(t)),""!==e&&r<i.length-1&&n.push(this.create(".t","span").html(e).css(t));return n}}]),e}(),Images=new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"createImg",value:function(e,t){var n=new Image;return n.src=(Config.CDN||"")+e,n.onload=function(){t&&t()},n}},{key:"promise",value:function(e){var t=Promise.create();return e.onload=t.resolve,t}}]),e}()),XHR=new function e(){function t(e,n){if("object"===(void 0===n?"undefined":_typeof(n)))for(var r in n){var o=e+"["+r+"]";"object"===_typeof(n[r])?t(o,n[r]):i.push(o+"="+n[r])}else i.push(e+"="+n)}var n=this;_classCallCheck(this,e),this.headers={},this.options={};var i=[];this.get=function(e,r,o,s){if("function"==typeof r)s=o,o=r,r=null;else if("object"===(void 0===r?"undefined":_typeof(r))){for(var a in r)t(a,r[a]);r=(r=(r=i.join("&")).replace(/\[/g,"%5B")).replace(/\]/g,"%5D"),i=null,e+="?"+r}var u=new XMLHttpRequest;u.open("GET",e,!0),"arraybuffer"===s&&(u.responseType="arraybuffer"),"blob"===s&&(u.responseType="blob"),"text"===s&&u.overrideMimeType("text/plain"),"json"===s&&u.setRequestHeader("Accept","application/json");for(var c in n.headers)u.setRequestHeader(c,n.headers[c]);for(var l in n.options)u[l]=n.options[l];var h=null;return"undefined"!=typeof Promise&&(h=Promise.create(),o&&h.then(o),o=h.resolve),u.send(),u.onreadystatechange=function(){o&&(4===u.readyState&&200===u.status?o("arraybuffer"===s||"blob"===s?u.response:"text"===s?u.responseText:JSON.parse(u.responseText)):0!=u.status&&400!=u.status&&401!=u.status&&404!=u.status&&500!=u.status||(h?h.reject(u):o(u)))},h||u},this.post=function(e,r,o,s){if("function"==typeof r)s=o,o=r,r=null;else if("object"===(void 0===r?"undefined":_typeof(r)))if("json"===s)r=JSON.stringify(r);else{for(var a in r)t(a,r[a]);r=(r=(r=i.join("&")).replace(/\[/g,"%5B")).replace(/\]/g,"%5D"),i=null}var u=new XMLHttpRequest;u.open("POST",e,!0),"arraybuffer"===s&&(u.responseType="arraybuffer"),"blob"===s&&(u.responseType="blob"),"text"===s&&u.overrideMimeType("text/plain"),"json"===s&&u.setRequestHeader("Accept","application/json"),u.setRequestHeader("Content-Type","json"===s?"application/json":"application/x-www-form-urlencoded");for(var c in n.headers)u.setRequestHeader(c,n.headers[c]);for(var l in n.options)u[l]=n.options[l];var h=null;return"undefined"!=typeof Promise&&(h=Promise.create(),o&&h.then(o),o=h.resolve),u.send(),u.onreadystatechange=function(){o&&(4===u.readyState&&200===u.status?o("arraybuffer"===s||"blob"===s?u.response:"text"===s?u.responseText:JSON.parse(u.responseText)):0!=u.status&&400!=u.status&&401!=u.status&&404!=u.status&&500!=u.status||(h?h.reject(u):o(u)))},h||u}},AssetLoader=function e(t,n){function i(){a=++s/o,r.events.fire(Events.PROGRESS,{percent:a}),s===o&&(r.complete=!0,r.events.fire(Events.COMPLETE),n&&n())}_classCallCheck(this,e),Array.isArray(t)&&(t=t.map(function(e){return Utils.basename(e)}).reduce(function(e,n,i){return e[n]=t[i],e},{}));var r=this;this.events=new EventManager,this.CDN=Config.CDN||"";var o=Object.keys(t).length,s=0,a=0;for(var u in t)!function(e,t){var n=t.split("/"),r=(n=n[n.length-1]).split(".");switch(r[r.length-1].split("?")[0]){case"mp3":if("undefined"==typeof WebAudio)return i();if(!window.AudioContext)return i();XHR.get(t,function(t){WebAudio.createSound(e,t,i)},"arraybuffer");break;default:Images.createImg(t,i)}}(u,this.CDN+t[u])};AssetLoader.loadAssets=function(e,t){var n=Promise.create();return t||(t=n.resolve),new AssetLoader(e,t),n};var Stage=new(function(e){function t(){function e(){i.size(),Device.mobile&&(i.orientation=window.innerWidth>window.innerHeight?"landscape":"portrait")}_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Stage")),i=n,r=void 0;return i.css({overflow:"hidden"}),window.addEventListener("focus",function(){"focus"!==r&&(r="focus",window.events.fire(Events.BROWSER_FOCUS,{type:"focus"}))}),window.addEventListener("blur",function(){"blur"!==r&&(r="blur",window.events.fire(Events.BROWSER_FOCUS,{type:"blur"}))}),window.addEventListener("keydown",function(){return window.events.fire(Events.KEYBOARD_DOWN)}),window.addEventListener("keyup",function(){return window.events.fire(Events.KEYBOARD_UP)}),window.addEventListener("keypress",function(){return window.events.fire(Events.KEYBOARD_PRESS)}),window.addEventListener("resize",function(){return window.events.fire(Events.RESIZE)}),i.events.subscribe(Events.RESIZE,e),e(),n}return _inherits(t,Interface),t}());window.AudioContext||(window.AudioContext=window.webkitAudioContext||window.mozAudioContext||window.oAudioContext),"undefined"!=typeof Promise&&(Promise.create=function(){var e=void 0,t=void 0,n=new Promise(function(n,i){e=n,t=i});return n.resolve=e,n.reject=t,n}),window.getURL=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank";return window.open(e,t)},window.Delayed=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2];return window.setTimeout(function(){e&&e(n)},t)},window.Global||(window.Global={}),window.Config||(window.Config={}),Config.ASSETS=["assets/alienkitty.svg","assets/alienkitty_eyelid.svg"];var Main=function e(){function t(e){u.loaded&&("over"===e.action?c.tween({z:50},100,"easeOutCubic"):c.tween({z:0},300,"easeOutCubic"))}function n(e){getURL(e.object.url)}function i(){u.loaded=!0,l.bg("assets/alienkitty.svg"),h.bg("assets/alienkitty_eyelid.svg"),f.bg("assets/alienkitty_eyelid.svg"),Stage.events.fire(Events.COMPLETE)}function r(){u.playing=!0,c.tween({z:0},7e3,"easeOutCubic"),l.tween({opacity:1},500,"easeOutQuart"),o()}function o(){Delayed(Utils.headsTails(s,a),Utils.doRandom(0,1e4))}function s(){h.tween({scaleY:1.5},120,"easeOutCubic",function(){h.tween({scaleY:.01},180,"easeOutCubic")}),f.tween({scaleX:1.3,scaleY:1.3},120,"easeOutCubic",function(){f.tween({scaleX:1,scaleY:.01},180,"easeOutCubic",function(){o()})})}function a(){h.tween({scaleY:1.5},120,"easeOutCubic",function(){h.tween({scaleY:.01},180,"easeOutCubic")}),f.tween({scaleX:1.3,scaleY:1.3},180,"easeOutCubic",function(){f.tween({scaleX:1,scaleY:.01},240,"easeOutCubic",function(){o()})})}_classCallCheck(this,e);var u=this;this.playing=!1;var c=void 0,l=void 0,h=void 0,f=void 0;Stage.size(300,250).enable3D(2e3),(c=Stage.create(".wrapper")).size(90,86).center().transform({z:-300}).enable3D(),l=c.create(".alienkitty").size(90,86).css({opacity:0}),h=l.create(".eyelid1").size(24,14).css({left:35,top:25}).transformPoint("50%",0).transform({scaleX:1.5,scaleY:.01}),f=l.create(".eyelid2").size(24,14).css({left:53,top:26}).transformPoint(0,0).transform({scaleX:1,scaleY:.01}),Stage.url=window.clickTag,Stage.interact(t,n),new AssetLoader(Config.ASSETS).events.add(Events.COMPLETE,i),Stage.events.add(Events.COMPLETE,r)};new Main;
