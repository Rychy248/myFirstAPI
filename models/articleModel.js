


const { articleModel } = require("./models")


const article = {
    
    model : articleModel,
    
    create: async function (document={}){
        return await this.model.create(document);
    },

    read: async function (query={}){
        return await this.model.find(query);
    },


};

module.exports = { article }