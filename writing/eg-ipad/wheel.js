    wheel = function(el,callback){
        var type = 'mousewheel';
        try{
            document.createEvent('MouseScrollEvents');
            type = 'DOMMouseScroll';
        }catch(e){}
        // el.addEventListener = addEventListener;
        el.addEventListener(type,function(e){
            e = e || window.event;
            var wheelDelta,delta,scroll = 0;
            if('wheelDelta' in e){
                wheelDelta = e.wheelDelta;  // 正数向上滚动
                if(window.opera && window.opera.version() < 10){
                    e.delta = parseInt(-wheelDelta) / 120;  // safari 下的wheeldelta为浮点数
                }
                e.delta = parseInt(e.wheelDeltaX) / 3 ;
                scroll += e.delta;

            }else if('detail' in e){
                e.wheelDelta = -e.detail * 40 / 3; //修复firefox下没有wheelDelta的bug，detail为+-3
                e.delta = e.wheelDelta / 120;
            }
            callback.call(el,e);
            //阻止向上冒泡
            e.preventDefault ? event.preventDefault() :event.returnValue = false;
        },false);
   }