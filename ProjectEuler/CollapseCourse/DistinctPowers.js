function distinctPowers(n) {
const arr=[]
for (let a=2; a<=n; a++)
{
  for (let b=2; b<=n; b++)
  {
arr.push(a**b)
arr.push(b**a)


  }
}
const newArr=[...new Set(arr)]
  return newArr.length;
}

console.log(distinctPowers(5))