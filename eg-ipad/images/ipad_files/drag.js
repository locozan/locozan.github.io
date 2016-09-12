/*
*
*drag 简单的PC端拖曳效果
*@author  locozan 
*@createAt 2016-6-12
*/


var eventHelper = {
  //添加句柄
  on:function( element, type, fn ){
    if( element.addEventListener ){
      element.addEventListener( type, fn, false);
    }else if( element.attachEvent ){
      element.attachEvent( 'on' + type, fn );
    }else{
      element[ 'on' + type ] = fn;
    }
  },
  //删除句柄
  off:function( element, type, fn ){ 
    if( element.removeEventListener ){
      element.removeEventListener( type, fn, false );
    }else if( element.detachEvent ){
      element.detachEvent( 'on' + type, fn );
    }else{
      element[ 'on' + type ] = null;
    }
  }
}

var distance = function( positionA, positionB ){
  return Math.sqrt( Math.pow( positionA[0] - positionB[0], 2 ) + Math.pow( positionA[1] - positionB[1],2 ));
}

var drag = function( event, move){
  var nowposition, offsetposition;
  var currentPosition = [
    event.clientX,
    event.clientY
  ]
  event.preventDefault();
  move = move || Function();

  function fnmove( event ){
    nowposition = [ event.clientX, event.clientY ];
    offsetposition = [
      nowposition[ 0 ] - currentPosition[ 0 ],
      nowposition[ 1 ] - currentPosition[ 1 ]
    ]
    if( distance( currentPosition, nowposition ) > 6 ){
      move( offsetposition );
    }
  } 
  eventHelper.on( document, 'mousemove', fnmove )

  function fnup( event ){
    eventHelper.off( document, 'mousemove', fnmove );
    eventHelper.off( document, 'mouseup', fnup );
  }
  eventHelper.on( document, 'mouseup', fnup )
}



    
/*
*  var btn1 = document.querySelector(".btn1");
*
*   eventHelper.on( document, 'mousedown', function( event ){
*   var target = event.target;
*   var posit = [ parentIcon.offsetLeft, parentIcon.offsetTop ];
*      if( event.className === 'btn1' ){ 
*        drag( target, function( offsetposition ){
*          btn1.style.left = offsetposition[ 0 ] + posit[ 0 ] + 'px';
*          btn1.style.top = offsetposition[ 1 ] + posit[ 1 ] + 'px';
*        } )
*      }
*    } ) 
* 
*/
