
function routerFunction(express) {
    // router define
    const articleRouter = express.Router();

    // Espace to add a midleware
    articleRouter.use((req,res,next)=>{
        next();
    });
    // controller import
    const { articleGet, articlePost } = require("./../controllers/articleController");

    // HTTP METHODS, AND REPONSE
    articleRouter.get("/",articleGet);
    articleRouter.post("/",articlePost);

    return articleRouter;
};

module.exports = routerFunction;