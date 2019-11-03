import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage";
import SearchPage from "./components/SearchPage";
import Results from "./components/Results";
import Error from "./components/Error";


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      jsonData: null,
      minDate: null,
      maxDate: null,
    }
}

  fetchResults = (value, category, minDate, maxDate, offset) => {

    this.setState({
      minDate: minDate,
      maxDate: maxDate
    });

    // building the URL to visit through the API
    //
    let buildStr = "https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues"

    buildStr += "?value="
    if (value !== null && value !== "") {
      buildStr += value;
    }
    buildStr += "&category="
    if (category !== null && category !== "") {
      buildStr += category;
    }
    // api min & max date doesn't seem to work so I will manually check each fetched response
    //         didn't have time to finish manually checking
    // buildStr += "&min_date="
    // if (minDate !== null && minDate !== "") {
    //   buildStr += category;
    // }
    // buildStr += "&max_date="
    // if (maxDate !== null && maxDate !== "") {
    //   buildStr += maxDate;
    // }


    buildStr += "&offset="
    if (offset !== null && offset !== "") {
      buildStr += offset;
    }

  

    const fetch = require('node-fetch');
    // go to API and grab filtered JSON
    fetch(buildStr)
      .then(res => res.json())
      .then(d => {
        this.setState({
          jsonData: d
        })
      })
      .catch(() => {
        console.log("error");
      });
      

  }


  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <Switch>
            <Route path="/" exact strict component={Homepage}/>
            <Route path="/SearchPage" exact render={(props) => (
              <React.Fragment>
                <SearchPage fetchResults={this.fetchResults}/>
                <Results results={this.state.jsonData} minDate={this.state.minDate} maxDate={this.state.maxDate}/>
                </React.Fragment>
            )} />
            <Route component={Error} />
          </Switch>
          </React.Fragment>
      </HashRouter>


    )
  }







}


