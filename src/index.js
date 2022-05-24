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


// VALGT KNAP STYLING - MASKINER
// grab all the MachineButtons
let MachineButtons = document.querySelectorAll(".selectSectionMachines button");

// loop through the buttons using for..of
for (let button of MachineButtons) {
  // listen for a click event
  button.addEventListener("click", (e) => {
    // Store the event target in a const
    const et = e.target;

    // select activeMachines class
    const activeMachines = document.querySelector(".activeMachines");

    /* when a button is clicked, remove the active class 
  from the button that has it */
    if (activeMachines) {
      activeMachines.classList.remove("activeMachines");
    }

    // Add activeMachines class to the clicked element
    et.classList.add("activeMachines");

    // select all classes with the name content
    let allContentMachines = document.querySelectorAll(".contentMachines");

    // loop through all content classes
    for (let contentMachines of allContentMachines) {
      /* display the content if the value in the data attribute of the button and content are the same */
      if (
        contentMachines.getAttribute("data-number") ===
        button.getAttribute("data-number")
      ) {
        contentMachines.style.display = "block";
      }

      // if it's not equal then hide it.
      else {
        contentMachines.style.display = "none";
      }
    }
  });
}


// POP UP LÆG I KURV
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
