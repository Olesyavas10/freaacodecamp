function countDivisors(num) {
  let divisors = 1;
  let count = 0;

  // Делим на 2, пока чётное
  while (num % 2 === 0) {
    num = num / 2;
    count++;
  }
  if (count > 0) divisors *= (count + 1);

  // Проверяем нечетные делители
  let p = 3;
  while (p * p <= num) {
    count = 0;
    while (num % p === 0) {
      num = num / p;
      count++;
    }
    if (count > 0) divisors *= (count + 1);
    p += 2;
  }
  // Если осталось простое число > 2
  if (num > 1) divisors *= 2;

  return divisors;
}

function divisibleTriangleNumber(n) {
  let i=1;
  let triangle=0;

while (true)
{
  triangle=i*(i+1)/2 //формула треугольных чисел
  const a=i%2===0? i/2:i;
  const b=(i+1)%2===0?(i+1)/2:i+1;

  const divisors=countDivisors(a)*countDivisors(b);

  if(divisors>n)
  {return triangle}
  i++
}

}

console.log(divisibleTriangleNumber(5))
