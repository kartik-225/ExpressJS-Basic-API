const db = require("./dbConnection")

function showNotes(req, res, next) {
  db.all(`SELECT * FROM notes`, (err, rows) => {
    if (err) return next(ErrorHandler.notFound());

    res.status(200).json({ notes: rows });
  });
}

module.exports = showNotes;