var express = require("express");
var router = express.Router();
var Article = require("../models/Article.js");
var request = require("request");
var cheerio = require("cheerio");


// function foo(address, fn){
//   geocoder.geocode( { 'address': address}, function(results, status) {
//      fn(results[0].geometry.location); 
//   });
// }

// foo("address", function(location){
//   alert(location); // this is where you get the return value
// });








//the Scrape button points here
router.get("/", function(req, res) {
    var count = 0;
      
     
        request("http://www.comingsoon.net/tv", function(error, response, html) {
                        var $ = cheerio.load(html);
                        var length = $(".listed-article-container").length;
                        console.log('length', length);


                    var x = function(fn) {  
                        $(".listed-article-container").each(function(i, element) {
                            // console.log(i);           

                                        var result = {};
                                        result.title = $(this).children(".listed-article-content").children("header").children(".listed-article-title").text();
                                        result.link = $(this).children(".listed-article-content").children("header").children(".listed-article-title").attr("href");
                                        result.image = $(this).children(".listed-article-media").children("a").children("img").attr("src");

                                        var entry = new Article(result);
                                        entry.save(function(err, doc) {
                                            if (err) {
                                              // checkCount(i,length,count);
                                              fn();
                                                // console.log(err);
                                            } else {
                                                // console.log(doc);
                                                count++;
                                              // checkCount(i,length,count);
                                              fn();
                                                
                                            }

                                        });

                        });
                        
                    }
                x(checkCount(i,length,count));
                    
                       

        });
        



     
// res.redirect("/"); 

});

checkCount = (i, length, count) => {
              if(i === (length-1)){
                console.log('count', count);
                return count;
                
              }
}



module.exports = router;