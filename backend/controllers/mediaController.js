const Media = require('../models/Media');
const mediaService = require('../services/mediaService');

exports.uploadMedia = async (req, res) => {
  try {
    const media = await mediaService.uploadMedia(req.file);
    res.status(201).json(media);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMedia = async (req, res) => {
  try {
    const media = await mediaService.getMedia();
    res.json(media);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
