/*
    arithmetic.spec.js
    David M. Anderson

    Example unit test for arithmetic
    See http://mochajs.org/
    and http://chaijs.com/guide/styles/
*/

var chai = require( 'chai' );
var assert = chai.assert;
var arithmetic = require( './arithmetic' );

describe( 'arithmetic', function( ) {

    describe( 'add', function( ) {
        it( 'adds two numbers', function( ) {
            assert.equal( arithmetic.add( 3, 4 ), 7 );
        } );

        /*
        it( 'should fail this test (2+2=5)', function( ) {
            assert.equal( arithmetic.add( 2, 2), 5 );
        } );
        */
    } );

    //=========================================================================

    describe( 'divide', function( ) {
        it( 'divides two numbers', function( ) {
            assert.equal( arithmetic.divide( 3, 4 ), 0.75 );
        } );

        it( 'produces infinity when dividing by zero', function( ) {
            assert.isNotTrue( Number.isFinite( arithmetic.divide( 3, 0) ) );
        } );

        it( 'produces NaN when dividing zero by zero', function( ) {
            assert.isNaN( arithmetic.divide( 0, 0 ) );
        } );
    } );
} );
