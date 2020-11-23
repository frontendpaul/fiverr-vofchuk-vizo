// Sticky header handler
window.addEventListener("scroll", function () {
  window.scrollY > 20
    ? (document
        .querySelector(".header")
        .classList.add("sticky"),
      document
        .querySelector(".backto-top")
        .classList.add("active"))
    : (document
        .querySelector(".header")
        .classList.remove("sticky"),
      document
        .querySelector(".backto-top")
        .classList.remove("active"));
});

// Dropdown menu handler
document.querySelector(".has-dropdown > a").addEventListener('click', function () {
  this.parentElement
    .querySelector(".submenu")
    .classList.toggle("active"),
    this.classList.toggle("open");
});
// Open menu
document.querySelector('.menutrigger').addEventListener('click', function () {
  document.querySelector('.header').classList.add('menu-open');
})
// Close menu
document.querySelector('.close-menu').addEventListener('click', function () {
  document.querySelector('.header').classList.remove('menu-open');
})
// Close if clicked link (dont close if its dropdown)
const mainMenuLinks = document.querySelectorAll('.main-menu li');
for (const mainMenuLink of mainMenuLinks) {
  mainMenuLink.addEventListener('click', function(e) {
    if (!e.target.parentElement.classList.contains('has-dropdown')) {
      document.querySelector('.header').classList.remove('menu-open');
    }
  })
}

// Counter
import { CountUp } from './countUp.min.js';

function countersHandler() {
  const options = {
    separator: '.',
    decimal: ',',
  };
  
  let counter1 = new CountUp('counter-1', 99, options);
  if (!counter1.error) {
    counter1.start();
  } else {
    console.error(counter1.error);
  }
  
  let counter2 = new CountUp('counter-2', 1000000, options);
  if (!counter2.error) {
    counter2.start();
  } else {
    console.error(counter2.error);
  }
  
  let counter3 = new CountUp('counter-3', 30, options);
  if (!counter3.error) {
    counter3.start();
  } else {
    console.error(counter3.error);
  }
}

let options = {
  rootMargin: '-50px',
  threshold: 1.0
}

let callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countersHandler();
      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector('.counter');
observer.observe(target);