
function getDivisorsCnt(n){
    let newArray = 0;
      for (let i = 1; i <= n; i++){
       if (n % i === 0){
           newArray++;
       }
     }
   
     return newArray;
     
   };
   console.log(getDivisorsCnt(4));
//    console.log(divisors(5));
//    console.log(divisors(12));
//    console.log(divisors(30));
//    console.log(divisors(13));



// function divisors(integer) {
//     let res = []
//     for (let i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//     return res.length ? res : integer + ' is prime'
//   };

//   console.log(divisors(15));
//   console.log(divisors(253));
//   console.log(divisors(25));
//   console.log(divisors(13));



  // function table(){
//   let result = [];
//   for (let i = 0; i <=10; i++){
//       result.push([]);
//         for (let j = 0; j <= 10; j++){
//             if (i > 0 && j > 0){
//                 result[i].push(i*j);
//             }
            
//         }
   
//   }
//   return result
// }
// console.log(table());



// function getCount(str) {
//     var vowelsCount = 0;
//     for(var i = 0; i < str.length; i++){
//       if(str[i] == 'a' || str[i] == 'i' || str[i] == 'o' ||str[i] == 'e' ||str[i] == 'u'){
//         vowelsCount += 1;
//       }
//     }
    
//     // enter your majic here
    
//     return vowelsCount;
//   }
  
//   console.log(getCount('abracadabra"'));