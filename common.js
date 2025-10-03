// HTML dell'header
const headerHTML = `
<header>
    <div class="header-top">
        <button class="menu-toggle" aria-label="Toggle menu">☰</button>
        <div class="logo">Impresa Edile Ronco Andrea S.r.l.</div>
        <div class="contact-quick">
            <a href="tel:0141948986">📞 0141 948986</a>
            <a href="tel:3387811190">📱 338 7811190</a>
            <a href="contatti.html">💬 WhatsApp</a>
        </div>
    </div>

    <nav>
        <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="chi-siamo.html">CHI SIAMO</a></li>
            <li><a href="servizi.html">SERVIZI</a></li>
            <li><a href="settori.html">SETTORI DI ATTIVITÀ</a></li>
            <li><a href="progetti.html">PROGETTI</a></li>
            <li><a href="certificazioni.html">CERTIFICAZIONI</a></li>
            <li><a href="news.html">NEWS</a></li>
            <li><a href="contatti.html">CONTATTI</a></li>
            <li><a href="lavora-con-noi.html">LAVORA CON NOI</a></li>
        </ul>
    </nav>
</header>
`;

// HTML del footer
const footerHTML = `
<footer>
    <h3>Impresa Edile Ronco Andrea S.r.l.</h3>
    <p>Specialisti in rimozione amianto e servizi edili completi</p>
    <p>Corso Umberto I, 28 - 14010 Dusino San Michele (AT)</p>
    <p>Tel: 0141 948986 | Mobile: 338 7811190</p>
    <p style="margin-top: 20px; opacity: 0.7;">&copy; 2024 Impresa Edile Ronco Andrea S.r.l. - P.IVA XXXXXXXX |
        <a href="#">Privacy Policy</a> |
        <a href="#">Cookie Policy</a>
    </p>
</footer>
`;

// Carica header e footer
document.addEventListener('DOMContentLoaded', function() {
    // Inserisci header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    // Inserisci footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Evidenzia la pagina corrente nel menu
    highlightCurrentPage();

    // Inizializza il menu hamburger
    initMobileMenu();
});

// Evidenzia la pagina corrente nel menu
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Inizializza il menu hamburger per mobile
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        // Toggle menu quando si clicca sul pulsante
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        // Chiudi menu quando si clicca su un link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
            });
        });
    }
}
