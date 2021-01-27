
//crear productos
function Producto(id, categoria, nombre, descripcion, talle, color, precio, stock) {
    this.id = id;
    this.categoria = categoria;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.talle = talle;
    this.color = color;
    this.precio = precio;
    this.stock = stock;

    this.getDescuento = function (descuento) {
       return this.precio - ((this.precio*descuento)/100)  
    }
    
    this.descontarStock = function (cantidad) {
        if (this.stock = 0){
            alert ("Este producto no tiene stock");
        } else if (cantidad <= this.stock ) {
            this.stock = this.stock - cantidad;
        }else{
            alert ("No tenemos esa cantidad quedan " + this.stock + " disponibles" )
        }
    }       
}

let producto1 = new Producto(01, prompt("ingrese la categoria del producto"), 1, "azul", 1500, 500);
console.log(producto1)

let producto2 = new Producto(02, prompt("ingrese la categoria del producto"), 36, "celeste", 3000, 100);
console.log(producto2)

console.log(producto1.getDescuento());

producto2.descontarStock(10);
console.log(producto2.stock)

//registarar personas
function Registrarse(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.ingresar = function () {
        return this.nombre + " usted ha ingresado a su cuenta";
    }
    this.getBeneficios = function () {
        return this.nombre + " ahora podes acceder a grandes beneficios";
    }
}

let persona1 = new Registrarse("Roberta", "Lopez", "robertalopez@gmail.com");
console.log(persona1);

let persona2 = new Registrarse("Clara", "Rodriguez", "claritaro@gmail.com");
console.log(persona2);

console.log(persona1.ingresar());

console.log(persona2.getBeneficios());

