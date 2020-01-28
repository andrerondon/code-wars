// the parameter "number" coming into this func is the type of number;
function balancedNum(number) {
    const numberString = number.toString();
    const left = getLeftSide(numberString);
    const right = getRightSide(numberString);
    if (sumNumbers(left) === sumNumbers(right)) {
      return 'Balanced'
    } else {
      return 'Not Balanced'
    }
  }
  
  function getLeftSide(number) {
    let str;
    if (number.length % 2 === 0) {
      str = number.slice(0, (number.length / 2) - 1);
    } else {
      str = number.slice(0, number.length / 2)
    }
    return str;
  }
  
  function getRightSide(number) {
    let str;
    str = number.slice((number.length / 2) + 1); // it possible that number.length / 2 is a decimal number but Number.slice() will round ever decimal down to a whole number
    return str;
  }
  
  function sumNumbers(number) {
    let sum = 0;
    for (let n of number) {
      sum += parseInt(n);
    }
    return sum;
  }
    
  console.log(balancedNum(56239814),"Balanced");
  console.log(balancedNum(959), "Balanced");
  console.log(balancedNum(123), "Not Balanced");
  console.log(balancedNum(12), "Balanced");
  console.log(balancedNum(1), "Balanced");
  console.log(balancedNum(44443), "Not Balanced");