var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if(count < 0){
        return `${count}`< 0;
      }
      let sum = 0
      for (let i = 0; i <= count; i ++){
        sum += i;
       
      }
      return sum;
    
    };
  
    return SequenceSum;
  
  })();


 console.log(SequenceSum.showSequence(6))

 
  

//  Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21