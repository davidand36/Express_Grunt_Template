/*
    arithmetic.js
    David M. Anderson

    Example library that provides simple arithmetic functions
*/

module.exports = (function( ) {
    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    };

    //=========================================================================

    function add( num1, num2 ) {
        return num1 + num2;
    }

    //=========================================================================

    function subtract( num1, num2 ) {
        return num1 - num2;
    }

    //=========================================================================

    function multiply( num1, num2 ) {
        return num1 * num2;
    }

    //=========================================================================

    function divide( num1, num2 ) {
        return num1 / num2;
    }
})();
