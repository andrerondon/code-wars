function arrSum (arr, number){
    // let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] >= 5)
        arr[i] = arr[i] * number
        
    }

   return arr
}


console.log(arrSum([1,5,10, 5, 10, 20, 30, 50, 100, 1, 2, 3, 4, 4],2));