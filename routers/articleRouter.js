
function routerFunction(express) {
    // router define
    const articleRouter = express.Router();

    // Espace to add a midleware
    articleRouter.use((req,res,next)=>{
        next();
    });
    // controller import
    const { articleGet } = require("./../controllers/articleController");

    // HTTP METHODS, AND REPONSE
    articleRouter.get("/",articleGet);

    return articleRouter;
};

module.exports = routerFunction;