/*
  htmlhint.js
  David M. Anderson

  Configuration for htmlhint Grunt task
  See https://www.npmjs.com/package/grunt-htmlhint
  and https://github.com/yaniswang/HTMLHint .
*/

module.exports = {
    options: {
        htmlhintrc: '.htmlhint.json'
    },
    client: {
        src: [ 'client/**/*.html' ]
    }
};
