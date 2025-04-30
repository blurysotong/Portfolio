// Section Scroll Reveal Animation
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => {
  observer.observe(section);
});

// Achievement Card Expand / Collapse
document.querySelectorAll('.achievement-card').forEach(card => {
  card.addEventListener('click', () => {
    // Don't re-expand if already expanded
    if (card.classList.contains('expanded')) return;

    // Add modal class for overlay background
    document.body.classList.add('modal-open');

    // Expand the card
    card.classList.add('expanded');

    // Create and append close button
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    card.appendChild(closeBtn);

    // Handle close on click
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent re-triggering card click
      card.classList.add('closing');
      document.body.classList.remove('modal-open');
      document.body.classList.add('modal-closing');

      setTimeout(() => {
        card.classList.remove('expanded', 'closing');
        document.body.classList.remove('modal-closing');
        closeBtn.remove();
      }, 400); // match CSS animation duration
    });
  });
});
