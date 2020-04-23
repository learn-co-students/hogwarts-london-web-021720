import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Hog from "./Hog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Hog hogs={hogs} />
      </div>
    );
  }
}

export default App;
