function mostrarAlerta() {
  alert("Se envió un correo para restablecer tu contraseña");
}

document.addEventListener("DOMContentLoaded", function () {
  // Obtén el formulario y agrega un evento submit
  var form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    // Obtén el valor del campo de correo
    var email = document.getElementById("email").value;

    // Verifica si el campo de correo está lleno
    if (email.trim() === "") {
      // Evita que se envíe el formulario si el campo está vacío
      event.preventDefault();
      alert("Por favor, ingresa tu correo antes de recuperar la contraseña");
    } else {
      // Llama a la función mostrarAlerta solo si el campo de correo está lleno
      mostrarAlerta();
    }
  });
});
