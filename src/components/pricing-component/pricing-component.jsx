import React, { Component } from "react";
import "./pricing.css";

class PricingComponent extends Component {


  render() {


    return (
      <div className="pricing-card">
        <p className="pricing-header">{this.props.heading}</p>
        <div className="price-container">
          <p className={"toggle-annually " + this.monthlyActiveClass}>
            {" "}
            {this.props.value}
          </p>

        </div>

      </div>
    );
  }
}

export default PricingComponent;
