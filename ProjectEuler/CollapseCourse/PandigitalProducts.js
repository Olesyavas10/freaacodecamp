function pandigitalNum(num, n)
{
const arr=num.toString().split('')
if (arr.length===n && new Set(arr).size === n && arr.every(d => d >= '1' && d <= n.toString()))
{
for (let i=0; i<arr.length; i++)
{
  if (+arr[i]>n) return false
}
return true
}

  return false
}
 
function pandigitalProducts(n) {
let total=0
let product=0
let sum=0;
const arr=[]

for (let a=1; a<=100; a++)
{ 
 for (let b=1; b<=2000; b++)
  {
    product=a*b;
    sum = [...a.toString().split(''), ...b.toString().split(''), ...product.toString().split('')].join('');

if (pandigitalNum(sum, n) && !arr.includes(product))
{
  total+=product
arr.push(product)
}
  
  }
 
}
  return total;
}
 
console.log(pandigitalProducts(6))
