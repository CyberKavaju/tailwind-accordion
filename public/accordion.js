

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");

    const panel = accordion.nextElementSibling;
    if(panel.classList.contains('hidden')) {
      panel.classList.remove('hidden');
      panel.classList.add('block');
    } else {
      panel.classList.remove('block');
      panel.classList.add('hidden');
    }

  });
});
