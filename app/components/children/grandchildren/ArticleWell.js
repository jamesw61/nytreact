// Include React
var React = require("react");

var ArticleWell = React.createClass({
  render: function() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Article Title</h3>
        </div>
        <div className="panel-body">
          <a href="">Article Link</a>
          <p>August 31, 2017</p>
        </div>
      </div>
    );
  }
});

module.exports = ArticleWell;
