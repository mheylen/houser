import React, { Component } from 'react';
import axios from 'axios';


export default class Wizard extends Component {
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

addListings = () => {
const {name, address, city, state, zipcode} = this.state;
const payload = {
  name,
  address, 
  city,
  state, 
  zipcode
};
axios.post("/api/listings", payload).then(() => {
  this.clearForm();
  this.props.history.push("/")
})
}


    render() {
      const {name, address, city, state, zipcode } = this.state;
          return (
              <div>Add New Listing
              <button onClick ={() => { this.props.history.push("/")}}>Cancel</button>
              <label>Name:</label>
              <input
              value={name}
              onChange={event => this.setState({ name: event.target.value })}
              />
              <label>Address</label>
              <input
              value={address}
              onChange={event => this.setState({address: event.target.value})}
              />
              <label> City </label>
              <input
              value={city}
              onChange={event => this.setState({city: event.target.value})}
              />
              <label>State</label>
              <input
              value={state}
              onChange={event => this.setState({state: event.target.value})}
              />
              <label>Zip Code</label>
              <input
              value={zipcode}
              onChange={event=> this.setState({zipcode: (event.target.value)})}/>
            
            
            </div>
          );
        }
}