//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
var numero = parseInt(prompt ("Ingresa un número de las cifras que quieras"));

if (numero > 1000){
    alert("Tu número es mayor que 1000");
} 
else {
    alert("Tu número es menor o igual que 1000");
}
// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola
var saludo = prompt("Hola");

if(saludo == "Hola"){
    alert ("Hola, buen día")
}else{
    alert ("Chau")
}
//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
var verificarNumero = prompt ("Ingresa un numero");

if (verificarNumero > 10 && verificarNumero < 50){
    alert("Tu numero esta entre 10 y 50")
}else{
    alert("Tu numero es menor o igual a 10 y mayor o igual a 50")
}

//hago un ejemplo que tenga else if. pido edades, si es menos de 18 no puede consumir alcohol, si es mayor de 18 y hasta 65 puede reservar lugar, si es mayor de 65 es persona de riesgo no aconsejamos que salga.
var edad = parseInt(prompt("Ingresa tu edad en números"));

if (edad <= 17){
    alert("Sos menor de edad, no podes consumir alcohol")
}else if(edad >=18 && edad < 65){
    alert("podes consumir alcohol, te reservamos una mesa")
}else {
    alert("sos persona de riesgo, no te aconsejamos salir a tomar")
}

