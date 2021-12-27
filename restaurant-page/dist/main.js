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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./special1.jpg */ "./src/special1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./special2.jpg */ "./src/special2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./special3.jpg */ "./src/special3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-kerning: auto;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\nhtml {\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\nul,\nol,\nli {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nh1,\nh2,\np {\n  margin: 0;\n}\n\n.nav {\n  padding: 50px 15%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n}\n\nli {\n  display: inline-block;\n}\n\n.nav ul {\n  display: flex;\n  justify-content: space-around;\n  width: 35%;\n}\n\n.btn-nav {\n  cursor: pointer;\n}\n\n.header {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover; /* <------ */\n  background-repeat: no-repeat;\n  background-position: center center;\n  padding-bottom: 330px;\n  overflow: hidden;\n  position: relative;\n}\n\n.header:after {\n  content: \"\";\n  position: absolute;\n  top: 87.5%;\n  left: 0;\n  height: 100%;\n  width: 150%;\n  background: #f8f9fa;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n\n.slider {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  align-items: center;\n  margin: 250px 0 70px 0;\n  color: #fff;\n}\n\n.btn-slider {\n  border: 2px solid #fff;\n  padding: 15px;\n  font-size: 18px;\n  background: none;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.slider-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.slider h1 {\n  font-size: 70px;\n  margin: 0;\n  padding: 0;\n}\n\n.arrow {\n  cursor: pointer;\n}\n\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.brief {\n  padding: 40px 100px;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  flex-flow: row wrap;\n  padding-bottom: 20%;\n  overflow: hidden;\n  position: relative;\n  background-color: #f8f9fa;\n}\n\n.brief:after {\n  content: \"\";\n  position: absolute;\n  top: 74.5%;\n  left: 0;\n  height: 100%;\n  width: 150%;\n  background: #fff;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n\n.brief img {\n  width: 540px;\n  height: 343px;\n}\n\nhr {\n  border-top: 2px solid green;\n  width: 25%;\n}\n\n.info {\n  max-width: 40%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 20px;\n}\n\n.info h1 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 40px;\n}\n\n.info p {\n  color: #bbb;\n}\n\n.about {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 50px;\n}\n\n.about-text {\n  max-width: 40%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 10px;\n}\n\n.about-text p {\n  color: #bbb;\n}\n\n.about-text h1 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 40px;\n}\n\n.pictures img {\n  width: 350px;\n  height: 543px;\n  margin: 14px;\n}\n\n.special {\n  margin-top: 100px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 30px;\n  background-size: cover; /* <------ */\n  background-repeat: no-repeat;\n  background-position: center center;\n  padding-bottom: 330px;\n  overflow: hidden;\n  position: relative;\n}\n\n.special:after {\n  content: \"\";\n  position: absolute;\n  top: 87.5%;\n  left: 0;\n  height: 100%;\n  width: 150%;\n  background: #f8f9fa;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n\n.special-pictures ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  flex-flow: row wrap;\n}\n\n.special-pic {\n  width: 430px;\n  height: 690px;\n  background-size: cover; /* <------ */\n  background-repeat: no-repeat;\n  background-position: center center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  color: #fff;\n  padding: 0 30px;\n  gap: 15px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.special-pictures ul li:hover .special-pic,\n.special-pictures ul li:focus .special-pic {\n  -ms-transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  transform: scale(1.2);\n  zoom: 1.03;\n}\n\n.special-pictures ul li {\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.special-pic h1 {\n  font-size: 40px;\n}\n\n.special-pic p {\n  font-size: 20px;\n}\n\n.spic1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.spic2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.spic3 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.menu {\n  background-color: #f8f9fa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 30px;\n}\n\n.menu-items {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n}\n\n.menu-item {\n  width: 260px;\n  height: 260px;\n  border: 2px solid red;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  box-sizing: border-box;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-kerning: auto;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\nhtml {\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\nul,\nol,\nli {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nh1,\nh2,\np {\n  margin: 0;\n}\n\n.nav {\n  padding: 50px 15%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n}\n\nli {\n  display: inline-block;\n}\n\n.nav ul {\n  display: flex;\n  justify-content: space-around;\n  width: 35%;\n}\n\n.btn-nav {\n  cursor: pointer;\n}\n\n.header {\n  background-image: url(\"./rest1.jpg\");\n  background-size: cover; /* <------ */\n  background-repeat: no-repeat;\n  background-position: center center;\n  padding-bottom: 330px;\n  overflow: hidden;\n  position: relative;\n}\n\n.header:after {\n  content: \"\";\n  position: absolute;\n  top: 87.5%;\n  left: 0;\n  height: 100%;\n  width: 150%;\n  background: #f8f9fa;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n\n.slider {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  align-items: center;\n  margin: 250px 0 70px 0;\n  color: #fff;\n}\n\n.btn-slider {\n  border: 2px solid #fff;\n  padding: 15px;\n  font-size: 18px;\n  background: none;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.slider-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.slider h1 {\n  font-size: 70px;\n  margin: 0;\n  padding: 0;\n}\n\n.arrow {\n  cursor: pointer;\n}\n\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.brief {\n  padding: 40px 100px;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  flex-flow: row wrap;\n  padding-bottom: 20%;\n  overflow: hidden;\n  position: relative;\n  background-color: #f8f9fa;\n}\n\n.brief:after {\n  content: \"\";\n  position: absolute;\n  top: 74.5%;\n  left: 0;\n  height: 100%;\n  width: 150%;\n  background: #fff;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n\n.brief img {\n  width: 540px;\n  height: 343px;\n}\n\nhr {\n  border-top: 2px solid green;\n  width: 25%;\n}\n\n.info {\n  max-width: 40%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 20px;\n}\n\n.info h1 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 40px;\n}\n\n.info p {\n  color: #bbb;\n}\n\n.about {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 50px;\n}\n\n.about-text {\n  max-width: 40%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 10px;\n}\n\n.about-text p {\n  color: #bbb;\n}\n\n.about-text h1 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 40px;\n}\n\n.pictures img {\n  width: 350px;\n  height: 543px;\n  margin: 14px;\n}\n\n.special {\n  margin-top: 100px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 30px;\n  background-size: cover; /* <------ */\n  background-repeat: no-repeat;\n  background-position: center center;\n  padding-bottom: 330px;\n  overflow: hidden;\n  position: relative;\n}\n\n.special:after {\n  content: \"\";\n  position: absolute;\n  top: 87.5%;\n  left: 0;\n  height: 100%;\n  width: 150%;\n  background: #f8f9fa;\n  -webkit-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg);\n  transform: rotate(-6deg);\n}\n\n.special-pictures ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  flex-flow: row wrap;\n}\n\n.special-pic {\n  width: 430px;\n  height: 690px;\n  background-size: cover; /* <------ */\n  background-repeat: no-repeat;\n  background-position: center center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  color: #fff;\n  padding: 0 30px;\n  gap: 15px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.special-pictures ul li:hover .special-pic,\n.special-pictures ul li:focus .special-pic {\n  -ms-transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  transform: scale(1.2);\n  zoom: 1.03;\n}\n\n.special-pictures ul li {\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.special-pic h1 {\n  font-size: 40px;\n}\n\n.special-pic p {\n  font-size: 20px;\n}\n\n.spic1 {\n  background-image: url(\"./special1.jpg\");\n}\n\n.spic2 {\n  background-image: url(\"./special2.jpg\");\n}\n\n.spic3 {\n  background-image: url(\"./special3.jpg\");\n}\n\n.menu {\n  background-color: #f8f9fa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column wrap;\n  gap: 30px;\n}\n\n.menu-items {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n}\n\n.menu-item {\n  width: 260px;\n  height: 260px;\n  border: 2px solid red;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function text() {
  const text = document.createElement("div");
  const hr = document.createElement("hr");
  const h1 = document.createElement("h1");

  h1.innerHTML = "Best & Good";

  text.appendChild(hr);
  text.appendChild(h1);

  text.classList.add("menu-text");

  return text;
}

