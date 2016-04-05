var express = require('express');
var app = express();
var Altitudes = require('../controllers/altitudes.js');
var Users = require('../controllers/users.js');
var Initiatives = require('../controllers/inits.js');

module.exports = function(app) {

  app.get('/snapshot', function(req, res){
    Altitudes.snapshot(req, res)
  })

  app.post('/find', function(req, res){
    // console.log("search in routes: ",req.body);
  	Altitudes.show(req, res)
  })

  app.get('/users', function(req, res){
  	Users.find(req, res)
  })

  app.post('/users/new', function(req, res){
    Users.create(req, res)
  })

  app.get('/inits', function(req, res){
  	Initiatives.find(req, res)
  })

  app.post('/inits/:id', function(req, res){
      console.log('routes');
  	Users.addInit(req, res);
  })

  app.get('/inits/:id', function(req, res){
  	// console.log("id: ",req.params.id);
  	Users.showInits(req, res);
  })

}
