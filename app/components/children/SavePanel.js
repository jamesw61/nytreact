// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var SavePanel = React.createClass({
  render: function() {
    return (
    <div className="row">
            <div className="col-sm-12">
               

                <div className="panel panel-primary">

                     <div className="panel-heading">
                        <h3 className="panel-title"><strong><i className="fa fa-table"></i>Saved</strong></h3>
                     </div>

                     <div className="panel-body" id="well-section">
                      {this.props.children}
                       </div>
                 </div>
          </div>
       </div>






    );
  }
});
module.exports = SavePanel;