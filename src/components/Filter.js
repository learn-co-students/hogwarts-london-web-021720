import React, { Component } from "react";

class Filter extends Component {
   


    render() {
      return (
        <div  >
         <div>
            <label>Greased Pigs Only </label>
            <input type ="checkbox" onChange = {this.props.handleToggle} checked = {this.props.greased}></input>
         </div>
         <div>
            <label>Hide Pigs </label>
            <input type ="checkbox" onChange = {this.props.handleHide} checked = {this.props.hide}></input>
         </div>
         <div>
            <label>Sort by</label>
            <select name = "sort" onChange = {this.props.handleSelect}>
                <option value = "name">Name</option>
                <option value ="weight">Weight</option>
            </select>
        </div>
        </div>
      );
    }
  }
  
  export default Filter;
  