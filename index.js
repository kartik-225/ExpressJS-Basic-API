const express = require("express");
const ErrorHandler = require("./ErrorHandler");
const {showNotes,postNote,editNote} = require("./utilities");
const generateToken = require("./utilities/generateToken");
const authenticateUser = require("./utilities/authenticateUser");
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));


// Authentication Middleware
app.use(authenticateUser);


// URL Routes
app.get("/notes", showNotes);
app.post("/post", postNote);
app.put("/edit", editNote);
app.post("/generateAuthKey" , generateToken)


// Error Handler
app.use((err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.status(err.code).json({ msg: err.message });
  }
});

app.listen(8000, () => {
  console.log("Worked");
});