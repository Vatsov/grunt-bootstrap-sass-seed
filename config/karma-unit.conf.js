// Karma configuration file
// Most of the options can be overriden by cli arguments (see karma --help)
//
// For all available config options and default values, see:
// https://github.com/vojtajina/karma/blob/stable/lib/config.js#L54

module.exports = function (config) {
  'use strict';

  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // list of the used frameworks
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      //Init the App
      {
        pattern: 'app/assets/scripts/app.js',
        watched: true,
        included: true,
        served: true
      },
	  //Unit tests
      {
        pattern: 'test/unit/*.js',
        watched: true,
        included: true,
        served: true
      }
    ],

    // list of files to exclude
    exclude: [
      '**/*karma*.conf.js'
    ],

    // use dots reporter, as travis terminal does not support escaping sequences
    // possible values: 'dots', 'progress', 'junit'
    // CLI --reporters progress
    reporters: ['progress', 'junit', 'coverage'],

    junitReporter: {
      outputFile: 'reports/unit/TEST-unit.xml',
      suite: 'unit'
    },

    // web server port
    // CLI --port 9876
    port: 7000,

    // cli runner port
    // CLI --runner-port 9100
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    // CLI --colors --no-colors
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    // CLI --log-level debug
    //logLevel = LOG_DEBUG;
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    // CLI --auto-watch --no-auto-watch
    autoWatch: true,

    // Start these browsers
    // CLI --browsers Chrome,Firefox,Safari
    //browsers = ['Firefox', 'Chrome', 'Opera', 'Safari', 'IE', 'PhantomJS'];
    browsers: [],

    customLaunchers: {
      ChromeMax: {
        base: 'Chrome',
        flags: ['--start-maximized']
      }
    },

    // If browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 15 * 1000,

    // Auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: false,

    // report which specs are slower than 500ms
    // CLI --report-slower-than 500
    reportSlowerThan: 3 * 1000,

    // compile coffee scripts and coverage reports
    preprocessors: {
      '**/scripts/app.js': ['coverage']
    },

    coverageReporter: {
      reporters: [
        {type: 'html', dir: 'reports/unit/coverage/'},
        {type: 'json', dir: 'reports/unit/coverage/'},
        {type: 'cobertura', dir: 'reports/unit/coverage/'}
      ]
    }
  });
};
