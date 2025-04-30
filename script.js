function expandCard(card) {
  // Clone the clicked card
  const clone = card.cloneNode(true);
  clone.classList.add('expanded');

  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.className = 'close-btn';
  closeBtn.onclick = () => {
    document.body.removeChild(clone);
    document.body.classList.remove('modal-open');
  };

  clone.appendChild(closeBtn);

  // Append to body
  document.body.appendChild(clone);
  document.body.classList.add('modal-open');
}

// Add click event listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('click', () => expandCard(card));
  });
});
