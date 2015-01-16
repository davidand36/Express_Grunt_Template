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
        'lint',
        'client',
        'concurrent:default'
    ],
    debug: [
        'lint',
        'client',
        'concurrent:debug'
    ]
};
