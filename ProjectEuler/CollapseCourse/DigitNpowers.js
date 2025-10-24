function digitnPowers(n) {
const upperLimit=n*Math.pow(9, n);
let sum=0;

for (let number=10; number<=upperLimit; number++)
{
  let temp=number;
  let digitSum=0;

  while(temp>0)
  {
    digitSum+=Math.pow(temp%10, n)
    temp=Math.floor(temp/10)
  }

  if (digitSum===number)
  {
    sum+=number
  }
}


  return sum;
}

console.log(digitnPowers(5))