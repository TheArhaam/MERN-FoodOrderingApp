const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dishSchema = new Schema(
  {
    dishName: {
      type: String,
      required: true,
      unique: true,
    },
    cuisine: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
