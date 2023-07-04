//  --------------midleware PARSER
const
    bodyParser = require("body-parser"),
    urlEncoded = bodyParser.urlencoded({extended:true}),
    jsonParser = bodyParser.json()
;

/**
 * 
 * @param { express.app } app the core app
 * @param { express } express the module express
 */
function urlFunction(app,express) {
    app.use("/", require("./routerHome")(express, urlEncoded, jsonParser));
};

module.exports = urlFunction;