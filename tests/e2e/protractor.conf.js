// jshint strict: false
exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  // 'phantomjs.binary.path': require('phantomjs').path
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
