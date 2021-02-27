
let inventario = []

$(document).ready(function (){
        $.get("inventario.json",
        function(data, status){
            // console.log(status)
          inventario = data 

          prodInventario(inventario)
          $('.listadoCategorias .itemCategorias[category = "todos"]').addClass("seleccionCateorias")

          $('.itemCategorias').click(function(){
              let categoriaProd = $(this).attr("category")
              $('.itemCategorias').removeClass ("seleccionCateorias");
              $(this).addClass("seleccionCateorias") 
      
              $(".catProd").hide() 
      
      
              $(".catProd[category="+categoriaProd+"]").show() 
             
           })
      
              $(".itemCategorias[category ='todos']").click(function(){
                  $(".catProd").show() 
              })
        
    })
})



function prodInventario(inventario){
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
  

})}

