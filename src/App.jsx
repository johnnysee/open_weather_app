import axios from "axios";
import React, { Component } from "react";
import { Container, Segment, Flag, Header } from "semantic-ui-react";
import LineChart from "./LineChart";

class App extends Component {
  state = {
    coords: null,
    weatherInfo: {},
  };

  async locationCall(latitude, longitude) {
    let apiKeyOc = process.env.REACT_APP_LOCATION_API_KEY;
    let locationResponse = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKeyOc}`
    );
    return locationResponse;
  }

  async weatherCall(latitude, longitude) {
    let apiKeyOw = process.env.REACT_APP_WEATHER_API_KEY;
    let weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKeyOw}`
    );
    return weatherResponse;
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        let { latitude, longitude } = position.coords;
        let locationResponse, weatherResponse;
        locationResponse = await this.locationCall(latitude, longitude);
        weatherResponse = await this.weatherCall(latitude, longitude);
        let weatherInfo = {
          city: locationResponse.data.results[0].components.postal_city
            ? locationResponse.data.results[0].components.postal_city
            : locationResponse.data.results[0].components.city,
          temp: weatherResponse.data.main.temp,
          country: weatherResponse.data.sys.country.toLowerCase(),
          countryName: locationResponse.data.results[0].components.country,
        };
        debugger
        this.setState({ weatherInfo: weatherInfo});
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  render() {
    // const { weatherInfo, dailyTemp } = this.state;
    // let labels = [];
    // let dataItems = [];
    // let data;
    // if (dailyTemp) {
    //   dailyTemp.forEach((day)) => {
    //     labels.push(new Date(day.dt * 1000).toLocaleDateString())
    //     dataItems.push(day.temp.day);
    //   });
    //   data = {
    //     labels: labels,
    //     datasets: [{ labels: "Daily Temp", data: dataItems}],
    //   };
    // } 
    return (
      <Container data-cy="weather-display">
        <Header size="huge">Weather App</Header>
        <Segment>
          <p data-cy="location">
            You are in city: {this.state.weatherInfo.city}
          </p>
          <p data-cy="temp">
            The temperature right now is: {this.state.weatherInfo.temp}°C
          </p>
          <p data-cy="country-name">
            You are in &nbsp;
            {this.state.weatherInfo.countryName}
            &nbsp;
            <Flag
              data-cy="weather-country"
              name={this.state.weatherInfo.country}
            />
          </p>
          <LineChart />
          {/* <Line data={data} options={options} /> */}
        </Segment>
      </Container>
    );
  }
}

export default App;
