    var input = document.getElementsByClassName("input")[0];
    var div = input.nextElementSibling;
    input.onfocus = function () {
        div.style.height = "165px";
    }
    input.onblur = function () {
        div.style.height = "0";
    }