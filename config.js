
// --------------------- IMPORTING  AND SETTING---------------------
const 
// Local modules
    path = require('path'),
// Third part modules 
    express = require("express"),
    ejs = require("ejs")
    bodyParser = require('body-parser'),
    cors = require('cors'),
// general config
    dbSettings = {
        dbName :"wikiDB",
        dbPort :"27017"
    },
    appSettings = {
        port:8080
    },
// create app
    app = express(),
// Allowed origin for cors util
    allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:8080/"];
;
// -------- MIDLEWARE
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
    // cors midleware
app.use(cors({origin: allowedOrigins}));
// MODIFY THE JSON PARSER
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


module.exports = { express, app, dbSettings, appSettings}
