const btnDarkMode = document.getElementById('btn-dark-mode');
const htmlElement = document.documentElement;

btnDarkMode.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    

    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        btnDarkMode.textContent = '☀️ Modo Claro';
        btnDarkMode.classList.replace('btn-dark', 'btn-light');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        btnDarkMode.textContent = '🌙 Modo Oscuro';
        btnDarkMode.classList.replace('btn-light', 'btn-dark');
    }
});


const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {

    event.preventDefault(); 
    event.stopPropagation();


    if (form.checkValidity() === false) {
        alert("Faltan datos o hay algún error. Revisa los campos en rojo.");
    } else {
        alert("¡Todo correcto! Datos listos para enviar.");
        form.reset();
        form.classList.remove('was-validated');
        return;
    }


    form.classList.add('was-validated');
});