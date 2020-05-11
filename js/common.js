window.onload = function() {
    var tab = document.getElementsByClassName("tab");
    var lis = document.getElementsByClassName("xxx");
    var cons = document.getElementsByClassName("con");

    for (var i = 0; i < lis.length; i++) {
        lis[i].num = i;
        lis[i].onmouseover = function() {

            for (var j = 0; j < cons.length; j++) {
                cons[j].style.display = 'none';
            }

            cons[this.num].style.display = 'block';
        }
    }
}