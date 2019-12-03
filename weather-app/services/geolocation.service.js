const Api = require('./api.service');
const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
const accessToken = 'pk.eyJ1IjoiaW1tb21hcCIsImEiOiJjaXBxdnp4eWMwMDcyaTluYmE0aG94YXliIn0.X4Eu_2KNLaNymVJ7SvlaTA';
const api = new Api(baseUrl, accessToken);

class GeolocationService {
  getLocationData(locationName, callback) {
    api.get(locationName, callback);
  }
}

module.exports = new GeolocationService();
