const geolocationService = require('./services/geolocation.service');
const forecastService = require('./services/forecast.service');

geolocationService.getLocationData('Rivne', (error, response) => {
  if (response && response.features) {
    forecastService.getLocationWeather(response.features[0].center, (error, response) => {
      if (response) {
        console.log(response.hourly);
      }
    });
  }
});
