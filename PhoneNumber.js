// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:



 
// function createPhoneNumber(numbers){
//     // let num = numbers.toString()
//     let newArr = [];
//     let newString = ""
//     newArr.push("(")
//     for (let i = 0; i < 3; i++){
//         newArr.push(numbers[i])
//     }
//     newArr.push(")")
//     newArr.push(" ")
//     for (let i = 3; i < 6; i++){
//         newArr.push(numbers[i])
//     }
//     newArr.push("-");
//     for (let i = 6; i < 10; i++){
//         newArr.push(numbers[i])
//     }
    
//     for (let i = 0; i < 14; i++){
//        newString += newArr[i]
//     }
    
//     return newString
// }


// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"



function createPhoneNumber(numbers){
    // let num = numbers.toString()
   
    let newArr = [];
    let newString = ""
    newArr.push("(")
    for (let i = 0; i < 3; i++){
        newArr.push(numbers[i])
    }
    newArr.push(")")
    newArr.push(" ")
    for (let i = 3; i < 6; i++){
        newArr.push(numbers[i])
    }
    newArr.push("-");
    for (let i = 6; i < 10; i++){
        newArr.push(numbers[i])
    }
    
    for (let i = 0; i < newArr.length; i++){
       newString += newArr[i]
    }
    
    return newString
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"