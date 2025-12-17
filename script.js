const items = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

items.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = items.scrollLeft;
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const x = e.pageX;
  const walk = startX - x; // drag left → scroll right
  items.scrollLeft = scrollLeft + walk;
});

document.addEventListener('mouseup', () => {
  isDown = false;
});





