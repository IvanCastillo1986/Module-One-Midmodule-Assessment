/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  return typeof(val) === typeof(1)
}

console.log(isNumber(8))

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  if(val) {
    return true
  }
  else {
    return false
  }
}

console.log(isTruthy(0))

module.exports = {
  isNumber,
  isTruthy
}
