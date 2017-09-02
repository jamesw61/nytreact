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

module.exports = router;