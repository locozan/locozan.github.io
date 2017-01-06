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

	void function (Bounce) {

	  var model = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,];
	  var figure = [];
	  var num = 0;
	  var index = 0;
	  var main = document.querySelector('.main');
	  // console.log( model.length );
	  function timeline(callback, time) {
	    //传两个参数回调，时间
	    var start = new Date().getTime(); //记录一个start新时间
	    var started = false,
	        ended = false;

	    void function mainloop() {
	      var now = void 0,
	          rate = void 0;

	      now = new Date().getTime(); //在记录一个现在的时间

	      if (started) {
	        //如果started存在
	        rate = (now - start) / time; //

	        if (rate < 1) {
	          callback(rate);
	        }

	        if (rate >= 1 && !ended) {
	          ended = true;
	          callback(1);
	        }
	      } else {
	        started = true;
	        callback(0);
	      }

	      if (!ended) {
	        requestAnimationFrame(mainloop);
	      }
	    }();
	  };

	  for (var i = 0; i < model.length / 19; i++) {
	    for (var j = 0; j < 19; j++) {
	      //第一个4
	      if (i >= 6 && i < 14 && j < 10) {
	        continue;
	      }
	      if (j > 12 && i < 14) {
	        continue;
	      }
	      if (i > 19 && i < 34 && j < 10) {
	        continue;
	      }
	      if (i > 19 && i < 34 && j > 12) {
	        continue;
	      }
	      if (i > 27 && i < 36) {
	        continue;
	      }
	      //第二个0
	      if (i > 41 && i < 57 && j > 2 && j < 16) {
	        continue;
	      }
	      if (i > 62 && i < 71) {
	        continue;
	      }
	      if (i > 70 && i < 85 && j > 12) {
	        continue;
	      }
	      //第三个4 
	      if (i > 90 && j > 12) {
	        continue;
	      }
	      if (i > 76 && i < 85 && j < 10) {
	        continue;
	      }
	      if (i > 90 && j < 10) {
	        continue;
	      }
	      var _grid = document.createElement('div');
	      _grid.className = 'grid';
	      _grid.setAttribute("data-index", '' + j * 15);
	      _grid.setAttribute("data-left", '' + i * 6);
	      _grid.setAttribute("data-dex", '' + index++);
	      _grid.style.cssText = '\n            position: absolute;\n            left:' + i * 6 + 'px;\n            top:' + j * 15 + 'px;\n            height:' + 4 + 'px;';
	      main.appendChild(_grid);
	      figure.push(j * 15);
	    }
	  }
	  var grid = document.querySelectorAll('.grid');

	  var gridArr = [];
	  for (var _i = 0; _i < grid.length; _i++) {
	    if (_i % 7 === 0) {
	      grid[_i].style.borderRadius = '50%';
	      grid[_i].style.width = 1 + 'px';
	      grid[_i].style.border = '2px solid #2F92F5';
	      grid[_i].style.background = '#FFF';
	      // console.log( grid[i].dataset.index );
	    }
	  }

	  gridArr = Array.prototype.slice.call(grid);
	  // 区域随机数
	  function RandomNumBoth(Min, Max) {
	    var Range = Max - Min;
	    var Rand = Math.random();
	    var num = Min + Math.round(Rand * Range); //四舍五入
	    return num;
	  }

	  //随机生成数组里的任意几个数
	  function randomNum(alls, now) {
	    var nowarr = [];

	    for (var _i2 = 0; _i2 < now; _i2++) {
	      nowarr.push(alls.splice(Math.floor(Math.random() * alls.length), 1)[0]);
	    }
	    return nowarr;
	  }

	  var run = setInterval(function () {
	    if (!gridArr.length) clearInterval(run);

	    var random = randomNum(gridArr, 100);

	    var _loop = function _loop(_i3) {
	      if (random[_i3] !== undefined) {
	        (function () {
	          var a = Math.random() * 20;
	          timeline(function (r) {
	            // console.log( random[i].dataset.dex );
	            random[_i3].style.top = Bounce(r, figure[random[_i3].dataset.dex], 350 + a - figure[random[_i3].dataset.dex], 1) + 'px';
	            // random[i].style.webkitTransform = `translate(${220}px,${220}px);`
	            random[_i3].style.transform = 'rotate( ' + RandomNumBoth(45, 550) + 'deg )';
	          }, 2000);
	          setTimeout(function () {
	            random[_i3].style.left = RandomNumBoth(40, 550) + RandomNumBoth(-50, 50) + 'px';
	          }, 1000);
	        })();
	      }
	    };

	    for (var _i3 = 0; _i3 < random.length; _i3++) {
	      _loop(_i3);
	    }
	  }, 300);
	}(function Bounce(index, offset, target, framesNum) {
	  if ((index /= framesNum) < 1 / 2.75) return target * (7.5625 * index * index) + offset;else if (index < 2 / 2.75) return target * (7.5625 * (index -= 1.5 / 2.75) * index + .75) + offset;else if (index < 2.5 / 2.75) return target * (7.5625 * (index -= 2.25 / 2.75) * index + .9375) + offset;else return target * (7.5625 * (index -= 2.625 / 2.75) * index + .984375) + offset;
	});

/***/ }
/******/ ]);