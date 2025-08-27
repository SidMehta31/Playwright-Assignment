const settings = require('./settings.json');

module.exports = {
  use: {
    headless: !settings.headed,
    baseURL: settings.baseURL,
    screenshot: 'only-on-failure'
  },
  workers: settings.executionMode === "parallel" ? undefined : 1
};
