/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    margin: 0;\n    background-color: #f7f0e9;\n    color: #333333;\n}\n#content {\n    transition: transform 0.3s ease;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    min-height: 100vh;\n}\n\n\n.banner-section {\n    padding: 20px;\n    text-align: center; /* Center everything in the banner */\n    position: relative;\n    overflow: hidden;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.banner-section h1 {\n    font-size: 5em;\n    font-weight: bold;\n    color: #d23f31;\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.6);\n    margin: 20px 0 ;\n    font-family: \"Lobster\", sans-serif;\n}\n\n/* Styling for the buttons */\n.banner-section button {\n    font-size: 1.3em;\n    padding: 5px 0;\n    margin: 0 10px;\n    background-color: transparent;\n    color: #FFFFFF; /*Button text color*/\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.3s, transform 0.3s, text-shadow 0.3s;\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.6);\n    letter-spacing: 1px;\n    border-bottom: 2px solid transparent;\n}\n\n.banner-section button:hover, .banner-section button:focus {\n    color: #d23f31;\n    border-bottom-color: #d23f31;\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\n}\n\n/* Main Section */\n.main-section {\n    position: relative;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    padding-top: 20px;\n}\n\n.main-section p {\n    color: #fff; /* White color for contrast */\n    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; /* Black outline for readability */\n    padding: 10px 20px;\n    font-size: 22px; /* Slightly smaller to reduce bulk */\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.8) 100%);\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n    margin-top: 20px;\n    max-width: calc(100% - 40px); /* Ensure padding doesn't push the width beyond its parent */\n    position: absolute;\n    top: 10%; /* Position slightly lower to give some top margin visually */\n    left: 50%;\n    transform: translateX(-50%); /* Center align the text */\n}\n\n\n/* Visit us section */\n.visitUs-section {\n    background-color: #e4dbd3;\n    color: #005766;\n    padding: 20px;\n    text-align: center;\n}\n\n.logo {\n    width: 150px;\n    height: auto;\n    display: block;\n    margin: 0 auto;\n}\n\n.visitUs-section h2 {\n    font-size: 2em;\n    margin: 5px 0;\n}\n\n.visitUs-section address {\n    font-size: 1.5em;\n}\n.visitUs-section h2, .visitUs-section address {\n    color: #005766;\n    font-family: 'Lobster', cursive;\n}\n\n/* Menu Section */\n\n.menu-section {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n        \"header header\"\n        \"tacos sides\"\n        \"tacos drinks\";\n    grid-template-rows: min-content auto auto;\n    gap: 15px; \n    background-size: cover;\n    border: 5px solid #c0a585;\n    background-color: #f4ecd8;\n    margin: 0px auto;\n    max-width: 900px;\n    box-shadow: 10px 8px 9px 6px rgba(0,0,0,0.1);\n}\n\n.menu-section h2 {\n    font-size: 49px;\n    font-weight: bold;\n    margin: 5px;\n    color: #d23f31;\n}\n\n.menu-section .side-prices {\n    color: #d23f31;\n    font-family: 'Open Sans', Arial, sans-serif;\n    font-size: 23px;\n    font-weight: bold;\n}\n.menu-section p {\n    font-size: 25px;\n    font-weight: bold;\n    line-height: 1.4;\n    margin: 10px;\n    color: #4e300b;\n}\n.menu-header {\n    grid-area: header;\n    text-align: center;\n    margin: 0;\n    max-width: 100%;\n    font-size: 45px;\n    color: #d23f31;\n}\n\n.tacos, .sides, .drinks {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 20px;\n    box-shadow: 2px 3px 6px 4px rgba(0,0,0,0.1);\n}\n\n.tacos {\n    grid-area: tacos;\n}\n\n.sides {\n    grid-area: sides;\n}\n\n.drinks {\n    grid-area: drinks;\n}\n\n.menu-background-wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    background-size: cover;\n    background-position: center;\n}\n/* Contact Section Styles */\n.contact-section {\n    background-color: #fff;\n    padding: 20px;\n    margin: 20px auto; \n    max-width: 800px;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n}\n\n.contact-header {\n    font-family: 'Lobster', cursive;\n    color: #d23f31;\n    margin-bottom: 15px;\n    font-size: 2.5em;\n    text-align: center;\n}\n.contact-info {\n    background-color: #f4f4f4;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n    margin: 20px auto;\n    max-width: 600px;\n    text-align: center;\n}\n\n.contact-info p {\n    font-size: 20px;\n    color: #333;\n    line-height: 1.6;\n    font-family: 'Arial', sans-serif;\n}\n\n.contact-info h1 {\n    font-size: 2.5em;\n    margin-bottom: 20px;\n    color: #d23f31;\n    text-shadow: 1px 1px 2px #aaa;\n}\n.contact-info p, .social-media-links img {\n    margin: 10px 0;\n    text-align: center;\n}\n\n.social-media-links {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\n.social-media-links img {\n    width: 55px;\n    cursor: pointer;\n    transition: transform 0.3s ease-in-out;\n}\n\n.social-media-links img:hover {\n    transform: scale(1.1);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/donLogo.webp":
/*!*********************************!*\
  !*** ./src/images/donLogo.webp ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/donLogo.webp\");\n\n//# sourceURL=webpack://my-restaurant/./src/images/donLogo.webp?");

/***/ }),

