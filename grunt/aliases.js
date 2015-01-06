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
        'clean:client',
        'copy:client',
        'symlink:favicon',
        'compass:client',
        'csslint:client'
    ],
    default: [
        'lint'
    ]
};
