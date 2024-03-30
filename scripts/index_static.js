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
    var brightness = getClass('csslink')[0].href.substr(-5);
    if (brightness == "t.css"){
        getClass('csslink')[0].setAttribute('href', './styles/day.css'); 
    }
    else {
        getClass('csslink')[0].setAttribute('href', './styles/night.css'); 
    }
    console.log(brightness);
}