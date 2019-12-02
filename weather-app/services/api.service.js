const request = require('request');

class Api {
  constructor(headers) {
    this.headers = headers;
    this.baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
  }

  get(url, callback) {
    request.get(`${this.baseUrl}/${encodeURIComponent(url)}.json?access_token=pk.eyJ1IjoiaW1tb21hcCIsImEiOiJjaXBxdnp4eWMwMDcyaTluYmE0aG94YXliIn0.X4Eu_2KNLaNymVJ7SvlaTA`, {json: true, headers: this.headers}, (error, response, body) => {
      if (error) {
        return callback(error, null);
      }

      if (response) {
        debugger;
        return callback(null, body);
      }
    });
  }
}

module.exports = Api;
