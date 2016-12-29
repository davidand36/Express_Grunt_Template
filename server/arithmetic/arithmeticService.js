/*
    additionService.js
    David M. Anderson

    Example service that responds to requests for simple arithmetic results
*/

var arith = require( './arithmetic' );

module.exports = function( express ) {

    var router = express.Router();

    router.get( '/add', sendSum );
    router.get( '/subtract', sendDifference );
    router.get( '/multiply', sendProduct );
    router.get( '/divide', sendQuotient );

    return router;

    //=========================================================================

    function sendSum( request, response ) {
        var num1 = Number( request.query.num1 ) || 0;
        var num2 = Number( request.query.num2 ) || 0;
        response.send( { sum: arith.add( num1, num2 ) } );
    }

    //=========================================================================

    function sendDifference( request, response ) {
        var num1 = Number( request.query.num1 ) || 0;
        var num2 = Number( request.query.num2 ) || 0;
        response.send( { difference: arith.subtract( num1, num2 ) } );
    }

    //=========================================================================

    function sendProduct( request, response ) {
        var num1 = Number( request.query.num1 ) || 0;
        var num2 = Number( request.query.num2 ) || 0;
        response.send( { product: arith.multiply( num1, num2 ) } );
    }

    //=========================================================================

    function sendQuotient( request, response ) {
        var num1 = Number( request.query.num1 ) || 0;
        var num2 = Number( request.query.num2 ) || 0;
        response.send( { quotient: arith.divide( num1, num2 ) } );
    }
};
