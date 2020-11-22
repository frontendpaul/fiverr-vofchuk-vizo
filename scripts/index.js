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

document.querySelector(".has-dropdown > a").addEventListener('click', function () {
  this.parentElement
    .querySelector(".submenu")
    .classList.toggle("active"),
    this.classList.toggle("open");
});

document.querySelector('.menutrigger').addEventListener('click', function () {
  document.querySelector('.header').classList.add('menu-open');
})

document.querySelector('.close-menu').addEventListener('click', function () {
  document.querySelector('.header').classList.remove('menu-open');
})
