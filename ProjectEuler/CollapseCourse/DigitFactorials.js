function factorial(num)
{
  let factorial =1
  if (num===0 ||num===1) return 1

  for (let i=2; i<=num; i++)
  {
    factorial*=i
  }
  return factorial
}

function digitFactorial() {
let sumFactorials=0;
  var sum = 0;
  var numbers = [];
for (let i=3; i<7*factorial(9); i++)
{
  if (i.toString().split('').reduce((acc, num)=>acc+factorial(+num), 0)===i)
  {
    sum+=i
    numbers.push(i)
  }
}

  return { sum, numbers };
}

console.log(digitFactorial())