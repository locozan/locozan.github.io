void function(){
  let config = { 
    row : 15,
    col : 15,
    size: 39.5,
    humanPlayer: "black", 
    aiPlayer: "white",
    me: true,
    chessArr: [], //记录所有棋子
    index : 0
  }
  let main = document.querySelector( '.main' );
  let wins = [];//赢法数组
  let myWin = [];//统计我方赢法情况
  let computerWin = [];//统计计算机方赢法情况
  let over = false;//表示棋有没有结束

  for( let i = 0; i < config.row; i ++ ){
    config.chessArr[i] = [];
    for( let j = 0; j < config.col; j ++ ){
      let grid = document.createElement('div');
          grid.className = 'grid';
          grid.setAttribute("data-index", `${config.index ++}`);
          grid.style.cssText = `
            position: absolute;
            left:${i* config.size - config.size / 2}px;
            top:${j*config.size - config.size / 2}px;
            width:${config.size}px;
            height:${config.size}px;`
          main.appendChild( grid );
          config.chessArr[i][j] = 0;
    }
  }
  //初始化赢法数组创建二维数组
  for( let i = 0; i < 15; i ++ ){
    wins[i] = [];
    for( let j = 0; j < 15; j ++ ){
       wins[i][j] = [];
     } 
  }
  console.log( wins );
  let count = 0;
  //横线赢法
  for( let i = 0; i < 15; i ++ ){
    for( let j = 0; j < 11; j ++ ){
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
      for( let k = 0; k < 5; k ++ ){
        wins[i][j + k][count] = true;
      }
      count ++;
    }
  }
  //竖线赢法
  for( let i = 0; i < 15; i ++ ){
    for( let j = 0; j < 11; j ++ ){
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
      for( let k = 0; k < 5; k ++ ){
        wins[j + k][i][count] = true;
      }
      count ++;
    }
  }
  //斜线
  for( let i = 0; i < 11; i ++ ){
    for( let j = 0; j < 11; j ++ ){
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
      for( let k = 0; k < 5; k ++ ){
        wins[i + k][j + k][count] = true;
      }
      count ++;
    }
  }
  //反斜线
  for( let i = 0; i < 11; i ++ ){
    for( let j = 14; j > 3; j -- ){
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
      for( let k = 0; k < 5; k ++ ){
        wins[i + k][j - k][count] = true;
      }
      count ++;
    }
  }

  console.log( count );
  for( let i = 0; i < count; i ++ ){
    myWin[i] = 0;
    computerWin[i] = 0;
  }


    let oneStap = function( i, j, me, target ){
        let chess = document.createElement('div');
        chess.className = 'black';
        chess.setAttribute("data-index", `${i},${j}`);
        chess.setAttribute("data-color", 'white');
        target.appendChild( chess );
        config.chessArr[i][j] = 1;
    }
  let touchStart,touchMove,touchEnd;
  const isMobile = ()=> /mobile/gi.test( navigator.userAgent );
      touchStart = isMobile() ? 'touchstart' : 'mousedown';
      touchMove = isMobile() ? 'touchmove' : 'mousemove';
      touchEnd = isMobile() ? 'touchend' : 'mouseup';


  function playSound(src,time){ 
    let audio = document.createElement('audio');
    audio.className = 'snd';
    audio.setAttribute( 'src',`${src}` ); 
    audio.autoplay = true;
    audio.load();
    document.body.appendChild( audio );

    setTimeout( function(){
      let snd = document.querySelector( '.snd' );
      snd.parentNode.removeChild( snd );
    }, time );
  }

  main.addEventListener( touchStart, function( event ){
    let target = event.target;
    console.log( target );
    if( target.className === 'black' || target.className === 'white' ){
      return;
    }
    if( target.querySelector( '.black' ) || target.querySelector( '.white' ) ){
      return;
    }
    playSound('../src/music/run.wav', 800);

    let i = Math.floor(target.offsetLeft / 39.5 + 1);
    let j = Math.floor(target.offsetTop / 39.5 + 1);
        if( target.className === 'grid' && !target.querySelector( '.black' ) ){
          if( config.chessArr[i][j] === 0 ){
            // if( config.me === true ){
                oneStap( i, j, config.me,target );  
            // }else{
            //  oneStap( i, j, config.me,target );
            // }
          }
        }
        for( let k = 0; k < count; k ++ ){
          if( wins[i][j][k] ){
            myWin[k]++;//有存在，记录一次
            computerWin[k]=6//设为6，表示不能赢了
            if( myWin[k] === 5 ){//如果第K种赢法加到5
              over = true;
              playSound('../src/music/oo.wav', 400);
              setTimeout( function(){
                alert("你赢了");
                location.reload();
              }, 500 );
            }
          }
        }
        if( !over ){
          config.me = !config.me;
          computerWinAI();
        }


  },false);

  //计算机AI
  let computerWinAI = function(){
    let myScore = [];// 我方得分
    let max = 0; //保存的最高分数
    let u=0,v=0; //最高分数点的坐标
    let computerScore = [];//计算机得分
    for( let i = 0; i < 15; i ++ ){
      myScore[i] = [];
      computerScore[i] = [];
      for( let j = 0; j < 15; j ++ ){
        myScore[i][j] = 0;
        computerScore[i][j] = 0;
      }
    }
    for( let i = 0; i < 15; i ++ ){
      for( let j = 0; j < 15; j ++ ){
        if( config.chessArr[i][j] === 0 ){//表示可以落子
          for( let k = 0; k < count; k ++ ){//遍历所有count，表示落的子是有价值的
            if( wins[i][j][k] ){
              if( myWin[k] === 1 ){//表示我方下一个子
                myScore[i][j] += 200;//加分数分数 
              }else if( myWin[k] === 2 ){
                myScore[i][j] += 400;//加分数分数 
              }else if( myWin[k] === 3 ){
                myScore[i][j] += 2000;//加分数分数 
              }else if( myWin[k] === 4 ){
                myScore[i][j] += 10000;//加分数分数 
              }
              if( computerWin[k] === 1 ){//表示计算机自己的一个子
                computerScore[i][j] += 220;//加分数分数 
              }else if( computerWin[k] === 2 ){
                computerScore[i][j] += 420;//加分数分数 
              }else if( computerWin[k] === 3 ){
                computerScore[i][j] += 2200;//加分数分数 
              }else if( computerWin[k] === 4 ){
                computerScore[i][j] += 12000;//加分数分数 
              }
            }
          }
          if( myScore[i][j] > max ){
            max = myScore[i][j];
            u = i;
            v = j;
          }else if(myScore[i][j] === max){
            if( computerScore[i][j] > computerScore[u][v] ){
              u = i;
              v = j;
            }
          }
          if( computerScore[i][j] > max ){
            max = computerScore[i][j];
            u = i;
            v = j;
          }else if(computerScore[i][j] === max){
            if( myScore[i][j] > myScore[u][v] ){
              u = i;
              v = j;
              //u,v就是最高的点 也是计算机要落下的子
            }
          }
        }
      }
    }
    // oneStap(u,v,false);
    // oneStap( i, j, config.me,target );
    let chess = document.createElement('div');
    chess.className = 'white';
    chess.setAttribute("data-index", `${u},${v}`);


    let grid = document.createElement('div');
    grid.className = 'grid';
    grid.setAttribute("data-index", `${u},${v}`);
    grid.style.cssText = `
      position: absolute;
      left:${u * 39.5 - 1 - (config.size / 2)}px;
      top:${v * 39.5 - 1 - (config.size / 2)}px;
      width:${config.size}px;
      height:${config.size}px;`
    grid.appendChild( chess );
    main.appendChild( grid );
    console.log( u, v );
    config.chessArr[u][v] = 2
    //更新赢法统计数组
    for( let k = 0; k < count; k ++ ){
      if( wins[u][v][k] ){
        computerWin[k]++;
        myWin[k] = 6;
        if( computerWin[k] === 5 ){
          playSound('../src/music/oo.wav', 500);
          over = true;
          setTimeout( function(){
            alert("计算机赢了");
            location.reload();
          }, 500 );
        }
      }
    }
    if( !over ){
      config.me = !config.me;
    }
  }




}();