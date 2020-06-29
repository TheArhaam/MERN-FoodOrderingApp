const router = require("express").Router();
let Dish = require("../../models/dish.models");
const { response } = require("express");
const auth = require("../../util/auth");

// GET ALL DISHES
router.get("/", (request, response) => {
  Dish.find()
    .then((dishes) => {
      return response.json(dishes);
    })
    .catch((err) => {
      return response.json(400).json("Error: " + err);
    });
});

// GET CUISINE DISHES
router.get("/:cuisine", (request, response) => {
  const cuisine = request.params.cuisine;
  Dish.find({ cuisine })
    .then((dishes) => {
      return response.json(dishes);
    })
    .catch((err) => {
      return response.json(400).json("Error: " + err);
    });
});

// POST NEW DISH
router.post("/new", (request, response) => {
  const dishName = request.body.dishName;
  const cuisine = request.body.cuisine;
  const description = request.body.description;
  const imageUrl = request.body.imageUrl;
  const price = request.body.price;
  const password = request.body.password;

  if(password!="Arhaam123") {
    return response.status(401).json("UNAUTHORIZED!");
  }

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
