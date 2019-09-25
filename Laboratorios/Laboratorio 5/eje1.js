

function verificador(areglo){
    var numero = 0;
    var palabra = 0;
    for(var i = 0; i<areglo.length;i++){
        if(typeof(areglo[i]) == "string"){
        palabra++;
        }else {
            numero++
        }
                }               
                console.log(palabra);
                console.log(numero);
            }





var areglo = [1,1,"hola","pan","arroz"]
verificador(areglo);
