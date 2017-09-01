// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;
var helpers = require("../utils/helpers");

var SearchPanel = React.createClass({
   getInitialState: function() {
    return {
      searchTerm: "",
      numResults: 5,
      startYear: "",
      endYear: ""
    };
  },
  handleChange: function(event) {
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  handleSubmit: function(event) {
    event.preventDefault(); 
    
    let searchTerm = this.state.searchTerm;
    let numResults = this.state.numResults;
    let startYear = this.state.startYear;
    let endYear = this.state.endYear;

    console.log('searchTerm', searchTerm);
    console.log('numResults', numResults);
    console.log('start Year', startYear);
    console.log('end Year', endYear);

     helpers.runQuery(searchTerm, numResults, startYear, endYear).then(function(data) {
        for (let i = 0; i < numResults; i++) {
          console.log('xx', data[i].headline.main);
        }
     });
    // const repo = event.target.elements[1].value
    // const path = `/repos/${userName}/${repo}`
    // this.context.router.push(path)
    // console.log(path)
  },

  render: function() {
    return (
//         <div className="row">
//             <div className="col-sm-12">
        
//               <div className="panel panel-primary">
//           <div className="panel-heading">
//             <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
//           </div>
//           <div className="panel-body">

//             <form onSubmit={this.handleSubmit} role="form">

//               <div className="form-group">
//                 <label for="search">Search Term:</label>
//                 <input type="text" className="form-control" id="searchTerm" />
//               </div>

//               <div className="form-group">
//                 <label for="pwd">Number of Records to Retrieve:</label>
//                 <select className="form-control" id="num-records-select">
//               <option value="1">1</option>
//               <option value="5" selected>5</option>
//               <option value="10">10</option>
//             </select>
//               </div>

//               <div className="form-group">
//                 <label for="start-year">Start Year (Optional):</label>
//                 <input type="text" className="form-control" id="start-year" />
//               </div>

//               <div className="form-group">
//                 <label for="end-year">End Year (Optional):</label>
//                 <input type="text" className="form-control" id="end-year" />
//               </div>

//               <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
//               <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>   
//     );
//   }
// });
  <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Article Search</h3>
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Search Term</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input type="text"
                className="form-control text-center"
                id="searchTerm"
                value={this.state.searchTerm}
                onChange={this.handleChange}
                required />

              <strong htmlFor="numResults">Number of Articles</strong>
              <select className="form-control" id="numResults" value={this.state.numResults} onChange={this.handleChange}>
                <option value='1'>1</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
              </select>

              <h4 className="">
                <strong>Start Year (Optional)</strong>
              </h4>
              <input
                  type="text"
                  className="form-control text-center"
                  id="startYear"
                  value={this.state.startYear}
                  onChange={this.handleChange}  />
              <h4 className="">
                <strong>End Year (Optional)</strong>
              </h4>
              <input
                  type="text"
                  className="form-control text-center"
                  id="endYear"
                  value={this.state.endYear}
                  onChange={this.handleChange} />
              <br />

              <button type="submit" className="btn btn-primary" >
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = SearchPanel;

   // <div className="container">
   //      <div className="col-lg-12">
   //        <div className="panel panel-primary">
   //          <div className="panel-heading">
   //            <h3 className="panel-title">Search</h3>
   //          </div>
   //          <div className="panel-body">
   //            <p>I'm child 1!</p>
   //            <p>
   //              <Link to="/Child1/GrandChild1"><button className="btn btn-warning btn-sm">Show Grandchild #1</button></Link>
   //              <Link to="/Child1/GrandChild2"><button className="btn btn-success btn-sm">Show Grandchild #2</button></Link>
   //            </p>

   //            {/* This code will allow us to automatically dump the correct GrandChild component */}
   //            {this.props.children}
   //          </div>

   //        </div>
   //      </div>
   //    </div>