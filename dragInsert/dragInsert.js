void function(){

    var modelA = [
      { 'title': '😩<div></div>游泳项目' },
      { 'title': '😢<div></div>跑步项目' },
      { 'title': '😷<div></div>划船项目' },
      { 'title': '😳<div></div>骑车项目' },
      { 'title': '😣<div></div>登山项目' },
      { 'title': '😉<div></div>旅游项目' },
      { 'title': '😁<div></div>美容项目' }
    ];
    var modelB = [];

    var content = document.querySelector( '#content' );
    var leftItem = document.querySelector( '#left-item' );
    var rightItem = document.querySelector( '#right-item' );
    var itemAll = document.querySelectorAll( '.item' );

     var encodeHTML = function (source) {
         return String(source)
                    .replace(/&/g,'&amp;')
                    .replace(/</g,'&lt;')
                    .replace(/>/g,'&gt;') 
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;");
     };

    var closests = function( el, className ){
        while( el && el.tagName && el.className.toLowerCase() !== className.toLowerCase() ){
          el = el.parentNode;        
      }
        return el.tagName ? el : null;
    };

    var render = function( HTML, model ){

      HTML.innerHTML = model.map( function( item ){
        var title = encodeHTML( item.title )
        return [
          '<li class="itemLi">'+ title +'</li>',
          '<li class="space">',
            '<div class="spa"></div>',
          '</li>'
        ].join('')
      } ).join('')
      var firstLi = document.createElement('li');
          firstLi.className="space";
          HTML.insertBefore( firstLi, HTML.firstChild );
      var firstdiv = document.createElement('div');
          firstdiv.className='spa';
          firstLi.appendChild(firstdiv);

    }

    render( leftItem, modelA );
    render( rightItem, modelB );

    var spa = document.querySelector( '.spa' );
    var classSpa = document.getElementsByClassName('spa')
    var outsideContainer = document.createElement( 'div' );//外部一个存储空间
        outsideContainer.className = 'outsideContainer';
        content.appendChild(outsideContainer);
    var placeholder = document.createElement( 'div' );//占位符，标记
        placeholder.className = 'placeholder';
        content.appendChild( placeholder);
     
    var mouseISdown, parenting, upelement, mouseISmove, draning, outsideContainer, spaceHover;

    document.addEventListener( 'mousedown', function( event ){
      var target = event.target;
          if( target.className === 'spa' && !outsideContainer.firstChild ){
            parenting = closests( target, 'space' );
            parenting.classList.add( 'hover' );
            document.querySelector( '.space.hover' ).parentNode.insertBefore( placeholder, document.querySelector( '.space.hover' ).previousSibling )
            var a = document.querySelector( '.space.hover' );
            if( !outsideContainer.firstChild && document.querySelector( '.space.hover' )){

              outsideContainer.appendChild( a.previousSibling );
              outsideContainer.appendChild( a );
            }
          }
  
          
          mouseISdown = true;

    }, false);
      document.addEventListener( 'mousemove', function( event ){
        var target = event.target;

            if( mouseISdown && outsideContainer.firstChild ){
              if( target.className === 'spa' ){
                parenting = closests( target, 'spa' );
                parenting.parentNode.classList.add( 'hover' );
              }
              outsideContainer.style.left = event.clientX - 150 + 'px';
              outsideContainer.style.top = event.clientY - 20 + 'px';
            }
  
      }, false);
   
      document.addEventListener( 'mouseup', function( event){
        var target = event.target;
            if( target.className === 'spa' ){
           var sign = document.querySelector( '.space.hover' );
            sign.parentNode.insertBefore( outsideContainer.firstChild, sign.nextSibling );
            sign.parentNode.insertBefore( outsideContainer.firstChild, sign.nextSibling.nextSibling);
            sign.classList.remove( 'hover' );
            content.appendChild( placeholder);
            outsideContainer.style.top = - 200 + 'px';
          }else if( outsideContainer.firstChild ){
            placeholder.parentNode.insertBefore( outsideContainer.firstChild, placeholder.nextSibling);
            placeholder.parentNode.insertBefore( outsideContainer.firstChild, placeholder.nextSibling.nextSibling);
            content.appendChild( placeholder);
            outsideContainer.style.top = - 200 + 'px';
          }

            
      }, false);

    document.addEventListener( 'mouseout', function( event ){
        var target = event.target;
        if( target.className === 'spa' ){
          parenting = closests( target, 'spa' );
          parenting.parentNode.classList.remove( 'hover' );
        }
    }, false);

  }();