import React, { Component } from "react";

class ExtraDetails extends Component {
   
    render() {
      return (
        <div>
          <h1>Greased: {this.props.hog.greased? "Yes":"No"}</h1>
          <h1>Medal Achieved: {this.props.hog["highest medal achieved"]} </h1>
          <h1>Weight: {this.props.hog.weight}</h1>
        </div>
      );
    }
  }
  
  export default ExtraDetails;
  