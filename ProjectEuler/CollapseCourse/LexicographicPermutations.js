function factorial(num)
{
  let factorial =1;
  for (let i=1; i<=num; i++)
  {
    factorial*=i
  }
  return factorial
}

function lexicographicPermutations(n) {
const nums=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let result=[]

for (let i=nums.length-1; i>=0; i++)
{
let blocksize=factorial(i)//размер блока
let index=Math.floor((n-1)/blocksize) //блок i цифры === i цифра
result.push(nums[index]) //добавляем первую цифру
nums.splice(index, 1) //вырезаем эту цифру из массива
n=n-index*blocksize //уменьшаем чтоб перейти в блоки следующие
}

  return result.join('');
}

lexicographicPermutations(999999)