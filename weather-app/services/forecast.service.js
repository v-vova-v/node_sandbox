const Api = require('./api.service');

const secretKey = '5427514ea1506e5e4d59ceaf9113a6f6';
const baseUrl = `https://api.darksky.net/forecast/${secretKey}`;

class ForecastService extends Api {
  getLocationWeather(locationPosition, callback) {
    const url = `${baseUrl}/${locationPosition[1]},${locationPosition[0]}?units=ca`;
    this.get(url, callback);
  }
}

module.exports = new ForecastService();
