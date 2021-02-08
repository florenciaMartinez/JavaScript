let nombre = document.getElementById("name");
let email = document.getElementById("email")
let contrasenia = document.getElementById("pwd")
let verificarContra = document.getElementById("checkpswd")
let error = document.getElementById("error")
error.style.color = "red";
let botonEnviar = document.getElementById("boton")
let mensajeError = [];

function validarDatos(e) {
    e.preventDefault();

    if (contrasenia.value === null || contrasenia.value === "") {
        mensajeError.push("Ingresa tu contraseña")
    }
    if (contrasenia.value !== verificarContra.value) {
        mensajeError.push("Las contraseñas no coinciden")

    }
    if (nombre.value === null || nombre.value == "") {
        mensajeError.push("Ingresa tu nombre")
    }
    if (email.value === null || email.value === "") {
        mensajeError.push("Ingresa tu email")
    }

    error.innerHTML = mensajeError.join(" , ")

    if (mensajeError == ""){
        mostrarGracias();
    }
    
}

function mostrarGracias(){
    let gracias = document.getElementById("gracias");
    gracias.classList.add("mostrarGracias");
}


botonEnviar.addEventListener("click", validarDatos);

