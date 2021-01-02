const config = require("./config.json");
const Sequelize = require("sequelize");
const logger = require("../config/logger");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
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
