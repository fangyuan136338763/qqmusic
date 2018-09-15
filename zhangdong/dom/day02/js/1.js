var spans = document.querySelectorAll("ul.tree>li>span");

for(var span of spans){
    span.onclick = function(){
        if(this.className!= ""){
            this.className = "";
        }else{
            var open = document.querySelector("ul.tree>li>span.open");
            if(open!=null){
                open.className = "";
            }
            this.className = "open" 
        }
    }
}