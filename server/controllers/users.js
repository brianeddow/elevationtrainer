var mongoose = require('mongoose');
var Users = mongoose.model('Users');
var Inits = mongoose.model('Initiative');

module.exports = {

  addInit: function(req, res) {
    console.log('user controller: ',req.body);
    Users.findOne({_id: req.params.id}, function(err, user){
        var init = new Inits(req.body);
        // console.log("new initiative: ",init);
        // console.log("user from mongo: ",user);
        //  set the reference like this:
        init._user = user._id;
        console.log("users controller: ",user);
        console.log("users controller init:",init);
        // console.log("init pre-push to user: ",init);
        user.initiatives.push(init);
        // console.log("user after push: ",user);
        // now save both to the DB
        init.save(function(err){
            user.save(function(err){
              if(err) {
                console.log("error: ",err);
              } else {
                res.json("hello");
              }
            });
        });
    });
  },

  showInits: function(req, res) {
    // console.log("id in controller: ",req.params.id);
    Users.findOne({_id: req.params.id})
      .populate('initiatives')
      .exec(function(err, user) {
        if(err){
          console.log("error: ",err);
        } else {
          console.log('user + inits in controller: ',user);
          res.json(user);
        }
      });
  },

  getUser: function(req,res){
      console.log('findUser: ',req.params.name)
      Users.findOne({name: req.params.name}, function(err,user){
          res.json(user);
      })
  },

  find: function(req, res) {
    Users.find({}, function(err, users) {
      // console.log("customers from backend controller:",orders);
      res.json(users);
    })
  },

  create: function(req, res) {
    Users.create(req.body, function(err, user) {
      if(err){
        console.log("something went wrong");
      } else {
        res.json(user);
      }
    })
  },

  remove: function(req, res) {
    // console.log("back end controller req.params.id:",req.params.id);
    Orders.remove({_id: req.params.id}, function(err, orders){
      res.json(orders);
    })
  }

}
