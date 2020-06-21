// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cssString = "\n  #main {\n    position: absolute;\n    background: #392939;\n    width: 250px;\n    height: 250px;\n    border-radius: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%) scale(0.7);\n    top: 50%;\n    z-index: 1;\n    animation: move 2s infinite;\n  }\n\n  #backgroundDiv{\n    position: absolute;\n    background: #8b6283;\n    height: 400px;\n    width: 400px;\n    border-radius: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%) scale(0.7);\n    top: 50%;\n    filter: blur(50px);\n    animation: light 12s infinite alternate-reverse;\n    animation: move 2s infinite;\n  }\n\n\n  @media (min-width: 500px) {\n    #main {\n      transform: translateX(-50%) translateY(-50%) scale(1);\n      top: 50%;\n    }\n\n    #backgroundDiv {\n      transform: translateX(-50%) translateY(-50%) scale(1);\n    }\n  }\n  \n  #eyes {\n    position: absolute;\n    z-index: 5;\n    left: 50%;\n  }\n  \n  .eyePit {\n    border-bottom: 3px solid black;\n    width: 160px;\n    height: 102px;\n    border-radius: 50px/8px;\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    transform: translateX(-112%) translateY(20%) rotate(-148deg);\n    overflow: hidden;\n  }\n  \n  .eyePit::before {\n    content: \"\";\n    position: absolute;\n    width: 159px;\n    height: 110px;\n    background: white;\n    top: 45px;\n    border: 1px solid black;\n    transform: rotate(46deg);\n    border-radius: 50%;\n  }\n  \n  .leftEyePit::before {\n    box-shadow: inset -24px 16px 2px 5px rgba(0, 0, 0, 0.1);\n  }\n  \n  .rightEyePit::before {\n    box-shadow: inset 3px -11px 2px 1px rgba(0, 0, 0, 0.1);\n  }\n  \n  #mirror {\n    transform: rotateY(180deg);\n  }\n  \n  .eyeBall {\n    position: absolute;\n    width: 3px;\n    height: 10px;\n    background: black;\n    border-radius: 50%;\n    top: 120px;\n  }\n  \n  .leftEyeBall {\n    right: 40px;\n  }\n  \n  .rightEyeBall {\n    left: 40px;\n  }\n  \n  #mouthUp {\n    background: #de5239;\n    width: 165px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 120px;\n    border-radius: 50%;\n    z-index: 2;\n  }\n  \n  #mouthDown {\n    background: #392939;\n    width: 205px;\n    height: 100px;\n    top: 100px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    z-index: 4;\n    \n  }\n  \n  .tooth {\n    background: white;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    border: 1px solid black;\n    top: 152px;\n    z-index: 3;\n  }\n  \n  .tooth1st {\n    transform: rotate(60deg) skew(30deg);\n    left: 50px;\n  }\n  \n  .tooth2nd {\n    transform: rotate(240deg) skew(30deg);\n    right: 50px;\n  }\n  \n  @keyframes move {\n    0% {\n        transform: translateX(-50%) translateY(-50%) scale(0.7);\n    }\n    50% {\n        transform: translateX(-50%) translateY(-52%) scale(0.71);\n    }\n    100% {\n        transform: translateX(-50%) translateY(-50%) scale(0.7);\n    }\n  }\n  \n @keyframes light {\n   0% {\n    filter: blur(50px);\n    width:400px;\n    height:400px;\n   }\n   50%{\n    filter: blur(30px);\n    width:300px;\n    height:300px;\n   }\n   100% {\n    filter: blur(50px);\n    width:400px;\n    height:400px;\n   }\n }\n\n  @media (min-width: 500px) {\n    @keyframes move {\n      0% {\n        transform: translateX(-50%) translateY(-50%) scale(1);\n      }\n      50% {\n        transform: translateX(-50%) translateY(-52%) scale(1.05);\n      }\n      100% {\n        transform: translateX(-50%) translateY(-50%) scale(1);\n      }\n    }\n  }\n  ";
var _default = cssString;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $text = $("#text");
var $style = $("<style>"); //实际使用的css,用于插入到head中

var i = 0; //与cssString比较，用于substring(0, i)

var t; //用于命名setTimeout 以便进行clearTimeout

var k = false; //用于判断是否在播放，若在播放，再点击则播放无效 默认false 播放时为true

var time = 50;
var player = {
  init: function init() {
    $("head").append($style);
    player.run();
    player.blindEvents();
  },
  hash: {
    ".stop": "pause",
    ".continue": "continue",
    ".slow": "slow",
    ".normal": "normal",
    ".fast": "fast"
  },
  blindEvents: function blindEvents() {
    for (var key in player["hash"]) {
      if (player.hash.hasOwnProperty(key)) {
        var value = player.hash[key];
        $("".concat(key)).on("click", player[value]);
      }
    }
  },
  run: function run() {
    $text[0].innerText = _style.default.substring(0, i);
    $style[0].innerHTML = _style.default.substring(0, i);
    i++; //往textDiv和head中写css

    k = true;
    $("#textDiv")[0].scrollTop = $("#textDiv")[0].scrollHeight; //往下滚动

    i < _style.default.length ? t = setTimeout(player.run, time) : //cssString没读完就继续读
    $text[0].innerHTML = _style.default; //cssString读完了就一直显示cssString，防止点击播放出现undefined
  },
  //使用setTimeout模拟setInterval 播放动画
  pause: function pause() {
    clearTimeout(t);
    k = false;
  },
  continue: function _continue() {
    k ? undefined : player.run();
  },
  slow: function slow() {
    player.pause();
    time = 100;
    player.run();
  },
  normal: function normal() {
    player.pause();
    time = 50;
    player.run();
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.run();
  }
};
player.init();
},{"./style.js":"style.js"}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57902" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map