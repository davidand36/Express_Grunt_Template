/*
  cssmin.js
  David M. Anderson

  Configuration of cssmin Grunt task
  See https://www.npmjs.com/package/grunt-contrib-cssmin
*/

module.exports = {
    public: {
        options: {
            sourceMap: true
        },
        files: [ {
            cwd: 'public/css',
            src: [ '*.css', '!*.min.css' ],
            dest: '.tmp/css',
            ext: '.min.css',
            expand: true
        } ]
    }
};
