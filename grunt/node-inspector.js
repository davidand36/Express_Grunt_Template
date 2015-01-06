/*
  node-inspector.js
  David M. Anderson

  Configuration for node-inspector Grunt task
  See https://www.npmjs.com/package/grunt-node-inspector
*/

var ports = require( '../config/ports' );

module.exports = {
    dev: {
        options: {
            'web-host': 'localhost',
            'web-port': ports.inspector,
            'debug-port': ports.debugger,
            'save-live-edit': true,
            'no-preload': true,
            'stack-trace-limit': 10
        }
    }
};
