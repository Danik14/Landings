/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./rest1.jpg */ "./src/rest1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-kerning: auto;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\nhtml {\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\nul,\nol,\nli {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nh1,\np {\n  margin: 0;\n}\n\n.nav {\n  padding: 50px 15%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n}\n\nli {\n  display: inline-block;\n}\n\n.nav ul {\n  display: flex;\n  justify-content: space-around;\n  width: 35%;\n}\n\n.btn-nav {\n  cursor: pointer;\n}\n\n.header {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover; /* <------ */\n  background-repeat: no-repeat;\n  background-position: center center;\n  padding-bottom: 330px;\n  overflow: hidden;\n  position: relative;\n}\n\n.header:after {\n  content: \"\";\n  position: absolute;\n  top: 87.5%;\n  left: 0;\n  height: 100%;\n  width: 150%;\n  background: #f8f9fa;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n\n.slider {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  align-items: center;\n  margin: 250px 0 70px 0;\n  color: #fff;\n}\n\n.btn-slider {\n  border: 2px solid #fff;\n  padding: 15px;\n  font-size: 18px;\n  background: none;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.slider-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.slider h1 {\n  font-size: 70px;\n  margin: 0;\n  padding: 0;\n}\n\n.arrow {\n  cursor: pointer;\n}\n\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.brief {\n  padding: 40px 100px;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  flex-flow: row wrap;\n  padding-bottom: 20%;\n  overflow: hidden;\n  position: relative;\n  background-color: #f8f9fa;\n}\n\n.brief:after {\n  content: \"\";\n  position: absolute;\n  top: 74.5%;\n  left: 0;\n  height: 100%;\n  width: 150%;\n  background: #fff;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n\n.brief img {\n  width: 540px;\n  height: 343px;\n}\n\nhr {\n  border-top: 2px solid green;\n  width: 15%;\n}\n\n.info {\n  max-width: 40%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 20px;\n}\n\n.info h1 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 40px;\n}\n\n.info p {\n  color: #bbb;\n}\n\n.about {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 50px;\n}\n\n.about-text {\n  max-width: 40%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 10px;\n}\n\n.about-text p {\n  color: #bbb;\n}\n\n.about-text h1 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 40px;\n}\n\n.pictures img {\n  width: 350px;\n  height: 543px;\n  margin: 14px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kCAAkC;EAClC,mCAAmC;EACnC,kCAAkC;EAClC,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,SAAS;AACX;;AAEA;;;EAGE,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yDAAoC;EACpC,sBAAsB,EAAE,YAAY;EACpC,4BAA4B;EAC5B,kCAAkC;EAClC,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,gCAAgC;EAChC,6BAA6B;EAC7B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,gCAAgC;EAChC,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,sCAAsC;AACxC;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,6BAA6B;EAC7B,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,gCAAgC;EAChC,6BAA6B;EAC7B,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,4CAA4C;EAC5C,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,4CAA4C;EAC5C,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;AACd","sourcesContent":["* {\n  box-sizing: border-box;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-kerning: auto;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\nhtml {\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\nul,\nol,\nli {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nh1,\np {\n  margin: 0;\n}\n\n.nav {\n  padding: 50px 15%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n}\n\nli {\n  display: inline-block;\n}\n\n.nav ul {\n  display: flex;\n  justify-content: space-around;\n  width: 35%;\n}\n\n.btn-nav {\n  cursor: pointer;\n}\n\n.header {\n  background-image: url(\"./rest1.jpg\");\n  background-size: cover; /* <------ */\n  background-repeat: no-repeat;\n  background-position: center center;\n  padding-bottom: 330px;\n  overflow: hidden;\n  position: relative;\n}\n\n.header:after {\n  content: \"\";\n  position: absolute;\n  top: 87.5%;\n  left: 0;\n  height: 100%;\n  width: 150%;\n  background: #f8f9fa;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n\n.slider {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  align-items: center;\n  margin: 250px 0 70px 0;\n  color: #fff;\n}\n\n.btn-slider {\n  border: 2px solid #fff;\n  padding: 15px;\n  font-size: 18px;\n  background: none;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.slider-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.slider h1 {\n  font-size: 70px;\n  margin: 0;\n  padding: 0;\n}\n\n.arrow {\n  cursor: pointer;\n}\n\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.brief {\n  padding: 40px 100px;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  flex-flow: row wrap;\n  padding-bottom: 20%;\n  overflow: hidden;\n  position: relative;\n  background-color: #f8f9fa;\n}\n\n.brief:after {\n  content: \"\";\n  position: absolute;\n  top: 74.5%;\n  left: 0;\n  height: 100%;\n  width: 150%;\n  background: #fff;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n\n.brief img {\n  width: 540px;\n  height: 343px;\n}\n\nhr {\n  border-top: 2px solid green;\n  width: 15%;\n}\n\n.info {\n  max-width: 40%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 20px;\n}\n\n.info h1 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 40px;\n}\n\n.info p {\n  color: #bbb;\n}\n\n.about {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 50px;\n}\n\n.about-text {\n  max-width: 40%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 10px;\n}\n\n.about-text p {\n  color: #bbb;\n}\n\n.about-text h1 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 40px;\n}\n\n.pictures img {\n  width: 350px;\n  height: 543px;\n  margin: 14px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about1.jpg */ "./src/about1.jpg");
/* harmony import */ var _about2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about2.jpg */ "./src/about2.jpg");
/* harmony import */ var _about3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about3.jpg */ "./src/about3.jpg");




