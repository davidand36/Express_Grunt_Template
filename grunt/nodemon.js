/*
  nodemon.js
  David M. Anderson

  Config for nodemon (Node monitor) Grunt task
  NOTES:
  1. See https://www.npmjs.com/package/grunt-nodemon
     and https://github.com/remy/nodemon .
*/

var ports = require( '../config/ports' );

var serverJsFiles = [ 'gruntfile.js', 'grunt/**/*.js',
                      'web.js', 'server/**/*.js', 'config/**/*.js' ];

module.exports = {
    dev: {
        script: 'web.js',
        options: {
            nodeArgs: '--debug=' + ports.debugger,
            watch: serverJsFiles
        }
    }
};
