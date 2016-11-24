/*
  filerev.js
  David M. Anderson

  Configuration for filerev Grunt task
  See https://www.npmjs.com/package/grunt-filerev
*/

module.exports = {
    css: {
        src: 'public/css/*.min.css',
        dest: 'public/css/'
    },
    js: {
        src: 'public/js/*.min.js',
        dest: 'public/js/'
    }
};
