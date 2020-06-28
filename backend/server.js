const express = require("express");
const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// MONGODB ATLAS CONNECTION
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully!");
});

// ROUTES
const userRouter = require("./routes/api/user");
const dishRouter = require("./routes/api/dish");
const orderRouter = require("./routes/api/order");
app.use('/user', userRouter);
app.use('/dish', dishRouter);
app.use('/order', orderRouter);


app.listen(port, () => {
  console.log("Server is running on port:" + port);
});
