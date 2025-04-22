const animatedElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animatedElements.forEach(el => observer.observe(el));


const texts = ["مرحبًا بك!", "في موقعنا", "نحن نهتم بك!"];
let index = 0;
const textEl = document.getElementById("changing-text");

setInterval(() => {
  index = (index + 1) % texts.length;
  textEl.textContent = texts[index];
}, 2500);


const btn = document.getElementById("backToTop");

window.onscroll = () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
