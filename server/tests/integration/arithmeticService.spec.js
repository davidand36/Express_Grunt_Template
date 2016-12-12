/*
    arithmeticService.spec.js
    David M. Anderson

    Example integration test of arithmeticService
    See http://mochajs.org/
    and http://chaijs.com/guide/styles/
    and http://chaijs.com/plugins/chai-http/
*/

var express = require( 'express' );
var app = express();
var chai = require( 'chai' );
var expect = chai.expect;
var chaiHttp = require( 'chai-http' );
var arithmeticService = require( '../../arithmeticService' )( express );

chai.use( chaiHttp );

app.use( '/arithmetic', arithmeticService );

describe( 'arithmeticService', function( ) {

    describe( 'add', function( ) {
        it ( 'returns JSON with the sum of two numbers', function( done ) {
            chai.request( app )
                .get( '/arithmetic/add' )
                .query( { num1: 3, num2: 4 } )
                .then( function( response ) {
                    expect( response ).to.have.status( 200 );
                    expect( response ).to.have.header( 'content-type', /json/ );
                    expect( response ).to.be.json;
                    expect( response.body ).to.be.an( 'object' );
                    expect( response.body ).to.have.property( 'sum' );
                    expect( response.body.sum ).to.equal( 7 );
                    /* Would fail this:
                    expect( response.body.sum ).to.equal( 8 );
                    */
                    done( );
                } )
                .catch( function( err ) {
                    done( err );
                } );
        } );
    } );
} );
