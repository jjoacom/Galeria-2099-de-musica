// Código existente para cambiar el color del Tema
const modeToggleButton = document.querySelector('button');
const icon = document.querySelector('button span');

function toggleMode() {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        icon.textContent = 'dark_mode';
        localStorage.setItem('theme', 'light');
    } else {
        icon.textContent = 'light_mode';
        localStorage.setItem('theme', 'dark');
    }
}

modeToggleButton.addEventListener('click', toggleMode);

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    icon.textContent = 'light_mode';
} else {
    icon.textContent = 'dark_mode';
}

// Nuevo código para el menú
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('active');
});
