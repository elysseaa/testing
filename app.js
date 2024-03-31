var express = require('express');
var app = express();
let ejs = require('ejs');

app.set("view engine", "ejs");

/* Rendering requests */

var pages = ["/art", "/code", "/miscellany", "/about"]

var cssfile = "night.css";
var jsfile = "initialize.js";

for (var i=0; i < pages.length; i++) {
    app.get(pages[i], function (req, res) {
        res.render("template", {
            page: req.route.path.substring(1),
            cssfile: cssfile,
            jsfile: jsfile
        });
    });
}

app.get("/", function (req, res) { 
    res.render("template", {
        page: "index",
        cssfile: cssfile,
        jsfile: jsfile
    });
})

/* Non-rendering requests */

app.get("/brightness", function (req, res){
    var brightness = req.query.mode ? req.query.mode : "night";
    cssfile = brightness + ".css";
    jsfile = "index.js";
    console.log("brightness", brightness);
    res.redirect("/");
})

/* Static files */

app.use(express.static('public'));
app.use(express.static('scripts'));
app.use(express.static('styles'));

app.listen(3000, function (err) {
    if (err) console.log(err);
});