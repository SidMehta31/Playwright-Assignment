const settings = require('./setting.json');

module.exports = {
  timeout: 60 * 1000,
  use: {
    headless: !settings.headed,
    baseURL: settings.baseURL,
    navigationTimeout: 60 * 1000,
    screenshot: 'only-on-failure'
  },
  workers: settings.executionMode === "parallel" ? undefined : 1
};


