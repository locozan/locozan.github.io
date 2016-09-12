void function() {
  var configs = {
    post: [77, 74],
    size: [25, 400],
    post2: [76, 0]
  }

  document.querySelector('#list li').className = 'active';

  var render = function() {
    var list = document.getElementById('list');
    var text = document.getElementById('text');
    var textTop = text.getBoundingClientRect().top;

    if (textTop < -100) {
      list.style = 'position:fixed;'
      list.style.top = configs.post2[1] + '%';
      list.style.left = configs.post2[0] + '%';
    } else if (textTop > -100) {
      list.style = 'position:absolute;'
      list.style.top = configs.post[1] + '%';
      list.style.left = configs.post[0] + '%';
    }

    var listLi = list.getElementsByTagName('li'); 
    var listA = list.getElementsByTagName('a');
    var textH1 = text.getElementsByTagName('h1');

    for (var i = 0, l = textH1.length; i < l; i++) {
      var top = textH1[i].getBoundingClientRect().top;

      if (top > -20) {
        var id = textH1[i].getAttribute('id');

        for (var j = 0, l = listA.length; j < l; j++) {
          listLi[j].className = listA[j].getAttribute('href') === '#' + id ?
            'active' : '';
        }

        break;
      }
    }
  }

  window.addEventListener('scroll', function() {
    render();
  }, false);

}();