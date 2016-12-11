   void function(){
     var content = document.getElementById('content');
     var container = document.getElementById('container');
     var taskBtn = document.getElementById('taskBtn');
     var addBtn = document.getElementById('addBtn');
     var findBtn = document.getElementById('findBtn');
     var toDoList = document.getElementsByClassName('toDoList');
     var searchValue;
     var model;
     
   var encodeHTML = function (source) {
      return String(source)
                  .replace(/&/g,'&amp;')
                  .replace(/</g,'&lt;')
                  .replace(/>/g,'&gt;')
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#39;");
   };

    var escapeRegexp = function(s){
      return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    var wrapTitle = function( title ){
      if( searchValue )
        title = title.replace( RegExp( '(' + escapeRegexp( searchValue ) + ')', 'g' ), '\u200c$1\u200d' );

        title = encodeHTML( title );
        // title = title.replace( /\u200c/g, '<strong class="hl">' ).replace( /\u200d/g, '</strong>' );
      
      return title;
    };

    var render = function(){
      container.innerHTML = model.map( function( item, index, arr ){
        return [
          '<li class="matter" style="display: ' + ( item.hidden ? 'none': 'block' ) + ';" >',
              '<input type="checkbox" data-index="' + index + '" class="matter-btn"' + ( item.done ? 'checked="checked"' : '' ) + ' />',
              '<input type="text" class="toDoList" data-index="' + index + '" style="text-decoration:'+ item.decoration +'; color:'+ item.col +';" value=' + wrapTitle( item.title ) + '></input>',
              '<div class="ma" data-index="' + index + '" ><p data-index="' + index + '" class="he"></p><p data-index="' + index + '" class="he"></p></div>',
          '</li>'
        ].join( '' )
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
    content.addEventListener( 'click', function( event ){
      var target = event.target, index;
        index = Number(target.dataset.index);

      if( target.nodeName === 'INPUT' && target.type === 'checkbox' ){
        // index = Number( target.dataset.index );
        model[ index ].done = target.checked;
        if( target.checked ){
          model[ index ].decoration = 'line-through';
          model[ index ].col = '#C2C0BF';
        }else{
          model[ index ].decoration = '';
          model[ index ].col = '';
        }
        save();
        render();
      }else if( target.className === 'ma' || target.className === 'he'){
        // index = Number( target.dataset.index );
        model.splice( index, 1 );
        save();
        render();
      }else if( target.className === 'taskBtn' && addBtn.value !== '' ){
        model.unshift( { "title": addBtn.value, "done": false } );
        addBtn.value = '';
        save();
        render()
      }else if( target.className === 'findBtn' && findBtn.value!=='' ){
        for( var i = 0; i < toDoList.length; i ++ ){
          if( findBtn.value !== toDoList[i].firstChild.nodeValue ){
            toDoList[ i ].parentNode.parentNode.style.display = 'none';
          }
        }
      }else if( target.className === 'pan' ){
        // index = Number( target.dataset.index );
        model[index].title = toDoList[index].value;
      }

    }, false);
    findBtn.addEventListener( 'keyup', function( event ){
      searchValue = this.value;
      model.forEach( function( item ){
        item.hidden = item.title.indexOf( searchValue ) === -1;
      } );
      render();
    }, false);

    content.addEventListener( 'mouseout',function( event ){
      var target = event.target, index;
      if( target.className === 'toDoList' ){
        index = Number( target.dataset.index );
        if( model[index].title !== toDoList[index].value ){

          model[index].title = toDoList[index].value;
          save();
          render();
        }
      }
    }, false)

   }();