/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	window.onload = function () {
	  var disp = document.querySelector('#disp');
	  setTimeout(function () {
	    document.body.removeChild(disp);
	  }, 300);

	  var container = document.querySelector('.container');
	  window.addEventListener('resize', function (event) {
	    waterfall();
	  }, false);

	  function waterfall() {
	    var screenWidth = document.documentElement.clientWidth;
	    var box = document.querySelectorAll('.box');
	    var oneBoxWidth = box[0].offsetWidth;
	    var oneBoxHeight = box[0].offsetHeight;
	    var num = Math.floor(screenWidth / oneBoxWidth);
	    var boxArr = new Array();
	    var boxH = [];
	    for (var i in box) {
	      if (box[i].className === 'box') {
	        boxArr.push(box[i]);
	      }
	    }

	    container.style.cssText = 'width: ' + num * oneBoxWidth + 'px;margin: 0 auto;margin-top: 48px;';
	    for (var _i = 0; _i < boxArr.length; _i++) {
	      var boxHeight = boxArr[_i].offsetHeight;
	      if (_i < num) {
	        boxH[_i] = boxHeight;
	        // boxArr[i].style.left = i * oneBoxWidth + 'px';
	        // boxArr[i].style.top = 48 + 'px';
	        boxArr[_i].style.transform = 'translate3d(' + _i * oneBoxWidth + 'px, 0px, 0)';
	      } else {
	        (function () {
	          var minH = Math.min.apply(null, boxH);
	          var index = function () {
	            for (var _index in boxH) {
	              if (boxH[_index] === minH) {
	                return _index;
	              }
	            }
	          }();
	          // boxArr[i].style.top = minH + 48 + 'px';
	          // boxArr[i].style.left = boxArr[index].offsetLeft + 'px';

	          boxArr[_i].style.transform = 'translate3d(' + index * oneBoxWidth + 'px, ' + minH + 'px, 0)';
	          boxH[index] += boxArr[_i].offsetHeight;
	        })();
	      }
	    }
	  }
	  waterfall();
	};

/***/ }
/******/ ]);