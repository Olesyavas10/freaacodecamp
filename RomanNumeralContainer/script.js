const numberInput=document.getElementById("number");
const convertBtn=document.getElementById("convert-btn");
const output=document.getElementById("output");

/*const numberToRoman=(input)=>{
let mNumber=Math.floor(input/1000)//кол-во M
let cmNumber=Math.floor((input-mNumber*1000)/900)//CM
let dNumber=Math.floor((input-mNumber*1000-cmNumber*900)/500)//D
let cdNumber=Math.floor((input-mNumber*1000-cmNumber*900-dNumber*500)/400)//cd
let cNumber=Math.floor((input-mNumber*1000-cmNumber*900-dNumber*500-cdNumber*400)/100)//c
let xcNumber=Math.floor((input-mNumber*1000-cmNumber*900-dNumber*500-cdNumber*400-cNumber*100)/90)//xc
let lNumber=Math.floor((input-mNumber*1000-cmNumber*900-dNumber*500-cdNumber*400-cNumber*100-xcNumber*90)/50)//l
let xlNumber=Math.floor((input-mNumber*1000-cmNumber*900-dNumber*500-cdNumber*400-cNumber*100-xcNumber*90-lNumber*50)/40)
let xNumber=Math.floor((input-mNumber*1000-cmNumber*900-dNumber*500-cdNumber*400-cNumber*100-xcNumber*90-lNumber*50-xlNumber*40)/10)//x
let ixNumber=Math.floor((input-mNumber*1000-cmNumber*900-dNumber*500-cdNumber*400-cNumber*100-xcNumber*90-lNumber*50-xlNumber*40-xNumber*10)/9)//IX
let vNumber=Math.floor((input-mNumber*1000-cmNumber*900-dNumber*500-cdNumber*400-cNumber*100-xcNumber*90-lNumber*50-xlNumber*40-xNumber*10-ixNumber*9)/5)//V
let ivNumber=Math.floor((input-mNumber*1000-cmNumber*900-dNumber*500-cdNumber*400-cNumber*100-xcNumber*90-lNumber*50-xlNumber*40-xNumber*10-ixNumber*9-vNumber*5)/4)//IV
let iNumber=Math.floor((input-mNumber*1000-cmNumber*900-dNumber*500-cdNumber*400-cNumber*100-xcNumber*90-lNumber*50-xlNumber*40-xNumber*10-ixNumber*9-vNumber*5-ivNumber*4))//I
return ("M".repeat(mNumber) +
    "CM".repeat(cmNumber) +
    "D".repeat(dNumber) +
    "CD".repeat(cdNumber) +
    "C".repeat(cNumber) +
    "XC".repeat(xcNumber) +
    "L".repeat(lNumber) +
    "XL".repeat(xlNumber) +
    "X".repeat(xNumber) +
    "IX".repeat(ixNumber) +
    "V".repeat(vNumber) +
    "IV".repeat(ivNumber) +
    "I".repeat(iNumber)
)

}
*/
const numberToRoman = (num) => {
  const romanMap = [
    { val: 1000, sym: "M" },
    { val: 900, sym: "CM" },
    { val: 500, sym: "D" },
    { val: 400, sym: "CD" },
    { val: 100, sym: "C" },
    { val: 90, sym: "XC" },
    { val: 50, sym: "L" },
    { val: 40, sym: "XL" },
    { val: 10, sym: "X" },
    { val: 9, sym: "IX" },
    { val: 5, sym: "V" },
    { val: 4, sym: "IV" },
    { val: 1, sym: "I" },
  ];

  let result = "";
  for (const { val, sym } of romanMap) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }
  return result;
};
const checkNumber=()=>{
  const inpuntInt=parseInt(numberInput.value)
  if (!numberInput.value||isNaN(inpuntInt))
  {
    output.textContent="Please enter a valid number"
    return
  }
  else if (inpuntInt<=0)
  {output.textContent="Please enter a number greater than or equal to 1"
  return
  }
  else if (inpuntInt>3999)
  {output.textContent="Please enter a number less than or equal to 3999"
  return}
  else {
    output.textContent=numberToRoman(inpuntInt)
  }
}

convertBtn.addEventListener("click", checkNumber)
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkNumber();
  }
});
