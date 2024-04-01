/**
 * Basic Functions
 */

function getId(foo) { return document.getElementById(foo); }
function getClass(foo) { return document.getElementsByClassName(foo); }

/**
 * Day/Night
 */
getId('brightness').onclick = updateBrightness;

var xhr = new XMLHttpRequest;

function updateBrightness () {
    xhr = new XMLHttpRequest;
    var brightness = localStorage.getItem("brightness");
    if (brightness == "night"){
        brightness = "day"; 
    }
    else {
        brightness = "night"; 
    }
    localStorage.setItem("brightness", brightness);
    getClass('csslink')[0].setAttribute('href', brightness + ".css");
    xhr.open("GET", "/brightness?mode=" + brightness);
    xhr.send();
}

/**
 * Anchor scrolling
 */

window.onload = setDividers;

function setDividers () {
    const ids = ["art", "code", "title"];
    const dividers = getClass("divider")
    
    for (var i=0; i < ids.length; i++) {
        const divider = dividers[i];
        const id = getId(ids[i]);

        divider.addEventListener('click', function () {
            id.scrollIntoView();
        })
    }
}
//getClass("divider")
//loop through divider
//add event listener scrolling id into view

//fix this