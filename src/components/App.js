import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter"

class App extends Component {
  constructor(){
    super()
    this.state = {
      greased: false,
      sortBy: "",
      hide: false 
    }
  }


handleToggle = () => {
  this.setState({
    greased: !this.state.greased
  })
}

handleHide = () => {
  this.setState({
    hide: !this.state.hide
  })
}

handleSelect = (event) => {
  this.setState({
    sortBy: event.target.value
  })
}

sortHogs = () => {
  if (this.state.sortBy === "name") {
    return hogs.sort((a,b) => {return a.name.localeCompare(b.name)} )
  }
  else if (this.state.sortBy === "weight"){
    console.log("hey")
    return hogs.sort((a,b) => {return a.weight - b.weight})
  }
  else {
    return hogs
  }
  
}

filterHogs = () => {
  const hoggies = this.sortHogs()
  console.log(hoggies)
 return this.state.greased? hoggies.filter(hog => hog.greased ):hoggies
}

  render() {
    return (
      <div className="App ">
        <Nav  />
        <Filter handleToggle = {this.handleToggle} greased = {this.state.greased} handleSelect = {this.handleSelect} handleHide ={this.handleHide} hide = {this.state.hide}/>
        <div >
         {!this.state.hide? <HogContainer hogs= {this.filterHogs()}/>:null } 
        </div>
      </div>
    );
  }
}

export default App;
