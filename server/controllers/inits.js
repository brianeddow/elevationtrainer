var mongoose = require('mongoose');
var Initiatives = mongoose.model('Initiative');

module.exports = {

  show_one: function(req, res) {
    Products.find({name: req.params.name}, function(err,  product) {
      res.json({product: product});
    })
  },

  find: function(req, res) {
    Initiatives.find({}, function(err, inits) {
      // console.log("customers from backend controller:",customers);
      res.json(inits);
    })
  },

  create: function(req, res) {
    Initiatives.create(req.body, function(err, init) {
      if(err){
        console.log("something went wrong");
      } else {
        res.json(init);
      }
    })
  },

  remove: function(req, res) {
    // console.log("back end controller req.params.id:",req.params.id);
    Products.remove({_id: req.params.id}, function(err, products){
      res.json(products);
    })
  },

  // decrement: function(req, res) {
  //   Products.update({_id: req.params.id},{$inc: {quanity: -req.params.quantity}}, function(err, product){
      
  //   })
  // }
  
}