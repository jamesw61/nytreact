var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var port = process.env.PORT || 3000;

mongoose.Promise = Promise;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));


// mongoose.connect("mongodb://heroku_ggtmz2k5:6hg8i2854cm45chmmf1s3aougt@ds121674.mlab.com:21674/heroku_ggtmz2k5");

mongoose.connect("mongodb://localhost/nytreact", {
  useMongoClient: true
});

const db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


const saved = require("./controllers/saved-controller.js");


app.use("/api/saved", saved);


app.listen(port, function() {
  console.log("App running on port " + port);
});
