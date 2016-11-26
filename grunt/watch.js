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
        tasks: [ 'htmlhint:client', 'copy:html', 'replace:html' ]
    },
    images: {
        files: [ 'client/**/*.png', 'client/**/*.svg', 'client/**/*.jpg', 'client/**/*.gif' ],
        tasks: [ 'copy:images' ]
    },
    css: {
        files: [ 'client/**/*.scss' ],
        tasks: [ 'sass-lint:client', 'compass:client', 'csslint:client' ]
    },
    js: {
        files: [ 'client/**/*.js' ],
        tasks: [ 'jshint:client', 'copy:js' ]
    },
    public: {
        files: [ 'public/**' ],
        options: {
            livereload: (process.env.NODE_ENV === 'development') ?
                ports.liveReload : false
        }
    }
};
