const express = require('express');
const { createPage, getPages } = require('../controllers/pageController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { validate } = require('../middlewares/validate');

const router = express.Router();

router.post('/', authMiddleware, validate, createPage);
router.get('/', getPages);

// Similarly for other CRUD operations

module.exports = router;
