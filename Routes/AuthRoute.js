const express = require("express");
const { loginUser, registerUser } = require("../Controllers/AuthController.js");

const AuthRoute = express.Router();

AuthRoute.post("/register", registerUser);
AuthRoute.post("/login", loginUser);

module.exports = AuthRoute;
