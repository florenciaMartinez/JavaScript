//Componentes
const IndexComponent = {
    render: () => {
        return `
        <main>
		<h1 class="titulosPrincipales"> Somos Creta Home</h1>
		<h3 class="subtitulo">Productos unicos para decorar tus espacios</h3>
       
		<section id="demo" class=" justify-content-between carousel slide row carouselMaxSize " data-ride="carousel">
			<!-- Indicators -->
			<div class="col-md-12 col-sm-12 ">
				<ul class="carousel-indicators">
					<li data-target="#demo" data-slide-to="0" class="active"></li>
					<li data-target="#demo" data-slide-to="1"></li>
					<li data-target="#demo" data-slide-to="2"></li>
				</ul>
				<!-- The slideshow -->
				<section class="carousel-inner">
					<article class="carousel-item active imagenesCarousel">
						<img src="imagenes/car1.png" alt="chica acostada entre varios almohadones">
					</article>
					<article class="carousel-item imagenesCarousel">
						<img src="imagenes/car2.png" alt="cama con pie de cama">
					</article>
					<article class="carousel-item imagenesCarousel">
						<img src="imagenes/car3.png">
					</article>
				</section>
				<!-- Left and right controls -->
				<a class="carousel-control-prev" href="#demo" data-slide="prev">
					<span class="carousel-control-prev-icon"></span>
				</a>
				<a class="carousel-control-next" href="#demo" data-slide="next">
					<span class="carousel-control-next-icon"></span>
				</a>
			</div>
		</section>
		<section id="demo" class=" justify-content-center carousel slide row carouselMinSize " data-ride="carousel">
			<!-- Indicators -->
			<div class="col-md-6 col-sm-12 carouselMinSize">
				<ul class="carousel-indicators">
					<li data-target="#demo" data-slide-to="0" class="active"></li>
					<li data-target="#demo" data-slide-to="1"></li>
					<li data-target="#demo" data-slide-to="2"></li>
				</ul>
				<!-- The slideshow -->
				<section class="carousel-inner">
					<article class="carousel-item active imagenesCarousel">
						<img src="imagenes/imagenHome.png" alt="chica acostada entre varios almohadones">
					</article>
					<article class="carousel-item imagenesCarousel">
						<img src="imagenes/carrousel2.jpg" alt="Chicago">
					</article>
					<article class="carousel-item imagenesCarousel">
						<img src="imagenes/carrousel3.jpg">
					</article>
				</section>
				<!-- Left and right controls -->
				<a class="carousel-control-prev" href="#demo" data-slide="prev">
					<span class="carousel-control-prev-icon"></span>
				</a>
				<a class="carousel-control-next" href="#demo" data-slide="next">
					<span class="carousel-control-next-icon"></span>
				</a>
			</div>
		</section>
		<section class="card-columns ubicacionBanners container-fluid">
            <div class="row">
                <article class="card estiloBanners link-background col-md-4">
                    <div class="card-body text-center">
                        <a class="card-text left">3 cuotas in interés</a>
                    </div>
                </article>
                <article class="card estiloBanners link-background col-md-4">
                    <div class="card-body text-center">
                        <a class="card-text left">15 % de descuento en efectivo</a>
                    </div>
                </article>
                <article class="card estiloBanners link-background col-md-4">
                    <div class="card-body text-center">
                        <a class="card-text left">Envíos a todo el país</a>
                    </div>
                </article>
            </div>
		</section>
		<section class="seccionProdDestacados">
			<h4 class="titulosProductosDestacados">Productos Destacados</h4>
			<div class="row row-cols-1 row-cols-md-4 animate__backInLeft ubicacionCards">
				<article class="col mb-4 col-12 contenedorCards">
					<div class="card tamanioCardsIndex">
						<img src="imagenes/card1.png" class="card-img-top" alt="Ramo fucsia de flores secas">
						<div class="card-body">
							<h5 class="card-title">Ramo Flores Secas</h5>
							<p class="card-text">Ideales para decorar tus espacios</p>
						</div>
					</div>
				</article>
				<article class="col mb-4 col-12 contenedorCards ">
					<div class="card tamanioCardsIndex">
						<img src="imagenes/card2.png" class="card-img-top"
							alt="imagen de una cama, con almohadones y manta">
						<div class="card-body">
							<h5 class="card-title">Manta y almohadones</h5>
							<p class="card-text">La combinacion perfecta para tu habitación o sillón</p>
						</div>
					</div>
				</article>
				<article class="col mb-4 col-12 contenedorCards">
					<div class="card tamanioCardsIndex">
						<img src="imagenes/card4.png" class="card-img-top"
							alt="imagen de cama, con pie de cama en tela de gasa y almohadones en panal rustico">
						<div class="card-body">
							<h5 class="card-title">Bolso y Lonita</h5>
							<p class="card-text">Para disfrutar al aire libre de todos tus momento</p>
						</div>
					</div>
				</article>
				<article class="col mb-4 contenedorCards">
					<div class="card tamanioCardsIndex">
						<img src="imagenes/card3.png" class="card-img-top"
							alt="Bolso y lonita a rayas en color gris y blanco">
						<div class="card-body">
							<h5 class="card-title">Manta en Gasa y almohadones </h5>
							<p class="card-text">La compinacion perfecta de texturas</p>
						</div>
					</div>
				</article>
			</div>
		</section>
		<div class="btn-whatsapp">
			<a href="https://api.whatsapp.com/send?phone=541162489798" target="_blank">
				<img src="http://s2.accesoperu.com/logos/btn_whatsapp.png"
					alt="boton de whatsapp con acceso directo a enviar mensajes">
			</a>
		</div>
	</main>
        `
    },
    postRender: () => { }
}


