function isPrime(num)
{
  if (num<=1) return false
  if (num===2) return true
  for (let i=2; i*i<num; i++)
  {
    if (num%i===0) return false
  }
  return true
}

function isOddComposite (num)
{
  if (num<9) return false
  if (num%2===1 && !isPrime(num)) return true

  return false 
}

function goldbachsOtherConjecture() {
const oddComposite=[]
let sqr=0;
for (let n=9; n<10000; n++)
{
  if (!isPrime(n)&& n%2===1) {
     let found = false;

    for (let p=2; p<n; p++)
{
  if (isPrime(p)) {
    const remainder = n - p;
    if (remainder%2===0)
    {
      const k=remainder/2
      const root=Math.sqrt(k)

      if (root===Math.floor(root))
      {
        found=true
        break
      }
    }
    
    
  }
}
if (!found) {
        return n;
      }
  }
}


}

console.log(goldbachsOtherConjecture())