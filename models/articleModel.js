


const { articleModel } = require("./models")


const article = {
    
    model : articleModel,
    
    create: async function (document={}){
        return await this.model.create(document);
    },

    read: async function (query={}){
        return await this.model.find(query);
    },

    deleteMany: async function (condition={}){
        return await this.model.deleteMany(condition);
    },

    /**
     * This replace the document inside the DB, using "replaceOne"
     * @param { {} } conditions to finde the element
     * @param { {} } document the new value
     * @returns the validation
     */
    put: async function (conditions={},document={}){
        return await this.model.replaceOne(conditions,document);
    }
};

module.exports = { article }