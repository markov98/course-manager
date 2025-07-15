const express = require('express');
const cors = require("cors");

module.exports = () => {
  const app = express();

  app.use(cors());

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  return app;
}