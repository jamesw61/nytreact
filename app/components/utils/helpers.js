var axios = require("axios");

//NYT auth
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var helper = {

  runQuery: function(searchTerm, numResults, startYear, endYear) {
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
    var queryURL = queryURLBase + searchTerm;
     if (parseInt(startYear)) {
         queryURL = queryURL + "&begin_date=" + startYear + "0101";
      }
     if (parseInt(endYear)) {
          queryURL = queryURL + "&end_date=" + endYear + "0101";
      }

    return axios.get(queryURL).then(function(response) {
      let results = [];
      // If get get a result, return that result's formatted address property
      for(let i = 0; i < numResults; i++){ 
      // console.log(response.data.response.docs[i].headline.main);
      results.push(response.data.response.docs[i])
    }
      return results;
      // if (response.data.results[0]) {
      //   return response.data.results[0].formatted;
      // }
      // If we don't get any results, return an empty string
      // return "";
    });
  },
  saveArticle: function (article){
      console.log('saveArticle', article.headline.main);
      axios.post('/api/saved', {title: article.headline.main, link: article.web_url, date: article.pub_date})
      .then(function(response){
        // console.log(response);
      }).catch(function (error) {
        // console.log(error);
      });
  },
  getSaved: function() {
      return axios.get('/api/saved');
      // .then(function(response){
      //   console.log('axios', response);

      // }).catch(function (error) {
      //   console.log('err', error);
      // });
  }, 
  deleteArticle: function(id) {
    axios.post("/api/saved/delete/", {"_id": id});
    // .then(function(response){
    //   console.log('helpers', id);
    //     console.log(response);
    //   }).catch(function (error) {
    //     console.log(error);
    //   });
  }

};

module.exports = helper;
