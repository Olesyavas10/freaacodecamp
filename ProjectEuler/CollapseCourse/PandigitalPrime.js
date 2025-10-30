function isPrime(num)
{
  if(num<2) return false
  if (num===2) return true
  for (let i=2; i*i<=num; i++)
  {
    if (num%i===0)
    return false
  }
  return true
}

function permute(str) {
  if (str.length === 1) return [str];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const rest = str.slice(0, i) + str.slice(i + 1);
    for (const p of permute(rest)) {
      result.push(str[i] + p);
    }
  }
  return result;
}


function pandigitalPrime(n) {
  
  const digits = Array.from({ length: n }, (_, i) => i + 1).join('');
  const permutations = permute(digits)
    .map(Number)
    .sort((a, b) => b - a); // от большего к меньшему
const panPrimeNums=[]
  for (const num of permutations) {
    if (isPrime(num)) panPrimeNums.push(num)
  }


  return panPrimeNums.sort((a,b)=>b-a)[0]
}
pandigitalPrime(7);