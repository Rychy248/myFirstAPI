

const { express, app, bodyParser, jsonParser } = require("./config");
require("./routers/urls")(app, express);
require("./db")(app);