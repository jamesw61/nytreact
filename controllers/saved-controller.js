var express = require("express");
var router = express.Router();
var Article = require("../models/Article.js");


router.post("/", function(req, res) {
	console.log(req.body);
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
  Article.find({}).sort({"_id": 1}).limit(20)
        .exec(function(error, doc) {
            if (error) {
                console.log(error);
            }
            else {
                // res.render("index", { bacon: doc });
            }
        });
});

module.exports = router;