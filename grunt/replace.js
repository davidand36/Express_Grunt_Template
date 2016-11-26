/*
  replace.js
  David M. Anderson

  Configuration of replace Grunt task
  See https://www.npmjs.com/package/grunt-replace
*/

module.exports = {
    html: {
        options: {
            patterns: [
                {
                    match: 'version',
                    replacement: '<%= package.version %>'
                },
                {
                    match: 'project-name',
                    replacement: '<%= package.name %>'
                }
            ]
        },
        files: [ {
            cwd: 'public/',
            src: [ '**/*.html', '!lib/**/*.html' ],
            dest: 'public/',
            expand: true
        } ]
    }
};
