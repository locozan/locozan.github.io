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

	"use strict";

	void function () {
	  var config = {
	    row: 15,
	    col: 15,
	    size: 39.5,
	    humanPlayer: "black",
	    aiPlayer: "white",
	    me: true,
	    chessArr: [], //记录所有棋子
	    index: 0
	  };
	  var main = document.querySelector('.main');
	  var wins = []; //赢法数组
	  var myWin = []; //统计我方赢法情况
	  var computerWin = []; //统计计算机方赢法情况
	  var over = false; //表示棋有没有结束

	  for (var i = 0; i < config.row; i++) {
	    config.chessArr[i] = [];
	    for (var j = 0; j < config.col; j++) {
	      var grid = document.createElement('div');
	      grid.className = 'grid';
	      grid.setAttribute("data-index", "" + config.index++);
	      grid.style.cssText = "\n            position: absolute;\n            left:" + (i * config.size - config.size / 2) + "px;\n            top:" + (j * config.size - config.size / 2) + "px;\n            width:" + config.size + "px;\n            height:" + config.size + "px;";
	      main.appendChild(grid);
	      config.chessArr[i][j] = 0;
	    }
	  }
	  //初始化赢法数组创建二维数组
	  for (var _i = 0; _i < 15; _i++) {
	    wins[_i] = [];
	    for (var _j = 0; _j < 15; _j++) {
	      wins[_i][_j] = [];
	    }
	  }
	  console.log(wins);
	  var count = 0;
	  //横线赢法
	  for (var _i2 = 0; _i2 < 15; _i2++) {
	    for (var _j2 = 0; _j2 < 11; _j2++) {
	      //wins[0][0][0] = true
	      //wins[0][1][0] = true
	      //wins[0][2][0] = true
	      //wins[0][3][0] = true
	      //wins[0][4][0] = true

	      //wins[0][1][1] = true
	      //wins[0][2][1] = true
	      //wins[0][3][1] = true
	      //wins[0][4][1] = true
	      //wins[0][5][1] = true
	      for (var k = 0; k < 5; k++) {
	        wins[_i2][_j2 + k][count] = true;
	      }
	      count++;
	    }
	  }
	  //竖线赢法
	  for (var _i3 = 0; _i3 < 15; _i3++) {
	    for (var _j3 = 0; _j3 < 11; _j3++) {
	      //wins[0][0][0] = true
	      //wins[1][0][0] = true
	      //wins[2][0][0] = true
	      //wins[3][0][0] = true
	      //wins[4][0][0] = true

	      //wins[0][0][1] = true
	      //wins[1][0][1] = true
	      //wins[2][0][1] = true
	      //wins[3][0][1] = true
	      //wins[4][0][1] = true
	      for (var _k = 0; _k < 5; _k++) {
	        wins[_j3 + _k][_i3][count] = true;
	      }
	      count++;
	    }
	  }
	  //斜线
	  for (var _i4 = 0; _i4 < 11; _i4++) {
	    for (var _j4 = 0; _j4 < 11; _j4++) {
	      //wins[0][0][0] = true
	      //wins[1][1][0] = true
	      //wins[2][2][0] = true
	      //wins[3][3][0] = true
	      //wins[4][4][0] = true

	      //wins[0][1][1] = true
	      //wins[1][2][1] = true
	      //wins[2][3][1] = true
	      //wins[3][4][1] = true
	      //wins[4][5][1] = true
	      for (var _k2 = 0; _k2 < 5; _k2++) {
	        wins[_i4 + _k2][_j4 + _k2][count] = true;
	      }
	      count++;
	    }
	  }
	  //反斜线
	  for (var _i5 = 0; _i5 < 11; _i5++) {
	    for (var _j5 = 14; _j5 > 3; _j5--) {
	      //wins[0][14][0] = true
	      //wins[1][13][0] = true
	      //wins[2][12][0] = true
	      //wins[3][11][0] = true
	      //wins[4][10][0] = true

	      //wins[0][13][1] = true
	      //wins[1][12][1] = true
	      //wins[2][11][1] = true
	      //wins[3][10][1] = true
	      //wins[4][19][1] = true
	      for (var _k3 = 0; _k3 < 5; _k3++) {
	        wins[_i5 + _k3][_j5 - _k3][count] = true;
	      }
	      count++;
	    }
	  }

	  console.log(count);
	  for (var _i6 = 0; _i6 < count; _i6++) {
	    myWin[_i6] = 0;
	    computerWin[_i6] = 0;
	  }

	  var oneStap = function oneStap(i, j, me, target) {
	    var chess = document.createElement('div');
	    chess.className = 'black';
	    chess.setAttribute("data-index", i + "," + j);
	    chess.setAttribute("data-color", 'white');
	    target.appendChild(chess);
	    config.chessArr[i][j] = 1;
	  };
	  var touchStart = void 0,
	      touchMove = void 0,
	      touchEnd = void 0;
	  var isMobile = function isMobile() {
	    return (/mobile/gi.test(navigator.userAgent)
	    );
	  };
	  touchStart = isMobile() ? 'touchstart' : 'mousedown';
	  touchMove = isMobile() ? 'touchmove' : 'mousemove';
	  touchEnd = isMobile() ? 'touchend' : 'mouseup';

	  function playSound(src, time) {
	    var audio = document.createElement('audio');
	    audio.className = 'snd';
	    audio.setAttribute('src', "" + src);
	    audio.autoplay = true;
	    audio.load();
	    document.body.appendChild(audio);

	    setTimeout(function () {
	      var snd = document.querySelector('.snd');
	      snd.parentNode.removeChild(snd);
	    }, time);
	  }

	  main.addEventListener(touchStart, function (event) {
	    var target = event.target;
	    console.log(target);
	    if (target.className === 'black' || target.className === 'white') {
	      return;
	    }
	    if (target.querySelector('.black') || target.querySelector('.white')) {
	      return;
	    }
	    playSound('../src/music/run.wav', 800);

	    var i = Math.floor(target.offsetLeft / 39.5 + 1);
	    var j = Math.floor(target.offsetTop / 39.5 + 1);
	    if (target.className === 'grid' && !target.querySelector('.black')) {
	      if (config.chessArr[i][j] === 0) {
	        // if( config.me === true ){
	        oneStap(i, j, config.me, target);
	        // }else{
	        //  oneStap( i, j, config.me,target );
	        // }
	      }
	    }
	    for (var _k4 = 0; _k4 < count; _k4++) {
	      if (wins[i][j][_k4]) {
	        myWin[_k4]++; //有存在，记录一次
	        computerWin[_k4] = 6; //设为6，表示不能赢了
	        if (myWin[_k4] === 5) {
	          //如果第K种赢法加到5
	          over = true;
	          playSound('../src/music/oo.wav', 400);
	          setTimeout(function () {
	            alert("你赢了");
	            location.reload();
	          }, 500);
	        }
	      }
	    }
	    if (!over) {
	      config.me = !config.me;
	      computerWinAI();
	    }
	  }, false);

	  //计算机AI
	  var computerWinAI = function computerWinAI() {
	    var myScore = []; // 我方得分
	    var max = 0; //保存的最高分数
	    var u = 0,
	        v = 0; //最高分数点的坐标
	    var computerScore = []; //计算机得分
	    for (var _i7 = 0; _i7 < 15; _i7++) {
	      myScore[_i7] = [];
	      computerScore[_i7] = [];
	      for (var _j6 = 0; _j6 < 15; _j6++) {
	        myScore[_i7][_j6] = 0;
	        computerScore[_i7][_j6] = 0;
	      }
	    }
	    for (var _i8 = 0; _i8 < 15; _i8++) {
	      for (var _j7 = 0; _j7 < 15; _j7++) {
	        if (config.chessArr[_i8][_j7] === 0) {
	          //表示可以落子
	          for (var _k5 = 0; _k5 < count; _k5++) {
	            //遍历所有count，表示落的子是有价值的
	            if (wins[_i8][_j7][_k5]) {
	              if (myWin[_k5] === 1) {
	                //表示我方下一个子
	                myScore[_i8][_j7] += 200; //加分数分数 
	              } else if (myWin[_k5] === 2) {
	                myScore[_i8][_j7] += 400; //加分数分数 
	              } else if (myWin[_k5] === 3) {
	                myScore[_i8][_j7] += 2000; //加分数分数 
	              } else if (myWin[_k5] === 4) {
	                myScore[_i8][_j7] += 10000; //加分数分数 
	              }
	              if (computerWin[_k5] === 1) {
	                //表示计算机自己的一个子
	                computerScore[_i8][_j7] += 220; //加分数分数 
	              } else if (computerWin[_k5] === 2) {
	                computerScore[_i8][_j7] += 420; //加分数分数 
	              } else if (computerWin[_k5] === 3) {
	                computerScore[_i8][_j7] += 2200; //加分数分数 
	              } else if (computerWin[_k5] === 4) {
	                computerScore[_i8][_j7] += 12000; //加分数分数 
	              }
	            }
	          }
	          if (myScore[_i8][_j7] > max) {
	            max = myScore[_i8][_j7];
	            u = _i8;
	            v = _j7;
	          } else if (myScore[_i8][_j7] === max) {
	            if (computerScore[_i8][_j7] > computerScore[u][v]) {
	              u = _i8;
	              v = _j7;
	            }
	          }
	          if (computerScore[_i8][_j7] > max) {
	            max = computerScore[_i8][_j7];
	            u = _i8;
	            v = _j7;
	          } else if (computerScore[_i8][_j7] === max) {
	            if (myScore[_i8][_j7] > myScore[u][v]) {
	              u = _i8;
	              v = _j7;
	              //u,v就是最高的点 也是计算机要落下的子
	            }
	          }
	        }
	      }
	    }
	    // oneStap(u,v,false);
	    // oneStap( i, j, config.me,target );
	    var chess = document.createElement('div');
	    chess.className = 'white';
	    chess.setAttribute("data-index", u + "," + v);

	    var grid = document.createElement('div');
	    grid.className = 'grid';
	    grid.setAttribute("data-index", u + "," + v);
	    grid.style.cssText = "\n      position: absolute;\n      left:" + (u * 39.5 - 1 - config.size / 2) + "px;\n      top:" + (v * 39.5 - 1 - config.size / 2) + "px;\n      width:" + config.size + "px;\n      height:" + config.size + "px;";
	    grid.appendChild(chess);
	    main.appendChild(grid);
	    console.log(u, v);
	    config.chessArr[u][v] = 2;
	    //更新赢法统计数组
	    for (var _k6 = 0; _k6 < count; _k6++) {
	      if (wins[u][v][_k6]) {
	        computerWin[_k6]++;
	        myWin[_k6] = 6;
	        if (computerWin[_k6] === 5) {
	          playSound('../src/music/oo.wav', 500);
	          over = true;
	          setTimeout(function () {
	            alert("计算机赢了");
	            location.reload();
	          }, 500);
	        }
	      }
	    }
	    if (!over) {
	      config.me = !config.me;
	    }
	  };
	}();

/***/ }
/******/ ]);