function items() {
  const items = document.createElement("div");
  items.classList.add("menu-items");
  const itemNames = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  const itemTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
  ];

  const itemPrices = [
    "$16.00",
    "$16.00",
    "$16.00",
    "$16.00",
    "$16.00",
    "$16.00",
    "$16.00",
    "$16.00",
  ];

  let flag = true;

  for (let i = 1; i < 17; i++) {
    //1 3 6 8 9 11 14 16
    const item = document.createElement("div");
    item.classList.add("menu-item");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const h2 = document.createElement("h2");

    h1.innerHTML = itemNames[i];
    p.innerHTML = itemTexts[i];
    h2.innerHTML = itemPrices[i];

    item.appendChild(h1);
    item.appendChild(p);
    item.appendChild(h2);

    items.appendChild(item);
  }

  return items;
}

function Menu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(text());
  menu.appendChild(items());

  return menu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


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

/***/ "./src/special.js":
/*!************************!*\
  !*** ./src/special.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _special1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./special1.jpg */ "./src/special1.jpg");
/* harmony import */ var _special2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./special2.jpg */ "./src/special2.jpg");
/* harmony import */ var _special3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special3.jpg */ "./src/special3.jpg");




function text() {
  const text = document.createElement("div");
  const hr = document.createElement("hr");
  const h1 = document.createElement("h1");

  h1.innerHTML = "Best & Good";

  text.appendChild(hr);
  text.appendChild(h1);

  text.classList.add("special-text");

  return text;
}

