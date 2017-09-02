// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var ResultsPanel = require("../components/children/ResultsPanel");
var SavePanel = require("../components/children/SavePanel");
var SearchPanel = require("../components/children/SearchPanel");
var ArticleWell = require("../components/children/grandchildren/ArticleWell");
// var GrandChild2 = require("../components/children/grandchildren/GrandChild2");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

          <Route path="/search" component={SearchPanel} >

                  

          </Route>
          <IndexRoute component={SearchPanel} />
         
          <Route path="/saved" component={SavePanel} >            
          </Route>
      

    </Route>
  </Router>
);
