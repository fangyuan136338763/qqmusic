var offsetX,offsetY;
var canMove = false;
pop.onmousedown = function(e){
    canMove = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    console.log(offsetX,offsetY)
}
window.onmousemove = function(e){
   if(canMove){

       var top = e.clientY - offsetY;
       var left = e.clientX - offsetX;
       pop.style.top = `${top}px`;
       pop.style.left = `${left}px`;
       console.log(top,left);
   }
    
}
pop.onmouseup = function(){
    canMove = false;
}