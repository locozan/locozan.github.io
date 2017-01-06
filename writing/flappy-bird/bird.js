void
function () {
  var configs = {
    scene: [620, 440],
    bird: [42, 32],
    pillarWidth: 56, //支柱宽
    pillarDistanceScope: [250, 300], //支柱距离范围
    pillarHoleHeightScope: [150, 200], //支柱中间孔厚度高度范围
    pos: [42, -31],
    pillarCount: 1 //支柱数量
  };
  const isMobile = ()=> /mobile/gi.test( navigator.userAgent );
    touchStart = isMobile() ? 'touchstart' : 'mousedown';
    touchMove = isMobile() ? 'touchmove' : 'mousemove';
    touchEnd = isMobile() ? 'touchend' : 'mouseup';
    
  var gameContainer = document.querySelector('#game-container');
  var birdModel = {
    x: 80, //鸟中心点的x坐标
    y: 100, //鸟中心点的y坐标
    targetY: null,
    w: configs.bird[0], //鸟的宽
    h: configs.bird[1], //鸟的高
  };
  var pillarsModel = []; // 柱子模型  这里的柱子是一个[ 外的大柱子模型 { 两个小柱子 { 柱子里的孔 } } ]数组套对象在套对象
  var randomNumber = function (min, max) { //声明并产生一个最大最小范围的随机数
    return min + Math.floor(Math.random() * (max - min)); //把生成的数直接返回出来
  };
  void
  function pillarsModelframe() { //柱子框
    var x = configs.scene[0] + configs.pillarWidth / 2; //设定一个x，为游戏框加柱子宽的一半，
    var h, y;
    //for (var i = 0, l = configs.pillarCount; i < l; i++) { 
      //高度h  具有randomNumber的方法 和所有属性 apply是使h继承randomNunber的所有属性方法
      h = randomNumber.apply(null, configs.pillarHoleHeightScope);
      y = randomNumber(h / 2, configs.scene[1] - h / 2);
      pillarsModel.push({ //柱子的模型  push添加
        x: x, //柱子的X坐标
        w: configs.pillarWidth, //柱子的宽
        h: configs.scene[1], //柱子的高
        hole: { //柱子中间的孔
          y: y, //孔的y轴坐标
          h: h, //孔高
        }
      });
    // }
  }();
  var render = function () {
    if (!birdModel.el) {
      birdModel.el = document.createElement("div");
      birdModel.el.className = "bird";
      gameContainer.appendChild(birdModel.el);
    }

    birdModel.el.style.left = birdModel.x - birdModel.w / 2 + 'px';
    birdModel.el.style.top = birdModel.y - birdModel.h / 2 + 'px';
    birdModel.el.style.width = configs.bird[0] + 'px';
    birdModel.el.style.height = configs.bird[1] + 'px';

    for (var i = pillarsModel.length - 1; i >= 0; i--) {
      pillar = pillarsModel[i];

      if (pillar.removed) {
        if (pillar.el && pillar.el.parentNode)
          pillar.el.parentNode.removeChild(pillar.el);
        pillarsModel.splice(i, 1);
        continue;
      }



      if (!pillar.el) {
        pillar.el = document.createElement("div");
        pillar.el.className = 'pillar';
        pillar.el.style.width = pillar.w + 'px';

        pillar.el.innerHTML = '<div class="part1"></div><div class="part2"></div>';

        gameContainer.appendChild(pillar.el);

        var part1, part2;

        part1 = pillar.el.childNodes[0];
        part2 = pillar.el.childNodes[1];

        part1.style.height = pillar.hole.y - pillar.hole.h / 2 + 'px';
        part1.style.width = configs.pillarWidth;
        part2.style.height = configs.scene[1] - pillar.hole.y - pillar.hole.h / 2 + 'px';
        part2.style.width = configs.pillarWidth;
      }

      if( i == 0 ){
        // pillar.el.style.border = '1px solid red';
      }
      pillar.el.style.left = pillar.x - configs.pillarWidth / 2 + 'px';
    }
      if( birdModel.y < 0 || birdModel.y > configs.scene[1] + 10  ){
        alert('你飞没了');
        mainloop = false;
        location.reload();
      };
    // if( birdModel.x -5 + configs.bird[0] / 2 > pillar.x - configs.pillarWidth / 2 
    //   && birdModel.x + configs.bird[0] / 2 < pillar.x + configs.pillarWidth / 2  
    //   && pillar.hole.y - birdModel.y > pillar.hole.h / 2 + 10 
    //   || birdModel.x -5 + configs.bird[0] / 2 > pillar.x - configs.pillarWidth / 2 
    //   && birdModel.x + configs.bird[0] / 2 < pillar.x + configs.pillarWidth / 2  
    //   && birdModel.y - pillar.hole.y > pillar.hole.h / 2 + 10 ){
    //   alert('撞死了');
    //   mainloop = false;
    //   location.reload();
    // };
  };
  //每两毫秒调一次dropsRender
  var index = 0;
  var dropsRender = function () {

    clearInterval(dropsRender);
    var num = ++index % 2 == 0 ? 0 : configs.pos[0];
    var drops = document.getElementsByClassName('bird')[0];
    drops.style.backgroundImage = "url(/writing/flappy-bird/images/niao.png)";
    drops.style.backgroundPosition = num + "px " + configs.pos[1] + "px";
  };
  setInterval(dropsRender, 200);
  //控制
  var control = function () {
    pillarsModel.forEach(function (pillar, index) {
      pillar.x -= 2.5;

      if (pillar.x < -pillar.w / 2) {
        pillar.removed = true;
      }
    });

    if( birdModel.targetY !== null ){
      if( birdModel.targetY !== birdModel.y ){
        birdModel.y += Math.floor( ( birdModel.targetY - birdModel.y ) * .15 );
      }else{
        birdModel.targetY = null;
      }
    }else{
      birdModel.y += 2;  
    }

    var lastPillar = pillarsModel[pillarsModel.length - 1];
    //如果出去再补一根
    if (lastPillar.x < configs.scene[0] - lastPillar.w / 2) {
      var h = randomNumber.apply(null, configs.pillarHoleHeightScope);

      pillarsModel.push({
        x: lastPillar.x + randomNumber.apply(null, configs.pillarDistanceScope),
        w: configs.pillarWidth,
        h: configs.scene[1],
        hole: {
          y: randomNumber(h / 2, configs.scene[1] - h / 2),
          h: h

        } 
      });
    }
  };
  //小鸟与柱子的区间碰撞
  var collisionDetection = function (objA, objB) {
    var sectTestCollision = function (a1, b1, a2, b2) {
      return Math.max(a1, b1) <= Math.min(a2, b2);
    }

    var pillar = objB[ 0 ];

    var objectAXScope = [ objA.x - objA.w / 2, objA.x + objA.w / 2 ];
    var objectAYScope = [ objA.y - objA.h / 2, objA.y + objA.h / 2 ];

    var resultsA = sectTestCollision(
      objectAXScope[ 0 ],
      pillar.x - pillar.w / 2,
      objectAXScope[ 1 ],
      pillar.x + pillar.w / 2
    );

    var resultsB = sectTestCollision(
      objectAYScope[ 0 ],
      0,
      objectAYScope[ 1 ],
      pillar.hole.y - pillar.hole.h / 2
    );

    var resultsE = sectTestCollision(
      objectAYScope[ 0 ],
      pillar.hole.y + pillar.hole.h / 2,
      objectAYScope[ 1 ],
      pillar.h
    );

    var result = ( resultsA && resultsB ) || ( resultsA && resultsE );

      if( result === true ){
        STOP = true;
      }

    return result;
  };
  var renderCollisionDetection = function () {
      // collisionDetection(birdModel, pillarsModel);
      // console.log(collisionDetection(birdModel, pillarsModel));
      if (collisionDetection(birdModel, pillarsModel)) {
        alert('你死了');
        mainloop = false
        location.reload();
      }
    } 
  //点击事件
  document.addEventListener(touchStart, function (event) {
     birdModel.targetY = birdModel.y - 60;
  }, false);
  //键盘事件
  document.addEventListener('keydown', function ( event ){
    var code = event.keyCode;
    if( code !== 38 ){
      return;
     }
    switch( code ){
      case 38:
        birdModel.targetY = birdModel.y - 60;
        break;
    }
  }, false);
  //主循环
  function mainloop() { //主循环自调用一次
    control();
    render();
    renderCollisionDetection();

    if( typeof STOP === 'undefined' ){
      requestAnimationFrame(mainloop); //每秒60桢，使主循环一直在刷新  
    }
  }
  mainloop(); //调用主循环
}();