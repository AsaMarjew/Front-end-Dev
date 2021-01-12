// JavaScript Document

document.onscroll = function() {
    if (window.innerHeight + window.scrollY > document.body.clientHeight) {
            document.getElementById('menu').style.bottom = '-20%';
    }

    if (window.innerHeight + window.scrollY < document.body.clientHeight) {
            document.getElementById('menu').style.bottom = '0%';
    }
}