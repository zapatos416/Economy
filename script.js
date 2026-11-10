/**
 * Script de Interactividad - Ignacio Informa
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Plataforma Ignacio Informa inicializada correctamente.");

    const newsletterBtn = document.getElementById('newsletterBtn');

    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', () => {
            newsletterBtn.textContent = '¡Suscrito con Éxito!';
            newsletterBtn.style.background = 'linear-gradient(135deg, #059669, #047857)';
            newsletterBtn.disabled = true;
            console.log("Usuario suscrito al boletín de noticias de forma exitosa.");
        });
    }
});
