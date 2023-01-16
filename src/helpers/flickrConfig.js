const Flicker = require("flickr-sdk");
const feeds = new Flicker.Feeds({ format: "json" });

module.exports = feeds;
