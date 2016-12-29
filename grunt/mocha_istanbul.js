/*
    mocha_istanbul.js
    David M. Anderson

    Configuration for mocha-istanbul Grunt task
    See https://www.npmjs.com/package/grunt-mocha-istanbul
*/

module.exports = {
    options: {
        reporter: 'spec',
        coverageFolder: 'coverage/server',
        excludes: [ '**/*.spec.js', '**/*.test.js' ]
    },
    server: {
        src: [
            'server/**/*.spec.js',
            'server/**/*.test.js'
        ]
    }
};
