void function() {
  var config = {
    desktopPost: [0, 398]
  }

  var ipad = document.querySelector('.ipad');
  var ipadCamera = document.querySelector('.ipad-camera');
  var ipadDisplay = document.querySelector('.ipad-display');
  var leftBar = document.querySelector('.leftBar');
  var container = document.querySelector('.container');
  var desktop = document.querySelector('.desktop');
  var rightBar = document.querySelector('.rightBar');
  var nav = document.querySelector('.nav');
  var dockPeripheral = document.querySelector('.dock-peripheral');
  var dock = dockPeripheral.querySelector('.dock');
  var ipadHomeButton = document.querySelector('.ipad-home-button');
  var ipadHomeButtonSpan = ipadHomeButton.getElementsByTagName('span')[0];

  append(ipad, '<div class="spareSpace"></div>');

  var spareSpace = document.querySelector('.spareSpace'); //空白空间

  // var placeholder = document.querySelector( '.placeholder' );//占位符
  var encodeHTML = function(source) {
    return String(source)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  var closest = function(el, className) { //找父元素、
    while (el && el.tagName && el.className.toLowerCase() !== className.toLowerCase()) {
      el = el.parentNode;
    }
    return el.tagName ? el : null;
  };

  var positionIcon = function(el) { //初始位置排序
    for (var i = 0; i < el.length; i++) {
      el[i].style.left = (i % 4) * 90 + 40 + 'px';
      el[i].style.top = ((i / 4) | 0) * 78 + 20 + 'px';
    }
  }

  function containerOffDesktop() {
    desktopsModel.forEach(function(item, index) {
      if (!item.el) {
        item.el = document.createElement('div');
        // item.el.className = 'desktop'+ index;
        item.el.classList.add('desktop');
        container.appendChild(item.el);
        item.el.style.transform = 'translatex(' + index * config.desktopPost[1] + 'px)';
      }
    })
  }

  containerOffDesktop();

  var desktopList = document.querySelectorAll('.desktop');

  var render = function(HTML, model) {
    HTML.innerHTML = model.map(function(item, index) {
      var title = encodeHTML(item.title)
      return [
        '<div class="icon">',
        '<div class="iconImg" data-index="' + index +
        '" style="background: url(' + item.img + ') round;transform-origin: center center; ">',
        '<div class="spacer"></div>',
        '<div class="jun"></div>',
        '<p class="title">' + title + '</p>',
        '<div class="tail"></div>',
        '<div class="small-pages"></div>',
        '</div>',
        '</div>'
      ].join('')
    }).join('')
  }

  function dockSortAll() { //dock排序
    dockModel.forEach(function(item, index) {
      render(dock, dockModel);
    })
  }

  dockSortAll();

  function desktopSortAll() { //desktop初始排序
    desktopsModel.forEach(function(item, index) {
      render(desktopList[index], desktopsModel[index]);
      positionIcon(desktopList[index].querySelectorAll('.icon'));
    })
  }

  desktopSortAll();

  var containerChildren = [].slice.call(container.children, 0);

  var dockAllChildren = [].slice.call(dockPeripheral.children, 0);

  eventHelper.on(ipadDisplay, 'mouseover', function(event) { //页面的切换
    var target = event.target;
    if (target.className === 'rightBar') {
      for (var i = 0; i < desktopList.length; i++) {
        var a = (desktopList[i].style.transform).match(/[\-\d*]/g).join('');
        if ((desktopList[desktopList.length - 2].style.transform).match(/[\-\d*]/g).join('') < 0) {
          desktopList[i].style.transform = 'translatex(' + (i * config.desktopPost[1] - config.desktopPost[1] * (desktopList.length - 1)) + 'px)';
        } else {
          desktopList[i].style.transform = 'translatex(' + (a - config.desktopPost[1]) + 'px)';
        }
      }
    }

    if (target.className === 'leftBar') {
      for (var i = 0; i < desktopList.length; i++) {
        var a = (desktopList[i].style.transform).match(/[\-\d*]/g).join('');
        if ((desktopList[2].style.transform).match(/[\-\d*]/g).join('') > 0) {
          desktopList[i].style.transform = 'translatex(' + (i * config.desktopPost[1]) + 'px)';
        } else {
          desktopList[i].style.transform = 'translatex(' + (Number(a) + config.desktopPost[1]) + 'px)';
        }
      }
    }
  });

  var scrollLeft = 0;
  wheel(document, function(e) {
    scrollLeft += e.delta;
    // console.log( scrollLeft );
    container.style.transform = 'translatex(' + e.delta + 'px)';
    setTimeout(function() {
      container.style.transform = 'translatex(' + 0 + 'px)';
    }, 500);

    if (e.delta == -15) {
      for (var i = 0; i < desktopList.length; i++) {
        var a = (desktopList[i].style.transform).match(/[\-\d*]/g).join('');
        if ((desktopList[desktopList.length - 2].style.transform).match(/[\-\d*]/g).join('') < 0) {
          desktopList[i].style.transform = 'translatex(' + (i * config.desktopPost[1] - config.desktopPost[1] * (desktopList.length - 1)) + 'px)';
        } else {
          desktopList[i].style.transform = 'translatex(' + (a - config.desktopPost[1]) + 'px)';
        }
      }
    }
    if (e.delta == 15) {
      for (var i = 0; i < desktopList.length; i++) {
        var a = (desktopList[i].style.transform).match(/[\-\d*]/g).join('');
        if ((desktopList[2].style.transform).match(/[\-\d*]/g).join('') > 0) {
          desktopList[i].style.transform = 'translatex(' + (i * config.desktopPost[1]) + 'px)';
        } else {
          desktopList[i].style.transform = 'translatex(' + (Number(a) + config.desktopPost[1]) + 'px)';
        }
      }
    }
  });

  function desktopSort() { //图标重新排序
    var container = document.querySelector('.container');

    containerChildren.forEach(function(item, index) {
      [].slice.call(item.children, 0).forEach(function(iconItem) {
        var iconItemDatasetIndex = Number(iconItem.firstChild.dataset.index);
        iconItem.style.left = (iconItemDatasetIndex % 4) * 90 + 40 + 'px';
        iconItem.style.top = ((iconItemDatasetIndex / 4) | 0) * 78 + 20 + 'px';
        iconItemDatasetIndex % 4 === 3 ? iconItem.querySelector('.tail').classList.add('t') :
          iconItem.querySelector('.tail').classList.remove('t');
      })
    })
  }

  function dockSort() {
    var dockChildren = [].slice.call(dock.children, 0);
    dockChildren.forEach(function(item) {
      var iconItemDatasetIndex = Number(item.firstChild.dataset.index);
      if (dockChildren.length === 4) {
        item.style.left = iconItemDatasetIndex * 90 + 40 + 'px';
        item.style.top = 20 + 'px';
      } else if (dockChildren.length === 3) {
        item.style.left = iconItemDatasetIndex * 90 + 90 + 'px';
        item.style.top = 20 + 'px';
      } else if (dockChildren.length === 2) {
        item.style.left = iconItemDatasetIndex * 90 + 140 + 'px';
        item.style.top = 20 + 'px';
      } else if (dockChildren.length === 1) {
        item.style.left = iconItemDatasetIndex * 90 + 175 + 'px';
        item.style.top = 20 + 'px';
      }
    })
  }

  dockSort();

  var icon = document.querySelectorAll('icon');
  var smallPages = document.querySelectorAll('.small-pages');
  var downLast3Trigger, downLastTrigger, zIndex;
  var beforeParent, overNumber, endParameter, startIndex, startParameter, startInelement, lastInelement;

  eventHelper.on(document, 'mousedown', function(event) { //点击图标
    var target = event.target;
    downLast3Trigger = setTimeout(function() {
      if (target.className === 'iconImg') {
        desktopSort(); //重新排序 
        dockSort(); //

        containerChildren.forEach(function(item) {
          [].slice.call(item.children, 0).forEach(function(item) {
            var iconChildiconImg = item.firstChild;
            iconChildiconImg.classList.add('shakeAnimate');
            var itemChildjun = item.firstChild.firstChild.nextSibling;
            itemChildjun.classList.add('junction');
          })
        });
        dockAllChildren.forEach(function(item) {
          [].slice.call(item.children, 0).forEach(function(item) {
            var iconChildiconImg = item.firstChild;
            iconChildiconImg.classList.add('shakeAnimate');
            var itemChildjun = item.firstChild.firstChild.nextSibling;
            itemChildjun.classList.add('junction');
          })
        })
      }
    }, 2000)
    if (target.className === 'iconImg shakeAnimate' && !spareSpace.firstChild) {
      var targetparentNode = closest(target, 'icon');
      var clientTOedge = [event.clientX - targetparentNode.getBoundingClientRect().left,
        event.clientY - targetparentNode.getBoundingClientRect().top
      ];
      var spareSpacePosition = [ipad.getBoundingClientRect().left + spareSpace.offsetWidth / 2,
        ipad.getBoundingClientRect().top + spareSpace.offsetHeight / 2
      ];

      spareSpace.style.left = event.clientX - spareSpacePosition[0] + (20 - clientTOedge[0]) + 'px';
      spareSpace.style.top = event.clientY - spareSpacePosition[1] + (20 - clientTOedge[1]) + 'px';
      targetparentNode.className = 'icons';
      spareSpace.appendChild(targetparentNode);
      spareSpace.style.overflow = 'visible';

      var posit = [spareSpace.offsetLeft, spareSpace.offsetTop];

      drag(event, function(offsetposition) {
        spareSpace.style.left = offsetposition[0] + posit[0] + 'px';
        spareSpace.style.top = offsetposition[1] + posit[1] + 'px';
      })
      startParameter = Number(spareSpace.firstChild.firstChild.dataset.index);
    }
  })


  function change(ParameterA, ParameterB, Desktop) { //抖动拖曳位置
    var start = Math.min(ParameterA, ParameterB); //最小
    var ends = Math.max(ParameterA, ParameterB); //最大
    var end = ParameterA < ParameterB ? ends - 1 : ends;
    if (ParameterA - ParameterB === -1) {
      return;
    }
    if (ParameterA > ParameterB) {
      [].slice.call(Desktop.children, start, end).forEach(function(item) {
        item.firstChild.dataset.index = Number(item.firstChild.dataset.index) + 1;
        item.style.left = (Number(item.firstChild.dataset.index) % 4) * 90 + 40 + 'px';
        item.style.top = ((Number(item.firstChild.dataset.index) / 4) | 0) * 78 + 20 + 'px';
      })
    }
    if (ParameterA < ParameterB) {
      [].slice.call(Desktop.children, start, end).forEach(function(item) {
        item.firstChild.dataset.index = Number(item.firstChild.dataset.index) - 1;
        item.style.left = (Number(item.firstChild.dataset.index) % 4) * 90 + 40 + 'px';
        item.style.top = ((Number(item.firstChild.dataset.index) / 4) | 0) * 78 + 20 + 'px';
      })
    }
    startParameter = ParameterA < ParameterB ? ParameterB - 1 : ParameterB;
    desktopSort();
    dockSort();
  }

  eventHelper.on(document, 'mouseover', function(event) { //图标移入 
    var target = event.target;
    var overTargetParent = closest(target, 'icon');
    if (target.className === 'spacer' && document.querySelector('.iconImg.shakeAnimate') && spareSpace.firstChild) {
      var containerOffDesktopAll = overTargetParent.parentNode;
      endParameter = Number(target.parentNode.dataset.index);
      change(startParameter, endParameter, containerOffDesktopAll);
    }
  });

  function limit(target) {
    if (target.classList.contains('desktop')) {
      var targetChildren = [].slice.call(container.children, 0);
      var targetParentLastChild = target.lastChild;
      var iconPost = [targetParentLastChild.getBoundingClientRect().left,
        targetParentLastChild.getBoundingClientRect().top
      ];
      if (event.clientX > (iconPost[0] + 40) && event.clientY > iconPost[1]) {
        return true;
      }
      if (event.clientY > (iconPost[1])) {
        return true;
      }
    }
    if (target.classList.contains('dock')) {
      var targetChildren = [].slice.call(dock.children, 0);
      var targetParentLastChild = target.lastChild;
      var iconPost = [targetParentLastChild.getBoundingClientRect().top, target.getBoundingClientRect().top];
      if (event.clientY > iconPost[1], event.clientY < iconPost[0]) {
        return true;
      }
    }
  }

  eventHelper.on(document, 'mousemove', function(event) {
      var target = event.target;
      limit(target);
      if (limit(target) === true && spareSpace.firstChild) {
        var container = document.querySelector('.container');

        containerChildren.forEach(function(item, index) {
          [].slice.call(item.children, 0).forEach(function(iconItem, index) {
            iconItem.firstChild.dataset.index = index;
            iconItem.style.left = (Number(iconItem.firstChild.dataset.index) % 4) * 90 + 40 + 'px';
            iconItem.style.top = ((Number(iconItem.firstChild.dataset.index) / 4) | 0) * 78 + 20 + 'px';
            Number(iconItem.firstChild.dataset.index) % 4 === 3 ? iconItem.querySelector('.tail').classList.add('t') :
              iconItem.querySelector('.tail').classList.remove('t');
          })
        })
        startParameter = target.children.length;
      }
      if (limit(target) === true && spareSpace.firstChild) {
        var dock = document.querySelector('.dock');
        [].slice.call(dock.children, 0).forEach(function(iconItem, index) {
          iconItem.firstChild.dataset.index = index;
          // iconItem.style.left = ( Number( iconItem.firstChild.dataset.index ) % 4 ) * 90 + 40 + 'px';
          // iconItem.style.top = (( Number( iconItem.firstChild.dataset.index ) / 4 ) | 0) * 78 + 20 + 'px';
          Number(iconItem.firstChild.dataset.index) % 4 === 3 ? iconItem.querySelector('.tail').classList.add('t') :
            iconItem.querySelector('.tail').classList.remove('t');
        })
        startParameter = target.children.length;
      }
    })
    // var abc;
  eventHelper.on(document, 'mouseup', function(event) { //放开图标3秒内外触发
    var target = event.target;
    clearTimeout(downLast3Trigger);
    if (target.className === 'iconImg' && !ipadDisplay.querySelector('.iconImg.shakeAnimate')) { //单击添加网页
      // abc = target;
      downLastTrigger = setTimeout(openPage(target), 1);
      target.lastChild.previousSibling.previousSibling;
      append(target.parentNode, '<div class="original"></div>')
    }
    //放开排序

    if (spareSpace.firstChild) {
      spareSpace.firstChild.firstChild.dataset.index = startParameter;
      spareSpace.firstChild.className = 'icon';
      spareSpace.style.top = -2000 + 'px';
      if (target.classList.contains('desktop') || target.classList.contains('dock')) { //放在空白地方
        [].slice.call(target.children, 0).forEach(function(item, index) {
          if (index === startParameter) {
            target.insertBefore(spareSpace.firstChild, item)
          }
          if (target.children.length === startParameter) {
            target.appendChild(spareSpace.firstChild)
          }
        })
      }
      if (target.classList.contains('spacer')) { //碰到space
        var a = target.parentNode.parentNode;
        var b = spareSpace.firstChild;
        a.parentNode.insertBefore(b, a);
      }
      if (target.classList.contains('shakeAnimate')) { //碰到图标
        var a = target.parentNode;
        var b = spareSpace.firstChild;
        a.parentNode.insertBefore(b, a);
      }
      if (target.classList.contains('title')) { //碰到title
        var a = target.parentNode.parentNode;
        var b = spareSpace.firstChild;
        a.parentNode.insertBefore(b, a);
      }
      desktopSort(); //重新排序
      dockSort();
      startParameter = null;
      endParameter = null;
    }
  }, false)

  function openPage(target) { //点击放大生成网页
    document.querySelector('.p').style.display = 'none';
    var iconLastChild = target.lastChild; //阴影
    iconLastChild.style.display = 'block';
    iconLastChild.innerHTML = "请点：home键";
    target.parentNode.style.zIndex = 1000;
    target.querySelector('.title').style.display = "none";
    target.parentNode.parentNode.style.zIndex = 1500;
    nav.style.visibility = 'hidden';
    dock.style.backgroundColor = 'rgba( 0, 0, 0, 0)';

    if (target.parentNode.parentNode.parentNode.className === 'container') {
      document.querySelector( '.leftBar' ).style.display = "none";
      document.querySelector( '.rightBar' ).style.display = "none";
      container.style.overflowX = 'hidden';
      container.style.overflowY = 'hidden';
      container.style.height = 498 + 'px';
      var x = ipadDisplay.offsetWidth * 4 / 2 - ipadDisplay.offsetWidth / 2 -
        target.offsetWidth - target.parentNode.offsetLeft * 4 + ipadDisplay.offsetLeft * 4 -
        target.parentNode.offsetWidth / 2 * 2.5125 / 2;
      var y = ipadDisplay.offsetHeight * 5 / 2 - ipadDisplay.offsetHeight / 2 -
        target.parentNode.offsetWidth - target.parentNode.offsetTop * 5 - ipadDisplay.offsetTop;
      //阴影
      iconLastChild.style.transform = 'translate( ' + 0 + 'px, ' + 2 + 'px ) scale( ' + 2.5125 + ', ' + 2.51 + ' )'; //宽4倍 高5倍
      //目标元素的父元素的父元素
      iconLastChild.parentNode.parentNode.parentNode.style.transform =
        'translate( ' + x + 'px, ' + y + 'px ) scale( ' + 4 + ', ' + 5 + ' )';

      dock.style.transform = 'translate( ' + 200 + 'px, ' + 300 + 'px ) scale( ' + 4 + ', ' + 5 + ' )';
    }
    if (target.parentNode.parentNode.className === 'dock') {
      var x = ipadDisplay.offsetWidth * 4 / 2 - ipadDisplay.offsetWidth -
        target.offsetWidth - target.parentNode.offsetLeft * 4 + ipadDisplay.offsetLeft * 4 * 2.09;
      var y = -(target.parentNode.offsetHeight + ipadDisplay.offsetTop * 2 + target.parentNode.offsetWidth)
        //阴影
      iconLastChild.style.transform = 'translate( ' + 0 + 'px, ' + 1 + 'px ) scale( ' + 2.5125 + ', ' + 2.51 + ' )';
      //目标元素的父元素的父元素
      iconLastChild.parentNode.parentNode.parentNode.style.transform =
        'translate( ' + x + 'px, ' + y + 'px ) scale( ' + 4 + ', ' + 5 + ' )';

      container.style.transform = 'translate( ' + (x - 100) + 'px, ' + -1100 + 'px ) scale( ' + 4 + ', ' + 5 + ' )';
    }

    setTimeout(function() {
      document.querySelector('.p').style.display = 'block';
    }, 200);
  }

  //home键刷新
  eventHelper.on(ipadHomeButton, 'mousedown', function(event) {
    var target = event.target;
    if (target.className === 'ipad-home-button' || target.tagName === 'SPAN') {
      ipadHomeButton.classList.add('hovera');
      ipadHomeButtonSpan.classList.add('hoverb');
      containerChildren.forEach(function(item) {
        [].slice.call(item.children, 0).forEach(function(item) {
          var iconChildiconImg = item.firstChild;
          iconChildiconImg.classList.remove('shakeAnimate');
          var itemChildjun = item.firstChild.firstChild.nextSibling;
          itemChildjun.classList.remove('junction');
        })
      })
      dockAllChildren.forEach(function(item) {
        [].slice.call(item.children, 0).forEach(function(item) {
          var iconChildiconImg = item.firstChild;
          iconChildiconImg.classList.remove('shakeAnimate');
          var itemChildjun = item.firstChild.firstChild.nextSibling;
          itemChildjun.classList.remove('junction');
        })
      })
      if (document.querySelector('.spa')) {
        desktopSort();
      }
    }
  })

  eventHelper.on(ipadHomeButton, 'mouseup', function(event) {
    var target = event.target;
    if (target.className === 'ipad-home-button hovera' || target.tagName === 'SPAN') {
      ipadHomeButton.classList.remove('hovera');
      ipadHomeButtonSpan.classList.remove('hoverb');
    }

    if (document.querySelector('.original')) { //放大后还原
      document.querySelector( '.leftBar' ).style.display = "block";
      document.querySelector( '.rightBar' ).style.display = "block";
      // console.log( abc );
      container.style.overflowX = 'hidden';
      container.style.overflowY = 'hidden';
      container.style.height = 498 + 'px';
      dock.style.top = -105 + 'px';
      document.querySelector('.nav').style.top = -105 + 'px';
      container.style.transform = 'translate( ' + 0 + 'px, ' + 0 + 'px ) scale( ' + 1 + ', ' + 1 + ' )';
      document.querySelector('.original').parentNode.parentNode.style.transform =
        'translatex(' + 0 + 'px ) scale( ' + 1 + ', ' + 1 + ' )';
      document.querySelector('.original').parentNode.style.transform =
        'translatex(' + 0 + 'px ) scale( ' + 1 + ', ' + 1 + ' )';
      dock.style.transform = 'translate( ' + 0 + 'px, ' + 0 + 'px ) scale( ' + 1 + ', ' + 1 + ' )';
      [].slice.call(document.querySelectorAll('.small-pages'), 0).forEach(function(item) {
        item.style.transform = 'translate( ' + 0 + 'px, ' + 0 + 'px ) scale( ' + 1 + ', ' + 1 + ' )';
        setTimeout(function() {
          item.style.display = 'none';
          item.previousSibling.previousSibling.style.display = "block";
          nav.style.visibility = 'visible';
          dock.style.background = '#429F8A';
        }, 200);
      })
      document.querySelector('.original').parentNode.parentNode.style.zIndex = 200;
      document.querySelector('.original').parentNode.removeChild(document.querySelector('.original'))
    }

  })
}();