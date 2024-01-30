import { observer } from "./observer.js"; //no use

const node = (id) => document.querySelector(id); //Se define una notación más sencilla

//DOM elements
const navbarBtn = node("#navbar__btn");
const navbar_mobile_menu = document.getElementById("navbar_mobile-menu");
const loader = document.getElementById("loader");
const imgIcon = document.getElementsByClassName("footer__img");
const page = document.querySelector(".page");
const modal = node(".modal");
const btnCloseModal = node("#btn-close-modal");

//EVENTS
//Open mobile menu
navbarBtn.addEventListener("click", openMenu);

//Add transition event to the loader
loader.addEventListener("animationend", function () {
  // when loder's animation ends it will change properties of page and loader
  loader.classList.add("hidden");
  page.classList.add("visible");
});

//Open modal
const imgArray = [...imgIcon]; //Destructuring
imgArray.map((item) => {
  item.addEventListener("click", openModal);
});

//Close modal
btnCloseModal.addEventListener("click", closeModal);

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
  const imgList = document.querySelectorAll(".cards__img");
  const list = [...imgList];
  if (event.target.id === "elfend-img") {
    list[0].src = "./assets/guilty/jam.png";
    list[1].src = "./assets/guilty/eddi.png";
    list[2].src = "./assets/guilty/phele.png";
  } else if (event.target.id === "iori-img") {
    list[0].src = "./assets/kof/athena.png";
    list[1].src = "./assets/kof/leona.png";
    list[2].src = "./assets/kof/ralf.png";
  } else {
    list[0].src = "./assets/street/sakura.png";
    list[1].src = "./assets/street/cody.png";
    list[2].src = "./assets/street/Ibuki.png";
  }
  modal.classList.add("modal-visible");
}

function closeModal() {
  modal.classList.remove("modal-visible");
}
