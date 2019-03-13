/**
 * Get count zero in the end of Number
 * @param {*} number Nuber for cheking zero
 * @param {*} simpleNumber Simple number of base
 * @param {*} countSimple Count repeat simple number
 */
function sumRecBase(number, simpleNumber, countSimple){
  var fullZero = 0;
  while(number = Math.trunc(number/simpleNumber)){
    fullZero += number;
  }

  return Math.trunc(fullZero/countSimple);
}

/**
 * Check all simple numbers of base
 * @param {integer} number Nuber for cheking zero
 * @param {Array} arrSimple Array simple nubers by base
 * @returns {Array} List of count zero;
 */
function checkArrayBaseSumZero(number,arrSimple){
  var countZero = [];
  for (var simpleNumber in arrSimple) {
    countZero.push(sumRecBase(number, simpleNumber, arrSimple[simpleNumber]));
  }

  return countZero;
}


/**
 * Form array whith simple numbers and count it
 * @param {integer} number Number for find simple value
 * @returns {Array} returnArrSimple Array whith simple numbers
 */

function getArrSimple(number){
  var arrSimple = {};
  var i = 2;
  while (i <= number){
    if (number % i == 0){
      if (i in arrSimple){
        arrSimple[i]++;
      }else{
        arrSimple[i] = 1;
      }
      number = number/i;
    }else{
        i++;
    }
  }
  return arrSimple;
}

/**
 * Main function
 */
module.exports = function getZerosCount(number, base) {
   let countZero = Math.min.apply(null, checkArrayBaseSumZero(number,getArrSimple(base)));
  return countZero;
}