document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const intro = document.getElementById("intro-animation");
    const main = document.getElementById("main-content");

    intro.classList.add("fade-out");

    // Espera o fade-out terminar (1s)
    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
    }, 1000);
  }, 2000); // Tempo que a intro aparece antes de sumir
});

const typed = new Typed('#typed', {
  strings: ['eficaz.', 'seguro.', 'veloz.'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 1000,
  loop: true
});
    


  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
var myObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aparecer");
    } else {
      entry.target.classList.remove("aparecer");
    }
  });
});

var elementos = document.querySelectorAll(".sumir, .sumir-1");

elementos.forEach(element => {
  myObserver.observe(element);
});