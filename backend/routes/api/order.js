const router = require("express").Router();
let Order = require("../../models/order.models");
let Dish = require("../../models/dish.models");
const { response } = require("express");
const auth = require("../../util/auth");

// GET ALL ORDERS
router.get("/", auth, (request, response) => {
  Order.find()
    .then((orders) => {
      return response.json(orders);
    })
    .catch((err) => {
      return response.status(400).json("Error: " + err);
    });
});

// GET USER ORDERS
router.get("/:userEmail", auth, (request, response) => {
    const userEmail = request.params.userEmail;
    Order.find({userEmail})
      .then((orders) => {
        // console.log(orders);
        return response.json(orders);
      })
      .catch((err) => {
        return response.status(400).json("Error: " + err);
      });
  });

// POST NEW ORDER
router.post("/new", auth, async (request, response) => {
  const dishNames = request.body.dishNames;
  var dishes = [];

  // forEach is NOT async
  // for..of IS async, it will wait
  for (const d of dishNames) {
    //   Getting dish details
    await Dish.findOne({ dishName: `${d}` })
      .then((dish) => {
        dishes.push(dish);
        console.log(dish.dishName);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }

  const totalCost = request.body.totalCost;
  const userEmail = request.body.userEmail;
  const date = Date.now();
  console.log(dishes);

  const newOrder = new Order({ dishes, totalCost, userEmail, date });

  newOrder
    .save()
    .then(() => {
      response.json("Order successfully placed!");
    })
    .catch((err) => {
      response.status(400).json("Error: " + err);
    });
});

module.exports = router;
