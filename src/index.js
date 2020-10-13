module.exports = function toReadable (number) {
    let a = number % 100;
 
  let numbers = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
  }
  if (number === 0) {
      return 'zero';
  } else if (number < 20) {
      return numbers[number];
  } else if (number >= 20 && number < 100) {
      return ( `${numbers[number - number % 10]} ${numbers[number % 10]}` ).trim();
  } else if (number >= 100 && number < 1000) { 
      if (a > 20) { 
        return ( `${numbers[Math.floor(number / 100)]} hundred ${numbers[Math.floor(a / 10)*10]} ${numbers[a - Math.floor(a / 10)*10]}` ).trim();
      } else { 
        return ( `${numbers[Math.floor(number / 100)]} hundred ${numbers[a]}` ).trim();
      }
  }
}
