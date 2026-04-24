// =============================================
//  SIAB — Système Intelligent pour Bacheliers
//  main.js — Ahmadou Bamba LO — Groupe 5 ISI
// =============================================

// 1. Menu mobile : afficher/masquer la navigation
const navLinks = document.querySelector('.nav-links');
const navLogo = document.querySelector('.nav-logo');

navLogo.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 2. Transition fluide entre les pages
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  setTimeout(() => { document.body.style.opacity = '1'; }, 50);
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto')) {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = href; }, 400);
    }
  });
});

// 3. Navbar : changer l'apparence au scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// 4. Message de bienvenue dans la console
console.log('SIAB — Groupe 5 ISI Dakar | Développé par Ahmadou Bamba LO');