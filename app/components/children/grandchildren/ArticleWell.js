// Include React
var React = require("react");
var helpers = require("../../utils/helpers");

var ArticleWell = React.createClass({

   handleSave: function(){
    console.log('button pressed');
    console.log('handleSave', this.props.value.headline.main);
      helpers.saveArticle(this.props.value, function (data) {
        console.log(data);
      });
       
    
  },
  handleDelete: function(){
      helpers.deleteArticle(this.props.value._id);
  },
  render: function() {
    return (
      <div className="well">
          <h3 >{this.props.value.headline.main}</h3>
          <p>{this.props.value.pub_date}</p>
          <a>{this.props.value.web_url}</a><br></br>
          <button onClick={this.handleSave}>Save</button>
          <button onClick={this.handleDelete}>Delete</button>
                        
                          


        
      </div>
    );
  }
});

module.exports = ArticleWell;
