
const { article } = require("../models/articleModel");

function articleGet(req,res,next) {
    article.read()
    .then((response) => {
        res.json({
            error:0,
            status:200,
            data:response,
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

function articlePost(req, res, next){
    console.log(req.body.title);
    console.log(req.body.content);

    article.create({
        title:req.body.title,
        content:req.body.content
    })
    .then((response)=>{
        res.json({
            error:0,
            status:200,
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

module.exports =  { articleGet, articlePost }