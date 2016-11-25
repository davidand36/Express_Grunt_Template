/*
  filerev.js
  David M. Anderson

  Configuration for filerev Grunt task
  See https://www.npmjs.com/package/grunt-filerev
*/

module.exports = {
    css: {
        src: '.tmp/css/*.min.css',
        dest: 'public/css/'
    },
    js: {
        src: '.tmp/js/*.min.js',
        dest: 'public/js/'
    }
};
