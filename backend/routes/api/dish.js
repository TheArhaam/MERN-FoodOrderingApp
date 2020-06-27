const router = require("express").Router();
let Dish = require("../../models/dish.models");
const { response } = require("express");

router.route("/").get((request, response) => {
  return response.send("DISHES");
});

router.route("/new").post((request, response) => {
  const dishName = request.body.dishName;
  const cuisine = request.body.cuisine;
  const description = request.body.description;
  const imageUrl = request.body.imageUrl;
  const price = request.body.price;

  const newDish = new Dish({ dishName, cuisine, description, imageUrl, price });

  newDish
    .save()
    .then(() => {
      response.json("Dish successfully added!");
    })
    .catch((err) => {
      response.status(400).json("Error: " + err);
    });
});

module.exports = router;
