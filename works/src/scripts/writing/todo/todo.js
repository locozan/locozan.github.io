void function(){
  var container = document.getElementById('container');
  var containerInput = container.getElementsByTagName('input');
  var addBtn = document.getElementById('addBtn');
  var btn = container.getElementsByTagName('input');
  var lis = container.getElementsByTagName('li');

  var model;

  // var render = function(){
  //   container.innerHTML = model.map( function( item, index ){
  //     return [
  //       '<li class="matter">',
  //           '<input type="checkbox" data-index="' + index + '" class="matter-btn"' + ( item.done ? 'checked="checked"' : '' ) + ' />',
  //           '<span>' + item.title + '</span>',
  //           '<div class="ma" ><p class="he"></p><p class="he"></p></div>',
  //       '</li>'
  //     ].join( '' )
  //   } ).join( '' );
  // };
  
  var render = function(){
    container.innerHTML = model.map( function( item, index ){
      return '<li class="matter"><input type="checkbox" data-index="' + index + '" class="matter-btn"' + ( item.done ? 'checked="checked"' : '' ) + ' /><span>' + item.title + '</span><div class="ma" ><p class="he"></p><p class="he"></p></div></li>'
    } ).join( '' ); 
  };

  var save = function(){
    localStorage.setItem( 'todos', JSON.stringify( model, null, 2 ) );
  };

  var model = localStorage.getItem( 'todos' );

  if( model ){
    model = JSON.parse( model );
    render();
  }else{
    fetch( './default-model.json' ).then( function( response ){
      return response.json();
    } ).then( function( json ){
      model = json;
      render();
    } );
  }

  // render();

  container.addEventListener( 'click', function( event ){
    var target = event.target, index;

    if( target.nodeName === 'INPUT' && target.type === 'checkbox' ){
      index = Number( target.dataset.index );
      
      model[ index ].done = target.checked;
      save();
    }
  } );
  

}();