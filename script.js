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
  card.addEventListener('click', (e) => {
    // Prevent reopening if already expanded
    if (card.classList.contains('expanded')) return;

    // Add overlay class to body
    document.body.classList.add('modal-open');

    // Expand card
    card.classList.add('expanded');

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    card.appendChild(closeBtn);

    // Close on close button click
    closeBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      closeCard(card, closeBtn);
    });

    // Close on outside click
    setTimeout(() => {
      document.addEventListener('click', outsideClickHandler);
    }, 0);

    function outsideClickHandler(event) {
      if (!card.contains(event.target)) {
        closeCard(card, closeBtn);
        document.removeEventListener('click', outsideClickHandler);
      }
    }
  });

  function closeCard(card, closeBtn) {
    card.classList.add('closing');
    document.body.classList.remove('modal-open');
    document.body.classList.add('modal-closing');

    setTimeout(() => {
      card.classList.remove('expanded', 'closing');
      document.body.classList.remove('modal-closing');
      if (closeBtn) closeBtn.remove();
    }, 400);
  }
});

// Close card with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const expandedCard = document.querySelector('.achievement-card.expanded');
    if (expandedCard) {
      const closeBtn = expandedCard.querySelector('.close-btn');
      expandedCard.classList.add('closing');
      document.body.classList.remove('modal-open');
      document.body.classList.add('modal-closing');

      setTimeout(() => {
        expandedCard.classList.remove('expanded', 'closing');
        document.body.classList.remove('modal-closing');
        if (closeBtn) closeBtn.remove();
      }, 400);
    }
  }
});
