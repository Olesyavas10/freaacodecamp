function isPrime(num)
{
  if (num < 2) return false
  if (num===2) return true
  for (let i=2; i*i<=num; i++)
  {
    if (num%i===0) return false
  }
  return true
}

function circularPrimes(n) {
let count=0;


for (let i=1; i<=n; i++)
{
  if (isPrime(i))
  {
    let num=i.toString()
    const result = [];
    for (let k=0; k<num.length; k++)
    {
      const rotated=num.slice(k)+num.slice(0, k)
      result.push(+rotated)
    }
    if (result.reduce((acc, a)=>acc&&isPrime(a), true))
    {
count++
    }
    
  }
}
  return count;
}

console.log(circularPrimes(500000))