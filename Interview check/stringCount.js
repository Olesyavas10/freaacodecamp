/* Given two strings, determine how many times the second string appears in the first.

The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.
 */
function count(text, pattern) {
let number=0;
let pos=0;


  while ((pos = text.indexOf(pattern, pos)) !== -1) {
    number++;
    pos ++; // переходим к следующей позиции после найденного
  }

  return number;
}
console.log(count('101010101010101010101', '101'))