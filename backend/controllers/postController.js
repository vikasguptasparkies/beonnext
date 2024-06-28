const Post = require('../models/Post');
const postService = require('../services/postService');

exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.json(posts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Similarly for other CRUD operations
