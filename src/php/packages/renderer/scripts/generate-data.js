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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _create_data_files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* eslint-disable global-require, import/no-dynamic-require */



const system = process.env.ECL_SYSTEM;

if (!system) {
  throw new Error('Missing ECL_SYSTEM environment variable.');
}

let readLocation = '';
const rootFolder = '../../../../..';
const nodeModules = `${rootFolder}/node_modules`;

const list = __webpack_require__(6)(`${rootFolder}/${system}/packages/${system}-components/package.json`); // Create the folder for storing results.


if (!fs__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(`./${system}`)) {
  fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(`./${system}`);
} // Limit the list temporarily.


const listRender = Object.keys(list.dependencies);
listRender.forEach(pkg => {
  const componentRootName = pkg.split(`@ecl-twig/${system}-component-`)[1];
  const packageLocation = `${nodeModules}/${pkg}`;
  const specLocation = packageLocation.replace(`@ecl-twig/${system}-component-${componentRootName}`, `@ecl/${system}-specs-${componentRootName}`);
  const eclTwigPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(packageLocation);
  const eclSpecPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(specLocation);
  const saveLocation = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(`./${system}/${componentRootName}`); // Ensure a folder with the component's name.
  // Store generated data and markup at this location.

  if (!fs__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(saveLocation)) {
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(saveLocation);
  } // Check for data overrides.


  if (fs__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(`${eclTwigPath}/demo`)) {
    readLocation = `${eclTwigPath}/demo`;
  } else {
    // Try to fallback to specification data.
    readLocation = `${eclSpecPath}/demo`;
  }

  Object(_create_data_files__WEBPACK_IMPORTED_MODULE_2__["default"])({
    readLocation,
    saveLocation
  });
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable global-require, import/no-dynamic-require */


/**
 * Helper to migrate demo data for Twig PHP renderer.
 *
 * @param {String} readLocation The place to seek for demo data files.
 * @param {String} saveLocation The place to create a demo data file for PHP renderer.
 */

const createDataFiles = ({
  readLocation,
  saveLocation
}) => {
  const files = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(readLocation);
  files.forEach(file => {
    // require() is necessary at all cases.
    // Sometimes files contain results of adaptation.
    const data = __webpack_require__(5)(`${readLocation}/${file}`);

    const fileNew = file.replace('js', 'json');
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(`${saveLocation}/${fileNew}`), JSON.stringify(data));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createDataFiles);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 2,
	"./create-data-files": 3,
	"./create-data-files.js": 3,
	"./index": 2,
	"./index.js": 2
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 6;

/***/ })
/******/ ]);