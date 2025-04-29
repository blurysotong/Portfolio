const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // 👈 removes class on scroll out
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => {
  observer.observe(section);
});
