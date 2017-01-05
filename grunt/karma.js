/*
    karma.js
    David M. Anderson

    Configuration for karma (client testing) Grunt task.
    See https://www.npmjs.com/package/grunt-karma
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
        reporters: [ 'progress', 'coverage' ],
        coverageReporter: {
            dir: '../coverage/client',
            reporters: [
                { type: 'html', subdir: 'report-html' },
                { type: 'lcovonly', subdir: '.', file: 'lcov.info' }
            ]
        }
    },
    headless: {
        browsers: [ 'PhantomJS' ]
    },
    browsers: {
        frameworks: [ 'detectBrowsers', 'mocha', 'chai' ]
    }
};
