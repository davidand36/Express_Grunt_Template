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
            '.tmp/js/<%= package.name %>.min.js': [
                'public/**/**.js',
                '!public/lib/**/*.js',
                '!public/js/<%= package.name %>.*',
                '!public/**/*.test.js',
                '!public/**/*.spec.js'
            ]
        }
    }
};
