var React = require("react");
var Link = require("react-router").Link;
var helpers = require("../utils/helpers");
var ResultsPanel = require("./ResultsPanel");
var SavePanel = require("./SavePanel");

var SearchPanel = React.createClass({
   getInitialState: function() {
    return {
      searchTerm: "",
      numResults: 1,
      startYear: "",
      endYear: "",
      results: [],
      savedResultsFromMongo: []
    };
  },

  componentDidMount: function() {
    helpers.getSaved().then(function(response) {
      let savedArray = [];

      for(let i=0; i< response.data.length; i++){
        let transformedSaveData = {
          "headline": {
            "main": response.data[i].title
          },
          "pub_date": response.data[i].date,
          "web_url": response.data[i].link
        };
        savedArray.push(transformedSaveData);

      }
    this.setState({savedResultsFromMongo: savedArray});
  
    }.bind(this));


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
        
        this.setState({results: data});
     }.bind(this));

  },
  

  render: function() {
    return (
      <div>
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
      <ResultsPanel results={this.state.results} />
      <SavePanel saved={this.state.savedResultsFromMongo} />

      </div>
    );
  }
});

module.exports = SearchPanel;

