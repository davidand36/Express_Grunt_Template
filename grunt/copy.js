/*
  copy.js
  David M. Anderson

  Configuration for copy Grunt task.
  See https://www.npmjs.com/package/grunt-contrib-copy .
*/

module.exports = {
    html: {
        cwd: 'client/',
        src: [ '**/*.html' ],
        dest: 'public/',
        expand: true,
        mode: true,
        timestamp: true
    },
    images: {
        cwd: 'client/',
        src: [ '**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif' ],
        dest: 'public/',
        expand: true,
        mode: true,
        timestamp: true
    },
    js: {
        cwd: 'client/',
        src: [ '**/*.js' ],
        dest: 'public/',
        expand: true,
        mode: true,
        timestamp: true
    }
};
