// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically.


// const hash = {name: 'Jeremy', age: 24, role: 'Software Engineer'}

// function convertHashToArray(hash){
//     let array = []
//     for (let key in hash){
//         array.push(key)
//     }

//     for (let i = 0; i < array.length; i++){
//         let key = array[i]
//         array [i] = [key, hash[key]]
//     }
//     return array.sort()
// }

// console.log(convertHashToArray(hash));


///// uma forma + resumida

// function convertHashToArray(hash){
//     let result = [];
//     Object.keys(hash).sort().map(item => result.push([item,hash[item]]));
//     return result;
//   }



const hash = {name: 'Jeremy', age: 24, role: 'Software Engineer'}

function convertHashToArray(hash){
    let array = []
    for (let key = 0; key < hash;){
        array.push(key)
    }

    for (let i = 0; i < array.length; i++){
        let key = array[i]
        array [i] = [key, hash[key]]
    }
    return array.sort()
}

console.log(convertHashToArray(hash));