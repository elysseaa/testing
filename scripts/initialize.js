/**
 * Basic Functions
 */

function getId(foo) { return document.getElementById(foo); }
function getClass(foo) { return document.getElementsByClassName(foo); }

initializeBrightness();

function initializeBrightness () {
    if (localStorage.getItem("brightness") == "undefined") {
        // detect operating system brightness
        if (window.matchMedia) {
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                // Dark
                localStorage.setItem("brightness", "night");
                setBrightness('night');
            } else {
                // Light
                localStorage.setItem("brightness", "day");
                setBrightness('day'); 
            }
        } else {
            // Default (when Media-Queries are not supported)  
            localStorage.setItem("brightness", "night"); 
            setBrightness('night'); 
        }
    }
    else {
        setBrightness(localStorage.getItem("brightness"));
    }
}

var xhr = new XMLHttpRequest;

function setBrightness (brightness) {
    localStorage.setItem("brightness", brightness);
    xhr = new XMLHttpRequest;
    console.log(xhr);
    xhr.onreadystatechange = function () {
        window.location.reload();
    };
    xhr.open("GET", "/brightness?mode=" + brightness);
    xhr.send();
}