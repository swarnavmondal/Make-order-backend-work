const express = require("express");
var router = express();
const create = require("../products_controller/product");
const view = require("../products_controller/product");
const singleview = require("../products_controller/product");

router.post("/", create.create);
router.get("/", view.view);
router.get("/:id", singleview.singleview);


module.exports = router;
