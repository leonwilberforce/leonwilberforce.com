const ArticleModel = require('../models/article.model');

class articleService {

    static async getLatestArticles(limit) {
        var articles = await ArticleModel.findAll({
            limit: limit,
            order: [ [ 'id', 'DESC' ]]
        });

        return articles;
    }
}

module.exports = articleService;