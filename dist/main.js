!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";var r=function(){function e(e){this._m=e}return e.prototype.getFramework=function(){return this._m},e}();t.a=r},function(e,t,n){"use strict";function r(e){return new Promise((function(t,n){var r=window.SqueakJS;return r?r.runImage(void 0,e.component.element,e,t):n("no Squeak")}))}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){var n;e.primHandler.setWindowTitle=(n=e.primHandler.setWindowTitle&&e.primHandler.setWindowTitle.bind(e.primHandler),function(r){return t.ScratchSettings&&t.ScratchSettings.useNormalWindowTitle&&n?n(r):(e.parent.titleMap.set(e,e.pop().bytesAsString()),!0)})}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){function t(t,n){var r=e.pop(),o=e.pop(),a=e.pop(),i=e.ports.get(e.pop());return"write"===t&&i.write(String.fromCharCode(a.bytes.slice(o-1))),"read"===t&&i.read(r).then((function(e){var t=e.split("").map((function(e){return e.charCodeAt(0)}));a.bytes=a.bytes.slice(o-1).concat(t)})),!0}var n={primitiveSerialPortWriteByName:t.bind(null,"write"),primitiveSerialPortWrite:t.bind(null,"write"),primitiveSerialPortReadByName:t.bind(null,"read"),primitiveSerialPortRead:t.bind(null,"read")};e.primHandler.builtinModules.SerialPlugin=new Proxy(e.primHandler.builtinModules.SerialPlugin||{},{get:function(e,t){return n[t]||e[t]}})}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){Object.defineProperty(e,"argv",{get:function(){return t.get(e)},set:function(n){t.set(e,n)}})}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){Array.prototype.filter.call(e.childNodes,(function(e){return e.classList.includes("ol-inject")})).length||t()}function o(e){e.classList.add("ol-inject")}var a=function(){function e(e){this._ui=e}return e.prototype.listen=function(e){var t=new MutationObserver(this.mutated.bind(this));return t.observe(e,{attributes:!0,childList:!0,subtree:!0}),t.disconnect.bind(t)},e.prototype.olStartup=function(e){},e.prototype.ol_m_click=function(e,t){},e.prototype.mutated=function(e,t){var n=this._ui.Current;e.forEach((function(e){e.target;e.addedNodes.forEach((function(e){var t,a;e.classList.includes("osjs-window-icon")&&function(e,t){r(e,(function(){if(t){var n=document.createElement("span");e.appendChild(n),n.addEventListener("click",t.titleClickNative.bind(t,e)),o(n)}}))}(e,n),e.classList.includes("osjs-gui-box")&&(a=this,r(t=e,(function(){Array.prototype.filter.call(t.childNodes,(function(e){return e.classList.includes("osjs-gui-menubar")})).forEach((function(e){r(e,(function(){var t=document.createElement("span");t.innerText="ObjectLand",t.addEventListener("click",a.ol_m_click.bind(a,t)),e.appendChild(t),o(e)}))})),o(t)}))),e.className.includes("ol-rolly-injected")&&function(e,t){r(e,(function(){e.addEventListener("olStartup",t.olStartup.bind(t,e)),o(e)}))}(e,this)}))}))},e}();t.a=a},function(e,t,n){"use strict";function r(e,t,n){e.data.port.postMessage({postToWindow:{workerID:t,data:n}})}function o(e){var t=e.win,n=(e.workerMap,e.libs,e.chrome,e.callback);if(t.inGadgetHelper){new Map;t.addEventListener("message",(function(e){if("init"===e.data.type){r.bind(void 0,e);e.data.port.addEventListener("message",(function(t){if("addGadget"===t.data.type){var n=new Array(10).map((function(e){return String.fromCharCode(128*Math.random()+20)})).reduce((function(e,t){return e?e+t:t}));e.data.port.postMessage({postToWindow:{workerID:n,create:!0,url:t.data.data}});var r=new OffscreenCanvas(400,400),o=new MessageChannel;!function(e,t,n,r){t.addEventListener("message",(function(e){}))}(0,o.port1,0,e.data.port),e.data.port.postMessage({postToWindow:{workerID:n,data:{canvas:r,port:o.port2},transferables:[r,o.port2]},postToWindow_transferables:[r,o.port2]})}}))}}))}else{var o=new MessageChannel;t.postMessage({workerID:"GadgetHelper",data:{type:"init",port:o.port2},transferrables:[o.port2]},"*",[o.port2]),o.port1.addEventListener("message",(function(e){e.data.postToWindow&&t.postMessage(Object.assign({},e.data.postToWindow,{transferables:e.data.postToWindow_transferables}),"*",e.data.postToWindow_transferrables||[]),e.data.callBackLink&&n((function(t,n){return o.port1.postMessage({winCallback:e.data.callBackTag,data:t,transferables:n},n)}))})),t.addEventListener("message",(function(e){o.port1.postMessage({messageFromWindow:e.data},e.data.transferables)}))}}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},a=function(){function e(e,t,n){this._chrome=e,this._ui=t,this.opts=n}return e.prototype.initServices=function(){var e=this;return new Promise((function(t){e._chrome.storage.sync.get(["use"],(function(n){n.use||e._chrome.storage.sync.set({use:n.use=[]}),Promise.all(n.use.map((function(t){return new Promise((function(n){return e._chrome.runtime.connect(t,n)})).then((function(e){return{id:t,port:e}}))}))).then((function(e){t(e)}))}))}))},e.prototype.onSqueakLinked=function(e){return r(this,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t=this._chrome,[4,e.call("when:send:to:","jsCMessage","call:with:",(function(e){return r(this,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return[4,e.call("data")];case 1:return n=o.sent(),[4,new Promise((function(e){return t.runtime.postMessage(n,e)}))];case 2:return r=o.sent(),[4,e.call("reply:",r)];case 3:return[2,o.sent()]}}))}))}))];case 1:return n.sent(),[2]}}))}))},e}();t.a=a},function(e,t,n){"use strict";function r(e,t){return new Promise((function(n){var r,o,a=[new ReadableStream({start:function(e){return new Promise((function(t){r=e,o=t}))}}),new WritableStream({write:function(e){return Promise.resolve(r.enqueue(e))},close:function(){o()}})];if(!t)return n();t.get(e.location+"/settings/api/set",(function(e,t){e.body.pipeTo(a[1])})),t.get(e.location+"/settings/api/stream",(function(e,t){return new Response(a[0])})),t.get(e.location+"/init",(function(e,t){n(e)}))}))}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(7),r=n(0),o=n(1),a=n(5),i=n(8),s=n(4),u=n(6),c=n(2),d=n(3),l=window||self||e,p=l.chrome,f=l.olKAPI||(l.olKAPI={});f.addUI=function(e){r.a.Current=new r.a(e)};var m,b,g,w,h,v,y=!0,k=new Map,S=new Map,j=new Map,M=new a.a(r.a),O=new OffscreenCanvas(1e3,1e3);if(l.workerMap&&(k=l.workerMap,y=!1,delete l.workerMap,l.addEventListener("message",(function(e){if(e.data.workerID&&e.data.create){l.ol_w_set(e.data.workerID,new Worker(e.data.url))}else e.data.workerID&&k.get(e.data.workerID).postMessage(Object.assign({},e.data.data,{transferables:e.data.transferables}),e.data.transferrables)})),l.ol_w_set=function(e,t){k.set(e,t),t.addEventListener("message",(function(t){l.postMessage({responseID:e,data:t.data,transferables:t.data.transferables},"*",t.data.transferables)}))}),l.System&&l.System.amdDefine("ol.bridge",["exports"],(function(e){l.postMessage({type:"chrome",id:"lively-bridge-init",data:{}},"*")})),p&&(b=new t.a(p,r.a,{getSqueakProxy:function(){return g&&g.sProxy},getLink:function(){return M}})),!p&&l.document&&(Object(u.a)({win:l,workerMap:k,libs:S,chrome:void 0,callback:function(e){m=e}}),y=y&&l.isGadgetHelper),l.ServiceWorkerWare&&(w=new l.ServiceWorkerWare),l.require&&!w)try{w=l.require("express")()}catch(e){}l.document&&M.listen(document.body),l.location&&(l.location.hostname.includes("ol")||"chrome-extension"===l.location.protocol)&&(y=!0),y&&Object(o.a)({url:l.location.protocol+"//"+l.location.hostname+"/squeak/squeak.image",component:{element:{getContext:function(e){return l.document&&r.a.Current?r.a.Current.getFramework().$rootComponent.SqueakDisplay.element.getContext(e):f.getSqueakContext?f.getSqueakContext(e):O.getContext(e)}}}}).then((function(e){return f.onSqueakLinked?f.onSqueakLinked(e).then((function(t){return e})):e})).then((function(e){var t;Object(s.a)(e.primHandler.display,j),e.titleMap=new Map,Object(c.a)(e,l),Object(d.a)(e),e.builtinModules.ObjectLandKernelWebPlugin={getBody:function(n){return e.pop(),e.push(e.primHandler.makeStObject(h&&h.body,t)),!0},setJSClass:function(n){return e.push(t=e.pop()),!0},addPrimitive:function(t){var n,r,o=e.pop(),a=o.jsObject;return a||(e.push(o),a=e),(a.primHandler.loadedModules[n=e.primHandler.js_fromStObject(e.pop())]||a.primHandler.builtinModules[n]||(a.primHandler.loadedModules[n]={}))[e.primHandler.js_fromStObject(e.pop())]=(r=e.js_fromStBlock(e.pop()),function(e){var t=a.freeze();return r(a).then(t),!0}),e.push(e.pop()),!0},addProperty:function(n){var r,o,a=e.pop()-1,i=e.primHandler.js_fromStObject(e.pop(),t),s=e.primHandler.js_fromStObject(e.pop(),t);Object.defineProperty((r=e.pop()).pointers||r.bytes||r.words,-1===a?"sqClass":a,{get:function(){return i().then((function(e){return o=e})),o},set:function(e){s(e)}})},onMessage:function(n){return window.addEventListener("message",e.primHandler.js_fromStObject(e.pop(),t).bind(window,window.postMessage.bind(window))),e.push(!0),!0},runVM:function(n){var r=new Array(1).map(e.pop.bind(e)),a=e.freeze();return Object(o.a)(e.fromStObject(r[0])).then((function(n){Object.defineProperty(n,"parent",{get:function(){return e}}),a(),Object(d.a)(n),Object(c.a)(n,l),e.push(e.primHandler.makeStObject(n,t))})),!0},sendChromeMessage:function(n){var r=e.primHandler.js_fromStObject(e.pop(),t);if(p){var o=e.freeze();p.runtime.postMessage(r,(function(t){e.push(t),o()}))}return!0},onChromeMessage:function(n){var r=e.primHandler.js_fromStObject(e.pop(),t);return p&&p.runtime.onMessage.addListener(r),!0},get getServices(){return v?function(n){return e.pop(),e.push(e.push(e.primHandler.makeStObject(v,t))),!0}:function(e){return!1}},get kapiPrimitive(){return f.primitive.bind(f,e)}},e.on("load",(function(t){e,g=t,b&&b.onSqueakLinked(g.sProxy)}))})),Object(i.a)(l,w).then((function(e){e&&(h=e)})),b&&b.initServices().then((function(e){v=e})),l.addEventListener("message",(function(e){"exlinkgadget"===e.data.type&&m(Object.assign({},e.data.data,{transferables:e.data.transferables}),e.data.transferables),p&&e.data.id&&e.data.data&&"chrome"===e.data.type&&p.runtime.postMessage(Object.assign({},e.data.data,{isFromWebpage:!0,id:e.data.id}),(function(t){l.postMessage({chromeResponseID:e.data.id,chromeResponseData:t})})),m&&"gadget"===e.data.type&&m(e.data.data,e.data.transferables)}))}.call(this,n(10))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);