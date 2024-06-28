const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { validate } = require('../middlewares/validate');

const router = express.Router();

router.post('/', authMiddleware, validate, createPost);
router.get('/', getPosts);

// Similarly for other CRUD operations

module.exports = router;