function text() {
  const text = document.createElement("div");
  const hr = document.createElement("hr");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerHTML = "Best & Good";
  p.innerHTML =
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.";

  text.appendChild(hr);
  text.appendChild(h1);
  text.appendChild(p);

  text.classList.add("about-text");

  return text;
}

function pictures() {
  const pictures = document.createElement("div");
  pictures.classList.add("pictures");

  const pic1 = new Image();
  const pic2 = new Image();
  const pic3 = new Image();

  pic1.src = _about1_jpg__WEBPACK_IMPORTED_MODULE_0__;
  pic2.src = _about2_jpg__WEBPACK_IMPORTED_MODULE_1__;
  pic3.src = _about3_jpg__WEBPACK_IMPORTED_MODULE_2__;

  pictures.appendChild(pic1);
  pictures.appendChild(pic2);
  pictures.appendChild(pic3);
  return pictures;
}

function About() {
  const about = document.createElement("div");
  about.classList.add("about");
  about.appendChild(text());
  about.appendChild(pictures());

  return about;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ "./src/brief.js":
/*!**********************!*\
  !*** ./src/brief.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _brief_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brief.jpg */ "./src/brief.jpg");


function info() {
  const info = document.createElement("div");
  info.classList.add("info");
  const hr = document.createElement("hr");
  const h1 = document.createElement("h1");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  h1.innerHTML = "The Restaurant";
  p1.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam illum amet.";
  p2.innerHTML =
    "Obcaecati nisi ipsum possimus necessitatibus tempore, illo id facere magni quisquam quam quaerat accusamus dolores?";
  info.appendChild(hr);
  info.appendChild(h1);
  info.appendChild(p1);
  info.appendChild(p2);
  return info;
}

function Brief() {
  const brief = document.createElement("div");
  const pic = new Image();
  pic.src = _brief_jpg__WEBPACK_IMPORTED_MODULE_0__;
  brief.classList.add("brief");
  brief.appendChild(pic);
  brief.appendChild(info());
  return brief;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brief);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/slider.js");


function ButtonNav() {
  const button = document.createElement("div");
  button.classList.add("btn-nav");

  return button;
}

function links() {
  const list = document.createElement("ul");
  const listOfNav = ["Home", "Recipes", "About", "News", "Contact"];
  for (let i = 0; i < 4; i++) {
    let listItem = document.createElement("li");
    let button = ButtonNav();

    button.innerHTML = listOfNav[i];
    listItem.appendChild(button);
    list.appendChild(listItem);
  }

  return list;
}

function logo() {
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML = "LOGO";
  return logo;
}

function nav() {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  nav.appendChild(logo());
  nav.appendChild(links());
  return nav;
}

function Header() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.appendChild(nav());
  header.appendChild((0,_slider__WEBPACK_IMPORTED_MODULE_0__["default"])());
  return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Home() {
  const home = document.createElement("div");
  home.innerHTML = "123";

  return home;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function arrow() {
  const arrow = document.createElement("div");
  arrow.classList.add("arrow");
  arrow.innerHTML = "123";
  arrow.addEventListener("click", () => {
    const header = document.getElementsByClassName("header")[0];
    header.style.backgroundImage =
      "url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
  });

  return arrow;
}

function button() {
  const button = document.createElement("div");
  button.classList.add("btn-slider");
  button.innerHTML = "GET STARTED";
  return button;
}

function dots() {
  const dots = document.createElement("ul");
  const dot = document.createElement("span");
  dot.classList.add("dot");
  for (let i = 0; i < 2; i++) {
    let dotItem = document.createElement("li");
    dotItem.append(dot);
    dots.appendChild(dotItem);
  }

  dots.classList.add("dots");
  return dots;
}

function sliderText() {
  const sliderText = document.createElement("div");
  sliderText.classList.add("slider-text");
  const text = document.createElement("h1");
  text.innerHTML = "Eat, Drinks at <br/> Carolina";
  sliderText.appendChild(text);
  sliderText.appendChild(button());

  return sliderText;
}

function slider() {
  const slider = document.createElement("div");
  slider.classList.add("slider");

  slider.appendChild(arrow());
  slider.appendChild(sliderText());
  slider.appendChild(arrow());

  return slider;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./src/about1.jpg":
/*!************************!*\
  !*** ./src/about1.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2692fba9b0eda3dbd213.jpg";

/***/ }),

