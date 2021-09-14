import axios from "axios";
import React, { Component } from "react";

export class App extends Component {
  state = {
    geolocation: {},
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let { latitude, longitude } = position.coords;
      let apiKeyOc = "40200b4156ae4d36ba26a96d811d8560";
      let apiKeyOw = "ad34bf60b6f7739d2a7e1cd9cd4bb854";
      let locationResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKeyOc}`
      );
      let weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKeyOw}`
      );
      let weatherInfo = {
        city: locationResponse.data.results[0].components.postal_city,
        temp: weatherResponse.data.main.temp,
      };
      this.setState({ location: weatherInfo });
      debugger;
    });
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
