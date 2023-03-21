const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
const connection = require("../database/database");

const { authRoute } = require("./routes/authenticationRoute");
const { portfolioRoute } = require("./routes/portfolioRoute");

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database successfully.");
});

//middleWare
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
app.use("/authentication", authRoute);
app.use("/portfolio", portfolioRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
