
/**
 * 
 * @param { express.app } app the core app
 * @param { express } express the module express
 */
function urlFunction(app,express) {
    app.use("/articles", require("./articleRouter")(express));
};

module.exports = urlFunction;