/*
  nodemon.js
  David M. Anderson

  Config for nodemon (Node monitor) Grunt task
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
