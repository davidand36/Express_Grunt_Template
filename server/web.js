/*
  web.js
  David M. Anderson

  Main NodeJS file for Web server
  NOTES:
  1. See https://www.npmjs.com/package/connect-livereload . This also involves
     the Grunt watch task and the security settings.
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require( 'express' );
var favicon = require( 'serve-favicon' );
var compression = require( 'compression' );
var security = require( './security' );
var liveReload = require( 'connect-livereload' );
var ports = require( '../config/ports' );

var app = express();

var publicDir = __dirname + '/../public';

app.use( favicon( publicDir + '/favicon.ico' ) );
app.use( compression() );
security.useHelmet( app );
if ( process.env.NODE_ENV === 'development' ) {
    app.use( liveReload( { port: ports.liveReload } ) );
}
app.use( express.static( publicDir ) );

var port = Number( ports.server );
app.listen( port,
            function( )
            {
                console.log( "Listening on port " + port );
            } );
