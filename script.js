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
    navbarIcon.src = 'https://cdn-icons-png.flaticon.com/512/6714/6714978.png';  // dark icon for navbar button
  } else {
    // Light mode enabled
    navbarIcon.src = 'https://cdn.iconscout.com/icon/free/png-256/free-modo-escuro-6888661-5645488.png?f=webp';  // light icon for navbar button
  }
});

  document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.navbar');
  
  // Create progress bar element if it doesn't exist
  let progressBar = document.getElementById('progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    document.body.prepend(progressBar);
  }

  // Apply necessary styles (can also stay in CSS, but here if you want JS only)
  Object.assign(progressBar.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '4px',
    background: '#00ffff',
    width: '0%',
    zIndex: '999',
    transition: 'width 0.25s ease-out'
  });

  function onScroll() {
    const scrollY = window.scrollY;

    // Expand/shrink navbar
    if (scrollY === 0) {
      navbar.classList.remove('expanded');
    } else {
      navbar.classList.add('expanded');
    }

    // Update scroll progress bar
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + "%";
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Run on page load
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-container').forEach(container => {
    const track = container.querySelector('.carousel-track');
    const btnLeft = container.querySelector('.carousel-btn.left');
    const btnRight = container.querySelector('.carousel-btn.right');

    btnLeft.addEventListener('click', () => {
      const slideWidth = getSlideWidth(track);
      track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      const slideWidth = getSlideWidth(track);
      track.scrollBy({ left: slideWidth, behavior: 'smooth' });
    });

    // Utility function to get full width of one slide including margin
    function getSlideWidth(trackElement) {
      const slide = trackElement.querySelector('.certificate-slide');
      if (!slide) return 250; // fallback width

      const style = window.getComputedStyle(slide);
      const marginRight = parseFloat(style.marginRight) || 0;
      return slide.offsetWidth + marginRight;
    }
  });
});

