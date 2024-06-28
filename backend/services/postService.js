const Post = require('../models/Post');

exports.createPost = async (data) => {
  const post = new Post(data);
  await post.save();
  return post;
};

exports.getPosts = async () => {
  return await Post.find().populate('author').populate('categories').populate('tags');
};

// Similarly for other CRUD operations
