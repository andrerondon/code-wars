
function prefill(n, v) {
    let array = []
    if(n === 0 || n === '0'){
        return array
    }
  
    if(!parseInt(n) || n < 0 ){
  
      let typeError = new TypeError();
      typeError.name = "TypeError";
      typeError.message =  n + " is invalid";
      throw typeError
    };
  
    return new Array(n).fill(v); 
  }



  

// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError