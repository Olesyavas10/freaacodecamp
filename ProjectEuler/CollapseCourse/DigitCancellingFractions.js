function digitCancellingFractions() {
const product=[]; //массив этих дробей

let a, b, c, d;

for (let a=1; a<10; a++)
{
  for (let b=1; b<10; b++)
  {
for (let c=1; c<10; c++)
{
  for (let d=1; d<10; d++)
  {
    let fraction=(a*10+b)/(c*10+d)

 if (fraction<1 && b===c && fraction===a/d)
 {
fraction=a/d
   product.push({numerator: a, denominator: d})
 }
  }
 
}
  }
}
  return product.reduce((acc, frac)=>acc*frac.denominator, 1)/product.reduce((acc, frac)=>acc*frac.numerator, 1)
  
}

console.log(digitCancellingFractions())