function powerDigitSum(exponent) {
  let digits = [1];

  // Умножаем на 2 exponent раз
  for (let i = 0; i < exponent; i++) {
    let carry = 0;
    for (let j = 0; j < digits.length; j++) {
      let product = digits[j] * 2 + carry;
      digits[j] = product % 10;
      carry = Math.floor(product / 10);
    }
    if (carry > 0) digits.push(carry);
  }

  // Складываем все цифры
  return digits.reduce((sum, d) => sum + d, 0);
}

console.log(typeof(powerDigitSum(166)));