let usuarios = [
    {
        nombre: "Elizabeth",
        password: "123456",
        correo: "eli123@gmail.com"
    },
    {
        nombre: "Daniel",
        password: "123456",
        correo: "Dani321p@gmail.com"
    },

]


document.getElementById("btnLogin").addEventListener("click", function(event){
    event.preventDefault();
    let nombre = document.getElementById("login-nombre").value;
    let password = document.getElementById("login-password").value;

    let encontrado = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)

    if(encontrado){
        alert("Usuario autenticado.");
        location.href= "./index.html";
    }else{
        alert("Datos incorrectos.");
    }
})

document.getElementById("btnCrearCuenta").addEventListener("click", function(event){
    event.preventDefault();
    location.href= "./cuenta.html";
})