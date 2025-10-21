function sumDivisors(a)
{
  let d=0;
  for (let i=1; i<a; i++)
  {
    if (a%i===0)
    {
d+=i
    }
  }
  return d;
}


function sumAmicableNum(n) {
    let sumNums=0;
    
for (let i=1; i<=n; i++)
{
  let a=sumDivisors(i); //284=d(220)  220=d(284)
  
  if(a!==i && sumDivisors(a)===i)
  {
    sumNums+=a
  }

}
  return sumNums;
} 

console.log(sumAmicableNum(1000));