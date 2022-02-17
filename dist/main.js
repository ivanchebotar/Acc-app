/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/avatar-holder.svg":
/*!*****************************************!*\
  !*** ./assets/images/avatar-holder.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "354311e517bc065575160fb079e55b7b.svg");

/***/ }),

/***/ "./assets/images/icon-eye-blocked.svg":
/*!********************************************!*\
  !*** ./assets/images/icon-eye-blocked.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c0e2657dfdfa3ec3223660f8f433cf6a.svg");

/***/ }),

/***/ "./assets/images/icon-eye.svg":
/*!************************************!*\
  !*** ./assets/images/icon-eye.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f438b321e23e1f55382208b3349c9743.svg");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_components_signUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/signUp */ "./js/components/signUp.js");
/* harmony import */ var _js_components_signIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/signIn */ "./js/components/signIn.js");



document.getElementById('form').appendChild(_js_components_signIn__WEBPACK_IMPORTED_MODULE_2__["default"]);
var signUpBtn = document.querySelector('.sign-up-btn');
var signInBtn = document.querySelector('.sign-in-btn');
var signInHold = document.querySelector('.sign-in-form');
var signUpHold = document.querySelector('.sign-up-form');
signUpBtn.addEventListener('click', function () {
  signUpHold.classList.remove('active');
  signInHold.classList.add('active');
  document.getElementById('form').innerHTML = '';
  document.getElementById('form').appendChild(_js_components_signUp__WEBPACK_IMPORTED_MODULE_1__["default"]);
});
signInBtn.addEventListener('click', function () {
  signUpHold.classList.add('active');
  signInHold.classList.remove('active');
  document.getElementById('form').innerHTML = '';
  document.getElementById('form').appendChild(_js_components_signIn__WEBPACK_IMPORTED_MODULE_2__["default"]);
});

/***/ }),

/***/ "./js/callbacks/avatarCallback.js":
/*!****************************************!*\
  !*** ./js/callbacks/avatarCallback.js ***!
  \****************************************/
/*! exports provided: avatarCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarCallback", function() { return avatarCallback; });
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/index */ "./js/helpers/index.js");
/* harmony import */ var _helpers_readFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/readFile */ "./js/helpers/readFile.js");


var avatarCallback = function avatarCallback(event) {
  Object(_helpers_readFile__WEBPACK_IMPORTED_MODULE_1__["readFile"])(event.target.files[0], _helpers_index__WEBPACK_IMPORTED_MODULE_0__["picture"]); // pictureHint.classList.add('hidden')
};

/***/ }),

/***/ "./js/callbacks/index.js":
/*!*******************************!*\
  !*** ./js/callbacks/index.js ***!
  \*******************************/
/*! exports provided: loginCallback, passwordCallback, submitCallback, userNameCallBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loginCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginCallback */ "./js/callbacks/loginCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginCallback", function() { return _loginCallback__WEBPACK_IMPORTED_MODULE_0__["loginCallback"]; });

/* harmony import */ var _passwordCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passwordCallback */ "./js/callbacks/passwordCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passwordCallback", function() { return _passwordCallback__WEBPACK_IMPORTED_MODULE_1__["passwordCallback"]; });

/* harmony import */ var _submitCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submitCallback */ "./js/callbacks/submitCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submitCallback", function() { return _submitCallback__WEBPACK_IMPORTED_MODULE_2__["submitCallback"]; });

/* harmony import */ var _userNameCallBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userNameCallBack */ "./js/callbacks/userNameCallBack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userNameCallBack", function() { return _userNameCallBack__WEBPACK_IMPORTED_MODULE_3__["userNameCallBack"]; });







/***/ }),

/***/ "./js/callbacks/loginCallback.js":
/*!***************************************!*\
  !*** ./js/callbacks/loginCallback.js ***!
  \***************************************/
/*! exports provided: loginCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginCallback", function() { return loginCallback; });
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/index */ "./js/helpers/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var loginCallback = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["validateLogin"])(event.target.value);

          case 2:
            response = _context.sent;
            _helpers_index__WEBPACK_IMPORTED_MODULE_0__["login"].style.borderColor = response ? '#090' : '#f00';
            this.login = response ? _helpers_index__WEBPACK_IMPORTED_MODULE_0__["hintErrorLog"].classList.remove('active') : _helpers_index__WEBPACK_IMPORTED_MODULE_0__["hintErrorLog"].classList.add('active'); // button.disabled = !response

            _helpers_index__WEBPACK_IMPORTED_MODULE_0__["password"].disabled = !response;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loginCallback(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./js/callbacks/passwordCallback.js":
/*!******************************************!*\
  !*** ./js/callbacks/passwordCallback.js ***!
  \******************************************/
/*! exports provided: passwordCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordCallback", function() { return passwordCallback; });
/* harmony import */ var _configs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/index */ "./js/configs/index.js");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/index */ "./js/helpers/index.js");


