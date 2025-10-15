/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number? */

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}


function nthPrime(n) {
  let count=0;
  let number=1;
  
  while(count<n)
  {
number++
if(isPrime(number))
{
  count++
}
  }
  return number
}

console.log(nthPrime(6));