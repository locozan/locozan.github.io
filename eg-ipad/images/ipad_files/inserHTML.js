
/*
*
*html
*@author  locozan
*@createAt 2016-6-12
*向HTML中添加删除替换节点
*
*<body>
*  <div id="container">
*    <div>1</div>
*    <div>2</div>
*    <div id="div3">3</div>
*    <li id="li4">4</li>
*    <div>5</div>
*  </div>
*</body>
*<script>
*  var container = document.querySelector( '#container' );
*  var div3 = document.querySelector( '#div3' );
*  var li4 = document.querySelector( '#li4' );
*
* append( container, '<div>6</div><div>7</div><div>8</div><div>9</div>' ); 向父节点下的子节点最后插入
* prepend( container, '<div>6</div><div>7</div><div>8</div><div>9</div>' ) 向父节点下的子节点前插入
* before( li4, '<div>6</div><div>7</div><div>8</div><div>9</div>' ); 向父节点后的莫个子节点前插入
* after( li4, '<div>6</div><div>7</div><div>8</div><div>9</div>' ); 向父节点中的莫个子节点后插入
* RemoveReplace( li4, '<div>6</div><div>7</div><div>8</div><div>9</div>' );   把莫个子节点替换
*
*</script>
*
*
*/

function change( html ){
    var divTemp = document.createElement( 'div' );
      divTemp.innerHTML = Array.isArray( html ) ? html.join('') : html;
      divTemp = divTemp.childNodes;

    return divTemp;
  };

  function append( targetNode, html ){//插子节点最后
    var divTemp = change( html );

      while( divTemp.length )
        targetNode.appendChild( divTemp[ 0 ] );
  }

  function prepend( targetNode, html ){//插子节点最前
    var divTemp = change( html );

    var l =targetNode.firstChild
    while( divTemp.length )
        targetNode.insertBefore( divTemp[ 0 ], l )
  }

  function before( insertNode, html ){//插莫子节点前
    var divTemp = change( html );

    while( divTemp.length )
      insertNode.parentNode.insertBefore( divTemp[ 0 ], insertNode );
  }

  function after( insertNode, html ){//插莫子节点后
    var divTemp = change( html );

    var l = insertNode.nextSibling;
      while( divTemp.length )
        insertNode.parentNode.insertBefore( divTemp[ 0 ], l );
  }

  function RemoveReplace( insertNode, html ){
    var divTemp = change( html );

    var l = insertNode.nextSibling;
    while( divTemp.length )
      insertNode.parentNode.insertBefore( divTemp[ 0 ], l );

    insertNode.parentNode.removeChild( insertNode );
  }