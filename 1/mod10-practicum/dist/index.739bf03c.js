// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cVgJb":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appJs = require("./App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
let app = new (0, _appJsDefault.default)("#app");
app.render("#app");

},{"./App.js":"7bftq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bftq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customersJs = require("./components/Customers.js");
var _customersJsDefault = parcelHelpers.interopDefault(_customersJs);
var _dashboardJs = require("./components/Dashboard.js");
var _dashboardJsDefault = parcelHelpers.interopDefault(_dashboardJs);
var _goodsJs = require("./components/Goods.js");
var _goodsJsDefault = parcelHelpers.interopDefault(_goodsJs);
var _headerJs = require("./components/Header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _integrationsJs = require("./components/Integrations.js");
var _integrationsJsDefault = parcelHelpers.interopDefault(_integrationsJs);
var _navJs = require("./components/Nav.js");
var _navJsDefault = parcelHelpers.interopDefault(_navJs);
var _notFoundJs = require("./components/NotFound.js");
var _notFoundJsDefault = parcelHelpers.interopDefault(_notFoundJs);
var _ordersJs = require("./components/Orders.js");
var _ordersJsDefault = parcelHelpers.interopDefault(_ordersJs);
var _reportsJs = require("./components/Reports.js");
var _reportsJsDefault = parcelHelpers.interopDefault(_reportsJs);
class App {
    constructor(selector){
        this.root = document.querySelector(selector);
        this.pageUrl = "#dashboard";
        history.pushState(this.pageUrl, "", this.pageUrl);
    }
    clickPage(url) {
        this.pageUrl = url;
        history.pushState(this.pageUrl, "", this.pageUrl);
        this.render();
    }
    render(selector) {
        if (selector == undefined) selector = "#app";
        //if(!selector) {
        this.root = document.querySelector(selector);
        //}
        this.root.innerHTML = "";
        const header = new (0, _headerJsDefault.default)();
        this.root.appendChild(header.render());
        const options = {
            menuItems: [
                {
                    title: "Дашборд",
                    path: "dashboard",
                    feather: "home"
                },
                {
                    title: "Заказы",
                    path: "orders",
                    feather: "file"
                },
                {
                    title: "Товары",
                    path: "goods",
                    feather: "shopping-cart"
                },
                {
                    title: "Покупатели",
                    path: "customers",
                    feather: "users"
                },
                {
                    title: "Отчеты",
                    path: "reports",
                    feather: "bar-chart-2"
                },
                {
                    title: "Интеграции",
                    path: "integrations",
                    feather: "layers"
                }
            ]
        };
        const nav = new (0, _navJsDefault.default)(this, options);
        this.root.appendChild(nav.render());
        let component = new (0, _notFoundJsDefault.default)();
        switch(this.pageUrl.slice(1)){
            case "dashboard":
                component = new (0, _dashboardJsDefault.default)();
                break;
            case "orders":
                component = new (0, _ordersJsDefault.default)();
                break;
            case "goods":
                component = new (0, _goodsJsDefault.default)();
                break;
            case "customers":
                component = new (0, _customersJsDefault.default)();
                break;
            case "reports":
                component = new (0, _reportsJsDefault.default)();
                break;
            case "integrations":
                component = new (0, _integrationsJsDefault.default)();
                break;
        }
        this.root.appendChild(component.render());
        feather.replace({
            "aria-hidden": "true"
        });
    }
}
exports.default = App;

},{"./components/Customers.js":"b6ZvS","./components/Dashboard.js":"lJKS2","./components/Goods.js":"k0E6h","./components/Header.js":"a3BrM","./components/Integrations.js":"hPz4d","./components/Nav.js":"76cpD","./components/NotFound.js":"2DehO","./components/Orders.js":"jbu0M","./components/Reports.js":"lJ7pT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6ZvS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Customer {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML = `
            <div class="container-fluid">
            <div class="row">
        
        
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    
            <h2 id="customers">Покупатели</h2>
            <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                <tr>
                    <th scope="col">Номер</th>
                    <th scope="col">Покупатель</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Сумма заказа</th>
                    <th scope="col">Статус</th>
                </tr>
                </thead>
                <tbody>
                                  
                </tbody>
            </table>
            </div>
        
            </main>
            </div>
            </div>
            `;
        const targetElement = this.content.querySelector("table");
        fetch("http://localhost:5500/mock-api/customers.json").then((res)=>res.json()).then((res)=>{
            console.log(res);
            let items = "";
            res.forEach(({ id , name , data , amount , status  })=>{
                items += `
                <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${data}</td>
                        <td>${amount}</td>
                        <td>${status}</td>
                    </tr>
                `;
            });
            targetElement.innerHTML += items;
        });
    }
    render() {
        console.log("отрисовка Customer");
        return this.content;
    }
}
exports.default = Customer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lJKS2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Dashboard {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML = `<div class="container-fluid">
        <div class="row">
    
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1  id="dashboard" class="h2" >Панель управления</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">Поделиться</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Экспорт"</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                Текущая неделя
                </button>
            </div>
            </div>
    
            <canvas class="my-4 w-100" id="myChart" width="900" height="200"></canvas>
        </main>
            </div>
            </div>
            `;
        fetch("http://localhost:5500/mock-api/dashboard.json").then((res)=>res.json()).then((res)=>{
            console.log(res);
            const ctx = this.content.querySelector("#myChart");
            const myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: [
                        "понедельник",
                        "вторник",
                        "среда",
                        "четверг",
                        "пятница",
                        "суббота",
                        "воскресенье"
                    ],
                    datasets: [
                        {
                            data: res,
                            lineTension: 0,
                            backgroundColor: "transparent",
                            borderColor: "#007bff",
                            borderWidth: 4,
                            pointBackgroundColor: "#007bff"
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: false
                                }
                            }
                        ]
                    },
                    legend: {
                        display: false
                    }
                }
            });
        });
    }
    render() {
        console.log("отрисовка Dashboard");
        return this.content;
    }
}
exports.default = Dashboard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0E6h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Goods {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML = `
        <div class="container-fluid">
        <div class="row">
    
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <h2 id="goods">Товары</h2>
            <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                <tr>
                    <th scope="col">Артикул товара</th>
                    <th scope="col">Изображение</th>
                    <th scope="col">Название</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Количество</th>
                </tr>
                </thead>
                <tbody>
                                     
                </tbody>
            </table>
            </div>
            </main>
            </div>
            </div>
        `;
        const targetElement = this.content.querySelector("table");
        fetch("http://localhost:5500/mock-api/goods.json").then((res)=>res.json()).then((res)=>{
            console.log(res);
            let items = "";
            res.forEach(({ id , title , image , price  })=>{
                items += `
                <tr>
                        <td>${id}</td>
                        <td><img src=${image} width="100"></td>
                        <td>${title}</td>
                        <td>${price}</td>
                        <td>5</td>
                    </tr>
                `;
            });
            targetElement.innerHTML += items;
        });
    }
    render() {
        console.log("отрисовка Goods");
        return this.content;
    }
}
exports.default = Goods;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a3BrM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Header {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML = `<header class="navbar navbar-dark sticky-top bg-secondary flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Админчасть</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Поиск" aria-label="Search">
        <div class="navbar-nav">
        <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">Выйти</a>
        </div>
        </div>
    </header>`;
    }
    render() {
        console.log("отрисовка Header");
        return this.content;
    }
}
exports.default = Header;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hPz4d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Integrations {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML = `
        <div class="container-fluid">
        <div class="row">
    
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <h2 id="integrations">Интеграции</h2>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                   <button type="button" class="btn btn-sm btn-outline-secondary">Добавить интеграцию</button>
               </div>
        </div>
    
        </main>
        </div>
        </div>
        `;
    }
    render() {
        console.log("отрисовка Integrations");
        return this.content;
    }
}
exports.default = Integrations;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"76cpD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Nav {
    constructor(app, options){
        this.content = document.createElement("div");
        this.app = app;
        const liCollection = options.menuItems.map((item)=>{
            const li = document.createElement("li");
            li.classList.add("nav-item");
            const a = document.createElement("a");
            const span = document.createElement("span");
            span.setAttribute("data-feather", item.feather);
            a.appendChild(span);
            const text = document.createTextNode(item.title);
            a.appendChild(text);
            a.classList.add("nav-item");
            a.href = `#${item.path}`;
            a.setAttribute("data-path", item.path);
            a.addEventListener("click", (ev)=>{
                ev.preventDefault();
                this.app.clickPage("#" + ev.target.getAttribute("data-path"));
            });
            li.appendChild(a);
            return li;
        });
        this.content.innerHTML = `<div class="container-fluid">
        <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
            <ul class="nav flex-column">
            <!--<li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#dashboard">
                    <span data-feather="home"></span>
                    Дашборд
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#orders">
                    <span data-feather="file"></span>
                    Заказы
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#goods">
                    <span data-feather="shopping-cart"></span>
                    Товары
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#customers">
                    <span data-feather="users"></span>
                    Покупатели
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#reports">
                    <span data-feather="bar-chart-2"></span>
                    Отчёты
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#integrations">
                    <span data-feather="layers"></span>
                    Интеграции
                </a>
                </li>-->
            </ul>

            </div>
        </nav>
        </div>
        </div>
        `;
        const ul = this.content.querySelector("ul");
        liCollection.forEach((li)=>ul.appendChild(li));
    }
    render() {
        console.log("отрисовка Nav");
        return this.content;
    }
}
exports.default = Nav;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2DehO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NotFound {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML += `<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        
        <h2>Страница не найдена</h2>
        
        </div>
        </main>`;
    }
    render() {
        console.log("отрисовка NotFound");
        return this.content;
    }
}
exports.default = NotFound;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbu0M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Orders {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML = `
        <h2 id="orders">Заказы</h2>
            <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                <tr>
                    <th scope="col">Номер заказа</th>
                    <th scope="col">ФИО покупателя</th>
                    <th scope="col">Общая цена</th>
                    <th scope="col">Статус</th>
                </tr>
                </thead>
                <tbody>
                
                           
                </tbody>
            </table>
            </div>`;
        const targetElement = this.content.querySelector("table");
        fetch("http://localhost:5500/mock-api/orders.json").then((res)=>res.json()).then((res)=>{
            console.log(res);
            let items = "";
            res.forEach(({ id , name , amount , status  })=>{
                items += `
            <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${amount}</td>
                    <td>${status}</td>
                </tr>
            `;
            });
            targetElement.innerHTML += items;
        });
    }
    render() {
        console.log("отрисовка Orders");
        return this.content;
    }
}
exports.default = Orders;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJ7pT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Reports {
    constructor(){
        this.content = document.createElement("div");
        this.content.innerHTML = `
        <div class="container-fluid">
        <div class="row">
    
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <h2 id="reports">Отчёты</h2>
            <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                <tr>
                    <th scope="col">Номер</th>
                    <th scope="col">Название</th>
                    <th scope="col">Дата</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1001</td>
                    <td>random</td>
                    <td>data</td>
                </tr>
                <tr>
                    <td>1002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>         
                </tr>                                     
                </tbody>
            </table>
            </div>
            
            
        </main>
        </div>
        </div>
        `;
    }
    render() {
        console.log("отрисовка Reports");
        return this.content;
    }
}
exports.default = Reports;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cVgJb","ebWYT"], "ebWYT", "parcelRequire2e51")

//# sourceMappingURL=index.739bf03c.js.map
