/**
 * Basic Functions
 */

function getId(foo) { return document.getElementById(foo); }
function getClass(foo) { return document.getElementsByClassName(foo); }

/**
 * Day/Night
 */

getId('brightness').onclick = changeBrightness;

function changeBrightness () {
    var brightness = getClass('csslink')[0].href.substr(22);
    console.log(brightness);
    if (brightness == "night.css"){
        getClass('csslink')[0].setAttribute('href', 'day.css'); 
    }
    else {
        getClass('csslink')[0].setAttribute('href', 'night.css'); 
    }
}