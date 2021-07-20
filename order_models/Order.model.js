const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    default: 1,
    incrementBy: 1,
  },
  clientId: {
    type: String,
  },
  productName: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
 
 
});

orderSchema.plugin(AutoIncrement, { inc_field: "orderNumber" });
module.exports = mongoose.model("ORDER", orderSchema);
