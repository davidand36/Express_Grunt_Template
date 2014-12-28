/*
  web.js
  David M. Anderson

  Main NodeJS file for Web server
*/

var express = require( 'express' );
var favicon = require( 'serve-favicon' );
var compression = require( 'compression' );

var app = express();

app.use( favicon( __dirname + '/public/favicon.ico' ) );
app.use( compression() );
app.use( express.static( __dirname + '/public' ) );

var port = Number( process.env.PORT || 6203 );
app.listen( port,
            function( )
            {
                console.log( "Listening on port " + port );
            } );
