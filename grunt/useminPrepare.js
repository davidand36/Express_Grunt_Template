/*
  useminPrepare.js
  David M. Anderson

  Configuration for the useminPrepare Grunt task
  See https://www.npmjs.com/package/grunt-usemin .
*/

module.exports = {
    html: 'public/index.html',
    options: {
        flow: {
            steps: {
                css: [ 'cssmin' ]
            },
            post: { }
        }
    }
};
