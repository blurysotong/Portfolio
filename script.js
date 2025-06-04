// Handle active nav link on scroll
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

const words = ["Cheng Hsuan,", "an Enthusiast,", "a Programmer,", "a Gamer"];
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
