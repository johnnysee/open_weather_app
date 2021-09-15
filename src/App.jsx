import axios from "axios";
import React, { Component } from "react";
import { Container, Segment, Flag, Header } from "semantic-ui-react";

export class App extends Component {
  state = {
    location: {},
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        let { latitude, longitude } = position.coords;
        let apiKeyOc = process.env.REACT_APP_LOCATION_API_KEY;
        let apiKeyOw = process.env.REACT_APP_WEATHER_API_KEY;
        let locationResponse = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKeyOc}`
        );
        let weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKeyOw}`
        );
        let weatherInfo = {
          city: locationResponse.data.results[0].components.postal_city
            ? locationResponse.data.results[0].components.postal_city
            : locationResponse.data.results[0].components.city,
          temp: weatherResponse.data.main.temp,
          country: weatherResponse.data.sys.country.toLowerCase(),
        };
        this.setState({ location: weatherInfo });
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  render() {
    return (
      <Container data-cy="weather-display">
        <Header size="huge">Weather App</Header>
        <Segment>
          <p data-cy="location">You are in city: {this.state.location.city}</p>
          <p data-cy="temp">
            The temperature right now is: {this.state.location.temp}°C
          </p>
          <p>
            You are in country: &nbsp;
            <Flag
              data-cy="weather-country"
              name={this.state.location.country}
            />{" "}
          </p>
        </Segment>
      </Container>
    );
  }
}

export default App;
