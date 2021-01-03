const express = require("express");
const response = require("./services/response.service");
const config = require("./config/config.json");
require("./config/sql");

const app = express();

const logger = require("./config/logger");

const articleService = require("./services/article.service");

app.set("json spaces", 2);

var corsOptions = {
  origin: config.clientDomain
}

const cors = require('cors');

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json(response.success(null));
});

app.get("/articles", async (req, res) => {
  try {
    const { limit, url } = req.query;

    let articleLimit = parseInt(limit) || 100;

    let articles = await articleService.getLatestArticles(url, articleLimit);

    res.json(response.success(articles));
  } catch (error) {
    logger.error(error);
    res.json(response.error());
  }
});

app.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let article = await articleService.getArticleByID(id);

    if (article) {
      res.json(response.success(article));
    } else {
      res.status(404).json(
        response.failed([
          {
            url: "Article could not be found",
          },
        ])
      );
    }
  } catch (error) {
    logger.error(error);
    res.json(response.error());
  }
});

app.listen(config.node_port, () => {
  logger.info("Server is listening on port: " + config.node_port);
});
