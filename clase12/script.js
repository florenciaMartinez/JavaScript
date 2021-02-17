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
}

//para saber mi inventario y tomar datos de stock
let inventario = [];

inventario.push(new Producto(01, "almohadon", "Almohadón Tirreno", "almohadon natural con flecos en el medio", "imagenes/almohadonTirreno.jpg", 2, "Beige", 900, 10))
inventario.push(new Producto(02, "bolsoLona", "Bolso y Lona Ramona", "Bolso y lona rayados", "imagenes/bolsoBeige.jpg", 3, "Beige", 800, 10))
inventario.push(new Producto(03, "bolsoLona", "Bolso y Lona Amelie", " Bolso y lona rayados", "imagenes/bolsoLona.jpg", 4, "Gris", 950, 30))
inventario.push(new Producto(04, "manta", "Manta Panal", "Manta de wafle rustico color rosa", "imagenes/cuidados1.jpg", 2, "Rosa", 1000, 10))
inventario.push(new Producto(05, "mantel", "Mantel Nepal", "mantel estampado color beige", "imagenes/mantelNepal.jpg", 1, "Beige", 900, 30))
inventario.push(new Producto(06, "almohadon", "Almohadón Ramona", "almohadon rosa claro con un prelavado y arrugado", "imagenes/almohadonRamona.jpg", 3, "Rosa", 990, 40))



inventario.forEach((el) => {
    let section = document.getElementById('listaDeProd');
    let article = document.createElement('article')
    article.classList.add("imagenContenido", "catProd")
    article.setAttribute('category', el.categoria)
    article.innerHTML += `
                 <div class "imagenAnimacion">             
                      <img src=${el.imagen} alt="">
                 </div>
                <p>${el.nombre}</p>
                <p class="precioProducto">Precio: $${el.precio}</p>
                <div class = "textoImagenContenido">
                    <button class="boton-agregar">Agregar al carrito <i class="fas fa-shopping-cart"></i></button> 
                </div>
                    `
    section.appendChild(article)
})

$(document).ready(function(){
    $('.listadoCategorias .itemCategorias[category = "todos"]').addClass("seleccionCateorias")// esto es para ponerle un backgorund color a todos

    $('.itemCategorias').click(function(){
        let categoriaProd = $(this).attr("category")
        //para ponerle un formato cuando lo selecciono
        $('.itemCategorias').removeClass ("seleccionCateorias");
        $(this).addClass("seleccionCateorias") 

        //oculto todos los productos
        $(".catProd").hide() 

        //para mostrar los productos filtrados

        $(".catProd[category="+categoriaProd+"]").show() 
       
     })

        //para poder ver todos

        $(".itemCategorias[category ='todos']").click(function(){
            $(".catProd").show() 
        })
    })
