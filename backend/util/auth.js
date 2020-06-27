const jwt = require("jsonwebtoken");
const { request } = require("express");

function auth(request, response, next) {
  const token = request.header("x-auth-token");

  if (!token) {
    response.status(401).json("No token available, authorization denied!");
  } else {
    try {
      //   Verify Token
      const decoded = jwt.verify(token, process.env.jwtSecret);
      // Adding user id from payload into request for next
      request.user = decoded;
      next();
    } catch (e) {
      response.status(400).json("Invalid Token");
    }
  }
}

module.exports = auth;
