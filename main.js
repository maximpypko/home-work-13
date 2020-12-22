function palindrom(number, counter = 1) {
  
  if (number <= 0) {
    throw new Error('Введите число больше 0');
  } else {
    function reversedNumber(number) {

      const stringNumber = String(number);
      const result = +stringNumber.split("").reverse().join("");
      
      return result;
    } 
  }

  const sum = number + reversedNumber(number);
  
  if (sum === reversedNumber(sum)) {
    const obj = {
      result: sum,
      step: counter,
    };   
    return obj;
  } 

  return palindrom(sum, counter + 1);
}

console.log(palindrom(23))



