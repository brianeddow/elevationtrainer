var http = require('http');
var request = require('request');

module.exports = {

  show: function(req, res) {
     console.log("elevation: ",req.body.num);
     var url = 'http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?elevation='+req.body.num+'_&feature_class=L&api-key=ff62a97c93177379eacfb6d22d6f5738:6:74536061';
     // console.log("preformatted url: ",url);
     request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
          console.log("api response: ", body);
          res.json(body);
        } else {
          console.log(error);
        }
      });
  },

  snapshot: function(req, res) {
    //  console.log("elevation: ",req.body.num);
     var url = 'http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?elevation=8000_&feature_class=L&country_code=US&api-key=ff62a97c93177379eacfb6d22d6f5738:6:74536061';
     // console.log("preformatted url: ",url);
     request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
          console.log(body);
          res.json(body);
        } else {
          console.log(error);
        }
      });
  },

  remove: function(req, res) {
    // console.log("back end controller req.params.id:",req.params.id);
    Customers.remove({_id: req.params.id}, function(err, customers){
      res.json(customers);
    })
  }

}
