// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// Os divisores de 42 são: 1, 2, 3, 6, 7, 14, 21, 42. Esses divisores ao quadrado são: 1, 4, 9, 36, 49, 196, 441, 1764. A soma dos divisores ao quadrado é 2500 que é 50 * 50, um quadrado!

// Dados dois inteiros m, n (1 <= m <= n), queremos encontrar todos os números inteiros entre m e n cuja soma dos divisores ao quadrado é um quadrado. 42 é esse número.

// O resultado será uma matriz de matrizes ou de tuplas (em C, uma matriz de Pair) ou uma string, cada sub-matriz tendo dois elementos, primeiro o número cujos divisores quadrados são quadrados e, em seguida, a soma dos divisores quadrados.

function listSquared(m, n) {
    // function divisors(n) {
    //     let results = []
    //     for (let i = 1; i <= n; i++) {
    //       if (n % i === 0) results.push(i)
    //     }
    //     return results
    // }
    let cache = {};
   
    
    for (i = m; i < n; i++){
        let arr = [];
        for (let k = 0; k <= i; k ++){
            if (i % k === 0){
                arr.push(i)
            }
        }
        // if (m > 1 && m > n ){
        //     return "m must be less them n and greather them 1"
        // }
    }
    cache[i]
    
}

console.log(listSquared(1, 42));

// function divisors(n) {
//     let results = []
//     for (let i = 1; i <= n; i++) {
//       if (n % i === 0) results.push(i)
//     }
//     return results
// }

//   console.log(divisors(42));
  


