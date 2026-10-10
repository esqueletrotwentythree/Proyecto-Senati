// LLAMAMOS A LOS DOS INPUTS
const inputEmail = document.querySelector("#email") //Input de Email
const inputPass = document.getElementById("password") // Input de la Clave
const btnEnviar = document.querySelector(".btn-submit") //Input del FORM
// Creamos el evento de Enviar(submit)
btnEnviar.addEventListener("click", function(){
    // Obtener los valores de los input
    const correo = inputEmail.value 
    const clave = inputPass.value
    // Validación 1: Comprobar si los campos estan vacios
    if(correo === ''|| clave === ''){
        alert("Error: Debes completar todos los campos.")
        return
    }
    //Validación 2: La clave solo se debe permitir 9 digitos
    if(clave.length < 9){
        alert("Error: La contraseña debe ser menor de 9 digitos.")
        return
    }
    //Datos predeterminados
    const useremail = "admin@gmail.com"
    const userpass = "123456789"

    //VALIDACION DE CREDENCIALES
    if(correo === useremail && clave === userpass){   //VERDADERO
        window.location.href = "http://www.tiktok.com"
    }else{
        alert("El usuario  contraseña es incorrecta")
    }
})

// console.log(inputEmail, inputPass)
// console.log()

