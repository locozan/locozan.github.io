/*
*
*drag 简单的PC端拖曳效果
*@author  locozan 
*@createAt 2016-6-12
*position: div位置， elment: div名称
*/

var drag = function( position, element ){
  
var mouseIsDown, nowOffSetPositionX, nowOffSetPositionY;


  element.addEventListener( 'mousedown', function( event ) {
      mouseIsDown = true;
      nowOffSetPositionX = event.pageX - position[ 0 ];
      nowOffSetPositionY = event.pageY - position[ 1 ];
  }, false);

  document.addEventListener( 'mousemove', function( event ){
    if( mouseIsDown ){
      position[ 0 ] = event.pageX - nowOffSetPositionX;
      position[ 1 ] = event.pageY - nowOffSetPositionY;
    }
  }, false);

  document.addEventListener( 'mouseup', function( event ){
    mouseIsDown = false;
    
  }, false);
  
};