/*
  copy.js
  David M. Anderson

  Configuration for copy Grunt task
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
