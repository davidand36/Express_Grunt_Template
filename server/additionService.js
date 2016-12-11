/*
    additionService.js
    David M. Anderson

    Example service that adds numbers
*/

var addition = require( './addition' );

module.exports = function( express ) {

    var router = express.Router();

    router.get( '/', sendSum );

    return router;

    //=========================================================================

    function sendSum( request, response ) {
        var num1 = Number( request.query.num1 ) || 0;
        var num2 = Number( request.query.num2 ) || 0;
        response.send( { sum: addition( num1, num2 ) } );
    }

};
