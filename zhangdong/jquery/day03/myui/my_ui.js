jQuery.fn.tabs = function(){
    $parent = this;
    $parent.children(":first-child")
           .addClass("tabs")
           .children()
           .children()
           .attr("data-toggle","tab")
           .parent()
           .first()
           .addClass("active");
    $parent.children(":last-child")
            .addClass("container")
            .children(":first-child")
            .addClass("active");


    $parent.children(":first")
    .on("click","[data-toggle=tab]",e=>{
        var $tar=$(e.target);
        if(!$tar.parent().is(".active")){
            $tar.parent().addClass("active")
            .siblings().removeClass("active");
            var id=$tar.attr("href");
            $(id).addClass("active")
            .siblings().removeClass("active");
        }
    })
}