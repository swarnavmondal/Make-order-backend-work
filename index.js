const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();

require("./owner_helpers/init_mongodb");

const AuthRoute = require("./owner_Routes/Autho.route");
const ClientRoute = require("./client_Routes/Client.route");
const router = require("./products_Routes/Product.route");
const router3 = require("./order_Routes/Order.route");



const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  res.end("Welcome to my Site");
});

// Owner
app.use("/owner", AuthRoute);

// Client 
app.use("/client", ClientRoute);

//for item
app.use("/product", router);

//for Order 
app.use("/order", router3);



app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 8820;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
