/*
  htmlmin.js
  David M. Anderson

  Configuration of htmlmin Grunt task
  See https://www.npmjs.com/package/grunt-contrib-htmlmin
*/

module.exports = {
    public: {
        options: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            decodeEntities: true,
            keepClosingSlash: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            removeOptionalTags: true,
            sortAttributes: true,
            sortClassName: true
        },
        files: [ {
            cwd: 'public/',
            src: [ '**/*.html' ],
            dest: 'public/',
            expand: true
        } ]
    }
};
