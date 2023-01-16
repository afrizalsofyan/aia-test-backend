const feeds = require("../helpers/flickrConfig");

exports.getFeedFlickr = async (req, res) => {
  try {
    const response = await feeds.publicPhotos();
    const data = JSON.parse(response.text);
    return res.status(200).json({ success: true, data: data?.items });
  } catch (error) {
    console.log(error.message);
  }
};
