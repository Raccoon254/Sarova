const bars = document.getElementById('bars');
const dropdown = document.getElementById('dropdown');

bars.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        dropdown.classList.remove('show');
    }
});

