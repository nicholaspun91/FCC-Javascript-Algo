function convertToRoman(num) {
    let thousands = Math.floor(num / 1000)
    let hundreds = Math.floor(num / 100) - (thousands * 10)
    let tens = Math.floor(num / 10) - (hundreds * 10) - (thousands * 100)
    let ones = num - (hundreds * 100) - (thousands * 1000) - (tens * 10)
  
    function fiveRom(digit, one, five, ten){
    switch (digit) {
      case 0:
      return '';
      case 1:
      return one;
      case 2:
      return one + one;
      case 3:
      return one + one + one;
      case 4:
      return  one + five;
      case 5:
      return  five;
      case 6:
      return  five + one;
      case 7:
      return five + one + one;
      case 8:
      return  five + one + one + one;
      case 9:
      return  one + ten;
    }
    }
    let millenium = 'M'
    let onedig = fiveRom(ones, 'I', 'V', 'X')
    let tendig = fiveRom(tens, 'X', 'L', 'C')
    let hundig = fiveRom(hundreds, 'C', 'D', 'M')
    let thodig = millenium.repeat(thousands)
   return thodig + hundig + tendig + onedig;
  }
  
  convertToRoman(1000);