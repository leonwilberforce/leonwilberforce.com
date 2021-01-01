const express = require("express");
const response = require("./services/response.service");
const config = require('./config/config.json');

const app = express();

const logger = require('./config/logger');

app.set('json spaces', 2);
app.get("/", (req, res) => {
  res.json(response.success(null));
});

app.listen(config.node_port, () => {
 logger.info("Server is listening on port: " + config.node_port);
});