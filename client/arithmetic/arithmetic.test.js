/*
    arithmetic.test.js
    David M. Anderson

    Example client-side unit test for arithmetic
    See http://mochajs.org/
    and http://chaijs.com/guide/styles/
*/

var expect = chai.expect;

describe( 'arithmetic', function( ) {

    describe( '#add', function( ) {
        it( 'adds two numbers', function( ) {
            expect( arithmetic.add( 3, 4 ) ).to.equal( 7 );
        } );

        it( 'throws an exception when arguments are missing', function( ) {
            expect( function add() { arithmetic.add( 3 ); } )
                .to.throw( 'Numeric argument required.' );
        } );

        /*
        it( 'should fail this test (2+2=5)', function( ) {
            expect( arithmetic.add( 2, 2 ) ).to.equal( 5 );
        } );
        */
    } );

    //=========================================================================

    describe( '#divide', function( ) {
        it( 'divides two numbers', function( ) {
            expect( arithmetic.divide( 3, 4 ) ).to.equal( 0.75 );
        } );

        it( 'throws an exception when dividing by zero', function( ) {
            expect( function divide() { arithmetic.divide( 3, 0 ); } )
                .to.throw( 'Cannot divide by zero' );
        } );
    } );
} );