/***/ "./src/images/facebook.png":
/*!*********************************!*\
  !*** ./src/images/facebook.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/facebook.png\");\n\n//# sourceURL=webpack://my-restaurant/./src/images/facebook.png?");

/***/ }),

/***/ "./src/images/instagram.png":
/*!**********************************!*\
  !*** ./src/images/instagram.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/instagram.png\");\n\n//# sourceURL=webpack://my-restaurant/./src/images/instagram.png?");

/***/ }),

/***/ "./src/images/menu-background.webp":
/*!*****************************************!*\
  !*** ./src/images/menu-background.webp ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/menu-background.webp\");\n\n//# sourceURL=webpack://my-restaurant/./src/images/menu-background.webp?");

/***/ }),

/***/ "./src/images/paperbackground.webp":
/*!*****************************************!*\
  !*** ./src/images/paperbackground.webp ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/paperbackground.webp\");\n\n//# sourceURL=webpack://my-restaurant/./src/images/paperbackground.webp?");

/***/ }),

/***/ "./src/images/tacoPlate.jpg":
/*!**********************************!*\
  !*** ./src/images/tacoPlate.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/tacoPlate.jpg\");\n\n//# sourceURL=webpack://my-restaurant/./src/images/tacoPlate.jpg?");

/***/ }),

/***/ "./src/images/woodBackground.jpg":
/*!***************************************!*\
  !*** ./src/images/woodBackground.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/woodBackground.jpg\");\n\n//# sourceURL=webpack://my-restaurant/./src/images/woodBackground.jpg?");

/***/ }),

