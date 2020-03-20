// Format a string of names like 'Bart, Lisa & Maggie'.

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''



const names = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])


  function list(names){
    let array = []
    for (let key in names){
        array += key
    }

    for (let i = 0; i < array.length; i++){
        let key = array[i]
        array [i] = [key, names[key]]
    }
    // return array.sort()
    return array
}

console.log(list(names));