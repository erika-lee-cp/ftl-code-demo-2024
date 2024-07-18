const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401); // No token provided

  const token = authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401); // No token in the authorization header

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user; // Attach user information to the request
    next(); // Proceed to the next middleware or route handler
  });
}

module.exports = verifyToken;