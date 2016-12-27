/*
    karma.conf.js
    David M. Anderson

    Configuration for Karma client-side testing.
    Some options are specified in grunt/karma.
*/

module.exports = function( config ) {
    config.set( {
        files: [
            '../public/lib/jquery/dist/jquery.min.js',
            '../public/arithmetic/arithmetic.js',
            '../public/arithmetic/arithmetic.test.js'
         ]
    } );
};
