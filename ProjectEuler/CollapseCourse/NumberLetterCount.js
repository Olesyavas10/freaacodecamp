function letters(num)
{
 const ones=['', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen']

  const tens=[ '', '', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety']  

    if (num===0) return 'zero'
    if (num<20) return ones[num];
    if (num<100) return tens[Math.floor(num/10)]+(num%10? '-'+ones[num%10]:'') 
    if (num<1000) return (ones[Math.floor(num/100)]+' hundred'+(num%100? ' and '+ letters(num % 100) : ''))
if (num===1000) return 'one thousand'
}

function numberLetterCounts(limit) {
let sum='';
for (let i=1; i<=limit; i++)
{
sum+=letters(i)
}
  return sum.split('').filter(el=>el!==' ' && el!=='-').length
}

console.log(numberLetterCounts(150));