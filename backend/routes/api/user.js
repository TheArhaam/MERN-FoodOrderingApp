const router = require("express").Router();
let User = require("../../models/user.models");
const { response } = require("express");

router.route("/").get((request, response) => {
  return response.send("USERS");
});

router.route("/new").post((request, response) => {
  const email = request.body.email;
  const name = request.body.name;
  const phoneNumber = request.body.phoneNumber;
  const address = request.body.address;

  const newUser = new User({ email, name, phoneNumber, address });

  newUser
    .save()
    .then(() => {
      response.json("User successfully added!");
    })
    .catch((err) => {
      response.status(400).json("Error: " + err);
    });
});

module.exports = router;
