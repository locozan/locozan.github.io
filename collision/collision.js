/*
 *
 *collision-detection 方形碰撞检测
 *max(a1,b1) <= min(a2,b2)
 *@author locozan
 *@createAt 2016-06-12
 *div.innerHTML = collisionDetection( 方形1, 方形2 );
*/


var collisionDetection = function( objA, objB ){
  var sectTestCollision = function( a1, b1, a2, b2 ){
    return Math.max( a1, b1 ) <= Math.min( a2, b2 );
  }

  var resultsA = sectTestCollision( 
    objA.pos[ 0 ], 
    objB.pos[ 0 ], 
    objA.pos[ 0 ] + objA.size[ 0 ], 
    objB.pos[ 0 ] + objB.size[ 0 ] 
  );
  var resultsB = sectTestCollision( 
    objA.pos[ 1 ], 
    objB.pos[ 1 ], 
    objA.pos[ 1 ] + objA.size[ 1 ], 
    objB.pos[ 1 ] + objB.size[ 1 ] 
  );

  return resultsA && resultsB;
};
var collideDetection1 = function( objA, objB ){
  var rangeOverlap = function( a1, b1, a2, b2 ){
    return Math.max( a1, b1 ) <= Math.min( a2, b2 );
  };
  var resultsA = rangeOverlap( 
    objA.pos[ 0 ], 
    objB.pos[ 0 ], 
    objA.pos[ 0 ] + objA.size[ 0 ], 
    objB.pos[ 0 ] + objB.size[ 0 ] 
  );
  var resultsB = rangeOverlap( 
    objA.pos[ 1 ], 
    objB.pos[ 1 ], 
    objA.pos[ 1 ] + objA.size[ 1 ], 
    objB.pos[ 1 ] + objB.size[ 1 ] 
  );

  var posX = Math.max( objA.pos[ 0 ], objB.pos[ 0 ] );
  var posY = Math.max( objA.pos[ 1 ], objB.pos[ 1 ] );
  var sizeW = Math.min( objA.pos[ 0 ] + objA.size[ 0 ], objB.pos[ 0 ] + objB.size[ 0 ] ) - posX;
  var sizeH = Math.min( objA.pos[ 1 ] + objA.size[ 1 ], objB.pos[ 1 ] + objB.size[ 1 ] ) - posY;
  return function(){
    if( resultsA && resultsB ){
      var box3model = {};
      box3model.pos = [ posX, posY ];
      box3model.size = [ sizeW, sizeH ];
      return box3model; 
    }else{
      return null;
    }
  }();
};




