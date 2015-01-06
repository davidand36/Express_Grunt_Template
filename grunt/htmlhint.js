/*
  htmlhint.js
  David M. Anderson

  Configuration for htmlhint Grunt task
*/

module.exports = {
    options: {
        htmlhintrc: '.htmlhint.json'
    },
    client: {
        src: [ 'client/**/*.html' ]
    }
};
