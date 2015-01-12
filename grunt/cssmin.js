/*
  cssmin.js
  David M. Anderson

  Configuration of cssmin Grunt task
  See https://github.com/gruntjs/grunt-contrib-cssmin
  and https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-programmatically .
*/

module.exports = {
    public: {
        files: [ {
            cwd: 'public/css',
            src: [ '*.css', '!*.min.css' ],
            dest: 'public/css',
            ext: '.min.css',
            expand: true
        } ]
    }
};
