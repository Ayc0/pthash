/**
 * Hash a string to a plain text string
 *
 * @param {String} str the string that needs to be hashed
 * @return {String} result the hashed string
*/

module.exports = function(str, fn = String) {
        return fn(str);
}
