function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

const popUpTexts = document.querySelectorAll('.popup');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        delay(250).then(() => entry.target.classList.add('visible'));
    }
  });
}, { threshold: 0.5 });

popUpTexts.forEach(text => {
  observer.observe(text);
});