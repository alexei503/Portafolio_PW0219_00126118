
function palindroma(palabra){
    var isPalindrome = true;
    var original = palabra.split("")

    var invertido = palabra.split("").reverse();

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