function isPrime(num)
{
  if (num<2) return false
  for (let i=2; i*i<=num; i++)
  {
    if (num%i===0) return false
  }
  return true
}


function truncatablePrimes(n) {
const result=[]
for (let i=11; result.length<n; i++)
{
  if (isPrime(i))
  {
    const num=i.toString()
    const leftCuts=[]
    const rightCuts=[]
    for (let k=1; k<num.length; k++)
    
    {
leftCuts.push(num.slice(k))
rightCuts.push(num.slice(0, num.length-k))

    }
    if (
      leftCuts.every(x=>isPrime(Number(x))) && 
    rightCuts.every(x=>isPrime(Number(x)))
    )
{
result.push(i)
}
  }
}

  return result.reduce((sum, a)=>sum+Number(a), 0);
}

console.log(truncatablePrimes(11))