var passwordCallback = function passwordCallback(event) {
  var response = Boolean(event.target.value.match(_configs_index__WEBPACK_IMPORTED_MODULE_0__["passwordRule"]));
  _helpers_index__WEBPACK_IMPORTED_MODULE_1__["password"].style.borderColor = response ? '#090' : '#f00';
  this.password = response ? _helpers_index__WEBPACK_IMPORTED_MODULE_1__["hintErrorPass"].classList.remove('active') : _helpers_index__WEBPACK_IMPORTED_MODULE_1__["hintErrorPass"].classList.add('active');
  _helpers_index__WEBPACK_IMPORTED_MODULE_1__["button"].disabled = !response;
};

/***/ }),

/***/ "./js/callbacks/submitCallback.js":
/*!****************************************!*\
  !*** ./js/callbacks/submitCallback.js ***!
  \****************************************/
/*! exports provided: submitCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitCallback", function() { return submitCallback; });
/* harmony import */ var _configs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/index */ "./js/configs/index.js");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/index */ "./js/helpers/index.js");
/* harmony import */ var fast_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-sha256 */ "../node_modules/fast-sha256/sha256.js");
/* harmony import */ var fast_sha256__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_sha256__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var hasher = new fast_sha256__WEBPACK_IMPORTED_MODULE_2___default.a.Hash();
var submitCallback = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var array, digest, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["password"].value);
            array = fast_sha256__WEBPACK_IMPORTED_MODULE_2___default.a.hash(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["password"].value);
            digest = String.fromCharCode.apply(String, _toConsumableArray(array));
            console.log(digest);
            _context.next = 6;
            return fetch("".concat(_configs_index__WEBPACK_IMPORTED_MODULE_0__["origin"], "/user/").concat(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["login"].value), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                password: digest,
                avatar: _helpers_index__WEBPACK_IMPORTED_MODULE_1__["picture"].src
              })
            });

          case 6:
            response = _context.sent;
            _context.t0 = console;
            _context.next = 10;
            return response.json();

          case 10:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

            _context.t2 = console;
            _context.next = 15;
            return fetch("".concat(_configs_index__WEBPACK_IMPORTED_MODULE_0__["origin"], "/users/all"));

          case 15:
            _context.next = 17;
            return _context.sent.json();

          case 17:
            _context.t3 = _context.sent;

            _context.t2.log.call(_context.t2, _context.t3);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function submitCallback(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./js/callbacks/userNameCallBack.js":
/*!******************************************!*\
  !*** ./js/callbacks/userNameCallBack.js ***!
  \******************************************/
/*! exports provided: userNameCallBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userNameCallBack", function() { return userNameCallBack; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./js/helpers/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // console.log(hintErrorLogIn)

function userNameCallBack(_x) {
  return _userNameCallBack.apply(this, arguments);
}

function _userNameCallBack() {
  _userNameCallBack = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var response, password, avatar;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getUserDetails"])(event.target.value);

          case 2:
            response = _context.sent;

            if (response) {
              password = response.password, avatar = response.avatar;
              localStorage.setItem('password', password);
              localStorage.setItem('avatar', avatar);
              _helpers__WEBPACK_IMPORTED_MODULE_0__["userPass"].disabled = false;
              _helpers__WEBPACK_IMPORTED_MODULE_0__["userName"].style.borderColor = '#090';
            } else {
              _helpers__WEBPACK_IMPORTED_MODULE_0__["userBtn"].disabled = true;
              _helpers__WEBPACK_IMPORTED_MODULE_0__["userName"].style.borderColor = '#f00';
            }

            if (this.userName = response) {
              _helpers__WEBPACK_IMPORTED_MODULE_0__["hintErrorLogIn"].classList.remove('active');
            } else {
              _helpers__WEBPACK_IMPORTED_MODULE_0__["hintErrorLogIn"].classList.add('active');
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _userNameCallBack.apply(this, arguments);
}

/***/ }),

/***/ "./js/components/signIn.js":
/*!*********************************!*\
  !*** ./js/components/signIn.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snippets */ "./js/snippets/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./js/helpers/index.js");
