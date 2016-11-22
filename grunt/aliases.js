/*
  aliases.js
  David M. Anderson

  Grunt task aliases
*/

module.exports = {
    lint: [
        'jsonlint',
        'htmlhint',
        'jshint',
        'scsslint',
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
        'scsslint:client',
        'jshint:client',
        'clean:client',
        'copy:html',
        'copy:images',
        'symlink:favicon',
        'compass:client',
        'csslint:client'
    ],
    build: [
        'useminPrepare',
        'cssmin:public',
        'filerev:css',
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
