function convertToRoman(num) {
  	// const obj = {
   //    0:['M',1000], 
   //    1:['D', 500], 
   //    2:['C', 100], 
   //    3:['L', 50], 
   //    4:['X', 10], 
   //    5:['V', 5], 
   //    6:['I', 1]
   //  };
 const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];
  
  let romanNumeral = '';
  
  for (const numeral of romanNumerals) {
    while (num >= numeral.value) {
      romanNumeral += numeral.symbol;
      num -= numeral.value;
    }
  }
  
  return romanNumeral;
  //your code here
	

}
document.getElementById("test").innerText=(convertToRoman(100));
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman








// function toRoman(num) {
//   const romanNumerals = [
//     { value: 1000, symbol: 'M' },
//     { value: 900, symbol: 'CM' },
//     { value: 500, symbol: 'D' },
//     { value: 400, symbol: 'CD' },
//     { value: 100, symbol: 'C' },
//     { value: 90, symbol: 'XC' },
//     { value: 50, symbol: 'L' },
//     { value: 40, symbol: 'XL' },
//     { value: 10, symbol: 'X' },
//     { value: 9, symbol: 'IX' },
//     { value: 5, symbol: 'V' },
//     { value: 4, symbol: 'IV' },
//     { value: 1, symbol: 'I' }
//   ];
  
//   let romanNumeral = '';
  
//   for (const numeral of romanNumerals) {
//     while (num >= numeral.value) {
//       romanNumeral += numeral.symbol;
//       num -= numeral.value;
//     }
//   }
  
//   return romanNumeral;
// }