/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callbacks */ "./js/callbacks/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var SignIn = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SignIn, _HTMLElement);

  var _super = _createSuper(SignIn);

  function SignIn() {
    var _this;

    _classCallCheck(this, SignIn);

    _this = _super.call(this);

    var shadow = _this.attachShadow({
      mode: 'closed'
    });

    _this.container = shadow.appendChild(document.createElement('main'));
    _this.container.innerHTML = _snippets__WEBPACK_IMPORTED_MODULE_0__["signInTemplate"];
    Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getElemsIn"])(shadow);
    _helpers__WEBPACK_IMPORTED_MODULE_1__["userName"].onchange = _callbacks__WEBPACK_IMPORTED_MODULE_2__["userNameCallBack"];
    _helpers__WEBPACK_IMPORTED_MODULE_1__["showPasswordIn"].addEventListener('click', function () {
      _helpers__WEBPACK_IMPORTED_MODULE_1__["showPasswordIn"].classList.contains('active') ? (this.classList.remove('active'), _helpers__WEBPACK_IMPORTED_MODULE_1__["userPass"].type = 'password') : (this.classList.add('active'), _helpers__WEBPACK_IMPORTED_MODULE_1__["userPass"].type = 'text');
    });
    return _this;
  }

  return _createClass(SignIn);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('sign-in', SignIn);
/* harmony default export */ __webpack_exports__["default"] = (document.createElement('sign-in'));

/***/ }),

/***/ "./js/components/signUp.js":
/*!*********************************!*\
  !*** ./js/components/signUp.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snippets_signUpTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snippets/signUpTemplate */ "./js/snippets/signUpTemplate.js");
/* harmony import */ var _callbacks_avatarCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../callbacks/avatarCallback */ "./js/callbacks/avatarCallback.js");
/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callbacks */ "./js/callbacks/index.js");
/* harmony import */ var _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/inputs */ "./js/helpers/inputs.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var SignUp = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SignUp, _HTMLElement);

  var _super = _createSuper(SignUp);

  function SignUp() {
    var _this;

    _classCallCheck(this, SignUp);

    _this = _super.call(this);

    var shadow = _this.attachShadow({
      mode: 'closed'
    });

    shadow.appendChild(document.createElement('main')).innerHTML = _this.template;
    Object(_helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["getElems"])(shadow);
    console.log(_helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["login"], _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["password"], _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["avatar"], _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["button"], _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["picture"]);
    _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["avatar"].onchange = _callbacks_avatarCallback__WEBPACK_IMPORTED_MODULE_1__["avatarCallback"];
    _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["login"].onchange = _callbacks__WEBPACK_IMPORTED_MODULE_2__["loginCallback"];
    _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["password"].oninput = _callbacks__WEBPACK_IMPORTED_MODULE_2__["passwordCallback"];
    _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["button"].onclick = _callbacks__WEBPACK_IMPORTED_MODULE_2__["submitCallback"];
    _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["showPassword"].addEventListener('click', function () {
      _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["showPassword"].classList.contains('active') ? (this.classList.remove('active'), _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["password"].type = 'password') : (this.classList.add('active'), _helpers_inputs__WEBPACK_IMPORTED_MODULE_3__["password"].type = 'text');
    });
    return _this;
  }

  return _createClass(SignUp);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

SignUp.prototype.template = _snippets_signUpTemplate__WEBPACK_IMPORTED_MODULE_0__["signUpTemplate"];
customElements.define('sign-up', SignUp);
/* harmony default export */ __webpack_exports__["default"] = (document.createElement('sign-up'));

/***/ }),

/***/ "./js/configs/index.js":
/*!*****************************!*\
  !*** ./js/configs/index.js ***!
  \*****************************/
/*! exports provided: origin, passwordRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _origin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./origin */ "./js/configs/origin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "origin", function() { return _origin__WEBPACK_IMPORTED_MODULE_0__["origin"]; });

/* harmony import */ var _passwordRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passwordRule */ "./js/configs/passwordRule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passwordRule", function() { return _passwordRule__WEBPACK_IMPORTED_MODULE_1__["passwordRule"]; });





/***/ }),

/***/ "./js/configs/origin.js":
/*!******************************!*\
  !*** ./js/configs/origin.js ***!
  \******************************/
/*! exports provided: origin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "origin", function() { return origin; });
var origin = 'https://garevna-rest-api.glitch.me';

/***/ }),

/***/ "./js/configs/passwordRule.js":
/*!************************************!*\
  !*** ./js/configs/passwordRule.js ***!
  \************************************/
