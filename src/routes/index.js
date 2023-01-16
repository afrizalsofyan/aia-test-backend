const routes = require("express").Router();
const feedController = require("../controllers/feeds");

routes.get("/feeds", feedController.getFeedFlickr);

module.exports = routes;
