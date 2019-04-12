import React, { Component } from 'react';
import { Link } from "react-router-dom"

export default class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: 0
  };
}


    render() {
      const { listings } = this.state
      const listingsDisplay = listings.map(list => {

        return (
          <div>
            <h3>Name</h3>
            <h3>Address</h3>
            <h3>City</h3>
            <h3>State</h3>
            <h3>Zipcode</h3>
            <button>Delete</button>
            </div>
          );
        });
        return <div className="dashboard">{listingsDisplay}</div>;
      }
}