/*! exports provided: passwordRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordRule", function() { return passwordRule; });
var passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

/***/ }),

/***/ "./js/helpers/index.js":
/*!*****************************!*\
  !*** ./js/helpers/index.js ***!
  \*****************************/
/*! exports provided: login, password, avatar, button, picture, pictureHint, pictureHintErr, hintErrorLog, hintErrorLogIn, hintErrorPass, showPassword, showPasswordIn, userName, userPass, userBtn, getElems, getElemsIn, getUserDetails, validateLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ "./js/helpers/inputs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "password", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["password"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "avatar", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["avatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "button", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "picture", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["picture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pictureHint", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["pictureHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pictureHintErr", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["pictureHintErr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hintErrorLog", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["hintErrorLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hintErrorPass", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["hintErrorPass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showPassword", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["showPassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElems", function() { return _inputs__WEBPACK_IMPORTED_MODULE_0__["getElems"]; });

/* harmony import */ var _inputsSignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputsSignIn */ "./js/helpers/inputsSignIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hintErrorLogIn", function() { return _inputsSignIn__WEBPACK_IMPORTED_MODULE_1__["hintErrorLogIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showPasswordIn", function() { return _inputsSignIn__WEBPACK_IMPORTED_MODULE_1__["showPasswordIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userName", function() { return _inputsSignIn__WEBPACK_IMPORTED_MODULE_1__["userName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userPass", function() { return _inputsSignIn__WEBPACK_IMPORTED_MODULE_1__["userPass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userBtn", function() { return _inputsSignIn__WEBPACK_IMPORTED_MODULE_1__["userBtn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElemsIn", function() { return _inputsSignIn__WEBPACK_IMPORTED_MODULE_1__["getElemsIn"]; });

/* harmony import */ var _usersCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usersCheck */ "./js/helpers/usersCheck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserDetails", function() { return _usersCheck__WEBPACK_IMPORTED_MODULE_2__["getUserDetails"]; });

/* harmony import */ var _validateLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateLogin */ "./js/helpers/validateLogin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateLogin", function() { return _validateLogin__WEBPACK_IMPORTED_MODULE_3__["validateLogin"]; });







/***/ }),

/***/ "./js/helpers/inputs.js":
/*!******************************!*\
  !*** ./js/helpers/inputs.js ***!
  \******************************/
/*! exports provided: getElems, login, password, avatar, button, picture, pictureHint, pictureHintErr, hintErrorLog, hintErrorPass, showPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElems", function() { return getElems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatar", function() { return avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "picture", function() { return picture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pictureHint", function() { return pictureHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pictureHintErr", function() { return pictureHintErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hintErrorLog", function() { return hintErrorLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hintErrorPass", function() { return hintErrorPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPassword", function() { return showPassword; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var login, password, avatar, button, picture, pictureHint, pictureHintErr, hintErrorLog, hintErrorPass, showPassword;
function getElems(shadow) {
  var _map = ['login', 'password', 'avatar', 'button', 'picture', 'pictureHint', 'pictureHintErr', 'hintErrorLog', 'hintErrorPass', 'showPassword'].map(function (id) {
    return shadow.querySelector("#".concat(id));
  });

  var _map2 = _slicedToArray(_map, 10);

  login = _map2[0];
  password = _map2[1];
  avatar = _map2[2];
  button = _map2[3];
  picture = _map2[4];
  pictureHint = _map2[5];
  pictureHintErr = _map2[6];
  hintErrorLog = _map2[7];
  hintErrorPass = _map2[8];
  showPassword = _map2[9];
}


/***/ }),

/***/ "./js/helpers/inputsSignIn.js":
/*!************************************!*\
  !*** ./js/helpers/inputsSignIn.js ***!
  \************************************/
/*! exports provided: getElemsIn, userName, userPass, userBtn, hintErrorLogIn, hintErrorPass, showPasswordIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElemsIn", function() { return getElemsIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userName", function() { return userName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPass", function() { return userPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userBtn", function() { return userBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hintErrorLogIn", function() { return hintErrorLogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hintErrorPass", function() { return hintErrorPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPasswordIn", function() { return showPasswordIn; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var userName, userPass, userBtn, hintErrorLogIn, hintErrorPass, showPasswordIn;
function getElemsIn(shadow) {
  var _map = ['login', 'password', 'button', 'hintErrorLogIn', 'hintErrorPass', 'showPasswordIn'].map(function (id) {
    return shadow.querySelector("#".concat(id));
  });

  var _map2 = _slicedToArray(_map, 6);

  userName = _map2[0];
  userPass = _map2[1];
  userBtn = _map2[2];
  hintErrorLogIn = _map2[3];
  hintErrorPass = _map2[4];
  showPasswordIn = _map2[5];
}


/***/ }),

/***/ "./js/helpers/readFile.js":
/*!********************************!*\
  !*** ./js/helpers/readFile.js ***!
  \********************************/
/*! exports provided: readFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFile", function() { return readFile; });
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/index */ "./js/helpers/index.js");

