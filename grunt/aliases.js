/*
  aliases.js
  David M. Anderson

  Grunt task aliases
  See https://www.npmjs.com/package/load-grunt-config .
*/

module.exports = {
    lint: [
        'jsonlint',
        'htmlhint',
        'jshint',
        'sass-lint',
        'csslint'
    ],
    'lint:system': [
        'jsonlint:system',
        'jshint:system'
    ],
    'lint:server': [
        'jshint:server'
    ],
    client: [
        'htmlhint:client',
        'sass-lint:client',
        'jshint:client',
        'clean:client',
        'copy:html',
        'copy:images',
        'copy:js',
        'symlink:favicon',
        'compass:client',
        'csslint:client'
    ],
    build: [
        'useminPrepare',
        'cssmin:public',
        'filerev:css',
        'concat:public',
        'uglify:public',
        'filerev:js',
        'usemin'
    ],
    default: [
        'lint:system',
        'lint:server',
        'client',
        'concurrent:default'
    ],
    debug: [
        'lint:system',
        'lint:server',
        'client',
        'concurrent:debug'
    ]
};
