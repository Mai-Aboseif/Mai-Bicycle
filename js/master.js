// Select all nav links
const navLinks = document.querySelectorAll(".nav-link");

// Loop through each link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add the 'active' class to the clicked link
    this.classList.add("active");
  });
});

// Function to animate the counting
function countUp(element, start, end, duration) {
  let range = end - start;
  let stepTime = Math.abs(Math.floor(duration / range));
  let startTime = new Date().getTime();
  let endTime = startTime + duration;
  let timer = setInterval(function () {
    let now = new Date().getTime();
    let remaining = Math.max((endTime - now) / duration, 0);
    let value = Math.round(end - remaining * range);
    element.innerHTML = value;
    if (value === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Scroll event listener to trigger animation at a specific scroll position
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY; // Current scroll position
  const triggerPosition = 2100; // Replace with the scroll value you want

  if (scrollPosition >= triggerPosition) {
    let e1 = document.getElementById("chOne");
    let e2 = document.getElementById("chTwo");
    let e3 = document.getElementById("chThree");
    let e4 = document.getElementById("chFour");
    countUp(e1, 0, 1000, 1000);
    countUp(e2, 0, 200, 1000);
    countUp(e3, 0, 3000, 3000);
    countUp(e4, 0, 99, 4000);
    // Remove event listener after triggering once
    window.removeEventListener("scroll", arguments.callee);
  }
});

// Swiper

var swiperFeeds = new Swiper("#swiperx", {
  slidesPerView: 3,
  spaceBetween: 70,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: false,
  pagination: {
    el: "#pag",
    clickable: true,
  },
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: -55,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


