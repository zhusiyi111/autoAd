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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCurrentWindow__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getUrl__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getCScriptWindow__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["a"] = ({
	getCurrentWindow:__WEBPACK_IMPORTED_MODULE_0__getCurrentWindow__["a" /* default */],
	getUrl:__WEBPACK_IMPORTED_MODULE_1__getUrl__["a" /* default */],
	getCScriptWindow:__WEBPACK_IMPORTED_MODULE_2__getCScriptWindow__["a" /* default */]
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = (function(){

	return new Promise( (resolve,reject)=>{
		chrome.tabs.query({
			active:true,
			currentWindow:true
		},function(data){
			resolve(data)
		})	
	})

}); 


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__API__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__strategy__ = __webpack_require__(5);




$('.J_getUrl').click(async function(){
	let a = await __WEBPACK_IMPORTED_MODULE_0__API__["a" /* default */].getUrl();
	console.log(a);
})

$('.J_nextPage').click(function(){
	__WEBPACK_IMPORTED_MODULE_1__strategy__["a" /* default */].nextPage();
})

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCurrentWindow__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function(){
	return new Promise( async (resolve,reject) => {
		let tab = await Object(__WEBPACK_IMPORTED_MODULE_0__getCurrentWindow__["a" /* default */])();
		resolve(tab[0].url);
	})
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = (async function(param={tabId:1}){
	return new Promise( (resolve,reject)=>{
		chrome.tabs.sendMessage(param.tabId, {method: "doEval",string:`$('#page .n:last-child')[0].click();`}, function(data) {
			resolve();
		});	
	})
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextPage__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["a"] = ({
	nextPage:__WEBPACK_IMPORTED_MODULE_0__nextPage__["a" /* default */]
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_baidu_index_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__API_index_js__ = __webpack_require__(0);




async function nextPage(){
	let url = await __WEBPACK_IMPORTED_MODULE_1__API_index_js__["a" /* default */].getUrl();
	if(/www\.baidu\.com/.test(url)){
		__WEBPACK_IMPORTED_MODULE_0__domain_baidu_index_js__["a" /* default */].nextPage();
	}
} 

/* harmony default export */ __webpack_exports__["a"] = (nextPage);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextPage__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = ({
	nextPage:__WEBPACK_IMPORTED_MODULE_0__nextPage__["a" /* default */]
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__API__ = __webpack_require__(0);

console.log(__WEBPACK_IMPORTED_MODULE_0__API__["a" /* default */])
async function nextPage(){
	let tab = await __WEBPACK_IMPORTED_MODULE_0__API__["a" /* default */].getCurrentWindow();
	let tabId = tab[0].id;
	let win = __WEBPACK_IMPORTED_MODULE_0__API__["a" /* default */].getCScriptWindow({tabId:tabId});
	console.log(win);
	$('#page .n').trigger('click');
}


/* harmony default export */ __webpack_exports__["a"] = (nextPage);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map