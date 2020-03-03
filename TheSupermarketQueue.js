function queueTime(customers, n) {
    
    let secArr = [];
    for (let i = 0; i < customers.length; i++){
        secArr.push(customers[i])

    }
    return secArr
  }

console.log(queueTime([5,3,4], 1));
