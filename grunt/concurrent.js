/*
  concurrent.js
  David M. Anderson

  Configuration for concurrent Grunt task
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
