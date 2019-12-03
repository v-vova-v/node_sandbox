const geolocationService = require('./services/geolocation.service');

geolocationService.getLocationData('Rivne', (error, response) => {
  if (response && response.features) {
    console.log(response.features[0].center);
    return response.features[0].center;
  }
});
