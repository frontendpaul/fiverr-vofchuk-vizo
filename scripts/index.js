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
const dropdownLink = document.querySelector(".has-dropdown > a");
const submenu = document.querySelector('.submenu');

dropdownLink.addEventListener('click', function (e) {
  // this.parentElement
  //   .querySelector(".submenu")
  //   .classList.toggle("active"),
  // this.classList.toggle("open");
  dropdownLink.classList.toggle('open');
  submenu.classList.toggle('active');
  e.stopPropagation();
});

// Clicking outside will hide submenu
// Working by event bubbling
document.addEventListener('click', (e) => {
  dropdownLink.classList.remove('open');
  submenu.classList.remove('active');
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


// Form handler
const formNextBtns = document.querySelectorAll('.form-btn[name="next"]');

for (const formNextBtn of formNextBtns) {
  formNextBtn.addEventListener('click', (e) => {
    const targetIdNbr = parseInt(e.target.closest('.form-page').id.match(/\d+/)[0]);

    document.querySelector(`#form-page-${targetIdNbr}`).classList.toggle('active');
    document.querySelector(`#form-page-${targetIdNbr+1}`).classList.toggle('active');

    // Handle Progressbar
    document.querySelector(`#progressbar-item-${targetIdNbr+1}`).classList.toggle('active');
  })  
}