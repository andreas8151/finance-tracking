const connection = require("../../../database/database");

function getUserController(req, res) {
  try {
    const sqlSelect = "SELECT * FROM users";

    connection.query(sqlSelect, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  } catch (error) {
    res.status(500).send("Error in the server");
  }
}
module.exports = {
  getUserController,
};
