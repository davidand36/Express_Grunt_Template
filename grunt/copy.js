/*
  copy.js
  David M. Anderson

  Configuration for copy Grunt task.
  See https://www.npmjs.com/package/grunt-contrib-copy .
*/

module.exports = {
    client: {
        cwd: 'client/',
        src: [ '**.html',
               '**.png', '**.jpg' ],
        dest: 'public/',
        expand: true,
        mode: true,
        timestamp: true
    }
};
