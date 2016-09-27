var container = document.getElementById('container');

var encodeHTML = function(source) {
    return String(source)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

var render = function(HTML, model) {
  HTML.innerHTML = model.map(function(item, index) {
    var title = encodeHTML(item.title)
    return [
      '<div class=" '+ 'box box-' + index +' " data-index=" '+ index +' ">',
        '<ul>',
          // '<li style=" background-image: url(' + item.img + '); ">',
          '<li>',
            '<a class="link-a" href=" ' + item.src + ' ">',
            '<img src=" '+ item.img +' " width="145" height="100">',
            '<h3>'+ title +'</h3>',
          '</li>',
        '</ul>',
      '</div>'
    ].join('');
  }).join('');
};

render( container, worksModel );
var screenWidth = document.documentElement.clientWidth - 20;
var linkA = document.querySelectorAll('.link-a');

[].slice.call(document.querySelectorAll('.link-a'), 0).forEach( function( item ){
  $(item).hover(function(){
      $(item).css("color","#C9323B");
  },function(){
      $(item).css("color","#337ab7");
  });
} );

var box = container.querySelectorAll( '.box' );
var sort = function(){
 if( screenWidth > 780 ){
    [].slice.call(document.querySelectorAll('.box'), 0).forEach( function( item, index ){
      item.style.width = screenWidth / 5 + (- 30) + 'px';
      item.style.height = 120 + 'px';
      item.style.left = Number( index % 5  ) * screenWidth / 5 + 30 + 'px';
      item.style.top = Number( index / 5 | 0 ) * 140 + 'px';
    } )
  }else if( screenWidth < 780 && screenWidth > 414 ){
    [].slice.call(document.querySelectorAll('.box'), 0).forEach( function( item, index ){
      item.style.left = Number( index % 3  ) * screenWidth / 3 + 15 + 'px';
      item.style.top = Number( index / 3 | 0 ) * 140 + 'px';
    } )
  }else if( screenWidth < 415 ){
    [].slice.call(document.querySelectorAll('.box'), 0).forEach( function( item, index ){
      item.style.left = Number( index % 2  ) * screenWidth / 2 + 15 + 'px';
      item.style.top = Number( index / 2 | 0 ) * 140 + 'px';
    } )
  } 
};
sort();

window.addEventListener( 'resize', function( event ){
  screenWidth = document.documentElement.clientWidth - 20;
  sort();
}, false);

