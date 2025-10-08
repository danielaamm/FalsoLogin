let btnEntrar=document.getElementById("entrar");
function iniciarSesion(){
    let correo=document.getElementById("correo").value;
    let numero2=document.getElementById("contra").value;

    let validacion=document.getElementById("validacion");
    if(correo=="" || contra==""){
        validacion.innerHTML="<p>Los campos no pueden estar vacios</p>";
    }else{
        validacion.innerHTML="Bienvenido";
    }

}
btnEntrar.addEventListener("click", iniciarSesion);