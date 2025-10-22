function isPrime(num)
{
  if (num<2) return false
  for (let i=2; i*i<=num; i++)
  {
    if (num%i===0) return false
  }
  return true
}

function quadraticPrimes(range) {
  let product=0
  let maxCount=0;

for (let a=-range+1; a<range; a++)
{
for (let b=-range; b<=range; b++)
{
let n=0;
  if (isPrime(b))
  {

  while (isPrime(n**2 + a*n + b)) {
        n++;
      }
  }

if (n>maxCount)
{
  maxCount=n;
  product=a*b
}
}
  }

  return product;
}

quadraticPrimes(1000);