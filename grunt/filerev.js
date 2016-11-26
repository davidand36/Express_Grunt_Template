/*
  filerev.js
  David M. Anderson

  Configuration for filerev Grunt task
  See https://www.npmjs.com/package/grunt-filerev
*/

module.exports = {
    css: {
        cwd: '.tmp',
        src: '**/*.min.css',
        dest: 'public',
        expand: true
    },
    js: {
        cwd: '.tmp',
        src: '**/*.min.js',
        dest: 'public',
        expand: true
    }
};
