import React, { Component } from "react";

export class App extends Component {
  state = {
    geolocation: {}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ geolocation: position.coords})
    })
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
