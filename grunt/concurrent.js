/*
  concurrent.js
  David M. Anderson

  Configuration for concurrent Grunt task
  See https://www.npmjs.com/package/grunt-concurrent
*/

module.exports = {
    default: {
        tasks: [ 'watch', 'nodemon' ],
        options: {
            logConcurrentOutput: true
        }
    },
    debug: {
        tasks: [ 'watch', 'nodemon', 'node-inspector' ],
        options: {
            logConcurrentOutput: true
        }
    }
};
