/*
    karma.js
    David M. Anderson

    Configuration for karma (client testing) Grunt task.
    See https://www.npmjs.com/package/grunt-karma
    and https://www.npmjs.com/package/karma .
    Using several plug-ins,
    including https://www.npmjs.com/package/karma-detect-browsers
    and https://www.npmjs.com/package/karma-coverage
*/

var ports = require( '../config/ports' );

module.exports = {
    options: {
        configFile: 'config/karma.conf.js',
        port: ports.karma,
        frameworks: [ 'mocha', 'chai' ],
        singleRun: true,
        preprocessors: {
            'public/!(lib)/!(*test|*spec).js': [ 'coverage' ]
        },
        reporters: [ 'mocha', 'coverage' ],
        coverageReporter: {
            dir: '../coverage/client',
            reporters: [
                { type: 'html', subdir: 'report-html' },
                { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
                { type: 'text-summary' }
            ]
        }
    },
    headless: {
        browsers: [ 'PhantomJS' ]
    },
    browsers: {
        frameworks: [ 'detectBrowsers', 'mocha', 'chai' ]
    },
    watched: {
        browsers: [ 'PhantomJS' ],
        background: true,
        singleRun: false
    }
};
