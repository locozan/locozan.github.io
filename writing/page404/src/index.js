void function( Bounce ){
  
  const model=[
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ]
  let figure = [];
  let num = 0;
  let index =0;
  let main = document.querySelector( '.main' )
  // console.log( model.length );
  function timeline( callback, time ){//传两个参数回调，时间
    let start = new Date().getTime();//记录一个start新时间
    let started = false, ended = false;

    void function mainloop(){
      let now, rate;

      now = new Date().getTime();//在记录一个现在的时间

      if( started ){//如果started存在
        rate = ( now - start ) / time;//

        if( rate < 1 ){
          callback( rate );  
        }

        if( rate >= 1 && !ended ){
          ended = true;
          callback( 1 );
        }
      }else{
        started = true;
        callback( 0 );
      }

      if( !ended ){
        requestAnimationFrame( mainloop ); 
      }
    }();
  };
  
  for( let i = 0; i < model.length / 19; i ++ ){ 
    for( let j = 0; j < 19; j ++ ){
      //第一个4
      if( i >= 6 && i < 14 && j < 10 ){
        continue;
      }
      if( j > 12 && i < 14 ){
        continue;
      }
      if( i>19 && i < 34 && j < 10 ){
        continue;
      }
      if( i>19 && i < 34 && j > 12 ){
        continue;
      }
      if( i >27 && i < 36 ){
        continue;
      }
      //第二个0
      if( i > 41 && i < 57 && j > 2 && j < 16 ){
        continue; 
      }
      if( i > 62 && i < 71 ){
        continue; 
      }
      if( i > 70 && i < 85 && j > 12 ){
        continue;
      }
      //第三个4 
      if( i > 90 && j > 12 ){
        continue;
      }
      if( i > 76 && i < 85 && j < 10 ){
        continue;
      }
      if( i > 90 && j < 10 ){
        continue;
      }
      let grid = document.createElement('div'); 
          grid.className = 'grid';
          grid.setAttribute("data-index", `${j*15}`);
          grid.setAttribute("data-left", `${i*6}`);
          grid.setAttribute("data-dex", `${index++}`);
          grid.style.cssText = `
            position: absolute;
            left:${i*6}px;
            top:${j*15}px;
            height:${ 4 }px;`
          main.appendChild( grid );
          figure.push(j*15);
    }
  }
  let grid = document.querySelectorAll( '.grid' );

  let gridArr = [];
  for( let i = 0; i < grid.length; i++ ){
    if( i % 7 === 0 ){
      grid[i].style.borderRadius = '50%';
      grid[i].style.width = 1 + 'px';
      grid[i].style.border = '2px solid #2F92F5';
      grid[i].style.background = '#FFF';
      // console.log( grid[i].dataset.index );
    }
  }

  gridArr = Array.prototype.slice.call(grid);
  // 区域随机数
  function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
  } 
  
  //随机生成数组里的任意几个数
  function randomNum( alls, now ){
    let nowarr = [];
  
    for( let i = 0; i < now; i ++ ){
      nowarr.push(alls.splice(Math.floor(Math.random()*alls.length),1)[0]); 
    } 
      return nowarr;
  }

  let run = setInterval( function(){
    if( !gridArr.length )
      clearInterval(run);

    let random = randomNum( gridArr, 100 )

    for( let i = 0; i < random.length; i ++ ){
      if( random[i] !== undefined ){
        let a = Math.random() * 20;
        timeline( function( r ){
          // console.log( random[i].dataset.dex );
          random[i].style.top = Bounce( r, figure[random[i].dataset.dex], 350 + a - figure[random[i].dataset.dex], 1 ) + 'px';
          // random[i].style.webkitTransform = `translate(${220}px,${220}px);`
          random[i].style.transform = `rotate( ${ RandomNumBoth(45,550) }deg )`;
            
        }, 2000 );
        setTimeout( function(){
          random[i].style.left = RandomNumBoth(40,550) + RandomNumBoth(-50,50) + 'px';
        }, 1000 );
      }
    }
  }, 300 );

  
  
  




}(
  function Bounce(index, offset, target, framesNum){
    if((index /= framesNum) < (1 / 2.75))
      return target * (7.5625 * index * index) + offset;
    else if(index < (2 / 2.75))
      return target * (7.5625 * (index -= (1.5 / 2.75)) * index + .75) + offset;
    else if(index < (2.5 / 2.75))
      return target * (7.5625 * (index -= (2.25 / 2.75)) * index + .9375) + offset;
    else
      return target * (7.5625 * (index -= (2.625 / 2.75)) * index + .984375) + offset;
  }
);