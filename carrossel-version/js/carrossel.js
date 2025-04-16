const items = document.querySelectorAll('.carousel-item');
let current = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.remove('active');
  });
  items[index].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % items.length;
  showItem(current);
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  showItem(current);
});

// Mostrar o primeiro item inicialmente
showItem(current);