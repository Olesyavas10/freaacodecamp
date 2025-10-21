function abundantNumber(num)
{
  let sum=0
  for (let i=1; i<num; i++)
  {
if (num%i===0)
{
  sum+=i
}
  }

  if (sum>num) return true
  else return false
}



function sumOfNonAbundantNumbers(n) {
//все abudant числа до n
const abundantNums=[]
for(let i=1; i<=n; i++)
{
  if (abundantNumber(i)) abundantNums.push(i)
}

//суммы всех abundant чисел до n

const sums=new Set();
for (let i=0; i<abundantNums.length; i++)
{
  for (let j=0; j<abundantNums.length; j++)
  {
    const s=abundantNums[i]+abundantNums[j]
    if (s<=n) sums.add(s)
  }
}

//сумма всех чисел, которых нет среди сумм двух абудант чисел
let total=0;
for (let i=1; i<=n; i++)
{
if(!sums.has(i)) total+=i
}
return total
}

console.log(sumOfNonAbundantNumbers(10000))