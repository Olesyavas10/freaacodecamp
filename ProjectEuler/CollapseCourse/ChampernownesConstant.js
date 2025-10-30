function champernownesConstant(n) {

let num=[];

for (let i=1; i<=n; i++)
{
  num.push(i)
}

let arr=num.join('').split('')
let result=1
while (n>1)
{
  result*=Number(arr[n-1])
  n=n/10
}


  return result

}

console.log(champernownesConstant(1000))