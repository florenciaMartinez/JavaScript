//registarar personas
function Usuario(id, nombre, apellido, email) {
    this.id = id;
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

let usuario1 = new Usuario(01, "Roberta", "Lopez", "robertalopez@gmail.com");
console.log(usuario1);

let usuario2 = new Usuario(02, "Clara", "Rodriguez", "claritaro@gmail.com");
console.log(usuario2);

//defino el objeto Producto
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
        return this.precio - ((this.precio * descuento) / 100)
    }

    this.descontarStock = function (cantidad) {
        if (this.stock == 0) {
            alert("Este producto no tiene stock");
        } else if (cantidad <= this.stock) {
            this.stock = this.stock - cantidad;
        } else {
            alert("No tenemos esa cantidad quedan " + this.stock + " disponibles")
        }
    }
}

//para saber mi stock
let inventario = [];

inventario.push(new Producto(01, "Remera", "India", "Remera MC, basica", 2, "azul", 200, 10))
inventario.push(new Producto(02, "Remera", "Dubai", "Remera de algodon con vivo a tono", 3, "azul", 300, 10))
inventario.push(new Producto(03, "Buzo", "China", "Buzo con capucha y bolsillos", 4, "azul", 1000, 30))
inventario.push(new Producto(04, "Buzo", "Capri", "Buzo rustico basico cuello redondo", 2, "azul", 800, 10))
inventario.push(new Producto(05, "Buzo", "Numana", "Buzo de algodon escote v", 1, "azul", 500, 30))
inventario.push(new Producto(06, "Jean", "Roma", "Jean chupin elastizado", 3, "azul", 300, 40))
inventario.push(new Producto(07, "Jean", "Milan", "Jean rigido estilo mom", 5, "azul", 200, 50))
inventario.push(new Producto(08, "Remera", "Praga", "Remera escote v con tajos a los costados", 2, "azul", 100, 30))



//objeto de compra
function ItemCompra(idProducto, nombreProducto, cantidad, precio) {
    this.idProducto = idProducto;
    this.nombreProducto = nombreProducto;
    this.cantidad = cantidad;
    this.precio = precio;

    this.obtenerTotal = function () {
        return this.cantidad * this.precio;
    }
}

//objeto con persona mas compra
function PersonaCarrito(usuario){
    this.usuario = usuario;
    this.carrito = [];
}

let personaCompra = new PersonaCarrito(usuario1);

function agregarAlCarrito(id, cantidad){
    let producto = inventario.find((el)=> el.id == id)
    if (cantidad > producto.stock){
        alert("No tenemos esa cantidad, ingresa una menor")
    }else{
    let compra1 = new ItemCompra(producto.id, producto.nombre, cantidad,producto.precio)
    personaCompra.carrito.push(compra1)
    }
}
// simulo una compra en base a un id y una cantidad
agregarAlCarrito(1,3);
console.log(personaCompra);
//busco el total del item, tomando p*q
console.log("Este es el total del item " + personaCompra.carrito[0].obtenerTotal())

//una vez que la compra es exitosa descuento del stock original
function actualizarStock(id, cantidad){
    let productoEncontrado = inventario.find((el)=> el.id == id)
    productoEncontrado.descontarStock(cantidad);
    console.log(productoEncontrado.stock)
} 

personaCompra.carrito.forEach((el) => actualizarStock(el.id, el.cantidad));


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
    return totalCarrito * interes;
}

console.log(calcularCuotas(3));

