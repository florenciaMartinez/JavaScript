//defino el objeto Producto
function Producto(id, categoria, nombre, descripcion, imagen, color, precio, stock) {
    this.id = id;
    this.categoria = categoria;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.color = color;
    this.precio = precio;
    this.stock = stock;

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

function ItemCompra(idProducto, nombreProducto, cantidad, precio, img) {
    this.idProducto = idProducto;
    this.nombre = nombreProducto;
    this.cantidad = cantidad;
    this.precio = precio;
    this.imagen = img

    this.obtenerTotal = function () {
        return this.cantidad * this.precio;
    }
}

//para saber mi inventario y tomar datos de stock
let inventario = [];

inventario.push(new Producto(01, "almohadon", "Almohadón Tirreno", "almohadon natural con flecos en el medio", "imagenes/almohadonTirreno.jpg", "Beige", 900, 10))
inventario.push(new Producto(02, "bolsoLona", "Bolso y Lona Ramona", "Bolso y lona rayados", "imagenes/bolsoBeige.jpg", "Beige", 800, 10))
inventario.push(new Producto(03, "bolsoLona", "Bolso y Lona Amelie", " Bolso y lona rayados", "imagenes/bolsoLona.jpg", "Gris", 950, 30))
inventario.push(new Producto(04, "manta", "Manta Panal", "Manta de wafle rustico color rosa", "imagenes/cuidados1.jpg", "Rosa", 1000, 10))
inventario.push(new Producto(05, "mantel", "Mantel Nepal", "mantel estampado color beige", "imagenes/mantelNepal.jpg", "Beige", 900, 30))
inventario.push(new Producto(06, "almohadon", "Almohadón Ramona", "almohadon rosa claro con un prelavado y arrugado", "imagenes/almohadonRamona.jpg", "Rosa", 990, 40))

prodInventario(inventario)

function prodInventario(inventario) {
    inventario.forEach((el) => {
        let section = document.getElementById('listaDeProd');
        let article = document.createElement('article')
        article.classList.add("imagenContenido", "catProd")
        article.setAttribute('category', el.categoria)
        article.innerHTML += `
                 <div class "imagenAnimacion">             
                      <img src=${el.imagen} alt="${el.descripcion}">
                 </div>
                <p>${el.nombre}</p>
                <p class="precioProducto">Precio: $${el.precio}</p>
                <button id="boton${el.id}" class="boton-agregar">Agregar al carrito <i class="fas fa-shopping-cart"></i></button> 
                    `
        section.appendChild(article)
        let boton = document.getElementById(`boton${el.id}`)

        boton.addEventListener('click', () => {
            agregarAlCarrito(el.id)
        })
    })
}

let carrito = [];
let contenedorCarrito = document.getElementById("carrito-contenedor")
let contadorCarrito = document.getElementById("contadorCarrito")
let precioTotal = document.getElementById("precioTotal")

carritoAbandonado()

function agregarAlCarrito(id, cantidad) {

    let productoAgregar = inventario.filter((el) => el.id == id)[0]
    
    let prodExistente = carrito.find(el => el.idProducto == productoAgregar.id)
    // console.log(prodExistente)

    if (prodExistente) {
        
        let id = prodExistente.idProducto
        prodExistente.cantidad = parseInt(prodExistente.cantidad)  + 1
        $("#cantidad-" + id).val(prodExistente.cantidad)
        $("#subtotal-" + id).val(prodExistente.obtenerTotal())


    } else {
        let cant = cantidad ? cantidad : 1;

        let itemCompra = new ItemCompra(productoAgregar.id, productoAgregar.nombre, cant, productoAgregar.precio, productoAgregar.imagen);

        carrito.push(itemCompra)
        localStorage.setItem("carrito", JSON.stringify(carrito))

        actualizarCarrito()
        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")
        div.innerHTML = `
        <img class="imgCarrito"src=${itemCompra.imagen}>
        <p>${itemCompra.nombre}</p>
        <p> Precio : <input id="precio-${itemCompra.idProducto}" class="precio" value="${itemCompra.precio}" disabled> </p>
        <div> <p> Cantiad: <input type="number" min=1 id="cantidad-${itemCompra.idProducto}" class="cantidad" value=${itemCompra.cantidad}></p>
         <p id = "error-${itemCompra.idProducto}"> </p>
        </div>
         <p > Subtotal Producto <input id="subtotal-${itemCompra.idProducto}" class="subtotal" value=${itemCompra.obtenerTotal()}> </input></p>
        <button id="eliminar${itemCompra.idProducto}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        let botonEliminar = document.getElementById(`eliminar${itemCompra.idProducto}`)
        botonEliminar.addEventListener('click', () => {
            botonEliminar.parentElement.remove()

            carrito = carrito.filter((el) => el.idProducto != itemCompra.idProducto)
            localStorage.setItem("carrito", JSON.stringify(carrito))

            actualizarCarrito()
        })
    }
}

function carritoAbandonado() {
    let carritoAbandonado = JSON.parse(localStorage.getItem("carrito"));
    if (carritoAbandonado) {
        carritoAbandonado.forEach((el) => {
            agregarAlCarrito(el.idProducto, el.cantidad)
        })
    }
}

function subtotalCarrito(e) {
    let id = e.target.id.split('-')[1];
    let cantidad = $("#cantidad-" + id).val();

    carrito.find(el => el.idProducto == id).cantidad = cantidad;
    localStorage.setItem("carrito", JSON.stringify(carrito));

    if (cantidad > 0) {
        let precio = $("#precio-" + id).val()
        console.log(precio)

        let subtotal = precio * parseInt(cantidad)
        $("#subtotal-" + id).val(subtotal)
        actualizarCarrito();
        console.log(subtotal)
    } else {
        $("#error-"+id ).html("debe ingresar una cantidad mayor a 0")
    }
}


$(".cantidad").change(function (e) {
    subtotalCarrito(e)
    let id = e.target.id.split('-')[1];
    let cantidad = $("#cantidad-" + id).val();
    if (cantidad >0){
    $("#error-"+id ).html(" ")

    }
    else{
        $("#subtotal-" + id).val(0)
    }
})

let subtotal = $("#subtotal").val()


function actualizarCarrito() {
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, el) => acc + el.obtenerTotal(), 0)

}
//filtrar productos por categorias 
$(document).ready(function () {
    $('.listadoCategorias .itemCategorias[category = "todos"]').addClass("seleccionCateorias")// esto es para ponerle un backgorund-color a todos

    $('.itemCategorias').click(function () {
        let categoriaProd = $(this).attr("category")
        //para ponerle un formato cuando lo selecciono
        $('.itemCategorias').removeClass("seleccionCateorias");
        $(this).addClass("seleccionCateorias")

        //oculto todos los productos
        $(".catProd").fadeOut()
        //para mostrar los productos filtrados
        $(".catProd[category=" + categoriaProd + "]").fadeIn()

    })
    //para poder ver todos
    $(".itemCategorias[category ='todos']").click(function () {
        $(".catProd").fadeIn()
    })
})

