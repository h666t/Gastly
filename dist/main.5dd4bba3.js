parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IwUp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n='\n  #main {\n    position: absolute;\n    background: #392939;\n    width: 250px;\n    height: 250px;\n    border-radius: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%) scale(0.7);\n    top: 50%;\n    z-index: 1;\n    animation: move 2s infinite;\n  }\n\n  #backgroundDiv{\n    position: absolute;\n    background: #8b6283;\n    height: 400px;\n    width: 400px;\n    border-radius: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%) scale(0.7);\n    top: 50%;\n    filter: blur(50px);\n    animation: light 12s infinite alternate-reverse;\n  }\n\n\n  @media (min-width: 500px) {\n    #main {\n      transform: translateX(-50%) translateY(-50%) scale(1);\n      top: 50%;\n    }\n\n    #backgroundDiv {\n      transform: translateX(-50%) translateY(-50%) scale(1);\n    }\n  }\n  \n  #eyes {\n    position: absolute;\n    z-index: 5;\n    left: 50%;\n  }\n  \n  .eyePit {\n    border-bottom: 3px solid black;\n    width: 160px;\n    height: 102px;\n    border-radius: 50px/8px;\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    transform: translateX(-112%) translateY(20%) rotate(-148deg);\n    overflow: hidden;\n  }\n  \n  .eyePit::before {\n    content: "";\n    position: absolute;\n    width: 159px;\n    height: 110px;\n    background: white;\n    top: 45px;\n    border: 1px solid black;\n    transform: rotate(46deg);\n    border-radius: 50%;\n  }\n  \n  .leftEyePit::before {\n    box-shadow: inset -24px 16px 2px 5px rgba(0, 0, 0, 0.1);\n  }\n  \n  .rightEyePit::before {\n    box-shadow: inset 3px -11px 2px 1px rgba(0, 0, 0, 0.1);\n  }\n  \n  #mirror {\n    transform: rotateY(180deg);\n  }\n  \n  .eyeBall {\n    position: absolute;\n    width: 3px;\n    height: 10px;\n    background: black;\n    border-radius: 50%;\n    top: 120px;\n  }\n  \n  .leftEyeBall {\n    right: 40px;\n  }\n  \n  .rightEyeBall {\n    left: 40px;\n  }\n  \n  #mouthUp {\n    background: #de5239;\n    width: 165px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 120px;\n    border-radius: 50%;\n    z-index: 2;\n  }\n  \n  #mouthDown {\n    background: #392939;\n    width: 205px;\n    height: 100px;\n    top: 100px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    z-index: 4;\n    \n  }\n  \n  .tooth {\n    background: white;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    border: 1px solid black;\n    top: 152px;\n    z-index: 3;\n  }\n  \n  .tooth1st {\n    transform: rotate(60deg) skew(30deg);\n    left: 50px;\n  }\n  \n  .tooth2nd {\n    transform: rotate(240deg) skew(30deg);\n    right: 50px;\n  }\n  \n  @keyframes move {\n    0% {\n        transform: translateX(-50%) translateY(-50%) scale(0.7);\n    }\n    50% {\n        transform: translateX(-50%) translateY(-52%) scale(0.71);\n    }\n    100% {\n        transform: translateX(-50%) translateY(-50%) scale(0.7);\n    }\n  }\n  \n @keyframes light {\n   0% {\n    filter: blur(50px);\n    width:400px;\n    height:400px;\n   }\n   50%{\n    filter: blur(30px);\n    width:300px;\n    height:300px;\n   }\n   100% {\n    filter: blur(50px);\n    width:400px;\n    height:400px;\n   }\n }\n\n  @media (min-width: 500px) {\n    @keyframes move {\n      0% {\n        transform: translateX(-50%) translateY(-50%) scale(1);\n      }\n      50% {\n        transform: translateX(-50%) translateY(-52%) scale(1.05);\n      }\n      100% {\n        transform: translateX(-50%) translateY(-50%) scale(1);\n      }\n    }\n  }\n  ',t=n;exports.default=t;
},{}],"epB2":[function(require,module,exports) {
"use strict";var n=t(require("./style.js"));function t(n){return n&&n.__esModule?n:{default:n}}var e,u=$("#text"),i=$("<style>"),s=0,r=!1,a=50,o={init:function(){$("head").append(i),o.run(),o.blindEvents()},hash:{".stop":"pause",".continue":"continue",".slow":"slow",".normal":"normal",".fast":"fast"},blindEvents:function(){for(var n in o.hash)if(o.hash.hasOwnProperty(n)){var t=o.hash[n];$("".concat(n)).on("click",o[t])}},run:function(){u[0].innerText=n.default.substring(0,s),i[0].innerHTML=n.default.substring(0,s),s++,r=!0,$("#textDiv")[0].scrollTop=$("#textDiv")[0].scrollHeight,s<n.default.length?e=setTimeout(o.run,a):u[0].innerHTML=n.default},pause:function(){clearTimeout(e),r=!1},continue:function(){r||o.run()},slow:function(){o.pause(),a=100,o.run()},normal:function(){o.pause(),a=50,o.run()},fast:function(){o.pause(),a=0,o.run()}};o.init();
},{"./style.js":"IwUp"}]},{},["epB2"], null)
//# sourceMappingURL=main.5dd4bba3.js.map