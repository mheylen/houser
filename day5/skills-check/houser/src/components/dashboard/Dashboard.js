import React, { Component } from 'react';
import House from "../house/House"
import Axios from 'axios';
import {Link} from "react-router-dom"



export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state ={
      listings: []
    };
    this.getAllListings = this.getAllListings.bind(this);
    this.deleteListings = this.deleteListings.bind(this);
  }

  componentDidMount(){
    this.getAllListings();
  }
  getAllListings() {
    Axios
    .get("/api/listings").then(res=> {
      this.setState({
        listings: res.data
      });
    });
  }

  deleteListings(id){
    Axios.delete(`/api/listings/${id}`).then(res => {
      this.setState({
        listings: res.data
      });
    });
  }



    render() {
      const { listings } = this.state;
      const listingDisplay = listings.map(list => {
          return (
              <div>
                Dashboard
              <House></House>
              </div>
              );
            })
            return <div className="dashboard">{listingDisplay}</div>;
  }
}
