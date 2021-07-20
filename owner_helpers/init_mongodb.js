const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGOBD_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userFindAndModify: false,
  
  })
  .then(() => {
    console.log("mongodb connected.");
  })
  .catch((err) => console.log(err.message));

mongoose.connection.on("connected", () => {
  console.log("mongoose connected to db");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoose connection is disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0)
});
