const mongoose = require("mongoose");
import { Dish } from "./dish.models";
import { User } from "./user.models";

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    dishes: [Dish],
    totalCost: {
      type: Number,
      required: true,
    },
    user: User,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order',userSchema);
module.exports = Order;