// Scroll progress bar
const progressBar = document.getElementById('scroll-progress');
function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const percent = height > 0 ? (scrollTop / height) * 100 : 0;
  progressBar.style.width = percent + '%';
}
document.addEventListener('scroll', updateProgress);
updateProgress();

// Reveal-on-scroll animation
const revealEls = document.querySelectorAll('.reveal-up');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('revealed');
    }
  });
}
document.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// FAQ accordion
function toggleFaq(btn) {
  const answer = btn.parentElement.querySelector('.faq-a');
  const plus = btn.querySelector('.faq-plus');
  const isOpen = answer.style.display === 'block';

  if (isOpen) {
    answer.style.display = 'none';
    plus.textContent = '+';
  } else {
    answer.style.display = 'block';
    plus.textContent = '−';
  }
}
window.toggleFaq = toggleFaq;
