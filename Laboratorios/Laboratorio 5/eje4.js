var lista = [];


for(var i = 0; i<20; i++){

    J = (Math.floor(Math.random()*100)+1);
    lista.push(J);

}

function loteria(lista,numero){
    var confirm = true;
    for(var n=0; n<lista.length;n++){
        if(numero == lista[n]){
            console.log("ganaste");
            confirm = false;
            break;
        }
    }
    if(confirm) console.log("perdiste");
}

loteria(lista,50)