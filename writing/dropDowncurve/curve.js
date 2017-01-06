void function(){
        
    function pullToFresh( callback, loading ){
      let bodys = document.querySelector( 'body' );
      let slideDown = document.createElement('div');
      let slideDown2 = document.createElement('div');
      var screenWidth = document.documentElement.clientWidth;//屏幕宽=可视窗口宽
      var startY = endY = 0;

      window.addEventListener("resize", function( event ){
        screenWidth = document.documentElement.clientWidth;
      },false);

      //下拉时
      function dropDownBox( height ){
        slideDown.className = 'slideDown';
        slideDown.style.cssText = "display: block; width:100%;background-color: #FF9CAB; position: fixed; left: 0; top: 0;";
        slideDown.style.height = `${height}` + "px";
        // '<path d="M0,0 Q200,'+Math.abs(as) * 2+' '+screenWidth+',0" stroke="#000000" fill="none" style="stroke-width: 2px;"></path>',
        slideDown.innerHTML = `
          <svg width="${ screenWidth }" height="${ height }">
            <path d="M 0,0 C 0,0 ${ screenWidth / 4 },${ height } ${ screenWidth / 2 },${ height } C ${ screenWidth * .75 },${ height } ${ screenWidth },0 ${ screenWidth },0" stroke="#000000" fill="none" style="stroke-width: 2px;"></path>
          </svg>
        `;
        bodys.insertBefore( slideDown, bodys.firstChild )
      }
      //下拉放开时
      function dropUpBox2(){
        slideDown2.className = 'slideDown2';
        slideDown2.classList.add( loading );
        slideDown2.style.cssText = "display: block;position: relative;width:100%;height: 100px;border:1px solid;text-align: content;";
        bodys.insertBefore( slideDown2, bodys.firstChild )
  
        return slideDown2;
      }
      function start( event ){
        var touch = event.targetTouches[0];
            startY = touch.pageY;

        // bodys.insertBefore( slideDown, bodys.firstChild );
        
      }

      function move( event ){
        var touch = event.targetTouches[0];
            endY = startY - touch.pageY;    
        let bodysTop = bodys.getBoundingClientRect().top;
            if( endY < -8 || bodysTop > 0){
              dropDownBox( bodysTop );
            }
      }

      function end( event ){
        if( document.querySelector('.slideDown') ){
          slideDown.parentNode.removeChild( slideDown );
        }
        if( endY < -80 ){
          dropUpBox2();
            setTimeout(function(){ 
              if( document.querySelector('.slideDown2') ){
                slideDown2.parentNode.removeChild( slideDown2 );
              }
              callback();
          },2500);
        }
        endY = 0;

      }
      bodys.addEventListener('touchstart', start,false);
      bodys.addEventListener('touchmove', move,false);
      bodys.addEventListener('touchend', end,false);
      
      
      return {
        destroy: function(){
          bodys.removeEventListener('touchstart', start,false);
          bodys.removeEventListener('touchmove', move,false);
          bodys.removeEventListener('touchend', end,false);
        }
      };
    };

    var fresher,execute = true;

    function enable(){
      fresher = pullToFresh( function callback(){
        console.log( 1 );
      }, 'boxLoading');
    }
    
    function disable(){
      fresher.destroy();  
    }

    function addition(){
      enable();
    }
    
    addition();

    const isMobile = ()=> /mobile/gi.test( navigator.userAgent );
      touchStart = isMobile() ? 'touchstart' : 'mousedown';
    
    document.querySelector( '#btn' ).addEventListener(touchStart, function( event ){
      if( execute === true ){
        disable();
        execute = false;
      }else if( execute === false ){
        addition();
        execute = true;
      }
    },false);
 }();      
