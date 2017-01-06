  import models from "../src/scripts/models/models.js";
  
  let screenWidth = document.documentElement.clientWidth;//屏幕宽=可视窗口宽
  let screenHeight = document.documentElement.clientHeight;//屏幕高=可视窗口高
  let touchStart,touchMove,touchEnd;
  const container = document.querySelector( '#container' );
  const keyboard = document.querySelector( '.keyboard' );
  const shut = document.querySelector( '.shut' );
  let processP1 = document.querySelector( '.process-p1' );
  let resultP2 = document.querySelector( '.result-p2' );
  const p1 = document.querySelector( '.p1' );
  let relation = '';//关系
  let targetName = '';//点击的称呼
  let processP1Show = '';//显示层
  let space = '';//临时称呼存放变量
  let record = [];//存放历史记录
  let recordrResult = [];
  let decide = true;
  let update = true;
  let gender = true;


  // console.log( screenWidth, screenHeight );
  const isMobile = ()=> /mobile/gi.test( navigator.userAgent );
    touchStart = isMobile() ? 'touchstart' : 'mousedown';
    touchMove = isMobile() ? 'touchmove' : 'mousemove';
    touchEnd = isMobile() ? 'touchend' : 'mouseup';


  window.addEventListener("resize", function( event ){
    screenWidth = document.documentElement.clientWidth;
    screenHeight = document.documentElement.clientHeight;
    container.style.cssText = `width:${ screenWidth }px; height:${ screenHeight }px;`;
  },false);

  container.style.cssText = `width:${ screenWidth }px; height:${ screenHeight }px;`;

  keyboard.addEventListener(touchStart, function( event ){
    let target = event.target;
        if( target.className === 'fuqin' || 
          target.className === 'muqin' || 
          target.className === 'gege' || 
          target.className === 'jiejie' || 
          target.className === 'zhangfu' || 
          target.className === 'qizi' || 
          target.className === 'didi' ||
          target.className === 'meimei' ||
          target.className === 'erzi' ||
          target.className === 'nver'){
          targetName = target.value;//funqin
          resultP2.innerHTML = models[target.value] //爸爸
          processP1Show = target.value;//funqin
          relation = target.value;
        }
        if( target.className === 'AC' ){
          relation = '';
          targetName = '';
          resultP2.innerHTML = '我';
          processP1.innerHTML = '';
          processP1Show = '';
          space = '';
          record = [];
          recordrResult = [];
          decide = true;
        }
        if( target.className === 'de' ){
          if( targetName === '' ){
            processP1.innerHTML = models['wo'] + models['de'];
            processP1Show = models['wo'] + models['de'];
            space = 'wo' + 'de';
          }else{
            if( processP1.innerHTML.slice(0,-1) === '' ){
              processP1.innerHTML += models[processP1Show] + models['de'];
              space += processP1Show + 'de';
              // console.log( space );
            }else{
              processP1.innerHTML = processP1.innerHTML.slice(0,-1) + '的' + models[processP1Show] + models['de'];
              space += processP1Show + 'de';
              // console.log( space );
            }
            
          }
        }
        if( target.className === '=' && decide === true ){
          if( space !== '' ){
            if( models[space.slice(0,-2)] === undefined ){
              document.querySelector( '.result-p2' ).innerHTML = '暂无这一代讯息，你可以按【AC】还原';
            }else{
              document.querySelector( '.process-p1' ).innerHTML = processP1.innerHTML.slice(0,-1) + '=';
              document.querySelector( '.result-p2' ).innerHTML = models[space.slice(0,-2)];
            }
              record.push(document.querySelector( '.process-p1' ).innerHTML); 
              recordrResult.push( document.querySelector( '.result-p2' ).innerHTML )
              decide = false;
          } 

        }
        if( target.className !== '=' ){
          decide = true
        }

        if( target.className === 'CE' ){

          if( record.length !== 0 ){
            record.length -= 1;
            recordrResult.length -= 1;
            document.querySelector( '.process-p1' ).innerHTML = record[record.length -1];
            document.querySelector( '.result-p2' ).innerHTML = recordrResult[recordrResult.length -1];
          }
          if( document.querySelector( '.process-p1' ).innerHTML === 'undefined' ){
            document.querySelector( '.process-p1' ).innerHTML = '无历史讯息，你可以按【AC】重来';
            document.querySelector( '.result-p2' ).innerHTML = '无历史讯息，你可以按【AC】重来';
          }
          update = false;
        }
        if( update === false ){
          if( target.className !== 'CE' ){
            relation = '';
            targetName = '';
            resultP2.innerHTML = '我';
            processP1.innerHTML = '';
            processP1Show = '';
            space = '';
            record = [];
            recordrResult = [];
            decide = true;
            update = true;
          }

        }
        if( target.className === '⇄' ){
          document.querySelector( '.message' ).style.display = 'block';
        }
        
  },false);
  container.addEventListener(touchStart, function( event ){
    let target = event.target;
        if( target.nodeName === 'INPUT' && target.type === 'checkbox' ){
          playSound('./images/run.wav',700)
          if( gender === true ){

            gender= false;
            models['wodeqizi'] = '暂无同性婚姻咨询，你可以按【AC】还原';
            models['wodezhangfu'] = '丈夫';
          }else{
            gender= true;
            models['wodezhangfu'] = '暂无同性婚姻咨询，你可以按【AC】还原';
            models['wodeqizi'] = '妻子';
          }
        }

  },false);

  shut.addEventListener(touchStart, function( event ){
    let target = event.target;
        if( target.className === 'shut' ){
          document.querySelector( '.message' ).style.display = 'none';
        }
  },false);

  keyboard.addEventListener(touchEnd, function( event ){
    let target = event.target;

  },false);

  function playSound(src,time){ 
    let audio = document.createElement('audio');
    audio.className = 'snd';
    audio.setAttribute( 'src',`${src}` );
    audio.style.cssText= `position: absolute;top: -1000px;`;
    audio.autoplay = true;
    audio.load();
    document.body.appendChild( audio );

    setTimeout( function(){
      let snd = document.querySelector( '.snd' );
      snd.parentNode.removeChild( snd );
    }, time );
  }


