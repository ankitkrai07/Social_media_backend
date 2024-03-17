const express = require("express");
const {
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} = require("../Controllers/PostController.js");

const PostRoute = express.Router();

PostRoute.post("/", createPost);
PostRoute.get("/:id", getPost);
PostRoute.put("/:id", updatePost);
PostRoute.delete("/:id", deletePost);
PostRoute.put("/:id/like", likePost);
PostRoute.get("/:id/timeline", getTimelinePosts);

module.exports = PostRoute;
