const Page = require('../models/Page');

exports.createPage = async (data) => {
  const page = new Page(data);
  await page.save();
  return page;
};

exports.getPages = async () => {
  return await Page.find().populate('author');
};

// Similarly for other CRUD operations
