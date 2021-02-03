//defino el objeto Producto
function Producto(id, categoria, nombre, descripcion, imagen, talle, color, precio, stock) {
    this.id = id;
    this.categoria = categoria;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
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

//para saber mi inventario y tomar datos de stock
let inventario = [];

inventario.push(new Producto(01, "Almohadón", "Almohadón Tirreno", "Almohadon natural con flecos en el medio", "imagenes/almohadonTirreno.jpg" , 2, "Beige", 900, 10))
inventario.push(new Producto(02,"Almohadón", "Almohadón Persa", "Almohadon estampado azul con natural","imagenes/almohadonPersa.jpg" , 3, "Azul", 800, 10))
inventario.push(new Producto(03, "Almohadón", "Almohadón Amelie", "Almohadon rosa claro","imagenes/almohadonAmelie.jpg" , 4, "Rosa", 950, 30))
inventario.push(new Producto(04, "Almohadón", "Almohadón Marruecos", "Almohadon natural con flecos en el medio y vivo en beige","imagenes/almoadonMarruecos.jpg" , 2, "Natural", 1000, 10))
inventario.push(new Producto(05, "Almohadón", "Almohadón Persa", "Almohadon estampado gris con natural", "imagenes/almohadonBuda.jpg" , 1, "Gris", 900, 30))
inventario.push(new Producto(06, "Almohadón", "Almohadón Ramona", "Almohadon rosa claro con un prelavado y arrugado","imagenes/almohadonRamona.jpg" , 3, "Rosa", 990, 40))


inventario.forEach((el) =>{
    let padre = document.getElementById('ListaDeProd');

    let nodoArt = document.createElement('article');
    nodoArt.classList.add('ImagenContenido');

    padre.appendChild(nodoArt)

    let nodoDiv = document.createElement('div');
    nodoDiv.classList.add('imagenAnimacion');

    nodoArt.appendChild(nodoDiv)

    let nodoImagen = document.createElement('img');
    nodoImagen.setAttribute('src', el.imagen);

    nodoDiv.appendChild(nodoImagen)


    let nodoNombre = document.createElement('p');
    nodoNombre.textContent = el.nombre;

    nodoArt.appendChild(nodoNombre)
    
    let nodoPrecio = document.createElement('p');
    nodoPrecio.textContent ="Precio $ " + el.precio;

    nodoArt.appendChild(nodoPrecio)

    let nodoDiv2 = document.createElement('div');
    nodoDiv2.classList.add('textoImagenContenido');

    nodoArt.appendChild(nodoDiv2)
    
    let nodoIcono = document.createElement('i');
    nodoIcono.classList.add('fas', 'fa-shopping-cart');

    nodoDiv2.appendChild(nodoIcono)

    let nodoBoton = document.createElement('button');
    nodoBoton.textContent = "Agregar al Carrito";

    nodoDiv2.appendChild(nodoBoton)
} );