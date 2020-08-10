// import macy from Macy;
var macy = Macy({
  container: ".projects__container",
  trueOrder: false,
  columns: 3,
  margin: 100,
  breakAt: {
    1000: {
      columns: 2,
    },
    760: {
      columns: 1,
      margin: 10,
    },
  },
});

// fade in navbar effect
const sectionOne = document.querySelector(".about");
const navigation = document.querySelector(".navigation");
const bottomOfNav = sectionOne.offsetTop - navigation.offsetHeight;

const changeColor = () => {
  if (window.scrollY >= bottomOfNav) {
    navigation.classList.add("nav-scrolled");
    activateCounter();
  } else {
    navigation.classList.remove("nav-scrolled");
  }
};

window.addEventListener("scroll", changeColor);

//counter
const activateCounter = () => {
  const counters = document.querySelectorAll(".statistics__number");
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = Math.round(target / speed);

      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 200);
      } else {
        count.innerText = target;
      }
    };
    updateCount();
  });
};

var testimonials = new Swiper(".testimonials-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

var blog = new Swiper(".blog__slider", {
  speed: 400,
  // spaceBetween: 100,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    // when window width is >= 480px
    660: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    // when window width is >= 640px
    820: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
