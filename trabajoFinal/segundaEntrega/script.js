//parea registrar un usuario
function Usuario(nombre, email, contrasenia) {
    this.id = Math.floor(Math.random() * 100);;
    this.nombre = nombre;
    this.email = email;
    this.contrasenia = contrasenia;
}

let usuariosRegistrados;

let registro = localStorage.getItem("registro-personas")
if (!registro) {
    usuariosRegistrados = []
} else {
    usuariosRegistrados = JSON.parse(localStorage.getItem("registro-personas"));
}



function validarDatos(e) {
    e.preventDefault();
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contrasenia = document.getElementById("pwd").value;
    let verificarContra = document.getElementById("checkpswd").value;
    let mensajeError = [];
    let error = document.getElementById("error")
    error.style.color = "red";

    if (nombre === null || nombre == "") {
        mensajeError.push("Ingresa tu nombre")
    }
    if (email === null || email === "") {
        mensajeError.push("Ingresa tu email")
    }
    if (usuariosRegistrados.find((el) => el.email == email)) {
        mensajeError.push("Ya estas registrado")
    } else if (contrasenia === null || contrasenia === "") {
        mensajeError.push("Ingresa tu contraseña")
    }

    if (contrasenia !== verificarContra) {
        mensajeError.push("Las contraseñas no coinciden")
    }


    error.innerHTML = mensajeError.join(" , ")

    if (mensajeError == "") {

        usuariosRegistrados.push(new Usuario(nombre.value, email, contrasenia));
        localStorage.setItem("registro-personas", JSON.stringify(usuariosRegistrados))
        mostrarGracias();
    }
}

function mostrarGracias() {
    let gracias = document.getElementById("gracias");
    gracias.classList.add("mostrarGracias");
    let form = document.getElementById("form");
    form.classList.add("ocultarForm")
}

let botonEnviar = document.getElementById("boton")

botonEnviar.addEventListener("click", validarDatos);


