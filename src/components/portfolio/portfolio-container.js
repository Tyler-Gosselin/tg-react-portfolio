import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
  constructor() {
    super ();

    console.log("Portfolio container has been rendered")
  }
  
  portfolioItems() {
    const data = ["Vestas", "Cargill", "Army", "Handy Vets"];

    return data.map(item => {
      return <PortfolioItem />;
    })
  }

  // State
  // Lifecycle Methods
  render() {
    return (
      <div>
        <h2>Portfolio items go here</h2>

        {this.portfolioItems()}
      </div>
    )
  }
}