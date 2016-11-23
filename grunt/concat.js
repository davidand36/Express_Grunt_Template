/*
    concat.js
    David M. Anderson

    Configuration for the concat Grunt task
    See https://www.npmjs.com/package/grunt-contrib-concat
*/

module.exports = {
    options: {
        separator: ';\n',
        sourceMap: true
    },
    public: {
        src: [ 'client/js/**.js' ],
        dest: 'public/js/project.js'
    }
};
