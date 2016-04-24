void function(){
  var plane = document.createElement( 'div' );
  plane.className = 'plane up';
  document.body.appendChild( plane );

  var x = 100, y = 100, className = 'up', rotate = 0, planeSpeed = 0, maxPlaneSpeed = 5, dirKeyDown = false, bulletSpeed = 10;
  var planeSize = [ 60, 60 ], bulletSize = [ 8, 8 ];
  var bullets = [], bulletOn = true;

  var update = function(){
    if( dirKeyDown && planeSpeed < maxPlaneSpeed ){
      planeSpeed ++;
    }else if( !dirKeyDown && planeSpeed > 0 ){
      planeSpeed --;
    }

    var conf = dirMap[ className ];

    x += conf.x * planeSpeed;
    y += conf.y * planeSpeed;

    if( rotate % 360 !== conf.r ){
      for( var i = -180; i <= 270; i += 90 ){
        if( ( rotate + i ) % 360 === conf.r ){
          rotate += i;
          break;
        }
      }
    }

    plane.style.left = x + 'px';
    plane.style.top = y + 'px';
    plane.style[ '-webkit-transform' ] = 'rotate(' + rotate + 'deg)';

    if( plane.className !== 'plane ' + className )
      plane.className = 'plane ' + className;

    if( bullets.length ){
      for( var i = bullets.length - 1; i >= 0; i -- ){
        var bullet = bullets[ i ];
        var bulletEl = bullet.el;
        var bulletConf = dirMap[ bullet.dirCode ];
        var bx, by;

        if( bullet.distance < 50 ){
          bx = bullet.x + bulletConf.x * bullet.distance * bulletSpeed + planeSize[ 0 ] / 2 - bulletSize[ 0 ] / 2;
          by = bullet.y + bulletConf.y * bullet.distance * bulletSpeed + planeSize[ 1 ] / 2 - bulletSize[ 1 ] / 2;

          if( bx > document.documentElement.clientWidth ||
            bx < 0 || by > document.documentElement.clientHeight || by < 0){
            bulletEl.parentNode.removeChild( bulletEl );
            bullets.splice( i, 1 );
          }

          bulletEl.style.left = bx + 'px';
          bulletEl.style.top = by + 'px';
          bullet.distance ++;
        }else{
          bulletEl.parentNode.removeChild( bulletEl );
          bullets.splice( i, 1 );
        }
      }
    }

    requestAnimationFrame( update );
  };

  var keyCodeMap = {
    '37': 'left',
    '38': 'up',
    '39': 'right',
    '40': 'down'
  };

  var dirMap = {
    'left': {
      className: 'left',
      x: -1,
      y: 0,
      r: 270
    },

    'up': {
      className: 'up',
      x: 0,
      y: -1,
      r: 0
    },

    'right': {
      className: 'right',
      x: 1,
      y: 0,
      r: 90
    },

    'down': {
      className: 'down',
      x: 0,
      y: 1,
      r: 180
    }
  };

  update();

  document.addEventListener( 'keydown', function( event ){
    if( event.keyCode > 36 && event.keyCode < 41 ){
      className = dirMap[ keyCodeMap[ event.keyCode + '' ] ].className;
      dirKeyDown = true;  
    }

    if( event.keyCode == 32 ){
      if( bulletOn ){
        var bulletEl = document.createElement( 'div' );
        bulletEl.className = 'bullet';
        document.body.appendChild( bulletEl );

        bullets.push( {
          x: x,
          y: y,
          dirCode: className,
          distance: 0,
          el: bulletEl
        } );

        bulletOn = false;
        setTimeout( function(){
          bulletOn = true;
        }, 100 );
      }
    }
  }, false );

  document.addEventListener( 'keyup', function( event ){
    if( event.keyCode > 36 && event.keyCode < 41 ){
      dirKeyDown = false;
    }
  }, false );
}();