
document.getElementById("btnRegistrate").addEventListener("click", function(event){
    event.preventDefault();
    let nombre = document.getElementById("registrate-nombre").value;
    let correo= document.getElementById("registrate-correo").value;
    let password = document.getElementById("registrate-password").value;
   

        user['nombre'] = nombre;
        user['correo'] = toLowerCase(correo);
        user['password'] = password;
    
    }
)

document.getElementById("btnRegistrate").addEventListener("click", function(event){
    event.preventDefault();
    alert("Usuario creado con éxito")
    location.href= "./index.html";
})


