const express = require("express");
var router = express();
const order = require("../order_controller/order");


router.post("/", order.create);
router.get("/", order.view);
router.get("/:clientId", order.singleview);


module.exports = router;
