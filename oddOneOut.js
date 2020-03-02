function oddOneOut(str) {
    let newArr = str.split("")
    let secArr = []
    for (let i = 0; i < newArr.length; i ++){
        if(secArr.includes(newArr[i])){
            secArr.push(newArr[i])
        }
       

    }
    return newArr
 }
 
console.log(oddOneOut("Jugraj"));
