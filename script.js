function mostrarMensaje() {
    alert("¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. Nos contactaremos pronto.');
});
