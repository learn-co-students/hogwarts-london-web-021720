import React, { Fragment } from "react";
import Card from "./Card"

class HogContainer extends React.Component {
  renderCards = () => {
   return  this.props.hogs.map(hog => <Card hog={hog}/> )
  }
  
  
  render() {
    return (
      <div >
       {this.renderCards()}
      </div>
    );
  }
}

export default HogContainer;
