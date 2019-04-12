import React, { Component } from 'react';
import './App.css';
import Header from "../src/components/header/Header"
import {HashRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      <Header></Header>
      <Link to="/">Dashboard</Link>
      <Link to="/wizard">Add New Property</Link>
      </div>
      </HashRouter>
    );
  }
}

export default App;
