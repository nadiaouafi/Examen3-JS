import { greet } from './utils.js';

const message = greet('name');
console.log(message);

// Exemple : afficher le message dans la page
const app = document.getElementById('app');
app.textContent = message;

function updateActiveLink() {
  const hash = window.location.hash || '#home'; 
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    if (link.getAttribute('href') === hash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}


updateActiveLink();

window.addEventListener('hashchange', updateActiveLink);