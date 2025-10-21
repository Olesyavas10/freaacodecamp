function namesScores(arr) {
   const sorted=arr.map(w => w.toUpperCase()).sort()
  let sum=0;
for (let i=0; i<sorted.length; i++)
{

  const word=sorted[i]
  let letters=0
for (let j=0; j<word.length; j++)
{
letters+=word.charCodeAt(j)-64
}
sum+=letters*(i+1)
}
  return sum;
}