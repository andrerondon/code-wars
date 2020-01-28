function table(){
  let result = [];
  for (let i = 0; i <=10; i++){
      result.push([]);
        for (let j = 0; j <= 10; j++){
            if (i > 0 && j > 0){
                result[i].push(i*j);
            }
            
        }
   
  }
  return result
}
console.log(table());


