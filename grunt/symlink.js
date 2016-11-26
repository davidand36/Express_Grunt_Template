/*
  symlink.js
  David M. Anderson

  Configuration for symlink Grunt task.
  See https://www.npmjs.com/package/grunt-contrib-symlink .
*/

var clientConf = require( '../config/client' );

module.exports = {
    favicon: {
        src: 'public/' + clientConf.favicon,
        dest: 'public/favicon.ico'
    }
};
