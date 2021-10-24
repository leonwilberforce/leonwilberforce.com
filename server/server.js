const express = require("express");
const response = require("./services/response.service");
const config = require("./config/config.json");
require("./config/sql");

const app = express();

const logger = require("./config/logger");

const articleService = require("./services/article.service");
const emailService = require("./services/email.service");

app.set("json spaces", 2);

var corsOptions = {
  origin: config.clientDomain
}

const cors = require('cors');

const { check, validationResult } = require('express-validator');

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json(response.success());
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

app.post("/contact", [
  check('name').trim().notEmpty().escape(),
  check('email').isEmail().normalizeEmail(),
  check('message').trim().notEmpty().escape()
], async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    emailService.sendContactEmail(req.body.email, req.body.name, req.body.message);

    res.json(response.success());
  } catch (error) {
    logger.error(error);
    res.json(response.error());
  }
});

app.listen(config.node_port, () => {
  logger.info("Server is listening on port: " + config.node_port);
});
