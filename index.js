function Enviar(){
    let contraseña = document.getElementById("Password").value;
    let contraseña2 = document.getElementById("Password2").value;

    if (contraseña == contraseña2){
        alert("contraseña confirmada.");

    }
    else{
        alert("las contraseñas no coinciden, intenta de nuevo.");
        document.getElementById("Password").value = "";
        document.getElementById("Password2").value = "";
    }
    
}