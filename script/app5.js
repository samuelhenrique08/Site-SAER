// Menu mobile dropdown
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        const aberto = nav.classList.toggle('aberto');
        menuToggle.setAttribute('aria-expanded', aberto);
        menuToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    // Fecha ao clicar num link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('aberto');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}