function calcularVetor(vetor, numero){
    // let newArr = [];
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 5)
        vetor[i] = vetor[i] * numero 
        
    }

   return vetor
}


console.log(calcularVetor([1,5,10],2));
