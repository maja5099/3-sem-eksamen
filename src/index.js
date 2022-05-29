//   Tilbud + specialist sektion swiper
new Swiper(".swiper", {
  loop: true,
  spaceBetween: 32,
  slidesPerView: 1,
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

//   Trustpilot sektion swiper
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
      delay: 8000,
    },
    breakpoints: {
      640: {
        centeredSlides: true,
        slidesPerView: 1.5,
      },
      1024: {
        centeredSlides: false,
        slidesPerView: 2.5,
      },
    },
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  });
});

// COOKIE LUK KNAP
window.onload = () => {
  document.getElementById("close").onclick = function () {
    this.parentNode.remove();
    return false;
  };
};

// VALGT KNAP STYLING - KAFFE
// grab all the buttons
let Buttons = document.querySelectorAll(".selectSection button");

// loop through the buttons using for..of
for (let button of Buttons) {
  // listen for a click event
  button.addEventListener("click", (e) => {
    // Store the event target in a const
    const et = e.target;

    // select active class
    const active = document.querySelector(".active");

    /* when a button is clicked, remove the active class 
  from the button that has it */
    if (active) {
      active.classList.remove("active");
    }

    // Add active class to the clicked element
    et.classList.add("active");

    // select all classes with the name content
    let allContent = document.querySelectorAll(".content");

    // loop through all content classes
    for (let content of allContent) {
      /* display the content if the value in the data attribute of the button and content are the same */
      if (
        content.getAttribute("data-number") ===
        button.getAttribute("data-number")
      ) {
        content.style.display = "block";
      }

      // if it's not equal then hide it.
      else {
        content.style.display = "none";
      }
    }
  });
}





// FAVORIT HJERTE CLICK
var svg = document.querySelector(".svg");

svg.addEventListener("click", () => {
  svg.innerHTML = `                  
  <path fill="#6E5039" fill-rule="evenodd" d="M7.655 14.916L8 14.25l.345.666a.752.752 0 0 1-.69 0zm0 0L8 14.25l.345.666l.002-.001l.006-.003l.018-.01a7.643 7.643 0 0 0 .31-.17a22.08 22.08 0 0 0 3.433-2.414C13.956 10.731 16 8.35 16 5.5C16 2.836 13.914 1 11.75 1C10.203 1 8.847 1.802 8 3.02C7.153 1.802 5.797 1 4.25 1C2.086 1 0 2.836 0 5.5c0 2.85 2.045 5.231 3.885 6.818a22.075 22.075 0 0 0 3.744 2.584l.018.01l.006.003h.002z"></path>
  `;
});

// PRIS SKIFTER PÅ CLICK
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var p = document.getElementById("skiftMig");

btn1.addEventListener("click", () => {
  p.value = "my value"; // will just add a hidden value
  p.innerHTML = "55,00 kr";
});

btn2.addEventListener("click", () => {
  p.value = "my value"; // will just add a hidden value
  p.innerHTML = "99,00 kr";
});

btn3.addEventListener("click", () => {
  p.value = "my value"; // will just add a hidden value
  p.innerHTML = "189,00 kr";
});
