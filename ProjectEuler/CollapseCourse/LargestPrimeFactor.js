/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

 */
function largestPrimeFactor(number) {
let factor=2;
while (factor*factor<=number)
{
  if (number%factor===0)
  {
    number=number/factor
  }
  else {factor++}
}

  return number
}

console.log(largestPrimeFactor(7));