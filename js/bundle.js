/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/apiUtil.js":
/*!***********************!*\
  !*** ./js/apiUtil.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ApiUtil = {\n  getGif: (cb) => {\n    const xhr = new XMLHttpRequest()\n    xhr.open(\n      'GET',\n      `http://api.giphy.com/v1/gifs/random?tag=cats&rating=g&api_key=zbK6F5n3BnL6tX8XDSb2LICh5g0Zme4L`\n    )\n\n    xhr.onload = () => {\n      cb(JSON.parse(xhr.response))\n    }\n\n    xhr.onerror = () => {\n      cb('er')\n    }\n\n    xhr.send()\n  },\n\n  saveGif: (e) => {\n    const title = e.target\n      .firstElementChild\n      .value\n\n    const url = document.querySelector('.gif-image')\n      .attributes\n      .src\n\n    const currentStorage = window.localStorage.getItem('data')\n    \n    if (currentStorage) {\n      const parsedData = JSON.parse(currentStorage)\n      parsedData[title] = url\n    } else {\n      const parsedData = {title: url}\n    }\n    \n    window.localStorage.setItem('data', JSON.stringify(parsedData))\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiUtil);\n\n//# sourceURL=webpack:///./js/apiUtil.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiUtil.js */ \"./js/apiUtil.js\");\n\n\nconst appendToMain = (data) => {\n  if (data === 'er') return\n\n  const container = document.querySelector('.gif-container')\n  const url = data.data.image_url\n  container.innerHTML = `<img src='${url}'>`\n}\n\nconst addListeners = () => {\n  const newButton = document.querySelector('.new')\n  const saveForm = document.querySelector('.controls-save')\n  \n  newButton.addEventListener('click', (e) => {\n    _apiUtil_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGif(appendToMain)\n  })\n\n  saveForm.addEventListener('submit', (e) => {\n    _apiUtil_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveGif(e)\n  })\n}\n\nconst populateSavedGifs = () => {\n  \n  const saved = document.querySelector('.saved')\n  const savedData = window.localStorage.getItem('data')\n  const savedGifs = JSON.parse(savedData)\n  \n  if (!savedGifs) return\n  \n  Object.keys(savedGifs).forEach(key => {\n    saved.innerHTML += `\n    <div class='saved-gif' data-src=${savedGifs[key]}>\n    ${key}\n    </div>\n    `\n  })\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  addListeners()\n  populateSavedGifs()\n  _apiUtil_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGif(appendToMain)\n})\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });