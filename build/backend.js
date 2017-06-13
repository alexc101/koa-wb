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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_compose__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(12);



const combineRouters = (d) => {
    let arr = [];
    d.forEach((v) => {
        arr.push(v.routes());
        arr.push(v.allowedMethods());
    });
    return __WEBPACK_IMPORTED_MODULE_0_koa_compose__(arr);
};
const router = combineRouters([
    __WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_2__user__["a" /* default */]
]);
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-hbs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("koa-morgan");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_errors__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_http_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_morgan__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_hbs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_static__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_config__ = __webpack_require__(1);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const path = __webpack_require__(9);
const dir = path.resolve('.');

const port = process.env.PORT || 3000;
const accessLogStream = __WEBPACK_IMPORTED_MODULE_3_fs__["createWriteStream"]('./access.log', { flags: 'a' });
const app = new __WEBPACK_IMPORTED_MODULE_0_koa__();
app
    .use(__WEBPACK_IMPORTED_MODULE_5_koa_hbs__["middleware"]({
    viewPath: './src/views',
    defaultLayout: 'layout'
}))
    .use(__WEBPACK_IMPORTED_MODULE_4_koa_morgan__('combined', { stream: accessLogStream }))
    .use(__WEBPACK_IMPORTED_MODULE_4_koa_morgan__('dev'))
    .use(__WEBPACK_IMPORTED_MODULE_7__routes_config__["a" /* default */])
    .use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield next();
        if (ctx.status === 404)
            throw __WEBPACK_IMPORTED_MODULE_2_http_errors__(404, 'Page doesn\'t exist!');
    }
    catch (err) {
        ctx.body = err.message;
        ctx.status = err.status || 500;
    }
}))
    .use(__WEBPACK_IMPORTED_MODULE_6_koa_static__(dir + '/src/public'));
app.listen(port, () => {
    console.log(__WEBPACK_IMPORTED_MODULE_1_chalk__["green"].bold('listening on port ' + port));
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const indexRouter = new __WEBPACK_IMPORTED_MODULE_0_koa_router__();
class Greeter {
    constructor(name) {
        this.name = name;
    }
}
indexRouter
    .get('/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const helloTS = new Greeter('default14');
    yield ctx.render('index', { name: helloTS.name });
}))
    .get('/home', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const helloTS = new Greeter('home');
    yield ctx.render('index', { name: helloTS.name });
}));
/* harmony default export */ __webpack_exports__["a"] = (indexRouter);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const userRouter = new __WEBPACK_IMPORTED_MODULE_0_koa_router__({ prefix: '/user' });
class Greeter {
    constructor(name) {
        this.name = name;
    }
}
userRouter
    .get('/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const helloTS = new Greeter('user1');
    yield ctx.render('index', { name: helloTS.name });
}))
    .get('/2', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const helloTS = new Greeter('user2');
    yield ctx.render('index', { name: helloTS.name });
}));
/* harmony default export */ __webpack_exports__["a"] = (userRouter);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("koa-compose");

/***/ })
/******/ ]);