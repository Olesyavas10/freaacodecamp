function factorial(num)
{
  let factorial=1n //BigInt
  for (let i=1n; i<=BigInt(num); i++)
  {
factorial=factorial*i
  }
  return factorial
}

function sumFactorialDigits(n) {
let newN=factorial(n)
let sum=newN.toString().split('').reduce((sum, a)=>sum+Number(a), 0)
  return sum
}

console.log(sumFactorialDigits(25))