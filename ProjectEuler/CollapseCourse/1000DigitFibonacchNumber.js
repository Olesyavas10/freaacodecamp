function fibonacciNums(n)
{
  const sequence = [1, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}



function digitFibonacci(n) {
   let index=0
   for (let i=1; i<=n**2; i++)
   {
     const sequence=fibonacciNums(i)
     if (sequence[i-1]/10**(n-1)>1)
     {
       return index=i
     }
   }

}

 console.log(digitFibonacci(5)) 