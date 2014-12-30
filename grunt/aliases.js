/*
  aliases.js
  David M. Anderson

  Grunt task aliases
*/

module.exports = {
    lint: [
        'jshint'
    ],
    client: [
        'clean:client',
        'copy:client',
        'symlink:favicon'
    ],
    default: [
        'lint'
    ]
};
