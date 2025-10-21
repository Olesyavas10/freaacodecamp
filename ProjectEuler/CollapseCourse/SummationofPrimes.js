/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n. */

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function primeSummation(n) {
let sum=0;
for (let i=0; i<n; i++)
{
  if (isPrime(i)) 
  {sum=sum+i}

}
  return sum;
}

//for numbers more than 2 million it takes too long
function primeSummation(n) {
  let isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  } //отсеиваем все составные числа

  let sum = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      sum += i;
    }
  }

  return sum;
}