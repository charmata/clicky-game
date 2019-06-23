import React, { Component } from "react";
import Navbar from "./Navbar";
import Game from "./Game";

class Container extends Component {
  state = {
    images: []
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <Game />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
