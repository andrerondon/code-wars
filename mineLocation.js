function mineLocation(field){
    let secondIndex = []
    for (let i = 0; i < field.length; i++){
        secondIndex.push(field[i])
        for (let k = 0; k < secondIndex.length; k++){
            if(k === 1){
                return k[i]
            }
        }
    }
    return secondIndex
}
console.log(mineLocation([1, 0, 0], [0, 0, 0], [0, 0, 0]))

// function mineLocation(field){
//     for (let i = 0; i < field.length; i++){
//         if(i === 1){
//         return field[i]
              
//         }
//     }
// }
// console.log(mineLocation([0, 0, 1], [0, 0, 0], [0, 0, 1]))