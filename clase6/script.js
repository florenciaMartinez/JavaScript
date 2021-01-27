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
        if (this.stock = 0) {
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
inventario.push(new Producto(02, "Remera", "Dubai", "Remera de algodon con vivo a tono", 3, "azul", 300, 20))
inventario.push(new Producto(03, "Buzo", "China", "Buzo con capucha y bolsillos", 4, "azul", 1000, 30))
inventario.push(new Producto(04, "Buzo", "Capri", "Buzo rustico basico cuello redondo", 2, "azul", 800, 10))
inventario.push(new Producto(05, "Buzo", "Numana", "Buzo de algodon escote v", 1, "azul", 500, 30))
inventario.push(new Producto(06, "Jean", "Roma", "Jean chupin elastizado", 3, "azul", 300, 40))
inventario.push(new Producto(07, "Jean", "Milan", "Jean rigido estilo mom", 5, "azul", 200, 50))
inventario.push(new Producto(08, "Remera", "Praga", "Remera escote v con tajos a los costados", 2, "azul", 100, 30))

let filtradoCategoria = inventario.filter((el) => el.categoria == "Buzo");

console.log("tenemos " + filtradoCategoria.length + " distintos tipos de buzos.")

console.log("Esta es la cantidad total de buzos que tenemos en stock " + filtradoCategoria.reduce((acc, el) => acc + el.stock, 0));


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
//pushear elementos en un array vacio
let carritoCompra = [];
carritoCompra.push(new ItemCompra(01, "Buzo", 10, 200))
carritoCompra.push(new ItemCompra(02, "Remera", 5, 1500))
carritoCompra.push(new ItemCompra(03, "Jean", 2, 1000))
carritoCompra.push(new ItemCompra(04, "Remera", 8, 600))
carritoCompra.push(new ItemCompra(05, "Jean", 11, 500))
carritoCompra.push(new ItemCompra(06, "Buzo", 9, 300))

console.log("Este es el total del carrito " + carritoCompra.reduce((acc, el) => acc + el.obtenerTotal(), 0));

let filtradoCarrito = carritoCompra.filter((el) => el.nombreProducto == "Remera");
console.log("Esta es la cantidad de remeras que se compraron " + filtradoCarrito.length);

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

//objeto con persona mas compra

function PersonaCarrito(usuario){
    this.usuario = usuario;
    this.carrito = [];
}

let personaCompra = new PersonaCarrito(usuario1);

function agregarAlCarrito(id, cantidad){
    let buscarProducto = inventario.find((el)=> el.id == id)
    let compra1 = new ItemCompra(buscarProducto.id, buscarProducto.nombre, cantidad,buscarProducto.precio)
    personaCompra.carrito.push(compra1)
}

agregarAlCarrito(1,3);
console.log(personaCompra);
console.log(personaCompra.carrito[0].obtenerTotal())






