// Slider and Popup  JQuery Start

// $(document).ready(function () {
//     // Testimonial Slider
//     $(".slider").slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       infinite: true,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       dots: true,
//       arrows: true,
//       responsive: [
//         {
//           breakpoint: 1030,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     });

//     // Service Slider
//     $(".service_slider").slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       infinite: true,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       dots: true,
//       arrows: true,
//       responsive: [
//         {
//           breakpoint: 1030,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     });

//     // SEO Difference Cards
//     $(".seoDiff_card_con").slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       infinite: true,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       dots: true,
//       arrows: true,
//       responsive: [
//         {
//           breakpoint: 1030,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     });

//     // Our Process Card Slider
//     $(".ourProcess_card_con_slider").slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       infinite: true,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       dots: true,
//       arrows: true,
//       responsive: [
//         {
//           breakpoint: 1030,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     });

//     // Popup
//     $("#fade").popup({
//       transition: "all 0.3s",
//       closebutton: true,
//     });
//   });

// Slider and Popup  JQuery End

// Locomotive JS Start

let scroll;

// window.addEventListener("load", () => {
//   const scrollContainer = document.querySelector("[data-scroll-container]");

//   scroll = new LocomotiveScroll({
//     el: scrollContainer,
//     smooth: true,
//     smartphone: {
//       smooth: true,
//     },
//     tablet: {
//       smooth: true,
//     },
//   });

//   // Contact Button Show/Hide on Scroll
//   scroll.on("scroll", (args) => {
//     const scrollY = args.scroll.y;
//     const windowHeight = window.innerHeight;
//     const $btn = document.getElementById("absolute_contact_btn");

//     if (scrollY >= windowHeight) {
//       $btn.classList.add("show");
//     } else {
//       $btn.classList.remove("show");
//     }
//   });

//   // Anchor link smooth scroll
//   document.querySelectorAll(".scroll-link").forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       const targetId = link.getAttribute("href");
//       scroll.scrollTo(targetId);
//     });
//   });

//   // Update scroll on resize
//   window.addEventListener("resize", () => {
//     scroll.update();
//   });

//   // Extra safety update for media/content loads
//   setTimeout(() => {
//     scroll.update();
//   }, 1500);
// });

// Locomotive JS End

// cash study start

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";

  evt.currentTarget.className += " active";
}

// cash study End

// FAQ Accordion Start

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

// FAQ Accordion End

// mobile flowting btn js start

const mainBtn = document.getElementById("mainBtn");
const btnContainer = document.querySelector(".floating-btn-container");

mainBtn.addEventListener("click", () => {
  btnContainer.classList.toggle("show");
});

// mobile flowting btn js End
