var express = require("express");
var router = express.Router();
var Article = require("../models/Article.js");


router.post("/", function(req, res) {
	console.log('x', req.body);
  var entry = new Article(req.body);

  entry.save(function(error, doc) {
    if (error) {
      console.log(error);
    }
    else {
      console.log(doc);
    }
  });
});

router.get("/", function(req, res) {
  // console.log('save route');
  Article.find({}).sort({"date": 1})
        .exec(function(error, doc) {
            if (error) {
                console.log(error);
            }
            else {
                res.json(doc);
            }
        });
});

router.post("/delete", function(req, res) {
        console.log('body', req.body._id);
        Article.remove({ "_id": req.body._id})
        .exec(function(err, doc) {
            if (err) {
                console.log(err);
            }
            else {
               // res.redirect("/"); 
            }
        });
});

module.exports = router;