// Example: Highlighting tips when clicked
const tipsList = document.querySelectorAll('ol li');
tipsList.forEach((tip) => {
  tip.addEventListener('click', () => {
    tip.classList.toggle('highlight');
  });
});
