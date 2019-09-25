/*var a = "hola mundo";
var b = 10.413;

console.log(a);

MiFuncion();
function MiFuncion{
    console.lof("llamada desde la funcion")
}

var objeto = {
    nombre: "alejandro",
    apellido: "hernandez"
}

console.log(objeto);*/


function palindroma(palabra){
    var isPalindrome = true;
    var original = palabra.split("")
    //console.log(original);
    var invertido = palabra.split("").reverse();
    //console.log(invertido);

    for(var i = 0; i<origin.length; i++){
        if(invertido[i] != palabra[i]){
            console.log("no es palindrome");
            isPalindrome = false;
            break;
        }
    }
    if(isPalindrome == true){
        console.log("si es palindrome")
    }
}

palindroma("ana")