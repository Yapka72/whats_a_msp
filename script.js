const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }
  },
  {
    threshold: 0.2,
  }
);

for (const item of revealItems) {
  observer.observe(item);
}