const ProductosComponent = {
    render: () => {
        return `
<main>
        <section>
        <h2 class="titulosFondo"> PRODUCTOS </h2>
    </section>

    <div class="grillaProductos">
        <section class="seccionPrincipal">
            <section>
                <h3 class="titulosPrincipales">PRODUCTOS </h3>
            </section>
            <section class="seccionImagenes" id="listaDeProd">
            </section>
        </section>
        <aside class="categoriasAside">
            <h3 class="tituloSecundarioCategorias">Categorías</h3>
            <section class="formatoCategorias listadoCategorias">
                <button class="itemCategorias" category="todos">Todos</button>
                <button class="itemCategorias" category="almohadon">Almohadón</button>
                <button class="itemCategorias" category="manta">Mantas</button>
                <button class="itemCategorias" category="bolsoLona">Bolsos y Lonas</button>
                <button class="itemCategorias" category="mantel">Mantel</button>
            </section>
        </aside>
 
        <div class="btn-whatsapp">
            <a href="https://api.whatsapp.com/send?phone=541162489798" target="_blank">
                <img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="">
            </a>
        </div>
    </div>
</main>

        `
    },

    postRender: () => {

        prodInventario(inventario)

        function prodInventario(inventario) {
            inventario.forEach((el) => {
                let section = document.getElementById('listaDeProd');
                let article = document.createElement('article')
                article.classList.add("imagenContenido", "catProd")
                article.setAttribute('category', el.categoria)
                article.innerHTML += `
                 <div class = "imagenAnimacion">             
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
    }

}


const NosotrosComponent = {
    render: () => {
        return `
          
        <main>
		<h2 class="titulosFondo"> NOSOTROS </h2>
		<div class="container-fluid animate__backInDown nosotrosSize">
			<div class="row d-flex justify-content-around flex-row ">
				<section class="col-md-6 col-12">
					<p class="textoPrincipalNosotros"> Soy Flor. Estudié y me recibí, trabajé en relación de dependencia
						y <strong>muchos años decidí emprender</strong>.
						Este año tuve que cerrar uno de mis grandes proyectos, ese al que le dediqué todo y más! Días
						enteros pensando cómo hacer para que crezca, sorteando obstáculos y aprendiendo en el camino! Y
						junto con eso nacieron <strong> nuevos proyectos!</strong>
						<br>
						<br>
						Me considero una persona inquieta y eso me lleva a hacer
						más cosas en el día de las que me deberían entrar en el tiempo que estoy despierta!
						Así que hace unos meses lancé <strong>CRETA HOME </strong>  junto con mi amigo El Colo, que es diseñador y se
						encarga
						de hacer los modelos más hermosos!
						Quiero contarles que detrás de cada producto estamos nosotros! Que <strong>todos los detalles están
						pensados</strong>
						y que lo hacemos con mucho amor para que les guste y nos permitan ser parte de algún rincón de
						sus
						hogares!
						<br>
						<br>
						Cómo sabrán <strong> todo es a pulmón!</strong> El Colo se encarga de pensar y ejecutar los modelos, y yo de todo
						el
						resto! Sí, de buscar los materiales, planificar las redes, llevar adelante la contabilidad,
						preparar
						las bolsas y cajas, hacer entregas y envíos, realizar asesoramientos individuales! <strong>El emprender
						implica convertirte en muchas cosas!</strong> Pero sobre todo a mí me enseñó a resolver y saber que no
						tenemos techo para aprender! Hay cosas que no pueden esperar!!
						<br>
						<br>
						Así me declaro: inquieta - "desde la la panza", cuenta mi mamá - intensa y a toda máquina
						siempre!
						No voy a parar ahora! Cueste lo que cueste, como dice mi nonna:<strong> "sempre avanti!"</strong>.
						<br>
						<br>

						Nunca nadie me regaló nada, y aprendí que todas las cosas se consiguen trabajando duro y
						poniéndose
						metas! Las decisiones no son simples y emprender no es sencillo, pero si te lo proponés y hacés
						todo
						y más para conseguirlo,<strong> podés llegar hasta donde soñaste!</strong>
					</p>
					<p class="graciasNosotros">
						GRACIAS!!!
					</p>
				</section >
				<section class="imagenNosotros col-md-6 col-12">
					<img src="imagenes/nosotros.jpg"
						alt="Imagen de una persona sacando una foto a mantas y almohadones">
				</section>
			</div>
		</div>
		<div class="container-fluid animate__backInDown nosotrosTablet">
			<div class="row d-flex justify-content-around flex-row ">
				<section class="col-md-12 ">
					<p class="textoPrincipalNosotros"> Soy Flor. Estudié y me recibí, trabajé en relación de dependencia
						y <strong>muchos años decidí emprender</strong>.
						Este año tuve que cerrar uno de mis grandes proyectos, ese al que le dediqué todo y más! Días
						enteros pensando cómo hacer para que crezca, sorteando obstáculos y aprendiendo en el camino! Y
						junto con eso nacieron <strong> nuevos proyectos!</strong>
						<br>
						<br>
						Me considero una persona inquieta y eso me lleva a hacer
						más cosas en el día de las que me deberían entrar en el tiempo que estoy despierta!
						Así que hace unos meses lancé <strong>CRETA HOME </strong>  junto con mi amigo El Colo, que es diseñador y se
						encarga
						de hacer los modelos más hermosos!
						Quiero contarles que detrás de cada producto estamos nosotros! Que <strong>todos los detalles están
						pensados</strong>
						y que lo hacemos con mucho amor para que les guste y nos permitan ser parte de algún rincón de
						sus
						hogares!
						<br>
						<br>
						Cómo sabrán <strong> todo es a pulmón!</strong> El Colo se encarga de pensar y ejecutar los modelos, y yo de todo
						el
						resto! Sí, de buscar los materiales, planificar las redes, llevar adelante la contabilidad,
						preparar
						las bolsas y cajas, hacer entregas y envíos, realizar asesoramientos individuales! <strong>El emprender
						implica convertirte en muchas cosas!</strong> Pero sobre todo a mí me enseñó a resolver y saber que no
						tenemos techo para aprender! Hay cosas que no pueden esperar!!
						<br>
						<br>
						Así me declaro: inquieta - "desde la la panza", cuenta mi mamá - intensa y a toda máquina
						siempre!
						No voy a parar ahora! Cueste lo que cueste, como dice mi nonna:<strong> "sempre avanti!"</strong>.
						<br>
						<br>

						Nunca nadie me regaló nada, y aprendí que todas las cosas se consiguen trabajando duro y
						poniéndose
						metas! Las decisiones no son simples y emprender no es sencillo, pero si te lo proponés y hacés
						todo
						y más para conseguirlo,<strong> podés llegar hasta donde soñaste!</strong>
					</p>
					<p class="graciasNosotros">
						GRACIAS!!!
					</p>
				</section >
				<section class="imagenNosotros col-md-12">
					<img src="imagenes/nosotros.jpg"
						alt="Imagen de una persona sacando una foto a mantas y almohadones">
				</section>
			</div>
		</div>
		<div class="btn-whatsapp">
			<a href="https://api.whatsapp.com/send?phone=541162489798" target="_blank">
			<img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="">
			</a>
		</div>
	</main>

        `
    },
    postRender: () => { }
}

const PreguntasComponent = {
    render: () => {
        return `
        <main>
        <section>
			<h2 class="titulosFondo"> PREGUNTAS FRECUENTES </h2>
		</section>
        <section class="accordion" id="accordionExample">
            <article class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button estiloAcordion" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Métodos de pago
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show " aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body cuerpoAcordion">
                        <strong>Podes abonar tus compras de varias formas</strong>
                        <ul>
                            <li>En efectivo con un 15 % de descuento, solo para lugares en los que entregamos nosotros.
                                (Quilmes, Fcio Varela y Berazategui)</li>
                            <li>Por transferencia bancaria con un 10% de descuento</li>
                            <li>Por mercado pago con debito o credito</li>
                            <li>Por mobbex solicitando tu link de pago </li>
                        </ul>
                    </div>
                </div>
            </article>
            <article class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed estiloAcordion" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Zonas de envíos en 24 hs
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body cuerpoAcordion">
                        <strong>Este tipo de envíos es solo por mensajeria privada y la realizamos en las siguientes
                            zonas</strong>
                        <ul>
                            <li>Gra Sur, costo de envío $300</li>
                            <li>Caba, costo de envío $600</li>
                            <li>La Plata, costo de envio $800</li>
                        </ul>
                        <samp>Tene en cuenta que estos envios son solo para productos que se puedan llevar en
                            moto</samp>
                    </div>
                </div>
            </article>
            <article class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed estiloAcordion" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Formas de envío
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body cuerpoAcordion">
                        <strong>Podes seleccionar la opción que prefieras una vez finalizada tu compra.</strong>
                        <ul>
                            <li>Moto o mensajería privada, con la que trabajamos habitualmente</li>
                            <li>Correo Argentino</li>
                            <li>Oca</li>
                            <li>Podes enviar vos un Beat o la mensajeria que prefieras a nuestro depósito</li>
                        </ul>
                        <p>Es importante que sepas que en caso que el producto no llegue en condiciones adecuadas solo
                            nos haremos cargo en las mensajerias con las que trabajamos de forma habitual</p>
                    </div>
                </div>
            </article>
            <article class="accordion-item">
                 <h2 class="accordion-header"         id="headingFour">
                     <button class="accordion-button collapsed estiloAcordion" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Que pasa si mi producto no llega en buen estado
                     </button>
                 </h2>
                <div id="collapseFour"         class="accordion-collapse collapse"     aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample">
                    <div class="accordion-body cuerpoAcordion">
                      <strong>Dependiendo de la forma de envío</strong>
                        <ul>
                          <li>Te devolvemos el dinero</li>
                            <li>Te cambiamos el producto</li>
                        </ul>
                        <p>Recordá, que <strong>NO</strong> nos hacemos responsables si vos enviaste mensajería a buscarlo</p>
                    </div>
                </div>
            </article>
            <article class="accordion-item">
                 <h2 class="accordion-header" id="headingFive">
                 <button class="accordion-button collapsed estiloAcordion" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    El producto no es lo que parecía en las fotos
                   </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionExample">
                    <div class="accordion-body cuerpoAcordion">
                     <strong>Si no cumple con tus expectativas</strong>
                        <p>Tenes 3 días hábiles para solicitar la devolución. En este caso el costo de envío queda a cargo del comprador.</p>
                    </div>
                </div>
            </article>
        </section>
        <div class="btn-whatsapp">
            <a href="https://api.whatsapp.com/send?phone=541162489798" target="_blank">
                <img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="">
            </a>
        </div>
    </main>


        `
    },
    postRender: () => { }
}

const ContactanosComponent = {
    render: () => {
        return `
         <main>
<section>
    <h2 class="titulosFondo"> CONTACTANOS </h2>
</section>
<section class="subtituloContacto">
    <p>Podemos ayudarte con algo? Escribinos!</p>
</section>
<section>
    <form id="contact-form" class="container estiloFormulario">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <div>
                    <input type="hidden" name="contact_number">
                </div>
                <div class="form">
                    <div class="form-group">
                        <label for="inputName" >Nombre</label>
                        <input type="name" name="user_name" class="form-control" id="inputName">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group eMailSize">
                        <label for="inputEmail4">Email</label>
                        <input type="email"  name="user_email" class="form-control" id="inputEmail4">
                    </div>
                </div>

                <div class="form-group col-md-6 textMensaje">
                    <label for="exampleFormControlTextarea1" name="message">Dejanos tu mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <button type="submit" value="Send" class="btn btnForm d-flex">Enviar</button>
            </div>
    </form>
</section>
<section class="textoContacto">
    <p>También podes mandarnos un whatsapp y te respondemos cuanto antes!!</p>
    <span class="wathsapp">
        <a href="https://api.whatsapp.com/send?phone=5491162489798&text=Hola!%20Te%20contacto%20desde%20la%20Web"
            target="_blank">+54 9 11 6248 9798</a>
    </span>
</section>

<section class="ubicacionContacto">
    <p>¿DÓNDE ESTAMOS?</p>
    <p>Estamos en el centro de Quilmes, en GBA Sur. No tenemos local pero hacemos envíos a todo el país y gratis
        15 KM. a la redonda</p>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.4125770690557!2d-58.256541285191!3d-34.71999342116577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e40826bd039%3A0x391d54df613bfa3d!2sQuilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1605304732235!5m2!1ses-419!2sar"
        width="100%" height="300px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
        tabindex="0"></iframe>
</section>
<div class="btn-whatsapp">
    <a href="https://api.whatsapp.com/send?phone=541162489798" target="_blank">
        <img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="">
    </a>
</div>
</main>

        `
    },
    postRender: () => {
        window.onload = function () {
            document.getElementById('contact-form').addEventListener('submit', function (event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('service_3dz67cg', 'contact_form', this)
                    .then(function () {
                        console.log('SUCCESS!');
                    }, function (error) {
                        console.log('FAILED...', error);
                    });
            });
        }
    }
}

const InicioSesionComponent = {
    render: () => {
        return `
        <main>
        <h2 class="titulosFondo"> INICIAR SESION </h2>
        <div class="container estiloSesion"
		<form id="formSesion" class="form row">
            <div class= "col-md-6">
                <div class="form-group estiloInput">
                    <label for="username">Email</label>
                    <input type="email" placeholder="a@gmail.com" id="emailSesion" />
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <div class="form-group estiloInput">
                    <label for="username">Contraseña</label>
                    <input type="password" placeholder="Contraseña" id="pwdSesion"/>
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <button class="form-button botonSesion" id= "botonSesion">Iniciar Sesion</button>
            </div>
		</form> 

        <p>No estas registrado? <a class="linkSesion" href="index.html#/registrarcuenta">Registrate</a></p>
		<div class="btn-whatsapp">
			<a href="https://api.whatsapp.com/send?phone=541162489798" target="_blank">
			<img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="">
			</a>
		</div>
	</main>
        `
    },
    postRender: () => {

        let usuariosRegistrados;

        let registro = localStorage.getItem("registro-personas")
        if (!registro) {
            usuariosRegistrados = []
        } else {
            usuariosRegistrados = JSON.parse(localStorage.getItem("registro-personas"));
        }

        let formSesion = document.getElementById("formSesion")
        let emailSesion = document.getElementById("emailSesion")
        let pwdSesion = document.getElementById("pwdSesion")

        formSesion.addEventListener("keyup", e => {
            e.preventDefault();
            iniciarSesion()
        })


        function iniciarSesion() {
            let usuarioMail = document.getElementById("emailSesion").value
            let contraseniaSesion = document.getElementById("pwdSesion").value;
            let usuarioSesion = usuariosRegistrados.filter((el) => el.email == usuarioMail)[0];

            let usuarioMailCheck = false;
            let contraseniaSesionCheck = false;

            if (usuarioMail === "") {
                usuarioMailCheck = mostrarError(emailSesion, "Ingresa tu email")
                console.log(usuarioMail)
            } else if (!usuarioSesion) {
                console.log(usuarioSesion)
                usuarioMailCheck = mostrarError(emailSesion, "Usuario no registrado")

            } else {
                usuarioMailCheck = valorVerificado(emailSesion)
            }

            if (contraseniaSesion === "") {
                contraseniaSesionCheck = mostrarError(pwdSesion, "Ingresa tu contraseña")
            } else if (contraseniaSesion != usuarioSesion.contrasenia) {
                contraseniaSesionCheck = mostrarError(pwdSesion, "La contraseña es incorrecta")
            }
            else {
                contraseniaSesionCheck = valorVerificado(pwdSesion)

            }

            if (usuarioMailCheck && contraseniaSesionCheck) {
                return true;
            }
        }

        function iniciarSesionOk(e) {
            e.preventDefault();
            let inicioOk = iniciarSesion()
            if (inicioOk) {
                window.location.href = "index.html#/productos"
            }
        }

        function mostrarError(input, mensaje) {
            let formInput = input.parentElement
            let mensajeError = formInput.querySelector("small")

            mensajeError.innerText = mensaje

            formInput.className = "form-group estiloInput error"
            return false;

        }

        function valorVerificado(input) {
            let formInput = input.parentElement
            formInput.className = "form-group estiloInput success"
            return true;

        }


        let botonSesion = document.getElementById("botonSesion")

        botonSesion.addEventListener("click", iniciarSesionOk);
    }
}


const RegistrarCuentaComponent = {
    render: () => {
        return `
        <main>
        <h2 class="titulosFondo"> MI CUENTA </h2>
        <div class="estiloSesion container"
		<form id="formVal" class="form row mostrarForm">
            <div class="col-md-6">
                <div class="form-group estiloInput ">
                    <label for="username">Nombre y apellido</label>
                    <input type="text" placeholder="Juan Perez" id="username" />
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <div class="form-group estiloInput">
                    <label for="username">Email</label>
                    <input type="email" placeholder="a@gmail.com" id="email" />
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <div class="form-group estiloInput">
                    <label for="username">Contraseña</label>
                    <input type="password" placeholder="Contraseña" id="password"/>
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <div class="form-group estiloInput">
                    <label for="username">Repeti la Contraseña</label>
                    <input type="password" placeholder="Repeti la Contraseña" id="passwordcheck"/>
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <button class="form-button botonSesion" id="boton">Crear cuenta</button>
            </div>
		</form>
        
		<p>Ya estas registrado? <a class="linkSesion" href="index.html#/iniciosesion">Inicia sesión</a> </p>
        
        <div id = "gracias"class="oculatarGracias ">
        <p>Gracias por registrarte</p>
         
        </div>


		<div class="btn-whatsapp">
			<a href="https://api.whatsapp.com/send?phone=541162489798" target="_blank">
			<img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="">
			</a>
		</div>
	</main>
        `
    },
    postRender: () => {
        let usuariosRegistrados;

        let registro = localStorage.getItem("registro-personas")
        if (!registro) {
            usuariosRegistrados = []
        } else {
            usuariosRegistrados = [];
            usuariosGuardados = JSON.parse(localStorage.getItem("registro-personas"));
            usuariosGuardados.forEach((el) => {
                let usuario = new Usuario();
                usuario.CrearDesde(el)
                usuariosRegistrados.push(usuario)
            });
        }

        let form = document.getElementById("formVal")
        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let passwordcheck = document.getElementById("passwordcheck");



        form.addEventListener("submit", e => {
            e.preventDefault();
            validarDatos()
        })


        function validarDatos() {

            let usernameValue = username.value.trim()
            let emailValue = email.value.trim()
            let passwordValue = password.value.trim()
            let passwordcheckValue = passwordcheck.value.trim()


            let usernameCheck = false;
            let emailCheck = false;
            let passwordCheck = false;
            let password2Check = false;

            if (usernameValue === "") {
                mostrarError(username, "No podes dejar el campo en blanco")
            } else {
                usernameCheck = valorVerificado(username)
            }

            if (emailValue === "") {
                mostrarError(email, "No podes dejar el campo en blanco")
            } else if (!validarEmail(emailValue)) {
                mostrarError(email, "Debes colorar un email valido")
            } else if (usuariosRegistrados.find((el) => el.email == emailValue)) {
                mostrarError(email, "Ya estas registrado")
            } else {
                emailCheck = valorVerificado(email)
            }

            if (passwordValue === "") {
                mostrarError(password, "No podes dejar el campo en blanco")
            } else {
                passwordCheck = valorVerificado(password)
            }

            if (passwordcheckValue === "") {
                mostrarError(passwordcheck, "No podes dejar el campo en blanco")
            } else if (passwordValue !== passwordcheckValue) {
                mostrarError(passwordcheck, "Las contraseñas deben coincidir")
            } else {
                password2Check = valorVerificado(passwordcheck)
            }

            if (usernameCheck && emailCheck && passwordCheck && password2Check) {
                return true;
            } else {
                return false;
            }

        }



        function mostrarError(input, mensaje) {
            let formInput = input.parentElement
            let mensajeError = formInput.querySelector("small")

            mensajeError.innerText = mensaje

            formInput.className = "form-group estiloInput error"
            return false;

        }

        function valorVerificado(input) {
            let formInput = input.parentElement
            formInput.className = "form-group estiloInput success"
            return true;

        }

        function validarEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }

        function mostrarGracias() {
            let datosOk = validarDatos()
            console.log(datosOk)
            if (datosOk) {
                let usernameValue = username.value.trim()
                let emailValue = email.value.trim()
                let passwordValue = password.value.trim()

                let usuario = new Usuario();
                usuario.CrearUsuario(usernameValue, emailValue, passwordValue)
                usuariosRegistrados.push(usuario);
                localStorage.setItem("registro-personas", JSON.stringify(usuariosRegistrados))

                let gracias = document.getElementById("gracias");
                gracias.classList.add("mostrarGracias");
                

                setTimeout(function(){ window.location.href = "index.html#/productos"; }, 1000);
               
            }
        }

        let botonEnviar = document.getElementById("boton")
        botonEnviar.addEventListener("click", mostrarGracias);



    }
}

const CheckoutComponent = {
    render: () => {
        return `
        <main>
        <div class="detalleCompra">
            <p> Detalle de tu compra </p>
        </div>    
        <div class=container"
            <div class= "row" id="carrito-final">

            </div>
            <div id="monto-final">


            </div>
        </div>
        <div class="cuotasEnvio">
            <p>Selecciona la cantidad de cuotas en las que queres abonar</p>

            <select id="cuotas">
                <option value="0">cuotas</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
            </select>



            <p id="aPagar"></p>


        </div>


        <div class="cuotasEnvio">
            <p>Seleccioná el metodo de envío</p>

            <select id="envios">
                <option value="0">envio</option>
                <option value="sucursal">sucursal</option>
                <option value="motoGba">Moto-gba</option>
                <option value="motoCaba">Moto-caba</option>
                <option value="otro">otro</option>
            </select>
            <p id="aPagarEnvio"></p>
        </div>
        <div class= "botonFinalizarC">    
             <button id="buttonCF" type="button" class="btn btn-primary " ><a>Finalizar Compra <a> </button>
        </div>
       
    </main>
        `
    },

    postRender: () => {
        //recuperar carrito final
        let carritoFinal = JSON.parse(localStorage.getItem("carrito"));

        let divCompraFinal = $("#carrito-final")

        let montoFinal = $("#monto-final")

        let valorTotal = carritoFinal.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

        let divTotal = document.createElement("div")
        divTotal.innerHTML = `
        <p class="finalTotal">Total: $<input id="monto-final" value=${valorTotal} disabled></input></p>
        `

        montoFinal.append(divTotal)

        carritoFinal.forEach((el) => {
            agregarCompraFinal(el)
        })

        function agregarCompraFinal(prodComprado) {
            let subtotal = prodComprado.cantidad * prodComprado.precio
            let div = document.createElement("div")
            div.classList.add("estiloCompraFinal", "col-md-12")
            div.innerHTML = `
        <p>${prodComprado.nombre}</p>
        <img class="imgCarrito"src=${prodComprado.imagen}>
        <p> Precio : <input id="precio-${prodComprado.id}}" class="precio" value="${prodComprado.precio}" disabled> </p> 
        <p> Cantiad: <input type="number" min=1 id="cantidad-${prodComprado.id}}" class="cantidad" value=${prodComprado.cantidad} disabled></p>
        <p> Subtotal Producto <input id="subtotal-${prodComprado.id}" class="subtotal" value=${subtotal} disabled > </input></p>
        `
            divCompraFinal.append(div)
        }

        let listaCuotas = document.getElementById("cuotas")
        listaCuotas.addEventListener("change", calcularInteres)

        function calcularInteres() {
            let cuotaInput = document.getElementById("cuotas").value;
            let cuotas = parseInt(cuotaInput)
            let totalPagar = calcularCuotas(cuotas)

            document.getElementById("aPagar").innerHTML = `
        <p class="textoCE"> Este es tu nuevo total </p>
        <p>$<input id="totalMasCuotas" value=${totalPagar} disabled> </input>
        `
        }


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
            }
            return valorTotal * interes;
        }

        let envio = document.getElementById("envios")
        envio.addEventListener("change", precioFinal)


        function precioFinal() {
            //segun lo que selecciones de nevio te calculo
            let envio = document.getElementById("envios").value;
            let totalConEnvio = calcularEnvio(envio)

            document.getElementById("aPagarEnvio").innerHTML = `
                <p class="textoCE"> Este es tu total final </p>
                <p>$<input id="totalMasEnvio" value=${totalConEnvio} disabled> </input>
                `

        }


        function calcularEnvio(envio) {
            let valorConCuotas = document.getElementById("totalMasCuotas").value
            console.log("ver este valor " + valorConCuotas)
            let metodoEnvio;
            switch (envio) {
                case 'sucursal':
                    metodoEnvio = 0;
                    break;
                case 'motoGba':
                    metodoEnvio = 200;
                    break;
                case "motoCaba":
                    metodoEnvio = 350;
                    break;
                case "otro":
                    metodoEnvio = 0;
                    break;
            }
            return parseInt(valorConCuotas) + parseInt(metodoEnvio);

        }

        let botonFinal=document.getElementById("buttonCF")
        botonFinal.addEventListener("click", mensajeFinal)

        function mensajeFinal(e){
            e.preventDefault();


            window.location.href = "index.html#/gracias"
        

        }

    }
}

const GraciasComponent = {
    render: () => {
        return `
        <main>
	
			<div class="graciasCompra">
               <p> Gracias por tu compra. Por favor ponete en contacto con nosotros enviándonos un mail a info.cretahome@gmail.com  para coordinar el envío.</p>
		    </div>
	    </main>
        `
    },
    postRender: () => { }
}


// RUTAS
const routes = [
    { path: '/', component: IndexComponent },
    { path: '/productos', component: ProductosComponent },
    { path: '/nosotros', component: NosotrosComponent },
    { path: '/pregfrecuentes', component: PreguntasComponent },
    { path: '/contactanos', component: ContactanosComponent },
    { path: '/iniciosesion', component: InicioSesionComponent },
    { path: '/registrarcuenta', component: RegistrarCuentaComponent },
    { path: '/checkout', component: CheckoutComponent },
    { path: '/gracias', component: GraciasComponent },

]


// ROUTER
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'
const findComponentByPath = (path) => routes.find(el => el.path.match(path)) || undefined;

const router = () => {
    const route = findComponentByPath(parseLocation())

    if (route == undefined) {
        document.getElementById('main').innerHTML = ErrorComponent.render()
    } else {
        document.getElementById('main').innerHTML = route.component.render()
        route.component.postRender()
    }
}

window.addEventListener('load', router)
window.addEventListener('hashchange', router)