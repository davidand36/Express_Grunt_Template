/*
  nodemon.js
  David M. Anderson

  Config for nodemon (Node monitor) Grunt task
*/

var serverJsFiles = [ 'gruntfile.js', 'grunt/**/*.js',
                      'web.js', 'server/**/*.js', 'config/**/*.js' ];

module.exports = {
    dev: {
        script: 'web.js',
        options: {
            nodeArgs: '--debug=16203',
            watch: serverJsFiles
        }
    }
};
