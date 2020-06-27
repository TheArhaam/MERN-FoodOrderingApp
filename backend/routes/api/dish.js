const router = require("express").Router();
let Dish = require("../../models/dish.models");
const { response } = require("express");

// GET ALL DISHES
router.route("/").get((request, response) => {
  Dish.find()
    .then((dishes) => {
      return response.json(dishes);
    })
    .catch((err) => {
      return response.json(400).json("Error: " + err);
    });
});

// GET FAST FOOD DISHES

// GET NORTH INDIAN DISHES

// GET SOUTH INDIAN DISHES

// GET ITALIAN DISHES

// POST NEW DISH
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
