/*
    uglify.js
    David M. Anderson

    Configuration for the uglify Grunt task
    See https://www.npmjs.com/package/grunt-contrib-uglify
*/

module.exports = {
    public: {
        options: {
            sourceMapIn: 'public/js/project.js.map',
            sourceMap: true
        },
        files: {
            'public/js/project.min.js': [ 'public/js/project.js' ]
        }
    }
};
