/**
 * Factorial
 by Roman Maklakov
 * @param {number} n
 * @returns {number}
 */
 function factorial(n){
     var result = 1;


 for(n;n>0;n--){
  result *= n;
 }

     return result;
 }
