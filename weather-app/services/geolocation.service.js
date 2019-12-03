const Api = require('./api.service');

const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
const accessToken = 'pk.eyJ1IjoiaW1tb21hcCIsImEiOiJjaXBxdnp4eWMwMDcyaTluYmE0aG94YXliIn0.X4Eu_2KNLaNymVJ7SvlaTA';

class GeolocationService extends Api {
  getLocationData(locationName, callback) {
    const url = `${baseUrl}/${encodeURIComponent(locationName)}.json?access_token=${accessToken}`;
    this.get(url, callback);
  }
}

module.exports = new GeolocationService();
