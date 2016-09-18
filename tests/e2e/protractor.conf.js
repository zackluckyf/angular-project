// jshint strict: false
exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '*.spec.js'
    ],

    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path
    },

    baseUrl: 'http://localhost:8880/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
