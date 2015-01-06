/*
  aliases.js
  David M. Anderson

  Grunt task aliases
*/

module.exports = {
    lint: [
        'jshint',
        'scsslint',
        'csslint'
    ],
    client: [
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
