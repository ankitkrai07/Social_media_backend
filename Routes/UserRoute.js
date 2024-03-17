const express = require("express");
const {
  deleteUser,
  followUser,
  getUser,
  UnFollowUser,
  updateUser,
} = require("../Controllers/UserController.js");

const UserRoute = express.Router();

UserRoute.get("/:id", getUser);
UserRoute.put("/:id", updateUser);
UserRoute.delete("/:id", deleteUser);
UserRoute.put("/:id/follow", followUser);
UserRoute.put("/:id/unfollow", UnFollowUser);
module.exports = UserRoute;