/***/ "./src/about2.jpg":
/*!************************!*\
  !*** ./src/about2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "382ebbe16ef4652ced6d.jpg";

/***/ }),

/***/ "./src/about3.jpg":
/*!************************!*\
  !*** ./src/about3.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "690c647724b5e0cd9ef7.jpg";

/***/ }),

/***/ "./src/brief.jpg":
/*!***********************!*\
  !*** ./src/brief.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab71c80545d516299125.jpg";

/***/ }),

/***/ "./src/rest1.jpg":
/*!***********************!*\
  !*** ./src/rest1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31ac92ab8ca2d6d55091.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _brief__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brief */ "./src/brief.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






function Restaurant() {
  const body = document.getElementsByTagName("body")[0];

  body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
  body.appendChild((0,_brief__WEBPACK_IMPORTED_MODULE_2__["default"])());
  body.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])());
}

Restaurant();

console.log("Hello World!");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeER0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCMEI7QUFDSTtBQUNGO0FBQ0E7QUFDUDs7QUFFckI7QUFDQTs7QUFFQSxtQkFBbUIsbURBQU07QUFDekIsbUJBQW1CLGtEQUFLO0FBQ3hCLG1CQUFtQixrREFBSztBQUN4Qjs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYnJpZWYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2xpZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yZXN0MS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgZm9udC1rZXJuaW5nOiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCxcXG5vbCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdiB7XFxuICBwYWRkaW5nOiA1MHB4IDE1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMzUlO1xcbn1cXG5cXG4uYnRuLW5hdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDMzMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhlYWRlcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogODcuNSU7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDE1MCU7XFxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDI1MHB4IDAgNzBweCAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5idG4tc2xpZGVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5zbGlkZXItdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG59XFxuXFxuLnNsaWRlciBoMSB7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmFkZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5kb3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xcbn1cXG5cXG4uYnJpZWYge1xcbiAgcGFkZGluZzogNDBweCAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG59XFxuXFxuLmJyaWVmOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3NC41JTtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTUwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbn1cXG5cXG4uYnJpZWYgaW1nIHtcXG4gIHdpZHRoOiA1NDBweDtcXG4gIGhlaWdodDogMzQzcHg7XFxufVxcblxcbmhyIHtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmVlbjtcXG4gIHdpZHRoOiAxNSU7XFxufVxcblxcbi5pbmZvIHtcXG4gIG1heC13aWR0aDogNDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaW5mbyBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmluZm8gcCB7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmFib3V0LXRleHQge1xcbiAgbWF4LXdpZHRoOiA0MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5hYm91dC10ZXh0IHAge1xcbiAgY29sb3I6ICNiYmI7XFxufVxcblxcbi5hYm91dC10ZXh0IGgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ucGljdHVyZXMgaW1nIHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNTQzcHg7XFxuICBtYXJnaW46IDE0cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlEQUFvQztFQUNwQyxzQkFBc0IsRUFBRSxZQUFZO0VBQ3BDLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgZm9udC1rZXJuaW5nOiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCxcXG5vbCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdiB7XFxuICBwYWRkaW5nOiA1MHB4IDE1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMzUlO1xcbn1cXG5cXG4uYnRuLW5hdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL3Jlc3QxLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMzMwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGVhZGVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4Ny41JTtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTUwJTtcXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjUwcHggMCA3MHB4IDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJ0bi1zbGlkZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnNsaWRlci10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbn1cXG5cXG4uc2xpZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hcnJvdyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYWRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmRvdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XFxufVxcblxcbi5icmllZiB7XFxuICBwYWRkaW5nOiA0MHB4IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG4uYnJpZWY6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDc0LjUlO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XFxufVxcblxcbi5icmllZiBpbWcge1xcbiAgd2lkdGg6IDU0MHB4O1xcbiAgaGVpZ2h0OiAzNDNweDtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZWVuO1xcbiAgd2lkdGg6IDE1JTtcXG59XFxuXFxuLmluZm8ge1xcbiAgbWF4LXdpZHRoOiA0MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5pbmZvIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaW5mbyBwIHtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uYWJvdXQtdGV4dCB7XFxuICBtYXgtd2lkdGg6IDQwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFib3V0LXRleHQgcCB7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuXFxuLmFib3V0LXRleHQgaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5waWN0dXJlcyBpbWcge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiA1NDNweDtcXG4gIG1hcmdpbjogMTRweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhYm91dDEgZnJvbSBcIi4vYWJvdXQxLmpwZ1wiO1xuaW1wb3J0IGFib3V0MiBmcm9tIFwiLi9hYm91dDIuanBnXCI7XG5pbXBvcnQgYWJvdXQzIGZyb20gXCIuL2Fib3V0My5qcGdcIjtcblxuZnVuY3Rpb24gdGV4dCgpIHtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGgxLmlubmVySFRNTCA9IFwiQmVzdCAmIEdvb2RcIjtcbiAgcC5pbm5lckhUTUwgPVxuICAgIFwiRmFyIGZhciBhd2F5LCBiZWhpbmQgdGhlIHdvcmQgbW91bnRhaW5zLCBmYXIgZnJvbSB0aGUgY291bnRyaWVzIFZva2FsaWEgYW5kIENvbnNvbmFudGlhLCB0aGVyZSBsaXZlIHRoZSBibGluZCB0ZXh0cy4gU2VwYXJhdGVkIHRoZXkgbGl2ZSBpbiBCb29rbWFya3Nncm92ZSByaWdodCBhdCB0aGUgY29hc3Qgb2YgdGhlIFNlbWFudGljcywgYSBsYXJnZSBsYW5ndWFnZSBvY2Vhbi5cIjtcblxuICB0ZXh0LmFwcGVuZENoaWxkKGhyKTtcbiAgdGV4dC5hcHBlbmRDaGlsZChoMSk7XG4gIHRleHQuYXBwZW5kQ2hpbGQocCk7XG5cbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dFwiKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gcGljdHVyZXMoKSB7XG4gIGNvbnN0IHBpY3R1cmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGljdHVyZXMuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVzXCIpO1xuXG4gIGNvbnN0IHBpYzEgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgcGljMiA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBwaWMzID0gbmV3IEltYWdlKCk7XG5cbiAgcGljMS5zcmMgPSBhYm91dDE7XG4gIHBpYzIuc3JjID0gYWJvdXQyO1xuICBwaWMzLnNyYyA9IGFib3V0MztcblxuICBwaWN0dXJlcy5hcHBlbmRDaGlsZChwaWMxKTtcbiAgcGljdHVyZXMuYXBwZW5kQ2hpbGQocGljMik7XG4gIHBpY3R1cmVzLmFwcGVuZENoaWxkKHBpYzMpO1xuICByZXR1cm4gcGljdHVyZXM7XG59XG5cbmZ1bmN0aW9uIEFib3V0KCkge1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQodGV4dCgpKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQocGljdHVyZXMoKSk7XG5cbiAgcmV0dXJuIGFib3V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsImltcG9ydCBCcmllZlBpYyBmcm9tIFwiLi9icmllZi5qcGdcIjtcblxuZnVuY3Rpb24gaW5mbygpIHtcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBoMS5pbm5lckhUTUwgPSBcIlRoZSBSZXN0YXVyYW50XCI7XG4gIHAxLmlubmVySFRNTCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSXBzYSB1dCBlbmltIHF1YW0gbGFib3Jpb3NhbSBpbGx1bSBhbWV0LlwiO1xuICBwMi5pbm5lckhUTUwgPVxuICAgIFwiT2JjYWVjYXRpIG5pc2kgaXBzdW0gcG9zc2ltdXMgbmVjZXNzaXRhdGlidXMgdGVtcG9yZSwgaWxsbyBpZCBmYWNlcmUgbWFnbmkgcXVpc3F1YW0gcXVhbSBxdWFlcmF0IGFjY3VzYW11cyBkb2xvcmVzP1wiO1xuICBpbmZvLmFwcGVuZENoaWxkKGhyKTtcbiAgaW5mby5hcHBlbmRDaGlsZChoMSk7XG4gIGluZm8uYXBwZW5kQ2hpbGQocDEpO1xuICBpbmZvLmFwcGVuZENoaWxkKHAyKTtcbiAgcmV0dXJuIGluZm87XG59XG5cbmZ1bmN0aW9uIEJyaWVmKCkge1xuICBjb25zdCBicmllZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBpYyA9IG5ldyBJbWFnZSgpO1xuICBwaWMuc3JjID0gQnJpZWZQaWM7XG4gIGJyaWVmLmNsYXNzTGlzdC5hZGQoXCJicmllZlwiKTtcbiAgYnJpZWYuYXBwZW5kQ2hpbGQocGljKTtcbiAgYnJpZWYuYXBwZW5kQ2hpbGQoaW5mbygpKTtcbiAgcmV0dXJuIGJyaWVmO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCcmllZjtcbiIsImltcG9ydCBzbGlkZXIgZnJvbSBcIi4vc2xpZGVyXCI7XG5cbmZ1bmN0aW9uIEJ1dHRvbk5hdigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tbmF2XCIpO1xuXG4gIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIGxpbmtzKCkge1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBsaXN0T2ZOYXYgPSBbXCJIb21lXCIsIFwiUmVjaXBlc1wiLCBcIkFib3V0XCIsIFwiTmV3c1wiLCBcIkNvbnRhY3RcIl07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBidXR0b24gPSBCdXR0b25OYXYoKTtcblxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsaXN0T2ZOYXZbaV07XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfVxuXG4gIHJldHVybiBsaXN0O1xufVxuXG5mdW5jdGlvbiBsb2dvKCkge1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgbG9nby5pbm5lckhUTUwgPSBcIkxPR09cIjtcbiAgcmV0dXJuIGxvZ287XG59XG5cbmZ1bmN0aW9uIG5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGxvZ28oKSk7XG4gIG5hdi5hcHBlbmRDaGlsZChsaW5rcygpKTtcbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KCkpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2xpZGVyKCkpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5pbm5lckhUTUwgPSBcIjEyM1wiO1xuXG4gIHJldHVybiBob21lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiZnVuY3Rpb24gYXJyb3coKSB7XG4gIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93XCIpO1xuICBhcnJvdy5pbm5lckhUTUwgPSBcIjEyM1wiO1xuICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoZWFkZXJcIilbMF07XG4gICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcInVybCgnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvOTU4NTQ1L3BleGVscy1waG90by05NTg1NDUuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCcpXCI7XG4gIH0pO1xuXG4gIHJldHVybiBhcnJvdztcbn1cblxuZnVuY3Rpb24gYnV0dG9uKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1zbGlkZXJcIik7XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkdFVCBTVEFSVEVEXCI7XG4gIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIGRvdHMoKSB7XG4gIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkb3QuY2xhc3NMaXN0LmFkZChcImRvdFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICBsZXQgZG90SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBkb3RJdGVtLmFwcGVuZChkb3QpO1xuICAgIGRvdHMuYXBwZW5kQ2hpbGQoZG90SXRlbSk7XG4gIH1cblxuICBkb3RzLmNsYXNzTGlzdC5hZGQoXCJkb3RzXCIpO1xuICByZXR1cm4gZG90cztcbn1cblxuZnVuY3Rpb24gc2xpZGVyVGV4dCgpIHtcbiAgY29uc3Qgc2xpZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNsaWRlclRleHQuY2xhc3NMaXN0LmFkZChcInNsaWRlci10ZXh0XCIpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0ZXh0LmlubmVySFRNTCA9IFwiRWF0LCBEcmlua3MgYXQgPGJyLz4gQ2Fyb2xpbmFcIjtcbiAgc2xpZGVyVGV4dC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgc2xpZGVyVGV4dC5hcHBlbmRDaGlsZChidXR0b24oKSk7XG5cbiAgcmV0dXJuIHNsaWRlclRleHQ7XG59XG5cbmZ1bmN0aW9uIHNsaWRlcigpIHtcbiAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XG5cbiAgc2xpZGVyLmFwcGVuZENoaWxkKGFycm93KCkpO1xuICBzbGlkZXIuYXBwZW5kQ2hpbGQoc2xpZGVyVGV4dCgpKTtcbiAgc2xpZGVyLmFwcGVuZENoaWxkKGFycm93KCkpO1xuXG4gIHJldHVybiBzbGlkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNsaWRlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBCcmllZiBmcm9tIFwiLi9icmllZlwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50KCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKEJyaWVmKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKEFib3V0KCkpO1xufVxuXG5SZXN0YXVyYW50KCk7XG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQhXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9