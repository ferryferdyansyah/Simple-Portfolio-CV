// Toogle class active
const Navigation = document.querySelector('.navigation');
// ketika humberger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    Navigation.classList.toggle('active');
};

// klik di luar sidebar untuk menutup toogle
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !Navigation.contains(e.target)) {
        Navigation.classList.remove('active');
    }
})