function picture() {}

function pictures() {
  const pictures = document.createElement("div");
  pictures.classList.add("special-pictures");
  const picturesList = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    const picture = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h1.innerHTML = "$12.59";
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    picture.classList.add("special-pic");
    picture.classList.add("spic" + (i + 1));
    picture.appendChild(h1);
    picture.appendChild(p);
    const li = document.createElement("li");
    li.appendChild(picture);
    picturesList.appendChild(li);
  }

  pictures.appendChild(picturesList);
  return pictures;
}

function Special() {
  const special = document.createElement("div");
  special.classList.add("special");

  special.appendChild(text());
  special.appendChild(pictures());

  return special;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Special);


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

/***/ }),

/***/ "./src/special1.jpg":
/*!**************************!*\
  !*** ./src/special1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf28b4f7b3d00e62faec.jpg";

/***/ }),

/***/ "./src/special2.jpg":
/*!**************************!*\
  !*** ./src/special2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee71fa350059463ee228.jpg";

/***/ }),

/***/ "./src/special3.jpg":
/*!**************************!*\
  !*** ./src/special3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf8795446c83e05d88bc.jpg";

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
/* harmony import */ var _special__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./special */ "./src/special.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _brief__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brief */ "./src/brief.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







function Restaurant() {
  const body = document.getElementsByTagName("body")[0];

  body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
  body.appendChild((0,_brief__WEBPACK_IMPORTED_MODULE_2__["default"])());
  body.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])());
  body.append((0,_special__WEBPACK_IMPORTED_MODULE_0__["default"])());
  body.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])());
}

Restaurant();

