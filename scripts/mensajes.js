function mostrarAlerta() {
  alert("Se envió un correo para restablecer tu contraseña");
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    var email = document.getElementById("email").value;

    // Verifica si el campo de correo está lleno
    if (email.trim() === "") {
      event.preventDefault();
      
    } else {
      // Llama a la función mostrarAlerta solo si el campo de correo está lleno
      mostrarAlerta();
    }
  });
});