function readFile(file, elem) {
  if (!(file instanceof File)) return console.warn('Invalid file');
  if ((elem === null || elem === void 0 ? void 0 : elem.nodeType) !== 1) return console.warn('Invalid elem');

  if (file.type.indexOf('image')) {
    _helpers_index__WEBPACK_IMPORTED_MODULE_0__["pictureHint"].classList.remove('success');
    _helpers_index__WEBPACK_IMPORTED_MODULE_0__["pictureHint"].classList.add('error');
    return;
  } else {
    _helpers_index__WEBPACK_IMPORTED_MODULE_0__["pictureHint"].classList.add('success');
    _helpers_index__WEBPACK_IMPORTED_MODULE_0__["pictureHint"].classList.remove('error');
  }

  var reader = new FileReader();

  reader.onload = function (event) {
    elem.src = event.target.result;
  };

  reader.readAsDataURL(file);
}

/***/ }),

/***/ "./js/helpers/usersCheck.js":
/*!**********************************!*\
  !*** ./js/helpers/usersCheck.js ***!
  \**********************************/
/*! exports provided: getUserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserDetails", function() { return getUserDetails; });
/* harmony import */ var _configs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/index */ "./js/configs/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getUserDetails = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(login) {
    var _yield$yield$fetch$js, error, password, avatar;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(_configs_index__WEBPACK_IMPORTED_MODULE_0__["origin"], "/user/").concat(login));

          case 2:
            _context.next = 4;
            return _context.sent.json();

          case 4:
            _yield$yield$fetch$js = _context.sent;
            error = _yield$yield$fetch$js.error;
            password = _yield$yield$fetch$js.password;
            avatar = _yield$yield$fetch$js.avatar;
            return _context.abrupt("return", error ? null : {
              password: password,
              avatar: avatar
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUserDetails(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./js/helpers/validateLogin.js":
/*!*************************************!*\
  !*** ./js/helpers/validateLogin.js ***!
  \*************************************/
/*! exports provided: validateLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateLogin", function() { return validateLogin; });
/* harmony import */ var _configs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/index */ "./js/configs/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var validateLogin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(login) {
    var _yield$yield$fetch$js, error;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(_configs_index__WEBPACK_IMPORTED_MODULE_0__["origin"], "/user/").concat(login));

          case 2:
            _context.next = 4;
            return _context.sent.json();

          case 4:
            _yield$yield$fetch$js = _context.sent;
            error = _yield$yield$fetch$js.error;
            return _context.abrupt("return", !!error);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validateLogin(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./js/snippets/index.js":
/*!******************************!*\
  !*** ./js/snippets/index.js ***!
  \******************************/
/*! exports provided: signInTemplate, signUpTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signInTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signInTemplate */ "./js/snippets/signInTemplate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInTemplate", function() { return _signInTemplate__WEBPACK_IMPORTED_MODULE_0__["signInTemplate"]; });

/* harmony import */ var _signUpTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signUpTemplate */ "./js/snippets/signUpTemplate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUpTemplate", function() { return _signUpTemplate__WEBPACK_IMPORTED_MODULE_1__["signUpTemplate"]; });





/***/ }),

/***/ "./js/snippets/signInTemplate.js":
/*!***************************************!*\
  !*** ./js/snippets/signInTemplate.js ***!
  \***************************************/
/*! exports provided: signInTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInTemplate", function() { return signInTemplate; });
/* harmony import */ var _assets_images_icon_eye_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/images/icon-eye.svg */ "./assets/images/icon-eye.svg");
/* harmony import */ var _assets_images_icon_eye_blocked_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/images/icon-eye-blocked.svg */ "./assets/images/icon-eye-blocked.svg");


