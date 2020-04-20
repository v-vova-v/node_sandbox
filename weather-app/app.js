const geolocationService = require('./services/geolocation.service');
const forecastService = require('./services/forecast.service');
const express = require('express');
const app = express();

let forecast;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type, authorization');
  next();
});

app.get('/forecast', (req, res) => {
  res.send(forecast);
});

geolocationService.getLocationData('New York', (error, response) => {
  if (response && response.features) {
    forecastService.getLocationWeather(response.features[0].center, (error, response) => {
      if (response) {
        forecast = response.currently;
      }
    });
  }
});

app.listen(3000, () => {
  console.log('Strating server on port 3000');
});
