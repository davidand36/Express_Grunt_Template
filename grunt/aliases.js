/*
  aliases.js
  David M. Anderson

  Grunt task aliases
*/

module.exports = {
    lint: [
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
