import React, { Component } from "react";
import pi from "./pi.png";

const counter = {
  fontSize: "82px",
  backgroundColor: "black",
  borderRadius: "20px",
};
const button = {
  fontSize: "28px",
  pading: "10px",
  backgroundColor: "white",
  borderRadius: "10px",
};

class Pizza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  takeorder() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  cancelorder() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div>
        <img src={pi} width="150" alt="Logo" />
        <h1>Pizza Order Counter</h1>
        <h1 style={counter}>{this.state.count}</h1>
        <button style={button} onClick={() => this.takeorder()}>
          Take Order
        </button>
        <br />
        <br />
        <button style={button} onClick={() => this.cancelorder()}>
          Cancel Order
        </button>
      </div>
    );
  }
}

export default Pizza;
