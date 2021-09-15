# Weather App - Week 3 Challenge

Team: Max Anderson and Johnny See

## The Code

This is a Weather App that reads in the location data of the user, calls two APIs and returns a webpage with user's location, the current temperature in Celius and country's flag.

### User Stories

```
As a user
In order to be able to plan my day
I want to see the temperature at my current location
```

## Dependencies

React App, Cypress and start-server-and-test for testing, Axios for API calls, Semantic-UI for styling.

## Setup

1. Clone the Git Repo URL.

2. Install dependencies using yarn.

3. Get your personal API-keys from OpenCageData and OpenWeatherMap and put in a .env file in the root folder like this:

```REACT_APP_WEATHER_API_KEY = API-key REACT_APP_LOCATION_API_KEY = API-key```

## Instructions

1. Run `yarn cypress` in terminal to check tests

2. Run `yarn start` in terminal to test manually

3. Allow geolocation for happy path or reject geolocation for sad path.a

4. Check results on the browser.

## Acknowledgements

We did some research and used the following tutorial below to avoid storing our personal API-keys on Github.

[Hiding Secret API-keys in React by Desmond Nyamador](https://www.pluralsight.com/guides/hiding-secret-keys-in-create-react-app)

## Updates / Improvements

Refactor code from stateful classes to stateless functional components to use React Hooks.a

Test React Components using Jest.

Adding more styling with Semantic-UI

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
