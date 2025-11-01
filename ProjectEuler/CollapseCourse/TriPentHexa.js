function triPentaHexa(n) {
let triangle=0; let pentagonal=0; let hexagonal=0
let t=(Math.sqrt(8 * 40755 + 1) - 1) / 2+1
let p=(Math.sqrt(24*40755+1)+1)/6+1
let h=(Math.sqrt(8 * 40755 + 1) - 1) / 2+1 

while (true) {
  triangle=t*(t+1)/2;
  pentagonal=p*(3*p-1)/2;
  hexagonal=h*(2*h-1)

if (triangle==pentagonal && hexagonal==triangle && triangle>n)
{
  return triangle
}
const minVal = Math.min(triangle, pentagonal, hexagonal);
    
    if (triangle === minVal) t++;
    if (pentagonal === minVal) p++;
    if (hexagonal === minVal) h++;
}
}

console.log(triPentaHexa(40756))