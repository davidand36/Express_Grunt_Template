/*
  Gruntfile.js
  David M. Anderson

  NOTES:
  1. Using load-grunt-config, so configuration of individual tasks is in
     separate files under grunt/ .
     See https://www.npmjs.com/package/load-grunt-config .
  2. Times the tasks.
     See https://www.npmjs.com/package/time-grunt .
  3. Uses Just-In-Time plug-in loader.
     See https://www.npmjs.com/package/jit-grunt .
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = function( grunt ) {
    'use strict';

    require( 'time-grunt' )( grunt );

    require( 'load-grunt-config' )( grunt,
        {
            jitGrunt: {
                staticMappings: {
                    mochaTest: 'grunt-mocha-test',
                    useminPrepare: 'grunt-usemin'
                }
            }
        } );
};
