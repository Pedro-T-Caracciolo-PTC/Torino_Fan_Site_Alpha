const container = document.getElementById('deslize');
let startX;
let isDown = false;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
});

container.addEventListener('mouseup', (e) => {
  if (!isDown) return;
  isDown = false;

  const endX = e.pageX;
  const distance = startX - endX;
  const threshold = 1; // The minimum drag distance (in pixels) required to flip a page

  if (distance > threshold) {
    // Flicked Left -> Move to the Next page
    container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  } else if (distance < -threshold) {
    // Flicked Right -> Go back to the Previous page
    container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  }
});

container.addEventListener('mouseleave', () => {
  isDown = false;
});