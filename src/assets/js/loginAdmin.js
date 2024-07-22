document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Credenciales de administrador predeterminadas
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
        alert('Login exitoso. Bienvenido Admin!');
        // Redirigir al panel de administración
        window.location.href = '../pages/admin.html';
    } else {
        alert('Credenciales incorrectas. Por favor, intente nuevamente.');
    }
});
