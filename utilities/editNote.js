const db = require("./dbConnection");

module.exports = (req, res, next) => {
  const data = req.body;
  db.run(
    `UPDATE notes SET note = ? WHERE id = ?`,
    [data.note, data.id],
    (err) => {
      if (err) return next(ErrorHandler.internalServerError(err.message));
      else res.status(200).json({ message: "Updated successfully 😇" });
    }
  );
}