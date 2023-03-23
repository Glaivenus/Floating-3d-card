const images = document.querySelectorAll('.floating-image');

window.onmousemove = function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  images.forEach((image, index) => {
    const factor = index + 1;
    const offsetX = (centerX - x) / (22 * factor);
    const offsetY = (centerY - y) / (22 * factor);
    image.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
  });
};