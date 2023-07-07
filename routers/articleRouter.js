
function routerFunction(express) {
    // router define
    const articleRouter = express.Router();

    // Espace to add a midleware
    articleRouter.use((req,res,next)=>{
        next();
    });
    // controller import
    const { 
        articleGet, articlePost, articleDeleteMany,
        articlePut
    
    } = require("./../controllers/articleController");

    // HTTP METHODS, AND REPONSE
    articleRouter.route("/")
        .get(articleGet)
        .post(articlePost)
        .delete(articleDeleteMany)
    ;
    // particular id
    articleRouter.route("/:articleId")
        .get(articleGet)
        .put(articlePut)
    ;
    // articleRouter.put("/:articleId", articleGet);
    
    return articleRouter;
};

module.exports = routerFunction;