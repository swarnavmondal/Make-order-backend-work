const ORDER = require("../order_models/Order.model");


//Order create
function create(req, res, next) {
  let order = new ORDER(req.body);
  order.save().then((data) => {
    res.send(data);
  });
}

//Order view
function view(req, res, next) {
  ORDER.find({}).then((data) => {
    res.send(data);
  });
}

// Single Order View
function singleview(req, res, next) {
  ORDER.findOne({clientId: req.params.clientId}).then((data) => {
  res.send(data);
  });
}


module.exports.create = create;
module.exports.view = view;
module.exports.singleview = singleview;