var signInTemplate = "\n  <h1 class=\"section-title\">Account Sign in</h1>\n  <div class=\"form-holder\">\n    <div class=\"form-holder-inputs\">\n      <div class=\"input-holder\">\n        <input type=\"email\" id=\"login\" placeholder=\"Enter your email\">\n        <span id=\"hintErrorLogIn\" class=\"hint\">invalid login or username</span>\n      </div>\n      <div class=\"input-holder\">\n        <input type=\"password\" id=\"password\" placeholder=\"Enter your password\">\n        <span fill=\"#666\" id=\"showPasswordIn\" class=\"icon-eye\"></span>\n        <span id=\"hintErrorPass\" class=\"hint\">invalid password</span>\n      </div>\n    </div>\n    <div class=\"form-holder-btn\">\n      <button class=\"btn btn-submit\" id=\"button\" disabled>Sign in</button>\n    </div>\n  </div>\n\n  <style>\n    *,\n    :after,\n    :before {\n      box-sizing: inherit;\n    }\n    main {\n      padding: 50px 0;\n    }\n    img {\n      max-width: 100%;\n      height: auto;\n      vertical-align: top;\n    }\n    .btn {\n      outline: 0;\n      cursor: pointer;\n      display: block;\n      border: 0;\n      padding: 17px 0 15px;\n      text-align: center;\n      text-transform: uppercase;\n      width: 100%;\n      user-select: none;\n    }\n    .btn-submit {\n      transition: box-shadow 0.3s ease;\n      background-color: #030303;\n      color: #fafafa;\n    }\n    .btn-submit:hover {\n      box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.67);\n    }\n    .btn:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .btn:disabled:hover {\n      box-shadow: none;\n    }\n    @font-face {\n      font-family: Nexa;\n      src: url(../fonts/Nexa.otf);\n    }\n    .input-holder {\n      margin: 0 0 30px;\n    }\n    input {\n      transition: border 0.3s ease;\n      background-color: transparent;\n      border-bottom: 1px solid #fafafa;\n      outline: 0;\n      border-top: 0;\n      border-right: 0;\n      border-left: 0;\n      border-radius: 0;\n      padding: 10px 50px 10px 20px;\n      width: 100%;\n      font-size: 16px;\n      color: #fafafa;\n      font-family: Roboto, sans-serif;\n      letter-spacing: 0.2px;\n      user-select: none;\n    }\n    input:disabled {\n      opacity: 0.5;\n    }\n    input::placeholder {\n      color: #fafafa;\n      font-size: 16px;\n    }\n    input:-webkit-autofill,\n    input:-webkit-autofill:focus {\n      transition: background-color 600000s 0s, color 600000s 0s;\n    }\n    input:focus {\n      border-bottom: 1px solid #030303;\n    }\n    input[type=\"password\"] {\n      padding: 10px 60px 10px 20px;\n    }\n    .input-holder {\n      position: relative;\n    }\n    .input-holder .icon-eye {\n      position: relative;\n      top: -2px;\n      right: 18px;\n      cursor: pointer;\n      user-select: none;\n    }\n    .input-holder .icon-eye:before {\n      content: '';\n      background: url(".concat(_assets_images_icon_eye_svg__WEBPACK_IMPORTED_MODULE_0__["default"], ");\n      width: 20px;\n      height: 20px;\n      opacity: 0.8;\n      position: absolute;\n      top: 0;\n      right: 0;\n    }\n    .input-holder .icon-eye.active:before {\n      background: url(").concat(_assets_images_icon_eye_blocked_svg__WEBPACK_IMPORTED_MODULE_1__["default"], ");\n    }\n    input[type=\"file\"] {\n      display: none;\n      border: 0;\n    }\n    .avatar-upload {\n      margin: 0 auto 50px;\n      width: 100px;\n      height: 100px;\n      display: block;\n      cursor: pointer;\n      color: #030303;\n      font-size: 14px;\n      user-select: none;\n      border: 1px solid #030303;\n      padding: 4px;\n      border-radius: 50%;\n      position: relative;\n      transition: all 0.3s ease;\n    }\n    .avatar-upload:hover {\n      color: #fafafa;\n      border: 1px solid #fafafa;\n    }\n    .avatar-upload img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      border-radius: 100%;\n      object-fit: cover;\n    }\n    .hint {\n      color: #f00;\n      padding: 0 20px;\n      font-size: 12px;\n      display: none;\n      position: absolute;\n      left: 0;\n      bottom: -20px;\n    }\n    .hint.active {\n      display: block;\n    }\n    .picture-hint {\n      padding: 10px 0 0;\n      font-size: 12px;\n      display: block;\n      text-align: center;\n    }\n    .picture-hint.success {\n      visibility: hidden;\n      position: relative;\n    }\n    .picture-hint.success:after {\n      visibility: visible;\n      position: absolute;\n      top: 10px;\n      left: 0;\n      color: #32CD32;\n      font-size: 12px;\n      content: \"success\";\n      line-height: 1.3;\n      width: 100%;\n    }\n    .picture-hint.error {\n      visibility: hidden;\n      position: relative;\n    }\n    .picture-hint.error:after {\n      visibility: visible;\n      position: absolute;\n      top: 10px;\n      left: 0;\n      color: #f00;\n      font-size: 12px;\n      content: \"unsupported file\";\n      line-height: 1.3;\n      width: 100%;\n    }\n    @media (min-width: 768px) {\n      .avatar-upload {\n        font-size: 16px;\n      }\n    }\n    .avatar-upload:hover:before {\n      color: #fafafa;\n    }\n    a {\n      transition: color 0.3s ease;\n      color: #030303;\n      text-decoration: none;\n    }\n    .container {\n      width: 100%;\n      margin-left: auto;\n      margin-right: auto;\n      padding-left: 30px;\n      padding-right: 30px;\n      max-width: 1200px;\n    }\n    .page-holder {\n      padding-bottom: 20px;\n    }\n    .picture-holder {\n      width: 100px;\n      margin: 0 auto;\n    }\n    .picture-holder img {\n      border-radius: 50%;\n    }\n    .section-title {\n      text-align: center;\n      color: #fafafa;\n      margin: 0 0 50px;\n      padding: 0;\n    }\n    .form-section {\n      padding: 80px 0;\n    }\n    .form-holder {\n      max-width: 400px;\n      margin: 0 auto;\n    }\n    .form-holder-inputs {\n      margin: 0 0 50px;\n    }  \n  </style>\n");

