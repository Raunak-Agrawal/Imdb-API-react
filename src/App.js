import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import Card from "./components/Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
var page = 1;
class App extends Component {
  state = {
    searchedArray: [],
    searched: false,
    page: 1,
    queryparam: ""
  };

  performSearch = (query, pageNo) => {
    fetch(`http://www.omdbapi.com/?apikey=22b0de&page=${pageNo}&s=${query}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          searchedArray: responseData.Search,
          queryparam: query
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  previousPage = () => {
    page--;
    this.performSearch(this.state.queryparam, page);
  };
  nextPage = () => {
    page++;
    this.performSearch(this.state.queryparam, page);
  };
  render() {
    console.log(this.state.searchedArray.length);
    const { searchedArray, queryparam } = this.state;
    return (
      <Router>
        <React.Fragment>
          <Route
            exact
            path="/"
            render={props => (
              <SearchForm onSearch={this.performSearch} {...props} />
            )}
          />

          <Route
            exact
            path="/showDetail"
            render={props => (
              <Card
                searchedArray={searchedArray}
                previousPage={this.previousPage}
                nextPage={this.nextPage}
                queryparam={queryparam}
                page={page}
                {...props}
              />
            )}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
