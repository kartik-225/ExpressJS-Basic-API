const db = require("./dbConnection");

module.exports = (req, res, next) => {
  const data = req.body;
  db.run(
    `INSERT INTO notes (note, time, author) VALUES (?, ?, ?)`,
    [
      data.note,
      new Date().toISOString().slice(0, 19).replace("T", " "),
      data.author,
    ],
    (err) => {
      if (err) return next(ErrorHandler.internalServerError(err.message));
      else res.status(200).json({ msg: "Row insertion success 🥳" });
    }
  );
};
