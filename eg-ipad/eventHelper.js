/*
*
*
*@author  locozan 
*@createAt 2016-6-12
*/


  // var btn1 = document.getElementById("btn1");
  // var btn2 = document.getElementById("btn2");
  // var btn3 = document.getElementById("btn3");

  // function showMes(){
  //   alert('写对了');
  // }

  //   eventHelper.on( btn1, 'click',showMes );
  //   eventHelper.on( btn2, 'click',showMes );
  //   eventHelper.on( btn3, 'click',showMes );
  //   eventHelper.off( btn1, 'click',showMes );
  //   eventHelper.off( btn2, 'click',showMes );
  //   eventHelper.off( btn3, 'click',showMes );

 



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



