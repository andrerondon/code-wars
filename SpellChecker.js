// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// For example:

// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].

function grabscrab(anagram, dictionary) {
    let toFind = anagram.split('').sort().join();
    let arr = [];
    for (let i of dictionary) {
      if (i.split('').sort().join()===toFind) {
        arr.push(i)
      }
    }
    return arr;
}

console.log(grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] ));
