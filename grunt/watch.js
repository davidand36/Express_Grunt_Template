/*
  watch.js
  David M. Anderson

  Configuration for watch Grunt task
  See https://www.npmjs.com/package/grunt-contrib-watch .
*/

var ports = require( '../config/ports' );

module.exports = {
    grunt: {
        files: [ 'gruntfile.js', 'grunt/*.js', 'config/**/*.js' ],
        options: {
            reload: true
        }
    },
    html: {
        files: [ 'client/**/*.html' ],
        tasks: [ 'htmlhint:client', 'copy:html' ]
    },
    images: {
        files: [ 'client/*.png', 'client/images/**/*.png',
                 'client/*.jpg', 'client/images/**/*.jpg' ],
        tasks: [ 'copy:images' ]
    },
    css: {
        files: [ 'client/scss/**/*.scss' ],
        tasks: [ 'scsslint:client', 'compass:client' ]
    },
    public: {
        files: [ 'public/**' ],
        options: {
            livereload: ports.liveReload
        }
    }
};
