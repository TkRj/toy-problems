/*

Print all parentheses combinations for a given value n such that
they are balanced.
*/

function printAllParens(n) {
  const solutions=[];
  printAllParensRecurse(n, 0, 0);

  function printAllParensRecurse(n, right, left,current=[]) {
    if (right >= n && left >= n) {
      solutions.push(current);
      current=[];
    }
  
    if (left < n) {
      current.push('{');
      printAllParensRecurse(n, right, left + 1, current);
    }
  
    if (right < left) {
      current.push('}');
      printAllParensRecurse(n, right + 1, left, current);
    }
  }
  return solutions;
}


printAllParens(1)
module.exports = printAllParens;