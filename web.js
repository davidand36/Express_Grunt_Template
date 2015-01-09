/*
  web.js
  David M. Anderson

  Main NodeJS file for Web server
*/

var express = require( 'express' );
var favicon = require( 'serve-favicon' );
var compression = require( 'compression' );
var security = require( './server/security' );
var liveReload = require( 'connect-livereload' );
var ports = require( './config/ports' );

var app = express();

app.use( favicon( __dirname + '/public/favicon.ico' ) );
app.use( compression() );
security.useHelmet( app );
app.use( liveReload( { port: ports.liveReload } ) );
app.use( express.static( __dirname + '/public' ) );

var port = Number( ports.server );
app.listen( port,
            function( )
            {
                console.log( "Listening on port " + port );
            } );
