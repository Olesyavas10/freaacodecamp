/* The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
 */

function sumSquareDifference(n) {
let sumSq=0;
let sum=0;
let result=0;
  for (let i=1; i<=n; i++)
  {
sumSq+=i**2
 sum+=i
  }

result=sum**2-sumSq
return result
}

sumSquareDifference(100);