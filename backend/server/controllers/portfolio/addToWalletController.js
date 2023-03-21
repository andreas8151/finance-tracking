const connection = require("../../../database/database");

/* ------ insert cash into portfolio------- */

exports.insertCash = async (req, res) => {
  try {
    const swedbank = req.body.swedbank;
    const avanza = req.body.avanza;
    const nordea = req.body.nordea;
    const kameo = req.body.kameo;
    const other = req.body.other;
    const username = req.body.name;

    const sqlUpdate =
      "UPDATE users SET swedbank = swedbank + ?, avanza = avanza + ?, nordea = nordea + ?, kameo = kameo + ?, other = other + ? WHERE name = ?";

    connection.query(
      sqlUpdate,
      [swedbank, avanza, nordea, kameo, other, username],
      (error, result) => {
        if (error) throw error;
        console.log(result);
      }
    );

    res.send("Values inserted");
    res.statusCode = 200;
  } catch (error) {
    res.status(500).send("Error in the server");
  }
};
