    var input = document.getElementsByClassName("input")[0];
    var div = input.nextElementSibling;
    input.onfocus = function () {
        div.style.display = "block";
    }
    input.onblur = function () {
        div.style.display = "none";
    }