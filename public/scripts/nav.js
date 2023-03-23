var scroll1 = window.pageYOffset;
window.onscroll = function () {
    var scroll2 = window.pageYOffset;
    if (scroll1 > scroll2) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector('nav').style.top = "-100px";
    }
    scroll1 = scroll2;
}