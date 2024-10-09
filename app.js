// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const swiper = new Swiper(".section-services .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: 3,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiper2 = new Swiper(".section-people .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".section-people .swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".section-people .swiper-button-next",
    prevEl: ".section-people .swiper-button-prev",
  },
});

/// Function to increment the counter
function incrementCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const current = +counter.innerText;
  const increment = target / 200; // Adjust 200 for the speed of the increment

  if (current < target) {
    counter.innerText = Math.ceil(current + increment);
    setTimeout(() => {
      incrementCounter(counter);
    }, 10); // Adjust the 10ms for the speed
  } else {
    formatCounter(counter, target); // Format after reaching the target
  }
}

// Function to format the counter
function formatCounter(counter, target) {
  if (target >= 1000) {
    counter.innerText = "+" + (target / 1000) + "k"; // Format to "k"
  } else {
    counter.innerText = "+" + target; // Just display the number
  }
}

// Function to observe the section when it becomes visible
function observeCounters() {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          incrementCounter(counter);
          observer.unobserve(counter); // Stop observing after increment is done
        }
      });
    },
    { threshold: 1 }
  ); // Adjust the threshold based on when you want to trigger

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}

document.addEventListener("DOMContentLoaded", observeCounters);
