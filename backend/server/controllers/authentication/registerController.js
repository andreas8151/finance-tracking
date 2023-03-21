const connection = require("../../../database/database");
const { validateUser } = require("../../validationSchema/validationInsert");

function createUser(req, res) {
  try {
    /* validate name and password */
    const { error, value } = validateUser(req.body);
    if (error) {
      res.json(result.error.details[0].message);
      return;
    }

    const { name, password } = value;

    const sqlInsert = "INSERT INTO users (name, password) VALUES (?, ?)";

    connection.query(sqlInsert, [name, password], (err, result) => {});

    res.send("Values inserted");
    res.statusCode = 201;
  } catch (error) {
    res.status(500).send("Error in the server");
  }
}

module.exports = { createUser };
