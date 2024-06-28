const Page = require('../models/Page');
const pageService = require('../services/pageService');

exports.createPage = async (req, res) => {
  try {
    const page = await pageService.createPage(req.body);
    res.status(201).json(page);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPages = async (req, res) => {
  try {
    const pages = await pageService.getPages();
    res.json(pages);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Similarly for other CRUD operations
