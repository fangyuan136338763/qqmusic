$(function(){
   $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
   $.ajax({
       url: "header.html",
       type: "get",
       success: function(res){
           $(res).replaceAll("#header");
           var $search = $("#header>nav>div>div>div>img");
           var $input = $search.parent().prev();
           console.log($search);
           $search.click(function(){
               console.log($input.val());
               location.href = `http://localhost:3000/products.html?kw=${$input.val().trim()}`;
           });
           $input.keyup(function(e){
               console.log(e.keyCode);
               if(e.keyCode == 13){
                   location.href = `http://localhost:3000/products.html?kw=${$input.val().trim()}`;
               }
           });
           if(location.search.indexOf("kw=")!=-1){
               var kw = location.search.split("=")[1];
               $input.val(kw);
           }
       }
   });

})