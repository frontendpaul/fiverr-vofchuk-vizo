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