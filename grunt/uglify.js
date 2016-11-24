/*
    uglify.js
    David M. Anderson

    Configuration for the uglify Grunt task
    See https://www.npmjs.com/package/grunt-contrib-uglify
*/

module.exports = {
    public: {
        options: {
            sourceMap: true
        },
        files: {
            'public/js/project.min.js': [ 'public/js/**.js', '!public/js/project.*' ]
        }
    }
};
