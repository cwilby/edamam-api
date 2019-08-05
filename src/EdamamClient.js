const http = require('axios');
const deepmerge = require('deepmerge');

module.exports = class EdamamClient {
  constructor({ appKey, appId }) {
    this.appKey = appKey;
    this.appId = appId;
    this.basePath = 'http://api.edamam.com/';
    this.apiUrl = 'http://api.edamam.com/api/';
  }

  async makeRequest(method, url, data = null, config = {}) {
    const mergedConfig = deepmerge({
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        app_id: this.appId,
        app_key: this.appKey
      }
    }, config);

    const response = await http[method](
      url.includes('*')
        ? `${this.basePath}${url.replace('*', '')}`
        : `${this.apiUrl}${url}`
      ,
      ['post', 'put'].includes(method.toLowerCase())
        ? JSON.stringify(data)
        : mergedConfig,
      ['post', 'put'].includes(method.toLowerCase()) && mergedConfig
    );

    return this.unpackResponse(response);
  }

  async get(url, config = {}) {
    return this.makeRequest('get', url, null, config);
  }

  async post(url, data = null, config = {}) {
    return this.makeRequest('post', url, data, config);
  }

  async put(url, data = null, config = {}) {
    return this.makeRequest('put', url, data, config);
  }

  async delete(url, config = {}) {
    return this.makeRequest('delete', url, null, config);
  }

  async unpackResponse(response) {
    switch (response.status) {
      case 200:
        return response.data;
      default:
        throw new Error(`${response.status} response from server: ${response.data}`);
    }
  }
};
