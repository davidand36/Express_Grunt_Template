/*
    bower-install-simple.js
    David M. Anderson

    Configuration for bower Grunt task
    See https://www.npmjs.com/package/grunt-bower
*/

module.exports = {
    public: {
        options: {
            directory: 'public/lib',
            production: true,
            interactive: false
        }
    }
};
