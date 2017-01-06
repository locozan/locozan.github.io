window.onload=function(){
  let dataInt={'data':[
      {'src':'31.jpg'},{'src':'32.jpg'},{'src':'33.jpg'},{'src':'34.jpg'},{'src':'35.jpg'},{'src':'36.jpg'},
      {'src':'37.jpg'},{'src':'38.jpg'},{'src':'39.jpg'},{'src':'40.jpg'},{'src':'41.jpg'},{'src':'42.jpg'},
      {'src':'43.jpg'},{'src':'44.jpg'},{'src':'45.jpg'},{'src':'46.jpg'},{'src':'47.jpg'},{'src':'48.jpg'},
      {'src':'49.jpg'},{'src':'50.jpg'},{'src':'52.jpg'},{'src':'53.jpg'},{'src':'54.jpg'},{'src':'55.jpg'},
    ]};

  function waterfall(){
    let screenWidth = document.documentElement.clientWidth;//屏幕宽=可视窗口宽
    let pin = document.querySelectorAll( '.pin' );
    let main = document.querySelector('#main');
    let pinArr = new Array();  
    let pinW = pin[0].offsetWidth;
    let num = Math.floor(screenWidth / pinW);
    let pinH = [];
        for( let i in pin ){
          if( pin[i].className === 'pin' ){
            pinArr.push(pin[i])
          }
        }
    
    main.style.cssText = 'width: '+ num * pinW +'px;margin: 0 auto;';

    for( let i = 0; i < pinArr.length; i ++ ){
      let pinHeight = pinArr[i].offsetHeight;

      if( i < num ){
        pinH[i] = pinHeight;
   
      }else{
        let minH = Math.min.apply(null, pinH);
        let index = function(){
          for( let i in pinH ){
            if( pinH[i] === minH ){
              return i;
            }
          }
        }()

        pinArr[i].style.position = 'absolute';
        pinArr[i].style.top = minH + 'px';
        pinArr[i].style.left = pinArr[index].offsetLeft + 'px';
        pinH[index] += pinArr[i].offsetHeight;
      }

    }
  }

  waterfall();

  function checkscrollside(){
    let pin = document.querySelectorAll( '.pin' );
    let pinArr = new Array();  
    let pinH = [];
        for( let i in pin ){
          if( pin[i].className === 'pin' ){
            pinArr.push(pin[i])
          }
        }
    
    let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    let documentH=document.documentElement.clientHeight;//页面高度
    let lastPinH = pinArr[pinArr.length - 1].offsetTop + Math.floor( pinArr[pinArr.length - 1].offsetHeight / 2 )
    let x = 1600;
    return ( lastPinH < scrollTop + documentH ) ? true : false;
  }
  window.onscroll = function(){
    let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if( scrollTop < 8000 ){
      if( checkscrollside() ){

      for(var i = 0; i < dataInt.data.length; i++){
        
        var oPin=document.createElement('div'); 
        oPin.className='pin';               
        main.appendChild(oPin);              
        var oBox=document.createElement('div');
        oBox.className='box';
        oPin.appendChild(oBox);
        var oImg=document.createElement('img');
        oImg.src='./images/'+dataInt.data[i].src;
        oBox.appendChild(oImg);
      } 
    }
      waterfall();
    }
  }
}

