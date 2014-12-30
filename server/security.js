/*
  security.js
  David M. Anderson

  Protect app from some attacks.
*/

var _ = require( 'lodash' );
var helmet = require( 'helmet' );
var helmetConfig = require( '../config/helmet' );

exports.useHelmet = function( app ) {
    _.forEach( helmetConfig,
               function( val, key ) {
                   if ( val === null ) {
                       app.use( helmet[ key ]() );
                   } else {
                       app.use( helmet[ key ]( val ) );
                   }
               } );
};
