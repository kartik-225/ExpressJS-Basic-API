const jwt = require("jsonwebtoken");
const ErrorHandler = require("../ErrorHandler");
require('dotenv').config();
const secret = process.env.SECRET_KEY;

module.exports = (req,res,next) => {
  const payload = req.body;

  if(!payload)
    return next(ErrorHandler.noPayloadFound());
  
  const token = jwt.sign(payload , secret , {expiresIn : '1h'});
  return res.status(200).json({token});
}