const input=document.getElementById("user-input");
const checkBtn=document.getElementById("check-btn");
const clearBtn=document.getElementById("clear-btn");
const result=document.getElementById("results-div");

checkBtn.addEventListener ("click", ()=>{
  const regex=/^(?:1[\s\-]?)?(?:\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  
  const p = document.createElement("p"); 
  if (input.value==="")
  {
    alert("Please provide a phone number")
    return
  }
   
 else if (regex.test(input.value))
 {
   p.textContent=`Valid US number: ${input.value}`;
   result.appendChild(p)
   input.value=""
 }
 else 
 {
   p.textContent=`Invalid US number: ${input.value}`;
   result.appendChild(p)
   input.value=""
 }
}) //кнопка чека

clearBtn.addEventListener("click", ()=>{
  result.textContent=""
  return
}) //кнопка очистки




