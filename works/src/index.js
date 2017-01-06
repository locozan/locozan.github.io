window.onload=function(){
  var disp = document.querySelector( '#disp' );
  setTimeout( function(){
    document.body.removeChild( disp )
  }, 300 );

  let container = document.querySelector( '.container' );
  window.addEventListener( 'resize', function( event ){
    waterfall();
  }, false);

  function waterfall(){
    let screenWidth = document.documentElement.clientWidth;
    let box = document.querySelectorAll( '.box' );  
    let oneBoxWidth = box[0].offsetWidth;
    let oneBoxHeight = box[0].offsetHeight;
    let num = Math.floor(screenWidth / oneBoxWidth);
    let boxArr = new Array();
    let boxH = [];
        for( let i in box ){
          if( box[i].className === 'box' ){
            boxArr.push(box[i])
          }
        }

    container.style.cssText = `width: ${ num * oneBoxWidth }px;margin: 0 auto;margin-top: 48px;`
    for( let i = 0; i < boxArr.length; i ++ ){
      let boxHeight = boxArr[i].offsetHeight;
      if( i < num ){
        boxH[i] = boxHeight; 
        // boxArr[i].style.left = i * oneBoxWidth + 'px';
        // boxArr[i].style.top = 48 + 'px';
        boxArr[i].style.transform = `translate3d(${i * oneBoxWidth}px, 0px, 0)`
      }else{
        let minH  = Math.min.apply( null, boxH );
        let index = function(){
          for( let index in boxH ){
            if( boxH[index] === minH ){
              return index;
            }
          }
        }()
        // boxArr[i].style.top = minH + 48 + 'px';
        // boxArr[i].style.left = boxArr[index].offsetLeft + 'px';
        
        boxArr[i].style.transform = `translate3d(${index * oneBoxWidth }px, ${ minH }px, 0)` 
        boxH[index] += boxArr[i].offsetHeight;
      }
    }
    
  }
  waterfall()
}