$(function(){
    function loadPage(pno=0){
        var kw = decodeURI(location.search.split("=")[1]);
        $.ajax({
            url: "http://localhost:3000/products/",
            type: "get",
            data:{kw,pno},
            dataType: "json",
            success: function(data){
                // console.log(data);
                var html = "";
                for(var {lid,price,title,md} of data.products){
                    html += `<div class="col-md-4 p-1">
                    <div class="card mb-4 box-shadow pr-2 pl-2">
                      <a href="product_details.html?lid=${lid}">
                        <img class="card-img-top" src=${md}>
                      </a>
                      <div class="card-body p-0">
                        <h5 class="text-primary">￥${price.toFixed(2)}</h5>
                        <p class="card-text">
                          <a href="product_details.html?lid=${lid}" class="text-muted small" title=${title}>${title}</a>
                        </p>
                        <div class="d-flex justify-content-between align-items-center p-2 pt-0">
                          <button class="btn btn-outline-secondary p-0 border-0" type="button">-</button>
                          <input type="text" class="form-control p-1" value="10">
                          <button class="btn btn-outline-secondary p-0 border-0" type="button">+</button>
                          <a class="btn btn-primary float-right ml-1 pl-1 pr-1" href="cart.html" data-lid="${lid}">加入购物车</a>
                        </div>
                      </div>
                    </div>
                  </div>`;
                }
                
                $("#plist").html(html);

                var html = `<li class="page-item  disabled"><a class="page-link bg-transparent" href="#">上一页</a></li>`;
                // console.log(typeof pno);
                var {pnoCount} = data;
                // console.log(pno+1,pnoCount);
                for(var i=1;i<=pnoCount;i++){
                    html += `<li class="page-item ${pno+1==i?'active':''}"><a class="page-link ${pno+1!=i?'bg-transparent':'border'}" href="#">${i}</a></li>`;
                }
                html += `<li class="page-item"><a class="page-link bg-transparent" href="#">下一页</a></li>`;
                $("#plist").next().children(":first-child").children(":first-child").html(html);
            }
        });
    }
    if(location.search.indexOf("kw")!=-1){
        var pno = 0;
        loadPage();
        $(".pagination").on("click","a",function(){
            var $a = $(this);
            if($a.html()=="上一页"){
                pno--;
            }else if($a.html()=="下一页"){
                pno++;
            }else{
                pno = parseInt($a.html()-1);
            }
            loadPage(pno);
           
            
        });

    }
})