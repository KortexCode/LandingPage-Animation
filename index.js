import { observer } from "./observer.js";

//DOM elements
const navbarBtn = document.getElementById("navbar__btn");
const navbar_mobile_menu = document.getElementById("navbar_mobile-menu");
const loader = document.getElementById("loader");
const imgIcon = document.getElementsByClassName("footer__img");
const page = document.querySelector(".page");

//Events
navbarBtn.addEventListener("click", openMenu);

// Agregar evento de transición al loader
loader.addEventListener("animationend", function () {
  // when loder's animation ends it will change properties of page and loader
  loader.classList.add("hidden");
  page.classList.add("visible");
});

//Destructuring
const imgArray = [...imgIcon];
console.log(imgArray);
imgArray.map((item) => {
  item.addEventListener("click", openModal);
});

//Observer
observer.observe(loader);
//Functions
function openMenu() {
  //Add or remove the class  "open-menu" to close or open the mobile menu.
  const open = navbar_mobile_menu.classList.contains("open-menu");
  if (open) {
    navbar_mobile_menu.classList.remove("open-menu");
  } else {
    navbar_mobile_menu.classList.add("open-menu");
  }
}

function openModal(event) {
  console.log("clikeado", event);
}
