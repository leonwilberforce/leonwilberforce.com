const Sequelize = require("sequelize");
const logger = require("../config/logger");

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: (msg) => logger.info(msg),
  //logging: false
});

const Article = require("../models/article.model");

const models = {
  Article: Article.init(sequelize),
};

(async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully.");

    Object.values(models)
      .filter((model) => typeof model.associate === "function")
      .forEach((model) => model.associate(models));

    await sequelize.sync();
    console.log("All models were synchronized successfully.");

  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
