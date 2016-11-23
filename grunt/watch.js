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
                 'client/*.svg', 'client/images/**/*.svg',
                 'client/*.jpg', 'client/images/**/*.jpg',
                 'client/*.gif', 'client/images/**/*.gif' ],
        tasks: [ 'copy:images' ]
    },
    css: {
        files: [ 'client/scss/**/*.scss' ],
        tasks: [ 'sass-lint:client', 'compass:client', 'csslint:client' ]
    },
    public: {
        files: [ 'public/**' ],
        options: {
            livereload: (process.env.NODE_ENV === 'development') ?
                ports.liveReload : false
        }
    }
};
