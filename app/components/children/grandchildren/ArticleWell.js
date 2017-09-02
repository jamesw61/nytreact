// Include React
var React = require("react");
var helpers = require("../../utils/helpers");

var ArticleWell = React.createClass({
  getInitialState: function() {
    return {
      article: {}
    };
  },
   handleSave: function(){
    console.log('button pressed');
    // let newState = {};
    console.log('handleSave', this.props.value.headline.main);
    // newState[event.target.id] = event.target.article;
    
    // console.log(article);
    // console.log(newState);
      helpers.saveArticle(this.props.value, function (data) {
        console.log(data);
      });
       
    
  },
  render: function() {
    return (
      <div>
          <h3 >{this.props.value.headline.main}</h3>
          <p>{this.props.value.pub_date}</p>
          <a>{this.props.value.web_url}</a><br></br>
          <button onClick={this.handleSave} bacon={this.props.value}>Save</button>
        
        
          
          
        
      </div>
    );
  }
});

module.exports = ArticleWell;
