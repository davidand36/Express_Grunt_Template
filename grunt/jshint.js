/*
  jshint.rc
  David M. Anderson

  Config for jshint Grunt task
  See https://www.npmjs.com/package/grunt-contrib-jshint
  and http://jshint.com/docs/ .
*/

module.exports = {
    system: [ 'gruntfile.js', 'grunt/**/*.js', 'config/**/*.js' ],
    server: [ 'web.js', 'server/**/*.js', 'config/**/*.js' ],
    client: [ 'client/**/*.js' ]
};
