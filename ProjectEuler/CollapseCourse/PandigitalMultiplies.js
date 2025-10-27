function isPandigital(num, n)
{
  const digits=num.toString().split('')
  return digits.length === n && 
         new Set(digits).size === n && 
         digits.every(d => +d >= 1 && +d <= n);
}


function pandigitalMultiples(k) {
  let result=0;
  for (let i=1; i<10**Math.floor(k/2); i++)
  {
let concat=''

 for (let n=1; n<10; n++)
 {
   concat+=(n*i).toString()
   if(concat.length>=k && isPandigital(concat, k) && result<concat) 
   {
   result=+concat
   }
 } 
  }
 
return result
}

console.log(pandigitalMultiples(8))