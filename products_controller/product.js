const Product = require("../products_model/Product.model");
const mongoose = require("mongoose");

//Product create
function create(req, res, next) {
  let productName = req.body.productName;
  let productPrice = req.body.productPrice;

  let product = new Product({
    productName,
    productPrice,
  });
  product.save().then((data) => {
    res.send(data);
  });
}

//All Product view
function view(req, res, next) {
    Product.find({}).then((data) => {
    res.send(data);
  });
}

//Single Product View

function singleview(req, res, next) {
  Product.findOne({_id:req.params.id}).then((data) => {
  res.send(data);
});
}




module.exports.create = create;
module.exports.view = view;
module.exports.singleview = singleview;