/***/ "./src/images/youtube.png":
/*!********************************!*\
  !*** ./src/images/youtube.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/youtube.png\");\n\n//# sourceURL=webpack://my-restaurant/./src/images/youtube.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/banner.js":
/*!***********************!*\
  !*** ./src/banner.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_woodBackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/woodBackground.jpg */ \"./src/images/woodBackground.jpg\");\n\n\nconst createBannerSection = () => {\n    const banner = document.createElement('div');\n    banner.classList.add('banner-section');\n\n    banner.style.backgroundImage = `url('${_images_woodBackground_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}')`;\n    \n    const restaurantName = document.createElement('h1');\n    restaurantName.textContent = 'Taqueria Don Luis';\n    banner.appendChild(restaurantName);\n\n    // Navigation button container\n    const navContainer = document.createElement('div');\n    navContainer.classList.add('nav-container');\n\n    // Home button\n    const homeButton = document.createElement('button');\n    homeButton.textContent = 'Home'\n    homeButton.setAttribute('data-tab', 'home');\n\n    // Menu button \n    const menuButton = document.createElement('button');\n    menuButton.textContent = 'Menu';\n    menuButton.setAttribute('data-tab', 'menu');\n\n    // Contact button\n    const contactButton = document.createElement('button');\n    contactButton.textContent = 'Contact Us';\n    contactButton.setAttribute('data-tab', 'contact');\n\n    navContainer.append(homeButton, menuButton, contactButton);\n    banner.appendChild(navContainer); // Append the navContainer to the banner\n    return banner;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBannerSection);\n\n//# sourceURL=webpack://my-restaurant/./src/banner.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ \"./src/banner.js\");\n/* harmony import */ var _visitUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitUs */ \"./src/visitUs.js\");\n/* harmony import */ var _images_instagram_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/instagram.png */ \"./src/images/instagram.png\");\n/* harmony import */ var _images_facebook_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/facebook.png */ \"./src/images/facebook.png\");\n/* harmony import */ var _images_youtube_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/youtube.png */ \"./src/images/youtube.png\");\n\n\n\n\n\n\nconst loadContact = () => {\n    const content = document.getElementById('content');\n    content.innerHTML = ''; // Clear current content\n    content.appendChild((0,_banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n    const contactContainer = document.createElement('div');\n    contactContainer.className = 'contact-section';\n\n    const contactHeader = document.createElement('h1');\n    contactHeader.textContent = 'Contact and Follow us';\n    contactHeader.className = 'contact-header';\n    contactContainer.appendChild(contactHeader);\n\n    const contactInfo = document.createElement('div');\n    contactInfo.className = 'contact-info';\n    contactInfo.innerHTML = `\n        <p>Phone: 773-555-5555</p>\n        <p>Email: contact@taqueriaDonLuis.com</p>\n        <p>Address: 742 Evergreen Terrace, Springfield</p>\n    `;\n    contactContainer.appendChild(contactInfo);\n\n    // Create a div for solcial media logos\n    const socialMediaDiv = document.createElement('div');\n    socialMediaDiv.className = 'social-media-links';\n    contactContainer.appendChild(socialMediaDiv);\n\n    // Add IG logo\n    const instagramLogo = document.createElement('img');\n    instagramLogo.src = _images_instagram_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    instagramLogo.alt = 'Follow us on Instagram';\n    socialMediaDiv.appendChild(instagramLogo);\n\n    // Add the Facebook logo\n    const facebookLogo = document.createElement('img');\n    facebookLogo.src = _images_facebook_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    facebookLogo.alt = 'Follow us on Facebook';\n    socialMediaDiv.appendChild(facebookLogo);\n\n    // Add the YouTube logo\n    const youTubeLogo = document.createElement('img');\n    youTubeLogo.src = _images_youtube_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n    youTubeLogo.alt = 'Follow us on YouTube';\n    socialMediaDiv.appendChild(youTubeLogo);\n\n    content.appendChild(contactContainer);\n    content.appendChild((0,_visitUs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://my-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ \"./src/banner.js\");\n/* harmony import */ var _visitUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitUs */ \"./src/visitUs.js\");\n/* harmony import */ var _images_tacoPlate_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/tacoPlate.jpg */ \"./src/images/tacoPlate.jpg\");\n\n\n\n\nconst createMainSection = () => {\n    const main = document.createElement('div');\n    main.classList.add('main-section');\n\n    // main.style.border = '10px solid transparent';\n    // main.style.borderImage = `url('${woodBorderImage}') 30 round`;\n\n\n    main.style.backgroundImage = `url('${_images_tacoPlate_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}')`;\n\n    const intro = document.createElement('p');\n    intro.textContent = 'Welcome to our taqueria! We use the best local ingrediants to make your food fresh daily!';    \n    main.appendChild(intro);\n    \n    return main;\n};\n\n\nconst loadHome = () => {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    content.appendChild((0,_banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    content.appendChild(createMainSection());\n    content.appendChild((0,_visitUs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n};\n    \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://my-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst content = document.getElementById('content');\n\nconst tabHandlers = {\n    home: _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \n    menu: _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \n    contact: _contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n};\n\nconst clearContent = () => {\n    content.innerHTML = '';\n};\n\nconst handleTabClick = (event) => {\n    const tabName = event.target.getAttribute('data-tab');\n    if (tabName && typeof tabHandlers[tabName] === 'function') {\n        clearContent();\n        tabHandlers[tabName]();\n    }\n};\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    content.addEventListener('click', handleTabClick);\n});\n\n//# sourceURL=webpack://my-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ \"./src/banner.js\");\n/* harmony import */ var _visitUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitUs */ \"./src/visitUs.js\");\n/* harmony import */ var _images_paperbackground_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/paperbackground.webp */ \"./src/images/paperbackground.webp\");\n/* harmony import */ var _images_menu_background_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu-background.webp */ \"./src/images/menu-background.webp\");\n\n\n\n\n\n// Menu data structure \nconst menuItems = {\n    tacos: [\n        { name: 'Prime Steak', price: 7.10 },\n        { name: 'Carne Asada', price: 4.20 },\n        { name: 'Pork Al Pastor', price: 4.20 },\n    ],\n    drinks: [\n        { name: 'Limon'},\n        { name: 'Jamaica'},\n        { name: 'Horchata'},\n    ],\n    sides: [\n        { name: 'Frijoles/Beans'},\n        { name: 'Arroz/Spanish Rice'},\n        { name: 'Tortilla Chips & Salsa'},\n    ],\n};\n\n// Helper function to create a menu item\nconst createMenuItemWithPrices = (itemName, price) => {\n    const item = document.createElement('p');\n    item.textContent = `${itemName} - $${price.toFixed(2)}`;\n    return item;\n};\n\n// Helper function to create a menu item w/o prices\nconst createMenuItem = (itemName) => {\n    const item = document.createElement('p');\n    item.textContent = itemName;\n    return item;\n};\n\n// Helper function to create menu section\nconst createMenuSection = (sectionTitle, items) => {\n    const sectionDiv = document.createElement('div');\n    sectionDiv.className = `${sectionTitle.toLowerCase()}`;\n\n    const header = document.createElement('h2');\n    header.textContent = sectionTitle;\n    sectionDiv.appendChild(header);\n\n    if (sectionTitle === 'Sides') {\n        const sidePrices = document.createElement('p');\n        sidePrices.className = 'side-prices';\n        sidePrices.textContent = '$3.00 per side';\n        sectionDiv.appendChild(sidePrices);\n    } else if (sectionTitle === 'Drinks') {\n        const drinkPrices = document.createElement('p');\n        drinkPrices.className = 'side-prices'\n        drinkPrices.textContent = 'Small: $3.00 | Large: $5.00'\n        sectionDiv.appendChild(drinkPrices);\n    }\n\n    items.forEach(item => {\n        if (item.price) {\n            sectionDiv.appendChild(createMenuItemWithPrices(item.name, item.price));\n        } else {\n            sectionDiv.appendChild(createMenuItem(item.name));\n        }\n    });\n\n    return sectionDiv;\n};\n\n// Main function to load the menu\nconst loadMenu = () => {\n    const content = document.getElementById('content');\n    content.innerHTML = ''; // Clear existing content    \n    \n    content.appendChild((0,_banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n    const menuBackgroundWrapper = document.createElement('div');\n    menuBackgroundWrapper.className = 'menu-background-wrapper';\n    menuBackgroundWrapper.style.backgroundImage = `url('${_images_menu_background_webp__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}')`;\n\n    const menuContainer = document.createElement('div');\n    menuContainer.className = 'menu-section';\n    menuContainer.style.backgroundImage = `url('${_images_paperbackground_webp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}')`;\n\n    const menuHeader = document.createElement('h1');\n    menuHeader.textContent = 'Our Menu';\n    menuHeader.className = 'menu-header';\n    menuContainer.appendChild(menuHeader);\n    \n    // Append sections for Tacos, Sides, and Drinks\n    menuContainer.appendChild(createMenuSection('Tacos', menuItems.tacos));\n    menuContainer.appendChild(createMenuSection('Sides',menuItems.sides));\n    menuContainer.appendChild(createMenuSection('Drinks', menuItems.drinks));\n\n    menuBackgroundWrapper.appendChild(menuContainer);\n\n    // Append all sections to the content div\n    content.appendChild(menuBackgroundWrapper);\n\n    content.appendChild((0,_visitUs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n\n \n\n\n//# sourceURL=webpack://my-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/visitUs.js":
/*!************************!*\
  !*** ./src/visitUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_donLogo_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/donLogo.webp */ \"./src/images/donLogo.webp\");\n\n\nconst createBottomSection = () => {\n    const visitUs = document.createElement('div');\n    visitUs.classList.add('visitUs-section');\n\n    const logo = document.createElement('img');\n    logo.src = _images_donLogo_webp__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    logo.classList.add('logo');\n    logo.alt = 'Taqueria Dont Luis Logo';\n    visitUs.appendChild(logo);\n\n    const header = document.createElement('h2');\n    header.textContent = 'Come join us!';\n    visitUs.appendChild(header);\n\n    const address = document.createElement('address');\n    address.textContent = '742 Evergreen Terrace, Chicago, CO 60420';\n    visitUs.appendChild(address);\n\n    return visitUs;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBottomSection);\n\n//# sourceURL=webpack://my-restaurant/./src/visitUs.js?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;