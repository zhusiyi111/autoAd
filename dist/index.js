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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCurrentWindow__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getUrl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getCScriptWindow__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delay__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulateEvent__ = __webpack_require__(12);






/* harmony default export */ __webpack_exports__["a"] = ({
	getCurrentWindow:__WEBPACK_IMPORTED_MODULE_0__getCurrentWindow__["a" /* default */],
	getUrl:__WEBPACK_IMPORTED_MODULE_1__getUrl__["a" /* default */],
	getCScriptWindow:__WEBPACK_IMPORTED_MODULE_2__getCScriptWindow__["a" /* default */],
	delay:__WEBPACK_IMPORTED_MODULE_3__delay__["a" /* default */],
	simulateEvent:__WEBPACK_IMPORTED_MODULE_4__simulateEvent__["a" /* default */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextPage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prePage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clickAd__ = __webpack_require__(14);




/* harmony default export */ __webpack_exports__["a"] = ({
	nextPage:__WEBPACK_IMPORTED_MODULE_0__nextPage__["a" /* default */],
	prePage:__WEBPACK_IMPORTED_MODULE_1__prePage__["a" /* default */],
	clickAd:__WEBPACK_IMPORTED_MODULE_2__clickAd__["a" /* default */]
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__API__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__strategy__ = __webpack_require__(6);




$('.J_getUrl').click(async function(){
	let a = await __WEBPACK_IMPORTED_MODULE_0__API__["a" /* default */].getUrl();

})

$('.J_nextPage').click(async function(){
	__WEBPACK_IMPORTED_MODULE_1__strategy__["a" /* default */].nextPage();
})

$('.J_prePage').click(function(){
	__WEBPACK_IMPORTED_MODULE_1__strategy__["a" /* default */].prePage();
})

$('.J_clickAd').click(function(){
	var link = $('.J_toUrl').val();
	__WEBPACK_IMPORTED_MODULE_1__strategy__["a" /* default */].clickAd({
		title:'JS中手动触发事件的方法_bdstjk_新浪博客',
		link:'blog.sina.com.cn/s/blo... '
	})
})

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextPage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prePage__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clickAd__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clickAd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__clickAd__);




/* harmony default export */ __webpack_exports__["a"] = ({
	nextPage:__WEBPACK_IMPORTED_MODULE_0__nextPage__["a" /* default */],
	prePage:__WEBPACK_IMPORTED_MODULE_1__prePage__["a" /* default */],
	clickAd:__WEBPACK_IMPORTED_MODULE_2__clickAd__["default"]
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_baidu_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__API_index_js__ = __webpack_require__(0);




async function nextPage(){
	let url = await __WEBPACK_IMPORTED_MODULE_1__API_index_js__["a" /* default */].getUrl();
	if(/www\.baidu\.com/.test(url)){
		__WEBPACK_IMPORTED_MODULE_0__domain_baidu_index_js__["a" /* default */].nextPage();
	}
} 

/* harmony default export */ __webpack_exports__["a"] = (nextPage);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__API__ = __webpack_require__(0);


async function nextPage(){
	let tab = await __WEBPACK_IMPORTED_MODULE_0__API__["a" /* default */].getCurrentWindow();
	let tabId = tab[0].id;	
	chrome.tabs.sendMessage(tabId, {method: "doEval",string:`$('#page .n:last-child')[0].click();`}, function(data) {});

}


/* harmony default export */ __webpack_exports__["a"] = (nextPage);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__API__ = __webpack_require__(0);


async function prePage(){
	let tab = await __WEBPACK_IMPORTED_MODULE_0__API__["a" /* default */].getCurrentWindow();
	let tabId = tab[0].id;
	console.log(tabId)
	chrome.tabs.sendMessage(tabId, {method: "doEval",string:`$('#page .n').filter(function(){return $(this).text().indexOf('上一页')!==-1})[0].click();`}, function(data) {});
		
}


/* harmony default export */ __webpack_exports__["a"] = (prePage);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_baidu_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__API_index_js__ = __webpack_require__(0);




async function prePage(){
	let url = await __WEBPACK_IMPORTED_MODULE_1__API_index_js__["a" /* default */].getUrl();
	debugger;
	if(/www\.baidu\.com/.test(url)){
		__WEBPACK_IMPORTED_MODULE_0__domain_baidu_index_js__["a" /* default */].prePage();
	}
} 

/* harmony default export */ __webpack_exports__["a"] = (prePage);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = (function(delayTime=0){
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve();
		},delayTime)
	})
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function simulateMousedown(node) {
  var evt = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: window
  });
  var canceled = !node.dispatchEvent(evt);
}


/* harmony default export */ __webpack_exports__["a"] = (function(event,node){
	if(event.toLocaleLowerCase()==='mousedown'){
		simulateMousedown(node);
	}
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module parse failed: The keyword 'await' is reserved (4:11)\nYou may need an appropriate loader to handle this file type.\n| \r\n| export default function(param={title:'',link:''}){\r\n| \tlet url = await API.getUrl();\r\n| \tif(/www\\.baidu\\.com/.test(url)){\r\n| \t\tBaidu.clickAd(param);\r");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__API__ = __webpack_require__(0);


async function clickAd(param){
	let tab = await __WEBPACK_IMPORTED_MODULE_0__API__["a" /* default */].getCurrentWindow();
	let tabId = tab[0].id;

	chrome.tabs.sendMessage(tabId, {
		method: "clickAd",
		data:param
	}, function(data) {

	});
		
}

/* harmony default export */ __webpack_exports__["a"] = (clickAd);


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map