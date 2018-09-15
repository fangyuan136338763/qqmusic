$(function(){
  $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(res){
      $(res).replaceAll("#header");
      var $search=
        $("#header>nav>div>div>div>img");
      var $input=$search.parent().prev();
      $search.click(function(){
        location.href=
          `http://localhost:3000/products.html?kw=${$input.val().trim()}`
      })
      $input.keyup(function(e){
        if(e.keyCode==13)
          $search.click()
      })
      if(location.search.indexOf("kw=")!=-1){
          var kw = location.search.split("=")[1];
          $input.val(decodeURI(kw));

      }
    }
  })
})