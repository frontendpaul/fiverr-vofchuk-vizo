   
var gallery = [{
  title: "Porfolio image 1",
  description: "description.",
src: "./assets/porfolio/big/portfolio-1.jpg"
},{
  title: "Porfolio image 2",
  description: "description.",
src: "./assets/porfolio/big/portfolio-2.jpg"
},{
  title: "Porfolio image 3",
  description: "description.",
src: "./assets/porfolio/big/portfolio-3.jpg"
},{
  title: "Porfolio image 4",
  description: "description.",
src: "./assets/porfolio/big/portfolio-4.jpg"
},{
  title: "Porfolio image 5",
  description: "description.",
src: "./assets/porfolio/big/portfolio-5.jpg"
},{
  title: "Porfolio image 6",
  description: "description.",
src: "./assets/porfolio/big/portfolio-6.jpg"
}];

document.querySelector('.slider').addEventListener('click', (e) => {
  const id = e.target.querySelector('.thumbnail-img').className.match(/\d+/)[0];
  Spotlight.show(gallery, {
    index: id,
    autohide: false,
    control: ["zoom"]
    });
});