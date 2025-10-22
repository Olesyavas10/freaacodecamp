function reciprocalCycles(n) {

let number=0;
let maxLength=0;
for (let i=2; i<=n; i++)
{
  const remainders=[]
  let remainder=1%i


while (remainder!==0 && !remainders.includes(remainder))
{
  remainders.push(remainder);
  remainder = (remainder * 10) % i
}

const length= remainder===0? 0:remainders.length-remainders.indexOf(remainder) //длину находим

if (length>maxLength)
{
  maxLength=length;
  number=i
}
}
  return number
}

console.log(reciprocalCycles(7))
console.log(1/7)