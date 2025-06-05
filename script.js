// Active nav link on scroll (unchanged)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Typewriter effect (unchanged)
const words = [" Cheng Hsuan,", " an Enthusiast,", " a Programmer,", " a Gamer"];
const el = document.getElementById("typewriter");
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentWord = words[wordIndex];
  const visibleText = currentWord.substring(0, letterIndex);
  el.textContent = visibleText;

  if (!isDeleting && letterIndex < currentWord.length) {
    letterIndex++;
    setTimeout(typeLoop, 120);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(typeLoop, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeLoop, 800);
  }
}

window.onload = typeLoop;

// Hamburger menu toggle (unchanged)
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

const toggleBtn = document.getElementById('darkModeToggle');
const backgroundDiv = document.querySelector('.background');
const favicon = document.getElementById('favicon');
const navbarIcon = document.getElementById('navbarIcon');  // img inside the button

toggleBtn.addEventListener('click', () => {
  backgroundDiv.classList.toggle('dark');  // toggle dark class

  if (backgroundDiv.classList.contains('dark')) {
    // Dark mode enabled
    favicon.href = 'https://cdn-icons-png.flaticon.com/512/6714/6714978.png';  // dark favicon
    navbarIcon.src = 'https://cdn-icons-png.flaticon.com/512/6714/6714978.png';  // dark icon for navbar button
  } else {
    // Light mode enabled
    favicon.href = 'https://cdn.iconscout.com/icon/free/png-256/free-modo-escuro-6888661-5645488.png?f=webp'; // light favicon
    navbarIcon.src = 'https://cdn.iconscout.com/icon/free/png-256/free-modo-escuro-6888661-5645488.png?f=webp';  // light icon for navbar button
  }
});


  
  