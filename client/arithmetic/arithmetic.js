/*
    arithmetic.js
    David M. Anderson

    Example client-side library that provides simple arithmetic functions
*/

var arithmetic = (function( ) {
    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    };

    //=========================================================================

    function add( num1, num2 ) {
        checkNumericArgs( num1, num2 );
        return num1 + num2;
    }

    //=========================================================================

    function subtract( num1, num2 ) {
        checkNumericArgs( num1, num2 );
        return num1 - num2;
    }

    //=========================================================================

    function multiply( num1, num2 ) {
        checkNumericArgs( num1, num2 );
        return num1 * num2;
    }

    //=========================================================================

    function divide( num1, num2 ) {
        checkNumericArgs( num1, num2 );
        if ( num2 === 0 ) {
            throw new Error( 'Cannot divide by zero' );
        }
        return num1 / num2;
    }

    //=========================================================================

    function checkNumericArgs( ) {
        for ( var i = 0, len = arguments.length; i < len; ++i ) {
            if ( ! isNumber( arguments[ i ] ) ) {
                throw new Error( 'Numeric argument required.' );
            }
        }

        //---------------------------------------------------------------------
        
        function isNumber( x ) {
            return (x + 0 === x);
        }
    }
})();
