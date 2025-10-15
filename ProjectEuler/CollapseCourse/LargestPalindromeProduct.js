/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
 */

function isPalindrome(num) {
  const str=num.toString();
return str===str.split('').reverse().join('')
}

function largestPalindromeProduct(n) {
let max=0;
let min=10**(n-1);
let maxVal=10**n-1;

for (let i=maxVal; i>min; i--)
{
  for (let j=i; j>min; j--)
  {
const product=j*i
if (product<=max) break
if (isPalindrome(product))
{
  max=product
}
  }

}

return max;
 
}

largestPalindromeProduct(3);