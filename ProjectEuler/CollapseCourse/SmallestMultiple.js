/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n? */
function gcd(a, b) //НОД - наибольший общий делитель
{
  while(b!==0)
  {
  [a, b]=[b, a%b]
  }
  return a;
}

function lcm(a, b) { //НОК -Наименьшее общее кратное
return (a * b) / gcd(a, b); 
}

function smallestMult(n) {
let result=1;

for (let i=2; i<=n; i++)
{
result=lcm(result, i)
}
  return result;
}

console.log(smallestMult(7));
