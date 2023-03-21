const express = require("express");
const authRoute = express.Router();
const {
  createUser,
} = require("../controllers/authentication/registerController");

const {
  getUserController,
} = require("../controllers/authentication/getUserController");

authRoute.post("/insertUser", createUser);

authRoute.get("/getUser", getUserController);

exports.authRoute = authRoute;
