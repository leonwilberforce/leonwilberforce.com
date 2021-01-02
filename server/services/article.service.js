const ArticleModel = require("../models/article.model");

class articleService {
  static async getLatestArticles(url, limit) {

    let whereStatement = {};

    if(url){
      whereStatement.url = url;
    }

    let articles = await ArticleModel.findAll({
      limit: limit,
      order: [["id", "DESC"]],
      where: whereStatement,
    });

    return articles;
  }

  static async getArticleByID(id) {
    let article = await ArticleModel.findByPk(id);

    return article;
  }

  static async getArticleByUrl(url) {
    let article = await ArticleModel.findOne({
      where: {
        url: url.toLowerCase(),
      },
    });

    return article;
  }
}

module.exports = articleService;
