// extend a Siema class by two methods
// addDots - to create a markup for dots
// updateDots - to update classes on dots on change callback
class SiemaWithDots extends Siema {
  addDots() {
    // create a contnier for all dots
    // add a class 'dots' for styling reason
    this.dots = document.createElement("ul");
    this.dots.classList.add("slider-dots");

    // loop through slides to create a number of dots
    for (let i = 0; i < this.innerElements.length; i++) {
      // create a dot
      const dot = document.createElement("li");
      dot.innerHTML = `<button>${i+1}</button>`

      // add an event handler to each of them
      dot.addEventListener("click", () => {
        this.goTo(i);
      });

      // append dot to a container for all of them
      this.dots.appendChild(dot);
    }

    // add the container full of dots after selector
    this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
  }

  updateDots() {
    // loop through all dots
    for (let i = 0; i < this.dots.querySelectorAll("button").length; i++) {
      // if current dot matches currentSlide prop, add a class to it, remove otherwise
      const addOrRemove = this.currentSlide === i ? "add" : "remove";
      this.dots
        .querySelectorAll("li")
        [i].classList[addOrRemove]("active");
    }
  }
}


const mySiemaWithDots = new SiemaWithDots({
  selector: document.querySelector('.slides'),
  loop: true,
  perPage: {
    768: 2,
    1024: 3,
    1280: 4
  },
  onInit: function () {
    this.addDots();
    this.updateDots();  
  },
  onChange: function () {
      this.updateDots();  
  }
});

const prev = document.querySelector(".slider-prev");
  const next = document.querySelector(".slider-next");
  prev.addEventListener("click", () => mySiemaWithDots.prev());
  next.addEventListener("click", () => mySiemaWithDots.next());