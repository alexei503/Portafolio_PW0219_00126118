function cuantoshay(arreglo,valor){
    var j= 0;
    for(var i = 0; i< arreglo.length; i++){
        if(valor == arreglo[i]){
        j++
        }
    }
    console.log("la cantidad de numeros que hay son: " + j)
}

var arreglo = [1,1,1,2,2,2,2,3,3,4,4,4,4,5,5];
cuantoshay(arreglo,5);