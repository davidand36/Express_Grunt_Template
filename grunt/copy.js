/*
  copy.js
  David M. Anderson

  Configuration for copy Grunt task.
  See https://www.npmjs.com/package/grunt-contrib-copy .
*/

module.exports = {
    html: {
        cwd: 'client/',
        src: [ '**.html' ],
        dest: 'public/',
        expand: true,
        mode: true,
        timestamp: true
    },
    images: {
        cwd: 'client/',
        src: [ '*.png', 'images/**.png', '*.jpg', 'images/**.jpg' ],
        dest: 'public/',
        expand: true,
        mode: true,
        timestamp: true
    }
};
