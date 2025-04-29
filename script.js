// Intersection Observer to detect scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2 // 20% of the section must be visible
});

sections.forEach(section => {
  observer.observe(section);
});
