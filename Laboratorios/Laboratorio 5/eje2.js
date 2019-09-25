
function Suma(listNumbers){
    var j= 0;
    for(var i = 0; i< listNumbers.length; i++){
        j += listNumbers[i];
    }
    console.log("la sumatoria es: " + j);
    console.log("y el valor promedio es: " + j/listNumbers.length)
}

var listNumbers = [1,2,3,4,5,6];

Suma(listNumbers);