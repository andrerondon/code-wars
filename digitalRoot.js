function digital_root(n) {
   let someOne = 0;
   let someTwo = 0;
   for(let varibleOne of n.toString()){
       someOne += parseInt(varibleOne);
   } 
   if(someOne.toString().length >= 2){
        for(let varibleOne of someOne.toString()){
            someTwo += parseInt(varibleOne);
        
        }
        return someTwo;
   }
   return someOne;
  }
console.log(digital_root(12348));



// recusion mode

// function digital_root(n){
//     n = eval(n.toString().split('').join('+'));

//     if (n > 9) {
//         return digital_root(n);
//     }

//     return n;
// }
// console.log(digital_root(12348));