/***/ }),

/***/ "./js/snippets/signUpTemplate.js":
/*!***************************************!*\
  !*** ./js/snippets/signUpTemplate.js ***!
  \***************************************/
/*! exports provided: signUpTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpTemplate", function() { return signUpTemplate; });
/* harmony import */ var _assets_images_avatar_holder_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/images/avatar-holder.svg */ "./assets/images/avatar-holder.svg");
/* harmony import */ var _assets_images_icon_eye_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/images/icon-eye.svg */ "./assets/images/icon-eye.svg");
/* harmony import */ var _assets_images_icon_eye_blocked_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/images/icon-eye-blocked.svg */ "./assets/images/icon-eye-blocked.svg");



var signUpTemplate = "\n  <h1 class=\"section-title\">Account Sign up</h1>\n  <div class=\"form-holder\">\n    <div class=\"form-holder-inputs\">\n      <div class=\"input-holder\">\n        <label class=\"avatar-upload\" for=\"avatar\">\n          <img id=\"picture\" src=\"".concat(_assets_images_avatar_holder_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "\">\n          <span id=\"pictureHint\" class=\"picture-hint\">upload your photo</span>\n        </label>\n        <input id=\"avatar\" type=\"file\"/>\n      </div>\n      <div class=\"input-holder\">\n        <input type=\"email\" id=\"login\" placeholder=\"Enter your email\">\n        <span id=\"hintErrorLog\" class=\"hint\">this name is already in use</span>\n      </div>\n      <div class=\"input-holder\">\n        <input type=\"password\" id=\"password\" placeholder=\"Enter your password\">\n        <span fill=\"#666\" id=\"showPassword\" class=\"icon-eye\"></span>\n        <span id=\"hintErrorPass\" class=\"hint\">too simple password</span>\n      </div>\n    </div>\n    <div class=\"form-holder-btn\">\n      <button class=\"btn btn-submit\" id=\"button\" disabled>Sign up</button>\n    </div>\n  </div>\n  <style>\n    *,\n    :after,\n    :before {\n      box-sizing: inherit;\n    }\n    img {\n      max-width: 100%;\n      height: auto;\n      vertical-align: top;\n    }\n    .btn {\n      outline: 0;\n      cursor: pointer;\n      display: block;\n      border: 0;\n      padding: 17px 0 15px;\n      text-align: center;\n      text-transform: uppercase;\n      width: 100%;\n      user-select: none;\n    }\n    .btn-submit {\n      transition: box-shadow 0.3s ease;\n      background-color: #030303;\n      color: #fafafa;\n    }\n    .btn-submit:hover {\n      box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.67);\n    }\n    .btn:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .btn:disabled:hover {\n      box-shadow: none;\n    }\n    @font-face {\n      font-family: Nexa;\n      src: url(../fonts/Nexa.otf);\n    }\n    .input-holder {\n      margin: 0 0 30px;\n    }\n    input {\n      transition: border 0.3s ease;\n      background-color: transparent;\n      border-bottom: 1px solid #fafafa;\n      outline: 0;\n      border-top: 0;\n      border-right: 0;\n      border-left: 0;\n      border-radius: 0;\n      padding: 10px 50px 10px 20px;\n      width: 100%;\n      font-size: 16px;\n      color: #fafafa;\n      font-family: Roboto, sans-serif;\n      letter-spacing: 0.2px;\n      user-select: none;\n    }\n    input:disabled {\n      opacity: 0.5;\n    }\n    input::placeholder {\n      color: #fafafa;\n      font-size: 16px;\n    }\n    input:-webkit-autofill,\n    input:-webkit-autofill:focus {\n      transition: background-color 600000s 0s, color 600000s 0s;\n    }\n    input:focus {\n      border-bottom: 1px solid #030303;\n    }\n    input[type=\"password\"] {\n      padding: 10px 60px 10px 20px;\n    }\n    .input-holder {\n      position: relative;\n    }\n    .input-holder .icon-eye {\n      position: relative;\n      top: -2px;\n      right: 18px;\n      cursor: pointer;\n      user-select: none;\n    }\n    .input-holder .icon-eye:before {\n      content: '';\n      background: url(").concat(_assets_images_icon_eye_svg__WEBPACK_IMPORTED_MODULE_1__["default"], ");\n      width: 20px;\n      height: 20px;\n      opacity: 0.8;\n      position: absolute;\n      top: 0;\n      right: 0;\n    }\n    .input-holder .icon-eye.active:before {\n      background: url(").concat(_assets_images_icon_eye_blocked_svg__WEBPACK_IMPORTED_MODULE_2__["default"], ");\n    }\n    input[type=\"file\"] {\n      display: none;\n      border: 0;\n    }\n    .avatar-upload {\n      margin: 0 auto 50px;\n      width: 100px;\n      height: 100px;\n      display: block;\n      cursor: pointer;\n      color: #030303;\n      font-size: 14px;\n      user-select: none;\n      border: 1px solid #030303;\n      padding: 4px;\n      border-radius: 50%;\n      position: relative;\n      transition: all 0.3s ease;\n    }\n    .avatar-upload:hover {\n      color: #fafafa;\n      border: 1px solid #fafafa;\n    }\n    .avatar-upload img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      border-radius: 100%;\n      object-fit: cover;\n    }\n    .hint {\n      color: #f00;\n      padding: 0 20px;\n      font-size: 12px;\n      display: none;\n      position: absolute;\n      left: 0;\n      bottom: -20px;\n    }\n    .hint.active {\n      display: block;\n    }\n    .picture-hint {\n      padding: 10px 0 0;\n      font-size: 12px;\n      display: block;\n      text-align: center;\n    }\n    .picture-hint.success {\n      visibility: hidden;\n      position: relative;\n    }\n    .picture-hint.success:after {\n      visibility: visible;\n      position: absolute;\n      top: 10px;\n      left: 0;\n      color: #32CD32;\n      font-size: 12px;\n      content: \"success\";\n      line-height: 1.3;\n      width: 100%;\n    }\n    .picture-hint.error {\n      visibility: hidden;\n      position: relative;\n    }\n    .picture-hint.error:after {\n      visibility: visible;\n      position: absolute;\n      top: 10px;\n      left: 0;\n      color: #f00;\n      font-size: 12px;\n      content: \"unsupported file\";\n      line-height: 1.3;\n      width: 100%;\n    }\n    @media (min-width: 768px) {\n      .avatar-upload {\n        font-size: 16px;\n      }\n    }\n    .avatar-upload:hover:before {\n      color: #fafafa;\n    }\n    a {\n      transition: color 0.3s ease;\n      color: #030303;\n      text-decoration: none;\n    }\n    .container {\n      width: 100%;\n      margin-left: auto;\n      margin-right: auto;\n      padding-left: 30px;\n      padding-right: 30px;\n      max-width: 1200px;\n    }\n    .page-holder {\n      padding-bottom: 20px;\n    }\n    .picture-holder {\n      width: 100px;\n      margin: 0 auto;\n    }\n    .picture-holder img {\n      border-radius: 50%;\n    }\n    .section-title {\n      text-align: center;\n      color: #fafafa;\n      margin: 0 0 50px;\n      padding: 0;\n    }\n    .form-section {\n      padding: 80px 0;\n    }\n    .form-holder {\n      max-width: 400px;\n      margin: 0 auto;\n    }\n    .form-holder-inputs {\n      margin: 0 0 50px;\n    }  \n  </style>\n");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map