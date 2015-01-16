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
            html: {
                steps: {
                    css: [ 'cssmin' ]
                },
                post: { }
            }
        }
    }
};
