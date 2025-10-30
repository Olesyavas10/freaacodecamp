function intRightTriangles(n) {
const perimeters={}
let c=0
for (let a=1; a<n/2; a++)
{
for (let b=1; b<n/2; b++)
{
c=Math.sqrt(a*a+b*b)
const p=a+b+c
if (Number.isInteger(c) && p<=n)
{

   perimeters[p] = (perimeters[p] || 0) + 1;
}
}
}
let maxP=0;
let maxCount=0;

for (const [p, count] of Object.entries(perimeters))
{
  if (count>maxCount)
  {
    maxCount=count
    maxP=p
  }
}

  return Number(maxP)
}

console.log(intRightTriangles(500))