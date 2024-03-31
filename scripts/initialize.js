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

function setBrightness (brightness) {
    // getClass('csslink')[0].setAttribute('href', brightness + ".css");
    console.log(brightness);
    localStorage.setItem("brightness", brightness);
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "/brightness?mode=" + brightness);
    xhr.send();
}