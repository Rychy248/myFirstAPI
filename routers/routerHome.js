
function routerFunction(express, urlEncoded, jsonParser) {
    // router define
    const homeRout = express.Router();

    // Espace to add a midleware
    homeRout.use((req,res,next)=>{
        next();
    });
    // controller import
    // const { homeGet, aboutGet, contactGet } = require("./../controllers/homeController");

    // HTTP METHODS, AND REPONSE
    homeRout.get("/",urlEncoded,((req,res)=>{
        res.render("index");
    }));

    return homeRout;
};

module.exports = routerFunction;