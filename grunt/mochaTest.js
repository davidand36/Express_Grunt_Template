/*
  mocha-test.js
  David M. Anderson

  Configuration for mocha-test (server testing) Grunt task
  See https://www.npmjs.com/package/grunt-mocha-test
*/

module.exports = {
    options: {
        reporter: 'spec'
    },
    unit: {
        src: [ 'server/tests/unit/**/*.spec.js' ]
    }
};
