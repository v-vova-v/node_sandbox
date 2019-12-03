const request = require('request');

class Api {
  constructor() {
    if (new.target === Api) {
      throw new Error('You cannot create an instance of Abstract Class');
    }
  }

  get(url, callback) {
    request.get(url, {json: true}, (error, response, body) => {
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
