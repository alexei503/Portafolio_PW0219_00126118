var Nuevo = 0;
var Viejo = 0;
var Fibo=[];

for(i=0; i<10; i++){
if(Nuevo == 0){
Nuevo= Nuevo +1;
Fibo.push(Viejo)

}
if(Nuevo == 1 ){
Fibo.push(Nuevo);
Fibo.push(Nuevo);
Nuevo=Nuevo+Nuevo;
Viejo=Nuevo-1;
}

if(Nuevo>=2){
Nuevo= Nuevo+ Viejo;
Viejo = Nuevo-Viejo;
Fibo.push(Nuevo)
}




}
console.log(Fibo)