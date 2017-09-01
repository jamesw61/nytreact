// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
         <div className="jumbotron" styles="background-color: #20315A ; color: white;">
              <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
        </div>

        <div className="jumbotron">
         
          
          <p>
            <Link to="/search"><button className="btn btn-primary btn-lg">Search</button></Link>
            <Link to="/results"><button className="btn btn-danger btn-lg">Results</button></Link>
            <Link to="/saved"><button className="btn btn-danger btn-lg">Saved Articles</button></Link>

          </p>
        </div>

        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
