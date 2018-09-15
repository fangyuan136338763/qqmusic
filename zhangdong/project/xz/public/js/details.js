(async function(){
    var lid = location.search.split("=")[1];
    // console.log(lid);
    var res = await ajax({
        url:"http://localhost:3000/details",
        type:"get",
        data:`lid=${lid}`,
        dataType:"json"
    });
    // console.log(res);
    var {product,specs,pics} = res;
    var {title,subtitle,price,promise} = product;
    var html = `<h6 class="font-weight-bold">
                    ${title}
                </h6>
                <h6>
                    <a class="small text-dark font-weight-bold" href="javascript:;">${subtitle}</a>
                </h6>
                <div class="alert alert-secondary small" role="alert">
                    <div>
                        <span>学员售价：</span>
                        <h2 class="d-inline text-primary font-weight-bold">${price.toFixed(2)}</h2>
                    </div>
                    <div>
                        <span>服务承诺：</span>
                        <span>${promise}</span>
                    </div>
                </div>`;
    var div = document.getElementById("details");
    div.innerHTML = html + div.innerHTML;
    var html = '';
    // console.log(specs)
    for(var s of specs){
        var a = `<a class="btn btn-sm btn-outline-secondary ${s.lid==lid?'active':''}" 
        href="product_details.html?lid=${s.lid}">${s.spec}</a>`;
        html += a;
    }
    // console.log(html);
    div.children[4].children[1].innerHTML = html;
    var html = '';
    for(var pic of pics){
        var {sm,md,lg} = pic;   
        var li = `<li class="float-left p-1">
        <img src="${sm}" data-md="${md}" data-lg="${lg}">
      </li>`;
      html += li;
    }
    var ul = preview.children[0].children[4].children[1].children[0];
    ul.innerHTML = html;
    ul.style.width = `${62*pics.length}px`;
    // console.log(ul.style.width);

    // 放大镜图片切换
    var $prevLi = $("#preview").children(":first-child").children(":last-child").children(":first-child");
    var $nextLi = $prevLi.parent().children(":last-child");
    // console.log($nextLi)
    var m = 0;
    $imgs = $prevLi.next().children(":first-child").children();
    $prevLi.click(function(){
        $prevLi = $(this);
        if(!$prevLi.is(".disabled")){
            m++;
            $prevLi.next().children(":first-child").css("margin-left",`${m*62}px`);
            $nextLi.removeClass("disabled");
            console.log($imgs.length-4,m);
            if(m==0){
                $prevLi.addClass("disabled");
            }
            
        }
    });
    $nextLi.click(function(){
        $nextLi = $(this);
        if(!$nextLi.is(".disabled")){
            m--;
            $prevLi.next().children(":first-child").css("margin-left",`${m*62}px`);
            $prevLi.removeClass("disabled");
            // console.log($prevLi.next().children(":first-child").children().length)
            if($imgs.length-4 == -m){
                // console.log(111);
                $nextLi.addClass("disabled");
            }
        }
    });
    var $ul = $prevLi.next().children(":first-child")
    var $lgDiv = $("#div-lg");
    var $mImg = $("#preview>div>img");
    console.log($lgDiv);
    $ul.on("mouseover","img",function(){
        var md = $(this).attr("data-md");
        console.log($(this));
        $mImg.attr("src",md);
        $lgDiv.css("backgroundImage",`url(${$(this).attr("data-lg")})`);
    });
    var $mask = $("#mask");
    var $smask = $("#super-mask");
    var mSize = 176;
    var smSize = 352;
    var max = smSize-mSize;
    $smask.hover(function(){
        $mask.toggleClass("d-none");
        $lgDiv.toggleClass("d-none");
    }).mousemove(function(e){
        var left = e.offsetX-mSize/2;
        var top = e.offsetY-mSize/2;
        
        if(top<0)top=0; else if(top>max)top=max;
        if(left<0)left=0; else if(left>max) left=max;
        $mask.css({
            left: left,
            top: top
        });
    });
})()