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
    unit: {
        src: [ 'server/tests/unit/**/*.spec.js' ]
    },
    integration: {
        src: [ 'server/tests/integration/**/*.spec.js' ]
    }
};
