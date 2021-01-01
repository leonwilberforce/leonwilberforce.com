const express = require("express");
const response = require("./services/response.service");
const config = require('./config/config.json');
require('./config/sql');

const app = express();

const logger = require('./config/logger');

const articleService = require("./services/article.service");

app.set('json spaces', 2);

app.get("/", (req, res) => {
  res.json(response.success(null));
});

app.get("/articles", async (req, res) => {
  try {

    let limit = parseInt(req.query.limit) || 100;

    let articles = await articleService.getLatestArticles(limit);

    res.json(response.success(articles));

  } catch (error) {
    logger.error(error);
    res.json(response.error());
  }
});

app.listen(config.node_port, () => {
  logger.info("Server is listening on port: " + config.node_port);
});