
const { article } = require("../models/articleModel");
const { MyError } = require("../utils/customErrors");

function articleGet(req,res,next) {
    const query = (req.params.articleId) ? {_id : req.params.articleId} : {};

    article.read(query)
    .then((response) => {
        res.json({
            error:0,
            status:200,
            data:response,
        });
    })
    .catch((err) => {
        if(err.name == "CastError" && query._id ){
            res.json({
                error:"InvalidId",
                status:200,
                msg:"Article not found, invalid ID",
                data: [],
            });
        }else{
            res.json({
                error:err,
                status:300,
                data: null,
            });
        };
    });
};

function articlePost(req, res, next){
    article.create({
        title:req.body.title,
        content:req.body.content
    })
    .then((response)=>{
        res.json({
            error:0,
            status:200,
            msg:"Succesfull posted",
            response:response
        });
    })
    .catch((err) => {
        res.json({
            error:err,
            status:300,
            data: null,
        });
    });
    
};

function articleDeleteMany(req, res, next){
    article.deleteMany({})
    .then((response)=>{
        res.json({
            error:0,
            status: 200,
            msg:"All articles deleted succesfully",
            data:response,
        });
    })
    .catch((err)=>{
        res.json({
            error:err,
            status: 300,
            msg:"Error produced",
        });
    });
};

async function articlePut(req, res, next) {

    const [conditions, document] = [{_id : req.params.articleId} , req.body];
    let toSend = {
        error:0,
        status:200,
    };

    try {            
        if (Object.keys(document).length == 0){
            throw(new MyError("No title or content sended","EmptyData"));
        };

        let response = await article.put(conditions, document);
        
        toSend.msg = (response.matchedCount > 0) ? "Article updated successufully" : "Any article matched, any change did";
        toSend.data = response;
    } catch (error) {
        console.log(JSON.stringify(error));
        if(error.name == "CastError" && query._id ){
            toSend.error = "InvalidId";
            toSend.msg = "Article not found, invalid ID";
        }else{
            toSend.error = `${error.name}`;
            toSend.status = 300;
            toSend.msg = error.msg ? error.msg : `${error}`;
        };
    };

    res.json(toSend);
};
module.exports =  { articleGet, articlePost, articleDeleteMany, articlePut }