const express = require("express");
const response = require("./services/response.service");
const app = express();
app.set('json spaces', 2);
app.get("/", (req, res) => {
  res.json(response.success(null));
});
app.listen(8081, () => {
 logger.info("Server is listening on port: " + 8081);
});