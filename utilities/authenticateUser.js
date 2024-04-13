const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

module.exports = (req,res,next) => {
  const auth = req.headers.auth;
  if(!auth)
    return res.status(401).json({message : "Auth Token Missing"});

  const token = auth.split(" ")[1];
  jwt.verify(token , secret , (err , decoded) => {
    if(err)
      return res.status(401).json({message : "Invalid Token"});
    req.user = decoded;
    next();
  })
}