const express = require("express");
const portfolioRoute = express.Router();

const portfolioController = require("../controllers/portfolio/addToWalletController");

portfolioRoute.post("/insertCash", portfolioController.insertCash);

exports.portfolioRoute = portfolioRoute;
