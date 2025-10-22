function spiralDiagonals(n) {
  let sum=1;
  let upRight=0;
/* let upLeft=0;
let bottomRight=0;
let bottomLeft=0; */
let sloi=Math.floor(n/2)
for (let k=1; k<=sloi; k++)
{
  
sum+=4*(2*k + 1)**2 - 12*k
}
  return sum;
}

console.log(spiralDiagonals(5))