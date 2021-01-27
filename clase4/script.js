//simuando el total de una compra
let total= 0;

function acumularVenta (cantidad, precio){
    total = total + cantidad*precio;
}

//simulador de cuotas con interes
function calcularCuotas(cuotas) {
    let interes;
    switch (cuotas) {
        case 1:
            interes = 1;
            break;
        case 3:
            interes = 1.20;
            break;
        case 6:
            interes = 1.40;
            break;
        case 12:
            interes = 1.50;
            break;
        default:
            return "No operamos con esa cantidad de cuotas, ingrese 1,3,6 o 12";
    }
    return total * interes;
}

let cantidad = parseInt(prompt("Este producto sale $200, que cantidad queres?"));

if (cantidad == 0){
    alert("Te esperamos pronto")
}else{
acumularVenta(cantidad,200);
let cuotas = parseInt(prompt("Su total es de " + total + " En cuantas cuotas queres abonar? 1, 3 6 o 12?"));
let totalInteres= calcularCuotas(cuotas);
    if (totalInteres == "No operamos con esa cantidad de cuotas, ingrese 1,3,6 o 12"){
        alert("Ingresa una cantidad de cuotas valida. 1,3,6 o 12")
    }else {
        alert("En " +  cuotas + " cuotas. Tu total final es " + totalInteres);
    }
}    
