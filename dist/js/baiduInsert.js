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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCurrentWindow__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getUrl__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getCScriptWindow__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delay__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulateEvent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mockClick__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__getCurrentWindow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__getUrl__["a"]; });
/* unused harmony reexport getCScriptWindow */
/* unused harmony reexport delay */
/* unused harmony reexport simulateEvent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__mockClick__["a"]; });









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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__API__ = __webpack_require__(0);



function clickAd(param={title:`宣布剿灭伊斯兰国 结果被袭击打脸 - 法律法规网`,link:`www.lc123.net/zll/shh/... `}){
	let title = $.trim(param.title),
		link = $.trim(param.link);

	var adNode = $('.c-container').filter(function(i){
		let _title = $.trim($(this).find('.t a[data-click]').text()),
			_link = $.trim($(this).find('.c-showurl').text());
		if(_title===title || _link===link){
			return true;
		}else{
			return false;
		}
	}).find('.t [data-click]');


	if(adNode.length > 0){
		Object(__WEBPACK_IMPORTED_MODULE_0__API__["c" /* mockClick */])(adNode[0])
		return true;
	}
	return false;
	

}

/* harmony default export */ __webpack_exports__["a"] = (clickAd);


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

/* unused harmony default export */ var _unused_webpack_default_export = (async function(param={tabId:1}){
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


/* unused harmony default export */ var _unused_webpack_default_export = (function(delayTime=0){
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve();
		},delayTime)
	})
});

/***/ }),
/* 6 */
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


/* unused harmony default export */ var _unused_webpack_default_export = (function(event,node){
	if(event.toLocaleLowerCase()==='mousedown'){
		simulateMousedown(node);
	}
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mockClick;
function mockClick(element) {

  // DOM 2 Events
  var dispatchMouseEvent = function (target, var_args) {
    var e = document.createEvent("MouseEvents");
    // If you need clientX, clientY, etc., you can call
    // initMouseEvent instead of initEvent
    e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
    console.log(target)
    target.dispatchEvent(e);
  };
  dispatchMouseEvent(element, 'mouseover', true, true);
  dispatchMouseEvent(element, 'mousedown', true, true);
  dispatchMouseEvent(element, 'click', true, true);
  dispatchMouseEvent(element, 'mouseup', true, true);
}

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clickAd__ = __webpack_require__(2);




chrome.runtime.onMessage.addListener(function(msg,sender,callback){
	switch(msg.method){
		case 'clickAd':
			callback(Object(__WEBPACK_IMPORTED_MODULE_0__clickAd__["a" /* default */])(msg.data));
			break;
	}
})





/***/ })
/******/ ]);
//# sourceMappingURL=baiduInsert.js.map