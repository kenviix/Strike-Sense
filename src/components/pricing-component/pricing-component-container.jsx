import React, { Component } from "react";
import PricingComponent from "./pricing-component";
import bgbottom from "../images/bg-bottom.svg";
import bgtop from "../images/bg-top.svg";

import "./pricing.css";

class PricingContainer extends Component {


  render() {
    return (
      <div className="pricing-container">
        <img src={bgtop} alt="" />
        <img src={bgbottom} alt="" />

        <div className="pricing-body">
          <h1>Punch Analysis </h1>
          <h3 className="text-xl font-semibold text-gray-700 " style={{ padding: 20 }}>
            <p>Date: {this.props.punch[0]}</p>
            <p>Time:  {this.props.punch[1]}</p>
          </h3>



          <label className="pricing-card-container" for="switch">
            <PricingComponent
              heading="Punch power (N)"
              value={this.props.punch[2]}
            />
            <PricingComponent
              heading="Punch Speed (km/h)"
              value={this.props.punch[3]}
            />
            <PricingComponent
              heading="Reflex time (ms)"
              value={this.props.punch[4]}
            />
            <PricingComponent
              heading="Blocked"
              value={this.props.punch[5]}
            />


          </label>
        </div>
      </div>
    );
  }
}

export default PricingContainer;
