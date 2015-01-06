/*
  csslint.js
  David M. Anderson

  Configuration for csslint Grunt task
  See https://www.npmjs.com/package/grunt-contrib-csslint
  and https://github.com/CSSLint/csslint .
*/

module.exports = {
    options: {
        csslintrc: '.csslint.json'
    },
    client: {
        src: [ 'public/**/*.css' ]
    }
};
