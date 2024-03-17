const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { connection } = require("./Config/db");
const dotenv = require("dotenv");
require("dotenv").config();

const AuthRoute = require("./Routes/AuthRoute.js");
const UserRoute = require("./Routes/UserRoute.js");
const PostRoute = require("./Routes/PostRoute.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);

app.get("/", async (req, res) => {
  res.send("Welcome to Social Media Backend");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log(`Connected to DB`);
  } catch (err) {
    console.log(err);
  }
  console.log(`Server running at port 8080`);
});
