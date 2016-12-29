/*
  mocha-test.js
  David M. Anderson

  Configuration for mocha-test (server testing) Grunt task
  See https://www.npmjs.com/package/grunt-mocha-test
  and http://mochajs.org/
*/

module.exports = {
    options: {
        reporter: 'spec'
    },
    server: {
        src: [
            'server/**/*.spec.js',
            'server/**/*.test.js'
        ]
    }
};
