function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // Verificar las credenciales (aquí puedes agregar tu lógica de validación)
  if (username === "pepe" && password === "botellas") {
    document.getElementById("message").textContent = "¡Inicio de sesión exitoso!";
    window.location.href = "inicio.html"; // Redirigir a la página de inicio
  } else {
    document.getElementById("message").textContent = "Usuario o contraseña incorrectos. Por favor, intenta de nuevo.";
  }
}