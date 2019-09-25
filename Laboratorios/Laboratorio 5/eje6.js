function ordenar(lista){
    for(var i= 0; i<lista.lenght;i++){
        for(var j=0; j<lista.lenght -1;j++){
            if(lista[j+1]<lista[j]){
                var aux = lista[j+1];
                lista[j+1] = lista[j];
                lista[j] = aux;
            }
        }
    }
    return lista;
}

console.log(ordenar([43242,1,54325,2,3]))