/*
  aliases.js
  David M. Anderson

  Grunt task aliases
*/

module.exports = {
    lint: [
        'jshint',
        'scsslint'
    ],
    client: [
        'scsslint:client',
        'clean:client',
        'copy:client',
        'symlink:favicon',
        'compass:client'
    ],
    default: [
        'lint'
    ]
};
