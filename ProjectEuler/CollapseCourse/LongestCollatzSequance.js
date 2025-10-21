function longestCollatzSequence(limit) {
let maxLength = 0;
let numberWithMax = 0;

for( let i=1; i<limit; i++)
    
{
  let n = i;
  let count = 1;
  while(n!==1)
  {
    if (n%2===0)
    {n=n/2}
    else { n=3*n+1}
    count++
  }

  if (count>maxLength)
  {
    maxLength=count;
    numberWithMax=i
  }
}

  return numberWithMax;
}

console.log(longestCollatzSequence(14));