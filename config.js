
// --------------------- IMPORTING  AND SETTING---------------------
const 
// Local modules
    path = require('path'),
// Third part modules 
    express = require("express"),
    // bodyParser = require("body-parser"), IMPORTED IN URLS.JS, adn URLENCODED, and JSONPARSER, created at urls.js
    ejs = require("ejs")
    bodyParser = require('body-parser'),
// general config
    dbSettings = {
        dbName :"wikiDB",
        dbPort :"27017"
    },
    appSettings = {
        port:8080
    },
// create app
    app = express()
;
    
// -------- MIDLEWARE
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

module.exports = { express, app, dbSettings, appSettings}
