/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.  */

function specialPythagoreanTriplet(n) {
let abc=0;
let sumOfabc=0
let sqSum=0
for (let a=1; a<n; a++)
{
  for (let b=1; b<n; b++)
  {
    for (let c=1; c<n; c++)
    {
      sumOfabc=a+b+c
      sqSum=a*a+b*b

      if (sumOfabc===n && sqSum===c*c)
      {
        abc=a*b*c
      }
    }
  }
}
 return abc;
}

console.log(specialPythagoreanTriplet(24));