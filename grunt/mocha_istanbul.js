/*
    mocha_istanbul.js
    David M. Anderson

    Configuration for mocha-istanbul Grunt task
    See https://www.npmjs.com/package/grunt-mocha-istanbul
*/

module.exports = {
    options: {
        reporter: 'spec'
    },
    'server': {
        src: [
            'server/tests/unit/**/*.spec.js',
            'server/tests/integration/**/*.spec.js'
        ]
    }
};
