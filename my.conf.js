// Karma configuration
// Generated on Mon May 04 2015 22:15:32 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/lib/angular/angular.js',
      'app/lib/angular-route/angular-route.js',
      'app/lib/angular-mocks/angular-mocks.js',
      'app/lib/angular-youtube-mb/dist/angular-youtube-embed.min.js',
      'app/lib/angular-animate/angular-animate.min.js',
      'app/app.js',
      'app/app.spec.js',
      'app/components/feed/feed.js',
      'app/components/feed/FeedController.js',
      'app/components/**/*.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    preprocessors: {
        'app/components/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
        // strip this from the file path
        stripPrefix: 'app/',
        moduleName: 'app'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    plugins : [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ng-html2js-preprocessor'
            ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
