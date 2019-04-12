import React, { Component } from 'react';
import './App.css';
import Header from "../src/components/header/Header"
import {HashRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import routes from "./routes"


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      <Header></Header>
      <Link to="/">Dashboard</Link>
      <Link to="/wizard">Add Property</Link>
      {routes}
      </div>
      </HashRouter>

    );
  }
}

export default App;
