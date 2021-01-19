// JavaScript Document

// Deze functie zorgt ervoor dat er een menu tevoorschijnkomt wanneer er gescrollt wordt en hij verdwijnt
// wanneer het scherm onderaan is zodat de tekst daaronder zichtbaar is.
// Het menu verdwijnt door het te laten zakken onder het scherm (-20%).

document.onscroll = function ()
{
    if (window.innerHeight + window.scrollY > document.body.clientHeight)
    {
        document.getElementById('menu').style.bottom = '-20%';
    }

    if (window.innerHeight + window.scrollY < document.body.clientHeight)
    {
        document.getElementById('menu').style.bottom = '0%';
    }
};