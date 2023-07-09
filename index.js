

const { express, app } = require("./config");
require("./routers/urls")(app, express);
require("./db")(app);