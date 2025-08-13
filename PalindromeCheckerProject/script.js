const input1 = document.getElementById("text-input");
  const checkPalBtn = document.getElementById("check-btn");
  const result = document.getElementById("result");

 const checkPalindrome= input1=>{
   const originalInput=input1.value;
   
    if (originalInput==='' )
    { alert('Please input a value');
    return}
    
     result.replaceChildren(); //очищаем результат перед добавлением нового
     const lowerCaseInput=originalInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
     
    
const reverseInput = [...lowerCaseInput].reverse().join(''); //оставляю только буквы и реверс делаю
   
let resultMsg=`${originalInput} ${lowerCaseInput===reverseInput? ` is`:` is not`} a palindrome.`;
 
 const pTag=document.createElement('p');
 pTag.className='user-input';
 pTag.innerText=resultMsg;
 result.appendChild(pTag) //добавляем pTag в div элемент
  result.hidden=false;
input1.value = '';
  }

    checkPalBtn.addEventListener('click', () => checkPalindrome(input1) )

  