const Api = require('./api.service');

class Geolocation {
  constructor() {
    this.api = new Api({
      'Authorization': `Bearer pk.eyJ1IjoiaW1tb21hcCIsImEiOiJjaXBxdnp4eWMwMDcyaTluYmE0aG94YXliIn0.X4Eu_2KNLaNymVJ7SvlaTA`,
    });
  }

  getLocationCoords(url, callback) {
    this.api.get(url, callback);
  }
}

const test = new Geolocation().getLocationCoords('Rivne', (error, response) => {
  if (response) {
    console.log(response);
  }
});
