!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var r=function(){function e(e){this._m=e}return e.prototype.getFramework=function(){return this._m},e}();t.a=r},function(e,t,n){"use strict";function r(e){return new Promise((function(t,n){var r=window.SqueakJS;return r?r.runImage(void 0,e.component.element,e,t):n("no Squeak")}))}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){Object.defineProperty(e,"argv",{get:function(){return t.get(e)},set:function(n){t.set(e,n)}})}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){Array.prototype.filter.call(e.childNodes,(function(e){return e.classList.includes("ol-inject")})).length||t()}function o(e){e.classList.add("ol-inject")}var a=function(){function e(e){this._ui=e}return e.prototype.listen=function(e){var t=new MutationObserver(this.mutated.bind(this));return t.observe(e,{attributes:!0,childList:!0,subtree:!0}),t.disconnect.bind(t)},e.prototype.olStartup=function(e){},e.prototype.ol_m_click=function(e,t){},e.prototype.mutated=function(e,t){var n=this._ui.Current;e.forEach((function(e){e.target;e.addedNodes.forEach((function(e){var t,a;e.classList.includes("osjs-window-icon")&&function(e,t){r(e,(function(){if(t){var n=document.createElement("span");e.appendChild(n),n.addEventListener("click",t.titleClickNative.bind(t,e)),o(n)}}))}(e,n),e.classList.includes("osjs-gui-box")&&(a=this,r(t=e,(function(){Array.prototype.filter.call(t.childNodes,(function(e){return e.classList.includes("osjs-gui-menubar")})).forEach((function(e){r(e,(function(){var t=document.createElement("span");t.innerText="ObjectLand",t.addEventListener("click",a.ol_m_click.bind(a,t)),e.appendChild(t),o(e)}))})),o(t)}))),e.className.includes("ol-rolly-injected")&&function(e,t){r(e,(function(){e.addEventListener("olStartup",t.olStartup.bind(t,e)),o(e)}))}(e,this)}))}))},e}();t.a=a},function(e,t,n){"use strict";var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},a=function(){function e(e,t,n){this._chrome=e,this._ui=t,this.opts=n}return e.prototype.initServices=function(){var e=this;return new Promise((function(t){e._chrome.storage.sync.get(["use"],(function(n){n.use||e._chrome.storage.sync.set({use:n.use=[]}),Promise.all(n.use.map((function(t){return new Promise((function(n){return e._chrome.runtime.connect(t,n)})).then((function(e){return{id:t,port:e}}))}))).then((function(e){t(e)}))}))}))},e.prototype.onSqueakLinked=function(e){return r(this,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t=this._chrome,[4,e.call("when:send:to:","jsCMessage","call:with:",(function(e){return r(this,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return[4,e.call("data")];case 1:return n=o.sent(),[4,new Promise((function(e){return t.runtime.postMessage(n,e)}))];case 2:return r=o.sent(),[4,e.call("reply:",r)];case 3:return[2,o.sent()]}}))}))}))];case 1:return n.sent(),[2]}}))}))},e}();t.a=a},function(e,t,n){"use strict";function r(e,t,n){e.data.port.postMessage({postToWindow:{workerID:t,data:n}})}function o(e){var t=e.win;e.workerMap,e.libs,e.chrome;if(t.inGadgetHelper){new Map;t.addEventListener("message",(function(e){if("init"===e.data.type){r.bind(void 0,e);e.data.port.addEventListener("message",(function(t){if("addGadget"===t.data.type){var n=new Array(10).map((function(e){return String.fromCharCode(128*Math.random()+20)})).reduce((function(e,t){return e?e+t:t}));e.data.port.postMessage({postToWindow:{workerID:n,create:!0,url:t.data.data}});var r=new OffscreenCanvas(400,400),o=new MessageChannel;!function(e,t,n,r){t.addEventListener("message",(function(e){}))}(0,o.port1,0,e.data.port),e.data.port.postMessage({postToWindow:{workerID:n,data:{canvas:r,port:o.port2},transferables:[r,o.port2]},postToWindow_transferables:[r,o.port2]})}}))}}))}else{var n=new MessageChannel;t.postMessage({workerID:"GadgetHelper",data:{type:"init",port:n.port2},transferrables:[n.port2]},"*",[n.port2]),n.port1.addEventListener("message",(function(e){e.data.postToWindow&&t.postMessage(Object.assign({},e.data.postToWindow,{transferables:e.data.postToWindow_transferables}),"*",e.data.postToWindow_transferrables||[])})),t.addEventListener("message",(function(e){n.port1.postMessage({messageFromWindow:e.data},e.data.transferables)}))}}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";function r(e,t){return new Promise((function(n){var r,o,a=[new ReadableStream({start:function(e){return new Promise((function(t){r=e,o=t}))}}),new WritableStream({write:function(e){return Promise.resolve(r.enqueue(e))},close:function(){o()}})];if(!t)return n();t.get(e.location+"/settings/api/set",(function(e,t){e.body.pipeTo(a[1])})),t.get(e.location+"/settings/api/stream",(function(e,t){return new Response(a[0])})),t.get(e.location+"/init",(function(e,t){n(e)}))}))}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(4),r=n(0),o=n(1),a=n(3),i=n(6),s=n(2),u=n(5),c=window||self||e,f=c.chrome,d=c.olKAPI||(c.olKAPI={});d.addUI=function(e){r.a.Current=new r.a(e)};var l,p,m,b,h,w=!0,v=new Map,g=new Map,y=new Map,k=new a.a(r.a),j=new OffscreenCanvas(1e3,1e3);if(c.workerMap&&(v=c.workerMap,w=!1,delete c.workerMap,c.addEventListener("message",(function(e){if(e.data.workerID&&e.data.create){c.ol_w_set(e.data.workerID,new Worker(e.data.url))}else e.data.workerID&&v.get(e.data.workerID).postMessage(Object.assign({},e.data.data,{transferables:e.data.transferables}),e.data.transferrables)})),c.ol_w_set=function(e,t){v.set(e,t),t.addEventListener("message",(function(t){c.postMessage({responseID:e,data:t.data,transferables:t.data.transferables},"*",t.data.transferables)}))}),c.System&&c.System.amdDefine("ol.bridge",[],(function(){return{}})),f&&(l=new t.a(f,r.a,{getSqueakProxy:function(){return p&&p.sProxy},getLink:function(){return k}})),!f&&c.document&&Object(u.a)({win:c,workerMap:v,libs:g,chrome:void 0}),c.ServiceWorkerWare&&(m=new c.ServiceWorkerWare),c.require&&!m)try{m=c.require("express")()}catch(e){}c.document&&k.listen(document.body),w&&Object(o.a)({url:c.location.protocol+"//"+c.location.hostname+"/squeak/squeak.image",component:{element:{getContext:function(e){return c.document&&r.a.Current?r.a.Current.getFramework().$rootComponent.SqueakDisplay.element.getContext(e):d.getSqueakContext?d.getSqueakContext(e):j.getContext(e)}}}}).then((function(e){return d.onSqueakLinked?d.onSqueakLinked(e).then((function(t){return e})):e})).then((function(e){var t;Object(s.a)(e.primHandler.display,y),e.builtinModules.ObjectLandKernelWebPlugin={getBody:function(n){e.pop(),e.push(e.primHandler.makeStObject(b&&b.body,t))},setJSClass:function(n){e.push(t=e.pop())},addPrimitive:function(t){var n,r,o=e.pop(),a=o.jsObject;a||(e.push(o),a=e),(a.primHandler.loadedModules[n=e.primHandler.js_fromStObject(e.pop())]||(a.primHandler.loadedModules[n]={}))[e.primHandler.js_fromStObject(e.pop())]=(r=e.ol_fromStBlock(e.pop()),function(e){var t=a.freeze();r(a).then(t)}),e.push(e.pop())},addProperty:function(n){var r,o,a=e.pop(),i=e.primHandler.js_fromStObject(e.pop(),t),s=e.primHandler.js_fromStObject(e.pop(),t);Object.defineProperty((r=e.pop()).pointers||r.bytes||r.words,a,{get:function(){return i().then((function(e){return o=e})),o},set:function(e){s(e)}})},runVM:function(n){var r=new Array(n).map(e.pop.bind(e));e.pop();var a=e.freeze();Object(o.a)(e.fromStObject(r[0])).then((function(n){a(),e.push(e.primHandler.makeStObject(n,t))}))},sendChromeMessage:function(t){var n=e.pop().jsObject;if(f){var r=e.freeze();f.runtime.postMessage(n,(function(t){e.push(t),r()}))}},get getServices(){return h?function(n){e.pop(),e.push(e.push(e.primHandler.makeStObject(h,t)))}:function(e){}},get kapiPrimitive(){return d.primitive.bind(d,e)}},e.on("load",(function(t){e,p=t,l&&l.onSqueakLinked(p.sProxy)}))})),Object(i.a)(c,m).then((function(e){e&&(b=e)})),l&&l.initServices().then((function(e){h=e}))}.call(this,n(8))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);