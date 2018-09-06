window.onload=function () {
    var gwc = document.querySelectorAll(".right li");
    var text =document.querySelector(".text");
    var span = document.querySelectorAll(".lf span");
    var pro = document.querySelector(".product");
    var prj = document.querySelector(".project");
    var produce = document.querySelector(".produce")
    var goods = document.querySelector(".goods")
    var Ol = document.querySelectorAll('.list .container ol li');
    var Ul = document.querySelectorAll('.list .container .Carousel li');
    var list= document.querySelectorAll(".list-a li");
    var phone = document.querySelector(".phone");
    var   TV = document.querySelector(".tv");
    var pingban = document.querySelector(".computer .container");
    var family = document.querySelector(".family .container");
    var go = document.querySelector(".go .container")
    var len = Ol.length;
    var timer = null;
    var num = null;
        gwc[3].addEventListener("mousemove",function () {
            text.style.display="block"
        })
    gwc[3].addEventListener("mouseout",function () {
        text.style.display="none"
    })
    span[0].addEventListener("mousemove",function () {
        pro.style.display='block';
    })
    span[0].addEventListener("mouseout",function () {
        pro.style.display='none'
    })
    span[1].addEventListener("mousemove",function () {
        prj.style.display='block';
    })
    span[1].addEventListener("mouseout",function () {
        prj.style.display='none'
    })
    span[2].addEventListener("mousemove",function () {
        produce.style.display='block';
    })
    span[2].addEventListener("mouseout",function () {
        produce
            .style.display='none'
    })
    span[3].addEventListener("mousemove",function () {
        goods.style.display='block';
    })
    span[3].addEventListener("mouseout",function () {
        goods.style.display='none'
    })
    function update(num) {
        for (var j=0;j<len;j++) {
            Ol[j].className = '';
            Ul[j].style.display = 'none';
        }
        Ol[num].className = 'active';
        Ul[num].style.display = 'block';
    }
    function autoplay(){
        ++num;
        if(num >= len){
            num = 0;
        }
        update(num);
    }

    timer = setInterval(autoplay,2500);
    for (var i=0;i<len;i++){
        Ol[i].index = i;
        Ol[i].onmouseover = function () {
            clearInterval(timer);
            update(this.index);
        }
        Ol[i].onmouseout = function(){
            //自动
            num = this.index;
            timer = setInterval(autoplay,2500);
        }
    }
    list[0].addEventListener("mousemove",function () {
        phone.style.display='block';
    })
    phone.addEventListener("mousemove",function () {
        phone.style.display='block';
    })
    phone.addEventListener("mouseout",function () {
        phone.style.display='none'
    })
    list[1].addEventListener("mousemove",function () {
        TV.style.display='block';
    })
    list[1].addEventListener("mouseout",function () {
        TV.style.display='none'
    })
    list[2].addEventListener("mousemove",function () {
        pingban.style.display='block';
    })
    list[2].addEventListener("mouseout",function () {
        pingban.style.display='none'
    })
    list[3].addEventListener("mousemove",function () {
        family.style.display='block';
    })
    list[3].addEventListener("mouseout",function () {
        family.style.display='none'
    })
    list[4].addEventListener("mousemove",function () {
        go.style.display='block';
    })
    list[4].addEventListener("mouseout",function () {
        go.style.display='none'
    })
}