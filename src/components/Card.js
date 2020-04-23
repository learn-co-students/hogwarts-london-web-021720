import React, { Fragment } from "react";
import ExtraDetails from "./ExtraDetails";


class Card extends React.Component {
constructor(){
    super() 
    this.state = {
        buttonState: false
    }
}
 
getImage = (name) => {
  const finalName = name.split(" ").join("_").toLowerCase()
  const picture = require(`../hog-imgs/${finalName}.jpg`)
//   console.log(picture)
  return picture
}

handleclick = () => {
    this.setState({
        buttonState: !this.state.buttonState
    })
}

render() {
    return (
      <div className = "ui grid container" >
        <div className = "ui eight wide column ">
            <div className = "ui card">
            <div className = "image">
        <img src = {this.getImage(this.props.hog.name)}/> 
            </div>
            <div className = "content">
            <a className = "header">{this.props.hog.name}</a>
        <button onClick ={this.handleclick}> {this.state.buttonState? "Less Info": "More Info"} </button>
            </div>
            </div>
        </div>
        <div className = "ui eight wide column">
            {this.state.buttonState? <ExtraDetails hog ={this.props.hog}/>: null }
        </div>
      </div>
    );
  }
}

export default Card;