console.log("Hello World!");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLHNCQUFzQixhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLHNCQUFzQixhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxL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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEZwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEZ0I7QUFDQTtBQUNBOztBQUV0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3REdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJnQztBQUNGO0FBQ0Y7QUFDQTtBQUNGO0FBQ0w7O0FBRXJCO0FBQ0E7O0FBRUEsbUJBQW1CLG1EQUFNO0FBQ3pCLG1CQUFtQixrREFBSztBQUN4QixtQkFBbUIsa0RBQUs7QUFDeEIsY0FBYyxvREFBTztBQUNyQixtQkFBbUIsaURBQUk7QUFDdkI7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2JyaWVmLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3BlY2lhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcmVzdDEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9zcGVjaWFsMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3NwZWNpYWwyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vc3BlY2lhbDMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIGZvbnQta2VybmluZzogYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIENvbmRlbnNlZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxudWwsXFxub2wsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5uYXYge1xcbiAgcGFkZGluZzogNTBweCAxNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDM1JTtcXG59XFxuXFxuLmJ0bi1uYXYge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oZWFkZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDg3LjUlO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxNTAlO1xcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyNTBweCAwIDcwcHggMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYnRuLXNsaWRlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uc2xpZGVyLXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxufVxcblxcbi5zbGlkZXIgaDEge1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmFycm93IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZhZGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZG90IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXG59XFxuXFxuLmJyaWVmIHtcXG4gIHBhZGRpbmc6IDQwcHggMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxufVxcblxcbi5icmllZjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNzQuNSU7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDE1MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcXG59XFxuXFxuLmJyaWVmIGltZyB7XFxuICB3aWR0aDogNTQwcHg7XFxuICBoZWlnaHQ6IDM0M3B4O1xcbn1cXG5cXG5ociB7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgZ3JlZW47XFxuICB3aWR0aDogMjUlO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBtYXgtd2lkdGg6IDQwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmluZm8gaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5pbmZvIHAge1xcbiAgY29sb3I6ICNiYmI7XFxufVxcblxcbi5hYm91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5hYm91dC10ZXh0IHtcXG4gIG1heC13aWR0aDogNDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWJvdXQtdGV4dCBwIHtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG5cXG4uYWJvdXQtdGV4dCBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnBpY3R1cmVzIGltZyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDU0M3B4O1xcbiAgbWFyZ2luOiAxNHB4O1xcbn1cXG5cXG4uc3BlY2lhbCB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIGdhcDogMzBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDMzMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNwZWNpYWw6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDg3LjUlO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxNTAlO1xcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XFxufVxcblxcbi5zcGVjaWFsLXBpY3R1cmVzIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbn1cXG5cXG4uc3BlY2lhbC1waWMge1xcbiAgd2lkdGg6IDQzMHB4O1xcbiAgaGVpZ2h0OiA2OTBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIDwtLS0tLS0gKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG4gIGdhcDogMTVweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4uc3BlY2lhbC1waWN0dXJlcyB1bCBsaTpob3ZlciAuc3BlY2lhbC1waWMsXFxuLnNwZWNpYWwtcGljdHVyZXMgdWwgbGk6Zm9jdXMgLnNwZWNpYWwtcGljIHtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgem9vbTogMS4wMztcXG59XFxuXFxuLnNwZWNpYWwtcGljdHVyZXMgdWwgbGkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNwZWNpYWwtcGljIGgxIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnNwZWNpYWwtcGljIHAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc3BpYzEge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLnNwaWMyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbi5zcGljMyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG4ubWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5tZW51LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICB3aWR0aDogMjYwcHg7XFxuICBoZWlnaHQ6IDI2MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBOzs7RUFHRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlEQUFvQztFQUNwQyxzQkFBc0IsRUFBRSxZQUFZO0VBQ3BDLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdB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O0VBQ3pCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5REFBdUM7QUFDekM7O0FBRUE7RUFDRSx5REFBdUM7QUFDekM7O0FBRUE7RUFDRSx5REFBdUM7QUFDekM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgZm9udC1rZXJuaW5nOiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCxcXG5vbCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdiB7XFxuICBwYWRkaW5nOiA1MHB4IDE1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMzUlO1xcbn1cXG5cXG4uYnRuLW5hdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL3Jlc3QxLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMzMwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGVhZGVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4Ny41JTtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTUwJTtcXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjUwcHggMCA3MHB4IDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJ0bi1zbGlkZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnNsaWRlci10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbn1cXG5cXG4uc2xpZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hcnJvdyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mYWRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmRvdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XFxufVxcblxcbi5icmllZiB7XFxuICBwYWRkaW5nOiA0MHB4IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbn1cXG5cXG4uYnJpZWY6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDc0LjUlO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XFxufVxcblxcbi5icmllZiBpbWcge1xcbiAgd2lkdGg6IDU0MHB4O1xcbiAgaGVpZ2h0OiAzNDNweDtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZWVuO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuXFxuLmluZm8ge1xcbiAgbWF4LXdpZHRoOiA0MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5pbmZvIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uaW5mbyBwIHtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uYWJvdXQtdGV4dCB7XFxuICBtYXgtd2lkdGg6IDQwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFib3V0LXRleHQgcCB7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuXFxuLmFib3V0LXRleHQgaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5waWN0dXJlcyBpbWcge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiA1NDNweDtcXG4gIG1hcmdpbjogMTRweDtcXG59XFxuXFxuLnNwZWNpYWwge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBnYXA6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zcGVjaWFsOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4Ny41JTtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTUwJTtcXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xcbn1cXG5cXG4uc3BlY2lhbC1waWN0dXJlcyB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG59XFxuXFxuLnNwZWNpYWwtcGljIHtcXG4gIHdpZHRoOiA0MzBweDtcXG4gIGhlaWdodDogNjkwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBnYXA6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLnNwZWNpYWwtcGljdHVyZXMgdWwgbGk6aG92ZXIgLnNwZWNpYWwtcGljLFxcbi5zcGVjaWFsLXBpY3R1cmVzIHVsIGxpOmZvY3VzIC5zcGVjaWFsLXBpYyB7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIHpvb206IDEuMDM7XFxufVxcblxcbi5zcGVjaWFsLXBpY3R1cmVzIHVsIGxpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zcGVjaWFsLXBpYyBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5zcGVjaWFsLXBpYyBwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNwaWMxIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9zcGVjaWFsMS5qcGdcXFwiKTtcXG59XFxuXFxuLnNwaWMyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9zcGVjaWFsMi5qcGdcXFwiKTtcXG59XFxuXFxuLnNwaWMzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9zcGVjaWFsMy5qcGdcXFwiKTtcXG59XFxuXFxuLm1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgd2lkdGg6IDI2MHB4O1xcbiAgaGVpZ2h0OiAyNjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWJvdXQxIGZyb20gXCIuL2Fib3V0MS5qcGdcIjtcbmltcG9ydCBhYm91dDIgZnJvbSBcIi4vYWJvdXQyLmpwZ1wiO1xuaW1wb3J0IGFib3V0MyBmcm9tIFwiLi9hYm91dDMuanBnXCI7XG5cbmZ1bmN0aW9uIHRleHQoKSB7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBoMS5pbm5lckhUTUwgPSBcIkJlc3QgJiBHb29kXCI7XG4gIHAuaW5uZXJIVE1MID1cbiAgICBcIkZhciBmYXIgYXdheSwgYmVoaW5kIHRoZSB3b3JkIG1vdW50YWlucywgZmFyIGZyb20gdGhlIGNvdW50cmllcyBWb2thbGlhIGFuZCBDb25zb25hbnRpYSwgdGhlcmUgbGl2ZSB0aGUgYmxpbmQgdGV4dHMuIFNlcGFyYXRlZCB0aGV5IGxpdmUgaW4gQm9va21hcmtzZ3JvdmUgcmlnaHQgYXQgdGhlIGNvYXN0IG9mIHRoZSBTZW1hbnRpY3MsIGEgbGFyZ2UgbGFuZ3VhZ2Ugb2NlYW4uXCI7XG5cbiAgdGV4dC5hcHBlbmRDaGlsZChocik7XG4gIHRleHQuYXBwZW5kQ2hpbGQoaDEpO1xuICB0ZXh0LmFwcGVuZENoaWxkKHApO1xuXG4gIHRleHQuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHRcIik7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIHBpY3R1cmVzKCkge1xuICBjb25zdCBwaWN0dXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBpY3R1cmVzLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlc1wiKTtcblxuICBjb25zdCBwaWMxID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHBpYzIgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgcGljMyA9IG5ldyBJbWFnZSgpO1xuXG4gIHBpYzEuc3JjID0gYWJvdXQxO1xuICBwaWMyLnNyYyA9IGFib3V0MjtcbiAgcGljMy5zcmMgPSBhYm91dDM7XG5cbiAgcGljdHVyZXMuYXBwZW5kQ2hpbGQocGljMSk7XG4gIHBpY3R1cmVzLmFwcGVuZENoaWxkKHBpYzIpO1xuICBwaWN0dXJlcy5hcHBlbmRDaGlsZChwaWMzKTtcbiAgcmV0dXJuIHBpY3R1cmVzO1xufVxuXG5mdW5jdGlvbiBBYm91dCgpIHtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG4gIGFib3V0LmFwcGVuZENoaWxkKHRleHQoKSk7XG4gIGFib3V0LmFwcGVuZENoaWxkKHBpY3R1cmVzKCkpO1xuXG4gIHJldHVybiBhYm91dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iLCJpbXBvcnQgQnJpZWZQaWMgZnJvbSBcIi4vYnJpZWYuanBnXCI7XG5cbmZ1bmN0aW9uIGluZm8oKSB7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgaDEuaW5uZXJIVE1MID0gXCJUaGUgUmVzdGF1cmFudFwiO1xuICBwMS5pbm5lckhUTUwgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElwc2EgdXQgZW5pbSBxdWFtIGxhYm9yaW9zYW0gaWxsdW0gYW1ldC5cIjtcbiAgcDIuaW5uZXJIVE1MID1cbiAgICBcIk9iY2FlY2F0aSBuaXNpIGlwc3VtIHBvc3NpbXVzIG5lY2Vzc2l0YXRpYnVzIHRlbXBvcmUsIGlsbG8gaWQgZmFjZXJlIG1hZ25pIHF1aXNxdWFtIHF1YW0gcXVhZXJhdCBhY2N1c2FtdXMgZG9sb3Jlcz9cIjtcbiAgaW5mby5hcHBlbmRDaGlsZChocik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaDEpO1xuICBpbmZvLmFwcGVuZENoaWxkKHAxKTtcbiAgaW5mby5hcHBlbmRDaGlsZChwMik7XG4gIHJldHVybiBpbmZvO1xufVxuXG5mdW5jdGlvbiBCcmllZigpIHtcbiAgY29uc3QgYnJpZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwaWMgPSBuZXcgSW1hZ2UoKTtcbiAgcGljLnNyYyA9IEJyaWVmUGljO1xuICBicmllZi5jbGFzc0xpc3QuYWRkKFwiYnJpZWZcIik7XG4gIGJyaWVmLmFwcGVuZENoaWxkKHBpYyk7XG4gIGJyaWVmLmFwcGVuZENoaWxkKGluZm8oKSk7XG4gIHJldHVybiBicmllZjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJpZWY7XG4iLCJpbXBvcnQgc2xpZGVyIGZyb20gXCIuL3NsaWRlclwiO1xuXG5mdW5jdGlvbiBCdXR0b25OYXYoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuLW5hdlwiKTtcblxuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBsaW5rcygpIHtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgbGlzdE9mTmF2ID0gW1wiSG9tZVwiLCBcIlJlY2lwZXNcIiwgXCJBYm91dFwiLCBcIk5ld3NcIiwgXCJDb250YWN0XCJdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgYnV0dG9uID0gQnV0dG9uTmF2KCk7XG5cbiAgICBidXR0b24uaW5uZXJIVE1MID0gbGlzdE9mTmF2W2ldO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gbG9nbygpIHtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gIGxvZ28uaW5uZXJIVE1MID0gXCJMT0dPXCI7XG4gIHJldHVybiBsb2dvO1xufVxuXG5mdW5jdGlvbiBuYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChsb2dvKCkpO1xuICBuYXYuYXBwZW5kQ2hpbGQobGlua3MoKSk7XG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdigpKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNsaWRlcigpKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiZnVuY3Rpb24gdGV4dCgpIHtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICBoMS5pbm5lckhUTUwgPSBcIkJlc3QgJiBHb29kXCI7XG5cbiAgdGV4dC5hcHBlbmRDaGlsZChocik7XG4gIHRleHQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIHRleHQuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGV4dFwiKTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gaXRlbXMoKSB7XG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbXNcIik7XG4gIGNvbnN0IGl0ZW1OYW1lcyA9IFtcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxuICBdO1xuXG4gIGNvbnN0IGl0ZW1UZXh0cyA9IFtcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJcHNhIHV0IGVuaW0gcXVhbSBsYWJvcmlvc2FtLi4uXCIsXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSXBzYSB1dCBlbmltIHF1YW0gbGFib3Jpb3NhbS4uLlwiLFxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElwc2EgdXQgZW5pbSBxdWFtIGxhYm9yaW9zYW0uLi5cIixcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJcHNhIHV0IGVuaW0gcXVhbSBsYWJvcmlvc2FtLi4uXCIsXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSXBzYSB1dCBlbmltIHF1YW0gbGFib3Jpb3NhbS4uLlwiLFxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElwc2EgdXQgZW5pbSBxdWFtIGxhYm9yaW9zYW0uLi5cIixcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJcHNhIHV0IGVuaW0gcXVhbSBsYWJvcmlvc2FtLi4uXCIsXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSXBzYSB1dCBlbmltIHF1YW0gbGFib3Jpb3NhbS4uLlwiLFxuICBdO1xuXG4gIGNvbnN0IGl0ZW1QcmljZXMgPSBbXG4gICAgXCIkMTYuMDBcIixcbiAgICBcIiQxNi4wMFwiLFxuICAgIFwiJDE2LjAwXCIsXG4gICAgXCIkMTYuMDBcIixcbiAgICBcIiQxNi4wMFwiLFxuICAgIFwiJDE2LjAwXCIsXG4gICAgXCIkMTYuMDBcIixcbiAgICBcIiQxNi4wMFwiLFxuICBdO1xuXG4gIGxldCBmbGFnID0gdHJ1ZTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IDE3OyBpKyspIHtcbiAgICAvLzEgMyA2IDggOSAxMSAxNCAxNlxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgICBoMS5pbm5lckhUTUwgPSBpdGVtTmFtZXNbaV07XG4gICAgcC5pbm5lckhUTUwgPSBpdGVtVGV4dHNbaV07XG4gICAgaDIuaW5uZXJIVE1MID0gaXRlbVByaWNlc1tpXTtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQocCk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChoMik7XG5cbiAgICBpdGVtcy5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIHJldHVybiBpdGVtcztcbn1cblxuZnVuY3Rpb24gTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQodGV4dCgpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChpdGVtcygpKTtcblxuICByZXR1cm4gbWVudTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiIsImZ1bmN0aW9uIGFycm93KCkge1xuICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvd1wiKTtcbiAgYXJyb3cuaW5uZXJIVE1MID0gXCIxMjNcIjtcbiAgYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGVhZGVyXCIpWzBdO1xuICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgXCJ1cmwoJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzk1ODU0NS9wZXhlbHMtcGhvdG8tOTU4NTQ1LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjAnKVwiO1xuICB9KTtcblxuICByZXR1cm4gYXJyb3c7XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tc2xpZGVyXCIpO1xuICBidXR0b24uaW5uZXJIVE1MID0gXCJHRVQgU1RBUlRFRFwiO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBkb3RzKCkge1xuICBjb25zdCBkb3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZG90LmNsYXNzTGlzdC5hZGQoXCJkb3RcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgbGV0IGRvdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZG90SXRlbS5hcHBlbmQoZG90KTtcbiAgICBkb3RzLmFwcGVuZENoaWxkKGRvdEl0ZW0pO1xuICB9XG5cbiAgZG90cy5jbGFzc0xpc3QuYWRkKFwiZG90c1wiKTtcbiAgcmV0dXJuIGRvdHM7XG59XG5cbmZ1bmN0aW9uIHNsaWRlclRleHQoKSB7XG4gIGNvbnN0IHNsaWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzbGlkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItdGV4dFwiKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGV4dC5pbm5lckhUTUwgPSBcIkVhdCwgRHJpbmtzIGF0IDxici8+IENhcm9saW5hXCI7XG4gIHNsaWRlclRleHQuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIHNsaWRlclRleHQuYXBwZW5kQ2hpbGQoYnV0dG9uKCkpO1xuXG4gIHJldHVybiBzbGlkZXJUZXh0O1xufVxuXG5mdW5jdGlvbiBzbGlkZXIoKSB7XG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xuXG4gIHNsaWRlci5hcHBlbmRDaGlsZChhcnJvdygpKTtcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHNsaWRlclRleHQoKSk7XG4gIHNsaWRlci5hcHBlbmRDaGlsZChhcnJvdygpKTtcblxuICByZXR1cm4gc2xpZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzbGlkZXI7XG4iLCJpbXBvcnQgc3BlY2lhbDEgZnJvbSBcIi4vc3BlY2lhbDEuanBnXCI7XG5pbXBvcnQgc3BlY2lhbDIgZnJvbSBcIi4vc3BlY2lhbDIuanBnXCI7XG5pbXBvcnQgc3BlY2lhbDMgZnJvbSBcIi4vc3BlY2lhbDMuanBnXCI7XG5cbmZ1bmN0aW9uIHRleHQoKSB7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgaDEuaW5uZXJIVE1MID0gXCJCZXN0ICYgR29vZFwiO1xuXG4gIHRleHQuYXBwZW5kQ2hpbGQoaHIpO1xuICB0ZXh0LmFwcGVuZENoaWxkKGgxKTtcblxuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJzcGVjaWFsLXRleHRcIik7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIHBpY3R1cmUoKSB7fVxuXG5mdW5jdGlvbiBwaWN0dXJlcygpIHtcbiAgY29uc3QgcGljdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaWN0dXJlcy5jbGFzc0xpc3QuYWRkKFwic3BlY2lhbC1waWN0dXJlc1wiKTtcbiAgY29uc3QgcGljdHVyZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIiQxMi41OVwiO1xuICAgIHAuaW5uZXJIVE1MID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIjtcbiAgICBwaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJzcGVjaWFsLXBpY1wiKTtcbiAgICBwaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJzcGljXCIgKyAoaSArIDEpKTtcbiAgICBwaWN0dXJlLmFwcGVuZENoaWxkKGgxKTtcbiAgICBwaWN0dXJlLmFwcGVuZENoaWxkKHApO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmFwcGVuZENoaWxkKHBpY3R1cmUpO1xuICAgIHBpY3R1cmVzTGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cblxuICBwaWN0dXJlcy5hcHBlbmRDaGlsZChwaWN0dXJlc0xpc3QpO1xuICByZXR1cm4gcGljdHVyZXM7XG59XG5cbmZ1bmN0aW9uIFNwZWNpYWwoKSB7XG4gIGNvbnN0IHNwZWNpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzcGVjaWFsLmNsYXNzTGlzdC5hZGQoXCJzcGVjaWFsXCIpO1xuXG4gIHNwZWNpYWwuYXBwZW5kQ2hpbGQodGV4dCgpKTtcbiAgc3BlY2lhbC5hcHBlbmRDaGlsZChwaWN0dXJlcygpKTtcblxuICByZXR1cm4gc3BlY2lhbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlY2lhbDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFNwZWNpYWwgZnJvbSBcIi4vc3BlY2lhbFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBCcmllZiBmcm9tIFwiLi9icmllZlwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50KCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKEJyaWVmKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKEFib3V0KCkpO1xuICBib2R5LmFwcGVuZChTcGVjaWFsKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKE1lbnUoKSk7XG59XG5cblJlc3RhdXJhbnQoKTtcblxuY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZCFcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=