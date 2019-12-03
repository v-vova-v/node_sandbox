const request = require('request');

class Api {
  constructor(baseUrl, accessToken) {
    this.baseUrl = baseUrl;
    this.accessToken = accessToken;
  }

  get(url, callback) {
    request.get(`${this.baseUrl}/${encodeURIComponent(url)}.json?access_token=${this.accessToken}`,
        {json: true, headers: this.headers}, (error, response, body) => {
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
